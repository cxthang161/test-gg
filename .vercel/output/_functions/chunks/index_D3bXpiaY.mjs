import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent } from './astro/server_C_9WVnBW.mjs';
import 'kleur/colors';
import { c as configApp } from './index_C7Rcm1oi.mjs';
import { $ as $$MessageSquareIcon } from './ZoomOutIcon_DaodLbuV.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const messages = [
    {
      message: `T\xF4i th\u1EA5y d\u1ECBch v\u1EE5 c\u1EE7a ${configApp.company_name} t\u1EA5t t\u1ED1t, nhanh g\u1ECDn, nh\xE2n vi\xEAn nhi\u1EC7t t\xECnh v\xE0 d\u1EC5 m\u1EBFn`,
      name: "Nguy\u1EC5n B\xE1 C\u01B0\u1EDDng",
      phone: "0123456789"
    },
    {
      message: "L\u1EA7n \u0111\u1EA7u ti\xEAn m\xF2 m\u1EABm t\xECm ki\u1EBFm mua v\xE9 tr\xEAn m\u1EA1ng. N\xF3i chung \u0111\u1ED9i ng\u0169 nh\xE2n vi\xEAn r\u1EA5t nhi\u1EC7t t\xECnh.",
      name: "\u0110\u1EB7ng Thu H\xE0",
      phone: "0945376789"
    },
    {
      message: "R\u1EA5t c\xE1m \u01A1n c\xE1c b\u1EA1n \u0111\xE3 cho t\xF4i m\u1ED9t \u0111\u1ECBa ch\u1EC9 tin c\u1EADy \u0111\u1EC3 giao d\u1ECBch.",
      name: "Nguy\u1EC5n V\u0103n S\u01A1n",
      phone: "0947576789"
    },
    {
      message: "M\xECnh c\u1EA7n mua v\xE9 m\xE1y bay g\u1EA5p, l\xEAn m\u1EA1ng seach, \u0111\u1EB7t mua c\xE1i l\xE0 c\xF3 v\xE9 , th\xEDch th\u1EADt :X",
      name: "Phan Ng\u1ECDc Huy\u1EC1n",
      phone: "0384676789"
    },
    {
      message: `R\u1EA5t h\xE0i l\xF2ng v\u1EDBi d\u1ECBch v\u1EE5 c\u1EE7a cty. C\xE1m \u01A1n nh\xE2n vi\xEAn ${configApp.company_name} \u0111\xE3 t\u01B0 v\u1EA5n nhi\u1EC7t t\xECnh cho t\xF4i.`,
      name: "Nguy\u1EC5n Th\u1ECB Ng\u1ECDc",
      phone: "0846756789"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="aboutUs-container"> <div class="aboutUs"> <h3 class="title-buyTicket">Khách hàng nói về chúng tôi</h3> <div class="aboutUs-list"> ${messages.map((item) => renderTemplate`<div class="aboutUs-item"> ${renderComponent($$result, "MessageSquareIcon", $$MessageSquareIcon, {})} <div class="aboutUs-item__message"> <p>${item.message}</p> <div> <p>${item.name} - ${item.phone.slice(0, 6)}xxxx</p> </div> </div> </div>`)} </div> </div> </section>`;
}, "C:/Users/Admin/Desktop/template/src/pages/home/about-us/index.astro", void 0);

const $$file = "C:/Users/Admin/Desktop/template/src/pages/home/about-us/index.astro";
const $$url = "/home/about-us";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Index as $, _page as _ };
