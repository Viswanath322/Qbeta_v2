import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { g as generateChip } from "./backend-sVf8_dNy.mjs";
import { P as PanelLeft, y as PenLine, J as Plus, X as Trash2, K as Settings, h as CircleQuestionMark, T as Sparkles, W as ThumbsUp, V as ThumbsDown, R as RefreshCw, S as Send, a5 as ZoomIn, D as Download, C as Check, l as Copy, a3 as X } from "../_libs/lucide-react.mjs";
const STARTERS = [{
  emoji: "⚛️",
  title: "4-qubit grid chip",
  body: "Design a 4-qubit grid superconducting chip with fabricated layout"
}, {
  emoji: "🔬",
  title: "Heavy-hex topology",
  body: "Generate an 8-qubit IBM heavy-hex transmon chip with readout resonators"
}, {
  emoji: "⭐",
  title: "Star topology",
  body: "Create a compact 5-qubit star hub chip with frequency-planned resonators"
}, {
  emoji: "🏗️",
  title: "Large processor",
  body: "Build a 12-qubit grid quantum processor with DRC validation"
}];
function uid() {
  return crypto.randomUUID();
}
function b64img(v) {
  if (!v) return "";
  return v.startsWith("data:") ? v : `data:image/png;base64,${v}`;
}
function dlImage(b64, filename) {
  const a = document.createElement("a");
  a.href = b64img(b64);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
function Lightbox({
  src,
  alt,
  onClose
}) {
  reactExports.useEffect(() => {
    const fn = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: onClose, style: {
    position: "fixed",
    inset: 0,
    zIndex: 9999,
    background: "rgba(0,0,0,0.92)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onClick: (e) => e.stopPropagation(), style: {
      position: "absolute",
      top: 16,
      right: 16,
      display: "flex",
      gap: 8
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => dlImage(src, alt + ".png"), style: btnStyle, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 15 }),
        " Download PNG"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, style: {
        ...btnStyle,
        width: 36,
        height: 36,
        padding: 0,
        display: "grid",
        placeItems: "center"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: b64img(src), alt, onClick: (e) => e.stopPropagation(), style: {
      maxWidth: "95vw",
      maxHeight: "90vh",
      objectFit: "contain",
      borderRadius: 10,
      boxShadow: "0 8px 60px rgba(0,0,0,0.7)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      marginTop: 12,
      fontSize: 12,
      color: "rgba(255,255,255,0.35)"
    }, children: "Click outside or press Esc to close" })
  ] });
}
const btnStyle = {
  display: "flex",
  alignItems: "center",
  gap: 6,
  background: "#2f2f2f",
  border: "1px solid rgba(255,255,255,0.15)",
  color: "#ececec",
  borderRadius: 8,
  padding: "8px 14px",
  fontSize: 13,
  fontWeight: 500,
  cursor: "pointer"
};
function CopyBtn({
  text
}) {
  const [copied, setCopied] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
    navigator.clipboard.writeText(text).catch(() => {
    });
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, style: actionBtn, children: copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 14 }) });
}
const actionBtn = {
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "#8e8ea0",
  padding: 4,
  borderRadius: 4,
  display: "flex",
  alignItems: "center"
};
function FreqTable({
  plan
}) {
  if (!plan) return null;
  const qentries = Object.entries(plan.qubit_frequencies_GHz ?? {});
  if (!qentries.length) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    marginTop: 16,
    overflowX: "auto"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { style: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: 12
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { style: {
      borderBottom: "1px solid rgba(255,255,255,0.1)"
    }, children: ["Qubit", "Frequency", "Group", "Resonator", "λ/4 length"].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { style: {
      padding: "6px 10px",
      textAlign: "left",
      color: "#8e8ea0",
      fontWeight: 500
    }, children: h }, h)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: qentries.map(([q, f]) => {
      const rname = `RO_${q}`;
      const rf = (plan.resonator_frequencies_GHz ?? {})[rname];
      const rl = (plan.resonator_lengths_mm ?? {})[rname];
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { style: {
        borderBottom: "1px solid rgba(255,255,255,0.05)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: {
          padding: "6px 10px",
          color: "#4ade80",
          fontFamily: "monospace"
        }, children: q }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { style: {
          padding: "6px 10px",
          color: "#ececec"
        }, children: [
          Number(f).toFixed(3),
          " GHz"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: {
          padding: "6px 10px",
          color: "#8e8ea0"
        }, children: (plan.qubit_groups ?? {})[q] ?? "–" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: {
          padding: "6px 10px",
          color: "#ececec"
        }, children: rf ? `${Number(rf).toFixed(3)} GHz` : "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: {
          padding: "6px 10px",
          color: "#ececec"
        }, children: rl ? `${Number(rl).toFixed(3)} mm` : "—" })
      ] }, q);
    }) })
  ] }) });
}
function ChipResult({
  result
}) {
  const [lightbox, setLightbox] = reactExports.useState(false);
  const fab = result.fabricated_image;
  const filename = `qbeta_${result.num_qubits}q_${result.topology}_chip`;
  const drc = result.drc;
  const passed = drc?.passed ?? true;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    lightbox && fab && /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbox, { src: fab, alt: filename, onClose: () => setLightbox(false) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      marginTop: 16,
      background: "#171717",
      borderRadius: 12,
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.08)"
    }, children: [
      fab && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        position: "relative"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: b64img(fab), alt: "Chip layout", onClick: () => setLightbox(true), style: {
          width: "100%",
          display: "block",
          cursor: "zoom-in",
          maxHeight: 400,
          objectFit: "contain",
          background: "#0a0a0a"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          position: "absolute",
          top: 10,
          right: 10,
          display: "flex",
          gap: 6
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setLightbox(true), style: overlayBtn, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomIn, { size: 13 }),
            " View"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => dlImage(fab, filename + ".png"), style: overlayBtn, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 13 }),
            " Download"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        padding: 16
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          fontWeight: 600,
          color: "#ececec",
          display: "flex",
          alignItems: "center",
          gap: 8,
          flexWrap: "wrap"
        }, children: [
          "Fabricated Chip",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: {
            background: "rgba(109,90,240,0.2)",
            color: "#a78bfa",
            borderRadius: 99,
            padding: "2px 8px",
            fontSize: 11
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 10, style: {
              display: "inline",
              marginRight: 4
            } }),
            result.engine === "qiskit-metal-v2" ? "Qiskit Metal" : "Schematic"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
          marginTop: 8,
          fontSize: 13,
          color: "#b4b4b4"
        }, children: result.interpretation ?? `Generated a ${result.num_qubits}-qubit ${result.topology} chip.` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
          marginTop: 10,
          display: "flex",
          gap: 6,
          flexWrap: "wrap"
        }, children: [
          [["Qubits", result.num_qubits], ["Topology", result.topology]].map(([l, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: {
            background: "#2f2f2f",
            borderRadius: 99,
            padding: "3px 10px",
            fontSize: 12,
            color: "#ececec"
          }, children: [
            l,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: v })
          ] }, String(l))),
          drc && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: {
            background: passed ? "rgba(74,222,128,0.1)" : "rgba(239,68,68,0.1)",
            color: passed ? "#4ade80" : "#f87171",
            borderRadius: 99,
            padding: "3px 10px",
            fontSize: 12,
            display: "flex",
            alignItems: "center",
            gap: 4
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "currentColor",
              display: "inline-block"
            } }),
            "DRC ",
            passed ? "Passed" : "Failed"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FreqTable, { plan: result.frequency_plan })
      ] })
    ] })
  ] });
}
const overlayBtn = {
  display: "flex",
  alignItems: "center",
  gap: 5,
  background: "rgba(0,0,0,0.65)",
  backdropFilter: "blur(6px)",
  border: "1px solid rgba(255,255,255,0.15)",
  color: "#ececec",
  borderRadius: 7,
  padding: "6px 11px",
  fontSize: 12,
  fontWeight: 500,
  cursor: "pointer"
};
function UserMsg({
  msg
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 16
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    background: "#2f2f2f",
    color: "#ececec",
    borderRadius: 18,
    padding: "10px 16px",
    maxWidth: "80%",
    fontSize: 14
  }, children: msg.text }) });
}
function AssistantMsg({
  msg
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    display: "flex",
    gap: 12,
    marginBottom: 16
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      width: 28,
      height: 28,
      borderRadius: "50%",
      background: "#2f2f2f",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      marginTop: 2
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 14, color: "#a78bfa" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      flex: 1
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        fontWeight: 600,
        fontSize: 13,
        color: "#ececec",
        marginBottom: 4
      }, children: "QBETA" }),
      msg.error ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        color: "#f87171",
        fontSize: 14
      }, children: msg.error }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        color: "#ececec",
        fontSize: 14,
        lineHeight: 1.6
      }, children: msg.text }),
      msg.result && !msg.error && /* @__PURE__ */ jsxRuntimeExports.jsx(ChipResult, { result: msg.result }),
      !msg.error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "flex",
        gap: 4,
        marginTop: 8
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CopyBtn, { text: msg.text }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { style: actionBtn, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThumbsUp, { size: 14 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { style: actionBtn, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThumbsDown, { size: 14 }) })
      ] })
    ] })
  ] });
}
function Thinking() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    display: "flex",
    gap: 12,
    marginBottom: 16
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      width: 28,
      height: 28,
      borderRadius: "50%",
      background: "#2f2f2f",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 14, color: "#a78bfa" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        fontWeight: 600,
        fontSize: 13,
        color: "#ececec",
        marginBottom: 8
      }, children: "QBETA" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        display: "flex",
        gap: 4
      }, children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: "#8e8ea0",
        animation: `bounce 1.2s ${i * 0.2}s ease-in-out infinite`
      } }, i)) })
    ] })
  ] });
}
function ChatSidebar({
  open,
  onToggle,
  history,
  onNew,
  onLoad,
  onDelete
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { style: {
    width: open ? 260 : 0,
    minWidth: 0,
    overflow: "hidden",
    transition: "width 0.25s ease",
    background: "#171717",
    display: "flex",
    flexDirection: "column",
    borderRight: "1px solid rgba(255,255,255,0.08)",
    flexShrink: 0
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      padding: "12px 12px 8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
        fontWeight: 700,
        fontSize: 15,
        color: "#ececec"
      }, children: "QBETA" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onToggle, style: actionBtn, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PanelLeft, { size: 18 }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      padding: "0 8px 8px"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onNew, style: {
      width: "100%",
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.1)",
      color: "#ececec",
      borderRadius: 8,
      padding: "8px 12px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: 13
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 15 }),
      " New chat"
    ] }) }),
    history.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      flex: 1,
      overflowY: "auto",
      padding: "0 8px"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        fontSize: 10,
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        color: "#8e8ea0",
        padding: "8px 4px 4px"
      }, children: "History" }),
      history.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        display: "flex",
        alignItems: "center",
        borderRadius: 6,
        marginBottom: 2
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => onLoad(item), style: {
          flex: 1,
          background: "none",
          border: "none",
          color: "#b4b4b4",
          fontSize: 12,
          textAlign: "left",
          cursor: "pointer",
          padding: "6px 8px",
          borderRadius: 6,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }, children: item.prompt }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => onDelete(item.id), style: {
          ...actionBtn,
          flexShrink: 0
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 12 }) })
      ] }, item.id))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      borderTop: "1px solid rgba(255,255,255,0.08)",
      padding: 8
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { style: {
        ...actionBtn,
        width: "100%",
        padding: "8px 12px",
        fontSize: 12,
        gap: 8,
        borderRadius: 6
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Settings, { size: 14 }),
        " Settings"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { style: {
        ...actionBtn,
        width: "100%",
        padding: "8px 12px",
        fontSize: 12,
        gap: 8,
        borderRadius: 6
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { size: 14 }),
        " Help & FAQ"
      ] })
    ] })
  ] });
}
function Welcome({
  onStarter
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 24
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      fontSize: 22,
      fontWeight: 700,
      color: "#ececec",
      marginBottom: 24,
      textAlign: "center"
    }, children: "What can I help you design?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: 12,
      maxWidth: 700,
      width: "100%"
    }, children: STARTERS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => onStarter(s.body), style: {
      background: "#2f2f2f",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 12,
      padding: 16,
      cursor: "pointer",
      textAlign: "left",
      color: "#ececec"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        fontSize: 20,
        marginBottom: 6
      }, children: s.emoji }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        fontWeight: 600,
        fontSize: 13,
        marginBottom: 4
      }, children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        fontSize: 12,
        color: "#8e8ea0",
        lineHeight: 1.4
      }, children: s.body })
    ] }, s.title)) })
  ] });
}
function Composer({
  value,
  onChange,
  onSubmit,
  loading
}) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height = Math.min(ref.current.scrollHeight, 200) + "px";
    }
  }, [value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    padding: "0 16px 16px"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      background: "#2f2f2f",
      borderRadius: 16,
      border: "1px solid rgba(255,255,255,0.1)",
      display: "flex",
      alignItems: "flex-end",
      gap: 8,
      padding: "8px 8px 8px 16px"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { ref, value, onChange: (e) => onChange(e.target.value), onKeyDown: (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          onSubmit();
        }
      }, placeholder: "Message QBETA…", rows: 1, style: {
        flex: 1,
        background: "none",
        border: "none",
        outline: "none",
        resize: "none",
        color: "#ececec",
        fontSize: 14,
        lineHeight: 1.5,
        maxHeight: 200,
        overflowY: "auto"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onSubmit, disabled: !value.trim() || loading, style: {
        width: 36,
        height: 36,
        borderRadius: "50%",
        background: value.trim() && !loading ? "#ececec" : "#3f3f3f",
        border: "none",
        cursor: value.trim() && !loading ? "pointer" : "default",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        transition: "background 0.15s"
      }, children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 16, color: "#8e8ea0", style: {
        animation: "spin 1s linear infinite"
      } }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 16, color: value.trim() ? "#0a0a0a" : "#8e8ea0" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      textAlign: "center",
      fontSize: 11,
      color: "#8e8ea0",
      marginTop: 8
    }, children: "QBETA generates physics-accurate superconducting chip designs." })
  ] });
}
function ChatPage() {
  const [sidebarOpen, setSidebarOpen] = reactExports.useState(true);
  const [messages, setMessages] = reactExports.useState([]);
  const [prompt, setPrompt] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [history, setHistory] = reactExports.useState(() => {
    try {
      return JSON.parse(localStorage.getItem("qbeta_hist") ?? "[]");
    } catch {
      return [];
    }
  });
  const bottomRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    localStorage.setItem("qbeta_hist", JSON.stringify(history.slice(0, 40)));
  }, [history]);
  reactExports.useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages, loading]);
  const submit = reactExports.useCallback(async (text) => {
    const clean = (text ?? prompt).trim();
    if (!clean || loading) return;
    setPrompt("");
    const userMsg = {
      id: uid(),
      role: "user",
      text: clean
    };
    setMessages((m) => [...m, userMsg]);
    setHistory((h) => [{
      id: uid(),
      prompt: clean.slice(0, 60)
    }, ...h].slice(0, 40));
    setLoading(true);
    try {
      const data = await generateChip(clean);
      const aiMsg = {
        id: uid(),
        role: "assistant",
        text: data.interpretation ?? `Designed a ${data.num_qubits}-qubit ${data.topology} chip.`,
        result: data
      };
      setMessages((m) => [...m, aiMsg]);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Backend error";
      setMessages((m) => [...m, {
        id: uid(),
        role: "assistant",
        text: "",
        error: msg
      }]);
    } finally {
      setLoading(false);
    }
  }, [prompt, loading]);
  const handleNew = () => {
    setMessages([]);
    setPrompt("");
  };
  const empty = messages.length === 0 && !loading;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    display: "flex",
    height: "calc(100vh - 3.5rem)",
    background: "#212121",
    fontFamily: "Inter, system-ui, sans-serif"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `@keyframes bounce{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-6px)}} @keyframes spin{to{transform:rotate(360deg)}}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChatSidebar, { open: sidebarOpen, onToggle: () => setSidebarOpen((o) => !o), history, onNew: handleNew, onLoad: (item) => setPrompt(item.prompt), onDelete: (id) => setHistory((h) => h.filter((x) => x.id !== id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        padding: "10px 16px",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        alignItems: "center",
        gap: 8
      }, children: [
        !sidebarOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSidebarOpen(true), style: actionBtn, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PanelLeft, { size: 18 }) }),
        !sidebarOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleNew, style: actionBtn, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { size: 18 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          fontSize: 14,
          fontWeight: 600,
          color: "#ececec"
        }, children: empty ? "" : "QBETA" })
      ] }),
      empty ? /* @__PURE__ */ jsxRuntimeExports.jsx(Welcome, { onStarter: (s) => submit(s) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        flex: 1,
        overflowY: "auto",
        padding: "24px 16px 8px"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        maxWidth: 720,
        margin: "0 auto"
      }, children: [
        messages.map((m) => m.role === "user" ? /* @__PURE__ */ jsxRuntimeExports.jsx(UserMsg, { msg: m }, m.id) : /* @__PURE__ */ jsxRuntimeExports.jsx(AssistantMsg, { msg: m }, m.id)),
        loading && /* @__PURE__ */ jsxRuntimeExports.jsx(Thinking, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: bottomRef })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        maxWidth: 752,
        margin: "0 auto",
        width: "100%"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Composer, { value: prompt, onChange: setPrompt, onSubmit: () => submit(), loading }) })
    ] })
  ] });
}
export {
  ChatPage as component
};
