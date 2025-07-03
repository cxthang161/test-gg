import { c as createComponent, r as renderTemplate, d as addAttribute, m as maybeRenderHead, b as renderComponent } from './astro/server_C_9WVnBW.mjs';
import 'kleur/colors';
import { $ as $$Index$5 } from './index_Ce8TAea7.mjs';
import { $ as $$Index$6 } from './index_CrRZBDpc.mjs';
import { $ as $$Index$7 } from './index_D3bXpiaY.mjs';
import { $ as $$Index$8 } from './index_l2B50Ub1.mjs';
import 'clsx';
import { c as configApp } from './index_C7Rcm1oi.mjs';
import { $ as $$Index$3 } from './index_-7pT_fvV.mjs';
import { $ as $$Index$4 } from './index_DoM7Ecuk.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index$2 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<section class="info-slider-list"> <div class="swiper"> <div class="swiper-wrapper"> ', ' </div> </div> </section> <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"><\/script> <script>\n  document.addEventListener("astro:page-load", () => {\n    new Swiper(".swiper", {\n      loop: true,\n      autoplay: {\n        delay: 4000,\n        disableOnInteraction: false,\n      },\n      slidesPerView: 1,\n    });\n  });\n<\/script>'])), maybeRenderHead(), configApp.images_slider.map((item) => renderTemplate`<div class="swiper-slide"><img${addAttribute(configApp.urlImage + item, "src")} alt="A"></div>`));
}, "C:/Users/Admin/Desktop/template/src/components/Slider/index.astro", void 0);

const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  const flights = [
    {
      date: "Kh\xE1ch \u0111\u1EB7t v\xE9 kh\u1EDFi h\xE0nh ",
      address: "H\xE0 N\u1ED9i - \u0110\xE0 N\u1EB5ng",
      price: "300,000 \u0111",
      imageAir: configApp.urlLogoAirline + configApp.bamboo,
      nameAir: "Bamboo Airways"
    },
    {
      date: "Kh\xE1ch \u0111\u1EB7t v\xE9 kh\u1EDFi h\xE0nh ",
      address: "H\xE0 N\u1ED9i - TP.H\u1ED3 Ch\xED Minh",
      price: "568,000 \u0111",
      imageAir: configApp.urlLogoAirline + configApp.vietname_airline,
      nameAir: "Vietnam Airlines"
    },
    {
      date: "Kh\xE1ch \u0111\u1EB7t v\xE9 kh\u1EDFi h\xE0nh ",
      address: "Tp.H\u1ED3 Ch\xED Minh - H\u1EA3i Ph\xF2ng",
      price: "489,000 \u0111",
      imageAir: configApp.urlLogoAirline + configApp.vietjet,
      nameAir: "VietjetAir"
    },
    {
      date: "Kh\xE1ch \u0111\u1EB7t v\xE9 kh\u1EDFi h\xE0nh ",
      address: "H\xE0 N\u1ED9i - Nha Trang",
      price: "426,000 \u0111",
      imageAir: configApp.urlLogoAirline + configApp.vietravel,
      nameAir: "Viet Travel"
    },
    {
      date: "Kh\xE1ch \u0111\u1EB7t v\xE9 kh\u1EDFi h\xE0nh ",
      address: "H\xE0 N\u1ED9i - Bangkok",
      price: "2,426,000 \u0111",
      imageAir: configApp.urlLogoAirline + configApp.vietname_airline,
      nameAir: "Vietnam Airlines"
    },
    {
      date: "Kh\xE1ch \u0111\u1EB7t v\xE9 kh\u1EDFi h\xE0nh ",
      address: "TP.H\u1ED3 Ch\xED Minh - Bangkok",
      price: "2,499,000 \u0111",
      imageAir: configApp.urlLogoAirline + configApp.vietname_airline,
      nameAir: "Vietnam Airlines"
    },
    {
      date: "Kh\xE1ch \u0111\u1EB7t v\xE9 kh\u1EDFi h\xE0nh ",
      address: "TP.H\u1ED3 Ch\xED Minh - H\u1EA3i Ph\xF2ng",
      price: "926,000 \u0111",
      imageAir: configApp.urlLogoAirline + configApp.vietjet,
      nameAir: "VietjetAir"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="book-ticket"> <div> ${renderComponent($$result, "SliderComponent", $$Index$2, {})} <p class="book-ticket__title">Vé máy bay giá rẻ khách đặt mới nhất</p> ${flights.map((item, index) => {
    const now = /* @__PURE__ */ new Date();
    const date = new Date(now);
    date.setDate(date.getDate() + index);
    date.setMonth(date.getMonth() + index);
    const formatted = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit"
    });
    return renderTemplate`<div class="book-ticker__info"> <div> <div> <p> ${item.date} ${formatted} </p> </div> <div> <p class="book-ticker__address">${item.address}</p> <p class="book-ticker__price">${item.price}</p> </div> </div> <div> ${renderComponent($$result, "ImageComponent", $$Index$3, { "urlImage": item.imageAir, "alt": "Bamboo Airways", "width": 32, "height": 16 })} <p>${item.nameAir}</p> </div> </div>`;
  })} <span class="book-ticket__description">* Giá cơ bản cho 1 người chưa bao gồm thuế phí</span> </div> </section>`;
}, "C:/Users/Admin/Desktop/template/src/components/BookTicket/index.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="home"> <div class="container_home"> ${renderComponent($$result, "FormSearch", $$Index$4, {})} ${renderComponent($$result, "BookTicket", $$Index$1, {})} </div> <div class="container_home"> ${renderComponent($$result, "BuyTicket", $$Index$5, { "class": "container_home--buyTicket" })} ${renderComponent($$result, "Payment", $$Index$6, {})} </div> <hr> <div class="container_home"> ${renderComponent($$result, "AboutUs", $$Index$7, {})} ${renderComponent($$result, "Question", $$Index$8, {})} </div> </section>`;
}, "C:/Users/Admin/Desktop/template/src/pages/home/index.astro", void 0);

const $$file = "C:/Users/Admin/Desktop/template/src/pages/home/index.astro";
const $$url = "/home";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Index as $, _page as _ };
