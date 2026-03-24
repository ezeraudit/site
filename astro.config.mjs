// @ts-check
import {
  defineConfig,
  fontProviders,
} from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";


// https://astro.build/config
export default defineConfig({
  site: 'https://audit.ezer.cc/',
  output: 'server',
  adapter: vercel(),
  scopedStyleStrategy: 'where',
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Roboto Slab",
      cssVariable: "--font-roboto-slab",
      weights: ["100 900"],
    },
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-inter",
      weights: ["100 900"],
    },
  ],
  integrations: [sitemap()],
});
