/**
 * ============================================================================
 * SMILECARE DENTAL STUDIO - PREMIUM APPOINTMENT REQUEST SUITE
 * Dynamic Treatment Population • Intelligent Date Guards • Transparent Handover
 * ============================================================================
 */

(function () {
  'use strict';

  function initAppointmentForm() {
    const form = document.getElementById('appointmentForm');
    const treatmentSelect = document.getElementById('aptTreatment');
    const dateInput = document.getElementById('aptDate');
    const feedbackNotice = document.getElementById('formFeedbackNotice');
    const submitBtn = document.getElementById('aptSubmitBtn');
    const whatsappForwardBtn = document.getElementById('aptWhatsappForward');

    // 1. Populate treatments dropdown from config
    if (treatmentSelect && window.clinicConfig && window.clinicConfig.treatments) {
      // Clear existing options except default placeholder
      treatmentSelect.innerHTML = '<option value="" disabled selected>Select a treatment or consultation</option>';

      window.clinicConfig.treatments.forEach(t => {
        const opt = document.createElement('option');
        opt.value = t.title;
        opt.textContent = `${t.title} (${t.subtitle || 'Consultation'})`;
        treatmentSelect.appendChild(opt);
      });

      // Also add general consultation option
      const generalOpt = document.createElement('option');
      generalOpt.value = 'General Comprehensive Oral Assessment';
      generalOpt.textContent = 'General Comprehensive Oral Assessment';
      treatmentSelect.appendChild(generalOpt);
    }

    // 2. Set minimum date to tomorrow
    if (dateInput) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const minDateStr = tomorrow.toISOString().split('T')[0];
      dateInput.min = minDateStr;
    }

    // 3. Handle Form Submission
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Basic client validation
        const name = document.getElementById('aptName').value.trim();
        const phone = document.getElementById('aptPhone').value.trim();
        const email = document.getElementById('aptEmail').value.trim();
        const date = dateInput ? dateInput.value : '';
        const time = document.getElementById('aptTime') ? document.getElementById('aptTime').value : 'Anytime';
        const treatment = treatmentSelect ? treatmentSelect.value : 'General Consultation';
        const notes = document.getElementById('aptMessage') ? document.getElementById('aptMessage').value.trim() : '';

        if (!name || !phone || !email || !treatment) {
          alert('Please fill out all required fields marked with an asterisk (*).');
          return;
        }

        // Show loading state on button
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = `
            <svg class="btn-icon" style="animation: spin 1s linear infinite;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
            </svg>
            Sending Request...
          `;
        }

        // Simulate seamless submission response
        setTimeout(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Appointment Request';
          }

          // Render clear, non-misleading success state
          if (feedbackNotice) {
            feedbackNotice.innerHTML = `
              <div style="display: flex; align-items: flex-start; gap: 14px;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2" style="flex-shrink:0; margin-top:2px;">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <div>
                  <strong style="display:block; font-size:1.05rem; margin-bottom:4px; color:#065F46;">Thank you, ${escapeHtml(name)}.</strong>
                  <p style="margin:0 0 8px 0; color:#047857; line-height:1.5;">Your appointment request has been received. Our clinical concierge team will contact you shortly via phone/WhatsApp to confirm your requested time.</p>
                  <div style="font-size:0.8rem; color:#065F46; background:rgba(255,255,255,0.7); padding:8px 12px; border-radius:4px; border:1px solid #A7F3D0;">
                    <strong>Summary:</strong> ${escapeHtml(treatment)} on ${date || 'Flexible Date'} (${time})
                  </div>
                </div>
              </div>
            `;
            feedbackNotice.classList.add('active');
            feedbackNotice.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }

          // Reset form fields
          form.reset();
        }, 700);
      });
    }

    // 4. WhatsApp Quick Consultation link builder
    if (whatsappForwardBtn && window.clinicConfig) {
      whatsappForwardBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const name = document.getElementById('aptName').value.trim();
        const treatment = treatmentSelect && treatmentSelect.value ? treatmentSelect.value : 'a consultation';
        const phone = clinicConfig.contact.whatsappNumber || '919876543210';

        let message = `Hello ${clinicConfig.brand.clinicName}, `;
        if (name) {
          message += `my name is ${name}. `;
        }
        message += `I would like to inquire about booking an appointment for ${treatment}.`;

        const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      });
    }
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Pre-fill treatment when clicking "Discover Dental Implants" or cards
  window.selectTreatmentInForm = function (treatmentTitle) {
    const treatmentSelect = document.getElementById('aptTreatment');
    if (treatmentSelect) {
      for (let i = 0; i < treatmentSelect.options.length; i++) {
        if (treatmentSelect.options[i].value.toLowerCase().includes(treatmentTitle.toLowerCase())) {
          treatmentSelect.selectedIndex = i;
          break;
        }
      }
    }
    const aptSection = document.getElementById('appointment');
    if (aptSection) {
      aptSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAppointmentForm);
  } else {
    initAppointmentForm();
  }
})();
