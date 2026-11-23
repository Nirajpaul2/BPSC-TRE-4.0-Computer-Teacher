/**
 * NoteGov Exam Directory Controller
 * Manages search, filtering, bookmarks, following, calendar modal,
 * and seamless transition to the BPSC TRE 4.0 Suite.
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'notegov_saved_exams';
  const FOLLOW_KEY = 'notegov_followed_exams';
  let currentFilter = 'all'; // 'all' | 'board' | 'competitive' | 'saved'
  let savedExams = [];
  let followedExams = [];

  // Load saved bookmarks from localStorage
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    savedExams = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(savedExams)) savedExams = [];
  } catch (e) {
    savedExams = [];
  }

  // Load followed exams from localStorage
  try {
    const rawF = localStorage.getItem(FOLLOW_KEY);
    followedExams = rawF ? JSON.parse(rawF) : [];
    if (!Array.isArray(followedExams)) followedExams = [];
  } catch (e) {
    followedExams = [];
  }

  function saveSavedExams() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedExams));
    } catch (e) {
      console.warn('Could not save bookmarks to localStorage:', e);
    }
  }

  function saveFollowedExams() {
    try {
      localStorage.setItem(FOLLOW_KEY, JSON.stringify(followedExams));
    } catch (e) {
      console.warn('Could not save followed exams to localStorage:', e);
    }
  }

  // Toast notification helper
  function showToastNotification(message) {
    let toast = document.getElementById('notegov-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'notegov-toast';
      toast.style.cssText = 'position:fixed; bottom:24px; right:24px; z-index:9999; background:#0f172a; color:#fff; padding:12px 20px; border-radius:999px; font-size:0.88rem; font-weight:600; box-shadow:0 10px 25px rgba(0,0,0,0.3); opacity:0; transform:translateY(10px); transition:opacity 0.25s ease, transform 0.25s ease; pointer-events:none;';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
    }, 2800);
  }

  // Toggle bookmark for an exam ID
  window.toggleDirectorySaved = function (examId, event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    const idx = savedExams.indexOf(examId);
    let isSavedNow = false;
    if (idx >= 0) {
      savedExams.splice(idx, 1);
    } else {
      savedExams.push(examId);
      isSavedNow = true;
    }
    saveSavedExams();
    updateBookmarkButtons();
    filterDirectory();
    showToastNotification(isSavedNow ? '🔖 Exam saved to your collection.' : 'Exam removed from saved.');
  };

  function updateBookmarkButtons() {
    document.querySelectorAll('.exam-card').forEach(card => {
      const id = card.dataset.id;
      const btn = card.querySelector('.card-bookmark-btn, .directory-bookmark');
      const svg = btn ? btn.querySelector('svg') : null;
      const isSaved = savedExams.includes(id);

      if (btn && svg) {
        btn.setAttribute('aria-pressed', isSaved ? 'true' : 'false');
        btn.classList.toggle('saved', isSaved);
        if (isSaved) {
          svg.setAttribute('fill', 'currentColor');
        } else {
          svg.setAttribute('fill', 'none');
        }
      }
    });

    const btnNavSaved = document.getElementById('btnNavSaved');
    if (btnNavSaved) {
      btnNavSaved.classList.toggle('active', currentFilter === 'saved');
      const svg = btnNavSaved.querySelector('svg');
      if (svg) {
        svg.setAttribute('fill', currentFilter === 'saved' || savedExams.length > 0 ? 'currentColor' : 'none');
      }
    }
  }

  // Calendar Modal Controls
  window.openExamCalendarModal = function () {
    const modal = document.getElementById('calendarModal');
    if (modal) {
      modal.style.display = 'flex';
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeExamCalendarModal = function () {
    const modal = document.getElementById('calendarModal');
    if (modal) {
      modal.style.display = 'none';
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  // Language Switch
  window.setLanguage = function (lang) {
    const btnEn = document.getElementById('btnLangEn');
    const btnHi = document.getElementById('btnLangHi');
    if (btnEn) btnEn.classList.toggle('active', lang === 'en');
    if (btnHi) btnHi.classList.toggle('active', lang === 'hi');
    showToastNotification(lang === 'hi' ? 'भाषा: हिन्दी चयनित' : 'Language: English selected');
  };

  // Scroll to Updates widget
  window.scrollToUpdates = function () {
    const updates = document.getElementById('widgetUpdates');
    if (updates) {
      updates.scrollIntoView({ behavior: 'smooth', block: 'center' });
      updates.style.boxShadow = '0 0 0 3px rgba(234, 88, 12, 0.4)';
      setTimeout(() => {
        updates.style.boxShadow = '';
      }, 1500);
    }
  };

  // Updates tab switcher (All updates vs Following)
  window.setUpdatesTab = function (tab) {
    const tabAll = document.getElementById('tabAllUpdates');
    const tabFoll = document.getElementById('tabFollowingUpdates');
    if (tabAll) tabAll.classList.toggle('active', tab === 'all');
    if (tabFoll) tabFoll.classList.toggle('active', tab === 'following');

    if (tab === 'following') {
      showToastNotification('🔔 Showing updates from exams you follow.');
    }
  };

  // Search Input Synchronization & Filtering
  window.syncSearchInputs = function (source) {
    const val = source.value;
    const desktopInput = document.getElementById('directorySearchInput');
    const mobileInput = document.getElementById('directorySearchInputMobile');
    if (desktopInput && desktopInput !== source) desktopInput.value = val;
    if (mobileInput && mobileInput !== source) mobileInput.value = val;
    filterDirectory();
  };

  // Filter and Search Directory Cards
  window.filterDirectory = function () {
    const searchInput = document.getElementById('directorySearchInput');
    const searchInputMobile = document.getElementById('directorySearchInputMobile');
    const query = ((searchInput ? searchInput.value : '') || (searchInputMobile ? searchInputMobile.value : '')).trim().toLowerCase();
    const terms = query.split(/\s+/).filter(Boolean);

    const clearBtn = document.getElementById('clearDirectorySearch');
    const clearBtnMobile = document.getElementById('clearDirectorySearchMobile');
    if (clearBtn) clearBtn.style.display = query ? 'inline-block' : 'none';
    if (clearBtnMobile) clearBtnMobile.style.display = query ? 'inline-block' : 'none';

    let totalVisible = 0;
    const sections = document.querySelectorAll('.exam-section');

    sections.forEach(section => {
      const sectionGroup = section.dataset.group; // 'board' or 'competitive'
      const cards = section.querySelectorAll('.exam-card');
      let groupVisible = 0;

      cards.forEach(card => {
        const id = card.dataset.id;
        const groupType = card.dataset.group;
        const title = (card.dataset.title || '').toLowerCase();
        const termsText = (card.dataset.terms || '').toLowerCase();
        const searchable = title + ' ' + termsText + ' ' + groupType;

        let matchesFilter = true;
        if (currentFilter === 'board') {
          matchesFilter = groupType === 'board';
        } else if (currentFilter === 'competitive') {
          matchesFilter = groupType === 'competitive';
        } else if (currentFilter === 'saved') {
          matchesFilter = savedExams.includes(id);
        }

        let matchesSearch = true;
        if (terms.length > 0) {
          matchesSearch = terms.every(t => searchable.includes(t));
        }

        const isVisible = matchesFilter && matchesSearch;
        card.style.display = isVisible ? 'flex' : 'none';
        if (isVisible) {
          groupVisible++;
          totalVisible++;
        }
      });

      // Show section only if it has visible cards and filter allows
      const allowGroup = currentFilter === 'all' || currentFilter === 'saved' || currentFilter === sectionGroup;
      section.style.display = (groupVisible > 0 && allowGroup) ? 'block' : 'none';
    });

    // Handle Empty State
    const emptyState = document.getElementById('directoryEmpty');
    const emptyTitle = document.getElementById('directoryEmptyTitle');
    const emptyDesc = document.getElementById('directoryEmptyDesc');
    const emptyBtn = document.getElementById('directoryEmptyBtn');

    if (emptyState) {
      if (totalVisible === 0) {
        emptyState.style.display = 'block';
        if (currentFilter === 'saved' && terms.length === 0) {
          emptyTitle.textContent = 'No saved exams yet';
          emptyDesc.textContent = 'Click the bookmark icon on any exam card to save it for quick access.';
          emptyBtn.textContent = 'Browse all exams';
          emptyBtn.onclick = function () { setDirectoryFilter('all'); };
        } else {
          emptyTitle.textContent = 'No exams found';
          emptyDesc.textContent = 'Try a different search term or clear your filters.';
          emptyBtn.textContent = 'Clear search';
          emptyBtn.onclick = function () { clearDirectorySearch(); };
        }
      } else {
        emptyState.style.display = 'none';
      }
    }
  };

  window.setDirectoryFilter = function (filterId) {
    currentFilter = filterId;

    // Update left sidebar active items
    const btnExplore = document.getElementById('btnNavExplore');
    const btnSaved = document.getElementById('btnNavSaved');
    if (btnExplore) btnExplore.classList.toggle('active', filterId === 'all');
    if (btnSaved) btnSaved.classList.toggle('active', filterId === 'saved');

    updateBookmarkButtons();
    filterDirectory();

    // Scroll slightly if scrolled down
    const directoryContainer = document.querySelector('.dir-center-col');
    if (directoryContainer && window.scrollY > 200) {
      directoryContainer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  window.clearDirectorySearch = function () {
    const desktopInput = document.getElementById('directorySearchInput');
    const mobileInput = document.getElementById('directorySearchInputMobile');
    if (desktopInput) desktopInput.value = '';
    if (mobileInput) mobileInput.value = '';

    const clearBtn = document.getElementById('clearDirectorySearch');
    const clearBtnMobile = document.getElementById('clearDirectorySearchMobile');
    if (clearBtn) clearBtn.style.display = 'none';
    if (clearBtnMobile) clearBtnMobile.style.display = 'none';

    filterDirectory();
  };

  // -------------------------------------------------------------
  // Transition between NoteGov Directory and BPSC Section
  // -------------------------------------------------------------
  window.openBpscSection = function (tabName) {
    const dirView = document.getElementById('directory-view');
    const bpscSection = document.getElementById('bpsc-section');

    if (dirView) dirView.style.display = 'none';
    if (bpscSection) bpscSection.style.display = 'block';

    const targetTab = tabName ? `tab-${tabName}` : 'tab-dashboard';
    if (typeof window.switchTab === 'function') {
      window.switchTab(targetTab);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.showDirectoryView = function () {
    const dirView = document.getElementById('directory-view');
    const bpscSection = document.getElementById('bpsc-section');

    if (dirView) dirView.style.display = 'flex';
    if (bpscSection) bpscSection.style.display = 'none';

    if (history.replaceState) {
      history.replaceState(null, null, '#/');
    } else {
      window.location.hash = '#/';
    }

    filterDirectory();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Attach listeners
  function initDirectory() {
    const searchInput = document.getElementById('directorySearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        filterDirectory();
      });
      searchInput.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          clearDirectorySearch();
        }
      });
    }

    // Keyboard support for ESC on modal
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        window.closeExamCalendarModal();
      }
    });

    updateBookmarkButtons();

    // Check initial route hash
    const rawHash = (window.location.hash || '').replace('#', '').replace(/^\//, '');
    const bpscTabs = [
      'bpsc', 'dashboard', 'syllabus', 'ncert', 'cheatsheet',
      'marathon', 'practice', 'support', 'blueprint', 'cutoff-matrix'
    ];

    if (bpscTabs.includes(rawHash)) {
      const tab = (rawHash === 'bpsc' || rawHash === 'blueprint' || rawHash === 'cutoff-matrix') ? 'dashboard' : rawHash;
      window.openBpscSection(tab);
      if (rawHash === 'blueprint' || rawHash === 'cutoff-matrix') {
        setTimeout(function () {
          const bp = document.getElementById('blueprintSection');
          if (bp) bp.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    } else if (rawHash === 'saved') {
      setDirectoryFilter('saved');
    } else if (rawHash === 'board') {
      setDirectoryFilter('board');
    } else if (rawHash === 'competitive') {
      setDirectoryFilter('competitive');
    } else {
      showDirectoryView();
    }
  }

  // Initialize once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDirectory);
  } else {
    initDirectory();
  }
})();
