// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      this.setAttribute('aria-expanded', links.classList.contains('open'));
    });
    // Close on link click
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
