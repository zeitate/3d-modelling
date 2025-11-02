document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
  const links = document.querySelectorAll('.nav-link');
  links.forEach(a => {
    const href = a.getAttribute('href');
    if (location.pathname.endsWith(href) || (href.endsWith('index.html') && (location.pathname.endsWith('/') || location.pathname.endsWith('index.html')))) {
      a.classList.add('text-violet-400');
    }
  });
});