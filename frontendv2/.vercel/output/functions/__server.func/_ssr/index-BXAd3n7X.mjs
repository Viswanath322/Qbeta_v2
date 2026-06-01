import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button } from "./button-BC9oXVxV.mjs";
import { S as SilicofellerLogo } from "./silicofeller-logo-B3P2hb3W.mjs";
import { u as useAuth, R as ROLE_LABEL } from "./router-BHrPxnB_.mjs";
import "../_libs/sonner.mjs";
import { u as useScroll, a as useTransform, m as motion } from "../_libs/framer-motion.mjs";
import { a as ArrowRight, N as Shield, a4 as Zap, m as Cpu, a2 as WandSparkles, T as Sparkles, F as FileCodeCorner, g as CircleCheck, B as BatteryCharging, D as Download, U as Terminal, r as Linkedin, G as Github, M as Mail } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const LABELS = [
  "TRANSMON · Q-07 · 99.92% FIDELITY",
  "READOUT RESONATOR · 7.1 GHz",
  "COUPLER · Q-12 ↔ Q-19",
  "ERROR-CORRECTION · SURFACE-17",
  "CRYO-AMP · 15 mK · STABLE",
  "FLUX BIAS · Q-23 · -0.42 Φ₀",
  "MICROWAVE PULSE · 24 ns",
  "QUANTUM BUS · 4-WAY · LOCKED"
];
function makeNodes(count) {
  const rng = mulberry32(7);
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    bx: (rng() * 2 - 1) * 0.9,
    by: (rng() * 2 - 1) * 0.9,
    bz: rng() * 2 - 1,
    fx: 0.18 + rng() * 0.35,
    fy: 0.18 + rng() * 0.35,
    fz: 0.15 + rng() * 0.3,
    px: rng() * Math.PI * 2,
    py: rng() * Math.PI * 2,
    pz: rng() * Math.PI * 2,
    size: 2.5 + Math.pow(rng(), 2.2) * 14,
    label: LABELS[i % LABELS.length]
  }));
}
function mulberry32(seed) {
  let a = seed;
  return () => {
    a |= 0;
    a = a + 1831565813 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function QuantumBurst() {
  const wrapRef = reactExports.useRef(null);
  const [hover, setHover] = reactExports.useState(null);
  const [t, setT] = reactExports.useState(0);
  const [tilt, setTilt] = reactExports.useState({ x: 0, y: 0 });
  const nodes = reactExports.useMemo(() => makeNodes(64), []);
  reactExports.useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const loop = (now) => {
      setT((now - start) / 1e3);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  reactExports.useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({ x: px, y: py });
    };
    const onLeave = () => setTilt({ x: 0, y: 0 });
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);
  const W = 600;
  const H = 600;
  const cx = W / 2;
  const cy = H / 2;
  const R = 260;
  const projected = nodes.map((n) => {
    const x3 = n.bx + Math.sin(t * n.fx + n.px) * 0.35;
    const y3 = n.by + Math.cos(t * n.fy + n.py) * 0.35;
    const z3 = n.bz + Math.sin(t * n.fz + n.pz) * 0.5;
    const depth = (z3 + 2) / 4;
    const scale = 0.55 + depth * 0.9;
    return {
      n,
      x: cx + x3 * R * (0.85 + depth * 0.3),
      y: cy + y3 * R * (0.85 + depth * 0.3),
      z: z3,
      depth,
      r: n.size * scale
    };
  });
  const edges = [];
  const MAX_DIST = 110;
  for (let i = 0; i < projected.length; i++) {
    for (let j = i + 1; j < projected.length; j++) {
      const dx = projected[i].x - projected[j].x;
      const dy = projected[i].y - projected[j].y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < MAX_DIST) {
        edges.push({ a: i, b: j, o: 1 - d / MAX_DIST });
      }
    }
  }
  const hovered = hover !== null ? nodes[hover] : null;
  const accentIdx = Math.floor(t * 0.4) % nodes.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: wrapRef,
      className: "relative mx-auto w-full max-w-[640px]",
      style: { aspectRatio: "1 / 1", perspective: "1200px" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "absolute inset-0",
            animate: { rotateX: tilt.y * -12, rotateY: tilt.x * 18 },
            transition: { type: "spring", stiffness: 60, damping: 18 },
            style: { transformStyle: "preserve-3d" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "svg",
              {
                viewBox: `0 0 ${W} ${H}`,
                className: "h-full w-full",
                role: "img",
                "aria-label": "3D quantum chip qubit network — continuously rearranging",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("g", { children: edges.map((e, i) => {
                    const a = projected[e.a];
                    const b = projected[e.b];
                    return /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "line",
                      {
                        x1: a.x,
                        y1: a.y,
                        x2: b.x,
                        y2: b.y,
                        stroke: "#0A0A0A",
                        strokeOpacity: 0.18 * e.o,
                        strokeWidth: 0.6
                      },
                      i
                    );
                  }) }),
                  projected.map((p, i) => {
                    const active = hover === i;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "g",
                      {
                        style: { cursor: "pointer" },
                        onMouseEnter: () => setHover(i),
                        onMouseLeave: () => setHover(null),
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "circle",
                            {
                              cx: p.x,
                              cy: p.y,
                              r: p.r * (active ? 1.2 : 1),
                              fill: "#0A0A0A",
                              opacity: 0.5 + p.depth * 0.5
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: p.x, cy: p.y, r: Math.max(p.r + 6, 12), fill: "transparent" })
                        ]
                      },
                      `n-${p.n.id}`
                    );
                  }),
                  projected[accentIdx] && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "circle",
                    {
                      cx: projected[accentIdx].x,
                      cy: projected[accentIdx].y,
                      r: projected[accentIdx].r + 8,
                      fill: "none",
                      stroke: "#F26B3A",
                      strokeOpacity: "0.55",
                      strokeWidth: "1.5"
                    }
                  )
                ]
              }
            )
          }
        ),
        hovered && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "pointer-events-none absolute left-1/2 bottom-6 -translate-x-1/2 rounded-full border border-black/15 bg-black/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur",
            style: { boxShadow: "0 8px 24px rgba(0,0,0,0.35)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "mr-2 inline-block h-2 w-2 rounded-full align-middle bg-[#F26B3A]"
                }
              ),
              hovered.label
            ]
          }
        )
      ]
    }
  );
}
const ROTATING_HEADLINES = ["Design Quantum Chips With Natural Language", "AI-Powered Quantum Chip Design", "From Prompt to Silicon", "The Future of Quantum Engineering", "Describe. Generate. Fabricate."];
function LandingPage() {
  const {
    user
  } = useAuth();
  const [headlineIdx, setHeadlineIdx] = reactExports.useState(0);
  const [scrolled, setScrolled] = reactExports.useState(false);
  const {
    scrollY
  } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, -120]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 0.92]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.35]);
  reactExports.useEffect(() => {
    const id = setInterval(() => setHeadlineIdx((i) => (i + 1) % ROTATING_HEADLINES.length), 3200);
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => {
      clearInterval(id);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, { scrolled, user }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative isolate overflow-hidden text-foreground", style: {
      background: "#E8E6DE"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 opacity-[0.05]", style: {
        backgroundImage: "var(--grid-pattern)",
        backgroundSize: "44px 44px"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#0A0A0F]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 grid grid-cols-1 gap-10 px-6 pb-28 pt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:px-10 lg:pt-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 16
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1]
        }, className: "flex flex-col justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium text-foreground/70 backdrop-blur", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-1.5 w-1.5 rounded-full bg-[#F26B3A]" }),
            "AI-native quantum chip design"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 min-h-[1.1em] text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-[3.5rem] lg:text-[4.25rem]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { initial: {
            opacity: 0,
            y: 12
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            duration: 0.5
          }, className: "block bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A] to-[#F26B3A] bg-clip-text text-transparent", children: ROTATING_HEADLINES[headlineIdx] }, headlineIdx) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-foreground/70", children: "SilicoFeller transforms natural-language prompts into production-ready quantum chip architectures — transmon arrays, error-correction layouts and superconducting qubit topologies, generated in seconds." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "h-12 rounded-full bg-foreground px-6 text-sm font-semibold text-background hover:bg-foreground/90", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/designer", children: [
              "Start designing ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1.5 h-4 w-4" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#demo", className: "inline-flex h-12 items-center rounded-full border border-black/15 bg-white/60 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-white/80", children: "Watch Demo" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-foreground/55", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-3.5 w-3.5" }),
              " SOC 2 ready"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3.5 w-3.5" }),
              " Generates in seconds"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "h-3.5 w-3.5" }),
              " 128+ qubit topologies"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { style: {
          y: heroY,
          scale: heroScale,
          opacity: heroOpacity
        }, className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(QuantumBurst, {}) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "about", eyebrow: "What we do", title: "From a prompt to a fabricated quantum chip — automatically.", tone: "paper", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-3xl text-[0.9375rem] leading-relaxed text-muted-foreground", children: "SilicoFeller uses advanced AI models to translate natural-language engineering requirements into quantum chip designs — qubit layouts, coupling maps, readout networks and control HDL. Describe what you need in plain English; we generate the architecture." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6", children: WORKFLOW.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 12
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-40px"
      }, transition: {
        duration: 0.45,
        delay: i * 0.06
      }, className: "rounded-xl border border-border bg-white/70 p-3 text-center text-xs font-semibold text-foreground backdrop-blur", style: {
        boxShadow: "var(--shadow-card)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block text-[10px] font-medium text-accent", children: [
          "Step ",
          i + 1
        ] }),
        step
      ] }, step)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "technology", eyebrow: "Technology", title: "Built on quantum-aware AI.", tone: "grid", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-1 gap-5 md:grid-cols-3", children: TECH.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 14
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      margin: "-60px"
    }, transition: {
      duration: 0.5
    }, className: "rounded-2xl border border-border bg-card/95 p-6 backdrop-blur", style: {
      boxShadow: "var(--shadow-card)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F26B3A]", children: t.eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-base font-semibold text-foreground", children: t.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm leading-relaxed text-muted-foreground", children: t.desc })
    ] }, t.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "features", eyebrow: "Features", title: "Everything you need to ship quantum silicon faster.", tone: "dark", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3", children: FEATURES.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 14
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      margin: "-60px"
    }, transition: {
      duration: 0.5
    }, className: "group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/[0.07]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-[#F26B3A] text-white transition-transform group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-base font-semibold text-white", children: f.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm leading-relaxed text-white/60", children: f.desc })
    ] }, f.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "demo", eyebrow: "Live demo", title: "A prompt in. A quantum chip out.", tone: "paper", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-foreground p-5 font-mono text-sm text-background", style: {
        boxShadow: "var(--shadow-card)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 pb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-destructive" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-yellow-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-success" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-[11px] text-background/60", children: "silicofeller / prompt" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-background/60", children: "$ silicofeller design" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TypingLine, { text: `> Design a 5-qubit transmon quantum processor with nearest-neighbor coupling.` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[12px] text-accent-2", children: "[AI] analyzing requirements…" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-accent-2", children: "[AI] generating qubit topology…" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-accent-2", children: "[AI] placing readout resonators…" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-success", children: "✓ quantum chip ready" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2", children: DEMO_OUTPUTS.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5", style: {
        boxShadow: "var(--shadow-card)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-semibold text-accent", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(o.icon, { className: "h-3.5 w-3.5" }),
          " ",
          o.title
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm font-medium text-foreground", children: o.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: o.detail })
      ] }, o.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "blog", eyebrow: "Research & insights", title: "From the SilicoFeller blog.", tone: "elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4", children: POSTS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(242,107,58,0.25)]", style: {
      boxShadow: "var(--shadow-card)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/9] w-full rounded-lg bg-gradient-to-br from-[#0A0A0F] via-[#8A7B25] to-[#F26B3A]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[11px] font-medium uppercase tracking-wider text-[#F26B3A]", children: p.tag }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 text-sm font-semibold leading-snug text-foreground group-hover:text-[#F26B3A]", children: p.title })
    ] }, p.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "contact", eyebrow: "Contact", title: "Let's design what's next.", tone: "dark", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => e.preventDefault(), className: "rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormInput, { label: "Name", placeholder: "Ada Lovelace" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormInput, { label: "Email", type: "email", placeholder: "you@company.com" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FormInput, { label: "Company", placeholder: "Acme Semiconductors", className: "sm:col-span-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium text-white/60", children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 4, placeholder: "Tell us about your quantum chip idea…", className: "mt-1.5 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-white/40 focus:border-[#F26B3A]" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", className: "mt-5 h-11 rounded-full bg-white px-6 text-sm font-semibold text-black hover:bg-white/90", children: [
          "Send message ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1.5 h-4 w-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/70", children: "Talk to our quantum engineering team about pilots, integrations, and enterprise deployments." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10", href: "#", "aria-label": "LinkedIn", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10", href: "#", "aria-label": "GitHub", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10", href: "mailto:hello@silicofeller.com", "aria-label": "Email", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative z-10 border-t border-white/10 bg-[#050507] px-6 py-10 text-white lg:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-6xl grid-cols-2 gap-8 sm:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: "Product", links: ["Features", "Designer", "Pricing", "Changelog"] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: "Company", links: ["About", "Blog", "Careers", "Contact"] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: "Resources", links: ["Documentation", "API", "Support", "Status"] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Security"] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-8 flex max-w-6xl flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " SilicoFeller, Inc. All rights reserved."
        ] }),
        user && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "Signed in as ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-white", children: user.name }),
          " · ",
          ROLE_LABEL[user.role]
        ] })
      ] })
    ] })
  ] });
}
function SiteNav({
  scrolled,
  user
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: `sticky top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-black/10 bg-[#E8E6DE]/85 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl" : "border-b border-transparent bg-[#E8E6DE]/40 backdrop-blur-md"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-4 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", "aria-label": "SilicoFeller home", className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SilicofellerLogo, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden items-center gap-7 text-sm text-foreground/65 md:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#about", className: "transition-colors hover:text-foreground", children: "About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#technology", className: "transition-colors hover:text-foreground", children: "Technology" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#features", className: "transition-colors hover:text-foreground", children: "Features" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#blog", className: "transition-colors hover:text-foreground", children: "Blog" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "transition-colors hover:text-foreground", children: "Contact" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: user ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "ghost", className: "h-9 rounded-full px-4 text-sm text-foreground hover:bg-black/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard", children: "Dashboard" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "h-9 rounded-full bg-foreground px-4 text-sm font-semibold text-background hover:bg-foreground/90", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/designer", children: "Open designer" }) })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "ghost", className: "h-9 rounded-full px-4 text-sm text-foreground hover:bg-black/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/sign-in", children: "Sign in" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "h-9 rounded-full bg-foreground px-4 text-sm font-semibold text-background hover:bg-foreground/90", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/sign-up", children: [
        "Sign up ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
      ] }) })
    ] }) })
  ] }) });
}
function Section({
  id,
  eyebrow,
  title,
  children,
  tone = "default"
}) {
  const toneClass = tone === "dark" ? "bg-[#0A0A0F] text-white" : tone === "paper" ? "bg-[#F4F2EC]" : tone === "elevated" ? "bg-gradient-to-b from-[#FAFAFA] to-[#EEECE6]" : tone === "grid" ? "bg-[#F8F7F2]" : "bg-background";
  const titleClass = tone === "dark" ? "text-white" : "text-foreground";
  const eyebrowClass = tone === "dark" ? "text-[#F26B3A]" : "text-accent";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id, className: `relative z-10 scroll-mt-20 overflow-hidden px-6 py-24 lg:px-10 ${toneClass}`, children: [
    tone === "grid" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 opacity-60", style: {
      backgroundImage: "var(--grid-pattern)",
      backgroundSize: "32px 32px"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 24
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      margin: "-80px"
    }, transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }, className: "relative mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xs font-semibold uppercase tracking-[0.18em] ${eyebrowClass}`, children: eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: `mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl ${titleClass}`, children: title }),
      children
    ] })
  ] });
}
function FormInput({
  label,
  className = "",
  ...rest
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium text-white/60", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...rest, className: "mt-1.5 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none placeholder:text-white/40 focus:border-[#F26B3A]" })
  ] });
}
function FooterCol({
  title,
  links
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-white", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2 text-sm text-white/50", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "transition-colors hover:text-white", children: l }) }, l)) })
  ] });
}
function TypingLine({
  text
}) {
  const [n, setN] = reactExports.useState(0);
  reactExports.useEffect(() => {
    setN(0);
    const id = setInterval(() => {
      setN((v) => v >= text.length ? v : v + 1);
    }, 22);
    return () => clearInterval(id);
  }, [text]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-[12px] text-background", children: [
    text.slice(0, n),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-0.5 inline-block h-3 w-1.5 translate-y-0.5 animate-pulse bg-accent-2" })
  ] });
}
const WORKFLOW = ["User Prompt", "AI Understanding", "Qubit Topology", "Coupling & Readout", "Optimization", "Quantum Blueprint"];
const TECH = [{
  eyebrow: "Architectures",
  title: "Transmon & Superconducting Qubits",
  desc: "Generate 5-qubit transmon processors up to 128-qubit superconducting arrays with optimized layouts."
}, {
  eyebrow: "Error correction",
  title: "Surface & Steane Codes",
  desc: "Quantum error correction architectures built directly into the generated chip topology."
}, {
  eyebrow: "Coupling",
  title: "Nearest-Neighbour & Bus",
  desc: "Choose coupling networks — nearest-neighbour, all-to-all bus, or custom routing — generated to your prompt."
}];
const FEATURES = [{
  icon: WandSparkles,
  title: "Natural Language Quantum Design",
  desc: "Describe your quantum chip requirements in plain English — no Q# or QASM required."
}, {
  icon: Sparkles,
  title: "AI Architecture Generation",
  desc: "Generate optimized qubit topologies and coupling networks with quantum-aware AI."
}, {
  icon: FileCodeCorner,
  title: "Control HDL Generation",
  desc: "Automatic Verilog generation for the cryogenic control plane and readout chain."
}, {
  icon: CircleCheck,
  title: "Design Validation",
  desc: "Built-in verification of qubit connectivity, crosstalk and gate fidelity on every generation."
}, {
  icon: BatteryCharging,
  title: "Coherence Optimization",
  desc: "AI-driven layout tuning for T1, T2 coherence times and 2-qubit gate fidelity targets."
}, {
  icon: Download,
  title: "Export Ready",
  desc: "Download GDS layouts, control HDL, calibration reports, and OpenQASM templates."
}];
const DEMO_OUTPUTS = [{
  icon: Cpu,
  title: "Architecture",
  value: "5-qubit transmon",
  detail: "Nearest-neighbor 2D coupling"
}, {
  icon: Terminal,
  title: "Specifications",
  value: "T1 ≈ 60μs · T2 ≈ 45μs",
  detail: "Fidelity target 99.5%"
}, {
  icon: Zap,
  title: "Performance",
  value: "150 ns / gate",
  detail: "Single-qubit estimate"
}, {
  icon: FileCodeCorner,
  title: "Files",
  value: "qasm + verilog + gds",
  detail: "Ready to export"
}];
const POSTS = [{
  tag: "Research",
  title: "AI in quantum chip design: the next decade"
}, {
  tag: "Quantum",
  title: "The future of fault-tolerant quantum chips"
}, {
  tag: "Engineering",
  title: "Automated qubit-layout generation, end to end"
}, {
  tag: "Industry",
  title: "Insights from leading quantum labs on AI workflows"
}];
export {
  LandingPage as component
};
