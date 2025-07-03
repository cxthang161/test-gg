import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BdvLCMsW.mjs';
import { manifest } from './manifest_-rm5eb0e.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/contact/formcontact.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/home/about-us.astro.mjs');
const _page5 = () => import('./pages/home/buyticket.astro.mjs');
const _page6 = () => import('./pages/home/form-search.astro.mjs');
const _page7 = () => import('./pages/home/payment.astro.mjs');
const _page8 = () => import('./pages/home/question.astro.mjs');
const _page9 = () => import('./pages/home.astro.mjs');
const _page10 = () => import('./pages/introduce.astro.mjs');
const _page11 = () => import('./pages/news.astro.mjs');
const _page12 = () => import('./pages/news/_---slug_.astro.mjs');
const _page13 = () => import('./pages/payment-options.astro.mjs');
const _page14 = () => import('./pages/privacy-policy.astro.mjs');
const _page15 = () => import('./pages/questions.astro.mjs');
const _page16 = () => import('./pages/questions/_---slug_.astro.mjs');
const _page17 = () => import('./pages/result.astro.mjs');
const _page18 = () => import('./pages/_tour_.astro.mjs');
const _page19 = () => import('./pages/_tour_/_---slug_.astro.mjs');
const _page20 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/contact/FormContact.astro", _page2],
    ["src/pages/contact/index.astro", _page3],
    ["src/pages/home/about-us/index.astro", _page4],
    ["src/pages/home/buyTicket/index.astro", _page5],
    ["src/pages/home/form-search/index.astro", _page6],
    ["src/pages/home/payment/index.astro", _page7],
    ["src/pages/home/question/index.astro", _page8],
    ["src/pages/home/index.astro", _page9],
    ["src/pages/introduce/index.astro", _page10],
    ["src/pages/news/index.astro", _page11],
    ["src/pages/news/[...slug].astro", _page12],
    ["src/pages/payment-options/index.astro", _page13],
    ["src/pages/privacy-policy/index.astro", _page14],
    ["src/pages/questions/index.astro", _page15],
    ["src/pages/questions/[...slug].astro", _page16],
    ["src/pages/result/index.astro", _page17],
    ["src/pages/[tour]/index.astro", _page18],
    ["src/pages/[tour]/[...slug].astro", _page19],
    ["src/pages/index.astro", _page20]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
