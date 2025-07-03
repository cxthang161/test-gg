import { a as createAstro, c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute, e as renderTransition, u as unescapeHTML } from '../../chunks/astro/server_C_9WVnBW.mjs';
import 'kleur/colors';
import { b as blogDetail } from '../../chunks/defaultData_x4PRe3E8.mjs';
import { i as isEmpty } from '../../chunks/index_DKatZWhz.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DiTWz_fX.mjs';
/* empty css                                     */
import { $ as $$Index$1 } from '../../chunks/index_-7pT_fvV.mjs';
import { c as configApp } from '../../chunks/index_C7Rcm1oi.mjs';
import { $ as $$Index } from '../../chunks/index_DboOV6tZ.mjs';
export { renderers } from '../../renderers.mjs';

const zoom = (animation) => namedZoom("", animation);
const namedZoom = (keyframeNamePrefix, animation) => {
  const common = {
    easing: "ease-in-out",
    fillMode: "both",
    duration: "0.3s",
    ...animation
  };
  const forwards = {
    old: { ...common, name: `${keyframeNamePrefix}FwdZoomOut` },
    new: { ...common, name: `${keyframeNamePrefix}FwdZoomIn` }
  };
  const backwards = {
    old: { ...common, name: `${keyframeNamePrefix}BwdZoomOut` },
    new: { ...common, name: `${keyframeNamePrefix}BwdZoomIn` }
  };
  return { forwards, backwards };
};

const $$Astro = createAstro("https://test-gg-seven.vercel.app");
const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  const fetchData = async () => {
    try {
      const response = await fetch(`${configApp.urlAPIDetailNew}${slug}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          productKey: configApp.productKey
        }
      });
      let data = await response.json();
      if (isEmpty(data?.data)) {
        data = blogDetail.find((item) => item.postName == slug);
        return data;
      }
      return data.data;
    } catch (error) {
      let data = blogDetail.find((item) => item.postName == slug);
      return data;
    }
  };
  let newDetailAPI = await fetchData();
  if (isEmpty(newDetailAPI)) return Astro2.redirect("/404");
  const listTag = !isEmpty(newDetailAPI?.tags) && newDetailAPI?.tags?.split(", ") || [];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": newDetailAPI.title, "description": newDetailAPI.shortContent }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="news-detail"${addAttribute(renderTransition($$result2, "ni5yhm7v", zoom({ duration: "0.5s" })), "data-astro-transition-scope")}> <div class="container"> <div class="post-detail"> <div class="content-post"> ${renderComponent($$result2, "HeaderSection", $$Index, { "title": newDetailAPI.title })} <p class="content-post-created-at">
Đăng ngày: ${newDetailAPI.createDate} </p> <div class="content-post-thumb"> ${renderComponent($$result2, "ImageComponent", $$Index$1, { "urlImage": newDetailAPI?.imageURL, "alt": `img-${newDetailAPI?.imageURL}`, "width": 300, "height": 300 })} </div> <div class="content-post-render">${unescapeHTML(newDetailAPI.fullContent)}</div> <div class="content-post-tags"> ${!isEmpty(listTag) ? renderTemplate`<ul class="content-post-tags-ul"> ${listTag.map((item) => renderTemplate`<li class="content-post-tags-ul-li"> <a${addAttribute(`/news-by-tag?tag=${item}`, "href")} class="content-post-tags-ul-li-a"> ${item} </a> </li>`)} </ul>` : renderTemplate`<div></div>`} </div> </div> </div> </div> </div> ` })}`;
}, "C:/Users/Admin/Desktop/template/src/pages/news/[...slug].astro", "self");

const $$file = "C:/Users/Admin/Desktop/template/src/pages/news/[...slug].astro";
const $$url = "/news/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
