import { c as createComponent } from './_astro_assets_BszAxtBm.mjs';
import 'piccolore';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead, c as addAttribute } from './entrypoint_DOOFAFDK.mjs';
import { g as getLangFromUrl, $ as $$Layout, r as renderScript, b as useTranslations } from './Layout_B_ln-Xjv.mjs';

const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Search;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  (/* @__PURE__ */ new Date()).getFullYear();
  const years = [2025, 2024, 2023, 2022, 2021];
  const periods = [
    { value: "full", label: t("search.period.annual") },
    { value: "1", label: t("search.period.q1") },
    { value: "2", label: t("search.period.q2") },
    { value: "3", label: t("search.period.q3") },
    { value: "4", label: t("search.period.q4") }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("search.title"), "class": "astro-rf2r2o7a" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="search-page astro-rf2r2o7a"> <div class="u-container astro-rf2r2o7a"> <div class="search-container astro-rf2r2o7a"> <h1 class="search-title astro-rf2r2o7a">${t("search.title")}</h1> <div class="search-box-wrapper astro-rf2r2o7a"> <div class="search-box astro-rf2r2o7a"> <!-- Part 1: Stock Search --> <div class="search-input-section astro-rf2r2o7a"> <input type="text" id="stock-input"${addAttribute(t("search.placeholder"), "placeholder")} autocomplete="off" class="astro-rf2r2o7a"> </div> <div class="divider astro-rf2r2o7a"></div> <!-- Part 2: Period Selection (Custom Dropdowns) --> <div class="period-section astro-rf2r2o7a"> <div class="custom-select astro-rf2r2o7a" id="year-dropdown"> <div class="select-trigger astro-rf2r2o7a" id="year-trigger"> <span class="selected-value astro-rf2r2o7a">2025</span> <svg class="arrow astro-rf2r2o7a" width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="astro-rf2r2o7a"></path></svg> </div> <div class="select-options hidden astro-rf2r2o7a" id="year-options"> ${years.map((year) => renderTemplate`<div class="select-option astro-rf2r2o7a"${addAttribute(year, "data-value")}>${year}</div>`)} </div> </div> <div class="custom-select astro-rf2r2o7a" id="period-dropdown"> <div class="select-trigger astro-rf2r2o7a" id="period-trigger"> <span class="selected-value astro-rf2r2o7a">${t("search.period.annual")}</span> <svg class="arrow astro-rf2r2o7a" width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="astro-rf2r2o7a"></path></svg> </div> <div class="select-options hidden astro-rf2r2o7a" id="period-options"> ${periods.map((p) => renderTemplate`<div class="select-option astro-rf2r2o7a"${addAttribute(p.value, "data-value")}>${p.label}</div>`)} </div> </div> </div> <button id="check-btn" class="pill-check-btn astro-rf2r2o7a"> ${t("search.check")} </button> <div id="search-results" class="search-results hidden astro-rf2r2o7a"></div> </div> </div> </div> </div> </div> ` })}  ${renderScript($$result, "D:/programs/others/ezer/src/pages/en/search.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/programs/others/ezer/src/pages/en/search.astro", void 0);

const $$file = "D:/programs/others/ezer/src/pages/en/search.astro";
const $$url = "/en/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
