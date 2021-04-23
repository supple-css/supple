(function () {
  const buttons = [...document.querySelectorAll('[data-module="nav"]')];
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !expanded);
    });
  });
})();
