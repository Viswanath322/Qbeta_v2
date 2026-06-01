# QBETA V2 — AI-Native Superconducting Quantum Chip Engineering Platform

> **Natural language → Physics-accurate quantum chip layout → Fabricated GDS export**

QBETA is a full-stack quantum hardware engineering workspace. Type a plain-English description of a quantum chip and get a physically-accurate, fabrication-ready superconducting layout — complete with frequency planning, coupling topology, Design Rule Checking, and SEM-style rendering.

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        QBETA V2 Stack                           │
│                                                                 │
│  ┌──────────────────┐    ┌──────────────────────────────────┐  │
│  │  frontendv2      │    │  frontend (Chatbot)               │  │
│  │  SilicoFeller    │    │  QBETA Chat UI                   │  │
│  │  localhost:3000  │    │  localhost:5173                  │  │
│  │                  │    │                                  │  │
│  │  Dashboard       │───▶│  Opens chatbot in new tab        │  │
│  │  Designer        │    │  (button in sidebar + dashboard) │  │
│  │  Auth / Billing  │    └────────────────┬─────────────────┘  │
│  └────────┬─────────┘                     │                     │
│           │                               │                     │
│           └───────────────┬───────────────┘                     │
│                           ▼                                     │
│              ┌────────────────────────┐                         │
│              │  Flask Backend         │                         │
│              │  localhost:5000        │                         │
│              │                        │                         │
│              │  /generate             │                         │
│              │  /health               │                         │
│              │  /frequency-plan       │                         │
│              │  /placement            │                         │
│              │  /netlist              │                         │
│              │  /drc                  │                         │
│              └────────────────────────┘                         │
└─────────────────────────────────────────────────────────────────┘
```

---

## Repository Structure

```
Qbeta_Sillicofeller_v2/
├── backend/                    # Python Flask API + chip design engine
│   ├── app.py                  # Flask server, all API endpoints
│   ├── ml_intent.py            # PyTorch intent classifier
│   ├── frequency_planner.py    # IBM-style A/B bipartite frequency assignment
│   ├── topology_router.py      # Kamada-Kawai graph-based qubit placement
│   ├── netlist_generator.py    # Chip connectivity netlist builder
│   ├── drc.py                  # Design Rule Checker (7 categories)
│   ├── metal_connector.py      # Qiskit Metal geometry builder
│   ├── metal_design.py         # Pipeline orchestrator
│   ├── metal_fabricated.py     # High-level build orchestrator
│   ├── chip_renderer.py        # SEM-style matplotlib renderer (fallback)
│   ├── renderer.py             # Rendering helpers
│   ├── circuit_gen.py          # Qiskit circuit diagram generator
│   ├── coupler_generator.py    # Qubit–qubit coupling bus builder
│   ├── feedline_generator.py   # CPW feedline + launchpad builder
│   ├── resonator_generator.py  # λ/4 readout resonator builder
│   ├── gds_export.py           # GDSII export (QGDSRenderer)
│   ├── train_ml_model.py       # ML model training script
│   ├── test_api.py             # API smoke test
│   ├── test_v2_pipeline.py     # End-to-end pipeline test
│   └── requirements.txt        # Python dependencies
│
├── frontendv2/                 # SilicoFeller — main app (TanStack Start + React)
│   ├── src/
│   │   ├── routes/
│   │   │   ├── __root.tsx      # App shell + auth provider
│   │   │   ├── index.tsx       # Landing page (/)
│   │   │   ├── _app.tsx        # Authenticated layout (sidebar + header)
│   │   │   └── _app/
│   │   │       ├── dashboard.tsx   # Dashboard + backend health + chatbot button
│   │   │       ├── designer.tsx    # AI chip designer (calls /generate)
│   │   │       ├── billing.tsx     # Billing & usage
│   │   │       ├── team.tsx        # Team management
│   │   │       ├── admin.tsx       # Admin console
│   │   │       ├── profile.tsx     # User profile
│   │   │       ├── settings.tsx    # Settings
│   │   │       └── about.tsx       # About
│   │   ├── components/
│   │   │   ├── app/
│   │   │   │   └── app-sidebar.tsx # Sidebar with "QBETA Chatbot" link
│   │   │   ├── landing/            # Landing page components
│   │   │   └── ui/                 # shadcn/ui component library
│   │   ├── lib/
│   │   │   ├── api/
│   │   │   │   └── backend.ts      # Typed API client for Flask backend
│   │   │   └── auth/
│   │   │       └── auth-context.tsx # Auth state management
│   │   └── styles.css              # Global styles + design tokens
│   ├── .env                        # VITE_BACKEND_URL=http://localhost:5000
│   ├── vite.config.ts              # Vite + TanStack Start config
│   ├── tsconfig.json               # TypeScript config
│   └── package.json                # Node dependencies
│
└── frontend/                   # QBETA Chatbot — chat-style chip designer
    ├── src/
    │   ├── main.jsx            # Full chatbot React app
    │   └── styles.css          # ChatGPT-style dark theme
    ├── index.html
    └── package.json
```

---

## Quick Start

You need **3 terminals** to run the full platform.

### Terminal 1 — Backend (Flask API)

```powershell
cd backend
pip install -r requirements.txt
python app.py
# → http://localhost:5000
```

### Terminal 2 — SilicoFeller (Main App)

```powershell
cd frontendv2
npm install
npm run dev
# → http://localhost:3000
```

### Terminal 3 — QBETA Chatbot

```powershell
cd "C:\Users\nmoti\Desktop\QBETA_sillicofeller v2 - Copy\frontend"
npm install
npm run dev
# → http://localhost:5173
```

### Open in browser

| URL | What you get |
|-----|-------------|
| `http://localhost:3000` | SilicoFeller — sign in, open Designer, view Dashboard |
| `http://localhost:5173` | QBETA Chatbot — chat-style chip generation |
| `http://localhost:5000/health` | Backend health check |

> **Chatbot shortcut:** From the SilicoFeller dashboard or sidebar, click **"QBETA Chatbot"** to open the chatbot in a new tab automatically.

---

## Chatbot ↔ Main App Integration

The two frontends are linked:

- **Dashboard card** — A dark "QBETA Chatbot" card on `/dashboard` with an orange **"Open Chatbot"** button
- **Sidebar link** — A permanent **"QBETA Chatbot"** entry in the left sidebar under **Tools**, visible on every page

Both link to `http://localhost:5173` and open in a new tab. Both frontends call the same Flask backend at `http://localhost:5000`.

---

## API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/generate` | Generate chip from a natural language prompt |
| `POST` | `/frequency-plan` | Standalone frequency plan (no Metal required) |
| `POST` | `/placement` | Compute qubit positions (Kamada-Kawai) |
| `POST` | `/netlist` | Build chip connectivity netlist |
| `POST` | `/drc` | Run Design Rule Check |
| `POST` | `/em-simulation` | EM simulation stub (HFSS/Sonnet — future) |
| `GET`  | `/health` | Full system status report |
| `GET`  | `/metal-status` | Qiskit Metal installation details |

### Example

```bash
curl -X POST http://localhost:5000/generate \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Design a 4-qubit grid superconducting chip"}'
```

---

## Environment Variables

| Variable | Default | Where |
|----------|---------|-------|
| `VITE_BACKEND_URL` | `http://localhost:5000` | `frontendv2/.env` — Flask URL for the main app |
| `VITE_API_BASE_URL` | `http://localhost:5000` | `frontend/.env` — Flask URL for the chatbot |
| `QISKIT_METAL_HEADLESS` | `1` | Set in `backend/app.py` automatically |
| `QISKIT_METAL_SUPPRESS_RENAME_WARNING` | `1` | Set in `backend/app.py` automatically |

---

## Optional Dependencies

| Package | Required? | Effect if missing |
|---------|-----------|-------------------|
| `qiskit-metal` | Optional | Falls back to matplotlib schematic renderer |
| `torch` | Optional | Intent classification uses regex instead of ML |
| `qiskit` | Optional | Circuit diagram generation disabled gracefully |

---

## See Also

- [Backend README](./backend/README.md) — Python module reference and API details
- [Frontend README (routes)](./frontendv2/src/routes/README.md) — TanStack file-based routing conventions
- [Deployment guide](./DEPLOY.md) — Vercel + Render setup
