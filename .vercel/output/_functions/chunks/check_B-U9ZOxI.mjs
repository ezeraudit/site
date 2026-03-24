import { c as createComponent } from './_astro_assets_BszAxtBm.mjs';
import 'piccolore';
import { c as addAttribute, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_DOOFAFDK.mjs';
import { g as getLangFromUrl, u as ui, $ as $$Layout, r as renderScript, b as useTranslations } from './Layout_B_ln-Xjv.mjs';

const $$Check = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Check;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  const translations = ui[lang];
  return renderTemplate`<!-- Injected i18n for client-side script --><meta name="check-i18n"${addAttribute(JSON.stringify(translations), "content")}>${renderComponent($$result, "Layout", $$Layout, { "title": t("check.title"), "class": "astro-edn5rymh" }, { "default": async ($$result2) => renderTemplate`${maybeRenderHead()}<div class="check-page astro-edn5rymh"><div class="u-container astro-edn5rymh"><!-- Page Header --><div class="check-header astro-edn5rymh"><h1 class="check-title astro-edn5rymh" id="page-title">${t("check.title")}</h1></div><!-- Loading State --><div class="loading-container astro-edn5rymh" id="loading-container"><div class="spinner-wrapper astro-edn5rymh"><div class="spinner astro-edn5rymh"></div><div class="spinner-ring astro-edn5rymh"></div></div><p class="loading-text astro-edn5rymh" id="loading-text">${t("check.loading")}</p><div class="progress-bar-wrapper astro-edn5rymh"><div class="progress-bar astro-edn5rymh" id="progress-bar"></div></div><p class="progress-label astro-edn5rymh" id="progress-label">0%</p></div><!-- Error State --><div class="error-container hidden astro-edn5rymh" id="error-container"><div class="error-icon astro-edn5rymh">⚠️</div><p class="error-text astro-edn5rymh" id="error-text">${t("check.error")}</p><a id="back-link"${addAttribute(lang === "zh" ? "/search" : "/en/search", "href")} class="back-btn astro-edn5rymh">
← ${lang === "zh" ? "返回搜索" : "Back to Search"}</a></div><!-- Results --><div class="results-container hidden astro-edn5rymh" id="results-container"><!-- Thought Process (A, B, C) --><div class="thought-container astro-edn5rymh" id="thought-container"><button class="thought-header astro-edn5rymh" id="thought-toggle" aria-expanded="true"><span class="thought-icon astro-edn5rymh">📊</span><span class="thought-title astro-edn5rymh">${t("check.thought")}</span><span class="thought-arrow astro-edn5rymh"></span></button><div class="thought-content astro-edn5rymh" id="thought-content"><div class="thought-grid astro-edn5rymh"><!-- A: Structured Data --><div class="thought-section section-a astro-edn5rymh"><div class="section-label astro-edn5rymh">数据归一化 (A)</div><div class="charts-grid astro-edn5rymh" id="charts-a"><div class="chart-item astro-edn5rymh"><div class="chart-label astro-edn5rymh">营业收入 (Revenue)</div><div class="chart-canvas-wrapper astro-edn5rymh"><canvas id="chart-revenue" class="astro-edn5rymh"></canvas></div></div><div class="chart-item astro-edn5rymh"><div class="chart-label astro-edn5rymh">净利润 (Net Profit)</div><div class="chart-canvas-wrapper astro-edn5rymh"><canvas id="chart-profit" class="astro-edn5rymh"></canvas></div></div><div class="chart-item astro-edn5rymh"><div class="chart-label astro-edn5rymh">毛利率 (Gross Margin)</div><div class="chart-canvas-wrapper astro-edn5rymh"><canvas id="chart-margin" class="astro-edn5rymh"></canvas></div></div><div class="chart-item astro-edn5rymh"><div class="chart-label astro-edn5rymh">资产负债率 (Debt Ratio)</div><div class="chart-canvas-wrapper astro-edn5rymh"><canvas id="chart-debt" class="astro-edn5rymh"></canvas></div></div></div></div><!-- B: Analysis Text --><div class="thought-section section-b astro-edn5rymh"><div class="section-label astro-edn5rymh">深度分析 (B)</div><div class="scroll-wrapper-b astro-edn5rymh"><div class="text-output astro-edn5rymh" id="text-b"></div></div></div><!-- C: Auditor Text --><div class="thought-section section-c astro-edn5rymh"><div class="section-label astro-edn5rymh">风险审计 (C)</div><div class="scroll-wrapper-b astro-edn5rymh"><div class="text-output astro-edn5rymh" id="text-c"></div></div></div></div></div></div><!-- Summary Section --><div class="summary-container astro-edn5rymh" id="summary-section-container"><h2 class="col-title astro-edn5rymh">${t("check.headline")}</h2><div class="summary-box astro-edn5rymh"><div id="summary-text" class="text-output astro-edn5rymh"></div><div id="final-result-text" class="final-result-output hidden astro-edn5rymh"></div></div></div></div></div></div>` })}${renderScript($$result, "D:/programs/others/ezer/src/pages/check.astro?astro&type=script&index=0&lang.ts")}${renderScript($$result, "D:/programs/others/ezer/src/pages/check.astro?astro&type=script&index=1&lang.ts")}`;
}, "D:/programs/others/ezer/src/pages/check.astro", void 0);

const $$file = "D:/programs/others/ezer/src/pages/check.astro";
const $$url = "/check";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Check,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
