import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { B as Button } from "./button-BC9oXVxV.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { Q as QuantumHero, P as PasswordInput, C as Checkbox, S as SocialButton } from "./quantum-hero-Brqe82Lk.mjs";
import { A as AuthCard, F as FormField } from "./form-field-6duKReEo.mjs";
import { u as useAuth } from "./router-BHrPxnB_.mjs";
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
import "../_libs/lucide-react.mjs";
import "./label-JU3yqRBo.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function SignUpPage() {
  const navigate = useNavigate();
  const {
    signUp
  } = useAuth();
  const [form, setForm] = reactExports.useState({
    fullName: "",
    organization: "",
    email: "",
    password: "",
    confirm: "",
    terms: false,
    updates: true
  });
  const [errors, setErrors] = reactExports.useState({});
  const update = (k, v) => setForm((f) => ({
    ...f,
    [k]: v
  }));
  const onSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (form.fullName.trim().length < 2) next.fullName = "Enter your full name";
    if (form.organization.trim().length < 2) next.organization = "Enter your organization";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email";
    if (form.password.length < 8) next.password = "At least 8 characters";
    if (form.password !== form.confirm) next.confirm = "Passwords don't match";
    if (!form.terms) next.terms = "You must accept the terms";
    setErrors(next);
    if (Object.keys(next).length) return;
    signUp({
      name: form.fullName,
      email: form.email,
      organization: form.organization
    });
    toast.success(`Welcome — you're the Organization Manager for ${form.organization}`);
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
    }, className: "hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QuantumHero, { eyebrow: "Join 4,000+ chip designers", headline: "Start Designing Quantum Hardware with AI", description: "From natural-language requirements to optimized qubit layouts and routing — generated in seconds." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "flex items-center justify-center py-6 lg:py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AuthCard, { title: "Create your account", subtitle: "Free to start. No credit card required.", footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Already have an account?",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/sign-in", className: "font-medium text-accent hover:text-accent/80", children: "Sign in" })
    ] }), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "space-y-4", noValidate: true, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Full name", htmlFor: "fullName", error: errors.fullName, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "fullName", autoComplete: "name", placeholder: "Ada Lovelace", value: form.fullName, onChange: (e) => update("fullName", e.target.value), className: "h-11" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Organization", htmlFor: "org", error: errors.organization, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "org", autoComplete: "organization", placeholder: "Acme Quantum", value: form.organization, onChange: (e) => update("organization", e.target.value), className: "h-11" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Work email", htmlFor: "email", error: errors.email, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", type: "email", autoComplete: "email", placeholder: "you@company.com", value: form.email, onChange: (e) => update("email", e.target.value), className: "h-11" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Password", htmlFor: "password", error: errors.password, hint: "At least 8 characters", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PasswordInput, { id: "password", autoComplete: "new-password", value: form.password, onChange: (e) => update("password", e.target.value), className: "h-11" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FormField, { label: "Confirm password", htmlFor: "confirm", error: errors.confirm, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PasswordInput, { id: "confirm", autoComplete: "new-password", value: form.confirm, onChange: (e) => update("confirm", e.target.value), className: "h-11" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5 pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-start gap-2.5 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { id: "terms", checked: form.terms, onCheckedChange: (v) => update("terms", Boolean(v)), className: "mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "I agree to the",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-foreground underline", children: "Terms of Service" }),
              " and",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "text-foreground underline", children: "Privacy Policy" }),
              "."
            ] })
          ] }),
          errors.terms && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pl-7 text-xs text-destructive", role: "alert", children: errors.terms }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-start gap-2.5 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { id: "updates", checked: form.updates, onCheckedChange: (v) => update("updates", Boolean(v)), className: "mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Send me product updates and quantum research news." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "h-11 w-full rounded-full text-sm font-semibold", children: "Create account" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-5 flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "or sign up with" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1 bg-border" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SocialButton, { provider: "google", label: "Sign up with Google", onClick: () => toast("Demo only") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SocialButton, { provider: "github", label: "Sign up with GitHub", onClick: () => toast("Demo only") })
      ] })
    ] }) })
  ] });
}
export {
  SignUpPage as component
};
