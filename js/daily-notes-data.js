// =========================================================================
// BPSC TRE 4.0 Computer Teacher — Daily Master Notes & White-Paper Series
// Daily content curated for aspirants, updated on a daily basis.
// =========================================================================

const DAILY_NOTES_DATA = [
  {
    id: "tre4-day-1",
    dayNumber: 1,
    dayLabel: "TRE4 Day 1",
    title: "TRE 4.0 Computer Science — Number System",
    subtitle: "BODH Architecture, 2 Golden Conversion Rules, Octal/Hex Bit Groups, Binary Fractions & MCQ Traps",
    unitTag: "Unit 1: Computer Systems & Architecture",
    unitId: "unit-1",
    date: "Day 1",
    readTime: "5 min read",
    highlightBadge: "Day 1 Live",
    summary: "Master the B O D H (2, 8, 10, 16) framework, two biggest conversion rules (To Decimal = Multiply, From Decimal = Divide), binary fractions, and the illegal digit MCQ trap.",
    topics: ["BODH Framework", "Base to Decimal", "Decimal to Binary", "Binary to Octal", "Binary to Hex", "Hex Digits (A-F)", "Binary Fractions", "Valid Digit Rule"],
    htmlContent: `
      <div class="daily-note-article">
        <!-- Intro Hero Banner -->
        <div class="daily-hero-box">
          <div class="daily-hero-badge">🌟 BPSC TRE 4.0 DAILY MASTER NOTES — DAY 1</div>
          <h2 class="daily-hero-title">TRE 4.0 Computer Science — Number System</h2>
          <p class="daily-hero-desc">
            Direct high-yield memory notes for Bihar Computer Teacher (PGT Class 11–12) aspirants. Keep this white-paper mental map in your mind before solving any number system question!
          </p>
        </div>

        <!-- Section: White-Paper Picture -->
        <div class="note-section-card">
          <div class="note-sec-header">
            <span class="sec-icon">🖼️</span>
            <h3>The White-Paper Mental Picture</h3>
          </div>
          <p class="note-lead-text">
            For TRE 4.0, remember one white-paper picture first:
          </p>
          <div class="ascii-diagram-container">
            <pre class="ascii-art">
                   NUMBER SYSTEM

        Binary      Octal      Decimal      Hex
          2           8           10         16
          │           │            │          │
         0,1         0–7          0–9       0–9,A–F
            </pre>
          </div>

          <div class="memory-callout-box">
            <div class="memory-tag">⚡ Memory Trick</div>
            <div class="memory-rule">B O D H → 2, 8, 10, 16</div>
            <p style="margin-top: 0.5rem; color: var(--text-muted); font-size: 0.9rem;">
              Think: <strong>Binary = 2</strong> • <strong>Octal = 8</strong> • <strong>Decimal = 10</strong> • <strong>Hexadecimal = 16</strong>
            </p>
          </div>
        </div>

        <!-- Section 1: Any Base -> Decimal -->
        <div class="note-section-card">
          <div class="note-sec-header">
            <span class="sec-num-badge">1</span>
            <h3>Any Base → Decimal (To Decimal)</h3>
          </div>

          <div class="flow-mental-picture">
            <div class="flow-step">Digits</div>
            <div class="flow-arrow">↓</div>
            <div class="flow-step highlight">Multiply by powers of BASE</div>
            <div class="flow-arrow">↓</div>
            <div class="flow-step">Add everything</div>
            <div class="flow-arrow">↓</div>
            <div class="flow-step success">DECIMAL (Base 10)</div>
          </div>

          <div class="example-box">
            <div class="example-title"><span>📘</span> Example: Convert 1011₂ to Decimal</div>
            <div class="calc-table-wrap">
              <table class="calc-table">
                <thead>
                  <tr><th>Digit</th><td>1</td><td>0</td><td>1</td><td>1</td></tr>
                </thead>
                <tbody>
                  <tr><th>Power of 2</th><td>2³</td><td>2²</td><td>2¹</td><td>2⁰</td></tr>
                  <tr><th>Value</th><td>8</td><td>4</td><td>2</td><td>1</td></tr>
                  <tr><th>Product</th><td>1 × 8 = 8</td><td>0 × 4 = 0</td><td>1 × 2 = 2</td><td>1 × 1 = 1</td></tr>
                </tbody>
              </table>
            </div>
            <div class="calc-result-box">
              Sum = 8 + 0 + 2 + 1 = <strong>11</strong><br>
              Therefore: <strong>1011₂ = 11₁₀</strong>
            </div>
          </div>

          <div class="golden-sentence">
            <span class="bulb-icon">💡</span>
            <span><strong>Memory Sentence:</strong> To Decimal → Multiply &amp; Add.</span>
          </div>
        </div>

        <!-- Section 2: Decimal -> Binary -->
        <div class="note-section-card">
          <div class="note-sec-header">
            <span class="sec-num-badge">2</span>
            <h3>Decimal → Binary (From Decimal)</h3>
          </div>
          <p style="color: var(--text-muted); font-size: 0.92rem;">Do the exact opposite of rule #1.</p>

          <div class="flow-mental-picture">
            <div class="flow-step">DECIMAL</div>
            <div class="flow-arrow">↓</div>
            <div class="flow-step highlight">Divide by 2 repeatedly</div>
            <div class="flow-arrow">↓</div>
            <div class="flow-step">Write remainders</div>
            <div class="flow-arrow">↓</div>
            <div class="flow-step success">Read ↑ bottom to top (MSB to LSB)</div>
          </div>

          <div class="example-box">
            <div class="example-title"><span>📘</span> Example: Convert 25₁₀ to Binary</div>
            <div class="division-ladder">
              <div class="ladder-row"><span class="step-calc">25 ÷ 2 = 12</span> <span class="remainder-pill">remainder 1</span></div>
              <div class="ladder-row"><span class="step-calc">12 ÷ 2 = 6</span> <span class="remainder-pill">remainder 0</span></div>
              <div class="ladder-row"><span class="step-calc"> 6 ÷ 2 = 3</span> <span class="remainder-pill">remainder 0</span></div>
              <div class="ladder-row"><span class="step-calc"> 3 ÷ 2 = 1</span> <span class="remainder-pill">remainder 1</span></div>
              <div class="ladder-row"><span class="step-calc"> 1 ÷ 2 = 0</span> <span class="remainder-pill">remainder 1</span></div>
            </div>
            <div class="upward-read-indicator">
              <span>↑ Read upward from bottom remainder to top</span>
            </div>
            <div class="calc-result-box">
              Answer: <strong>25₁₀ = 11001₂</strong>
            </div>
          </div>

          <div class="golden-sentence">
            <span class="bulb-icon">💡</span>
            <span><strong>Memory Sentence:</strong> From Decimal → Divide.</span>
          </div>

          <div class="two-rules-card">
            <div class="rules-header">🏆 Your Two Biggest Master Rules:</div>
            <div class="rules-grid">
              <div class="rule-col multiply">
                <div class="rule-action">TO Decimal</div>
                <div class="rule-math">➜ Multiply &amp; Add</div>
              </div>
              <div class="rule-col divide">
                <div class="rule-action">FROM Decimal</div>
                <div class="rule-math">➜ Divide &amp; Reverse</div>
              </div>
            </div>
            <div class="rules-footer">Very easy to remember in the exam hall!</div>
          </div>
        </div>

        <!-- Section 3: Binary <-> Octal -->
        <div class="note-section-card">
          <div class="note-sec-header">
            <span class="sec-num-badge">3</span>
            <h3>Binary ↔ Octal</h3>
          </div>
          <p style="color: var(--text-muted); font-size: 0.95rem;">
            Imagine <strong>three children holding hands</strong>:
          </p>
          <div class="analogy-card">
            <div class="analogy-title">Binary → groups of 3 → Octal</div>
            <div class="analogy-formula">Because: <strong>2³ = 8</strong></div>
          </div>

          <div class="example-box">
            <div class="example-title"><span>📘</span> Example: Convert 110101₂ to Octal</div>
            <div class="bit-group-display">
              <div class="bit-chunk">
                <div class="bits">1 1 0</div>
                <div class="chunk-arrow">↓</div>
                <div class="oct-digit">6</div>
              </div>
              <div class="bit-divider">|</div>
              <div class="bit-chunk">
                <div class="bits">1 0 1</div>
                <div class="chunk-arrow">↓</div>
                <div class="oct-digit">5</div>
              </div>
            </div>
            <div class="calc-result-box">
              Therefore: <strong>110101₂ = 65₈</strong>
            </div>
          </div>

          <div class="memory-callout-box">
            <div class="memory-tag">⚡ White-Paper Trick</div>
            <div class="memory-rule">OCTAL ➜ 3 binary bits &nbsp;(O = 3)</div>
          </div>
        </div>

        <!-- Section 4: Binary <-> Hexadecimal -->
        <div class="note-section-card">
          <div class="note-sec-header">
            <span class="sec-num-badge">4</span>
            <h3>Binary ↔ Hexadecimal</h3>
          </div>
          <p style="color: var(--text-muted); font-size: 0.95rem;">
            Now imagine <strong>four children holding hands</strong>:
          </p>
          <div class="analogy-card hex">
            <div class="analogy-title">Binary → groups of 4 → Hex</div>
            <div class="analogy-formula">Because: <strong>2⁴ = 16</strong></div>
          </div>

          <div class="example-box">
            <div class="example-title"><span>📘</span> Example: Convert 11010110₂ to Hexadecimal</div>
            <div class="bit-group-display">
              <div class="bit-chunk">
                <div class="bits">1 1 0 1</div>
                <div class="chunk-arrow">↓</div>
                <div class="oct-digit">D (13)</div>
              </div>
              <div class="bit-divider">|</div>
              <div class="bit-chunk">
                <div class="bits">0 1 1 0</div>
                <div class="chunk-arrow">↓</div>
                <div class="oct-digit">6</div>
              </div>
            </div>
            <div class="calc-result-box">
              Therefore: <strong>11010110₂ = D6₁₆</strong>
            </div>
          </div>

          <div class="comparison-pill-box">
            <div class="comp-pill"><span>Octal</span> ➜ <strong>3 bits</strong></div>
            <div class="comp-connector">•</div>
            <div class="comp-pill hex"><span>Hex</span> ➜ <strong>4 bits</strong></div>
          </div>
          <div class="golden-sentence">
            <span class="bulb-icon">💡</span>
            <span>Just mentally see: <strong>O3 — H4</strong></span>
          </div>
        </div>

        <!-- Section 5: Hex digits -->
        <div class="note-section-card">
          <div class="note-sec-header">
            <span class="sec-num-badge">5</span>
            <h3>Hex Digits (A through F)</h3>
          </div>
          <p style="color: var(--text-muted); font-size: 0.92rem;">You must know these instantly without hesitation in TRE 4.0:</p>

          <div class="hex-grid">
            <div class="hex-card"><span class="hex-letter">A</span><span class="hex-eq">=</span><span class="hex-val">10</span></div>
            <div class="hex-card"><span class="hex-letter">B</span><span class="hex-eq">=</span><span class="hex-val">11</span></div>
            <div class="hex-card"><span class="hex-letter">C</span><span class="hex-eq">=</span><span class="hex-val">12</span></div>
            <div class="hex-card"><span class="hex-letter">D</span><span class="hex-eq">=</span><span class="hex-val">13</span></div>
            <div class="hex-card"><span class="hex-letter">E</span><span class="hex-eq">=</span><span class="hex-val">14</span></div>
            <div class="hex-card"><span class="hex-letter">F</span><span class="hex-eq">=</span><span class="hex-val">15</span></div>
          </div>

          <div class="golden-sentence">
            <span class="bulb-icon">💡</span>
            <span><strong>Mental Sequence:</strong> After 9 → A B C D E F → 10 11 12 13 14 15</span>
          </div>

          <div class="example-box">
            <div class="example-title"><span>📘</span> Example: Convert 2F₁₆ to Decimal</div>
            <div class="calc-steps-inline">
              <div>= 2 × 16¹ + 15 × 16⁰</div>
              <div>= 32 + 15</div>
              <div>= <strong>47</strong></div>
            </div>
            <div class="calc-result-box">
              Therefore: <strong>2F₁₆ = 47₁₀</strong>
            </div>
          </div>
        </div>

        <!-- Section 6: Binary Fraction -->
        <div class="note-section-card">
          <div class="note-sec-header">
            <span class="sec-num-badge">6</span>
            <h3>Binary Fraction — Very Important (TRE Favorite)</h3>
          </div>
          <p style="color: var(--text-muted); font-size: 0.92rem;">Draw the binary point and mentally separate positive vs negative powers:</p>

          <div class="fraction-diagram-box">
            <div class="frac-pointer-row">
              <span class="pos-label">← Positive Powers</span>
              <span class="dot-label">. (Point)</span>
              <span class="neg-label">Negative Powers →</span>
            </div>
            <div class="powers-row">
              <span class="power-cell">2³</span>
              <span class="power-cell">2²</span>
              <span class="power-cell">2¹</span>
              <span class="power-cell">2⁰</span>
              <span class="dot-cell">•</span>
              <span class="power-cell neg">2⁻¹</span>
              <span class="power-cell neg">2⁻²</span>
              <span class="power-cell neg">2⁻³</span>
              <span class="power-cell neg">2⁻⁴</span>
            </div>
          </div>

          <div class="example-box">
            <div class="example-title"><span>📘</span> Example: Convert 101.101₂ to Decimal</div>
            <div class="fraction-table-wrap">
              <table class="calc-table">
                <thead>
                  <tr><th>Digit</th><td>1</td><td>0</td><td>1</td><th style="color:var(--accent-primary);">.</th><td>1</td><td>0</td><td>1</td></tr>
                </thead>
                <tbody>
                  <tr><th>Weight</th><td>2²</td><td>2¹</td><td>2⁰</td><td>•</td><td>2⁻¹</td><td>2⁻²</td><td>2⁻³</td></tr>
                  <tr><th>Value</th><td>4</td><td>0</td><td>1</td><td>•</td><td>0.5</td><td>0</td><td>0.125</td></tr>
                </tbody>
              </table>
            </div>
            <div class="calc-result-box">
              Calculate: 4 + 0 + 1 + 0.5 + 0 + 0.125 = <strong>5.625</strong><br>
              Therefore: <strong>101.101₂ = 5.625₁₀</strong>
            </div>
          </div>

          <div class="memorize-box">
            <div class="memorize-header">📌 For TRE, Memorize These 4 Fractional Values:</div>
            <div class="fraction-memo-grid">
              <div class="memo-item"><span class="m-pow">2⁻¹</span> <span class="m-val">= 0.5</span></div>
              <div class="memo-item"><span class="m-pow">2⁻²</span> <span class="m-val">= 0.25</span></div>
              <div class="memo-item"><span class="m-pow">2⁻³</span> <span class="m-val">= 0.125</span></div>
              <div class="memo-item"><span class="m-pow">2⁻⁴</span> <span class="m-val">= 0.0625</span></div>
            </div>
          </div>
        </div>

        <!-- Section 7: Valid Digit Rule -->
        <div class="note-section-card trap">
          <div class="note-sec-header">
            <span class="sec-num-badge trap">7</span>
            <h3>Valid Digit Rule — Common MCQ Trap in BPSC</h3>
          </div>
          <div class="alert-box critical" style="margin-bottom: 1rem;">
            <strong>Fundamental Invariant:</strong> A number cannot contain a digit equal to or greater than its base!
          </div>

          <div class="bases-valid-grid">
            <div class="base-row"><strong>Binary (Base 2):</strong> Only digits <code>0, 1</code> allowed</div>
            <div class="base-row"><strong>Octal (Base 8):</strong> Only digits <code>0–7</code> allowed (8 or 9 never exist!)</div>
            <div class="base-row"><strong>Decimal (Base 10):</strong> Only digits <code>0–9</code> allowed</div>
            <div class="base-row"><strong>Hexadecimal (Base 16):</strong> Only digits <code>0–9</code> and letters <code>A–F</code></div>
          </div>

          <div class="examples-trap-check">
            <div class="trap-check-item bad">
              <span class="trap-icon">❌</span>
              <div><code>10102₂</code> — Illegal! Digit 2 is not allowed in Base 2.</div>
            </div>
            <div class="trap-check-item bad">
              <span class="trap-icon">❌</span>
              <div><code>728₈</code> — Illegal! Digit 8 is not allowed in Base 8 (max is 7).</div>
            </div>
            <div class="trap-check-item good">
              <span class="trap-icon">✅</span>
              <div><code>19A₁₆</code> — Perfectly Legal! Digits are 1, 9, and A (10).</div>
            </div>
          </div>

          <div class="golden-sentence">
            <span class="bulb-icon">💡</span>
            <span><strong>Memory Sentence:</strong> Digit must always be strictly smaller than Base.</span>
          </div>
        </div>

        <!-- Interactive Self-Check MCQs -->
        <div class="daily-quiz-widget">
          <div class="quiz-widget-header">
            <span class="widget-icon">🎯</span>
            <div>
              <h3>Daily 60-Second Challenge (Day 1 Self-Check)</h3>
              <p>Test your active recall immediately from today's capsule!</p>
            </div>
          </div>

          <div class="daily-quiz-list">
            <!-- Q1 -->
            <div class="daily-q-card" data-correct="1">
              <div class="daily-q-text">1. Convert <strong>1011₂</strong> into Decimal:</div>
              <div class="daily-options">
                <button class="daily-opt-btn" onclick="checkDailyOption(this, false, 'Remember: 1×8 + 0×4 + 1×2 + 1×1 = 11!')">A) 9₁₀</button>
                <button class="daily-opt-btn" onclick="checkDailyOption(this, true, 'Correct! 1011₂ = 8 + 0 + 2 + 1 = 11₁₀.')">B) 11₁₀</button>
                <button class="daily-opt-btn" onclick="checkDailyOption(this, false, 'Multiply by powers of 2!')">C) 13₁₀</button>
                <button class="daily-opt-btn" onclick="checkDailyOption(this, false, 'Check your powers of 2: 2³ + 2¹ + 2⁰.')">D) 15₁₀</button>
              </div>
              <div class="daily-q-feedback"></div>
            </div>

            <!-- Q2 -->
            <div class="daily-q-card" data-correct="2">
              <div class="daily-q-text">2. Which of the following numbers is <strong>ILLEGAL (Invalid)</strong>?</div>
              <div class="daily-options">
                <button class="daily-opt-btn" onclick="checkDailyOption(this, false, 'Binary allows 0 and 1, so 1101₂ is valid.')">A) 1101₂</button>
                <button class="daily-opt-btn" onclick="checkDailyOption(this, false, 'Hexadecimal allows 0-9 and A-F, so 2F₁₆ is valid.')">B) 2F₁₆</button>
                <button class="daily-opt-btn" onclick="checkDailyOption(this, true, 'Correct! Octal (base 8) can only have digits 0-7. Digit 8 is illegal!')">C) 728₈</button>
                <button class="daily-opt-btn" onclick="checkDailyOption(this, false, 'Octal allows digits 0-7, so 65₈ is valid.')">D) 65₈</button>
              </div>
              <div class="daily-q-feedback"></div>
            </div>

            <!-- Q3 -->
            <div class="daily-q-card" data-correct="0">
              <div class="daily-q-text">3. In Binary-to-Octal conversion, binary bits are grouped into bundles of:</div>
              <div class="daily-options">
                <button class="daily-opt-btn" onclick="checkDailyOption(this, true, 'Correct! Because 2³ = 8, Octal uses groups of 3 bits (O = 3).')">A) 3 bits</button>
                <button class="daily-opt-btn" onclick="checkDailyOption(this, false, '4 bits is for Hexadecimal (2⁴ = 16)!')">B) 4 bits</button>
                <button class="daily-opt-btn" onclick="checkDailyOption(this, false, 'Octal uses 3 bits.')">C) 2 bits</button>
                <button class="daily-opt-btn" onclick="checkDailyOption(this, false, 'Octal uses 3 bits.')">D) 8 bits</button>
              </div>
              <div class="daily-q-feedback"></div>
            </div>
          </div>
        </div>

        <!-- Social Share & Navigation Footer -->
        <div class="daily-note-footer">
          <div class="footer-actions">
            <button class="btn-share-daily" onclick="shareDailyOnWhatsApp(1)">
              <span>📲</span> Share Day 1 on WhatsApp
            </button>
            <button class="btn-secondary" onclick="window.print()">
              <span>🖨️</span> Save as PDF / Print
            </button>
          </div>
          <div class="footer-next-hint">
            <strong>Next Capsule:</strong> TRE4 Day 2 will be uploaded tomorrow! Bookmark this page and check daily.
          </div>
        </div>
      </div>
    `
  }
];

// Helper to get daily note by day number
function getDailyNote(dayNum) {
  return DAILY_NOTES_DATA.find(d => d.dayNumber === dayNum) || DAILY_NOTES_DATA[0];
}
