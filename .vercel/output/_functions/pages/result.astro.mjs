import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_C_9WVnBW.mjs';
import 'kleur/colors';
/* empty css                                  */
import { $ as $$Layout } from '../chunks/Layout_CrkQup_b.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", " <script>\n  var embeddedHost = 'https://embedded.vnisc.com.vn';\n  var embeddedKey = '12Gdn*n68Ar!z+Ma';\n  var urlResult = '/result';\n  var embeddedType = 'vertical';\n  (function () {\n    const script = document.createElement('script');\n    script.src = embeddedHost + '/Resources/Main/Embedded.js';\n    script.async = true;\n    document.body.appendChild(script);\n  })();\n<\/script>"])), renderComponent($$result, "Layout", $$Layout, { "title": "T\xECm ki\u1EBFm", "description": "Ch\xFAng t\xF4i cung c\u1EA5p th\xF4ng tin chi ti\u1EBFt v\u1EC1 l\u1ECBch bay n\u1ED9i \u0111\u1ECBa v\xE0 qu\u1ED1c t\u1EBF, gi\xFAp b\u1EA1n t\xECm ki\u1EBFm chuy\u1EBFn bay ph\xF9 h\u1EE3p v\u1EDBi th\u1EDDi gian v\xE0 \u0111i\u1EC3m \u0111\u1EBFn mong mu\u1ED1n. H\xE3y nh\u1EADp th\xF4ng tin v\u1EC1 \u0111\u1ECBa \u0111i\u1EC3m kh\u1EDFi h\xE0nh, \u0111i\u1EC3m \u0111\u1EBFn v\xE0 ng\xE0y bay \u0111\u1EC3 nh\u1EADn danh s\xE1ch c\xE1c chuy\u1EBFn bay hi\u1EC7n c\xF3 c\xF9ng v\u1EDBi gi\u1EDD c\u1EA5t c\xE1nh, gi\u1EDD h\u1EA1 c\xE1nh v\xE0 m\u1EE9c gi\xE1. D\xF9 b\u1EA1n \u0111ang l\xEAn k\u1EBF ho\u1EA1ch cho m\u1ED9t chuy\u1EBFn \u0111i ng\u1EAFn ng\xE0y hay m\u1ED9t k\u1EF3 ngh\u1EC9 d\xE0i, ph\u1EA7n t\xECm ki\u1EBFm s\u1EBD gi\xFAp b\u1EA1n ti\u1EBFt ki\u1EC7m th\u1EDDi gian v\xE0 d\u1EC5 d\xE0ng l\u1EF1a ch\u1ECDn chuy\u1EBFn bay l\xFD t\u01B0\u1EDFng." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flight-result-container"> <div id="EmbeddedSearchResult"></div> </section> ` }));
}, "C:/Users/Admin/Desktop/template/src/pages/result/index.astro", void 0);

const $$file = "C:/Users/Admin/Desktop/template/src/pages/result/index.astro";
const $$url = "/result";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
