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
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MARATHON_DATA;
}
