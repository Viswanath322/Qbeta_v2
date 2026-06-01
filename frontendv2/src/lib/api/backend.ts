function resolveBackendUrl(): string {
  const fromEnv = import.meta.env?.VITE_BACKEND_URL;
  if (typeof fromEnv === "string" && fromEnv.trim()) {
    return fromEnv.trim().replace(/\/$/, "");
  }
  // Production on Vercel: same-origin /api → proxied to Render (see vercel.json)
  if (import.meta.env.PROD) {
    return "/api";
  }
  return "http://localhost:5000";
}

const BASE_URL = resolveBackendUrl();

async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`${BASE_URL}${path}`, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });
  } catch {
    throw new Error(
      `Cannot reach backend at ${BASE_URL}. Start Terminal 1: cd backend → python app.py`,
    );
  }
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg =
      typeof data === "object" && data !== null && "error" in data
        ? String((data as { error: string }).error)
        : `Request failed (${res.status})`;
    throw new Error(msg);
  }
  return data as T;
}

export type HealthResponse = {
  status: string;
  version: string;
  qiskit_metal: string;
  metal_version?: string;
  ml_intent: string;
  max_qubits: number;
  pipeline: string[];
};

export type DRCViolation = {
  severity?: string;
  rule?: string;
  message?: string;
};

export type FrequencyPlan = {
  epsilon_eff?: number;
  qubit_frequencies_GHz?: Record<string, number>;
  qubit_groups?: Record<string, string>;
  EJ_GHz?: Record<string, number>;
  EC_GHz?: Record<string, number>;
  resonator_frequencies_GHz?: Record<string, number>;
  resonator_lengths_mm?: Record<string, number>;
  detunings_GHz?: Record<string, number>;
  warnings?: string[];
};

export type PlacementQubit = { name: string; x: number; y: number };

export type GenerateResponse = {
  label?: string;
  num_qubits: number;
  topology: string;
  engine?: string;
  interpretation?: string;
  error_hint?: string;
  fabricated_image?: string;
  chip_image?: string;
  code?: string;
  frequency_plan?: FrequencyPlan;
  placement?: { solver?: string; qubits?: PlacementQubit[] };
  drc?: { passed: boolean; violations?: DRCViolation[] };
  gds_data?: string | null;
  error?: string;
};

export function fetchHealth(): Promise<HealthResponse> {
  return apiFetch<HealthResponse>("/health");
}

export function generateChip(prompt: string): Promise<GenerateResponse> {
  return apiFetch<GenerateResponse>("/generate", {
    method: "POST",
    body: JSON.stringify({ prompt }),
  });
}
