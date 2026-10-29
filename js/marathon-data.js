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
  },
  {
    "dayNumber": 4,
    "dayId": "day-4",
    "badge": "Day 04",
    "title": "TRE 4.0 — Day 4",
    "unit": "Part III (CS) • Part II (GS) • Part I (Hindi)",
    "targetTime": "15–18 mins read + test",
    "summary": "Today we move one step deeper into Digital Electronics: Half/Full Adder, MUX/DEMUX & Flip-Flops (CS), Algebra: identities, exponents & quadratic roots (GS), and संधि vs समास basics (Hindi).",
    "targets": [
      {
        "section": "Part III – CS",
        "topic": "Half Adder + Full Adder + MUX/DEMUX + Flip-Flop",
        "goal": "Combinational & sequential circuit mastery"
      },
      {
        "section": "Part II – GS",
        "topic": "Algebra: identities, exponents, equation from roots",
        "goal": "Quick formula recall & quadratic roots"
      },
      {
        "section": "Part I – Hindi",
        "topic": "संधि vs समास basics",
        "goal": "Distinction & classification rules"
      }
    ],
    "introNote": "These are worth studying: TRE 3.0 directly asked Half-Adder outputs,     BPSC TRE3.0 question paper by c… the number of select lines in an 8-to-1 MUX,     BPSC TRE3.0 question paper by c… and a negative-level-triggered flip-flop question.     BPSC TRE3.0 question paper by c…",
    "parts": [
      {
        "partId": "d4-part-3",
        "title": "Part III — Digital Electronics",
        "sections": [
          {
            "title": "1. Half Adder",
            "blocks": [
              {
                "type": "text",
                "content": "🧠 White-paper picture\nImagine you want to add two binary digits:"
              },
              {
                "type": "diagram",
                "content": "     A\n     B\n   ----\n   Sum\n+ Carry\n\nA Half Adder takes:\n2 INPUTS\n   ↓\nA     B\n \\   /\n HALF ADDER\n    ↓ ↓\n   S   C\n Sum Carry"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "Half Adder = 2 inputs → 2 outputs\n\nOutputs = SUM + CARRY\n\nTRE 3.0 directly asked this.     BPSC TRE3.0 question paper by c…"
              },
              {
                "type": "text",
                "content": "Half Adder truth table\nThink like normal addition:\n0 + 0 = 0\n0 + 1 = 1\n1 + 0 = 1\n1 + 1 = 10\n\nNow split 10:\n10\n↑↑\nCS\n\nSo:"
              },
              {
                "type": "diagram",
                "content": "A\tB\tSum\tCarry\n0\t0\t0\t0\n0\t1\t1\t0\n1\t0\t1\t0\n1\t1\t0\t1"
              },
              {
                "type": "text",
                "content": "Look carefully.\n\nSUM column:\n0\n1\n1\n0\n\nThat's XOR.\n\nCarry:\n0\n0\n0\n1\n\nThat's AND.\n\nTherefore:\nSUM   = A XOR B\nCARRY = A AND B"
              },
              {
                "type": "callout",
                "icon": "⚡",
                "title": "Best white-paper trick",
                "diagram": "HALF ADDER\n\nSUM   → XOR → DIFFERENT\nCARRY → AND → BOTH 1\n\nYou do not need to blindly memorize the truth table."
              }
            ]
          },
          {
            "title": "2. Full Adder",
            "blocks": [
              {
                "type": "text",
                "content": "Why do we need a Full Adder?\n\nHalf Adder can add only:\nA + B\n\nBut when adding larger binary numbers, a previous column can send us a carry.\n\nSo we need:\nA\nB\nCin   ← previous carry"
              },
              {
                "type": "callout",
                "icon": "🧠",
                "title": "Mental picture",
                "diagram": "HALF ADDER\nA + B\n  ↓\nNo previous carry\n\nFULL ADDER\nA + B + Cin\n      ↑\nprevious carry allowed"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory sentence",
                "content": "Half = 2 inputs\n\nFull = 3 inputs"
              },
              {
                "type": "text",
                "content": "Full Adder inputs:\nA\nB\nCin\n\nOutputs:\nSUM\nCout"
              },
              {
                "type": "callout",
                "icon": "📝",
                "title": "Very useful exam distinction",
                "diagram": "Half Adder\n2 inputs\nA, B\n↓\nSum + Carry\n\nversus\nFull Adder\n3 inputs\nA, B, Cin\n↓\nSum + Carry-out"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "White-paper memory",
                "content": "FULL means Carry-In is included."
              }
            ]
          },
          {
            "title": "3. MUX — Multiplexer",
            "blocks": [
              {
                "type": "text",
                "content": "MUX sounds difficult, but the concept is simple.\n\nImagine four roads reaching one gate."
              },
              {
                "type": "diagram",
                "content": "I0 ─────┐\nI1 ─────┤\nI2 ─────┤──► MUX ───► ONE OUTPUT\nI3 ─────┘\n             ↑\n          SELECT"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "diagram": "MUX = MANY → ONE\n\nMany inputs\n     ↓\n   MUX\n     ↓\nOne output\n\nThink of a TV remote:\n\nMany channels exist.\n\nYou select one."
              },
              {
                "type": "text",
                "content": "Select lines\nThis is very important.\n\nFormula:\nInputs = 2ⁿ\n\nn = number of select lines\n\nSo:\n2-to-1 MUX\n2 = 2¹\n→ 1 select line\n\n4-to-1 MUX\n4 = 2²\n→ 2 select lines\n\n8-to-1 MUX\n8 = 2³\n→ 3 select lines\n\n16-to-1 MUX\n16 = 2⁴\n→ 4 select lines"
              },
              {
                "type": "callout",
                "icon": "⚡",
                "title": "White-paper trick",
                "diagram": "MUX INPUTS\n\n2  → 1 select\n4  → 2\n8  → 3\n16 → 4\n32 → 5\n\nTRE 3.0 directly asked how many select lines an 8-to-1 MUX requires.     BPSC TRE3.0 question paper by c…\n\nAnswer:\n3"
              }
            ]
          },
          {
            "title": "4. DEMUX",
            "blocks": [
              {
                "type": "text",
                "content": "DEMUX is simply the opposite direction.\n\nMUX:\nMANY\n ↓\n ONE\n\nDEMUX:\n ONE\n ↓\nMANY\n\nPicture:"
              },
              {
                "type": "diagram",
                "content": "                  ┌── O0\nONE INPUT ─► DEMUX├── O1\n                  ├── O2\n                  └── O3\n                      ↑\n                   SELECT"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "MUX = Many → One\n\nDEMUX = One → Many\n\nImagine:\nMUX   = Collector\nDEMUX = Distributor\n\nThis is an excellent quick-memory pair."
              }
            ]
          },
          {
            "title": "5. Flip-Flop",
            "blocks": [
              {
                "type": "text",
                "content": "Now imagine a tiny memory box."
              },
              {
                "type": "diagram",
                "content": "       ┌───────────┐\nInput →│ FLIP-FLOP │→ Output\n       │ remembers │\n       └───────────┘"
              },
              {
                "type": "text",
                "content": "A flip-flop can store:\n1 bit\n\nThat means:\n0\nOR\n1"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "Flip-Flop = 1-bit memory"
              },
              {
                "type": "text",
                "content": "Why is clock important?\nImagine a school bell.\n\nStudents change periods when the bell tells them.\n\nSimilarly:\nInput changes\n    ↓\nClock says GO\n    ↓\nFlip-Flop changes state"
              },
              {
                "type": "diagram",
                "content": "White-paper:\nDATA\n ↓\n[FLIP-FLOP]\n     ↑\n   CLOCK"
              }
            ]
          },
          {
            "title": "6. SR Flip-Flop",
            "blocks": [
              {
                "type": "text",
                "content": "SR:\nS = SET\nR = RESET\n\nMental picture:\nSET   → store 1\nRESET → store 0"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "S = Set = 1\n\nR = Reset = 0"
              },
              {
                "type": "text",
                "content": "Basic SR behaviour:"
              },
              {
                "type": "diagram",
                "content": "S\tR\tMeaning\n0\t0\tNo change\n0\t1\tReset\n1\t0\tSet\n1\t1\tInvalid/forbidden in basic SR"
              },
              {
                "type": "callout",
                "icon": "📝",
                "title": "White-paper:",
                "content": "S R\n0 0 → MEMORY\n0 1 → RESET\n1 0 → SET\n1 1 → PROBLEM\n\nVery easy."
              }
            ]
          },
          {
            "title": "7. JK Flip-Flop",
            "blocks": [
              {
                "type": "text",
                "content": "JK improves the problematic 11 condition of SR.\n\nThink:\nSR:\n11 → Problem ❌\n\nJK:\n11 → Toggle ✅\n\nToggle means:\n0 → 1\n1 → 0"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "JK fixes SR's 11 problem.\n\nBasic JK:\n00 → No change\n01 → Reset\n10 → Set\n11 → Toggle"
              }
            ]
          },
          {
            "title": "8. D Flip-Flop",
            "blocks": [
              {
                "type": "text",
                "content": "D is probably the easiest.\nD = DATA\n\nWhatever D contains gets stored.\nD=0 → Q=0\nD=1 → Q=1"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "D = Data goes Directly"
              },
              {
                "type": "diagram",
                "content": "White-paper:\nD ─────► Q\n\nat the active clock event."
              }
            ]
          },
          {
            "title": "9. T Flip-Flop",
            "blocks": [
              {
                "type": "text",
                "content": "T:\nT = Toggle\n\nT=0 → No change\nT=1 → Toggle"
              },
              {
                "type": "diagram",
                "content": "White-paper:\nT = 0\n→ STAY\n\nT = 1\n→ FLIP"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Best memory",
                "content": "T = 1 → Turn it around"
              },
              {
                "type": "callout",
                "icon": "⚡",
                "title": "One-page Flip-Flop memory",
                "diagram": "Mentally draw this:\n          FLIP-FLOPS\n              ↓\n          store 1 bit\n\nSR → Set / Reset\nJK → SR fixed; 11 = Toggle\nD  → Data directly\nT  → Toggle\n\nAnd:\nD = DATA\nT = TOGGLE\n\nThese two should become instant."
              }
            ]
          }
        ]
      },
      {
        "partId": "d4-part-2",
        "title": "Part II — Algebra",
        "sections": [
          {
            "title": "1. Three identities you must know",
            "blocks": [
              {
                "type": "text",
                "content": "TRE has used elementary algebra, including constructing a quadratic equation from given roots. TRE 2.0 asked for the equation whose roots were -1 and 4.     BPSC TRE3.0 question paper by c…\n\nDon't memorize ten at once.\n\nStart with:\n(a+b)² = a² + 2ab + b²\n\n(a-b)² = a² - 2ab + b²\n\n(a+b)(a-b) = a²-b²"
              },
              {
                "type": "callout",
                "icon": "🧠",
                "title": "White-paper trick",
                "content": "For:\n(a+b)²\n\nthink:\nFIRST²\n  +\n2 × FIRST × SECOND\n  +\nSECOND²\n\nSo:\n(a+b)²\n\n= a²\n+ 2ab\n+ b²\n\nMemory sentence:\nSquare → First², double-middle, Last²."
              }
            ]
          },
          {
            "title": "2. Exponents",
            "blocks": [
              {
                "type": "text",
                "content": "Basic rule:\naᵐ × aⁿ = aᵐ⁺ⁿ\n\nMemory:\nSame base + multiplication → ADD powers\n\nExample:\n2³ × 2⁴\n= 2⁷\n\nDivision:\naᵐ ÷ aⁿ = aᵐ⁻ⁿ\n\nMemory:\nSame base + division → SUBTRACT powers\n\nAnd:\n(aᵐ)ⁿ = aᵐⁿ\n\nMemory:\nPower on power → multiply powers"
              }
            ]
          },
          {
            "title": "3. Equation from roots",
            "blocks": [
              {
                "type": "text",
                "content": "This is particularly useful for TRE.\n\nSuppose roots are:\nα and β\n\nFormula:\nx² - (α+β)x + αβ = 0\n\nThis looks complicated, so use the white-paper trick:"
              },
              {
                "type": "diagram",
                "content": "ROOTS\n ↓\nSUM\n ↓\nput MINUS before x\n\nPRODUCT\n ↓\nput at END\n\nSo:\nx² − SUM·x + PRODUCT = 0"
              },
              {
                "type": "text",
                "content": "Example: roots -1 and 4\nSum:\n-1 + 4 = 3\n\nProduct:\n-1 × 4 = -4\n\nNow:\nx² - SUM·x + PRODUCT = 0\n\nTherefore:\nx² - 3x - 4 = 0\n\nYou can also mentally factor it:\n(x+1)(x-4)=0\n\nwhich gives:\nx=-1\nx=4"
              },
              {
                "type": "callout",
                "icon": "⚡",
                "title": "White-paper memory",
                "diagram": "ROOTS\n ↓\nSUM      PRODUCT\n ↓          ↓\n -x         end\n\nx² - SUMx + PRODUCT = 0"
              }
            ]
          }
        ]
      },
      {
        "partId": "d4-part-1",
        "title": "Part I — Hindi: संधि vs समास",
        "sections": [
          {
            "title": "🧠 White-paper picture",
            "blocks": [
              {
                "type": "text",
                "content": "Today first understand the difference. Don't memorize every subtype yet."
              },
              {
                "type": "diagram",
                "content": "संधि\nवर्ण + वर्ण\n   ↓\nध्वनि/अक्षर में परिवर्तन\n\nThink:\nLetters meet and change.\n\nExample:\nविद्या + आलय\n     ↓\nविद्यालय"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "संधि = अक्षरों की शादी\n\nWhen letters meet, their form/sound may change."
              },
              {
                "type": "diagram",
                "content": "समास\nशब्द + शब्द\n     ↓\n छोटा रूप\n\nExample:\nराजा का पुत्र\n      ↓\n   राजपुत्र"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "समास = शब्दों की Short Form\n\nSo:\nसंधि → LETTERS change\nसमास → WORDS shorten\n\nThis is your most important distinction today."
              }
            ]
          },
          {
            "title": "Main Sandhi & Samas categories",
            "blocks": [
              {
                "type": "text",
                "content": "Main Sandhi categories\nFor now remember only:\nसंधि\n ├─ स्वर\n ├─ व्यंजन\n └─ विसर्ग\n\nMemory:\nस्वर – व्यंजन – विसर्ग\n\nDon't go deep today; we'll practice identification later."
              },
              {
                "type": "text",
                "content": "Main Samas categories\nYou will eventually need:\nअव्ययीभाव\nतत्पुरुष\nकर्मधारय\nद्वंद्व\nद्विगु\nबहुव्रीहि\n\nBut today remember only three easy patterns."
              },
              {
                "type": "callout",
                "icon": "📌",
                "title": "द्वंद्व",
                "content": "Both words are equally important.\nमाता-पिता\n=\nमाता और पिता\n\nMemory:\nद्वंद्व = AND"
              },
              {
                "type": "callout",
                "icon": "📌",
                "title": "तत्पुरुष",
                "content": "Hidden कारक relation.\nराजपुत्र\n=\nराजा का पुत्र\n\nMemory:\nतत्पुरुष = का/के/की/को/से hidden"
              },
              {
                "type": "callout",
                "icon": "📌",
                "title": "कर्मधारय",
                "content": "One word describes another.\nनीलकमल\n=\nनीला कमल\n\nMemory:\nकर्मधारय = विशेषण + संज्ञा"
              },
              {
                "type": "callout",
                "icon": "⚡",
                "title": "Day 4 white-paper revision page",
                "diagram": "Before stopping today, mentally reproduce:\nHALF ADDER\n2 inputs\nSum = XOR\nCarry = AND\n\nFULL ADDER\nA + B + Carry-In\n\nMUX\nMany → One\n2ⁿ inputs → n select lines\n\nDEMUX\nOne → Many\n\nFLIP-FLOP\n1-bit memory\n\nSR → Set/Reset\nJK → 11 Toggle\nD  → Data\nT  → Toggle\n\nThen:\nALGEBRA\n\n(a+b)² = a²+2ab+b²\n\nSame base:\n× → ADD powers\n÷ → SUBTRACT powers\n\nRoots:\nx² - SUMx + PRODUCT = 0\n\nAnd Hindi:\nसंधि = letters join/change\nसमास = words become short"
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 4 Test",
      "subtitle": "No looking above.",
      "questions": [
        {
          "id": "m-d4-q1",
          "question": "Q1. Outputs of a Half Adder are:",
          "options": [
            "Difference and Borrow",
            "Sum and Carry",
            "Sum and Difference",
            "Carry and Borrow",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "A Half Adder takes 2 single-bit inputs (A, B) and generates 2 outputs: SUM and CARRY. Correct: (B) Sum and Carry."
        },
        {
          "id": "m-d4-q2",
          "question": "Q2. In a Half Adder, SUM is produced by:",
          "options": [
            "AND",
            "OR",
            "XOR",
            "XNOR",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "SUM = A ⊕ B (A XOR B), giving 1 only when inputs are different (0+1=1, 1+0=1). Correct: (C) XOR."
        },
        {
          "id": "m-d4-q3",
          "question": "Q3. Half-Adder Carry is:",
          "options": [
            "A+B",
            "A XOR B",
            "A.B",
            "A'B",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "CARRY = A · B (A AND B), giving 1 only when both inputs are 1 (1+1=10, carry 1). Correct: (C) A.B."
        },
        {
          "id": "m-d4-q4",
          "question": "Q4. A Full Adder has how many basic input bits?",
          "options": [
            "1",
            "2",
            "3",
            "4",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "A Full Adder accepts 3 inputs: A, B, and Cin (Carry-in from the previous column). Correct: (C) 3."
        },
        {
          "id": "m-d4-q5",
          "question": "Q5. A 16-to-1 MUX requires:",
          "options": [
            "2 select lines",
            "3 select lines",
            "4 select lines",
            "16 select lines",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Formula: Inputs = 2ⁿ where n is select lines. 16 = 2⁴ ⇒ 4 select lines required. Correct: (C) 4 select lines."
        },
        {
          "id": "m-d4-q6",
          "question": "Q6. A Multiplexer performs:",
          "options": [
            "One input → many outputs",
            "Many inputs → one output",
            "Many inputs → many outputs",
            "One input → one output only",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "MUX (Data Selector / Collector) selects one output line from many input data lines (Many → One). Correct: (B) Many inputs → one output."
        },
        {
          "id": "m-d4-q7",
          "question": "Q7. A flip-flop normally stores:",
          "options": [
            "1 byte",
            "1 bit",
            "4 bits",
            "8 bits",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "A flip-flop is a basic bistable multivibrator that stores exactly 1 bit of binary information (0 or 1). Correct: (B) 1 bit."
        },
        {
          "id": "m-d4-q8",
          "question": "Q8. In JK flip-flop, J=1, K=1 generally means:",
          "options": [
            "Reset",
            "Set",
            "Toggle",
            "No change",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "In a JK flip-flop, the 11 input condition produces a Toggle state (Q toggles from 0→1 or 1→0), resolving the forbidden state of SR. Correct: (C) Toggle."
        },
        {
          "id": "m-d4-q9",
          "question": "Q9. In a T flip-flop, T=0 means:",
          "options": [
            "Toggle",
            "Reset always",
            "Set always",
            "No change",
            "None"
          ],
          "correctAnswer": 3,
          "explanation": "In a T (Toggle) flip-flop, T=0 maintains the previous state (No change/Stay), while T=1 causes a toggle/flip. Correct: (D) No change."
        },
        {
          "id": "m-d4-q10",
          "question": "Q10. (a+b)² equals:",
          "options": [
            "a²+b²",
            "a²+2ab+b²",
            "a²-2ab+b²",
            "a²-b²",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "(a+b)² = a² + 2ab + b² (First² + 2×First×Second + Second²). Correct: (B) a²+2ab+b²."
        },
        {
          "id": "m-d4-q11",
          "question": "Q11. 2³ × 2⁵ =",
          "options": [
            "2⁸",
            "4⁸",
            "2¹⁵",
            "2²",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "Exponent product rule: aᵐ × aⁿ = aᵐ⁺ⁿ. For base 2: 2³ × 2⁵ = 2³⁺⁵ = 2⁸. Correct: (A) 2⁸."
        },
        {
          "id": "m-d4-q12",
          "question": "Q12. If roots are 2 and 5, the quadratic equation is:",
          "options": [
            "x²+7x+10=0",
            "x²-7x+10=0",
            "x²-3x+10=0",
            "x²+3x-10=0",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Quadratic equation from roots: x² - (Sum of roots)x + (Product of roots) = 0. Sum = 2+5 = 7, Product = 2×5 = 10 ⇒ x² - 7x + 10 = 0. Correct: (B) x²-7x+10=0."
        },
        {
          "id": "m-d4-q13",
          "question": "Q13. “माता-पिता” किस समास का उदाहरण है?",
          "options": [
            "तत्पुरुष",
            "द्वंद्व",
            "कर्मधारय",
            "बहुव्रीहि",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "माता-पिता = माता और पिता। दोनों पद प्रधान होने के कारण यह 'द्वंद्व समास' है। Correct: (B) द्वंद्व."
        },
        {
          "id": "m-d4-q14",
          "question": "Q14. “राजपुत्र” का विग्रह है:",
          "options": [
            "राजा और पुत्र",
            "राजा जैसा पुत्र",
            "राजा का पुत्र",
            "राजा में पुत्र",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "राजपुत्र का सही समास-विग्रह 'राजा का पुत्र' (सम्बन्ध तत्पुरुष समास) है। Correct: (C) राजा का पुत्र."
        },
        {
          "id": "m-d4-q15",
          "question": "Q15. संधि में मुख्यतः क्या जुड़ते/बदलते हैं?",
          "options": [
            "वाक्य",
            "अनुच्छेद",
            "वर्ण/ध्वनियाँ",
            "केवल संज्ञाएँ",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "दो समीपवर्ती वर्णों (ध्वनियों) के मेल से जो विकार (परिवर्तन) होता है, उसे 'संधि' कहते हैं। Correct: (C) वर्ण/ध्वनियाँ."
        }
      ]
    }
  },
  {
    "dayNumber": 5,
    "dayId": "day-5",
    "badge": "Day 05",
    "title": "TRE 4.0 — Day 5",
    "unit": "Part III (CS) • Part II (GS) • Part I (English)",
    "targetTime": "15–18 mins read + test",
    "summary": "Today we finish an important Digital Electronics block: ROM/PROM/EPROM + PLA + BCD + Gray Code + Error Detection (CS), Geometry & Mensuration basics (GS), and Comprehension + Article traps (English).",
    "targets": [
      {
        "section": "Part III – Computer Science",
        "topic": "ROM/PROM/EPROM + PLA + BCD + Gray Code + Hamming/CRC/Checksum",
        "goal": "Memory, codes & error-detection mastery"
      },
      {
        "section": "Part II – GS",
        "topic": "Geometry & Mensuration basics",
        "goal": "Angles, circles & cylinder formulas"
      },
      {
        "section": "Part I – English",
        "topic": "Comprehension + Article traps",
        "goal": "Passage strategy & article rules"
      }
    ],
    "introNote": "Your TRE 3.0 paper directly asked about ROM types, PLA, Booth algorithm and error-detection codes in consecutive questions.     BPSC TRE3.0 question paper by c… It also asked the maximum value of a single BCD digit. So this is a strong exam area.",
    "parts": [
      {
        "partId": "d5-part-3",
        "title": "Part III — ROM Family & Digital Codes",
        "sections": [
          {
            "title": "ROM Family",
            "blocks": [
              {
                "type": "text",
                "content": "🧠 White-paper picture\nImagine a cupboard where data remains even when electricity goes away:"
              },
              {
                "type": "diagram",
                "content": "POWER OFF\n   ↓\n[ ROM ]\n   ↓\nDATA STILL THERE"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Exam preparation:",
                "content": "ROM = Non-volatile memory\n\nNow draw the family:"
              },
              {
                "type": "diagram",
                "content": "             ROM\n              │\n     ┌────────┼─────────┐\n     ↓        ↓         ↓\n   MROM      PROM      EPROM"
              },
              {
                "type": "text",
                "content": "TRE 3.0 explicitly presented PROM, EPROM and MROM as ROM types.     BPSC TRE3.0 question paper by c…"
              },
              {
                "type": "callout",
                "icon": "📌",
                "title": "1. MROM",
                "content": "MROM = Mask ROM\n\nThink:\nFACTORY\n   ↓\nMROM\n\nData is programmed during manufacturing.\n\nMemory trick:\nM = Manufacturer"
              },
              {
                "type": "callout",
                "icon": "📌",
                "title": "2. PROM",
                "content": "PROM = Programmable Read Only Memory\n\nYou can program it once.\nBlank PROM\n    ↓\nProgram once\n    ↓\nFinished\n\nMemory trick:\nP = Program Once"
              },
              {
                "type": "callout",
                "icon": "📌",
                "title": "3. EPROM",
                "content": "EPROM = Erasable Programmable ROM\n\nCan be erased and reprogrammed.\n\nTraditional EPROM uses ultraviolet light for erasure.\nEPROM\n ↓\nUV Light\n ↓\nErase\n ↓\nProgram again\n\nMemory trick:\nE = Erase"
              },
              {
                "type": "callout",
                "icon": "📌",
                "title": "4. EEPROM",
                "content": "Useful extension for the exam:\n\nEEPROM = Electrically Erasable Programmable ROM\nEPROM  → UV erase\nEEPROM → Electrical erase"
              },
              {
                "type": "callout",
                "icon": "⚡",
                "title": "Best white-paper memory",
                "diagram": "MROM   → Manufacturer\nPROM   → Program once\nEPROM  → Erase with UV\nEEPROM → Erase Electrically\n\nThat one picture is enough for most MCQs."
              }
            ]
          },
          {
            "title": "PLA — Programmable Logic Array",
            "blocks": [
              {
                "type": "text",
                "content": "TRE 3.0 asked the expansion of PLA, and your STET paper asked which components PLA uses.\nPLA = Programmable Logic Array\n\nThe STET paper identifies AND gates and OR gates as its combinational-logic building blocks.     f4bc06d5-5757-40ca-b90b-f5ee42d…"
              },
              {
                "type": "callout",
                "icon": "🧠",
                "title": "Mental picture",
                "diagram": "INPUTS\n  ↓\nAND section\n  ↓\nOR section\n  ↓\nOUTPUT\n\nThink:\nPLA = AND first, OR later"
              },
              {
                "type": "diagram",
                "content": "A,B,C\n  ↓\n[ AND ]\n  ↓\n[ OR ]\n  ↓\nOutput"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "For TRE level, first remember:",
                "content": "PLA → Programmable Logic Array → AND + OR logic"
              }
            ]
          },
          {
            "title": "BCD — Binary Coded Decimal",
            "blocks": [
              {
                "type": "text",
                "content": "This causes confusion because BCD is not normal binary conversion.\n\nBCD means:\nTake each decimal digit separately and convert it into 4-bit binary.\n\nExample: decimal 25\nDon't convert 25 directly to binary.\n\nInstead:"
              },
              {
                "type": "diagram",
                "content": "2       5\n↓       ↓\n0010    0101"
              },
              {
                "type": "text",
                "content": "Therefore:\n25 in BCD = 0010 0101"
              },
              {
                "type": "callout",
                "icon": "🧠",
                "title": "White-paper trick",
                "diagram": "DECIMAL NUMBER\n      ↓\nbreak into DIGITS\n      ↓\neach digit = 4 bits"
              },
              {
                "type": "callout",
                "icon": "⚠️",
                "title": "Valid BCD values",
                "content": "A decimal digit can only be:\n0 1 2 3 4 5 6 7 8 9\n\nSo BCD uses:\n0000 = 0\n0001 = 1\n...\n1001 = 9\n\nBut:\n1010 → invalid BCD digit\n1011 → invalid\n...\n1111 → invalid\n\nMemory trick:\nBCD stops at 9.\n\nTRE 3.0 asked the maximum value representable in one BCD digit. The mathematically correct maximum decimal digit is 9, which was not among A/B/C in that paper, so the appropriate offered choice was “None of the above.”"
              },
              {
                "type": "callout",
                "icon": "📝",
                "title": "Binary vs BCD — very important",
                "diagram": "Take decimal 12.\n\nNormal binary:\n12₁₀ = 1100₂\n\nBCD:\n1      2\n↓      ↓\n0001   0010\n\nTherefore:\nBinary = 1100\n\nBCD    = 0001 0010\n\nMemory sentence:\nBinary converts the whole number.\nBCD converts each decimal digit separately."
              }
            ]
          },
          {
            "title": "Gray Code",
            "blocks": [
              {
                "type": "text",
                "content": "Gray Code has one beautiful rule:\nAdjacent Gray-code values differ by only ONE bit."
              },
              {
                "type": "diagram",
                "content": "Mental picture:\n00\n↓ one bit changes\n01\n↓ one bit changes\n11\n↓ one bit changes\n10\n\nLooks familiar?\n\nYes — that's why we used:\n00 01 11 10\n\nin K-map."
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "GRAY = One-bit change\n\nYour STET paper asked how Gray Code is converted to binary and identified the XOR operation.     f4bc06d5-5757-40ca-b90b-f5ee42d…"
              },
              {
                "type": "text",
                "content": "Binary → Gray\nUse this easy method.\n\nSuppose binary:\n1 0 1 1\n\nRule:\n1. First Gray bit = first binary bit.\n2. Then XOR neighbouring binary bits."
              },
              {
                "type": "diagram",
                "content": "Binary:   1   0   1   1\n           \\ / \\ / \\ /\nGray:     1   1   1   0"
              },
              {
                "type": "text",
                "content": "Why?\nFirst = 1\n\n1 XOR 0 = 1\n0 XOR 1 = 1\n1 XOR 1 = 0\n\nTherefore:\n1011 binary → 1110 Gray"
              },
              {
                "type": "callout",
                "icon": "⚡",
                "title": "White-paper memory",
                "content": "FIRST → copy\n\nthen:\nneighbour XOR neighbour"
              },
              {
                "type": "text",
                "content": "Gray → Binary\nAgain first bit stays same.\n\nThen use previous binary result XOR current Gray bit.\n\nExample Gray:\n1110\n\nFirst Binary = 1\n\n1 XOR 1 = 0\n0 XOR 1 = 1\n1 XOR 0 = 1\n\nAnswer:\n1011 binary\n\nDon't over-practice this today. Just understand the direction."
              }
            ]
          },
          {
            "title": "Error Detection",
            "blocks": [
              {
                "type": "text",
                "content": "Imagine sending:\n101101\n\nthrough a network.\n\nNoise accidentally changes it:\n101001\n\nWe need some mechanism to detect that something went wrong."
              },
              {
                "type": "diagram",
                "content": "Mental picture:\nDATA\n ↓\nAdd checking information\n ↓\nTRANSMIT\n ↓\nReceiver checks\n ↓\nERROR?"
              },
              {
                "type": "text",
                "content": "TRE 3.0 explicitly listed Hamming Code, CRC and Checksum in an error-detection question.     BPSC TRE3.0 question paper by c…"
              },
              {
                "type": "callout",
                "icon": "📌",
                "title": "1. Parity Bit",
                "content": "Simplest idea.\n\nCount number of 1s.\n\nFor even parity:\nTotal number of 1s should be EVEN.\n\nExample:\nData = 1011\n\nNumber of 1s = 3\n\nNeed one more 1:\n1011 + parity 1\n\nTotal 1s = 4.\n\nMemory trick:\nParity = Count the 1s"
              },
              {
                "type": "callout",
                "icon": "📌",
                "title": "2. Hamming Code",
                "content": "For your current level, remember:\nHamming Code uses parity bits positioned so errors can be detected and, in common forms, a single-bit error can be corrected.\n\nWhite-paper:\nDATA\n +\nEXTRA PARITY BITS\n       ↓\nHAMMING CODE\n       ↓\nFind error position\n\nLater we'll practice the formula:\n2ʳ ≥ m + r + 1\n\nwhere:\nm = data bits\nr = parity bits\n\nDon't memorize the derivation today."
              },
              {
                "type": "callout",
                "icon": "📌",
                "title": "3. CRC",
                "content": "CRC = Cyclic Redundancy Check\n\nThink:\nDATA\n ↓\nbinary division\n ↓\nREMAINDER\n ↓\nattach remainder\n\nAt the receiver:\nDivide again\n ↓\nremainder check\n\nMemory trick:\nCRC = Division + Remainder"
              },
              {
                "type": "callout",
                "icon": "📌",
                "title": "4. Checksum",
                "content": "Think of data divided into blocks.\nBlock 1\nBlock 2\nBlock 3\n   ↓\n  ADD\n   ↓\nChecksum\n\nReceiver performs a corresponding check.\n\nMemory trick:\nChecksum = ADD blocks"
              },
              {
                "type": "callout",
                "icon": "📝",
                "title": "Easy comparison",
                "diagram": "Parity   → Count 1s\nChecksum → Add blocks\nCRC      → Divide / remainder\nHamming  → Parity bits + locate/correct error\n\nThis is a very useful white-paper table."
              },
              {
                "type": "callout",
                "icon": "⚡",
                "title": "30-second Day 5 CS sheet",
                "diagram": "Mentally draw:\nROM FAMILY\n\nMROM   → Manufacturer\nPROM   → Program once\nEPROM  → UV erase\nEEPROM → Electrical erase\n\n\nPLA\nAND → OR\n\n\nBCD\neach decimal DIGIT → 4 bits\nmaximum digit = 9\n\n\nGRAY\nadjacent values differ by 1 bit\nconversion uses XOR\n\n\nERROR\n\nParity   → count\nChecksum → add\nCRC      → divide\nHamming  → locate/correct"
              }
            ]
          }
        ]
      },
      {
        "partId": "d5-part-2",
        "title": "Part II — Geometry",
        "sections": [
          {
            "title": "Geometry & Mensuration basics",
            "blocks": [
              {
                "type": "text",
                "content": "TRE 3.0 included a parallelogram-angle question and a cylinder total-surface-area question.     BPSC TRE3.0 question paper by c…\n\nWe'll keep today to the formulas most likely to give you easy marks."
              },
              {
                "type": "callout",
                "icon": "📌",
                "title": "1. Triangle",
                "diagram": "Mental picture:\n      /\\\n     /  \\\n    /____\\\n\nAngles:\nA + B + C = 180°\n\nMemory:\nTriangle = 180"
              },
              {
                "type": "callout",
                "icon": "📌",
                "title": "2. Quadrilateral",
                "diagram": "┌────────┐\n│        │\n└────────┘\n\nSum of interior angles:\n360°\n\nMemory:\nFour sides = 360"
              },
              {
                "type": "callout",
                "icon": "📌",
                "title": "3. Parallelogram",
                "diagram": "Important:\nOpposite angles = equal\nAdjacent angles = 180°\n\nMental picture:\n        A──────B\n       /      /\n      D──────C\n\nA = C\nB = D\n\nA+B = 180°\n\nTRE 3.0 asked A:B = 1:2.\n\nLet:\nA = x\nB = 2x\n\nBecause they're adjacent:\nx + 2x = 180\n3x = 180\nx = 60°\n\nSo:\nA = 60°\n\nWhite-paper trick:\nParallelogram neighbours add to 180."
              },
              {
                "type": "callout",
                "icon": "📌",
                "title": "4. Rectangle",
                "content": "Area:\nLength × Breadth\n\nPerimeter:\n2(L+B)"
              },
              {
                "type": "callout",
                "icon": "📌",
                "title": "5. Circle",
                "content": "Remember:\nCircumference = 2πr\n\nArea = πr²\n\nMemory:\nCircle boundary → 2πr\nCircle inside → πr²"
              },
              {
                "type": "callout",
                "icon": "📌",
                "title": "6. Cylinder",
                "diagram": "Mental picture:\n    ______\n  /      \\\n |        | ← h\n |        |\n  \\______/\n      r\n\nCurved Surface Area:\n2πrh\n\nTotal Surface Area:\n2πr(r+h)\n\nVolume:\nπr²h\n\nWhite-paper memory:\nCylinder\n\nCSA → 2πrh\nTSA → 2πr(r+h)\nVolume → πr²h"
              }
            ]
          }
        ]
      },
      {
        "partId": "d5-part-1",
        "title": "Part I — English",
        "sections": [
          {
            "title": "Comprehension strategy & Article traps",
            "blocks": [
              {
                "type": "text",
                "content": "Your TRE 3.0 English section used a passage followed by questions and then article questions such as a/an/the.     BPSC TRE3.0 question paper by c…"
              },
              {
                "type": "callout",
                "icon": "📖",
                "title": "Comprehension strategy",
                "diagram": "Do not answer from your own knowledge.\n\nWhite-paper:\nQUESTION\n   ↓\nfind KEYWORD\n   ↓\nlocate same idea in PASSAGE\n   ↓\nANSWER FROM PASSAGE\n\nMemory:\nPassage is the boss.\n\nIf your real-world knowledge disagrees with the passage, the examination normally expects the passage-based answer."
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Article trap revision",
                "content": "We learned:\na  → consonant SOUND\nan → vowel SOUND\n\nExamples:\nan hour ✅\na university ✅\n\nNow add:\nthe = specific/particular thing\n\nExample:\nClose the door.\n\nThe speaker means a particular known door."
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 5 Test",
      "subtitle": "Do not look back.",
      "questions": [
        {
          "id": "m-d5-q1",
          "question": "Q1. Which memory is normally programmable only once by the user?",
          "options": [
            "EPROM",
            "PROM",
            "EEPROM",
            "RAM",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "PROM (Programmable Read Only Memory) is manufactured blank and can be programmed only once by the user using a PROM programmer. Correct: (B) PROM."
        },
        {
          "id": "m-d5-q2",
          "question": "Q2. EPROM is traditionally erased using:",
          "options": [
            "Magnetic field",
            "Heat",
            "Ultraviolet light",
            "Sound",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "EPROM (Erasable Programmable ROM) chips have a transparent quartz window and are erased by exposure to strong ultraviolet (UV) light. Correct: (C) Ultraviolet light."
        },
        {
          "id": "m-d5-q3",
          "question": "Q3. PLA stands for:",
          "options": [
            "Programmable Logic Array",
            "Programming Logic Architecture",
            "Primary Logic Array",
            "Programmable Linear Array",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "PLA stands for Programmable Logic Array, consisting of a programmable AND gate array followed by a programmable OR gate array. Correct: (A) Programmable Logic Array."
        },
        {
          "id": "m-d5-q4",
          "question": "Q4. Decimal 25 in BCD is:",
          "options": [
            "11001",
            "0010 0101",
            "0011 0101",
            "0101 0010",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "In BCD (Binary Coded Decimal), each decimal digit is converted separately into 4 bits: 2 = 0010, 5 = 0101 ⇒ 0010 0101. (11001₂ is pure binary, not BCD). Correct: (B) 0010 0101."
        },
        {
          "id": "m-d5-q5",
          "question": "Q5. Maximum valid decimal value represented by one BCD digit is:",
          "options": [
            "8",
            "9",
            "10",
            "15",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "A BCD digit represents decimal digits 0 through 9 (0000 to 1001). The maximum valid decimal value is 9 (binary patterns 1010 to 1111 are illegal in BCD). Correct: (B) 9."
        },
        {
          "id": "m-d5-q6",
          "question": "Q6. Adjacent Gray Code values normally differ in:",
          "options": [
            "0 bits",
            "1 bit",
            "2 bits",
            "4 bits",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "The defining property of Gray Code (unit-distance code) is that consecutive code words differ in only 1 bit position. Correct: (B) 1 bit."
        },
        {
          "id": "m-d5-q7",
          "question": "Q7. Which operation is central to Gray/Binary conversion?",
          "options": [
            "AND",
            "OR",
            "XOR",
            "NAND",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Both Binary-to-Gray and Gray-to-Binary conversion algorithms fundamentally use the XOR (Exclusive-OR) logic operation. Correct: (C) XOR."
        },
        {
          "id": "m-d5-q8",
          "question": "Q8. Which technique is easiest remembered as division + remainder?",
          "options": [
            "Checksum",
            "CRC",
            "Parity",
            "ASCII",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "CRC (Cyclic Redundancy Check) treats data as a polynomial and uses binary modulo-2 division to compute a remainder attached as the check value. Correct: (B) CRC."
        },
        {
          "id": "m-d5-q9",
          "question": "Q9. Which is associated with parity bits and locating an erroneous bit?",
          "options": [
            "Hamming Code",
            "ASCII",
            "BCD",
            "Gray Code",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "Hamming Code inserts multiple redundant parity bits at positions 2⁰, 2¹, 2²... to not only detect errors but also identify the exact bit position to correct single-bit errors. Correct: (A) Hamming Code."
        },
        {
          "id": "m-d5-q10",
          "question": "Q10. Sum of angles in a triangle is:",
          "options": [
            "90°",
            "180°",
            "270°",
            "360°",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "The sum of the three interior angles of any planar triangle is always 180°. Correct: (B) 180°."
        },
        {
          "id": "m-d5-q11",
          "question": "Q11. In a parallelogram, adjacent angles are:",
          "options": [
            "Always equal",
            "Supplementary",
            "Always 90°",
            "Complementary",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "In any parallelogram, adjacent angles are consecutive interior angles between parallel lines, making them supplementary (sum = 180°). Correct: (B) Supplementary."
        },
        {
          "id": "m-d5-q12",
          "question": "Q12. Area of a circle is:",
          "options": [
            "2πr",
            "πr²",
            "2πrh",
            "πd",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Area of a circle with radius r is given by πr². (2πr is circumference). Correct: (B) πr²."
        },
        {
          "id": "m-d5-q13",
          "question": "Q13. Total surface area of a cylinder is:",
          "options": [
            "2πrh",
            "πr²h",
            "2πr(r+h)",
            "πr²",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Total Surface Area of a cylinder = Curved Surface Area + 2 Circular Bases = 2πrh + 2πr² = 2πr(r+h). Correct: (C) 2πr(r+h)."
        },
        {
          "id": "m-d5-q14",
          "question": "Q14. Choose the correct phrase:",
          "options": [
            "a hour",
            "an university",
            "an honest person",
            "an European",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "'honest' starts with a vowel sound /ɒ/ (silent 'h') and thus correctly takes 'an'. (hour takes an; university and European take a). Correct: (C) an honest person."
        },
        {
          "id": "m-d5-q15",
          "question": "Q15. In a reading-comprehension question, your first source for the answer should be:",
          "options": [
            "Your personal experience",
            "The passage",
            "General knowledge",
            "The longest option",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "In reading comprehension, the given passage is authoritative ('Passage is the boss'); questions must be answered strictly based on what is stated or implied in the text. Correct: (B) The passage."
        }
      ]
    }
  },
  {
    "dayNumber": 6,
    "dayId": "day-6",
    "badge": "Day 06",
    "title": "TRE 4.0 — Day 6",
    "unit": "Part III (CS) • Days 1–5 Super Consolidation • Mixed Test",
    "targetTime": "25–30 mins read + 30 MCQs test",
    "summary": "Today is a consolidation day. We’ll add one new Computer Organization block (CPU, Registers, Bus, Microcontroller), then test everything from Days 1–5 across 30 cumulative questions.",
    "targets": [
      {
        "section": "Part III – Computer Science",
        "topic": "CPU Architecture, Registers, Buses & Microcontroller",
        "goal": "ALU, CU, ACC/PC/IR/MAR/MDR, FDE Cycle, Bus Width"
      },
      {
        "section": "Days 1–5 Super Revision",
        "topic": "Digital Electronics & Fundamentals Consolidation",
        "goal": "Connect Days 1 to 6 as one complete master block"
      },
      {
        "section": "Day 6 Mixed Test",
        "topic": "30 Cumulative Questions (CS, GS, Language)",
        "goal": "20 CS + 5 GS + 5 Language Comprehensive Check"
      }
    ],
    "introNote": "Your STET paper specifically asks about the Accumulator register, saying it temporarily holds data during arithmetic/logical operations.     f4bc06d5-5757-40ca-b90b-f5ee42d… It also directly asks how data-bus width is measured and gives bits as the answer.     f4bc06d5-5757-40ca-b90b-f5ee42d…",
    "parts": [
      {
        "partId": "d6-part-3",
        "title": "Part III — CPU and Registers",
        "sections": [
          {
            "title": "🧠 White-paper mental picture",
            "blocks": [
              {
                "type": "text",
                "content": "Imagine a small office:"
              },
              {
                "type": "diagram",
                "content": "                COMPUTER\n                   │\n                   ▼\n             ┌───────────┐\n             │    CPU    │  ← BRAIN\n             └───────────┘\n              /    |    \\\n             /     |     \\\n           ALU     CU   Registers\n            │      │       │\n           Work   Boss   Small desk"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "The easiest memory sentence is:",
                "content": "CPU = Brain\n\nALU = Calculator\n\nCU = Manager\n\nRegister = CPU's tiny desk"
              }
            ]
          },
          {
            "title": "ALU & CU",
            "blocks": [
              {
                "type": "text",
                "content": "ALU\nALU = Arithmetic Logic Unit\n\nIt performs things such as:\nArithmetic\n+  -  ×  ÷\n\nLogic\nAND OR NOT XOR"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick:",
                "content": "ALU = Arithmetic + Logic"
              },
              {
                "type": "text",
                "content": "CU\nCU = Control Unit\n\nImagine a manager saying:\nFetch this\n↓\nSend that\n↓\nCalculate this\n↓\nStore result"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory:",
                "content": "CU controls; ALU calculates."
              }
            ]
          },
          {
            "title": "Registers",
            "blocks": [
              {
                "type": "text",
                "content": "A register is a very small, very fast storage location inside the CPU.\n\nMental picture:"
              },
              {
                "type": "diagram",
                "content": "RAM\n │\n │ bring important item\n ▼\n┌──────────┐\n│ REGISTER │ ← immediately near CPU\n└──────────┘"
              },
              {
                "type": "callout",
                "icon": "📌",
                "title": "For TRE/STET, learn these registers:",
                "diagram": "Register\tMeaning\tWhite-paper memory\nACC\tAccumulator\tCalculation result\nPC\tProgram Counter\tNext instruction address\nIR\tInstruction Register\tCurrent instruction\nMAR\tMemory Address Register\tWhere in memory?\nMDR/MBR\tMemory Data Register\tWhat data?"
              },
              {
                "type": "text",
                "content": "Accumulator\nThink:\n5 + 3\n  ↓\n ALU\n  ↓\n  8\n  ↓\n ACC\n\nThe accumulator commonly keeps intermediate arithmetic/logical results."
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "ACC = Accumulates results\n\nThis directly matches the STET question you uploaded.     f4bc06d5-5757-40ca-b90b-f5ee42d…"
              },
              {
                "type": "text",
                "content": "PC — Program Counter\nImagine you're reading a book.\nCurrent page: 20\nNext page:    21\n               ↑\n              PC\n\nPC normally contains the address of the next instruction to execute."
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "PC = Pointer to Coming instruction\n\nNot the official expansion—just our memory trick."
              },
              {
                "type": "text",
                "content": "IR — Instruction Register\nCPU fetches an instruction:\nADD A,B\n\nWhere does the current instruction stay while being processed?"
              },
              {
                "type": "diagram",
                "content": "      ADD A,B\n         ↓\n    ┌─────────┐\n    │   IR    │\n    └─────────┘"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory:",
                "content": "IR = Instruction Right now\n\nAgain, that's our memory phrase."
              },
              {
                "type": "text",
                "content": "MAR vs MDR\nThese two often confuse students.\n\nImagine going to a house.\n\nYou need:\nADDRESS\n+\nTHING stored there\n\nSo:\nMAR → ADDRESS\nMDR → DATA\n\nWhite-paper picture:"
              },
              {
                "type": "diagram",
                "content": "CPU\n\nMAR ──────► Memory location 500\n                  │\n                  ▼\n               [ DATA ]\n                  │\n                  ▼\nMDR ◄─────────────┘"
              },
              {
                "type": "callout",
                "icon": "⚡",
                "title": "Best memory trick",
                "content": "MAR = WHERE\n\nMDR = WHAT\n\nThis is worth memorizing exactly."
              }
            ]
          },
          {
            "title": "CPU instruction cycle",
            "blocks": [
              {
                "type": "text",
                "content": "Very easy:\nFETCH\n  ↓\nDECODE\n  ↓\nEXECUTE\n\nImagine a teacher:\nRead question\n    ↓\nUnderstand question\n    ↓\nSolve question\n\nTherefore:\nFetch = bring instruction\nDecode = understand\nExecute = do"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "White-paper:",
                "content": "F → D → E\n\nJust remember FDE."
              }
            ]
          },
          {
            "title": "Computer Buses",
            "blocks": [
              {
                "type": "text",
                "content": "Imagine three roads connecting CPU and memory."
              },
              {
                "type": "diagram",
                "content": "                 CPU\n                  │\n       ┌──────────┼───────────┐\n       ↓          ↓           ↓\n     DATA      ADDRESS      CONTROL\n      BUS        BUS          BUS"
              },
              {
                "type": "callout",
                "icon": "📌",
                "title": "Data Bus",
                "content": "Carries actual data.\nCPU  ⇄  DATA BUS  ⇄  MEMORY\n\nExamples:\n42\n'A'\n101101\n\nData-bus width is normally expressed in bits, exactly as tested in your STET paper.     f4bc06d5-5757-40ca-b90b-f5ee42d…\n\nMemory:\nData Bus = WHAT is travelling"
              },
              {
                "type": "callout",
                "icon": "📌",
                "title": "Address Bus",
                "content": "Carries the address of where data should come from/go to.\nCPU ─────► 500\n           ↓\n       Memory[500]\n\nMemory:\nAddress Bus = WHERE\n\nNotice the similarity:\nMAR         → WHERE\nAddress Bus → WHERE\n\nThat helps you connect concepts."
              },
              {
                "type": "callout",
                "icon": "📌",
                "title": "Control Bus",
                "content": "Carries control signals such as:\nREAD\nWRITE\nCLOCK\nINTERRUPT\n\nMemory:\nControl Bus = WHAT TO DO"
              },
              {
                "type": "callout",
                "icon": "⚡",
                "title": "White-paper trick for Buses",
                "diagram": "DATA BUS    → WHAT\nADDRESS BUS → WHERE\nCONTROL BUS → WHAT TO DO\n\nVery powerful for MCQs."
              },
              {
                "type": "callout",
                "icon": "📐",
                "title": "Address Bus Width",
                "content": "Suppose the address bus has n bits.\n\nNumber of possible addresses:\n2ⁿ\n\nExample: 16-bit address bus.\n2¹⁶\n= 65,536 locations\n\nIf each address stores one byte:\n65,536 bytes\n= 64 KB\n\nMemory trick:\nAddress lines → 2ⁿ locations\n\nDon't confuse this with data-bus width."
              }
            ]
          },
          {
            "title": "Microprocessor vs Microcontroller",
            "blocks": [
              {
                "type": "text",
                "content": "This is an important STET-extension topic. Your uploaded STET paper even asks a typical automotive microcontroller application and gives engine control in cars.     f4bc06d5-5757-40ca-b90b-f5ee42d…\n\n🧠 Mental picture"
              },
              {
                "type": "diagram",
                "content": "Microprocessor\nImagine CPU living alone:\n        MICROPROCESSOR\n              CPU\n               │\n      ┌────────┼────────┐\n      ↓        ↓        ↓\n   external  external  external\n    RAM       ROM       I/O\n\nMicrocontroller\nImagine a complete small computer inside one chip:\n       MICROCONTROLLER\n     ┌─────────────────┐\n     │ CPU             │\n     │ RAM             │\n     │ Flash/ROM       │\n     │ I/O             │\n     │ Timer           │\n     └─────────────────┘"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Best memory trick",
                "content": "Microprocessor = CPU mainly\n\nMicrocontroller = mini computer on a chip\n\nTypical use:\nMicroprocessor\n→ laptop / general-purpose computer\n\nMicrocontroller\n→ washing machine\n→ car controller\n→ microwave\n→ embedded system\n\nFor the STET paper, engine control in cars was the tested example.     f4bc06d5-5757-40ca-b90b-f5ee42d…"
              },
              {
                "type": "callout",
                "icon": "⚡",
                "title": "Day 6 white-paper master sheet",
                "diagram": "Before doing the test, close everything and mentally reproduce this:\n                 CPU = BRAIN\n\n        ALU        CU        REGISTERS\n         ↓          ↓            ↓\n     Calculate    Control     Fast storage\n\n\nACC → result\nPC  → next instruction\nIR  → current instruction\nMAR → WHERE\nMDR → WHAT\n\n\nINSTRUCTION CYCLE\n\nFETCH → DECODE → EXECUTE\n\n\nBUSES\n\nDATA    → WHAT\nADDRESS → WHERE\nCONTROL → WHAT TO DO\n\n\nMicroprocessor\n→ CPU mainly\n\nMicrocontroller\n→ CPU + Memory + I/O on chip\n\nIf you can mentally see that page, today's new material is done."
              }
            ]
          }
        ]
      },
      {
        "partId": "d6-part-rev",
        "title": "Days 1–5 Super Revision",
        "sections": [
          {
            "title": "Connecting Days 1 to 6",
            "blocks": [
              {
                "type": "text",
                "content": "Now mentally connect everything we've studied:"
              },
              {
                "type": "diagram",
                "content": "DAY 1\nNumber System\nBinary / Octal / Decimal / Hex\n\n      ↓\n\nDAY 2\nLogic Gates\nAND OR NOT NAND NOR XOR XNOR\n\n      ↓\n\nDAY 3\nBoolean + De Morgan + K-map\n\n      ↓\n\nDAY 4\nAdder + MUX + Flip-Flop\n\n      ↓\n\nDAY 5\nROM + PLA + BCD + Gray + Error Codes\n\n      ↓\n\nDAY 6\nCPU + Registers + Bus + Microcontroller"
              },
              {
                "type": "callout",
                "icon": "🎯",
                "title": "One complete Digital Electronics + Fundamentals block",
                "content": "This is effectively one complete Digital Electronics + Fundamentals block.\n\nTRE 3.0 supports this grouping: its digital section contains flip-flop, binary AND, Half Adder, ROM, PLA, MUX, number conversion, Booth multiplication and error-detection questions in sequence.     BPSC TRE3.0 question paper by c…"
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 6 Mixed Test — 30 Questions",
      "subtitle": "Don't look at your notes. This is our first proper cumulative check.",
      "questions": [
        {
          "id": "m-d6-q1",
          "question": "Q1. Decimal 45 in binary is:",
          "options": [
            "101101",
            "101011",
            "110101",
            "100101",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "45 = 32 + 8 + 4 + 1 = 2⁵ + 2³ + 2² + 2⁰ = 101101₂. Correct: (A) 101101."
        },
        {
          "id": "m-d6-q2",
          "question": "Q2. 10.11₂ in decimal is:",
          "options": [
            "2.25",
            "2.50",
            "2.75",
            "3.25",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Integer part: 10₂ = 2. Fractional part: .11₂ = 1×0.5 + 1×0.25 = 0.75. Total = 2.75₁₀. Correct: (C) 2.75."
        },
        {
          "id": "m-d6-q3",
          "question": "Q3. One hexadecimal digit corresponds to:",
          "options": [
            "2 bits",
            "3 bits",
            "4 bits",
            "8 bits",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Hexadecimal has base 16 = 2⁴. Each hexadecimal digit corresponds exactly to 4 binary bits. Correct: (C) 4 bits."
        },
        {
          "id": "m-d6-q4",
          "question": "Q4. Which gate gives output 1 when its two inputs are different?",
          "options": [
            "XNOR",
            "XOR",
            "NAND",
            "NOR",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "XOR (Exclusive-OR) outputs 1 when inputs are different (0,1 → 1; 1,0 → 1) and 0 when they are the same. Correct: (B) XOR."
        },
        {
          "id": "m-d6-q5",
          "question": "Q5. Universal gates are:",
          "options": [
            "AND and OR",
            "XOR and XNOR",
            "NAND and NOR",
            "NOT and OR",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "NAND and NOR can be combined to reproduce all other logic operations without needing any other gate type. Correct: (C) NAND and NOR."
        },
        {
          "id": "m-d6-q6",
          "question": "Q6. According to De Morgan's law: (AB)' =",
          "options": [
            "A'B'",
            "A'+B'",
            "A+B",
            "AB",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "De Morgan's theorem states: (A · B)' = A' + B' (Break the bar, flip operator · to +, invert variables). Correct: (B) A'+B'."
        },
        {
          "id": "m-d6-q7",
          "question": "Q7. A + A' equals:",
          "options": [
            "A",
            "0",
            "1",
            "A'",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Complementarity law: If A=0 then A'=1 (0+1=1); if A=1 then A'=0 (1+0=1). Thus A + A' = 1. Correct: (C) 1."
        },
        {
          "id": "m-d6-q8",
          "question": "Q8. A 3-variable K-map contains:",
          "options": [
            "4 cells",
            "6 cells",
            "8 cells",
            "16 cells",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Number of cells in an n-variable K-map = 2ⁿ. For n = 3: 2³ = 8 cells. Correct: (C) 8 cells."
        },
        {
          "id": "m-d6-q9",
          "question": "Q9. Which is an invalid K-map grouping size?",
          "options": [
            "2",
            "4",
            "6",
            "8",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "K-map groups can only have sizes that are powers of 2 (1, 2, 4, 8, 16...). 6 is not a power of 2 and is invalid. Correct: (C) 6."
        },
        {
          "id": "m-d6-q10",
          "question": "Q10. Half-Adder SUM is generated using:",
          "options": [
            "AND",
            "XOR",
            "OR",
            "XNOR",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "In a Half Adder, SUM = A ⊕ B (generated using an XOR gate). Correct: (B) XOR."
        },
        {
          "id": "m-d6-q11",
          "question": "Q11. Half-Adder Carry is generated using:",
          "options": [
            "XOR",
            "OR",
            "AND",
            "NAND",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "In a Half Adder, CARRY = A · B (generated using an AND gate). Correct: (C) AND."
        },
        {
          "id": "m-d6-q12",
          "question": "Q12. An 8-to-1 MUX needs:",
          "options": [
            "2 select lines",
            "3 select lines",
            "4 select lines",
            "8 select lines",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Inputs = 2ⁿ ⇒ 8 = 2³ ⇒ 3 select lines are needed. Correct: (B) 3 select lines."
        },
        {
          "id": "m-d6-q13",
          "question": "Q13. A DEMUX performs:",
          "options": [
            "Many → One",
            "One → Many",
            "Many → Many only",
            "Binary → Decimal",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "A DEMUX (Demultiplexer / Distributor) takes One input and routes it to one of Many output lines based on select lines. Correct: (B) One → Many."
        },
        {
          "id": "m-d6-q14",
          "question": "Q14. A basic flip-flop stores:",
          "options": [
            "1 bit",
            "1 byte",
            "4 bytes",
            "8 bits always",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "A flip-flop is a bistable circuit storing exactly 1 bit of information (0 or 1). Correct: (A) 1 bit."
        },
        {
          "id": "m-d6-q15",
          "question": "Q15. In a JK flip-flop, J=1, K=1 normally causes:",
          "options": [
            "Reset",
            "Set",
            "Toggle",
            "No change",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "When J=1 and K=1, the JK flip-flop toggles its output state on the active clock edge. Correct: (C) Toggle."
        },
        {
          "id": "m-d6-q16",
          "question": "Q16. Decimal 37 represented in BCD is:",
          "options": [
            "100101",
            "0011 0111",
            "0010 0111",
            "0011 1000",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "In BCD, each decimal digit is converted separately into 4 bits: 3 = 0011, 7 = 0111 ⇒ 0011 0111. Correct: (B) 0011 0111."
        },
        {
          "id": "m-d6-q17",
          "question": "Q17. Which error-checking technique is best remembered as division + remainder?",
          "options": [
            "Parity",
            "Checksum",
            "CRC",
            "Gray Code",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "CRC (Cyclic Redundancy Check) treats data as a binary polynomial and computes a remainder using modulo-2 division. Correct: (C) CRC."
        },
        {
          "id": "m-d6-q18",
          "question": "Q18. Which register holds the address of the next instruction?",
          "options": [
            "IR",
            "MAR",
            "PC",
            "ACC",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "The Program Counter (PC) holds the memory address of the next instruction waiting to be fetched and executed. Correct: (C) PC."
        },
        {
          "id": "m-d6-q19",
          "question": "Q19. Which register is associated with arithmetic/logical intermediate results?",
          "options": [
            "PC",
            "Accumulator",
            "MAR",
            "IR",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "The Accumulator (ACC) is the primary register used by the ALU to temporarily hold intermediate arithmetic and logical results. Correct: (B) Accumulator."
        },
        {
          "id": "m-d6-q20",
          "question": "Q20. Which bus tells the system where data should be accessed?",
          "options": [
            "Data bus",
            "Control bus",
            "Address bus",
            "USB",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "The Address Bus carries the physical memory address (WHERE) to identify the specific location being read or written. Correct: (C) Address bus."
        },
        {
          "id": "m-d6-q21",
          "question": "Q21. An item costs ₹800 and is sold for ₹1000. Profit percentage is:",
          "options": [
            "20%",
            "25%",
            "30%",
            "40%",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Profit = 1000 - 800 = ₹200. Profit % = (Profit / CP) × 100 = (200 / 800) × 100 = 25%. Correct: (B) 25%."
        },
        {
          "id": "m-d6-q22",
          "question": "Q22. Two numbers are in the ratio 3:7. Their difference is 40. The smaller number is:",
          "options": [
            "20",
            "30",
            "40",
            "60",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Difference in parts = 7 - 3 = 4 parts = 40 ⇒ 1 part = 10. Smaller number = 3 × 10 = 30. (Larger = 70). Correct: (B) 30."
        },
        {
          "id": "m-d6-q23",
          "question": "Q23. (a-b)² equals:",
          "options": [
            "a²-b²",
            "a²+2ab+b²",
            "a²-2ab+b²",
            "a²+2ab-b²",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "(a-b)² = a² - 2ab + b² (First² - 2×First×Second + Second²). Correct: (C) a²-2ab+b²."
        },
        {
          "id": "m-d6-q24",
          "question": "Q24. Two adjacent angles of a parallelogram are in ratio 2:3. The smaller angle is:",
          "options": [
            "60°",
            "72°",
            "90°",
            "108°",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Adjacent angles of a parallelogram add to 180°: 2x + 3x = 180° ⇒ 5x = 180° ⇒ x = 36°. Smaller angle = 2 × 36° = 72°. (Larger = 108°). Correct: (B) 72°."
        },
        {
          "id": "m-d6-q25",
          "question": "Q25. The total surface area of a cylinder is:",
          "options": [
            "πr²h",
            "2πrh",
            "2πr(r+h)",
            "πr²",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Total Surface Area (TSA) of cylinder = Curved Surface Area + 2 Bases = 2πrh + 2πr² = 2πr(r+h). Correct: (C) 2πr(r+h)."
        },
        {
          "id": "m-d6-q26",
          "question": "Q26. Choose the correct phrase:",
          "options": [
            "a honest man",
            "an honest man",
            "an university",
            "a hour",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "'honest' starts with silent 'h' and vowel sound /ɒ/, requiring the indefinite article 'an'. Correct: (B) an honest man."
        },
        {
          "id": "m-d6-q27",
          "question": "Q27. “जल” का पर्यायवाची है:",
          "options": [
            "नभ",
            "नीर",
            "अनल",
            "वायु",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "जल के पर्यायवाची शब्द हैं: नीर, वारि, पानी, तोय, सलिल। (नभ = आकाश, अनल = अग्नि). Correct: (B) नीर."
        },
        {
          "id": "m-d6-q28",
          "question": "Q28. “लाभ” का विलोम है:",
          "options": [
            "आय",
            "धन",
            "हानि",
            "लाभांश",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "लाभ का विलोम शब्द 'हानि' है। Correct: (C) हानि."
        },
        {
          "id": "m-d6-q29",
          "question": "Q29. “माता-पिता” में कौन-सा समास है?",
          "options": [
            "तत्पुरुष",
            "कर्मधारय",
            "द्वंद्व",
            "बहुव्रीहि",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "माता-पिता = माता और पिता। दोनों पद प्रधान होने के कारण यह 'द्वंद्व समास' है। Correct: (C) द्वंद्व."
        },
        {
          "id": "m-d6-q30",
          "question": "Q30. “राजा का पुत्र → राजपुत्र” किसका उदाहरण है?",
          "options": [
            "द्वंद्व",
            "तत्पुरुष",
            "कर्मधारय",
            "अव्ययीभाव",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "सम्बन्ध कारक चिह्न 'का' का लोप होने के कारण 'राजपुत्र' सम्बन्ध तत्पुरुष समास का उदाहरण है। Correct: (B) तत्पुरुष."
        }
      ]
    }
  },
  {
    "dayNumber": 7,
    "dayId": "day-7",
    "badge": "Day 07",
    "title": "TRE 4.0 — Day 7: Weekly Revision + Test",
    "unit": "Week 1 Grand Review • 5-Minute Recall • 50-Question Master Test",
    "targetTime": "10 mins recall + 35–40 mins 50 MCQs test",
    "summary": "Today, no major new chapter. Day 7 is for checking whether Days 1–6 are actually in long-term memory across Part III (CS), Part II (GS), and Part I (Language).",
    "targets": [
      {
        "section": "Step 1 — Recall",
        "topic": "5-Minute White-Paper Mental Map",
        "goal": "Quickly mentally draw the entire Week 1 master summary"
      },
      {
        "section": "Part III — Computer Science",
        "topic": "30 CS Cumulative Questions",
        "goal": "Number systems, Logic, Boolean, K-map, Adders, MUX, Flip-Flops, ROM, Codes, CPU"
      },
      {
        "section": "Part II & I — GS + Language",
        "topic": "20 GS & Language Questions",
        "goal": "Math, Geometry, Articles, Prepositions, Hindi Grammar & Vocab"
      }
    ],
    "introNote": "Today, no major new chapter. Day 7 is for checking whether Days 1–6 are actually in long-term memory.\n\nYour real papers justify this focus: TRE 3.0 contains a concentrated Digital Electronics block covering gates, flip-flop, Half Adder, ROM, PLA, MUX, number conversion and error-detection topics, while the STET paper adds registers, buses and microcontroller concepts.     f4bc06d5-5757-40ca-b90b-f5ee42d…     f4bc06d5-5757-40ca-b90b-f5ee42d…",
    "parts": [
      {
        "partId": "d7-part-recall",
        "title": "Step 1 — 5-minute white-paper recall",
        "sections": [
          {
            "title": "🧠 White-Paper Recall Roadmap",
            "blocks": [
              {
                "type": "text",
                "content": "Before attempting questions, close your notes and mentally draw this:"
              },
              {
                "type": "diagram",
                "content": "                 WEEK 1\n\nNUMBER SYSTEM\nB O D H\n2 8 10 16\n\nTo Decimal   → Multiply\nFrom Decimal → Divide\n\nOctal → 3 bits\nHex   → 4 bits\n\nThen:\nLOGIC\n\nAND  → ALL\nOR   → ANY\nNOT  → Opposite\n\nXOR  → Different = 1\nXNOR → Same = 1\n\nNAND + NOR → Universal\n\nThen:\nDE MORGAN\n\n(A+B)' = A'B'\n(AB)'  = A'+B'\n\n\"Break the bar,\n flip variables + operator\"\n\nThen:\nHALF ADDER\nSum   → XOR\nCarry → AND\n\nFULL ADDER\nA + B + Carry-In\n\nThen:\nMUX   → MANY → ONE\nDEMUX → ONE → MANY\n\n2ⁿ inputs → n select lines\n\nThen:\nFLIP-FLOP → stores 1 bit\n\nSR → Set/Reset\nJK → 11 = Toggle\nD  → Data\nT  → Toggle\n\nThen:\nROM\n\nMROM   → Manufacturer\nPROM   → Program once\nEPROM  → UV erase\nEEPROM → Electrical erase\n\nThen:\nBCD      → each decimal digit = 4 bits\nGRAY     → one-bit change\nPARITY   → count 1s\nCHECKSUM → add\nCRC      → division/remainder\nHAMMING  → locate/correct error\n\nFinally:\nCPU = Brain\n\nALU → Calculate\nCU  → Control\n\nACC → Result\nPC  → Next instruction\nIR  → Current instruction\nMAR → WHERE\nMDR → WHAT\n\nBUS:\nData    → WHAT\nAddress → WHERE\nControl → WHAT TO DO"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Self-Check Rule",
                "content": "If you can reproduce most of that mentally, Week 1 is working."
              }
            ]
          },
          {
            "title": "Day 7 Weekly Test Instructions",
            "blocks": [
              {
                "type": "text",
                "content": "Rule: Do not use notes.\n\nTry to finish in 35–40 minutes.\n\nThe test comprises:\n• Part III — Computer Science (Q1 to Q30)\n• Part II — GS Weekly Test (Q31 to Q40)\n• Part I — Language Weekly Test (Q41 to Q50)"
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 7 Weekly Master Test (50 Questions)",
      "subtitle": "Complete Week 1 Coverage — 30 CS • 10 GS • 10 Language",
      "timeLimit": "35–40 mins",
      "questions": [
        {
          "id": "m-d7-q1",
          "question": "Q1. Decimal 29 in binary is:",
          "options": [
            "11101",
            "11011",
            "10111",
            "11110",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "29 ÷ 2 = 14 R 1; 14 ÷ 2 = 7 R 0; 7 ÷ 2 = 3 R 1; 3 ÷ 2 = 1 R 1; 1 ÷ 2 = 0 R 1. Reading upwards: 11101₂ (16 + 8 + 4 + 1 = 29). Correct: (A) 11101."
        },
        {
          "id": "m-d7-q2",
          "question": "Q2. 10110₂ in decimal is:",
          "options": [
            "20",
            "21",
            "22",
            "24",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "1×2⁴ + 0×2³ + 1×2² + 1×2¹ + 0×2⁰ = 16 + 0 + 4 + 2 + 0 = 22₁₀. Correct: (C) 22."
        },
        {
          "id": "m-d7-q3",
          "question": "Q3. 111011₂ in octal is:",
          "options": [
            "71",
            "72",
            "73",
            "74",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Group in 3 bits from right: 111 | 011. 111₂ = 7, 011₂ = 3. Thus, 111011₂ = 73₈. Correct: (C) 73."
        },
        {
          "id": "m-d7-q4",
          "question": "Q4. 11011110₂ in hexadecimal is:",
          "options": [
            "CE",
            "DE",
            "DF",
            "ED",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Group in 4 bits: 1101 | 1110. 1101₂ = 13 (D), 1110₂ = 14 (E). Thus 11011110₂ = DE₁₆. Correct: (B) DE."
        },
        {
          "id": "m-d7-q5",
          "question": "Q5. 101.011₂ equals:",
          "options": [
            "5.125",
            "5.25",
            "5.375",
            "5.75",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Integer part: 101₂ = 4 + 0 + 1 = 5. Fractional part: 0×0.5 + 1×0.25 + 1×0.125 = 0.375. Total = 5.375₁₀. Correct: (C) 5.375."
        },
        {
          "id": "m-d7-q6",
          "question": "Q6. Which gate produces 1 only when all inputs are 1?",
          "options": [
            "OR",
            "AND",
            "XOR",
            "NOR",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "AND gate gives output 1 only when ALL inputs are 1 (Memory rule: AND = ALL). Correct: (B) AND."
        },
        {
          "id": "m-d7-q7",
          "question": "Q7. Which gate outputs 1 for equal two-input combinations?",
          "options": [
            "XOR",
            "XNOR",
            "OR",
            "NAND",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "XNOR (equivalence gate) produces 1 when both inputs are equal / identical (0 XNOR 0 = 1, 1 XNOR 1 = 1; Memory rule: XNOR → Same = 1). Correct: (B) XNOR."
        },
        {
          "id": "m-d7-q8",
          "question": "Q8. Which are universal gates?",
          "options": [
            "AND and OR",
            "XOR and XNOR",
            "NAND and NOR",
            "AND and XOR",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "NAND and NOR are universal gates because any boolean function can be implemented using only NAND or only NOR gates. Correct: (C) NAND and NOR."
        },
        {
          "id": "m-d7-q9",
          "question": "Q9. A 5-input logic circuit has how many possible input combinations?",
          "options": [
            "10",
            "16",
            "25",
            "32",
            "None"
          ],
          "correctAnswer": 3,
          "explanation": "For n binary inputs, there are 2ⁿ combinations. For n = 5: 2⁵ = 32 combinations (00000 to 11111). Correct: (D) 32."
        },
        {
          "id": "m-d7-q10",
          "question": "Q10. 1 NAND 1 equals:",
          "options": [
            "0",
            "1",
            "10",
            "Undefined",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "1 AND 1 = 1. NAND inverts the result: NOT(1) = 0. So 1 NAND 1 = 0. Correct: (A) 0."
        },
        {
          "id": "m-d7-q11",
          "question": "Q11. According to De Morgan: (A+B+C)' =",
          "options": [
            "A'+B'+C'",
            "A'B'C'",
            "ABC",
            "A+B+C",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "By De Morgan's theorem: (A+B+C)' = A'·B'·C' ('Break the bar, flip variables + operator'). Correct: (B) A'B'C'."
        },
        {
          "id": "m-d7-q12",
          "question": "Q12. A + A' simplifies to:",
          "options": [
            "A",
            "A'",
            "0",
            "1",
            "None"
          ],
          "correctAnswer": 3,
          "explanation": "Complement law: One value is always 1 and the other is 0. In OR logic: Opposites OR → 1. Correct: (D) 1."
        },
        {
          "id": "m-d7-q13",
          "question": "Q13. A.A' equals:",
          "options": [
            "0",
            "1",
            "A",
            "A'",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "Complement law: Since either A or A' is always 0, in AND logic: Opposites AND → 0. Correct: (A) 0."
        },
        {
          "id": "m-d7-q14",
          "question": "Q14. A 4-variable K-map contains:",
          "options": [
            "8 cells",
            "12 cells",
            "16 cells",
            "32 cells",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "A K-map for n variables has 2ⁿ cells. For 4 variables, 2⁴ = 16 cells. Correct: (C) 16 cells."
        },
        {
          "id": "m-d7-q15",
          "question": "Q15. Which sequence follows Gray-code ordering?",
          "options": [
            "00, 01, 10, 11",
            "00, 01, 11, 10",
            "00, 11, 01, 10",
            "00, 10, 11, 01",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Gray code (reflected binary code) changes only 1 bit between successive values: 00 → 01 → 11 → 10. Correct: (B) 00, 01, 11, 10."
        },
        {
          "id": "m-d7-q16",
          "question": "Q16. Half-Adder Sum is:",
          "options": [
            "AND",
            "XOR",
            "OR",
            "NOR",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Half-Adder SUM is generated by an XOR gate: SUM = A ⊕ B. Correct: (B) XOR."
        },
        {
          "id": "m-d7-q17",
          "question": "Q17. Half-Adder Carry is:",
          "options": [
            "AND",
            "XOR",
            "OR",
            "XNOR",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "Half-Adder CARRY is generated by an AND gate: CARRY = A · B. Correct: (A) AND."
        },
        {
          "id": "m-d7-q18",
          "question": "Q18. A Full Adder accepts:",
          "options": [
            "A and B only",
            "A, B and Carry-In",
            "Sum and Carry only",
            "One input only",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "A Full Adder accepts three 1-bit inputs: A, B, and Carry-In (Cin), producing Sum and Carry-Out. Correct: (B) A, B and Carry-In."
        },
        {
          "id": "m-d7-q19",
          "question": "Q19. A 32-to-1 MUX requires:",
          "options": [
            "4 select lines",
            "5 select lines",
            "6 select lines",
            "32 select lines",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "For 2ⁿ inputs, n select lines are required. Since 32 = 2⁵, n = 5 select lines. Correct: (B) 5 select lines."
        },
        {
          "id": "m-d7-q20",
          "question": "Q20. DEMUX means conceptually:",
          "options": [
            "Many → One",
            "One → Many",
            "Decimal → Binary",
            "Analog → Digital",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Demultiplexer (DEMUX) takes 1 single input and routes it to 1 of Many outputs (One → Many). Correct: (B) One → Many."
        },
        {
          "id": "m-d7-q21",
          "question": "Q21. Which flip-flop has the memory rule 11 → Toggle?",
          "options": [
            "SR",
            "JK",
            "D",
            "T only when T=0",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "In a JK flip-flop, J=1 and K=1 causes the output state to toggle (invert) on clock pulse. Correct: (B) JK."
        },
        {
          "id": "m-d7-q22",
          "question": "Q22. A flip-flop stores:",
          "options": [
            "1 bit",
            "1 byte",
            "1 KB",
            "4 bits",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "A flip-flop is the basic sequential digital memory unit that stores exactly 1 bit of binary data. Correct: (A) 1 bit."
        },
        {
          "id": "m-d7-q23",
          "question": "Q23. Which ROM can traditionally be erased with UV light?",
          "options": [
            "PROM",
            "MROM",
            "EPROM",
            "RAM",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "EPROM (Erasable Programmable Read-Only Memory) chips have a quartz window and are erased with ultraviolet (UV) light. Correct: (C) EPROM."
        },
        {
          "id": "m-d7-q24",
          "question": "Q24. Decimal 49 in BCD is:",
          "options": [
            "110001",
            "0100 1001",
            "0101 1001",
            "1001 0100",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "In BCD (8421), each decimal digit is represented by 4 bits: 4 = 0100, 9 = 1001. So 49₁₀ = 0100 1001. Correct: (B) 0100 1001."
        },
        {
          "id": "m-d7-q25",
          "question": "Q25. Which code has the rule that adjacent values differ by one bit?",
          "options": [
            "ASCII",
            "Gray Code",
            "BCD",
            "Excess-3",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Gray Code is a unit-distance code where adjacent numerical values differ in exactly one bit position. Correct: (B) Gray Code."
        },
        {
          "id": "m-d7-q26",
          "question": "Q26. Which is best remembered as binary division + remainder?",
          "options": [
            "Parity",
            "Checksum",
            "CRC",
            "ASCII",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Cyclic Redundancy Check (CRC) is based on binary modulo-2 polynomial division, where the remainder forms the error-checking checksum. Correct: (C) CRC."
        },
        {
          "id": "m-d7-q27",
          "question": "Q27. Which register normally keeps the next instruction address?",
          "options": [
            "ACC",
            "IR",
            "PC",
            "MDR",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "The Program Counter (PC) holds the memory address of the next instruction to be fetched and executed. Correct: (C) PC."
        },
        {
          "id": "m-d7-q28",
          "question": "Q28. Which register answers “Where in memory?”",
          "options": [
            "MAR",
            "MDR",
            "ACC",
            "IR",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "MAR (Memory Address Register) holds the memory address where data or instruction is being read or written (answers 'WHERE'). Correct: (A) MAR."
        },
        {
          "id": "m-d7-q29",
          "question": "Q29. Which CPU component performs arithmetic and logical operations?",
          "options": [
            "CU",
            "RAM",
            "ALU",
            "ROM",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "The ALU (Arithmetic Logic Unit) executes all arithmetic calculations (+, -, *, /) and logical decisions. Correct: (C) ALU."
        },
        {
          "id": "m-d7-q30",
          "question": "Q30. Which best describes a microcontroller?",
          "options": [
            "Only an ALU",
            "CPU plus memory and I/O integrated for embedded control",
            "Only external RAM",
            "A type of operating system",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "A microcontroller integrates a CPU core along with RAM, ROM/Flash, timers, and I/O peripherals onto a single integrated circuit for embedded control applications (tested in STET paper). Correct: (B) CPU plus memory and I/O integrated for embedded control."
        },
        {
          "id": "m-d7-q31",
          "question": "Q31. 25% of 360 is:",
          "options": [
            "80",
            "90",
            "100",
            "120",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "25% = 1/4. 360 × (1/4) = 90. Correct: (B) 90."
        },
        {
          "id": "m-d7-q32",
          "question": "Q32. A ₹600 article is sold at 20% profit. Selling price is:",
          "options": [
            "₹680",
            "₹700",
            "₹720",
            "₹750",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "SP = CP × (100 + P%)/100 = 600 × 1.20 = ₹720. Correct: (C) ₹720."
        },
        {
          "id": "m-d7-q33",
          "question": "Q33. A value increases by 10% and then decreases by 10%. Overall:",
          "options": [
            "No change",
            "1% gain",
            "1% loss",
            "10% loss",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Net change = +10 - 10 - (10×10)/100 = -1%. Hence, overall 1% loss. (e.g. 100 → 110 → 99). Correct: (C) 1% loss."
        },
        {
          "id": "m-d7-q34",
          "question": "Q34. Two numbers are in ratio 2:7. Their difference is 50. Smaller number is:",
          "options": [
            "10",
            "20",
            "25",
            "35",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Difference in ratio parts = 7 - 2 = 5 parts = 50 ⇒ 1 part = 10. Smaller number = 2 × 10 = 20. (Larger = 70). Correct: (B) 20."
        },
        {
          "id": "m-d7-q35",
          "question": "Q35. If x and y are inversely proportional:",
          "options": [
            "x+y = constant",
            "x-y = constant",
            "xy = constant",
            "x/y = constant",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "In inverse variation, x ∝ 1/y ⇒ x · y = constant (k). (TRE 3.0 tested ratio and inverse-proportion questions). Correct: (C) xy = constant."
        },
        {
          "id": "m-d7-q36",
          "question": "Q36. 3² × 3⁴ =",
          "options": [
            "3⁶",
            "9⁶",
            "3⁸",
            "3²",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "Exponents with identical bases add together: aᵐ × aⁿ = aᵐ⁺ⁿ ⇒ 3²⁺⁴ = 3⁶. Correct: (A) 3⁶."
        },
        {
          "id": "m-d7-q37",
          "question": "Q37. Roots are 3 and 4. Their quadratic equation is:",
          "options": [
            "x²+7x+12=0",
            "x²-7x+12=0",
            "x²-12x+7=0",
            "x²+12x-7=0",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Formula: x² - (Sum of roots)x + (Product of roots) = 0. Sum = 3+4=7, Product = 3×4=12. So x² - 7x + 12 = 0. Correct: (B) x²-7x+12=0."
        },
        {
          "id": "m-d7-q38",
          "question": "Q38. Sum of the interior angles of a triangle is:",
          "options": [
            "90°",
            "180°",
            "270°",
            "360°",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "The interior angle sum of any triangle in plane geometry is always 180°. Correct: (B) 180°."
        },
        {
          "id": "m-d7-q39",
          "question": "Q39. Adjacent angles of a parallelogram are:",
          "options": [
            "Equal in all cases",
            "Supplementary",
            "Complementary",
            "Always 90°",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Consecutive adjacent angles formed by parallel sides and a transversal add to 180° (supplementary). Correct: (B) Supplementary."
        },
        {
          "id": "m-d7-q40",
          "question": "Q40. Area of a circle is:",
          "options": [
            "2πr",
            "πr²",
            "2πrh",
            "πr²h",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Area of a circle is πr² (while circumference is 2πr). Correct: (B) πr²."
        },
        {
          "id": "m-d7-q41",
          "question": "Q41. Choose the correct expression:",
          "options": [
            "a honest person",
            "an honest person",
            "an university",
            "a hour",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "'honest' begins with a silent 'h' and vowel sound /ɒ/, requiring the article 'an'. Correct: (B) an honest person."
        },
        {
          "id": "m-d7-q42",
          "question": "Q42. We arrived ___ 7 PM.",
          "options": [
            "on",
            "in",
            "at",
            "by",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "The preposition 'at' is used for specific points in time on a clock (e.g., at 7 PM). Correct: (C) at."
        },
        {
          "id": "m-d7-q43",
          "question": "Q43. The students ___ studying.",
          "options": [
            "is",
            "are",
            "am",
            "was",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Plural subject 'students' takes the plural present continuous verb 'are'. Correct: (B) are."
        },
        {
          "id": "m-d7-q44",
          "question": "Q44. “जल” का पर्यायवाची है:",
          "options": [
            "अनल",
            "नीर",
            "नभ",
            "पवन",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "जल के पर्यायवाची शब्द हैं: नीर, तोय, वारि, पानी, सलिल। (अनल = आग, नभ = आकाश, पवन = वायु). Correct: (B) नीर."
        },
        {
          "id": "m-d7-q45",
          "question": "Q45. “सुख” का विलोम है:",
          "options": [
            "लाभ",
            "दुःख",
            "शांति",
            "आनंद",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "'सुख' का सटीक विलोम शब्द 'दुःख' है। Correct: (B) दुःख."
        },
        {
          "id": "m-d7-q46",
          "question": "Q46. “जो कभी न मरे”:",
          "options": [
            "नश्वर",
            "अमर",
            "अज्ञात",
            "निर्जीव",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "वाक्यांश के लिए एक शब्द: 'जो कभी न मरे' उसे 'अमर' कहते हैं। (नश्वर = जो नष्ट होने वाला हो). Correct: (B) अमर."
        },
        {
          "id": "m-d7-q47",
          "question": "Q47. “सुंदर फूल” में विशेषण है:",
          "options": [
            "फूल",
            "सुंदर",
            "दोनों",
            "कोई नहीं",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "'सुंदर' गुणवाचक विशेषण है, जो संज्ञा 'फूल' की विशेषता बता रहा है (फूल विशेष्य है). Correct: (B) सुंदर."
        },
        {
          "id": "m-d7-q48",
          "question": "Q48. “राम ने खाना खाया” में ने है:",
          "options": [
            "कर्म कारक",
            "करण कारक",
            "कर्ता कारक",
            "अधिकरण कारक",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "'ने' प्रथमा कर्ता कारक का परसर्ग (विभक्ति चिह्न) है। Correct: (C) कर्ता कारक."
        },
        {
          "id": "m-d7-q49",
          "question": "Q49. “माता-पिता” है:",
          "options": [
            "तत्पुरुष समास",
            "द्वंद्व समास",
            "कर्मधारय समास",
            "बहुव्रीहि समास",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "माता-पिता = माता और पिता। दोनों पद समान रूप से प्रधान हैं, अतः यह द्वंद्व समास है। Correct: (B) द्वंद्व समास."
        },
        {
          "id": "m-d7-q50",
          "question": "Q50. “राजपुत्र” का सही विग्रह:",
          "options": [
            "राजा और पुत्र",
            "राजा जैसा पुत्र",
            "राजा का पुत्र",
            "पुत्र का राजा",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "'राजपुत्र' का सही समास विग्रह 'राजा का पुत्र' है (सम्बन्ध तत्पुरुष समास)। Correct: (C) राजा का पुत्र."
        }
      ]
    }
  },
  {
    "dayNumber": 8,
    "dayId": "day-8",
    "badge": "Day 08",
    "title": "TRE 4.0 — Day 8",
    "unit": "Part III (CS) • Data Structures (Array, Linked List, Stack) • Physics & English",
    "targetTime": "25–30 mins read + 20 MCQs test",
    "summary": "Today we begin one of the highest-value Part III areas: Data Structures (Array, Linked List, Stack), along with Physics (Electricity, Ohm's law, Power) and English Reading Comprehension technique.",
    "targets": [
      {
        "section": "Part III – CS",
        "topic": "Array + Linked List + Stack",
        "goal": "Direct access O(1), node pointers, LIFO, recursion stack, infix/prefix/postfix notation"
      },
      {
        "section": "Part II – GS",
        "topic": "Electricity: Current, Voltage, Resistance, Power",
        "goal": "Ohm's law (V=IR), VIR triangle, Electrical Power (P=VI, P=I²R)"
      },
      {
        "section": "Part I – Language",
        "topic": "English reading comprehension technique",
        "goal": "Question → Keyword → Scan passage → Match sentence → Answer"
      }
    ],
    "introNote": "Today we begin one of the highest-value Part III areas: Data Structures.\n\nYour TRE 2.0 paper directly asked about Stack applications, infix→prefix conversion, arrays, recursion using Stack, and later Queue/Tree questions. The explanations below use standard CS concepts to prepare those exact topic areas.",
    "parts": [
      {
        "partId": "d8-part-3",
        "title": "Part III — DATA STRUCTURES",
        "sections": [
          {
            "title": "🧠 First mental picture",
            "blocks": [
              {
                "type": "text",
                "content": "Imagine you have 5 books.\n\nYou can organize them in different ways:\nDATA\n ↓\nHow should I organize it?\n ↓\nDATA STRUCTURE"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "White-paper memory:",
                "content": "Data Structure = way of organizing data"
              },
              {
                "type": "diagram",
                "content": "Today:\n           DATA STRUCTURES\n                 │\n       ┌─────────┼─────────┐\n       ↓         ↓         ↓\n     ARRAY    LINKED LIST  STACK"
              }
            ]
          },
          {
            "title": "1. ARRAY",
            "blocks": [
              {
                "type": "text",
                "content": "Imagine numbered seats in a cinema:"
              },
              {
                "type": "diagram",
                "content": "Index:\n 0      1      2      3      4\n ↓      ↓      ↓      ↓      ↓\n[10]   [20]   [30]   [40]   [50]\n\nEverything is arranged side-by-side."
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "Array = numbered boxes in a row\n\nYour TRE 2.0 paper describes an array as a container storing elements of similar types."
              },
              {
                "type": "text",
                "content": "Array index\nVery important:\n\nMost programming-language arrays start at:\n0\n\nExample:\nint a[] = {10,20,30,40}"
              },
              {
                "type": "diagram",
                "content": "Mental picture:\nVALUE:   10   20   30   40\n          ↑    ↑    ↑    ↑\nINDEX:    0    1    2    3\n\nSo:\na[0] = 10\na[2] = 30"
              },
              {
                "type": "callout",
                "icon": "⚠️",
                "title": "Exam trap",
                "content": "If someone asks:\nthe 1st element\n\nit is commonly:\narray[0]\n\nThe nth element is generally:\narray[n-1]\n\nYour TRE 2.0 C++ section directly tested this idea."
              },
              {
                "type": "diagram",
                "content": "White-paper trick\nPOSITION: 1  2  3  4\nINDEX:    0  1  2  3\n\nINDEX = POSITION - 1"
              },
              {
                "type": "text",
                "content": "Why is Array fast for access?\nImagine apartment numbers:\nRoom 0\nRoom 1\nRoom 2\nRoom 3\n\nIf I say:\nGo to Room 3\n\nyou don't need to visit rooms 0,1,2 first.\n\nSimilarly:\narray[3]\n\ncan be directly accessed."
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory",
                "content": "Array = Direct access\n\nTypical array access:\nO(1)\n\nWe'll study complexity properly later."
              },
              {
                "type": "text",
                "content": "Array weakness\nSuppose:\n[10][20][30][40]\n\nYou want to insert 15 after 10:\n[10][15][20][30][40]\n\nOther elements may need to move."
              },
              {
                "type": "diagram",
                "content": "Mental picture:\nINSERT\n   ↓\npeople shift seats →"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory",
                "content": "Array: access easy, middle insertion costly"
              }
            ]
          },
          {
            "title": "2. LINKED LIST",
            "blocks": [
              {
                "type": "text",
                "content": "Now imagine railway coaches."
              },
              {
                "type": "diagram",
                "content": "[10 | next] → [20 | next] → [30 | next] → [40 | NULL]\n\nEach box is called a:\nNode\n\nA node normally contains:\n┌──────────────┐\n│ DATA │ NEXT  │\n└──────────────┘"
              },
              {
                "type": "diagram",
                "content": "🧠 White-paper picture\nNODE\n ├─ DATA\n └─ LINK"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "Linked List = data holding hands\n\n10 → 20 → 30 → 40"
              },
              {
                "type": "text",
                "content": "Array vs Linked List\nThis is very important."
              },
              {
                "type": "diagram",
                "content": "ARRAY\n[10][20][30][40]\n\nThink:\nNeighbours sitting together\n\nLINKED LIST\n[10] → [20] → [30] → [40]\n\nThink:\nNeighbours connected by address"
              },
              {
                "type": "callout",
                "icon": "⚖️",
                "title": "White-paper comparison",
                "content": "ARRAY\nTogether in memory\nDirect index\n\nLINKED LIST\nConnected by links\nFollow node → node"
              },
              {
                "type": "text",
                "content": "Head\nThe first node is commonly reached through:"
              },
              {
                "type": "diagram",
                "content": "HEAD\n ↓\n[10] → [20] → [30] → NULL"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory",
                "content": "Head = entrance to Linked List\n\nLose the head, and you may lose access to the chain."
              },
              {
                "type": "text",
                "content": "NULL\nThe final node points to:\nNULL"
              },
              {
                "type": "diagram",
                "content": "Mental picture:\n10 → 20 → 30 → NULL\n                ↑\n              STOP"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory:",
                "content": "NULL = end of road"
              },
              {
                "type": "text",
                "content": "Types of Linked List\nFor TRE level, remember three:"
              },
              {
                "type": "diagram",
                "content": "Linked List\n   │\n   ├─ Singly\n   ├─ Doubly\n   └─ Circular\n\nSingly\nOnly forward:\n10 → 20 → 30 → NULL\n\nDoubly\nBoth directions:\nNULL ← 10 ⇄ 20 ⇄ 30 → NULL\n\nCircular\nLast returns to first:\n10 → 20 → 30\n↑         ↓\n└─────────┘"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory tricks",
                "content": "Singly = One-way road\n\nDoubly = Two-way road\n\nCircular = Round road"
              },
              {
                "type": "text",
                "content": "Array vs Linked List insertion\nImagine inserting 25.\n\nArray:\n10 20 30 40\n      ↓\nshift elements\n\nLinked List conceptually:\n20 → 30\n\nbecomes\n\n20 → 25 → 30\n\nYou change links rather than necessarily shifting a whole contiguous block."
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "White-paper memory",
                "content": "ARRAY\ninsert → SHIFT\n\nLINKED LIST\ninsert → CHANGE LINKS"
              }
            ]
          },
          {
            "title": "3. STACK — VERY IMPORTANT",
            "blocks": [
              {
                "type": "text",
                "content": "TRE 2.0 asked several Stack questions, including Stack applications, expression conversion and recursion."
              },
              {
                "type": "diagram",
                "content": "🧠 Mental picture\nImagine plates in a hotel:\n       TOP\n        ↓\n     ┌─────┐\n     │  C  │ ← newest\n     ├─────┤\n     │  B  │\n     ├─────┤\n     │  A  │ ← oldest\n     └─────┘\n\nYou place a plate on top.\n\nYou remove a plate from top.\n\nTherefore:\nLast In → First Out"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "STACK = LIFO\n\nL = Last\nI = In\nF = First\nO = Out"
              },
              {
                "type": "text",
                "content": "PUSH and POP\nTwo words must become automatic.\nPUSH → Insert\nPOP  → Remove\n\nBoth happen at:\nTOP"
              },
              {
                "type": "diagram",
                "content": "Mental picture:\n         PUSH ↓\n       ┌─────┐\n       │ 30  │ ← TOP\n       ├─────┤\n       │ 20  │\n       ├─────┤\n       │ 10  │\n       └─────┘\n         POP ↑"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "Push = Put\n\nPop = Pull out\n\nNot technically the expansion—just memory words."
              },
              {
                "type": "text",
                "content": "PEEK / TOP\nSuppose:\nTOP\n ↓\n[30]\n[20]\n[10]\n\npeek() means:\nSee 30 without removing it."
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "White-paper",
                "content": "POP  → SEE + REMOVE\nPEEK → SEE ONLY"
              },
              {
                "type": "text",
                "content": "Stack Underflow\nImagine an empty plate stack.\n[ EMPTY ]\n\nAnd you try:\nPOP\n\nNothing exists to remove.\n\nThis is:\nUNDERFLOW"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "Underflow = Remove from EMPTY"
              },
              {
                "type": "text",
                "content": "Stack Overflow\nSuppose stack capacity = 3:\n[30]\n[20]\n[10]\n\nIt is full.\n\nTry PUSH 40.\n40\n ↓\nFULL STACK ❌\n\nThat's:\nOVERFLOW"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory",
                "content": "POP empty  → UNDERFLOW\nPUSH full  → OVERFLOW\n\nVery important exam pair."
              },
              {
                "type": "text",
                "content": "Stack applications\nYour TRE paper specifically tests applications."
              },
              {
                "type": "diagram",
                "content": "Remember:\nSTACK\n │\n ├─ Function calls\n ├─ Recursion\n ├─ Expression conversion\n ├─ Expression evaluation\n ├─ Backtracking\n ├─ Undo\n └─ String reversal"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "White-paper memory trick",
                "content": "Think:\nSTACK = GO BACK\n\nWhy?\n\nRecursion → return to previous function.\n\nBrowser back → previous page.\n\nUndo → previous state.\n\nBacktracking → previous choice."
              },
              {
                "type": "callout",
                "icon": "⭐",
                "title": "Strong memory sentence",
                "content": "Whenever you must return BACK, think STACK.\n\nTRE 2.0 specifically asks which data structure is used in recursion: Stack."
              },
              {
                "type": "text",
                "content": "Expression notation\nYou need three terms.\n\nSuppose:\nA + B\n\nThis is:\nINFIX\n\nbecause operator is in the middle.\nA + B\n  ↑\nmiddle\n\nPrefix\nOperator first:\n+ A B\n\nPostfix\nOperator last:\nA B +"
              },
              {
                "type": "callout",
                "icon": "🧠",
                "title": "Best memory",
                "content": "PREFIX\n+AB\n↑\noperator BEFORE\n\nINFIX\nA+B\n ↑\noperator INSIDE\n\nPOSTFIX\nAB+\n  ↑\noperator AFTER\n\nOr:\nPRE = before\n\nIN = inside\n\nPOST = after"
              },
              {
                "type": "diagram",
                "content": "Example\nExpression:\nA + B * C\n\nRemember multiplication first:\nB*C\n\nPrefix:\n+A*BC\n\nPostfix:\nABC*+"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "TRE 2.0 Exam Link",
                "content": "Your TRE 2.0 paper actually asked the prefix form of A+B*C and separately asked which data structure is needed for infix→prefix conversion: Stack."
              }
            ]
          },
          {
            "title": "Array vs Linked List vs Stack — Master Summary",
            "blocks": [
              {
                "type": "diagram",
                "content": "Your Day 8 master picture:\nARRAY\n[10][20][30]\nDirect index\n↓\n\nLINKED LIST\n10 → 20 → 30\nFollow links\n↓\n\nSTACK\n10\n20\n30\n↑ TOP\nLIFO"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Easy memory story",
                "content": "Imagine a classroom:\nArray = students sitting in numbered seats\n\nLinked List = students holding the address of the next student\n\nStack = pile of books\n\nIf you remember those three pictures, you can rebuild the concepts."
              }
            ]
          }
        ]
      },
      {
        "partId": "d8-part-2",
        "title": "Part II — Physics: Electricity",
        "sections": [
          {
            "title": "Current, Voltage, Resistance & Ohm's Law",
            "blocks": [
              {
                "type": "text",
                "content": "TRE 3.0 Part II included an electric-heater question involving resistance and current, so electricity deserves practice.\n\nToday only four quantities:\nVoltage     → V\nCurrent     → I\nResistance  → R\nPower       → P"
              },
              {
                "type": "callout",
                "icon": "🧠",
                "title": "Water-pipe memory trick",
                "content": "Imagine water:\nWater pressure → VOLTAGE\nWater flow     → CURRENT\nPipe blockage  → RESISTANCE\n\nTherefore:\nVoltage pushes\n\nCurrent flows\n\nResistance opposes"
              },
              {
                "type": "text",
                "content": "Ohm's Law\nVery important:\nV = I × R\n\nUse the triangle:\n       V\n      ───\n      I R\n\nCover what you want.\n\nFor V:\nV = I × R\n\nFor I:\nI = V/R\n\nFor R:\nR = V/I"
              },
              {
                "type": "diagram",
                "content": "White-paper memory\nVIR triangle\n\n   V\n  ----\n  I  R"
              }
            ]
          },
          {
            "title": "Electrical Power",
            "blocks": [
              {
                "type": "text",
                "content": "Formula:\nP = V × I\n\nUsing Ohm's law:\nP = I²R\n\nand:\nP = V²/R"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "For now remember especially:",
                "content": "Power = VI\n\nand\nIf Current + Resistance are given → I²R"
              },
              {
                "type": "diagram",
                "content": "Example:\nI = 5 A\nR = 4 Ω\n\nPower:\nP = I²R\n\n= 5² × 4\n= 25 × 4\n= 100 W"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "Current squared × Resistance\n        ↓\n       POWER"
              }
            ]
          }
        ]
      },
      {
        "partId": "d8-part-1",
        "title": "Part I — English Comprehension",
        "sections": [
          {
            "title": "English Reading Comprehension Technique",
            "blocks": [
              {
                "type": "text",
                "content": "TRE 3.0 used a reading passage followed by multiple questions.\n\nThe biggest mistake is trying to remember the entire passage.\n\nUse this method."
              },
              {
                "type": "diagram",
                "content": "🧠 White-paper technique\nQUESTION\n   ↓\nKEYWORD\n   ↓\nSCAN passage\n   ↓\nMATCH sentence\n   ↓\nANSWER\n\nExample question:\nWhy did Ravi go to the market?\n\nKeyword:\nRavi + market\n\nSearch those ideas in the passage."
              },
              {
                "type": "callout",
                "icon": "⭐",
                "title": "Memory sentence",
                "content": "Don't read to remember everything. Read to FIND the answer."
              }
            ]
          }
        ]
      },
      {
        "partId": "d8-part-recap",
        "title": "Day 8 quick-revision page",
        "sections": [
          {
            "title": "Mental White-Paper Recap",
            "blocks": [
              {
                "type": "text",
                "content": "Before the test, mentally draw:"
              },
              {
                "type": "diagram",
                "content": "ARRAY\nnumbered boxes\nindex starts 0\ndirect access\n\nLINKED LIST\nDATA + LINK\nHEAD → first\nNULL → end\n\nSTACK\nLIFO\nPUSH → add\nPOP → remove\nPEEK → see\n\nEmpty POP → Underflow\nFull PUSH → Overflow\n\nSTACK USES\nRecursion\nBacktracking\nExpression conversion\nUndo\n\nThen:\nELECTRICITY\n\nV → push\nI → flow\nR → oppose\n\nV = IR\n\nP = VI\nP = I²R"
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 8 Practice Test (20 Questions)",
      "subtitle": "14 CS (Data Structures) • 4 Physics (Electricity) • 2 English Comprehension",
      "timeLimit": "20–25 mins",
      "questions": [
        {
          "id": "m-d8-q1",
          "question": "Q1. Which best describes an array?",
          "options": [
            "Collection of unrelated data only",
            "Container storing similar-type elements",
            "Always a non-linear structure",
            "Only a collection of pointers",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "An array is a linear data structure that stores elements of similar (homogeneous) types in contiguous memory locations. Correct: (B) Container storing similar-type elements."
        },
        {
          "id": "m-d8-q2",
          "question": "Q2. In a zero-indexed array, the first element is:",
          "options": [
            "a[1]",
            "a[0]",
            "a[-1]",
            "a[first]",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "In zero-based indexing systems (C, C++, Java, Python), indices begin at 0, making the first element a[0]. Correct: (B) a[0]."
        },
        {
          "id": "m-d8-q3",
          "question": "Q3. In a zero-indexed array, the nth element is typically:",
          "options": [
            "a[n]",
            "a[n+1]",
            "a[n-1]",
            "a[0]",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Because the index starts at 0, the nth element is located at index (n - 1) (Formula: INDEX = POSITION - 1). Correct: (C) a[n-1]."
        },
        {
          "id": "m-d8-q4",
          "question": "Q4. The first node of a linked list is commonly accessed by:",
          "options": [
            "Top",
            "Rear",
            "Head",
            "Tail only",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "The pointer referencing the first node of a linked list is called the Head. Correct: (C) Head."
        },
        {
          "id": "m-d8-q5",
          "question": "Q5. In a standard singly linked list, the last node generally points to:",
          "options": [
            "Head always",
            "NULL",
            "Previous node",
            "Stack",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "In a standard linear singly linked list, the link field of the last node is set to NULL to signify the end of the chain. Correct: (B) NULL."
        },
        {
          "id": "m-d8-q6",
          "question": "Q6. Which linked list supports traversal in both directions?",
          "options": [
            "Singly linked list",
            "Doubly linked list",
            "Simple array",
            "Stack",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "A doubly linked list contains two links per node (previous and next), enabling two-way traversal (forward and backward). Correct: (B) Doubly linked list."
        },
        {
          "id": "m-d8-q7",
          "question": "Q7. Stack follows:",
          "options": [
            "FIFO",
            "LIFO",
            "Random order",
            "Priority only",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "A stack follows the Last-In, First-Out (LIFO) operational principle. Correct: (B) LIFO."
        },
        {
          "id": "m-d8-q8",
          "question": "Q8. Adding an element to Stack is called:",
          "options": [
            "Pop",
            "Push",
            "Peek",
            "DeleteRear",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "The operation of placing/inserting an element onto the top of a stack is PUSH. Correct: (B) Push."
        },
        {
          "id": "m-d8-q9",
          "question": "Q9. Attempting to POP from an empty Stack causes:",
          "options": [
            "Overflow",
            "Underflow",
            "Collision",
            "Deadlock",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Attempting to delete/remove an item from an empty stack generates an Underflow condition. Correct: (B) Underflow."
        },
        {
          "id": "m-d8-q10",
          "question": "Q10. Which data structure is normally associated with recursion?",
          "options": [
            "Queue",
            "Array",
            "Stack",
            "Heap only",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Recursion utilizes the system Call Stack to remember function states, local variables, and return addresses. Correct: (C) Stack."
        },
        {
          "id": "m-d8-q11",
          "question": "Q11. Which structure is normally used for infix→prefix/postfix processing?",
          "options": [
            "Stack",
            "Queue only",
            "Tree only",
            "Hash table",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "A Stack is the standard data structure used to handle operator precedence during infix-to-prefix and infix-to-postfix conversions. Correct: (A) Stack."
        },
        {
          "id": "m-d8-q12",
          "question": "Q12. Prefix notation for A+B is:",
          "options": [
            "AB+",
            "+AB",
            "A+B",
            "BA+",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "In prefix (Polish) notation, the operator is placed BEFORE operands: +AB. Correct: (B) +AB."
        },
        {
          "id": "m-d8-q13",
          "question": "Q13. Postfix notation for A+B is:",
          "options": [
            "+AB",
            "A+B",
            "AB+",
            "+BA",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "In postfix (Reverse Polish) notation, the operator is placed AFTER operands: AB+. Correct: (C) AB+."
        },
        {
          "id": "m-d8-q14",
          "question": "Q14. Prefix form of A+B*C is:",
          "options": [
            "+A*BC",
            "ABC*+",
            "*+ABC",
            "AB+C*",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "Multiplication has higher precedence than addition: B*C becomes (* B C). Then A + (* B C) becomes + A * B C (+A*BC). Correct: (A) +A*BC."
        },
        {
          "id": "m-d8-q15",
          "question": "Q15. According to Ohm's law:",
          "options": [
            "V=IR",
            "V=I/R",
            "R=VI",
            "I=VR",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "Ohm's law defines the relationship: Voltage = Current × Resistance (V = I × R). Correct: (A) V=IR."
        },
        {
          "id": "m-d8-q16",
          "question": "Q16. If V=12 V and R=4 Ω, current is:",
          "options": [
            "2 A",
            "3 A",
            "4 A",
            "48 A",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "From Ohm's law: I = V / R = 12 / 4 = 3 A. Correct: (B) 3 A."
        },
        {
          "id": "m-d8-q17",
          "question": "Q17. Electrical power is:",
          "options": [
            "V+I",
            "V/I",
            "VI",
            "R/I",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Electric power is the rate at which electrical energy is transferred: Power = Voltage × Current (P = V × I). Correct: (C) VI."
        },
        {
          "id": "m-d8-q18",
          "question": "Q18. A device draws 2 A through a resistance of 5 Ω. Power using I²R is:",
          "options": [
            "10 W",
            "15 W",
            "20 W",
            "25 W",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "P = I² × R = 2² × 5 = 4 × 5 = 20 W. Correct: (C) 20 W."
        },
        {
          "id": "m-d8-q19",
          "question": "Q19. Why did Ravi start walking?",
          "options": [
            "To meet friends",
            "To improve his health",
            "To reach school",
            "To lose his books",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "The passage directly states: 'Ravi wanted to improve his health, so he started walking every morning.' Correct: (B) To improve his health."
        },
        {
          "id": "m-d8-q20",
          "question": "Q20. What happened after a few weeks?",
          "options": [
            "He stopped studying",
            "He became tired",
            "He felt more energetic",
            "He stopped walking",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "The passage states: 'After a few weeks, he felt more energetic and could concentrate better on his studies.' Correct: (C) He felt more energetic."
        }
      ]
    }
  },
  {
    "dayNumber": 9,
    "dayId": "day-9",
    "badge": "Day 09",
    "title": "TRE 4.0 — Day 9",
    "unit": "Part III (CS) • Queues (Linear, Circular, Deque, Priority) • Light & English",
    "targetTime": "25–30 mins read + 21 MCQs test",
    "summary": "Today we continue Data Structures: Queue (FIFO, Front/Rear, Underflow/Overflow), Circular Queue (Ring Buffer, wrap-around index), Deque (O(n) rear deletion in singly linked list), Priority Queue (Binary Heap), Light/Lenses, and English relationship terms.",
    "targets": [
      {
        "section": "Part III – Computer Science",
        "topic": "Queue + Circular Queue + Deque + Priority Queue",
        "goal": "FIFO, Enqueue/Dequeue, Ring Buffer, (index+1)%size, Deque complexity, Binary Heap"
      },
      {
        "section": "Part II – GS",
        "topic": "Light, Lens & Refraction basics",
        "goal": "Convex (converging) vs Concave (diverging), lens in water (f increases), fog scattering, frequency constancy"
      },
      {
        "section": "Part I – Language",
        "topic": "English relationship vocabulary",
        "goal": "Maternal vs Paternal grandparents, Brother-in-law / Sister-in-law"
      }
    ],
    "introNote": "Today we continue Data Structures.\n\nThis is especially important because TRE 2.0 asked consecutive questions on Queue underflow, Queue applications, Circular Queue/Ring Buffer, why Circular Queue is needed, Priority Queue implementation, Deque complexity and Queue overflow.     BPSC TRE2.0 question paper by c…",
    "parts": [
      {
        "partId": "d9-part-3",
        "title": "Part III — QUEUE",
        "sections": [
          {
            "title": "🧠 White-paper picture",
            "blocks": [
              {
                "type": "text",
                "content": "Imagine people standing at a ticket counter:"
              },
              {
                "type": "diagram",
                "content": "ENTRY                              EXIT\n  ↓                                  ↓\n[ D ] → [ C ] → [ B ] → [ A ]\n REAR                         FRONT"
              },
              {
                "type": "text",
                "content": "A came first.\n\nSo A leaves first.\n\nTherefore:\nQueue = FIFO\n\nF = First\nI = In\nF = First\nO = Out"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "Stack = plates → LIFO\n\nQueue = line of people → FIFO\n\nThis distinction must become automatic."
              }
            ]
          },
          {
            "title": "1. FRONT and REAR",
            "blocks": [
              {
                "type": "diagram",
                "content": "Two ends:\n       QUEUE\n\nREAR                         FRONT\n ↓                              ↓\n[40] → [30] → [20] → [10]"
              },
              {
                "type": "text",
                "content": "New element enters from:\nREAR\n\nElement leaves from:\nFRONT"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "White-paper trick",
                "content": "ENQUEUE → REAR\nDEQUEUE → FRONT"
              }
            ]
          },
          {
            "title": "2. ENQUEUE & 3. DEQUEUE",
            "blocks": [
              {
                "type": "text",
                "content": "2. ENQUEUE\nAdding an element:\nQueue:\n[10][20][30]\n\nENQUEUE 40\n     ↓\n\n[10][20][30][40]\n\nOperation:\nENQUEUE = Insert"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory:",
                "content": "EN = Enter"
              },
              {
                "type": "text",
                "content": "3. DEQUEUE\nRemoving an element:\n[10][20][30]\n ↑\nFRONT\n\nDEQUEUE:\n10 leaves\n↓\n[20][30]\n\nOperation:\nDEQUEUE = Delete from FRONT"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Best memory",
                "content": "ENQUEUE → ENTER → REAR\nDEQUEUE → DELETE → FRONT"
              }
            ]
          },
          {
            "title": "4. Queue Underflow & 5. Queue Overflow",
            "blocks": [
              {
                "type": "text",
                "content": "4. Queue Underflow\nSuppose:\nQUEUE\n[ EMPTY ]\n\nYou try:\nDEQUEUE\n\nNothing exists.\n\nResult:\nUNDERFLOW\n\nTRE 2.0 directly asks what condition must be checked before deletion from a queue; underflow is one of the tested concepts.     BPSC TRE2.0 question paper by c…"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "Delete empty → Underflow\n\nSame idea as Stack."
              },
              {
                "type": "text",
                "content": "5. Queue Overflow\nImagine an array queue of size 5:\nIndex\n0    1    2    3    4\n\n[10][20][30][40][50]\n                   ↑\n                  rear\n\nNo more room.\n\nTrying to insert:\nENQUEUE 60 ❌\n\nmeans:\nOVERFLOW\n\nFor a simple linear array queue of size MAX_SIZE, TRE 2.0 tests the condition:\nrear = MAX_SIZE - 1\n\nas the full-end condition."
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "White-paper memory",
                "content": "DELETE empty → UNDERFLOW\nINSERT full  → OVERFLOW"
              }
            ]
          },
          {
            "title": "6. The problem with Linear Queue & 7. Circular Queue",
            "blocks": [
              {
                "type": "text",
                "content": "6. The problem with Linear Queue\nThis is where Circular Queue becomes important.\n\nSuppose size = 5:\n[10][20][30][40][50]\n\nRemove three:\n[  ][  ][  ][40][50]\n               ↑\n              rear\n\nNotice:\nLEFT SIDE = free\nRIGHT SIDE = rear reached end\n\nA simple linear implementation may not reuse those empty positions directly.\n\nThat's wasted space."
              },
              {
                "type": "diagram",
                "content": "🧠 Mental picture\nEMPTY EMPTY EMPTY [40][50]\n  ↑\nSpace exists!\n\nBut rear is at end\n              ↑\n            PROBLEM"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "TRE Exam Concept",
                "content": "TRE 2.0 explicitly links the need for a circular queue with avoiding wastage of memory.     BPSC TRE2.0 question paper by c…"
              },
              {
                "type": "text",
                "content": "7. Circular Queue\nNow bend the queue into a circle."
              },
              {
                "type": "diagram",
                "content": "        [0]\n      ↗     ↘\n    [4]     [1]\n     ↑       ↓\n    [3] ←── [2]\n\nWhen rear reaches the final position:\nit can wrap around to the beginning if space is free."
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "Circular Queue = recycle empty spaces\n\nAnother name:\nRing Buffer\n\nTRE 2.0 directly asks this and gives Ring Buffer among the choices.     BPSC TRE2.0 question paper by c…"
              },
              {
                "type": "diagram",
                "content": "White-paper:\nCircular Queue\n      =\n Ring Buffer"
              },
              {
                "type": "diagram",
                "content": "Linear vs Circular Queue\nMental picture:\nLINEAR\n\nSTART -------------------- END\n                          ❌ stop\n\nversus:\nCIRCULAR\n\n     ↗────────↘\n   START      END\n     ↖────────↙\n       reuse"
              },
              {
                "type": "callout",
                "icon": "⭐",
                "title": "Memory sentence",
                "content": "Linear reaches the wall.\n\nCircular comes back around."
              }
            ]
          },
          {
            "title": "8. Circular index formula",
            "blocks": [
              {
                "type": "text",
                "content": "This one is useful.\n\nTo move to next position in a circular queue:\nnext = (current + 1) % size\n\nSuppose size = 5 and rear = 4:\n(4+1) % 5\n= 5 % 5\n= 0\n\nSo:\n4 → 0\n\nExactly like a circle."
              },
              {
                "type": "diagram",
                "content": "White-paper trick\nLAST\n ↓\n% SIZE\n ↓\nBACK TO ZERO"
              }
            ]
          },
          {
            "title": "9. DEQUE",
            "blocks": [
              {
                "type": "text",
                "content": "Deque means:\nDouble Ended Queue\n\nPronounced roughly \"deck.\""
              },
              {
                "type": "diagram",
                "content": "🧠 Mental picture\nNormal Queue:\nINSERT → [QUEUE] → DELETE\n\nDeque:\n        BOTH ENDS\n\n← insert/delete [ A B C ] insert/delete →\n\nSo in a Deque:\ninsertion and deletion can happen at both ends."
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "DEQUE = Double-Ended QUEue\n\nFRONT ⇄ [ DEQUE ] ⇄ REAR"
              },
              {
                "type": "text",
                "content": "Types of Deque\nAt TRE level, know:\nInput-restricted Deque\nOutput-restricted Deque\n\nInput-restricted:\nInsertion allowed at one end, deletion at both.\n\nOutput-restricted:\nDeletion allowed at one end, insertion at both.\n\nDon't spend too much time memorizing these today.\n\nThe main concept:\nDeque = both ends are active"
              },
              {
                "type": "diagram",
                "content": "TRE trap — Singly Linked List Deque\nIf you implement a deque with a singly linked list:\n10 → 20 → 30 → 40 → NULL\n\nDeleting from the rear requires finding the node before 40.\n\nYou may have to walk:\n10 → 20 → 30 → 40\n\nTherefore:\nrear deletion = O(n)\n\nTRE 2.0 directly asks this complexity.     BPSC TRE2.0 question paper by c…"
              },
              {
                "type": "callout",
                "icon": "🧠",
                "title": "Mental trick",
                "content": "Singly Linked List\n\nOnly →\nOnly →\nOnly →\n\nTo find previous rear:\nwalk from beginning\n↓\nO(n)"
              }
            ]
          },
          {
            "title": "10. PRIORITY QUEUE & Queue Applications",
            "blocks": [
              {
                "type": "text",
                "content": "10. PRIORITY QUEUE\nNormal Queue:\nFirst come → first served\n\nPriority Queue:\nMost important → served first\n\nImagine a hospital emergency room.\nPatient A → normal fever\nPatient B → serious accident\nPatient C → mild cough\n\nEven if B arrived later:\nB may be treated first\n\nbecause priority is higher."
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "Queue = arrival matters\n\nPriority Queue = importance matters"
              },
              {
                "type": "text",
                "content": "Best structure for Priority Queue\nYour TRE 2.0 paper asks which data structure is best for implementing a priority queue and includes Binary Heap as the relevant choice.     BPSC TRE2.0 question paper by c…"
              },
              {
                "type": "diagram",
                "content": "So remember:\nPRIORITY QUEUE\n      ↓\n BINARY HEAP\n\nWe'll study Heap properly in the Tree chapter."
              },
              {
                "type": "diagram",
                "content": "Queue applications\nBased on the concepts appearing in your paper, think of Queue whenever things are waiting their turn:\nQUEUE\n │\n ├─ CPU scheduling\n ├─ Printer jobs\n ├─ I/O buffers\n ├─ Network packets\n ├─ Asynchronous transfer\n └─ Resource sharing\n\nTRE 2.0 contrasts Queue applications with balancing symbols, which is more naturally a Stack application.     BPSC TRE2.0 question paper by c…"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "White-paper memory",
                "content": "WAITING LINE → QUEUE"
              },
              {
                "type": "diagram",
                "content": "Stack vs Queue vs Priority Queue\nThis comparison is important.\nSTACK\nLast comes\nFirst goes\n\nLIFO\n\nQUEUE\nFirst comes\nFirst goes\n\nFIFO\n\nPRIORITY QUEUE\nHighest priority\ngoes first"
              },
              {
                "type": "callout",
                "icon": "🧠",
                "title": "Best mental picture",
                "content": "STACK          QUEUE          PRIORITY\n\nplates         ticket line     hospital\n LIFO             FIFO         importance"
              }
            ]
          },
          {
            "title": "Day 9 CS master page",
            "blocks": [
              {
                "type": "diagram",
                "content": "Mentally reproduce:\nQUEUE\nFIFO\n\nENQUEUE → rear\nDEQUEUE → front\n\ndelete empty → underflow\ninsert full  → overflow\n\n\nCIRCULAR QUEUE\n= Ring Buffer\n= reuse space\n\n\nDEQUE\n= Double Ended Queue\n= both ends\n\n\nPRIORITY QUEUE\nimportance first\nbest structure → Binary Heap\n\nIf you can mentally draw that, your Queue foundation is good."
              }
            ]
          }
        ]
      },
      {
        "partId": "d9-part-2",
        "title": "Part II — Light & Lenses",
        "sections": [
          {
            "title": "Convex vs Concave & Focus",
            "blocks": [
              {
                "type": "text",
                "content": "Your TRE 2.0 GS section includes questions about a convex lens immersed in water, fog/scattering, and monochromatic light moving between media.     BPSC TRE2.0 question paper by c…"
              },
              {
                "type": "diagram",
                "content": "1. Convex vs Concave Lens\nConvex Lens\nMental picture:\n        ()\n       thick\n      middle\n\nThink:\nConvex = converges\n\nParallel rays:\n→ → →   ()   \\ | /\n                •\n              Focus"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "CONVEX → CONVERGE\n\nBoth start with CONV."
              },
              {
                "type": "diagram",
                "content": "Concave Lens\n        )(\n       thin\n      middle\n\nIt spreads rays.\nConcave = diverging lens\n\nMental:\n→ → →   )(   ↖ ↑ ↗"
              },
              {
                "type": "text",
                "content": "2. Focus / Focal Length\nFor a convex lens:\nparallel rays\n      ↓\n    LENS\n      ↓\nmeet at F\n\nDistance between:\nOptical centre → Focus\n\nis:\nFocal length\n\nSymbol:\nf"
              }
            ]
          },
          {
            "title": "Lens in Water, Fog Scattering & Refraction",
            "blocks": [
              {
                "type": "text",
                "content": "3. Lens in water — TRE concept\nTRE 2.0 asks about a convex lens with focal length 10 cm when immersed in water, with an option that it remains convex but has f > 10 cm.     BPSC TRE2.0 question paper by c…\n\nThe exam-level memory idea:\nIn water, the refractive contrast between glass and surroundings becomes smaller.\n\nTherefore lens power decreases.\n\nSince:\nPower P = 1/f\n\nIf power decreases:\nfocal length increases"
              },
              {
                "type": "diagram",
                "content": "White-paper:\nConvex lens\nAIR → stronger bending\n\nWATER → weaker bending\n         ↓\n      power ↓\n         ↓\n   focal length ↑"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory",
                "content": "Water weakens the lens → f increases"
              },
              {
                "type": "text",
                "content": "4. Fog and Scattering\nTRE 2.0 asks why distant objects cannot be seen clearly in fog even though water itself is transparent.\n\nThe paper points to:\nlight being scattered by fine water droplets.     BPSC TRE2.0 question paper by c…"
              },
              {
                "type": "diagram",
                "content": "Mental picture:\nLight → • • • • fog droplets\n        ↗ ↓ ↖ ↘\n       scattered"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "Fog = tiny droplets = scattering"
              },
              {
                "type": "text",
                "content": "5. Light entering another medium\nSuppose light travels:\nAIR → WATER\n\nThree things may change:\nspeed\nwavelength\ndirection\n\nBut the TRE paper asks which property of monochromatic light does not change between media:\nFrequency"
              },
              {
                "type": "diagram",
                "content": "Mental picture:\nAIR               WATER\n\nSpeed changes   ✅\nWavelength      ✅\nFrequency       ❌ stays same"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "Source controls frequency.\n\nSo crossing a boundary doesn't change frequency."
              }
            ]
          }
        ]
      },
      {
        "partId": "d9-part-1",
        "title": "Part I — English Relationship Vocabulary",
        "sections": [
          {
            "title": "Family Tree Vocabulary",
            "blocks": [
              {
                "type": "text",
                "content": "TRE 2.0 actually includes relationship-word questions such as husband's brother and mother's parents."
              },
              {
                "type": "diagram",
                "content": "🧠 Family-tree picture\n              Grandparents\n                  │\n        ┌─────────┴─────────┐\n      Father              Mother\n\nMother's parents:\nMaternal grandparents\n\nFather's parents:\nPaternal grandparents"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "M = Mother = Maternal\nP = Papa   = Paternal"
              },
              {
                "type": "text",
                "content": "Husband's brother / wife's brother / spouse's sibling relation often uses:\nbrother-in-law\n\nHusband's sister / wife's sister:\nsister-in-law\n\nTRE 2.0 directly uses brother-in-law and maternal grandparents in its English section."
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 9 Practice Test (21 Questions)",
      "subtitle": "14 CS (Queues & Deque) • 5 Physics (Light & Lenses) • 2 English (Relationships)",
      "timeLimit": "25–30 mins",
      "questions": [
        {
          "id": "m-d9-q1",
          "question": "Q1. Queue follows:",
          "options": [
            "LIFO",
            "FIFO",
            "Random access",
            "Highest value first always",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "A queue operates on the First-In, First-Out (FIFO) principle, where the first element inserted is the first to be deleted. Correct: (B) FIFO."
        },
        {
          "id": "m-d9-q2",
          "question": "Q2. In a standard Queue, insertion occurs at:",
          "options": [
            "Front",
            "Rear",
            "Middle",
            "Top",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "New elements enter (ENQUEUE) at the REAR end of the queue. Correct: (B) Rear."
        },
        {
          "id": "m-d9-q3",
          "question": "Q3. Deletion from Queue normally occurs at:",
          "options": [
            "Rear",
            "Middle",
            "Front",
            "Top",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Elements leave (DEQUEUE) from the FRONT end of the queue. Correct: (C) Front."
        },
        {
          "id": "m-d9-q4",
          "question": "Q4. Trying to delete from an empty Queue causes:",
          "options": [
            "Overflow",
            "Underflow",
            "Deadlock",
            "Collision",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Attempting to remove or dequeue an element from an empty queue triggers an Underflow condition. Correct: (B) Underflow."
        },
        {
          "id": "m-d9-q5",
          "question": "Q5. Trying to insert into a full Queue causes:",
          "options": [
            "Underflow",
            "Overflow",
            "Starvation",
            "Recursion",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Attempting to insert an element into an already full queue causes an Overflow condition. Correct: (B) Overflow."
        },
        {
          "id": "m-d9-q6",
          "question": "Q6. Another common name for Circular Queue is:",
          "options": [
            "Square Buffer",
            "Ring Buffer",
            "Tree Buffer",
            "Stack Buffer",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "A circular queue wraps its rear pointer back to the beginning to form a ring-like structure, commonly called a Ring Buffer. Correct: (B) Ring Buffer."
        },
        {
          "id": "m-d9-q7",
          "question": "Q7. Main advantage of Circular Queue over a simple linear array Queue is:",
          "options": [
            "Makes every operation recursive",
            "Reuses freed array positions",
            "Makes Queue LIFO",
            "Removes need for Front",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "In a linear array queue, dequeued front slots are wasted once rear reaches MAX_SIZE-1. A circular queue reuses these freed positions, avoiding memory wastage. Correct: (B) Reuses freed array positions."
        },
        {
          "id": "m-d9-q8",
          "question": "Q8. If a circular queue has size 5 and current index is 4, (4+1)%5 gives:",
          "options": [
            "5",
            "4",
            "1",
            "0",
            "None"
          ],
          "correctAnswer": 3,
          "explanation": "(4 + 1) % 5 = 5 % 5 = 0. The modulo operation wraps the index back to the beginning (0). Correct: (D) 0."
        },
        {
          "id": "m-d9-q9",
          "question": "Q9. DEQUE stands for:",
          "options": [
            "Direct Queue",
            "Double Ended Queue",
            "Dynamic Equal Queue",
            "Distributed Queue",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "DEQUE stands for Double-Ended Queue. Correct: (B) Double Ended Queue."
        },
        {
          "id": "m-d9-q10",
          "question": "Q10. In a deque:",
          "options": [
            "Operations can occur at both ends",
            "Only rear can be used",
            "Only front can be used",
            "It always follows strict LIFO",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "A deque allows insertion and deletion operations to occur at both ends (Front and Rear). Correct: (A) Operations can occur at both ends."
        },
        {
          "id": "m-d9-q11",
          "question": "Q11. With a singly linked-list deque, deleting from the rear generally takes:",
          "options": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "In a singly linked list, there are no backward pointers; locating the node immediately preceding the rear to update its link to NULL requires traversing the entire list from the head, which takes O(n) time. Correct: (C) O(n)."
        },
        {
          "id": "m-d9-q12",
          "question": "Q12. Which is commonly best suited for implementing a Priority Queue?",
          "options": [
            "Stack",
            "Binary Heap",
            "Simple String",
            "Hash only",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "A Binary Heap allows insertion in O(log n) and extraction of highest/lowest priority element in O(log n), making it the ideal structure for Priority Queues. Correct: (B) Binary Heap."
        },
        {
          "id": "m-d9-q13",
          "question": "Q13. Priority Queue primarily removes an item according to:",
          "options": [
            "Only arrival time",
            "Priority",
            "Alphabetical order always",
            "Random order",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "In a Priority Queue, items are removed according to their assigned priority (e.g. emergency room triage) rather than simply arrival time. Correct: (B) Priority."
        },
        {
          "id": "m-d9-q14",
          "question": "Q14. Balancing parentheses/symbols is most commonly associated with:",
          "options": [
            "Queue",
            "Stack",
            "Priority Queue",
            "Circular Queue",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Balancing symbols matches the most recently opened symbol with the next incoming closed symbol, which relies on the LIFO behavior of a Stack. Correct: (B) Stack."
        },
        {
          "id": "m-d9-q15",
          "question": "Q15. A convex lens is primarily a:",
          "options": [
            "Diverging lens",
            "Converging lens",
            "Plane mirror",
            "Opaque material",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "A convex lens is thicker in the middle and converges parallel rays of light toward its principal focus (converging lens). Correct: (B) Converging lens."
        },
        {
          "id": "m-d9-q16",
          "question": "Q16. When an ordinary glass convex lens is immersed in water, its power generally:",
          "options": [
            "Increases greatly",
            "Decreases",
            "Becomes infinite",
            "Never changes under any condition",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "The relative refractive index of glass with respect to water is lower than with respect to air (weaker bending contrast). Thus, its refractive power decreases. Correct: (B) Decreases."
        },
        {
          "id": "m-d9-q17",
          "question": "Q17. If lens power decreases, focal length generally:",
          "options": [
            "Decreases",
            "Increases",
            "Becomes zero",
            "Is unrelated",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Power and focal length are inversely proportional: P = 1 / f. As power decreases, focal length increases. Correct: (B) Increases."
        },
        {
          "id": "m-d9-q18",
          "question": "Q18. Reduced visibility in fog is mainly due to:",
          "options": [
            "Reflection only from the ground",
            "Scattering by tiny water droplets",
            "Complete absorption of all light",
            "Water becoming black",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Fog consists of fine suspended water droplets that scatter light rays in all directions, obscuring distant objects. Correct: (B) Scattering by tiny water droplets."
        },
        {
          "id": "m-d9-q19",
          "question": "Q19. When monochromatic light passes from one transparent medium to another, which remains unchanged?",
          "options": [
            "Speed",
            "Wavelength",
            "Frequency",
            "Direction in every case",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Frequency is determined exclusively by the light source and remains unchanged across different media, while speed and wavelength change together according to v = fλ. Correct: (C) Frequency."
        },
        {
          "id": "m-d9-q20",
          "question": "Q20. Mother's parents are:",
          "options": [
            "Paternal grandparents",
            "Maternal grandparents",
            "Parents-in-law",
            "Cousins",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Parents of one's mother are referred to as Maternal grandparents (M = Mother = Maternal). Correct: (B) Maternal grandparents."
        },
        {
          "id": "m-d9-q21",
          "question": "Q21. Husband's brother is commonly called:",
          "options": [
            "Brother-in-law",
            "Maternal uncle",
            "Nephew",
            "Cousin only",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "The brother of one's spouse (husband or wife) is called a brother-in-law. Correct: (A) Brother-in-law."
        }
      ]
    }
  },
  {
    "dayNumber": 10,
    "dayId": "day-10",
    "badge": "Day 10",
    "title": "TRE 4.0 — Day 10",
    "unit": "Part III (CS) • Trees (Binary Tree, BST, Traversals, Balanced Tree) • Average & Hindi",
    "targetTime": "25–30 mins read + 21 MCQs test",
    "summary": "Today we enter the most important Tree concepts: Binary Tree, BST, Preorder/Inorder/Postorder traversals, Balanced Trees, Catalan numbers for distinct BSTs, GS Average/Mean calculations, and Hindi एक शब्द + परिमाणवाचक विशेषण.",
    "targets": [
      {
        "section": "Part III – Computer Science",
        "topic": "Tree + Binary Tree + BST + Preorder/Inorder/Postorder + Balanced Tree",
        "goal": "Root/Leaf/Sibling, Left < Root < Right, NLR/LNR/LRN traversals, BST Inorder sorted, height diff ≤ 1, Catalan formula"
      },
      {
        "section": "Part II – GS",
        "topic": "Average / Mean",
        "goal": "Average = Sum/Count, Total = Average × Count, Uniform addition/subtraction effects"
      },
      {
        "section": "Part I – Hindi",
        "topic": "एक शब्द + विशेषण",
        "goal": "अनेक शब्दों के लिए एक शब्द (अमर, अनाहूत) & परिमाणवाचक विशेषण (थोड़ा पानी)"
      }
    ],
    "introNote": "Today we enter the most important Tree concepts:\n\nThis matches your uploaded papers very closely. TRE 3.0 asks which BST subtree contains values greater than the node, balanced-tree height difference, deriving postorder from preorder, and the number of distinct BSTs from four keys.     BPSC TRE3.0 question paper by c…",
    "parts": [
      {
        "partId": "d10-part-3",
        "title": "Part III — TREE",
        "sections": [
          {
            "title": "🧠 White-paper mental picture",
            "blocks": [
              {
                "type": "text",
                "content": "Don't imagine a computer first.\n\nImagine a family tree:"
              },
              {
                "type": "diagram",
                "content": "                  Grandfather\n                      │\n           ┌──────────┴──────────┐\n         Father                Uncle\n           │                      │\n      ┌────┴────┐             ┌──┴──┐\n    Child     Child          Child Child"
              },
              {
                "type": "text",
                "content": "Computer Tree is similar:"
              },
              {
                "type": "diagram",
                "content": "                     10\n                   /    \\\n                  5      20\n                 / \\    /  \\\n                3   7  15  25"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory sentence",
                "content": "Tree = Parent → Children\n\nUnlike Array/Stack/Queue, a tree is non-linear."
              }
            ]
          },
          {
            "title": "1. Important Tree Terms",
            "blocks": [
              {
                "type": "text",
                "content": "Use this tree:"
              },
              {
                "type": "diagram",
                "content": "                     10\n                   /    \\\n                  5      20\n                 / \\    /\n                3   7  15"
              },
              {
                "type": "text",
                "content": "Root\nTop node:\n10\n\nRoot = first/top node"
              },
              {
                "type": "diagram",
                "content": "Parent and Child\n      10\n     /\n    5\n\n10 = parent\n5 = child"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory:",
                "content": "Upper = Parent\n\nLower = Child"
              },
              {
                "type": "text",
                "content": "Leaf Node\nNode having no child:\n3\n7\n15\n\nMental picture:\nA real tree ends in leaves.\n\nSo:\nNo child = Leaf"
              },
              {
                "type": "diagram",
                "content": "Sibling\nNodes sharing the same parent:\n       5\n      / \\\n     3   7\n\n3 and 7 are siblings."
              }
            ]
          },
          {
            "title": "2. Binary Tree",
            "blocks": [
              {
                "type": "text",
                "content": "Binary means:\nMaximum TWO children per node"
              },
              {
                "type": "diagram",
                "content": "             NODE\n            /    \\\n          LEFT   RIGHT"
              },
              {
                "type": "text",
                "content": "Allowed:\n0 children ✅\n1 child    ✅\n2 children ✅\n\nNot allowed in a binary tree:\n3 children ❌"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "White-paper trick",
                "content": "BI = TWO\n\nBinary Tree:\nLEFT ← NODE → RIGHT"
              }
            ]
          },
          {
            "title": "3. Binary Search Tree — BST",
            "blocks": [
              {
                "type": "text",
                "content": "This is extremely important.\n\nBST adds one special ordering rule:"
              },
              {
                "type": "diagram",
                "content": "             ROOT\n             /  \\\n        SMALL   LARGE\n\nMore precisely:\nLeft < Root < Right\n\nExample:\n                    50\n                  /    \\\n                30      70\n               /  \\    /  \\\n             20   40  60   80"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "White-paper memory trick",
                "content": "        BST\n\nSMALL  ← ROOT → LARGE\nLEFT             RIGHT\n\nTRE 3.0 directly asks where elements greater than the node are placed: right subtree.     BPSC TRE3.0 question paper by c…"
              },
              {
                "type": "diagram",
                "content": "Insert into BST\nInsert:\n50, 30, 70, 20, 40\n\nFirst:\n50\n\n30:\n30 < 50\n\nSo go left:\n     50\n    /\n   30\n\n70:\n70 > 50\n\nGo right:\n      50\n     /  \\\n   30    70\n\n20:\n20 < 50\n20 < 30\n\nSo:\n       50\n      /  \\\n    30    70\n   /\n 20\n\n40:\n40 < 50\n40 > 30\n\nResult:\n       50\n      /  \\\n    30    70\n   / \\\n 20  40"
              },
              {
                "type": "callout",
                "icon": "⭐",
                "title": "Mental sentence",
                "content": "Smaller? Walk left. Bigger? Walk right."
              }
            ]
          },
          {
            "title": "4. Tree Traversal",
            "blocks": [
              {
                "type": "text",
                "content": "Traversal means:\nVisit every node in some order.\n\nThree important DFS traversals:\nPREORDER\nINORDER\nPOSTORDER\n\nDon't blindly memorize three formulas.\n\nUse one brilliant memory trick:\nLook at where ROOT appears."
              },
              {
                "type": "diagram",
                "content": "PREORDER\nPRE means before.\n\nSo Root comes first:\nROOT → LEFT → RIGHT\n\nShort:\nN L R\n\nN = Node/Root\n\nUse:\n       10\n      /  \\\n     5   20\n\nPreorder:\n10 → 5 → 20"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory",
                "content": "PRE = Root PREcedes children"
              },
              {
                "type": "diagram",
                "content": "INORDER\nRoot is IN the middle:\nLEFT → ROOT → RIGHT\n\nShort:\nL N R\n\nSame tree:\n       10\n      /  \\\n     5   20\n\nInorder:\n5 → 10 → 20"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory",
                "content": "IN = Root IN middle"
              },
              {
                "type": "diagram",
                "content": "POSTORDER\nPOST means after.\n\nRoot comes last:\nLEFT → RIGHT → ROOT\n\nShort:\nL R N\n\nSame tree:\n       10\n      /  \\\n     5   20\n\nPostorder:\n5 → 20 → 10"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory",
                "content": "POST = Root postponed to last"
              },
              {
                "type": "callout",
                "icon": "🔥",
                "title": "Best white-paper trick of Day 10",
                "content": "Write only:\nPRE   → N L R\nIN    → L N R\nPOST  → L R N\n\nNotice something:\nPRE    N first\nIN     N middle\nPOST   N last\n\nThat's your memory system."
              }
            ]
          },
          {
            "title": "5. Bigger traversal example & 6. TRE 3.0-style traversal",
            "blocks": [
              {
                "type": "diagram",
                "content": "Tree:\n             8\n           /   \\\n          4     12\n         / \\    / \\\n        2   6  10 14\n\nPreorder\nRoot first:\n8\n↓\nleft subtree\n↓\n4 2 6\n↓\nright subtree\n↓\n12 10 14\n\nAnswer:\n8, 4, 2, 6, 12, 10, 14"
              },
              {
                "type": "diagram",
                "content": "Inorder\nLEFT → ROOT → RIGHT\n\nAnswer:\n2, 4, 6, 8, 10, 12, 14"
              },
              {
                "type": "callout",
                "icon": "⭐",
                "title": "Notice something important:",
                "content": "BST + Inorder\nproduces:\nSorted order\n\nThis is an excellent exam fact.\n\nMemory:\nBST's INORDER = Increasing order"
              },
              {
                "type": "diagram",
                "content": "Postorder\nLEFT → RIGHT → ROOT\n\nAnswer:\n2, 6, 4, 10, 14, 12, 8"
              },
              {
                "type": "text",
                "content": "6. TRE 3.0-style traversal\nYour TRE 3.0 paper gives preorder:\n15, 10, 12, 11, 20, 18, 16, 19\n\nfor a BST and asks for postorder.     BPSC TRE3.0 question paper by c…\n\nLet's mentally build it.\n\nStart:\n15\n\n10 smaller:\n      15\n     /\n   10\n\n12:\n      15\n     /\n   10\n     \\\n      12\n\n11:\n      15\n     /\n   10\n     \\\n      12\n     /\n    11\n\nRight side:\n         15\n       /    \\\n     10      20\n       \\    /\n       12  18\n      /   / \\\n     11  16 19\n\nPostorder means:\nLEFT → RIGHT → ROOT\n\nLeft subtree:\n11,12,10\n\nRight:\n16,19,18,20\n\nThen root:\n15\n\nAnswer:\n11, 12, 10, 16, 19, 18, 20, 15\n\nThat corresponds to option B in the uploaded paper.     BPSC TRE3.0 question paper by c…"
              }
            ]
          },
          {
            "title": "7. Balanced Binary Tree, 8. Why balance matters & 9. Number of BSTs",
            "blocks": [
              {
                "type": "diagram",
                "content": "7. Balanced Binary Tree\nImagine carrying two buckets:\nLEFT       RIGHT\n │           │\nheight      height\n\nA balanced binary tree tries to prevent one side from becoming much taller than the other.\n\nYour TRE 3.0 question uses this rule:\nHeight difference between two subtrees should not exceed 1.     BPSC TRE3.0 question paper by c…\n\nMental:\nDifference:\n\n0 ✅\n1 ✅\n\n2 ❌\n3 ❌"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "Balanced = difference ≤ 1"
              },
              {
                "type": "diagram",
                "content": "8. Why balance matters\nBad BST:\n10\n  \\\n   20\n     \\\n      30\n        \\\n         40\n\nThis starts behaving like a linked list.\n\nBetter:\n       20\n      /  \\\n    10    30\n            \\\n             40\n\nSo generally:\nBetter balance → faster search."
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Exam complexity insight",
                "content": "For exam understanding:\nBalanced BST\n     ↓\nroughly O(log n) search\n\nbut a badly skewed BST can degrade toward:\nO(n)\n\nThis complexity explanation is standard CS expansion beyond the literal wording of your papers, but it helps answer BST questions correctly."
              },
              {
                "type": "text",
                "content": "9. Number of BSTs — TRE trap\nTRE 3.0 asks:\nHow many distinct BSTs can be created using 4 distinct keys?     BPSC TRE3.0 question paper by c…\n\nAnswer:\n14\n\nThis follows Catalan numbers:\nn=1 → 1\nn=2 → 2\nn=3 → 5\nn=4 → 14\nn=5 → 42"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "TRE memory shortcut",
                "content": "For now memorize:\n1, 2, 5, 14, 42\n\nThink:\nBST Catalan → 1, 2, 5, 14, 42\n\nWe'll derive Catalan formula later if needed."
              }
            ]
          }
        ]
      },
      {
        "partId": "d10-part-2",
        "title": "Part II — Average / Mean",
        "sections": [
          {
            "title": "Average Calculation & Transformation Property",
            "blocks": [
              {
                "type": "text",
                "content": "Your TRE 2.0 Part II contains a question in which every number is subtracted from 53 and the mean of the transformed values is given.     BPSC TRE2.0 question paper by c…\n\nSo Average is worth knowing well."
              },
              {
                "type": "diagram",
                "content": "🧠 Mental picture\nFive students have marks:\n10  20  30\n\nPut everything into one bag:\n10+20+30 = 60\n\nDistribute equally:\n60 ÷ 3 = 20\n\nThat's average.\n\nFormula:\n          SUM\nAverage = ─────\n          COUNT"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory",
                "content": "Average = Total ÷ Number"
              },
              {
                "type": "text",
                "content": "Example\nNumbers:\n10,20,30,40\n\nSum:\n100\n\nCount:\n4\n\nAverage:\n100/4 = 25\n\nFinding Total from Average\nIf:\nAverage = 25\nNumber of items = 8\n\nthen:\nTotal = Average × Number\n\n25 × 8 = 200"
              },
              {
                "type": "diagram",
                "content": "White-paper pair\nAverage = Total / Number\n\nTotal = Average × Number"
              },
              {
                "type": "callout",
                "icon": "⭐",
                "title": "Important Average Trick",
                "content": "Suppose every student's mark increases by 5.\n\nOld:\n10 20 30\nAverage = 20\n\nNew:\n15 25 35\n\nNew average:\n25\n\nSo:\nEvery value +5 → Average +5\n\nLikewise:\nEvery value −7 → Average −7\n\nThis transformation concept is exactly the kind of idea tested in your TRE 2.0 mean question.     BPSC TRE2.0 question paper by c…"
              }
            ]
          }
        ]
      },
      {
        "partId": "d10-part-1",
        "title": "Part I — Hindi",
        "sections": [
          {
            "title": "अनेक शब्दों के लिए एक शब्द & विशेषण",
            "blocks": [
              {
                "type": "text",
                "content": "Today we'll strengthen एक शब्द and one useful विशेषण concept because TRE 2.0 tests both."
              },
              {
                "type": "diagram",
                "content": "1. अनेक शब्दों के लिए एक शब्द\nMental picture:\nLONG SENTENCE\n     ↓\n ONE WORD\n\nExample:\nजो कभी न मरे\n      ↓\n     अमर\n\nAnother important one from your TRE 2.0 paper:\nजिसे बुलाया न गया हो\n        ↓\n      अनाहूत\n\nSo remember:\nअनाहूत = जिसे बुलाया न गया हो"
              },
              {
                "type": "text",
                "content": "Other useful examples:\nजो सब जानता हो → सर्वज्ञ\n\nजो दिखाई न दे → अदृश्य\n\nजिसका अंत न हो → अनंत\n\nजो पढ़ा-लिखा न हो → निरक्षर"
              },
              {
                "type": "diagram",
                "content": "2. परिमाणवाचक विशेषण\nTRE 2.0 asks about the adjective expressing measurement/quantity of a noun.\n\nMental picture:\nकितना दूध?\n   ↓\nदो लीटर दूध\n\nor:\nथोड़ा पानी\nबहुत दूध\nकम चावल\n\nThese express quantity.\nपरिमाणवाचक विशेषण = कितना?"
              },
              {
                "type": "callout",
                "icon": "⚖️",
                "title": "Compare",
                "content": "कितना? → परिमाणवाचक\n\nकितने? → संख्यावाचक\n\nExample:\nथोड़ा दूध\n\nथोड़ा = परिमाणवाचक विशेषण."
              }
            ]
          }
        ]
      },
      {
        "partId": "d10-part-recap",
        "title": "Day 10 Mental Page",
        "sections": [
          {
            "title": "Mental White-Paper Review",
            "blocks": [
              {
                "type": "text",
                "content": "Before attempting the test, close your notes and visualize:"
              },
              {
                "type": "diagram",
                "content": "TREE\nParent → Child\nNo child → Leaf\n\nBINARY TREE\nmax 2 children\n\nBST\nLEFT < ROOT < RIGHT\n\nThen:\nTRAVERSAL\n\nPRE  → NLR\nIN   → LNR\nPOST → LRN\n\nPRE  → Root first\nIN   → Root middle\nPOST → Root last\n\nBST Inorder → Sorted\n\nAnd:\nBALANCED TREE\nheight difference ≤ 1\n\nBST counts:\n1, 2, 5, 14, 42\n\nPart II:\nAVERAGE\n= TOTAL / NUMBER\n\nTOTAL\n= AVERAGE × NUMBER\n\nEveryone +x\n→ Average +x"
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 10 Practice Test (21 Questions)",
      "subtitle": "14 CS (Trees & Traversals) • 4 GS (Average) • 3 Hindi (एक शब्द & विशेषण)",
      "timeLimit": "25–30 mins",
      "questions": [
        {
          "id": "m-d10-q1",
          "question": "Q1. The topmost node of a tree is:",
          "options": [
            "Leaf",
            "Root",
            "Child",
            "Edge",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "The root is the topmost node of a tree from which all other nodes descend. Correct: (B) Root."
        },
        {
          "id": "m-d10-q2",
          "question": "Q2. A node having no children is called:",
          "options": [
            "Parent",
            "Root only",
            "Leaf",
            "Sibling",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "A leaf node (terminal node) is a node that does not have any child nodes. Correct: (C) Leaf."
        },
        {
          "id": "m-d10-q3",
          "question": "Q3. A Binary Tree node can have at most:",
          "options": [
            "1 child",
            "2 children",
            "3 children",
            "4 children",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "In a binary tree, each node has at most two children, typically referred to as the left and right child. Correct: (B) 2 children."
        },
        {
          "id": "m-d10-q4",
          "question": "Q4. In a BST, values greater than a node are normally placed in:",
          "options": [
            "Left subtree",
            "Right subtree",
            "Either subtree randomly",
            "Root only",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "By Binary Search Tree (BST) definition, values smaller than the root go into the left subtree, and values greater than the root go into the right subtree (Left < Root < Right). Correct: (B) Right subtree."
        },
        {
          "id": "m-d10-q5",
          "question": "Q5. Preorder traversal is:",
          "options": [
            "LNR",
            "LRN",
            "NLR",
            "RNL",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Preorder traversal visits Node/Root first, then Left subtree, then Right subtree: NLR (Root Precedes children). Correct: (C) NLR."
        },
        {
          "id": "m-d10-q6",
          "question": "Q6. Inorder traversal is:",
          "options": [
            "NLR",
            "LNR",
            "LRN",
            "NRL",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Inorder traversal visits Left subtree, then Node/Root in the middle, then Right subtree: LNR. Correct: (B) LNR."
        },
        {
          "id": "m-d10-q7",
          "question": "Q7. Postorder traversal is:",
          "options": [
            "LRN",
            "LNR",
            "NLR",
            "RNL",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "Postorder traversal visits Left subtree, then Right subtree, and Node/Root last: LRN (Root Postponed to end). Correct: (A) LRN."
        },
        {
          "id": "m-d10-q8",
          "question": "Q8. (For tree: 20 -> left 10 [5,15], right 30 [25,35]) Preorder is:",
          "options": [
            "5,10,15,20,25,30,35",
            "20,10,5,15,30,25,35",
            "5,15,10,25,35,30,20",
            "20,30,35,25,10,15,5",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "NLR: Root (20) → Left Subtree (10, 5, 15) → Right Subtree (30, 25, 35). Thus: 20, 10, 5, 15, 30, 25, 35. Correct: (B) 20,10,5,15,30,25,35."
        },
        {
          "id": "m-d10-q9",
          "question": "Q9. (For tree: 20 -> left 10 [5,15], right 30 [25,35]) Inorder is:",
          "options": [
            "20,10,5,15,30,25,35",
            "5,10,15,20,25,30,35",
            "5,15,10,25,35,30,20",
            "35,30,25,20,15,10,5",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "LNR: Inorder traversal of a Binary Search Tree produces nodes in sorted ascending order: 5, 10, 15, 20, 25, 30, 35. Correct: (B) 5,10,15,20,25,30,35."
        },
        {
          "id": "m-d10-q10",
          "question": "Q10. (For tree: 20 -> left 10 [5,15], right 30 [25,35]) Postorder is:",
          "options": [
            "20,10,5,15,30,25,35",
            "5,10,15,20,25,30,35",
            "5,15,10,25,35,30,20",
            "20,30,10,35,25,15,5",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "LRN: Left subtree (5, 15, 10) → Right subtree (25, 35, 30) → Root (20). Result: 5, 15, 10, 25, 35, 30, 20. Correct: (C) 5,15,10,25,35,30,20."
        },
        {
          "id": "m-d10-q11",
          "question": "Q11. Inorder traversal of a BST usually produces:",
          "options": [
            "Random order",
            "Sorted ascending order",
            "Reverse insertion order always",
            "Level order",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Because Left < Root < Right, LNR traversal always visits keys in non-decreasing (sorted ascending) order. Correct: (B) Sorted ascending order."
        },
        {
          "id": "m-d10-q12",
          "question": "Q12. In the balanced-tree rule tested in TRE 3.0, heights of two subtrees should not differ by more than:",
          "options": [
            "0",
            "1",
            "2",
            "3",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "An AVL / height-balanced binary tree requires the height difference between the left and right subtrees of every node to be at most 1 (|hL - hR| ≤ 1). Correct: (B) 1."
        },
        {
          "id": "m-d10-q13",
          "question": "Q13. Number of distinct BSTs using 4 distinct keys is:",
          "options": [
            "4",
            "8",
            "14",
            "24",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "The number of structurally unique BSTs with n distinct keys is given by the n-th Catalan number C(n) = (1/(n+1)) * (2n choose n). For n=4: C(4) = (1/5) * (8! / (4! 4!)) = 14. (Catalan sequence: 1, 2, 5, 14, 42). Correct: (C) 14."
        },
        {
          "id": "m-d10-q14",
          "question": "Q14. Which tree is most likely to suffer poor search performance?",
          "options": [
            "Well-balanced BST",
            "Highly skewed BST",
            "Complete balanced tree",
            "Perfect tree",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "A highly skewed BST degenerates into a linear structure similar to a linked list, causing search complexity to deteriorate from O(log n) to O(n). Correct: (B) Highly skewed BST."
        },
        {
          "id": "m-d10-q15",
          "question": "Q15. Average of 10, 20, 30, 40 is:",
          "options": [
            "20",
            "25",
            "30",
            "40",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Sum = 10 + 20 + 30 + 40 = 100. Count = 4. Average = 100 / 4 = 25. Correct: (B) 25."
        },
        {
          "id": "m-d10-q16",
          "question": "Q16. Average of 8 numbers is 15. Their total is:",
          "options": [
            "23",
            "60",
            "120",
            "150",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Total = Average × Count = 15 × 8 = 120. Correct: (C) 120."
        },
        {
          "id": "m-d10-q17",
          "question": "Q17. Average of 5 numbers is 20. If every number increases by 3, new average becomes:",
          "options": [
            "20",
            "21",
            "23",
            "25",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "When every element in a dataset increases by a constant k, the overall average increases by that exact amount: 20 + 3 = 23. Correct: (C) 23."
        },
        {
          "id": "m-d10-q18",
          "question": "Q18. Average of 6 students is 50. Total marks are:",
          "options": [
            "56",
            "250",
            "300",
            "350",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Total = Average × Number of students = 50 × 6 = 300. Correct: (C) 300."
        },
        {
          "id": "m-d10-q19",
          "question": "Q19. “जो कभी न मरे” के लिए एक शब्द:",
          "options": [
            "नश्वर",
            "अमर",
            "मृत",
            "जीवित",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "अनेक शब्दों के लिए एक शब्द: 'जो कभी न मरे' उसे 'अमर' कहते हैं। Correct: (B) अमर."
        },
        {
          "id": "m-d10-q20",
          "question": "Q20. “जिसे बुलाया न गया हो”:",
          "options": [
            "आमंत्रित",
            "अनाहूत",
            "अतिथि",
            "आगंतुक",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "'जिसे बुलाया न गया हो' उसे 'अनाहूत' कहा जाता है (TRE 2.0 tested). Correct: (B) अनाहूत."
        },
        {
          "id": "m-d10-q21",
          "question": "Q21. “थोड़ा पानी” में थोड़ा है:",
          "options": [
            "गुणवाचक विशेषण",
            "परिमाणवाचक विशेषण",
            "व्यक्तिवाचक संज्ञा",
            "सर्वनाम",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "'थोड़ा' शब्द संज्ञा की मात्रा/नाप-तौल (परिमाण) को दर्शाता है, अतः यह परिमाणवाचक विशेषण है। Correct: (B) परिमाणवाचक विशेषण."
        }
      ]
    }
  },
  {
    "dayNumber": 11,
    "dayId": "day-11",
    "badge": "Day 11",
    "title": "TRE 4.0 — Day 11",
    "unit": "Part III (CS) • Heap, Hashing & Collision Handling • Indian National Movement & Hindi",
    "targetTime": "25–30 mins read + 18 MCQs test",
    "summary": "Today we continue the DSA block with Heap (Min/Max Heap, Priority Queue implementation), Hash Table, Hash Functions, Collision Resolution (Separate Chaining via Linked Lists, Linear Probing), Indian National Movement (1857, 1905 Bengal Partition, 1922 Gaya Session), and Hindi विलोम + वाक्य शुद्धि.",
    "targets": [
      {
        "section": "Part III – Computer Science",
        "topic": "Heap, Min/Max Heap, Hash Table, Hash Function, Collision, Chaining, Linear Probing",
        "goal": "Max/Min Heap roots, Priority Queue Binary Heap, Key→Index, Chaining Linked Lists, Linear Probing next empty slot"
      },
      {
        "section": "Part II – GS",
        "topic": "Indian National Movement: 1857 → Bengal Partition → Swadeshi",
        "goal": "1857 Savarkar First War, 1905 Bengal Partition Swadeshi/Boycott, 1922 Gaya Session C.R. Das"
      },
      {
        "section": "Part I – Hindi",
        "topic": "विलोम + वाक्य शुद्धि",
        "goal": "विलोम शब्द (लाभ/हानि, उन्नति/अवनति) & कर्ता-क्रिया-वचन वाक्य शुद्धि"
      }
    ],
    "introNote": "This is directly aligned with your papers. TRE 2.0 asks which structure is best for implementing a Priority Queue and includes Binary Heap as the correct choice. TRE 3.0 asks which structure provides efficient searching, insertion and deletion, with Hash Table as the answer. Your STET paper then goes deeper into Separate Chaining and Linear Probing.",
    "parts": [
      {
        "partId": "d11-part-3-heap",
        "title": "Part III — HEAP",
        "sections": [
          {
            "title": "🧠 Mental picture",
            "blocks": [
              {
                "type": "text",
                "content": "Imagine a company hierarchy:"
              },
              {
                "type": "diagram",
                "content": "               BOSS\n              /    \\\n          EMPLOYEE EMPLOYEE\n           /   \\\n        STAFF  STAFF"
              },
              {
                "type": "text",
                "content": "A Heap is a special binary tree where the parent follows an ordering rule relative to its children.\n\nFor TRE, remember two types:\n             HEAP\n            /    \\\n       MAX HEAP  MIN HEAP"
              }
            ]
          },
          {
            "title": "Max Heap vs Min Heap",
            "blocks": [
              {
                "type": "text",
                "content": "Max Heap\nMental picture:\nBig boss stays on TOP."
              },
              {
                "type": "diagram",
                "content": "             90\n           /    \\\n         70      60\n        /  \\\n      30   20\n\nEvery parent is greater than or equal to its children."
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory:",
                "content": "MAX Heap → MAX at root\n\nSo immediately:\nMax Heap\n   ↓\nLargest element\n   ↓\nROOT"
              },
              {
                "type": "text",
                "content": "Min Heap\nExactly opposite:\nSmallest boss stays on TOP."
              },
              {
                "type": "diagram",
                "content": "             10\n           /    \\\n         20      30\n        /  \\\n      40   50"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory:",
                "content": "MIN Heap → MIN at root\n\nSo:\nMin Heap → smallest at root\nMax Heap → largest at root\n\nThat is the most important distinction."
              }
            ]
          },
          {
            "title": "Heap is NOT a BST & Priority Queue Connection",
            "blocks": [
              {
                "type": "text",
                "content": "Heap is NOT a BST\nThis is an important trap.\n\nBST:\nLEFT < ROOT < RIGHT\n\nHeap does not require that complete BST ordering.\n\nFor example this is a valid Max Heap:"
              },
              {
                "type": "diagram",
                "content": "          100\n         /   \\\n       80     90\n\n80 is left and 90 is right, but we don't care that 80 < 90.\n\nWe only care:\n100 > 80\n100 > 90"
              },
              {
                "type": "callout",
                "icon": "⚖️",
                "title": "White-paper trick",
                "content": "BST\n↓\nLEFT vs ROOT vs RIGHT\n\nHEAP\n↓\nPARENT vs CHILD"
              },
              {
                "type": "text",
                "content": "Why Heap matters for TRE\nYesterday we learned:\nPRIORITY QUEUE\n      ↓\nBINARY HEAP\n\nTRE 2.0 directly tests this association."
              },
              {
                "type": "diagram",
                "content": "Mental example:\nHospital Priority Queue\n\nEmergency 9\nEmergency 7\nEmergency 4\nEmergency 2\n\nA Max Heap can keep the highest priority near the top:\n             9\n           /   \\\n          7     4\n         /\n        2\n\nSo:\nPriority Queue → think Heap"
              },
              {
                "type": "text",
                "content": "Standard CS extension: Heap insertion\nSuppose Max Heap:\n        80\n       /  \\\n     50    60\n\nInsert 90.\n\nFirst place it in the next free position:\n        80\n       /  \\\n     50    60\n    /\n   90\n\nBut Max Heap rule is broken.\n\nSo 90 moves upward:"
              },
              {
                "type": "diagram",
                "content": "        90\n       /  \\\n     80    60\n    /\n   50\n\nThis process is often called:\nHeapify / bubble up"
              },
              {
                "type": "callout",
                "icon": "🧠",
                "title": "Mental trick:",
                "content": "New big value climbs upward."
              }
            ]
          }
        ]
      },
      {
        "partId": "d11-part-3-hash",
        "title": "Part III — HASH TABLE",
        "sections": [
          {
            "title": "Hashing Concept & Hash Function",
            "blocks": [
              {
                "type": "text",
                "content": "Now imagine a library with numbered lockers.\nLocker 0\nLocker 1\nLocker 2\nLocker 3\nLocker 4\n...\n\nYou have key:\n42\n\nA special machine decides its locker:\nKEY\n ↓\nHASH FUNCTION\n ↓\nINDEX\n ↓\nTABLE\n\nThat's Hashing."
              },
              {
                "type": "diagram",
                "content": "🧠 White-paper picture\n         KEY\n          ↓\n   [ HASH FUNCTION ]\n          ↓\n        INDEX\n          ↓\n   [ HASH TABLE ]"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory:",
                "content": "Hash Function = Key → Index"
              },
              {
                "type": "text",
                "content": "Example\nSuppose table size = 10 and we use:\nindex = key % 10\n\nFor key 42:\n42 % 10 = 2\n\nSo:\nIndex 2 → 42\n\nFor key 37:\n37 % 10 = 7\n\nSo:\nIndex 7 → 37"
              },
              {
                "type": "diagram",
                "content": "Mental picture:\n0 [   ]\n1 [   ]\n2 [42 ]\n3 [   ]\n4 [   ]\n5 [   ]\n6 [   ]\n7 [37 ]\n8 [   ]\n9 [   ]"
              },
              {
                "type": "callout",
                "icon": "⭐",
                "title": "TRE Exam Reference",
                "content": "TRE 3.0 explicitly associates Hash Table with efficient searching, insertion and deletion."
              }
            ]
          },
          {
            "title": "Collision & Solutions: Chaining vs Linear Probing",
            "blocks": [
              {
                "type": "text",
                "content": "Collision — VERY IMPORTANT\nNow insert:\n42\n52\n\nWith:\nkey % 10\n\nwe get:\n42 % 10 = 2\n52 % 10 = 2\n\nBoth want:\nIndex 2\n\n💥 That is a:\nCOLLISION"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "Two keys → same index = Collision"
              },
              {
                "type": "diagram",
                "content": "White-paper:\n42 ──┐\n     ├──► index 2  💥\n52 ──┘"
              },
              {
                "type": "text",
                "content": "Collision Solution 1 — Separate Chaining\nYour Bihar STET paper directly says that separate chaining typically stores collided elements in Linked Lists.\n\nImagine locker 2 has a chain:"
              },
              {
                "type": "diagram",
                "content": "INDEX 2\n   ↓\n[42] → [52] → [62] → NULL"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "CHAINING = Linked List chain\n\nSo mentally:\nCOLLISION\n   ↓\nCHAIN\n   ↓\nLinked List\n\nThis is exactly the relationship you should remember for MCQs."
              },
              {
                "type": "text",
                "content": "Collision Solution 2 — Linear Probing\nYour STET paper also asks which method places a collided item into the next available empty slot.\n\nAnswer:\nLinear Probing\n\nExample:\n42 → index 2\n52 → also index 2 💥\n\nCheck next:\nindex 3\n\nIf empty:\n0 [   ]\n1 [   ]\n2 [42 ]\n3 [52 ]\n4 [   ]"
              },
              {
                "type": "diagram",
                "content": "White-paper trick\nLinear = move one-by-one\n\nCollision at 2\n      ↓\ncheck 3\n      ↓\ncheck 4\n      ↓\ncheck 5..."
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "STET Exam Frame",
                "content": "STET directly frames Linear Probing this way: collided elements go to the next available empty slot."
              },
              {
                "type": "diagram",
                "content": "Chaining vs Linear Probing\nMemorize this picture:\nCHAINING\n\nindex 2\n  ↓\n42 → 52 → 62\n\nversus:\nLINEAR PROBING\n\nindex 2 → 42\nindex 3 → 52\nindex 4 → 62"
              },
              {
                "type": "callout",
                "icon": "⚖️",
                "title": "So remember:",
                "content": "Chaining → same bucket, linked list\n\nLinear probing → next empty table slot"
              },
              {
                "type": "text",
                "content": "Quadratic Probing & Double Hashing\nFor today, only recognize the names.\nCollision Resolution:\n• Separate Chaining\n• Linear Probing\n• Quadratic Probing\n• Double Hashing\n\nDo not spend time deriving them today.\nYour uploaded STET paper specifically tests Separate Chaining and Linear Probing, so those two get priority."
              },
              {
                "type": "callout",
                "icon": "⚡",
                "title": "Standard CS extension — Complexity",
                "content": "A well-designed Hash Table typically aims for approximately:\nSearch    → O(1) average\nInsert    → O(1) average\nDelete    → O(1) average\n\nBut heavy collisions can reduce performance.\n\nWhite-paper memory:\nHashing = near-direct lookup\n\nFor TRE, the safer fact to memorize from the paper is:\nHash Table → efficient search + insertion + deletion"
              },
              {
                "type": "diagram",
                "content": "Heap vs BST vs Hash Table\nThis mental comparison is very useful:\nBST\n↓\nordered searching\nLEFT < ROOT < RIGHT\n\n\nHEAP\n↓\npriority\nMIN or MAX at root\n\n\nHASH TABLE\n↓\nkey → index\nfast lookup"
              },
              {
                "type": "callout",
                "icon": "🎯",
                "title": "Decision Rule for MCQs",
                "content": "If the MCQ says Priority Queue:\nThink Heap\n\nIf it says key mapped to index or efficient search/insert/delete:\nThink Hash Table"
              }
            ]
          }
        ]
      },
      {
        "partId": "d11-part-2",
        "title": "Part II — Indian National Movement",
        "sections": [
          {
            "title": "Timeline & Key Exam Facts",
            "blocks": [
              {
                "type": "text",
                "content": "Your TRE 2.0 paper contains a sequence of questions on 1857, Sannyasi rebellion, Swadeshi/Boycott, Gaya Congress 1922 and Bihar's role in the freedom movement.\n\nFor today, mentally draw a timeline:"
              },
              {
                "type": "diagram",
                "content": "1857\n  ↓\nFirst major revolt\n\n1885\n  ↓\nINC\n\n1905\n  ↓\nPartition of Bengal\n  ↓\nSwadeshi + Boycott\n\n1920\n  ↓\nNon-Cooperation\n\n1922\n  ↓\nGaya Congress Session\n\n1942\n  ↓\nQuit India\n\n1947\n  ↓\nIndependence"
              },
              {
                "type": "text",
                "content": "1857\nFor the specific TRE-style fact:\nV. D. Savarkar is associated with describing the 1857 revolt as the First War of Indian Independence."
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory:",
                "content": "1857\n ↓\nSavarkar\n ↓\nFirst War of Independence"
              },
              {
                "type": "text",
                "content": "1905 — Partition of Bengal\nThis is especially important.\n1905\n ↓\nPartition of Bengal\n ↓\nSwadeshi\n+\nBoycott\n\nYour TRE 2.0 paper asks when Swadeshi and Boycott were first adopted as forms of struggle, with Partition of Bengal among the options."
              },
              {
                "type": "callout",
                "icon": "🧠",
                "title": "Mental trick",
                "content": "Bengal cut → British goods cut\n\nSo:\nPartition\n   ↓\nProtest\n   ↓\nSwadeshi + Boycott"
              },
              {
                "type": "text",
                "content": "1922 — Gaya Session\nA useful TRE fact:\nChittaranjan Das (C. R. Das) presided over the Gaya Session of the Indian National Congress in 1922."
              },
              {
                "type": "diagram",
                "content": "Memory picture:\nGAYA 1922\n    ↓\n C. R. DAS\n\nKeep this as a direct factual pair."
              }
            ]
          }
        ]
      },
      {
        "partId": "d11-part-1",
        "title": "Part I — Hindi",
        "sections": [
          {
            "title": "विलोम + वाक्य शुद्धि",
            "blocks": [
              {
                "type": "text",
                "content": "विलोम\nMeaning:\nOpposite word\n\nआदि ↔ अंत\nलाभ ↔ हानि\nउन्नति ↔ अवनति\nआशा ↔ निराशा\nजय ↔ पराजय"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "White-paper memory:",
                "content": "विलोम = उल्टा अर्थ"
              },
              {
                "type": "text",
                "content": "वाक्य शुद्धि\nUse three quick checks:\nकर्ता\n  ↓\nक्रिया match?\n\nलिंग\n  ↓\ncorrect?\n\nवचन\n  ↓\nएकवचन / बहुवचन match?"
              },
              {
                "type": "diagram",
                "content": "Example:\nलड़के खेल रहा है। ❌\n\nलड़के = plural.\n\nSo:\nलड़के खेल रहे हैं। ✅"
              },
              {
                "type": "callout",
                "icon": "🧠",
                "title": "Mental trick:",
                "content": "Who? How many? Then choose the verb."
              }
            ]
          }
        ]
      },
      {
        "partId": "d11-part-recap",
        "title": "Day 11 Quick Recall",
        "sections": [
          {
            "title": "Mental White-Paper Review",
            "blocks": [
              {
                "type": "text",
                "content": "Close notes and mentally say:"
              },
              {
                "type": "diagram",
                "content": "HEAP\n\nMAX → biggest root\nMIN → smallest root\n\nPriority Queue → Binary Heap\n\n\nHASHING\n\nKey\n ↓\nHash Function\n ↓\nIndex\n\nTwo keys same index\n= COLLISION\n\nChaining\n→ Linked List\n\nLinear Probing\n→ Next empty slot\n\nAnd GS:\n1857 → Savarkar association\n1905 → Bengal Partition → Swadeshi/Boycott\n1922 → Gaya Session → C. R. Das"
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 11 Practice Test (18 Questions)",
      "subtitle": "12 CS (Heap, Hashing & Collisions) • 3 GS (Freedom Movement) • 3 Hindi (विलोम व वाक्य शुद्धि)",
      "timeLimit": "20–25 mins",
      "questions": [
        {
          "id": "m-d11-q1",
          "question": "Q1. In a Max Heap, the root normally contains:",
          "options": [
            "Smallest element",
            "Largest element",
            "Random element",
            "Last inserted element",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "In a Max Heap, every parent node is greater than or equal to its children, guaranteeing that the maximum (largest) value is stored at the root. Correct: (B) Largest element."
        },
        {
          "id": "m-d11-q2",
          "question": "Q2. In a Min Heap, the root normally contains:",
          "options": [
            "Largest element",
            "Smallest element",
            "Median element",
            "Random element",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "In a Min Heap, every parent node is less than or equal to its children, ensuring that the minimum (smallest) value is at the root. Correct: (B) Smallest element."
        },
        {
          "id": "m-d11-q3",
          "question": "Q3. Which data structure is best suited for implementing a Priority Queue?",
          "options": [
            "Stack",
            "Binary Heap",
            "Simple Array only",
            "Linked List only",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A Binary Heap provides efficient O(log n) insertions and priority deletions, making it the most suitable implementation for a Priority Queue (tested in TRE 2.0). Correct: (B) Binary Heap."
        },
        {
          "id": "m-d11-q4",
          "question": "Q4. A Hash Function primarily converts a key into:",
          "options": [
            "Tree",
            "Hash-table index",
            "Queue",
            "Compiler instruction",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A hash function takes a key and computes an integer index that points to an array slot in the hash table (Key → Hash Function → Index). Correct: (B) Hash-table index."
        },
        {
          "id": "m-d11-q5",
          "question": "Q5. When two different keys map to the same hash-table index, it is called:",
          "options": [
            "Recursion",
            "Collision",
            "Deadlock",
            "Underflow",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A collision occurs when a hash function generates the identical index for two distinct keys. Correct: (B) Collision."
        },
        {
          "id": "m-d11-q6",
          "question": "Q6. In Separate Chaining, collided elements are commonly stored using:",
          "options": [
            "Linked Lists",
            "Stacks",
            "Only Arrays",
            "Queues",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "In Separate Chaining, each slot in the hash table points to a Linked List holding all collided keys sharing that hash index (tested in STET). Correct: (A) Linked Lists."
        },
        {
          "id": "m-d11-q7",
          "question": "Q7. Linear Probing resolves a collision by:",
          "options": [
            "Deleting the collided key",
            "Checking the next available empty slot",
            "Creating another hash table immediately",
            "Sorting all keys",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Linear probing is an open-addressing technique that steps forward sequentially (index+1, index+2, ...) until the next empty bucket is found. Correct: (B) Checking the next available empty slot."
        },
        {
          "id": "m-d11-q8",
          "question": "Q8. If the hash function is h(key) = key % 10, where will key 47 be stored initially?",
          "options": [
            "Index 4",
            "Index 7",
            "Index 10",
            "Index 47",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "47 % 10 = 7. Thus, key 47 is placed at Index 7. Correct: (B) Index 7."
        },
        {
          "id": "m-d11-q9",
          "question": "Q9. Using h(key) = key % 10, which pair will cause a collision?",
          "options": [
            "21 and 32",
            "23 and 43",
            "11 and 24",
            "17 and 28",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "23 % 10 = 3 and 43 % 10 = 3. Since both keys produce the same remainder (3), they collide at index 3. Correct: (B) 23 and 43."
        },
        {
          "id": "m-d11-q10",
          "question": "Q10. Which structure follows the rule that a parent has priority over its children, rather than the BST rule Left < Root < Right?",
          "options": [
            "Heap",
            "Stack",
            "Queue",
            "Array",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "A Heap only requires a parent-child ordering relationship (Parent ≥ Child or Parent ≤ Child) and does not enforce left-to-right sorting like a BST. Correct: (A) Heap."
        },
        {
          "id": "m-d11-q11",
          "question": "Q11. Which data structure is most naturally associated with: Key → Hash Function → Index?",
          "options": [
            "Binary Search Tree",
            "Hash Table",
            "Stack",
            "Deque",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A Hash Table maps search keys to array buckets via a hash function for rapid O(1) average access. Correct: (B) Hash Table."
        },
        {
          "id": "m-d11-q12",
          "question": "Q12. Using % 10, keys 12, 22, and 32 all hash to index 2. With Separate Chaining, which representation is correct?",
          "options": [
            "Index 2 → 12 → 22 → 32",
            "All keys must be deleted",
            "Each key must become a tree root",
            "No collision occurs",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "In separate chaining, keys sharing the same index are linked together in a linked list attached to bucket 2: Index 2 → [12] → [22] → [32] → NULL. Correct: (A) Index 2 → 12 → 22 → 32."
        },
        {
          "id": "m-d11-q13",
          "question": "Q13. Who is associated with describing the Revolt of 1857 as the First War of Indian Independence?",
          "options": [
            "V. D. Savarkar",
            "Lord Curzon",
            "C. R. Das",
            "David Hare",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Vinayak Damodar Savarkar authored 'The Indian War of Independence 1857' and is historically associated with describing the 1857 revolt as the First War of Indian Independence. Correct: (A) V. D. Savarkar."
        },
        {
          "id": "m-d11-q14",
          "question": "Q14. The Swadeshi and Boycott movements are strongly associated with which event?",
          "options": [
            "Quit India Movement",
            "Partition of Bengal",
            "Home Rule Movement",
            "Non-Cooperation Movement",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "The Swadeshi and Boycott movements were first adopted as major weapons of struggle in 1905 in response to the Partition of Bengal by Lord Curzon (tested in TRE 2.0). Correct: (B) Partition of Bengal."
        },
        {
          "id": "m-d11-q15",
          "question": "Q15. Who presided over the Gaya Session of the Indian National Congress in 1922?",
          "options": [
            "Mahatma Gandhi",
            "C. R. Das",
            "Lord Curzon",
            "V. D. Savarkar",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Chittaranjan Das (C. R. Das) presided over the Gaya Session of the Indian National Congress in 1922. Correct: (B) C. R. Das."
        },
        {
          "id": "m-d11-q16",
          "question": "Q16. “लाभ” का विलोम शब्द है:",
          "options": [
            "आय",
            "हानि",
            "धन",
            "उन्नति",
            "इनमें से कोई नहीं"
          ],
          "correctAnswer": 1,
          "explanation": "'लाभ' का विलोम (उल्टा अर्थ) 'हानि' होता है। Correct: (B) हानि."
        },
        {
          "id": "m-d11-q17",
          "question": "Q17. “उन्नति” का विलोम शब्द है:",
          "options": [
            "प्रगति",
            "अवनति",
            "विकास",
            "सफलता",
            "इनमें से कोई नहीं"
          ],
          "correctAnswer": 1,
          "explanation": "'उन्नति' का विलोम शब्द 'अवनति' (पतन) होता है। Correct: (B) अवनति."
        },
        {
          "id": "m-d11-q18",
          "question": "Q18. शुद्ध वाक्य चुनिए:",
          "options": [
            "लड़के खेल रहा है।",
            "लड़के खेल रहे हैं।",
            "लड़के खेल रही है।",
            "लड़के खेलता हैं।",
            "इनमें से कोई नहीं"
          ],
          "correctAnswer": 1,
          "explanation": "'लड़के' बहुवचन पुल्लिंग संज्ञा है, अतः इसके साथ बहुवचन पुल्लिंग क्रिया 'खेल रहे हैं' प्रयुक्त होगी: 'लड़के खेल रहे हैं।' Correct: (B) लड़के खेल रहे हैं."
        }
      ]
    }
  },
  {
    "dayNumber": 12,
    "dayId": "day-12",
    "badge": "Day 12",
    "title": "TRE 4.0 — Day 12",
    "unit": "Part III (CS) • Graph, BFS/DFS & Spanning Tree • Champaran Satyagraha & Hindi",
    "targetTime": "25–30 mins read + 21 MCQs test",
    "summary": "Today we continue Data Structures & Algorithms with Graph: Vertices & Edges, Directed vs Undirected, In/Out-degree, BFS (Queue, level-by-level) vs DFS (Stack, deep-first), Adjacency Matrix & List, Spanning Tree (N-1 edges), Champaran Satyagraha (1917, Gandhiji, Rajendra Prasad), and Hindi पर्यायवाची + वाक्य शुद्धि.",
    "targets": [
      {
        "section": "Part III – Computer Science",
        "topic": "Graph, Directed/Undirected Graph, BFS, DFS, Spanning Tree",
        "goal": "V+E, In/Out-degree, BFS Queue, DFS Stack, Spanning Tree N-1 edges"
      },
      {
        "section": "Part II – GS",
        "topic": "Champaran Satyagraha + Bihar in National Movement",
        "goal": "1917 Champaran, Gandhiji, Rajendra Prasad support, Bihar timeline"
      },
      {
        "section": "Part I – Hindi",
        "topic": "पर्यायवाची + वाक्य शुद्धि",
        "goal": "जल/नीर, आकाश/नभ, कर्ता-वचन-क्रिया वाक्य शुद्धि"
      }
    ],
    "introNote": "Your STET paper directly asks which traversal is typically implemented using a Stack → DFS and how an edge from A to B is written in a directed graph. TRE 3.0 also directly asks the number of edges in a spanning tree with N vertices: N−1.     BPSC TRE2.0 question paper by c…\n\nThe BFS/Queue and adjacency-representation material below is a standard CS expansion of those paper topics.",
    "parts": [
      {
        "partId": "d12-part-3-graph",
        "title": "Part III — GRAPH",
        "sections": [
          {
            "title": "🧠 MENTAL PICTURE",
            "blocks": [
              {
                "type": "text",
                "content": "Imagine cities connected by roads:"
              },
              {
                "type": "diagram",
                "content": "      Delhi\n      /   \\\n   Patna  Jaipur\n     |\n Samastipur"
              },
              {
                "type": "text",
                "content": "Computer Science calls:\nCity  → Vertex / Node\nRoad  → Edge\n\nSo:\nGraph = Vertices + Edges"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "White-paper memory:",
                "content": "GRAPH\n  ↓\nV + E\n\nV = Vertices\nE = Edges"
              }
            ]
          },
          {
            "title": "1. Vertex and Edge & 2. Undirected Graph",
            "blocks": [
              {
                "type": "text",
                "content": "1. Vertex and Edge\nConsider:"
              },
              {
                "type": "diagram",
                "content": "A ----- B\n \\     /\n   \\ /\n    C\n\nVertices:\nA, B, C\n\nEdges:\nA-B\nA-C\nB-C"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory",
                "content": "Vertex = Point\n\nEdge = Connection"
              },
              {
                "type": "text",
                "content": "2. Undirected Graph\nImagine a two-way road:"
              },
              {
                "type": "diagram",
                "content": "A ←────→ B\n\nYou can travel:\nA → B\nB → A\n\nThis is an:\nUndirected Graph\n\nUsually represented conceptually as:\nA — B"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "No arrow = Undirected"
              }
            ]
          },
          {
            "title": "3. Directed Graph & Degrees",
            "blocks": [
              {
                "type": "text",
                "content": "3. Directed Graph\nNow imagine a one-way road:"
              },
              {
                "type": "diagram",
                "content": "A ─────► B\n\nYou can go:\nA → B\n\nbut not automatically:\nB → A\n\nThis is:\nDirected Graph / Digraph\n\nYour STET paper directly asks an edge pointing from A to B; its supplied answer notation is (A, B)."
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "White-paper memory",
                "content": "Arrow exists\n    ↓\nDIRECTED"
              },
              {
                "type": "text",
                "content": "4. Degree of a Vertex\nIn an undirected graph:\nDegree = number of edges connected to a vertex\n\nExample:"
              },
              {
                "type": "diagram",
                "content": "      B\n      |\nA ----C---- D\n\nVertex C has three connected edges.\n\nTherefore:\ndegree(C) = 3"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory",
                "content": "Degree = count the roads touching the city"
              },
              {
                "type": "text",
                "content": "5. Directed Graph: In-degree & Out-degree\nConsider:"
              },
              {
                "type": "diagram",
                "content": "A ──► B ──► C\n     ▲\n     |\n     D\n\nFor B:\n\nIncoming arrows:\nA → B\nD → B\n\nSo:\nIn-degree = 2\n\nOutgoing:\nB → C\n\nSo:\nOut-degree = 1"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "White-paper trick",
                "content": "Arrow ENTERS → IN-degree\nArrow LEAVES → OUT-degree"
              }
            ]
          },
          {
            "title": "6. Graph Traversal: 7. BFS & 8. DFS",
            "blocks": [
              {
                "type": "text",
                "content": "6. Graph Traversal\nTraversal means:\nVisit the vertices of the graph systematically.\n\nTwo big algorithms:\nGRAPH TRAVERSAL\n      │\n   ┌──┴──┐\n   ↓     ↓\n  BFS   DFS\n\nThese two must become automatic."
              },
              {
                "type": "text",
                "content": "7. BFS — Breadth First Search"
              },
              {
                "type": "diagram",
                "content": "🧠 Mental picture\nImagine dropping a stone in water:\n        START\n          ●\n       ↙  ↓  ↘\n      ●   ●   ●\n    next level...\n\nBFS explores:\nLevel by level\n\nSuppose:\n        A\n      /   \\\n     B     C\n    / \\     \\\n   D   E     F\n\nStarting from A, BFS:\nA\n↓\nB C\n↓\nD E F\n\nTraversal:\nA, B, C, D, E, F"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "BFS uses QUEUE",
                "content": "BFS\n ↓\nQUEUE\n ↓\nFIFO\n\nWhy?\nNodes discovered first are processed first.\n\nMemory trick:\nBFS = Broad first = Queue\n\nThink:\nBFS → BREADTH → LEVEL"
              },
              {
                "type": "text",
                "content": "8. DFS — Depth First Search\nNow imagine entering a maze.\n\nYou choose one road and keep going deeper:\nA\n|\nB\n|\nD\n\nOnly after reaching the end do you return.\n\nUsing:\n        A\n      /   \\\n     B     C\n    / \\\n   D   E\n\nOne possible DFS traversal:\nA → B → D → E → C\n\nExact order can depend on neighbor ordering."
              },
              {
                "type": "diagram",
                "content": "🧠 Mental picture\nGo DEEP\n   ↓\n   ↓\n   ↓\ndead end\n   ↑\ncome back"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "DFS uses STACK",
                "content": "This is directly tested in your STET paper:\nDFS → Stack\n\nIt may use:\nExplicit Stack\nor\nRecursion (which internally uses a call stack).\n\nMemory trick:\nDFS = Deep → Stack"
              },
              {
                "type": "callout",
                "icon": "🔥",
                "title": "BFS vs DFS Master Table",
                "content": "Full form: BFS = Breadth First Search | DFS = Depth First Search\nMovement: BFS = Level by level | DFS = Deep first\nMain structure: BFS = Queue | DFS = Stack\nMemory image: BFS = Water ripple | DFS = Maze\n\nBest white-paper line:\nBFS → QUEUE → WIDE\nDFS → STACK → DEEP"
              }
            ]
          },
          {
            "title": "9. Graph Representation, 10. Path, 11. Cycle & 12. Connected Graph",
            "blocks": [
              {
                "type": "text",
                "content": "9. Graph Representation\nStandard CS extension: two common representations are:\nAdjacency Matrix\nAdjacency List"
              },
              {
                "type": "diagram",
                "content": "Adjacency Matrix\nGraph:\nA ----- B\n|\nC\n\nMatrix:\n    A B C\n\nA   0 1 1\nB   1 0 0\nC   1 0 0\n\n1 means: edge exists.\n0 means: no edge."
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "Matrix = Table of 0 and 1"
              },
              {
                "type": "diagram",
                "content": "Adjacency List\nSame graph:\nA → B, C\nB → A\nC → A\n\nMental picture:\nA → B → C\nB → A\nC → A"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory",
                "content": "List stores each vertex's neighbours."
              },
              {
                "type": "text",
                "content": "10. Path & 11. Cycle & 12. Connected Graph"
              },
              {
                "type": "diagram",
                "content": "10. Path\nGraph:\nA ─ B ─ C ─ D\n\nA path from A to D:\nA → B → C → D\n\nMemory: Path = route between vertices\n\n\n11. Cycle\nSuppose:\nA → B\n↑   ↓\n└─ C\n\nYou can start at A and return to A:\nA → B → C → A\n\nThat's a: Cycle\n\nMemory: Cycle = come back to starting point\n\n\n12. Connected Graph\nIf every vertex can be reached from the others through some path:\nConnected Graph\n\nMental:\nA — B — C — D\n\nNo lonely vertex.\n\nCompare:\nA — B       C\n\nC is isolated.\nSo graph is disconnected."
              }
            ]
          },
          {
            "title": "13. Spanning Tree & Tree vs Graph",
            "blocks": [
              {
                "type": "text",
                "content": "13. Spanning Tree\nThis is directly important for TRE 3.0.\n\nImagine a connected graph:"
              },
              {
                "type": "diagram",
                "content": "A ----- B\n|\\     /|\n| \\   / |\n|  \\ /  |\nD ----- C\n\nThere are many extra roads.\n\nA spanning tree keeps enough edges to:\n1. connect all vertices\n2. contain no cycle\n\nExample:\nA ----- B\n|\nD ----- C\n\nAll four vertices remain connected, but unnecessary cycles are removed."
              },
              {
                "type": "callout",
                "icon": "⭐",
                "title": "Very important formula",
                "content": "For:\nN vertices\n\na spanning tree contains:\nN - 1 edges\n\nTRE 3.0 asks this exact fact.     BPSC TRE2.0 question paper by c…\n\nExamples:\n4 vertices → 3 edges\n5 vertices → 4 edges\n10 vertices → 9 edges"
              },
              {
                "type": "diagram",
                "content": "Memory trick\nSpanning Tree → Vertices minus ONE\n\nV\n↓\nV - 1 edges"
              },
              {
                "type": "text",
                "content": "Tree vs Graph\nYou've already studied Trees.\n\nConnect the concepts:"
              },
              {
                "type": "diagram",
                "content": "GRAPH\nmay contain cycles\nmay have many paths\n\nTREE\nconnected\nno cycle\n\nA tree with N nodes also has:\nN - 1 edges"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Mental sentence",
                "content": "Tree = connected graph without cycles"
              }
            ]
          },
          {
            "title": "Day 12 CS White-Paper Sheet",
            "blocks": [
              {
                "type": "diagram",
                "content": "Close your notes and mentally draw:\nGRAPH = V + E\n\nVertex = point\nEdge   = connection\n\nUNDIRECTED\nA — B\n\nDIRECTED\nA → B\n\nIN-degree  → arrows coming IN\nOUT-degree → arrows going OUT\n\n\nBFS\n→ level by level\n→ QUEUE\n\nDFS\n→ deep first\n→ STACK\n\n\nCycle\n→ return to start\n\nSpanning Tree\n→ all vertices\n→ no cycle\n→ N vertices = N-1 edges"
              }
            ]
          }
        ]
      },
      {
        "partId": "d12-part-2",
        "title": "Part II — Champaran + Bihar",
        "sections": [
          {
            "title": "Champaran Satyagraha & Bihar Timeline",
            "blocks": [
              {
                "type": "text",
                "content": "TRE 3.0 directly asks who supported Gandhi in the Champaran Satyagraha of 1917, with Rajendra Prasad among the choices.     BPSC TRE2.0 question paper by c…"
              },
              {
                "type": "diagram",
                "content": "🧠 Timeline\n1917\n  ↓\nCHAMPARAN SATYAGRAHA\n  ↓\nBihar\n  ↓\nFarmers / Indigo issue\n  ↓\nGandhiji"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Main memory pair",
                "content": "Champaran → 1917 → Bihar → Gandhi\n\nFor the TRE-paper association:\nRajendra Prasad supported Gandhi in Champaran.     BPSC TRE2.0 question paper by c…"
              },
              {
                "type": "text",
                "content": "Non-Cooperation and Bihar\nYour TRE 2.0 paper also asks who led peasants of Bihar during the Non-Cooperation Movement.     BPSC TRE3.0 question paper by c…\n\nFor exam preparation, keep this question in your PYQ notebook exactly as presented in the paper; we'll revisit Bihar movement leaders together in the dedicated history revision day rather than expanding beyond what this paper excerpt establishes."
              },
              {
                "type": "diagram",
                "content": "Quick National Movement Timeline\n1857 → Revolt\n\n1885 → INC\n\n1905 → Bengal Partition\n        ↓\n      Swadeshi/Boycott\n\n1917 → Champaran\n\n1920 → Non-Cooperation\n\n1930 → Civil Disobedience\n\n1942 → Quit India\n\n1947 → Independence"
              },
              {
                "type": "callout",
                "icon": "⭐",
                "title": "White-paper memory",
                "content": "05 Swadeshi → 17 Champaran → 20 Non-Cooperation → 42 Quit India"
              }
            ]
          }
        ]
      },
      {
        "partId": "d12-part-1",
        "title": "Part I — Hindi",
        "sections": [
          {
            "title": "पर्यायवाची + वाक्य शुद्धि",
            "blocks": [
              {
                "type": "text",
                "content": "Today we'll revise पर्यायवाची and वाक्य शुद्धि."
              },
              {
                "type": "diagram",
                "content": "पर्यायवाची\nSame meaning, different words.\nसूर्य → रवि, भानु, दिनकर\n\nजल → नीर\n\nआकाश → नभ\n\nअग्नि → अनल\n\nपक्षी → विहंग, खग\n\nMental:\nONE MEANING\n    ↓\nMANY WORDS\n    ↓\nपर्यायवाची"
              },
              {
                "type": "text",
                "content": "वाक्य शुद्धि\nCheck three things:\nकर्ता\n ↓\nवचन\n ↓\nक्रिया\n\nExample:\nलड़का खेल रहे हैं। ❌\nलड़का is singular.\nCorrect: लड़का खेल रहा है। ✅\n\nExample:\nलड़कियाँ पढ़ रहा है। ❌\nCorrect: लड़कियाँ पढ़ रही हैं। ✅"
              },
              {
                "type": "callout",
                "icon": "🧠",
                "title": "Memory trick:",
                "content": "कर्ता देखकर क्रिया चुनो।"
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 12 Practice Test (21 Questions)",
      "subtitle": "14 CS (Graph, BFS/DFS & Spanning Tree) • 4 GS (Champaran & Bihar) • 3 Hindi (पर्यायवाची व वाक्य शुद्धि)",
      "timeLimit": "25–30 mins",
      "questions": [
        {
          "id": "m-d12-q1",
          "question": "Q1. A graph is primarily made of:",
          "options": [
            "Arrays and stacks",
            "Vertices and edges",
            "Rows and columns only",
            "Keys and values only",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A graph is a non-linear data structure consisting of a finite set of vertices (nodes) and edges (lines connecting pairs of vertices): G = (V, E). Correct: (B) Vertices and edges."
        },
        {
          "id": "m-d12-q2",
          "question": "Q2. In a graph, a vertex represents:",
          "options": [
            "A connection",
            "A node/point",
            "A traversal algorithm",
            "A queue",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A vertex (or node) represents an individual entity or point in the graph network. Correct: (B) A node/point."
        },
        {
          "id": "m-d12-q3",
          "question": "Q3. Which graph has edges with direction?",
          "options": [
            "Undirected graph",
            "Directed graph",
            "Complete tree only",
            "Heap",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A directed graph (digraph) has ordered pairs of vertices represented with arrow directions indicating one-way paths. Correct: (B) Directed graph."
        },
        {
          "id": "m-d12-q4",
          "question": "Q4. The edge: A → B means:",
          "options": [
            "Direction from B to A",
            "Direction from A to B",
            "No direction",
            "A and B are disconnected",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "In directed graph notation, A → B (or the ordered pair (A, B)) denotes an edge directed from vertex A to vertex B. Correct: (B) Direction from A to B."
        },
        {
          "id": "m-d12-q5",
          "question": "Q5. In-degree of a vertex means:",
          "options": [
            "Number of outgoing arrows",
            "Number of incoming arrows",
            "Number of all graph vertices",
            "Number of cycles",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "In a directed graph, the in-degree of a vertex is the number of edges directed towards that vertex (incoming arrows). Correct: (B) Number of incoming arrows."
        },
        {
          "id": "m-d12-q6",
          "question": "Q6. BFS explores a graph mainly:",
          "options": [
            "Deepest path first",
            "Level by level",
            "Randomly",
            "By sorting vertices first",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Breadth-First Search (BFS) explores the graph layer by layer, visiting all immediate neighbors at the current distance level before moving to the next level. Correct: (B) Level by level."
        },
        {
          "id": "m-d12-q7",
          "question": "Q7. BFS is commonly implemented using:",
          "options": [
            "Stack",
            "Queue",
            "Heap only",
            "Hash Table",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "BFS relies on First-In, First-Out (FIFO) queue processing to explore vertices in increasing order of their distance from the start node. Correct: (B) Queue."
        },
        {
          "id": "m-d12-q8",
          "question": "Q8. DFS is typically associated with:",
          "options": [
            "Queue",
            "Stack",
            "Priority Queue",
            "Hash Table",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Depth-First Search (DFS) proceeds along a path until it reaches a dead-end and then backtracks (LIFO), which is implemented using a Stack (or call stack via recursion; directly tested in STET). Correct: (B) Stack."
        },
        {
          "id": "m-d12-q9",
          "question": "Q9. Which memory trick is correct?",
          "options": [
            "BFS → Stack, DFS → Queue",
            "BFS → Queue, DFS → Stack",
            "Both always use Heap",
            "Both always use Hash Table",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Core memory rule: BFS uses a Queue (wide/level-by-level), while DFS uses a Stack (deep/maze). Correct: (B) BFS → Queue, DFS → Stack."
        },
        {
          "id": "m-d12-q10",
          "question": "Q10. A route connecting vertices in a graph is called:",
          "options": [
            "Hash",
            "Path",
            "Heap",
            "Array",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A sequence of alternating vertices and edges that connects a starting vertex to an ending vertex is called a Path. Correct: (B) Path."
        },
        {
          "id": "m-d12-q11",
          "question": "Q11. A path that returns to its starting vertex forms a:",
          "options": [
            "Queue",
            "Cycle",
            "Heap",
            "Hash",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A path of positive length where the first and last vertices are identical is called a Cycle. Correct: (B) Cycle."
        },
        {
          "id": "m-d12-q12",
          "question": "Q12. A spanning tree of a graph with 8 vertices contains:",
          "options": [
            "8 edges",
            "7 edges",
            "9 edges",
            "16 edges",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A spanning tree of any connected graph with N vertices always contains exactly N - 1 edges: 8 - 1 = 7 edges. Correct: (B) 7 edges."
        },
        {
          "id": "m-d12-q13",
          "question": "Q13. A spanning tree must:",
          "options": [
            "Contain every possible edge",
            "Connect all vertices without cycles",
            "Always contain cycles",
            "Have N edges for N vertices",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A spanning tree is a connected, acyclic subgraph spanning all vertices of the graph. Correct: (B) Connect all vertices without cycles."
        },
        {
          "id": "m-d12-q14",
          "question": "Q14. An adjacency matrix mainly represents graph connections using:",
          "options": [
            "Only strings",
            "A table/matrix",
            "Stack frames",
            "CPU registers",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "An adjacency matrix is a 2D V × V grid/table where matrix[i][j] = 1 indicates an edge between vertex i and vertex j. Correct: (B) A table/matrix."
        },
        {
          "id": "m-d12-q15",
          "question": "Q15. Champaran Satyagraha took place in:",
          "options": [
            "1905",
            "1917",
            "1920",
            "1942",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "The historic Champaran Satyagraha occurred in 1917 in Bihar to oppose the oppressive European indigo tinkathia system. Correct: (B) 1917."
        },
        {
          "id": "m-d12-q16",
          "question": "Q16. Champaran Satyagraha is mainly associated with:",
          "options": [
            "Mahatma Gandhi",
            "Subhas Chandra Bose",
            "Bhagat Singh",
            "Lord Curzon",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Mahatma Gandhi arrived in Champaran, Bihar in 1917 at the invitation of Raj Kumar Shukla, marking his first major Satyagraha movement in India. Correct: (A) Mahatma Gandhi."
        },
        {
          "id": "m-d12-q17",
          "question": "Q17. According to the TRE 3.0 question, who supported Gandhiji during Champaran Satyagraha?",
          "options": [
            "Birsa Munda",
            "Rajendra Prasad",
            "Satya Narayan Sinha",
            "Lord Curzon",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Dr. Rajendra Prasad was among the prominent leaders who accompanied and supported Mahatma Gandhi during the 1917 Champaran Satyagraha inquiry (tested in TRE 3.0). Correct: (B) Rajendra Prasad."
        },
        {
          "id": "m-d12-q18",
          "question": "Q18. Which movement comes chronologically first?",
          "options": [
            "Quit India Movement",
            "Non-Cooperation Movement",
            "Champaran Satyagraha",
            "Civil Disobedience Movement",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "Timeline: Champaran Satyagraha (1917) → Non-Cooperation Movement (1920) → Civil Disobedience (1930) → Quit India (1942). Champaran occurred first. Correct: (C) Champaran Satyagraha."
        },
        {
          "id": "m-d12-q19",
          "question": "Q19. “जल” का पर्यायवाची है:",
          "options": [
            "अनल",
            "नीर",
            "नभ",
            "रवि",
            "इनमें से कोई नहीं"
          ],
          "correctAnswer": 1,
          "explanation": "जल का पर्यायवाची शब्द 'नीर' है। (अनल = आग, नभ = आकाश, रवि = सूर्य). Correct: (B) नीर."
        },
        {
          "id": "m-d12-q20",
          "question": "Q20. “आकाश” का पर्यायवाची है:",
          "options": [
            "नीर",
            "अनल",
            "नभ",
            "दिनकर",
            "इनमें से कोई नहीं"
          ],
          "correctAnswer": 2,
          "explanation": "आकाश का पर्यायवाची शब्द 'नभ' है। (नीर = जल, अनल = अग्नि, दिनकर = सूर्य). Correct: (C) नभ."
        },
        {
          "id": "m-d12-q21",
          "question": "Q21. शुद्ध वाक्य चुनिए:",
          "options": [
            "लड़कियाँ पढ़ रहा है।",
            "लड़कियाँ पढ़ रही हैं।",
            "लड़कियाँ पढ़ रहे है।",
            "लड़कियाँ पढ़ता हैं।",
            "इनमें से कोई नहीं"
          ],
          "correctAnswer": 1,
          "explanation": "कर्ता 'लड़कियाँ' स्त्रीलिंग बहुवचन है, अतः क्रिया भी स्त्रीलिंग बहुवचन 'पढ़ रही हैं' होगी: 'लड़कियाँ पढ़ रही हैं।' Correct: (B) लड़कियाँ पढ़ रही हैं."
        }
      ]
    }
  },
  {
    "dayNumber": 13,
    "dayId": "day-13",
    "badge": "Day 13",
    "title": "TRE 4.0 — Day 13",
    "unit": "Part III (CS) • Searching, Sorting & Big-O • Biology (Eye, Reproduction) & Articles",
    "targetTime": "25–30 mins read + 22 MCQs test",
    "summary": "Today we complete an important DSA block: Searching (Linear vs Binary Search), Sorting (Bubble, Selection, Insertion, Merge Sort), Big-O Notation & Complexity growth, Biology (Human Eye Retina, Reproductive System, Anther, Budding, Antacid), and English Articles (a, an, the).",
    "targets": [
      {
        "section": "Part III – CS",
        "topic": "Linear Search, Binary Search, Bubble, Selection, Insertion, Merge Sort, Big-O",
        "goal": "Linear O(n), Binary O(log n), Bubble/Selection/Insertion O(n²), Merge Sort Divide & Conquer O(n log n), Big-O upper bound"
      },
      {
        "section": "Part II – GS",
        "topic": "Biology: Human eye, reproduction, budding, antacid",
        "goal": "Retina screen, Vas deferens male, Anther pollen, Yeast budding, Antacid indigestion"
      },
      {
        "section": "Part I – English",
        "topic": "Articles: a, an, the",
        "goal": "Vowel sound 'an', consonant sound 'a', specific 'the'"
      }
    ],
    "introNote": "Your TRE 3.0 paper directly asks about Binary Search complexity, Big-O, Divide & Conquer, and Merge Sort.",
    "parts": [
      {
        "partId": "d13-part-3-searching",
        "title": "Part III — SEARCHING",
        "sections": [
          {
            "title": "1. Linear Search",
            "blocks": [
              {
                "type": "text",
                "content": "🧠 MENTAL PICTURE\nImagine looking for roll number 40:\n10   25   18   40   30\n↑\ncheck\n\n10   25   18   40   30\n     ↑\n    check\n\n10   25   18   40   30\n          ↑\n\n10   25   18   40   30\n               ↑\n              FOUND\n\nYou check elements one by one.\nLinear Search = Start → Check → Check → Check"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "LINEAR = LINE में चलते जाओ\n\nIt works even if the array is:\n40  10  70  25  5\n\nThat is:\nUnsorted data is okay."
              },
              {
                "type": "text",
                "content": "Time Complexity\nSuppose there are n elements.\n\nWorst case: target is last or absent.\n\nYou may check all:\nn elements\n\nSo:\nLinear Search = O(n)"
              },
              {
                "type": "diagram",
                "content": "White-paper memory\nLINEAR SEARCH\n     ↓\none by one\n     ↓\nO(n)"
              }
            ]
          },
          {
            "title": "2. Binary Search & Comparison",
            "blocks": [
              {
                "type": "text",
                "content": "This one is much faster, but has an important condition:\nData must be SORTED."
              },
              {
                "type": "diagram",
                "content": "🧠 Mental picture\nImagine finding page 700 in a 1000-page book.\n\nWould you start:\n1\n2\n3\n4\n5...\n\nNo.\n\nYou open approximately in the middle:\n1 ---------------- 500 ---------------- 1000\n\n700 > 500.\n\nThrow away the left half:\n500 ----------------------------- 1000\n\nAgain check middle.\n\nThat's Binary Search."
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "Binary Search = HALF, HALF, HALF"
              },
              {
                "type": "diagram",
                "content": "Binary Search Example\nFind 70:\n10  20  30  40  50  60  70  80\n\nMiddle:\n10 20 30 [40] 50 60 70 80\n\n70 > 40.\n\nIgnore left:\n50 60 [70] 80\n\nFound."
              },
              {
                "type": "diagram",
                "content": "Mental picture\n100 items\n   ↓ half\n50\n   ↓ half\n25\n   ↓ half\n12\n   ↓\n6\n   ↓\n3\n   ↓\n1\n\nThat's why:\nBinary Search = O(log n)"
              },
              {
                "type": "callout",
                "icon": "⚠️",
                "title": "Important TRE 3.0 trap",
                "content": "Your TRE 3.0 paper asks:\n“The order of the binary search algorithm is ____”\n\nbut its displayed options are:\nN\nN log n\nN²\nMore than one\nNone\n\nThe paper does not show log n among the first three choices.\n\nStandard Computer Science result is:\nBinary Search = O(log n)\n\nSo do not memorize O(n log n) from that question.\n\nWith those displayed options, O(log n) corresponds to None of the above."
              },
              {
                "type": "callout",
                "icon": "⚖️",
                "title": "Linear vs Binary Search",
                "content": "Linear Search: One by one | Sorted not required | O(n) | Slower for large data\nBinary Search: Divide into halves | Sorted required | O(log n) | Faster for sorted data\n\n🔥 Memory:\nLINEAR → LINE → O(n)\nBINARY → HALF → O(log n)"
              }
            ]
          }
        ]
      },
      {
        "partId": "d13-part-3-sorting",
        "title": "Part III — SORTING",
        "sections": [
          {
            "title": "3. Bubble, 4. Selection & 5. Insertion Sort",
            "blocks": [
              {
                "type": "text",
                "content": "Sorting means arranging:\n50 10 40 20 30\n\ninto:\n10 20 30 40 50\n\nToday remember four main algorithms:\nBubble\nSelection\nInsertion\nMerge"
              },
              {
                "type": "diagram",
                "content": "3. Bubble Sort\n🧠 Mental picture\nImagine the largest bubble floating to the end.\n\nStart:\n5  3  8  2\n\nCompare neighbours.\n\n5 and 3:\n3  5  8  2\n\nCompare 5 and 8:\n3  5  8  2\n\nCompare 8 and 2:\n3  5  2  8\n            ↑\n       biggest reaches end\n\nAfter first pass:\nLargest element reaches its correct end position."
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "Bubble = Compare NEIGHBOURS\n\nBubble Sort\n    ↓\ncompare adjacent\n    ↓\nswap\n\nTypically: O(n²)"
              },
              {
                "type": "diagram",
                "content": "4. Selection Sort\n🧠 MENTAL PICTURE\nImagine a teacher choosing the smallest student first.\n\nArray:\n50 20 40 10 30\n\nFind minimum:\n10\n\nPut it first:\n10 | 20 40 50 30\n\nNow choose minimum from remaining:\n20\n\nThen:\n10 20 | 40 50 30\n\nContinue."
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "Selection Sort = SELECT minimum\n\nWhite-paper:\nFind smallest → put first → repeat\n\nComplexity: O(n²)"
              },
              {
                "type": "diagram",
                "content": "5. Insertion Sort\n🧠 MENTAL PICTURE\nImagine arranging playing cards in your hand.\n\nYou already have:\n10 30\n\nNew card:\n20\n\nWhere should it go?\n10 20 30\n\nYou insert it into the correct position."
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "Insertion Sort = Playing Cards\n\nExample:\n5 | 3 4 1\nInsert 3: 3 5 | 4 1\nInsert 4: 3 4 5 | 1\nInsert 1: 1 3 4 5"
              },
              {
                "type": "callout",
                "icon": "🔥",
                "title": "Bubble vs Selection vs Insertion",
                "content": "BUBBLE → Compare neighbours\nSELECTION → Find minimum\nINSERTION → Insert into sorted portion (Cards)\n\nSay aloud:\nBubble = Neighbour\nSelection = Minimum\nInsertion = Cards"
              }
            ]
          },
          {
            "title": "6. Merge Sort & 7. Big-O Complexity",
            "blocks": [
              {
                "type": "text",
                "content": "This is especially important because both TRE 2.0 and TRE 3.0 directly connect it with Divide and Conquer. TRE 2.0 asks which listed algorithm is divide-and-conquer, with Merge Sort among the options; TRE 3.0 explicitly asks which paradigm Merge Sort belongs to."
              },
              {
                "type": "diagram",
                "content": "🧠 Mental picture\nStart:\n8  3  6  2\n\nDIVIDE\n8 3       6 2\n\nAgain:\n8   3     6   2\n\nCONQUER / sort small pieces\n3 8       2 6\n\nCOMBINE\n2 3 6 8\n\nSo:\n            8 3 6 2\n              ↓\n            DIVIDE\n          /         \\\n        8 3         6 2\n       /   \\       /   \\\n      8     3     6     2\n       \\   /       \\   /\n        3 8         2 6\n          \\         /\n           2 3 6 8"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Divide and Conquer",
                "content": "Three words:\nDIVIDE → CONQUER → COMBINE\n\nMerge Sort: Divide and Conquer\nThis relationship is directly tested in TRE 3.0.\n\nMerge Sort Complexity:\nStandard result: O(n log n)"
              },
              {
                "type": "text",
                "content": "7. Big-O Notation\nTRE 3.0 directly asks what Big-O represents; its option B says:\nupper bound of an algorithm's runtime."
              },
              {
                "type": "diagram",
                "content": "🧠 Mental picture\nThink of a speed-limit board:\nAlgorithm runtime\n       ↑\n   maximum growth\n       ↑\n      Big-O\n\nFor your exam:\nBig-O = Upper-bound growth"
              },
              {
                "type": "callout",
                "icon": "🔥",
                "title": "White-paper staircase",
                "content": "O(1) → O(log n) → O(n) → O(n log n) → O(n²) → O(2ⁿ)\n\nMemory sentence:\nConstant → Log → Linear → nLogn → Square"
              }
            ]
          },
          {
            "title": "Day 13 CS Master Sheet",
            "blocks": [
              {
                "type": "diagram",
                "content": "Close the notes and reproduce:\nSEARCH\n\nLinear\n→ one by one\n→ unsorted OK\n→ O(n)\n\nBinary\n→ sorted required\n→ half-half\n→ O(log n)\n\n\nSORT\n\nBubble\n→ neighbours\n\nSelection\n→ select minimum\n\nInsertion\n→ playing cards\n\nMerge\n→ divide & conquer\n→ O(n log n)\n\n\nBIG-O\n→ upper bound\n\nIf you can mentally see this page, the core concepts are ready."
              }
            ]
          }
        ]
      },
      {
        "partId": "d13-part-2",
        "title": "Part II — General Science: Biology",
        "sections": [
          {
            "title": "Human Eye, Reproduction, Budding & Antacids",
            "blocks": [
              {
                "type": "text",
                "content": "Your TRE 3.0 paper contains several straightforward biology/science questions together: human eye, reproductive system, anther, budding, and medicine for indigestion."
              },
              {
                "type": "diagram",
                "content": "1. Human Eye\nObject\n  ↓\nLight\n  ↓\nEye\n  ↓\nRETINA\n  ↓\nImage\n\nFor TRE: Image forms on Retina\nMemory: Retina = Eye's screen (Projector → Screen; Eye lens → Retina)"
              },
              {
                "type": "diagram",
                "content": "2. Female Reproductive System\nFemale:\nOvary\nUterus\nFallopian tube\n\nVas deferens belongs to the male reproductive system, not female.\n\nMemory:\nOVARY → female ✅\nUTERUS → female ✅\nVAS DEFERENS → male ✅\n\nTRE 3.0 directly asks which is not part of the female reproductive system."
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Flower & Plant Biology",
                "content": "3. Anther:\nSTAMEN → ANTHER → POLLEN GRAINS\nMemory trick: Anther → Pollen\n\n4. Budding:\nAsexual reproduction in Yeast.\nMemory: Yeast grows a Bud"
              },
              {
                "type": "callout",
                "icon": "💊",
                "title": "5. Indigestion",
                "content": "TRE asks which type of medicine is used for indigestion.\n\nAnswer concept: Antacid\nToo much stomach acid → ANTACID\nMemory trick: Acid problem → Anti-acid → Antacid"
              }
            ]
          }
        ]
      },
      {
        "partId": "d13-part-1",
        "title": "Part I — English Articles",
        "sections": [
          {
            "title": "Rules for a, an, and the",
            "blocks": [
              {
                "type": "text",
                "content": "TRE papers repeatedly test a, an, and the.\n\nA / AN:\nChoose according to sound, not merely spelling.\n\nan actress ✅\nan hour ✅\n\na university ✅\na European ✅\n\nWhy?\nhour → starts with vowel SOUND\nuniversity → starts with \"you\" SOUND"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Sound Rules",
                "content": "VOWEL SOUND     → AN\nCONSONANT SOUND → A"
              },
              {
                "type": "text",
                "content": "THE:\nUse the when talking about something specific/identified.\n\nExample:\nClose the door. (Specific known door)\n\nOr:\nAll the students... (A particular group of students)"
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 13 Practice Test (22 Questions)",
      "subtitle": "14 CS (Searching, Sorting & Big-O) • 5 GS (Biology) • 3 English (Articles)",
      "timeLimit": "25–30 mins",
      "questions": [
        {
          "id": "m-d13-q1",
          "question": "Q1. Linear Search normally checks elements:",
          "options": [
            "Randomly",
            "One by one",
            "Only from the middle",
            "Using a heap",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Linear Search sequentially checks each element in the array one by one from the first to the last. Correct: (B) One by one."
        },
        {
          "id": "m-d13-q2",
          "question": "Q2. Worst-case time complexity of Linear Search is:",
          "options": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "In the worst case, the target element is at the end of the array or not present at all, requiring n comparisons: O(n). Correct: (C) O(n)."
        },
        {
          "id": "m-d13-q3",
          "question": "Q3. Binary Search normally requires the data to be:",
          "options": [
            "Encrypted",
            "Sorted",
            "Reversed only",
            "Stored in a Stack",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Binary Search relies on comparing the key against the middle element to discard half of the array, which strictly requires the data to be Sorted. Correct: (B) Sorted."
        },
        {
          "id": "m-d13-q4",
          "question": "Q4. Standard time complexity of Binary Search is:",
          "options": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Since the search space is divided by 2 in each comparison, the time complexity of Binary Search is O(log n). (Note: in TRE 3.0 question where log n was omitted from choices, 'None of the above' is the correct answer). Correct: (B) O(log n)."
        },
        {
          "id": "m-d13-q5",
          "question": "Q5. Which search repeatedly reduces the search space approximately by half?",
          "options": [
            "Linear Search",
            "Binary Search",
            "DFS",
            "BFS",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Binary Search compares the target with the middle element and cuts the remaining candidate list in half at each step. Correct: (B) Binary Search."
        },
        {
          "id": "m-d13-q6",
          "question": "Q6. Bubble Sort primarily compares:",
          "options": [
            "Adjacent elements",
            "Only first and last elements",
            "Tree roots",
            "Hash keys",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Bubble Sort repeatedly steps through the list, compares adjacent (neighboring) elements, and swaps them if they are in the wrong order. Correct: (A) Adjacent elements."
        },
        {
          "id": "m-d13-q7",
          "question": "Q7. Which memory sentence best describes Selection Sort?",
          "options": [
            "Divide into halves",
            "Select the smallest and place it correctly",
            "Visit vertices level by level",
            "Follow links",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Selection Sort works by finding (selecting) the minimum element from the unsorted subarray and moving it to the beginning. Correct: (B) Select the smallest and place it correctly."
        },
        {
          "id": "m-d13-q8",
          "question": "Q8. Which algorithm is easiest to visualize as arranging playing cards in your hand?",
          "options": [
            "Bubble Sort",
            "Merge Sort",
            "Insertion Sort",
            "Heap Sort",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "Insertion Sort builds a sorted list element by element, exactly like arranging playing cards in a hand by inserting each card into its proper position. Correct: (C) Insertion Sort."
        },
        {
          "id": "m-d13-q9",
          "question": "Q9. Merge Sort follows which design paradigm?",
          "options": [
            "Greedy",
            "Divide and Conquer",
            "Only Dynamic Programming",
            "Brute Force only",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Merge Sort recursively divides the array into halves, sorts them, and merges the sorted halves, exemplifying the Divide and Conquer paradigm (tested in TRE 2.0 & TRE 3.0). Correct: (B) Divide and Conquer."
        },
        {
          "id": "m-d13-q10",
          "question": "Q10. Typical time complexity of Merge Sort is:",
          "options": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)",
            "None of the above"
          ],
          "correctAnswer": 3,
          "explanation": "Merge Sort has a consistent time complexity of O(n log n) in best, average, and worst cases because it divides in log n levels and takes O(n) work per level. Correct: (D) O(n log n)."
        },
        {
          "id": "m-d13-q11",
          "question": "Q11. According to the TRE 3.0 question, Big-O represents:",
          "options": [
            "Lower bound",
            "Upper bound",
            "Only exact runtime",
            "Only average runtime",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Big-O notation describes the asymptotic upper bound on the growth rate of an algorithm's running time (tested in TRE 3.0). Correct: (B) Upper bound."
        },
        {
          "id": "m-d13-q12",
          "question": "Q12. Which order is correct from generally better growth to worse growth?",
          "options": [
            "O(n²) → O(n) → O(log n)",
            "O(1) → O(log n) → O(n)",
            "O(n) → O(1) → O(log n)",
            "O(n log n) → O(1) → O(n)",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "The hierarchy from best (fastest) to worse (slower) is: O(1) < O(log n) < O(n) < O(n log n) < O(n²). Correct: (B) O(1) → O(log n) → O(n)."
        },
        {
          "id": "m-d13-q13",
          "question": "Q13. Which algorithm can search an unsorted list directly without first sorting it?",
          "options": [
            "Binary Search",
            "Linear Search",
            "Merge Sort",
            "Heap Sort",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Linear Search inspects elements sequentially one by one and does not require the input array to be pre-sorted. Correct: (B) Linear Search."
        },
        {
          "id": "m-d13-q14",
          "question": "Q14. Which pair is correctly matched?",
          "options": [
            "Binary Search → O(n²)",
            "Linear Search → O(log n)",
            "Merge Sort → O(n log n)",
            "Selection Sort → O(log n)",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "Merge Sort is correctly matched with O(n log n). Linear Search is O(n), Binary Search is O(log n), and Selection Sort is O(n²). Correct: (C) Merge Sort → O(n log n)."
        },
        {
          "id": "m-d13-q15",
          "question": "Q15. The image in the human eye is formed on the:",
          "options": [
            "Cornea",
            "Iris",
            "Retina",
            "Pupil",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "The eye lens focuses light onto the Retina, the light-sensitive sensory membrane at the back of the eyeball. Correct: (C) Retina."
        },
        {
          "id": "m-d13-q16",
          "question": "Q16. Which is not part of the female reproductive system?",
          "options": [
            "Ovary",
            "Uterus",
            "Vas deferens",
            "Fallopian tube",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "The vas deferens is an excretory duct of the male reproductive system that carries sperm from the testes (tested in TRE 3.0). Correct: (C) Vas deferens."
        },
        {
          "id": "m-d13-q17",
          "question": "Q17. Anther contains:",
          "options": [
            "Pollen grains",
            "Roots",
            "Seeds only",
            "Sepals",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "The anther is the pollen-bearing portion of the stamen (male floral organ) in plants. Correct: (A) Pollen grains."
        },
        {
          "id": "m-d13-q18",
          "question": "Q18. Budding commonly occurs in:",
          "options": [
            "Amoeba",
            "Yeast",
            "Plasmodium",
            "Virus",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Yeast (and Hydra) reproduce asexually through the process of budding (tested in TRE 3.0). Correct: (B) Yeast."
        },
        {
          "id": "m-d13-q19",
          "question": "Q19. Which medicine is commonly used to neutralize excess stomach acid in indigestion?",
          "options": [
            "Antibiotic",
            "Antacid",
            "Analgesic",
            "Vaccine",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Antacids (basic compounds like Mg(OH)₂ or Al(OH)₃) neutralize excess hydrochloric acid in the stomach to alleviate indigestion (tested in TRE 3.0). Correct: (B) Antacid."
        },
        {
          "id": "m-d13-q20",
          "question": "Q20. Choose the correct article: “She is ___ actress.”",
          "options": [
            "a",
            "an",
            "the",
            "no article",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "'actress' begins with a vowel sound (/æ/), which requires the article 'an'. Correct: (B) an."
        },
        {
          "id": "m-d13-q21",
          "question": "Q21. Choose the correct phrase:",
          "options": [
            "an university",
            "a university",
            "an European",
            "a hour",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "'university' begins with a consonant glide sound /juː/, requiring 'a' ('a university'). 'European' also begins with /juː/ and requires 'a'. 'hour' begins with a vowel sound and requires 'an'. Correct: (B) a university."
        },
        {
          "id": "m-d13-q22",
          "question": "Q22. Choose the correct phrase:",
          "options": [
            "a honest man",
            "an honest man",
            "the honest man in every situation",
            "an university student",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "'honest' starts with a silent 'h' and a vowel sound /ɒ/, requiring the indefinite article 'an': 'an honest man'. Correct: (B) an honest man."
        }
      ]
    }
  },
  {
    "dayNumber": 14,
    "dayId": "day-14",
    "badge": "Day 14",
    "title": "TRE 4.0 — Day 14",
    "unit": "Part III (CS) • DSA Weekly Revision + 50-Question Master Test (Days 8–13)",
    "targetTime": "25–30 mins recall + 45–50 mins test",
    "summary": "Today we do not start a new major CS topic. The goal is to verify whether Days 8–13 are actually stored in memory: Array, Linked List, Stack, Queue, Binary Tree, BST, Heap, Hash Table, Graph, Searching, Sorting & Big-O Complexity.",
    "targets": [
      {
        "section": "Step 1 — Recall",
        "topic": "10-Minute White-Paper Mental Map",
        "goal": "Reconstruct Array, Linked List, Stack, Queue, Tree/BST, Heap, Hashing, Graph, Searching, Sorting & Big-O"
      },
      {
        "section": "Part III — CS (DSA Block)",
        "topic": "50-Question Master Revision Test",
        "goal": "Score 40+/50 across Sections A to I without consulting notes"
      }
    ],
    "introNote": "Today we do not start a new major CS topic. The goal is to verify whether Days 8–13 are actually stored in memory.\n\nYour uploaded TRE 2.0 paper heavily tests Stack, Queue, Circular Queue, Binary Tree, Priority Queue/Binary Heap, recursion, Deque and Merge Sort. TRE 3.0 adds BST, traversal, Binary Search, Big-O, Merge Sort and Spanning Tree questions. Your STET paper also directly tests DFS → Stack, directed graphs and hashing/collision handling.",
    "parts": [
      {
        "partId": "part-d14-recall",
        "title": "🧠 10-Minute White-Paper Recall",
        "sections": [
          {
            "title": "Days 8–13 Master White-Paper Recall",
            "blocks": [
              {
                "type": "text",
                "content": "Before the test, close your notes and mentally reproduce the complete DSA landscape from Days 8 to 13:"
              },
              {
                "type": "diagram",
                "content": "ARRAY\n→ contiguous/indexed\n→ direct access\n\nLINKED LIST\n→ Data + Link\n→ HEAD\n→ NULL\n\n\nSTACK\n→ LIFO\n→ PUSH / POP\n→ Recursion\n→ Expression conversion\n\n\nQUEUE\n→ FIFO\n→ ENQUEUE at REAR\n→ DEQUEUE from FRONT\n\nCircular Queue\n→ Ring Buffer\n\nPriority Queue\n→ Binary Heap"
              },
              {
                "type": "diagram",
                "content": "TREE\n→ Parent / Child\n\nBinary Tree\n→ max 2 children\n\nBST\n→ LEFT < ROOT < RIGHT\n\nPRE   → NLR\nIN    → LNR\nPOST  → LRN\n\nBST Inorder\n→ sorted"
              },
              {
                "type": "diagram",
                "content": "MAX HEAP\n→ biggest at root\n\nMIN HEAP\n→ smallest at root\n\n\nHASH\nKey → Hash Function → Index\n\nCollision\n→ two keys same index\n\nChaining\n→ Linked List\n\nLinear Probing\n→ next empty slot"
              },
              {
                "type": "diagram",
                "content": "GRAPH\n→ Vertices + Edges\n\nBFS → Queue\nDFS → Stack\n\nSpanning Tree\n→ N vertices\n→ N - 1 edges\n\n\nSEARCH\nLinear → O(n)\nBinary → O(log n)\n\nSORT\nBubble    → neighbours\nSelection → minimum\nInsertion → cards\nMerge     → Divide & Conquer\n\nBig-O\n→ upper bound"
              },
              {
                "type": "callout",
                "icon": "🔥",
                "title": "Self-Check Benchmark",
                "content": "If you can reconstruct around 80% without looking, your DSA foundation is moving well."
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 14 — 50 Question Test",
      "subtitle": "Rules: No notes. Try to finish in 45–50 minutes.",
      "questions": [
        {
          "id": "m-d14-q1",
          "question": "Q1. Which best describes an Array?",
          "options": [
            "Elements connected only by pointers",
            "Indexed collection of elements",
            "Always a non-linear structure",
            "Always follows FIFO",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "An array is a linear data structure containing contiguous memory elements accessed by numerical indices. Correct: (B) Indexed collection of elements."
        },
        {
          "id": "m-d14-q2",
          "question": "Q2. In a zero-indexed Array, the fifth element is normally:",
          "options": [
            "a[5]",
            "a[4]",
            "a[3]",
            "a[6]",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "In zero-based indexing: 1st is a[0], 2nd is a[1], 3rd is a[2], 4th is a[3], and 5th is a[4]. Correct: (B) a[4]."
        },
        {
          "id": "m-d14-q3",
          "question": "Q3. A major advantage of an Array is:",
          "options": [
            "Random access using index",
            "LIFO operation",
            "Automatic priority ordering",
            "No memory usage",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Arrays provide O(1) constant-time random direct access using mathematical index offsets (Base + i * element_size). Correct: (A) Random access using index."
        },
        {
          "id": "m-d14-q4",
          "question": "Q4. A node in a Singly Linked List normally contains:",
          "options": [
            "Only data",
            "Data and next link",
            "Front and rear",
            "Key and hash function only",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A singly linked list node contains two fields: Data (the value) and Next (pointer/link to next node). Correct: (B) Data and next link."
        },
        {
          "id": "m-d14-q5",
          "question": "Q5. The final node of a normal Singly Linked List generally points to:",
          "options": [
            "HEAD",
            "ROOT",
            "NULL",
            "FRONT",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "The next pointer of the terminal node is set to NULL to indicate the end of the list. Correct: (C) NULL."
        },
        {
          "id": "m-d14-q6",
          "question": "Q6. Stack follows:",
          "options": [
            "FIFO",
            "LIFO",
            "Priority order",
            "Random order",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Stack operates on Last-In, First-Out (LIFO) order. Correct: (B) LIFO."
        },
        {
          "id": "m-d14-q7",
          "question": "Q7. Adding an element to a Stack is called:",
          "options": [
            "Pop",
            "Push",
            "Dequeue",
            "Traverse",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "PUSH inserts an element onto the top of the stack. Pop removes it. Correct: (B) Push."
        },
        {
          "id": "m-d14-q8",
          "question": "Q8. Removing an element from an empty Stack causes:",
          "options": [
            "Overflow",
            "Underflow",
            "Collision",
            "Deadlock",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Attempting to pop from an empty stack (Top == -1) causes an Underflow condition. Correct: (B) Underflow."
        },
        {
          "id": "m-d14-q9",
          "question": "Q9. Which data structure is normally used for recursion?",
          "options": [
            "Queue",
            "Stack",
            "Heap",
            "Graph",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "The Call Stack stores activation records (return addresses, parameters, local variables) during recursive function calls. Correct: (B) Stack."
        },
        {
          "id": "m-d14-q10",
          "question": "Q10. Which data structure is commonly used to convert infix expressions to prefix/postfix?",
          "options": [
            "Stack",
            "Queue",
            "Hash Table",
            "Heap",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Stacks are used to manage operator precedence and parentheses during infix-to-postfix and infix-to-prefix conversions. Correct: (A) Stack."
        },
        {
          "id": "m-d14-q11",
          "question": "Q11. Prefix form of:\n\nA+B\n\nis:",
          "options": [
            "AB+",
            "+AB",
            "A+B",
            "BA+",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "In prefix (Polish notation), the operator precedes the operands: +AB. Correct: (B) +AB."
        },
        {
          "id": "m-d14-q12",
          "question": "Q12. Prefix form of:\n\nA+B*C\n\nis:",
          "options": [
            "ABC*+",
            "+A*BC",
            "*+ABC",
            "AB+C*",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Multiplication has higher precedence: (B*C) becomes *BC. Then addition: A + (*BC) becomes +A*BC. Correct: (B) +A*BC."
        },
        {
          "id": "m-d14-q13",
          "question": "Q13. Queue follows:",
          "options": [
            "LIFO",
            "FIFO",
            "FILO only",
            "Random order",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Queue is a First-In, First-Out (FIFO) data structure. Correct: (B) FIFO."
        },
        {
          "id": "m-d14-q14",
          "question": "Q14. Insertion in a normal Queue takes place at:",
          "options": [
            "Front",
            "Rear",
            "Middle",
            "Top",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Enqueue (insertion) occurs at the REAR end of the queue. Correct: (B) Rear."
        },
        {
          "id": "m-d14-q15",
          "question": "Q15. Deletion from a normal Queue takes place at:",
          "options": [
            "Rear",
            "Front",
            "Middle",
            "Top",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Dequeue (deletion) occurs at the FRONT end of the queue. Correct: (B) Front."
        },
        {
          "id": "m-d14-q16",
          "question": "Q16. Another name for Circular Queue is:",
          "options": [
            "Tree Buffer",
            "Ring Buffer",
            "Linear Stack",
            "Heap Buffer",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A circular queue is also known as a Ring Buffer because the end wraps around to the beginning. Correct: (B) Ring Buffer."
        },
        {
          "id": "m-d14-q17",
          "question": "Q17. The main reason for using a Circular Queue is to:",
          "options": [
            "Convert FIFO into LIFO",
            "Reuse freed positions efficiently",
            "Remove the need for a rear pointer",
            "Sort the Queue automatically",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "In a linear array queue, empty front slots left after dequeue cannot be reused without expensive shifts; a circular queue reuses freed positions using modulo wrap-around. Correct: (B) Reuse freed positions efficiently."
        },
        {
          "id": "m-d14-q18",
          "question": "Q18. A Deque allows:",
          "options": [
            "Operations only at Front",
            "Operations only at Rear",
            "Insertion/deletion at both ends",
            "Only Stack operations",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "A Deque (Double-Ended Queue) allows insertions and deletions at both Front and Rear ends. Correct: (C) Insertion/deletion at both ends."
        },
        {
          "id": "m-d14-q19",
          "question": "Q19. Which structure is strongly associated with implementing a Priority Queue?",
          "options": [
            "Binary Heap",
            "Stack",
            "Circular Linked List only",
            "Simple Queue only",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "A Binary Heap provides O(log n) insertion and extraction of highest/lowest priority elements, making it the canonical implementation for Priority Queues. Correct: (A) Binary Heap."
        },
        {
          "id": "m-d14-q20",
          "question": "Q20. The topmost node in a Tree is:",
          "options": [
            "Leaf",
            "Root",
            "Child",
            "Edge",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "The topmost entry node with no parent is the Root. Correct: (B) Root."
        },
        {
          "id": "m-d14-q21",
          "question": "Q21. A node having no children is called:",
          "options": [
            "Root",
            "Leaf",
            "Parent",
            "Sibling",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A node with degree 0 (no children) is called a Leaf or terminal node. Correct: (B) Leaf."
        },
        {
          "id": "m-d14-q22",
          "question": "Q22. A Binary Tree node can have at most:",
          "options": [
            "1 child",
            "2 children",
            "3 children",
            "4 children",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "In a binary tree, every node has at most 2 children (Left child and Right child). Correct: (B) 2 children."
        },
        {
          "id": "m-d14-q23",
          "question": "Q23. In a BST, values smaller than the root normally go to:",
          "options": [
            "Right subtree",
            "Left subtree",
            "Either side randomly",
            "Root only",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "BST Rule: Left Subtree < Root < Right Subtree. Keys smaller than root belong to the Left subtree. Correct: (B) Left subtree."
        },
        {
          "id": "m-d14-q24",
          "question": "Q24. Values greater than a BST node normally belong to:",
          "options": [
            "Left subtree",
            "Right subtree",
            "Both necessarily",
            "Neither",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "All keys strictly greater than a node belong to its Right subtree. Correct: (B) Right subtree."
        },
        {
          "id": "m-d14-q25",
          "question": "Q25. Preorder traversal is:",
          "options": [
            "LNR",
            "LRN",
            "NLR",
            "RNL",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "Preorder traversal visits Node -> Left -> Right (NLR). Correct: (C) NLR."
        },
        {
          "id": "m-d14-q26",
          "question": "Q26. Inorder traversal is:",
          "options": [
            "NLR",
            "LNR",
            "LRN",
            "RNL",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Inorder traversal visits Left -> Node -> Right (LNR). Correct: (B) LNR."
        },
        {
          "id": "m-d14-q27",
          "question": "Q27. Postorder traversal is:",
          "options": [
            "NLR",
            "LNR",
            "LRN",
            "NRL",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "Postorder traversal visits Left -> Right -> Node (LRN). Correct: (C) LRN."
        },
        {
          "id": "m-d14-q28",
          "question": "Use this BST:\n        20\n       /  \\\n     10    30\n    / \\    / \\\n   5  15  25 35\n\nQ28. Its Inorder traversal is:",
          "options": [
            "20,10,5,15,30,25,35",
            "5,10,15,20,25,30,35",
            "5,15,10,25,35,30,20",
            "35,30,25,20,15,10,5",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Inorder traversal (Left, Node, Right) of any valid BST always yields values in strictly ascending sorted order: 5, 10, 15, 20, 25, 30, 35. Correct: (B) 5,10,15,20,25,30,35."
        },
        {
          "id": "m-d14-q29",
          "question": "Q29. The number of distinct BSTs possible using 4 distinct keys is:",
          "options": [
            "4",
            "8",
            "14",
            "24",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "Given by the 4th Catalan number: C_4 = (1/5) * (8! / (4! * 4!)) = (1/5) * 70 = 14. Correct: (C) 14."
        },
        {
          "id": "m-d14-q30",
          "question": "Q30. In a Max Heap, the root contains:",
          "options": [
            "Smallest value",
            "Largest value",
            "Median value",
            "Random value",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "In a Max Heap, every parent is greater than or equal to its children, ensuring the Root contains the largest value. Correct: (B) Largest value."
        },
        {
          "id": "m-d14-q31",
          "question": "Q31. In a Min Heap, the root contains:",
          "options": [
            "Largest value",
            "Smallest value",
            "Last inserted value always",
            "Average value",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "In a Min Heap, every parent is less than or equal to its children, ensuring the Root contains the smallest value. Correct: (B) Smallest value."
        },
        {
          "id": "m-d14-q32",
          "question": "Q32. Which statement best distinguishes Heap from BST?",
          "options": [
            "Heap requires Left < Root < Right",
            "Heap primarily enforces parent-child priority",
            "Heap cannot be a binary structure",
            "BST always stores the largest value at root",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A Heap enforces a vertical parent-child ordering relationship without horizontal ordering between siblings. A BST enforces total horizontal ordering (Left < Root < Right). Correct: (B) Heap primarily enforces parent-child priority."
        },
        {
          "id": "m-d14-q33",
          "question": "Q33. A Hash Function primarily converts:",
          "options": [
            "Key → Index",
            "Index → Stack",
            "Queue → Tree",
            "Heap → Graph",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "A hash function maps a search Key into an array Index: key → hash(key) → index. Correct: (A) Key → Index."
        },
        {
          "id": "m-d14-q34",
          "question": "Q34. When two keys map to the same Hash Table index, this is called:",
          "options": [
            "Overflow",
            "Collision",
            "Underflow",
            "Traversal",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A collision occurs when two distinct keys yield the exact same table slot: h(k1) == h(k2). Correct: (B) Collision."
        },
        {
          "id": "m-d14-q35",
          "question": "Q35. Separate Chaining normally resolves collisions using:",
          "options": [
            "Linked Lists",
            "Only Stacks",
            "Only Queues",
            "Registers",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Separate Chaining maintains a Linked List at each bucket index to store all colliding keys. Correct: (A) Linked Lists."
        },
        {
          "id": "m-d14-q36",
          "question": "Q36. Linear Probing handles collision by:",
          "options": [
            "Deleting the key",
            "Checking subsequent available slots",
            "Creating a Tree immediately",
            "Sorting the keys first",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "In open addressing with Linear Probing, collisions are resolved by sequentially checking subsequent table slots: (h(k) + i) % m until an empty slot is located. Correct: (B) Checking subsequent available slots."
        },
        {
          "id": "m-d14-q37",
          "question": "Q37. Using:\n\nh(key) = key % 10\n\nkey 52 maps initially to:",
          "options": [
            "Index 0",
            "Index 2",
            "Index 5",
            "Index 52",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "h(52) = 52 % 10 = 2. It maps initially to Index 2. Correct: (B) Index 2."
        },
        {
          "id": "m-d14-q38",
          "question": "Q38. Using the same function, which pair collides?",
          "options": [
            "21 and 42",
            "23 and 53",
            "11 and 24",
            "17 and 28",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "23 % 10 = 3 and 53 % 10 = 3. Both keys map to the same index 3, causing a collision. Correct: (B) 23 and 53."
        },
        {
          "id": "m-d14-q39",
          "question": "Q39. A Graph consists mainly of:",
          "options": [
            "Vertices and edges",
            "Front and rear",
            "Push and Pop",
            "Rows only",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "A Graph G = (V, E) is defined by a set of Vertices (nodes) and Edges (connecting lines). Correct: (A) Vertices and edges."
        },
        {
          "id": "m-d14-q40",
          "question": "Q40. Which traversal is typically associated with a Queue?",
          "options": [
            "DFS",
            "BFS",
            "Inorder",
            "Postorder",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Breadth-First Search (BFS) traverses nodes level by level using a FIFO Queue. Correct: (B) BFS."
        },
        {
          "id": "m-d14-q41",
          "question": "Q41. Which traversal is typically associated with a Stack?",
          "options": [
            "BFS",
            "DFS",
            "Level-order only",
            "Hashing",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Depth-First Search (DFS) traverses deeply along each branch using a LIFO Stack (or recursion). Correct: (B) DFS."
        },
        {
          "id": "m-d14-q42",
          "question": "Q42. A Spanning Tree of a graph with 10 vertices contains:",
          "options": [
            "10 edges",
            "9 edges",
            "11 edges",
            "20 edges",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A spanning tree on N connected vertices always contains exactly N - 1 edges without cycles. 10 - 1 = 9 edges. Correct: (B) 9 edges."
        },
        {
          "id": "m-d14-q43",
          "question": "Q43. A Tree can be described as a connected graph having:",
          "options": [
            "Many mandatory cycles",
            "No cycles",
            "No vertices",
            "Only one node always",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "By definition, a tree is a connected, acyclic (no cycles) undirected graph. Correct: (B) No cycles."
        },
        {
          "id": "m-d14-q44",
          "question": "Q44. Linear Search normally has worst-case complexity:",
          "options": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "In the worst case (target at end or absent), Linear Search compares all n elements: O(n). Correct: (C) O(n)."
        },
        {
          "id": "m-d14-q45",
          "question": "Q45. Binary Search normally requires:",
          "options": [
            "Unsorted data",
            "Sorted data",
            "A Stack",
            "A Hash collision",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Binary Search requires the array to be in Sorted order to discard half the search space at each comparison. Correct: (B) Sorted data."
        },
        {
          "id": "m-d14-q46",
          "question": "Q46. Standard Binary Search complexity is:\n\n(Exam trap: TRE 3.0 paper's displayed choices omitted O(log n); the standard result remains O(log n))",
          "options": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Binary Search halves the search space at each step, yielding O(log n) time complexity. (In TRE 3.0 where log n was omitted from choices, 'None of the above' was correct). Correct: (B) O(log n)."
        },
        {
          "id": "m-d14-q47",
          "question": "Q47. Which algorithm mainly compares neighbouring elements repeatedly?",
          "options": [
            "Selection Sort",
            "Bubble Sort",
            "Binary Search",
            "DFS",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Bubble Sort repeatedly compares adjacent elements and swaps them if out of order. Correct: (B) Bubble Sort."
        },
        {
          "id": "m-d14-q48",
          "question": "Q48. Which algorithm is best remembered as:\n“Select the minimum and place it correctly”",
          "options": [
            "Selection Sort",
            "Bubble Sort",
            "Insertion Sort",
            "BFS",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Selection Sort repeatedly scans the unsorted subarray, selects the minimum element, and places it at the front. Correct: (A) Selection Sort."
        },
        {
          "id": "m-d14-q49",
          "question": "Q49. Merge Sort belongs to:",
          "options": [
            "Greedy only",
            "Divide and Conquer",
            "Hashing",
            "Dynamic Programming only",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Merge Sort recursively splits the array into halves, sorts them, and merges them: Divide and Conquer paradigm. Correct: (B) Divide and Conquer."
        },
        {
          "id": "m-d14-q50",
          "question": "Q50. Big-O is used in your TRE 3.0 paper in the sense of:",
          "options": [
            "Lower-bound growth",
            "Upper-bound growth",
            "Exact running time only",
            "Average case only",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Big-O notation denotes the asymptotic upper bound of an algorithm's growth rate / execution time. Correct: (B) Upper-bound growth."
        }
      ]
    }
  },
  {
    "dayNumber": 15,
    "dayId": "day-15",
    "badge": "Day 15",
    "title": "TRE 4.0 — Day 15",
    "unit": "Part III (CS) • DBMS Foundation, Keys, Normalization & SQL • Bihar Geography & Articles",
    "targetTime": "15–18 mins read + 20 mins test",
    "summary": "Today we start DBMS, an essential Part III exam area: Database definitions, DBMS features, RDBMS, Tables/Rows/Columns, Primary/Foreign/Super Keys, Metadata, Redundancy, Normalization (1NF, 2NF, 3NF), Basic SQL (CRUD) and ACID properties.",
    "targets": [
      {
        "section": "Part III – CS",
        "topic": "DBMS, Table, Keys, Normalization, SQL",
        "goal": "Primary/Foreign/Super Keys, 1NF/2NF/3NF, CRUD SQL commands, Metadata & ACID properties"
      },
      {
        "section": "Part II – GS",
        "topic": "Bihar Geography quick facts",
        "goal": "Rohtas (paddy production) and Bhagalpur ('Silk City' textile production)"
      },
      {
        "section": "Part I – English",
        "topic": "a, an, the revision",
        "goal": "Article choice based on sound ('an actress', 'a university', 'an hour')"
      }
    ],
    "introNote": "Today we start DBMS, which is a very important Part III area. TRE 2.0 contains a long DBMS block covering database definition, DBMS features, metadata, keys, SQL and normalization, while TRE 3.0 directly tests Primary Key, 2NF and INSERT.",
    "parts": [
      {
        "partId": "part-d15-dbms-basics",
        "title": "Part III — DBMS Architecture & Fundamentals",
        "sections": [
          {
            "title": "1. What is a Database? & 2. DBMS",
            "blocks": [
              {
                "type": "text",
                "content": "1. What is a Database?\n\n🧠 MENTAL PICTURE\nImagine your library has 500 students."
              },
              {
                "type": "diagram",
                "content": "Without a database:\nPaper 1 → Rahul\nPaper 2 → Aman\nPaper 3 → Ravi\nPaper 4 → Fee details\nPaper 5 → Attendance\n...\nMESS 😵\n\nWith Database:\n        DATABASE\n           ↓\n┌────────────────────────┐\n│ Student details        │\n│ Phone                  │\n│ Seat                   │\n│ Batch                  │\n│ Fee                    │\n│ Attendance             │\n└────────────────────────┘"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory sentence",
                "content": "Database = Organized Data\n\nTRE 2.0 defines a database through the correct idea of an organized collection of data/information that can be accessed, updated and managed."
              },
              {
                "type": "text",
                "content": "2. DBMS (Database Management System)\n\nThink of the system architecture:\nUSER → DBMS → DATABASE\n\nThe DBMS manages access to data."
              },
              {
                "type": "diagram",
                "content": "         USER / APP\n             ↓\n        ┌─────────┐\n        │  DBMS   │\n        └─────────┘\n             ↓\n        ┌─────────┐\n        │DATABASE │\n        └─────────┘"
              },
              {
                "type": "callout",
                "icon": "🧠",
                "title": "Memory trick",
                "content": "DBMS = Manager of Database\n\nTRE 2.0 tests features such as reducing duplication/redundancy and supporting ACID, and also asks about metadata and DBMS's interface role. Examples appearing in the TRE paper include Microsoft Access and IBM Db2."
              }
            ]
          },
          {
            "title": "3. RDBMS & 4. Table, Row and Column",
            "blocks": [
              {
                "type": "text",
                "content": "3. RDBMS\nRDBMS means: Relational Database Management System.\n\nThe standard CS idea is that data is organized into tables and relationships can exist between those tables."
              },
              {
                "type": "diagram",
                "content": "STUDENT TABLE\n\nID   Name    Seat\n-----------------\n1    Ravi     10\n2    Aman     15\n3    Neha     20\n\nThink: RDBMS = Database made of related tables"
              },
              {
                "type": "text",
                "content": "4. Table, Row and Column\nStandard DBMS terminology:"
              },
              {
                "type": "diagram",
                "content": "             COLUMNS\n          ↓      ↓      ↓\n\n        ID     Name    Seat\n       --------------------\nROW →   1      Ravi     10\nROW →   2      Aman     15\nROW →   3      Neha     20"
              },
              {
                "type": "callout",
                "icon": "📌",
                "title": "Exam Memory Terms",
                "content": "ROW    → Record / Tuple\nCOLUMN → Attribute / Field\nTABLE  → Relation\n\nFor exam:\nRow = one complete record\nColumn = one property"
              }
            ]
          }
        ]
      },
      {
        "partId": "part-d15-keys-meta",
        "title": "Part III — Keys, Metadata & Redundancy",
        "sections": [
          {
            "title": "5. Primary Key, 6. Foreign Key & 7. Superkey",
            "blocks": [
              {
                "type": "text",
                "content": "5. Primary Key — VERY IMPORTANT\nTRE 3.0 directly asks this.\n\nA Primary Key uniquely identifies each record in a table."
              },
              {
                "type": "diagram",
                "content": "StudentID    Name\n-----------------\n101          Ravi\n102          Aman\n103          Neha\n\nStudentID is a good Primary Key.\nWhy?\n101 → Ravi only\n102 → Aman only\n103 → Neha only"
              },
              {
                "type": "callout",
                "icon": "🧠",
                "title": "Memory trick",
                "content": "Primary Key = Identity Card\nJust as one Aadhaar/employee/student ID identifies one person/record.\n\n⚠️ Primary Key trap: Primary Key must be UNIQUE and cannot be NULL.\nFor exam memory: Primary Key → UNIQUE record identification"
              },
              {
                "type": "text",
                "content": "6. Foreign Key\nThis is standard DBMS expansion and prepares you for relationship questions."
              },
              {
                "type": "diagram",
                "content": "STUDENT TABLE\nStudentID   Name\n101         Ravi\n102         Aman\n     ↑\n     │ link\n     │\nFOREIGN KEY (StudentID in PAYMENT)\nPaymentID   StudentID\n1           101\n2           102"
              },
              {
                "type": "callout",
                "icon": "🔗",
                "title": "Key Connection",
                "content": "Primary Key = identifies\nForeign Key = connects"
              },
              {
                "type": "text",
                "content": "7. Superkey\nTRE 2.0 asks: a set of one or more attributes that collectively uniquely identifies a record. Its relevant option is Superkey.\n\nExample: StudentID can uniquely identify a student. Or StudentID + Phone also uniquely identifies the same record. Both can be superkeys.\n\nMemory: Superkey = any attribute combination capable of unique identification"
              }
            ]
          },
          {
            "title": "8. Metadata & 9. Redundancy",
            "blocks": [
              {
                "type": "text",
                "content": "8. Metadata\nTRE 2.0 directly asks: “What is information about data called?”\nAnswer concept: Metadata"
              },
              {
                "type": "diagram",
                "content": "Suppose data is: \"Niraj\"\n\nMetadata could describe:\nColumn Name → student_name\nType        → VARCHAR\nMax Length  → 100\n\nSo: Metadata = Data about Data"
              },
              {
                "type": "text",
                "content": "9. Redundancy\nRedundancy means: Same data unnecessarily repeated."
              },
              {
                "type": "diagram",
                "content": "ID    Name      City\n1     Ravi      Patna\n2     Ravi      Patna\n3     Ravi      Patna\n\nIf the same information is unnecessarily duplicated:\nMore storage + more chances of inconsistency"
              },
              {
                "type": "callout",
                "icon": "⚠️",
                "title": "TRE 2.0 Exam Point",
                "content": "Duplicate data → Redundancy\nDifferent copies disagree → Inconsistency\n\nTRE 2.0 specifically asks what happens when the same piece of data is stored in two places: it can waste storage and create data inconsistency when one copy changes."
              }
            ]
          }
        ]
      },
      {
        "partId": "part-d15-norm-sql",
        "title": "Part III — Normalization, SQL & ACID",
        "sections": [
          {
            "title": "10. Normalization, 11. 1NF, 12. 2NF & 13. 3NF",
            "blocks": [
              {
                "type": "text",
                "content": "10. Normalization\n🧠 MENTAL PICTURE\nImagine a messy cupboard: Books + Clothes + Shoes + Papers → MESS\nYou organize: Books to Shelf 1, Clothes to Shelf 2, Shoes to Shelf 3.\n\nNormalization = Organize database tables to reduce unnecessary redundancy and anomalies.\nTRE 2.0 asks which normal form is generally considered adequate for designing a normal RDBMS and includes 3NF as the relevant option."
              },
              {
                "type": "diagram",
                "content": "1NF (First Normal Form)\nEach cell should contain a single/atomic value.\n\nBad:\nStudent   Phones\n----------------------\nRavi      9876, 8765   ❌\n\nBetter:\nStudent   Phone\n----------------\nRavi      9876\nRavi      8765\n\nMemory: 1NF = One cell → One value"
              },
              {
                "type": "diagram",
                "content": "2NF (Second Normal Form)\nTRE 3.0 directly asks which normal form ensures non-prime attributes are fully functionally dependent on the primary key: 2NF.\n\nMemory: 2NF = Full dependency on complete key (No partial dependency)"
              },
              {
                "type": "diagram",
                "content": "3NF (Third Normal Form)\nFor exam-level memory: 3NF removes transitive dependency:\n\nPrimary Key → B → C\nIf C depends indirectly through B, 3NF removes it."
              },
              {
                "type": "callout",
                "icon": "🔥",
                "title": "Memory sequence (Write this on your white sheet)",
                "content": "1NF → Atomic\n2NF → Full dependency\n3NF → No transitive dependency"
              }
            ]
          },
          {
            "title": "14. SQL, 15. Commands & 16. ACID",
            "blocks": [
              {
                "type": "text",
                "content": "14. SQL\nSQL = Structured Query Language.\nYou use SQL to communicate with relational databases.\nUSER → SQL COMMAND → DATABASE"
              },
              {
                "type": "diagram",
                "content": "SELECT → Read data\nSELECT * FROM Student;\nMemory: SELECT = See\n\nINSERT → Add a new row (TRE 3.0 directly asks this)\nINSERT INTO Student VALUES (101, 'Ravi');\nMemory: INSERT = Add\n\nUPDATE → Change existing data\nUPDATE Student SET name = 'Aman' WHERE id = 101;\nMemory: UPDATE = Change\n\nDELETE → Remove rows (TRE 2.0 directly tests this syntax)\nDELETE FROM Student WHERE id = 101;\nMemory: DELETE = Remove"
              },
              {
                "type": "callout",
                "icon": "🔥",
                "title": "CRUD Mapping",
                "content": "Create → INSERT\nRead   → SELECT\nUpdate → UPDATE\nDelete → DELETE"
              },
              {
                "type": "text",
                "content": "16. ACID Properties\nTRE 2.0 includes support for ACID property as a DBMS feature."
              },
              {
                "type": "diagram",
                "content": "A → Atomicity   (All or nothing)\nC → Consistency (Database remains in valid state)\nI → Isolation   (Transactions do not interfere)\nD → Durability  (Committed changes survive crashes/power off)\n\n🧠 Bank-transfer picture:\nAccount A (-100) → Account B (+100)\nA transaction should not stop halfway and leave money lost!\n\nACID = safe/reliable database transactions"
              }
            ]
          },
          {
            "title": "Day 15 DBMS Master Sheet",
            "blocks": [
              {
                "type": "diagram",
                "content": "DATABASE\n→ organized data\n\nDBMS\n→ manages database\n\nRDBMS\n→ tables + relationships\n\nROW\n→ record\n\nCOLUMN\n→ attribute\n\nPRIMARY KEY\n→ uniquely identifies\n\nFOREIGN KEY\n→ connects tables\n\nSUPERKEY\n→ one/more attributes uniquely identify\n\nMETADATA\n→ data about data\n\nREDUNDANCY\n→ duplicate data\n\nNORMALIZATION\n1NF → Atomic\n2NF → Full dependency\n3NF → No transitive dependency\n\nSQL\nSELECT → Read\nINSERT → Add\nUPDATE → Change\nDELETE → Remove\n\nACID\nA Atomicity\nC Consistency\nI Isolation\nD Durability"
              }
            ]
          }
        ]
      },
      {
        "partId": "part-d15-gs-bihar",
        "title": "Part II — General Studies: Bihar Geography",
        "sections": [
          {
            "title": "Bihar Geography Quick Facts",
            "blocks": [
              {
                "type": "text",
                "content": "TRE 3.0 includes Bihar-specific questions on paddy production and silk textile production. For today's exam memory, using standard Bihar GK:"
              },
              {
                "type": "diagram",
                "content": "Rohtas\n  ↓\nImportant paddy/rice-producing district\n\nBHAGALPUR\n  ↓\nSILK\n\n🧠 Memory trick: Bhagalpur = Silk City"
              },
              {
                "type": "callout",
                "icon": "📌",
                "title": "Common Exam Patterns",
                "content": "• Bihar + Agriculture (Paddy in Rohtas)\n• Bihar + District-based questions\n• Bihar + Industry/textile (Silk in Bhagalpur)"
              }
            ]
          }
        ]
      },
      {
        "partId": "part-d15-english-articles",
        "title": "Part I — English: Articles Revision",
        "sections": [
          {
            "title": "Rules for a, an, and the",
            "blocks": [
              {
                "type": "text",
                "content": "Your TRE 2.0 starts with article questions involving students and actress."
              },
              {
                "type": "diagram",
                "content": "A   → consonant sound\nAN  → vowel sound\nTHE → specific\n\nExamples:\nan actress ✅\nan hour ✅\n\na university ✅\na European ✅"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Core Rule",
                "content": "Article depends on SOUND, not merely first letter.\nhour → starts with vowel SOUND\nuniversity → starts with \"you\" SOUND"
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 15 Test",
      "subtitle": "Answer without looking back.",
      "questions": [
        {
          "id": "m-d15-q1",
          "question": "Q1. A database is best described as:",
          "options": [
            "Random collection of programs",
            "Organized collection of data/information",
            "Only a collection of images",
            "Operating system files only",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A database is an organized collection of data or information that can be easily accessed, managed, and updated. Correct: (B) Organized collection of data/information."
        },
        {
          "id": "m-d15-q2",
          "question": "Q2. DBMS stands for:",
          "options": [
            "Data Backup Management Service",
            "Database Management System",
            "Digital Base Management Software",
            "Database Memory System",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "DBMS stands for Database Management System. Correct: (B) Database Management System."
        },
        {
          "id": "m-d15-q3",
          "question": "Q3. In a relational database, a row is commonly called:",
          "options": [
            "Attribute",
            "Record",
            "Database",
            "Schema only",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "In RDBMS terminology, a row represents a single complete entity instance, called a Record (or Tuple). Correct: (B) Record."
        },
        {
          "id": "m-d15-q4",
          "question": "Q4. A column in a table normally represents:",
          "options": [
            "Attribute/field",
            "Complete database",
            "Transaction only",
            "Query result only",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "A column in a table represents a specific characteristic, property, or Field/Attribute. Correct: (A) Attribute/field."
        },
        {
          "id": "m-d15-q5",
          "question": "Q5. Which key uniquely identifies each record in a table?",
          "options": [
            "Foreign Key",
            "Primary Key",
            "Duplicate Key",
            "Null Key",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A Primary Key uniquely identifies each row/record in a table and cannot contain NULL values. Correct: (B) Primary Key."
        },
        {
          "id": "m-d15-q6",
          "question": "Q6. A Foreign Key is mainly used to:",
          "options": [
            "Delete every table",
            "Establish a relationship between tables",
            "Sort a table only",
            "Encrypt data",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A Foreign Key points to the Primary Key of another table, creating a relational link/connection between them. Correct: (B) Establish a relationship between tables."
        },
        {
          "id": "m-d15-q7",
          "question": "Q7. A set of one or more attributes capable of uniquely identifying a record is:",
          "options": [
            "Superkey",
            "Queue",
            "Metadata",
            "Transaction",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "In relational theory, any superset of attributes that uniquely identifies a record is called a Superkey. Correct: (A) Superkey."
        },
        {
          "id": "m-d15-q8",
          "question": "Q8. Information describing other data is called:",
          "options": [
            "Raw data",
            "Metadata",
            "Redundancy",
            "Tuple",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Metadata is defined as data about data (providing descriptive context like types, schemas, and constraints). Correct: (B) Metadata."
        },
        {
          "id": "m-d15-q9",
          "question": "Q9. Storing unnecessary copies of the same data is called:",
          "options": [
            "Normalization",
            "Redundancy",
            "Isolation",
            "Atomicity",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Data redundancy is the unnecessary duplication of data within a database, which wastes storage and leads to inconsistency. Correct: (B) Redundancy."
        },
        {
          "id": "m-d15-q10",
          "question": "Q10. Which normal form is best remembered as:\nOne cell → one atomic value",
          "options": [
            "1NF",
            "2NF",
            "3NF",
            "4NF",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "First Normal Form (1NF) mandates that all attributes contain only atomic (indivisible) single values. Correct: (A) 1NF."
        },
        {
          "id": "m-d15-q11",
          "question": "Q11. Which normal form ensures full functional dependency on the complete primary key?",
          "options": [
            "1NF",
            "2NF",
            "3NF",
            "BCNF only",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Second Normal Form (2NF) requires 1NF and guarantees that all non-prime attributes are fully functionally dependent on the complete primary key (no partial dependency). Correct: (B) 2NF."
        },
        {
          "id": "m-d15-q12",
          "question": "Q12. Which is the memory rule for 3NF?",
          "options": [
            "Atomic values",
            "No partial dependency only",
            "No transitive dependency",
            "No Primary Key",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "Third Normal Form (3NF) requires 2NF and ensures there is no transitive dependency of non-prime attributes on candidate keys. Correct: (C) No transitive dependency."
        },
        {
          "id": "m-d15-q13",
          "question": "Q13. Which SQL command retrieves data?",
          "options": [
            "INSERT",
            "DELETE",
            "SELECT",
            "UPDATE",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "The SELECT statement is used to query and retrieve data from one or more database tables. Correct: (C) SELECT."
        },
        {
          "id": "m-d15-q14",
          "question": "Q14. Which SQL command adds a new row?",
          "options": [
            "ADD",
            "INSERT",
            "SELECT",
            "UPDATE",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "The INSERT INTO command inserts new records/rows into a table. Correct: (B) INSERT."
        },
        {
          "id": "m-d15-q15",
          "question": "Q15. Which SQL command modifies existing rows?",
          "options": [
            "UPDATE",
            "SELECT",
            "CREATE",
            "DROP",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "The UPDATE command modifies existing data in table rows according to specified conditions. Correct: (A) UPDATE."
        },
        {
          "id": "m-d15-q16",
          "question": "Q16. Which SQL command removes selected rows?",
          "options": [
            "REMOVE",
            "ERASE",
            "DELETE",
            "CLEAR",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "The DELETE FROM command removes existing records from a table. Correct: (C) DELETE."
        },
        {
          "id": "m-d15-q17",
          "question": "Q17. In ACID, A stands for:",
          "options": [
            "Access",
            "Atomicity",
            "Attribute",
            "Availability",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A stands for Atomicity, guaranteeing that all transaction operations either succeed completely or are completely rolled back (all-or-nothing). Correct: (B) Atomicity."
        },
        {
          "id": "m-d15-q18",
          "question": "Q18. In ACID, D stands for:",
          "options": [
            "Data",
            "Dependency",
            "Durability",
            "Database",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "D stands for Durability, ensuring committed transaction results persist permanently even through power failure or system crashes. Correct: (C) Durability."
        },
        {
          "id": "m-d15-q19",
          "question": "Q19. Which Bihar city/district is famously associated with the silk industry?",
          "options": [
            "Bhagalpur",
            "Rohtas",
            "Gaya",
            "Bhojpur",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Bhagalpur is universally recognized as the 'Silk City' of Bihar, renowned for its heritage Tussar silk weaving. Correct: (A) Bhagalpur."
        },
        {
          "id": "m-d15-q20",
          "question": "Q20. The TRE 3.0 paper asks Bihar district-based questions mainly in which type of area here?",
          "options": [
            "Agriculture and textile production",
            "Only space technology",
            "Only computers",
            "Only international relations",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "TRE GS sections focus heavily on state geography, agriculture (paddy in Rohtas) and local cottage/textile industries (silk in Bhagalpur). Correct: (A) Agriculture and textile production."
        },
        {
          "id": "m-d15-q21",
          "question": "Q21. Choose the correct article:\n\n“She is ___ actress.”",
          "options": [
            "a",
            "an",
            "the",
            "no article",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "'actress' begins with a vowel sound /æ/, requiring the indefinite article 'an'. Correct: (B) an."
        },
        {
          "id": "m-d15-q22",
          "question": "Q22. Choose the correct phrase:",
          "options": [
            "an university",
            "a university",
            "a hour",
            "an European",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "'university' begins with the consonant glide sound /juː/, requiring 'a' ('a university'). 'hour' begins with vowel sound /aʊ/ ('an hour'), and 'European' begins with /juː/ ('a European'). Correct: (B) a university."
        }
      ]
    }
  },
  {
    "dayNumber": 16,
    "dayId": "day-16",
    "badge": "Day 16",
    "title": "TRE 4.0 — Day 16",
    "unit": "Part III (CS) • Functional Dependency + Normalization + SQL (WHERE, GROUP BY, HAVING, JOIN) • Geography & Hindi",
    "targetTime": "18–20 mins read + 22 mins test",
    "summary": "Today we go one level deeper into DBMS: Functional Dependency, Determinants, Full vs Partial vs Transitive Dependency, Normalization (1NF, 2NF, 3NF), SQL Filtering (WHERE vs HAVING), GROUP BY, Aggregates, and JOIN basics (INNER, LEFT, RIGHT).",
    "targets": [
      {
        "section": "Part III – CS",
        "topic": "Functional Dependency, 1NF/2NF/3NF, WHERE, GROUP BY, HAVING, Aggregates, JOIN",
        "goal": "Master Full vs Partial vs Transitive dependency, SQL execution flow (WHERE → GROUP BY → HAVING), and JOIN types"
      },
      {
        "section": "Part II – GS",
        "topic": "Bihar/Indian Geography",
        "goal": "Dry-point settlements (flood prevention) and Bhagalpur silk production"
      },
      {
        "section": "Part I – Hindi",
        "topic": "पर्यायवाची",
        "goal": "जल (नीर), नभ (आकाश), अनल (अग्नि), रवि (सूर्य), खग/विहंग (पक्षी)"
      }
    ],
    "introNote": "Your TRE 3.0 paper explicitly tests 2NF as full functional dependency on the primary key, while TRE 2.0 asks about 3NF and separately asks which clause applies conditions after groups are created — HAVING.\n\nThe detailed examples of functional dependency, JOIN, aggregate functions, and SQL execution below are standard DBMS expansion to prepare you for related MCQs; those details are not all stated verbatim in the uploaded papers.",
    "parts": [
      {
        "partId": "part-d16-fd-norm",
        "title": "Part III — Functional Dependency & Normalization",
        "sections": [
          {
            "title": "1. Functional Dependency, 2. Determinant & 3. Full Dependency",
            "blocks": [
              {
                "type": "text",
                "content": "1. Functional Dependency\n\n🧠 MENTAL PICTURE\nImagine this table:\nStudentID    Name       City\n----------------------------\n101          Ravi       Patna\n102          Aman       Gaya\n103          Neha       Patna\n\nIf I know: StudentID = 101, I can determine: Name = Ravi.\nSo we write: StudentID → Name\nRead it as: StudentID determines Name.\nThis is a Functional Dependency."
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory rule",
                "content": "A → B means: knowing A determines B"
              },
              {
                "type": "text",
                "content": "2. Determinant\nIn: StudentID → Name\nStudentID is the: Determinant (the left-hand side attribute that determines the value of others)."
              },
              {
                "type": "diagram",
                "content": "StudentID\n    ↓ determines\n   Name"
              },
              {
                "type": "text",
                "content": "3. Full Functional Dependency\nSuppose the Primary Key is composite: (StudentID, SubjectID)\n\nTable:\nStudentID   SubjectID   Marks\n-----------------------------\n101         CS          80\n101         Maths       70\n102         CS          85\n\nTo know Marks, we need both:\nStudentID + SubjectID → Marks\nNeither part alone is enough. That's: Full Functional Dependency."
              },
              {
                "type": "callout",
                "icon": "📌",
                "title": "Memory & TRE 3.0 Exam Phrase",
                "content": "FULL = entire composite key needed\n\nTRE 3.0 directly uses this phrase when testing 2NF (all non-prime attributes are fully functionally dependent on the primary key)."
              }
            ]
          },
          {
            "title": "4. Partial Dependency & 5. Transitive Dependency",
            "blocks": [
              {
                "type": "text",
                "content": "4. Partial Dependency\nNow suppose (StudentID, SubjectID) is the composite key.\nBut: StudentID → StudentName\nYou don't need SubjectID to know the student's name.\nOnly part of the key determines it. That's: Partial Dependency."
              },
              {
                "type": "diagram",
                "content": "Composite Key: (StudentID + SubjectID)\n\n       StudentID\n           ↓\n      StudentName\n\nOnly PART used → PARTIAL DEPENDENCY"
              },
              {
                "type": "callout",
                "icon": "🧠",
                "title": "Memory trick",
                "content": "Partial = depends on part of composite key"
              },
              {
                "type": "text",
                "content": "5. Transitive Dependency\nConsider:\nStudentID → DepartmentID\nDepartmentID → DepartmentName\n\nTherefore indirectly: StudentID → DepartmentName\nThis indirect dependency is: Transitive Dependency."
              },
              {
                "type": "diagram",
                "content": "StudentID\n    ↓\nDepartmentID\n    ↓\nDepartmentName\n\nA → B → C = Transitive\n(A reaches C through B)"
              }
            ]
          },
          {
            "title": "6. 1NF, 7. 2NF & 8. 3NF Rules",
            "blocks": [
              {
                "type": "callout",
                "icon": "🔥",
                "title": "Normalization Master Sequence",
                "content": "1NF → Atomic\n2NF → Remove Partial Dependency\n3NF → Remove Transitive Dependency\n\nThis is your main Day 16 white-paper line."
              },
              {
                "type": "diagram",
                "content": "6. 1NF (First Normal Form)\nRule: One cell → one atomic value\n\nBad:\nStudent     Phones\n-------------------------\nRavi        9876, 8765   ❌ (Multivalued)\n\nBetter:\nStudent     Phone\n------------------\nRavi        9876\nRavi        8765         ✅ (Atomic)\n\nMemory: 1NF = ONE value per cell"
              },
              {
                "type": "diagram",
                "content": "7. 2NF (Second Normal Form)\nRequirements: Must already be in 1NF + No partial dependency.\n\nTRE 3.0 phrases 2NF as every non-prime attribute being fully functionally dependent on the primary key.\n\nMemory: 2NF → FULL key dependency → NO PARTIAL\n\n⚠️ Very important trap:\nPartial dependency matters especially when you have a COMPOSITE KEY.\nIf the Primary Key has only one attribute, there cannot be dependency on just \"part\" of that single attribute in the usual 2NF sense."
              },
              {
                "type": "diagram",
                "content": "8. 3NF (Third Normal Form)\nRequirements: Must be in 2NF + No transitive dependency.\n\nPrimary Key → B → C  ❌ (Remove indirect dependency)\n\nMemory: 3NF = No third-person dependency (KEY → B → C is avoided)\n\nTRE 2.0 includes 3NF as the normal form considered adequate for a normal RDBMS in its question set."
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "1NF vs 2NF vs 3NF Memory Staircase",
                "content": "1 = Atomic\n2 = Partial gone\n3 = Transitive gone"
              }
            ]
          }
        ]
      },
      {
        "partId": "part-d16-sql-flow",
        "title": "Part III — SQL Filtering, Aggregates & JOIN Basics",
        "sections": [
          {
            "title": "9. SELECT, 10. WHERE, 11. Aggregates, 12. GROUP BY & 13. HAVING",
            "blocks": [
              {
                "type": "text",
                "content": "Use this sample table:\nSTUDENT\nID   Name    City      Marks\n----------------------------\n1    Ravi    Patna      80\n2    Aman    Gaya       70\n3    Neha    Patna      90\n4    Rahul   Gaya       60"
              },
              {
                "type": "diagram",
                "content": "9. SELECT → Show data\nSELECT * FROM Student;\nMemory: SELECT = See\n\n10. WHERE → Filter individual rows\nSELECT * FROM Student WHERE City = 'Patna';\nResult:\n1 Ravi Patna 80\n3 Neha Patna 90\n\nMemory: WHERE filters individual ROWS"
              },
              {
                "type": "callout",
                "icon": "📊",
                "title": "11. Aggregate Functions (CASMM)",
                "content": "C → COUNT() : number of records\nA → AVG()   : average value\nS → SUM()   : total sum\nM → MAX()   : maximum value\nM → MIN()   : minimum value\n\nExample: SELECT AVG(Marks) FROM Student;"
              },
              {
                "type": "diagram",
                "content": "12. GROUP BY → Make groups\nSuppose we want average marks per city:\nSELECT City, AVG(Marks) FROM Student GROUP BY City;\n\n13. HAVING → Filter groups (TRE 2.0 Question)\nSELECT City, AVG(Marks)\nFROM Student\nGROUP BY City\nHAVING AVG(Marks) > 75;\n\nTRE 2.0 asks which clause applies predicates after groups have been established, allowing aggregate functions → HAVING."
              },
              {
                "type": "callout",
                "icon": "🔥",
                "title": "WHERE vs HAVING (Favorite Exam Trap)",
                "content": "WHERE  → filters individual ROWS (before grouping)\nHAVING → filters GROUPED results (after grouping)\n\nVisual Execution Flow:\nTable Data → WHERE (filter rows) → GROUP BY (form groups) → HAVING (filter groups)"
              }
            ]
          },
          {
            "title": "14. JOIN Basics (INNER, LEFT, RIGHT)",
            "blocks": [
              {
                "type": "text",
                "content": "14. JOIN\nSuppose we have:\nSTUDENT (1 Ravi, 2 Aman) and PAYMENT (1 Fee ₹1000, 2 Fee ₹1200).\nWe need to connect the tables: JOIN = Combine related tables."
              },
              {
                "type": "diagram",
                "content": "STUDENT             PAYMENT\n1 Ravi  ─────────── 1 ₹1000\n2 Aman  ─────────── 2 ₹1200\n             ↑\n            JOIN"
              },
              {
                "type": "diagram",
                "content": "15. INNER JOIN\nReturns matching records from both tables (Intersection).\nTable A ∩ Table B\nMemory: INNER = intersection / common matches only\n\n16. LEFT JOIN\nKeeps ALL records from LEFT table plus matching data from right.\nUnmatched right attributes become NULL.\nMemory: LEFT JOIN = Left table is VIP\n\n17. RIGHT JOIN\nKeeps ALL records from RIGHT table plus matching data from left.\nMemory: RIGHT JOIN = Right table is VIP"
              },
              {
                "type": "callout",
                "icon": "📌",
                "title": "JOIN Triad for TRE",
                "content": "INNER → Matching only\nLEFT  → All Left + matches\nRIGHT → All Right + matches"
              }
            ]
          },
          {
            "title": "Day 16 DBMS Master Sheet",
            "blocks": [
              {
                "type": "diagram",
                "content": "FUNCTIONAL DEPENDENCY\nA → B (A determines B)\n\nFULL DEPENDENCY\n→ whole composite key needed\n\nPARTIAL\n→ part of composite key\n\nTRANSITIVE\n→ A → B → C\n\nNORMALIZATION\n1NF → Atomic\n2NF → No Partial\n3NF → No Transitive\n\nSQL\nSELECT → See\nWHERE → Filter rows\nGROUP BY → Make groups\nHAVING → Filter groups\n\nCOUNT, SUM, AVG, MAX, MIN\n\nJOIN\nINNER → matching only\nLEFT  → all LEFT\nRIGHT → all RIGHT"
              }
            ]
          }
        ]
      },
      {
        "partId": "part-d16-geography",
        "title": "Part II — General Studies: Geography",
        "sections": [
          {
            "title": "Dry-point Settlements & Bhagalpur Silk",
            "blocks": [
              {
                "type": "text",
                "content": "Your TRE 3.0 GS paper includes questions on dry-point settlements, Bihar paddy production, and Bihar silk-textile production."
              },
              {
                "type": "diagram",
                "content": "Dry-point Settlement\nImagine a flood-prone plain:\n~~~~ WATER ~~~~\n       /\\   ← higher dry land\n      /  \\\n    houses\n\nPeople build settlements on slightly higher/drier ground to avoid flooding.\nMemory: Dry-point settlement → higher dry place inside a wet/flood-prone region"
              },
              {
                "type": "diagram",
                "content": "BHAGALPUR\n    ↓\n   SILK\n\nThe TRE 3.0 paper asks which Bihar district has maximum silk-textile production:\nBhagalpur → Silk ('Silk City')"
              }
            ]
          }
        ]
      },
      {
        "partId": "part-d16-hindi",
        "title": "Part I — Hindi: पर्यायवाची",
        "sections": [
          {
            "title": "महत्वपूर्ण पर्यायवाची शब्द",
            "blocks": [
              {
                "type": "text",
                "content": "🧠 Mental picture:\nONE MEANING → many words → पर्यायवाची"
              },
              {
                "type": "diagram",
                "content": "जल   → नीर\nनभ   → आकाश\nअनल  → अग्नि\nरवि   → सूर्य / भानु\nखग   → पक्षी / विहंग"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "स्मरण सूत्र",
                "content": "जल = नीर | अग्नि = अनल | आकाश = नभ | सूर्य = रवि | पक्षी = खग / विहंग"
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 16 Test",
      "subtitle": "Answer without looking back.",
      "questions": [
        {
          "id": "m-d16-q1",
          "question": "Q1. If attribute A determines attribute B, it is written as:",
          "options": [
            "A + B",
            "A → B",
            "A = B",
            "A / B",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Functional dependency from A to B is formally denoted by an arrow: A → B (read as 'A determines B'). Correct: (B) A → B."
        },
        {
          "id": "m-d16-q2",
          "question": "Q2. In StudentID → Name, the determinant is:",
          "options": [
            "Name",
            "StudentID",
            "Both always",
            "Database",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "In any functional dependency X → Y, the left-hand side attribute (X) that determines the value of other attributes is called the determinant. Correct: (B) StudentID."
        },
        {
          "id": "m-d16-q3",
          "question": "Q3. A non-key attribute depending on only part of a composite key is called:",
          "options": [
            "Full dependency",
            "Partial dependency",
            "Transitive dependency",
            "Multivalued dependency only",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "When a non-prime attribute depends on a proper subset (part) of a composite candidate key, it is a Partial Dependency. Correct: (B) Partial dependency."
        },
        {
          "id": "m-d16-q4",
          "question": "Q4. Which pattern best represents transitive dependency?",
          "options": [
            "A → B → C",
            "A = A",
            "A + B",
            "A ← A",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Transitive dependency occurs when A functionally determines B, and B determines C, creating an indirect dependency A → C through B: A → B → C. Correct: (A) A → B → C."
        },
        {
          "id": "m-d16-q5",
          "question": "Q5. 1NF primarily requires:",
          "options": [
            "No tables",
            "Atomic values",
            "No Primary Key",
            "Only one row",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "First Normal Form (1NF) disallows composite or multi-valued attributes; each cell must hold an atomic (indivisible) value. Correct: (B) Atomic values."
        },
        {
          "id": "m-d16-q6",
          "question": "Q6. 2NF removes:",
          "options": [
            "Atomicity",
            "Partial dependency",
            "Tables",
            "Primary Keys",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Second Normal Form (2NF) requires 1NF and completely eliminates partial functional dependencies on composite keys. Correct: (B) Partial dependency."
        },
        {
          "id": "m-d16-q7",
          "question": "Q7. 3NF mainly removes:",
          "options": [
            "Partial dependency only",
            "Transitive dependency",
            "Primary Key",
            "Foreign Key",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Third Normal Form (3NF) requires 2NF and completely eliminates transitive dependencies on primary/candidate keys. Correct: (B) Transitive dependency."
        },
        {
          "id": "m-d16-q8",
          "question": "Q8. Which sequence is correct?",
          "options": [
            "1NF → no transitive, 2NF → atomic, 3NF → partial",
            "1NF → atomic, 2NF → no partial, 3NF → no transitive",
            "1NF → partial, 2NF → transitive, 3NF → atomic",
            "All are identical",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "The standard normalization sequence: 1NF enforces atomic values, 2NF eliminates partial dependency, and 3NF eliminates transitive dependency. Correct: (B) 1NF → atomic, 2NF → no partial, 3NF → no transitive."
        },
        {
          "id": "m-d16-q9",
          "question": "Q9. Which SQL clause filters individual rows?",
          "options": [
            "HAVING",
            "WHERE",
            "GROUP BY",
            "JOIN",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "The WHERE clause applies boolean conditions to filter individual rows before any groupings are formed. Correct: (B) WHERE."
        },
        {
          "id": "m-d16-q10",
          "question": "Q10. Which SQL clause creates groups?",
          "options": [
            "WHERE",
            "GROUP BY",
            "HAVING",
            "DELETE",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "The GROUP BY clause collapses rows sharing identical values in specified columns into summary groups. Correct: (B) GROUP BY."
        },
        {
          "id": "m-d16-q11",
          "question": "Q11. After groups have been formed, which clause is used to apply a condition to those groups?",
          "options": [
            "WHERE",
            "SELECT",
            "HAVING",
            "INSERT",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "The HAVING clause applies filter predicates specifically to summarized groups after GROUP BY evaluation, supporting aggregate functions. Correct: (C) HAVING."
        },
        {
          "id": "m-d16-q12",
          "question": "Q12. Which aggregate function returns the number of records?",
          "options": [
            "SUM()",
            "COUNT()",
            "AVG()",
            "MAX()",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "COUNT() returns the total count/number of records matching the query criteria. Correct: (B) COUNT()."
        },
        {
          "id": "m-d16-q13",
          "question": "Q13. Which function calculates the average?",
          "options": [
            "AVG()",
            "COUNT()",
            "SUM()",
            "MIN()",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "AVG() computes the mathematical mean/average of a numeric column. Correct: (A) AVG()."
        },
        {
          "id": "m-d16-q14",
          "question": "Q14. Which is the best memory rule?",
          "options": [
            "WHERE filters groups; HAVING filters rows",
            "WHERE filters rows; HAVING filters groups",
            "Both always do exactly the same thing",
            "Neither filters anything",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "WHERE filters rows before aggregation; HAVING filters groups after aggregation. Correct: (B) WHERE filters rows; HAVING filters groups."
        },
        {
          "id": "m-d16-q15",
          "question": "Q15. A JOIN is primarily used to:",
          "options": [
            "Delete a database",
            "Combine related data from tables",
            "Sort only one column",
            "Create a CPU process",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "SQL JOIN operations combine columns from two or more related tables based on common matching attributes. Correct: (B) Combine related data from tables."
        },
        {
          "id": "m-d16-q16",
          "question": "Q16. INNER JOIN normally returns:",
          "options": [
            "All rows from left only",
            "Matching rows from both tables",
            "All rows from right only",
            "No matching rows",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "INNER JOIN produces only those rows that have matching values in both joined tables (set intersection). Correct: (B) Matching rows from both tables."
        },
        {
          "id": "m-d16-q17",
          "question": "Q17. LEFT JOIN normally keeps:",
          "options": [
            "Only unmatched right rows",
            "All rows from the left table plus matches",
            "Only common rows",
            "Only right rows",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "LEFT JOIN retains all rows from the left table, along with matching rows from the right table (unmatched right columns become NULL). Correct: (B) All rows from the left table plus matches."
        },
        {
          "id": "m-d16-q18",
          "question": "Q18. RIGHT JOIN normally keeps:",
          "options": [
            "All rows from the right table plus matches",
            "Only left rows",
            "No records",
            "Only Primary Keys",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "RIGHT JOIN retains all rows from the right table, along with matching rows from the left table. Correct: (A) All rows from the right table plus matches."
        },
        {
          "id": "m-d16-q19",
          "question": "Q19. Which SQL sequence best matches the conceptual filtering flow discussed today?",
          "options": [
            "HAVING → WHERE → GROUP BY",
            "WHERE → GROUP BY → HAVING",
            "GROUP BY → DELETE → WHERE",
            "INSERT → HAVING → WHERE",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "The logical processing sequence is: WHERE (filter rows) → GROUP BY (form groups) → HAVING (filter groups). Correct: (B) WHERE → GROUP BY → HAVING."
        },
        {
          "id": "m-d16-q20",
          "question": "Q20. Which normal form is directly associated in TRE 3.0 with full functional dependency on the primary key?",
          "options": [
            "1NF",
            "2NF",
            "3NF",
            "4NF",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "TRE 3.0 explicitly tests 2NF as ensuring that non-prime attributes are fully functionally dependent on the primary key. Correct: (B) 2NF."
        },
        {
          "id": "m-d16-q21",
          "question": "Q21. A dry-point settlement is typically located:",
          "options": [
            "On relatively higher/drier land in a flood-prone or wet region",
            "At the deepest point of a river",
            "Only inside deserts",
            "Only on sea beaches",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "In human geography, dry-point settlements are established on elevated, drier knolls, river terraces, or mounds within low-lying or flood-prone marshes to escape periodic inundation. Correct: (A) On relatively higher/drier land in a flood-prone or wet region."
        },
        {
          "id": "m-d16-q22",
          "question": "Q22. Which Bihar place is strongly associated with silk?",
          "options": [
            "Bhagalpur",
            "Rohtas",
            "Gaya",
            "Bhojpur",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Bhagalpur is the renowned 'Silk City' of Bihar, leading in Tussar silk production. Correct: (A) Bhagalpur."
        },
        {
          "id": "m-d16-q23",
          "question": "Q23. “जल” का पर्यायवाची है:",
          "options": [
            "अनल",
            "नीर",
            "नभ",
            "खग",
            "इनमें से कोई नहीं"
          ],
          "correctAnswer": 1,
          "explanation": "'जल' के प्रमुख पर्यायवाची शब्द हैं: नीर, वारि, तोय, पानी, सलिल। Correct: (B) नीर।"
        },
        {
          "id": "m-d16-q24",
          "question": "Q24. “अग्नि” का पर्यायवाची है:",
          "options": [
            "अनल",
            "नीर",
            "रवि",
            "खग",
            "इनमें से कोई नहीं"
          ],
          "correctAnswer": 0,
          "explanation": "'अग्नि' के पर्यायवाची शब्द हैं: अनल, पावक, आग, दहन, हुताशन। ('अनिल' हवा का होता है, 'अनल' आग का)। Correct: (A) अनल।"
        },
        {
          "id": "m-d16-q25",
          "question": "Q25. “पक्षी” का पर्यायवाची है:",
          "options": [
            "रवि",
            "नीर",
            "विहंग",
            "अनल",
            "इनमें से कोई नहीं"
          ],
          "correctAnswer": 2,
          "explanation": "'पक्षी' के प्रमुख पर्यायवाची हैं: विहंग, खग, चिड़िया, पखेरू, द्विज। Correct: (C) विहंग।"
        }
      ]
    }
  }
];

// Expose globally for browser environment
if (typeof window !== 'undefined') {
  window.MARATHON_DATA = MARATHON_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MARATHON_DATA };
}
