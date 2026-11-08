/* OBB - navigation: bottom tab bar (Review/Translate/Storytime) and the
   Review sub-nav (Browse/Practice). */
(function () {
  'use strict';

  const tabs = document.querySelectorAll('#tabs .tab');
  const views = {
    review: document.getElementById('view-review'),
    storytime: document.getElementById('view-storytime'),
    translate: document.getElementById('view-translate'),
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

  const subnavBtns = document.querySelectorAll('#reviewSubnav .subnav-btn');
  const modes = {
    browse: document.getElementById('browseMode'),
    practice: document.getElementById('practiceMode'),
  };

  subnavBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      subnavBtns.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      Object.entries(modes).forEach(([name, el]) => {
        el.hidden = name !== btn.dataset.mode;
      });
    });
  });
})();
