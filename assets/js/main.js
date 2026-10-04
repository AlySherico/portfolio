/* Mariam Sherif portfolio: nav + image lightbox. No dependencies. */
(function () {
  // ---- Nav ----
  var nav = document.getElementById('nav');
  var toggle = nav.querySelector('.nav__toggle');
  var links = document.getElementById('nav-links');

  function onScroll() { nav.classList.toggle('is-scrolled', window.scrollY > 8); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  function setMenu(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    links.classList.toggle('is-open', open);
  }
  toggle.addEventListener('click', function () {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') setMenu(false);
  });

  // ---- Lightbox ----
  var lb = document.getElementById('lb');
  var lbImg = document.getElementById('lb-img');
  var lbCap = document.getElementById('lb-cap');
  var btnClose = lb.querySelector('.lb__close');
  var btnPrev = lb.querySelector('.lb__prev');
  var btnNext = lb.querySelector('.lb__next');
  var group = [];
  var index = 0;
  var opener = null;

  function show(i) {
    index = (i + group.length) % group.length;
    var btn = group[index];
    var img = btn.querySelector('img');
    lbImg.src = img.currentSrc || img.src;
    lbImg.alt = img.alt;
    lbCap.textContent = btn.getAttribute('data-caption') || img.alt;
    var multi = group.length > 1;
    btnPrev.hidden = btnNext.hidden = !multi;
  }
  function open(btn) {
    opener = btn;
    var name = btn.getAttribute('data-lb');
    group = Array.prototype.slice.call(document.querySelectorAll('.zoom[data-lb="' + name + '"]'));
    show(group.indexOf(btn));
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
    btnClose.focus();
  }
  function close() {
    lb.hidden = true;
    lbImg.removeAttribute('src');
    document.body.style.overflow = '';
    if (opener) opener.focus();
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.zoom');
    if (btn) open(btn);
  });
  btnClose.addEventListener('click', close);
  btnPrev.addEventListener('click', function () { show(index - 1); });
  btnNext.addEventListener('click', function () { show(index + 1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
  document.addEventListener('keydown', function (e) {
    if (lb.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') show(index - 1);
    else if (e.key === 'ArrowRight') show(index + 1);
    else if (e.key === 'Tab') {            // keep focus inside the dialog
      var f = [btnClose, btnPrev, btnNext].filter(function (b) { return !b.hidden; });
      var i = f.indexOf(document.activeElement);
      e.preventDefault();
      f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
    }
  });
})();
