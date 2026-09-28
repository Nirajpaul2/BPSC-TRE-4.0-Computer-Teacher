/**
 * BPSC TRE 4.0 Computer Teacher — Visitor & Screen Drop-Off Telemetry Engine
 * Tracks:
 *  - Unique visitors & sessions
 *  - Screen / Tab navigation & time spent per screen
 *  - Drop-off / Exit screens (where visitors leave the website)
 *  - Freemium to ₹9 Unlock conversion funnel
 *  - Dual Mode: Built-in local backend + Optional GA4 / Microsoft Clarity bridge
 */

(function () {
  'use strict';

  const TAB_NAMES = {
    'tab-dashboard': 'Dashboard',
    'tab-blueprint': 'Weightage Blueprint (80M)',
    'tab-ncert': 'NCERT Digital Library',
    'tab-syllabus': 'Master Syllabus (12 Units)',
    'tab-plan': '8-Week Study Plan',
    'tab-cheatsheets': 'Quick Cheat Sheets',
    'tab-quiz': 'Practice Mock Quiz',
    'tab-rnd': 'R&D Study Hub',
    'tab-paywall': '₹9 Course Paywall Modal'
  };

  // 1. Identify Visitor & Session
  function getVisitorId() {
    let vid = localStorage.getItem('bpsc_visitor_id');
    if (!vid) {
      vid = 'vis_' + Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
      localStorage.setItem('bpsc_visitor_id', vid);
    }
    return vid;
  }

  function getSessionId() {
    let sid = sessionStorage.getItem('bpsc_session_id');
    if (!sid) {
      sid = 'sess_' + Math.random().toString(36).substring(2, 9) + Date.now().toString(36);
      sessionStorage.setItem('bpsc_session_id', sid);
    }
    return sid;
  }

  function getDeviceType() {
    const width = window.innerWidth;
    if (width <= 640) return 'Mobile';
    if (width <= 1024) return 'Tablet';
    return 'Desktop';
  }

  const visitorId = getVisitorId();
  const sessionId = getSessionId();
  const deviceType = getDeviceType();
  const referrer = document.referrer ? new URL(document.referrer).hostname : 'Direct / WhatsApp';
  const sessionStartTime = Date.now();

  let currentScreen = 'tab-dashboard';
  let screenEnterTime = Date.now();
  let screensVisited = ['Dashboard'];
  let exitLogged = false;

  // 2. Local Fallback Database (in case backend is offline or static hosting)
  function recordLocalEvent(event, screenTitle) {
    try {
      const localData = JSON.parse(localStorage.getItem('bpsc_local_analytics') || '{"screens":{}, "exits":{}, "total_visits":0}');
      if (event === 'screen_view' || event === 'session_start') {
        localData.screens[screenTitle] = (localData.screens[screenTitle] || 0) + 1;
        if (event === 'session_start') localData.total_visits++;
      } else if (event === 'screen_exit') {
        localData.exits[screenTitle] = (localData.exits[screenTitle] || 0) + 1;
      }
      localStorage.setItem('bpsc_local_analytics', JSON.stringify(localData));
    } catch (e) {
      // LocalStorage quota or private mode
    }
  }

  // 3. Send Telemetry Event to Backend
  async function sendEvent(eventType, screenId, extraData = {}) {
    const screenTitle = TAB_NAMES[screenId] || screenId;
    recordLocalEvent(eventType, screenTitle);

    const payload = {
      event: eventType,
      session_id: sessionId,
      visitor_id: visitorId,
      screen: screenId,
      screen_title: screenTitle,
      device: deviceType,
      referrer: referrer,
      timestamp: new Date().toISOString(),
      data: extraData
    };

    try {
      if (navigator.sendBeacon && eventType === 'screen_exit') {
        navigator.sendBeacon('/api/track-event', JSON.stringify(payload));
      } else {
        fetch('/api/track-event', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => {});
      }
    } catch (e) {}

    // Dispatch to GA4 if configured
    if (typeof window.gtag === 'function') {
      if (eventType === 'screen_view' || eventType === 'session_start') {
        window.gtag('event', 'page_view', {
          page_title: screenTitle + ' | BPSC TRE 4.0',
          page_location: window.location.origin + '/#' + screenId,
          page_path: '/#' + screenId
        });
      }
      window.gtag('event', eventType, {
        screen_name: screenTitle,
        device_category: deviceType,
        ...extraData
      });
    }
  }

  // 4. Send Exit / Drop-Off Beacon
  function sendExitBeacon() {
    if (exitLogged) return;
    exitLogged = true;

    const screenTitle = TAB_NAMES[currentScreen] || currentScreen;
    const durationSeconds = Math.max(1, Math.round((Date.now() - sessionStartTime) / 1000));
    recordLocalEvent('screen_exit', screenTitle);

    const exitPayload = {
      session_id: sessionId,
      visitor_id: visitorId,
      exit_screen: currentScreen,
      exit_screen_title: screenTitle,
      duration_seconds: durationSeconds,
      screens_visited: screensVisited,
      timestamp: new Date().toISOString()
    };

    try {
      const blob = new Blob([JSON.stringify(exitPayload)], { type: 'application/json' });
      if (navigator.sendBeacon) {
        navigator.sendBeacon('/api/track-exit', blob);
      } else {
        fetch('/api/track-exit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(exitPayload),
          keepalive: true
        }).catch(() => {});
      }
    } catch (e) {}

    // Dispatch exit to GA4
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'screen_exit', {
        exit_screen_name: screenTitle,
        session_duration_seconds: durationSeconds
      });
    }
  }

  // 5. Track Screen Change
  window.telemetryTrackScreen = function (screenId) {
    if (screenId === currentScreen) return;

    const prevScreenTitle = TAB_NAMES[currentScreen] || currentScreen;
    const timeSpent = Math.round((Date.now() - screenEnterTime) / 1000);

    const newScreenTitle = TAB_NAMES[screenId] || screenId;
    if (!screensVisited.includes(newScreenTitle)) {
      screensVisited.push(newScreenTitle);
    }

    currentScreen = screenId;
    screenEnterTime = Date.now();
    exitLogged = false;

    sendEvent('screen_view', screenId, {
      prev_screen: prevScreenTitle,
      time_spent_on_prev: timeSpent
    });
  };

  window.telemetryTrackAction = function (actionName, details = {}) {
    sendEvent('interaction', currentScreen, {
      action: actionName,
      ...details
    });
  };

  // 6. Lifecycle Listeners for Accurate Exit Tracking
  window.addEventListener('beforeunload', sendExitBeacon);
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
      sendExitBeacon();
    } else {
      exitLogged = false;
      screenEnterTime = Date.now();
    }
  });

  // 7. Initial Session Start
  sendEvent('session_start', 'tab-dashboard', { initial_screen: 'Dashboard' });

  // 8. Dynamic GA4 & Microsoft Clarity Injector (if credentials provided)
  function initExternalAnalytics() {
    if (window.GA_MEASUREMENT_ID && !window.gtag) {
      const gaScript = document.createElement('script');
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${window.GA_MEASUREMENT_ID}`;
      document.head.appendChild(gaScript);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag('js', new Date());
      window.gtag('config', window.GA_MEASUREMENT_ID, { send_page_view: false });
    }

    if (window.CLARITY_PROJECT_ID && !window.clarity) {
      (function (c, l, a, r, i, t, y) {
        c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
        t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", window.CLARITY_PROJECT_ID);
    }
  }

  initExternalAnalytics();

  // -------------------------------------------------------------
  // 9. Admin Analytics Viewer
  // -------------------------------------------------------------
  window.openAdminAnalyticsModal = async function () {
    const modal = document.getElementById('admin-analytics-modal');
    if (!modal) return;

    modal.style.display = 'flex';
    modal.classList.add('open');

    const container = document.getElementById('admin-analytics-content');
    if (container) {
      container.innerHTML = '<div style="text-align: center; padding: 2rem; color: var(--text-muted);">⏳ Loading visitor & screen drop-off metrics...</div>';
    }

    try {
      const res = await fetch('/api/analytics-summary');
      const data = await res.json();
      if (data.success) {
        renderAdminAnalytics(data);
      } else {
        renderLocalFallbackAnalytics();
      }
    } catch (e) {
      renderLocalFallbackAnalytics();
    }
  };

  window.closeAdminAnalyticsModal = function () {
    const modal = document.getElementById('admin-analytics-modal');
    if (modal) {
      modal.style.display = 'none';
      modal.classList.remove('open');
    }
  };

  function renderAdminAnalytics(data) {
    const container = document.getElementById('admin-analytics-content');
    if (!container) return;

    const totalVisitors = data.total_visitors || 1;
    const totalSessions = data.total_sessions || 1;
    const avgDuration = data.avg_duration_seconds || 0;
    const screenCounts = data.screen_counts || {};
    const exitCounts = data.exit_counts || {};
    const funnel = data.funnel || { paywall_views: 0, paid_count: 0, conversion_rate: 0 };

    const sortedScreens = Object.entries(screenCounts).sort((a, b) => b[1] - a[1]);
    const sortedExits = Object.entries(exitCounts).sort((a, b) => b[1] - a[1]);
    const maxScreenVisits = sortedScreens.length > 0 ? sortedScreens[0][1] : 1;
    const totalExits = Object.values(exitCounts).reduce((a, b) => a + b, 0) || 1;

    container.innerHTML = `
      <!-- Top Metric KPI Cards -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 0.75rem; margin-bottom: 1.5rem;">
        <div style="background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0.85rem; text-align: center;">
          <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Unique Visitors</div>
          <div style="font-size: 1.6rem; font-weight: 800; color: var(--accent-primary);">${totalVisitors}</div>
          <div style="font-size: 0.72rem; color: var(--text-dim);">Live / Recorded</div>
        </div>
        <div style="background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0.85rem; text-align: center;">
          <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Total Sessions</div>
          <div style="font-size: 1.6rem; font-weight: 800; color: var(--accent-secondary);">${totalSessions}</div>
          <div style="font-size: 0.72rem; color: var(--text-dim);">Candidate Visits</div>
        </div>
        <div style="background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0.85rem; text-align: center;">
          <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Avg. Time on Site</div>
          <div style="font-size: 1.6rem; font-weight: 800; color: #fbbf24;">${avgDuration > 60 ? Math.floor(avgDuration / 60) + 'm ' + (avgDuration % 60) + 's' : avgDuration + 's'}</div>
          <div style="font-size: 0.72rem; color: var(--text-dim);">Session Depth</div>
        </div>
        <div style="background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0.85rem; text-align: center;">
          <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">₹9 Enrolled Pass</div>
          <div style="font-size: 1.6rem; font-weight: 800; color: #34d399;">${funnel.paid_count}</div>
          <div style="font-size: 0.72rem; color: #34d399;">${funnel.conversion_rate}% Conv.</div>
        </div>
      </div>

      <!-- 2-Column: Screens Visited vs Screen Drop-Offs -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 1.5rem;">
        
        <!-- Screen Views Breakdown -->
        <div style="background: var(--bg-primary); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 1rem;">
          <div style="font-weight: 700; font-size: 0.95rem; margin-bottom: 0.75rem; display: flex; align-items: center; justify-content: space-between;">
            <span>📱 Most Visited Screens</span>
            <span style="font-size: 0.75rem; color: var(--text-muted);">Views</span>
          </div>
          ${sortedScreens.length === 0 ? '<div style="color: var(--text-dim); font-size: 0.85rem;">No screen views recorded yet.</div>' : sortedScreens.map(([screen, count]) => {
            const pct = Math.round((count / maxScreenVisits) * 100);
            return `
              <div style="margin-bottom: 0.65rem;">
                <div style="display: flex; justify-content: space-between; font-size: 0.82rem; margin-bottom: 0.2rem;">
                  <span>${escapeHtml(screen)}</span>
                  <strong>${count} views</strong>
                </div>
                <div style="background: var(--bg-tertiary); height: 6px; border-radius: 3px; overflow: hidden;">
                  <div style="background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary)); width: ${pct}%; height: 100%; border-radius: 3px;"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Drop-Off / Exit Hotspots -->
        <div style="background: var(--bg-primary); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 1rem;">
          <div style="font-weight: 700; font-size: 0.95rem; margin-bottom: 0.75rem; display: flex; align-items: center; justify-content: space-between;">
            <span style="color: #fb7185;">🚪 Top Exit Screens (Drop-Offs)</span>
            <span style="font-size: 0.75rem; color: var(--text-muted);">Exits</span>
          </div>
          <p style="font-size: 0.78rem; color: var(--text-dim); margin-bottom: 0.75rem;">
            Shows the exact screen where students were when they closed the tab or left the website:
          </p>
          ${sortedExits.length === 0 ? '<div style="color: var(--text-dim); font-size: 0.85rem;">No exits recorded yet. (Exit triggers on tab close).</div>' : sortedExits.map(([screen, count]) => {
            const exitPct = Math.round((count / totalExits) * 100);
            return `
              <div style="margin-bottom: 0.65rem;">
                <div style="display: flex; justify-content: space-between; font-size: 0.82rem; margin-bottom: 0.2rem;">
                  <span>${escapeHtml(screen)}</span>
                  <span style="color: #fb7185; font-weight: 700;">${count} exits (${exitPct}%)</span>
                </div>
                <div style="background: var(--bg-tertiary); height: 6px; border-radius: 3px; overflow: hidden;">
                  <div style="background: linear-gradient(90deg, #f43f5e, #fb7185); width: ${exitPct}%; height: 100%; border-radius: 3px;"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>

      </div>

      <!-- ₹9 Freemium Conversion Funnel -->
      <div style="background: var(--bg-primary); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 1rem; margin-bottom: 1.25rem;">
        <div style="font-weight: 700; font-size: 0.95rem; margin-bottom: 0.5rem;">
          🎯 Aspirant Conversion Funnel (Visitors → Paid Course)
        </div>
        <div style="display: flex; justify-content: space-around; text-align: center; flex-wrap: wrap; gap: 1rem; padding: 0.75rem 0;">
          <div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Step 1: All Visitors</div>
            <div style="font-size: 1.35rem; font-weight: 800;">${totalSessions}</div>
            <div style="font-size: 0.72rem; color: var(--text-dim);">100% Top of Funnel</div>
          </div>
          <div style="display: flex; align-items: center; color: var(--text-dim);">➔</div>
          <div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Step 2: Paywall Viewed</div>
            <div style="font-size: 1.35rem; font-weight: 800; color: #fbbf24;">${funnel.paywall_views}</div>
            <div style="font-size: 0.72rem; color: #fbbf24;">${totalSessions > 0 ? Math.round((funnel.paywall_views / totalSessions) * 100) : 0}% Intent</div>
          </div>
          <div style="display: flex; align-items: center; color: var(--text-dim);">➔</div>
          <div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Step 3: ₹9 Lifetime Pass</div>
            <div style="font-size: 1.35rem; font-weight: 800; color: #34d399;">${funnel.paid_count}</div>
            <div style="font-size: 0.72rem; color: #34d399;">${funnel.conversion_rate}% Conversion</div>
          </div>
        </div>
      </div>

      <!-- Action Footer -->
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; font-size: 0.8rem;">
        <div style="color: var(--text-dim);">
          🔒 Stored in <code>analytics_db.json</code> (Zero external tracking cookie dependencies).
        </div>
        <div style="display: flex; gap: 0.5rem;">
          <button class="btn-secondary" onclick="openAdminAnalyticsModal()" style="font-size: 0.78rem; padding: 0.35rem 0.65rem;">
            🔄 Live Refresh
          </button>
          <button class="btn-secondary" onclick="resetServerAnalytics()" style="font-size: 0.78rem; padding: 0.35rem 0.65rem; color: var(--accent-rose); border-color: rgba(244, 63, 94, 0.4);">
            🗑️ Reset Data
          </button>
        </div>
      </div>
    `;
  }

  function renderLocalFallbackAnalytics() {
    const container = document.getElementById('admin-analytics-content');
    if (!container) return;
    const local = JSON.parse(localStorage.getItem('bpsc_local_analytics') || '{"screens":{}, "exits":{}, "total_visits":1}');
    renderAdminAnalytics({
      total_visitors: 1,
      total_sessions: local.total_visits || 1,
      avg_duration_seconds: 45,
      screen_counts: local.screens || {},
      exit_counts: local.exits || {},
      funnel: {
        paywall_views: local.screens['₹9 Course Paywall Modal'] || 0,
        paid_count: localStorage.getItem('bpsc_unlocked') === 'true' ? 1 : 0,
        conversion_rate: localStorage.getItem('bpsc_unlocked') === 'true' ? 100 : 0
      }
    });
  }

  window.resetServerAnalytics = async function () {
    if (confirm("Are you sure you want to reset visitor analytics data?")) {
      try {
        await fetch('/api/reset-analytics', { method: 'POST' });
        localStorage.removeItem('bpsc_local_analytics');
        openAdminAnalyticsModal();
      } catch (e) {
        localStorage.removeItem('bpsc_local_analytics');
        openAdminAnalyticsModal();
      }
    }
  };

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

})();
