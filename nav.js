/* OBB - top-level tab switching between Review and Storytime. */
(function () {
  'use strict';
  const tabs = document.querySelectorAll('#tabs .tab');
  const views = {
    review: document.getElementById('view-review'),
    storytime: document.getElementById('view-storytime'),
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      Object.entries(views).forEach(([name, el]) => {
        el.hidden = name !== tab.dataset.view;
      });
    });
  });
})();
