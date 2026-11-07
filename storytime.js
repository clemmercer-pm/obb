/* OBB - Storytime: browse list -> full passage view -> tap a word to add it
   to the deck. POC scope: words are hand-segmented in storytime-data.js, not
   run through the general CC-Canto segmenter (that's Translate & Learn's
   job, see translate.js). Tap-a-word uses the shared WordPopover module. */

(function () {
  'use strict';

  const el = {
    list: document.getElementById('storytimeList'),
    passage: document.getElementById('storytimePassage'),
    passageTitle: document.getElementById('passageTitle'),
    passageLines: document.getElementById('passageLines'),
    backBtn: document.getElementById('backToList'),
    playPassage: document.getElementById('playPassage'),
  };

  let passageAudio = null;

  function renderList() {
    el.list.innerHTML = STORYTIME_ITEMS.map((item) => `
      <button type="button" class="storytime-card" data-id="${item.id}">
        <span class="storytime-type">${item.type === 'rhyme' ? 'Rhyme' : 'Story'}</span>
        <span class="storytime-title">${item.title}</span>
      </button>
    `).join('');
  }

  function openPassage(id) {
    const item = STORYTIME_ITEMS.find((i) => i.id === id);
    if (!item) return;
    el.list.hidden = true;
    el.passage.hidden = false;
    el.passageTitle.textContent = item.title;

    el.passageLines.innerHTML = item.lines.map((line) => `
      <div class="passage-line">
        <div class="line-words">
          ${line.words.map((w) => `<button type="button" class="word-chip" data-jyutping="${w.jyutping}" data-english="${w.english}" data-text="${w.text}">${w.text}</button>`).join('')}
        </div>
        <div class="line-jyutping">${line.jyutping}</div>
        <div class="line-english">${line.english}</div>
      </div>
    `).join('');

    el.playPassage.onclick = () => {
      if (!passageAudio) passageAudio = new Audio();
      passageAudio.src = item.audio;
      passageAudio.play().catch(() => { el.playPassage.textContent = '⚠️ Could not play audio'; });
    };
  }

  function closePassage() {
    el.passage.hidden = true;
    el.list.hidden = false;
  }

  el.list.addEventListener('click', (e) => {
    const card = e.target.closest('.storytime-card');
    if (card) openPassage(card.dataset.id);
  });

  el.backBtn.addEventListener('click', closePassage);

  el.passageLines.addEventListener('click', (e) => {
    const chip = e.target.closest('.word-chip');
    if (!chip) return;
    window.WordPopover.open(chip.dataset.text, chip.dataset.jyutping, chip.dataset.english);
  });

  renderList();
})();
