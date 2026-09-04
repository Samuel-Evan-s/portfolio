document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  const yearEl = document.querySelector('[data-current-year]');

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => nav.classList.remove('open'));
    });
  }

  // Scroll reveal
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add('is-visible'));
  }

  // Dynamic typing animation in hero
  const typingTarget = document.querySelector('.typing-target');
  if (typingTarget) {
    const words = JSON.parse(
      typingTarget.dataset.words ||
      '["software", "systems", "tools", "experiments", "ideas into working things"]'
    );
    let wordIndex = 0;
    let charIndex = words[0].length;
    let isDeleting = false;

    function typeEffect() {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        typingTarget.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingTarget.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? 40 : 90;

      if (!isDeleting && charIndex === currentWord.length) {
        speed = 2200; // Pause when word is completely typed
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400; // Pause before typing next word
      }

      setTimeout(typeEffect, speed);
    }

    setTimeout(typeEffect, 2000);
  }

  // Projects filtering
  const filterButtons = document.querySelectorAll('.filter-chip');
  const projectCards = document.querySelectorAll('.project-card[data-category]');

  if (filterButtons.length && projectCards.length) {
    const applyFilter = (filter) => {
      projectCards.forEach((card) => {
        const categories = card.dataset.category.split(' ');
        const shouldShow = filter === 'all' || categories.includes(filter);
        card.classList.toggle('is-hidden', !shouldShow);
      });

      filterButtons.forEach((button) => {
        const isActive = button.dataset.filter === filter;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
      });
    };

    filterButtons.forEach((button) => {
      button.addEventListener('click', () => applyFilter(button.dataset.filter));
    });
  }
});
