const BASE_URL = typeof import.meta !== "undefined" && "http://localhost:5000" || "http://localhost:5000";
async function apiFetch(path, init) {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers
    }
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg = typeof data === "object" && data !== null && "error" in data ? String(data.error) : `Request failed (${res.status})`;
    throw new Error(msg);
  }
  return data;
}
function fetchHealth() {
  return apiFetch("/health");
}
function generateChip(prompt) {
  return apiFetch("/generate", {
    method: "POST",
    body: JSON.stringify({ prompt })
  });
}
export {
  fetchHealth as f,
  generateChip as g
};
