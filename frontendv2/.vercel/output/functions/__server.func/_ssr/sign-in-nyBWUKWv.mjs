import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { B as Button } from "./button-BC9oXVxV.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { Q as QuantumHero, P as PasswordInput, C as Checkbox, S as SocialButton } from "./quantum-hero-Brqe82Lk.mjs";
import { A as AuthCard, F as FormField } from "./form-field-6duKReEo.mjs";
import { u as useAuth, D as DEMO_ACCOUNTS } from "./router-BHrPxnB_.mjs";
import { C as Card } from "./card-RGlIzTYo.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { N as Shield, d as Building2, m as Cpu } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-checkbox.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "./label-JU3yqRBo.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function SignInPage() {
  const navigate = useNavigate();
  const {
    signIn,
    signInAs
  } = useAuth();
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [errors, setErrors] = reactExports.useState({});
  const onSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email address";
    if (password.length < 4) next.password = "Enter your password";
    setErrors(next);
    if (Object.keys(next).length) return;
    const res = signIn(email, password);
    if (!res.ok) {
      toast.error(res.error);
      setErrors({
        password: res.error
      });
      return;
    }
    toast.success("Signed in — welcome back");
    navigate({
      to: "/"
    });
  };
  const quickLogin = (role) => {
    signInAs(role);
    const acct = DEMO_ACCOUNTS.find((a) => a.role === role);
    toast.success(`Signed in as ${acct?.name}`);
    navigate({
      to: "/"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid flex-1 grid-cols-1 gap-8 px-6 pb-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.section, { initial: {
      opacity: 0,
      y: 12
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }, className: "hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QuantumHero, { eyebrow: "Quantum chip design platform", headline: "Design Quantum Chips Using AI", description: "Transform engineering requirements into production-ready quantum architectures through natural language." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "flex items-center justify-center py-6 lg:py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-[440px] space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AuthCard, { title: "Welcome back", subtitle: "Sign in to continue designing quantum hardware.", footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Don't have an account?",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/sign-up", className: "font-medium text-accent hover:text-accent/80", children: "Sign up" })
      ] }), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "space-y-4", noValidate: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Email", htmlFor: "email", error: errors.email, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", type: "email", autoComplete: "email", placeholder: "you@company.com", value: email, onChange: (e) => setEmail(e.target.value), className: "h-11" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Password", htmlFor: "password", error: errors.password, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PasswordInput, { id: "password", autoComplete: "current-password", placeholder: "Enter your password", value: password, onChange: (e) => setPassword(e.target.value), className: "h-11" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { id: "remember" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Remember me" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/forgot-password", className: "text-sm font-medium text-accent hover:text-accent/80", children: "Forgot password?" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "h-11 w-full rounded-full text-sm font-semibold", children: "Sign in" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-5 flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "or continue with" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SocialButton, { provider: "google", label: "Continue with Google", onClick: () => toast("Demo only") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SocialButton, { provider: "github", label: "Continue with GitHub", onClick: () => toast("Demo only") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium uppercase tracking-wider text-muted-foreground", children: "Demo quick login" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2.5", children: [{
          role: "admin",
          icon: Shield,
          title: "Admin",
          desc: "admin@silicofeller.com"
        }, {
          role: "org_manager",
          icon: Building2,
          title: "Organization Manager",
          desc: "manager@quantumlabs.com"
        }, {
          role: "engineer",
          icon: Cpu,
          title: "Engineer",
          desc: "engineer@quantumlabs.com"
        }].map((q) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { onClick: () => quickLogin(q.role), role: "button", tabIndex: 0, onKeyDown: (e) => (e.key === "Enter" || e.key === " ") && quickLogin(q.role), className: "flex cursor-pointer items-center gap-3 rounded-2xl border-border p-3 shadow-none transition-colors hover:bg-[color:var(--accent-soft)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(q.icon, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-foreground", children: q.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-xs text-muted-foreground", children: q.desc })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-accent", children: "Sign in →" })
        ] }, q.role)) })
      ] })
    ] }) })
  ] });
}
export {
  SignInPage as component
};
