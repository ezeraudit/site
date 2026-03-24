import type { APIRoute } from 'astro';
import { Redis } from '@upstash/redis';
import { sampleData } from '../../data/sampleData';

const kvRestUrl = import.meta.env.UPSTASH_REDIS_KV_REST_API_URL;
const kvRestToken = import.meta.env.UPSTASH_REDIS_KV_REST_API_TOKEN;

const kv = (kvRestUrl && kvRestToken) 
  ? new Redis({ url: kvRestUrl, token: kvRestToken }) 
  : null;

const BACKEND_API = 'https://api.ezer.cc/api/tasks';
const BACKEND_TOKEN = import.meta.env.BACKEND_TOKEN;
const CACHE_EXPIRY = 30 * 24 * 60 * 60; // 30 days in seconds

export const GET: APIRoute = async ({ request, url }) => {
  const code = url.searchParams.get('code');
  const year = url.searchParams.get('year');
  const period = url.searchParams.get('period');
  const lang = url.searchParams.get('lang') || 'zh-CN';

  // 1. Handle "No Parameters" case - Load sample data
  if (!code && !year && !period) {
    return createDelayedStream(sampleData);
  }

  // 2. Cache Key
  const cacheKey = `cache:check:${code}:${year}:${period}:${lang}`;

  try {
    // 3. Check KV Cache (if configured)
    if (kv) {
      let cachedData = await kv.get<any[]>(cacheKey);

      if (cachedData) {
        console.log(`[Cache Hit] ${cacheKey}`);
        // Update expiry
        await kv.expire(cacheKey, CACHE_EXPIRY);
        return createDelayedStream(cachedData);
      }
    } else {
      console.warn('[Redis] Redis is not configured. Skipping cache.');
    }

    // 4. Cache Miss - Fetch from Backend
    console.log(`[Cache Miss] ${cacheKey}. Fetching from backend...`);

    // Step A: Initiate Task
    const formattedCode = formatSymbol(code);
    const apiPeriod = period === 'full' ? 'FY' : (period || 'FY');

    const initResp = await fetch(BACKEND_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${BACKEND_TOKEN}`
      },
      body: JSON.stringify({
        code: formattedCode,
        year: parseInt(year || '2024'),
        period: apiPeriod,
        lang: lang === 'en' ? 'en-US' : 'zh-CN'
      })
    });

    if (!initResp.ok) {
      const errText = await initResp.text();
      throw new Error(`Backend initiation failed: ${initResp.status} ${errText}`);
    }

    const initData = await initResp.json();
    const streamUrl = initData.stream_url;
    if (!streamUrl) throw new Error('No stream_url returned');

    // Step B: Collect Stream
    const fullStreamUrl = streamUrl.startsWith('http') ? streamUrl : `https://api.ezer.cc${streamUrl}`;
    const streamResp = await fetch(fullStreamUrl, {
      headers: { 'Authorization': `Bearer ${BACKEND_TOKEN}` }
    });

    if (!streamResp.ok) throw new Error(`Stream fetch failed: ${streamResp.status}`);
    if (!streamResp.body) throw new Error('Stream body is empty');

    const reader = streamResp.body.getReader();
    const decoder = new TextDecoder();
    const allLines: any[] = [];
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        let trimmed = line.trim();
        if (!trimmed || trimmed.startsWith(':')) continue;
        if (trimmed.startsWith('data: ')) trimmed = trimmed.substring(6).trim();
        if (!trimmed || trimmed === '[DONE]') continue;

        try {
          allLines.push(JSON.parse(trimmed));
        } catch (e) {
          console.error('Failed to parse line:', trimmed);
        }
      }
    }

    if (buffer.trim()) {
      try {
        allLines.push(JSON.parse(buffer.trim()));
      } catch (e) { }
    }

    // 5. Store in KV (if configured)
    if (kv) {
      await kv.set(cacheKey, allLines, { ex: CACHE_EXPIRY });
      console.log(`[Cache Stored] ${cacheKey}`);
    }

    // 6. Return Streaming Response
    return createDelayedStream(allLines);

  } catch (err: any) {
    console.error('[API Error]', err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
};

/**
 * Creates a ReadableStream that outputs JSON lines with artificial delays
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
        // Wait per item to achieve ~2 mins total duration (approx 28 items * 4s = 112s)
        await new Promise(r => setTimeout(r, delay));
      };

      // 1. Group A (Normalization) - 2 items
      for (const item of groupA) await send(item, 2000);

      // 2. Wait 10 seconds between A and B
      if (groupB.length > 0) {
        console.log('Waiting 10s for Group B...');
        await new Promise(r => setTimeout(r, 10000));
        for (const item of groupB) await send(item, 4000);
      }

      // 3. Wait 10 seconds between B and C
      if (groupC.length > 0) {
        console.log('Waiting 10s for Group C...');
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
