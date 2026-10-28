// =========================================================================
// BPSC TRE 4.0 Computer Science — Daily Practice Marathon (Book Style)
// Day-by-Day High-Yield Revision Modules with Verbatim Exam Notes & Tests.
// =========================================================================

const MARATHON_DATA = [
  {
    "dayNumber": 1,
    "dayId": "day-1",
    "badge": "Day 01",
    "title": "TRE 4.0 — Day 1",
    "unit": "Part III (CS) • Part II (GS) • Part I (English)",
    "targetTime": "12–15 mins read + test",
    "summary": "Today we focus on only three targets so you actually retain them: Number System & Conversion (CS), Percentage (GS), and Basic English (Language).",
    "targets": [
      {
        "section": "Part III — Computer Science",
        "topic": "Number System & Conversion",
        "goal": "Strong enough for BPSC/STET MCQs"
      },
      {
        "section": "Part II — GS",
        "topic": "Percentage",
        "goal": "Fast calculation"
      },
      {
        "section": "Part I — Language",
        "topic": "Basic English",
        "goal": "Safe qualifying marks"
      }
    ],
    "introNote": "NCERT XI explicitly includes Number System and conversion between number systems.     kecs1ps TRE 3.0 actually asked decimal-to-binary/octal/hexadecimal conversion.     BPSC TRE3.0 question paper by c… The STET paper also tests binary arithmetic, Gray code and related digital concepts, so this is the correct foundation.     f4bc06d5-5757-40ca-b90b-f5ee42d…",
    "parts": [
      {
        "partId": "part-3",
        "title": "Part III — Number System",
        "sections": [
          {
            "title": "Your white-paper mental picture:",
            "blocks": [
              {
                "type": "diagram",
                "content": "                  NUMBER SYSTEM\n\n Binary          Octal          Decimal          Hex\n Base 2          Base 8         Base 10          Base 16\n  0,1             0–7            0–9          0–9, A–F"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "B O D H → 2, 8, 10, 16\n\nBinary = 2\nOctal = 8\nDecimal = 10\nHex = 16"
              }
            ]
          },
          {
            "title": "Now remember the two most important conversion rules:",
            "blocks": [
              {
                "type": "diagram",
                "content": "TO Decimal\n     ↓\nMultiply by powers\n     ↓\nAdd\n\nFROM Decimal\n     ↓\nDivide by base\n     ↓\nRead remainders upward"
              },
              {
                "type": "text",
                "content": "So:\nTo Decimal = Multiply\nFrom Decimal = Divide"
              }
            ]
          },
          {
            "title": "Example 1",
            "blocks": [
              {
                "type": "text",
                "content": "Convert:\n1011₂\n\nDraw:"
              },
              {
                "type": "diagram",
                "content": "1      0      1      1\n↓      ↓      ↓      ↓\n2³     2²     2¹     2⁰"
              },
              {
                "type": "text",
                "content": "Therefore:\n8 + 0 + 2 + 1\n= 11\n\nSo:\n\n1011₂ = 11₁₀"
              }
            ]
          },
          {
            "title": "Binary fractions",
            "blocks": [
              {
                "type": "text",
                "content": "This is your important memory image:"
              },
              {
                "type": "diagram",
                "content": "                 .\n← powers up          powers down →\n3   2   1   0   .   -1   -2   -3   -4"
              },
              {
                "type": "text",
                "content": "For:\n101.101₂\n\nThink:"
              },
              {
                "type": "diagram",
                "content": "1      0      1   .   1       0       1\n↓      ↓      ↓       ↓       ↓       ↓\n2²     2¹     2⁰      2⁻¹    2⁻²    2⁻³"
              },
              {
                "type": "text",
                "content": "Therefore:\n4 + 0 + 1 + 0.5 + 0 + 0.125\n= 5.625\n\nSo:\n\n101.101₂ = 5.625₁₀\n\nTRE 3.0 directly tested this type of binary fractional conversion.     BPSC TRE3.0 question paper by c…"
              },
              {
                "type": "callout",
                "icon": "⚡",
                "title": "Memorize these four",
                "content": "2⁻¹ = 0.5\n2⁻² = 0.25\n2⁻³ = 0.125\n2⁻⁴ = 0.0625"
              }
            ]
          },
          {
            "title": "Binary → Octal",
            "blocks": [
              {
                "type": "callout",
                "icon": "📝",
                "title": "White-paper trick:",
                "content": "OCTAL = groups of 3 bits\n\nWhy?\n2³ = 8"
              },
              {
                "type": "text",
                "content": "Example:\n111101₂"
              },
              {
                "type": "diagram",
                "content": "111 | 101\n 7     5"
              },
              {
                "type": "text",
                "content": "Therefore:\n\n111101₂ = 75₈"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory:",
                "content": "O = 3"
              }
            ]
          },
          {
            "title": "Binary → Hex",
            "blocks": [
              {
                "type": "callout",
                "icon": "📝",
                "title": "White-paper trick:",
                "content": "HEX = groups of 4 bits\n\nWhy?\n2⁴ = 16"
              },
              {
                "type": "text",
                "content": "Example:\n10101111₂"
              },
              {
                "type": "diagram",
                "content": "1010 | 1111\n A      F"
              },
              {
                "type": "text",
                "content": "Therefore:\n\n10101111₂ = AF₁₆"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory:",
                "content": "H = 4\n\nAnd memorize:\nA = 10\nB = 11\nC = 12\nD = 13\nE = 14\nF = 15"
              }
            ]
          },
          {
            "title": "Exam trap",
            "blocks": [
              {
                "type": "text",
                "content": "A digit must always be smaller than its base."
              },
              {
                "type": "diagram",
                "content": "10102₂   ❌\n782₈     ❌\n19A₁₆    ✅"
              },
              {
                "type": "callout",
                "icon": "⚠️",
                "title": "Memory:",
                "content": "Digit < Base"
              }
            ]
          }
        ]
      },
      {
        "partId": "part-2",
        "title": "Part II — Percentage",
        "sections": [
          {
            "title": "Mental picture:",
            "blocks": [
              {
                "type": "diagram",
                "content": "Percentage\n    =\n Part\n────── × 100\nWhole"
              },
              {
                "type": "text",
                "content": "Example:\n\n25 out of 100 = 25%."
              }
            ]
          },
          {
            "title": "Increase/decrease trap",
            "blocks": [
              {
                "type": "text",
                "content": "Suppose ₹100 increases by 20%:"
              },
              {
                "type": "diagram",
                "content": "100\n ↓ +20%\n120"
              },
              {
                "type": "text",
                "content": "Then decreases by 20%:"
              },
              {
                "type": "diagram",
                "content": "120\n ↓ -20%\n96"
              },
              {
                "type": "text",
                "content": "It does not return to ₹100."
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick:",
                "content": "Same +x% and -x% → always a loss\n\nShortcut:\nLoss % = x² / 100\n\nFor 20%:\n20² / 100 = 4%\n\nSo final value = ₹96."
              }
            ]
          }
        ]
      },
      {
        "partId": "part-1",
        "title": "Part I — English",
        "sections": [
          {
            "title": "Today remember only these three patterns:",
            "blocks": [
              {
                "type": "diagram",
                "content": "a  → consonant sound\nan → vowel sound"
              },
              {
                "type": "text",
                "content": "So:\n\na university ✅\nan honest man ✅\n\nBecause we care about sound, not simply the first letter."
              }
            ]
          },
          {
            "title": "Time prepositions:",
            "blocks": [
              {
                "type": "diagram",
                "content": "AT → exact time\nON → day/date\nIN → month/year"
              },
              {
                "type": "text",
                "content": "Examples:\n\nat 6 PM\non Monday\nin October"
              }
            ]
          },
          {
            "title": "And subject-verb:",
            "blocks": [
              {
                "type": "diagram",
                "content": "He goes.\nThey go.\n\nThe boy is.\nThe boys are."
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 1 Test",
      "subtitle": "Answer without looking back.",
      "questions": [
        {
          "id": "m-d1-t1",
          "question": "Q1. 11001₂ = ?",
          "options": [
            "23",
            "24",
            "25",
            "26",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "1×2⁴ + 1×2³ + 0×2² + 0×2¹ + 1×2⁰ = 16 + 8 + 0 + 0 + 1 = 25₁₀. Correct option: (C) 25."
        },
        {
          "id": "m-d1-t2",
          "question": "Q2. 31₁₀ in binary is:",
          "options": [
            "11111",
            "11110",
            "10111",
            "11011",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "31 = 16 + 8 + 4 + 2 + 1 = 2⁴ + 2³ + 2² + 2¹ + 2⁰ = 11111₂ (or 2⁵ - 1 = 31, which is five 1s). Correct option: (A) 11111."
        },
        {
          "id": "m-d1-t3",
          "question": "Q3. 111101₂ in octal is:",
          "options": [
            "65",
            "75",
            "76",
            "77",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Group into 3 bits from right: 111 | 101. 111₂ = 7, 101₂ = 5. Therefore, 111101₂ = 75₈. Correct option: (B) 75."
        },
        {
          "id": "m-d1-t4",
          "question": "Q4. 10101111₂ in hexadecimal is:",
          "options": [
            "AE",
            "AF",
            "BF",
            "CF",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Group into 4 bits: 1010 | 1111. 1010₂ = 10 = A, 1111₂ = 15 = F. Therefore, 10101111₂ = AF₁₆. Correct option: (B) AF."
        },
        {
          "id": "m-d1-t5",
          "question": "Q5. 3A₁₆ in decimal is:",
          "options": [
            "56",
            "57",
            "58",
            "60",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "3×16¹ + 10×16⁰ = 48 + 10 = 58₁₀. Correct option: (C) 58."
        },
        {
          "id": "m-d1-t6",
          "question": "Q6. 110.101₂ in decimal is:",
          "options": [
            "6.25",
            "6.5",
            "6.625",
            "6.75",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Integer part: 110₂ = 4 + 2 = 6. Fractional part: .101₂ = 1×0.5 + 0×0.25 + 1×0.125 = 0.625. Total = 6.625₁₀. Correct option: (C) 6.625."
        },
        {
          "id": "m-d1-t7",
          "question": "Q7. Which is invalid octal?",
          "options": [
            "756",
            "782",
            "101",
            "677",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Valid digit rule: Digit < Base. In Base 8 (Octal), valid digits are only 0 through 7. The digit '8' in 782 is illegal. Correct option: (B) 782."
        },
        {
          "id": "m-d1-t8",
          "question": "Q8. 25% of 240 is:",
          "options": [
            "40",
            "50",
            "60",
            "80",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "25% = 25/100 = 1/4. 240 ÷ 4 = 60. Correct option: (C) 60."
        },
        {
          "id": "m-d1-t9",
          "question": "Q9. ₹500 increased by 10% and then decreased by 10% becomes:",
          "options": [
            "₹500",
            "₹495",
            "₹490",
            "₹505",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Loss % shortcut = x² / 100 = 10² / 100 = 1% loss. 1% of ₹500 is ₹5. Final amount = 500 - 5 = ₹495. (Step-by-step: 500 + 10% = 550, then 550 - 10% = 495). Correct option: (B) ₹495."
        },
        {
          "id": "m-d1-t10",
          "question": "Q10. Choose the correct sentence:",
          "options": [
            "He is a honest man.",
            "He is an honest man.",
            "He is an university student.",
            "He is a hour late.",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Rule of sounds: 'honest' begins with a vowel sound /ɒ/ (silent 'h') → 'an honest man'. 'university' begins with a consonant sound /juː/ ('yoo') → 'a university'. Correct option: (B) He is an honest man."
        }
      ]
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MARATHON_DATA;
}
