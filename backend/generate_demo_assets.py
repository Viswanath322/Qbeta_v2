"""
generate_demo_assets.py
======================
REQUIRES Qiskit Metal on this machine.

Builds real Metal layouts for 1–5 qubits and saves PNGs to demo_assets/.
Run once locally, commit demo_assets/*.png, then deploy can serve them without Metal.

    cd backend
    python generate_demo_assets.py
"""

from __future__ import annotations

import base64
import json
from datetime import datetime, timezone
from pathlib import Path

from metal_design import _generate_v2_code, _metal_installed

OUT_DIR = Path(__file__).resolve().parent / "demo_assets"
MANIFEST = OUT_DIR / "manifest.json"


def _write_png_from_b64(path: Path, b64: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_bytes(base64.b64decode(b64.encode("utf-8")))


def main() -> None:
    if not _metal_installed():
        raise SystemExit(
            "Qiskit Metal is REQUIRED to generate demo assets.\n"
            "Install Metal 0.7.x (see INSTALL_METAL.md), then rerun this script."
        )

    import qiskit_metal as qm
    from metal_fabricated import build_v2_chip, render_metal_fabricated

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    manifest: dict = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "metal_version": getattr(qm, "__version__", "unknown"),
        "source": "qiskit_metal",
        "presets": {},
    }

    for n in range(1, 6):
        topology = "grid"
        print(f"Building {n}Q via Qiskit Metal…")
        design, freq_plan, placement, netlist, drc_report = build_v2_chip(
            n=n, topology=topology, scale=1.0
        )
        img_b64 = render_metal_fabricated(design)
        if not img_b64:
            raise SystemExit(f"Metal render returned empty image for n={n}")

        png_path = OUT_DIR / f"fabricated_{n}q.png"
        _write_png_from_b64(png_path, img_b64)

        code_path = OUT_DIR / f"qbeta_{n}q.py"
        code_path.write_text(_generate_v2_code(n, topology, 1.0), encoding="utf-8")

        manifest["presets"][str(n)] = {
            "png": png_path.name,
            "code": code_path.name,
            "components": len(design.components),
            "topology": topology,
            "drc_passed": drc_report.passed(),
        }
        print(f"  OK {png_path.name} ({len(design.components)} components)")

    MANIFEST.write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    print(f"\nDone. Manifest: {MANIFEST}")
    print("Commit backend/demo_assets/ and redeploy.")


if __name__ == "__main__":
    main()
