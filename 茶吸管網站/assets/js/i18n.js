/* ── LANGUAGE SWITCHING (i18n) ── */
(function() {
  const LANG_KEY = 'singhi-lang';
  let currentLang = localStorage.getItem(LANG_KEY) || 'en';

  function switchLang(lang) {
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);
    
    // Update elements with data-en/data-zh
    document.querySelectorAll('[data-en]').forEach(el => {
      // Use textContent or innerHTML based on content
      const content = el.dataset[lang] || el.dataset['en'];
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = content;
      } else {
        el.innerHTML = content;
      }
    });

    // Update lang button text
    const langBtn = document.querySelector('.nav-lang');
    if (langBtn) {
      langBtn.textContent = lang === 'en' ? '中文' : 'EN';
    }

    // Update document lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-TW' : 'en';
  }

  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    switchLang(currentLang);

    // Event Listener for Lang Toggle
    const langBtn = document.querySelector('.nav-lang');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        switchLang(currentLang === 'en' ? 'zh' : 'en');
      });
    }
  });
})();
