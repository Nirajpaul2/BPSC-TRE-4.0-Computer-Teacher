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
  },
  {
    "dayNumber": 2,
    "dayId": "day-2",
    "badge": "Day 02",
    "title": "TRE 4.0 — Day 2",
    "unit": "Part III (CS) • Part II (GS) • Part I (Hindi)",
    "targetTime": "15–18 mins read + test",
    "summary": "Today we study: Logic Gates + Truth Tables (Part III CS), Profit & Loss (Part II GS), and संज्ञा + विशेषण + कारक basics (Part I Hindi).",
    "targets": [
      {
        "section": "Part III – Computer Science",
        "topic": "Logic Gates + Truth Tables",
        "goal": "Digital circuit & truth table mastery"
      },
      {
        "section": "Part II – GS",
        "topic": "Profit & Loss",
        "goal": "CP, SP, % calculations"
      },
      {
        "section": "Part I – Hindi",
        "topic": "संज्ञा + विशेषण + कारक basics",
        "goal": "Core grammar foundation"
      }
    ],
    "introNote": "This is a high-value Computer Science topic. TRE 3.0 started Part III with digital-circuit questions, including NAND/NOR and logic operations, while your Bihar STET paper asked K-map, PLA and logic-family questions.     f4bc06d5-5757-40ca-b90b-f5ee42d…",
    "parts": [
      {
        "partId": "d2-part-3",
        "title": "Part III — Logic Gates",
        "sections": [
          {
            "title": "🧠 White-paper mental picture",
            "blocks": [
              {
                "type": "text",
                "content": "Imagine two switches controlling one bulb."
              },
              {
                "type": "diagram",
                "content": "A ──┐\n    ├── GATE ──> Bulb\nB ──┘\n\nInput:\n0 = OFF\n1 = ON\n\nOutput:\n0 = Bulb OFF\n1 = Bulb ON\n\nThat's digital logic."
              }
            ]
          },
          {
            "title": "1. AND Gate",
            "blocks": [
              {
                "type": "text",
                "content": "Mental picture:\nBoth switches must be ON."
              },
              {
                "type": "diagram",
                "content": "A ──┐\n    AND ──> Y\nB ──┘"
              },
              {
                "type": "text",
                "content": "Truth table:"
              },
              {
                "type": "diagram",
                "content": "A\tB\tY = A·B\n0\t0\t0\n0\t1\t0\n1\t0\t0\n1\t1\t1"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Easy memory trick",
                "content": "AND = ALL\n\nBoth/all inputs must be 1.\n1 AND 1 = 1\nAnything else = 0"
              }
            ]
          },
          {
            "title": "2. OR Gate",
            "blocks": [
              {
                "type": "text",
                "content": "Mental picture:\nAnyone can switch the bulb ON."
              },
              {
                "type": "diagram",
                "content": "A\tB\tY = A+B\n0\t0\t0\n0\t1\t1\n1\t0\t1\n1\t1\t1"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "OR = ANY\n\nIf any one input = 1, output = 1.\n\nOnly:\n0 OR 0 = 0"
              }
            ]
          },
          {
            "title": "3. NOT Gate",
            "blocks": [
              {
                "type": "text",
                "content": "Only one input.\n\nMental picture:\nNOT behaves like an opposite machine.\n\n0 → NOT → 1\n1 → NOT → 0\n\nTruth table:"
              },
              {
                "type": "diagram",
                "content": "A\tNOT A\n0\t1\n1\t0"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "NOT = उल्टा"
              },
              {
                "type": "callout",
                "icon": "📝",
                "title": "Your first white-paper cheat sheet",
                "diagram": "Draw only this:\nAND = ALL\nOR  = ANY\nNOT = OPPOSITE\n\nThat's enough to recreate the truth tables."
              }
            ]
          },
          {
            "title": "4. NAND Gate",
            "blocks": [
              {
                "type": "text",
                "content": "NAND means:\nNOT + AND\n\nFirst calculate AND.\n\nThen reverse it.\n\nAND:\n1 AND 1 = 1\n\nTherefore NAND:\n1 NAND 1 = 0\n\nTruth table:"
              },
              {
                "type": "diagram",
                "content": "A\tB\tAND\tNAND\n0\t0\t0\t1\n0\t1\t0\t1\n1\t0\t0\t1\n1\t1\t1\t0"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "AND has only one 1.\nNAND has only one 0."
              }
            ]
          },
          {
            "title": "5. NOR Gate",
            "blocks": [
              {
                "type": "text",
                "content": "NOR means:\nNOT + OR\n\nOR table:"
              },
              {
                "type": "diagram",
                "content": "00 → 0\n01 → 1\n10 → 1\n11 → 1\n\nReverse:\n00 → 1\n01 → 0\n10 → 0\n11 → 0"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "OR has only one 0.\nNOR has only one 1."
              }
            ]
          },
          {
            "title": "6. XOR Gate",
            "blocks": [
              {
                "type": "text",
                "content": "This is very important.\n\nThink:\nXOR likes DIFFERENT inputs."
              },
              {
                "type": "diagram",
                "content": "0,0 → same      → 0\n0,1 → different → 1\n1,0 → different → 1\n1,1 → same      → 0"
              },
              {
                "type": "text",
                "content": "Truth table:"
              },
              {
                "type": "diagram",
                "content": "A\tB\tXOR\n0\t0\t0\n0\t1\t1\n1\t0\t1\n1\t1\t0"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "White-paper trick",
                "content": "XOR = Different → 1"
              }
            ]
          },
          {
            "title": "7. XNOR Gate",
            "blocks": [
              {
                "type": "text",
                "content": "XNOR is opposite of XOR.\n\nThink:\nXNOR likes SAME inputs."
              },
              {
                "type": "diagram",
                "content": "00 → 1\n01 → 0\n10 → 0\n11 → 1"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "XNOR = Same → 1\n\nTRE 2.0 included a question asking which gate gives high output for the same inputs; that is the XNOR idea."
              },
              {
                "type": "callout",
                "icon": "📝",
                "title": "Complete one-page memory table",
                "diagram": "Write this mentally:\nAND   → ALL 1\nOR    → ANY 1\nNOT   → opposite\n\nNAND  → AND reversed\nNOR   → OR reversed\n\nXOR   → different = 1\nXNOR  → same = 1\n\nIf you remember this, you don't need to mechanically memorize seven truth tables."
              }
            ]
          },
          {
            "title": "8. Universal Gates",
            "blocks": [
              {
                "type": "text",
                "content": "Very important for TRE.\n\nWhich gates can build all other gates?\nNAND and NOR\n\nSo:\nNAND = Universal Gate\nNOR  = Universal Gate\n\nTRE 3.0 directly asked which gate can repeatedly be used to make digital circuits."
              },
              {
                "type": "callout",
                "icon": "⚡",
                "title": "Memory trick",
                "content": "NAND + NOR = Super Gates\n\nBoth are universal."
              }
            ]
          },
          {
            "title": "9. Number of truth-table rows",
            "blocks": [
              {
                "type": "text",
                "content": "If a gate has:\nn inputs\n\nTruth-table rows:\n2ⁿ\n\nExamples:"
              },
              {
                "type": "diagram",
                "content": "2 inputs → 2² = 4 rows\n3 inputs → 2³ = 8 rows\n4 inputs → 2⁴ = 16 rows"
              },
              {
                "type": "text",
                "content": "TRE 3.0 asked this exact style for a 4-input OR gate."
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "White-paper trick",
                "content": "INPUTS → POWER OF 2\n\n4 inputs:\n2⁴ = 16"
              }
            ]
          },
          {
            "title": "10. Boolean symbols",
            "blocks": [
              {
                "type": "diagram",
                "content": "Remember:\nAND = .\nOR  = +\nNOT = bar / '\n\nSo:\nA AND B = A.B\n\nA OR B = A+B\n\nNOT A = A'"
              },
              {
                "type": "callout",
                "icon": "⚠️",
                "title": "Important trap",
                "content": "Boolean + does not mean normal arithmetic addition.\n1 + 1 = 1\n\nin Boolean OR."
              },
              {
                "type": "callout",
                "icon": "⚡",
                "title": "Today's Computer Science 30-second revision",
                "diagram": "AND   = ALL\nOR    = ANY\nNOT   = REVERSE\n\nNAND  = AND + reverse\nNOR   = OR + reverse\n\nXOR   = different\nXNOR  = same\n\nNAND/NOR = universal\n\nn inputs → 2ⁿ truth-table rows"
              }
            ]
          }
        ]
      },
      {
        "partId": "d2-part-2",
        "title": "Part II — Profit & Loss",
        "sections": [
          {
            "title": "🧠 White-paper mental picture",
            "blocks": [
              {
                "type": "text",
                "content": "Imagine you buy a phone:"
              },
              {
                "type": "diagram",
                "content": "BUY\n₹100\n ↓\nCP\n\nThen sell it:\nSELL\n₹120\n ↓\nSP\n\nImportant:\nCP = Cost Price\nSP = Selling Price"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory sentence",
                "content": "CP = खरीदा\n\nSP = बेचा"
              }
            ]
          },
          {
            "title": "1. Profit",
            "blocks": [
              {
                "type": "text",
                "content": "If:\nSP > CP\n\nyou earn profit.\n\nFormula:\nProfit = SP - CP\n\nExample:"
              },
              {
                "type": "diagram",
                "content": "CP = 500\nSP = 600\n\nProfit = 600-500\n       = ₹100"
              }
            ]
          },
          {
            "title": "2. Loss",
            "blocks": [
              {
                "type": "text",
                "content": "If:\nCP > SP\n\nFormula:\nLoss = CP - SP\n\nExample:"
              },
              {
                "type": "diagram",
                "content": "CP = 500\nSP = 400\n\nLoss = 500-400\n     = ₹100"
              }
            ]
          },
          {
            "title": "3. Profit percentage",
            "blocks": [
              {
                "type": "text",
                "content": "Very important:"
              },
              {
                "type": "diagram",
                "content": "Profit%\n   =\nProfit\n────── × 100\n  CP"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "Profit/Loss percentage is usually calculated on CP."
              },
              {
                "type": "text",
                "content": "Example:\nCP = ₹500\nSP = ₹600\n\nProfit = ₹100\n\nTherefore:"
              },
              {
                "type": "diagram",
                "content": "100/500 × 100\n= 20%\n\nAnswer:\n20% profit"
              }
            ]
          },
          {
            "title": "4. Loss percentage",
            "blocks": [
              {
                "type": "diagram",
                "content": "Loss%\n  =\nLoss\n──── ×100\n CP\n\nExample:\nCP=500\nSP=450\n\nLoss=50\n\n50/500 ×100\n=10%"
              }
            ]
          },
          {
            "title": "5. Quick formula",
            "blocks": [
              {
                "type": "text",
                "content": "If profit is x%:\nSP = CP × (100+x)/100\n\nExample:"
              },
              {
                "type": "diagram",
                "content": "CP = ₹800, profit = 25%\nSP = 800 ×125/100\n   = ₹1000"
              },
              {
                "type": "text",
                "content": "If loss is x%:\nSP = CP × (100-x)/100"
              },
              {
                "type": "callout",
                "icon": "📝",
                "title": "White-paper Profit/Loss picture",
                "diagram": "             SP\n             ↑\n         Is it bigger?\n          /               YES       NO\n         ↓         ↓\n      PROFIT      LOSS\n\nAnd:\nProfit/Loss % always look back at CP"
              }
            ]
          }
        ]
      },
      {
        "partId": "d2-part-1",
        "title": "Part I — Hindi",
        "sections": [
          {
            "title": "1. संज्ञा",
            "blocks": [
              {
                "type": "text",
                "content": "Mental picture:"
              },
              {
                "type": "diagram",
                "content": "नाम\n ↓\nसंज्ञा"
              },
              {
                "type": "text",
                "content": "जिस शब्द से किसी:\nव्यक्ति\nस्थान\nवस्तु\nभाव\n\nका नाम पता चले = संज्ञा\n\nExamples:\nराम\nपटना\nकिताब\nखुशी"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "नाम = संज्ञा"
              }
            ]
          },
          {
            "title": "2. विशेषण",
            "blocks": [
              {
                "type": "text",
                "content": "Mental picture:"
              },
              {
                "type": "diagram",
                "content": "संज्ञा\n  +\nउसकी विशेषता\n  ↓\nविशेषण"
              },
              {
                "type": "text",
                "content": "Example:\nसुंदर फूल\n\nफूल = संज्ञा\n\nसुंदर = विशेषण\n\nAnother:\nलाल कार\n\nकार = संज्ञा\n\nलाल = विशेषण"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "कैसा? कितना? कौन-सा? → विशेषण\n\nExample:\nकैसा लड़का?\nअच्छा लड़का\n\nअच्छा = विशेषण."
              }
            ]
          },
          {
            "title": "3. कारक",
            "blocks": [
              {
                "type": "text",
                "content": "Don't memorize everything today.\n\nUnderstand the picture:\nराम ने\nमोहन को\nकलम से\nघर में\n\nWords such as:\nने\nको\nसे\nका/के/की\nमें/पर\n\nconnect a noun with other words.\n\nWe'll study the complete कारक table later.\n\nToday remember:"
              },
              {
                "type": "diagram",
                "content": "कर्ता → ने\nकर्म → को\nकरण → से\nसम्बन्ध → का/के/की\nअधिकरण → में/पर"
              },
              {
                "type": "callout",
                "icon": "📝",
                "title": "White-paper trick",
                "diagram": "ने → Who did?\nको → Whom?\nसे → With what?\nका/के/की → Whose?\nमें/पर → Where?"
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 2 TRE-style test",
      "subtitle": "Do it without looking above.",
      "questions": [
        {
          "id": "m-d2-q1",
          "question": "Q1. Which gate produces 1 only when both inputs are 1?",
          "options": [
            "OR",
            "XOR",
            "AND",
            "NOR",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "AND gate outputs 1 only when both/all inputs are 1 (1 AND 1 = 1). Anything else is 0. Correct: (C) AND."
        },
        {
          "id": "m-d2-q2",
          "question": "Q2. XOR produces 1 when:",
          "options": [
            "Inputs are same",
            "Inputs are different",
            "Both are 0",
            "Both are 1",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "XOR (Exclusive OR) outputs 1 when inputs are different (0,1 or 1,0). For same inputs (0,0 or 1,1) it outputs 0. Correct: (B) Inputs are different."
        },
        {
          "id": "m-d2-q3",
          "question": "Q3. Which gates are universal gates?",
          "options": [
            "AND and OR",
            "XOR and XNOR",
            "NAND and NOR",
            "AND and NAND",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "NAND and NOR can be combined to reproduce all other logic operations (AND, OR, NOT, etc.). Hence they are Universal Gates. Correct: (C) NAND and NOR."
        },
        {
          "id": "m-d2-q4",
          "question": "Q4. A gate has 3 inputs. Number of truth-table combinations:",
          "options": [
            "3",
            "6",
            "8",
            "9",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "For n inputs, total truth-table combinations = 2ⁿ. For n = 3: 2³ = 8 rows. Correct: (C) 8."
        },
        {
          "id": "m-d2-q5",
          "question": "Q5. A=1, B=0. A OR B = ?",
          "options": [
            "0",
            "1",
            "10",
            "Undefined",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "OR gate outputs 1 if any input is 1. 1 OR 0 = 1. Correct: (B) 1."
        },
        {
          "id": "m-d2-q6",
          "question": "Q6. A=1, B=1. A NAND B = ?",
          "options": [
            "0",
            "1",
            "2",
            "Undefined",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "1 AND 1 = 1. NAND is inverted AND: NOT(1) = 0. Therefore, 1 NAND 1 = 0. Correct: (A) 0."
        },
        {
          "id": "m-d2-q7",
          "question": "Q7. Which gate outputs 1 when both inputs are equal?",
          "options": [
            "XOR",
            "XNOR",
            "AND",
            "NOR",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "XNOR (Equivalence gate) produces 1 when inputs are the same (0,0 → 1, 1,1 → 1). Correct: (B) XNOR."
        },
        {
          "id": "m-d2-q8",
          "question": "Q8. A 4-input gate has how many possible input combinations?",
          "options": [
            "4",
            "8",
            "16",
            "32",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "For n = 4 inputs, total truth table rows = 2⁴ = 16 combinations. Correct: (C) 16."
        },
        {
          "id": "m-d2-q9",
          "question": "Q9. CP = ₹500 and SP = ₹650. Profit is:",
          "options": [
            "₹100",
            "₹150",
            "₹200",
            "₹250",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Profit = SP - CP = 650 - 500 = ₹150. Correct: (B) ₹150."
        },
        {
          "id": "m-d2-q10",
          "question": "Q10. CP = ₹800 and SP = ₹720. Loss percentage is:",
          "options": [
            "5%",
            "8%",
            "10%",
            "20%",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Loss = CP - SP = 800 - 720 = ₹80. Loss% = (80 / 800) × 100 = 10%. Correct: (C) 10%."
        },
        {
          "id": "m-d2-q11",
          "question": "Q11. An item costing ₹400 is sold at 25% profit. SP is:",
          "options": [
            "₹425",
            "₹450",
            "₹500",
            "₹525",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "SP = CP × (100 + profit%) / 100 = 400 × 125 / 100 = ₹500. Correct: (C) ₹500."
        },
        {
          "id": "m-d2-q12",
          "question": "Q12. An item is sold for ₹900 at 10% loss. Its CP is:",
          "options": [
            "₹990",
            "₹1000",
            "₹1100",
            "₹810",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "SP = CP × (100 - loss%) / 100 ⇒ 900 = CP × 90 / 100 ⇒ CP = (900 × 100) / 90 = ₹1000. Correct: (B) ₹1000."
        },
        {
          "id": "m-d2-q13",
          "question": "Q13. “सुंदर फूल” में विशेषण कौन-सा है?",
          "options": [
            "फूल",
            "सुंदर",
            "दोनों",
            "कोई नहीं",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "फूल संज्ञा है और उसकी विशेषता बताने वाला शब्द \"सुंदर\" विशेषण है। Correct: (B) सुंदर."
        },
        {
          "id": "m-d2-q14",
          "question": "Q14. “राम ने खाना खाया।” में ने किस कारक का चिह्न है?",
          "options": [
            "कर्म",
            "करण",
            "कर्ता",
            "अधिकरण",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "क्रिया को करने वाले (राम) के साथ 'ने' का प्रयोग हुआ है, अतः यह 'कर्ता कारक' का चिह्न है (कर्ता ने)। Correct: (C) कर्ता."
        },
        {
          "id": "m-d2-q15",
          "question": "Q15. इनमें से संज्ञा कौन-सी है?",
          "options": [
            "सुंदर",
            "धीरे",
            "पटना",
            "बहुत",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "\"पटना\" एक विशिष्ट स्थान का नाम (व्यक्तिवाचक संज्ञा) है। सुंदर विशेषण है और धीरे क्रियाविशेषण है। Correct: (C) पटना."
        }
      ]
    }
  },
  {
    "dayNumber": 3,
    "dayId": "day-3",
    "badge": "Day 03",
    "title": "TRE 4.0 — Day 3",
    "unit": "Part III (CS) • Part II (GS) • Part I (Hindi)",
    "targetTime": "15–18 mins read + test",
    "summary": "Today we study: Boolean Algebra + De Morgan + K-map basics (Part III CS), Ratio & Proportion (Part II GS), and Hindi Vocabulary (Part I Hindi).",
    "targets": [
      {
        "section": "Part III",
        "topic": "Boolean Algebra + De Morgan + K-map basics",
        "goal": "Expression simplification & K-map grouping"
      },
      {
        "section": "Part II",
        "topic": "Ratio & Proportion",
        "goal": "Direct/inverse proportion & difference methods"
      },
      {
        "section": "Part I",
        "topic": "Hindi Vocabulary",
        "goal": "पर्यायवाची, विलोम & अनेक शब्दों के लिए एक शब्द"
      }
    ],
    "introNote": "These are directly relevant to your previous papers. TRE 3.0 asked what De Morgan’s theorem is used for,     BPSC TRE3.0 question paper by c… while your Bihar STET paper begins with a K-map simplification question followed by PLA.     f4bc06d5-5757-40ca-b90b-f5ee42d…",
    "parts": [
      {
        "partId": "d3-part-3",
        "title": "Part III — Boolean Algebra",
        "sections": [
          {
            "title": "🧠 White-paper picture",
            "blocks": [
              {
                "type": "text",
                "content": "Think of Boolean Algebra as mathematics where there are only two people:\n0 = OFF\n1 = ON\n\nAnd only three basic actions:\nAND → .\nOR  → +\nNOT → '\n\nSo mentally draw:"
              },
              {
                "type": "diagram",
                "content": "        BOOLEAN WORLD\n\n          0      1\n          OFF    ON\n\n       AND   OR   NOT\n        .     +    '"
              }
            ]
          },
          {
            "title": "1. Most important Boolean rules",
            "blocks": [
              {
                "type": "text",
                "content": "Don't try to memorize a huge table. Divide them into little families."
              },
              {
                "type": "callout",
                "icon": "📌",
                "title": "Rule A — 0 and 1",
                "content": "A + 0 = A\nA . 1 = A\n\nMemory:\n0 does nothing to OR.\n1 does nothing to AND.\n\nExample:\n1 + 0 = 1\n0 . 1 = 0"
              },
              {
                "type": "callout",
                "icon": "📌",
                "title": "Rule B — Dominating values",
                "content": "A + 1 = 1\nA . 0 = 0\n\nMemory trick:\nOR sees 1 → 1 wins\n\nAND sees 0 → 0 wins\n\nWhite paper:\nOR  + 1  → 1\nAND . 0  → 0"
              },
              {
                "type": "callout",
                "icon": "📌",
                "title": "Rule C — Same input twice",
                "content": "A + A = A\nA . A = A\n\nMemory:\nSame + Same = Same"
              },
              {
                "type": "callout",
                "icon": "📌",
                "title": "Rule D — Opposite input",
                "content": "A + A' = 1\nA . A' = 0\n\nMental picture:\nA      A'\nON     OFF\n\nThey are opposites.\n\nMemory:\nOpposites OR → 1\n\nOpposites AND → 0\n\nThis is extremely useful in simplification."
              }
            ]
          },
          {
            "title": "2. Double NOT",
            "blocks": [
              {
                "type": "diagram",
                "content": "(A')' = A\n\nMental picture:\nA\n↓ NOT\nA'\n↓ NOT\nA"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory:",
                "content": "Two NOTs cancel."
              }
            ]
          },
          {
            "title": "3. Absorption Law",
            "blocks": [
              {
                "type": "text",
                "content": "Very useful for MCQs.\nA + AB = A\n\nand\nA(A+B) = A"
              },
              {
                "type": "callout",
                "icon": "🧠",
                "title": "White-paper picture:",
                "content": "A is already present\n      ↓\nExtra AB adds nothing\n\nSo:\nBig A eats small AB.\n\nThis is my recommended memory trick:\nA + AB\n↓\nA eats AB\n↓\nA"
              }
            ]
          },
          {
            "title": "4. De Morgan's Law — VERY IMPORTANT",
            "blocks": [
              {
                "type": "text",
                "content": "There are only two formulas.\n(A + B)' = A' . B'\n\nand\n(A . B)' = A' + B'\n\nThis looks difficult until you use one simple trick."
              },
              {
                "type": "callout",
                "icon": "🧠",
                "title": "White-paper memory trick",
                "diagram": "Imagine the NOT bar breaking the bracket:\n        NOT bar\n           ↓\n       (A + B)'\n           ↓\n     break bracket\n           ↓\n        A' . B'\n\nWhen the bar enters:\nEvery variable gets NOT\n\nAND\n\nthe sign changes\n\n+  ↔  ."
              },
              {
                "type": "text",
                "content": "That's the entire De Morgan law.\n\nOne-line memory\nBreak the bar → flip everything.\n\nOr mentally:\n+ changes to .\n. changes to +\n\nA changes to A'\nB changes to B'\n\nExample\nSimplify:\n(A + B)'\n\nStep 1: NOT A\nA → A'\n\nStep 2: NOT B\nB → B'\n\nStep 3: Change OR to AND\n+ → .\n\nAnswer:\nA'B'\n\nAnother:\n(AB)'\n\nBreak the bar:\nA → A'\nB → B'\n. → +\n\nTherefore:\nA' + B'"
              },
              {
                "type": "callout",
                "icon": "📝",
                "title": "TRE memory page",
                "diagram": "DE MORGAN\n\n(A+B)' = A'B'\n\n(AB)'  = A'+B'\n\nBAR ENTERS →\nvariables flip\noperator flips"
              },
              {
                "type": "text",
                "content": "TRE 3.0 specifically tested De Morgan as a technique for simplifying Boolean expressions.     BPSC TRE3.0 question paper by c…"
              }
            ]
          },
          {
            "title": "5. K-map — don't fear it",
            "blocks": [
              {
                "type": "text",
                "content": "K-map means:\nKarnaugh Map\n\nIts job is simply:\nMake a big Boolean expression SMALL."
              },
              {
                "type": "diagram",
                "content": "Mental picture:\nHuge expression\n      ↓\n   K-MAP\n      ↓\nSmall expression"
              },
              {
                "type": "text",
                "content": "That's all you need to understand first.\n\nYour STET paper directly asked K-map simplification in Question 1.     f4bc06d5-5757-40ca-b90b-f5ee42d…\n\nNumber of K-map boxes\nThis is easy.\n\nIf variables = n:\nCells = 2ⁿ\n\nTherefore:\n2 variables → 2² = 4 cells\n\n3 variables → 2³ = 8 cells\n\n4 variables → 2⁴ = 16 cells"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "White-paper memory",
                "diagram": "Variables\n    ↓\n  power\n    ↓\n   2ⁿ\n    ↓\nK-map cells"
              },
              {
                "type": "callout",
                "icon": "⚠️",
                "title": "K-map ordering — important trap",
                "content": "Normal binary order:\n00  01  10  11\n\nK-map does NOT use that order.\n\nIt normally uses Gray-code order:\n00 → 01 → 11 → 10\n\nWhy?\n\nOnly one bit changes between adjacent cells.\n\nWhite-paper trick:\n00\n ↓\n01\n ↓\n11\n ↓\n10\n\nCheck:\n00 → 01   one bit changes\n01 → 11   one bit changes\n11 → 10   one bit changes\n\nMemory:\nK-map neighbours change only ONE bit."
              }
            ]
          },
          {
            "title": "6. How do we group K-map cells?",
            "blocks": [
              {
                "type": "text",
                "content": "For SOP simplification, usually group 1s.\n\nAllowed group sizes:\n1\n2\n4\n8\n16\n...\n\nNotice:\nPowers of 2 only.\n\nNot allowed:\n3 ❌\n5 ❌\n6 ❌\n7 ❌"
              },
              {
                "type": "diagram",
                "content": "White-paper:\nK-MAP GROUPS\n\n1 → 2 → 4 → 8 → 16\n       powers of 2"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Important strategy",
                "content": "Make the BIGGEST group possible.\n\nPrefer:\ngroup of 8\n\nover two groups of 4, if possible.\n\nPrefer:\n4\n\nover two groups of 2.\n\nMemory:\nK-map loves BIG groups."
              }
            ]
          },
          {
            "title": "7. Diagonal cells?",
            "blocks": [
              {
                "type": "text",
                "content": "No."
              },
              {
                "type": "diagram",
                "content": "1   0\n0   1"
              },
              {
                "type": "text",
                "content": "Those two 1s are diagonal.\n\nYou cannot group them together."
              },
              {
                "type": "callout",
                "icon": "⚠️",
                "title": "Memory:",
                "content": "K-map walks straight, not diagonally."
              }
            ]
          },
          {
            "title": "8. Edges are neighbours!",
            "blocks": [
              {
                "type": "text",
                "content": "This is an exam trap.\n\nK-map behaves as if it is wrapped around:\nLEFT EDGE ←→ RIGHT EDGE\n\nTOP EDGE\n   ↕\nBOTTOM EDGE\n\nImagine wrapping the K-map like a paper cylinder."
              },
              {
                "type": "diagram",
                "content": "Mental picture\n┌─────────────┐\n│             │\n│   K-MAP     │\n│             │\n└─────────────┘\n\n← bend the paper →\n\nleft touches right\ntop touches bottom"
              }
            ]
          },
          {
            "title": "9. Don't Care — X",
            "blocks": [
              {
                "type": "text",
                "content": "TRE 3.0 specifically asked the purpose of a don't-care condition.\n\nThink:\nX = I don't care whether\n    you treat me as 0 or 1\n\nYou may use X as 1 if it helps make a bigger group.\n\nOr ignore it."
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory:",
                "content": "X is your helper, not your boss.\n\nExample:\n1  1  X  X\n\nYou can treat the X values as 1 and make a group of 4.\n\nIf they don't help, ignore them."
              },
              {
                "type": "callout",
                "icon": "⚡",
                "title": "K-map 30-second memory page",
                "diagram": "Draw this mentally:\n             K-MAP\n               ↓\n      Simplify Boolean Expression\n\nVariables → Cells\n\n2 → 4\n3 → 8\n4 → 16\n\nORDER:\n00 01 11 10\n\nGROUP:\n1,2,4,8,16\n\nBIGGEST GROUP FIRST\n\nNo diagonal ❌\nEdges touch ✅\nDon't Care X = use if helpful\n\nThat's enough for Day 3. We'll solve full 3-variable and 4-variable K-maps in a later practice session."
              }
            ]
          }
        ]
      },
      {
        "partId": "d3-part-2",
        "title": "Part II — Ratio & Proportion",
        "sections": [
          {
            "title": "🧠 Mental picture",
            "blocks": [
              {
                "type": "text",
                "content": "This deserves attention because TRE 3.0 asked a direct 2:5 ratio problem, and also asked inverse proportion.     BPSC TRE3.0 question paper by c…     BPSC TRE3.0 question paper by c…"
              },
              {
                "type": "diagram",
                "content": "Imagine two brothers receiving chocolates:\nA : B\n2 : 3\n\nA → 🍫🍫\n\nB → 🍫🍫🍫\n\nRatio means:\nComparison of two quantities."
              }
            ]
          },
          {
            "title": "1. Ratio method",
            "blocks": [
              {
                "type": "text",
                "content": "Suppose:\nBoys : Girls = 2 : 3\n\nTotal students = 50.\n\nMental white-paper:\n2 : 3\n↓   ↓\n\nTotal parts = 2+3 = 5\n\nOne part:\n50 ÷ 5 = 10\n\nTherefore:\nBoys  = 2×10 = 20\nGirls = 3×10 = 30"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "diagram": "Ratio → Add → Divide → Multiply\n\n2 : 3\n ↓\n2+3=5\n ↓\nTotal ÷ 5\n ↓\nmultiply"
              }
            ]
          },
          {
            "title": "2. Difference-based ratio",
            "blocks": [
              {
                "type": "text",
                "content": "This is especially important because TRE asked this style.\n\nSuppose:\nTwo numbers = 2 : 5\n\nDifference = 66"
              },
              {
                "type": "diagram",
                "content": "Mental picture:\n2 parts        5 parts\n■■             ■■■■■\n\nDifference = 3 parts\n\nSo:\n5 - 2 = 3 parts\n\n3 parts = 66\n\n1 part = 22\n\nNumbers:\n2×22 = 44\n5×22 = 110\n\nTherefore:\n44 and 110"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "White-paper trick",
                "content": "If the question gives difference:\nSubtract ratio numbers first.\n\n2 : 5\n  ↓\n5-2 = 3\n\nTRE 3.0 used exactly this structure.     BPSC TRE3.0 question paper by c…"
              }
            ]
          },
          {
            "title": "3. Direct proportion",
            "blocks": [
              {
                "type": "text",
                "content": "Imagine:\nMore items → More cost\n\nExample:\n2 pens = ₹20\n4 pens = ₹40\n\nBoth increase together.\n\nSo:\nDirect = Same direction ↑↑"
              },
              {
                "type": "diagram",
                "content": "White paper:\nx ↑\ny ↑\n\nDIRECT\n\nMathematically:\ny/x = constant"
              }
            ]
          },
          {
            "title": "4. Inverse proportion",
            "blocks": [
              {
                "type": "text",
                "content": "Imagine workers completing a job:\nWorkers ↑\nDays ↓\n\nMore workers means fewer days.\n\nSo:\nInverse = Opposite directions ↑↓"
              },
              {
                "type": "diagram",
                "content": "White paper:\nx ↑\ny ↓\n\nINVERSE\n\nImportant formula:\nx × y = constant\n\nTRE 3.0 directly asked this relation.     BPSC TRE3.0 question paper by c…"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "Inverse → Multiply stays same."
              }
            ]
          }
        ]
      },
      {
        "partId": "d3-part-1",
        "title": "Part I — Hindi Vocabulary",
        "sections": [
          {
            "title": "1. पर्यायवाची",
            "blocks": [
              {
                "type": "text",
                "content": "Today, keep this light.\n\nMeaning:\nSame meaning, different word"
              },
              {
                "type": "diagram",
                "content": "Mental picture:\nसूर्य\n ↙ ↓ ↘\nरवि भानु दिनकर"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory:",
                "content": "एक अर्थ — कई नाम = पर्यायवाची\n\nExamples:\nसूर्य → रवि\nचंद्रमा → शशि\nपृथ्वी → धरती\nजल → नीर\nअग्नि → अनल\nआकाश → नभ"
              }
            ]
          },
          {
            "title": "2. विलोम",
            "blocks": [
              {
                "type": "text",
                "content": "Meaning:\nOpposite meaning"
              },
              {
                "type": "diagram",
                "content": "दिन ↔ रात\nलाभ ↔ हानि\nसुख ↔ दुःख\nनया ↔ पुराना\nआदि ↔ अंत"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Mental trick:",
                "content": "विलोम = उल्टा"
              }
            ]
          },
          {
            "title": "3. एक शब्द",
            "blocks": [
              {
                "type": "text",
                "content": "Instead of writing a whole sentence, use one word."
              },
              {
                "type": "diagram",
                "content": "जो कभी न मरे\n      ↓\n    अमर\n\nजो सब जानता हो\n      ↓\n   सर्वज्ञ\n\nजिसका कोई शत्रु न हो\n      ↓\n   अजातशत्रु"
              },
              {
                "type": "callout",
                "icon": "📝",
                "title": "White-paper memory:",
                "diagram": "LONG SENTENCE\n      ↓\n   ONE WORD"
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 3 Test",
      "subtitle": "Answer without looking back.",
      "questions": [
        {
          "id": "m-d3-q1",
          "question": "Q1. According to De Morgan: (A+B)' = ?",
          "options": [
            "A'+B'",
            "A'B'",
            "AB",
            "A+B",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "De Morgan's first theorem: (A + B)' = A' · B' (Break the bar, flip operator + to ·, invert variables). Correct: (B) A'B'."
        },
        {
          "id": "m-d3-q2",
          "question": "Q2. (AB)' = ?",
          "options": [
            "A'B'",
            "A+B",
            "A'+B'",
            "AB",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "De Morgan's second theorem: (A · B)' = A' + B' (Break the bar, flip operator · to +, invert variables). Correct: (C) A'+B'."
        },
        {
          "id": "m-d3-q3",
          "question": "Q3. A + A' = ?",
          "options": [
            "A",
            "0",
            "1",
            "A'",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Complementarity Law (Opposites OR): Since one must be 1 and the other 0, 1 + 0 = 1. Therefore A + A' = 1. Correct: (C) 1."
        },
        {
          "id": "m-d3-q4",
          "question": "Q4. A.A' = ?",
          "options": [
            "0",
            "1",
            "A",
            "A'",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "Complementarity Law (Opposites AND): Since one must be 0, 1 · 0 = 0. Therefore A · A' = 0. Correct: (A) 0."
        },
        {
          "id": "m-d3-q5",
          "question": "Q5. Simplify: A + AB",
          "options": [
            "AB",
            "B",
            "A",
            "A+B",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Absorption Law: A + AB = A(1 + B) = A(1) = A ('A eats AB'). Correct: (C) A."
        },
        {
          "id": "m-d3-q6",
          "question": "Q6. A 4-variable K-map has:",
          "options": [
            "4 cells",
            "8 cells",
            "16 cells",
            "32 cells",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "For n variables, number of cells = 2ⁿ. For n = 4: 2⁴ = 16 cells. Correct: (C) 16 cells."
        },
        {
          "id": "m-d3-q7",
          "question": "Q7. Correct K-map ordering is:",
          "options": [
            "00, 01, 10, 11",
            "00, 10, 01, 11",
            "00, 01, 11, 10",
            "11, 10, 00, 01",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "K-map uses Gray code ordering so that adjacent cells differ by only one single bit: 00 → 01 → 11 → 10. Correct: (C) 00, 01, 11, 10."
        },
        {
          "id": "m-d3-q8",
          "question": "Q8. Which is NOT a valid K-map group size?",
          "options": [
            "2",
            "4",
            "6",
            "8",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "K-map cells can only be grouped in powers of 2 (1, 2, 4, 8, 16...). Group size 6 is illegal. Correct: (C) 6."
        },
        {
          "id": "m-d3-q9",
          "question": "Q9. In a K-map, don't-care X:",
          "options": [
            "Must always be 0",
            "Must always be 1",
            "May be used when it helps simplification",
            "Must form its own group",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Don't Care condition (X) is optional: you can treat it as 1 if it helps form a larger group, or ignore it as 0 if not needed. Correct: (C) May be used when it helps simplification."
        },
        {
          "id": "m-d3-q10",
          "question": "Q10. Two numbers are in ratio 3:5. Their sum is 64. Smaller number is:",
          "options": [
            "16",
            "24",
            "32",
            "40",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Total parts = 3 + 5 = 8. One part = 64 ÷ 8 = 8. Smaller number = 3 × 8 = 24. (Larger number = 5 × 8 = 40). Correct: (B) 24."
        },
        {
          "id": "m-d3-q11",
          "question": "Q11. Ages are in ratio 4:3. Their difference is 6 years. Elder age is:",
          "options": [
            "18",
            "20",
            "24",
            "30",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Difference in parts = 4 - 3 = 1 part = 6 years. Elder age = 4 parts = 4 × 6 = 24 years. Younger = 3 × 6 = 18. Correct: (C) 24."
        },
        {
          "id": "m-d3-q12",
          "question": "Q12. If x and y are inversely proportional:",
          "options": [
            "x+y = constant",
            "x-y = constant",
            "xy = constant",
            "x/y = constant",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "For inverse proportion, as x increases y decreases such that their product remains constant: x · y = k (constant). Correct: (C) xy = constant."
        },
        {
          "id": "m-d3-q13",
          "question": "Q13. “जल” का पर्यायवाची है:",
          "options": [
            "अग्नि",
            "नीर",
            "नभ",
            "पवन",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "जल के पर्यायवाची शब्द: पानी, नीर, तोय, वारि, सलिल आदि हैं। Correct: (B) नीर."
        },
        {
          "id": "m-d3-q14",
          "question": "Q14. “लाभ” का विलोम है:",
          "options": [
            "धन",
            "सुख",
            "हानि",
            "आय",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "लाभ का विलोम शब्द 'हानि' है। Correct: (C) हानि."
        },
        {
          "id": "m-d3-q15",
          "question": "Q15. “जो कभी न मरे” के लिए एक शब्द है:",
          "options": [
            "अजर",
            "अमर",
            "नश्वर",
            "जीवित",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "जो कभी न मरे उसे 'अमर' कहते हैं। (जो कभी वृद्ध न हो = अजर). Correct: (B) अमर."
        }
      ]
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MARATHON_DATA;
}
