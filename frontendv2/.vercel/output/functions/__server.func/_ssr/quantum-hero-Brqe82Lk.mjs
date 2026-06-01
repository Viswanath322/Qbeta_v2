import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { C as Checkbox$1, a as CheckboxIndicator } from "../_libs/radix-ui__react-checkbox.mjs";
import { c as cn } from "./utils-H80jjgLf.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { B as Button } from "./button-BC9oXVxV.mjs";
import { p as EyeOff, o as Eye, C as Check } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
const Checkbox = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Checkbox$1,
  {
    ref,
    className: cn(
      "grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckboxIndicator, { className: cn("grid place-content-center text-current"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) })
  }
));
Checkbox.displayName = Checkbox$1.displayName;
const PasswordInput = reactExports.forwardRef(
  function PasswordInput2({ className, ...props }, ref) {
    const [show, setShow] = reactExports.useState(false);
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          ref,
          type: show ? "text" : "password",
          className: cn("pr-10", className),
          ...props
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setShow((s) => !s),
          "aria-label": show ? "Hide password" : "Show password",
          className: "absolute right-2.5 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          children: show ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" })
        }
      )
    ] });
  }
);
function SocialButton({ provider, label, className, ...rest }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Button,
    {
      type: "button",
      variant: "outline",
      className: cn(
        "h-11 w-full justify-center gap-2.5 rounded-full border-border bg-card text-sm font-medium text-foreground hover:bg-secondary",
        className
      ),
      ...rest,
      children: [
        provider === "google" ? /* @__PURE__ */ jsxRuntimeExports.jsx(GoogleIcon, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(GitHubIcon, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label })
      ]
    }
  );
}
function GoogleIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", className: "h-4 w-4", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#4285F4", d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.56c2.08-1.92 3.28-4.74 3.28-8.09Z" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#34A853", d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.76c-.99.66-2.25 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#FBBC05", d: "M5.84 14.11A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.44.34-2.11V7.05H2.18A11 11 0 0 0 1 12c0 1.77.42 3.45 1.18 4.95l3.66-2.84Z" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#EA4335", d: "M12 5.38c1.62 0 3.07.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.05l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38Z" })
  ] });
}
function GitHubIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", className: "h-4 w-4", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#0F172A", d: "M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.21.09 1.85 1.25 1.85 1.25 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.77-1.62-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.3c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" }) });
}
function QuantumHero({
  eyebrow,
  headline,
  description
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-border bg-[#FAFAFB] p-8 lg:p-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(QuantumBackdrop, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-1.5 w-1.5 rounded-full bg-accent" }),
        eyebrow
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 text-[2rem] font-semibold leading-[1.1] tracking-[-0.025em] text-foreground sm:text-[2.5rem]", children: headline }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[0.9375rem] leading-relaxed text-muted-foreground", children: description })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mt-10 flex flex-1 items-start justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChipBlueprint, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FloatingCard, { className: "absolute left-0 top-2", delay: 0.1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[0.6875rem] font-mono uppercase tracking-wider text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-1.5 w-1.5 rounded-full bg-accent" }),
          " prompt"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm font-medium text-foreground", children: "Design a 128-qubit processor" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingCard, { className: "absolute right-0 top-12", delay: 0.25, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--accent-soft)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", className: "h-3 w-3", fill: "none", stroke: "#6D5AF0", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "20 6 9 17 4 12" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: "Architecture Generated" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FloatingCard, { className: "absolute -bottom-2 right-6", delay: 0.4, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[0.6875rem] font-mono uppercase tracking-wider text-muted-foreground", children: "Fidelity Score" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-lg font-semibold text-foreground tabular-nums", children: [
          "99.8",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: "%" })
        ] })
      ] })
    ] })
  ] });
}
function QuantumBackdrop() {
  const particles = Array.from({ length: 26 }, (_, i) => {
    const x = i * 53 % 100;
    const y = i * 79 % 100;
    const size = 1.2 + i * 13 % 22 / 10;
    const delay = i % 9 * 0.35;
    const duration = 6 + i * 7 % 9;
    const drift = i * 17 % 30 - 15;
    return { x, y, size, delay, duration, drift, i };
  });
  const orbits = [
    { cx: 30, cy: 35, r: 90, dur: 28, dir: 1 },
    { cx: 70, cy: 60, r: 140, dur: 42, dir: -1 },
    { cx: 50, cy: 50, r: 200, dur: 60, dir: 1 }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0",
        style: {
          background: "radial-gradient(120% 80% at 100% 0%, rgba(109,90,240,0.16), transparent 55%), radial-gradient(100% 80% at 0% 100%, rgba(139,122,247,0.12), transparent 55%), linear-gradient(180deg, #FFFFFF 0%, #F7F6FB 100%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "absolute inset-0 h-full w-full opacity-[0.45]", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("pattern", { id: "qgrid", width: "36", height: "36", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M36 0H0V36", fill: "none", stroke: "#0A0A0A", strokeOpacity: "0.08", strokeWidth: "0.5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "qmask", cx: "50%", cy: "50%", r: "60%", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#000", stopOpacity: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#000", stopOpacity: "0" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("mask", { id: "qgridMask", children: /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100%", height: "100%", fill: "url(#qmask)" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100%", height: "100%", fill: "url(#qgrid)", mask: "url(#qgridMask)" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "absolute inset-0 h-full w-full", viewBox: "0 0 400 400", preserveAspectRatio: "none", children: orbits.map((o, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.g,
      {
        style: { transformOrigin: `${o.cx}% ${o.cy}%` },
        animate: { rotate: o.dir * 360 },
        transition: { duration: o.dur, repeat: Infinity, ease: "linear" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "ellipse",
            {
              cx: `${o.cx}%`,
              cy: `${o.cy}%`,
              rx: o.r,
              ry: o.r * 0.55,
              fill: "none",
              stroke: "#6D5AF0",
              strokeOpacity: 0.18,
              strokeWidth: "0.6",
              strokeDasharray: "2 6"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: `${o.cx}%`,
              cy: `${o.cy - o.r * 0.55 / 4}%`,
              r: "2.4",
              fill: "#6D5AF0"
            }
          )
        ]
      },
      idx
    )) }),
    particles.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.span,
      {
        className: "absolute rounded-full",
        style: {
          left: `${p.x}%`,
          top: `${p.y}%`,
          width: p.size,
          height: p.size,
          background: p.i % 5 === 0 ? "#6D5AF0" : p.i % 3 === 0 ? "#8B7AF7" : "#0A0A0A",
          opacity: p.i % 5 === 0 ? 0.9 : 0.35,
          boxShadow: p.i % 5 === 0 ? "0 0 12px rgba(109,90,240,0.6)" : void 0
        },
        animate: {
          y: [0, p.drift, 0],
          opacity: [0.2, p.i % 5 === 0 ? 0.95 : 0.55, 0.2]
        },
        transition: {
          duration: p.duration,
          delay: p.delay,
          repeat: Infinity,
          ease: "easeInOut"
        }
      },
      p.i
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "absolute -top-20 right-[-10%] h-72 w-72 rounded-full blur-3xl",
        style: { background: "radial-gradient(closest-side, rgba(109,90,240,0.35), transparent)" },
        animate: { opacity: [0.5, 0.9, 0.5], scale: [1, 1.08, 1] },
        transition: { duration: 7, repeat: Infinity, ease: "easeInOut" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "absolute -bottom-24 -left-10 h-80 w-80 rounded-full blur-3xl",
        style: { background: "radial-gradient(closest-side, rgba(139,122,247,0.28), transparent)" },
        animate: { opacity: [0.4, 0.75, 0.4], scale: [1, 1.1, 1] },
        transition: { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "absolute inset-0 h-full w-full", preserveAspectRatio: "none", viewBox: "0 0 100 100", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.line,
        {
          x1: "10",
          y1: "20",
          x2: "90",
          y2: "80",
          stroke: "url(#beam1)",
          strokeWidth: "0.2",
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: [0, 1, 1], opacity: [0, 0.7, 0] },
          transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.line,
        {
          x1: "90",
          y1: "15",
          x2: "15",
          y2: "85",
          stroke: "url(#beam2)",
          strokeWidth: "0.2",
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: [0, 1, 1], opacity: [0, 0.6, 0] },
          transition: { duration: 6, delay: 1.2, repeat: Infinity, ease: "easeInOut" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "beam1", x1: "0", y1: "0", x2: "1", y2: "1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#6D5AF0", stopOpacity: "0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "#6D5AF0", stopOpacity: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#6D5AF0", stopOpacity: "0" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "beam2", x1: "0", y1: "0", x2: "1", y2: "1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#8B7AF7", stopOpacity: "0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "#8B7AF7", stopOpacity: "1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#8B7AF7", stopOpacity: "0" })
        ] })
      ] })
    ] })
  ] });
}
function FloatingCard({
  children,
  className,
  delay = 0
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: [0, -6, 0] },
      transition: {
        opacity: { duration: 0.6, delay },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay }
      },
      className: `pointer-events-none rounded-xl border border-border bg-card/90 px-3.5 py-2.5 backdrop-blur ${className ?? ""}`,
      style: { boxShadow: "var(--shadow-card)" },
      children
    }
  );
}
function ChipBlueprint() {
  const cells = Array.from(
    { length: 6 },
    (_, r) => Array.from({ length: 6 }, (_2, c) => ({ r, c }))
  ).flat();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 320 240",
      className: "relative h-[260px] w-full max-w-[420px]",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": true,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "40", y: "30", width: "240", height: "180", rx: "18", fill: "white", stroke: "#0A0A0A", strokeOpacity: "0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "60", y: "50", width: "200", height: "140", rx: "10", fill: "#FAFAFA", stroke: "#E5E7EB" }),
        Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: 64 + i * 24, y: "22", width: "10", height: "10", rx: "2", fill: "#E5E7EB" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: 64 + i * 24, y: "208", width: "10", height: "10", rx: "2", fill: "#E5E7EB" })
        ] }, i)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.path,
          {
            d: "M70 70 H130 V120 H190 V90 H250",
            stroke: "#0A0A0A",
            strokeOpacity: "0.7",
            strokeWidth: "1.2",
            fill: "none",
            initial: { pathLength: 0 },
            animate: { pathLength: 1 },
            transition: { duration: 1.6, ease: "easeInOut" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.path,
          {
            d: "M70 170 H110 V140 H170 V170 H250",
            stroke: "#0A0A0A",
            strokeOpacity: "0.4",
            strokeWidth: "1",
            fill: "none",
            initial: { pathLength: 0 },
            animate: { pathLength: 1 },
            transition: { duration: 2, delay: 0.3, ease: "easeInOut" }
          }
        ),
        cells.map(({ r, c }, i) => {
          const cx = 80 + c * 32;
          const cy = 70 + r * 20;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.circle,
            {
              cx,
              cy,
              r: 2.4,
              fill: i % 7 === 0 ? "#6D5AF0" : i % 5 === 0 ? "#8B7AF7" : "#0A0A0A",
              fillOpacity: i % 7 === 0 || i % 5 === 0 ? 1 : 0.35,
              initial: { opacity: 0.4 },
              animate: { opacity: [0.4, 1, 0.4] },
              transition: {
                duration: 2.2,
                repeat: Infinity,
                delay: i % 8 * 0.18,
                ease: "easeInOut"
              }
            },
            i
          );
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "142", y: "108", width: "36", height: "24", rx: "4", fill: "white", stroke: "#0A0A0A" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "160", y: "123", textAnchor: "middle", fontSize: "8", fontFamily: "ui-monospace, monospace", fill: "#0A0A0A", children: "QPU" })
      ]
    }
  );
}
export {
  Checkbox as C,
  PasswordInput as P,
  QuantumHero as Q,
  SocialButton as S
};
