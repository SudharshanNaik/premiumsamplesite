/**
 * ============================================================================
 * SMILECARE DENTAL STUDIO - PREMIUM ANIMATIONS & CINEMATIC PICTURE ENGINE
 * Picture Curtain Reveals • Continuous Scroll Parallax • 3D Tilt • Letter Popups
 * ============================================================================
 */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /**
   * 1. Top Scroll Progress Indicator
   */
  function initScrollProgress() {
    let progressBar = document.querySelector('.scroll-progress-bar');
    if (!progressBar) {
      progressBar = document.createElement('div');
      progressBar.className = 'scroll-progress-bar';
      document.body.prepend(progressBar);
    }

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }, { passive: true });
  }

  /**
   * 2. Picture Curtain Reveal System
   */
  function initPictureCurtains() {
    const curtainFrames = document.querySelectorAll('.img-curtain-reveal');
    if (!curtainFrames.length) return;

    if (prefersReducedMotion) {
      curtainFrames.forEach(frame => frame.classList.add('revealed'));
      return;
    }

    // Auto-trigger hero image curtain reveal shortly after load
    const heroImageFrame = document.querySelector('.hero-image-frame');
    if (heroImageFrame) {
      setTimeout(() => {
        heroImageFrame.classList.add('revealed');
      }, 180);
    }

    const imageObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.15
      }
    );

    curtainFrames.forEach(frame => imageObserver.observe(frame));
  }

  /**
   * 3. Continuous Scroll Parallax on Images
   */
  function initImageParallax() {
    if (prefersReducedMotion) return;

    const parallaxImages = document.querySelectorAll('.parallax-img');
    if (!parallaxImages.length) return;

    let ticking = false;

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          const windowHeight = window.innerHeight;

          parallaxImages.forEach(img => {
            const rect = img.parentElement ? img.parentElement.getBoundingClientRect() : img.getBoundingClientRect();
            // Check if element is in or near viewport
            if (rect.top < windowHeight + 100 && rect.bottom > -100) {
              const elementCenter = rect.top + rect.height / 2;
              const viewportCenter = windowHeight / 2;
              const diff = elementCenter - viewportCenter;
              // Gentle, physical parallax shift (-18px to +18px)
              const shift = (diff / windowHeight) * 24;
              img.style.transform = `translateY(${shift.toFixed(1)}px) scale(1.04)`;
            }
          });

          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    // Initial call
    onScroll();
  }

  /**
   * 4. Interactive 3D Perspective Tilt on Desktop
   */
  function init3DTilt() {
    if (prefersReducedMotion || window.innerWidth < 1024) return;

    const tiltCards = document.querySelectorAll('.tilt-card-3d');
    tiltCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateX = (-y / rect.height) * 7;
        const rotateY = (x / rect.width) * 7;
        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
      });
    });
  }

  /**
   * 5. Letter-by-Letter and Word Popup Engine
   */
  function initLetterPopups() {
    if (prefersReducedMotion) return;

    // Headlines
    const letterHeadings = document.querySelectorAll('.popup-headline');
    letterHeadings.forEach(heading => {
      if (heading.getAttribute('data-split-done') === 'true') return;
      heading.setAttribute('data-split-done', 'true');

      const words = heading.innerText.trim().split(/\s+/);
      let globalCharIndex = 0;

      const splitHtml = words.map(word => {
        const chars = word.split('').map(char => {
          const charSpan = `<span class="split-char" style="--char-delay: ${globalCharIndex}">${escapeChar(char)}</span>`;
          globalCharIndex++;
          return charSpan;
        }).join('');
        return `<span class="split-word">${chars}</span>`;
      }).join(' ');

      heading.innerHTML = splitHtml;
    });

    // Word Blocks
    const wordElements = document.querySelectorAll('.split-words');
    wordElements.forEach(el => {
      if (el.getAttribute('data-split-done') === 'true') return;
      el.setAttribute('data-split-done', 'true');

      const words = el.innerText.trim().split(/\s+/);
      const splitHtml = words.map((word, idx) => {
        return `<span class="split-word-block"><span class="split-word-inner" style="--word-delay: ${idx}">${escapeChar(word)}</span></span>`;
      }).join(' ');

      el.innerHTML = splitHtml;
    });

    // Auto-trigger hero title letters
    const heroTitle = document.getElementById('heroTitle');
    if (heroTitle) {
      setTimeout(() => {
        heroTitle.classList.add('popup-active');
      }, 240);
    }
  }

  function escapeChar(c) {
    if (c === '&') return '&amp;';
    if (c === '<') return '&lt;';
    if (c === '>') return '&gt;';
    if (c === '"') return '&quot;';
    return c;
  }

  /**
   * 6. Scroll Reveal Observer for Cards and Sections
   */
  function initScrollReveals() {
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal-init, .reveal-card-pop, .reveal-fade-left, .reveal-fade-right, .reveal-zoom-in, .popup-headline, .split-words')
        .forEach(el => {
          el.classList.add('revealed');
          el.classList.add('popup-active');
        });
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            entry.target.classList.add('popup-active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.12
      }
    );

    document.querySelectorAll('.reveal-init, .reveal-card-pop, .reveal-fade-left, .reveal-fade-right, .reveal-zoom-in, .popup-headline, .split-words')
      .forEach(el => revealObserver.observe(el));
  }

  /**
   * 7. Numeric Stat Counters with Quartic Easing
   */
  function initStatCounters() {
    const counterElements = document.querySelectorAll('.stat-counter-number');
    if (!counterElements.length) return;

    if (prefersReducedMotion) {
      counterElements.forEach(el => {
        el.textContent = el.getAttribute('data-target') || el.textContent;
      });
      return;
    }

    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    counterElements.forEach(el => counterObserver.observe(el));
  }

  function animateCounter(element) {
    const rawTarget = element.getAttribute('data-target') || '0';
    const isK = rawTarget.toUpperCase().includes('K');
    const numericTarget = parseFloat(rawTarget.replace(/[^0-9.]/g, ''));
    const duration = 2200;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 4);
      const currentVal = numericTarget * easeOut;

      if (isK) {
        if (numericTarget >= 1000) {
          const displayK = (currentVal / 1000).toFixed(currentVal >= 1000 ? 0 : 1);
          element.textContent = `${displayK}K`;
        } else {
          element.textContent = Math.floor(currentVal).toString();
        }
      } else if (Number.isInteger(numericTarget)) {
        element.textContent = Math.floor(currentVal).toString();
      } else {
        element.textContent = currentVal.toFixed(1);
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = rawTarget;
      }
    }

    requestAnimationFrame(update);
  }

  // Master Orchestrator
  window.initStudioAnimations = function () {
    initScrollProgress();
    initPictureCurtains();
    initImageParallax();
    init3DTilt();
    initLetterPopups();
    initScrollReveals();
    initStatCounters();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.initStudioAnimations);
  } else {
    window.initStudioAnimations();
  }
})();
