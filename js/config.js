/**
 * ============================================================================
 * SMILECARE DENTAL STUDIO - CENTRAL CLIENT CONFIGURATION
 * ============================================================================
 * 
 * AGENCY CUSTOMIZATION GUIDE:
 * To customize this website for any dental client, update the values in this file.
 * The website dynamically populates text, images, contact links, hours, 
 * doctor profiles, statistics, treatments, testimonials, and gallery from this hub.
 * 
 * Configured for: Dr. Rohan Rao, BDS, MDS (Lead Dental Surgeon)
 * Aesthetic: Balanced Warm Luxury (Not too dark, not too light)
 */

const clinicConfig = {
  // 1. BRAND & CLINIC IDENTITY
  brand: {
    clinicName: "SmileCare Dental Studio",
    tagline: "A Better Smile Begins With Better Care.",
    subTagline: "Experience modern, personalized dental care in a calm, serene and comfortable environment.",
    editorialBadge: "PREMIUM DENTAL STUDIO",
    editorialStatement: "Dentistry designed around you.",
    editorialDescription: "We believe exceptional oral healthcare is an art of clinical precision, empathy, and absolute patient comfort. Every visit is crafted with unhurried consultations, digital 3D diagnostics, and personalized treatment pathways tailored to your facial symmetry and long-term vitality.",
    establishedYear: "2015",
    locationSummary: "Indiranagar, Bengaluru",
    disclaimer: "Demo clinic website template. All medical and clinic information shown is fictional and fully customizable for licensed dental practices."
  },

  // 2. CONTACT & LOCATION DETAILS
  contact: {
    phoneDisplay: "+91 98765 43210",
    phoneTel: "+919876543210",
    whatsappNumber: "919876543210", // International format without '+'
    whatsappDefaultMessage: "Hello SmileCare Dental Studio, I would like to schedule a private consultation with Dr. Rohan Rao.",
    email: "concierge@smilecarestudio.example",
    address: {
      suite: "Level 2, The Pavilion",
      street: "100 Feet Road, HAL 2nd Stage",
      locality: "Indiranagar",
      city: "Bengaluru",
      state: "Karnataka",
      pincode: "560038",
      country: "India"
    },
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9855523166864!2d77.63842187588047!3d12.972793287342898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a798544c0f%3A0xe67362a129fa66b5!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsDirectionsUrl: "https://maps.google.com/?q=SmileCare+Dental+Studio+Indiranagar+Bengaluru"
  },

  // 3. OPERATING HOURS
  openingHours: {
    weekdays: "Monday – Friday: 9:00 AM – 8:00 PM",
    saturday: "Saturday: 9:00 AM – 6:00 PM",
    sunday: "Sunday: By Prior Appointment Only",
    note: "Dedicated valet parking and priority emergency on-call assistance available."
  },

  // 4. DOCTOR PROFILE (MALE LEAD SURGEON)
  doctor: {
    name: "Dr. Rohan Rao",
    qualifications: "BDS, MDS (Oral & Maxillofacial Implantology, Endodontics)",
    role: "Lead Dental Surgeon & Aesthetic Director",
    shortBio: "Dr. Rohan Rao combines over a decade of clinical precision with an architectural eye for natural smile aesthetics. Specializing in computer-guided implant restorations and microscopic dentistry, his clinical philosophy is rooted in gentle care, tooth conservation, and uncompromising craftsmanship.",
    philosophy: "“True dental artistry begins with listening. We treat each patient as a distinguished guest, designing functional, harmonious smiles that restore confidence while preserving natural dentition.”",
    experienceYears: "10+",
    patientsServed: "5,000+",
    credentials: [
      "Master of Dental Surgery (MDS) — First Class Distinction",
      "Fellow, International Congress of Oral Implantologists (ICOI)",
      "Certified Digital Smile Design (DSD) Master Clinician",
      "Member, Indian Dental Association (IDA) & Academy of Oral Implantology"
    ],
    specialties: [
      "Computer-Guided Dental Implants",
      "Microscopic Precision Endodontics",
      "Digital Smile Architecture & Porcelain Veneers",
      "Stress-Free Minimally Invasive Surgery"
    ],
    // High-resolution professional male doctor portrait
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=85",
    photoAlt: "Dr. Rohan Rao - Lead Dental Surgeon at SmileCare Dental Studio"
  },

  // 5. CONFIGURABLE CLINIC STATISTICS (DEMO METRICS)
  statistics: [
    {
      id: "experience",
      value: 10,
      suffix: "+",
      label: "Years of Practice",
      subtext: "Clinical mastery & patient trust"
    },
    {
      id: "patients",
      value: 5000,
      formatValue: "5K+",
      suffix: "+",
      label: "Patients Served",
      subtext: "Restoring smiles with personalized care"
    },
    {
      id: "satisfaction",
      value: 99,
      suffix: "%",
      label: "Patient Satisfaction",
      subtext: "Reported virtually pain-free visits"
    },
    {
      id: "specialists",
      value: 6,
      suffix: "",
      label: "Specialist Disciplines",
      subtext: "Comprehensive in-house oral care"
    }
  ],

  // 6. TREATMENTS & SPECIALTIES
  treatments: [
    {
      id: "general-dentistry",
      title: "General Dentistry",
      subtitle: "Preventive Care & Health Diagnostics",
      shortDescription: "Comprehensive diagnostic evaluations, ultrasonic prophylaxis, and gentle preventive therapies designed to safeguard your natural teeth.",
      fullDescription: "Our preventive care protocol pairs ultra-low radiation 3D radiography with gentle ultrasonic scaling and airflow stain removal. We focus on diagnosing underlying health factors before they cause discomfort, setting the baseline for lifelong oral wellness.",
      image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1000&q=85",
      highlights: [
        "High-definition intraoral camera diagnostics",
        "Gentle ultrasonic air-flow scaling & polish",
        "Enamel remineralization & protective sealants",
        "Early non-invasive cavity detection"
      ],
      duration: "45–60 mins",
      recovery: "Immediate"
    },
    {
      id: "root-canal",
      title: "Root Canal Treatment",
      subtitle: "Microscopic Pain-Free Endodontics",
      shortDescription: "State-of-the-art endodontic therapy utilizing optical magnification and flexible nickel-titanium instruments to preserve damaged teeth comfortably.",
      fullDescription: "Forget outdated stereotypes of dental discomfort. Utilizing surgical operating microscopes, computer-assisted apex locators, and warm bio-ceramic obturation, our root canals are virtually pain-free and completed with clinical precision in often a single appointment.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=85",
      highlights: [
        "Dental operating microscope magnification",
        "Virtually painless computer-controlled anesthesia",
        "Single-visit completion when clinically suitable",
        "High-strength bio-ceramic root sealing"
      ],
      duration: "60–90 mins",
      recovery: "1–2 days"
    },
    {
      id: "dental-implants",
      title: "Dental Implants",
      subtitle: "Permanent Functional Tooth Restoration",
      shortDescription: "Biocompatible titanium and zirconia implant restorations that seamlessly replicate the strength, feel, and beauty of natural teeth.",
      fullDescription: "Engineered to fuse naturally with your bone structure, dental implants offer the most durable, natural-looking replacement for missing teeth. Using 3D computer-guided surgical templates, placement is minimally invasive with predictable, lifelong stability.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=85",
      highlights: [
        "3D CBCT guided surgical placement",
        "Premium Swiss & German titanium fixtures",
        "Custom handcrafted zirconia crowns",
        "Preserves bone density and facial structure"
      ],
      duration: "Comprehensive care pathway",
      recovery: "2–4 days mild healing"
    },
    {
      id: "teeth-whitening",
      title: "Teeth Whitening",
      subtitle: "Clinical Laser Brightening & Desensitization",
      shortDescription: "In-clinic cold-light whitening treatments formulated to remove stubborn stains and brighten tooth shades without sensitivity.",
      fullDescription: "Our signature in-office whitening procedure elevates your tooth shade up to 6–8 tones in a single session. Utilizing pH-balanced whitening formulations combined with desensitizing agents, we deliver remarkable luminosity while protecting enamel integrity.",
      image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1000&q=85",
      highlights: [
        "Clinically monitored enamel-safe brightening",
        "Up to 8 shades lighter in 60 minutes",
        "Integrated anti-sensitivity desensitizers",
        "Includes personalized home touch-up suite"
      ],
      duration: "60 mins",
      recovery: "Immediate"
    },
    {
      id: "orthodontic-care",
      title: "Orthodontic Care",
      subtitle: "Clear Aligners & Aesthetic Alignment",
      shortDescription: "Discreet clear aligners and modern ceramic braces designed to harmonize tooth alignment, facial symmetry, and functional bite.",
      fullDescription: "Modern orthodontics without the inconvenience of heavy metal brackets. We utilize digital optical impression scanners to create customized clear aligner treatment plans, enabling you to preview your projected final smile before treatment even begins.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=85",
      highlights: [
        "3D intraoral digital scanning (zero messy putty)",
        "Virtually invisible removable aligners",
        "Virtual 3D treatment simulation preview",
        "Accelerated treatment cycles"
      ],
      duration: "6–18 months typical course",
      recovery: "Non-invasive"
    },
    {
      id: "cosmetic-dentistry",
      title: "Cosmetic Dentistry",
      subtitle: "Digital Smile Architecture & Veneers",
      shortDescription: "Handcrafted ultra-thin porcelain veneers, biomimetic composite bonding, and artistic smile makeovers tailored to your facial harmony.",
      fullDescription: "Cosmetic dentistry is where healthcare meets high art. From minimally prep ultra-thin porcelain veneers to micro-layer composite bonding, we craft natural smiles characterized by depth, subtle translucency, and individualized personality.",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=85",
      highlights: [
        "Ultra-thin ceramic and porcelain veneers",
        "Artistic composite edge bonding",
        "Laser gum contouring and smile symmetry",
        "Natural translucency and shade tailoring"
      ],
      duration: "Custom consultation plan",
      recovery: "Minimal to immediate"
    }
  ],

  // 7. FEATURED TREATMENT SHOWCASE
  featuredTreatment: {
    badge: "FEATURED CLINICAL SPECIALTY",
    title: "Dental Implants",
    tagline: "Restore your confidence with a natural-looking smile.",
    description: "Missing teeth affect more than aesthetics—they alter your bite, bone density, and facial structure. Dr. Rohan Rao's guided implant protocol pairs Swiss-engineered titanium implants with custom-milled zirconia crowns, delivering natural beauty and lasting functional chewing comfort.",
    benefits: [
      "Permanently anchored, feeling just like a natural tooth",
      "Restores 100% natural chewing force with zero slippage",
      "Prevents bone loss and preserves facial youthfulness",
      "Requires no grinding of neighboring healthy teeth"
    ],
    ctaText: "Discover Dental Implants",
    ctaTarget: "#appointment",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Precision Dental Implant Technology at SmileCare Dental Studio"
  },

  // 8. WHY CHOOSE US (STUDIO PILLARS)
  whyChooseUs: [
    {
      id: "personalized",
      number: "01",
      title: "Personalized Care",
      subtitle: "Tailored Patient Experience",
      description: "No rushed assembly-line dentistry. We schedule generous consultation windows to understand your concerns, review options openly, and craft treatment plans aligned with your goals."
    },
    {
      id: "modern-equipment",
      number: "02",
      title: "Modern Equipment",
      subtitle: "Digital Diagnostic Precision",
      description: "Our studio is fitted with intraoral 3D scanners, low-radiation digital radiography, rotary endodontics, and surgical operating microscopes for elevated clinical outcomes."
    },
    {
      id: "comfortable-env",
      number: "03",
      title: "Comfortable Environment",
      subtitle: "Calm, Boutique Studio Vibe",
      description: "Designed intentionally with ambient acoustic dampening, soothing warm cashmere tones, ergonomic Italian memory-foam dental chairs, and private operatory suites for complete tranquility."
    },
    {
      id: "experienced-team",
      number: "04",
      title: "Experienced Dental Team",
      subtitle: "Continuous Clinical Mastery",
      description: "Led by MDS specialist Dr. Rohan Rao alongside certified dental hygienists and nursing professionals trained in international patient safety and sterile infection control."
    }
  ],

  // 9. ASYMMETRICAL CURATED GALLERY
  gallery: [
    {
      id: "gal-1",
      title: "Private Operatory Suite",
      category: "Clinic Interior",
      aspect: "wide",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85",
      caption: "Our private operatory suites feature ergonomic seating, natural daylight, and soothing acoustics."
    },
    {
      id: "gal-2",
      title: "Welcome Reception Lounge",
      category: "Reception",
      aspect: "tall",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=85",
      caption: "A warm, quiet reception space offering unhurried check-ins and complimentary refreshments."
    },
    {
      id: "gal-3",
      title: "Advanced Diagnostic Technology",
      category: "Equipment",
      aspect: "standard",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=85",
      caption: "Digital 3D intraoral imaging suite allowing instant, crystal-clear diagnostic consultations."
    },
    {
      id: "gal-4",
      title: "Doctor Consultation Studio",
      category: "Doctor",
      aspect: "tall",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=85",
      caption: "Private consultation room where Dr. Rohan Rao reviews personalized treatment plans."
    },
    {
      id: "gal-5",
      title: "Natural Aesthetic Smile Design",
      category: "Smile Photography",
      aspect: "wide",
      image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=1200&q=85",
      caption: "Aesthetic smile transformations engineered for natural symmetry and lifelike warmth."
    },
    {
      id: "gal-6",
      title: "Hospital-Grade Sterilization",
      category: "Equipment",
      aspect: "standard",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=85",
      caption: "Multi-barrier sterilization protocols exceeding international patient hygiene standards."
    }
  ],

  // 10. TESTIMONIALS (CURATED DEMO EXPERIENCES)
  testimonials: [
    {
      quote: "From the quiet lounge to the treatment suite, every detail felt like a private club rather than a dental clinic. Dr. Rohan Rao's precise diagnosis and calm manner made my visit completely stress-free.",
      author: "Priya S.",
      location: "Indiranagar, Bengaluru",
      treatment: "Comprehensive Smile Makeover",
      rating: 5,
      date: "Recent Visit"
    },
    {
      quote: "I postponed getting a dental implant for over two years out of anxiety. The 3D guided procedure Dr. Rohan performed was seamless and virtually painless. Chewing feels 100% natural.",
      author: "Rajesh K.",
      location: "Koramangala, Bengaluru",
      treatment: "Precision Dental Implant",
      rating: 5,
      date: "Recent Visit"
    },
    {
      quote: "The degree of transparency and craftsmanship is remarkable. Dr. Rao took time to show me the 3D scans and gave me multiple restorative options with zero sales pressure. Exceptional care.",
      author: "Meera V.",
      location: "Lavelle Road, Bengaluru",
      treatment: "Porcelain Veneers & Restoration",
      rating: 5,
      date: "Recent Visit"
    },
    {
      quote: "Brought my father for a full restorative implant plan. Dr. Rohan and his team treated him with utmost gentleness and attentiveness. Undoubtedly the finest dental practice in Bengaluru.",
      author: "Arjun N.",
      location: "Whitefield, Bengaluru",
      treatment: "Full Mouth Rehabilitation",
      rating: 5,
      date: "Recent Visit"
    }
  ],

  // 11. FREQUENTLY ASKED QUESTIONS
  faqs: [
    {
      question: "What makes SmileCare Dental Studio different from standard clinics?",
      answer: "We operate on an unhurried, private-studio model. You receive dedicated one-on-one time with MDS specialist Dr. Rohan Rao in a tranquil private suite. We prioritize minimally invasive techniques, 3D precision, and clear treatment plans with zero hidden costs."
    },
    {
      question: "Are your treatments truly painless?",
      answer: "We utilize topical pre-numbing gels, computer-assisted micro-delivery systems, and gentle rotary instruments. The overwhelming majority of our patients describe their visits as completely comfortable and painless."
    },
    {
      question: "How do I schedule an appointment?",
      answer: "You can submit the online consultation request form below, message our studio concierge directly on WhatsApp, or call our priority reception line. Our desk will confirm your appointment time within business hours."
    },
    {
      question: "Do you offer consultations for cosmetic smile makeovers?",
      answer: "Yes. Our cosmetic consultation includes high-resolution digital smile photography and a personalized discussion of your aesthetic goals (porcelain veneers, composite bonding, teeth whitening, or alignment)."
    },
    {
      question: "What safety and sterilization standards do you follow?",
      answer: "We adhere to Class-B autoclave sterilization protocols with vacuum-sealed pouches opened in your presence, disposable barrier protection, and continuous hospital-grade air filtration."
    }
  ],

  // 12. SOCIAL MEDIA LINKS
  socialLinks: {
    instagram: "https://instagram.com/smilecarestudio.example",
    facebook: "https://facebook.com/smilecarestudio.example",
    linkedin: "https://linkedin.com/company/smilecarestudio.example",
    googleBusiness: "https://maps.google.com/?q=SmileCare+Dental+Studio+Bengaluru"
  },

  // 13. BALANCED LUXURY THEME TOKENS (Not too dark, not too light)
  theme: {
    primaryColor: "#1B2A38",         // Deep Atelier Navy Graphite (Refined, masculine luxury)
    primaryDark: "#131F2A",          // Midnight Atelier Slate
    primaryLight: "#EFF4F8",         // Subtle Cashmere Mint Mist
    accentGold: "#C5A265",           // Polished Champagne Bronze / Warm Gold
    accentGoldHover: "#AD8A4E",      // Deep Rich Bronze
    bgPrimary: "#FAF8F5",            // Warm Silk Alabaster / Cashmere Pearl (Balanced)
    bgSecondary: "#F1EDE6",          // Warm Brushed Stone
    bgCard: "#FFFFFF",               // Crisp White Cards
    textPrimary: "#1C242C",          // Rich Graphite Charcoal
    textSecondary: "#4D5763",        // Refined Soft Slate
    textMuted: "#7B8591",            // Pale Muted Gray
    borderSubtle: "#E5E0D8",         // Warm Brushed Metal Hairline
    borderAccent: "#D6C3A1"          // Champagne Gold Border
  },

  // 14. SEO & META CONFIGURATION
  seo: {
    pageTitle: "SmileCare Dental Studio | Dr. Rohan Rao | Premium Dental Care Bengaluru",
    metaDescription: "Experience bespoke, luxury dental care in Bengaluru with Dr. Rohan Rao (BDS, MDS). Microscopic endodontics, dental implants, clear aligners & cosmetic smile design in a tranquil private suite.",
    keywords: "luxury dentist Bengaluru, Dr Rohan Rao, dental clinic Indiranagar, dental implants Bangalore, cosmetic dentistry, painless root canal, clear aligners",
    ogTitle: "SmileCare Dental Studio — Luxury Dental Care in Bengaluru",
    ogDescription: "A Better Smile Begins With Better Care. Private dental suites, unhurried consultations, and advanced aesthetic dentistry with Dr. Rohan Rao.",
    ogImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85",
    canonicalUrl: "https://smilecarestudio.example/"
  }
};

// Export configuration for modular or global browser execution
if (typeof module !== "undefined" && module.exports) {
  module.exports = clinicConfig;
}
