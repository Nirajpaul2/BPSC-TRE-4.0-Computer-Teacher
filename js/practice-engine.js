/**
 * BPSC TRE 4.0 Computer Science — Practice Sets (40) Exam Engine
 * Reusable real-exam engine with timer, NTA/BPSC question palette,
 * instant scoring, topic analytics, actionable recommendations, and full review.
 */

(function () {
  'use strict';

  // Storage Keys
  const STORAGE_KEY_STATE = 'BPSC_TRE4_PRACTICE_STATE_V1';
  const STORAGE_KEY_RESULTS = 'BPSC_TRE4_PRACTICE_RESULTS_V1';

  // Registered Sets Data Registry
  const practiceDataRegistry = {};

  // Engine State
  const engineState = {
    view: 'hub', // 'hub' | 'instructions' | 'exam' | 'result' | 'review'
    selectedSetId: 'set-01',
    activeSet: null,
    currentQIndex: 0,
    userAnswers: {}, // { [qIndex]: selectedOptionIndex }
    statusMap: {},   // { [qIndex]: 'not_visited' | 'not_answered' | 'answered' | 'marked' | 'marked_answered' }
    timeRemaining: 150 * 60, // 150 minutes in seconds
    timerInterval: null,
    timeTakenSeconds: 0,
    paletteFilter: 'all',
    hubFilter: 'all',
    reviewFilter: 'all',
    lastResult: null
  };

  // Register a practice set into the engine
  function registerPracticeSet(setData) {
    if (setData && setData.id) {
      practiceDataRegistry[setData.id] = setData;
    }
  }

  // Get saved results from localStorage
  function getSavedResults() {
    try {
      const data = localStorage.getItem(STORAGE_KEY_RESULTS);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  }

  // Save result to localStorage
  function saveResult(setId, resultData) {
    try {
      const all = getSavedResults();
      all[setId] = resultData;
      localStorage.setItem(STORAGE_KEY_RESULTS, JSON.stringify(all));
    } catch (e) {}
  }

  // Get saved in-progress test states
  function getSavedStates() {
    try {
      const data = localStorage.getItem(STORAGE_KEY_STATE);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  }

  // Save current active test state
  function saveActiveState() {
    if (!engineState.activeSet || engineState.view !== 'exam') return;
    try {
      const all = getSavedStates();
      all[engineState.selectedSetId] = {
        inProgress: true,
        currentQIndex: engineState.currentQIndex,
        userAnswers: engineState.userAnswers,
        statusMap: engineState.statusMap,
        timeRemaining: engineState.timeRemaining,
        lastUpdated: Date.now()
      };
      localStorage.setItem(STORAGE_KEY_STATE, JSON.stringify(all));
    } catch (e) {}
  }

  // Clear in-progress state when test completes
  function clearActiveState(setId) {
    try {
      const all = getSavedStates();
      delete all[setId];
      localStorage.setItem(STORAGE_KEY_STATE, JSON.stringify(all));
    } catch (e) {}
  }

  // Format seconds to HH:MM:SS or MM:SS
  function formatTime(seconds) {
    const s = Math.max(0, Math.floor(seconds));
    const hrs = Math.floor(s / 3600);
    const mins = Math.floor((s % 3600) / 60);
    const secs = s % 60;
    if (hrs > 0) {
      return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  // --------------------------------------------------------------------------
  // Core View Switcher & Renderer
  // --------------------------------------------------------------------------
  function renderApp() {
    const root = document.getElementById('practiceAppRoot');
    if (!root) return;

    if (engineState.view === 'hub') {
      renderHubView(root);
    } else if (engineState.view === 'instructions') {
      renderInstructionsView(root);
    } else if (engineState.view === 'exam') {
      renderExamView(root);
    } else if (engineState.view === 'result') {
      renderResultView(root);
    } else if (engineState.view === 'review') {
      renderReviewView(root);
    }
  }

  // --------------------------------------------------------------------------
  // 1. Hub View (40 Practice Sets Grid)
  // --------------------------------------------------------------------------
  function renderHubView(root) {
    const manifest = typeof PRACTICE_SETS_MANIFEST !== 'undefined' ? PRACTICE_SETS_MANIFEST : [];
    const results = getSavedResults();
    const inProgressStates = getSavedStates();

    const completedCount = Object.keys(results).length;
    let totalScoreSum = 0;
    Object.values(results).forEach(r => { totalScoreSum += (r.score || 0); });
    const avgScore = completedCount > 0 ? (totalScoreSum / completedCount).toFixed(1) : 0;

    let filteredList = manifest;
    if (engineState.hubFilter === 'completed') {
      filteredList = manifest.filter(m => results[m.id]);
    } else if (engineState.hubFilter === 'in_progress') {
      filteredList = manifest.filter(m => inProgressStates[m.id] && !results[m.id]);
    } else if (engineState.hubFilter === 'not_started') {
      filteredList = manifest.filter(m => !results[m.id] && !inProgressStates[m.id]);
    }

    let html = `
      <div class="practice-hub">
        <header class="practice-header">
          <div class="practice-top-highlight">
            <span class="red-bullet-pulse">●</span> Practice Sets (<span class="tab-red-mark">60000 Q</span>) • 40 Full-Length BPSC Mock Tests
          </div>
          <h2 class="practice-title"><span>📝</span> BPSC TRE Computer Science Practice Sets</h2>
          <p class="practice-subtitle">
            40 Full-Length Simulation Tests (150 Questions · 150 Marks · 150 Minutes) strictly modeled on the BPSC TRE exam pattern: Part I Language (30 Qs), Part II General Studies (40 Qs), and Part III Computer Science (80 Qs).
          </p>

          <!-- Overall Stats Summary -->
          <div class="practice-stats-grid">
            <div class="practice-stat-card">
              <div class="practice-stat-icon">🎯</div>
              <div>
                <div class="practice-stat-val">${completedCount} / 40</div>
                <div class="practice-stat-lbl">Completed Sets</div>
              </div>
            </div>
            <div class="practice-stat-card">
              <div class="practice-stat-icon">⭐</div>
              <div>
                <div class="practice-stat-val">${avgScore} / 150</div>
                <div class="practice-stat-lbl">Average Score</div>
              </div>
            </div>
            <div class="practice-stat-card">
              <div class="practice-stat-icon">⏱️</div>
              <div>
                <div class="practice-stat-val">150 Mins</div>
                <div class="practice-stat-lbl">Exam Duration</div>
              </div>
            </div>
            <div class="practice-stat-card" style="border-left: 3px solid #ef4444;">
              <div class="practice-stat-icon" style="background:#fee2e2; color:#ef4444;"><span class="red-bullet">●</span></div>
              <div>
                <div class="practice-stat-val" style="color:#dc2626;">6,000 Qs</div>
                <div class="practice-stat-lbl">Practice Pool</div>
              </div>
            </div>
          </div>
        </header>

        <!-- Filter Bar -->
        <div class="practice-filter-bar">
          <div class="practice-filter-pills">
            <button class="btn-practice-filter ${engineState.hubFilter === 'all' ? 'active' : ''}" data-filter="all">All Sets (40)</button>
            <button class="btn-practice-filter ${engineState.hubFilter === 'completed' ? 'active' : ''}" data-filter="completed">Completed (${completedCount})</button>
            <button class="btn-practice-filter ${engineState.hubFilter === 'in_progress' ? 'active' : ''}" data-filter="in_progress">In Progress</button>
            <button class="btn-practice-filter ${engineState.hubFilter === 'not_started' ? 'active' : ''}" data-filter="not_started">Not Started</button>
          </div>
          <div style="font-size:0.85rem; color:var(--text-muted); font-weight:600;">
            Showing ${filteredList.length} Sets
          </div>
        </div>

        <!-- 40 Cards Grid -->
        <div class="practice-grid">
    `;

    filteredList.forEach(setMeta => {
      const result = results[setMeta.id];
      const inProgress = inProgressStates[setMeta.id];
      const isAvailable = setMeta.isAvailable || !!practiceDataRegistry[setMeta.id];
      const isLocked = typeof window.isPracticeSetLocked === 'function' && window.isPracticeSetLocked(setMeta.id);

      let statusBadge = '<span class="practice-status-badge badge-not-started">Free Preview</span>';
      if (isLocked) {
        statusBadge = '<span class="practice-status-badge badge-locked" style="background:#fee2e2; color:#b91c1c; border:1px solid #fca5a5;">🔒 Premium (₹299)</span>';
      } else if (result) {
        statusBadge = '<span class="practice-status-badge badge-completed">Completed</span>';
      } else if (inProgress) {
        statusBadge = '<span class="practice-status-badge badge-in-progress">In Progress</span>';
      }

      let scoreDisplay = result
        ? `<span class="practice-score-value">${result.score}/150 (${result.percentage}%)</span>`
        : `<span class="practice-score-value" style="color:var(--text-muted); font-weight:600;">-- / 150</span>`;

      let actionButtons = '';
      if (isLocked) {
        actionButtons = `
          <button class="btn-practice-act btn-practice-locked" onclick="window.openPaywallModal('Practice Set ${setMeta.title}')">
            🔒 Unlock for ₹299
          </button>
        `;
      } else if (!isAvailable) {
        actionButtons = `<button class="btn-practice-act btn-practice-result" disabled style="opacity:0.6; cursor:not-allowed;">🔒 Coming Soon</button>`;
      } else if (result) {
        actionButtons = `
          <button class="btn-practice-act btn-practice-result" onclick="window.PracticeEngine.viewResult('${setMeta.id}')">📊 Result</button>
          <button class="btn-practice-act btn-practice-start" onclick="window.PracticeEngine.startInstruction('${setMeta.id}')">🔄 Retake</button>
        `;
      } else if (inProgress) {
        actionButtons = `
          <button class="btn-practice-act btn-practice-resume" onclick="window.PracticeEngine.resumeExam('${setMeta.id}')">▶ Resume</button>
          <button class="btn-practice-act btn-practice-result" onclick="window.PracticeEngine.startInstruction('${setMeta.id}')">Restart</button>
        `;
      } else {
        actionButtons = `
          <button class="btn-practice-act btn-practice-start" onclick="window.PracticeEngine.startInstruction('${setMeta.id}')">🚀 Start Test</button>
        `;
      }

      html += `
        <div class="practice-card ${isLocked ? 'is-locked' : ''}">
          <div class="practice-card-header">
            <div class="practice-card-title">${setMeta.title}</div>
            ${statusBadge}
          </div>
          <div class="practice-card-meta">
            150 Questions • 150 Marks • 150 Minutes
          </div>
          <div class="practice-sections-chips">
            <span class="section-chip">Part I: 30 Qs</span>
            <span class="section-chip">Part II: 40 Qs</span>
            <span class="section-chip">Part III: 80 Qs</span>
          </div>
          <div class="practice-card-score-row">
            <span class="practice-score-label">Best Score:</span>
            ${scoreDisplay}
          </div>
          <div class="practice-card-actions">
            ${actionButtons}
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;

    root.innerHTML = html;

    // Attach Hub Filter Events
    root.querySelectorAll('.btn-practice-filter').forEach(btn => {
      btn.addEventListener('click', () => {
        engineState.hubFilter = btn.getAttribute('data-filter') || 'all';
        renderHubView(root);
      });
    });
  }

  // --------------------------------------------------------------------------
  // 2. Instructions View
  // --------------------------------------------------------------------------
  function renderInstructionsView(root) {
    const set = practiceDataRegistry[engineState.selectedSetId];
    if (!set) {
      alert('Selected practice set data is loading or not found.');
      engineState.view = 'hub';
      renderApp();
      return;
    }

    const html = `
      <div class="practice-instructions-wrap">
        <div class="instruct-header">
          <div>
            <h2 class="instruct-title">${set.title}</h2>
            <div style="font-size:0.88rem; color:var(--text-muted); margin-top:0.25rem;">
              Full-Length Mock Examination • Real Exam Simulation
            </div>
          </div>
          <div class="instruct-badge">BPSC TRE Pattern</div>
        </div>

        <div class="instruct-grid">
          <div class="instruct-item">
            <div class="instruct-item-val">150</div>
            <div class="instruct-item-lbl">Total Questions</div>
          </div>
          <div class="instruct-item">
            <div class="instruct-item-val">150</div>
            <div class="instruct-item-lbl">Total Marks</div>
          </div>
          <div class="instruct-item">
            <div class="instruct-item-val">150 Mins</div>
            <div class="instruct-item-lbl">Duration (2.5 Hours)</div>
          </div>
          <div class="instruct-item">
            <div class="instruct-item-val">+1 / 0</div>
            <div class="instruct-item-lbl">Marking Scheme</div>
          </div>
        </div>

        <h4 style="font-size:1.05rem; font-weight:800; margin-bottom:0.75rem;">Exam Structure & Sections:</h4>
        <table class="instruct-sections-table">
          <thead>
            <tr>
              <th>Section</th>
              <th>Subjects / Scope</th>
              <th>Questions</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Part I: Language</strong></td>
              <td>English (8 Qs) + Hindi (22 Qs) — <em>Qualifying 30% (9 Marks)</em></td>
              <td>30 Qs (Q1 - Q30)</td>
              <td>30 Marks</td>
            </tr>
            <tr>
              <td><strong>Part II: General Studies</strong></td>
              <td>Elementary Math, General Science, Indian National Movement & Bihar GK</td>
              <td>40 Qs (Q31 - Q70)</td>
              <td>40 Marks</td>
            </tr>
            <tr>
              <td><strong>Part III: Computer Science</strong></td>
              <td>Python, OOP, DSA, DBMS, SQL, OS, Networks, Security, TOC & SE</td>
              <td>80 Qs (Q71 - Q150)</td>
              <td>80 Marks</td>
            </tr>
          </tbody>
        </table>

        <h4 style="font-size:1.05rem; font-weight:800; margin-bottom:0.75rem;">Instructions & Exam Navigation Rules:</h4>
        <ul class="instruct-rules-list">
          <li><strong>Options:</strong> Each question contains 5 options (A, B, C, D: More than one of the above, E: None of the above).</li>
          <li><strong>Palette Navigation:</strong> Use the right-hand Question Palette to jump directly to any question.</li>
          <li><strong>Color Code Indicators:</strong>
            <br>&bull; Gray = Not Visited
            <br>&bull; Red = Not Answered
            <br>&bull; Green = Answered
            <br>&bull; Purple = Marked for Review
            <br>&bull; Purple with Green dot = Answered & Marked for Review
          </li>
          <li><strong>Timer & Auto Submit:</strong> The test runs with a 150-minute countdown timer. The test will automatically submit when the timer expires.</li>
          <li><strong>Review:</strong> Correct answers and detailed solutions will be shown only after final submission.</li>
        </ul>

        <div class="instruct-actions">
          <button class="btn-practice-act btn-practice-result" onclick="window.PracticeEngine.goHub()">← Back to Hub</button>
          <button class="btn-practice-act btn-practice-start" style="padding:0.65rem 1.75rem; font-size:0.95rem;" onclick="window.PracticeEngine.startExamNow('${set.id}')">
            I am Ready, Start Examination →
          </button>
        </div>
      </div>
    `;

    root.innerHTML = html;
  }

  // --------------------------------------------------------------------------
  // 3. Real-Exam Interface
  // --------------------------------------------------------------------------
  function renderExamView(root) {
    const set = engineState.activeSet;
    if (!set) return;

    const totalQ = set.questions.length;
    const currentQ = set.questions[engineState.currentQIndex];

    // Mark current question as visited if not yet touched
    if (!engineState.statusMap[engineState.currentQIndex]) {
      engineState.statusMap[engineState.currentQIndex] = 'not_answered';
    }

    // Counts for stats
    let answeredCount = 0;
    let markedCount = 0;
    for (let i = 0; i < totalQ; i++) {
      const st = engineState.statusMap[i];
      if (st === 'answered' || st === 'marked_answered') answeredCount++;
      if (st === 'marked' || st === 'marked_answered') markedCount++;
    }
    const remainingCount = totalQ - answeredCount;

    // Filter questions for palette if section filter applied
    let paletteIndices = [];
    for (let i = 0; i < totalQ; i++) {
      const q = set.questions[i];
      if (engineState.paletteFilter === 'all' || q.section === engineState.paletteFilter) {
        paletteIndices.push(i);
      }
    }

    // Is timer low? (< 15 mins = 900s)
    const isTimerWarning = engineState.timeRemaining <= 900;

    let html = `
      <div class="exam-stage">
        <!-- Top Toolbar Sticky -->
        <header class="exam-topbar">
          <div class="exam-info-col">
            <span style="font-size:1.2rem;">📝</span>
            <div class="exam-info-title">${set.badge} • Real Exam Simulation</div>
          </div>

          <div class="exam-quick-stats">
            <span class="stat-chip-ans">Answered: <strong>${answeredCount}</strong></span>
            <span class="stat-chip-rem">Remaining: <strong>${remainingCount}</strong></span>
            <span class="stat-chip-mark">Marked: <strong>${markedCount}</strong></span>
          </div>

          <div class="exam-timer-wrap ${isTimerWarning ? 'warning' : ''}" id="examTimerDisplay">
            <span>⏱️</span>
            <span>${formatTime(engineState.timeRemaining)}</span>
          </div>

          <button class="btn-exam-ctrl btn-ctrl-clear" onclick="window.PracticeEngine.promptSubmitTest()" style="background:#fee2e2; color:#dc2626; border-color:#fca5a5;">
            Submit Test
          </button>
        </header>

        <!-- Exam Layout: Question Area + Palette Sidebar -->
        <div class="exam-layout">

          <!-- Left: Question Area -->
          <div class="exam-main-col">
            <!-- Section Switching Tabs -->
            <div class="exam-sections-bar">
              <button class="btn-exam-section ${currentQ.section === 'part1' ? 'active' : ''}" onclick="window.PracticeEngine.jumpToSection('part1')">
                Part I: Language (Q1–30)
              </button>
              <button class="btn-exam-section ${currentQ.section === 'part2' ? 'active' : ''}" onclick="window.PracticeEngine.jumpToSection('part2')">
                Part II: General Studies (Q31–70)
              </button>
              <button class="btn-exam-section ${currentQ.section === 'part3' ? 'active' : ''}" onclick="window.PracticeEngine.jumpToSection('part3')">
                Part III: Computer Science (Q71–150)
              </button>
            </div>

            <!-- Question Card -->
            <div class="exam-question-card">
              <div class="exam-q-header">
                <span class="exam-q-num">Question ${currentQ.num} of ${totalQ}</span>
                <span class="exam-q-topic">${currentQ.topic || currentQ.sectionName}</span>
              </div>

              <div class="exam-q-text">
                ${escapeHtml(currentQ.question).replace(/\n/g, '<br>')}
              </div>

              <!-- Options -->
              <div class="exam-options-list">
    `;

    currentQ.options.forEach((opt, optIdx) => {
      const isSelected = engineState.userAnswers[engineState.currentQIndex] === optIdx;
      html += `
        <label class="exam-option-item ${isSelected ? 'selected' : ''}" onclick="window.PracticeEngine.selectOption(${optIdx})">
          <input type="radio" name="opt_choice_${engineState.currentQIndex}" class="exam-option-radio" ${isSelected ? 'checked' : ''}>
          <span>${escapeHtml(opt)}</span>
        </label>
      `;
    });

    html += `
              </div>

              <!-- Bottom Action Toolbar -->
              <div class="exam-actions-toolbar">
                <div class="exam-left-actions">
                  <button class="btn-exam-ctrl btn-ctrl-prev" ${engineState.currentQIndex === 0 ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''} onclick="window.PracticeEngine.prevQuestion()">
                    ← Previous
                  </button>
                  <button class="btn-exam-ctrl btn-ctrl-clear" onclick="window.PracticeEngine.clearResponse()">
                    Clear Response
                  </button>
                </div>
                <div class="exam-right-actions">
                  <button class="btn-exam-ctrl btn-ctrl-review" onclick="window.PracticeEngine.markForReviewAndNext()">
                    Mark for Review & Next
                  </button>
                  <button class="btn-exam-ctrl btn-ctrl-next" onclick="window.PracticeEngine.saveAndNext()">
                    Save & Next →
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Question Palette Sidebar -->
          <aside class="exam-palette-sidebar">
            <div class="palette-title">
              <span>Question Palette</span>
              <span style="font-size:0.75rem; color:var(--text-muted); font-weight:normal;">Total: 150</span>
            </div>

            <!-- Legend -->
            <div class="palette-legend">
              <div class="legend-item"><span class="legend-swatch state-not-visited"></span> Not Visited</div>
              <div class="legend-item"><span class="legend-swatch state-not-answered"></span> Not Answered</div>
              <div class="legend-item"><span class="legend-swatch state-answered"></span> Answered</div>
              <div class="legend-item"><span class="legend-swatch state-marked"></span> Marked</div>
              <div class="legend-item" style="grid-column: span 2;"><span class="legend-swatch state-marked-answered"></span> Answered & Marked</div>
            </div>

            <!-- Palette Section Filter -->
            <div style="display:flex; gap:0.25rem; margin-bottom:0.5rem;">
              <button class="btn-practice-filter ${engineState.paletteFilter === 'all' ? 'active' : ''}" style="padding:0.2rem 0.5rem; font-size:0.7rem;" onclick="window.PracticeEngine.setPaletteFilter('all')">All</button>
              <button class="btn-practice-filter ${engineState.paletteFilter === 'part1' ? 'active' : ''}" style="padding:0.2rem 0.5rem; font-size:0.7rem;" onclick="window.PracticeEngine.setPaletteFilter('part1')">Part I</button>
              <button class="btn-practice-filter ${engineState.paletteFilter === 'part2' ? 'active' : ''}" style="padding:0.2rem 0.5rem; font-size:0.7rem;" onclick="window.PracticeEngine.setPaletteFilter('part2')">Part II</button>
              <button class="btn-practice-filter ${engineState.paletteFilter === 'part3' ? 'active' : ''}" style="padding:0.2rem 0.5rem; font-size:0.7rem;" onclick="window.PracticeEngine.setPaletteFilter('part3')">Part III</button>
            </div>

            <!-- 150 Questions Grid -->
            <div class="palette-grid-scroll">
              <div class="palette-buttons-grid">
    `;

    paletteIndices.forEach(idx => {
      const q = set.questions[idx];
      const status = engineState.statusMap[idx] || 'not_visited';
      const isCurrent = idx === engineState.currentQIndex;
      html += `
        <div class="btn-palette-q state-${status} ${isCurrent ? 'current' : ''}" onclick="window.PracticeEngine.jumpToQuestion(${idx})" title="Question ${q.num}">
          ${q.num}
        </div>
      `;
    });

    html += `
              </div>
            </div>

            <div class="palette-submit-wrap">
              <button class="btn-exam-submit" onclick="window.PracticeEngine.promptSubmitTest()">
                <span>✓</span> Submit Test Final
              </button>
            </div>
          </aside>

        </div>
      </div>
    `;

    root.innerHTML = html;
  }

  // --------------------------------------------------------------------------
  // Timer Controller
  // --------------------------------------------------------------------------
  function startTimer() {
    clearInterval(engineState.timerInterval);
    engineState.timerInterval = setInterval(() => {
      if (engineState.view !== 'exam') {
        clearInterval(engineState.timerInterval);
        return;
      }

      engineState.timeRemaining--;
      engineState.timeTakenSeconds++;

      // Update timer element directly for smooth performance
      const timerEl = document.getElementById('examTimerDisplay');
      if (timerEl) {
        timerEl.innerHTML = `<span>⏱️</span><span>${formatTime(engineState.timeRemaining)}</span>`;
        if (engineState.timeRemaining <= 900) {
          timerEl.classList.add('warning');
        }
      }

      // Save every 10 seconds to localStorage
      if (engineState.timeRemaining % 10 === 0) {
        saveActiveState();
      }

      // Auto Submit on 0
      if (engineState.timeRemaining <= 0) {
        clearInterval(engineState.timerInterval);
        alert('Time is up! Your examination will now be automatically submitted.');
        finishAndCalculateResults();
      }
    }, 1000);
  }

  // --------------------------------------------------------------------------
  // Exam Navigation & Action Handlers
  // --------------------------------------------------------------------------
  function selectOption(optIndex) {
    engineState.userAnswers[engineState.currentQIndex] = optIndex;
    const currentStatus = engineState.statusMap[engineState.currentQIndex];
    if (currentStatus === 'marked' || currentStatus === 'marked_answered') {
      engineState.statusMap[engineState.currentQIndex] = 'marked_answered';
    } else {
      engineState.statusMap[engineState.currentQIndex] = 'answered';
    }
    saveActiveState();
    renderApp();
  }

  function clearResponse() {
    delete engineState.userAnswers[engineState.currentQIndex];
    engineState.statusMap[engineState.currentQIndex] = 'not_answered';
    saveActiveState();
    renderApp();
  }

  function saveAndNext() {
    const hasAnswer = engineState.userAnswers[engineState.currentQIndex] !== undefined;
    if (hasAnswer) {
      engineState.statusMap[engineState.currentQIndex] = 'answered';
    } else {
      engineState.statusMap[engineState.currentQIndex] = 'not_answered';
    }

    if (engineState.currentQIndex < engineState.activeSet.questions.length - 1) {
      engineState.currentQIndex++;
      if (!engineState.statusMap[engineState.currentQIndex]) {
        engineState.statusMap[engineState.currentQIndex] = 'not_answered';
      }
    }
    saveActiveState();
    renderApp();
  }

  function markForReviewAndNext() {
    const hasAnswer = engineState.userAnswers[engineState.currentQIndex] !== undefined;
    engineState.statusMap[engineState.currentQIndex] = hasAnswer ? 'marked_answered' : 'marked';

    if (engineState.currentQIndex < engineState.activeSet.questions.length - 1) {
      engineState.currentQIndex++;
      if (!engineState.statusMap[engineState.currentQIndex]) {
        engineState.statusMap[engineState.currentQIndex] = 'not_answered';
      }
    }
    saveActiveState();
    renderApp();
  }

  function prevQuestion() {
    if (engineState.currentQIndex > 0) {
      engineState.currentQIndex--;
      saveActiveState();
      renderApp();
    }
  }

  function jumpToQuestion(index) {
    if (index >= 0 && index < engineState.activeSet.questions.length) {
      engineState.currentQIndex = index;
      if (!engineState.statusMap[index]) {
        engineState.statusMap[index] = 'not_answered';
      }
      saveActiveState();
      renderApp();
    }
  }

  function jumpToSection(sectionId) {
    const idx = engineState.activeSet.questions.findIndex(q => q.section === sectionId);
    if (idx >= 0) {
      jumpToQuestion(idx);
    }
  }

  function setPaletteFilter(filter) {
    engineState.paletteFilter = filter;
    renderApp();
  }

  // --------------------------------------------------------------------------
  // Submit Confirmation Modal
  // --------------------------------------------------------------------------
  function promptSubmitTest() {
    const set = engineState.activeSet;
    const total = set.questions.length;
    let answered = 0;
    let marked = 0;

    for (let i = 0; i < total; i++) {
      const st = engineState.statusMap[i];
      if (st === 'answered' || st === 'marked_answered') answered++;
      if (st === 'marked' || st === 'marked_answered') marked++;
    }
    const unanswered = total - answered;

    const modalHtml = `
      <div class="exam-modal-backdrop" id="submitConfirmModal">
        <div class="exam-modal-box">
          <div class="exam-modal-title">Final Test Submission Confirmation</div>
          <p style="color:var(--text-secondary); font-size:0.88rem; line-height:1.5;">
            Are you sure you want to finish and submit your examination? Once submitted, your score will be calculated and you can review detailed solutions.
          </p>
          <table class="exam-modal-summary-table">
            <tr><td>Total Questions</td><td>${total}</td></tr>
            <tr><td>Answered Questions</td><td style="color:#059669;">${answered}</td></tr>
            <tr><td>Unanswered Questions</td><td style="color:#dc2626;">${unanswered}</td></tr>
            <tr><td>Marked for Review</td><td style="color:#7c3aed;">${marked}</td></tr>
            <tr><td>Time Remaining</td><td>${formatTime(engineState.timeRemaining)}</td></tr>
          </table>
          <div class="exam-modal-actions">
            <button class="btn-practice-act btn-practice-result" onclick="document.getElementById('submitConfirmModal').remove()">
              Cancel / Return to Exam
            </button>
            <button class="btn-practice-act btn-practice-start" onclick="window.PracticeEngine.confirmFinalSubmit()">
              Yes, Submit Final Test
            </button>
          </div>
        </div>
      </div>
    `;

    const existing = document.getElementById('submitConfirmModal');
    if (existing) existing.remove();
    document.body.insertAdjacentHTML('beforeend', modalHtml);
  }

  function confirmFinalSubmit() {
    const existing = document.getElementById('submitConfirmModal');
    if (existing) existing.remove();
    clearInterval(engineState.timerInterval);
    finishAndCalculateResults();
  }

  // --------------------------------------------------------------------------
  // Results & Scoring Engine
  // --------------------------------------------------------------------------
  function finishAndCalculateResults() {
    const set = engineState.activeSet;
    const totalQuestions = set.questions.length;
    let correct = 0;
    let wrong = 0;
    let unattempted = 0;

    const sectionScores = {
      part1: { name: 'Part I: Language', total: 0, correct: 0, score: 0 },
      part2: { name: 'Part II: General Studies', total: 0, correct: 0, score: 0 },
      part3: { name: 'Part III: Computer Science', total: 0, correct: 0, score: 0 }
    };

    const topicStats = {};

    set.questions.forEach((q, idx) => {
      const userAns = engineState.userAnswers[idx];
      const isCorrect = userAns !== undefined && userAns === q.correctAnswer;

      if (!sectionScores[q.section]) {
        sectionScores[q.section] = { name: q.sectionName, total: 0, correct: 0, score: 0 };
      }
      sectionScores[q.section].total++;

      // CS Topic aggregation
      const topicName = q.topic || 'General';
      if (!topicStats[topicName]) {
        topicStats[topicName] = { total: 0, correct: 0, wrong: 0 };
      }
      topicStats[topicName].total++;

      if (userAns === undefined) {
        unattempted++;
      } else if (isCorrect) {
        correct++;
        sectionScores[q.section].correct++;
        sectionScores[q.section].score++;
        topicStats[topicName].correct++;
      } else {
        wrong++;
        topicStats[topicName].wrong++;
      }
    });

    const score = correct; // 1 mark per correct answer, no negative marking per standard BPSC TRE pattern
    const attempted = correct + wrong;
    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
    const percentage = Math.round((score / totalQuestions) * 100);

    // Identify Strong and Weak Topics
    const strongTopics = [];
    const weakTopics = [];
    Object.keys(topicStats).forEach(t => {
      const data = topicStats[t];
      const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
      data.percentage = pct;
      if (pct >= 75) {
        strongTopics.push({ topic: t, percentage: pct });
      } else if (pct < 60) {
        weakTopics.push({ topic: t, percentage: pct });
      }
    });

    // Generate Tailored Recommendations
    const recommendations = [];
    if (sectionScores.part1 && sectionScores.part1.score < 9) {
      recommendations.push('⚠️ Part I Language score is below 9 marks (30% qualifying cutoff). Revise Hindi grammar (संधि, समास, वर्तनी) and basic English prepositions.');
    }
    weakTopics.forEach(wt => {
      if (wt.topic.includes('Operating Systems')) {
        recommendations.push('• Operating Systems (<60%): Revise Paging, Frame offset bits, TLB associative cache, Thrashing, and Coffman deadlock conditions.');
      } else if (wt.topic.includes('Network')) {
        recommendations.push('• Networks (<60%): Practice DNS, DHCP, ARP, TCP 3-way handshake, OSI 7-layer devices, and /24 subnet calculation.');
      } else if (wt.topic.includes('Python')) {
        recommendations.push('• Python Programming (<60%): Focus on mutability, list comprehensions, slicing, single-element tuples (10,), and exception handling.');
      } else if (wt.topic.includes('DBMS')) {
        recommendations.push('• DBMS & SQL (<60%): Revisit 1NF/2NF/3NF dependencies, candidate keys, WHERE vs HAVING, and ACID transaction rules.');
      } else if (wt.topic.includes('Data Structures')) {
        recommendations.push('• DSA (<60%): Reinforce BST inorder sorted traversal, stack LIFO uses, heap priority queues, and sorting complexities.');
      } else if (wt.topic.includes('Digital Logic')) {
        recommendations.push('• Digital Logic (<60%): Review truth table rows (2^n), universal NAND/NOR gates, and half/full adder equations.');
      } else {
        recommendations.push(`• ${wt.topic}: Review core concepts and practice additional MCQs.`);
      }
    });

    if (recommendations.length === 0) {
      recommendations.push('🎉 Outstanding performance across all domains! Maintain this momentum and focus on speed and timing.');
    }

    const resultData = {
      setId: set.id,
      title: set.title,
      totalQuestions,
      score,
      percentage,
      correct,
      wrong,
      unattempted,
      attempted,
      accuracy,
      timeTakenSeconds: engineState.timeTakenSeconds,
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      sectionScores,
      topicStats,
      strongTopics,
      weakTopics,
      recommendations,
      userAnswers: engineState.userAnswers
    };

    saveResult(set.id, resultData);
    clearActiveState(set.id);

    engineState.lastResult = resultData;
    engineState.view = 'result';
    renderApp();
  }

  // --------------------------------------------------------------------------
  // 4. Result View
  // --------------------------------------------------------------------------
  function renderResultView(root) {
    const res = engineState.lastResult || getSavedResults()[engineState.selectedSetId];
    if (!res) {
      engineState.view = 'hub';
      renderApp();
      return;
    }

    const set = practiceDataRegistry[res.setId] || engineState.activeSet;
    const isLanguageQualified = res.sectionScores.part1 ? res.sectionScores.part1.score >= 9 : true;

    let html = `
      <div class="practice-result-wrap">
        <div class="result-hero-card">
          <div class="result-set-title">${res.title} • Scorecard</div>
          <div style="font-size:0.85rem; color:var(--text-muted);">Attempted on ${res.date} • Duration Taken: ${formatTime(res.timeTakenSeconds)}</div>

          <div class="result-score-circle">
            <span class="result-score-big">${res.score}</span>
            <span class="result-score-denom">out of 150</span>
          </div>

          <div style="font-weight:700; font-size:1.1rem; color:${res.percentage >= 60 ? '#059669' : '#d97706'};">
            ${res.percentage}% Overall Score • ${res.percentage >= 65 ? 'Qualified (Competitive Range)' : 'Needs Further Practice'}
          </div>
          <div style="font-size:0.85rem; margin-top:0.35rem; color:var(--text-secondary);">
            Part I Language Status: <strong>${isLanguageQualified ? '✅ Qualified (≥ 9 Marks)' : '❌ Not Qualified (< 9 Marks)'}</strong>
          </div>

          <div class="result-metrics-row">
            <div class="result-metric-box">
              <div class="result-metric-val" style="color:#059669;">${res.correct}</div>
              <div class="result-metric-lbl">Correct</div>
            </div>
            <div class="result-metric-box">
              <div class="result-metric-val" style="color:#dc2626;">${res.wrong}</div>
              <div class="result-metric-lbl">Wrong</div>
            </div>
            <div class="result-metric-box">
              <div class="result-metric-val" style="color:#64748b;">${res.unattempted}</div>
              <div class="result-metric-lbl">Unattempted</div>
            </div>
            <div class="result-metric-box">
              <div class="result-metric-val" style="color:var(--accent-primary);">${res.accuracy}%</div>
              <div class="result-metric-lbl">Accuracy</div>
            </div>
            <div class="result-metric-box">
              <div class="result-metric-val">${formatTime(res.timeTakenSeconds)}</div>
              <div class="result-metric-lbl">Time Taken</div>
            </div>
          </div>
        </div>

        <!-- 3 Sections Performance -->
        <h4 style="font-size:1.1rem; font-weight:800; margin-bottom:0.75rem;">Section-wise Breakdown:</h4>
        <div class="result-sections-grid">
          <div class="result-sec-card">
            <div class="result-sec-title">
              <span>Part I: Language</span>
              <span style="color:${res.sectionScores.part1.score >= 9 ? '#059669' : '#dc2626'};">${res.sectionScores.part1.score} / 30</span>
            </div>
            <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:0.5rem;">English (8) + Hindi (22) • Qualifying Cutoff: 9</div>
            <div class="topic-bar-bg">
              <div class="topic-bar-fill" style="width:${Math.round((res.sectionScores.part1.score / 30) * 100)}%;"></div>
            </div>
          </div>

          <div class="result-sec-card">
            <div class="result-sec-title">
              <span>Part II: General Studies</span>
              <span style="color:var(--accent-primary);">${res.sectionScores.part2.score} / 40</span>
            </div>
            <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:0.5rem;">Math, Science, Bihar History & GK</div>
            <div class="topic-bar-bg">
              <div class="topic-bar-fill" style="width:${Math.round((res.sectionScores.part2.score / 40) * 100)}%;"></div>
            </div>
          </div>

          <div class="result-sec-card">
            <div class="result-sec-title">
              <span>Part III: Computer Science</span>
              <span style="color:var(--accent-primary);">${res.sectionScores.part3.score} / 80</span>
            </div>
            <div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:0.5rem;">Full PGT Computer Science Curriculum</div>
            <div class="topic-bar-bg">
              <div class="topic-bar-fill" style="width:${Math.round((res.sectionScores.part3.score / 80) * 100)}%;"></div>
            </div>
          </div>
        </div>

        <!-- Topic Breakdown & Recommendations -->
        <div class="result-analytics-grid">
          <div class="result-panel">
            <div class="result-panel-title"><span>📊</span> Computer Science Topic Performance</div>
    `;

    Object.keys(res.topicStats).forEach(topName => {
      const ts = res.topicStats[topName];
      html += `
        <div class="topic-bar-row">
          <div class="topic-bar-header">
            <span>${topName}</span>
            <span>${ts.correct}/${ts.total} (${ts.percentage}%)</span>
          </div>
          <div class="topic-bar-bg">
            <div class="topic-bar-fill" style="width:${ts.percentage}%; background:${ts.percentage >= 70 ? '#10b981' : ts.percentage >= 50 ? '#f59e0b' : '#ef4444'};"></div>
          </div>
        </div>
      `;
    });

    html += `
          </div>

          <div class="result-panel">
            <div class="result-panel-title"><span>💡</span> Smart Feedback & Recommendations</div>

            <div class="feedback-section">
              <div style="font-size:0.85rem; font-weight:700; color:#065f46; margin-bottom:0.35rem;">Strong Topics (≥ 75%):</div>
              <div>
                ${res.strongTopics.length > 0
                  ? res.strongTopics.map(st => `<span class="feedback-tag tag-strong">${st.topic} (${st.percentage}%)</span>`).join('')
                  : '<span style="font-size:0.82rem; color:var(--text-muted);">Continue practicing to build strength!</span>'}
              </div>
            </div>

            <div class="feedback-section">
              <div style="font-size:0.85rem; font-weight:700; color:#991b1b; margin-bottom:0.35rem;">Needs Improvement (< 60%):</div>
              <div>
                ${res.weakTopics.length > 0
                  ? res.weakTopics.map(wt => `<span class="feedback-tag tag-weak">${wt.topic} (${wt.percentage}%)</span>`).join('')
                  : '<span style="font-size:0.82rem; color:var(--text-muted);">No weak topics identified!</span>'}
              </div>
            </div>

            <div style="font-size:0.85rem; font-weight:700; margin-bottom:0.4rem;">Actionable Advice:</div>
            <div class="recommendations-box">
              ${res.recommendations.map(r => `<div style="margin-bottom:0.35rem;">${r}</div>`).join('')}
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="result-actions-bar">
          <button class="btn-practice-act btn-practice-result" onclick="window.PracticeEngine.goHub()">
            🏠 Practice Sets Hub
          </button>
          <button class="btn-practice-act btn-practice-start" onclick="window.PracticeEngine.startInstruction('${res.setId}')">
            🔄 Retake Test
          </button>
          <button class="btn-practice-act btn-practice-resume" style="background:#4f46e5;" onclick="window.PracticeEngine.viewReview('${res.setId}')">
            🔍 Review All 150 Answers & Solutions
          </button>
        </div>
      </div>
    `;

    root.innerHTML = html;
  }

  // --------------------------------------------------------------------------
  // 5. Review Answers View
  // --------------------------------------------------------------------------
  function renderReviewView(root) {
    const res = engineState.lastResult || getSavedResults()[engineState.selectedSetId];
    if (!res) {
      engineState.view = 'hub';
      renderApp();
      return;
    }

    const set = practiceDataRegistry[res.setId] || engineState.activeSet;
    const userAnsMap = res.userAnswers || {};

    let filteredQuestions = set.questions.map((q, idx) => ({ ...q, index: idx }));
    if (engineState.reviewFilter === 'correct') {
      filteredQuestions = filteredQuestions.filter(q => userAnsMap[q.index] !== undefined && userAnsMap[q.index] === q.correctAnswer);
    } else if (engineState.reviewFilter === 'wrong') {
      filteredQuestions = filteredQuestions.filter(q => userAnsMap[q.index] !== undefined && userAnsMap[q.index] !== q.correctAnswer);
    } else if (engineState.reviewFilter === 'unattempted') {
      filteredQuestions = filteredQuestions.filter(q => userAnsMap[q.index] === undefined);
    }

    let html = `
      <div class="practice-review-wrap">
        <div class="review-header">
          <div>
            <h3 style="font-size:1.25rem; font-weight:800; color:var(--text-primary); margin-bottom:0.25rem;">
              ${set.title} • Answer Review
            </h3>
            <div style="font-size:0.85rem; color:var(--text-muted);">
              Score: ${res.score}/150 • Accuracy: ${res.accuracy}%
            </div>
          </div>

          <div class="review-filter-pills">
            <button class="btn-practice-filter ${engineState.reviewFilter === 'all' ? 'active' : ''}" onclick="window.PracticeEngine.setReviewFilter('all')">
              All (150)
            </button>
            <button class="btn-practice-filter ${engineState.reviewFilter === 'correct' ? 'active' : ''}" onclick="window.PracticeEngine.setReviewFilter('correct')">
              Correct (${res.correct})
            </button>
            <button class="btn-practice-filter ${engineState.reviewFilter === 'wrong' ? 'active' : ''}" onclick="window.PracticeEngine.setReviewFilter('wrong')">
              Wrong (${res.wrong})
            </button>
            <button class="btn-practice-filter ${engineState.reviewFilter === 'unattempted' ? 'active' : ''}" onclick="window.PracticeEngine.setReviewFilter('unattempted')">
              Unattempted (${res.unattempted})
            </button>
          </div>

          <div>
            <button class="btn-practice-act btn-practice-result" onclick="window.PracticeEngine.viewResult('${res.setId}')">
              ← Back to Scorecard
            </button>
          </div>
        </div>

        <div class="review-list">
    `;

    filteredQuestions.forEach(q => {
      const userAns = userAnsMap[q.index];
      const isAttempted = userAns !== undefined;
      const isCorrect = isAttempted && userAns === q.correctAnswer;

      let cardClass = 'unattempted';
      let statusBadge = '<span class="review-badge-status" style="background:#e2e8f0; color:#475569;">Unattempted</span>';

      if (isAttempted) {
        if (isCorrect) {
          cardClass = 'correct';
          statusBadge = '<span class="review-badge-status" style="background:#d1fae5; color:#065f46;">✓ Correct (+1)</span>';
        } else {
          cardClass = 'wrong';
          statusBadge = '<span class="review-badge-status" style="background:#fee2e2; color:#991b1b;">✕ Incorrect (0)</span>';
        }
      }

      html += `
        <div class="review-card ${cardClass}">
          <div class="review-card-header">
            <span style="font-weight:800; font-size:0.95rem; color:var(--accent-primary);">Question ${q.num} • ${q.sectionName}</span>
            <div>
              <span class="exam-q-topic" style="margin-right:0.5rem;">${q.topic}</span>
              ${statusBadge}
            </div>
          </div>

          <div style="font-size:1rem; font-weight:600; line-height:1.5; margin-bottom:1rem; color:var(--text-primary);">
            ${escapeHtml(q.question).replace(/\n/g, '<br>')}
          </div>

          <div class="review-options-list">
      `;

      q.options.forEach((opt, optIdx) => {
        const isUserChoice = userAns === optIdx;
        const isRightAns = q.correctAnswer === optIdx;

        let optClass = '';
        let labelTag = '';

        if (isRightAns) {
          optClass = 'is-correct';
          labelTag = ' <span style="font-weight:800; color:#059669; font-size:0.8rem;">[✓ Correct Answer]</span>';
        }
        if (isUserChoice && !isRightAns) {
          optClass = 'user-wrong';
          labelTag = ' <span style="font-weight:800; color:#dc2626; font-size:0.8rem;">[Your Choice]</span>';
        } else if (isUserChoice && isRightAns) {
          labelTag = ' <span style="font-weight:800; color:#059669; font-size:0.8rem;">[Your Choice ✓]</span>';
        }

        html += `
          <div class="review-opt-item ${optClass}">
            ${escapeHtml(opt)}${labelTag}
          </div>
        `;
      });

      html += `
          </div>

          <div class="review-explanation-box">
            <strong style="color:var(--text-primary);">Explanation:</strong> ${q.explanation}
          </div>
        </div>
      `;
    });

    html += `
        </div>

        <div style="text-align:center; margin-top:2rem;">
          <button class="btn-practice-act btn-practice-result" onclick="window.PracticeEngine.viewResult('${res.setId}')">
            ← Back to Scorecard
          </button>
        </div>
      </div>
    `;

    root.innerHTML = html;
  }

  // Helper to escape HTML characters
  function escapeHtml(text) {
    if (!text) return '';
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // On-demand lazy script loader for practice sets
  function ensureSetLoaded(setId, callback) {
    if (practiceDataRegistry[setId]) {
      callback(practiceDataRegistry[setId]);
      return;
    }
    const numStr = setId.replace('set-', '');
    const globalVarName = 'PRACTICE_SET_' + numStr;
    if (typeof window !== 'undefined' && window[globalVarName]) {
      registerPracticeSet(window[globalVarName]);
      callback(practiceDataRegistry[setId]);
      return;
    }

    const existingScript = document.querySelector(`script[src*="${setId}.js"]`);
    if (existingScript) {
      existingScript.addEventListener('load', () => {
        if (typeof window !== 'undefined' && window[globalVarName]) {
          registerPracticeSet(window[globalVarName]);
        }
        callback(practiceDataRegistry[setId]);
      });
      return;
    }

    const script = document.createElement('script');
    script.src = `js/practice-data/${setId}.js`;
    script.async = true;
    script.onload = function () {
      if (typeof window !== 'undefined' && window[globalVarName]) {
        registerPracticeSet(window[globalVarName]);
      }
      if (practiceDataRegistry[setId]) {
        callback(practiceDataRegistry[setId]);
      } else {
        alert('Could not initialize practice set ' + setId);
      }
    };
    script.onerror = function () {
      alert('Failed to load practice data for ' + setId + '. Please check network connection.');
    };
    document.head.appendChild(script);
  }

  // --------------------------------------------------------------------------
  // Public Global Controller API
  // --------------------------------------------------------------------------
  window.PracticeEngine = {
    registerSet: registerPracticeSet,

    init: function () {
      // Auto-register Set 01 if already loaded on window
      if (typeof PRACTICE_SET_01 !== 'undefined') {
        registerPracticeSet(PRACTICE_SET_01);
      }
      renderApp();
    },

    goHub: function () {
      engineState.view = 'hub';
      renderApp();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    renderApp: function () {
      renderApp();
    },

    startInstruction: function (setId) {
      if (typeof window.isPracticeSetLocked === 'function' && window.isPracticeSetLocked(setId)) {
        if (typeof window.openPaywallModal === 'function') {
          window.openPaywallModal(`Practice Set ${setId}`);
        } else {
          alert("This Practice Set is locked. Please unlock the full course for ₹299.");
        }
        return;
      }
      ensureSetLoaded(setId, function () {
        engineState.selectedSetId = setId;
        engineState.view = 'instructions';
        renderApp();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    },

    startExamNow: function (setId) {
      if (typeof window.isPracticeSetLocked === 'function' && window.isPracticeSetLocked(setId)) {
        if (typeof window.openPaywallModal === 'function') {
          window.openPaywallModal(`Practice Set ${setId}`);
        }
        return;
      }
      ensureSetLoaded(setId, function (set) {
        if (!set) return;
        engineState.selectedSetId = setId;
        engineState.activeSet = set;
        engineState.currentQIndex = 0;
        engineState.userAnswers = {};
        engineState.statusMap = {};
        engineState.timeRemaining = set.durationMinutes * 60;
        engineState.timeTakenSeconds = 0;
        engineState.view = 'exam';

        saveActiveState();
        renderApp();
        startTimer();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    },

    resumeExam: function (setId) {
      if (typeof window.isPracticeSetLocked === 'function' && window.isPracticeSetLocked(setId)) {
        if (typeof window.openPaywallModal === 'function') {
          window.openPaywallModal(`Practice Set ${setId}`);
        }
        return;
      }
      ensureSetLoaded(setId, function (set) {
        const saved = getSavedStates()[setId];
        if (!set || !saved) {
          window.PracticeEngine.startInstruction(setId);
          return;
        }

        engineState.selectedSetId = setId;
        engineState.activeSet = set;
        engineState.currentQIndex = saved.currentQIndex || 0;
        engineState.userAnswers = saved.userAnswers || {};
        engineState.statusMap = saved.statusMap || {};
        engineState.timeRemaining = saved.timeRemaining || set.durationMinutes * 60;
        engineState.timeTakenSeconds = (set.durationMinutes * 60) - engineState.timeRemaining;
        engineState.view = 'exam';

        renderApp();
        startTimer();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    },

    viewResult: function (setId) {
      ensureSetLoaded(setId, function () {
        engineState.selectedSetId = setId;
        engineState.lastResult = getSavedResults()[setId];
        engineState.view = 'result';
        renderApp();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    },

    viewReview: function (setId) {
      ensureSetLoaded(setId, function () {
        engineState.selectedSetId = setId;
        engineState.lastResult = getSavedResults()[setId];
        engineState.view = 'review';
        renderApp();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    },

    setReviewFilter: function (filter) {
      engineState.reviewFilter = filter;
      renderApp();
    },

    selectOption,
    clearResponse,
    saveAndNext,
    markForReviewAndNext,
    prevQuestion,
    jumpToQuestion,
    jumpToSection,
    setPaletteFilter,
    promptSubmitTest,
    confirmFinalSubmit
  };

  // Auto initialize when DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    window.PracticeEngine.init();
  });
})();
