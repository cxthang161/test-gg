import { a as createAstro, c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute, u as unescapeHTML, F as Fragment } from '../../chunks/astro/server_C_9WVnBW.mjs';
import 'kleur/colors';
import { c as configApp } from '../../chunks/index_C0gxgacJ.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CrkQup_b.mjs';
import { C as Clock, L as Location, T as Transport } from '../../chunks/clock_DNqtj027.mjs';
import { c as $$CalendarIcon } from '../../chunks/ZoomOutIcon_Bvkbm1LY.mjs';
import { i as isEmpty } from '../../chunks/index_DKatZWhz.mjs';
import '../../chunks/index_C_ZeCZ7O.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_Bg1GeL1W.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://test-gg-seven.vercel.app/");
const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug, tour } = Astro2.params;
  const isParams = configApp.tours.find((x) => x.path === tour);
  if (!isParams) return Astro2.redirect("/404");
  const fetchData = async () => {
    try {
      const response2 = await fetch(`${configApp.urlAPIToursDetail}${slug}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ProductKey: configApp.productKey
        }
      });
      const data = await response2.json();
      return data.data;
    } catch (error) {
    }
  };
  const response = await fetchData();
  if (isEmpty(response)) return Astro2.redirect("/404");
  const departDates = response?.departDate.split(".");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": response.title, "description": response.shortContent || "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="section-tour-detail space-section"> <div class="container"> <div class="tour-thumb"> ${renderComponent($$result2, "Image", $$Image, { "src": !isEmpty(response?.imageURL) ? response?.imageURL : "/errorImage.png", "width": 1200, "height": 400, "alt": `img-${response?.imageURL}`, "onerror": `this.onerror=null;this.src='/errorImage.png';` })} </div> <p class="content-tour-title"> ${response.title} </p> <div class="button-to-detail"> <a${addAttribute("#tour-summary", "href")} class="button-to-detail__link"> <span class="button-to-detail__text">Tổng quan</span> </a> <a${addAttribute("#tour-total-cost", "href")} class="button-to-detail__link"> <span class="button-to-detail__text">Chi tiết giá</span> </a> <a${addAttribute("#tour-price-includes", "href")} class="button-to-detail__link"> <span class="button-to-detail__text">Giá bao gồm</span> </a> <a${addAttribute("#tour-journey", "href")} class="button-to-detail__link"> <span class="button-to-detail__text">Hành trình</span> </a> <a${addAttribute("#tour-policy", "href")} class="button-to-detail__link"> <span class="button-to-detail__text">Chính sách</span> </a> </div> <div class="tour-detail"> <div class="content-tour"> <div class="tour-detail-short-content" id="tour-summary"> <p class="tour-detail-short-content-title">Tổng quan</p> <div>${unescapeHTML(response.shortContent)}</div> </div> <div class="tour-detail-price-content" id="tour-total-cost"> <p class="tour-detail-price-content-title">Chi tiết giá</p> <div>${unescapeHTML(response.priceContent)}</div> </div> <div class="tour-detail-price-detail" id="tour-price-includes"> <p class="tour-detail-price-detail-title">Giá bao gồm</p> <div>${unescapeHTML(response.priceDetail)}</div> </div> <div class="tour-detail-journey" id="tour-journey"> <p class="tour-detail-journey-title">Hành trình</p> <div>${unescapeHTML(response.journey)}</div> </div> <div class="tour-detail-price-policy" id="tour-policy"> <p class="tour-detail-price-policy-title">Chính sách</p> <div>${unescapeHTML(response.policy)}</div> </div> </div> <div class="tour-detail-info"> <div style="position: sticky; top: 0px"> <div class="info-tour-common"> <p class="info-tour-common-price">${response.totalPrice}</p> <div class="tour-detail-info-date"> <div class="tour-detail-info-date__time"> ${response?.duration && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${unescapeHTML(Clock)}` })} <p class="tour-detail-info-date__time__text"> ${response?.duration} </p> ` })}`} </div> </div> <div class="tour-detail-info-date"> <div class="tour-detail-info-date__departure"> ${renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "CalendarIcon", $$CalendarIcon, {})} <div> ${departDates.map((date) => renderTemplate`<p class="tour-detail-info-date__departure__text"> ${date} </p>`)} </div> ` })}`} </div> </div> <div class="tour-detail-info-location-vehicle"> <div class="tour-detail-info-location-vehicle__location"> ${response?.departPlace && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${unescapeHTML(Location)}` })} <p class="tour-detail-info-location-vehicle__location__text">
Khởi hành:
<strong>${response.departPlace}</strong> </p> ` })}`} </div> <div class="tour-detail-info-location-vehicle__vehicle"> ${response?.transport && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${unescapeHTML(Transport)}` })} <p class="tour-detail-info-location-vehicle__vehicle__text">
Phương tiện: ${response.transport} </p> ` })}`} </div> </div> </div> </div> </div> </div> </div> </div> ` })}`;
}, "C:/Users/Admin/Desktop/template/src/pages/[tour]/[...slug].astro", void 0);

const $$file = "C:/Users/Admin/Desktop/template/src/pages/[tour]/[...slug].astro";
const $$url = "/[tour]/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
