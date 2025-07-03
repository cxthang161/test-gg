import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent } from './astro/server_C_9WVnBW.mjs';
import 'kleur/colors';
import { a as $$SmartphoneIcon } from './ZoomOutIcon_Bvkbm1LY.mjs';
import { c as configApp } from './index_C0gxgacJ.mjs';
import { $ as $$IconFacebook, a as $$IconZalo, b as $$IconPhone } from './IconZalo_CNDuH1lK.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> <h1 class="title-buyTicket">Các hình thức mua vé máy bay giá rẻ</h1> <hr> <div> <ul> <li> <p>1. <strong>Trực tiếp lên website, nhanh nhất - tiện nhất</strong></p> </li> <li> <p>2. <strong>Qua chat</strong></p> <div class="buy-ticket-item"> <a${addAttribute(configApp.link_facebook_chat, "href")}> ${renderComponent($$result, "IconFacebook", $$IconFacebook, {})} </a> <a${addAttribute(configApp.link_zalo_chat, "href")}> ${renderComponent($$result, "IconZalo", $$IconZalo, {})} </a> <a${addAttribute(configApp.hotline_1, "href")}> ${renderComponent($$result, "IconPhone", $$IconPhone, {})} </a> </div> </li> <li> <p>
3. <strong>Gọi điện thoại cho ${configApp.company_name}</strong> </p> <div class="buy-ticket-call"> ${renderComponent($$result, "SmartphoneIcon", $$SmartphoneIcon, {})} <p>Tổng đài: <b>${configApp.hotline_1}</b></p> </div> </li> <li> <p>
4. <strong>Đến trực tiếp văn phòng ${configApp.company_name}</strong> </p> <div class="buy-ticket-address"> ${configApp.company_office_address.map((item) => renderTemplate`<div> <p>${item.name}</p> <p>${item.address}</p> </div>`)} </div> </li> </ul> </div> </section>`;
}, "C:/Users/Admin/Desktop/template/src/pages/home/buyTicket/index.astro", void 0);

const $$file = "C:/Users/Admin/Desktop/template/src/pages/home/buyTicket/index.astro";
const $$url = "/home/buyTicket";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Index as $, _page as _ };
