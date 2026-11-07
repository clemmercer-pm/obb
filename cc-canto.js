/* OBB - CC-Canto dictionary lookup + word segmentation.
   CC-Canto (c) 2015-17 Pleco Inc, CC BY-SA 3.0 (cccanto.org). Loaded as a
   static JSON asset (cc-canto.json, ~29,700 entries), fetched once and
   cached. Segmentation is a simple dictionary max-match - good enough for
   breaking translated Cantonese sentences into tappable words, not a
   linguistically rigorous tokenizer. */

(function () {
  'use strict';

  const MAX_WORD_LEN = 6;
  let dict = null;
  let loadPromise = null;

  function load() {
    if (loadPromise) return loadPromise;
    loadPromise = fetch('cc-canto.json').then((r) => r.json()).then((data) => { dict = data; return dict; });
    return loadPromise;
  }

  // Greedy left-to-right maximum match. Falls back to a 1-character
  // "unknown" segment (no jyutping/gloss) when nothing in the dictionary matches.
  function segment(text) {
    if (!dict) throw new Error('CC-Canto not loaded yet - call load() and await it first');
    const chars = Array.from(text);
    const out = [];
    let i = 0;
    while (i < chars.length) {
      let matched = null;
      const maxLen = Math.min(MAX_WORD_LEN, chars.length - i);
      for (let len = maxLen; len >= 1; len--) {
        const candidate = chars.slice(i, i + len).join('');
        if (dict[candidate]) { matched = { text: candidate, jyutping: dict[candidate].j, english: dict[candidate].e }; break; }
      }
      if (!matched) {
        const single = chars[i];
        matched = { text: single, jyutping: null, english: null };
      }
      out.push(matched);
      i += matched.text.length;
    }
    return out;
  }

  window.CCCanto = { load, segment };
})();
