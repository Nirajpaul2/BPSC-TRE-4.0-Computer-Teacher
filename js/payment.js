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
      const input = document.getElementById('restore-passcode-input') || document.getElementById('restore-query-input');
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
      alert("Unable to open Razorpay checkout popup. Please check your internet connection or contact support.");
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
        alert(`❌ Payment Failed: ${errDescription}\nPlease retry or contact support via WhatsApp/Email.`);
      });
      rzp.open();
    } catch (err) {
      console.error("Razorpay Error:", err);
      if (payBtn) {
        payBtn.disabled = false;
        payBtn.innerHTML = originalBtnContent;
      }
      alert("Failed to initialize Razorpay checkout. Please check your connection or contact support.");
    }
  };

  // 6. Cross-Device Restoration & Admin Verification (Option A: Secure Support Verification)
  // Protected SHA-256 hashes for authorized admin activation passcodes (e.g. TEACHER2026, AGILUDIC2026)
  const AUTHORIZED_PASSCODE_HASHES = new Set([
    'f9d9335d70b421c989cdd6aaae450adcefd67e73d336c2fc4547ad54a71911e8', // TEACHER2026
    'f8f94a33e17aa96b1e663818d792628daf0b62d0b9aeab30424a533b4ab6f821', // AGILUDIC2026
    'fe6d276de84c52a54f2527b2ca1a7ead43b67d6f2e76e04235b18d15e74124b4'  // BPSC4ADMIN
  ]);

  async function computeSha256Hex(text) {
    try {
      const enc = new TextEncoder();
      const data = enc.encode(text.trim().toUpperCase());
      const hashBuf = await crypto.subtle.digest('SHA-256', data);
      const hashArr = Array.from(new Uint8Array(hashBuf));
      return hashArr.map(b => b.toString(16).padStart(2, '0')).join('');
    } catch (e) {
      return '';
    }
  }

  window.submitRestorePasscode = async function () {
    const inputEl = document.getElementById('restore-passcode-input');
    const statusEl = document.getElementById('restore-status-msg');
    if (!inputEl) return;

    const code = inputEl.value.trim().toUpperCase();
    if (!code) {
      if (statusEl) statusEl.innerHTML = '<span style="color: #ef4444;">⚠️ Please enter an activation passcode.</span>';
      return;
    }

    const hash = await computeSha256Hex(code);
    if (AUTHORIZED_PASSCODE_HASHES.has(hash)) {
      const passId = `AUTH_PASS_${Date.now()}`;
      window.setCourseUnlocked(true, passId, "Verified Teacher Aspirant", "");
      window.closeRestoreModal();
      window.refreshAppUnlockedState();
      alert("🎉 Activation Successful!\n\nAll 43 Marathon Days and 40 Practice Sets are now permanently unlocked on this device.");
    } else {
      if (statusEl) {
        statusEl.innerHTML = `
          <div style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.4); padding: 0.65rem 0.85rem; border-radius: 6px; color: #ef4444; font-size: 0.84rem; text-align: left; line-height: 1.5;">
            ❌ <strong>Invalid Activation Passcode:</strong><br>
            Random phone numbers and unverified Payment IDs cannot unlock the course.<br>
            Please message WhatsApp <strong><a href="https://wa.me/919942419837?text=Hello%20BPSC%20Support,%20I%20have%20paid%20Rs%20299%20for%20the%20course.%20Please%20restore%20my%20access.%20My%20Razorpay%20Payment%20ID%20is:%20" target="_blank" style="color:#10b981; font-weight:700;">+91 99424 19837</a></strong> with your Razorpay Payment ID to receive your authorized activation code.
          </div>
        `;
      }
    }
  };

  // Backward compatibility alias for modal input
  window.submitRestorePayment = window.submitRestorePasscode;

  // Check URL parameter for one-click admin unlock link (?unlock=TEACHER2026)
  async function checkUrlUnlockParameter() {
    try {
      const params = new URLSearchParams(window.location.search);
      const unlockParam = params.get('unlock');
      if (unlockParam) {
        const hash = await computeSha256Hex(unlockParam);
        if (AUTHORIZED_PASSCODE_HASHES.has(hash)) {
          const passId = `AUTH_LINK_${Date.now()}`;
          window.setCourseUnlocked(true, passId, "Verified Teacher Aspirant", "");
          window.refreshAppUnlockedState();
          // Clean URL without page refresh
          const cleanUrl = window.location.origin + window.location.pathname;
          window.history.replaceState({}, document.title, cleanUrl);
          setTimeout(() => {
            alert("🎉 Course Access Activated!\n\nWelcome to BPSC TRE 4.0 Computer Teacher. All 43 Marathon Days and 40 Practice Sets are now permanently unlocked.");
          }, 350);
        }
      }
    } catch (e) {
      // Ignore URL parsing errors
    }
  }

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

  // 7. Refresh App UI according to unlock state
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
        headerBtn.innerHTML = '<span>💎</span> <span class="hide-mobile">Unlock</span> <s style="opacity:0.75; font-size:0.76rem; text-decoration:line-through;">₹999</s> <strong>₹299</strong> <span class="discount-sticker-pill">70% OFF</span>';
        headerBtn.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
        headerBtn.style.color = '#0f172a';
        headerBtn.title = 'Unlock Full Course: ₹999 ₹299 (70% OFF — Limited Time Launch Pass)';
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
    checkUrlUnlockParameter();
    window.refreshAppUnlockedState();
  });
})();
