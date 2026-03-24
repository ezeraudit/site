import { c as createComponent } from './_astro_assets_BszAxtBm.mjs';
import 'piccolore';
import { b as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_DOOFAFDK.mjs';
import { r as renderScript } from './Layout_B_ln-Xjv.mjs';

const $$TextMarquee = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TextMarquee;
  const { texts, direction, class: className = "" } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "sy-text-marquee", "sy-text-marquee", { "data-dir": direction, "class:list": [[className], "astro-vntlgzpv"] }, { "default": () => renderTemplate` ${maybeRenderHead()}<div class="outer astro-vntlgzpv"> <div class="inner astro-vntlgzpv"> ${texts.map((t) => renderTemplate`<div class="text astro-vntlgzpv">${t}</div>`)} </div> </div> ` })}  ${renderScript($$result, "D:/programs/others/ezer/src/components/TextMarquee.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/programs/others/ezer/src/components/TextMarquee.astro", void 0);

export { $$TextMarquee as $ };
