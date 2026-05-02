// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
reveals.forEach(el => observer.observe(el));

// Mobile Nav Toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
const navLinks = document.querySelectorAll('.nav-links a');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('nav-active');
    document.body.style.overflow = mainNav.classList.contains('nav-active') ? 'hidden' : '';
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('nav-active');
    document.body.style.overflow = '';
  });
});

// Nav Scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    mainNav.classList.add('scrolled');
  } else {
    mainNav.classList.remove('scrolled');
  }
});

// Set active link based on current page
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    }
  });
});

// ─── 2026 LUXURY INTERACTION UPGRADES ───
document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  // 1. Hero Parallax
  gsap.to('.hero-bg', {
    yPercent: 30,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });

  // 2. Wine Cards Stagger Entrance & Parallax
  gsap.from('.wine-card', {
    y: 100,
    rotateY: 15,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.section-wines',
      start: 'top 75%'
    }
  });

  // 3. Heritage Image Parallax
  gsap.to('.heritage-circle', {
    y: -80,
    rotate: 15,
    ease: 'none',
    scrollTrigger: {
      trigger: '.section-heritage',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });

  // 4. Quote Text Scrub
  gsap.to('.quote-mark', {
    y: -40,
    opacity: 0.8,
    ease: 'none',
    scrollTrigger: {
      trigger: '.section-quote',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });

  // 5. 3D Mouse Tracking for Wine Cards
  const cards = document.querySelectorAll('.wine-card');
  cards.forEach(card => {
    const inner = card.querySelector('.wine-card-inner');
    const glare = card.querySelector('.glass-glare');
    const svg = card.querySelector('.bottle-svg');

    if (!inner) return;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate rotation (max 12 degrees)
      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;
      
      inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      
      // Calculate Glare
      if (glare) {
        glare.style.opacity = 0.8;
        glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.4) 0%, transparent 50%)`;
      }
      
      // Slight parallax on SVG
      if (svg) {
        const svgX = ((x - centerX) / centerX) * 10;
        const svgY = ((y - centerY) / centerY) * 10;
        svg.style.transform = `translateZ(30px) scale(1.05) translate(${svgX}px, ${svgY}px)`;
      }
    });

    card.addEventListener('mouseleave', () => {
      inner.style.transform = `rotateX(0) rotateY(0)`;
      if (glare) {
        glare.style.opacity = 0;
      }
      if (svg) {
        svg.style.transform = `translateZ(20px)`;
      }
    });
  });
});
