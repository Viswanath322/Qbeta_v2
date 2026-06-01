import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, d as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
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
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const ROLE_LABEL = {
  admin: "Admin",
  org_manager: "Organization Manager",
  engineer: "Engineer"
};
const DEMO_ACCOUNTS = [
  {
    role: "admin",
    email: "admin@silicofeller.com",
    password: "admin",
    name: "Alex Admin",
    organization: "Silicofeller"
  },
  {
    role: "org_manager",
    email: "manager@quantumlabs.com",
    password: "manager",
    name: "Mira Chen",
    organization: "Quantum Labs"
  },
  {
    role: "engineer",
    email: "engineer@quantumlabs.com",
    password: "engineer",
    name: "Eli Novak",
    organization: "Quantum Labs"
  }
];
const STORAGE_KEY = "silicofeller.auth.user";
const AuthContext = reactExports.createContext(null);
function initials(name) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((p) => p[0]?.toUpperCase() ?? "").join("");
}
function userFromDemo(role) {
  const acct = DEMO_ACCOUNTS.find((a) => a.role === role);
  return {
    id: `demo-${role}`,
    name: acct.name,
    email: acct.email,
    organization: acct.organization,
    role,
    initials: initials(acct.name)
  };
}
function userFromSignUp(data) {
  return {
    id: `user-${Date.now()}`,
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    organization: data.organization.trim(),
    role: "org_manager",
    initials: initials(data.name)
  };
}
function canAccess(role, page) {
  if (page === "admin") return role === "admin";
  if (page === "team" || page === "billing") return role === "admin" || role === "org_manager";
  return false;
}
function AuthProvider({ children }) {
  const [user, setUser] = reactExports.useState(null);
  const [hydrated, setHydrated] = reactExports.useState(false);
  reactExports.useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setUser(JSON.parse(raw));
    } catch {
    }
    setHydrated(true);
  }, []);
  reactExports.useEffect(() => {
    if (!hydrated) return;
    try {
      if (user) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      else window.localStorage.removeItem(STORAGE_KEY);
    } catch {
    }
  }, [user, hydrated]);
  const signIn = reactExports.useCallback((email, password) => {
    const normalized = email.trim().toLowerCase();
    const match = DEMO_ACCOUNTS.find(
      (a) => a.email === normalized && a.password === password
    );
    if (!match) {
      return { ok: false, error: "Invalid email or password" };
    }
    setUser(userFromDemo(match.role));
    return { ok: true };
  }, []);
  const signInAs = reactExports.useCallback((role) => {
    setUser(userFromDemo(role));
  }, []);
  const signUp = reactExports.useCallback((data) => {
    setUser(userFromSignUp(data));
  }, []);
  const signOut = reactExports.useCallback(() => {
    setUser(null);
  }, []);
  const value = reactExports.useMemo(
    () => ({ user, hydrated, signIn, signInAs, signUp, signOut }),
    [user, hydrated, signIn, signInAs, signUp, signOut]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AuthContext.Provider, { value, children });
}
function useAuth() {
  const ctx = reactExports.useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
const appCss = "/assets/styles-104UtLKD.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$f = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Silicofeller — AI Quantum Chip Design Platform" },
      {
        name: "description",
        content: "Silicofeller turns natural-language requirements into optimized quantum chip architectures with AI."
      },
      { name: "author", content: "Silicofeller" },
      { property: "og:title", content: "Silicofeller — AI Quantum Chip Design Platform" },
      {
        property: "og:description",
        content: "Design fault-tolerant quantum processors from a prompt. AI-generated architectures, layouts, and performance reports."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$f.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AuthProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, position: "top-right" })
  ] }) });
}
const $$splitComponentImporter$e = () => import("../_auth-pzdnjmz_.mjs");
const Route$e = createFileRoute("/_auth")({
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("../_app-B59H7Chr.mjs");
const Route$d = createFileRoute("/_app")({
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./index-BXAd3n7X.mjs");
const Route$c = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "SilicoFeller — AI Quantum Chip Design"
    }, {
      name: "description",
      content: "SilicoFeller turns natural-language prompts into production-ready quantum chip architectures. Describe. Generate. Fabricate."
    }, {
      property: "og:title",
      content: "SilicoFeller — AI Quantum Chip Design"
    }, {
      property: "og:description",
      content: "AI-powered quantum chip design. From prompt to fabricated qubit array."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./sign-up-BOotP307.mjs");
const Route$b = createFileRoute("/_auth/sign-up")({
  head: () => ({
    meta: [{
      title: "Create your account — Silicofeller"
    }, {
      name: "description",
      content: "Start designing quantum hardware with AI. Create your Silicofeller account in seconds."
    }, {
      property: "og:title",
      content: "Create your account — Silicofeller"
    }, {
      property: "og:description",
      content: "Start designing quantum hardware with AI. Create your Silicofeller account in seconds."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./sign-in-nyBWUKWv.mjs");
const Route$a = createFileRoute("/_auth/sign-in")({
  head: () => ({
    meta: [{
      title: "Sign in — Silicofeller"
    }, {
      name: "description",
      content: "Sign in to Silicofeller to design optimized quantum chip architectures with AI."
    }, {
      property: "og:title",
      content: "Sign in — Silicofeller"
    }, {
      property: "og:description",
      content: "Sign in to Silicofeller to design optimized quantum chip architectures with AI."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./forgot-password-D3SzVtnk.mjs");
const Route$9 = createFileRoute("/_auth/forgot-password")({
  head: () => ({
    meta: [{
      title: "Reset your password — Silicofeller"
    }, {
      name: "description",
      content: "Enter your email and we'll send you a secure reset link for your Silicofeller account."
    }, {
      property: "og:title",
      content: "Reset your password — Silicofeller"
    }, {
      property: "og:description",
      content: "Enter your email and we'll send you a secure reset link for your Silicofeller account."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./team-Djt-0aQC.mjs");
const Route$8 = createFileRoute("/_app/team")({
  head: () => ({
    meta: [{
      title: "Team Management — Silicofeller"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./settings-DUBTY38O.mjs");
const Route$7 = createFileRoute("/_app/settings")({
  head: () => ({
    meta: [{
      title: "Settings — Silicofeller"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./profile-CMiQN12k.mjs");
const Route$6 = createFileRoute("/_app/profile")({
  head: () => ({
    meta: [{
      title: "Profile — Silicofeller"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./designer-ChbM24mI.mjs");
const Route$5 = createFileRoute("/_app/designer")({
  head: () => ({
    meta: [{
      title: "Designer — Silicofeller"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./dashboard-BHsNv4Bj.mjs");
const Route$4 = createFileRoute("/_app/dashboard")({
  head: () => ({
    meta: [{
      title: "Dashboard — Silicofeller"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./chat-CCSFQhoM.mjs");
const Route$3 = createFileRoute("/_app/chat")({
  head: () => ({
    meta: [{
      title: "QBETA Chatbot — Silicofeller"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./billing-BcVn_ihF.mjs");
const Route$2 = createFileRoute("/_app/billing")({
  head: () => ({
    meta: [{
      title: "Billing & Usage — Silicofeller"
    }, {
      name: "description",
      content: "Manage subscriptions, AI credits, invoices, and quantum chip generation usage on Silicofeller."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./admin-lT_Bk0nU.mjs");
const Route$1 = createFileRoute("/_app/admin")({
  head: () => ({
    meta: [{
      title: "Admin Console — Silicofeller"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./about-DRzJ2X5Y.mjs");
const Route = createFileRoute("/_app/about")({
  head: () => ({
    meta: [{
      title: "About — Silicofeller"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const AuthRoute = Route$e.update({
  id: "/_auth",
  getParentRoute: () => Route$f
});
const AppRoute = Route$d.update({
  id: "/_app",
  getParentRoute: () => Route$f
});
const IndexRoute = Route$c.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$f
});
const AuthSignUpRoute = Route$b.update({
  id: "/sign-up",
  path: "/sign-up",
  getParentRoute: () => AuthRoute
});
const AuthSignInRoute = Route$a.update({
  id: "/sign-in",
  path: "/sign-in",
  getParentRoute: () => AuthRoute
});
const AuthForgotPasswordRoute = Route$9.update({
  id: "/forgot-password",
  path: "/forgot-password",
  getParentRoute: () => AuthRoute
});
const AppTeamRoute = Route$8.update({
  id: "/team",
  path: "/team",
  getParentRoute: () => AppRoute
});
const AppSettingsRoute = Route$7.update({
  id: "/settings",
  path: "/settings",
  getParentRoute: () => AppRoute
});
const AppProfileRoute = Route$6.update({
  id: "/profile",
  path: "/profile",
  getParentRoute: () => AppRoute
});
const AppDesignerRoute = Route$5.update({
  id: "/designer",
  path: "/designer",
  getParentRoute: () => AppRoute
});
const AppDashboardRoute = Route$4.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => AppRoute
});
const AppChatRoute = Route$3.update({
  id: "/chat",
  path: "/chat",
  getParentRoute: () => AppRoute
});
const AppBillingRoute = Route$2.update({
  id: "/billing",
  path: "/billing",
  getParentRoute: () => AppRoute
});
const AppAdminRoute = Route$1.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => AppRoute
});
const AppAboutRoute = Route.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => AppRoute
});
const AppRouteChildren = {
  AppAboutRoute,
  AppAdminRoute,
  AppBillingRoute,
  AppChatRoute,
  AppDashboardRoute,
  AppDesignerRoute,
  AppProfileRoute,
  AppSettingsRoute,
  AppTeamRoute
};
const AppRouteWithChildren = AppRoute._addFileChildren(AppRouteChildren);
const AuthRouteChildren = {
  AuthForgotPasswordRoute,
  AuthSignInRoute,
  AuthSignUpRoute
};
const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AppRoute: AppRouteWithChildren,
  AuthRoute: AuthRouteWithChildren
};
const routeTree = Route$f._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  DEMO_ACCOUNTS as D,
  ROLE_LABEL as R,
  canAccess as c,
  router as r,
  useAuth as u
};
