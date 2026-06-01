import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Check, Copy, Download, Edit3, HelpCircle, PanelLeft,
  Plus, RefreshCw, Search, Send, Settings, Sparkles,
  ThumbsDown, ThumbsUp, Trash2, X, ZoomIn,
} from "lucide-react";
import { generateChip, type GenerateResponse } from "@/lib/api/backend";

export const Route = createFileRoute("/_app/chat")({
  head: () => ({ meta: [{ title: "QBETA Chatbot — Silicofeller" }] }),
  component: ChatPage,
});

/* ─── Types ─────────────────────────────────────────────────────── */
type Msg = { id: string; role: "user" | "assistant"; text: string; result?: GenerateResponse; error?: string };
type HistItem = { id: string; prompt: string };

const STARTERS = [
  { emoji: "⚛️", title: "4-qubit grid chip", body: "Design a 4-qubit grid superconducting chip with fabricated layout" },
  { emoji: "🔬", title: "Heavy-hex topology", body: "Generate an 8-qubit IBM heavy-hex transmon chip with readout resonators" },
  { emoji: "⭐", title: "Star topology", body: "Create a compact 5-qubit star hub chip with frequency-planned resonators" },
  { emoji: "🏗️", title: "Large processor", body: "Build a 12-qubit grid quantum processor with DRC validation" },
];

function uid() { return crypto.randomUUID(); }
function b64img(v?: string) {
  if (!v) return "";
  return v.startsWith("data:") ? v : `data:image/png;base64,${v}`;
}
function dlImage(b64: string, filename: string) {
  const a = document.createElement("a");
  a.href = b64img(b64); a.download = filename;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
}

/* ─── Lightbox ──────────────────────────────────────────────────── */
function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.92)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div onClick={e => e.stopPropagation()} style={{ position: "absolute", top: 16, right: 16, display: "flex", gap: 8 }}>
        <button onClick={() => dlImage(src, alt + ".png")} style={btnStyle}><Download size={15} /> Download PNG</button>
        <button onClick={onClose} style={{ ...btnStyle, width: 36, height: 36, padding: 0, display: "grid", placeItems: "center" }}><X size={18} /></button>
      </div>
      <img src={b64img(src)} alt={alt} onClick={e => e.stopPropagation()} style={{ maxWidth: "95vw", maxHeight: "90vh", objectFit: "contain", borderRadius: 10, boxShadow: "0 8px 60px rgba(0,0,0,0.7)" }} />
      <div style={{ marginTop: 12, fontSize: 12, color: "rgba(255,255,255,0.35)" }}>Click outside or press Esc to close</div>
    </div>
  );
}
const btnStyle: React.CSSProperties = { display: "flex", alignItems: "center", gap: 6, background: "#2f2f2f", border: "1px solid rgba(255,255,255,0.15)", color: "#ececec", borderRadius: 8, padding: "8px 14px", fontSize: 13, fontWeight: 500, cursor: "pointer" };

/* ─── CopyBtn ───────────────────────────────────────────────────── */
function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button onClick={() => { navigator.clipboard.writeText(text).catch(() => { }); setCopied(true); setTimeout(() => setCopied(false), 1500); }} style={actionBtn}>
      {copied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  );
}
const actionBtn: React.CSSProperties = { background: "none", border: "none", cursor: "pointer", color: "#8e8ea0", padding: 4, borderRadius: 4, display: "flex", alignItems: "center" };

/* ─── FreqTable ─────────────────────────────────────────────────── */
function FreqTable({ plan }: { plan?: GenerateResponse["frequency_plan"] }) {
  if (!plan) return null;
  const qentries = Object.entries(plan.qubit_frequencies_GHz ?? {});
  if (!qentries.length) return null;
  return (
    <div style={{ marginTop: 16, overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
        <thead>
          <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            {["Qubit", "Frequency", "Group", "Resonator", "λ/4 length"].map(h => (
              <th key={h} style={{ padding: "6px 10px", textAlign: "left", color: "#8e8ea0", fontWeight: 500 }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {qentries.map(([q, f]) => {
            const rname = `RO_${q}`;
            const rf = (plan.resonator_frequencies_GHz ?? {})[rname];
            const rl = (plan.resonator_lengths_mm ?? {})[rname];
            return (
              <tr key={q} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <td style={{ padding: "6px 10px", color: "#4ade80", fontFamily: "monospace" }}>{q}</td>
                <td style={{ padding: "6px 10px", color: "#ececec" }}>{Number(f).toFixed(3)} GHz</td>
                <td style={{ padding: "6px 10px", color: "#8e8ea0" }}>{(plan.qubit_groups ?? {})[q] ?? "–"}</td>
                <td style={{ padding: "6px 10px", color: "#ececec" }}>{rf ? `${Number(rf).toFixed(3)} GHz` : "—"}</td>
                <td style={{ padding: "6px 10px", color: "#ececec" }}>{rl ? `${Number(rl).toFixed(3)} mm` : "—"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/* ─── ChipResult ────────────────────────────────────────────────── */
function ChipResult({ result }: { result: GenerateResponse }) {
  const [lightbox, setLightbox] = useState(false);
  const fab = result.fabricated_image;
  const filename = `qbeta_${result.num_qubits}q_${result.topology}_chip`;
  const drc = result.drc;
  const passed = drc?.passed ?? true;
  return (
    <>
      {lightbox && fab && <Lightbox src={fab} alt={filename} onClose={() => setLightbox(false)} />}
      <div style={{ marginTop: 16, background: "#171717", borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
        {fab && (
          <div style={{ position: "relative" }}>
            <img src={b64img(fab)} alt="Chip layout" onClick={() => setLightbox(true)} style={{ width: "100%", display: "block", cursor: "zoom-in", maxHeight: 400, objectFit: "contain", background: "#0a0a0a" }} />
            <div style={{ position: "absolute", top: 10, right: 10, display: "flex", gap: 6 }}>
              <button onClick={() => setLightbox(true)} style={overlayBtn}><ZoomIn size={13} /> View</button>
              <button onClick={() => dlImage(fab, filename + ".png")} style={overlayBtn}><Download size={13} /> Download</button>
            </div>
          </div>
        )}
        <div style={{ padding: 16 }}>
          <div style={{ fontWeight: 600, color: "#ececec", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            Fabricated Chip
            <span style={{ background: "rgba(109,90,240,0.2)", color: "#a78bfa", borderRadius: 99, padding: "2px 8px", fontSize: 11 }}>
              <Sparkles size={10} style={{ display: "inline", marginRight: 4 }} />
              {result.engine === "qiskit-metal-v2" ? "Qiskit Metal" : "Schematic"}
            </span>
          </div>
          <div style={{ marginTop: 8, fontSize: 13, color: "#b4b4b4" }}>{result.interpretation ?? `Generated a ${result.num_qubits}-qubit ${result.topology} chip.`}</div>
          <div style={{ marginTop: 10, display: "flex", gap: 6, flexWrap: "wrap" }}>
            {[["Qubits", result.num_qubits], ["Topology", result.topology]].map(([l, v]) => (
              <span key={String(l)} style={{ background: "#2f2f2f", borderRadius: 99, padding: "3px 10px", fontSize: 12, color: "#ececec" }}>{l} <strong>{v}</strong></span>
            ))}
            {drc && (
              <span style={{ background: passed ? "rgba(74,222,128,0.1)" : "rgba(239,68,68,0.1)", color: passed ? "#4ade80" : "#f87171", borderRadius: 99, padding: "3px 10px", fontSize: 12, display: "flex", alignItems: "center", gap: 4 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor", display: "inline-block" }} />
                DRC {passed ? "Passed" : "Failed"}
              </span>
            )}
          </div>
          <FreqTable plan={result.frequency_plan} />
        </div>
      </div>
    </>
  );
}
const overlayBtn: React.CSSProperties = { display: "flex", alignItems: "center", gap: 5, background: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.15)", color: "#ececec", borderRadius: 7, padding: "6px 11px", fontSize: 12, fontWeight: 500, cursor: "pointer" };

/* ─── Messages ──────────────────────────────────────────────────── */
function UserMsg({ msg }: { msg: Msg }) {
  return <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}><div style={{ background: "#2f2f2f", color: "#ececec", borderRadius: 18, padding: "10px 16px", maxWidth: "80%", fontSize: 14 }}>{msg.text}</div></div>;
}
function AssistantMsg({ msg }: { msg: Msg }) {
  return (
    <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
      <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#2f2f2f", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
        <Sparkles size={14} color="#a78bfa" />
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600, fontSize: 13, color: "#ececec", marginBottom: 4 }}>QBETA</div>
        {msg.error ? (
          <div style={{ color: "#f87171", fontSize: 14 }}>{msg.error}</div>
        ) : (
          <div style={{ color: "#ececec", fontSize: 14, lineHeight: 1.6 }}>{msg.text}</div>
        )}
        {msg.result && !msg.error && <ChipResult result={msg.result} />}
        {!msg.error && (
          <div style={{ display: "flex", gap: 4, marginTop: 8 }}>
            <CopyBtn text={msg.text} />
            <button style={actionBtn}><ThumbsUp size={14} /></button>
            <button style={actionBtn}><ThumbsDown size={14} /></button>
          </div>
        )}
      </div>
    </div>
  );
}
function Thinking() {
  return (
    <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
      <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#2f2f2f", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Sparkles size={14} color="#a78bfa" /></div>
      <div>
        <div style={{ fontWeight: 600, fontSize: 13, color: "#ececec", marginBottom: 8 }}>QBETA</div>
        <div style={{ display: "flex", gap: 4 }}>
          {[0, 1, 2].map(i => <span key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "#8e8ea0", animation: `bounce 1.2s ${i * 0.2}s ease-in-out infinite` }} />)}
        </div>
      </div>
    </div>
  );
}

/* ─── ChatSidebar ───────────────────────────────────────────────── */
function ChatSidebar({ open, onToggle, history, onNew, onLoad, onDelete }: {
  open: boolean; onToggle: () => void;
  history: HistItem[]; onNew: () => void;
  onLoad: (item: HistItem) => void; onDelete: (id: string) => void;
}) {
  return (
    <aside style={{ width: open ? 260 : 0, minWidth: 0, overflow: "hidden", transition: "width 0.25s ease", background: "#171717", display: "flex", flexDirection: "column", borderRight: "1px solid rgba(255,255,255,0.08)", flexShrink: 0 }}>
      <div style={{ padding: "12px 12px 8px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontWeight: 700, fontSize: 15, color: "#ececec" }}>QBETA</span>
        <button onClick={onToggle} style={actionBtn}><PanelLeft size={18} /></button>
      </div>
      <div style={{ padding: "0 8px 8px" }}>
        <button onClick={onNew} style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#ececec", borderRadius: 8, padding: "8px 12px", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}>
          <Plus size={15} /> New chat
        </button>
      </div>
      {history.length > 0 && (
        <div style={{ flex: 1, overflowY: "auto", padding: "0 8px" }}>
          <div style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#8e8ea0", padding: "8px 4px 4px" }}>History</div>
          {history.map(item => (
            <div key={item.id} style={{ display: "flex", alignItems: "center", borderRadius: 6, marginBottom: 2 }}>
              <button onClick={() => onLoad(item)} style={{ flex: 1, background: "none", border: "none", color: "#b4b4b4", fontSize: 12, textAlign: "left", cursor: "pointer", padding: "6px 8px", borderRadius: 6, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {item.prompt}
              </button>
              <button onClick={() => onDelete(item.id)} style={{ ...actionBtn, flexShrink: 0 }}><Trash2 size={12} /></button>
            </div>
          ))}
        </div>
      )}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: 8 }}>
        <button style={{ ...actionBtn, width: "100%", padding: "8px 12px", fontSize: 12, gap: 8, borderRadius: 6 }}><Settings size={14} /> Settings</button>
        <button style={{ ...actionBtn, width: "100%", padding: "8px 12px", fontSize: 12, gap: 8, borderRadius: 6 }}><HelpCircle size={14} /> Help & FAQ</button>
      </div>
    </aside>
  );
}

/* ─── Welcome ───────────────────────────────────────────────────── */
function Welcome({ onStarter }: { onStarter: (s: string) => void }) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ fontSize: 22, fontWeight: 700, color: "#ececec", marginBottom: 24, textAlign: "center" }}>What can I help you design?</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, maxWidth: 700, width: "100%" }}>
        {STARTERS.map(s => (
          <button key={s.title} onClick={() => onStarter(s.body)} style={{ background: "#2f2f2f", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: 16, cursor: "pointer", textAlign: "left", color: "#ececec" }}>
            <div style={{ fontSize: 20, marginBottom: 6 }}>{s.emoji}</div>
            <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 4 }}>{s.title}</div>
            <div style={{ fontSize: 12, color: "#8e8ea0", lineHeight: 1.4 }}>{s.body}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─── Composer ──────────────────────────────────────────────────── */
function Composer({ value, onChange, onSubmit, loading }: { value: string; onChange: (v: string) => void; onSubmit: () => void; loading: boolean }) {
  const ref = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (ref.current) { ref.current.style.height = "auto"; ref.current.style.height = Math.min(ref.current.scrollHeight, 200) + "px"; }
  }, [value]);
  return (
    <div style={{ padding: "0 16px 16px" }}>
      <div style={{ background: "#2f2f2f", borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "flex-end", gap: 8, padding: "8px 8px 8px 16px" }}>
        <textarea ref={ref} value={value} onChange={e => onChange(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); onSubmit(); } }}
          placeholder="Message QBETA…" rows={1}
          style={{ flex: 1, background: "none", border: "none", outline: "none", resize: "none", color: "#ececec", fontSize: 14, lineHeight: 1.5, maxHeight: 200, overflowY: "auto" }} />
        <button onClick={onSubmit} disabled={!value.trim() || loading}
          style={{ width: 36, height: 36, borderRadius: "50%", background: value.trim() && !loading ? "#ececec" : "#3f3f3f", border: "none", cursor: value.trim() && !loading ? "pointer" : "default", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background 0.15s" }}>
          {loading ? <RefreshCw size={16} color="#8e8ea0" style={{ animation: "spin 1s linear infinite" }} /> : <Send size={16} color={value.trim() ? "#0a0a0a" : "#8e8ea0"} />}
        </button>
      </div>
      <div style={{ textAlign: "center", fontSize: 11, color: "#8e8ea0", marginTop: 8 }}>QBETA generates physics-accurate superconducting chip designs.</div>
    </div>
  );
}

/* ─── ChatPage ──────────────────────────────────────────────────── */
function ChatPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<HistItem[]>(() => {
    try { return JSON.parse(localStorage.getItem("qbeta_hist") ?? "[]") as HistItem[]; } catch { return []; }
  });
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => { localStorage.setItem("qbeta_hist", JSON.stringify(history.slice(0, 40))); }, [history]);
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);

  const submit = useCallback(async (text?: string) => {
    const clean = (text ?? prompt).trim();
    if (!clean || loading) return;
    setPrompt("");
    const userMsg: Msg = { id: uid(), role: "user", text: clean };
    setMessages(m => [...m, userMsg]);
    setHistory(h => [{ id: uid(), prompt: clean.slice(0, 60) }, ...h].slice(0, 40));
    setLoading(true);
    try {
      const data = await generateChip(clean);
      const aiMsg: Msg = { id: uid(), role: "assistant", text: data.interpretation ?? `Designed a ${data.num_qubits}-qubit ${data.topology} chip.`, result: data };
      setMessages(m => [...m, aiMsg]);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Backend error";
      setMessages(m => [...m, { id: uid(), role: "assistant", text: "", error: msg }]);
    } finally { setLoading(false); }
  }, [prompt, loading]);

  const handleNew = () => { setMessages([]); setPrompt(""); };
  const empty = messages.length === 0 && !loading;

  return (
    <div style={{ display: "flex", height: "calc(100vh - 3.5rem)", background: "#212121", fontFamily: "Inter, system-ui, sans-serif" }}>
      <style>{`@keyframes bounce{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-6px)}} @keyframes spin{to{transform:rotate(360deg)}}`}</style>
      <ChatSidebar open={sidebarOpen} onToggle={() => setSidebarOpen(o => !o)} history={history} onNew={handleNew} onLoad={item => setPrompt(item.prompt)} onDelete={id => setHistory(h => h.filter(x => x.id !== id))} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <div style={{ padding: "10px 16px", borderBottom: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: 8 }}>
          {!sidebarOpen && <button onClick={() => setSidebarOpen(true)} style={actionBtn}><PanelLeft size={18} /></button>}
          {!sidebarOpen && <button onClick={handleNew} style={actionBtn}><Edit3 size={18} /></button>}
          <span style={{ fontSize: 14, fontWeight: 600, color: "#ececec" }}>{empty ? "" : "QBETA"}</span>
        </div>
        {empty ? (
          <Welcome onStarter={s => submit(s)} />
        ) : (
          <div style={{ flex: 1, overflowY: "auto", padding: "24px 16px 8px" }}>
            <div style={{ maxWidth: 720, margin: "0 auto" }}>
              {messages.map(m => m.role === "user" ? <UserMsg key={m.id} msg={m} /> : <AssistantMsg key={m.id} msg={m} />)}
              {loading && <Thinking />}
              <div ref={bottomRef} />
            </div>
          </div>
        )}
        <div style={{ maxWidth: 752, margin: "0 auto", width: "100%" }}>
          <Composer value={prompt} onChange={setPrompt} onSubmit={() => submit()} loading={loading} />
        </div>
      </div>
    </div>
  );
}
