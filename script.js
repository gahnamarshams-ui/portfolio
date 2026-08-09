// ── Scroll Reveal ─────────────────────────────────────────────────────────────
// Watches .reveal elements and adds .visible when they enter the viewport
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // animate once only
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
);

reveals.forEach((el) => revealObserver.observe(el));


// ── Active Nav Highlight ───────────────────────────────────────────────────────
// Adds .active class to the nav link matching the current visible section
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener(
  'scroll',
  () => {
    let currentId = '';

    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 80) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle(
        'active',
        link.getAttribute('href') === `#${currentId}`
      );
    });
  },
  { passive: true }
);
