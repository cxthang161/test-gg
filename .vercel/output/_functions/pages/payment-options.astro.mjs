import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C_9WVnBW.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CrkQup_b.mjs';
import { $ as $$Index$2 } from '../chunks/index_DLkRoQBz.mjs';
import { c as configApp } from '../chunks/index_C0gxgacJ.mjs';
import { $ as $$Index$1 } from '../chunks/index_mtMQvu7q.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const paymenyOptions = [
    {
      image: configApp.urlImage + configApp.image_VietComBank,
      nameOwner: "C\xD4NG TY TNHH DV DL NG\xD4I NH\xC0 PH\u01AF\u01A0NG NAM",
      numberBanking: "68 68 78 9999",
      branch: "Vietcombank T\xC2N S\u01A0N NH\u1EA4T"
    },
    {
      image: configApp.urlImage + configApp.image_VPBank,
      nameOwner: "C\xD4NG TY TNHH DV DL NG\xD4I NH\xC0 PH\u01AF\u01A0NG NAM",
      numberBanking: "0017100024529008",
      branch: "VPBank \u2013 H\xE0 N\u1ED9i"
    },
    {
      image: configApp.urlImage + configApp.image_HDBank,
      nameOwner: "C\xD4NG TY TNHH DV DL NG\xD4I NH\xC0 PH\u01AF\u01A0NG NAM",
      numberBanking: "068704070155990",
      branch: "HDBANK \u2013 TTKD \u2013 G\xF2 V\u1EA5p"
    },
    {
      image: configApp.urlImage + configApp.image_TechComBank,
      nameOwner: "C\xD4NG TY TNHH DV DL NG\xD4I NH\xC0 PH\u01AF\u01A0NG NAM",
      numberBanking: "6868 9999 7878",
      branch: "TechComBank \u2013 H\xE0 N\u1ED9i"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ph\u01B0\u01A1ng th\u1EE9c thanh to\xE1n", "description": "Kh\xE1m ph\xE1 c\xE1c ph\u01B0\u01A1ng th\u1EE9c thanh to\xE1n linh ho\u1EA1t v\xE0 d\u1EC5 d\xE0ng m\xE0 ch\xFAng t\xF4i cung c\u1EA5p. T\u1EEB th\u1EBB t\xEDn d\u1EE5ng, chuy\u1EC3n kho\u1EA3n ng\xE2n h\xE0ng \u0111\u1EBFn v\xED \u0111i\u1EC7n t\u1EED, ch\xFAng t\xF4i \u0111\u1EA3m b\u1EA3o quy tr\xECnh thanh to\xE1n an to\xE0n v\xE0 thu\u1EADn ti\u1EC7n \u0111\u1EC3 b\u1EA1n c\xF3 th\u1EC3 nhanh ch\xF3ng ho\xE0n t\u1EA5t giao d\u1ECBch." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="payment-options"> ${renderComponent($$result2, "HeaderSection", $$Index$1, { "title": "Ph\u01B0\u01A1ng th\u1EE9c thanh to\xE1n" })} <div class="payment-option__item"> ${paymenyOptions.map((item) => renderTemplate`<div> ${renderComponent($$result2, "ImageComponent", $$Index$2, { "urlImage": item.image, "width": 80, "height": 80, "alt": "Ph\u01B0\u01A1ng th\u1EE9c thanh to\xE1n" })} <div> <div class="payment-option__item--content-banking"> <p>Chủ tài khoản:</p> <p> <strong>${item.nameOwner}</strong> </p> </div> <div class="payment-option__item--content-banking"> <p>Số tài khoản:</p> <p> <strong>${item.numberBanking}</strong> </p> </div> <div class="payment-option__item--content-banking"> <p>Chi nhánh:</p> <p> <strong>${item.branch}</strong> </p> </div> </div> </div>`)} </div> </div> ` })}`;
}, "C:/Users/Admin/Desktop/template/src/pages/payment-options/index.astro", void 0);

const $$file = "C:/Users/Admin/Desktop/template/src/pages/payment-options/index.astro";
const $$url = "/payment-options";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
