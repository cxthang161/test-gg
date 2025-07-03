import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_C_9WVnBW.mjs';
import 'kleur/colors';
import 'clsx';

const $$FormContact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="contact-form"> <form> <div> <label for="exampleInputEmail1">Tên người gửi <span>( * )</span></label> <input type="text" aria-describedby="emailHelp" placeholder="Nhập tên của bạn"> </div> <div> <label for="exampleInputPassword1">Số điện thoại <span>( * )</span></label> <input type="number" placeholder="Số điện thoại của bạn"> </div> <div> <label for="exampleInputPassword1">Email</label> <input type="email" placeholder="Nhập email của bạn"> </div> <div> <label for="exampleInputPassword1">Nội dung gửi <span>( * )</span></label> <textarea id="w3review" name="w3review" rows="5" cols="50"></textarea> </div> <button type="submit" class="contact-form__button">Gửi nội dung</button> </form> </section>`;
}, "C:/Users/Admin/Desktop/template/src/pages/contact/FormContact.astro", void 0);

const $$file = "C:/Users/Admin/Desktop/template/src/pages/contact/FormContact.astro";
const $$url = "/contact/FormContact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FormContact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$FormContact as $, _page as _ };
