import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { C as Card } from "./card-RGlIzTYo.mjs";
import { B as Button } from "./button-BC9oXVxV.mjs";
import { B as Badge } from "./badge-DyfXZgLs.mjs";
import { S as Switch } from "./switch-CQ4rbtn8.mjs";
import { R as Root, I as Indicator } from "../_libs/radix-ui__react-progress.mjs";
import { c as cn } from "./utils-H80jjgLf.mjs";
import { T as Table, d as TableHeader, e as TableRow, c as TableHead, a as TableBody, b as TableCell } from "./table-DhIrzwGX.mjs";
import { R as Root$1, b as Trigger, P as Portal, a as Content, C as Close, T as Title, D as Description, O as Overlay } from "../_libs/radix-ui__react-dialog.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { L as Label } from "./label-JU3yqRBo.mjs";
import { u as useAuth, c as canAccess } from "./router-BHrPxnB_.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { a4 as Zap, L as Layers, T as Sparkles, Y as TrendingUp, C as Check, D as Download, J as Plus, n as CreditCard, a3 as X } from "../_libs/lucide-react.mjs";
import { c as LineChart, C as CartesianGrid, X as XAxis, Y as YAxis, T as Tooltip, L as Line, b as BarChart, B as Bar, a as AreaChart, A as Area, R as ResponsiveContainer } from "../_libs/recharts.mjs";
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
import "../_libs/radix-ui__react-switch.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/lodash.mjs";
import "../_libs/react-smooth.mjs";
import "../_libs/prop-types.mjs";
import "../_libs/fast-equals.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/react-is.mjs";
import "../_libs/d3-shape.mjs";
import "../_libs/d3-path.mjs";
import "../_libs/victory-vendor.mjs";
import "../_libs/d3-scale.mjs";
import "../_libs/internmap.mjs";
import "../_libs/d3-array.mjs";
import "../_libs/d3-time-format.mjs";
import "../_libs/d3-time.mjs";
import "../_libs/d3-interpolate.mjs";
import "../_libs/d3-color.mjs";
import "../_libs/d3-format.mjs";
import "../_libs/recharts-scale.mjs";
import "../_libs/decimal.js-light.mjs";
import "../_libs/eventemitter3.mjs";
const Progress = reactExports.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root,
  {
    ref,
    className: cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Indicator,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      }
    )
  }
));
Progress.displayName = Root.displayName;
const Dialog = Root$1;
const DialogTrigger = Trigger;
const DialogPortal = Portal;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = Description.displayName;
const summary = [{
  label: "AI Credits Remaining",
  value: "12,450",
  hint: "Available generation credits",
  icon: Zap
}, {
  label: "Quantum Designs Generated",
  value: "324",
  hint: "Total generated architectures",
  icon: Layers
}, {
  label: "Current Plan",
  value: "Quantum Pro",
  hint: "Active subscription",
  icon: Sparkles
}, {
  label: "Monthly Usage",
  value: "82%",
  hint: "Credits consumed this month",
  icon: TrendingUp,
  progress: 82
}];
const plans = [{
  name: "Starter",
  price: "$29",
  period: "/month",
  features: ["1,000 AI Credits", "Basic Quantum Designs", "Community Support", "Standard Generation Queue"],
  cta: "Choose Starter",
  current: false
}, {
  name: "Quantum Pro",
  price: "$99",
  period: "/month",
  features: ["10,000 AI Credits", "Advanced Optimization", "Faster Generation", "Architecture Export", "Priority Queue"],
  cta: "Current Plan",
  current: true,
  badge: "Most Popular"
}, {
  name: "Enterprise",
  price: "Custom",
  period: "",
  features: ["Unlimited Credits", "Team Management", "Dedicated Infrastructure", "SLA Support", "API Access"],
  cta: "Contact Sales",
  current: false
}];
const creditTrend = [{
  d: "W1",
  v: 1800
}, {
  d: "W2",
  v: 2400
}, {
  d: "W3",
  v: 2100
}, {
  d: "W4",
  v: 3200
}, {
  d: "W5",
  v: 2800
}, {
  d: "W6",
  v: 3600
}, {
  d: "W7",
  v: 4100
}, {
  d: "W8",
  v: 4400
}];
const designs = [{
  m: "Jan",
  v: 18
}, {
  m: "Feb",
  v: 24
}, {
  m: "Mar",
  v: 31
}, {
  m: "Apr",
  v: 28
}, {
  m: "May",
  v: 42
}, {
  m: "Jun",
  v: 51
}];
const spend = [{
  m: "Jan",
  v: 99
}, {
  m: "Feb",
  v: 99
}, {
  m: "Mar",
  v: 129
}, {
  m: "Apr",
  v: 99
}, {
  m: "May",
  v: 149
}, {
  m: "Jun",
  v: 99
}];
const aiUsage = [{
  d: "Mon",
  v: 240
}, {
  d: "Tue",
  v: 320
}, {
  d: "Wed",
  v: 280
}, {
  d: "Thu",
  v: 410
}, {
  d: "Fri",
  v: 380
}, {
  d: "Sat",
  v: 200
}, {
  d: "Sun",
  v: 150
}];
const invoices = [{
  id: "INV-2026-001",
  date: "May 2026",
  amount: "$99",
  status: "Paid"
}, {
  id: "INV-2026-002",
  date: "April 2026",
  amount: "$99",
  status: "Paid"
}, {
  id: "INV-2026-003",
  date: "March 2026",
  amount: "$99",
  status: "Paid"
}];
const ACCENT = "#6D5AF0";
const INK = "#0A0A0A";
const MUTED = "#A3A3A3";
function ChartCard({
  title,
  subtitle,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-2xl border-border p-5 shadow-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 flex items-start justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: subtitle })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[200px] w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children }) })
  ] });
}
const tooltipStyle = {
  background: "#0A0A0A",
  border: "none",
  borderRadius: 8,
  color: "#fff",
  fontSize: 12,
  padding: "6px 10px"
};
function BillingPage() {
  const {
    user
  } = useAuth();
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    if (user && !canAccess(user.role, "billing")) navigate({
      to: "/dashboard",
      replace: true
    });
  }, [user, navigate]);
  const [autoRenew, setAutoRenew] = reactExports.useState(true);
  const [emailInvoice, setEmailInvoice] = reactExports.useState(true);
  const [usageAlerts, setUsageAlerts] = reactExports.useState(true);
  const [overage, setOverage] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 6
  }, animate: {
    opacity: 1,
    y: 0
  }, transition: {
    duration: 0.4,
    ease: [0.16, 1, 0.3, 1]
  }, className: "mx-auto w-full max-w-7xl px-4 py-8 md:px-6 md:py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex flex-wrap items-end justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-semibold tracking-tight text-foreground md:text-[2rem]", children: "Billing & Usage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 max-w-2xl text-sm text-muted-foreground", children: "Manage subscriptions, AI credits, invoices, and quantum chip generation usage." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "h-10 rounded-full px-5 text-sm font-semibold", onClick: () => toast.success("Upgrade flow — demo only"), children: "Upgrade Plan" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", children: summary.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      opacity: 0,
      y: 8,
      scale: 0.98
    }, animate: {
      opacity: 1,
      y: 0,
      scale: 1
    }, transition: {
      duration: 0.35,
      delay: i * 0.05
    }, whileHover: {
      y: -2
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-2xl border-border p-5 shadow-none transition-shadow hover:shadow-[var(--shadow-card)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: s.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-4 w-4 text-accent" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-2xl font-semibold text-foreground", children: s.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: s.hint }),
      typeof s.progress === "number" && /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: s.progress, className: "mt-3 h-1.5" })
    ] }) }, s.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 flex items-end justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-foreground", children: "Choose Your Plan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Scale credits and capabilities as your team grows." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-3", children: plans.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 10
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.4,
        delay: i * 0.06
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: cn("relative h-full rounded-3xl border-border p-7 shadow-none", p.current && "border-foreground shadow-[var(--shadow-card)]"), children: [
        p.badge && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "absolute -top-2.5 right-6 rounded-full bg-[color:var(--accent-soft)] px-3 py-1 text-[11px] font-medium text-accent hover:bg-[color:var(--accent-soft)]", children: p.badge }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium uppercase tracking-wider text-muted-foreground", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-baseline gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-semibold text-foreground", children: p.price }),
          p.period && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: p.period })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2.5", children: p.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f })
        ] }, f)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: cn("mt-7 h-11 w-full rounded-full text-sm font-semibold", !p.current && "bg-foreground text-background hover:bg-foreground/90", p.current && "bg-[color:var(--accent-soft)] text-accent hover:bg-[color:var(--accent-soft)]"), variant: p.current ? "secondary" : "default", disabled: p.current, onClick: () => !p.current && toast.success(`${p.name} — demo only`), children: p.cta })
      ] }) }, p.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-5 text-xl font-semibold text-foreground", children: "Usage Analytics" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChartCard, { title: "Credit Usage Trend", subtitle: "Last 8 weeks", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LineChart, { data: creditTrend, margin: {
          left: -20,
          right: 8,
          top: 8,
          bottom: 0
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { stroke: "#F0F0F0", vertical: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "d", stroke: MUTED, fontSize: 11, tickLine: false, axisLine: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: MUTED, fontSize: 11, tickLine: false, axisLine: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: tooltipStyle, cursor: {
            stroke: ACCENT,
            strokeOpacity: 0.2
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { type: "monotone", dataKey: "v", stroke: INK, strokeWidth: 2, dot: false })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChartCard, { title: "Quantum Designs Generated", subtitle: "Monthly volume", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: designs, margin: {
          left: -20,
          right: 8,
          top: 8,
          bottom: 0
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { stroke: "#F0F0F0", vertical: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "m", stroke: MUTED, fontSize: 11, tickLine: false, axisLine: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: MUTED, fontSize: 11, tickLine: false, axisLine: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: tooltipStyle, cursor: {
            fill: "rgba(109,90,240,0.08)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "v", fill: INK, radius: [6, 6, 0, 0] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChartCard, { title: "Monthly Spending", subtitle: "USD billed", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: spend, margin: {
          left: -20,
          right: 8,
          top: 8,
          bottom: 0
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "g-spend", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: ACCENT, stopOpacity: 0.25 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: ACCENT, stopOpacity: 0 })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { stroke: "#F0F0F0", vertical: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "m", stroke: MUTED, fontSize: 11, tickLine: false, axisLine: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: MUTED, fontSize: 11, tickLine: false, axisLine: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: tooltipStyle }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "v", stroke: ACCENT, strokeWidth: 2, fill: "url(#g-spend)" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChartCard, { title: "AI Processing Consumption", subtitle: "Compute-minutes / day", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LineChart, { data: aiUsage, margin: {
          left: -20,
          right: 8,
          top: 8,
          bottom: 0
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { stroke: "#F0F0F0", vertical: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "d", stroke: MUTED, fontSize: 11, tickLine: false, axisLine: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: MUTED, fontSize: 11, tickLine: false, axisLine: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: tooltipStyle, cursor: {
            stroke: ACCENT,
            strokeOpacity: 0.2
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Line, { type: "monotone", dataKey: "v", stroke: INK, strokeWidth: 2, dot: {
            r: 2.5,
            fill: ACCENT,
            stroke: ACCENT
          } })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-2xl border-border p-6 shadow-none lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-foreground", children: "Payment Methods" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AddPaymentDialog, {})
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaymentRow, { brand: "Visa", last4: "4242", exp: "12/28", primary: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(PaymentRow, { brand: "Mastercard", last4: "8821", exp: "06/27" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-2xl border-border p-6 shadow-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-foreground", children: "Billing Settings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleRow, { label: "Auto Renewal", checked: autoRenew, onChange: setAutoRenew }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleRow, { label: "Email Invoice", checked: emailInvoice, onChange: setEmailInvoice }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleRow, { label: "Usage Alerts", checked: usageAlerts, onChange: setUsageAlerts }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleRow, { label: "Overage Notifications", checked: overage, onChange: setOverage })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-2xl border-border p-6 shadow-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-foreground", children: "Invoices" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
          invoices.length,
          " total"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Invoice ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Amount" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "text-right", children: "Download" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: invoices.map((inv) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium text-foreground", children: inv.id }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-muted-foreground", children: inv.date }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-foreground", children: inv.amount }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "rounded-full bg-[color:var(--accent-soft)] px-2.5 py-0.5 text-[11px] font-medium text-accent hover:bg-[color:var(--accent-soft)]", children: inv.status }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", size: "sm", className: "h-8 rounded-full", onClick: () => toast(`${inv.id}.pdf — demo only`), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-1 h-4 w-4" }),
            " PDF"
          ] }) })
        ] }, inv.id)) })
      ] })
    ] }) })
  ] });
}
function ToggleRow({
  label,
  checked,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { checked, onCheckedChange: onChange })
  ] });
}
function PaymentRow({
  brand,
  last4,
  exp,
  primary
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-2xl border border-border bg-card px-4 py-3.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-12 items-center justify-center rounded-md border border-border bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-4 w-4 text-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-medium text-foreground", children: [
          brand,
          " ending ",
          last4,
          primary && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "rounded-full bg-secondary px-2 py-0 text-[10px] font-medium text-muted-foreground hover:bg-secondary", children: "Default" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
          "Expires ",
          exp
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", className: "h-8 rounded-full", onClick: () => toast("Edit — demo only"), children: "Edit" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", className: "h-8 rounded-full text-muted-foreground hover:text-foreground", onClick: () => toast("Removed — demo only"), children: "Remove" })
    ] })
  ] });
}
function AddPaymentDialog() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", className: "h-9 rounded-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1 h-4 w-4" }),
      " Add Payment Method"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "rounded-2xl sm:max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Add Payment Method" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Securely add a new card to your billing profile." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cc-name", children: "Cardholder name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "cc-name", placeholder: "Alex Chen", className: "mt-1.5 h-10" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cc-number", children: "Card number" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "cc-number", placeholder: "1234 5678 9012 3456", className: "mt-1.5 h-10" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cc-exp", children: "Expiry" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "cc-exp", placeholder: "MM / YY", className: "mt-1.5 h-10" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "cc-cvc", children: "CVC" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "cc-cvc", placeholder: "123", className: "mt-1.5 h-10" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DialogFooter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "h-10 rounded-full px-5", onClick: () => {
        setOpen(false);
        toast.success("Card added — demo only");
      }, children: "Add card" }) })
    ] })
  ] });
}
export {
  BillingPage as component
};
