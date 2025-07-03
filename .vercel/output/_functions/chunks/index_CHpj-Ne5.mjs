import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as addAttribute, F as Fragment } from './astro/server_C_9WVnBW.mjs';
import 'kleur/colors';
import { c as configApp } from './index_C0gxgacJ.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const paymentTypes = [
    {
      icon: configApp.urlImage + configApp.image_ticketOfOffice,
      title: "Thanh to\xE1n b\u1EB1ng ti\u1EC1n m\u1EB7t t\u1EA1i v\u0103n ph\xF2ng " + configApp.company_name,
      description: "Sau khi \u0111\u1EB7t h\xE0ng th\xE0nh c\xF4ng, Qu\xFD kh\xE1ch vui l\xF2ng qua v\u0103n ph\xF2ng " + configApp.company_name + " \u0111\u1EC3 thanh to\xE1n v\xE0 nh\u1EADn v\xE9."
    },
    {
      icon: configApp.urlImage + configApp.image_homeIcon,
      title: "Thanh to\xE1n t\u1EA1i nh\xE0",
      description: "Nh\xE2n vi\xEAn " + configApp.company_name + " s\u1EBD giao v\xE9 & thu ti\u1EC1n t\u1EA1i nh\xE0 theo \u0111\u1ECBa ch\u1EC9 Qu\xFD kh\xE1ch cung c\u1EA5p."
    },
    {
      icon: configApp.urlImage + configApp.image_serviceVisa,
      title: "Thanh to\xE1n qua c\u1ED5ng thanh to\xE1n \u0111i\u1EC7n t\u1EED",
      description: "Qu\xFD kh\xE1ch c\xF3 th\u1EC3 thanh to\xE1n tr\u1EF1c tuy\u1EBFn qua ng\xE2n h\xE0ng"
    },
    {
      icon: configApp.urlImage + configApp.image_banking,
      title: "Thanh to\xE1n qua chuy\u1EC3n kho\u1EA3n",
      description: "Qu\xFD kh\xE1ch c\xF3 th\u1EC3 thanh to\xE1n b\u1EB1ng c\xE1ch chuy\u1EC3n kho\u1EA3n tr\u1EF1c ti\u1EBFp t\u1EA1i ng\xE2n h\xE0ng, qua th\u1EBB ATM, ho\u1EB7c qua Internet banking."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section> <h2 class="title-buyTicket">Các hình thức thanh toán</h2> <hr> <ul class="payment"> ${paymentTypes.map((item, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <li> <img${addAttribute(item.icon, "src")}${addAttribute(item.title, "alt")}> <div> <div> <b>${item.title}</b> <br> <p>${item.description}</p> </div> </div> </li> ${index < paymentTypes.length - 1 && renderTemplate`<hr>`}` })}`)} </ul> </section>`;
}, "C:/Users/Admin/Desktop/template/src/pages/home/payment/index.astro", void 0);

const $$file = "C:/Users/Admin/Desktop/template/src/pages/home/payment/index.astro";
const $$url = "/home/payment";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Index as $, _page as _ };
