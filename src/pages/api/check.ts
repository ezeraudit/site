import type { APIRoute } from 'astro';
import { Redis } from '@upstash/redis';
import { sampleData } from '../../data/sampleData';

const kvRestUrl = import.meta.env.UPSTASH_REDIS_KV_REST_API_URL;
const kvRestToken = import.meta.env.UPSTASH_REDIS_KV_REST_API_TOKEN;

const SUPABASE_URL = "https://msufgvqofnihylcnxyac.supabase.co";
const SUPABASE_SERVICE_KEY = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;

const kv = (kvRestUrl && kvRestToken)
  ? new Redis({ url: kvRestUrl, token: kvRestToken })
  : null;

const BACKEND_API = 'https://api.ezer.cc/api/tasks';
const BACKEND_TOKEN = import.meta.env.BACKEND_TOKEN;
const CACHE_EXPIRY = 30 * 24 * 60 * 60; // 30 days in seconds

/**
 * Helper to get user via Supabase Auth
 */
async function getSupabaseUser(cookies: string) {
  if (!cookies) return null;
  const match = cookies.match(/sb-msufgvqofnihylcnxyac-auth-token=([^;]+)/);
  if (!match) return null;

  try {
    const sessionData = JSON.parse(decodeURIComponent(match[1]));
    const accessToken = Array.isArray(sessionData) ? sessionData[0] : sessionData.access_token;

    if (!accessToken) return null;

    const resp = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'apikey': import.meta.env.PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_XMPIdUpNn_dPH7iKdGK_Zg_J8InT4c9'
      }
    });

    if (!resp.ok) {
      const errorText = await resp.text();
      console.error('[Quota Debug] Supabase Auth verification failed:', resp.status, errorText);
      return null;
    }
    return await resp.json();
  } catch (e) {
    console.error('[Quota Debug] getSupabaseUser exception:', e);
    return null;
  }
}

/**
 * Helper to manage quota via Supabase REST
 */
async function checkAndUpdateQuota(user: any) {
  if (!SUPABASE_SERVICE_KEY) {
    console.warn('SUPABASE_SERVICE_ROLE_KEY not configured, skipping quota check');
    return { allowed: true };
  }

  const uid = user.id;
  const email = user.email;

  // 1. Get current plan
  let resp = await fetch(`${SUPABASE_URL}/rest/v1/user_plans?uid=eq.${uid}`, {
    headers: {
      'apikey': SUPABASE_SERVICE_KEY,
      'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`
    }
  });

  let plan = null;
  const plans = await resp.json();

  if (plans && plans.length > 0) {
    plan = plans[0];
  } else {
    // 2. Create default free plan if not exists
    const newPlan = {
      uid,
      email,
      plan_type: 'free',
      quota_remaining: 3,
      last_used_date: new Date().toISOString().split('T')[0]
    };

    await fetch(`${SUPABASE_URL}/rest/v1/user_plans`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_SERVICE_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(newPlan)
    });
    return { allowed: true, remaining: 2 }; // Just used one
  }

  if (plan.plan_type === 'premium') return { allowed: true, remaining: 99 };

  // 3. Lazy Reset Logic
  const today = new Date().toISOString().split('T')[0];
  let remaining = plan.quota_remaining;

  if (plan.last_used_date !== today) {
    remaining = 3;
  }

  if (remaining <= 0) return { allowed: false };

  // 4. Update Quota
  await fetch(`${SUPABASE_URL}/rest/v1/user_plans?uid=eq.${uid}`, {
    method: 'PATCH',
    headers: {
      'apikey': SUPABASE_SERVICE_KEY,
      'Authorization': `Bearer ${SUPABASE_SERVICE_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      quota_remaining: remaining - 1,
      last_used_date: today,
      updated_at: new Date().toISOString()
    })
  });

  return { allowed: true, remaining: remaining - 1 };
}

/**
 * GET: Handles cache checking or redirects browser to direct backend fetch.
 */
export const GET: APIRoute = async ({ url, request }) => {
  const code = url.searchParams.get('code');
  const year = url.searchParams.get('year');
  const period = url.searchParams.get('period');
  const preview = url.searchParams.get('preview') === 'true';
  const lang = url.searchParams.get('lang') || 'zh-CN';

  // 1. Handle "No Parameters" or "Preview" case - Load sample data
  if (preview || (!code && !year && !period)) {
    return createDelayedStream(sampleData);
  }

  // 1.5 Quota Enforcement (Server Side)
  const cookies = (request as any).headers.get('cookie') || '';
  const user = await getSupabaseUser(cookies);

  if (!user) {
    console.warn('[Quota Debug] Request skipped quota because user is null (Cookie match failed or token invalid)');
  } else {
    const quota = await checkAndUpdateQuota(user);
    console.log('[Quota Debug] Quota check result:', quota);
    if (!quota.allowed) {
      return new Response(JSON.stringify({
        error: 'Quota exceeded',
        code: 'QUOTA_EXCEEDED'
      }), { status: 403 });
    }
  }

  // 2. Cache Key
  const cacheKey = `cache:check:${code}:${year}:${period}:${lang}`;

  try {
    // 3. Check KV Cache
    if (kv) {
      let cachedData = await kv.get<any[]>(cacheKey);

      if (cachedData) {
        console.log(`[Cache Hit] ${cacheKey}`);
        return createDelayedStream(cachedData);
      }
    }

    // 4. Cache Miss - In our new logic, we return the info for DIRECT browser fetch
    // to bypass Vercel serverless function 10s timeout.
    console.log(`[Cache Miss] ${cacheKey}. Redirecting frontend to direct fetch...`);

    const formattedCode = formatSymbol(code);
    const apiPeriod = period === 'full' ? 'FY' : (period || 'FY');

    return new Response(JSON.stringify({
      action: 'direct_fetch',
      config: {
        api: BACKEND_API,
        token: BACKEND_TOKEN,
        params: {
          code: formattedCode,
          year: parseInt(year || '2024'),
          period: apiPeriod,
          lang: lang === 'en' ? 'en' : 'zh-CN'
        }
      }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err: any) {
    console.error('[API Error in GET]', err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
};

/**
 * POST: Allows frontend to save results into cache after completion.
 */
export const POST: APIRoute = async ({ request }) => {
  if (!kv) {
    return new Response(JSON.stringify({ error: 'KV Cache not configured' }), { status: 500 });
  }

  try {
    const body = await request.json();
    const { cacheKey, data } = body;

    if (!cacheKey || !data) {
      return new Response(JSON.stringify({ error: 'Missing cacheKey or data' }), { status: 400 });
    }

    await kv.set(cacheKey, data, { ex: CACHE_EXPIRY });
    console.log(`[Cache Stored via POST] ${cacheKey}`);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err: any) {
    console.error('[API Error in POST callback]', err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

/**
 * Creates a ReadableStream that outputs JSON lines with artificial delays
 * Only used for cached results or preview data to maintain "Analysis" aesthetic.
 */
function createDelayedStream(data: any[]) {
  const encoder = new TextEncoder();

  // Group events
  const groupA = data.filter(item => {
    const p = (item.producer || '').toUpperCase();
    return p === 'A' || p === 'NORMALIZER' || item.event === 'task_started';
  });

  const groupB = data.filter(item => {
    const p = (item.producer || '').toUpperCase();
    return p === 'B' || p === 'ANALYZER';
  });

  const groupC = data.filter(item => {
    const p = (item.producer || '').toUpperCase();
    const e = item.event || '';
    return p === 'C' || p === 'AUDITOR' || e.includes('summary') || e.includes('result');
  });

  const stream = new ReadableStream({
    async start(controller) {
      const send = async (item: any, delay = 4000) => {
        controller.enqueue(encoder.encode(JSON.stringify(item) + '\n'));
        await new Promise(r => setTimeout(r, delay));
      };

      for (const item of groupA) await send(item, 2000);

      if (groupB.length > 0) {
        await new Promise(r => setTimeout(r, 10000));
        for (const item of groupB) await send(item, 4000);
      }

      if (groupC.length > 0) {
        await new Promise(r => setTimeout(r, 10000));
        for (const item of groupC) await send(item, 4000);
      }

      controller.close();
    }
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'application/x-ndjson',
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': 'no-cache, no-transform',
      'Transfer-Encoding': 'chunked',
      'Connection': 'keep-alive',
    }
  });
}

function formatSymbol(codeParam: string | null): string {
  if (!codeParam) return '';
  if (codeParam.includes('.')) return codeParam;
  const match = codeParam.match(/^([a-z]+)(\d+)$/i);
  if (match) {
    return `${match[2]}.${match[1].toUpperCase()}`;
  }
  return codeParam;
}
