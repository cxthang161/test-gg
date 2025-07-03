import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent } from './astro/server_C_9WVnBW.mjs';
import 'kleur/colors';
import { d as $$ArrowRightCircleIcon } from './ZoomOutIcon_Bvkbm1LY.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
/* empty css                         */
import { q as questions } from './questions_DuX8o4TY.mjs';

function AnswerAQuestion({ data }) {
  const [answer, setAnswer] = useState(-1);
  const handleClick = (index) => {
    setAnswer(index);
  };
  return /* @__PURE__ */ jsx("ul", { className: "answer-a-question", children: data.map((item, index) => /* @__PURE__ */ jsxs("li", { className: "question-item", children: [
    /* @__PURE__ */ jsxs("p", { onClick: () => handleClick(index), children: [
      "›› ",
      item.name
    ] }),
    /* @__PURE__ */ jsx("div", { className: index === answer ? "answer" : "answer-hidden", children: /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: item.shortDescription } }) })
  ] }, index)) });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> <div class="question"> <h4 class="title-buyTicket question-title">Câu hỏi thường gặp</h4> ${renderComponent($$result, "AnswerAQuestion", AnswerAQuestion, { "data": questions, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Admin/Desktop/template/src/components/react/AnswerAQuestion/index.tsx", "client:component-export": "default" })} <a href="/questions" class="question-btn"><p>Xem chi tiết</p> ${renderComponent($$result, "ArrowRightCircleIcon", $$ArrowRightCircleIcon, {})}</a> </div> </section>`;
}, "C:/Users/Admin/Desktop/template/src/pages/home/question/index.astro", void 0);

const $$file = "C:/Users/Admin/Desktop/template/src/pages/home/question/index.astro";
const $$url = "/home/question";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Index as $, _page as _ };
