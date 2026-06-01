import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { C as Card } from "./card-RGlIzTYo.mjs";
import { B as Button } from "./button-BC9oXVxV.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { B as Badge } from "./badge-DyfXZgLs.mjs";
import { T as Table, d as TableHeader, e as TableRow, c as TableHead, a as TableBody, b as TableCell } from "./table-DhIrzwGX.mjs";
import { u as useAuth, c as canAccess } from "./router-BHrPxnB_.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { d as Building2, Q as ShieldPlus, $ as UserCog, X as Trash2 } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function AdminConsole() {
  const {
    user
  } = useAuth();
  const navigate = useNavigate();
  const [orgName, setOrgName] = reactExports.useState("");
  const [adminEmail, setAdminEmail] = reactExports.useState("");
  const [orgs, setOrgs] = reactExports.useState([{
    id: "o1",
    name: "Quantum Labs",
    seats: 24,
    plan: "Pro"
  }, {
    id: "o2",
    name: "Cryo Systems",
    seats: 8,
    plan: "Starter"
  }, {
    id: "o3",
    name: "Helix Photonics",
    seats: 142,
    plan: "Enterprise"
  }]);
  reactExports.useEffect(() => {
    if (user && !canAccess(user.role, "admin")) navigate({
      to: "/dashboard",
      replace: true
    });
  }, [user, navigate]);
  if (!user) return null;
  const createOrg = () => {
    if (orgName.trim().length < 2) return toast.error("Enter an organization name");
    setOrgs((o) => [...o, {
      id: `o_${Date.now()}`,
      name: orgName,
      seats: 0,
      plan: "Starter"
    }]);
    toast.success(`Organization "${orgName}" created`);
    setOrgName("");
  };
  const removeOrg = (id) => {
    setOrgs((o) => o.filter((x) => x.id !== id));
    toast("Organization deleted");
  };
  const createAdmin = () => {
    if (!/^\S+@\S+\.\S+$/.test(adminEmail)) return toast.error("Enter a valid email");
    toast.success(`Admin invite sent to ${adminEmail}`);
    setAdminEmail("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 6
  }, animate: {
    opacity: 1,
    y: 0
  }, transition: {
    duration: 0.4
  }, className: "mx-auto w-full max-w-6xl px-6 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-semibold tracking-tight text-foreground", children: "Admin Console" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Platform-level controls. Visible to Silicofeller administrators only." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-3xl border-border p-6 shadow-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-4 w-4 text-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground", children: "Create organization" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: orgName, onChange: (e) => setOrgName(e.target.value), placeholder: "Acme Quantum", className: "mt-4 h-11 rounded-xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: createOrg, className: "mt-3 h-10 rounded-full", children: "Create organization" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-3xl border-border p-6 shadow-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldPlus, { className: "h-4 w-4 text-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground", children: "Invite new admin" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: adminEmail, onChange: (e) => setAdminEmail(e.target.value), placeholder: "new.admin@silicofeller.com", className: "mt-4 h-11 rounded-xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: createAdmin, className: "mt-3 h-10 rounded-full", children: "Send admin invite" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-6 rounded-3xl border-border p-6 shadow-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(UserCog, { className: "h-4 w-4 text-accent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground", children: "Organizations" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { className: "mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Organization" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Seats" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Plan" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-right", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: orgs.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium text-foreground", children: o.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: o.seats }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "rounded-full", children: o.plan }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => removeOrg(o.id), className: "text-muted-foreground hover:text-destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) }) })
        ] }, o.id)) })
      ] })
    ] })
  ] });
}
export {
  AdminConsole as component
};
