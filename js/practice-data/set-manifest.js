// BPSC TRE 4.0 Computer Science — 40 Practice Sets Manifest
// Master metadata registry for all 40 BPSC TRE Practice Sets

const PRACTICE_SETS_MANIFEST = Array.from({ length: 40 }, (_, idx) => {
  const num = idx + 1;
  const numStr = String(num).padStart(2, '0');
  return {
    id: `set-${numStr}`,
    number: num,
    title: `Practice Set ${numStr}`,
    badge: `Set ${numStr}`,
    totalQuestions: 150,
    marks: 150,
    durationMinutes: 150,
    sections: [
      { id: 'part1', name: 'Part I: Language', count: 30, marks: 30, description: '8 English + 22 Hindi (Qualifying 30%)' },
      { id: 'part2', name: 'Part II: General Studies', count: 40, marks: 40, description: 'Math, Science, Bihar GK, History, Geography' },
      { id: 'part3', name: 'Part III: Computer Science', count: 80, marks: 80, description: 'Full PGT Computer Science Curriculum' }
    ],
    // All 40 Practice Sets are active and available (6,000 Questions total)
    isAvailable: true
  };
});

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRACTICE_SETS_MANIFEST };
}

if (typeof window !== "undefined") {
  window.PRACTICE_SETS_MANIFEST = PRACTICE_SETS_MANIFEST;
}
