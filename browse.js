/* OBB - Browse mode: category list -> full card list (jyutping + characters
   + English + audio all shown at once, no reveal-gating - this is a
   reference lookup, not a recall quiz, so there's nothing to hide). */

(function () {
  'use strict';

  const CATEGORY_ORDER = [
    'Household',
    'Baby fundamentals',
    'Family',
    'Days out with grandma',
    'Going into town',
    'Dim sum / food',
    'My words',
  ];

  const el = {
    list: document.getElementById('categoryList'),
    detail: document.getElementById('categoryDetail'),
    detailTitle: document.getElementById('categoryDetailTitle'),
    cards: document.getElementById('categoryCards'),
    backBtn: document.getElementById('backToCategories'),
  };

  let audioEl = null;

  function allCards() {
    return CARDS.concat(window.OBB_customCards || []);
  }

  function groupByCategory() {
    const groups = {};
    allCards().forEach((c) => {
      (groups[c.category] = groups[c.category] || []).push(c);
    });
    return groups;
  }

  function orderedCategories(groups) {
    const known = CATEGORY_ORDER.filter((name) => groups[name] && groups[name].length);
    const extra = Object.keys(groups).filter((name) => !CATEGORY_ORDER.includes(name) && groups[name].length);
    return known.concat(extra);
  }

  function renderList() {
    const groups = groupByCategory();
    const names = orderedCategories(groups);
    el.list.innerHTML = names.map((name) => `
      <button type="button" class="category-tile" data-category="${name}">
        <span class="category-tile-name">${name}</span>
        <span class="category-tile-count">${groups[name].length}</span>
      </button>
    `).join('');
  }

  function renderDetail(categoryName) {
    const groups = groupByCategory();
    const cards = groups[categoryName] || [];
    el.detailTitle.textContent = categoryName;
    el.cards.innerHTML = cards.map((c) => `
      <div class="category-card">
        <div class="category-card-top">
          <span class="category-card-english">${c.english}</span>
          ${c.audio ? `<button type="button" class="mini-audio-btn" data-audio="${c.audio}" aria-label="Play audio">🔊</button>` : ''}
        </div>
        <div class="jyutping">${c.jyutping}</div>
        ${c.characters ? `<div class="characters">${c.characters}</div>` : ''}
      </div>
    `).join('');
    el.list.hidden = true;
    el.detail.hidden = false;
  }

  function closeDetail() {
    el.detail.hidden = true;
    el.list.hidden = false;
  }

  el.list.addEventListener('click', (e) => {
    const tile = e.target.closest('.category-tile');
    if (tile) renderDetail(tile.dataset.category);
  });

  el.backBtn.addEventListener('click', closeDetail);

  el.cards.addEventListener('click', (e) => {
    const btn = e.target.closest('.mini-audio-btn');
    if (!btn) return;
    if (!audioEl) audioEl = new Audio();
    audioEl.src = btn.dataset.audio;
    audioEl.play().catch(() => {});
  });

  renderList();
})();
