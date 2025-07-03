import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_C_9WVnBW.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CrkQup_b.mjs';
import { c as configApp } from '../chunks/index_C0gxgacJ.mjs';
import { $ as $$Index$1 } from '../chunks/index_mtMQvu7q.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gi\u1EDBi thi\u1EC7u", "description": `${configApp.company_name} l\xE0 website \u0110\u1EB7t V\xE9 M\xE1y Bay Tr\u1EF1c Tuy\u1EBFn. \u0110\u01B0\u1EE3c thi\u1EBFt
        k\u1EBF v\u1EDBi giao di\u1EC7n th\xE2n thi\u1EC7n, d\u1EC5 s\u1EED d\u1EE5ng.` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="introduce"> ${renderComponent($$result2, "HeaderSection", $$Index$1, { "title": `L\u1EDDi gi\u1EDBi thi\u1EC7u v\u1EC1 ${configApp.company_name}` })} <div>${unescapeHTML(configApp.company_introduce)}</div> <p class="introduce-title">Hệ thống của chúng tôi</p> <div class="introduce-system"> <p> ${configApp.company_name} là website Đặt Vé Máy Bay Trực Tuyến. Được thiết
        kế với giao diện thân thiện, dễ sử dụng. ${configApp.company_name} thực hiện
        các chức năng sau:
</p> <div> <p> <strong>1. Tìm kiếm hành trình bay theo yêu cầu của khách hàng (chặng bay,
            ngày bay, giờ bay, giá vé)</strong> </p> <p> <strong>2. Đặt vé máy bay nội địa và quốc tế tự động</strong> </p> <p> <strong>3. Tính năng sắp xếp các chuyến bay theo mức giá vé rẻ nhất và thời
            gian bay sớm nhất. Điều này giúp dễ dàng tìm được chuyến bay phù hợp
            với nhu cầu và ngân sách của khách hàng.</strong> </p> <p> <strong>4. So sánh giá vé của 4 hãng hàng không nội địa (Vietravel
            Airlines, VietJet Air, Bamboo Airways, Vietnam Airlines)</strong> </p> </div> <p>
Website còn có phiên bản dành cho các thiết bị di động (mobile, tablet,
        laptop) giúp khách hàng có thể đặt vé máy bay nhanh chóng mọi lúc, mọi
        nơi khi muốn.
</p> </div> <p class="introduce-title">Đối tác của chúng tôi</p> <p>
Trong tương lai, ngoài mảng vé máy bay, ${configApp.company_name} có kế hoạch
      mở rộng ra lĩnh vực đặt tour du lịch, du thuyền, khách sạn….Vì vậy ${configApp.company_name} luôn mong muốn có cơ hội hợp tác với các doanh nghiệp quan tâm và có nhu
      cầu hợp tác cùng ${configApp.company_name} trong các lĩnh vực trên.
</p> </main> ` })}`;
}, "C:/Users/Admin/Desktop/template/src/pages/introduce/index.astro", void 0);

const $$file = "C:/Users/Admin/Desktop/template/src/pages/introduce/index.astro";
const $$url = "/introduce";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
