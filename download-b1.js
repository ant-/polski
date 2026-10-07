// Paste into DevTools console (Cmd+Opt+J) on
// https://certyfikatpolski.pl/o-egzaminie/testy-egzaminacyjne-z-poprzednich-lat/
// Downloads all adult B1 files (15 sessions: arkusz PDF, mp3, transkrypcja) to ~/Downloads.
// Chrome will ask once to "allow multiple downloads" — click Allow.
(async () => {
  const links = [...document.querySelectorAll('.et_pb_toggle')]
    .filter(t => t.querySelector('h5').textContent.trim() === 'Poziom B1')
    .flatMap(t => [...t.querySelectorAll('a')].map(a => a.href));
  console.log(`Downloading ${links.length} files…`);
  for (const href of links) {
    const a = document.createElement('a');
    a.href = href; a.download = '';
    document.body.appendChild(a); a.click(); a.remove();
    await new Promise(r => setTimeout(r, 1500));
  }
  console.log('Done — wait for Chrome to finish the mp3s (~900 MB total).');
})();
