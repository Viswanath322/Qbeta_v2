import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { C as Card } from "./card-RGlIzTYo.mjs";
import { B as Button } from "./button-BC9oXVxV.mjs";
import { B as Badge } from "./badge-DyfXZgLs.mjs";
import { f as fetchHealth } from "./backend-sVf8_dNy.mjs";
import { m as Cpu, a4 as Zap, L as Layers, T as Sparkles, b as ArrowUpRight, s as LoaderCircle, i as CircleX, g as CircleCheck, u as MessageSquare } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function DashboardPage() {
  const [health, setHealth] = reactExports.useState(null);
  const [healthLoading, setHealthLoading] = reactExports.useState(true);
  const [healthError, setHealthError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    fetchHealth().then(setHealth).catch((e) => setHealthError(e.message)).finally(() => setHealthLoading(false));
  }, []);
  const stats = [{
    label: "Max Qubits",
    value: health ? String(health.max_qubits) : "—",
    icon: Cpu,
    hint: "per design"
  }, {
    label: "Backend",
    value: health ? health.version : "—",
    icon: Zap,
    hint: health?.status ?? "checking…"
  }, {
    label: "Qiskit Metal",
    value: health ? health.qiskit_metal : "—",
    icon: Layers,
    hint: health?.metal_version ?? "—"
  }, {
    label: "ML Intent",
    value: health ? health.ml_intent : "—",
    icon: Sparkles,
    hint: "intent classifier"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-7xl px-6 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 8
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.4
    }, className: "mb-8 flex flex-wrap items-end justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-semibold tracking-tight text-foreground", children: "Dashboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Welcome back. Here's a snapshot of your quantum design workspace." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "h-10 rounded-full px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/designer", children: [
        "Open Designer ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "ml-1 h-4 w-4" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      opacity: 0,
      y: 8
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.35,
      delay: i * 0.05
    }, whileHover: {
      y: -2
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-2xl border-border p-5 shadow-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: s.label }),
        healthLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin text-muted-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-4 w-4 text-accent" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-2xl font-semibold text-foreground truncate", children: healthLoading ? "…" : s.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: s.hint })
    ] }) }, s.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-6 rounded-2xl border-border p-6 shadow-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-foreground", children: "Backend Pipeline" }),
        healthLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "rounded-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-1 h-3 w-3 animate-spin" }),
          "Connecting…"
        ] }) : healthError ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "rounded-full text-red-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "mr-1 h-3 w-3" }),
          "Offline"
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "rounded-full text-green-600", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mr-1 h-3 w-3" }),
          "Online"
        ] })
      ] }),
      healthError && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-red-500 mb-3", children: [
        "⚠ Cannot reach backend: ",
        healthError,
        ". Make sure ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-xs", children: "python app.py" }),
        " is running in the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-xs", children: "backend/" }),
        " directory."
      ] }),
      health && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: health.pipeline.map((step) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground", children: step }, step)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mt-6 rounded-2xl border-border bg-gradient-to-br from-[#0A0A0F] to-[#1a1030] p-0 shadow-none overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F26B3A]/15 border border-[#F26B3A]/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-6 w-6 text-[#F26B3A]" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-white", children: "QBETA Chatbot" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-sm text-white/60", children: "Chat-style chip designer — describe your chip in plain English and get a fabricated layout instantly." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/chat", className: "inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-[#F26B3A] px-5 text-sm font-semibold text-white transition-all hover:bg-[#F26B3A]/85", children: [
        "Open Chatbot ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3.5 w-3.5" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-4 rounded-2xl border-border p-8 shadow-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-foreground", children: "Get started" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Generate your first quantum chip architecture from a natural-language prompt." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "mt-5 h-10 rounded-full px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/designer", children: "New design" }) })
    ] })
  ] });
}
export {
  DashboardPage as component
};
