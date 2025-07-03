import { a as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_C_9WVnBW.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://test-gg-seven.vercel.app/");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p class="header-section">${title}</p>`;
}, "C:/Users/Admin/Desktop/template/src/components/HeaderSection/index.astro", void 0);

export { $$Index as $ };
