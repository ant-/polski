#!/bin/sh
# Serve the project root on http://localhost:8000.
# Uses tools/serve.py (= python3 -m http.server + HTTP Range support, required for seeking in audio.mp3).
cd "$(dirname "$0")/.." || exit 1
exec python3 tools/serve.py "${1:-8000}"
