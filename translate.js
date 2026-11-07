/* OBB - Translate & Learn. English sentence -> (not yet wired up: Google
   Cloud Translation via a Cloudflare Worker, per SPEC.md) -> Cantonese
   characters -> segmented via CC-Canto -> tappable words, same popover as
   Storytime. The translation call itself is stubbed until Clem has a
   Google Cloud + Cloudflare account - everything downstream of that call
   (segmentation, word tap, add-to-deck) is real and tested now. */

(function () {
  'use strict';

  const el = {
    input: document.getElementById('translateInput'),
    btn: document.getElementById('translateBtn'),
    status: document.getElementById('translateStatus'),
    result: document.getElementById('translateResult'),
  };

  // Stub - replace with a real call to the Cloudflare Worker once Clem has
  // a Google Cloud Translation key + Cloudflare account set up (see SPEC.md
  // "Translate & Learn" architecture note).
  async function translateText(english) {
    throw new Error('Not connected yet - needs the Google Translate + Cloudflare Worker setup (see SPEC.md).');
  }

  async function handleTranslate() {
    const text = el.input.value.trim();
    if (!text) return;
    el.result.innerHTML = '';
    el.status.textContent = 'Translating…';
    el.btn.disabled = true;
    try {
      await window.CCCanto.load();
      const cantonese = await translateText(text);
      renderResult(cantonese);
      el.status.textContent = '';
    } catch (err) {
      el.status.textContent = '⚠️ ' + err.message;
    } finally {
      el.btn.disabled = false;
    }
  }

  function renderResult(cantoneseText) {
    const words = window.CCCanto.segment(cantoneseText);
    const jyutpingLine = words.map((w) => w.jyutping || '?').join(' ');
    el.result.innerHTML = `
      <div class="passage-line">
        <div class="line-words">
          ${words.map((w) => `<button type="button" class="word-chip" data-jyutping="${w.jyutping || ''}" data-english="${w.english || ''}" data-text="${w.text}">${w.text}</button>`).join('')}
        </div>
        <div class="line-jyutping">${jyutpingLine}</div>
      </div>
    `;
  }

  el.btn.addEventListener('click', handleTranslate);
  el.input.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleTranslate(); });

  el.result.addEventListener('click', (e) => {
    const chip = e.target.closest('.word-chip');
    if (!chip) return;
    window.WordPopover.open(chip.dataset.text, chip.dataset.jyutping || null, chip.dataset.english || null);
  });

  window.CCCanto.load();
})();
