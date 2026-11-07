/* OBB - Storytime: browse list -> full passage view -> tap a word to add it
   to the deck. POC scope: words are hand-segmented in storytime-data.js, not
   run through a general segmenter. "Add to my deck" files words into a flat
   "My words" category in localStorage - no room-tag auto-categorization yet,
   since that LLM piece is still explicitly parked (see SPEC.md). */

(function () {
  'use strict';

  const CUSTOM_STORE_KEY = 'obb-custom-cards-v1';

  function loadCustomCards() {
    try { return JSON.parse(localStorage.getItem(CUSTOM_STORE_KEY)) || []; }
    catch { return []; }
  }

  function saveCustomCards(cards) {
    localStorage.setItem(CUSTOM_STORE_KEY, JSON.stringify(cards));
  }

  // exposed for app.js to merge into its review queue
  window.OBB_customCards = loadCustomCards();

  const el = {
    list: document.getElementById('storytimeList'),
    passage: document.getElementById('storytimePassage'),
    passageTitle: document.getElementById('passageTitle'),
    passageLines: document.getElementById('passageLines'),
    backBtn: document.getElementById('backToList'),
    playPassage: document.getElementById('playPassage'),
    popover: document.getElementById('wordPopover'),
    popoverJyutping: document.getElementById('popoverJyutping'),
    popoverCharacters: document.getElementById('popoverCharacters'),
    popoverEnglish: document.getElementById('popoverEnglish'),
    closePopover: document.getElementById('closePopover'),
    addToDeckBtn: document.getElementById('addToDeckBtn'),
  };

  let currentWord = null;
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

  function openPopover(text, jyutping, english) {
    currentWord = { text, jyutping, english };
    el.popoverCharacters.textContent = text;
    el.popoverJyutping.textContent = jyutping;
    el.popoverEnglish.textContent = english;
    el.addToDeckBtn.textContent = '+ Add to my deck';
    el.addToDeckBtn.disabled = false;
    el.popover.hidden = false;
  }

  el.list.addEventListener('click', (e) => {
    const card = e.target.closest('.storytime-card');
    if (card) openPassage(card.dataset.id);
  });

  el.backBtn.addEventListener('click', closePassage);

  el.passageLines.addEventListener('click', (e) => {
    const chip = e.target.closest('.word-chip');
    if (!chip) return;
    openPopover(chip.dataset.text, chip.dataset.jyutping, chip.dataset.english);
  });

  el.closePopover.addEventListener('click', () => { el.popover.hidden = true; });

  el.addToDeckBtn.addEventListener('click', () => {
    if (!currentWord) return;
    const cards = loadCustomCards();
    const id = 'custom-' + currentWord.text;
    if (!cards.some((c) => c.id === id)) {
      cards.push({
        id,
        category: 'My words',
        english: currentWord.english,
        jyutping: currentWord.jyutping,
        characters: currentWord.text,
      });
      saveCustomCards(cards);
      window.OBB_customCards = cards;
    }
    el.addToDeckBtn.textContent = '✓ Added';
    el.addToDeckBtn.disabled = true;
  });

  renderList();
})();
