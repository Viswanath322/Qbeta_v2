# Deploy QBETA to Vercel (+ API on Render)

This project has **two parts**:

| Part | Host | Why |
|------|------|-----|
| **frontendv2** | [Vercel](https://vercel.com) | TanStack Start + Nitro (Node serverless) |
| **backend** | [Render](https://render.com) (recommended) | Python Flask — not suited for Vercel serverless |

Chip generation and the dashboard health check need **both** deployed and connected.

---

## 1. Deploy the Flask API (Render)

### Option A — Render Dashboard

1. Push this repo to **GitHub**.
2. Go to [render.com](https://render.com) → **New** → **Web Service**.
3. Connect the repo.
4. Settings:
   - **Root Directory:** `backend`
   - **Runtime:** Python 3
   - **Build Command:** `pip install -r requirements-prod.txt` (faster) or `pip install -r requirements.txt` (full ML + Metal deps — must include `gunicorn`)
   - **Start Command:** `gunicorn --bind 0.0.0.0:$PORT app:app`
   - If you see `gunicorn: command not found`, your build file is missing `gunicorn` — use `requirements-prod.txt` or redeploy after pulling latest `requirements.txt`
5. Deploy and copy your URL, e.g. `https://qbeta-backend.onrender.com`.

### Option B — Blueprint

Use the root `render.yaml` file: **New** → **Blueprint** → select this repo.

### Verify API

```text
GET https://YOUR-BACKEND.onrender.com/health
```

Should return `"status": "ok"`.

> **Note:** Free Render services sleep after inactivity; the first request may take 30–60s.

CORS already allows `https://*.vercel.app`. No backend change needed for Vercel previews.

---

## 2. Deploy the frontend (Vercel)

### Option A — Vercel Dashboard (recommended)

1. Go to [vercel.com](https://vercel.com) → **Add New** → **Project**.
2. Import your GitHub repo.
3. **Important settings:**

   | Setting | Value |
   |---------|--------|
   | **Root Directory** | `frontendv2` |
   | **Framework Preset** | Other (or leave auto if TanStack is detected) |
   | **Build Command** | `npm run build` |
   | **Output Directory** | `.vercel/output` |
   | **Install Command** | `npm install` |

4. **Environment variables** (Project → Settings → Environment Variables):

   | Name | Value | Environments |
   |------|--------|----------------|
   | `VITE_BACKEND_URL` | `https://YOUR-BACKEND.onrender.com` | Production, Preview, Development |

5. Click **Deploy**.

### Option B — Vercel CLI

```powershell
cd frontendv2
npm install
npm run build
# Confirm .vercel/output exists
npx vercel login
npx vercel
# Set VITE_BACKEND_URL when prompted, or in the dashboard later
npx vercel --prod
```

---

## 3. Post-deploy checklist

- [ ] Open `https://your-app.vercel.app` — landing page loads
- [ ] Sign in (demo account) — no console errors about `@/lib`
- [ ] **Dashboard** shows backend **Online** (not Offline)
- [ ] **Designer** — send a prompt — chip image appears (may be slow on free Render)

---

## 4. Local build test (before pushing)

```powershell
cd frontendv2
npm run build
dir .vercel\output
```

If `.vercel/output` is missing, ensure `vite.config.ts` includes `nitro({ preset: "vercel" })`.

---

## 5. Troubleshooting

| Issue | Fix |
|-------|-----|
| Vercel build fails | Root Directory must be `frontendv2`, Output Directory `.vercel/output` |
| Dashboard "Offline" | Set `VITE_BACKEND_URL` to your Render URL; redeploy Vercel |
| CORS error in browser | Backend must be HTTPS; URL must match Render service |
| Generate timeout | Free Render cold start — retry or upgrade plan |
| Build works locally but not on Vercel | Use Node 20+ in Project Settings |

---

## 6. Full backend (same as local — Metal + ML)

Free Render + `requirements-prod.txt` only gives **schematic** mode. For the same output as local:

### Requirements

| Item | Notes |
|------|--------|
| **RAM** | **2 GB minimum** (PyTorch + Metal). Free Render (512 MB) is not enough. |
| **Build time** | ~15–25 minutes first deploy |
| **Files** | `backend/requirements-full.txt` or `backend/Dockerfile` |

### Option A — Render (paid plan)

1. Render → your web service → **Settings**
2. Change **Instance type** to **Starter** (or higher)
3. **Build Command:**
   ```bash
   pip install -r requirements-full.txt
   ```
4. **Start Command** (long timeout for chip generation):
   ```bash
   gunicorn --bind 0.0.0.0:$PORT --timeout 120 --workers 1 app:app
   ```
5. **Manual Deploy** → wait for build to finish
6. Open `https://YOUR-SERVICE.onrender.com/health` and confirm:
   - `"ml_intent": "ready"`
   - `"qiskit_metal": "available"`

### Option B — Docker (Railway / Fly.io)

From repo root:

```bash
cd backend
docker build -t qbeta-api .
docker run -p 5000:5000 qbeta-api
```

Point Vercel `VITE_BACKEND_URL` (or `vercel.json` `/api` proxy) at the new public URL.

### Vercel after API upgrade

No frontend code change if you keep using `/api` proxy — update `frontendv2/vercel.json` rewrite `destination` if the API hostname changes.

Redeploy Vercel only if you change `VITE_BACKEND_URL`.

### Lighter upgrade (ML only, no Metal)

Build with `requirements.txt` (includes torch, no qiskit-metal). You get ML intent but may still see **schematic** layouts.

---

## Architecture

```text
User → Vercel (frontendv2) → Render (Flask /generate, /health)
         VITE_BACKEND_URL
```
