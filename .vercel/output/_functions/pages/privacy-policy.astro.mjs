import { a as createAstro, c as createComponent } from '../chunks/astro/server_C_9WVnBW.mjs';
import 'kleur/colors';
import 'clsx';
import '../chunks/Layout_CrkQup_b.mjs';
import '../chunks/index_mtMQvu7q.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://test-gg-seven.vercel.app/");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  {
    return Astro2.redirect("/404");
  }
}, "C:/Users/Admin/Desktop/template/src/pages/privacy-policy/index.astro", void 0);

const $$file = "C:/Users/Admin/Desktop/template/src/pages/privacy-policy/index.astro";
const $$url = "/privacy-policy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
