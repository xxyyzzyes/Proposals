/* ── MOBILE NAVIGATION LOGIC ── */
(function() {
  const toggle = document.querySelector('.mobile-toggle');
  const overlay = document.querySelector('.mobile-nav-overlay');
  const links = document.querySelectorAll('.mobile-links a');
  const body = document.body;

  if (!toggle || !overlay) return;

  function toggleMenu() {
    const isOpen = overlay.classList.contains('active');
    if (isOpen) {
      overlay.classList.remove('active');
      toggle.classList.remove('active');
      body.style.overflow = '';
    } else {
      overlay.classList.add('active');
      toggle.classList.add('active');
      body.style.overflow = 'hidden';
    }
  }

  toggle.addEventListener('click', toggleMenu);

  // Close menu when clicking a link
  links.forEach(link => {
    link.addEventListener('click', () => {
      overlay.classList.remove('active');
      toggle.classList.remove('active');
      body.style.overflow = '';
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      toggleMenu();
    }
  });
})();
