// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      const open = links.classList.toggle('open');
      this.setAttribute('aria-expanded', open);
    });
    // Close on link click
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!links.classList.contains('open')) return;
      if (!toggle.contains(e.target) && !links.contains(e.target)) {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Colour theme switcher
  const switcher = document.getElementById('theme-switcher');
  const dots = switcher ? switcher.querySelectorAll('.theme-dot') : [];

  function applyTheme(name) {
    document.documentElement.dataset.theme = name;
    try { localStorage.setItem('mimdot-theme', name); } catch (e) {}
    dots.forEach(function (dot) {
      dot.setAttribute('aria-pressed', String(dot.dataset.themeName === name));
    });
  }

  if (switcher && dots.length) {
    applyTheme(document.documentElement.dataset.theme || 'cream');
    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        applyTheme(dot.dataset.themeName);
      });
    });
  }
});