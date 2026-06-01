import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as Card } from "./card-RGlIzTYo.mjs";
import { B as Button } from "./button-BC9oXVxV.mjs";
import { c as cn } from "./utils-H80jjgLf.mjs";
import { B as Badge } from "./badge-DyfXZgLs.mjs";
import { R as Root2, L as List, T as Trigger, C as Content } from "../_libs/radix-ui__react-tabs.mjs";
import { I as Input } from "./input-C0QjszdI.mjs";
import { u as useAuth } from "./router-BHrPxnB_.mjs";
import { g as generateChip } from "./backend-sVf8_dNy.mjs";
import "../_libs/sonner.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { J as Plus, u as MessageSquare, C as Check, a3 as X, z as Pencil, X as Trash2, w as PanelLeftClose, x as PanelLeftOpen, m as Cpu, T as Sparkles, s as LoaderCircle, S as Send, v as Microchip, j as CircuitBoard, k as CodeXml, g as CircleCheck, Z as TriangleAlert, D as Download, a4 as Zap, l as Copy } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const Tabs = Root2;
const TabsList = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  List,
  {
    ref,
    className: cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = List.displayName;
const TabsTrigger = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = Trigger.displayName;
const TabsContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = Content.displayName;
const STORAGE_KEY = "silicofeller.designer.conversations.v2";
const WELCOME = {
  role: "ai",
  text: 'Describe the quantum chip you want to design — qubit count, topology, target fidelity. e.g. "Design a 5-qubit transmon processor with nearest-neighbor coupling."'
};
function newConversation() {
  const now = Date.now();
  return {
    id: `c_${now}_${Math.random().toString(36).slice(2, 7)}`,
    title: "New chat",
    createdAt: now,
    updatedAt: now,
    messages: [WELCOME],
    result: null
  };
}
function DesignerPage() {
  const {
    user
  } = useAuth();
  const [prompt, setPrompt] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [chatOpen, setChatOpen] = reactExports.useState(true);
  const [sidebarOpen, setSidebarOpen] = reactExports.useState(true);
  const [view, setView] = reactExports.useState("chip");
  const [conversations, setConversations] = reactExports.useState([]);
  const [activeId, setActiveId] = reactExports.useState(null);
  const [renamingId, setRenamingId] = reactExports.useState(null);
  const [renameValue, setRenameValue] = reactExports.useState("");
  const chatEndRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      if (parsed.length === 0) {
        const c = newConversation();
        setConversations([c]);
        setActiveId(c.id);
      } else {
        setConversations(parsed);
        setActiveId(parsed[0].id);
      }
    } catch {
      const c = newConversation();
      setConversations([c]);
      setActiveId(c.id);
    }
  }, []);
  reactExports.useEffect(() => {
    if (conversations.length === 0) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations));
    } catch {
    }
  }, [conversations]);
  reactExports.useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [conversations, activeId]);
  const active = reactExports.useMemo(() => conversations.find((c) => c.id === activeId) ?? null, [conversations, activeId]);
  const updateActive = (patch) => setConversations((cs) => cs.map((c) => c.id === activeId ? {
    ...c,
    ...patch,
    updatedAt: Date.now()
  } : c));
  const send = async () => {
    if (!prompt.trim() || !active || loading) return;
    const text = prompt.trim();
    setPrompt("");
    setLoading(true);
    const isFirst = active.messages.length <= 1;
    updateActive({
      messages: [...active.messages, {
        role: "you",
        text
      }, {
        role: "ai",
        text: "Generating your quantum chip…",
        loading: true
      }],
      title: isFirst ? text.slice(0, 48) : active.title
    });
    try {
      const result2 = await generateChip(text);
      const aiText = result2.interpretation ?? `Generated a ${result2.num_qubits}-qubit ${result2.topology} chip using ${result2.engine ?? "schematic"}.${result2.error_hint ? ` ⚠ ${result2.error_hint}` : ""}`;
      setConversations((cs) => cs.map((c) => {
        if (c.id !== activeId) return c;
        const msgs = c.messages.filter((m) => !m.loading);
        return {
          ...c,
          messages: [...msgs, {
            role: "ai",
            text: aiText
          }],
          result: result2,
          updatedAt: Date.now()
        };
      }));
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Backend error";
      setConversations((cs) => cs.map((c) => {
        if (c.id !== activeId) return c;
        const msgs = c.messages.filter((m) => !m.loading);
        return {
          ...c,
          messages: [...msgs, {
            role: "ai",
            text: `❌ ${msg}`
          }],
          updatedAt: Date.now()
        };
      }));
    } finally {
      setLoading(false);
    }
  };
  const handleNew = () => {
    const c = newConversation();
    setConversations((cs) => [c, ...cs]);
    setActiveId(c.id);
    setPrompt("");
  };
  const handleDelete = (id) => {
    setConversations((cs) => {
      const next = cs.filter((c) => c.id !== id);
      if (next.length === 0) {
        const c = newConversation();
        setActiveId(c.id);
        return [c];
      }
      if (id === activeId) setActiveId(next[0].id);
      return next;
    });
  };
  const startRename = (c) => {
    setRenamingId(c.id);
    setRenameValue(c.title);
  };
  const commitRename = () => {
    if (!renamingId) return;
    setConversations((cs) => cs.map((c) => c.id === renamingId ? {
      ...c,
      title: renameValue.trim() || "Untitled chat"
    } : c));
    setRenamingId(null);
  };
  if (!active) return null;
  const hasOutput = !!active.result;
  const result = active.result;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 6
  }, animate: {
    opacity: 1,
    y: 0
  }, transition: {
    duration: 0.4
  }, className: "flex h-[calc(100vh-3.5rem)] w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: sidebarOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.aside, { initial: {
      width: 0,
      opacity: 0
    }, animate: {
      width: 260,
      opacity: 1
    }, exit: {
      width: 0,
      opacity: 0
    }, transition: {
      duration: 0.25,
      ease: "easeInOut"
    }, className: "flex h-full shrink-0 flex-col overflow-hidden border-r border-border bg-[#0A0A0F] text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: handleNew, className: "w-full justify-start rounded-xl bg-white text-black hover:bg-white/90", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-2 h-4 w-4" }),
        " New chat"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 pb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40", children: "History" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 space-y-0.5 overflow-y-auto px-2 pb-3", children: conversations.slice().sort((a, b) => b.updatedAt - a.updatedAt).map((c) => {
        const isActive = c.id === activeId, isRenaming = renamingId === c.id;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `group flex items-center gap-1.5 rounded-lg px-2 py-2 text-sm transition-colors ${isActive ? "bg-white/10" : "hover:bg-white/5"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-3.5 w-3.5 shrink-0 text-white/50" }),
          isRenaming ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: renameValue, onChange: (e) => setRenameValue(e.target.value), onKeyDown: (e) => {
              if (e.key === "Enter") commitRename();
              if (e.key === "Escape") setRenamingId(null);
            }, autoFocus: true, className: "h-7 bg-white/10 text-xs text-white" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: commitRename, className: "text-white/70 hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setRenamingId(null), className: "text-white/70 hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5" }) })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveId(c.id), className: "min-w-0 flex-1 text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-xs font-medium text-white/90", children: c.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-[10px] text-white/40", children: new Date(c.updatedAt).toLocaleDateString() })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => startRename(c), className: "opacity-0 group-hover:opacity-100", "aria-label": "Rename", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-3.5 w-3.5 text-white/60" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleDelete(c.id), className: "opacity-0 group-hover:opacity-100", "aria-label": "Delete", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5 text-white/60" }) })
          ] })
        ] }, c.id);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-white/10 p-3 text-[11px] text-white/40", children: [
        user?.name,
        " · ",
        user?.organization
      ] })
    ] }, "history") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-0 flex-1 flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 border-b border-border bg-background/60 px-6 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: () => setSidebarOpen((v) => !v), className: "rounded-full", children: sidebarOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(PanelLeftClose, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(PanelLeftOpen, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-sm font-semibold tracking-tight text-foreground", children: active.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground", children: [
              "Quantum Chip Designer · ",
              result?.engine ?? "ready"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "rounded-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "mr-1.5 h-3 w-3" }),
            user?.organization
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: () => setChatOpen((v) => !v), className: "rounded-full", children: chatOpen ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PanelLeftClose, { className: "mr-1.5 h-4 w-4" }),
            "Hide chat"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PanelLeftOpen, { className: "mr-1.5 h-4 w-4" }),
            "Show chat"
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: chatOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.aside, { initial: {
          width: 0,
          opacity: 0
        }, animate: {
          width: 420,
          opacity: 1
        }, exit: {
          width: 0,
          opacity: 0
        }, transition: {
          duration: 0.25,
          ease: "easeInOut"
        }, className: "flex h-full flex-col overflow-hidden border-r border-border bg-card/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-border px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: "Design Assistant" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Quantum chip architect · online" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-3 overflow-y-auto px-4 py-4", children: [
            active.messages.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: m.role === "you" ? "ml-auto max-w-[85%] rounded-2xl bg-foreground px-3.5 py-2 text-sm text-background" : "max-w-[90%] rounded-2xl border border-border bg-card px-3.5 py-2 text-sm text-foreground", children: m.loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
              " Generating…"
            ] }) : m.text }, i)),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: chatEndRef })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { value: prompt, onChange: (e) => setPrompt(e.target.value), onKeyDown: (e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            }, placeholder: "e.g. 5-qubit transmon with nearest-neighbor coupling", className: "min-h-[64px] rounded-2xl", disabled: loading }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1.5 text-[11px] text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 text-accent" }),
                "Enter to send"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: send, size: "sm", className: "rounded-full px-4", disabled: loading || !prompt.trim(), children: [
                loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-1.5 h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "mr-1.5 h-3.5 w-3.5" }),
                "Send"
              ] })
            ] })
          ] })
        ] }, "chat") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "flex min-w-0 flex-1 flex-col bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: view, onValueChange: (v) => setView(v), className: "flex flex-1 flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border px-6 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "rounded-full bg-secondary p-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "chip", className: "rounded-full px-4 text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Microchip, { className: "mr-1.5 h-3.5 w-3.5" }),
                "Fabricated Chip"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "circuit", className: "rounded-full px-4 text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircuitBoard, { className: "mr-1.5 h-3.5 w-3.5" }),
                "Frequency Plan"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "code", className: "rounded-full px-4 text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CodeXml, { className: "mr-1.5 h-3.5 w-3.5" }),
                "Code"
              ] })
            ] }),
            hasOutput && result && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              result.drc?.passed ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "rounded-full text-[10px] text-green-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mr-1 h-3 w-3" }),
                "DRC Pass"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "rounded-full text-[10px] text-yellow-600", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "mr-1 h-3 w-3" }),
                "DRC Warnings"
              ] }),
              result.fabricated_image && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", className: "rounded-full", onClick: () => {
                const a = document.createElement("a");
                a.href = `data:image/png;base64,${result.fabricated_image}`;
                a.download = "chip_layout.png";
                a.click();
              }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-1.5 h-3.5 w-3.5" }),
                "PNG"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-0 flex-1 overflow-auto p-6", children: !hasOutput ? /* @__PURE__ */ jsxRuntimeExports.jsx(EmptyState, {}) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "chip", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChipView, { result }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "circuit", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FreqPlanView, { result }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "code", className: "mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeView, { result }) })
          ] }) })
        ] }) })
      ] })
    ] })
  ] });
}
function EmptyState() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full min-h-[400px] flex-col items-center justify-center text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-6 w-6 text-accent" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-lg font-semibold text-foreground", children: "No quantum chip yet" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 max-w-sm text-sm text-muted-foreground", children: "Describe your quantum chip in the chat. The fabricated layout, frequency plan, and generated code will appear here — powered by the live backend." })
  ] });
}
function ChipView({
  result
}) {
  const img = result.fabricated_image || result.chip_image;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-3xl border-border p-6 shadow-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium uppercase tracking-wider text-muted-foreground", children: "Fabricated Layout" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 text-lg font-semibold text-foreground", children: result.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: result.interpretation })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "rounded-full", children: [
          result.topology,
          " · ",
          result.num_qubits,
          "Q"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 overflow-hidden rounded-2xl border border-border bg-[#0A0A0A] p-4 flex items-center justify-center min-h-[300px]", children: img ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: `data:image/png;base64,${img}`, alt: "Chip layout", className: "max-h-[360px] w-full object-contain" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/40", children: "No image returned by backend" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid grid-cols-3 gap-3 text-center", children: [{
        label: "Qubits",
        value: String(result.num_qubits)
      }, {
        label: "Topology",
        value: result.topology
      }, {
        label: "Engine",
        value: (result.engine ?? "schematic").replace("qiskit-metal-", "Metal ")
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: s.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-base font-semibold text-foreground truncate", children: s.value })
      ] }, s.label)) })
    ] }),
    result.drc && !result.drc.passed && (result.drc.violations?.length ?? 0) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-2xl border-yellow-200 bg-yellow-50 p-4 shadow-none dark:border-yellow-900 dark:bg-yellow-950/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 text-sm font-semibold text-yellow-700 dark:text-yellow-400", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }),
        "DRC Violations"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-2 space-y-1", children: (result.drc.violations ?? []).slice(0, 5).map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-xs text-yellow-700 dark:text-yellow-400", children: [
        (v.severity ?? "warn").toUpperCase(),
        " · ",
        v.rule ?? "rule",
        ": ",
        v.message
      ] }, i)) })
    ] })
  ] });
}
function FreqPlanView({
  result
}) {
  const fp = result.frequency_plan;
  if (!fp) return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No frequency data available." });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-3xl border-border p-6 shadow-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground", children: "Frequency Plan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "rounded-full", children: [
          "ε_eff = ",
          fp.epsilon_eff != null ? fp.epsilon_eff.toFixed(3) : "—"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2", children: "Qubit Frequencies" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: Object.entries(fp.qubit_frequencies_GHz ?? {}).map(([name, freq]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-xl border border-border bg-card px-3 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-[10px] text-muted-foreground", children: [
                "group ",
                fp.qubit_groups?.[name] ?? "—"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold text-foreground", children: [
                freq.toFixed(3),
                " GHz"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground", children: [
                "EJ=",
                fp.EJ_GHz?.[name]?.toFixed(1),
                " · EC=",
                fp.EC_GHz?.[name]?.toFixed(3)
              ] })
            ] })
          ] }, name)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2", children: "Readout Resonators" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: Object.entries(fp.resonator_frequencies_GHz ?? {}).map(([name, freq]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-xl border border-border bg-card px-3 py-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground", children: [
                fp.resonator_lengths_mm?.[name]?.toFixed(3),
                " mm λ/4"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold text-foreground", children: [
                freq.toFixed(3),
                " GHz"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground", children: [
                "Δ=",
                fp.detunings_GHz?.[name]?.toFixed(3),
                " GHz"
              ] })
            ] })
          ] }, name)) })
        ] })
      ] }),
      (fp.warnings?.length ?? 0) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-xl border border-yellow-200 bg-yellow-50 p-3 dark:border-yellow-900 dark:bg-yellow-950/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1.5 text-xs font-semibold text-yellow-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-3.5 w-3.5" }),
          "Frequency warnings"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-1 space-y-0.5", children: (fp.warnings ?? []).map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-xs text-yellow-600", children: w }, i)) })
      ] })
    ] }),
    (result.placement?.qubits?.length ?? 0) > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "rounded-3xl border-border p-6 shadow-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground", children: "Physical Placement" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "rounded-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "mr-1 h-3 w-3" }),
          result.placement?.solver ?? "deterministic"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4", children: (result.placement?.qubits ?? []).map((q) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card px-3 py-2 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: q.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", children: [
          "(",
          q.x.toFixed(1),
          ", ",
          q.y.toFixed(1),
          ") mm"
        ] })
      ] }, q.name)) })
    ] })
  ] });
}
function CodeView({
  result
}) {
  const code = result.code ?? "# No code generated";
  const copy = () => {
    if (navigator?.clipboard) navigator.clipboard.writeText(code);
  };
  const download = () => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([code], {
      type: "text/plain"
    }));
    a.download = "qbeta_chip.py";
    a.click();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden rounded-3xl border-border p-0 shadow-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border bg-card px-5 py-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeXml, { className: "h-4 w-4 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: "qbeta_chip.py" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: copy, className: "rounded-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "mr-1.5 h-3.5 w-3.5" }),
          "Copy"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: download, className: "rounded-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-1.5 h-3.5 w-3.5" }),
          ".py"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "overflow-auto bg-[#0A0A0A] p-5 text-[12.5px] leading-relaxed text-[#E6E6F0] max-h-[600px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "font-mono", children: code }) })
  ] });
}
export {
  DesignerPage as component
};
