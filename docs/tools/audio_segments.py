#!/usr/bin/env python3
"""Research helper: derive per-task listening segments from silence structure.
Usage: python3 audio_segments.py [session ...]   (default: all sessions)
Runs: ffmpeg -i audio.mp3 -af silencedetect=n=-35dB:d=3 -f null -
Output: JSON {session: {duration, tasks:[{task, announce, plays:[[start,end,nPauses,[[pauseStart,pauseEnd],..]]], ok, note}]}}
Layout assumed (verified on 15 sessions):
 intro speech | 60s silence | announce I | ~10s | task I (1 play) | ~10s | announce II | ~10s |
 II play1 | ~46s | II play2 | ~10s | announce III | ~10s | III play1 | ~46s | III play2 | ... | V | ~10s | "koniec" | 60s | EOF
A task is flagged ok only if |len(play1)-len(play2)| < 1.0s (self-check)."""
import re, subprocess, sys, json, glob, os
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "sources")

def silences(path):
    out = subprocess.run(["ffmpeg","-hide_banner","-nostats","-i",path,"-af","silencedetect=n=-35dB:d=3","-f","null","-"],
                         capture_output=True, text=True).stderr
    dur = re.search(r"Duration: (\d+):(\d+):([\d.]+)", out)
    D = int(dur[1])*3600+int(dur[2])*60+float(dur[3])
    sil = [(float(e)-float(d), float(e)) for e,d in re.findall(r"silence_end: ([\d.]+) \| silence_duration: ([\d.]+)", out)]
    return D, sil

def analyse(sess):
    D, sil = silences(f"{ROOT}/{sess}/audio.mp3")
    big = [s for s in sil if s[1]-s[0] >= 9]
    R = next(s for s in big if s[0] < 70)            # reading time (~60s)
    fin = big[-1]                                    # trailing silence (~60s)
    mids = [s for s in big if s is not R and s is not fin and s[1]-s[0] >= 18 and s[0] > R[1]]
    tasks = []
    # task I: single play between the 10s silences after announcement and next 10s silence
    after = [s for s in big if s[0] > R[1]]
    ann_end = after[0]  # silence after "Zadanie I" announcement
    end_I = after[1]
    tasks.append(dict(task="I", announce=[round(R[1],1), round(ann_end[0],1)], plays=[[round(ann_end[1],1), round(end_I[0],1)]], ok=True,
                      note="1 play; example is the first ~10s, item pauses ~6s"))
    lower = end_I[1]
    names = ["II","III","IV","V"]
    for name, M in zip(names, mids):
        cands_P = [s for s in big if lower <= s[0] and s[1] <= M[0]]
        nxt = [m for m in mids if m[0] > M[1]]
        upper = nxt[0][0] if nxt else fin[0]
        cands_Q = [s for s in big if s[0] >= M[1] and s[1] <= upper+1e-6] + [fin]
        best = None
        for P in cands_P:
            for Q in cands_Q:
                d1 = M[0]-P[1]; d2 = Q[0]-M[1]
                diff = abs(d1-d2)
                if diff < 1.0 and (best is None or d1 > best[0]):
                    best = (d1, P, Q, diff)
        if best:
            _, P, Q, diff = best
            tasks.append(dict(task=name, announce=[round(lower,1), round(P[0],1)],
                              plays=[[round(P[1],1), round(M[0],1)], [round(M[1],1), round(Q[0],1)]], ok=True, note=f"play len diff {diff:.2f}s"))
            lower = Q[1]
        else:
            tasks.append(dict(task=name, ok=False, note="no symmetric play pair found - review manually", mid=[round(M[0],1), round(M[1],1)]))
            lower = M[1]
    for t in tasks:
        for pl in t.get("plays", []):
            # all silences (>=3s) strictly inside a play = pauses between items/persons (can be 3-12 s long)
            inner = [[round(a,1), round(b,1)] for a,b in sil if pl[0] <= a and b <= pl[1]]
            pl.append(len(inner)); pl.append(inner)   # [start, end, nPauses, pauses]
    return dict(duration=round(D,1), tasks=tasks)

if __name__ == "__main__":
    sess = sys.argv[1:] or sorted(os.path.basename(p) for p in glob.glob(f"{ROOT}/20*"))
    print(json.dumps({s: analyse(s) for s in sess}, indent=1))
