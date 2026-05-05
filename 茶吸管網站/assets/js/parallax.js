/* ── #2 PARALLAX ON SCROLL & SCROLL LOGIC ── */
(function() {
  // Nav Scroll State
  const nav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    if (nav) {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }
  }, { passive: true });

  // Reveal Intersection Observer
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

  // Parallax Logic
  function onScroll() {
    const sy = window.scrollY;

    // Slogan bg word
    const bgWord = document.querySelector('.slogan-bg-word');
    if (bgWord) {
      const rect = bgWord.parentElement.getBoundingClientRect();
      // Only calculate if visible
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        bgWord.style.transform = `translate(-50%, calc(-50% + ${rect.top * 0.04}px))`;
      }
    }

    // Parallax decors
    document.querySelectorAll('[data-parallax]').forEach(el => {
      const factor = parseFloat(el.dataset.parallax);
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const center = rect.top + rect.height / 2 - window.innerHeight / 2;
        el.style.transform = `translateY(${center * factor}px)`;
      }
    });

    // Story visual inner
    const storyInner = document.querySelector('.story-visual-inner');
    if (storyInner) {
      const rect = storyInner.closest('.story-visual').getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const center = rect.top + rect.height / 2 - window.innerHeight / 2;
        storyInner.style.transform = `translateY(${center * 0.04}px)`;
      }
    }
  }

  // Performance: Video Autoplay Control
  const video = document.querySelector('.hero-video-wrap video');
  if (video) {
    if (window.innerWidth > 1024) {
      video.play().catch(() => {
        console.log('Autoplay blocked by browser');
      });
    } else {
      video.pause();
      // On mobile, we could hide it or show a static poster
      video.style.display = 'none'; 
    }
  }

  const isTouch = window.matchMedia('(hover: none)').matches;
  if (!isTouch) {
    window.addEventListener('scroll', onScroll, { passive: true });
    // Initial call
    onScroll();
  }
})();
