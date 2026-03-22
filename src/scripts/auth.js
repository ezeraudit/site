import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const supabaseUrl = "https://msufgvqofnihylcnxyac.supabase.co";
const supabaseKey = "sb_publishable_XMPIdUpNn_dPH7iKdGK_Zg_J8InT4c9";

const rootDomainStorage = {
  getItem: (key) => {
    const name = key + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1);
      if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
    return null;
  },
  setItem: (key, value) => {
    const d = new Date();
    d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = `${key}=${value};${expires};domain=.ezer.cc;path=/;SameSite=Lax;Secure`;
  },
  removeItem: (key) => {
    document.cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;domain=.ezer.cc;path=/;`;
  },
};

const client = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: rootDomainStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});

window.auth = {
  getSession: async () => {
    try {
      const { data: { session } } = await client.auth.getSession();
      return session;
    } catch (e) {
      console.error('Failed to get session:', e);
      return null;
    }
  },
  client
};
