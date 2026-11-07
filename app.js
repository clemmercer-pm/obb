/* OBB - core SRS review loop (Session 2). No Azure/Google/Cloudflare wiring yet -
   that's later sessions. SM-2-style scheduling, progress in localStorage. */

(function () {
  'use strict';

  const STORE_KEY = 'obb-progress-v1';
  const todayISO = () => new Date().toISOString().slice(0, 10);

  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
    catch { return {}; }
  }

  function saveProgress(progress) {
    localStorage.setItem(STORE_KEY, JSON.stringify(progress));
  }

  function freshProgress() {
    return { ease: 2.5, reps: 0, interval: 0, due: todayISO() };
  }

  // Simplified SM-2: quality 1 = Again, 3 = Hard, 4 = Good, 5 = Easy.
  function schedule(prog, quality) {
    if (quality < 3) {
      prog.reps = 0;
      prog.interval = 1;
    } else {
      if (prog.reps === 0) prog.interval = 1;
      else if (prog.reps === 1) prog.interval = 6;
      else prog.interval = Math.round(prog.interval * prog.ease);
      prog.reps += 1;
    }
    prog.ease = Math.max(1.3, prog.ease + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));
    const due = new Date();
    due.setDate(due.getDate() + prog.interval);
    prog.due = due.toISOString().slice(0, 10);
    return prog;
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // --- state ---
  const progress = loadProgress();
  const today = todayISO();
  const allCards = CARDS.concat(window.OBB_customCards || []);
  let queue = shuffle(allCards.filter(c => !progress[c.id] || progress[c.id].due <= today));
  let current = null;
  let revealed = false;
  let sessionDone = 0;

  // --- elements ---
  const el = {
    counter: document.getElementById('counter'),
    cardFace: document.getElementById('cardFace'),
    category: document.getElementById('category'),
    prompt: document.getElementById('prompt'),
    answer: document.getElementById('answer'),
    audioBtn: document.getElementById('audioBtn'),
    showBtn: document.getElementById('showBtn'),
    ratingBar: document.getElementById('ratingBar'),
    empty: document.getElementById('empty'),
    app: document.getElementById('app'),
  };

  function nextCard() {
    if (queue.length === 0) {
      current = null;
      render();
      return;
    }
    current = queue.shift();
    revealed = false;
    render();
  }

  function render() {
    if (!current) {
      el.app.hidden = true;
      el.empty.hidden = false;
      el.empty.textContent = sessionDone > 0
        ? `All caught up - reviewed ${sessionDone} card${sessionDone === 1 ? '' : 's'} today.`
        : 'Nothing due right now. Nice and caught up.';
      return;
    }

    el.app.hidden = false;
    el.empty.hidden = true;
    el.counter.textContent = `${queue.length + 1} left`;
    el.category.textContent = current.category;
    el.prompt.textContent = current.english;
    el.answer.hidden = !revealed;
    el.answer.innerHTML = `
      <div class="jyutping">${current.jyutping}</div>
      ${current.characters ? `<div class="characters">${current.characters}</div>` : ''}
    `;
    el.showBtn.hidden = revealed;
    el.ratingBar.hidden = !revealed;
    el.audioBtn.hidden = !revealed;
  }

  el.showBtn.addEventListener('click', () => {
    revealed = true;
    render();
  });

  let audioEl = null;
  el.audioBtn.addEventListener('click', () => {
    if (!current || !current.audio) {
      el.audioBtn.title = 'No audio for this card yet';
      return;
    }
    if (!audioEl) audioEl = new Audio();
    audioEl.src = current.audio;
    audioEl.play().catch(() => { el.audioBtn.title = 'Could not play audio'; });
  });

  el.ratingBar.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-quality]');
    if (!btn || !current) return;
    const quality = Number(btn.dataset.quality);
    const prog = progress[current.id] || freshProgress();
    schedule(prog, quality);
    progress[current.id] = prog;
    saveProgress(progress);
    sessionDone += 1;
    nextCard();
  });

  nextCard();
})();
