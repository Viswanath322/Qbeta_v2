"""QBETA V2 — generated chip script"""
import os
os.environ["QISKIT_METAL_HEADLESS"] = "1"

from metal_fabricated import build_v2_chip, render_metal_fabricated

design, freq_plan, placement = build_v2_chip(n=2, topology="grid", scale=1.0)

print("Qubit frequencies (GHz):")
for q in freq_plan.qubits:
    print(f"  {q.name}: {q.freq_GHz} GHz")

print("\nResonator λ/4 lengths (mm):")
for r in freq_plan.resonators:
    print(f"  {r.name}: {r.length_mm:.3f} mm  @ {r.freq_GHz} GHz")

image_b64 = render_metal_fabricated(design)
print("\nFabricated image ready (base64 PNG).")
