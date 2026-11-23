/**
 * NoteGov Exam Directory Controller
 * Manages search, filtering, bookmarks, and seamless transition to BPSC Section.
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'notegov_saved_exams';
  let currentFilter = 'all'; // 'all' | 'board' | 'competitive' | 'saved'
  let savedExams = [];

  // Load saved bookmarks from localStorage
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    savedExams = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(savedExams)) savedExams = [];
  } catch (e) {
    savedExams = [];
  }

  function saveSavedExams() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedExams));
    } catch (e) {
      console.warn('Could not save to localStorage:', e);
    }
  }

  // Toggle bookmark for an exam ID
  window.toggleDirectorySaved = function (examId, event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    const idx = savedExams.indexOf(examId);
    if (idx >= 0) {
      savedExams.splice(idx, 1);
    } else {
      savedExams.push(examId);
    }
    saveSavedExams();
    updateBookmarkButtons();
    filterDirectory();
  };

  function updateBookmarkButtons() {
    document.querySelectorAll('.exam-directory .exam-card').forEach(card => {
      const id = card.dataset.id;
      const btn = card.querySelector('.directory-bookmark');
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

    const headerSavedBtn = document.getElementById('btnDirectorySaved');
    if (headerSavedBtn) {
      headerSavedBtn.classList.toggle('active', currentFilter === 'saved');
      const svg = headerSavedBtn.querySelector('svg');
      if (svg) {
        svg.setAttribute('fill', currentFilter === 'saved' || savedExams.length > 0 ? 'currentColor' : 'none');
      }
    }
  }

  // Filter and Search Directory Cards
  window.filterDirectory = function () {
    const searchInput = document.getElementById('directorySearchInput');
    const clearBtn = document.getElementById('clearDirectorySearch');
    const query = (searchInput ? searchInput.value : '').trim().toLowerCase();
    const terms = query.split(/\s+/).filter(Boolean);

    if (clearBtn) {
      clearBtn.style.display = query ? 'inline-grid' : 'none';
    }

    let totalVisible = 0;
    const groups = document.querySelectorAll('.exam-directory .exam-group');

    groups.forEach(group => {
      const groupId = group.dataset.group; // 'board' or 'competitive'
      const cards = group.querySelectorAll('.exam-card');
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

      // Show group header only if it has visible cards and filter allows
      const allowGroup = currentFilter === 'all' || currentFilter === 'saved' || currentFilter === groupId;
      group.style.display = (groupVisible > 0 && allowGroup) ? 'block' : 'none';
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

    // Update filter buttons
    document.querySelectorAll('.directory-filters button').forEach(btn => {
      const active = btn.dataset.filter === filterId;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-current', active ? 'page' : 'false');
    });

    updateBookmarkButtons();
    filterDirectory();

    // Scroll slightly if scrolled down
    const directoryContainer = document.querySelector('.exam-directory');
    if (directoryContainer && window.scrollY > 200) {
      directoryContainer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  window.clearDirectorySearch = function () {
    const searchInput = document.getElementById('directorySearchInput');
    if (searchInput) {
      searchInput.value = '';
      searchInput.focus();
    }
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

    if (dirView) dirView.style.display = 'block';
    if (bpscSection) bpscSection.style.display = 'none';

    if (history.replaceState) {
      history.replaceState(null, null, '#/');
    } else {
      window.location.hash = '#/';
    }

    filterDirectory();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Attach search input listeners
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
