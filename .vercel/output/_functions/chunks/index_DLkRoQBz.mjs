import { a as createAstro, c as createComponent, r as renderTemplate, b as renderComponent } from './astro/server_C_9WVnBW.mjs';
import 'kleur/colors';
import './index_C_ZeCZ7O.mjs';
import { $ as $$Image } from './_astro_assets_Bg1GeL1W.mjs';

const errorImage = new Proxy({"src":"/_astro/errorImage.CHwfbJKy.png","width":400,"height":319,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Admin/Desktop/template/src/asset/images/errorImage.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://test-gg-seven.vercel.app/");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { urlImage, width, height, alt } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": urlImage, "width": width, "height": height, "alt": `img-${alt}`, "onerror": `this.onerror=null;this.src='${errorImage.src}';` })}`;
}, "C:/Users/Admin/Desktop/template/src/components/ImageComponent/index.astro", void 0);

export { $$Index as $ };
