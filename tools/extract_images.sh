#!/usr/bin/env bash
# Extract content images from sources/<id>/test.pdf into data/img/<id>/ (reading order preserved via pdftohtml -xml boxes).
#
#   tools/extract_images.sh <id> --find                      # list pages that contain content images (>=300x200 px, aspect <3; skips banners/logos)
#   tools/extract_images.sh <id> <page> [prefix] [labels]    # extract page images
#       e.g.  tools/extract_images.sh 2021-01 7 l5 A,B,C,D,E,F,G,H,I,J,K   -> data/img/2021-01/l5-A.jpg ... l5-K.jpg
#             tools/extract_images.sh 2023-04 23 w-I-b                       -> data/img/2023-04/w-I-b-1.jpg   (no labels: 1,2,3.. in reading order)
# Labels must be given in the printed reading order (row by row, left to right); the script prints the (top,left) box of every
# image so you can verify against the page render:  pdftoppm -r 60 -png -f <page> -l <page> sources/<id>/test.pdf /tmp/x
# JSON paths to use: "data/img/<id>/<file>" (relative to index.html, like the audio src).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
id="${1:?usage: extract_images.sh <id> (--find | <page> [prefix] [labels])}"
pdf="$ROOT/sources/$id/test.pdf"
[ -f "$pdf" ] || { echo "no $pdf" >&2; exit 1; }
if [ "${2:?page or --find}" = "--find" ]; then
  pdfimages -list "$pdf" | awk 'NR>2 && $3=="image" && $4>=300 && $5>=200 && $4/$5<3 {c[$1]++; sz[$1]=sz[$1] " " $4 "x" $5} END {for (p in c) printf "page %s: %d image(s)%s\n", p, c[p], sz[p]}' | sort -k2 -n
  exit 0
fi
page="$2"; prefix="${3:-p$page}"; labels="${4:-}"
out="$ROOT/data/img/$id"; mkdir -p "$out"
tmp="$(mktemp -d)"; trap 'rm -rf "$tmp"' EXIT
pdftohtml -xml -nodrm -f "$page" -l "$page" "$pdf" "$tmp/o" >/dev/null 2>&1
python3 - "$tmp" "$out" "$prefix" "$labels" <<'PY'
import re, sys, os, shutil
tmp, out, prefix, labels = sys.argv[1:5]
xml = open(f"{tmp}/o.xml", encoding="utf-8").read()
imgs = []
for m in re.finditer(r'<image top="(\d+)" left="(\d+)" width="(\d+)" height="(\d+)" src="([^"]+)"', xml):
    top, left, w, h = map(int, m.groups()[:4]); src = m[5]
    if w >= 100 and h >= 80:                      # skip decorative slivers
        imgs.append((top, left, w, h, src))
imgs.sort(key=lambda r: (r[0] // 60, r[1]))        # reading order: rows (60 px tolerance), then left->right
labs = [x for x in labels.split(",") if x] or [str(i + 1) for i in range(len(imgs))]
if len(labs) != len(imgs):
    sys.exit(f"ERROR: page has {len(imgs)} content images but {len(labs)} labels were given")
for (top, left, w, h, src), lab in zip(imgs, labs):
    ext = os.path.splitext(src)[1]
    dst = f"{out}/{prefix}-{lab}{ext}"
    shutil.copy(f"{tmp}/{os.path.basename(src)}", dst)
    print(f"{prefix}-{lab}{ext}  top={top} left={left} {w}x{h}  <- {os.path.basename(src)}")
PY
