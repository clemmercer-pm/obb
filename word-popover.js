/* OBB - shared word popover: tap a word anywhere (Storytime, Translate &
   Learn) to see jyutping/characters/English and add it to "My words". */

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

  window.OBB_customCards = loadCustomCards();

  const el = {
    popover: document.getElementById('wordPopover'),
    jyutping: document.getElementById('popoverJyutping'),
    characters: document.getElementById('popoverCharacters'),
    english: document.getElementById('popoverEnglish'),
    close: document.getElementById('closePopover'),
    addBtn: document.getElementById('addToDeckBtn'),
  };

  let current = null;

  function open(text, jyutping, english) {
    current = { text, jyutping, english };
    el.characters.textContent = text;
    el.jyutping.textContent = jyutping || '(not in dictionary yet)';
    el.english.textContent = english || '';
    el.addBtn.textContent = '+ Add to my deck';
    el.addBtn.disabled = !jyutping; // can't usefully add a word with no jyutping/gloss
    el.popover.hidden = false;
  }

  function close() {
    el.popover.hidden = true;
  }

  el.close.addEventListener('click', close);

  el.addBtn.addEventListener('click', () => {
    if (!current || !current.jyutping) return;
    const cards = loadCustomCards();
    const id = 'custom-' + current.text;
    if (!cards.some((c) => c.id === id)) {
      cards.push({
        id,
        category: 'My words',
        english: current.english,
        jyutping: current.jyutping,
        characters: current.text,
      });
      saveCustomCards(cards);
      window.OBB_customCards = cards;
    }
    el.addBtn.textContent = '✓ Added';
    el.addBtn.disabled = true;
  });

  window.WordPopover = { open, close };
})();
