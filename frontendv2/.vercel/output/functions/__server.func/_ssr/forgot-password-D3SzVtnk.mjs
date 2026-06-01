import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button } from "./button-BC9oXVxV.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { A as AuthCard, F as FormField } from "./form-field-6duKReEo.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { A as ArrowLeft, C as Check, M as Mail } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/tailwind-merge.mjs";
import "./label-JU3yqRBo.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function ForgotPasswordPage() {
  const [email, setEmail] = reactExports.useState("");
  const [error, setError] = reactExports.useState();
  const [sent, setSent] = reactExports.useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email address");
      return;
    }
    setError(void 0);
    setSent(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-1 items-center justify-center px-6 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: !sent ? /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
    opacity: 0,
    y: 8
  }, animate: {
    opacity: 1,
    y: 0
  }, exit: {
    opacity: 0,
    y: -8
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AuthCard, { title: "Reset your password", subtitle: "Enter your email and we'll send a secure reset link.", footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/sign-in", className: "inline-flex items-center gap-1.5 font-medium text-accent hover:text-accent/80", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
    "Back to sign in"
  ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "space-y-4", noValidate: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Email", htmlFor: "email", error, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", type: "email", autoComplete: "email", placeholder: "you@company.com", value: email, onChange: (e) => setEmail(e.target.value), className: "h-11" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "h-11 w-full rounded-full text-sm font-semibold", children: "Send reset link" })
  ] }) }) }, "form") : /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
    opacity: 0,
    y: 8
  }, animate: {
    opacity: 1,
    y: 0
  }, exit: {
    opacity: 0,
    y: -8
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AuthCard, { title: "Reset link sent", subtitle: `We sent a secure reset link to ${email}. Check your inbox.`, footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/sign-in", className: "inline-flex items-center gap-1.5 font-medium text-accent hover:text-accent/80", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
    "Back to sign in"
  ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-4 py-2 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      scale: 0.6,
      opacity: 0
    }, animate: {
      scale: 1,
      opacity: 1
    }, transition: {
      type: "spring",
      stiffness: 260,
      damping: 18
    }, className: "flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--accent-soft)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-7 w-7 text-accent", strokeWidth: 3 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
      "Reset Link Sent Successfully"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", className: "h-10", onClick: () => {
      setSent(false);
      setEmail("");
    }, children: "Send to a different email" })
  ] }) }) }, "sent") }) });
}
export {
  ForgotPasswordPage as component
};
