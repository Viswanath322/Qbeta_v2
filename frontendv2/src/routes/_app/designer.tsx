import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Sparkles, Cpu, Send, PanelLeftClose, PanelLeftOpen,
  Copy, Download, CircuitBoard, Code2, Microchip, Plus,
  MessageSquare, Trash2, Pencil, Check, X, AlertTriangle,
  Loader2, CheckCircle2, Zap,
} from "lucide-react";
import { useAuth } from "@/lib/auth/auth-context";
import { generateChip, type GenerateResponse } from "@/lib/api/backend";

export const Route = createFileRoute("/_app/designer")({
  head: () => ({ meta: [{ title: "Designer — Silicofeller" }] }),
  component: DesignerPage,
});

type ChatMsg = { role: "you" | "ai"; text: string; loading?: boolean };
type Conversation = {
  id: string; title: string; createdAt: number; updatedAt: number;
  messages: ChatMsg[]; result: GenerateResponse | null;
};

const STORAGE_KEY = "silicofeller.designer.conversations.v2";
const WELCOME: ChatMsg = {
  role: "ai",
  text: 'Describe the quantum chip you want to design — qubit count, topology, target fidelity. e.g. "Design a 5-qubit transmon processor with nearest-neighbor coupling."',
};

function newConversation(): Conversation {
  const now = Date.now();
  return { id: `c_${now}_${Math.random().toString(36).slice(2, 7)}`, title: "New chat", createdAt: now, updatedAt: now, messages: [WELCOME], result: null };
}

function DesignerPage() {
  const { user } = useAuth();
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatOpen, setChatOpen] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [view, setView] = useState<"chip" | "circuit" | "code">("chip");
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [renamingId, setRenamingId] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      const parsed: Conversation[] = raw ? JSON.parse(raw) : [];
      if (parsed.length === 0) { const c = newConversation(); setConversations([c]); setActiveId(c.id); }
      else { setConversations(parsed); setActiveId(parsed[0].id); }
    } catch { const c = newConversation(); setConversations([c]); setActiveId(c.id); }
  }, []);

  useEffect(() => {
    if (conversations.length === 0) return;
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations)); } catch {}
  }, [conversations]);

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [conversations, activeId]);

  const active = useMemo(() => conversations.find((c) => c.id === activeId) ?? null, [conversations, activeId]);
  const updateActive = (patch: Partial<Conversation>) =>
    setConversations((cs) => cs.map((c) => (c.id === activeId ? { ...c, ...patch, updatedAt: Date.now() } : c)));

  const send = async () => {
    if (!prompt.trim() || !active || loading) return;
    const text = prompt.trim();
    setPrompt("");
    setLoading(true);
    const isFirst = active.messages.length <= 1;
    updateActive({
      messages: [...active.messages, { role: "you", text }, { role: "ai", text: "Generating your quantum chip…", loading: true }],
      title: isFirst ? text.slice(0, 48) : active.title,
    });
    try {
      const result = await generateChip(text);
      const aiText = result.interpretation ?? `Generated a ${result.num_qubits}-qubit ${result.topology} chip using ${result.engine ?? "schematic"}.${result.error_hint ? ` ⚠ ${result.error_hint}` : ""}`;
      setConversations((cs) =>
        cs.map((c) => {
          if (c.id !== activeId) return c;
          const msgs = c.messages.filter((m) => !m.loading);
          return { ...c, messages: [...msgs, { role: "ai" as const, text: aiText }], result, updatedAt: Date.now() };
        })
      );
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Backend error";
      setConversations((cs) =>
        cs.map((c) => {
          if (c.id !== activeId) return c;
          const msgs = c.messages.filter((m) => !m.loading);
          return { ...c, messages: [...msgs, { role: "ai" as const, text: `❌ ${msg}` }], updatedAt: Date.now() };
        })
      );
    } finally { setLoading(false); }
  };

  const handleNew = () => { const c = newConversation(); setConversations((cs) => [c, ...cs]); setActiveId(c.id); setPrompt(""); };
  const handleDelete = (id: string) => {
    setConversations((cs) => {
      const next = cs.filter((c) => c.id !== id);
      if (next.length === 0) { const c = newConversation(); setActiveId(c.id); return [c]; }
      if (id === activeId) setActiveId(next[0].id);
      return next;
    });
  };
  const startRename = (c: Conversation) => { setRenamingId(c.id); setRenameValue(c.title); };
  const commitRename = () => {
    if (!renamingId) return;
    setConversations((cs) => cs.map((c) => (c.id === renamingId ? { ...c, title: renameValue.trim() || "Untitled chat" } : c)));
    setRenamingId(null);
  };

  if (!active) return null;
  const hasOutput = !!active.result;
  const result = active.result;

  return (
    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex h-[calc(100vh-3.5rem)] w-full">
      {/* History sidebar */}
      <AnimatePresence initial={false}>
        {sidebarOpen && (
          <motion.aside key="history" initial={{ width: 0, opacity: 0 }} animate={{ width: 260, opacity: 1 }} exit={{ width: 0, opacity: 0 }} transition={{ duration: 0.25, ease: "easeInOut" }} className="flex h-full shrink-0 flex-col overflow-hidden border-r border-border bg-[#0A0A0F] text-white">
            <div className="p-3">
              <Button onClick={handleNew} className="w-full justify-start rounded-xl bg-white text-black hover:bg-white/90"><Plus className="mr-2 h-4 w-4" /> New chat</Button>
            </div>
            <div className="px-3 pb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">History</div>
            <div className="flex-1 space-y-0.5 overflow-y-auto px-2 pb-3">
              {conversations.slice().sort((a, b) => b.updatedAt - a.updatedAt).map((c) => {
                const isActive = c.id === activeId, isRenaming = renamingId === c.id;
                return (
                  <div key={c.id} className={`group flex items-center gap-1.5 rounded-lg px-2 py-2 text-sm transition-colors ${isActive ? "bg-white/10" : "hover:bg-white/5"}`}>
                    <MessageSquare className="h-3.5 w-3.5 shrink-0 text-white/50" />
                    {isRenaming ? (
                      <>
                        <Input value={renameValue} onChange={(e) => setRenameValue(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") commitRename(); if (e.key === "Escape") setRenamingId(null); }} autoFocus className="h-7 bg-white/10 text-xs text-white" />
                        <button onClick={commitRename} className="text-white/70 hover:text-white"><Check className="h-3.5 w-3.5" /></button>
                        <button onClick={() => setRenamingId(null)} className="text-white/70 hover:text-white"><X className="h-3.5 w-3.5" /></button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => setActiveId(c.id)} className="min-w-0 flex-1 text-left">
                          <div className="truncate text-xs font-medium text-white/90">{c.title}</div>
                          <div className="truncate text-[10px] text-white/40">{new Date(c.updatedAt).toLocaleDateString()}</div>
                        </button>
                        <button onClick={() => startRename(c)} className="opacity-0 group-hover:opacity-100" aria-label="Rename"><Pencil className="h-3.5 w-3.5 text-white/60" /></button>
                        <button onClick={() => handleDelete(c.id)} className="opacity-0 group-hover:opacity-100" aria-label="Delete"><Trash2 className="h-3.5 w-3.5 text-white/60" /></button>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="border-t border-white/10 p-3 text-[11px] text-white/40">{user?.name} · {user?.organization}</div>
          </motion.aside>
        )}
      </AnimatePresence>

      <div className="flex min-h-0 flex-1 flex-col">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-3 border-b border-border bg-background/60 px-6 py-3">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => setSidebarOpen((v) => !v)} className="rounded-full">
              {sidebarOpen ? <PanelLeftClose className="h-4 w-4" /> : <PanelLeftOpen className="h-4 w-4" />}
            </Button>
            <div>
              <h1 className="text-sm font-semibold tracking-tight text-foreground">{active.title}</h1>
              <p className="text-[11px] text-muted-foreground">Quantum Chip Designer · {result?.engine ?? "ready"}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="rounded-full"><Cpu className="mr-1.5 h-3 w-3" />{user?.organization}</Badge>
            <Button variant="outline" size="sm" onClick={() => setChatOpen((v) => !v)} className="rounded-full">
              {chatOpen ? <><PanelLeftClose className="mr-1.5 h-4 w-4" />Hide chat</> : <><PanelLeftOpen className="mr-1.5 h-4 w-4" />Show chat</>}
            </Button>
          </div>
        </div>

        <div className="flex min-h-0 flex-1">
          {/* Chat panel */}
          <AnimatePresence initial={false}>
            {chatOpen && (
              <motion.aside key="chat" initial={{ width: 0, opacity: 0 }} animate={{ width: 420, opacity: 1 }} exit={{ width: 0, opacity: 0 }} transition={{ duration: 0.25, ease: "easeInOut" }} className="flex h-full flex-col overflow-hidden border-r border-border bg-card/40">
                <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-background"><Sparkles className="h-3.5 w-3.5" /></span>
                  <div>
                    <p className="text-sm font-medium text-foreground">Design Assistant</p>
                    <p className="text-[11px] text-muted-foreground">Quantum chip architect · online</p>
                  </div>
                </div>
                <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
                  {active.messages.map((m, i) => (
                    <div key={i} className={m.role === "you" ? "ml-auto max-w-[85%] rounded-2xl bg-foreground px-3.5 py-2 text-sm text-background" : "max-w-[90%] rounded-2xl border border-border bg-card px-3.5 py-2 text-sm text-foreground"}>
                      {m.loading ? <span className="flex items-center gap-2"><Loader2 className="h-4 w-4 animate-spin" /> Generating…</span> : m.text}
                    </div>
                  ))}
                  <div ref={chatEndRef} />
                </div>
                <div className="border-t border-border p-3">
                  <Textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }} placeholder="e.g. 5-qubit transmon with nearest-neighbor coupling" className="min-h-[64px] rounded-2xl" disabled={loading} />
                  <div className="mt-2 flex items-center justify-between">
                    <p className="flex items-center gap-1.5 text-[11px] text-muted-foreground"><Sparkles className="h-3 w-3 text-accent" />Enter to send</p>
                    <Button onClick={send} size="sm" className="rounded-full px-4" disabled={loading || !prompt.trim()}>
                      {loading ? <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" /> : <Send className="mr-1.5 h-3.5 w-3.5" />}Send
                    </Button>
                  </div>
                </div>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* Output panel */}
          <section className="flex min-w-0 flex-1 flex-col bg-background">
            <Tabs value={view} onValueChange={(v) => setView(v as typeof view)} className="flex flex-1 flex-col">
              <div className="flex items-center justify-between border-b border-border px-6 py-3">
                <TabsList className="rounded-full bg-secondary p-1">
                  <TabsTrigger value="chip" className="rounded-full px-4 text-xs"><Microchip className="mr-1.5 h-3.5 w-3.5" />Fabricated Chip</TabsTrigger>
                  <TabsTrigger value="circuit" className="rounded-full px-4 text-xs"><CircuitBoard className="mr-1.5 h-3.5 w-3.5" />Frequency Plan</TabsTrigger>
                  <TabsTrigger value="code" className="rounded-full px-4 text-xs"><Code2 className="mr-1.5 h-3.5 w-3.5" />Code</TabsTrigger>
                </TabsList>
                {hasOutput && result && (
                  <div className="flex items-center gap-2">
                    {result.drc?.passed ? (
                      <Badge variant="secondary" className="rounded-full text-[10px] text-green-600"><CheckCircle2 className="mr-1 h-3 w-3" />DRC Pass</Badge>
                    ) : (
                      <Badge variant="secondary" className="rounded-full text-[10px] text-yellow-600"><AlertTriangle className="mr-1 h-3 w-3" />DRC Warnings</Badge>
                    )}
                    {result.fabricated_image && (
                      <Button variant="outline" size="sm" className="rounded-full" onClick={() => {
                        const a = document.createElement("a"); a.href = `data:image/png;base64,${result.fabricated_image}`; a.download = "chip_layout.png"; a.click();
                      }}><Download className="mr-1.5 h-3.5 w-3.5" />PNG</Button>
                    )}
                  </div>
                )}
              </div>
              <div className="min-h-0 flex-1 overflow-auto p-6">
                {!hasOutput ? (
                  <EmptyState />
                ) : (
                  <>
                    <TabsContent value="chip" className="mt-0"><ChipView result={result!} /></TabsContent>
                    <TabsContent value="circuit" className="mt-0"><FreqPlanView result={result!} /></TabsContent>
                    <TabsContent value="code" className="mt-0"><CodeView result={result!} /></TabsContent>
                  </>
                )}
              </div>
            </Tabs>
          </section>
        </div>
      </div>
    </motion.div>
  );
}

function EmptyState() {
  return (
    <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card"><Sparkles className="h-6 w-6 text-accent" /></div>
      <h2 className="mt-4 text-lg font-semibold text-foreground">No quantum chip yet</h2>
      <p className="mt-1 max-w-sm text-sm text-muted-foreground">Describe your quantum chip in the chat. The fabricated layout, frequency plan, and generated code will appear here — powered by the live backend.</p>
    </div>
  );
}

function ChipView({ result }: { result: GenerateResponse }) {
  const img = result.fabricated_image || result.chip_image;
  return (
    <div className="space-y-4">
      <Card className="rounded-3xl border-border p-6 shadow-none">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Fabricated Layout</p>
            <h3 className="mt-1 text-lg font-semibold text-foreground">{result.label}</h3>
            <p className="text-xs text-muted-foreground mt-0.5">{result.interpretation}</p>
          </div>
          <Badge variant="secondary" className="rounded-full">{result.topology} · {result.num_qubits}Q</Badge>
        </div>
        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-[#0A0A0A] p-4 flex items-center justify-center min-h-[300px]">
          {img ? (
            <img src={`data:image/png;base64,${img}`} alt="Chip layout" className="max-h-[360px] w-full object-contain" />
          ) : (
            <p className="text-sm text-white/40">No image returned by backend</p>
          )}
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3 text-center">
          {[
            { label: "Qubits", value: String(result.num_qubits) },
            { label: "Topology", value: result.topology },
            { label: "Engine", value: (result.engine ?? "schematic").replace("qiskit-metal-", "Metal ") },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-3">
              <p className="text-[11px] text-muted-foreground">{s.label}</p>
              <p className="mt-0.5 text-base font-semibold text-foreground truncate">{s.value}</p>
            </div>
          ))}
        </div>
      </Card>

      {result.drc && !result.drc.passed && (result.drc.violations?.length ?? 0) > 0 && (
        <Card className="rounded-2xl border-yellow-200 bg-yellow-50 p-4 shadow-none dark:border-yellow-900 dark:bg-yellow-950/20">
          <p className="flex items-center gap-2 text-sm font-semibold text-yellow-700 dark:text-yellow-400"><AlertTriangle className="h-4 w-4" />DRC Violations</p>
          <ul className="mt-2 space-y-1">
            {(result.drc.violations ?? []).slice(0, 5).map((v, i) => (
              <li key={i} className="text-xs text-yellow-700 dark:text-yellow-400">{(v.severity ?? "warn").toUpperCase()} · {v.rule ?? "rule"}: {v.message}</li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
}

function FreqPlanView({ result }: { result: GenerateResponse }) {
  const fp = result.frequency_plan;
  if (!fp) return <p className="text-sm text-muted-foreground">No frequency data available.</p>;

  return (
    <div className="space-y-4">
      <Card className="rounded-3xl border-border p-6 shadow-none">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Frequency Plan</h3>
          <Badge variant="secondary" className="rounded-full">ε_eff = {fp.epsilon_eff != null ? fp.epsilon_eff.toFixed(3) : "—"}</Badge>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Qubit Frequencies</p>
            <div className="space-y-2">
              {Object.entries(fp.qubit_frequencies_GHz ?? {}).map(([name, freq]) => (
                <div key={name} className="flex items-center justify-between rounded-xl border border-border bg-card px-3 py-2">
                  <div>
                    <span className="text-sm font-medium text-foreground">{name}</span>
                    <span className="ml-2 text-[10px] text-muted-foreground">group {fp.qubit_groups?.[name] ?? "—"}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-semibold text-foreground">{freq.toFixed(3)} GHz</span>
                    <div className="text-[10px] text-muted-foreground">EJ={fp.EJ_GHz?.[name]?.toFixed(1)} · EC={fp.EC_GHz?.[name]?.toFixed(3)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Readout Resonators</p>
            <div className="space-y-2">
              {Object.entries(fp.resonator_frequencies_GHz ?? {}).map(([name, freq]) => (
                <div key={name} className="flex items-center justify-between rounded-xl border border-border bg-card px-3 py-2">
                  <div>
                    <span className="text-sm font-medium text-foreground">{name}</span>
                    <div className="text-[10px] text-muted-foreground">{fp.resonator_lengths_mm?.[name]?.toFixed(3)} mm λ/4</div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-semibold text-foreground">{freq.toFixed(3)} GHz</span>
                    <div className="text-[10px] text-muted-foreground">Δ={fp.detunings_GHz?.[name]?.toFixed(3)} GHz</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {(fp.warnings?.length ?? 0) > 0 && (
          <div className="mt-4 rounded-xl border border-yellow-200 bg-yellow-50 p-3 dark:border-yellow-900 dark:bg-yellow-950/20">
            <p className="flex items-center gap-1.5 text-xs font-semibold text-yellow-700"><AlertTriangle className="h-3.5 w-3.5" />Frequency warnings</p>
            <ul className="mt-1 space-y-0.5">{(fp.warnings ?? []).map((w, i) => <li key={i} className="text-xs text-yellow-600">{w}</li>)}</ul>
          </div>
        )}
      </Card>

      {(result.placement?.qubits?.length ?? 0) > 0 && (
        <Card className="rounded-3xl border-border p-6 shadow-none">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Physical Placement</h3>
            <Badge variant="secondary" className="rounded-full"><Zap className="mr-1 h-3 w-3" />{result.placement?.solver ?? "deterministic"}</Badge>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {(result.placement?.qubits ?? []).map((q) => (
              <div key={q.name} className="rounded-xl border border-border bg-card px-3 py-2 text-center">
                <p className="text-sm font-semibold text-foreground">{q.name}</p>
                <p className="text-[10px] text-muted-foreground">({q.x.toFixed(1)}, {q.y.toFixed(1)}) mm</p>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}

function CodeView({ result }: { result: GenerateResponse }) {
  const code = result.code ?? "# No code generated";
  const copy = () => { if (navigator?.clipboard) navigator.clipboard.writeText(code); };
  const download = () => {
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([code], { type: "text/plain" }));
    a.download = "qbeta_chip.py"; a.click();
  };
  return (
    <Card className="overflow-hidden rounded-3xl border-border p-0 shadow-none">
      <div className="flex items-center justify-between border-b border-border bg-card px-5 py-3">
        <div className="flex items-center gap-2"><Code2 className="h-4 w-4 text-muted-foreground" /><span className="text-sm font-medium text-foreground">qbeta_chip.py</span></div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={copy} className="rounded-full"><Copy className="mr-1.5 h-3.5 w-3.5" />Copy</Button>
          <Button variant="outline" size="sm" onClick={download} className="rounded-full"><Download className="mr-1.5 h-3.5 w-3.5" />.py</Button>
        </div>
      </div>
      <pre className="overflow-auto bg-[#0A0A0A] p-5 text-[12.5px] leading-relaxed text-[#E6E6F0] max-h-[600px]">
        <code className="font-mono">{code}</code>
      </pre>
    </Card>
  );
}