import { a as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent } from '../chunks/astro/server_C_9WVnBW.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DiTWz_fX.mjs';
import { b as blogDetail } from '../chunks/defaultData_x4PRe3E8.mjs';
import { c as configApp } from '../chunks/index_C7Rcm1oi.mjs';
import { i as isEmpty } from '../chunks/index_DKatZWhz.mjs';
import { $ as $$Index$2 } from '../chunks/index_-7pT_fvV.mjs';
import { $ as $$Index$3 } from '../chunks/index_DboOV6tZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://test-gg-seven.vercel.app");
const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index$1;
  const { dataNews } = Astro2.props;
  return renderTemplate`${dataNews ? renderTemplate`${maybeRenderHead()}<div class="news-card"><div class="news-card-image"><a${addAttribute(`/news/${dataNews.postName}`, "href")}>${" "}${renderComponent($$result, "ImageComponent", $$Index$2, { "urlImage": `${dataNews.imageURL}`, "width": 540, "height": 440, "alt": `img-${dataNews.postName}` })}</a></div><div class="news-card-detail"><div class="news-card-detail-block"><a${addAttribute(`/news/${dataNews.postName}`, "href")} class="news-card-detail-block-title">${dataNews.title}</a></div><p class="news-card-detail-description">${dataNews.createDate}</p></div></div>` : renderTemplate`<div></div>`}`;
}, "C:/Users/Admin/Desktop/template/src/components/Card/index.astro", void 0);

const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const newsDefault = blogDetail;
  const fetchData = async () => {
    try {
      const response2 = await fetch(`${configApp.urlAPINews}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          productKey: configApp.productKey
        }
      });
      const data = await response2.json();
      if (isEmpty(data?.data)) {
        return [];
      }
      return data.data;
    } catch (error) {
    }
  };
  const response = await fetchData();
  const newList = [...response, ...newsDefault];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tin t\u1EE9c", "description": "Cung c\u1EA5p c\xE1c th\xF4ng tin m\u1EDBi nh\u1EA5t v\u1EC1 c\xE1c h\xE3ng h\xE0ng kh\xF4ng v\xE0 th\xF4ng tin v\u1EC1 website." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="news-page"> ${renderComponent($$result2, "HeaderSection", $$Index$3, { "title": "Tin t\u1EE9c m\u1EDBi nh\u1EA5t" })} <div class="container"> <div class="block-news"> <div class="grid-news-pages"> ${newList?.map((item, index) => renderTemplate`${renderComponent($$result2, "Card", $$Index$1, { "key": index, "dataNews": item })}`)} </div> </div> </div> </section> ` })}`;
}, "C:/Users/Admin/Desktop/template/src/pages/news/index.astro", void 0);

const $$file = "C:/Users/Admin/Desktop/template/src/pages/news/index.astro";
const $$url = "/news";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
