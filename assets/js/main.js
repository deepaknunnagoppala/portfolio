/**
 * Deepak Nunnagoppala — Portfolio
 * main.js
 *
 * Handles: page loader, theme (dark/light) toggle with persistence,
 * sticky navbar, mobile nav, active-section highlighting, Typed.js
 * role rotator, AOS init, EmailJS contact form, and scroll-to-top.
 *
 * No build step required — this is plain, dependency-light vanilla JS
 * so the site can be opened directly or served by GitHub Pages as-is.
 */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------------------------------------------------------------------
   * 1. Page loader
   *    Hides the loading screen once the window has finished loading.
   *    Falls back to a timeout so the site never gets stuck behind it.
   * ------------------------------------------------------------------- */
  var loader = document.getElementById('loader');
  function hideLoader() {
    if (loader) loader.classList.add('is-hidden');
  }
  window.addEventListener('load', hideLoader);
  setTimeout(hideLoader, 2500); // safety net for slow/offline CDNs

  /* ---------------------------------------------------------------------
   * 2. Theme toggle (dark / light) with localStorage persistence
   *    Respects the OS preference on first visit, then remembers
   *    whatever the visitor picks.
   * ------------------------------------------------------------------- */
  var root = document.documentElement;
  var themeToggleBtns = document.querySelectorAll('.theme-toggle');
  var THEME_KEY = 'portfolio-theme';

  function applyTheme(theme) {
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }
    themeToggleBtns.forEach(function (btn) {
      var icon = btn.querySelector('i');
      if (icon) {
        icon.className = theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
      }
      btn.setAttribute('aria-label', theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
    });
  }

  var savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    applyTheme('light');
  } else {
    applyTheme('dark');
  }

  themeToggleBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var isLight = root.getAttribute('data-theme') === 'light';
      var next = isLight ? 'dark' : 'light';
      applyTheme(next);
      localStorage.setItem(THEME_KEY, next);
    });
  });

  /* ---------------------------------------------------------------------
   * 3. Sticky navbar + mobile menu toggle
   * ------------------------------------------------------------------- */
  var navbar = document.getElementById('navbar');
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  function onScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.querySelector('i').className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    });

    // Close the mobile menu after a link is tapped
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.querySelector('i').className = 'fa-solid fa-bars';
      });
    });
  }

  /* ---------------------------------------------------------------------
   * 4. Active nav-link highlighting via IntersectionObserver
   * ------------------------------------------------------------------- */
  var sections = document.querySelectorAll('main section[id]');
  var navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  if ('IntersectionObserver' in window && sections.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navAnchors.forEach(function (a) {
            a.classList.toggle('is-active', a.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (section) { observer.observe(section); });
  }

  /* ---------------------------------------------------------------------
   * 5. Typed.js — rotating role titles in the hero
   * ------------------------------------------------------------------- */
  var typedEl = document.getElementById('typed-roles');
  if (typedEl && window.Typed) {
    new Typed('#typed-roles', {
      strings: ['Frontend Developer', 'Java Developer', 'AI Enthusiast'],
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 1400,
      startDelay: 300,
      loop: true,
      smartBackspace: true
    });
  }

  /* ---------------------------------------------------------------------
   * 6. AOS — scroll reveal animations
   * ------------------------------------------------------------------- */
  if (window.AOS) {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
      disable: function () {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      }
    });
  }

  /* ---------------------------------------------------------------------
   * 7. Scroll-to-top button
   * ------------------------------------------------------------------- */
  var scrollTopBtn = document.getElementById('scrollTop');
  if (scrollTopBtn) {
    window.addEventListener('scroll', function () {
      scrollTopBtn.classList.toggle('is-visible', window.scrollY > 480);
    }, { passive: true });

    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------------------------------------------------------------------
   * 8. Footer year
   * ------------------------------------------------------------------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------------------------------------------------------------
   * 9. EmailJS contact form
   *
   *    Fill in your own EmailJS credentials below (Public Key, Service ID,
   *    Template ID) from https://dashboard.emailjs.com — the form works
   *    end-to-end once those three values are set. Until then, submissions
   *    are safely no-op'd with a clear console warning instead of failing.
   * ------------------------------------------------------------------- */
  var EMAILJS_PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY';
  var EMAILJS_SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID';
  var EMAILJS_TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID';

  if (window.emailjs && EMAILJS_PUBLIC_KEY !== 'YOUR_EMAILJS_PUBLIC_KEY') {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }

  var contactForm = document.getElementById('contactForm');
  var formStatus = document.getElementById('formStatus');
  var submitBtn = document.getElementById('formSubmit');

  function setStatus(message, type) {
    if (!formStatus) return;
    formStatus.textContent = message;
    formStatus.className = 'form-status' + (type ? ' is-' + type : '');
  }

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      if (EMAILJS_PUBLIC_KEY === 'YOUR_EMAILJS_PUBLIC_KEY') {
        console.warn(
          'EmailJS is not configured yet. Add your Public Key, Service ID, ' +
          'and Template ID at the top of assets/js/main.js to enable the ' +
          'contact form.'
        );
        setStatus('Contact form is not configured yet — see console for setup notes.', 'error');
        return;
      }

      var originalLabel = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
      setStatus('Sending your message...', '');

      emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, contactForm)
        .then(function () {
          setStatus('Message sent — thanks for reaching out! I\'ll reply soon.', 'success');
          contactForm.reset();
        })
        .catch(function (error) {
          console.error('EmailJS error:', error);
          setStatus('Something went wrong sending your message. Please try again or email me directly.', 'error');
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalLabel;
        });
    });
  }

});
