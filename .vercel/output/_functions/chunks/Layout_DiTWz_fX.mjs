import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as addAttribute, a as createAstro, g as renderSlot, h as renderHead } from './astro/server_C_9WVnBW.mjs';
import 'kleur/colors';
import { e as $$MenuIcon, f as $$PhoneCallIcon, g as $$ClockIcon, b as $$DropletIcon, h as $$MailIcon, i as $$GlobeIcon } from './ZoomOutIcon_DaodLbuV.mjs';
import { c as configApp } from './index_C7Rcm1oi.mjs';
import { $ as $$Index$3 } from './index_-7pT_fvV.mjs';
import 'clsx';
/* empty css                          */
import { $ as $$IconFacebook, a as $$IconZalo, b as $$IconPhone } from './IconZalo_CNDuH1lK.mjs';

const MENU = [
  {
    title: "Trang chủ",
    path: "/",
    isReload: true
  },
  {
    title: "Tiện ích",
    path: "/",
    menuItem: [
      {
        title: "Câu hỏi thường gặp",
        path: "/questions"
      },
      {
        title: "Phương thức thanh toán",
        path: "/payment-options"
      }
    ]
  },
  {
    title: "Tin tức",
    path: "/news"
  },
  {
    title: "Giới thiệu",
    path: "/introduce"
  },
  {
    title: "Liên hệ",
    path: "/contact"
  }
];
{
  MENU.splice(2, 0, {
    title: "Tours",
    path: "",
    menuItem: [
      {
        title: "Tour Quốc Nội",
        path: "/tour-quoc-noi"
      },
      {
        title: "Tour Quốc Tế",
        path: "/tour-quoc-te"
      },
      {
        title: "Combo Tour",
        path: "/combo-tour"
      }
    ]
  });
}

const $$Index$2 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> <div class="header"> <div class="header-content"> <div class="header_menu"> ${renderComponent($$result, "MenuIcon", $$MenuIcon, {})} </div> <div class="header-logo"> <a href="/" data-astro-reload>${renderComponent($$result, "ImageComponent", $$Index$3, { "urlImage": configApp.urlImage + configApp.logo, "alt": "\u0110\u1EB7t v\xE9 m\xE1y bay", "width": 80, "height": 48 })}</a> <p>${configApp.title_meta_layout}</p> </div> <div class="header-contact"> <a${addAttribute(`tel:${configApp.hotline_1}`, "href")}>${renderComponent($$result, "PhoneCallIcon", $$PhoneCallIcon, {})}</a> <div class="header-contact_item"> <div> <p>Tổng đài hỗ trợ:</p> <p class="header-contact_item__phone">${configApp.hotline_1}</p> </div> <div> <p>
Giờ làm việc: <strong>0h-24h</strong> (không nghỉ)
</p> </div> </div> </div> </div> <div id="menu" class="menu"> <ul> ${MENU.map((item, index) => renderTemplate`<li class="menu-item"> ${item.menuItem ? renderTemplate`<p class="menu-item__btn"${addAttribute(`_menu-btn-${index}`, "id")}> ${item.title} </p>` : renderTemplate`<a${addAttribute(item.path, "href")}${addAttribute(item.isReload ? true : false, "data-astro-reload")}> ${item.title} </a>`} ${item.menuItem && renderTemplate`<ul id="menu-nav"> ${item.menuItem.map((menu) => renderTemplate`<li> <a${addAttribute(menu.path, "href")}>${menu.title}</a> </li>`)} </ul>`} </li>`)} </ul> </div> </div> <div class="title"> ${renderComponent($$result, "ClockIcon", $$ClockIcon, {})} <div class="title-item"> <h5 class="title-item_header">
Giờ làm việc: từ 0h-24h, liên tục không nghỉ, kể cả chủ nhật, các ngày
        lễ tết
</h5> <h5>
Quý khách có bất kì thắc mắc hoặc cần trợ giúp, vui lòng gọi tổng đài <span>${configApp.hotline_1}</span> </h5> </div> </div> </header> `;
}, "C:/Users/Admin/Desktop/template/src/layouts/HeaderLayout/index.astro", void 0);

const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer> <div class="container"> <div${addAttribute(`container-info ${"col-3"}`, "class")}> <div> <p>${configApp.company_name}</p> <p class="description-company">${configApp.company_description}</p> </div> <div> <p>Liên hệ</p> <hr> <ul> <li> <div> ${renderComponent($$result, "DropletIcon", $$DropletIcon, {})} <a${addAttribute(configApp.company_addess_map, "href")}>${configApp.company_addess}</a> </div> </li> <li> <div> ${renderComponent($$result, "PhoneCallIcon", $$PhoneCallIcon, {})} <a${addAttribute(`tel:${configApp.hotline_1}`, "href")}>Tel: ${configApp.hotline_1} - ${configApp.hotline_2}</a> </div> </li> <li> <div> ${renderComponent($$result, "MailIcon", $$MailIcon, {})} <a${addAttribute(`mailto:${configApp.email}`, "href")}>${configApp.email}</a> </div> </li> <li> <div> ${renderComponent($$result, "GlobeIcon", $$GlobeIcon, {})} <a${addAttribute(configApp.website, "href")} data-astro-reload>${configApp.website}</a> </div> </li> </ul> </div> <div> <p>Thông tin</p> <hr> <ul> <li> <a href="/introduce">Giới thiệu</a> </li> <li> <a href="/payment-options">Hướng dẫn thanh toán</a> </li> <li> <a href="/contact">Liên hệ</a> </li> <li> ${configApp.isCertification} </li> </ul> </div> ${configApp.isCertification} </div> </div> </footer>`;
}, "C:/Users/Admin/Desktop/template/src/layouts/FooterLayout/index.astro", void 0);

const $$Astro$2 = createAstro("https://test-gg-seven.vercel.app");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Admin/Desktop/template/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$1 = createAstro("https://test-gg-seven.vercel.app");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const currentUrl = new URL(Astro2.request.url);
  const currentPath = currentUrl.pathname;
  return renderTemplate`${currentPath.includes("/result") ? null : renderTemplate`${maybeRenderHead()}<main class="container_social"><a${addAttribute(configApp.link_facebook_chat, "href")} target="_blank">${renderComponent($$result, "IconFacebook", $$IconFacebook, {})}</a><a${addAttribute(configApp.link_zalo_chat, "href")} target="_blank">${renderComponent($$result, "IconZalo", $$IconZalo, {})}</a><a${addAttribute(`tel:${configApp.hotline_1}`, "href")}>${renderComponent($$result, "IconPhone", $$IconPhone, {})}</a></main>`}`;
}, "C:/Users/Admin/Desktop/template/src/components/SocialNetwork/index.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://test-gg-seven.vercel.app");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  const path = Astro2.url.pathname;
  const isNotFoundPage = path === "/404";
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="title"', '><meta name="description"', ">", '<meta property="og:description"', '><meta property="og:site_name" content="Template-v2"><meta property="og:locale" content="vi_VN"><meta property="fb:page_id"', '><meta property="og:title"', '><meta property="og:type" content="website">', '<link rel="sitemap" href="/sitemap-index.xml">', '<link rel="shortcut icon" href="/favicon.ico"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"><title>', "</title><!-- Google Tag Manager --><script>\n      (function (w, d, s, l, i) {\n        w[l] = w[l] || [];\n        w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });\n        var f = d.getElementsByTagName(s)[0],\n          j = d.createElement(s),\n          dl = l != 'dataLayer' ? '&l=' + l : '';\n        j.async = true;\n        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;\n        f.parentNode.insertBefore(j, f);\n      })(window, document, 'script', 'dataLayer', 'GTM-MJSVF2VQ');\n    <\/script><!-- End Google Tag Manager -->", "", '</head> <body> <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MJSVF2VQ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) --> <main class="container"> ', ' <div class="content"> ', " ", " </div> ", " </main> </body></html>"])), addAttribute(title, "content"), addAttribute(description, "content"), renderSlot($$result, $$slots["head"]), addAttribute(description, "content"), addAttribute(configApp.fb_id, "content"), addAttribute(title, "content"), isNotFoundPage && renderTemplate`<meta property="og:url"${addAttribute(`${configApp.website}${path}`, "content")}>`, !isNotFoundPage && renderTemplate`<link rel="canonical"${addAttribute(`${configApp.website}${path}`, "href")}>`, title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderComponent($$result, "HeaderLayout", $$Index$2, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "SocialNetwork", $$Index, {}), renderComponent($$result, "FooterLayout", $$Index$1, {}));
}, "C:/Users/Admin/Desktop/template/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
