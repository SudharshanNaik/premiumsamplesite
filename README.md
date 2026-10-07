# SmileCare Dental Studio — Premium Luxury Dental Website Template
### Built for High-End Private Practices & Aesthetic Dental Studios (₹20,000–₹30,000+ Market Value)

A bespoke, production-ready website template engineered with an editorial **medical atelier aesthetic**, sophisticated serif typography, generous whitespace, calm cinematic motion, and an unhurried, trustworthy patient booking flow.

Designed specifically as an **agency client template**: you can re-skin and launch a completely customized website for any dental client simply by editing `js/config.js`.

---

## 1. Design Direction & Value Proposition

- **Luxury Medical Atelier Aesthetic:** Replaces generic healthcare blues and rounded AI templates with warm alabaster (`#FBFBF9`), warm stone (`#F5F2EB`), deep carbon charcoal (`#141618`), and refined champagne bronze (`#BFA175`).
- **High-Fashion Editorial Typography:** Headings set in **Cormorant Garamond** (Google Fonts) paired with **Plus Jakarta Sans** for crisp, clinical legibility.
- **Micro-Interactions & Motion:**
  - Hero image Ken-Burns subtle ease-in scale (`1.05` to `1.0`).
  - Staggered scroll reveals with `IntersectionObserver`.
  - Non-intrusive numerical stat counters with smooth quartic easing.
  - Asymmetric media gallery with category filtering.
  - Fullscreen keyboard-accessible & mobile touch-swipe Lightbox.
  - Interactive Treatment Details Modal drawer.
  - Smooth Testimonial Carousel with touch swipe, navigation arrows, and autoplay pause-on-hover.
  - Transparent-to-solid frosted glass sticky navigation bar.
- **Demo Safety:** All doctor statistics, qualifications, and patient testimonials are clearly configured as demo placeholders and can be replaced or calibrated for any licensed practitioner.

---

## 2. Directory Architecture

```
premium/
├── index.html                  # Semantic HTML5 markup, structured JSON-LD data
├── css/
│   ├── style.css               # Design system, CSS variables, typography, layout
│   ├── animations.css          # Subtle luxury micro-interactions, scroll transitions, reduced-motion
│   └── responsive.css          # Responsive breakpoints (1440px down to 375px)
├── js/
│   ├── config.js               # Central clinic configuration & content hub
│   ├── app.js                  # DOM hydration, navigation scroll effects, mobile drawer, counters
│   ├── animations.js           # Intersection Observer scroll reveal orchestrator
│   ├── gallery.js              # Asymmetric gallery filtering & keyboard-accessible Lightbox
│   └── appointment.js          # Appointment form validation & confirmation state
└── README.md                   # Agency handbook & deployment instructions
```

---

## 3. How to Customize for a New Client in 5 Minutes

Open `js/config.js`. Every piece of clinic information is centralized:

### 1. Clinic Name & Tagline
```javascript
brand: {
  clinicName: "Elite Dental Studio",
  tagline: "Precision Dentistry. Radiant Smiles.",
  subTagline: "Experience modern, personalized dental care in...",
  editorialBadge: "PRIVATE DENTAL ATELIER",
  locationSummary: "Bandra West, Mumbai"
}
```

### 2. Lead Doctor Details & Credentials
```javascript
doctor: {
  name: "Dr. Vikram Seth",
  qualifications: "BDS, MDS, FICOI",
  role: "Consultant Prosthodontist & Implantologist",
  shortBio: "...",
  philosophy: "...",
  photo: "https://images.unsplash.com/photo-...",
  specialties: ["Dental Implants", "Smile Makeovers", "Full Mouth Rehab"]
}
```

### 3. Contact Numbers, WhatsApp & Directions
```javascript
contact: {
  phoneDisplay: "+91 98111 22233",
  phoneTel: "+919811122233",
  whatsappNumber: "919811122233",
  email: "concierge@elitedental.example",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=...",
  googleMapsDirectionsUrl: "https://maps.google.com/?q=..."
}
```

### 4. Treatments & Pricing/Highlights
Update the `treatments` array to add, modify, or reorder clinical offerings. The website automatically synchronizes:
- The Treatments card grid
- The Treatment details modal drawer
- The Appointment Form dropdown selector

### 5. Asymmetric Gallery & Testimonials
Add client photographs to `gallery` and patient reviews to `testimonials`.

---

## 4. Key Interactive Components

| Component | Technology | Features |
|---|---|---|
| **Sticky Navigation** | Vanilla JS + CSS Backdrop Filter | Flips from transparent to frosted alabaster, compact height on scroll. Accessible mobile drawer. |
| **Scroll Reveal Engine** | `IntersectionObserver` | Zero-dependency, performant hardware-accelerated transforms (`translateY`, `opacity`). |
| **Numeric Stat Counters** | `requestAnimationFrame` | Eased numerical transitions triggered on viewport entry. |
| **Treatment Modal** | Vanilla JS | Opens modal drawer on desktop and mobile, displays clinical breakdown, pre-fills appointment form. |
| **Asymmetric Gallery** | CSS Grid + Flexbox | Distinct aspect ratios (`tall`, `wide`, `standard`). Category filtering buttons. |
| **Fullscreen Lightbox** | Vanilla JS + Touch Events | Prev/Next navigation, `Escape` key close, mobile touch-swipe gesture support. |
| **Testimonial Slider** | Vanilla JS | Autoplay with pause-on-hover, dot navigation, touch swipe. |
| **Consultation Form** | HTML5 + Vanilla JS | Tomorrow-onwards min date guard, dynamic treatments, clear receipt feedback, WhatsApp quick forward. |

---

## 5. Accessibility & Performance

- **Reduced Motion:** Fully complies with `prefers-reduced-motion: reduce`. Animations collapse to instant display without disorientation.
- **Semantic HTML5:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
- **ARIA Standards:** Proper `aria-expanded`, `aria-label`, `role="dialog"`, `aria-modal="true"`.
- **Keyboard Navigation:** Full tab order across navigation, gallery items, lightbox controls, and modals.
- **Zero Heavy Frameworks:** Pure HTML5, modern CSS3, and lightweight Vanilla JavaScript. Instant First Contentful Paint (< 0.6s on modern static CDN).

---

## 6. Static Hosting & Deployment

This project requires **no build step, no npm, and no bundler**. Deploy instantly to:

### Vercel
```bash
vercel deploy
```

### Netlify
Drag and drop the `premium` folder into [app.netlify.com/drop](https://app.netlify.com/drop).

### GitHub Pages
1. Push to GitHub repository.
2. Under **Settings > Pages**, choose `main` branch, root or `/premium` directory.
3. Save and view your live site.

---

## 7. License & Credits

- Template developed by Antigravity Studio.
- Photography placeholders from curated Unsplash collections for editorial and medical mockups. Replace with high-resolution photography of the client's actual clinic and team upon client delivery.
