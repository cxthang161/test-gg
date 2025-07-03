import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_C_9WVnBW.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CrkQup_b.mjs';
import { q as questions } from '../chunks/questions_DuX8o4TY.mjs';
import { c as convertStringtoUrl } from '../chunks/index_DKatZWhz.mjs';
import { $ as $$Index$1 } from '../chunks/index_mtMQvu7q.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "C\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p", "description": "Kh\xE1m ph\xE1 nh\u1EEFng c\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p v\u1EC1 s\u1EA3n ph\u1EA9m/d\u1ECBch v\u1EE5 c\u1EE7a ch\xFAng t\xF4i. Trang n\xE0y cung c\u1EA5p nh\u1EEFng th\xF4ng tin h\u1EEFu \xEDch, gi\u1EA3i \u0111\xE1p th\u1EAFc m\u1EAFc c\u1EE7a b\u1EA1n v\u1EC1 c\xE1ch s\u1EED d\u1EE5ng, \u0111\u1EB7t h\xE0ng, th\xF4ng tin v\u1EC1 v\xE9." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="question-page"> ${renderComponent($$result2, "HeaderSection", $$Index$1, { "title": "C\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p" })} <ul> ${questions.map((question) => {
    const url = convertStringtoUrl(question.name);
    return renderTemplate`<li> <a${addAttribute("/questions" + url, "href")}>›› ${question.name}</a> </li>`;
  })} </ul> </div> ` })}`;
}, "C:/Users/Admin/Desktop/template/src/pages/questions/index.astro", void 0);

const $$file = "C:/Users/Admin/Desktop/template/src/pages/questions/index.astro";
const $$url = "/questions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
