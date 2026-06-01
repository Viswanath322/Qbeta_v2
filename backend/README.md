# QBETA Backend

Python Flask API that powers both QBETA frontends.  
Converts natural-language prompts into physics-accurate superconducting chip layouts.

- **URL:** `http://localhost:5000`
- **CORS:** Allowlisted for `localhost:3000`, `localhost:5173`, `localhost:4173`

---

## Quick Start

```powershell
cd backend
pip install -r requirements.txt
python app.py
# → Running on http://localhost:5000
```

The server starts with:
- `QISKIT_METAL_HEADLESS=1` set automatically (no GUI)
- Graceful fallback to matplotlib schematic if Qiskit Metal is not installed
- Graceful fallback to regex parsing if PyTorch is not installed

---

## API Endpoints

| Method | Endpoint | Body | Returns |
|--------|----------|------|---------|
| `POST` | `/generate` | `{ "prompt": "..." }` | Full chip: image, freq plan, DRC, netlist, code |
| `POST` | `/frequency-plan` | `{ "n": 4, "topology": "grid" }` | Frequency assignments + resonator λ/4 lengths |
| `POST` | `/placement` | `{ "n": 4, "topology": "grid", "scale": 1.0 }` | Qubit (x,y) positions + coupling edges |
| `POST` | `/netlist` | `{ "n": 4, "topology": "grid" }` | Full chip netlist JSON |
| `POST` | `/drc` | `{ "n": 4, "topology": "grid" }` | DRC violations + pass/fail |
| `POST` | `/em-simulation` | `{ "n": 4, "backend": "hfss" }` | EM simulation params (stub) |
| `GET`  | `/health` | — | System status: Metal, ML, GDS, pipeline list |
| `GET`  | `/metal-status` | — | Full Qiskit Metal component availability |

### Example

```bash
curl -X POST http://localhost:5000/generate \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Design a 5-qubit transmon chip with nearest-neighbor coupling"}'
```

**Response fields:**

```json
{
  "label":             "Grid Array — 5-Transmon Chip",
  "num_qubits":        5,
  "topology":          "grid",
  "engine":            "qiskit-metal-v2",
  "interpretation":    "Designed 5-qubit grid chip using Qiskit Metal V2...",
  "fabricated_image":  "<base64 PNG>",
  "chip_image":        "<base64 PNG schematic>",
  "code":              "# Python script to reproduce this design",
  "frequency_plan":    { "qubit_frequencies_GHz": {...}, "resonator_frequencies_GHz": {...} },
  "placement":         { "solver": "kamada-kawai", "qubits": [...], "edges": [...] },
  "drc":               { "passed": true, "violations": [] },
  "gds_data":          null
}
```

---

## Module Reference

### `app.py` — Flask Entry Point
Hosts all HTTP endpoints, sets CORS for localhost dev origins, delegates to pipeline modules.

---

### `ml_intent.py` — Intent Classifier
Reads a prompt and predicts qubit count + topology.

- **Model:** PyTorch feedforward net (`8 → 16 → 7`)
- **Input:** Bag-of-words (8 keywords: qubit, grid, star, line, etc.)
- **Output:** 1–7 qubits class; topology refined by keyword matching
- **Fallback:** Pure regex if `torch` not installed, or qubit count > 7

```python
resolve_design_params(prompt, max_qubits=24)
# → (n_qubits, requested_qubits, topology, ml_info_dict)
```

---

### `frequency_planner.py` — Frequency Assignment
IBM-style A/B bipartite qubit detuning + λ/4 resonator physics.

**Algorithm:**
1. 2-color the coupling graph (A/B groups)
2. Group A: 5.0–5.4 GHz · Group B: 4.6–5.0 GHz (100 MHz steps)
3. Resonators: 6.4–7.2 GHz band, detuned 1.2–2.0 GHz from qubit
4. λ/4 length = `c / (4 × f × √ε_eff)` with Nb-on-Si substrate (`εᵣ = 11.9`)

```python
plan_chip(n, topology="grid")  # → FrequencyPlan
generate_frequency_plan(n, topology="grid")  # → dict for API
```

---

### `topology_router.py` — Physical Placement
Converts qubit count + topology into physical (x, y) coordinates and coupling edges.

| Topology | Description |
|----------|-------------|
| `grid` | 2D rectangular grid (default) |
| `line` | 1D linear chain |
| `star` | Central hub + satellite qubits |
| `ring` | Circular arrangement |
| `heavy_hex` | IBM heavy-hexagon lattice |

Uses NetworkX `kamada_kawai_layout`; falls back to spring layout for large chips.

```python
place_qubits(n, topology="grid", scale=1.0)  # → PlacementResult
```

---

### `netlist_generator.py` — Chip Netlist
Builds the full component connectivity before geometry creation.

```
feedline    → LP_L.tie ── LP_R.tie
ro_Q1       → Q1.readout ── FL_coup_Q1.short   (readout resonator)
bus_Q1_Q2   → Q1.a ── Q2.c                     (coupling bus)
bias_Q1     → BIAS_Q1.tie                       (flux bias)
```

```python
build_netlist(freq_plan, placement)  # → Netlist
```

---

### `drc.py` — Design Rule Checker
7 rule categories validated before any fabrication step:

| Rule | Severity | Check |
|------|----------|-------|
| `SPACING.QUBIT` | ERROR | Centre-to-centre ≥ 0.6 mm |
| `CPW.GAP` | ERROR | CPW gap ≥ 4 µm |
| `CPW.WIDTH` | ERROR | CPW width ≥ 5 µm |
| `FREQUENCY.QUBIT_COLLISION` | ERROR | Adjacent qubit detuning ≥ 100 MHz |
| `FREQUENCY.RESONATOR_COLLISION` | ERROR | Resonator separation ≥ 50 MHz |
| `FREQUENCY.DISPERSIVE_DETUNING_LOW` | ERROR | `\|f_r − f_q\|` ≥ 1.0 GHz |
| `FREQUENCY.DISPERSIVE_DETUNING_HIGH` | WARNING | `\|f_r − f_q\|` ≤ 3.0 GHz |

```python
run_drc(placement, freq_plan)  # → DRCReport
```

---

### `metal_connector.py` — Qiskit Metal Geometry Builder
Creates Qiskit Metal component objects on a `DesignPlanar` canvas.

- `TransmonPocket` — one per qubit, 5 connection pads
- `LaunchpadWirebond` — one per qubit (unique, non-shared, staggered if same quadrant)
- `RouteMeander` — λ/4 readout resonators (qubit → launchpad)
- `RouteMeander` — coupling buses (neighbour pairs)

```python
build_metal_chip(n, topology, scale, freq_plan, placement)
# → (DesignPlanar, MetalBuildLog)
```

---

### `metal_design.py` — Pipeline Orchestrator
Public gateway: prompt → chip dict.

```python
generate_metal_chip(prompt)
# → { fabricated_image, frequency_plan, topology, num_qubits,
#     engine, interpretation, drc, build_log, code, placement }
```

**Decision:** Qiskit Metal installed? → full fabrication. Else → matplotlib fallback.

---

### `chip_renderer.py` — SEM-Style Renderer
Matplotlib fallback renderer producing a dark SEM-style chip image:
- Dark navy ground plane (`#050a18`)
- Cyan CPW traces with meander routing
- Transmon pocket rectangles + junction lines
- Launchpad trapezoids at chip edges

---

### `gds_export.py` — GDSII Export
```python
export_gds(design, output_path="chip.gds")  # requires qiskit-metal
export_gds_base64(design)  # → base64 string for API
```

---

### `circuit_gen.py` — Quantum Circuit Diagrams
Generates Qiskit circuit diagrams (Bell, GHZ, QFT, Grover, Toffoli, ring).  
Gracefully skips if `qiskit` is not installed.

---

## Running Tests

```powershell
# API smoke test (server must be running)
python test_api.py

# Full pipeline test (no server needed)
python test_v2_pipeline.py
```

---

## Training the ML Model

```powershell
python train_ml_model.py
# → saves models/intent_model.pt  (~10 KB)
```

---

## Substrate Parameters (Nb on Si)

```python
{ "name": "Si", "epsilon_r": 11.9,
  "cpw_width_um": 10.0, "cpw_gap_um": 6.0, "thickness_um": 525.0 }
```

---

## Requirements

```
flask
flask-cors
matplotlib
networkx
numpy
requests
torch              # optional — ML intent classification
qiskit             # optional — circuit diagrams
qiskit-aer         # optional
pylatexenc         # optional — qiskit circuit drawer
# qiskit-metal    # optional — install from source for full fabrication
```