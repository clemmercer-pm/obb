/* OBB - Translate & Learn. English sentence -> Cloudflare Worker (proxies
   Google Cloud Translation, keeps the API key server-side) -> Cantonese
   characters -> segmented via CC-Canto -> tappable words, same popover as
   Storytime. */

(function () {
  'use strict';

  const WORKER_URL = 'https://obb-translate.clem-mercer128.workers.dev';

  const el = {
    input: document.getElementById('translateInput'),
    btn: document.getElementById('translateBtn'),
    status: document.getElementById('translateStatus'),
    result: document.getElementById('translateResult'),
  };

  let resultAudioEl = null;
  let lastAudioBase64 = null;

  async function translateText(english) {
    const resp = await fetch(WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: english }),
    });
    const data = await resp.json();
    if (!resp.ok || data.error) throw new Error(data.error || 'Translation failed');
    return { translated: data.translated, audioBase64: data.audioBase64 || null };
  }

  async function handleTranslate() {
    const text = el.input.value.trim();
    if (!text) return;
    el.result.innerHTML = '';
    el.status.textContent = 'Translating…';
    el.btn.disabled = true;
    try {
      await window.CCCanto.load();
      const { translated, audioBase64 } = await translateText(text);
      lastAudioBase64 = audioBase64;
      renderResult(translated, audioBase64);
      el.status.textContent = '';
    } catch (err) {
      el.status.textContent = '⚠️ ' + err.message;
    } finally {
      el.btn.disabled = false;
    }
  }

  function renderResult(cantoneseText, audioBase64) {
    const words = window.CCCanto.segment(cantoneseText);
    const jyutpingLine = words.map((w) => w.jyutping || '?').join(' ');
    el.result.innerHTML = `
      <div class="passage-line">
        ${audioBase64 ? `<button type="button" id="translatePlayBtn" class="show-btn" style="margin-bottom:12px;">🔊 Play</button>` : ''}
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
    if (chip) {
      window.WordPopover.open(chip.dataset.text, chip.dataset.jyutping || null, chip.dataset.english || null);
      return;
    }
    if (e.target.closest('#translatePlayBtn') && lastAudioBase64) {
      if (!resultAudioEl) resultAudioEl = new Audio();
      resultAudioEl.src = 'data:audio/mpeg;base64,' + lastAudioBase64;
      resultAudioEl.play().catch(() => { el.status.textContent = '⚠️ Could not play audio'; });
    }
  });

  window.CCCanto.load();
})();
