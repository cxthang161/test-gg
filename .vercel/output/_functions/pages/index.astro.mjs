import { c as createComponent, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_C_9WVnBW.mjs';
import 'kleur/colors';
import { c as configApp } from '../chunks/index_C0gxgacJ.mjs';
import { $ as $$Layout } from '../chunks/Layout_CrkQup_b.mjs';
import { $ as $$Index$1 } from '../chunks/index_B5w8SFn-.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${configApp.company_name} - \u0110\u1EB7t v\xE9 m\xE1y bay online`, "description": configApp.company_description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Home", $$Index$1, {})} ` })}`;
}, "C:/Users/Admin/Desktop/template/src/pages/index.astro", void 0);

const $$file = "C:/Users/Admin/Desktop/template/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
