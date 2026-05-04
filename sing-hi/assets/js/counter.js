/* ── #2 COUNTING NUMBERS ── */
(function() {
  const statObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        
        const target = parseInt(e.target.dataset.count || '0');
        const countEl = e.target.querySelector('.stat-count');
        
        if (!countEl || countEl.dataset.done) return;
        countEl.dataset.done = '1';
        
        let start = 0;
        const dur = 2200;
        const startTime = performance.now();
        
        function tick(now) {
          const progress = Math.min((now - startTime) / dur, 1);
          const ease = 1 - Math.pow(1 - progress, 4); // Quartic ease out
          countEl.textContent = Math.round(ease * target);
          
          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            countEl.textContent = target;
          }
        }
        
        requestAnimationFrame(tick);
        statObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.stat-cell').forEach(el => statObs.observe(el));
})();
