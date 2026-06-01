# Installing Qiskit Metal (optional)

**Do not** use `pip install qiskit-metal` from PyPI alone — it pulls ancient `0.1.x` and requires `pyside2`, which often fails on Python 3.11+.

Your app expects **IBM Qiskit Metal ~0.7** (same as when `/health` shows `"metal_version": "0.7.1"`).

---

## Windows (local, recommended)

### Option 1 — You already have Metal working

If `/health` already shows `qiskit_metal: available`, you do **not** need `requirements-full.txt` for Metal. Use:

```powershell
cd backend
python -m pip install --upgrade pip setuptools wheel
python -m pip install -r requirements-ml.txt
python app.py
```

### Option 2 — Install Metal from IBM source

```powershell
cd backend
python -m pip install --upgrade pip setuptools wheel
python -m pip install -r requirements-ml.txt

git clone https://github.com/Qiskit/qiskit-metal.git
cd qiskit-metal
git checkout 0.7.1
python -m pip install -e .
cd ..
```

Set headless (already in `app.py`):

```powershell
$env:QISKIT_METAL_HEADLESS="1"
python app.py
```

### Option 3 — Conda (most reliable for Metal on Windows)

```bash
conda create -n qbeta python=3.11
conda activate qbeta
conda install -c conda-forge qiskit-metal
pip install -r requirements-ml.txt
```

---

## Render / Linux (deploy)

1. Use **`requirements-ml.txt`** as the Render build file (ML + schematic).
2. Full Metal on Render is experimental; use **Docker** (`backend/Dockerfile`) on Railway/Fly with more RAM.
3. Do **not** add `qiskit-metal` to `requirements-full.txt` on PyPI.

---

## Verify

```text
GET http://localhost:5000/health
```

- `"ml_intent": "ready"` → after `requirements-ml.txt`
- `"qiskit_metal": "available"` → after Metal install from source/conda
