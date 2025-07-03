import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_C_9WVnBW.mjs';
import 'kleur/colors';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<section class="form-search"> <div class="about-information"> <div class="form-search-block"> <div class="form-search-block-header"> <p>T\xECm ki\u1EBFm chuy\u1EBFn bay</p> </div> <div class="form-search-block-content" id="EmbeddedSearchForm"></div> </div> </div> <script>
    var embeddedHost = 'https://embedded.vnisc.com.vn';
    var embeddedKey = '12Gdn*n68Ar!z+Ma';
    var urlResult = '/result';
    var embeddedType = 'vertical';
    (function () {
      const script = document.createElement('script');
      script.src = embeddedHost + '/Resources/Main/Embedded.js';
      script.async = true;
      document.body.appendChild(script);
    })();

    window.addEventListener('popstate', (event) => {
      if (window.location.pathname === '/') {
        (function () {
          const script = document.createElement('script');
          script.src = embeddedHost + '/Resources/Main/Embedded.js';
          script.async = true;
          document.body.appendChild(script);
        })();
      }
    });
  <\/script> </section>`])), maybeRenderHead());
}, "C:/Users/Admin/Desktop/template/src/pages/home/form-search/index.astro", void 0);

const $$file = "C:/Users/Admin/Desktop/template/src/pages/home/form-search/index.astro";
const $$url = "/home/form-search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Index as $, _page as _ };
