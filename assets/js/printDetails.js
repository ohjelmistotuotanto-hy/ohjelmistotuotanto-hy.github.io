(() => {
  // closed <details> would be left out of the printout, so open them for printing and restore afterwards
  let opened = [];

  window.addEventListener('beforeprint', () => {
    opened = Array.from(document.querySelectorAll('.post-content details:not([open])'));
    opened.forEach((details) => details.setAttribute('open', ''));
  });

  window.addEventListener('afterprint', () => {
    opened.forEach((details) => details.removeAttribute('open'));
    opened = [];
  });
})();
