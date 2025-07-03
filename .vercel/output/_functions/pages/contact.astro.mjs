import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C_9WVnBW.mjs';
import 'kleur/colors';
import { c as configApp } from '../chunks/index_C7Rcm1oi.mjs';
import { $ as $$Layout } from '../chunks/Layout_DiTWz_fX.mjs';
import { b as $$DropletIcon } from '../chunks/ZoomOutIcon_DaodLbuV.mjs';
import { $ as $$FormContact } from '../chunks/FormContact_NXhlkG51.mjs';
import { $ as $$Index$1 } from '../chunks/index_DboOV6tZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Li\xEAn h\u1EC7", "description": "Li\xEAn h\u1EC7 v\u1EDBi ch\xFAng t\xF4i" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="contact"> ${renderComponent($$result2, "HeaderSection", $$Index$1, { "title": configApp.company_name })} <hr> <div class="contact-info"> ${configApp.company_office_address.map((item) => renderTemplate`<div> <p>${item.name}</p> <div> ${renderComponent($$result2, "DropletIcon", $$DropletIcon, {})} <p>${item.address}</p> </div> <p>Hotline: ${item.hostline}</p> <p>Email: ${item.email}</p> </div>`)} </div> <hr> ${renderComponent($$result2, "FormContact", $$FormContact, {})} </main> ` })}`;
}, "C:/Users/Admin/Desktop/template/src/pages/contact/index.astro", void 0);

const $$file = "C:/Users/Admin/Desktop/template/src/pages/contact/index.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
