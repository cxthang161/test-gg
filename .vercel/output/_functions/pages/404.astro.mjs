import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_C_9WVnBW.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CrkQup_b.mjs';
export { renderers } from '../renderers.mjs';

const imageNotFound = new Proxy({"src":"/_astro/pageNotFound.Ch4Ewmwe.png","width":400,"height":320,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Admin/Desktop/template/src/asset/images/pageNotFound.png";
							}
							
							return target[name];
						}
					});

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404", "description": "Kh\xF4ng t\xECm th\u1EA5y trang" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="page-404"> <p>Không tìm thấy trang</p> <p>Trang này không tồn tại hoặc đã bị xóa!</p> <img${addAttribute(400, "width")}${addAttribute(400, "height")}${addAttribute(imageNotFound.src, "src")}${addAttribute("404: Not Found", "alt")} class="page-404-img"> </div> <div class="button-back"> <button class="button-back-item"><a href="/" data-astro-reload class="button-back-item-href">Quay về trang chủ</a></button> </div> </div> ` })}`;
}, "C:/Users/Admin/Desktop/template/src/pages/404.astro", void 0);

const $$file = "C:/Users/Admin/Desktop/template/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
