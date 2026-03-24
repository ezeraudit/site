import { c as createComponent } from './_astro_assets_BszAxtBm.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderTemplate, b as renderComponent, s as spreadAttributes, c as addAttribute, d as renderSlot } from './entrypoint_DOOFAFDK.mjs';
import { a as $$Button, r as renderScript } from './Layout_B_ln-Xjv.mjs';
import { $ as $$TextMarquee } from './TextMarquee_Dbp2SsLB.mjs';
import 'clsx';

const $$HeroHome = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$HeroHome;
  const { title, subtitle, cta } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="sy-hero-home astro-vsjxeken"> <div class="bg astro-vsjxeken"></div> <div class="u-container container astro-vsjxeken"> <div class="inner astro-vsjxeken"> <div class="content astro-vsjxeken"> <h1 class="u-heading title astro-vsjxeken" data-sy-reveal="words">${title}</h1> ${subtitle ? renderTemplate`<p class="u-text subtitle astro-vsjxeken" data-sy-reveal="lines"> ${subtitle} </p>` : null} ${cta ? renderTemplate`${renderComponent($$result, "Button", $$Button, { ...cta, "arrow": true, "class": "cta astro-vsjxeken" })}` : null} </div> <div data-gl-place class="astro-vsjxeken"></div> </div> </div> </div>`;
}, "D:/programs/others/ezer/src/components/HeroHome.astro", void 0);

const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Gallery;
  const { images, class: className } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "sy-gallery", "sy-gallery", { "class:list": [className, "astro-ihllb3az"] }, { "default": () => renderTemplate` ${maybeRenderHead()}<div class="outer astro-ihllb3az"> <div class="inner astro-ihllb3az"> ${images.map((img) => renderTemplate`<div class="img astro-ihllb3az"> <img${spreadAttributes(img, void 0, { "class": "astro-ihllb3az" })}> </div>`)} </div> </div> <div class="dots astro-ihllb3az"></div> ` })}  ${renderScript($$result, "D:/programs/others/ezer/src/components/Gallery.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/programs/others/ezer/src/components/Gallery.astro", void 0);

const $$GradientBackground = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$GradientBackground;
  const defaultColors = [
    [180, 150, 250],
    [236, 231, 253],
    [141, 115, 245],
    [220, 210, 250]
  ];
  const { colors = defaultColors } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "sy-gradient-bg", "sy-gradient-bg", { "data-colors": JSON.stringify(colors), "class": "astro-qumqhawe" })} ${renderScript($$result, "D:/programs/others/ezer/src/components/GradientBackground.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/programs/others/ezer/src/components/GradientBackground.astro", void 0);

const $$GalleryText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$GalleryText;
  const { title, text, cta, images, marqueeTexts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="sy-gallery-text astro-jn73uj37"> <div class="u-container container astro-jn73uj37"> <div class="content astro-jn73uj37"> <h2 class="u-heading title astro-jn73uj37" data-sy-reveal="words">${title}</h2> <p class="u-text text astro-jn73uj37" data-sy-reveal="fade">${text}</p> ${cta ? renderTemplate`${renderComponent($$result, "Button", $$Button, { ...cta, "arrow": true, "class": "cta astro-jn73uj37" })}` : null} </div> ${renderComponent($$result, "Gallery", $$Gallery, { "class": "gallery astro-jn73uj37", "images": images })} </div> ${renderComponent($$result, "TextMarquee", $$TextMarquee, { "class": "marquee astro-jn73uj37", "texts": marqueeTexts, "direction": -1 })} ${renderComponent($$result, "GradientBackground", $$GradientBackground, { "class": "astro-jn73uj37" })} </div>`;
}, "D:/programs/others/ezer/src/components/GalleryText.astro", void 0);

const $$ImageMarquee = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ImageMarquee;
  const { images, direction } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "sy-image-marquee", "sy-image-marquee", { "data-dir": direction, "class": "astro-y63m42oh" }, { "default": () => renderTemplate` ${maybeRenderHead()}<div class="inner astro-y63m42oh"> ${images.map((img) => renderTemplate`<div class="img astro-y63m42oh"> <img${spreadAttributes(img, void 0, { "class": "astro-y63m42oh" })}> </div>`)} </div> ` })}  ${renderScript($$result, "D:/programs/others/ezer/src/components/ImageMarquee.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/programs/others/ezer/src/components/ImageMarquee.astro", void 0);

const $$Faqs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Faqs;
  const { title, subtitle, mobileTitle, items } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "sy-faqs", "sy-faqs", { "class": "astro-vaazyeln" }, { "default": () => renderTemplate` ${maybeRenderHead()}<div class="u-container container astro-vaazyeln"> <div class="content astro-vaazyeln"> <h2 class="u-heading astro-vaazyeln" data-sy-reveal="scaleUp"> <span class="astro-vaazyeln">${title}</span> <span aria-hidden class="astro-vaazyeln">${mobileTitle}</span> </h2> <p class="u-text subtitle astro-vaazyeln" data-sy-reveal="slideUp">${subtitle}</p> </div> <div class="faqs astro-vaazyeln"> ${items.map((item, i) => renderTemplate`<div class="faq astro-vaazyeln"> <div class="question astro-vaazyeln"> <h3 class="u-text astro-vaazyeln"${addAttribute(`faq-header-${i}`, "id")}> <button class="toggle astro-vaazyeln" type="button"${addAttribute(`faq-panel-${i}`, "aria-controls")} aria-expanded="false"> <span class="question-text astro-vaazyeln" data-sy-reveal="words"> ${item["question"]} </span> <span class="astro-vaazyeln"></span> </button> </h3> </div> <div class="panel astro-vaazyeln"${addAttribute(`faq-panel-${i}`, "id")}${addAttribute(`faq-header-${i}`, "aria-labelledby")} hidden> <div class="answer u-text astro-vaazyeln">${item["answer"]}</div> </div> </div>`)} </div> </div> ` })} ${renderScript($$result, "D:/programs/others/ezer/src/components/Faqs.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/programs/others/ezer/src/components/Faqs.astro", void 0);

const $$StepsTimeline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$StepsTimeline;
  const { title, items } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "sy-steps-timeline", "sy-steps-timeline", { "class": "astro-f77ufbac" }, { "default": () => renderTemplate` ${maybeRenderHead()}<div class="u-container container astro-f77ufbac"> <div class="wrapper astro-f77ufbac"> <div class="content astro-f77ufbac"> <h2 class="u-heading title astro-f77ufbac" data-sy-reveal="words">${title}</h2> </div> <div class="items-wrapper astro-f77ufbac"> <div class="items astro-f77ufbac"> ${items.map((item, i) => renderTemplate`<div${addAttribute([["item", i === 0 && "is-active"], "astro-f77ufbac"], "class:list")}> <div class="item-inner astro-f77ufbac"> <h3 class="u-heading item-title astro-f77ufbac" data-sy-reveal="blurIn"> ${item.title} </h3> <p class="u-text item-text astro-f77ufbac" data-sy-reveal="fade"> ${item.text} </p> </div> </div>`)} </div> </div> </div> <div data-gl-place="0" data-gl-place-factor="1.05" class="astro-f77ufbac"></div> <div data-gl-place="1" data-gl-place-factor="1.01" class="astro-f77ufbac"></div> </div> ` })} ${renderScript($$result, "D:/programs/others/ezer/src/components/StepsTimeline.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/programs/others/ezer/src/components/StepsTimeline.astro", void 0);

const $$Plans = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Plans;
  const { title, subtitle, items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="sy-plans astro-bnzs7wvs"> <div class="u-container astro-bnzs7wvs"> <div data-gl-place data-gl-place-factor="1.5" class="astro-bnzs7wvs"></div> <h2 class="u-heading title astro-bnzs7wvs" data-sy-reveal="words">${title}</h2> <p class="u-text subtitle astro-bnzs7wvs" data-sy-reveal="blurIn">${subtitle}</p> <div class="plans astro-bnzs7wvs"> ${items.map((item, i) => renderTemplate`<div class="plan astro-bnzs7wvs" data-sy-reveal="slideUp"${addAttribute(`--d: ${i * 0.2}s`, "style")}> <div class="plan-inner astro-bnzs7wvs"> <h3 class="u-text plan-title astro-bnzs7wvs" data-sy-reveal="words"> ${item.title} </h3> <p class="u-heading price astro-bnzs7wvs"> <span data-sy-reveal="blurIn" class="astro-bnzs7wvs">${item.price.amount}</span> <span class="duration u-text astro-bnzs7wvs">
/${item.price.duration} </span> </p> <ul class="u-text features astro-bnzs7wvs"> ${item.features.map((feat) => renderTemplate`<li${addAttribute([[!feat.disabled && "available"], "astro-bnzs7wvs"], "class:list")} data-sy-reveal="fade"> ${feat.title} </li>`)} </ul> ${renderComponent($$result, "Button", $$Button, { ...item.link, "color": i === 0 ? "primary-alt" : "primary", "class": "astro-bnzs7wvs" })} </div> </div>`)} </div> </div> </div>`;
}, "D:/programs/others/ezer/src/components/Plans.astro", void 0);

const $$RectReveal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$RectReveal;
  const { class: className, ignoreLast } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "sy-rect-reveal", "sy-rect-reveal", { "class:list": [className, "astro-l65klfhv"], "data-ignore-last": ignoreLast }, { "default": () => renderTemplate` ${maybeRenderHead()}<div class="inner astro-l65klfhv"> ${renderSlot($$result, $$slots["default"])} </div> ` })}  ${renderScript($$result, "D:/programs/others/ezer/src/components/RectReveal.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/programs/others/ezer/src/components/RectReveal.astro", void 0);

const $$Statements = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Statements;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="sy-statements astro-s6fcz3yu"> ${renderComponent($$result, "RectReveal", $$RectReveal, { "ignoreLast": true, "class": "astro-s6fcz3yu" }, { "default": ($$result2) => renderTemplate`${items.map(({ title, text }, i) => renderTemplate`<div class="box astro-s6fcz3yu"> <div class="u-container astro-s6fcz3yu"> <div class="content astro-s6fcz3yu"> <h2 class="u-heading astro-s6fcz3yu" data-sy-reveal="words"> ${title} </h2> <p class="u-text astro-s6fcz3yu"${addAttribute(i === 0 ? "fade" : void 0, "data-sy-reveal")}> ${text} </p> </div> </div> </div>`)}` })} <div data-gl-place="0" class="astro-s6fcz3yu"></div> </div>`;
}, "D:/programs/others/ezer/src/components/Statements.astro", void 0);

const $$Introducing = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Introducing;
  const { title, text, cta } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="sy-introducing astro-umoiazhf"> <div class="u-container container astro-umoiazhf"> <div class="inner astro-umoiazhf"> <h2 class="u-heading title astro-umoiazhf" data-sy-reveal="blurIn">${title}</h2> <p class="u-text astro-umoiazhf" data-sy-reveal="fade"> ${text} </p> ${cta ? renderTemplate`${renderComponent($$result, "Button", $$Button, { ...cta, "arrow": true, "class": "cta astro-umoiazhf" })}` : null} <div data-gl-place class="astro-umoiazhf"></div> </div> </div> </div>`;
}, "D:/programs/others/ezer/src/components/Introducing.astro", void 0);

const $$GL = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "sy-gl", "sy-gl", { "class": "astro-vpsporut" })} ${renderScript($$result, "D:/programs/others/ezer/src/components/GL.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/programs/others/ezer/src/components/GL.astro", void 0);

const $$GlPlaces = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "D:/programs/others/ezer/src/components/GlPlaces.astro", void 0);

const logo1 = new Proxy({"src":"/_astro/astro_transparent.Cpljlc7M.png","width":389,"height":107,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/programs/others/ezer/src/assets/astro_transparent.png";
							}
							
							return target[name];
						}
					});

const logo2 = new Proxy({"src":"/_astro/azure_transparent.BjRXadsh.png","width":1000,"height":342,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/programs/others/ezer/src/assets/azure_transparent.png";
							}
							
							return target[name];
						}
					});

const logo3 = new Proxy({"src":"/_astro/bailian_transparent.DSlbnQ9E.png","width":800,"height":171,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/programs/others/ezer/src/assets/bailian_transparent.png";
							}
							
							return target[name];
						}
					});

const logo4 = new Proxy({"src":"/_astro/cloudflare_transparent.eAJCuSjn.png","width":960,"height":318,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/programs/others/ezer/src/assets/cloudflare_transparent.png";
							}
							
							return target[name];
						}
					});

const logo5 = new Proxy({"src":"/_astro/eastmoney_transparent.C1znAye6.png","width":309,"height":74,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/programs/others/ezer/src/assets/eastmoney_transparent.png";
							}
							
							return target[name];
						}
					});

const logo6 = new Proxy({"src":"/_astro/github_transparent.BC03R8-4.png","width":900,"height":231,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/programs/others/ezer/src/assets/github_transparent.png";
							}
							
							return target[name];
						}
					});

const logo7 = new Proxy({"src":"/_astro/huggingface_transparent.Ch03rB4P.png","width":588,"height":156,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/programs/others/ezer/src/assets/huggingface_transparent.png";
							}
							
							return target[name];
						}
					});

const logo8 = new Proxy({"src":"/_astro/hugo_transparent.DGynEoN4.png","width":588,"height":162,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/programs/others/ezer/src/assets/hugo_transparent.png";
							}
							
							return target[name];
						}
					});

const logo9 = new Proxy({"src":"/_astro/openclaw_transparent.Cdm2ju6j.png","width":1075,"height":228,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/programs/others/ezer/src/assets/openclaw_transparent.png";
							}
							
							return target[name];
						}
					});

const logo10 = new Proxy({"src":"/_astro/spaceship_transparent.DUO2r935.png","width":588,"height":99,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/programs/others/ezer/src/assets/spaceship_transparent.png";
							}
							
							return target[name];
						}
					});

const logo11 = new Proxy({"src":"/_astro/supabase_transparent.DPcmlQiL.png","width":588,"height":138,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/programs/others/ezer/src/assets/supabase_transparent.png";
							}
							
							return target[name];
						}
					});

const logo12 = new Proxy({"src":"/_astro/vercel_transparent.CCZ4OER9.png","width":588,"height":138,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/programs/others/ezer/src/assets/vercel_transparent.png";
							}
							
							return target[name];
						}
					});

export { $$HeroHome as $, $$Introducing as a, $$StepsTimeline as b, $$GalleryText as c, $$Statements as d, $$Plans as e, $$Faqs as f, $$ImageMarquee as g, logo2 as h, logo3 as i, logo4 as j, logo5 as k, logo1 as l, logo6 as m, logo7 as n, logo8 as o, logo9 as p, logo10 as q, logo11 as r, logo12 as s, $$GL as t, $$GlPlaces as u };
