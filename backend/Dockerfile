# Full QBETA API (Metal + ML). Deploy on Railway, Fly.io, or any Docker host.
FROM python:3.11-slim-bookworm

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

COPY requirements-full.txt .
RUN pip install --no-cache-dir -r requirements-full.txt

COPY . .

ENV FLASK_ENV=production
ENV QISKIT_METAL_HEADLESS=1
ENV QISKIT_METAL_SUPPRESS_RENAME_WARNING=1

EXPOSE 5000
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "--timeout", "120", "--workers", "1", "app:app"]
