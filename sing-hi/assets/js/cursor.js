/* ── #1 CUSTOM CURSOR ── */
(function() {
  // If touch device, do not run custom cursor logic
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
  });

  // Ring follows with slight lag
  function lerp() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(lerp);
  }
  lerp();

  // Hover states
  const hoverSelectors = 'a, button, .prod-card, .logo-cell, .nav-cta';
  document.querySelectorAll(hoverSelectors).forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });

  document.querySelectorAll('a').forEach(el => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-link');
      document.body.classList.remove('cursor-hover');
    });
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-link'));
  });
})();
