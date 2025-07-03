import { a as createAstro, c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_C_9WVnBW.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_DiTWz_fX.mjs';
import { q as questions } from '../../chunks/questions_DuX8o4TY.mjs';
import { c as convertStringtoUrl } from '../../chunks/index_DKatZWhz.mjs';
import { $ as $$Index } from '../../chunks/index_DboOV6tZ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://test-gg-seven.vercel.app");
const prerender = false;
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  const title = questions.filter(
    (question) => convertStringtoUrl(question.name) === "/" + slug
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title[0].name, "description": title[0]?.shortDescription || "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="question-detail"> ${renderComponent($$result2, "HeaderSection", $$Index, { "title": title[0].name })} <div>${unescapeHTML(title[0].fullDescription ? title[0].fullDescription : title[0].shortDescription)}</div> </div> ` })}`;
}, "C:/Users/Admin/Desktop/template/src/pages/questions/[...slug].astro", void 0);

const $$file = "C:/Users/Admin/Desktop/template/src/pages/questions/[...slug].astro";
const $$url = "/questions/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
