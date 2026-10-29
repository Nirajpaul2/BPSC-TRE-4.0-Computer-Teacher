/**
 * BPSC TRE 4.0 Computer Science — Dashboard Controller
 * Dynamic rendering, search filter, topic checklist tracking, and theme management
 */

(function () {
  'use strict';

  // Constants & Storage Keys
  const STORAGE_KEY_TOPICS = 'tre4_cs_completed_topics';
  const STORAGE_KEY_THEME = 'tre4_cs_theme';

  // State Management
  let completedTopics = new Set();
  let currentFilter = 'ncert-11';
  let searchQuery = '';
  let allExpanded = false;

  // DOM Elements
  const unitsContainer = document.getElementById('unitsContainer');
  const searchInput = document.getElementById('searchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const filterPillsContainer = document.getElementById('filterPillsContainer');
  const masterPercent = document.getElementById('masterPercent');
  const masterTopicCount = document.getElementById('masterTopicCount');
  const masterProgressBar = document.getElementById('masterProgressBar');
  const visibleUnitsCount = document.getElementById('visibleUnitsCount');
  const noResultsState = document.getElementById('noResultsState');
  const resetSearchBtn = document.getElementById('resetSearchBtn');
  const toggleAllBtn = document.getElementById('toggleAllBtn');
  const toggleAllIcon = document.getElementById('toggleAllIcon');
  const toggleAllText = document.getElementById('toggleAllText');
  const printBtn = document.getElementById('printBtn');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const resetProgressBtn = document.getElementById('resetProgressBtn');
  const cutoffBtn = document.getElementById('cutoffBtn');
  const footerCutoffLink = document.getElementById('footerCutoffLink');
  const cutoffModal = document.getElementById('cutoffModal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  // Load Saved Topics
  function loadSavedTopics() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_TOPICS);
      if (stored) {
        const arr = JSON.parse(stored);
        if (Array.isArray(arr)) {
          completedTopics = new Set(arr);
        }
      }
    } catch (e) {
      console.error('Error loading completed topics from localStorage:', e);
      completedTopics = new Set();
    }
  }

  // Save Topics
  function saveTopics() {
    try {
      localStorage.setItem(STORAGE_KEY_TOPICS, JSON.stringify(Array.from(completedTopics)));
    } catch (e) {
      console.error('Error saving topics to localStorage:', e);
    }
  }

  // Theme Management
  function initTheme() {
    // Default to 'warm' light mode for comfortable prolonged studying sessions without eye strain
    let savedTheme = localStorage.getItem(STORAGE_KEY_THEME);
    if (!savedTheme || savedTheme === 'light') {
      savedTheme = 'warm';
    }
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeUI(savedTheme);
  }

  function updateThemeUI(theme) {
    const isWarm = theme === 'warm' || theme === 'light';
    const themeLabel = document.getElementById('themeLabel');
    if (themeIcon) {
      themeIcon.textContent = isWarm ? '☀️' : '🌙';
    }
    if (themeLabel) {
      themeLabel.textContent = isWarm ? 'Warm Light' : 'Night Mode';
    }
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('title', isWarm ? 'Switch to Night Mode (Dark)' : 'Switch to Warm Eye-Care Light');
      if (isWarm) {
        themeToggleBtn.classList.add('btn-warm-active');
      } else {
        themeToggleBtn.classList.remove('btn-warm-active');
      }
    }
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'warm';
    const isCurrentlyWarm = currentTheme === 'warm' || currentTheme === 'light';
    const newTheme = isCurrentlyWarm ? 'dark' : 'warm';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem(STORAGE_KEY_THEME, newTheme);
    updateThemeUI(newTheme);
  }

  // Escape HTML Helper
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Highlight Matching Search Text
  function highlightText(text, query) {
    if (!query) return escapeHtml(text);
    const escapedText = escapeHtml(text);
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');
    return escapedText.replace(regex, '<mark style="background:rgba(251,191,36,0.3); color:inherit; padding:0 2px; border-radius:3px;">$1</mark>');
  }

  // Calculate Overall Progress
  function updateMasterProgress() {
    let totalTopics = 0;
    let totalCompleted = 0;

    SYLLABUS_DATA.forEach(unit => {
      unit.chapters.forEach((chapter, chIdx) => {
        chapter.topics.forEach((topic, tIdx) => {
          totalTopics++;
          const topicId = `topic-${unit.id}-ch${chIdx}-t${tIdx}`;
          if (completedTopics.has(topicId)) {
            totalCompleted++;
          }
        });
      });
    });

    const percent = totalTopics > 0 ? Math.round((totalCompleted / totalTopics) * 100) : 0;
    if (masterPercent) masterPercent.textContent = `${percent}%`;
    if (masterTopicCount) masterTopicCount.textContent = `${totalCompleted} of ${totalTopics} topics prepared`;
    if (masterProgressBar) masterProgressBar.style.width = `${percent}%`;
  }

  // Update Individual Unit Progress Pill
  function updateUnitProgress(unitId) {
    const unit = SYLLABUS_DATA.find(u => u.id === unitId);
    if (!unit) return;

    let unitTotal = 0;
    let unitCompleted = 0;

    unit.chapters.forEach((chapter, chIdx) => {
      chapter.topics.forEach((topic, tIdx) => {
        unitTotal++;
        const topicId = `topic-${unit.id}-ch${chIdx}-t${tIdx}`;
        if (completedTopics.has(topicId)) {
          unitCompleted++;
        }
      });
    });

    const pill = document.getElementById(`progress-pill-${unitId}`);
    if (pill) {
      const pct = unitTotal > 0 ? Math.round((unitCompleted / unitTotal) * 100) : 0;
      pill.textContent = `${unitCompleted}/${unitTotal} (${pct}%)`;
      if (pct === 100) {
        pill.style.background = 'var(--tier-3-bg)';
        pill.style.color = 'var(--tier-3-color)';
        pill.style.borderColor = 'var(--tier-3-border)';
      } else {
        pill.style.background = 'var(--bg-tertiary)';
        pill.style.color = 'var(--text-muted)';
        pill.style.borderColor = 'var(--border-color)';
      }
    }
  }

  // Render Syllabus Dashboard
  function renderDashboard() {
    if (!unitsContainer || !Array.isArray(SYLLABUS_DATA)) return;

    unitsContainer.innerHTML = '';
    const q = searchQuery.trim().toLowerCase();
    let visibleCount = 0;

    SYLLABUS_DATA.forEach(unit => {
      // Filter Evaluation
      let matchesFilter = true;
      if (currentFilter === 'tier-1') matchesFilter = unit.tier === 'Tier 1';
      else if (currentFilter === 'tier-2') matchesFilter = unit.tier === 'Tier 2';
      else if (currentFilter === 'tier-3') matchesFilter = unit.tier === 'Tier 3';
      else if (currentFilter === 'ncert-11') matchesFilter = unit.ncertRef.includes('Class 11');
      else if (currentFilter === 'ncert-12') matchesFilter = unit.ncertRef.includes('Class 12');

      if (!matchesFilter) return;

      // Search Evaluation
      let matchesSearch = true;
      let matchedInTopics = false;

      if (q) {
        const inUnitTitle = unit.title.toLowerCase().includes(q);
        const inSummary = unit.summary.toLowerCase().includes(q);
        const inNcert = unit.ncertRef.toLowerCase().includes(q);
        const inTre = unit.treTag.toLowerCase().includes(q);

        matchedInTopics = unit.chapters.some(ch =>
          ch.title.toLowerCase().includes(q) ||
          ch.topics.some(t => t.toLowerCase().includes(q))
        );

        matchesSearch = inUnitTitle || inSummary || inNcert || inTre || matchedInTopics;
      }

      if (!matchesSearch) return;

      visibleCount++;

      // Create Unit Card
      const card = document.createElement('div');
      card.className = `unit-card ${unit.tierClass}`;
      card.id = `card-${unit.id}`;

      // Open automatically if there's an active search or if allExpanded is true
      if (q.length > 0 || allExpanded) {
        card.classList.add('open');
      }

      // Unit Number & Header
      const header = document.createElement('div');
      header.className = 'unit-header';
      header.setAttribute('role', 'button');
      header.setAttribute('tabindex', '0');
      header.setAttribute('aria-expanded', card.classList.contains('open'));

      // Calculate unit progress numbers
      let unitTotal = 0;
      let unitCompleted = 0;
      unit.chapters.forEach((chapter, chIdx) => {
        chapter.topics.forEach((topic, tIdx) => {
          unitTotal++;
          const topicId = `topic-${unit.id}-ch${chIdx}-t${tIdx}`;
          if (completedTopics.has(topicId)) unitCompleted++;
        });
      });
      const unitPct = unitTotal > 0 ? Math.round((unitCompleted / unitTotal) * 100) : 0;

      header.innerHTML = `
        <div class="unit-title-group">
          <div class="unit-number-badge">${unit.unitNumber}</div>
          <div class="unit-text-meta">
            <div class="unit-top-badges">
              <span class="badge-tag badge-${unit.tierClass}">${unit.tier}</span>
              <span class="badge-tag badge-weightage">${escapeHtml(unit.weightage)}</span>
              <span class="badge-tag badge-tre">${escapeHtml(unit.treTag)}</span>
            </div>
            <h2 class="unit-heading">${highlightText(unit.title, q)}</h2>
            <div class="unit-summary">
              📖 ${highlightText(unit.ncertRef, q)} • ${highlightText(unit.summary, q)}
            </div>
          </div>
        </div>
        <div class="unit-controls">
          <span class="unit-progress-pill" id="progress-pill-${unit.id}">${unitCompleted}/${unitTotal} (${unitPct}%)</span>
          <span class="chevron-icon">▼</span>
        </div>
      `;

      // Header Toggle Event
      header.addEventListener('click', () => {
        card.classList.toggle('open');
        header.setAttribute('aria-expanded', card.classList.contains('open'));
      });

      // Unit Body
      const body = document.createElement('div');
      body.className = 'unit-body';

      // Pedagogy Note
      let pedagogyHtml = '';
      if (unit.pedagogyTip) {
        pedagogyHtml = `
          <div class="pedagogy-callout">
            <div>💡</div>
            <div>${highlightText(unit.pedagogyTip, q)}</div>
          </div>
        `;
      }

      // Chapters Container
      let chaptersHtml = '';
      unit.chapters.forEach((chapter, chIdx) => {
        let topicsHtml = '';
        chapter.topics.forEach((topic, tIdx) => {
          const topicId = `topic-${unit.id}-ch${chIdx}-t${tIdx}`;
          const isChecked = completedTopics.has(topicId);

          // If searching, check if this specific topic matched
          const topicMatches = !q || topic.toLowerCase().includes(q) || chapter.title.toLowerCase().includes(q);

          topicsHtml += `
            <li class="topic-item ${isChecked ? 'completed' : ''}" style="${!topicMatches && q ? 'opacity:0.4;' : ''}">
              <input type="checkbox"
                     class="topic-checkbox"
                     id="${topicId}"
                     data-unit-id="${unit.id}"
                     ${isChecked ? 'checked' : ''}
                     aria-label="${escapeHtml(topic)}">
              <label for="${topicId}" class="topic-text">
                ${highlightText(topic, q)}
              </label>
            </li>
          `;
        });

        chaptersHtml += `
          <div class="chapter-block">
            <div class="chapter-title">
              <span>${highlightText(chapter.title, q)}</span>
              <span style="font-size:0.75rem; font-weight:600; color:var(--text-muted);">${chapter.topics.length} Subtopics</span>
            </div>
            <ul class="topics-checklist">
              ${topicsHtml}
            </ul>
          </div>
        `;
      });

      body.innerHTML = pedagogyHtml + chaptersHtml;
      card.appendChild(header);
      card.appendChild(body);
      unitsContainer.appendChild(card);
    });

    // Update Counter
    if (visibleUnitsCount) {
      visibleUnitsCount.textContent = `Showing ${visibleCount} of 12 Units`;
    }

    // Toggle Empty State
    if (noResultsState) {
      if (visibleCount === 0) {
        noResultsState.style.display = 'block';
        unitsContainer.style.display = 'none';
      } else {
        noResultsState.style.display = 'none';
        unitsContainer.style.display = 'flex';
      }
    }

    // Bind Topic Checkboxes
    document.querySelectorAll('.topic-checkbox').forEach(cb => {
      cb.addEventListener('change', (e) => {
        const id = e.target.id;
        const unitId = e.target.getAttribute('data-unit-id');
        const parentItem = e.target.closest('.topic-item');

        if (e.target.checked) {
          completedTopics.add(id);
          if (parentItem) parentItem.classList.add('completed');
        } else {
          completedTopics.delete(id);
          if (parentItem) parentItem.classList.remove('completed');
        }

        saveTopics();
        updateUnitProgress(unitId);
        updateMasterProgress();
      });
    });

    updateMasterProgress();
  }

  // Event Listeners Setup
  function setupEventListeners() {
    // Search Input
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        if (searchClearBtn) {
          searchClearBtn.style.display = searchQuery ? 'block' : 'none';
        }
        renderDashboard();
      });
    }

    // Search Clear Button
    if (searchClearBtn) {
      searchClearBtn.addEventListener('click', () => {
        if (searchInput) {
          searchInput.value = '';
          searchQuery = '';
          searchClearBtn.style.display = 'none';
          searchInput.focus();
          renderDashboard();
        }
      });
    }

    // Reset Search Button (in Empty State)
    if (resetSearchBtn) {
      resetSearchBtn.addEventListener('click', () => {
        searchQuery = '';
        currentFilter = 'all';
        if (searchInput) {
          searchInput.value = '';
          if (searchClearBtn) searchClearBtn.style.display = 'none';
        }
        document.querySelectorAll('.filter-pill').forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-filter') === 'all');
        });
        renderDashboard();
      });
    }

    // Filter Pills
    if (filterPillsContainer) {
      filterPillsContainer.addEventListener('click', (e) => {
        const pill = e.target.closest('.filter-pill');
        if (!pill) return;

        if (pill.classList.contains('active')) {
          // If already active, toggle off to view all units
          pill.classList.remove('active');
          currentFilter = 'all';
        } else {
          document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          currentFilter = pill.getAttribute('data-filter') || 'all';
        }
        renderDashboard();
      });
    }

    // Toggle All (Expand/Collapse)
    if (toggleAllBtn) {
      toggleAllBtn.addEventListener('click', () => {
        allExpanded = !allExpanded;
        if (toggleAllText) toggleAllText.textContent = allExpanded ? 'Collapse All' : 'Expand All';
        if (toggleAllIcon) toggleAllIcon.textContent = allExpanded ? '📁' : '📂';

        document.querySelectorAll('.unit-card').forEach(card => {
          if (allExpanded) {
            card.classList.add('open');
          } else {
            card.classList.remove('open');
          }
        });
      });
    }

    // Print Button
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        // Expand all before printing
        document.querySelectorAll('.unit-card').forEach(card => card.classList.add('open'));
        window.print();
      });
    }

    // Theme Toggle
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // Reset Progress
    if (resetProgressBtn) {
      resetProgressBtn.addEventListener('click', () => {
        if (completedTopics.size === 0) {
          alert('Tracker is already empty. Check topics as you study to track progress!');
          return;
        }
        const confirmReset = confirm(`Are you sure you want to reset your checklist progress (${completedTopics.size} topics marked)?`);
        if (confirmReset) {
          completedTopics.clear();
          saveTopics();
          renderDashboard();
        }
      });
    }

    // Cutoff Modal Open & Close
    const openCutoffModal = (e) => {
      e.preventDefault();
      if (cutoffModal) cutoffModal.classList.add('open');
    };

    const closeCutoffModal = () => {
      if (cutoffModal) cutoffModal.classList.remove('open');
    };

    if (cutoffBtn) cutoffBtn.addEventListener('click', openCutoffModal);
    if (footerCutoffLink) footerCutoffLink.addEventListener('click', openCutoffModal);
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeCutoffModal);

    if (cutoffModal) {
      cutoffModal.addEventListener('click', (e) => {
        if (e.target === cutoffModal) closeCutoffModal();
      });
    }

    // PDF Modal Setup
    if (closePdfModalBtn) closePdfModalBtn.addEventListener('click', closePdfModal);
    if (pdfModal) {
      pdfModal.addEventListener('click', (e) => {
        if (e.target === pdfModal) closePdfModal();
      });
    }

    // NCERT Filters Bar
    if (ncertFilterBar) {
      ncertFilterBar.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-ncert-filter');
        if (!btn) return;
        ncertFilterBar.querySelectorAll('.btn-ncert-filter').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter') || 'all';
        renderNcertLibrary(filter);
      });
    }

    // CheatSheet Filter Bar (Legacy fallback)
    const cheatsheetFilterBar = document.getElementById('cheatsheetFilterBar');
    if (cheatsheetFilterBar) {
      cheatsheetFilterBar.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-ncert-filter');
        if (!btn) return;
        cheatsheetFilterBar.querySelectorAll('.btn-ncert-filter').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter') || 'all';
        renderCheatSheets(filter);
      });
    }

    // Smooth Scroll for NCERT Nav Button
    if (ncertMenuBtn) {
      ncertMenuBtn.addEventListener('click', (e) => {
        const target = document.getElementById('ncertSection');
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (cutoffModal && cutoffModal.classList.contains('open')) closeCutoffModal();
        if (pdfModal && pdfModal.classList.contains('open')) closePdfModal();
      }
    });
  }

  // -------------------------------------------------------------
  // NCERT Digital Companion Library Controller
  // -------------------------------------------------------------
  const ncertCardsContainer = document.getElementById('ncertCardsContainer');
  const ncertFilterBar = document.getElementById('ncertFilterBar');
  const pdfModal = document.getElementById('pdfModal');
  const pdfModalTitle = document.getElementById('pdfModalTitle');
  const pdfModalIframe = document.getElementById('pdfModalIframe');
  const pdfModalExternalLink = document.getElementById('pdfModalExternalLink');
  const closePdfModalBtn = document.getElementById('closePdfModalBtn');
  const ncertMenuBtn = document.getElementById('ncertMenuBtn');

  function openPdfModal(pdfPath, title) {
    if (!pdfModal || !pdfModalIframe) return;
    pdfModalTitle.textContent = title;
    pdfModalIframe.src = pdfPath;
    if (pdfModalExternalLink) pdfModalExternalLink.href = pdfPath;
    pdfModal.classList.add('open');
  }

  function closePdfModal() {
    if (!pdfModal || !pdfModalIframe) return;
    pdfModal.classList.remove('open');
    pdfModalIframe.src = '';
  }

  function renderNcertLibrary(filter = 'all') {
    if (!ncertCardsContainer || typeof NCERT_DATA === 'undefined') return;

    let chapters = [];
    if (filter === 'all' || filter === 'class11') {
      NCERT_DATA.class11.chapters.forEach(ch => chapters.push({ ...ch, classTag: 'Class 11' }));
    }
    if (filter === 'all' || filter === 'class12') {
      NCERT_DATA.class12.chapters.forEach(ch => chapters.push({ ...ch, classTag: 'Class 12' }));
    }
    if (filter === 'critical') {
      [...NCERT_DATA.class11.chapters, ...NCERT_DATA.class12.chapters].forEach(ch => {
        if (ch.relevance === 'Critical' || ch.relevance === 'High') {
          chapters.push({ ...ch, classTag: ch.fileName.startsWith('k') ? 'Class 11' : 'Class 12' });
        }
      });
    }

    ncertCardsContainer.innerHTML = chapters.map(ch => {
      let relBadgeClass = 'badge-relevance-low';
      if (ch.relevance === 'Critical') relBadgeClass = 'badge-relevance-critical';
      else if (ch.relevance === 'High') relBadgeClass = 'badge-relevance-high';
      else if (ch.relevance === 'Medium') relBadgeClass = 'badge-relevance-medium';

      return `
        <div class="ncert-card">
          <div class="ncert-card-top">
            <div class="ncert-card-header" style="justify-content:flex-end;">
              <span class="badge-relevance ${relBadgeClass}">${escapeHtml(ch.relevance)}</span>
            </div>
            <h3 class="ncert-chapter-title">Ch. ${ch.chapterNumber}: ${escapeHtml(ch.title)}</h3>
            <div class="ncert-focus-box">
              <strong>💡 BPSC Exam Focus:</strong> ${escapeHtml(ch.bpscFocus)}
            </div>
          </div>
          <div class="ncert-card-footer">
            <span class="ncert-class-tag">${escapeHtml(ch.classTag)}</span>
            <div style="display:flex; align-items:center; gap:0.4rem;">
              <button class="btn-preview-pdf" data-pdf="${ch.pdfPath}" data-title="Ch. ${ch.chapterNumber}: ${escapeHtml(ch.title)}" title="Read right here">
                👁️ View
              </button>
              <a href="${ch.pdfPath}" target="_blank" class="btn-open-pdf" title="Open in new tab / download">
                📖 PDF ↗
              </a>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Bind Quick View buttons
    ncertCardsContainer.querySelectorAll('.btn-preview-pdf').forEach(btn => {
      btn.addEventListener('click', () => {
        const path = btn.getAttribute('data-pdf');
        const title = btn.getAttribute('data-title');
        openPdfModal(path, title);
      });
    });
  }

  // -------------------------------------------------------------
  // NCERT Computer Science Master Handbook & Book Reader Controller
  // -------------------------------------------------------------
  const bookReaderWrapper = document.getElementById('bookReaderWrapper');
  const bookDesk = document.getElementById('bookDesk');
  const bookTocSidebar = document.getElementById('bookTocSidebar');
  const bookTocList = document.getElementById('bookTocList');
  const tocBackdrop = document.getElementById('tocBackdrop');
  const btnToggleToc = document.getElementById('btnToggleToc');
  const btnCloseToc = document.getElementById('btnCloseToc');
  const bookPageContent = document.getElementById('bookPageContent');
  const bookPageTurner = document.getElementById('bookPageTurner');
  const btnPrevChapter = document.getElementById('btnPrevChapter');
  const btnNextChapter = document.getElementById('btnNextChapter');
  const prevChapterTitle = document.getElementById('prevChapterTitle');
  const nextChapterTitle = document.getElementById('nextChapterTitle');
  const pageNumberIndicator = document.getElementById('pageNumberIndicator');
  const chkChapterCompleted = document.getElementById('chkChapterCompleted');
  const readerCurrentLabel = document.getElementById('readerCurrentLabel');
  const readerProgressBar = document.getElementById('readerProgressBar');
  const readerProgressPercent = document.getElementById('readerProgressPercent');
  const tocCompletedCount = document.getElementById('tocCompletedCount');
  const btnResetReadProgress = document.getElementById('btnResetReadProgress');
  const btnFontDec = document.getElementById('btnFontDec');
  const btnFontReset = document.getElementById('btnFontReset');
  const btnFontInc = document.getElementById('btnFontInc');
  const btnModeBook = document.getElementById('btnModeBook');
  const btnModeFeed = document.getElementById('btnModeFeed');

  const BOOK_READER_STATE_KEY = 'bpsc_book_reader_state_v2';

  let bookState = {
    currentChapter: 0,
    viewMode: 'book',
    theme: 'dark',
    fontSize: 'md',
    completedChapters: {}
  };

  function loadBookState() {
    try {
      const saved = localStorage.getItem(BOOK_READER_STATE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        bookState = { ...bookState, ...parsed };
      }
    } catch (e) {
      console.warn('Could not load book reader state', e);
    }
  }

  function saveBookState() {
    try {
      localStorage.setItem(BOOK_READER_STATE_KEY, JSON.stringify(bookState));
    } catch (e) {
      console.warn('Could not save book reader state', e);
    }
  }

  function applyTheme(theme) {
    bookState.theme = theme;
    if (bookReaderWrapper) {
      bookReaderWrapper.classList.remove('reader-theme-dark', 'reader-theme-sepia', 'reader-theme-paper');
      bookReaderWrapper.classList.add(`reader-theme-${theme}`);
    }
    document.querySelectorAll('.btn-reader-theme').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-theme') === theme);
    });
    saveBookState();
  }

  function applyFontSize(size) {
    bookState.fontSize = size;
    if (bookReaderWrapper) {
      bookReaderWrapper.classList.remove('font-size-sm', 'font-size-md', 'font-size-lg');
      bookReaderWrapper.classList.add(`font-size-${size}`);
    }
    if (btnFontDec) btnFontDec.classList.toggle('active', size === 'sm');
    if (btnFontReset) btnFontReset.classList.toggle('active', size === 'md');
    if (btnFontInc) btnFontInc.classList.toggle('active', size === 'lg');
    saveBookState();
  }

  function applyViewMode(mode) {
    bookState.viewMode = mode;
    if (btnModeBook) btnModeBook.classList.toggle('active', mode === 'book');
    if (btnModeFeed) btnModeFeed.classList.toggle('active', mode === 'feed');
    if (bookPageTurner) {
      bookPageTurner.style.display = mode === 'book' ? 'flex' : 'none';
    }
    renderBookContent();
    renderBookToc();
    saveBookState();
  }

  function openMobileToc() {
    if (bookTocSidebar) bookTocSidebar.classList.add('open');
    if (tocBackdrop) tocBackdrop.classList.add('open');
  }

  function closeMobileToc() {
    if (bookTocSidebar) bookTocSidebar.classList.remove('open');
    if (tocBackdrop) tocBackdrop.classList.remove('open');
  }

  function updateTocFilterButtons() {
    const tocFilterPills = document.getElementById('tocFilterPills');
    if (!tocFilterPills) return;
    const currentFilter = bookState.tocClassFilter || '11';
    tocFilterPills.querySelectorAll('.btn-toc-filter').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-class') === currentFilter);
    });
  }

  function renderBookToc() {
    if (!bookTocList || typeof CHEATSHEETS_DATA === 'undefined') return;

    if (!bookState.tocClassFilter || bookState.tocClassFilter === 'all') {
      const curCs = CHEATSHEETS_DATA[bookState.currentChapter] || CHEATSHEETS_DATA[0];
      bookState.tocClassFilter = String(curCs ? curCs.classLevel || 11 : 11);
    }

    const filterClass = bookState.tocClassFilter;

    let html = '';
    let lastClassLevel = null;

    CHEATSHEETS_DATA.forEach((cs, idx) => {
      const cls = cs.classLevel || 12;
      if (filterClass !== String(cls)) {
        return;
      }

      // Add section header if class changes
      if (cls !== lastClassLevel) {
        lastClassLevel = cls;
        const icon = cls === 11 ? '📘' : '📙';
        html += `
          <div class="toc-group-header">
            <span>${icon}</span> NCERT Class ${cls} Computer Science
          </div>
        `;
      }

      const isActive = bookState.viewMode === 'book' && bookState.currentChapter === idx;
      const isCompleted = !!bookState.completedChapters[cs.id];
      const chNum = cs.chapterNumber || (idx + 1);
      const numStr = chNum.toString().padStart(2, '0');
      const cleanTitle = cs.title.replace(/^Class \d+ Chapter \d+ — /, '').replace(/^Chapter \d+ — /, '');

      html += `
        <div class="toc-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" data-index="${idx}" title="${escapeHtml(cs.title)}">
          <span class="toc-num">Ch ${numStr}</span>
          <span class="toc-title">${escapeHtml(cleanTitle)}</span>
          <span class="toc-status-icon">${isCompleted ? '✓' : '○'}</span>
        </div>
      `;
    });

    bookTocList.innerHTML = html;
    updateTocFilterButtons();
    updateProgressUI();
  }

  function renderSingleChapter(cs, idx) {
    const isCompleted = !!bookState.completedChapters[cs.id];
    const cls = cs.classLevel || 12;
    const chNum = cs.chapterNumber || (idx + 1);
    const numStr = chNum.toString().padStart(2, '0');
    const classIcon = cls === 11 ? '📘' : '📙';

    let cardsHtml = cs.cards.map((card, cIdx) => {
      let codeHtml = '';
      if (card.code) {
        codeHtml = `
          <div class="book-code-wrapper">
            <button class="btn-copy-code" data-copy-id="code-${idx}-${cIdx}" title="Copy note text to clipboard">Copy</button>
            <pre class="code-block book-code-surface" id="code-${idx}-${cIdx}"><code>${escapeHtml(card.code)}</code></pre>
          </div>
        `;
      }

      let tableHtml = '';
      if (card.table && Array.isArray(card.table)) {
        tableHtml = `
          <div style="overflow-x:auto; margin-bottom:1rem;">
            <table class="data-table" style="margin:0;">
              <thead>
                <tr>
                  <th>Algorithm</th>
                  <th>Best Time</th>
                  <th>Average Time</th>
                  <th>Worst Time</th>
                  <th>Space</th>
                  <th>Stable</th>
                </tr>
              </thead>
              <tbody>
                ${card.table.map(row => `
                  <tr>
                    <td><strong>${escapeHtml(row.name)}</strong></td>
                    <td><code>${escapeHtml(row.best)}</code></td>
                    <td><code>${escapeHtml(row.avg)}</code></td>
                    <td><code style="color:var(--tier-1-color, #ef4444); font-weight:700;">${escapeHtml(row.worst)}</code></td>
                    <td><code>${escapeHtml(row.space)}</code></td>
                    <td>${escapeHtml(row.stable)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `;
      }

      let explHtml = '';
      if (card.explanation) {
        explHtml = `
          <div class="book-callout book-callout-insight">
            <div class="callout-icon">💡</div>
            <div class="callout-content">
              <div class="callout-title">Exam Recall &amp; Memory Anchor</div>
              <div class="callout-text">${escapeHtml(card.explanation)}</div>
            </div>
          </div>
        `;
      }

      return `
        <article class="book-subcard">
          <h3 class="book-subcard-title">${escapeHtml(card.title)}</h3>
          ${codeHtml}
          ${tableHtml}
          ${explHtml}
        </article>
      `;
    }).join('');

    return `
      <section class="book-chapter-container" data-chapter-id="${cs.id}">
        <header class="book-chapter-header">
          <div class="chapter-number-pill">${classIcon} NCERT Class ${cls} • Chapter ${numStr}</div>
          <h2 class="book-chapter-title">${escapeHtml(cs.title)}</h2>
          <div class="book-chapter-meta">
            <span class="book-meta-badge">${escapeHtml(cs.category)}</span>
            <span>⏱️ ~4 min read</span>
            <span>•</span>
            <span>${cs.cards.length} Core Study Sections</span>
          </div>
          <p class="book-chapter-summary">${escapeHtml(cs.summary)}</p>
        </header>

        <div class="book-chapter-body">
          ${cardsHtml}
        </div>
      </section>
    `;
  }

  function renderBookContent() {
    if (!bookPageContent || typeof CHEATSHEETS_DATA === 'undefined') return;

    if (bookState.viewMode === 'book') {
      const idx = Math.min(Math.max(0, bookState.currentChapter), CHEATSHEETS_DATA.length - 1);
      const cs = CHEATSHEETS_DATA[idx];
      bookPageContent.innerHTML = renderSingleChapter(cs, idx);
      updatePageTurnerUI();
    } else {
      // Feed mode (all chapters)
      bookPageContent.innerHTML = CHEATSHEETS_DATA.map((cs, idx) => renderSingleChapter(cs, idx)).join('<div style="height:2.5rem; border-bottom: 2px dashed var(--reader-border); margin-bottom: 2.5rem;"></div>');
      if (readerCurrentLabel) {
        readerCurrentLabel.textContent = `Continuous Reading (All 12 Chapters)`;
      }
    }
  }

  function goToChapter(index) {
    if (typeof CHEATSHEETS_DATA === 'undefined' || index < 0 || index >= CHEATSHEETS_DATA.length) return;
    bookState.currentChapter = index;
    const targetCs = CHEATSHEETS_DATA[index];
    if (targetCs && targetCs.classLevel) {
      bookState.tocClassFilter = String(targetCs.classLevel);
    }
    if (bookState.viewMode !== 'book') {
      applyViewMode('book');
    } else {
      renderBookContent();
    }
    renderBookToc();
    saveBookState();

    if (bookReaderWrapper) {
      bookReaderWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    closeMobileToc();
  }

  function updatePageTurnerUI() {
    if (typeof CHEATSHEETS_DATA === 'undefined') return;
    const total = CHEATSHEETS_DATA.length;
    const current = bookState.currentChapter;
    const currentCs = CHEATSHEETS_DATA[current];
    if (!currentCs) return;

    const currentCls = currentCs.classLevel || 12;
    const currentNum = currentCs.chapterNumber || (current + 1);

    if (readerCurrentLabel) {
      readerCurrentLabel.textContent = `Class ${currentCls} • Ch ${currentNum} (${current + 1} of ${total})`;
    }
    if (pageNumberIndicator) {
      pageNumberIndicator.textContent = `Chapter ${current + 1} of ${total}`;
    }

    if (btnPrevChapter) {
      btnPrevChapter.disabled = current <= 0;
      if (prevChapterTitle) {
        if (current > 0) {
          const prevCs = CHEATSHEETS_DATA[current - 1];
          const prevCls = prevCs.classLevel || 12;
          const cleanPrev = prevCs.title.replace(/^Class \d+ Chapter \d+ — /, '').replace(/^Chapter \d+ — /, '');
          prevChapterTitle.textContent = `C${prevCls} Ch${prevCs.chapterNumber || current}: ${cleanPrev}`;
        } else {
          prevChapterTitle.textContent = 'Beginning';
        }
      }
    }

    if (btnNextChapter) {
      btnNextChapter.disabled = current >= total - 1;
      if (nextChapterTitle) {
        if (current < total - 1) {
          const nextCs = CHEATSHEETS_DATA[current + 1];
          const nextCls = nextCs.classLevel || 12;
          const cleanNext = nextCs.title.replace(/^Class \d+ Chapter \d+ — /, '').replace(/^Chapter \d+ — /, '');
          nextChapterTitle.textContent = `C${nextCls} Ch${nextCs.chapterNumber || (current + 2)}: ${cleanNext}`;
        } else {
          nextChapterTitle.textContent = 'Complete';
        }
      }
    }

    if (chkChapterCompleted && currentCs) {
      chkChapterCompleted.checked = !!bookState.completedChapters[currentCs.id];
    }
  }

  function updateProgressUI() {
    if (typeof CHEATSHEETS_DATA === 'undefined') return;
    const total = CHEATSHEETS_DATA.length;
    const completedKeys = Object.keys(bookState.completedChapters).filter(k => bookState.completedChapters[k]);
    const completedCount = completedKeys.length;
    const percent = Math.round((completedCount / total) * 100);

    const displayPercent = completedCount > 0 ? percent : Math.round(((bookState.currentChapter + 1) / total) * 100);

    if (readerProgressBar) {
      readerProgressBar.style.width = `${displayPercent}%`;
    }
    if (readerProgressPercent) {
      readerProgressPercent.textContent = `${displayPercent}%`;
    }
    if (tocCompletedCount) {
      tocCompletedCount.textContent = `${completedCount}/${total} Chapters Revised`;
    }
  }

  function toggleCurrentChapterCompleted(isCompleted) {
    if (typeof CHEATSHEETS_DATA === 'undefined') return;
    const currentCs = CHEATSHEETS_DATA[bookState.currentChapter];
    if (!currentCs) return;

    if (isCompleted) {
      bookState.completedChapters[currentCs.id] = true;
    } else {
      delete bookState.completedChapters[currentCs.id];
    }
    saveBookState();
    renderBookToc();
    updateProgressUI();
  }

  function initBookReader() {
    loadBookState();

    applyTheme(bookState.theme || 'dark');
    applyFontSize(bookState.fontSize || 'md');
    applyViewMode(bookState.viewMode || 'book');

    renderBookToc();
    renderBookContent();

    // Event listeners for Book Reader
    if (btnToggleToc) {
      btnToggleToc.addEventListener('click', () => {
        if (bookTocSidebar && bookTocSidebar.classList.contains('open')) {
          closeMobileToc();
        } else {
          openMobileToc();
        }
      });
    }

    if (btnCloseToc) {
      btnCloseToc.addEventListener('click', closeMobileToc);
    }

    if (tocBackdrop) {
      tocBackdrop.addEventListener('click', closeMobileToc);
    }

    if (bookTocList) {
      bookTocList.addEventListener('click', (e) => {
        const item = e.target.closest('.toc-item');
        if (!item) return;
        const index = parseInt(item.getAttribute('data-index'), 10);
        if (!isNaN(index)) {
          goToChapter(index);
        }
      });
    }

    if (btnPrevChapter) {
      btnPrevChapter.addEventListener('click', () => {
        if (bookState.currentChapter > 0) {
          goToChapter(bookState.currentChapter - 1);
        }
      });
    }

    if (btnNextChapter) {
      btnNextChapter.addEventListener('click', () => {
        if (typeof CHEATSHEETS_DATA !== 'undefined' && bookState.currentChapter < CHEATSHEETS_DATA.length - 1) {
          goToChapter(bookState.currentChapter + 1);
        }
      });
    }

    if (chkChapterCompleted) {
      chkChapterCompleted.addEventListener('change', (e) => {
        toggleCurrentChapterCompleted(e.target.checked);
      });
    }

    // Themes
    document.querySelectorAll('.btn-reader-theme').forEach(btn => {
      btn.addEventListener('click', () => {
        const theme = btn.getAttribute('data-theme');
        if (theme) applyTheme(theme);
      });
    });

    // Font Sizing
    if (btnFontDec) btnFontDec.addEventListener('click', () => applyFontSize('sm'));
    if (btnFontReset) btnFontReset.addEventListener('click', () => applyFontSize('md'));
    if (btnFontInc) btnFontInc.addEventListener('click', () => applyFontSize('lg'));

    // View Modes
    if (btnModeBook) btnModeBook.addEventListener('click', () => applyViewMode('book'));
    if (btnModeFeed) btnModeFeed.addEventListener('click', () => applyViewMode('feed'));

    // TOC Class Filter (All / Class 11 / Class 12)
    const tocFilterPills = document.getElementById('tocFilterPills');
    if (tocFilterPills) {
      tocFilterPills.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-toc-filter');
        if (!btn) return;
        tocFilterPills.querySelectorAll('.btn-toc-filter').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        bookState.tocClassFilter = btn.getAttribute('data-class') || 'all';
        renderBookToc();
        saveBookState();
      });
    }

    // Reset Reading Checkmarks
    if (btnResetReadProgress) {
      btnResetReadProgress.addEventListener('click', () => {
        if (confirm('Reset your revision checkmarks for all 14 chapters?')) {
          bookState.completedChapters = {};
          saveBookState();
          renderBookToc();
          updatePageTurnerUI();
          updateProgressUI();
        }
      });
    }

    // Keyboard Arrow navigation
    document.addEventListener('keydown', (e) => {
      const cheatsheetPane = document.getElementById('tab-cheatsheet');
      if (!cheatsheetPane || !cheatsheetPane.classList.contains('active')) return;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

      if (e.key === 'ArrowRight') {
        if (bookState.viewMode === 'book' && typeof CHEATSHEETS_DATA !== 'undefined' && bookState.currentChapter < CHEATSHEETS_DATA.length - 1) {
          e.preventDefault();
          goToChapter(bookState.currentChapter + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        if (bookState.viewMode === 'book' && bookState.currentChapter > 0) {
          e.preventDefault();
          goToChapter(bookState.currentChapter - 1);
        }
      }
    });

    // Copy note code buttons delegation
    document.addEventListener('click', (e) => {
      const copyBtn = e.target.closest('.btn-copy-code');
      if (!copyBtn) return;
      const targetId = copyBtn.getAttribute('data-copy-id');
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      navigator.clipboard.writeText(targetEl.innerText).then(() => {
        const origText = copyBtn.textContent;
        copyBtn.textContent = 'Copied! ✓';
        copyBtn.style.color = '#10b981';
        setTimeout(() => {
          copyBtn.textContent = origText;
          copyBtn.style.color = '';
        }, 1600);
      }).catch(err => {
        console.warn('Copy failed', err);
      });
    });
  }

  // Backward compatibility alias
  function renderCheatSheets(filter = 'all') {
    initBookReader();
  }

  // -------------------------------------------------------------
  // Marathon Book Reader (Day 1 to Day 10) Controller
  // -------------------------------------------------------------
  const marathonReaderWrapper = document.getElementById('marathonReaderWrapper');
  const btnToggleMarathonToc = document.getElementById('btnToggleMarathonToc');
  const btnCloseMarathonToc = document.getElementById('btnCloseMarathonToc');
  const marathonTocSidebar = document.getElementById('marathonTocSidebar');
  const marathonTocBackdrop = document.getElementById('marathonTocBackdrop');
  const marathonTocList = document.getElementById('marathonTocList');
  const marathonTocFilterPills = document.getElementById('marathonTocFilterPills');
  const marathonTocCompletedCount = document.getElementById('marathonTocCompletedCount');
  const btnResetMarathonProgress = document.getElementById('btnResetMarathonProgress');

  const marathonCurrentLabel = document.getElementById('marathonCurrentLabel');
  const marathonProgressBar = document.getElementById('marathonProgressBar');
  const marathonProgressPercent = document.getElementById('marathonProgressPercent');

  const btnMarathonFontDec = document.getElementById('btnMarathonFontDec');
  const btnMarathonFontReset = document.getElementById('btnMarathonFontReset');
  const btnMarathonFontInc = document.getElementById('btnMarathonFontInc');

  const btnMarathonThemeDark = document.getElementById('btnMarathonThemeDark');
  const btnMarathonThemeSepia = document.getElementById('btnMarathonThemeSepia');
  const btnMarathonThemePaper = document.getElementById('btnMarathonThemePaper');

  const btnMarathonModeBook = document.getElementById('btnMarathonModeBook');
  const btnMarathonModeFeed = document.getElementById('btnMarathonModeFeed');

  const marathonPageStage = document.getElementById('marathonPageStage');
  const marathonPageContent = document.getElementById('marathonPageContent');
  const marathonPageTurner = document.getElementById('marathonPageTurner');
  const btnPrevMarathonDay = document.getElementById('btnPrevMarathonDay');
  const btnNextMarathonDay = document.getElementById('btnNextMarathonDay');
  const prevMarathonDayTitle = document.getElementById('prevMarathonDayTitle');
  const nextMarathonDayTitle = document.getElementById('nextMarathonDayTitle');
  const marathonPageNumberIndicator = document.getElementById('marathonPageNumberIndicator');
  const chkMarathonDayCompleted = document.getElementById('chkMarathonDayCompleted');
  const markMarathonCompletedText = document.getElementById('markMarathonCompletedText');

  const MARATHON_STORAGE_KEY = 'bpsc_marathon_completed_days';
  const MARATHON_BOOK_STATE_KEY = 'bpsc_marathon_book_state';

  const marathonState = {
    currentDay: 0,
    theme: 'dark',
    fontSize: 'md',
    viewMode: 'book',
    tocFilter: 'all'
  };

  function loadMarathonState() {
    try {
      const saved = localStorage.getItem(MARATHON_BOOK_STATE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (typeof parsed.currentDay === 'number') marathonState.currentDay = parsed.currentDay;
        if (parsed.theme) marathonState.theme = parsed.theme;
        if (parsed.fontSize) marathonState.fontSize = parsed.fontSize;
        if (parsed.viewMode) marathonState.viewMode = parsed.viewMode;
        if (parsed.tocFilter) marathonState.tocFilter = parsed.tocFilter;
      }
    } catch (e) {}
  }

  function saveMarathonState() {
    try {
      localStorage.setItem(MARATHON_BOOK_STATE_KEY, JSON.stringify(marathonState));
    } catch (e) {}
  }

  function getCompletedDays() {
    try {
      const data = localStorage.getItem(MARATHON_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  function setDayCompleted(dayId, isCompleted) {
    let completed = getCompletedDays();
    if (isCompleted) {
      if (!completed.includes(dayId)) completed.push(dayId);
    } else {
      completed = completed.filter(id => id !== dayId);
    }
    try {
      localStorage.setItem(MARATHON_STORAGE_KEY, JSON.stringify(completed));
    } catch (e) {}
    updateMarathonProgressUI();
    renderMarathonToc();
    updatePageTurnerState();
  }

  function applyMarathonTheme(theme) {
    if (!marathonReaderWrapper) return;
    marathonState.theme = theme;
    marathonReaderWrapper.classList.remove('reader-theme-dark', 'reader-theme-sepia', 'reader-theme-paper');
    marathonReaderWrapper.classList.add(`reader-theme-${theme}`);

    const btns = [btnMarathonThemeDark, btnMarathonThemeSepia, btnMarathonThemePaper];
    btns.forEach(b => {
      if (b) b.classList.toggle('active', b.getAttribute('data-theme') === theme);
    });
    saveMarathonState();
  }

  function applyMarathonFontSize(size) {
    if (!marathonReaderWrapper) return;
    marathonState.fontSize = size;
    marathonReaderWrapper.classList.remove('font-size-sm', 'font-size-md', 'font-size-lg');
    marathonReaderWrapper.classList.add(`font-size-${size}`);

    if (btnMarathonFontDec) btnMarathonFontDec.classList.toggle('active', size === 'sm');
    if (btnMarathonFontReset) btnMarathonFontReset.classList.toggle('active', size === 'md');
    if (btnMarathonFontInc) btnMarathonFontInc.classList.toggle('active', size === 'lg');
    saveMarathonState();
  }

  function applyMarathonViewMode(mode) {
    if (!marathonReaderWrapper) return;
    marathonState.viewMode = mode;
    marathonReaderWrapper.classList.remove('view-mode-book', 'view-mode-feed');
    marathonReaderWrapper.classList.add(`view-mode-${mode}`);

    if (btnMarathonModeBook) btnMarathonModeBook.classList.toggle('active', mode === 'book');
    if (btnMarathonModeFeed) btnMarathonModeFeed.classList.toggle('active', mode === 'feed');

    if (marathonPageTurner) {
      marathonPageTurner.style.display = mode === 'book' ? 'flex' : 'none';
    }

    renderMarathonContent();
    saveMarathonState();
  }

  function openMobileMarathonToc() {
    if (marathonTocSidebar) marathonTocSidebar.classList.add('open');
    if (marathonTocBackdrop) marathonTocBackdrop.classList.add('active');
  }

  function closeMobileMarathonToc() {
    if (marathonTocSidebar) marathonTocSidebar.classList.remove('open');
    if (marathonTocBackdrop) marathonTocBackdrop.classList.remove('active');
  }

  function updateMarathonProgressUI() {
    if (typeof MARATHON_DATA === 'undefined') return;
    const totalDays = MARATHON_DATA.length;
    const completed = getCompletedDays();
    const completedCount = completed.filter(id => MARATHON_DATA.some(d => d.dayId === id)).length;
    const percent = totalDays > 0 ? Math.round((completedCount / totalDays) * 100) : 0;

    if (marathonProgressBar) marathonProgressBar.style.width = `${percent}%`;
    if (marathonProgressPercent) marathonProgressPercent.textContent = `${completedCount}/${totalDays} Days (${percent}%)`;
    if (marathonTocCompletedCount) marathonTocCompletedCount.textContent = `${completedCount}/${totalDays} Days Completed`;
  }

  function generateDayBookHtml(day, isSingleView = false) {
    const completed = getCompletedDays();
    const isCompleted = completed.includes(day.dayId);

    // 1. Targets Table
    let targetsHtml = '';
    if (day.targets && Array.isArray(day.targets)) {
      targetsHtml = `
        <div class="marathon-targets-box">
          <div class="marathon-targets-lead">🎯 Today's High-Yield Focus Targets (Retain Every Point):</div>
          <div style="overflow-x:auto;">
            <table class="marathon-targets-table">
              <thead>
                <tr>
                  <th>Section</th>
                  <th>Topic</th>
                  <th>Goal</th>
                </tr>
              </thead>
              <tbody>
                ${day.targets.map(t => `
                  <tr>
                    <td><strong>${escapeHtml(t.section)}</strong></td>
                    <td>${escapeHtml(t.topic)}</td>
                    <td><span class="badge-tag badge-tier-2" style="font-size:0.75rem;">${escapeHtml(t.goal)}</span></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    // 2. Intro Note / Context
    let introHtml = '';
    if (day.introNote) {
      introHtml = `
        <div class="book-callout book-callout-insight" style="margin-bottom: 1.5rem; border-left-color: var(--reader-accent);">
          <div class="callout-icon">📌</div>
          <div class="callout-content" style="flex:1;">
            <div class="callout-title" style="color:var(--reader-accent);">BPSC &amp; NCERT Foundation Context</div>
            <div class="callout-text" style="line-height:1.6; margin-top:0.25rem;">${escapeHtml(day.introNote)}</div>
          </div>
        </div>
      `;
    }

    // 3. Parts (Part III CS, Part II GS, Part I English)
    let partsHtml = '';
    if (day.parts && Array.isArray(day.parts)) {
      partsHtml = day.parts.map((part, pIdx) => {
        const sectionsHtml = (part.sections || []).map((sec, sIdx) => {
          const blocksHtml = (sec.blocks || []).map((block, bIdx) => {
            const blockId = `code-m-${day.dayId}-p${pIdx}-s${sIdx}-b${bIdx}`;
            if (block.type === 'text') {
              return `<div class="book-prose-para" style="margin-bottom:0.85rem; white-space:pre-line; line-height:1.65; color:var(--reader-text-secondary); font-size:0.95rem;">${escapeHtml(block.content)}</div>`;
            } else if (block.type === 'diagram') {
              return `
                <div class="book-code-wrapper" style="margin: 0.85rem 0;">
                  <button class="btn-copy-code" data-copy-id="${blockId}" title="Copy note text">Copy Note</button>
                  <pre class="code-block book-code-surface" id="${blockId}"><code>${escapeHtml(block.content)}</code></pre>
                </div>
              `;
            } else if (block.type === 'callout') {
              return `
                <div class="book-callout book-callout-insight" style="margin: 0.85rem 0;">
                  <div class="callout-icon">${escapeHtml(block.icon || '💡')}</div>
                  <div class="callout-content" style="flex:1;">
                    <div class="callout-title">${escapeHtml(block.title)}</div>
                    ${block.content ? `<div class="callout-text" style="white-space:pre-line; margin-top:0.25rem; font-size:0.92rem; line-height:1.55;">${escapeHtml(block.content)}</div>` : ''}
                    ${block.diagram ? `
                      <div class="book-code-wrapper" style="margin: 0.5rem 0 0.2rem;">
                        <button class="btn-copy-code" data-copy-id="${blockId}-dia" title="Copy note text">Copy Note</button>
                        <pre class="code-block book-code-surface" id="${blockId}-dia" style="margin:0; font-size:0.88em; padding:0.75rem 1rem;"><code>${escapeHtml(block.diagram)}</code></pre>
                      </div>
                    ` : ''}
                  </div>
                </div>
              `;
            }
            return '';
          }).join('');

          return `
            <article class="book-subcard" style="margin-bottom: 1.5rem;">
              <h3 class="book-subcard-title">${escapeHtml(sec.title)}</h3>
              <div class="book-subcard-body">
                ${blocksHtml}
              </div>
            </article>
          `;
        }).join('');

        return `
          <div class="marathon-part-container" style="margin-bottom: 2rem;">
            <div class="marathon-part-divider">
              <span class="marathon-part-pill">📖 ${escapeHtml(part.title)}</span>
            </div>
            ${sectionsHtml}
          </div>
        `;
      }).join('');
    }

    // 4. Test (Interactive Questions)
    let testHtml = '';
    if (day.test && Array.isArray(day.test.questions)) {
      const optionLetters = ['A', 'B', 'C', 'D', 'E'];
      const qListHtml = day.test.questions.map((q, qIndex) => {
        return `
          <div class="marathon-q-item" data-qid="${q.id}" data-correct="${q.correctAnswer}">
            <div class="marathon-q-header">
              <span class="marathon-q-num">Question ${qIndex + 1} of ${day.test.questions.length}</span>
              <span class="badge-tag badge-tier-1" style="font-size:0.72rem;">BPSC TRE Exam Pattern</span>
            </div>
            <div class="marathon-q-text">${escapeHtml(q.question)}</div>
            <div class="marathon-options-grid">
              ${q.options.map((opt, optIdx) => `
                <button type="button" class="marathon-option-btn" data-opt-idx="${optIdx}">
                  <span class="marathon-option-label">(${optionLetters[optIdx] || optIdx})</span>
                  <span class="marathon-option-text">${escapeHtml(opt)}</span>
                </button>
              `).join('')}
            </div>
            <div class="marathon-q-explanation" id="expl-${q.id}">
              <strong>💡 Solution &amp; Explanation:</strong>
              <div style="margin-top:0.35rem; white-space:pre-line;">${escapeHtml(q.explanation)}</div>
            </div>
          </div>
        `;
      }).join('');

      testHtml = `
        <div class="marathon-test-card" id="test-${day.dayId}">
          <div class="marathon-test-header">
            <div>
              <h3 class="marathon-test-title">
                <span>📝</span> ${escapeHtml(day.test.title)}
              </h3>
              <div class="marathon-test-sub">${escapeHtml(day.test.subtitle)}</div>
            </div>
            <div class="marathon-score-badge" id="score-badge-${day.dayId}">
              <span>🎯 Solved: <span class="solved-count">0</span> / ${day.test.questions.length}</span>
            </div>
          </div>
          <div class="marathon-questions-list">
            ${qListHtml}
          </div>
        </div>
      `;
    }

    return `
      <div class="marathon-day-card marathon-book-style ${isCompleted ? 'day-completed' : ''}" id="card-${day.dayId}" style="${isSingleView ? '' : 'margin-bottom:3rem; padding-bottom:2rem; border-bottom:2px dashed var(--reader-border);'}">
        <header class="marathon-day-header marathon-book-header">
          <div class="marathon-day-title-wrap">
            <div class="marathon-day-badge-row">
              <span class="marathon-day-badge">${escapeHtml(day.badge)}</span>
              <span class="badge-tag badge-tier-2">${escapeHtml(day.unit)}</span>
              <span style="font-size:0.78rem; color:var(--reader-text-muted); font-weight:600;">⏱️ ${escapeHtml(day.targetTime)}</span>
              <span style="font-size:0.78rem; color:var(--reader-text-muted); font-weight:600;">📝 ${day.test ? day.test.questions.length : 0} MCQs Test</span>
            </div>
            <h2 class="marathon-day-title" style="font-size:1.65rem; color:var(--reader-text-primary); margin:0.35rem 0;">${escapeHtml(day.title)}</h2>
            <p class="marathon-day-desc" style="font-style:italic; color:var(--reader-text-secondary); margin:0;">${escapeHtml(day.summary)}</p>
          </div>
        </header>

        <div class="marathon-day-body marathon-book-body">
          ${targetsHtml}
          ${introHtml}
          ${partsHtml}
          ${testHtml}
        </div>
      </div>
    `;
  }

  function renderMarathonToc() {
    if (!marathonTocList || typeof MARATHON_DATA === 'undefined') return;

    const completed = getCompletedDays();
    const filter = marathonState.tocFilter || 'all';

    let daysToDisplay = MARATHON_DATA;
    if (filter === 'w1') {
      daysToDisplay = MARATHON_DATA.filter(d => d.dayNumber <= 7);
    } else if (filter === 'w2') {
      daysToDisplay = MARATHON_DATA.filter(d => d.dayNumber > 7 && d.dayNumber <= 14);
    } else if (filter === 'w3') {
      daysToDisplay = MARATHON_DATA.filter(d => d.dayNumber > 14 && d.dayNumber <= 21);
    } else if (filter === 'w4') {
      daysToDisplay = MARATHON_DATA.filter(d => d.dayNumber > 21 && d.dayNumber <= 28);
    } else if (filter === 'w5') {
      daysToDisplay = MARATHON_DATA.filter(d => d.dayNumber > 28 && d.dayNumber <= 35);
    } else if (filter === 'w6') {
      daysToDisplay = MARATHON_DATA.filter(d => d.dayNumber > 35 && d.dayNumber <= 42);
    } else if (filter === 'w7') {
      daysToDisplay = MARATHON_DATA.filter(d => d.dayNumber > 42);
    }

    let html = '';
    daysToDisplay.forEach((day) => {
      const actualIndex = MARATHON_DATA.findIndex(d => d.dayId === day.dayId);
      const isActive = marathonState.viewMode === 'book' && actualIndex === marathonState.currentDay;
      const isCompleted = completed.includes(day.dayId);

      html += `
        <div class="toc-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" data-day-index="${actualIndex}">
          <span class="toc-num">${escapeHtml(day.badge || `Day ${day.dayNumber}`)}</span>
          <span class="toc-title" title="${escapeHtml(day.title)}">${escapeHtml(day.title.replace(/^TRE 4\.0 —\s*/, ''))}</span>
          <span class="toc-status-icon">${isCompleted ? '✓' : '○'}</span>
        </div>
      `;
    });

    marathonTocList.innerHTML = html;

    marathonTocList.querySelectorAll('.toc-item').forEach(item => {
      item.addEventListener('click', () => {
        const dIdx = parseInt(item.getAttribute('data-day-index'), 10);
        if (!isNaN(dIdx) && dIdx >= 0 && dIdx < MARATHON_DATA.length) {
          marathonState.currentDay = dIdx;
          if (marathonState.viewMode === 'feed') {
            applyMarathonViewMode('book');
          } else {
            renderMarathonContent();
            updatePageTurnerState();
            renderMarathonToc();
          }
          closeMobileMarathonToc();
          saveMarathonState();
          if (marathonPageStage) marathonPageStage.scrollTo({ top: 0, behavior: 'smooth' });
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    });

    if (marathonTocFilterPills) {
      marathonTocFilterPills.querySelectorAll('.btn-toc-filter').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-filter') === filter);
      });
    }

    updateMarathonProgressUI();
  }

  function renderMarathonContent() {
    if (!marathonPageContent || typeof MARATHON_DATA === 'undefined') return;

    if (marathonState.viewMode === 'feed') {
      marathonPageContent.innerHTML = MARATHON_DATA.map(d => generateDayBookHtml(d, false)).join('');
    } else {
      const day = MARATHON_DATA[marathonState.currentDay] || MARATHON_DATA[0];
      marathonPageContent.innerHTML = generateDayBookHtml(day, true);
    }

    attachMarathonQuizHandlers();
    updatePageTurnerState();
  }

  function updatePageTurnerState() {
    if (typeof MARATHON_DATA === 'undefined' || MARATHON_DATA.length === 0) return;
    const current = MARATHON_DATA[marathonState.currentDay] || MARATHON_DATA[0];
    const totalDays = MARATHON_DATA.length;
    const completed = getCompletedDays();
    const isCompleted = completed.includes(current.dayId);

    if (marathonCurrentLabel) {
      marathonCurrentLabel.textContent = `Day ${current.dayNumber} of ${totalDays} • ${current.title.replace(/^TRE 4\.0 —\s*/, '')}`;
    }

    if (marathonPageNumberIndicator) {
      marathonPageNumberIndicator.textContent = `Day ${current.dayNumber} of ${totalDays}`;
    }
    if (chkMarathonDayCompleted) {
      chkMarathonDayCompleted.checked = isCompleted;
    }
    if (markMarathonCompletedText) {
      markMarathonCompletedText.textContent = isCompleted ? 'Day Completed ✓' : 'Mark Day Completed';
    }

    if (btnPrevMarathonDay) {
      if (marathonState.currentDay > 0) {
        btnPrevMarathonDay.disabled = false;
        btnPrevMarathonDay.style.opacity = '1';
        if (prevMarathonDayTitle) {
          const prev = MARATHON_DATA[marathonState.currentDay - 1];
          prevMarathonDayTitle.textContent = `Day ${prev.dayNumber}: ${prev.title.replace(/^TRE 4\.0 —\s*/, '')}`;
        }
      } else {
        btnPrevMarathonDay.disabled = true;
        btnPrevMarathonDay.style.opacity = '0.4';
        if (prevMarathonDayTitle) prevMarathonDayTitle.textContent = 'Cover';
      }
    }

    if (btnNextMarathonDay) {
      if (marathonState.currentDay < totalDays - 1) {
        btnNextMarathonDay.disabled = false;
        btnNextMarathonDay.style.opacity = '1';
        if (nextMarathonDayTitle) {
          const next = MARATHON_DATA[marathonState.currentDay + 1];
          nextMarathonDayTitle.textContent = `Day ${next.dayNumber}: ${next.title.replace(/^TRE 4\.0 —\s*/, '')}`;
        }
      } else {
        btnNextMarathonDay.disabled = true;
        btnNextMarathonDay.style.opacity = '0.4';
        if (nextMarathonDayTitle) nextMarathonDayTitle.textContent = 'End of Marathon';
      }
    }
  }

  function attachMarathonQuizHandlers() {
    if (!marathonPageContent) return;

    marathonPageContent.querySelectorAll('.marathon-q-item').forEach(qItem => {
      const correctIdx = parseInt(qItem.getAttribute('data-correct'), 10);
      const qId = qItem.getAttribute('data-qid');
      const explBox = document.getElementById(`expl-${qId}`);
      const optionBtns = qItem.querySelectorAll('.marathon-option-btn');

      optionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const selectedIdx = parseInt(btn.getAttribute('data-opt-idx'), 10);
          optionBtns.forEach(b => b.disabled = true);

          if (selectedIdx === correctIdx) {
            btn.classList.add('opt-correct');
            const label = btn.querySelector('.marathon-option-label');
            if (label) label.innerHTML += ' ✓';
          } else {
            btn.classList.add('opt-wrong');
            const label = btn.querySelector('.marathon-option-label');
            if (label) label.innerHTML += ' ✗';

            const correctBtn = optionBtns[correctIdx];
            if (correctBtn) {
              correctBtn.classList.add('opt-correct');
              const cLabel = correctBtn.querySelector('.marathon-option-label');
              if (cLabel) cLabel.innerHTML += ' ✓ (Correct Answer)';
            }
          }

          if (explBox) {
            explBox.classList.add('show');
          }

          const testCard = qItem.closest('.marathon-test-card');
          if (testCard) {
            const answeredCount = testCard.querySelectorAll('.marathon-option-btn:disabled').length / 5;
            const solvedSpan = testCard.querySelector('.solved-count');
            if (solvedSpan) {
              solvedSpan.textContent = Math.round(answeredCount);
            }
          }
        });
      });
    });
  }

  function initMarathonBookReader() {
    loadMarathonState();
    applyMarathonTheme(marathonState.theme || 'dark');
    applyMarathonFontSize(marathonState.fontSize || 'md');
    applyMarathonViewMode(marathonState.viewMode || 'book');

    renderMarathonToc();
    renderMarathonContent();

    if (btnToggleMarathonToc) {
      btnToggleMarathonToc.addEventListener('click', () => {
        if (marathonTocSidebar && marathonTocSidebar.classList.contains('open')) {
          closeMobileMarathonToc();
        } else {
          openMobileMarathonToc();
        }
      });
    }

    if (btnCloseMarathonToc) {
      btnCloseMarathonToc.addEventListener('click', closeMobileMarathonToc);
    }

    if (marathonTocBackdrop) {
      marathonTocBackdrop.addEventListener('click', closeMobileMarathonToc);
    }

    if (marathonTocFilterPills) {
      marathonTocFilterPills.querySelectorAll('.btn-toc-filter').forEach(btn => {
        btn.addEventListener('click', () => {
          const filter = btn.getAttribute('data-filter') || 'all';
          marathonState.tocFilter = filter;
          renderMarathonToc();
          saveMarathonState();
        });
      });
    }

    if (btnMarathonFontDec) btnMarathonFontDec.addEventListener('click', () => applyMarathonFontSize('sm'));
    if (btnMarathonFontReset) btnMarathonFontReset.addEventListener('click', () => applyMarathonFontSize('md'));
    if (btnMarathonFontInc) btnMarathonFontInc.addEventListener('click', () => applyMarathonFontSize('lg'));

    if (btnMarathonThemeDark) btnMarathonThemeDark.addEventListener('click', () => applyMarathonTheme('dark'));
    if (btnMarathonThemeSepia) btnMarathonThemeSepia.addEventListener('click', () => applyMarathonTheme('sepia'));
    if (btnMarathonThemePaper) btnMarathonThemePaper.addEventListener('click', () => applyMarathonTheme('paper'));

    if (btnMarathonModeBook) btnMarathonModeBook.addEventListener('click', () => applyMarathonViewMode('book'));
    if (btnMarathonModeFeed) btnMarathonModeFeed.addEventListener('click', () => applyMarathonViewMode('feed'));

    if (btnPrevMarathonDay) {
      btnPrevMarathonDay.addEventListener('click', () => {
        if (marathonState.currentDay > 0) {
          marathonState.currentDay--;
          renderMarathonContent();
          renderMarathonToc();
          saveMarathonState();
          if (marathonPageStage) marathonPageStage.scrollTo({ top: 0, behavior: 'smooth' });
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }

    if (btnNextMarathonDay) {
      btnNextMarathonDay.addEventListener('click', () => {
        if (marathonState.currentDay < MARATHON_DATA.length - 1) {
          marathonState.currentDay++;
          renderMarathonContent();
          renderMarathonToc();
          saveMarathonState();
          if (marathonPageStage) marathonPageStage.scrollTo({ top: 0, behavior: 'smooth' });
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }

    if (chkMarathonDayCompleted) {
      chkMarathonDayCompleted.addEventListener('change', () => {
        const day = MARATHON_DATA[marathonState.currentDay];
        if (day) {
          setDayCompleted(day.dayId, chkMarathonDayCompleted.checked);
        }
      });
    }

    if (btnResetMarathonProgress) {
      btnResetMarathonProgress.addEventListener('click', () => {
        if (confirm('Reset your Marathon progress and streak?')) {
          try {
            localStorage.removeItem(MARATHON_STORAGE_KEY);
          } catch (e) {}
          updateMarathonProgressUI();
          renderMarathonToc();
          updatePageTurnerState();
        }
      });
    }

    document.addEventListener('keydown', (e) => {
      const marathonPane = document.getElementById('tab-marathon');
      if (!marathonPane || !marathonPane.classList.contains('active')) return;
      if (marathonState.viewMode !== 'book') return;

      if (e.key === 'ArrowLeft' && marathonState.currentDay > 0) {
        marathonState.currentDay--;
        renderMarathonContent();
        renderMarathonToc();
        saveMarathonState();
        if (marathonPageStage) marathonPageStage.scrollTo({ top: 0, behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (e.key === 'ArrowRight' && marathonState.currentDay < MARATHON_DATA.length - 1) {
        marathonState.currentDay++;
        renderMarathonContent();
        renderMarathonToc();
        saveMarathonState();
        if (marathonPageStage) marathonPageStage.scrollTo({ top: 0, behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  // Backward compatibility aliases
  function renderMarathonCards(filter = 'all') {
    initMarathonBookReader();
  }
  function renderMarathonFilterBar(filter = 'all') {
    // Handled in TOC
  }

  // -------------------------------------------------------------
  // Navigation Tabs Controller (tre4ct.aiwazir.com style)
  // -------------------------------------------------------------
  function switchTab(tabId) {
    const navButtons = document.querySelectorAll('.nav-tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    navButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
    });

    tabPanes.forEach(pane => {
      pane.classList.toggle('active', pane.id === tabId);
    });

    // Update URL hash smoothly
    const hashName = tabId.replace('tab-', '');
    if (history.replaceState) {
      history.replaceState(null, null, `#${hashName}`);
    } else {
      window.location.hash = hashName;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Expose switchTab globally for inline buttons & onclick events
  window.switchTab = switchTab;

  function scrollToBlueprint(e) {
    if (e && e.preventDefault) e.preventDefault();
    switchTab('tab-dashboard');
    setTimeout(() => {
      const el = document.getElementById('blueprintSection');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 120);
  }
  window.scrollToBlueprint = scrollToBlueprint;

  function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-tab-btn');
    navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTabId = btn.getAttribute('data-tab');
        if (targetTabId) {
          switchTab(targetTabId);
        }
      });
    });

    // Handle hash on initial page load (e.g. #syllabus, #ncert, #blueprint)
    const hash = window.location.hash.replace('#', '');
    if (hash === 'blueprint' || hash === 'blueprintSection') {
      scrollToBlueprint();
    } else if (hash) {
      const targetPane = document.getElementById(`tab-${hash}`);
      if (targetPane) {
        switchTab(`tab-${hash}`);
      }
    }
  }

  // Initialization
  function init() {
    initTheme();
    loadSavedTopics();
    renderDashboard();
    renderNcertLibrary('all');
    renderCheatSheets('all');
    renderMarathonFilterBar('all');
    renderMarathonCards('all');
    updateMarathonProgressUI();
    setupEventListeners();
    initNavigation();
  }

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
