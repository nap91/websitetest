(function () {
  const root = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const yearEl = document.getElementById('year');

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    root.setAttribute('data-theme', 'dark');
  }

  function updateThemeIcon() {
    if (!themeToggle) return;
    const isDark = root.getAttribute('data-theme') === 'dark';
    themeToggle.textContent = isDark ? '☀️' : '🌙';
  }

  updateThemeIcon();

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const isDark = root.getAttribute('data-theme') === 'dark';
      if (isDark) {
        root.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
      } else {
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }
      updateThemeIcon();
    });
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navMenu.classList.toggle('open');
    });
  }

  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const successEl = document.getElementById('form-success');

  function setError(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    setError('name-error', '');
    setError('email-error', '');
    setError('message-error', '');
    if (successEl) successEl.textContent = '';

    let valid = true;

    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      setError('name-error', 'Please enter at least 2 characters for your name.');
      valid = false;
    }

    if (!validateEmail(emailInput.value.trim())) {
      setError('email-error', 'Please enter a valid email address.');
      valid = false;
    }

    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      setError('message-error', 'Message must be at least 10 characters long.');
      valid = false;
    }

    if (valid) {
      form.reset();
      if (successEl) {
        successEl.textContent = 'Thanks! Your message has been sent successfully.';
      }
    }
  });
})();
