import { a as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as addAttribute, u as unescapeHTML, F as Fragment } from '../chunks/astro/server_C_9WVnBW.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CrkQup_b.mjs';
import { $ as $$Index$3 } from '../chunks/index_DLkRoQBz.mjs';
import { L as Location, C as Clock, T as Transport } from '../chunks/clock_DNqtj027.mjs';
import { c as $$CalendarIcon } from '../chunks/ZoomOutIcon_Bvkbm1LY.mjs';
import { c as configApp } from '../chunks/index_C0gxgacJ.mjs';
import { $ as $$Index$4 } from '../chunks/index_mtMQvu7q.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://test-gg-seven.vercel.app/");
const $$Index$2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const { dataTour, path } = Astro2.props;
  return renderTemplate`${dataTour ? renderTemplate`${maybeRenderHead()}<div class="card-tour">${renderComponent($$result, "ImageComponent", $$Index$3, { "urlImage": `${dataTour.imageURL}`, "width": 240, "height": 240, "alt": `img-${dataTour.postName}` })}<div class="card-tour__container"><div class="card-tour__container--content"><p class="card-tour__container--content-title">${dataTour.title}</p><div class="card-tour__container--content--des"><div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(Location)}` })}<p>${dataTour.departPlace}</p></div><div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(Clock)}` })}<p>${dataTour.duration}</p></div></div><div class="card-tour__container--content--des"><div>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(Transport)}` })}<p>${dataTour.transport}</p></div><div>${renderComponent($$result, "CalendarIcon", $$CalendarIcon, {})}<p>${dataTour.departDate}</p></div></div><div class="card-tour__container--content--short">${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(dataTour.shortContent)}` })}</div></div><div class="card-tour__container--price"><strong>${dataTour.totalPrice}</strong><a${addAttribute(`/${path}/${dataTour.postName}`, "href")}>Xem chi tiết</a></div></div></div>` : renderTemplate`<p>Hiện tại chưa có tours</p>`}`;
}, "C:/Users/Admin/Desktop/template/src/components/CardTour/index.astro", void 0);

const $$Astro$1 = createAstro("https://test-gg-seven.vercel.app/");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const { idHotTour, path } = Astro2.props;
  const fetchData = async () => {
    try {
      const response2 = await fetch(`${configApp.urlAPITours}${idHotTour}`, {
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
  return renderTemplate`${maybeRenderHead()}<div class="tours"> <p>Tours hot</p> <div class="tours-list"> ${response?.map((tour) => renderTemplate`<div class="hot-tour"> ${renderComponent($$result, "ImageComponent", $$Index$3, { "urlImage": `${tour.imageURL}`, "width": 140, "height": 107, "alt": `img-${tour.postName}` })} <div class="hot-tour__container"> <div class="hot-tour__content"> <p class="hot-tour__content-title">${tour.title}</p> <div> <div> ${renderComponent($$result, "CalendarIcon", $$CalendarIcon, {})} <p>${tour.departDate}</p> </div> <div> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(Clock)}` })} <p>${tour.duration}</p> </div> </div> </div> <div class="hot-tour__content-price"> <strong>${tour.totalPrice}</strong> <a${addAttribute(`/${path?.path}/${tour.postName}`, "href")}>Xem chi tiết</a> </div> </div> </div>`)} ${response && response.length === 0 && renderTemplate`<p class="no-content">Không có bài viết</p>`} </div> </div>`;
}, "C:/Users/Admin/Desktop/template/src/components/HotTour/index.astro", void 0);

const $$Astro = createAstro("https://test-gg-seven.vercel.app/");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { tour } = Astro2.params;
  const currentTour = configApp.tours.find((item) => item.path === tour);
  if (!currentTour || !configApp.isTours) return Astro2.redirect("/404");
  const tourHot = currentTour?.id > 2 ? currentTour.id - 1 : currentTour.id === 1 ? currentTour.id + 1 : currentTour.id;
  const fetchData = async () => {
    try {
      const response2 = await fetch(`${configApp.urlAPITours}${currentTour?.id}`, {
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": currentTour?.name || "", "description": "Kh\xE1m ph\xE1 c\xE1c tour du l\u1ECBch h\u1EA5p d\u1EABn v\xE0 \u0111a d\u1EA1ng m\xE0 ch\xFAng t\xF4i cung c\u1EA5p. T\u1EEB nh\u1EEFng chuy\u1EBFn \u0111i kh\xE1m ph\xE1 thi\xEAn nhi\xEAn hoang d\xE3 \u0111\u1EBFn nh\u1EEFng h\xE0nh tr\xECnh v\u0103n h\xF3a \u0111\u1EB7c s\u1EAFc, m\u1ED7i tour \u0111\u1EC1u \u0111\u01B0\u1EE3c thi\u1EBFt k\u1EBF \u0111\u1EC3 mang l\u1EA1i tr\u1EA3i nghi\u1EC7m tuy\u1EC7t v\u1EDDi nh\u1EA5t cho b\u1EA1n. H\xE3y c\xF9ng ch\xFAng t\xF4i kh\xE1m ph\xE1 nh\u1EEFng \u0111i\u1EC3m \u0111\u1EBFn m\u1EDBi l\u1EA1, g\u1EB7p g\u1EE1 nh\u1EEFng ng\u01B0\u1EDDi b\u1EA1n m\u1EDBi v\xE0 t\u1EA1o ra nh\u1EEFng k\u1EF7 ni\u1EC7m kh\xF4ng th\u1EC3 qu\xEAn." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="combo-tour"> ${renderComponent($$result2, "HeaderSection", $$Index$4, { "title": currentTour?.name })} <div class="combo-tour__content"> <div class="combo-tour__content--list-tour"> ${response?.map((item) => renderTemplate`${renderComponent($$result2, "CardTour", $$Index$2, { "dataTour": item, "path": tour })}`)} ${response && response.length === 0 && renderTemplate`<p class="no-content">Không có bài viết</p>`} </div> ${renderComponent($$result2, "HotTour", $$Index$1, { "idHotTour": tourHot, "path": configApp.tours.find((x) => x.id === tourHot) })} </div> </section> ` })}`;
}, "C:/Users/Admin/Desktop/template/src/pages/[tour]/index.astro", void 0);

const $$file = "C:/Users/Admin/Desktop/template/src/pages/[tour]/index.astro";
const $$url = "/[tour]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
