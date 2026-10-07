/**
 * ============================================================================
 * SMILECARE DENTAL STUDIO - CURATED ASYMMETRIC GALLERY & LIGHTBOX
 * Category Filter • Dynamic Asymmetric Layout • Keyboard & Touch Accessible
 * ============================================================================
 */

(function () {
  'use strict';

  let currentGalleryItems = [];
  let currentActiveIndex = 0;

  // DOM Elements
  const galleryGrid = document.getElementById('galleryGrid');
  const filterContainer = document.getElementById('galleryFilters');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');

  // Touch swipe variables
  let touchStartX = 0;
  let touchEndX = 0;

  /**
   * Initializes and renders gallery items
   */
  function initGallery() {
    if (!galleryGrid || !window.clinicConfig || !window.clinicConfig.gallery) return;

    currentGalleryItems = [...window.clinicConfig.gallery];
    renderCategoryFilters();
    renderGalleryItems(currentGalleryItems);
    setupLightboxListeners();
  }

  /**
   * Generates dynamic category buttons
   */
  function renderCategoryFilters() {
    if (!filterContainer) return;

    // Collect unique categories
    const categories = ['All', ...new Set(clinicConfig.gallery.map(item => item.category))];
    filterContainer.innerHTML = '';

    categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `filter-btn ${cat === 'All' ? 'active' : ''}`;
      btn.textContent = cat;
      btn.setAttribute('type', 'button');
      btn.setAttribute('aria-label', `Filter gallery by ${cat}`);

      btn.addEventListener('click', () => {
        filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (cat === 'All') {
          currentGalleryItems = [...clinicConfig.gallery];
        } else {
          currentGalleryItems = clinicConfig.gallery.filter(item => item.category === cat);
        }
        renderGalleryItems(currentGalleryItems);
      });

      filterContainer.appendChild(btn);
    });
  }

  /**
   * Renders the asymmetric grid items
   */
  function renderGalleryItems(items) {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = '';

    items.forEach((item, index) => {
      const card = document.createElement('div');
      // Assign class based on curated aspect ratio
      const aspectClass = item.aspect ? `aspect-${item.aspect}` : 'aspect-standard';
      card.className = `gallery-item ${aspectClass} reveal-card-pop img-curtain-reveal delay-${((index % 3) + 1) * 100}`;
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `View ${item.title}`);

      card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" class="gallery-thumb parallax-img" loading="lazy" />
        <div class="gallery-overlay">
          <span class="gallery-item-cat">${item.category}</span>
          <h3 class="gallery-item-title">${item.title}</h3>
        </div>
      `;

      card.addEventListener('click', () => openLightbox(index));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(index);
        }
      });

      galleryGrid.appendChild(card);
    });

    // Re-trigger scroll reveal for newly rendered items
    if (window.initStudioAnimations) {
      window.initStudioAnimations();
    }
  }

  /**
   * Lightbox Modal Functions
   */
  function openLightbox(index) {
    if (!lightboxModal || !currentGalleryItems[index]) return;
    currentActiveIndex = index;
    updateLightboxContent();
    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    if (lightboxCloseBtn) lightboxCloseBtn.focus();
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function showNextImage() {
    if (!currentGalleryItems.length) return;
    currentActiveIndex = (currentActiveIndex + 1) % currentGalleryItems.length;
    updateLightboxContent();
  }

  function showPrevImage() {
    if (!currentGalleryItems.length) return;
    currentActiveIndex = (currentActiveIndex - 1 + currentGalleryItems.length) % currentGalleryItems.length;
    updateLightboxContent();
  }

  function updateLightboxContent() {
    const item = currentGalleryItems[currentActiveIndex];
    if (!item) return;

    if (lightboxImage) {
      lightboxImage.src = item.image;
      lightboxImage.alt = item.title;
    }
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxDesc) lightboxDesc.textContent = item.caption || item.category;
    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentActiveIndex + 1} / ${currentGalleryItems.length}`;
    }
  }

  /**
   * Setup Event Listeners for Lightbox
   */
  function setupLightboxListeners() {
    if (!lightboxModal) return;

    if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
    if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', showNextImage);
    if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', showPrevImage);

    // Close on clicking backdrop
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!lightboxModal.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNextImage();
      if (e.key === 'ArrowLeft') showPrevImage();
    });

    // Mobile touch swipe handling
    lightboxModal.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightboxModal.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      showNextImage(); // Swiped left -> next
    } else if (touchEndX > touchStartX + swipeThreshold) {
      showPrevImage(); // Swiped right -> prev
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGallery);
  } else {
    initGallery();
  }

  // Expose to window
  window.initStudioGallery = initGallery;
})();
