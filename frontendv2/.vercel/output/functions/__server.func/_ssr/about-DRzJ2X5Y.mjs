import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as Card } from "./card-RGlIzTYo.mjs";
import { S as SilicofellerLogo } from "./silicofeller-logo-B3P2hb3W.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 6
  }, animate: {
    opacity: 1,
    y: 0
  }, transition: {
    duration: 0.4
  }, className: "mx-auto w-full max-w-3xl px-6 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SilicofellerLogo, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-8 text-3xl font-semibold tracking-tight text-foreground", children: "About Silicofeller" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: "Silicofeller is an AI quantum chip design platform used by hardware teams to translate natural-language requirements into production-ready quantum architectures." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-8 rounded-3xl border-border p-6 shadow-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground", children: "Roles in this workspace" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "Admin" }),
          " — Silicofeller platform owner. Full control."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "Organization Manager" }),
          " — Manages users and billing within their company."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "Engineer" }),
          " — Designs, iterates and exports quantum chips."
        ] })
      ] })
    ] })
  ] });
}
export {
  AboutPage as component
};
