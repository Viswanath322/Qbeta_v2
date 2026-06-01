import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./utils-H80jjgLf.mjs";
import { L as Label } from "./label-JU3yqRBo.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function AuthCard({ title, subtitle, children, footer, className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 12, scale: 0.985 },
      animate: { opacity: 1, y: 0, scale: 1 },
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
      className: cn(
        "relative w-full max-w-[440px] rounded-3xl border border-border bg-card p-8 sm:p-10",
        className
      ),
      style: { boxShadow: "var(--shadow-card)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-7 space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-[1.625rem] font-semibold leading-tight text-foreground", children: title }),
          subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.9375rem] text-muted-foreground", children: subtitle })
        ] }),
        children,
        footer && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-7 border-t border-border pt-5 text-center text-sm text-muted-foreground", children: footer })
      ]
    }
  );
}
function FormField({ label, htmlFor, error, hint, className, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("space-y-1.5", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor, className: "text-[0.8125rem] font-medium text-foreground", children: label }),
    children,
    error ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", role: "alert", children: error }) : hint ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: hint }) : null
  ] });
}
export {
  AuthCard as A,
  FormField as F
};
