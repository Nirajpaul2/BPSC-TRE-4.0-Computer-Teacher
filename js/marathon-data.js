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
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MARATHON_DATA;
}
