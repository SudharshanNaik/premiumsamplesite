/**
 * ============================================================================
 * SMILECARE DENTAL STUDIO - MAIN APPLICATION CONTROLLER
 * DOM Hydration • Dynamic Data Binding • Interactive Modals & Carousels
 * ============================================================================
 */

(function () {
  'use strict';

  // Ensure config is loaded
  const cfg = window.clinicConfig;
  if (!cfg) {
    console.warn('clinicConfig not found. Please ensure js/config.js is loaded first.');
    return;
  }

  /* --- 1. DOM HYDRATION FROM CLINIC CONFIG --- */
  function hydrateClinicData() {
    // Page Title & Meta
    if (cfg.seo) {
      document.title = cfg.seo.pageTitle || cfg.brand.clinicName;
    }

    // Dynamic Copyright Year
    const yearEl = document.getElementById('copyrightYear');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

    // Clinic Brand Elements
    bindText('.brand-title', cfg.brand.clinicName);
    bindText('#heroBadge', cfg.brand.editorialBadge);
    bindText('#heroTitle', cfg.brand.tagline);
    bindText('#heroDesc', cfg.brand.subTagline);
    bindText('#editorialStatement', cfg.brand.editorialStatement);
    bindText('#editorialDescription', cfg.brand.editorialDescription);

    // Doctor Spotlight Elements
    bindText('#doctorName', cfg.doctor.name);
    bindText('#doctorQualifications', cfg.doctor.qualifications);
    bindText('#doctorRole', cfg.doctor.role);
    bindText('#doctorBio', cfg.doctor.shortBio);
    bindText('#doctorPhilosophy', cfg.doctor.philosophy);
    const doctorImg = document.getElementById('doctorPhoto');
    if (doctorImg && cfg.doctor.photo) {
      doctorImg.src = cfg.doctor.photo;
      doctorImg.alt = cfg.doctor.photoAlt || cfg.doctor.name;
    }

    // Render Doctor Specialty Tags
    const specialtiesWrap = document.getElementById('doctorSpecialties');
    if (specialtiesWrap && cfg.doctor.specialties) {
      specialtiesWrap.innerHTML = cfg.doctor.specialties
        .map(spec => `<span class="specialty-tag">${escapeHtml(spec)}</span>`)
        .join('');
    }

    // Render Statistics Row
    renderStatistics();

    // Render Treatments Grid
    renderTreatmentsGrid();

    // Render Featured Treatment
    renderFeaturedTreatment();

    // Render Why Choose Us (Experience)
    renderExperiencePillars();

    // Render Testimonials Carousel
    renderTestimonials();

    // Render FAQ Accordion
    renderFaqs();

    // Contact Information & Links
    hydrateContactData();

    // Apply Luxury Theme Overrides if defined
    applyThemeOverrides();
  }

  function bindText(selector, text) {
    if (!text) return;
    document.querySelectorAll(selector).forEach(el => {
      el.textContent = text;
    });
  }

  function escapeHtml(str) {
    return (str || '').replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /* --- 2. RENDER STATISTICS STRIP --- */
  function renderStatistics() {
    const statsContainer = document.getElementById('statsStrip');
    if (!statsContainer || !cfg.statistics) return;

    statsContainer.innerHTML = cfg.statistics.map((st, i) => `
      <div class="stat-item reveal-init delay-${(i + 1) * 100}">
        <div class="stat-number-wrap">
          <span class="stat-counter-number" data-target="${st.formatValue || st.value}">${st.formatValue || st.value}</span>${st.suffix || ''}
        </div>
        <div class="stat-label">${escapeHtml(st.label)}</div>
        <div class="stat-subtext">${escapeHtml(st.subtext)}</div>
      </div>
    `).join('');
  }

  /* --- 3. RENDER TREATMENTS GRID --- */
  function renderTreatmentsGrid() {
    const grid = document.getElementById('treatmentsGrid');
    if (!grid || !cfg.treatments) return;

    grid.innerHTML = cfg.treatments.map((t, index) => `
      <article class="treatment-card reveal-card-pop delay-${((index % 3) + 1) * 100}" data-treatment-id="${t.id}" tabindex="0" role="button" aria-label="Explore ${escapeHtml(t.title)}">
        <div class="treatment-image-wrap img-curtain-reveal">
          <img src="${t.image}" alt="${escapeHtml(t.title)}" class="treatment-img parallax-img" loading="lazy" />
          <span class="treatment-overlay-tag">${escapeHtml(t.subtitle || 'Specialty')}</span>
        </div>
        <div class="treatment-body">
          <h3 class="treatment-title">${escapeHtml(t.title)}</h3>
          <p class="treatment-desc">${escapeHtml(t.shortDescription)}</p>
          <div class="treatment-footer">
            <span>Explore Clinical Details</span>
            <span class="treatment-arrow" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </div>
        </div>
      </article>
    `).join('');

    // Attach click handlers to open treatment detail modal
    grid.querySelectorAll('.treatment-card').forEach(card => {
      const treatmentId = card.getAttribute('data-treatment-id');
      const treatmentData = cfg.treatments.find(t => t.id === treatmentId);

      const triggerModal = () => {
        if (treatmentData) openTreatmentModal(treatmentData);
      };

      card.addEventListener('click', triggerModal);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          triggerModal();
        }
      });
    });
  }

  /* --- 4. TREATMENT MODAL DIALOG --- */
  const treatmentModal = document.getElementById('treatmentModal');
  const modalImage = document.getElementById('modalTreatmentImage');
  const modalSub = document.getElementById('modalTreatmentSubtitle');
  const modalTitle = document.getElementById('modalTreatmentTitle');
  const modalDesc = document.getElementById('modalTreatmentDesc');
  const modalHighlights = document.getElementById('modalTreatmentHighlights');
  const modalDuration = document.getElementById('modalDuration');
  const modalRecovery = document.getElementById('modalRecovery');
  const modalBookBtn = document.getElementById('modalBookBtn');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  function openTreatmentModal(t) {
    if (!treatmentModal) return;
    if (modalImage) modalImage.src = t.image;
    if (modalSub) modalSub.textContent = t.subtitle || 'Specialty Care';
    if (modalTitle) modalTitle.textContent = t.title;
    if (modalDesc) modalDesc.textContent = t.fullDescription || t.shortDescription;

    if (modalHighlights && t.highlights) {
      modalHighlights.innerHTML = t.highlights.map(hl => `
        <li class="modal-highlight-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          <span>${escapeHtml(hl)}</span>
        </li>
      `).join('');
    }

    if (modalDuration) modalDuration.textContent = t.duration || 'Comprehensive Consultation';
    if (modalRecovery) modalRecovery.textContent = t.recovery || 'Minimal';

    if (modalBookBtn) {
      modalBookBtn.onclick = () => {
        closeTreatmentModal();
        if (window.selectTreatmentInForm) {
          window.selectTreatmentInForm(t.title);
        }
      };
    }

    treatmentModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (modalCloseBtn) modalCloseBtn.focus();
  }

  function closeTreatmentModal() {
    if (!treatmentModal) return;
    treatmentModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeTreatmentModal);
  if (treatmentModal) {
    treatmentModal.addEventListener('click', (e) => {
      if (e.target === treatmentModal) closeTreatmentModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (treatmentModal && treatmentModal.classList.contains('active') && e.key === 'Escape') {
      closeTreatmentModal();
    }
  });

  /* --- 5. RENDER FEATURED TREATMENT SPOTLIGHT --- */
  function renderFeaturedTreatment() {
    const ft = cfg.featuredTreatment;
    if (!ft) return;

    bindText('#ftBadge', ft.badge);
    bindText('#ftTitle', ft.title);
    bindText('#ftTagline', ft.tagline);
    bindText('#ftDescription', ft.description);
    bindText('#ftCtaBtn', ft.ctaText);

    const img = document.getElementById('ftImage');
    if (img && ft.image) {
      img.src = ft.image;
      img.alt = ft.imageAlt || ft.title;
    }

    const benefitsList = document.getElementById('ftBenefits');
    if (benefitsList && ft.benefits) {
      benefitsList.innerHTML = ft.benefits.map(b => `
        <div class="featured-benefit-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          <span>${escapeHtml(b)}</span>
        </div>
      `).join('');
    }

    const ctaBtn = document.getElementById('ftCtaBtn');
    if (ctaBtn) {
      ctaBtn.onclick = (e) => {
        e.preventDefault();
        if (window.selectTreatmentInForm) {
          window.selectTreatmentInForm(ft.title);
        }
      };
    }
  }

  /* --- 6. RENDER EXPERIENCE PILLARS --- */
  function renderExperiencePillars() {
    const grid = document.getElementById('experienceGrid');
    if (!grid || !cfg.whyChooseUs) return;

    grid.innerHTML = cfg.whyChooseUs.map((item, index) => `
      <div class="experience-card reveal-card-pop delay-${(index + 1) * 100}">
        <div class="experience-num">${escapeHtml(item.number)}</div>
        <h3 class="experience-card-title">${escapeHtml(item.title)}</h3>
        <div class="experience-card-sub">${escapeHtml(item.subtitle)}</div>
        <p class="experience-card-desc">${escapeHtml(item.description)}</p>
      </div>
    `).join('');
  }

  /* --- 7. TESTIMONIAL CAROUSEL ENGINE --- */
  let currentTestimonialIndex = 0;
  let testimonialAutoTimer = null;

  function renderTestimonials() {
    const track = document.getElementById('testimonialTrack');
    const dotsContainer = document.getElementById('carouselDots');
    if (!track || !cfg.testimonials) return;

    track.innerHTML = cfg.testimonials.map(item => `
      <div class="testimonial-slide">
        <div class="testimonial-card-inner">
          <div class="testimonial-stars" aria-label="5 stars rating">
            ${'★'.repeat(item.rating || 5)}
          </div>
          <blockquote class="testimonial-quote">
            “${escapeHtml(item.quote)}”
          </blockquote>
          <div class="testimonial-author-wrap">
            <div class="testimonial-author-name">${escapeHtml(item.author)}</div>
            <div class="testimonial-author-treatment">${escapeHtml(item.treatment)}</div>
            <div class="testimonial-author-loc">${escapeHtml(item.location)}</div>
          </div>
        </div>
      </div>
    `).join('');

    if (dotsContainer) {
      dotsContainer.innerHTML = cfg.testimonials.map((_, i) => `
        <button class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Slide ${i + 1}"></button>
      `).join('');

      dotsContainer.querySelectorAll('.carousel-dot').forEach(dot => {
        dot.addEventListener('click', () => {
          goToTestimonial(parseInt(dot.getAttribute('data-index'), 10));
        });
      });
    }

    const prevBtn = document.getElementById('testimonialPrev');
    const nextBtn = document.getElementById('testimonialNext');
    if (prevBtn) prevBtn.addEventListener('click', () => goToTestimonial(currentTestimonialIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goToTestimonial(currentTestimonialIndex + 1));

    startTestimonialAutoPlay();

    // Pause on hover
    const carouselWrapper = document.getElementById('testimonialCarouselWrap');
    if (carouselWrapper) {
      carouselWrapper.addEventListener('mouseenter', () => clearInterval(testimonialAutoTimer));
      carouselWrapper.addEventListener('mouseleave', startTestimonialAutoPlay);
    }
  }

  function goToTestimonial(index) {
    const total = cfg.testimonials.length;
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;
    currentTestimonialIndex = index;

    const track = document.getElementById('testimonialTrack');
    if (track) {
      track.style.transform = `translateX(-${currentTestimonialIndex * 100}%)`;
    }

    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentTestimonialIndex);
    });
  }

  function startTestimonialAutoPlay() {
    clearInterval(testimonialAutoTimer);
    testimonialAutoTimer = setInterval(() => {
      goToTestimonial(currentTestimonialIndex + 1);
    }, 6500); // Relaxed luxury reading interval
  }

  /* --- 8. FAQ ACCORDION ENGINE --- */
  function renderFaqs() {
    const list = document.getElementById('faqList');
    if (!list || !cfg.faqs) return;

    list.innerHTML = cfg.faqs.map((faq, i) => `
      <div class="faq-item">
        <button class="faq-question-btn" aria-expanded="false" id="faq-btn-${i}">
          <span>${escapeHtml(faq.question)}</span>
          <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>
        <div class="faq-answer" id="faq-ans-${i}">
          <div class="faq-answer-inner">${escapeHtml(faq.answer)}</div>
        </div>
      </div>
    `).join('');

    list.querySelectorAll('.faq-item').forEach(item => {
      const btn = item.querySelector('.faq-question-btn');
      const answer = item.querySelector('.faq-answer');

      btn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close other items
        list.querySelectorAll('.faq-item').forEach(other => {
          other.classList.remove('active');
          other.querySelector('.faq-question-btn').setAttribute('aria-expanded', 'false');
          other.querySelector('.faq-answer').style.maxHeight = null;
        });

        if (!isActive) {
          item.classList.add('active');
          btn.setAttribute('aria-expanded', 'true');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });
  }

  /* --- 9. CONTACT DATA & PHONE / WHATSAPP / MAP HYDRATION --- */
  function hydrateContactData() {
    const c = cfg.contact;
    const h = cfg.openingHours;
    if (!c) return;

    // Address
    const addressFormatted = `${c.address.suite}, ${c.address.street}, ${c.address.locality}, ${c.address.city}, ${c.address.state} - ${c.address.pincode}`;
    bindText('#contactAddress', addressFormatted);
    bindText('#footerAddress', addressFormatted);

    // Phone
    bindText('#contactPhone', c.phoneDisplay);
    bindText('#navPhoneText', c.phoneDisplay);
    document.querySelectorAll('.phone-link').forEach(link => {
      link.href = `tel:${c.phoneTel}`;
    });

    // Email
    bindText('#contactEmail', c.email);
    document.querySelectorAll('.email-link').forEach(link => {
      link.href = `mailto:${c.email}`;
    });

    // WhatsApp
    const waUrl = `https://wa.me/${c.whatsappNumber}?text=${encodeURIComponent(c.whatsappDefaultMessage)}`;
    document.querySelectorAll('.whatsapp-link').forEach(link => {
      link.href = waUrl;
    });

    // Google Maps Embed & Directions
    const mapFrame = document.getElementById('googleMapIframe');
    if (mapFrame && c.googleMapsEmbedUrl) {
      mapFrame.src = c.googleMapsEmbedUrl;
    }

    const dirLinks = document.querySelectorAll('.directions-link');
    dirLinks.forEach(link => {
      link.href = c.googleMapsDirectionsUrl;
    });

    // Hours
    if (h) {
      bindText('#contactHoursWeekdays', h.weekdays);
      bindText('#contactHoursSaturday', h.saturday);
      bindText('#contactHoursSunday', h.sunday);
      bindText('#contactHoursNote', h.note);

      bindText('#footerHoursWeekdays', h.weekdays);
      bindText('#footerHoursSaturday', h.saturday);
      bindText('#footerHoursSunday', h.sunday);
    }

    // Social Links
    if (cfg.socialLinks) {
      setHref('#socialInstagram', cfg.socialLinks.instagram);
      setHref('#socialFacebook', cfg.socialLinks.facebook);
      setHref('#socialLinkedin', cfg.socialLinks.linkedin);
      setHref('#socialMaps', cfg.socialLinks.googleBusiness);
    }
  }

  function setHref(selector, url) {
    if (!url) return;
    const el = document.querySelector(selector);
    if (el) el.href = url;
  }

  /* --- 10. LUXURY THEME CSS VARIABLE SYNC --- */
  function applyThemeOverrides() {
    if (!cfg.theme) return;
    const root = document.documentElement;
    if (cfg.theme.primaryColor) root.style.setProperty('--color-primary', cfg.theme.primaryColor);
    if (cfg.theme.primaryDark) root.style.setProperty('--color-primary-dark', cfg.theme.primaryDark);
    if (cfg.theme.accentGold) root.style.setProperty('--color-accent-gold', cfg.theme.accentGold);
    if (cfg.theme.bgPrimary) root.style.setProperty('--color-bg-primary', cfg.theme.bgPrimary);
    if (cfg.theme.bgSecondary) root.style.setProperty('--color-bg-secondary', cfg.theme.bgSecondary);
  }

  /* --- 11. NAVIGATION CONTROLLER --- */
  function initNavigation() {
    const header = document.querySelector('.site-header');
    const mobileToggle = document.getElementById('mobileMenuToggle');
    const mobileDrawer = document.getElementById('mobileNavDrawer');
    const mobileBackdrop = document.getElementById('mobileNavBackdrop');
    const mobileClose = document.getElementById('mobileNavClose');

    // Sticky Scroll Observer
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });

    // Mobile Drawer Open / Close
    function openDrawer() {
      if (mobileDrawer) mobileDrawer.classList.add('open');
      if (mobileBackdrop) mobileBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      if (mobileDrawer) mobileDrawer.classList.remove('open');
      if (mobileBackdrop) mobileBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }

    if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
    if (mobileClose) mobileClose.addEventListener('click', closeDrawer);
    if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeDrawer);

    // Close on mobile nav link click
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', closeDrawer);
    });

    document.addEventListener('keydown', (e) => {
      if (mobileDrawer && mobileDrawer.classList.contains('open') && e.key === 'Escape') {
        closeDrawer();
      }
    });
  }

  /* --- 12. INITIALIZATION ORCHESTRATOR --- */
  function startStudioApp() {
    hydrateClinicData();
    initNavigation();

    // Trigger animations initialization after DOM hydration
    if (window.initStudioAnimations) {
      window.initStudioAnimations();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startStudioApp);
  } else {
    startStudioApp();
  }
})();
