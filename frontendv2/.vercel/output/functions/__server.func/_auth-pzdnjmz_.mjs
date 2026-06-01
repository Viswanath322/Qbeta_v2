import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { O as Outlet, L as Link } from "./_libs/tanstack__react-router.mjs";
import { S as SilicofellerLogo } from "./_ssr/silicofeller-logo-B3P2hb3W.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./_libs/isbot.mjs";
import "./_ssr/utils-H80jjgLf.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
function AuthLayout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "pointer-events-none absolute inset-0",
        style: { background: "var(--gradient-hero)" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex min-h-screen flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center justify-between px-6 py-5 lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/sign-in", "aria-label": "Silicofeller home", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SilicofellerLogo, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden items-center gap-6 text-sm text-muted-foreground sm:flex", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "transition-colors hover:text-foreground", children: "Platform" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "transition-colors hover:text-foreground", children: "Docs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "transition-colors hover:text-foreground", children: "Contact" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-1 flex-col", children }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "flex flex-col items-center justify-between gap-2 border-t border-border/60 px-6 py-5 text-xs text-muted-foreground sm:flex-row lg:px-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Silicofeller, Inc. All rights reserved."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "Privacy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "Terms" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "Security" })
        ] })
      ] })
    ] })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AuthLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
export {
  SplitComponent as component
};
