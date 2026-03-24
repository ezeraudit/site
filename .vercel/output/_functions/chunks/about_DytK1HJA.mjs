import { c as createComponent } from './_astro_assets_BszAxtBm.mjs';
import 'piccolore';
import { r as renderTemplate, b as renderComponent, m as maybeRenderHead, c as addAttribute } from './entrypoint_DOOFAFDK.mjs';
import { r as renderScript, $ as $$Layout, a as $$Button } from './Layout_B_ln-Xjv.mjs';
import { $ as $$TextMarquee } from './TextMarquee_Dbp2SsLB.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$About = createComponent(($$result, $$props, $$slots) => {
  const values = [
    {
      title: "红蓝对抗",
      text: "行业首创对抗式验证逻辑：红队挖掘疑点，蓝队反证校验，有效降低模型幻觉与误判风险。"
    },
    {
      title: "证据可溯",
      text: "拒绝“黑盒输出”。我们强调分析结果的确定性与可追溯性，每一项结论都有完整的证据链条支撑。"
    },
    {
      title: "专业平民化",
      text: "我们致力于消除专业审计与普通投资者之间的鸿沟，将顶级投研人员的工作流标准化、产品化。"
    },
    {
      title: "高效协同",
      text: "利用自研编排中枢驱动多智能体集群并行处理，覆盖财报全维度，实现分析效率的量级提升。"
    }
  ];
  return renderTemplate(_a || (_a = __template(["", "  ", ` <script type="module">
  import TubesCursor from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"

  function initCTA() {
    const el = document.getElementById('cta-cursor-canvas')
    if (!el) return

    const app = TubesCursor(el, {
      tubes: {
        colors: ["#f967fb", "#53bc28", "#6958d5"],
        lights: {
          intensity: 200,
          colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"]
        }
      }
    })

    el.addEventListener('click', () => {
      const colors = randomColors(3)
      const lightsColors = randomColors(4)
      app.tubes.setColors(colors)
      app.tubes.setLightsColors(lightsColors)
    })
  }

  function randomColors (count) {
    return new Array(count)
        .fill(0)
        .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'))
  }

  if (document.readyState === 'complete') {
    initCTA()
  } else {
    window.addEventListener('load', initCTA)
  }

  document.addEventListener('astro:page-load', initCTA)
<\/script>`])), renderComponent($$result, "Layout", $$Layout, { "title": "关于 Ezer - 重新定义财报分析", "class": "astro-kh7btl4r" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="intro astro-kh7btl4r"> <div class="u-container astro-kh7btl4r"> <h1 class="u-heading large-title astro-kh7btl4r" data-sy-reveal="blurIn">
重新定义<span class="brand-color astro-kh7btl4r">财报研究</span>的未来
</h1> <p class="u-text intro-text astro-kh7btl4r" data-sy-reveal="slideUp">
我们是理性敏锐、交叉创新的金融科技新锐。通过将红蓝对抗机制引入财报审计，我们旨在赋能 1.5 亿泛投资人群，以专家级视野重构财报分析体验，直击数据背后的真实价值
</p> </div> </section> <section class="story astro-kh7btl4r"> <div id="story-canvas" class="story-canvas astro-kh7btl4r"></div> <div class="u-container astro-kh7btl4r"> <div class="u-row align-items-center astro-kh7btl4r"> <div class="u-col-6 u-col-md-12 story-content astro-kh7btl4r"> <h2 class="u-heading section-title astro-kh7btl4r" data-sy-reveal="words">我们的使命</h2> <div class="u-text story-text astro-kh7btl4r" data-sy-reveal="fade"> <p class="astro-kh7btl4r">
面对长篇累牍的术语与真假难辨的数据，普通投资者在财报研究中长期处于劣势。Ezer的使命是消除专业投研门槛，让真相不再被臃肿的信息掩盖。
</p> <p class="astro-kh7btl4r">
通过全流程闭环逻辑，我们实现了从 "信息提取" 到 "深度审计" 的范式跨越。Ezer 拒绝流于表面的内容概括，而是通过严苛的对抗验证，让投资风险由虚转实，有据可依
</p> </div> </div> <div class="u-col-6 u-col-md-12 astro-kh7btl4r" data-sy-reveal="scaleUp"> <div class="image-placeholder astro-kh7btl4r"> <img src="/image-1.jpg" alt="Ezer 智能分析场景" class="story-image astro-kh7btl4r"> </div> </div> </div> </div> </section> <section class="values astro-kh7btl4r"> <div class="u-container astro-kh7btl4r"> <h2 class="u-heading section-title center astro-kh7btl4r" data-sy-reveal="blurIn">核心技术理念</h2> <div class="u-row astro-kh7btl4r"> ${values.map((value, i) => renderTemplate`<div class="u-col-3 u-col-md-6 u-col-sm-12 astro-kh7btl4r"> <div class="value-card astro-kh7btl4r" data-sy-reveal="slideUp"${addAttribute(`--d: ${i * 0.1}s`, "style")}> <h3 class="u-heading card-title astro-kh7btl4r">${value.title}</h3> <p class="u-text card-text astro-kh7btl4r">${value.text}</p> </div> </div>`)} </div> </div> </section> <section class="marquee-section astro-kh7btl4r"> ${renderComponent($$result2, "TextMarquee", $$TextMarquee, { "class": "about-marquee astro-kh7btl4r", "texts": [
    "对抗验证",
    "拒绝幻觉",
    "证据可循",
    "赋能投资者"
  ] })} </section> <section class="cta-section astro-kh7btl4r" id="cta-section"> <canvas id="cta-cursor-canvas" class="cta-cursor-canvas astro-kh7btl4r"></canvas> <div class="u-container astro-kh7btl4r"> <div class="cta-box astro-kh7btl4r" data-sy-reveal="scaleUp"> <h2 class="u-heading cta-title astro-kh7btl4r" data-sy-reveal="blurIn">开启您的专业分析之旅。</h2> <p class="u-text cta-subtitle astro-kh7btl4r" data-sy-reveal="slideUp">告别低效的人工翻阅，用红蓝对抗机制锁定真正的投资风险。</p> ${renderComponent($$result2, "Button", $$Button, { "title": "立即体验 Ezer", "url": "#", "arrow": true, "class": "astro-kh7btl4r" })} </div> </div> </section> ` }), renderScript($$result, "D:/programs/others/ezer/src/pages/about.astro?astro&type=script&index=0&lang.ts"));
}, "D:/programs/others/ezer/src/pages/about.astro", void 0);

const $$file = "D:/programs/others/ezer/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
