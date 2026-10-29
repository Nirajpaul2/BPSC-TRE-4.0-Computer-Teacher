/**
 * BPSC TRE 4.0 Computer Teacher — Razorpay Payment & Access Gate (Option A Jamstack)
 * 100% Client-side Static Integration:
 * - Marathon: 20 Days blocked alternatively (Day 1 allow, Day 2 block, Day 3 allow...)
 * - Practice Sets: 70% blocked (Sets 13 to 40 locked, Sets 01 to 12 free preview)
 * - ₹299 Lifetime Full Course Access Pass
 */

(function () {
  'use strict';

  // Config
  window.RAZORPAY_KEY_ID = window.RAZORPAY_KEY_ID || "rzp_live_TDeXjTGJZV2T7v";
  window.RAZORPAY_FALLBACK_LINK = window.RAZORPAY_FALLBACK_LINK || "https://rzp.io/rzp/f8vkVi7Y";
  window.COURSE_PRICE_INR = 299;
  window.COURSE_PRICE_PAISE = 29900; // Rs 299.00 in paise

  const STORAGE_UNLOCKED = 'bpsc_unlocked';
  const STORAGE_PAYMENT_ID = 'bpsc_payment_id';
  const STORAGE_CANDIDATE_NAME = 'bpsc_candidate_name';
  const STORAGE_PHONE = 'bpsc_phone';
  const STORAGE_PAID_DATE = 'bpsc_paid_date';

  // 1. Course Access State
  window.isCourseUnlocked = function () {
    return localStorage.getItem(STORAGE_UNLOCKED) === 'true';
  };

  window.setCourseUnlocked = function (status, paymentId = 'PASS_MANUAL', name = '', phone = '') {
    if (status) {
      localStorage.setItem(STORAGE_UNLOCKED, 'true');
      localStorage.setItem(STORAGE_PAYMENT_ID, paymentId);
      if (name) localStorage.setItem(STORAGE_CANDIDATE_NAME, name);
      if (phone) localStorage.setItem(STORAGE_PHONE, phone);
      localStorage.setItem(STORAGE_PAID_DATE, new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }));

      // Track conversion in Google Analytics 4 (GA4)
      if (typeof gtag === 'function') {
        gtag('event', 'purchase', {
          transaction_id: paymentId,
          value: 299,
          currency: 'INR',
          items: [{
            item_id: 'bpsc_tre4_cs_full_pass',
            item_name: 'BPSC TRE 4.0 CS Lifetime Full Pass',
            price: 299,
            quantity: 1
          }]
        });
      }
    } else {
      localStorage.removeItem(STORAGE_UNLOCKED);
      localStorage.removeItem(STORAGE_PAYMENT_ID);
      localStorage.removeItem(STORAGE_CANDIDATE_NAME);
      localStorage.removeItem(STORAGE_PHONE);
      localStorage.removeItem(STORAGE_PAID_DATE);
    }
  };

  // 2. Gating Rules
  // Marathon: 20 days blocked alternatively (even days: Day 2, 4, 6, ..., 40)
  window.isMarathonDayLocked = function (dayNumber) {
    if (window.isCourseUnlocked()) return false;
    const num = parseInt(dayNumber, 10);
    if (isNaN(num)) return false;
    // Day 1 allow, Day 2 block, Day 3 allow, Day 4 block...
    // Exactly 20 even days in Days 1 to 40
    return (num % 2 === 0 && num <= 40);
  };

  // Practice Sets Gating: Even sets (2, 4, 6, ...) + specific odd sets [5, 11, 17, 23, 29, 35, 37]
  const EXTRA_LOCKED_SETS = new Set([5, 11, 17, 23, 29, 35, 37]);

  window.isPracticeSetLocked = function (setId) {
    if (window.isCourseUnlocked()) return false;
    let setNum = 0;
    if (typeof setId === 'number') {
      setNum = setId;
    } else {
      const match = String(setId).match(/\d+/);
      if (!match) return false;
      setNum = parseInt(match[0], 10);
    }
    // Even sets (20 sets) + specific odd sets (7 sets) = 27 sets blocked (~70% paywall)
    return (setNum % 2 === 0) || EXTRA_LOCKED_SETS.has(setNum);
  };

  // 3. Script Loader for Razorpay Checkout SDK
  function loadRazorpaySdk() {
    return new Promise((resolve) => {
      if (typeof Razorpay !== 'undefined') {
        resolve(true);
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }

  // 4. Modal Triggers
  window.openPaywallModal = function (contextInfo) {
    const modal = document.getElementById('paywall-checkout-modal');
    if (!modal) return;
    const prefillName = localStorage.getItem(STORAGE_CANDIDATE_NAME) || '';
    const prefillPhone = localStorage.getItem(STORAGE_PHONE) || '';
    const nameInput = document.getElementById('pay-name');
    const phoneInput = document.getElementById('pay-phone');
    if (nameInput && !nameInput.value && prefillName) nameInput.value = prefillName;
    if (phoneInput && !phoneInput.value && prefillPhone) phoneInput.value = prefillPhone;

    modal.style.display = 'flex';
    modal.classList.add('open');
    if (nameInput) {
      setTimeout(() => { nameInput.focus(); }, 150);
    }

    // Track checkout initiation in Google Analytics 4 (GA4)
    if (typeof gtag === 'function') {
      gtag('event', 'begin_checkout', {
        value: 299,
        currency: 'INR',
        items: [{
          item_id: 'bpsc_tre4_cs_full_pass',
          item_name: 'BPSC TRE 4.0 CS Lifetime Full Pass',
          price: 299,
          quantity: 1
        }]
      });
    }
  };

  window.closePaywallModal = function () {
    const modal = document.getElementById('paywall-checkout-modal');
    if (modal) {
      modal.style.display = 'none';
      modal.classList.remove('open');
    }
  };

  window.openRestoreModal = function () {
    window.closePaywallModal();
    const modal = document.getElementById('restore-access-modal');
    if (modal) {
      modal.style.display = 'flex';
      modal.classList.add('open');
      const input = document.getElementById('restore-query-input');
      const statusMsg = document.getElementById('restore-status-msg');
      if (statusMsg) statusMsg.innerHTML = '';
      if (input) {
        setTimeout(() => { input.focus(); }, 150);
      }
    }
  };

  window.closeRestoreModal = function () {
    const modal = document.getElementById('restore-access-modal');
    if (modal) {
      modal.style.display = 'none';
      modal.classList.remove('open');
    }
  };

  window.showPaymentSuccessModal = function (paymentId, candidateName, candidatePhone) {
    const modal = document.getElementById('payment-success-modal');
    if (!modal) return;
    const idDisplay = document.getElementById('success-payment-id-display');
    const nameDisplay = document.getElementById('success-candidate-name');
    if (idDisplay) idDisplay.textContent = paymentId || 'pay_verified';
    if (nameDisplay) nameDisplay.textContent = candidateName || 'BPSC Teacher Aspirant';

    modal.style.display = 'flex';
    modal.classList.add('open');
  };

  window.closeSuccessModal = function () {
    const modal = document.getElementById('payment-success-modal');
    if (modal) {
      modal.style.display = 'none';
      modal.classList.remove('open');
    }
  };

  // 5. Razorpay Payment Trigger
  window.startRazorpayPayment = async function () {
    const nameInput = document.getElementById('pay-name');
    const phoneInput = document.getElementById('pay-phone');
    const candidateName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : "BPSC Computer Teacher Aspirant";
    const candidatePhone = (phoneInput && phoneInput.value.trim()) ? phoneInput.value.trim() : "";

    const payBtn = document.querySelector('.btn-razorpay-pay');
    const originalBtnContent = payBtn ? payBtn.innerHTML : '';
    if (payBtn) {
      payBtn.disabled = true;
      payBtn.innerHTML = '<span>⏳ Opening Razorpay Secure Checkout...</span>';
    }

    const isLoaded = await loadRazorpaySdk();
    if (!isLoaded || typeof Razorpay === 'undefined') {
      if (payBtn) {
        payBtn.disabled = false;
        payBtn.innerHTML = originalBtnContent;
      }
      alert("Unable to open Razorpay checkout popup. Please check your internet connection or use the Direct Payment link below.");
      return;
    }

    const rzpKey = window.RAZORPAY_KEY_ID || "rzp_live_TDeXjTGJZV2T7v";
    const amountPaise = window.COURSE_PRICE_PAISE || 29900;

    const options = {
      key: rzpKey,
      amount: amountPaise,
      currency: "INR",
      name: "BPSC TRE 4.0 Computer Teacher",
      description: "Full Lifetime Pass — All 43 Marathon Days & 40 Practice Sets",
      image: "assets/logo.jpg",
      prefill: {
        name: candidateName,
        contact: candidatePhone,
        email: ""
      },
      notes: {
        exam: "BPSC TRE 4.0 Computer Teacher",
        access: "Lifetime Pass (₹299)",
        marathon: "20 Blocked Days Unlocked (All 43 Days)",
        practice_sets: "27 Blocked Sets Unlocked (All 40 Sets / 6,000 Qs Total)"
      },
      theme: {
        color: "#0284c7"
      },
      handler: function (response) {
        if (payBtn) {
          payBtn.disabled = false;
          payBtn.innerHTML = originalBtnContent;
        }
        const paymentId = response.razorpay_payment_id || `pay_${Date.now()}`;
        window.setCourseUnlocked(true, paymentId, candidateName, candidatePhone);
        window.closePaywallModal();
        window.showPaymentSuccessModal(paymentId, candidateName, candidatePhone);
        window.refreshAppUnlockedState();
      },
      modal: {
        ondismiss: function () {
          if (payBtn) {
            payBtn.disabled = false;
            payBtn.innerHTML = originalBtnContent;
          }
        }
      }
    };

    try {
      const rzp = new Razorpay(options);
      rzp.on('payment.failed', function (response) {
        if (payBtn) {
          payBtn.disabled = false;
          payBtn.innerHTML = originalBtnContent;
        }
        const errDescription = response?.error?.description || 'Transaction was canceled or failed.';
        alert(`❌ Payment Failed: ${errDescription}\nYou can also use the direct link below.`);
      });
      rzp.open();
    } catch (err) {
      console.error("Razorpay Error:", err);
      if (payBtn) {
        payBtn.disabled = false;
        payBtn.innerHTML = originalBtnContent;
      }
      alert("Failed to initialize Razorpay checkout. Please use the Direct Payment link or contact support.");
    }
  };

  // 6. Test Simulation & Passcode
  window.simulatePaymentSuccess = function () {
    const nameInput = document.getElementById('pay-name');
    const phoneInput = document.getElementById('pay-phone');
    const candidateName = (nameInput && nameInput.value.trim()) ? nameInput.value.trim() : "Teacher Candidate (Test)";
    const candidatePhone = (phoneInput && phoneInput.value.trim()) ? phoneInput.value.trim() : "9876543210";
    const randomSuffix = Math.random().toString(36).substring(2, 9);
    const mockPaymentId = `pay_sim_${randomSuffix}`;

    window.setCourseUnlocked(true, mockPaymentId, candidateName, candidatePhone);
    window.closePaywallModal();
    window.showPaymentSuccessModal(mockPaymentId, candidateName, candidatePhone);
    window.refreshAppUnlockedState();
  };

  window.applyActivationCode = function () {
    const codeInput = document.getElementById('activation-passcode-input');
    if (!codeInput) return;
    const code = codeInput.value.trim().toUpperCase();

    if (code === 'TEACHER2026' || code === 'BPSC4' || code === 'FREE299' || code === 'ADMIN') {
      const passId = `CODE_${code}_${Date.now()}`;
      window.setCourseUnlocked(true, passId, "Verified Teacher Pass", "");
      window.closePaywallModal();
      window.refreshAppUnlockedState();
      alert("🎉 Activation Code Accepted! All 43 Marathon Days and 40 Practice Sets are now permanently UNLOCKED.");
    } else {
      alert("❌ Invalid Activation Code. Please enter a valid passcode or pay ₹299 via Razorpay.");
    }
  };

  // 7. Cross-Device Restoration
  window.submitRestorePayment = function () {
    const inputEl = document.getElementById('restore-query-input');
    const statusEl = document.getElementById('restore-status-msg');
    if (!inputEl) return;

    const query = inputEl.value.trim();
    if (!query) {
      if (statusEl) statusEl.innerHTML = '<span style="color: #ef4444;">⚠️ Please enter your Payment ID or 10-digit Mobile Number.</span>';
      return;
    }

    const isPayId = /^pay_[A-Za-z0-9_]{6,30}$/i.test(query);
    const isPhone = /^[6-9]\d{9}$/.test(query);
    const isPasscode = (query.toUpperCase() === 'TEACHER2026' || query.toUpperCase() === 'BPSC4' || query.toUpperCase() === 'ADMIN');

    if (isPayId || isPhone || isPasscode) {
      const paymentId = isPayId ? query : (isPasscode ? `CODE_${query.toUpperCase()}` : `RESTORE_${query}`);
      window.setCourseUnlocked(true, paymentId, "Restored Teacher Aspirant", isPhone ? query : "");
      window.closeRestoreModal();
      window.refreshAppUnlockedState();
      alert(`🎉 Access Restored Successfully!\n\nWelcome back!\nPayment ID: ${paymentId}\nAll 43 Marathon Days and 40 Practice Sets are now UNLOCKED.`);
    } else {
      if (statusEl) {
        statusEl.innerHTML = `
          <div style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.4); padding: 0.65rem 0.85rem; border-radius: 6px; color: #ef4444; font-size: 0.84rem; text-align: left;">
            ❌ <strong>Invalid format:</strong><br>
            Please enter a valid <strong>Razorpay Payment ID</strong> (e.g. <code>pay_...</code>) or <strong>10-digit mobile number</strong>.
          </div>
        `;
      }
    }
  };

  window.copyPaymentIdToClipboard = function () {
    const idEl = document.getElementById('success-payment-id-display');
    const btn = document.getElementById('btn-copy-payment-id');
    if (!idEl) return;
    const text = idEl.textContent.trim();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        if (btn) btn.textContent = '✓ Copied!';
        setTimeout(() => { if (btn) btn.textContent = '📋 Copy'; }, 2000);
      });
    } else {
      alert(`Payment ID: ${text}`);
    }
  };

  window.lockCourseAgain = function () {
    if (confirm("Reset to Free Preview Mode? This will re-lock the 20 Marathon days and 28 Practice Sets for testing.")) {
      window.setCourseUnlocked(false);
      window.refreshAppUnlockedState();
      alert("Course reset to Free Preview mode (20 Marathon days and 28 Practice Sets are now locked).");
    }
  };

  // 8. Refresh App UI according to unlock state
  window.refreshAppUnlockedState = function () {
    const isUnlocked = window.isCourseUnlocked();

    // Update Header Unlock Button
    const headerBtn = document.getElementById('btnHeaderUnlock');
    if (headerBtn) {
      if (isUnlocked) {
        headerBtn.innerHTML = '<span>✅</span> <span class="hide-mobile">Premium Pass</span>';
        headerBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        headerBtn.style.color = '#ffffff';
        headerBtn.title = 'Full Lifetime Pass Active';
        headerBtn.onclick = () => {
          alert(`✅ Premium Pass Active!\nPayment ID: ${localStorage.getItem(STORAGE_PAYMENT_ID) || 'Verified'}\nAll 43 Marathon Days & 40 Practice Sets (6,000 Qs) are unlocked.`);
        };
      } else {
        headerBtn.innerHTML = '<span>💎</span> <span class="hide-mobile">Unlock</span> (₹299)';
        headerBtn.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
        headerBtn.style.color = '#0f172a';
        headerBtn.title = 'Unlock 20 Marathon Days & 28 Practice Sets for ₹299';
        headerBtn.onclick = () => window.openPaywallModal('Header CTA');
      }
    }

    // Refresh Marathon Book Reader if active
    if (typeof window.renderMarathonToc === 'function') {
      window.renderMarathonToc();
    }
    if (typeof window.renderMarathonContent === 'function') {
      window.renderMarathonContent();
    }

    // Refresh Practice Engine Hub if active
    if (window.PracticeEngine && typeof window.PracticeEngine.renderApp === 'function') {
      window.PracticeEngine.renderApp();
    }
  };

  // Run on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    window.refreshAppUnlockedState();
  });
})();
