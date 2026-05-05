/* ── #10 FORM SUBMIT RITUAL ── */
(function() {
  const formBtn = document.getElementById('form-btn');
  if (formBtn) {
    // Remove inline onclick and use addEventListener
    formBtn.onclick = null; 
    formBtn.addEventListener('click', submitForm);
  }

  function submitForm() {
    // Animate steps
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    const step1 = document.getElementById('step1');
    const formFields = document.getElementById('form-fields');
    const formSuccess = document.getElementById('form-success');

    if (step2) step2.classList.add('active');
    
    setTimeout(() => {
      if (step3) step3.classList.add('active');
      
      setTimeout(() => {
        if (formFields) {
          formFields.style.opacity = '0';
          formFields.style.transform = 'translateY(12px)';
          formFields.style.transition = 'all 0.5s ease';
          
          setTimeout(() => {
            formFields.style.display = 'none';
            if (formSuccess) formSuccess.classList.add('show');
            if (step1) step1.classList.add('done');
            if (step2) step2.classList.add('done');
            if (step3) step3.classList.add('done');
          }, 500);
        }
      }, 400);
    }, 400);
  }

  /* FORM INPUT STEP PROGRESSION */
  const inputs = ['f-first', 'f-last', 'f-email', 'f-company', 'f-products'];
  inputs.forEach((id, i) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('input', () => {
      const step2 = document.getElementById('step2');
      const step3 = document.getElementById('step3');
      if (i >= 2 && step2) step2.classList.add('active');
      if (i >= 4 && step3) step3.classList.add('active');
    });
  });
})();
