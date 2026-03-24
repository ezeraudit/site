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
      title: "Red-Blue Adversarial",
      text: "Industry-first adversarial verification logic: the Red Team uncovers risks while the Blue Team provides counter-proofs, effectively mitigating AI hallucinations and misjudgments."
    },
    {
      title: "Traceable Evidence",
      text: "We reject 'black box' outputs. We prioritize certainty and traceability, ensuring every conclusion is supported by a complete and rigorous chain of evidence."
    },
    {
      title: "Democratizing Expertise",
      text: "We are committed to bridging the gap between professional auditing and individual investors by standardizing and productizing elite research workflows."
    },
    {
      title: "High-Efficiency Synergy",
      text: "Our proprietary orchestration hub drives multi-agent clusters for parallel processing, covering every financial dimension with a massive leap in analysis speed."
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
<\/script>`])), renderComponent($$result, "Layout", $$Layout, { "title": "About Ezer - Redefining Financial Analysis", "class": "astro-emk76muo" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="intro astro-emk76muo"> <div class="u-container astro-emk76muo"> <h1 class="u-heading large-title astro-emk76muo" data-sy-reveal="blurIn">
Redefining the Future of <span class="brand-color astro-emk76muo">Financial Research.</span> </h1> <p class="u-text intro-text astro-emk76muo" data-sy-reveal="slideUp">
We are a sharp, innovative FinTech collective. By introducing red-blue adversarial mechanisms to financial auditing, we empower 150 million investors with expert-level vision to reconstruct financial analysis and uncover true value.
</p> </div> </section> <section class="story astro-emk76muo"> <div id="story-canvas" class="story-canvas astro-emk76muo"></div> <div class="u-container astro-emk76muo"> <div class="u-row align-items-center astro-emk76muo"> <div class="u-col-6 u-col-md-12 story-content astro-emk76muo"> <h2 class="u-heading section-title astro-emk76muo" data-sy-reveal="words">Our Mission</h2> <div class="u-text story-text astro-emk76muo" data-sy-reveal="fade"> <p class="astro-emk76muo">
Faced with tedious jargon and data of uncertain authenticity, everyday investors have long been at a disadvantage. Ezer’s mission is to eliminate these barriers so that truth is no longer obscured by bloated information.
</p> <p class="astro-emk76muo">
Through a closed-loop logic, we have transitioned from "information extraction" to "deep auditing." Ezer goes beyond superficial summaries, using rigorous adversarial verification to turn investment risks into tangible, evidence-based insights.
</p> </div> </div> <div class="u-col-6 u-col-md-12 astro-emk76muo" data-sy-reveal="scaleUp"> <div class="image-placeholder astro-emk76muo"> <img src="/image-1.jpg" alt="Ezer Intelligent Analysis Scenario" class="story-image astro-emk76muo"> </div> </div> </div> </div> </section> <section class="values astro-emk76muo"> <div class="u-container astro-emk76muo"> <h2 class="u-heading section-title center astro-emk76muo" data-sy-reveal="blurIn">Core Technical Philosophy</h2> <div class="u-row astro-emk76muo"> ${values.map((value, i) => renderTemplate`<div class="u-col-3 u-col-md-6 u-col-sm-12 astro-emk76muo"> <div class="value-card astro-emk76muo" data-sy-reveal="slideUp"${addAttribute(`--d: ${i * 0.1}s`, "style")}> <h3 class="u-heading card-title astro-emk76muo">${value.title}</h3> <p class="u-text card-text astro-emk76muo">${value.text}</p> </div> </div>`)} </div> </div> </section> <section class="marquee-section astro-emk76muo"> ${renderComponent($$result2, "TextMarquee", $$TextMarquee, { "class": "about-marquee astro-emk76muo", "texts": [
    "Adversarial Verification",
    "Zero Hallucination",
    "Evidence-Based",
    "Empowering Investors"
  ] })} </section> <section class="cta-section astro-emk76muo" id="cta-section"> <canvas id="cta-cursor-canvas" class="cta-cursor-canvas astro-emk76muo"></canvas> <div class="u-container astro-emk76muo"> <div class="cta-box astro-emk76muo" data-sy-reveal="scaleUp"> <h2 class="u-heading cta-title astro-emk76muo" data-sy-reveal="blurIn">Start your professional analysis journey.</h2> <p class="u-text cta-subtitle astro-emk76muo" data-sy-reveal="slideUp">Say goodbye to inefficient manual reading and lock in real investment risks with our red-blue adversarial mechanism.</p> ${renderComponent($$result2, "Button", $$Button, { "title": "Experience Ezer Now", "url": "#", "arrow": true, "class": "astro-emk76muo" })} </div> </div> </section> ` }), renderScript($$result, "D:/programs/others/ezer/src/pages/en/about.astro?astro&type=script&index=0&lang.ts"));
}, "D:/programs/others/ezer/src/pages/en/about.astro", void 0);

const $$file = "D:/programs/others/ezer/src/pages/en/about.astro";
const $$url = "/en/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
