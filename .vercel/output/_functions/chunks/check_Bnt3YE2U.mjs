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
  return renderTemplate`<!-- Injected i18n for client-side script --><meta name="check-i18n"${addAttribute(JSON.stringify(translations), "content")}>${renderComponent($$result, "Layout", $$Layout, { "title": t("check.title"), "class": "astro-jppswgxh" }, { "default": async ($$result2) => renderTemplate`${maybeRenderHead()}<div class="check-page astro-jppswgxh"><div class="u-container astro-jppswgxh"><!-- Page Header --><div class="check-header astro-jppswgxh"><h1 class="check-title astro-jppswgxh" id="page-title">${t("check.title")}</h1></div><!-- Loading State --><div class="loading-container astro-jppswgxh" id="loading-container"><div class="spinner-wrapper astro-jppswgxh"><div class="spinner astro-jppswgxh"></div><div class="spinner-ring astro-jppswgxh"></div></div><p class="loading-text astro-jppswgxh" id="loading-text">${t("check.loading")}</p><div class="progress-bar-wrapper astro-jppswgxh"><div class="progress-bar astro-jppswgxh" id="progress-bar"></div></div><p class="progress-label astro-jppswgxh" id="progress-label">0%</p></div><!-- Error State --><div class="error-container hidden astro-jppswgxh" id="error-container"><div class="error-icon astro-jppswgxh">⚠️</div><p class="error-text astro-jppswgxh" id="error-text">${t("check.error")}</p><a id="back-link"${addAttribute(lang === "zh" ? "/search" : "/en/search", "href")} class="back-btn astro-jppswgxh">
← ${lang === "zh" ? "返回搜索" : "Back to Search"}</a></div><!-- Results --><div class="results-container hidden astro-jppswgxh" id="results-container"><!-- Thought Process (A, B, C) --><div class="thought-container astro-jppswgxh" id="thought-container"><button class="thought-header astro-jppswgxh" id="thought-toggle" aria-expanded="true"><span class="thought-icon astro-jppswgxh">📊</span><span class="thought-title astro-jppswgxh">${t("check.thought")}</span><span class="thought-arrow astro-jppswgxh"></span></button><div class="thought-content astro-jppswgxh" id="thought-content"><div class="thought-grid astro-jppswgxh"><!-- A: Structured Data --><div class="thought-section section-a astro-jppswgxh"><div class="section-label astro-jppswgxh">${lang === "zh" ? "数据归一化 (A)" : "Normalizer (A)"}</div><div class="charts-grid astro-jppswgxh" id="charts-a"><div class="chart-item astro-jppswgxh"><div class="chart-label astro-jppswgxh">营业收入 (Revenue)</div><div class="chart-canvas-wrapper astro-jppswgxh"><canvas id="chart-revenue" class="astro-jppswgxh"></canvas></div></div><div class="chart-item astro-jppswgxh"><div class="chart-label astro-jppswgxh">净利润 (Net Profit)</div><div class="chart-canvas-wrapper astro-jppswgxh"><canvas id="chart-profit" class="astro-jppswgxh"></canvas></div></div><div class="chart-item astro-jppswgxh"><div class="chart-label astro-jppswgxh">毛利率 (Gross Margin)</div><div class="chart-canvas-wrapper astro-jppswgxh"><canvas id="chart-margin" class="astro-jppswgxh"></canvas></div></div><div class="chart-item astro-jppswgxh"><div class="chart-label astro-jppswgxh">资产负债率 (Debt Ratio)</div><div class="chart-canvas-wrapper astro-jppswgxh"><canvas id="chart-debt" class="astro-jppswgxh"></canvas></div></div></div></div><!-- B: Analysis Text --><div class="thought-section section-b astro-jppswgxh"><div class="section-label astro-jppswgxh">${lang === "zh" ? "深度分析 (B)" : "Analyzer (B)"}</div><div class="scroll-wrapper-b astro-jppswgxh"><div class="text-output astro-jppswgxh" id="text-b"></div></div></div><!-- C: Auditor Text --><div class="thought-section section-c astro-jppswgxh"><div class="section-label astro-jppswgxh">${lang === "zh" ? "风险审计 (C)" : "Auditor (C)"}</div><div class="scroll-wrapper-b astro-jppswgxh"><div class="text-output astro-jppswgxh" id="text-c"></div></div></div></div></div></div><!-- Summary Section --><div class="summary-container astro-jppswgxh" id="summary-section-container"><h2 class="col-title astro-jppswgxh">${t("check.headline")}</h2><div class="summary-box astro-jppswgxh"><div id="summary-text" class="text-output astro-jppswgxh"></div><div id="final-result-text" class="final-result-output hidden astro-jppswgxh"></div></div></div></div></div></div>` })}${renderScript($$result, "D:/programs/others/ezer/src/pages/en/check.astro?astro&type=script&index=0&lang.ts")}${renderScript($$result, "D:/programs/others/ezer/src/pages/en/check.astro?astro&type=script&index=1&lang.ts")}`;
}, "D:/programs/others/ezer/src/pages/en/check.astro", void 0);

const $$file = "D:/programs/others/ezer/src/pages/en/check.astro";
const $$url = "/en/check";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Check,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
