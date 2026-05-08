// ============================================================
// Austin AI School - Main JavaScript
// Vanilla JS, no frameworks
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

  // ----------------------------------------------------------
  // 1. Mobile Nav Toggle (Hamburger Menu)
  // ----------------------------------------------------------
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('active');
      navToggle.classList.toggle('active');
      // Toggle aria-expanded for accessibility
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
    });

    // Close menu when a link is clicked (mobile UX)
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ----------------------------------------------------------
  // 2. Smooth Scrolling for Anchor Links
  // ----------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var navHeight = document.querySelector('.nav')
          ? document.querySelector('.nav').offsetHeight
          : 0;
        var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ----------------------------------------------------------
  // 3. FAQ Accordion Toggle
  // ----------------------------------------------------------
  var faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(function (question) {
    question.addEventListener('click', function () {
      var faqItem = this.closest('.faq-item');
      var answer = faqItem.querySelector('.faq-answer');
      var isOpen = faqItem.classList.contains('active');

      // Optional: close all other items first (accordion style)
      document.querySelectorAll('.faq-item.active').forEach(function (item) {
        if (item !== faqItem) {
          item.classList.remove('active');
          var otherAnswer = item.querySelector('.faq-answer');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
        }
      });

      // Toggle the clicked item
      if (isOpen) {
        faqItem.classList.remove('active');
        answer.style.maxHeight = null;
      } else {
        faqItem.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // ----------------------------------------------------------
  // 4. Application Form Validation
  // ----------------------------------------------------------
  var appForm = document.getElementById('application-form');

  if (appForm) {
    appForm.addEventListener('submit', function (e) {
      e.preventDefault();
      clearErrors();

      var valid = true;

      // Required fields: name, email, background, motivation
      var name = appForm.querySelector('[name="name"]');
      var email = appForm.querySelector('[name="email"]');
      var background = appForm.querySelector('[name="background"]');
      var motivation = appForm.querySelector('[name="motivation"]');

      if (name && !name.value.trim()) {
        showError(name, 'Full name is required.');
        valid = false;
      }

      if (email) {
        var emailVal = email.value.trim();
        if (!emailVal) {
          showError(email, 'Email address is required.');
          valid = false;
        } else if (!isValidEmail(emailVal)) {
          showError(email, 'Please enter a valid email address.');
          valid = false;
        }
      }

      if (background && !background.value.trim()) {
        showError(background, 'Please describe your background.');
        valid = false;
      }

      if (motivation && !motivation.value.trim()) {
        showError(motivation, 'Please share your motivation for joining.');
        valid = false;
      }

      // Preferred start date is optional — no validation needed.

      if (valid) {
        // Show success feedback
        var btn = appForm.querySelector('button[type="submit"]');
        if (btn) {
          var origText = btn.textContent;
          btn.textContent = 'Application Submitted!';
          btn.disabled = true;
          btn.style.opacity = '0.7';
        }
        // In a real app you'd POST data here; for now just log it.
        console.log('Form submitted successfully.');
      }
    });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showError(input, message) {
    input.classList.add('input-error');
    var err = document.createElement('span');
    err.className = 'error-message';
    err.textContent = message;
    err.style.color = '#e74c3c';
    err.style.fontSize = '0.85rem';
    err.style.display = 'block';
    err.style.marginTop = '4px';
    input.parentNode.appendChild(err);
  }

  function clearErrors() {
    document.querySelectorAll('.error-message').forEach(function (el) {
      el.remove();
    });
    document.querySelectorAll('.input-error').forEach(function (el) {
      el.classList.remove('input-error');
    });
  }

  // ----------------------------------------------------------
  // 5. Intersection Observer – Fade-in on Scroll
  // ----------------------------------------------------------
  var animatedEls = document.querySelectorAll(
    '.fade-in, .slide-up, section > .container, .card, .faq-item, .stat'
  );

  if ('IntersectionObserver' in window && animatedEls.length) {
    // Add initial hidden state
    animatedEls.forEach(function (el) {
      el.classList.add('scroll-hidden');
    });

    var scrollObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible');
            entry.target.classList.remove('scroll-hidden');
            scrollObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    animatedEls.forEach(function (el) {
      scrollObserver.observe(el);
    });
  }

  // Inject minimal CSS for scroll animations (avoids requiring extra stylesheet)
  var style = document.createElement('style');
  style.textContent =
    '.scroll-hidden { opacity: 0; transform: translateY(30px); }' +
    '.scroll-visible { opacity: 1; transform: translateY(0); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }';
  document.head.appendChild(style);

  // ----------------------------------------------------------
  // 6. Counter Animation for Stat Numbers
  // ----------------------------------------------------------
  var statValues = document.querySelectorAll('.stat-value[data-count]');

  if ('IntersectionObserver' in window && statValues.length) {
    var counterObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    statValues.forEach(function (el) {
      counterObserver.observe(el);
    });
  }

  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    if (isNaN(target)) return;

    var duration = 1500; // ms
    var startTime = null;
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out quad
      var easedProgress = 1 - Math.pow(1 - progress, 3);
      var current = Math.floor(easedProgress * target);
      el.textContent = prefix + current.toLocaleString() + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = prefix + target.toLocaleString() + suffix;
      }
    }

    requestAnimationFrame(step);
  }

});
