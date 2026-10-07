/* Polski B1 – ćwiczenia. Vanilla JS, no build. Data contract: docs/schema.md */
(function () {
'use strict';

/* ------------------------------------------------------------------ utils */
var LS_KEY = 'polski.app.v1';
var SECTION_SHORT = { listening: 'Słuchanie', reading: 'Czytanie', grammar: 'Gramatyka', writing: 'Pisanie' };
var SECTION_ORDER = ['listening', 'reading', 'grammar', 'writing'];
var WRITING_INSTRUCTIONS = 'Score each part with the rubric (sub-criteria maxima as given), count errors per category, give a short RECENZJA in Polish and suggested corrections. No official band descriptors exist in the sources: state that scores are an estimate.';

function h(tag, attrs) {
  var e = document.createElement(tag);
  if (attrs) Object.keys(attrs).forEach(function (k) {
    var v = attrs[k];
    if (v == null || v === false) return;
    if (k === 'class') e.className = v;
    else if (k.slice(0, 2) === 'on') e.addEventListener(k.slice(2), v);
    else if (k === 'for') e.htmlFor = v;
    else if (k === 'style' || k === 'list' || k.indexOf('data-') === 0 || k.indexOf('aria-') === 0) e.setAttribute(k, v);
    else if (k in e) e[k] = v;
    else e.setAttribute(k, v === true ? '' : v);
  });
  add(e, Array.prototype.slice.call(arguments, 2));
  return e;
}
function add(e, kids) {
  kids.forEach(function (c) {
    if (c == null || c === false) return;
    if (Array.isArray(c)) add(e, c);
    else e.appendChild(c.nodeType ? c : document.createTextNode(String(c)));
  });
  return e;
}
function $(sel, root) { return (root || document).querySelector(sel); }
function fmt(n) {
  if (n == null || isNaN(n)) return '–';
  var r = Math.round(n * 100) / 100;
  return String(r).replace('.', ',');
}
function isBlank(v) {
  if (v == null) return true;
  if (Array.isArray(v)) return v.every(isBlank);
  return String(v).trim() === '';
}
function toast(msg) {
  var t = $('#toast'); t.textContent = msg; t.className = 'show';
  clearTimeout(toast._t); toast._t = setTimeout(function () { t.className = ''; }, 3200);
}

/* ------------------------------------------------------------ persistence */
var S, memOnly = false;
function loadState() {
  try { S = JSON.parse(localStorage.getItem(LS_KEY)); } catch (e) { S = null; }
  if (!S || typeof S !== 'object') S = {};
  S.sessions = S.sessions || {};
  S.settings = Object.assign({ lenient: false, timer: false }, S.settings);
}
var scratch = false; // self-test: never touch localStorage
function save() {
  if (scratch) return;
  try { localStorage.setItem(LS_KEY, JSON.stringify(S)); }
  catch (e) { if (!memOnly) { memOnly = true; toast('Uwaga: nie można zapisać w localStorage – postęp zniknie po odświeżeniu.'); } }
}
function ses(id) {
  var s = S.sessions[id];
  if (!s) s = S.sessions[id] = { answers: {}, checked: {}, overrides: {}, selfScores: {}, timers: {}, updatedAt: 0 };
  ['answers', 'checked', 'overrides', 'selfScores', 'timers'].forEach(function (k) { s[k] = s[k] || {}; });
  return s;
}
function setAns(key, val) {
  var st = ses(cur.id);
  st.answers[key] = val;
  st.updatedAt = Date.now();
  S.last = { examId: cur.id, sectionId: cur.sectionId };
  save();
  refreshChrome();
}

/* --------------------------------------------------------- normalisation */
var DEFAULT_MATCH = { ignoreCase: true, collapseSpace: true, stripChars: '.…!?,;:' };
function norm(s, cfg) {
  cfg = cfg || DEFAULT_MATCH;
  s = String(s).normalize('NFC').replace(/[   ]/g, ' ');
  if (cfg.collapseSpace !== false) s = s.replace(/\s+/g, ' ');
  s = s.replace(/[„”“‟«»"]/g, '"').replace(/[’‘`´]/g, "'").replace(/[–—−‑]/g, '-');
  if (cfg.ignoreCase !== false) s = s.toLowerCase();
  var strip = (cfg.stripChars || '') + '"\' \t\n';
  var a = 0, b = s.length;
  while (a < b && strip.indexOf(s.charAt(a)) >= 0) a++;
  while (b > a && strip.indexOf(s.charAt(b - 1)) >= 0) b--;
  return s.slice(a, b);
}
function fold(s) { return s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ł/g, 'l').replace(/Ł/g, 'L'); }
function matchCfg(task, u) {
  return Object.assign({}, DEFAULT_MATCH, task.match || {}, (u && u.ref && u.ref.match) || {});
}

/* ------------------------------------------------------------------ units */
function K(task, id) { id = String(id); return id.indexOf(task.id + '.') === 0 ? id : task.id + '.' + id; }

function writingSet(task, st) {
  var sets = task.sets || [];
  var chosen = st.answers['w.set'];
  if (chosen && sets.some(function (s) { return s.id === chosen; })) return chosen;
  return sets.length ? sets[0].id : null;
}

/* A unit = one independently scored thing (item, blank, statement, writing part). */
function unitsOf(task, st) {
  var P = task.pointsPerItem != null ? task.pointsPerItem : 1;
  if (task.type === 'matchMulti') {
    return (task.statements || []).map(function (s) {
      var slots = s.slots || (s.answer || []).length || 1;
      return { key: s.id || K(task, s.letter), kind: 'set', ref: s, slots: slots, max: slots * (task.pointsPerSlot != null ? task.pointsPerSlot : 1), answer: s.answer || [], mode: task.grading || 'auto' };
    });
  }
  if (task.type === 'writing') {
    var sid = writingSet(task, st), set = (task.sets || []).filter(function (s) { return s.id === sid; })[0];
    var per = (task.rubric && task.rubric.perPartMax) || 15;
    return set ? set.parts.map(function (p) { return { key: 'w.' + sid + '.' + p.id, kind: 'writing', ref: p, set: sid, max: per, mode: 'review' }; }) : [];
  }
  var list = task.blanks || task.items || [];
  return list.filter(function (x) { return !x.example; }).map(function (x) {
    var id = x.id != null ? x.id : (x.gap != null ? x.gap : x.number);
    return { key: K(task, id), kind: 'text', ref: x, max: x.points != null ? x.points : P, answer: x.answer, accept: x.accept, mode: x.grading || task.grading || 'auto' };
  });
}
function taskMax(task, units) {
  if (task.maxPoints != null) return task.maxPoints;
  return units.reduce(function (a, u) { return a + u.max; }, 0);
}

/* ---------------------------------------------------------------- grading */
function gradeUnit(task, u, st) {
  var user = st.answers[u.key], max = u.max;
  function out(status, pts, extra) { return Object.assign({ status: status, pts: pts, max: max, user: user }, extra); }
  if (u.kind === 'writing') {
    if (isBlank(user)) return out('blank', 0);
    var ss = st.selfScores[u.key];
    if (ss != null) return out('self', ss);
    return out('review', 0);
  }
  var cfg = matchCfg(task, u);
  if (u.kind === 'set') {
    var arr = Array.isArray(user) ? user : [];
    var uset = {}; arr.forEach(function (x) { if (!isBlank(x)) uset[norm(x, cfg)] = true; });
    var uk = Object.keys(uset);
    var ans = (u.answer || []).map(function (x) { return norm(x, cfg); });
    var inter = ans.filter(function (a) { return uset[a]; }).length;
    var per = task.pointsPerSlot != null ? task.pointsPerSlot : 1;
    var pts = inter * per;
    var status = !uk.length ? 'blank' : (inter === ans.length && uk.length === ans.length) ? 'correct' : inter > 0 ? 'partial' : 'wrong';
    if (st.overrides[u.key] && status !== 'blank') return out('override', max);
    return out(status, pts);
  }
  // text / choice
  if (isBlank(user)) return out('blank', 0);
  if (st.overrides[u.key]) return out('override', max);
  if (u.answer == null) return out('review', 0, { noKey: true });
  var accepted = [u.answer].concat(u.accept || []).filter(function (x) { return x != null; }).map(function (x) { return norm(x, cfg); });
  var nu = norm(user, cfg);
  if (accepted.indexOf(nu) >= 0) return out('correct', max);
  var fu = fold(nu);
  var dia = accepted.some(function (a) { return fold(a) === fu; });
  if (dia) {
    if (S.settings.lenient) return out('diac', max, { note: 'brak znaków diakrytycznych – uznane (tryb łagodny)' });
    return out('wrong', 0, { review: u.mode === 'auto+review', note: 'brak lub błędne znaki diakrytyczne (włącz „łagodne diakrytyki”, by uznać)' });
  }
  if (u.mode === 'review') {
    var s2 = st.selfScores[u.key];
    if (s2 != null) return out('self', s2);
    return out('review', 0);
  }
  return out('wrong', 0, { review: u.mode === 'auto+review' });
}
function isPending(res) { return res.status === 'review' || (res.review && res.status === 'wrong'); }

function taskResults(exam, task) {
  var st = ses(exam.id), units = unitsOf(task, st), R = {};
  units.forEach(function (u) { R[u.key] = gradeUnit(task, u, st); });
  return { units: units, R: R };
}

function secStats(exam, sec) {
  var st = ses(exam.id), o = { answered: 0, total: 0, pts: 0, max: 0, pending: 0, checkedTasks: 0, tasks: sec.tasks.length };
  sec.tasks.forEach(function (task) {
    var units = unitsOf(task, st);
    var tm = taskMax(task, units);
    o.max += tm;
    units.forEach(function (u) {
      o.total++;
      if (!isBlank(st.answers[u.key])) o.answered++;
    });
    if (st.checked[task.id]) {
      o.checkedTasks++;
      units.forEach(function (u) {
        var r = gradeUnit(task, u, st); o.pts += r.pts; if (isPending(r)) o.pending++;
      });
    }
  });
  if (sec.maxPoints != null) o.max = Math.max(o.max, sec.maxPoints);
  return o;
}
function examStats(exam) {
  var t = { answered: 0, total: 0, pts: 0, max: 0, pending: 0, checkedTasks: 0, tasks: 0 };
  exam.sections.forEach(function (sec) {
    var s = secStats(exam, sec);
    Object.keys(t).forEach(function (k) { t[k] += s[k]; });
  });
  return t;
}
function pct(p, m) { return m ? Math.round(100 * p / m) + '%' : '–'; }

/* ----------------------------------------------------------- exam loading */
// schema.md says window.EXAM_INDEX; the generated manifest currently uses EXAM_MANIFEST -> accept both.
function examIndex() {
  var a = window.EXAM_INDEX || window.EXAM_MANIFEST || [];
  return a.map(function (e) { return typeof e === 'string' ? { id: e, label: e } : e; });
}
var examCache = {};
function loadExam(id) {
  if (examCache[id]) return examCache[id];
  examCache[id] = new Promise(function (res, rej) {
    function done() {
      var ex = window.EXAMS && window.EXAMS[id];
      if (!ex) return rej(new Error('Plik data/' + id + '.js nie definiuje EXAMS["' + id + '"].'));
      res(normaliseExam(ex));
    }
    if (window.EXAMS && window.EXAMS[id]) return done();
    var s = document.createElement('script');
    s.src = 'data/' + encodeURIComponent(id) + '.js';
    s.onload = done;
    s.onerror = function () { delete examCache[id]; rej(new Error('Nie można wczytać data/' + id + '.js (brak pliku?).')); };
    document.head.appendChild(s);
  });
  return examCache[id];
}
function dropExampleOptions(ex) {
  // Listening V (2021): an option equal to the example answer, used by no real item, only exists so the example validates.
  ex.sections.forEach(function (sec) { sec.tasks.forEach(function (t) {
    if (!t.options || !t.example || t.example.answer == null) return;
    var exa = String(t.example.answer);
    var used = (t.items || []).some(function (it) { return [].concat(it.answer).map(String).indexOf(exa) >= 0; });
    if (!used) t.options = t.options.filter(function (o) { return String(o.id) !== exa; });
  }); });
}
function normaliseExam(ex) {
  if (!ex.sections && ex.tasks) { // tolerate flat task list
    var by = {};
    ex.tasks.forEach(function (t) { var k = { l: 'listening', r: 'reading', g: 'grammar', w: 'writing' }[t.id.charAt(0)] || 'other'; (by[k] = by[k] || []).push(t); });
    ex.sections = SECTION_ORDER.filter(function (k) { return by[k]; }).map(function (k) { return { id: k, title: SECTION_SHORT[k], tasks: by[k] }; });
  }
  ex.sections = ex.sections || [];
  dropExampleOptions(ex);
  return ex;
}
function examLabel(id, ex) {
  var idx = examIndex().filter(function (e) { return e.id === id; })[0];
  return (idx && idx.label) || (ex && ex.meta && ex.meta.labelPdf) || id;
}

/* ------------------------------------------------------------------ audio */
// Practice mode (default): native <audio controls> + per-task / per-item buttons.
// Exam mode: no controls, no seeking, no pause; one "start" button plays the whole file.
var audio, player = { end: null, label: '' }, examMode = false;
var LEAD = 0.3, TRAIL = 0.15;
var ex = { running: false, last: 0, appSeek: false, appPause: false, spans: [], total: 0 };
function setExamMode(on, silent) {
  examMode = !!on;
  var cb = $('#exam-mode'); if (cb) cb.checked = examMode;
  document.body.classList.toggle('exam-mode', examMode);
  audio.controls = !examMode;
  stopAudio();
  S.settings.examMode = examMode; if (!silent) save();
  renderPlayer();
}
function appSeekTo(t) {
  ex.appSeek = true; ex.last = t;
  try { audio.currentTime = t; } catch (e) {}
  setTimeout(function () { ex.appSeek = false; }, 150);
}
function initPlayer() {
  audio = $('#audio');
  audio.addEventListener('timeupdate', tick);
  audio.addEventListener('pause', function () {
    if (examMode && ex.running && !ex.appPause && !audio.ended) { var p = audio.play(); if (p && p.catch) p.catch(function () {}); return; }
    renderPlayer();
  });
  audio.addEventListener('play', renderPlayer);
  audio.addEventListener('ended', function () { ex.running = false; player.end = null; renderPlayer(); });
  audio.addEventListener('seeking', function () {
    if (examMode && ex.running && !ex.appSeek) appSeekTo(ex.last);
  });
  audio.addEventListener('ratechange', function () { if (examMode && audio.playbackRate !== 1) audio.playbackRate = 1; });
  audio.addEventListener('error', function () {
    if (audio.getAttribute('src')) $('#player-label').textContent = 'Nie można wczytać nagrania (' + audio.getAttribute('src') + ').';
  });
  setInterval(tick, 80);
  $('#player-stop').addEventListener('click', function () { player.end = null; audio.pause(); renderPlayer(); });
  $('#exam-start').addEventListener('click', function () {
    if (!examMode || ex.running) return;
    ex.running = true; ex.appPause = false; player.end = null;
    appSeekTo(0);
    var p = audio.play(); if (p && p.catch) p.catch(function () { ex.running = false; renderPlayer(); });
    renderPlayer();
  });
  $('#exam-abort').addEventListener('click', function () {
    if (!ex.running) return;
    if (!confirm('Przerwać nagranie? Odtwarzanie wróci na początek.')) return;
    abortExam();
  });
  $('#exam-mode').addEventListener('change', function (e) {
    if (ex.running && !confirm('Nagranie trwa. Przerwać i zmienić tryb?')) { e.target.checked = examMode; return; }
    setExamMode(e.target.checked);
  });
  setExamMode(!!S.settings.examMode, true);
}
function abortExam() {
  ex.appPause = true; ex.running = false; player.end = null;
  audio.pause(); appSeekTo(0);
  setTimeout(function () { ex.appPause = false; }, 150);
  renderPlayer();
}
function stopAudio() {
  if (!audio) return;
  ex.appPause = true; ex.running = false; player.end = null;
  audio.pause(); if (examMode) appSeekTo(0);
  setTimeout(function () { ex.appPause = false; }, 150);
}
function tick() {
  if (!audio) return;
  if (examMode) {
    if (ex.running && !audio.seeking && !ex.appSeek) ex.last = audio.currentTime;
    if (ex.running) renderPlayer();
    return;
  }
  if (player.end != null && audio.currentTime >= player.end) { audio.pause(); player.end = null; renderPlayer(); }
  else if (!audio.paused) renderPlayer();
}
function mmss(t) { t = Math.max(0, Math.round(t)); return Math.floor(t / 60) + ':' + ('0' + (t % 60)).slice(-2); }
function examSpans(exam) {
  var list = [];
  exam.sections.forEach(function (sec) { sec.tasks.forEach(function (t) {
    var a = t.audio; if (!a || !a.plays || !a.plays.length) return;
    list.push({ name: 'Zadanie ' + (t.number || t.id), a: a, start: a.announce ? a.announce[0] : a.plays[0].start, end: a.plays[a.plays.length - 1].end });
  }); });
  list.sort(function (x, y) { return x.start - y.start; });
  return list;
}
function currentPhase(t) {
  var sp = ex.spans, cur = null;
  if (!sp.length) return '';
  if (t < sp[0].start) return 'Wstęp';
  for (var i = 0; i < sp.length; i++) if (t >= sp[i].start) cur = sp[i];
  if (t > cur.end + 1 && cur === sp[sp.length - 1]) return 'Koniec nagrania';
  var a = cur.a, ph = '';
  if (a.announce && t < a.plays[0].start) ph = 'zapowiedź';
  else {
    ph = 'pauza';
    a.plays.forEach(function (p, i) { if (t >= p.start - 0.5 && t <= p.end + 0.5) ph = a.plays.length > 1 ? 'odtworzenie ' + (i + 1) + '/' + a.plays.length : 'odtworzenie'; });
  }
  return cur.name + ' – ' + ph;
}
function renderPlayer() {
  var l = $('#player-label'); if (!l || !audio) return;
  var total = ex.total || audio.duration || 0, t = audio.currentTime || 0;
  $('#exam-ui').hidden = !examMode;
  $('#player-stop').hidden = examMode;
  $('#exam-start').hidden = !examMode || ex.running;
  $('#exam-abort').hidden = !examMode || !ex.running;
  if (examMode) {
    var pr = $('#exam-progress'); pr.max = total || 1; pr.value = t;
    $('#exam-time').textContent = mmss(t) + ' / ' + mmss(total);
    l.textContent = ex.running ? currentPhase(t) : (audio.ended || (t === 0 && !ex.running) ? 'Tryb egzaminu: nagranie odtwarza się bez przerwy' : 'Zatrzymano');
    return;
  }
  var pos = mmss(t) + (total ? ' / ' + mmss(total) : '');
  l.textContent = (!audio.paused && player.label ? player.label : 'Nagranie') + ' · ' + pos;
}
function playRange(start, end, label) {
  if (examMode) return;
  function go() {
    audio.currentTime = Math.max(0, start - LEAD);
    player.end = end + TRAIL; player.label = label;
    var p = audio.play(); if (p && p.catch) p.catch(function () {});
    renderPlayer();
  }
  if (audio.readyState >= 1) go();
  else { audio.addEventListener('loadedmetadata', go, { once: true }); audio.load(); }
}
function setupAudioFor(exam) {
  var bar = $('#player');
  var src = (exam.audio && exam.audio.src) || (exam.meta && exam.meta.sources && exam.meta.sources.audio);
  var hasListening = exam.sections.some(function (s) { return s.tasks.some(function (t) { return t.audio; }); });
  if (!src || !hasListening) { stopAudio(); bar.hidden = true; audio.removeAttribute('src'); return; }
  bar.hidden = false;
  if (audio.getAttribute('src') !== src) { stopAudio(); audio.setAttribute('src', src); ex.last = 0; }
  ex.spans = examSpans(exam); ex.total = (exam.audio && exam.audio.duration) || 0;
  player.end = null; renderPlayer();
}

function audioControls(task) {
  var a = task.audio; if (!a) return null;
  var row = h('div', { class: 'audio-ctl' }, h('span', { class: 'lbl' }, '♪ Nagranie:'));
  var tl = 'Zadanie ' + (task.number || task.id);
  if (a.announce) row.append(h('button', { type: 'button', onclick: function () { playRange(a.announce[0], a.announce[1], tl + ' – zapowiedź'); } }, 'Zapowiedź'));
  (a.plays || []).forEach(function (p, i) {
    row.append(h('button', { type: 'button', class: 'primary', onclick: function () { playRange(p.start, p.end, tl + ' – odtworzenie ' + (i + 1)); } }, '▶ ' + (i + 1)));
  });
  row.append(h('span', { class: 'muted small' }, 'w egzaminie: ' + (task.plays || (a.plays || []).length) + '×'));
  return row;
}
function itemPlay(task, ref) {
  var a = task.audio; if (!a || !a.items) return null;
  var it = a.items.filter(function (x) { return x.ref === ref; })[0];
  if (!it) return null;
  return h('button', { type: 'button', class: 'mini audio-ctl-item', title: 'Odtwórz ten fragment', onclick: function () { playRange(it.start, it.end, 'Zadanie ' + (task.number || task.id) + ' – ' + ref); } }, '▶');
}

/* ------------------------------------------------------------------ timer */
var timerRun = {}; // "examId|sec" -> start timestamp
function timerElapsed(examId, secId) {
  var t = ses(examId).timers[secId] || { elapsed: 0 };
  var k = examId + '|' + secId;
  return t.elapsed + (timerRun[k] ? (Date.now() - timerRun[k]) / 1000 : 0);
}
function timerCommit(examId, secId) {
  var k = examId + '|' + secId, t = ses(examId).timers;
  t[secId] = { elapsed: timerElapsed(examId, secId) };
  if (timerRun[k]) timerRun[k] = Date.now();
  save();
}
function timerWidget(exam, sec) {
  if (!S.settings.timer || !sec.timeMinutes) return null;
  var k = exam.id + '|' + sec.id, limit = sec.timeMinutes * 60;
  var disp = h('span', { class: 'timer-disp', 'data-timer': k });
  function paint() {
    var rem = limit - timerElapsed(exam.id, sec.id);
    disp.textContent = (rem < 0 ? '−' : '') + mmss(Math.abs(rem));
    disp.className = 'timer-disp' + (rem < 0 ? ' over' : rem < 300 ? ' low' : '');
    toggle.textContent = timerRun[k] ? '⏸ Pauza' : '▶ Start';
  }
  var toggle = h('button', { type: 'button', onclick: function () {
    if (timerRun[k]) { timerCommit(exam.id, sec.id); delete timerRun[k]; } else timerRun[k] = Date.now();
    save(); paint();
  } });
  var reset = h('button', { type: 'button', onclick: function () { delete timerRun[k]; ses(exam.id).timers[sec.id] = { elapsed: 0 }; save(); paint(); } }, '↺');
  var w = h('div', { class: 'timer' }, h('span', { class: 'lbl' }, '⏱ Limit ' + sec.timeMinutes + ' min:'), disp, toggle, reset);
  w._paint = paint; paint();
  return w;
}
setInterval(function () {
  var any = false;
  Array.prototype.forEach.call(document.querySelectorAll('.timer'), function (w) { if (w._paint) w._paint(); });
  Object.keys(timerRun).forEach(function (k) { any = true; });
  if (any && (Date.now() % 5000) < 1000) Object.keys(timerRun).forEach(function (k) { var p = k.split('|'); timerCommit(p[0], p[1]); });
}, 1000);

/* ---------------------------------------------------------- shared render */
function passageBlock(p) {
  if (p == null) return null;
  if (typeof p === 'string') p = { text: p };
  var box = h('div', { class: 'passage-box' });
  if (p.title) box.append(h('div', { class: 'p-title' }, p.title));
  String(p.text || '').split(/\n\n+/).forEach(function (par) { box.append(h('p', null, par)); });
  if (p.source) box.append(h('div', { class: 'source' }, p.source));
  return box;
}
function inlinePassage(text, gapFn) {
  var wrap = h('div', { class: 'passage' });
  String(text).split(/\n\n+/).forEach(function (par) {
    var p = h('p');
    par.split(/\{\{([^}]+)\}\}/).forEach(function (seg, i) {
      if (i % 2 === 0) { if (seg) p.append(seg); }
      else p.append(gapFn(seg.trim()) || ('[' + seg + ']'));
    });
    wrap.append(p);
  });
  return wrap;
}
function imageFig(im) {
  var src = typeof im === 'string' ? im : im.src;
  var fig = h('figure', { class: 'fig' });
  var img = h('img', { src: src, alt: (im && im.alt) || '', loading: 'lazy' });
  img.addEventListener('error', function () { img.replaceWith(h('span', { class: 'img-missing' }, 'Brak obrazu: ' + String(src).slice(0, 80))); });
  fig.append(img);
  if (im && im.id) fig.append(h('figcaption', null, im.id));
  return fig;
}
function ansText(ctx, u) {
  var a = u.answer;
  if (a == null) return '—';
  if (Array.isArray(a)) return a.map(function (x) { return personLabel(ctx.task, x); }).join(', ');
  var t = String(a);
  if (u.accept && u.accept.length) t += '  (także: ' + u.accept.join(' / ') + ')';
  return t;
}
function personLabel(task, id) {
  var p = (task.persons || []).filter(function (x) { return String(x.id) === String(id); })[0];
  return p ? p.label : id;
}
var STATUS = {
  correct: ['✓', 'poprawnie'], wrong: ['✗', 'błędnie'], partial: ['◐', 'częściowo'], blank: ['–', 'brak odpowiedzi'],
  review: ['✎', 'do sprawdzenia'], self: ['✎', 'ocena własna'], override: ['✓', 'uznane ręcznie'], diac: ['✓', 'uznane (diakrytyki)']
};
var REVIEW_TAG = 'do sprawdzenia przez Claude';

function fbNode(ctx, u, res, compact) {
  if (!res) return null;
  var s = STATUS[res.status];
  var box = h('span', { class: 'fb fb-' + res.status + (compact ? ' compact' : '') });
  box.append(h('b', null, s[0] + ' ' + s[1]));
  box.append(' ' + fmt(res.pts) + '/' + fmt(res.max) + ' p.');
  if (['wrong', 'partial', 'blank'].indexOf(res.status) >= 0 && !isBlank(u.answer)) box.append(h('span', { class: 'ans' }, ' Poprawna odpowiedź: ', h('b', null, ansText(ctx, u))));
  if (res.status === 'review' || res.status === 'self') {
    var model = u.ref && u.ref.answer;
    if (model) box.append(h('span', { class: 'ans' }, ' Wzór: ', h('b', null, model)));
  }
  if (res.note) box.append(h('span', { class: 'note' }, ' ' + res.note));
  if (isPending(res)) box.append(h('span', { class: 'tag' }, REVIEW_TAG));
  // override for auto+review
  if (u.mode === 'auto+review' && (res.status === 'wrong' || res.status === 'override')) {
    box.append(h('label', { class: 'ovr' }, h('input', { type: 'checkbox', checked: !!ctx.st.overrides[u.key], onchange: function (e) {
      if (e.target.checked) ctx.st.overrides[u.key] = true; else delete ctx.st.overrides[u.key];
      save(); rerenderTask(ctx.task.id); refreshChrome();
    } }), ' uznaj za poprawne'));
  }
  // self score for review items
  if (u.mode === 'review' && (res.status === 'review' || res.status === 'self') && u.kind !== 'writing') box.append(selfScoreSel(ctx, u));
  if (u.kind === 'writing' && (res.status === 'review' || res.status === 'self')) box.append(selfScoreSel(ctx, u));
  return box;
}
function selfScoreSel(ctx, u) {
  var opts = [h('option', { value: '' }, '— punkty —')];
  var step = u.kind === 'writing' ? 0.5 : 0.25;
  for (var v = 0; v <= u.max + 1e-9; v += step) opts.push(h('option', { value: String(v), selected: ctx.st.selfScores[u.key] === v }, fmt(v)));
  return h('label', { class: 'ovr' }, 'moja ocena: ', h('select', { onchange: function (e) {
    if (e.target.value === '') delete ctx.st.selfScores[u.key]; else ctx.st.selfScores[u.key] = parseFloat(e.target.value);
    save(); rerenderTask(ctx.task.id); refreshChrome();
  } }, opts), ' p.');
}
function transcriptNode(t) {
  if (!t) return null;
  var box = h('div', { class: 'transcript' });
  if (t.t) box.append(h('p', null, t.sp ? h('b', null, t.sp + ': ') : null, t.t));
  if (t.text) String(t.text).split(/\n\n+/).forEach(function (p) { box.append(h('p', null, p)); });
  (t.lines || []).forEach(function (l) { box.append(h('p', null, l.sp ? h('b', null, l.sp + ': ') : null, l.t)); });
  return box;
}
function resClass(res) {
  if (!res) return '';
  return { correct: ' ok', diac: ' ok', override: ' ok', wrong: ' bad', partial: ' part', blank: ' bad', review: ' rev', self: ' rev' }[res.status] || '';
}

/* ------------------------------------------------------- control builders */
function gapSelect(ctx, u, options, labelFn) {
  var cur0 = ctx.st.answers[u.key];
  var vals = options.slice();
  if (cur0 != null && cur0 !== '' && vals.indexOf(cur0) < 0) vals.push(cur0);
  var sel = h('select', { class: 'gap' + resClass(ctx.R[u.key]), disabled: ctx.checked, 'aria-label': 'luka ' + (u.ref.id || u.ref.gap) },
    h('option', { value: '' }, '…'),
    vals.map(function (o) { return h('option', { value: o, selected: o === cur0 }, labelFn ? labelFn(o) : o); }));
  sel.addEventListener('change', function () { setAns(u.key, sel.value); if (ctx.onGap) ctx.onGap(); });
  return h('span', { class: 'gapwrap' }, sel, ctx.checked ? fbNode(ctx, u, ctx.R[u.key], true) : null);
}
function exSpan(answer, given) {
  return h('span', { class: 'ex-gap' }, answer == null ? '(przykład)' : answer, given ? h('small', null, ' (' + given + ')') : null);
}
function textInput(ctx, u, opts) {
  opts = opts || {};
  var inp = h('input', { type: 'text', class: 'gap txt' + resClass(ctx.R[u.key]), value: ctx.st.answers[u.key] || '', disabled: ctx.checked, autocomplete: 'off', autocapitalize: 'none', spellcheck: false, size: opts.size || 12, 'aria-label': 'odpowiedź ' + (u.ref.id || '') });
  inp.addEventListener('input', function () { setAns(u.key, inp.value); });
  return inp;
}

/* ------------------------------------------------------------ task bodies */
function exampleBox(ctx) {
  var task = ctx.task, ex = task.example;
  if (!ex || task.type === 'writing') return null;
  var box = h('div', { class: 'example' }, h('span', { class: 'ex-label' }, 'PRZYKŁAD'));
  var ans = ex.answer;
  function ansLabel(a) { return Array.isArray(a) ? a.map(function (x) { return personLabel(task, x); }).join(', ') : a; }
  if (ex.passage) box.append(passageBlock(ex.passage));
  ['sentence', 'source', 'statement', 'prompt', 'title', 'text'].forEach(function (f) {
    if (typeof ex[f] === 'string' && f !== 'source' || (f === 'source' && typeof ex.source === 'string' && task.type === 'transform')) {
      var t = ex[f];
      if (f === 'sentence' && ex.underlined) {
        var i = t.indexOf(ex.underlined);
        box.append(h('div', null, i >= 0 ? [t.slice(0, i), h('u', null, ex.underlined), t.slice(i + ex.underlined.length)] : t));
      } else box.append(h('div', null, t));
    }
  });
  if (ex.stem) box.append(h('div', { class: 'muted' }, ex.stem));
  if (ex.hint) box.append(h('div', { class: 'muted' }, '(' + ex.hint + ')'));
  if (ex.options) box.append(h('ul', { class: 'opts' }, ex.options.map(function (o) {
    return h('li', { class: o.id === ans ? 'is-answer' : '' }, h('b', null, o.id + ') '), o.text, o.id === ans ? ' ✓' : '');
  })));
  if (ans != null && !ex.options) box.append(h('div', null, 'Odpowiedź: ', h('b', null, ansLabel(ans))));
  if (ex.transcript) box.append(transcriptNode(ex.transcript));
  return box;
}

function optionLabel(o) { return h('span', null, h('b', null, o.id + ') '), o.text); }

function bodyMC(ctx, items, withExample) {
  var task = ctx.task, out = [];
  if (task.passage) out.push(passageBlock(task.passage));
  function one(it, u, isEx) {
    var key = u ? u.key : null, res = u ? ctx.R[key] : null;
    var chosen = isEx ? it.answer : ctx.st.answers[key];
    var box = h('div', { class: 'item' + (isEx ? ' is-example' : '') + resClass(res) });
    if (it.passage) box.append(passageBlock(it.passage));
    var q = h('div', { class: 'q' }, h('span', { class: 'num' }, isEx ? 'PRZ.' : (it.number != null ? it.number + '.' : '')), ' ', it.prompt || it.stem || it.question || '');
    var pb = !isEx && itemPlay(task, it.id); if (pb) q.append(' ', pb);
    box.append(q);
    var name = 'q-' + task.id + '-' + (it.id || Math.random());
    var ul = h('div', { class: 'choices' });
    (it.options || []).forEach(function (o) {
      var cls = 'choice';
      if (ctx.checked && !isEx && u) { if (String(o.id).toLowerCase() === String(u.answer).toLowerCase()) cls += ' is-answer'; else if (chosen === o.id) cls += ' is-wrong'; }
      var inp = h('input', { type: 'radio', name: name, value: o.id, checked: chosen === o.id, disabled: ctx.checked || isEx });
      inp.addEventListener('change', function () { setAns(key, o.id); });
      ul.append(h('label', { class: cls }, inp, ' ', optionLabel(o)));
    });
    box.append(ul);
    if (!isEx && ctx.checked) { box.append(fbNode(ctx, u, res)); if (it.transcript) box.append(transcriptNode(it.transcript)); }
    return box;
  }
  if (withExample && task.example) out.push(one(task.example, null, true));
  items.forEach(function (it) { out.push(one(it, ctx.U[K(task, it.id != null ? it.id : it.gap)], false)); });
  return out;
}

function bodyTF(ctx) {
  var task = ctx.task, out = [];
  if (task.passage) out.push(passageBlock(task.passage));
  function one(it, u, isEx) {
    var key = u && u.key, res = u && ctx.R[key], chosen = isEx ? it.answer : ctx.st.answers[key];
    var box = h('div', { class: 'item tf' + (isEx ? ' is-example' : '') + resClass(res) });
    box.append(h('div', { class: 'q' }, h('span', { class: 'num' }, isEx ? 'PRZ.' : it.number + '.'), ' ', it.statement || it.prompt));
    var name = 'tf-' + task.id + '-' + (it.id || 'ex');
    var grp = h('div', { class: 'choices inline' });
    ['TAK', 'NIE'].forEach(function (v) {
      var cls = 'choice';
      if (ctx.checked && !isEx) { if (String(u.answer).toUpperCase() === v) cls += ' is-answer'; else if (chosen === v) cls += ' is-wrong'; }
      var inp = h('input', { type: 'radio', name: name, value: v, checked: chosen === v, disabled: ctx.checked || isEx });
      inp.addEventListener('change', function () { setAns(key, v); });
      grp.append(h('label', { class: cls }, inp, ' ', v));
    });
    var pb = !isEx && itemPlay(task, it.id); if (pb) grp.append(pb);
    box.append(grp);
    if (!isEx && ctx.checked) box.append(fbNode(ctx, u, res));
    return box;
  }
  if (task.example) out.push(one(task.example, null, true));
  (task.items || []).forEach(function (it) { out.push(one(it, ctx.U[K(task, it.id)], false)); });
  return out;
}

function optionList(task) {
  if (!task.options || !task.options.length) return null;
  return h('div', { class: 'optlist' }, task.options.map(function (o) {
    return h('div', null, h('b', null, o.id), o.text && o.text !== o.id ? '  ' + o.text : '');
  }));
}
function bodyMatch(ctx) {
  var task = ctx.task, out = [];
  if (task.heading) out.push(h('h4', { class: 'heading' }, task.heading));
  if (task.passage) out.push(passageBlock(task.passage));
  out.push(optionList(task));
  var ids = (task.options || []).map(function (o) { return o.id; });
  function row(it, u, isEx) {
    var res = u && ctx.R[u.key];
    var box = h('div', { class: 'item row' + (isEx ? ' is-example' : '') + resClass(res) });
    var left = h('div', { class: 'q' }, h('span', { class: 'num' }, isEx ? 'PRZ.' : (it.number != null ? it.number + '.' : '')), ' ');
    if (it.label) left.append(h('b', null, it.label + ' '));
    if (it.image) left.append(imageFig(it.image));
    left.append(it.prompt || it.text || it.title || it.statement || '');
    var pb = !isEx && itemPlay(task, it.id); if (pb) left.append(' ', pb);
    box.append(left);
    if (isEx) box.append(h('span', { class: 'ex-gap' }, it.answer));
    else box.append(gapSelect(ctx, u, ids));
    if (!isEx && ctx.checked && it.transcript) box.append(transcriptNode(it.transcript));
    return box;
  }
  if (task.example) out.push(row(task.example, null, true));
  (task.items || []).forEach(function (it) { out.push(row(it, ctx.U[K(task, it.id != null ? it.id : it.gap)], false)); });
  return out;
}

function exAnswerFor(task, id) {
  var ex = task.example;
  if (ex && (ex.gap == null || String(ex.gap) === id || id === 'ex')) return ex.answer;
  return null;
}
function bodyGapMatch(ctx) {
  var task = ctx.task, ids = (task.options || []).map(function (o) { return o.id; });
  var items = {}; (task.items || []).forEach(function (it) { items[String(it.gap != null ? it.gap : it.id)] = it; });
  return [optionList(task), inlinePassage(task.passage || '', function (id) {
    var u = ctx.U[K(task, id)] || (items[id] && ctx.U[K(task, items[id].id != null ? items[id].id : id)]);
    if (!u) { var b = (task.blanks || []).filter(function (x) { return String(x.id) === id && x.example; })[0];
      return exSpan(b ? b.answer : exAnswerFor(task, id)); }
    return gapSelect(ctx, u, ids);
  })];
}

function bodyMatchMulti(ctx) {
  var task = ctx.task, out = [];
  var pids = (task.persons || []).map(function (p) { return String(p.id); });
  out.push(h('div', { class: 'persons' }, h('b', null, 'Osoby: '), (task.persons || []).map(function (p) {
    return h('span', { class: 'person' }, p.label, ' ', itemPlay(task, 'p' + p.id));
  })));
  if (task.example) out.push(exampleBox(ctx));
  (task.statements || []).forEach(function (s) {
    var u = ctx.U[s.id || K(task, s.letter)], res = ctx.R[u.key];
    var cur0 = Array.isArray(ctx.st.answers[u.key]) ? ctx.st.answers[u.key].slice() : [];
    var box = h('div', { class: 'item row' + resClass(res) });
    box.append(h('div', { class: 'q' }, h('b', null, (s.letter || '') + '. '), s.text, s.starred ? h('span', { class: 'muted small' }, ' (kolejność dowolna)') : null));
    var slots = h('span', { class: 'slots' });
    for (var i = 0; i < u.slots; i++) (function (i) {
      var sel = h('select', { class: 'gap' + resClass(res), disabled: ctx.checked, 'aria-label': 'osoba dla ' + s.letter },
        h('option', { value: '' }, '…'),
        pids.map(function (p) { return h('option', { value: p, selected: cur0[i] === p }, p); }));
      sel.addEventListener('change', function () {
        var a = Array.isArray(ctx.st.answers[u.key]) ? ctx.st.answers[u.key].slice() : [];
        while (a.length < u.slots) a.push('');
        a[i] = sel.value; setAns(u.key, a);
      });
      slots.append(sel);
    })(i);
    box.append(slots);
    if (ctx.checked) box.append(fbNode(ctx, u, res));
    out.push(box);
  });
  if (task.keyNote) out.push(h('div', { class: 'muted small' }, task.keyNote));
  return out;
}

function bodyClozeChoice(ctx) {
  var task = ctx.task, blanks = {}; (task.blanks || []).forEach(function (b) { blanks[String(b.id)] = b; });
  return inlinePassage(task.passage || '', function (id) {
    var b = blanks[id]; if (!b) return null;
    if (b.example) return exSpan(b.answer);
    return gapSelect(ctx, ctx.U[K(task, id)], b.options || []);
  });
}
function bodyClozeBox(ctx) {
  var task = ctx.task, blanks = {}; (task.blanks || []).forEach(function (b) { blanks[String(b.id)] = b; });
  var exWords = (task.blanks || []).filter(function (b) { return b.example && b.answer; }).map(function (b) { return b.answer; });
  var box = h('div', { class: 'wordbox' }, (task.wordBox || []).map(function (w) { return h('span', { class: 'chip', 'data-w': w }, w); }));
  function paint() {
    var used = {}; exWords.forEach(function (w) { used[w] = (used[w] || 0) + 1; });
    Object.keys(ctx.st.answers).forEach(function (k) { if (k.indexOf(task.id + '.') === 0) { var v = ctx.st.answers[k]; if (v) used[v] = (used[v] || 0) + 1; } });
    Array.prototype.forEach.call(box.children, function (c) { c.classList.toggle('used', !!used[c.getAttribute('data-w')]); });
  }
  ctx.onGap = paint; paint();
  var head = [h('div', { class: 'muted small' }, 'Ramka (jeden wyraz jest zbędny):'), box];
  var passage = inlinePassage(task.passage || '', function (id) {
    var b = blanks[id]; if (!b) return null;
    if (b.example) return exSpan(b.answer);
    return gapSelect(ctx, ctx.U[K(task, id)], task.wordBox || []);
  });
  var extra = null;
  if (ctx.checked && (task.distractors || []).length) extra = h('div', { class: 'muted small' }, 'Wyraz zbędny: ' + task.distractors.join(', '));
  return [head, passage, extra];
}
function bodyClozeForm(ctx) {
  var task = ctx.task, blanks = {}; (task.blanks || []).forEach(function (b) { blanks[String(b.id)] = b; });
  return inlinePassage(task.passage || '', function (id) {
    var b = blanks[id]; if (!b) return null;
    if (b.example) return exSpan(b.answer, b.given);
    var u = ctx.U[K(task, id)];
    return h('span', { class: 'gapwrap' }, textInput(ctx, u), b.given ? h('small', { class: 'given' }, ' (' + b.given + ') ') : null,
      ctx.checked ? fbNode(ctx, u, ctx.R[u.key], true) : null);
  });
}

function bodyQuestion(ctx) {
  var task = ctx.task, out = [];
  if (task.example) out.push(exampleBox(ctx));
  (task.items || []).forEach(function (it) {
    var u = ctx.U[K(task, it.id != null ? it.id : it.number)], res = ctx.R[u.key];
    var box = h('div', { class: 'item' + resClass(res) });
    var s = it.sentence || '', i = it.underlined ? s.indexOf(it.underlined) : -1;
    box.append(h('div', { class: 'q' }, h('span', { class: 'num' }, it.number + '.'), ' ', i >= 0 ? [s.slice(0, i), h('u', null, it.underlined), s.slice(i + it.underlined.length)] : s));
    var line = h('div', { class: 'qline' });
    var parts = String(it.stem || '').split(/[.…]{3,}/);
    var inp = textInput(ctx, u, { size: 14 });
    if (parts.length > 1) { line.append('– ', parts[0], inp, parts.slice(1).join(' …')); } else line.append('– ', inp, ' ', it.stem || '');
    box.append(line);
    if (it.shortAnswer) box.append(h('div', { class: 'muted' }, '– ' + it.shortAnswer));
    if (ctx.checked) box.append(fbNode(ctx, u, res));
    out.push(box);
  });
  return out;
}

function bodyTransform(ctx) {
  var task = ctx.task, out = [];
  if (task.note) out.push(h('div', { class: 'muted small' }, task.note));
  if (task.example) out.push(exampleBox(ctx));
  (task.items || []).forEach(function (it) {
    var u = ctx.U[K(task, it.id != null ? it.id : it.number)], res = ctx.R[u.key];
    var box = h('div', { class: 'item' + resClass(res) });
    box.append(h('div', { class: 'q' }, h('span', { class: 'num' }, it.number + '.'), ' ', it.source, it.hint ? h('span', { class: 'hint' }, it.hint) : null));
    var ta = h('textarea', { rows: 2, class: 'free', disabled: ctx.checked, value: ctx.st.answers[u.key] || '', spellcheck: false, 'aria-label': 'przekształcenie ' + it.number });
    ta.addEventListener('input', function () { setAns(u.key, ta.value); });
    box.append(ta);
    if (ctx.checked) {
      box.append(fbNode(ctx, u, res));
      if (res.status !== 'blank') box.append(h('div', { class: 'rubric small' }, it.rubric ? 'Kryteria: ' + it.rubric : null, (it.accept && it.accept.length) ? h('div', null, 'Inne uznane: ' + it.accept.join(' / ')) : null));
    }
    out.push(box);
  });
  return out;
}

function countWords(t) { return (String(t || '').match(/\S+/g) || []).filter(function (w) { return /[\p{L}\p{N}]/u.test(w); }).length; }
function bodyWriting(ctx) {
  var task = ctx.task, st = ctx.st, out = [];
  var sid = writingSet(task, st);
  if (task.instruction) { /* shown in header */ }
  var sets = h('div', { class: 'setpick', role: 'tablist' }, h('span', { class: 'lbl' }, 'Zestaw:'), (task.sets || []).map(function (s) {
    return h('button', { type: 'button', class: s.id === sid ? 'on' : '', disabled: ctx.checked, onclick: function () { st.answers['w.set'] = s.id; save(); rerenderTask(task.id); refreshChrome(); } }, s.id);
  }));
  out.push(sets);
  var set = (task.sets || []).filter(function (s) { return s.id === sid; })[0];
  var ratio = (task.wordCount && task.wordCount.warnBelowRatio) || 0.8;
  if (!set) return out;
  set.parts.forEach(function (p) {
    var u = ctx.U['w.' + sid + '.' + p.id], res = ctx.R[u.key];
    var box = h('div', { class: 'item writing' + resClass(res) });
    box.append(h('div', { class: 'q' }, h('b', null, p.id + ') '), p.genre ? h('em', null, p.genre + ' – ') : null, p.prompt));
    (p.images || (p.image ? [p.image] : [])).forEach(function (im) { box.append(imageFig(im)); });
    var ta = h('textarea', { rows: p.wordTarget > 80 ? 12 : 5, class: 'free', disabled: ctx.checked, value: st.answers[u.key] || '', 'aria-label': 'tekst ' + p.id, spellcheck: true, lang: 'pl' });
    var cnt = h('div', { class: 'wc' });
    function paint() {
      var n = countWords(ta.value), t = p.wordTarget;
      cnt.textContent = n + ' / ' + t + ' słów (' + (t ? Math.round(100 * n / t) : 0) + '%)';
      var low = t && n < ratio * t;
      cnt.className = 'wc' + (low ? ' warn' : ' ok');
      if (low) cnt.append(h('span', { class: 'small' }, ' – poniżej ' + Math.round(ratio * 100) + '% celu (konwencja aplikacji, nie oficjalna zasada)'));
    }
    ta.addEventListener('input', function () { setAns(u.key, ta.value); paint(); });
    box.append(ta, cnt); paint();
    if (ctx.checked) box.append(fbNode(ctx, u, res));
    out.push(box);
  });
  if (ctx.checked) out.push(h('div', { class: 'note-box' }, 'Praca nie jest oceniana automatycznie. Użyj „Eksport do oceny”, aby przekazać tekst Claude’owi; własną ocenę (0–15 p. za część) możesz wpisać powyżej.'));
  return out;
}

function renderBody(ctx) {
  switch (ctx.task.type) {
    case 'mc': return bodyMC(ctx, ctx.task.items || [], true);
    case 'tf': return bodyTF(ctx);
    case 'match': return bodyMatch(ctx);
    case 'gapMatch': return bodyGapMatch(ctx);
    case 'matchMulti': return bodyMatchMulti(ctx);
    case 'clozeChoice': return bodyClozeChoice(ctx);
    case 'clozeBox': return bodyClozeBox(ctx);
    case 'clozeForm': return bodyClozeForm(ctx);
    case 'question': return bodyQuestion(ctx);
    case 'transform': return bodyTransform(ctx);
    case 'writing': return bodyWriting(ctx);
    default: return h('pre', null, 'Nieznany typ zadania: ' + ctx.task.type);
  }
}

/* ------------------------------------------------------------- task card */
var cur = { id: null, exam: null, sectionId: null };

function renderTask(exam, sec, task) {
  var st = ses(exam.id), checked = !!st.checked[task.id];
  var units = unitsOf(task, st), U = {}, R = {};
  units.forEach(function (u) { U[u.key] = u; if (checked) R[u.key] = gradeUnit(task, u, st); });
  var ctx = { exam: exam, sec: sec, task: task, st: st, checked: checked, units: units, U: U, R: R };
  var el = h('article', { class: 'task' + (checked ? ' checked' : ''), id: 'task-' + task.id });
  var meta = h('div', { class: 'task-meta' });
  var max = taskMax(task, units);
  if (task.pointsFormula) meta.append(h('span', { class: 'badge' }, task.pointsFormula));
  meta.append(h('span', { class: 'badge' }, 'max ' + fmt(max) + ' p.'));
  if (task.grading === 'review') meta.append(h('span', { class: 'badge warn' }, 'ocena: ' + REVIEW_TAG));
  if (task.grading === 'auto+review') meta.append(h('span', { class: 'badge warn' }, 'auto + możliwa ocena Claude'));
  el.append(h('header', null, h('h3', null, task.instruction || ('Zadanie ' + (task.number || task.id))), meta));
  if (task.prompt) el.append(h('p', { class: 'prompt' }, task.prompt));
  if (task.title && task.type !== 'writing') el.append(h('h4', { class: 'heading' }, task.title));
  if (task.source) el.append(h('div', { class: 'source' }, task.source));
  add(el, [audioControls(task)]);
  if (task.images && task.images.length) el.append(h('div', { class: 'figs' }, task.images.map(imageFig)));
  if (task.type !== 'matchMulti' && task.type !== 'mc' && task.type !== 'tf' && task.type !== 'question' && task.type !== 'transform' && task.type !== 'match') add(el, [exampleBox(ctx)]);
  el.append(h('div', { class: 'body' }, renderBody(ctx)));
  // footer
  var foot = h('footer', { class: 'task-foot' });
  if (!checked) foot.append(h('button', { type: 'button', class: 'primary', onclick: function () { st.checked[task.id] = true; save(); rerenderTask(task.id); refreshChrome(); } }, 'Sprawdź'));
  else {
    var pts = 0, pend = 0;
    units.forEach(function (u) { pts += R[u.key].pts; if (isPending(R[u.key])) pend++; });
    foot.append(h('button', { type: 'button', onclick: function () { delete st.checked[task.id]; save(); rerenderTask(task.id); refreshChrome(); } }, 'Popraw'));
    foot.append(h('span', { class: 'score' }, 'Wynik: ', h('b', null, fmt(pts) + ' / ' + fmt(max) + ' p.')));
    if (pend) foot.append(h('span', { class: 'tag' }, pend + ' × ' + REVIEW_TAG));
  }
  el.append(foot);
  if (checked && task.transcript) el.append(h('details', { class: 'transcript-d', open: true }, h('summary', null, 'Transkrypcja'), transcriptNode(task.transcript)));
  return el;
}
function rerenderTask(taskId) {
  var old = document.getElementById('task-' + taskId); if (!old) return;
  var found;
  cur.exam.sections.forEach(function (s) { s.tasks.forEach(function (t) { if (t.id === taskId) found = [s, t]; }); });
  if (!found) return;
  old.replaceWith(renderTask(cur.exam, found[0], found[1]));
}

/* --------------------------------------------------------------- session */
var dom = {};
function showHomeTitle(t) { $('#topbar-title').textContent = t || ''; }

function sectionBadge(exam, sec) {
  var s = secStats(exam, sec);
  var txt = s.answered + '/' + s.total;
  var cls = 'tab-badge' + (s.checkedTasks === s.tasks && s.tasks ? ' done' : '');
  var span = h('span', { class: cls }, txt);
  if (s.checkedTasks) span.textContent = fmt(s.pts) + '/' + fmt(s.max);
  return span;
}
function buildTabs(exam) {
  var nav = h('nav', { class: 'tabs', role: 'tablist' });
  exam.sections.forEach(function (sec) {
    nav.append(h('a', { href: '#/s/' + encodeURIComponent(exam.id) + '/' + sec.id, class: 'tab' + (cur.sectionId === sec.id ? ' on' : ''), role: 'tab' }, SECTION_SHORT[sec.id] || sec.title, ' ', sectionBadge(exam, sec)));
  });
  nav.append(h('a', { href: '#/s/' + encodeURIComponent(exam.id) + '/results', class: 'tab' + (cur.sectionId === 'results' ? ' on' : ''), role: 'tab' }, 'Wyniki'));
  return nav;
}
function buildStatsBar(exam) {
  var t = examStats(exam);
  return h('div', { class: 'statsbar' },
    h('span', null, 'Odpowiedzi: ', h('b', null, t.answered + '/' + t.total)),
    h('span', null, 'Sprawdzone zadania: ', h('b', null, t.checkedTasks + '/' + t.tasks)),
    h('span', null, 'Punkty: ', h('b', null, fmt(t.pts) + ' / ' + fmt(t.max) + ' (' + pct(t.pts, t.max) + ')')),
    t.pending ? h('span', { class: 'tag' }, t.pending + ' × ' + REVIEW_TAG) : null);
}
function refreshChrome() {
  if (!cur.exam) return;
  if (dom.tabs) { var n = buildTabs(cur.exam); dom.tabs.replaceWith(n); dom.tabs = n; }
  if (dom.stats) { var s = buildStatsBar(cur.exam); dom.stats.replaceWith(s); dom.stats = s; }
}

function renderSession(exam, sectionId) {
  cur.exam = exam; cur.id = exam.id;
  if (!sectionId || (sectionId !== 'results' && !exam.sections.some(function (s) { return s.id === sectionId; }))) {
    var last = S.last && S.last.examId === exam.id ? S.last.sectionId : null;
    sectionId = (last && (last === 'results' || exam.sections.some(function (s) { return s.id === last; }))) ? last : (exam.sections[0] && exam.sections[0].id);
    history.replaceState(null, '', '#/s/' + encodeURIComponent(exam.id) + '/' + sectionId);
  }
  cur.sectionId = sectionId;
  S.last = { examId: exam.id, sectionId: sectionId }; save();
  setupAudioFor(exam);
  showHomeTitle(examLabel(exam.id, exam));
  var app = $('#app'); app.textContent = '';
  var head = h('div', { class: 'sess-head' },
    h('h1', null, 'Sesja: ' + examLabel(exam.id, exam)),
    h('div', { class: 'sess-actions' },
      h('button', { type: 'button', onclick: function () { exportReview(exam); } }, 'Eksport do oceny (JSON)'),
      h('button', { type: 'button', class: 'danger', onclick: function () { resetSession(exam); } }, 'Resetuj sesję')));
  dom.stats = buildStatsBar(exam); dom.tabs = buildTabs(exam);
  app.append(head, dom.stats, dom.tabs);
  var content = h('div', { class: 'content' });
  app.append(content);
  if (sectionId === 'results') content.append(renderResults(exam));
  else {
    var sec = exam.sections.filter(function (s) { return s.id === sectionId; })[0];
    content.append(renderSection(exam, sec));
  }
  window.scrollTo(0, 0);
}

function renderSection(exam, sec) {
  var st = ses(exam.id);
  var wrap = h('div', { class: 'section' });
  var bar = h('div', { class: 'secbar' },
    h('h2', null, sec.title || SECTION_SHORT[sec.id]),
    h('span', { class: 'muted' }, 'max ' + fmt(sec.maxPoints) + ' p.' + (sec.timeMinutes ? ' · ' + sec.timeMinutes + ' min' : '')),
    timerWidget(exam, sec),
    h('span', { class: 'spacer' }),
    h('button', { type: 'button', class: 'primary', onclick: function () {
      sec.tasks.forEach(function (t) { st.checked[t.id] = true; }); save(); renderSession(exam, sec.id);
    } }, 'Sprawdź sekcję'),
    h('button', { type: 'button', onclick: function () {
      sec.tasks.forEach(function (t) { delete st.checked[t.id]; }); save(); renderSession(exam, sec.id);
    } }, 'Popraw wszystko'));
  wrap.append(bar);
  if (sec.id === 'listening') wrap.append(h('p', { class: 'muted small' }, 'Nagranie: użyj przycisków ▶ przy zadaniach (powtarzanie bez limitu w trybie ćwiczeń) lub „Tryb egzaminu” na dolnym pasku. Transkrypcje pojawią się po sprawdzeniu.'));
  sec.tasks.forEach(function (t) { wrap.append(renderTask(exam, sec, t)); });
  if (!sec.tasks.length) wrap.append(h('p', { class: 'muted' }, 'Brak zadań w tej sekcji.'));
  return wrap;
}

function renderResults(exam) {
  var wrap = h('div', { class: 'section results' }, h('h2', null, 'Wyniki sesji'));
  var rows = [];
  var tot = { answered: 0, total: 0, pts: 0, max: 0, pending: 0, checkedTasks: 0, tasks: 0 };
  exam.sections.forEach(function (sec) {
    var s = secStats(exam, sec);
    Object.keys(tot).forEach(function (k) { tot[k] += s[k]; });
    rows.push(h('tr', null, h('td', null, SECTION_SHORT[sec.id] || sec.title), h('td', null, s.answered + '/' + s.total), h('td', null, s.checkedTasks + '/' + s.tasks),
      h('td', { class: 'num' }, fmt(s.pts)), h('td', { class: 'num' }, fmt(s.max)), h('td', { class: 'num' }, pct(s.pts, s.max)), h('td', null, s.pending ? h('span', { class: 'tag' }, s.pending + '×') : '')));
  });
  rows.push(h('tr', { class: 'total' }, h('td', null, 'Razem'), h('td', null, tot.answered + '/' + tot.total), h('td', null, tot.checkedTasks + '/' + tot.tasks),
    h('td', { class: 'num' }, fmt(tot.pts)), h('td', { class: 'num' }, fmt(tot.max)), h('td', { class: 'num' }, pct(tot.pts, tot.max)), h('td', null, tot.pending ? h('span', { class: 'tag' }, tot.pending + '×') : '')));
  wrap.append(h('div', { class: 'tablewrap' }, h('table', null,
    h('thead', null, h('tr', null, ['Sekcja', 'Odpowiedzi', 'Sprawdzone', 'Punkty', 'Max', '%', 'Do oceny'].map(function (x) { return h('th', null, x); }))),
    h('tbody', null, rows))));
  wrap.append(h('p', { class: 'muted small' }, 'Punkty liczą tylko zadania, które zostały sprawdzone („Sprawdź”). Zadania oceniane przez Claude liczą się dopiero po wpisaniu „mojej oceny” lub dopasowaniu do wzoru. Próg zaliczenia nie jest podany w materiałach źródłowych – aplikacja go nie zakłada.'));
  var det = h('details', null, h('summary', null, 'Szczegóły zadań'));
  var rr = [];
  exam.sections.forEach(function (sec) {
    sec.tasks.forEach(function (t) {
      var st = ses(exam.id), units = unitsOf(t, st), chk = !!st.checked[t.id], p = 0;
      if (chk) units.forEach(function (u) { p += gradeUnit(t, u, st).pts; });
      rr.push(h('tr', null, h('td', null, t.id), h('td', null, t.type), h('td', null, chk ? 'tak' : 'nie'), h('td', { class: 'num' }, chk ? fmt(p) : '–'), h('td', { class: 'num' }, fmt(taskMax(t, units)))));
    });
  });
  det.append(h('div', { class: 'tablewrap' }, h('table', null, h('thead', null, h('tr', null, ['Zadanie', 'Typ', 'Sprawdzone', 'Punkty', 'Max'].map(function (x) { return h('th', null, x); }))), h('tbody', null, rr))));
  wrap.append(det);
  return wrap;
}

function resetSession(exam) {
  if (!confirm('Usunąć wszystkie odpowiedzi i wyniki sesji „' + examLabel(exam.id, exam) + '”? Tej operacji nie można cofnąć (zrób kopię, jeśli chcesz).')) return;
  Object.keys(timerRun).forEach(function (k) { if (k.indexOf(exam.id + '|') === 0) delete timerRun[k]; });
  delete S.sessions[exam.id]; save();
  renderSession(exam, cur.sectionId);
  toast('Sesja zresetowana.');
}

/* ---------------------------------------------------------------- export */
function download(name, obj) {
  var blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
  var a = h('a', { href: URL.createObjectURL(blob), download: name });
  document.body.appendChild(a); a.click();
  setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
}
function dateStamp() { return new Date().toISOString().slice(0, 16).replace(/[-:T]/g, '').replace(/^(\d{8})/, '$1-'); }

function buildReview(exam) {
  var st = ses(exam.id), out = { exam: exam.id, task: 'w', set: null, language: 'pl', level: (exam.meta && exam.meta.level) || 'B1', parts: [] };
  var w;
  exam.sections.forEach(function (sec) { sec.tasks.forEach(function (t) { if (t.type === 'writing') w = t; }); });
  if (w) {
    var sid = writingSet(w, st); out.set = sid;
    var set = (w.sets || []).filter(function (s) { return s.id === sid; })[0];
    if (set) out.parts = set.parts.map(function (p) {
      var text = st.answers['w.' + sid + '.' + p.id] || '';
      var o = { id: p.id, genre: p.genre, prompt: p.prompt, wordTarget: p.wordTarget, wordCount: countWords(text), text: text };
      if (p.startsWith) o.startsWith = p.startsWith;
      if (p.title) o.title = p.title;
      var ss = st.selfScores['w.' + sid + '.' + p.id]; if (ss != null) o.selfScore = ss;
      return o;
    });
    out.rubric = w.rubric || null;
    out.instructionsForReviewer = WRITING_INSTRUCTIONS;
  }
  // extensions (top level above is exactly schema §5.8)
  out.exportedAt = new Date().toISOString();
  out.app = 'polski-b1-practice';
  out.grammarReview = [];   // review / auto+review graded items (any section)
  out.autoGraded = [];      // everything auto-graded, with verdicts
  out.summary = { sections: [] };
  exam.sections.forEach(function (sec) {
    var s = secStats(exam, sec);
    out.summary.sections.push({ id: sec.id, answered: s.answered, total: s.total, checkedTasks: s.checkedTasks, points: s.pts, max: s.max });
    sec.tasks.forEach(function (task) {
      if (task.type === 'writing') return;
      var units = unitsOf(task, st), checked = !!st.checked[task.id];
      units.forEach(function (u) {
        var res = gradeUnit(task, u, st), ref = u.ref || {};
        var user = st.answers[u.key];
        var base = { task: task.id, item: u.key, type: task.type, userAnswer: isBlank(user) ? null : user, modelAnswer: u.answer != null ? u.answer : null, checked: checked };
        var rev = u.mode === 'review' || u.mode === 'auto+review';
        if (rev && !isBlank(user)) {
          var r = Object.assign({ kind: 'grammarReview', section: sec.id, grading: u.mode }, base, {
            source: ref.source || ref.sentence || null, hint: ref.hint || ref.given || null,
            acceptedAlternatives: u.accept || [], rubric: ref.rubric || null, rubricParts: ref.rubricParts || null,
            autoVerdict: res.status, autoPoints: res.pts, max: u.max, overriddenAsCorrect: !!st.overrides[u.key], selfScore: st.selfScores[u.key] != null ? st.selfScores[u.key] : null
          });
          out.grammarReview.push(r);
        }
        if (u.mode !== 'review') out.autoGraded.push(Object.assign({}, base, { section: sec.id, status: checked ? res.status : 'unchecked', points: checked ? res.pts : null, max: u.max }));
      });
    });
  });
  return out;
}
function exportReview(exam) {
  var o = buildReview(exam);
  download('polski-' + exam.id + '-do-oceny-' + dateStamp() + '.json', o);
  toast('Pobrano plik do oceny.');
}
function exportBackup() {
  download('polski-postep-' + dateStamp() + '.json', { app: 'polski-b1-practice', kind: 'backup', version: 1, exportedAt: new Date().toISOString(), state: S });
  toast('Pobrano kopię postępu.');
}
function importBackup(file) {
  var fr = new FileReader();
  fr.onload = function () {
    try {
      var j = JSON.parse(fr.result), st = j && j.kind === 'backup' ? j.state : null;
      if (!st || !st.sessions) throw new Error('To nie jest plik kopii postępu.');
      if (!confirm('Zastąpić cały obecny postęp zawartością kopii (' + Object.keys(st.sessions).length + ' sesji)?')) return;
      S = st; S.settings = Object.assign({ lenient: false, timer: false }, S.settings); save(); syncSettingsUI(); toast('Zaimportowano kopię.'); route();
    } catch (e) { alert('Import nie powiódł się: ' + e.message); }
  };
  fr.readAsText(file);
}

/* ------------------------------------------------------------------ home */
function showHome() {
  stopAudio(); $('#player').hidden = true; cur = { id: null, exam: null, sectionId: null };
  showHomeTitle('');
  var app = $('#app'); app.textContent = '';
  var index = examIndex();
  app.append(h('h1', null, 'Egzamin certyfikatowy – język polski B1'));
  if (S.last && S.last.examId) {
    var li = index.filter(function (e) { return e.id === S.last.examId; })[0];
    if (li || S.sessions[S.last.examId]) app.append(h('a', { class: 'resume', href: '#/s/' + encodeURIComponent(S.last.examId) + '/' + (S.last.sectionId || '') },
      '↩ Kontynuuj: ', h('b', null, (li && li.label) || S.last.examId), ' · ', SECTION_SHORT[S.last.sectionId] || (S.last.sectionId === 'results' ? 'Wyniki' : '')));
  }
  if (!index.length) app.append(h('p', { class: 'muted' }, 'Brak sesji w data/manifest.js. Możesz otworzyć sesję ręcznie: #/s/<id>.'));
  var grid = h('div', { class: 'cards' });
  app.append(grid);
  index.forEach(function (e) {
    var card = h('a', { class: 'card', href: '#/s/' + encodeURIComponent(e.id) }, h('h3', null, e.label || e.id), h('div', { class: 'muted small' }, e.id), h('div', { class: 'badges' }, h('span', { class: 'muted small' }, 'ładowanie…')));
    grid.append(card);
    loadExam(e.id).then(function (exam) {
      var b = $('.badges', card); b.textContent = '';
      var t = examStats(exam);
      exam.sections.forEach(function (sec) {
        var s = secStats(exam, sec);
        var txt = s.checkedTasks ? fmt(s.pts) + '/' + fmt(s.max) + ' (' + pct(s.pts, s.max) + ')' : (s.answered ? s.answered + '/' + s.total + ' odp.' : '–');
        b.append(h('span', { class: 'chip-s' + (s.checkedTasks === s.tasks && s.tasks ? ' done' : s.answered ? ' prog' : '') }, SECTION_SHORT[sec.id] || sec.title, ': ', h('b', null, txt)));
      });
      var bar = h('div', { class: 'bar' }, h('i', { style: 'width:' + (t.total ? Math.round(100 * t.answered / t.total) : 0) + '%' }));
      card.append(bar, h('div', { class: 'small' }, t.checkedTasks ? 'Razem: ' + fmt(t.pts) + ' / ' + fmt(t.max) + ' p. (' + pct(t.pts, t.max) + ')' : 'Odpowiedzi: ' + t.answered + '/' + t.total));
    }, function (err) { $('.badges', card).textContent = err.message; });
  });
}

/* ---------------------------------------------------------------- routing */
var routeSeq = 0;
function route() {
  var seq = ++routeSeq;
  if (/^#\/selftest/.test(location.hash)) return showSelfTest();
  var m = location.hash.match(/^#\/s\/([^/]+)(?:\/([^/]+))?/);
  if (!m) return showHome();
  var id = decodeURIComponent(m[1]), sec = m[2];
  if (cur.exam && cur.id === id && cur.sectionId === sec && $('#app .sess-head')) { /* same view, re-render */ }
  var app = $('#app'); app.textContent = ''; app.append(h('p', { class: 'muted' }, 'Ładowanie sesji ' + id + '…'));
  loadExam(id).then(function (exam) { if (seq === routeSeq) renderSession(exam, sec); },
    function (err) { if (seq === routeSeq) { app.textContent = ''; app.append(h('p', { class: 'error' }, err.message), h('a', { href: '#/' }, '← Wróć do listy')); } });
}

function syncSettingsUI() {
  $('#opt-lenient').checked = !!S.settings.lenient;
  $('#opt-timer').checked = !!S.settings.timer;
}
function init() {
  loadState(); initPlayer(); syncSettingsUI();
  $('#opt-lenient').addEventListener('change', function (e) { S.settings.lenient = e.target.checked; save(); if (cur.exam) renderSession(cur.exam, cur.sectionId); });
  $('#opt-timer').addEventListener('change', function (e) { S.settings.timer = e.target.checked; save(); if (cur.exam) renderSession(cur.exam, cur.sectionId); });
  $('#btn-backup').addEventListener('click', exportBackup);
  $('#btn-import').addEventListener('click', function () { $('#file-import').click(); });
  $('#file-import').addEventListener('change', function (e) { if (e.target.files[0]) importBackup(e.target.files[0]); e.target.value = ''; });
  window.addEventListener('hashchange', route);
  window.addEventListener('beforeunload', function () { Object.keys(timerRun).forEach(function (k) { var p = k.split('|'); timerCommit(p[0], p[1]); }); });
  route();
}
/* -------------------------------------------------------------- self-test */
// Fills every auto-gradable unit with the data's own answer in a scratch state (S swapped, save() disabled,
// localStorage verified unchanged), "presses Sprawdź" (st.checked[task.id] = true) and reads the totals through
// the app's own secStats()/gradeUnit(). Then one deliberately wrong answer per section must lose points.
function withScratch(fn) {
  var realS = S, realCur = cur, rawBefore = null, wasScratch = scratch;
  try { rawBefore = localStorage.getItem(LS_KEY); } catch (e) {}
  S = { sessions: {}, settings: { lenient: false, timer: false } }; scratch = true;
  cur = { id: null, exam: null, sectionId: null };
  try { return fn(); }
  finally {
    S = realS; scratch = wasScratch; cur = realCur;
    var rawAfter = null; try { rawAfter = localStorage.getItem(LS_KEY); } catch (e) {}
    if (rawAfter !== rawBefore) { try { if (rawBefore == null) localStorage.removeItem(LS_KEY); else localStorage.setItem(LS_KEY, rawBefore); } catch (e) {} console.error('selfTest: localStorage changed – restored'); }
  }
}
function wrongFor(u) { return u.kind === 'set' ? ['__zzz__'] : '__zzz__'; }
function selfTestExam(exam) {
  return withScratch(function () {
    var st = ses(exam.id), res = { id: exam.id, sections: {}, issues: [], negatives: [] };
    exam.sections.forEach(function (sec) {
      var sr = { points: 0, max: 0, autoMax: 0, reviewOnlyMax: 0, units: 0, autoUnits: 0, reviewUnits: 0 };
      sec.tasks.forEach(function (task) {
        unitsOf(task, st).forEach(function (u) {
          sr.units++;
          if (u.mode === 'review' || u.kind === 'writing') { sr.reviewUnits++; sr.reviewOnlyMax += u.max; return; }
          if (u.answer == null || isBlank(u.answer)) { res.issues.push({ unit: u.key, why: 'no answer key in data (cannot fill)', max: u.max }); return; }
          sr.autoUnits++; sr.autoMax += u.max;
          st.answers[u.key] = u.kind === 'set' ? u.answer.slice() : String(u.answer);
        });
        st.checked[task.id] = true; // = the "Sprawdź" button
      });
      var s = secStats(exam, sec);
      sr.points = s.pts; sr.max = s.max; sr.pending = s.pending; sr.answered = s.answered; sr.total = s.total;
      sec.tasks.forEach(function (task) {
        unitsOf(task, st).forEach(function (u) {
          var r = gradeUnit(task, u, st);
          if (u.mode === 'review' || u.kind === 'writing') return;
          if (r.status === 'blank' || r.status === 'review') res.issues.push({ unit: u.key, why: 'left ungraded (' + r.status + ')', max: u.max, answer: u.answer });
          else if (r.pts < u.max) res.issues.push({ unit: u.key, why: 'not full credit (' + r.status + ' ' + r.pts + '/' + u.max + ')', answer: u.answer, accept: u.accept });
        });
      });
      sr.autoOk = Math.abs(sr.points - sr.autoMax) < 1e-9;
      res.sections[sec.id] = sr;
    });
    // negatives: one wrong answer per section (first auto unit) must lose exactly that unit's points
    exam.sections.forEach(function (sec) {
      var before = secStats(exam, sec).pts, done = null;
      sec.tasks.some(function (task) {
        return unitsOf(task, st).some(function (u) {
          if (u.mode === 'review' || u.kind === 'writing' || u.answer == null) return false;
          var old = st.answers[u.key]; st.answers[u.key] = wrongFor(u);
          var after = secStats(exam, sec).pts, lost = before - after;
          st.answers[u.key] = old;
          done = { section: sec.id, unit: u.key, lost: lost, expectedLost: u.max, ok: Math.abs(lost - u.max) < 1e-9 };
          return true;
        });
      });
      if (!done) done = { section: sec.id, unit: null, note: 'no auto-gradable unit', ok: true };
      res.negatives.push(done);
      if (!done.ok) res.issues.push({ unit: done.unit, why: 'negative test failed: wrong answer lost ' + done.lost + ' of ' + done.expectedLost });
    });
    res.ok = res.issues.length === 0 && res.negatives.every(function (n) { return n.ok; }) && Object.keys(res.sections).every(function (k) { return res.sections[k].autoOk; });
    return res;
  });
}
function selfTest(id) { return loadExam(id).then(selfTestExam); }
function selfTestAll() {
  var ids = examIndex().map(function (e) { return e.id; }), out = [];
  return ids.reduce(function (p, id) { return p.then(function () { return selfTest(id).then(function (r) { out.push(r); }, function (e) { out.push({ id: id, ok: false, error: e.message }); }); }); }, Promise.resolve()).then(function () { return out; });
}
// Render every section of a session (scratch state, all tasks checked so transcripts/results render) and report
// exceptions + <img> elements that failed to load.
function renderCheck(id) {
  return loadExam(id).then(function (exam) {
    var report = { id: id, sections: {}, errors: [], brokenImages: [], images: 0 }, pending = [];
    var saved = withScratch(function () {
      var st = ses(exam.id);
      var holder = document.createElement('div'); holder.style.cssText = 'position:absolute;left:-9999px;width:900px';
      document.body.appendChild(holder);
      exam.sections.concat([{ id: 'results' }]).forEach(function (sec) {
        try {
          if (sec.tasks) sec.tasks.forEach(function (t) { st.checked[t.id] = true; });
          var node = sec.id === 'results' ? renderResults(exam) : (cur.exam = exam, cur.id = exam.id, renderSection(exam, sec));
          holder.appendChild(node);
          var imgs = Array.prototype.slice.call(node.querySelectorAll('img'));
          report.sections[sec.id] = { tasks: node.querySelectorAll('article.task').length, images: imgs.length, textLen: node.textContent.length };
          imgs.forEach(function (im) { report.images++; im.loading = 'eager'; pending.push(new Promise(function (res) {
            function chk() { if (!im.naturalWidth) report.brokenImages.push(im.getAttribute('src')); res(); }
            if (im.complete) chk(); else { im.addEventListener('load', chk); im.addEventListener('error', chk); setTimeout(res, 8000); }
          })); });
        } catch (e) { report.errors.push(sec.id + ': ' + (e && e.stack || e)); }
      });
      return holder;
    });
    return Promise.all(pending).then(function () { saved.remove(); report.ok = !report.errors.length && !report.brokenImages.length; return report; });
  });
}
function renderCheckAll() {
  var out = [];
  return examIndex().reduce(function (p, e) { return p.then(function () { return renderCheck(e.id).then(function (r) { out.push(r); }, function (er) { out.push({ id: e.id, ok: false, errors: [er.message] }); }); }); }, Promise.resolve()).then(function () { return out; });
}
function showSelfTest() {
  stopAudio(); $('#player').hidden = true; cur = { id: null, exam: null, sectionId: null };
  showHomeTitle('selftest');
  var app = $('#app'); app.textContent = '';
  app.append(h('h1', null, 'Self-test'), h('p', { class: 'muted small' }, 'Scratch state – Twój postęp nie jest dotykany. Wypełnia poprawne odpowiedzi, uruchamia ten sam kod oceny co „Sprawdź”, sprawdza po jednej błędnej odpowiedzi na sekcję.'));
  var box = h('div', { class: 'tablewrap' }); app.append(box, h('div', { id: 'selftest-issues' }));
  box.append(h('p', { class: 'muted' }, 'Trwa test…'));
  selfTestAll().then(function (all) {
    var secs = ['listening', 'reading', 'grammar', 'writing'];
    var head = ['Sesja'].concat(secs.map(function (x) { return SECTION_SHORT[x]; }), ['Neg.', 'Status']);
    var rows = all.map(function (r) {
      if (r.error) return h('tr', null, h('td', null, r.id), h('td', { colspan: 5 }, r.error), h('td', null, 'FAIL'));
      var cells = secs.map(function (k) {
        var s = r.sections[k]; if (!s) return h('td', null, '–');
        return h('td', { class: 'num' }, fmt(s.points) + '/' + fmt(s.max) + (s.reviewOnlyMax ? ' (+' + fmt(s.reviewOnlyMax) + ' rev)' : ''));
      });
      var neg = r.negatives.every(function (n) { return n.ok; }) ? 'ok' : 'FAIL';
      return h('tr', null, h('td', null, r.id), cells, h('td', null, neg), h('td', null, r.ok ? 'OK' : 'FAIL (' + r.issues.length + ')'));
    });
    box.textContent = '';
    box.append(h('table', null, h('thead', null, h('tr', null, head.map(function (x) { return h('th', null, x); }))), h('tbody', null, rows)));
    var iss = []; all.forEach(function (r) { (r.issues || []).forEach(function (i) { iss.push(r.id + ' ' + i.unit + ': ' + i.why); }); });
    if (iss.length) $('#selftest-issues').append(h('h3', null, 'Problemy'), h('pre', null, iss.join('\n')));
    window.__polski.lastSelfTest = all;
  });
}

init();
window.__polski = { selfTest: selfTest, selfTestAll: selfTestAll, renderCheck: renderCheck, renderCheckAll: renderCheckAll,  get S() { return S; }, unitsOf: unitsOf, secStats: secStats, examStats: examStats, loadExam: loadExam, norm: norm, fold: fold, gradeUnit: gradeUnit, buildReview: buildReview, countWords: countWords, currentPhase: currentPhase };
})();
