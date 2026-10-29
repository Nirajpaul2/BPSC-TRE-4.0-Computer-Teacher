// BPSC TRE 4.0 Computer Science Marathon Data
// Daily comprehensive study modules + tests

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
  },
  {
    "dayNumber": 17,
    "dayId": "day-17",
    "badge": "Day 17",
    "title": "TRE 4.0 — Day 17",
    "unit": "Part III (CS) • Transactions, ACID, COMMIT/ROLLBACK, Constraints, DELETE/DROP/TRUNCATE, DDL/DML/DCL/TCL • Earth Day, Survey of India & Articles",
    "targetTime": "18–20 mins read + 22 mins test",
    "summary": "Today we finish the core DBMS foundation: Transactions, ACID Properties in depth, COMMIT vs ROLLBACK, SAVEPOINT, Constraints (PK, FK, UNIQUE, NOT NULL, CHECK), DELETE vs TRUNCATE vs DROP, and SQL Command Classifications (DDL, DML, DCL, TCL).",
    "targets": [
      {
        "section": "Part III – CS",
        "topic": "Transactions, ACID, COMMIT, ROLLBACK, Constraints, DELETE/DROP/TRUNCATE, DDL/DML/DCL/TCL",
        "goal": "Master ACID properties, transaction control commands, table constraints, and SQL category classifications"
      },
      {
        "section": "Part II – GS",
        "topic": "Earth Day + Survey of India + Geography facts",
        "goal": "World Earth Day (22 April), Survey of India (topographical maps), and groundwater cave formations (stalactites/stalagmites)"
      },
      {
        "section": "Part I – English",
        "topic": "Articles revision",
        "goal": "Master sound-based usage: 'an actress', 'an hour', 'a university', 'a European'"
      }
    ],
    "introNote": "Today we finish the core DBMS foundation.\n\nYour TRE 2.0 paper explicitly treats support for ACID as a DBMS feature and asks correct DELETE FROM ... syntax. TRE 3.0 also directly tests Primary Key, 2NF and INSERT.\n\nThe deeper transaction commands, constraints, DROP/TRUNCATE, and DDL/DML/DCL/TCL classifications below are standard DBMS expansion for exam preparation; they are not all explicitly present in the retrieved paper excerpts.",
    "parts": [
      {
        "partId": "part-d17-transactions-acid",
        "title": "Part III — Transactions & ACID Properties",
        "sections": [
          {
            "title": "1. Transaction & 2. ACID Properties",
            "blocks": [
              {
                "type": "text",
                "content": "1. Transaction\n\n🧠 MENTAL PICTURE\nImagine transferring ₹500:\nAccount A (₹5000) → - ₹500 → Account B (+ ₹500)\n\nBoth operations belong together.\nIf A loses ₹500 but B does not receive it:\nA - ₹500 ✅\nB + ₹500 ❌\nSYSTEM WRONG!\n\nSo the whole group should behave as one unit of work.\nTransaction = group of database operations treated as one logical unit.\n\nMemory: Transaction = All operations belong together"
              },
              {
                "type": "diagram",
                "content": "2. ACID Properties (TRE 2.0 explicitly tests ACID as a DBMS feature)\n\nA → Atomicity   (All or nothing)\nC → Consistency (Database moves valid state → valid state)\nI → Isolation   (Transactions do not interfere)\nD → Durability  (Committed changes survive restart/crashes)\n\n🧠 One Bank Story for all four:\nA → All or Nothing\nC → Correct state\nI → Independent transactions\nD → Done means permanent"
              },
              {
                "type": "callout",
                "icon": "🔥",
                "title": "ACID Master Trick (Say it aloud five times)",
                "content": "A → All or nothing\nC → Correct\nI → Independent\nD → Durable/permanent"
              }
            ]
          },
          {
            "title": "3. Atomicity, 4. Consistency, 5. Isolation & 6. Durability",
            "blocks": [
              {
                "type": "diagram",
                "content": "3. Atomicity\nEither the whole transaction happens or none of it happens.\nBank transfer: A -500 and B +500.\nEither BOTH ✅ or NEITHER ✅. Never only A -500 ❌.\nMemory: Atomicity = ALL or NOTHING\n\n4. Consistency\nDatabase must move: VALID STATE → transaction → VALID STATE.\nTotal money before: A(5000) + B(3000) = 8000.\nAfter ₹500 transfer: A(4500) + B(3500) = 8000.\nRules remain valid.\nMemory: Consistency = Database remains correct\n\n5. Isolation\nImagine two people doing transactions simultaneously:\nTransaction 1 ──────►\nTransaction 2 ──────►\nThey should not incorrectly interfere with each other's incomplete work.\nMental: Two students writing exams in separate rooms (Student A | wall | Student B).\nMemory: Isolation = Transactions don't disturb each other\n\n6. Durability\nSuppose: COMMIT ✅. Then electricity goes off.\nWhen the database restarts, committed data should still exist.\nMemory: Durability = DONE means stays DONE (COMMIT → PERMANENT)"
              }
            ]
          },
          {
            "title": "7. COMMIT, 8. ROLLBACK & 9. SAVEPOINT",
            "blocks": [
              {
                "type": "diagram",
                "content": "7. COMMIT\nCOMMIT makes transaction changes permanent:\nUPDATE Account SET balance = balance - 500 WHERE id = 1;\nCOMMIT;\nAfter COMMIT: Changes are permanently saved.\nMemory: COMMIT = SAVE\n\n8. ROLLBACK\nSuppose something goes wrong:\nUPDATE Account SET balance = balance - 500 WHERE id = 1;\nROLLBACK;\nRollback cancels uncommitted changes and returns to earlier transaction state.\nMemory: ROLLBACK = UNDO\n\nCOMMIT vs ROLLBACK:\nCOMMIT   → SAVE\nROLLBACK → UNDO"
              },
              {
                "type": "callout",
                "icon": "🎮",
                "title": "9. SAVEPOINT = Checkpoint",
                "content": "Imagine a video game:\nLevel start → SAVEPOINT A → more work → SAVEPOINT B\n\nYou may roll back to a saved intermediate point rather than canceling everything.\nMemory: SAVEPOINT = checkpoint"
              }
            ]
          }
        ]
      },
      {
        "partId": "part-d17-constraints-drop",
        "title": "Part III — Constraints & Table Deletion (DELETE vs TRUNCATE vs DROP)",
        "sections": [
          {
            "title": "10. Constraints (PK, FK, UNIQUE, NOT NULL, CHECK)",
            "blocks": [
              {
                "type": "text",
                "content": "10. Constraints\nConstraint means: Rule applied to table data.\nImagine a school admission form: Roll number cannot repeat, Name cannot be empty, Age must be valid."
              },
              {
                "type": "diagram",
                "content": "11. PRIMARY KEY\nUniquely identifies each row (TRE 3.0 directly tests this definition).\nPRIMARY KEY → Unique + Not NULL (Identity Card)\n\n12. FOREIGN KEY\nConnects tables (points to Primary Key in parent table).\nFOREIGN KEY → Connect Tables\n\n13. UNIQUE\nDuplicate values are not allowed in the constrained column.\nEmail: a@gmail.com, b@gmail.com (duplicate a@gmail.com ❌)\nUNIQUE = No duplicate\n\n14. NOT NULL\nValue cannot be missing/null. Must provide a value.\n\n15. CHECK\nEnforces a condition: CHECK (age >= 18)\nAge 21 ✅, Age 25 ✅, Age 15 ❌\nCHECK = condition checker"
              },
              {
                "type": "callout",
                "icon": "📌",
                "title": "Constraint Master Sheet",
                "content": "PRIMARY KEY → identity\nFOREIGN KEY → relationship\nUNIQUE      → no duplicate\nNOT NULL    → cannot be empty\nCHECK       → condition"
              }
            ]
          },
          {
            "title": "16. DELETE, 17. TRUNCATE & 18. DROP",
            "blocks": [
              {
                "type": "text",
                "content": "16. DELETE (TRE 2.0 directly tests: DELETE FROM teaches;)\nDELETE removes rows.\nDELETE FROM Student WHERE id = 10;\nMental: TABLE stays, ROWS removed."
              },
              {
                "type": "diagram",
                "content": "17. TRUNCATE\nTRUNCATE TABLE Student;\nRemoves all rows quickly while keeping the table structure.\nBefore: TABLE + DATA\nTRUNCATE → TABLE ✅, DATA ❌\nMemory: TRUNCATE = empty table\n\n18. DROP\nDROP TABLE Student;\nRemoves the table object itself.\nDROP → TABLE ❌, DATA ❌\nMemory: DROP = destroy table"
              },
              {
                "type": "callout",
                "icon": "🏫",
                "title": "Classroom Mental Picture (DELETE vs TRUNCATE vs DROP)",
                "content": "Students = rows | Classroom = table\n\n• DELETE   → Remove a few students: Classroom ✅, Some students ❌\n• TRUNCATE → Send every student out: Classroom ✅, Students ❌\n• DROP     → Demolish classroom: Classroom ❌, Students ❌"
              }
            ]
          }
        ]
      },
      {
        "partId": "part-d17-sql-categories",
        "title": "Part III — SQL Command Categories & Traps",
        "sections": [
          {
            "title": "19. SQL Command Categories (DDL, DML, DCL, TCL)",
            "blocks": [
              {
                "type": "diagram",
                "content": "DDL (Data Definition Language) → STRUCTURE\nDeals mainly with database/table structure:\nCREATE, ALTER, DROP, TRUNCATE\nMnemonic: C A D T (Create, Alter, Drop, Truncate)\n\nDML (Data Manipulation Language) → DATA\nDeals with table data:\nINSERT, UPDATE, DELETE (and SELECT in many exam syllabi)\nTRE 3.0 directly tests: INSERT → add rows\n\nDCL (Data Control Language) → PERMISSIONS\nGRANT  → Give permission\nREVOKE → Take permission back\n\nTCL (Transaction Control Language) → TRANSACTIONS\nCOMMIT, ROLLBACK, SAVEPOINT"
              },
              {
                "type": "callout",
                "icon": "⚠️",
                "title": "Major Exam Traps",
                "content": "• Trap 1: DROP vs DELETE → DELETE removes rows, DROP destroys table\n• Trap 2: COMMIT vs ROLLBACK → COMMIT saves, ROLLBACK undos\n• Trap 3: UNIQUE vs PRIMARY KEY → PRIMARY KEY is main row identifier (only 1 per table, not null), UNIQUE prevents duplicates\n• Trap 4: DDL vs DML → CREATE table is DDL, INSERT row is DML"
              },
              {
                "type": "diagram",
                "content": "Day 17 White-Paper Recall\n\nTRANSACTION\n→ one logical unit\n\nACID\nA → All or Nothing\nC → Correct state\nI → Independent\nD → Permanent\n\nCOMMIT → SAVE\nROLLBACK → UNDO\nSAVEPOINT → CHECKPOINT\n\nCONSTRAINTS\nPK → identity\nFK → relationship\nUNIQUE → no duplicate\nNOT NULL → required\nCHECK → condition\n\nDELETE   → rows\nTRUNCATE → all rows, table stays\nDROP     → table gone\n\nDDL → structure\nDML → data\nDCL → permission\nTCL → transaction"
              }
            ]
          }
        ]
      },
      {
        "partId": "part-d17-gs-geography",
        "title": "Part II — General Studies: Earth Day & Survey of India",
        "sections": [
          {
            "title": "Earth Day, Topographical Maps & Caves",
            "blocks": [
              {
                "type": "text",
                "content": "Your TRE 2.0 paper directly asks about 22 April and which organization prepares India's topographical maps."
              },
              {
                "type": "diagram",
                "content": "1. 22 April = World Earth Day 🌍\nMemory: 22/4 → Earth Day\n\n2. Topographical Maps of India\nExam association: Survey of India\nMAP → SURVEY → Survey of India\n\n3. Stalactite and Stalagmite\nThe same TRE GS block associates these cave formations with: Underground water (Karst topography)\nCAVE → groundwater → stalactite / stalagmite"
              }
            ]
          }
        ]
      },
      {
        "partId": "part-d17-english-articles",
        "title": "Part I — English: Articles Revision",
        "sections": [
          {
            "title": "Articles Rules & Traps",
            "blocks": [
              {
                "type": "text",
                "content": "Your TRE 2.0 language section directly asks article questions including actress."
              },
              {
                "type": "diagram",
                "content": "A   → consonant SOUND\nAN  → vowel SOUND\nTHE → specific\n\nExamples:\nan actress ✅\nan hour ✅\n\na university ✅\na European ✅"
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 17 Test",
      "subtitle": "Answer without looking back.",
      "questions": [
        {
          "id": "m-d17-q1",
          "question": "Q1. A database transaction is best described as:",
          "options": [
            "Random collection of tables",
            "One logical unit of database work",
            "A type of operating system",
            "Only a SELECT statement",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A transaction is a sequence of one or more database operations treated as a single, indivisible logical unit of work. Correct: (B) One logical unit of database work."
        },
        {
          "id": "m-d17-q2",
          "question": "Q2. In ACID, A stands for:",
          "options": [
            "Availability",
            "Atomicity",
            "Attribute",
            "Access",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "In the ACID model, A stands for Atomicity. Correct: (B) Atomicity."
        },
        {
          "id": "m-d17-q3",
          "question": "Q3. Atomicity means:",
          "options": [
            "All or nothing",
            "Data is always sorted",
            "Every table has one row",
            "Every transaction runs forever",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Atomicity ensures that either all operations of a transaction succeed and are committed, or none are (all-or-nothing). Correct: (A) All or nothing."
        },
        {
          "id": "m-d17-q4",
          "question": "Q4. Which ACID property means the database should remain in a valid state?",
          "options": [
            "Atomicity",
            "Consistency",
            "Isolation",
            "Durability",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Consistency ensures that a transaction transforms the database from one valid state to another valid state, preserving all integrity constraints. Correct: (B) Consistency."
        },
        {
          "id": "m-d17-q5",
          "question": "Q5. Which ACID property concerns transactions not improperly interfering with each other?",
          "options": [
            "Durability",
            "Isolation",
            "Atomicity",
            "Metadata",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Isolation ensures concurrent execution of transactions results in a system state that would be obtained if transactions were executed serially. Correct: (B) Isolation."
        },
        {
          "id": "m-d17-q6",
          "question": "Q6. After a successful COMMIT, data should survive a system restart. This represents:",
          "options": [
            "Isolation",
            "Durability",
            "Partial dependency",
            "Redundancy",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Durability guarantees that once a transaction is committed, its changes are permanent and survive crashes or power failures. Correct: (B) Durability."
        },
        {
          "id": "m-d17-q7",
          "question": "Q7. COMMIT primarily means:",
          "options": [
            "Undo",
            "Save transaction changes",
            "Delete table",
            "Create database",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "COMMIT ends the current transaction and makes all changes permanent in the database. Correct: (B) Save transaction changes."
        },
        {
          "id": "m-d17-q8",
          "question": "Q8. ROLLBACK primarily means:",
          "options": [
            "Undo uncommitted changes",
            "Permanently save changes",
            "Grant permission",
            "Create table",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "ROLLBACK cancels and undoes all uncommitted data modifications performed in the current transaction. Correct: (A) Undo uncommitted changes."
        },
        {
          "id": "m-d17-q9",
          "question": "Q9. Which is best remembered as a transaction checkpoint?",
          "options": [
            "DROP",
            "SAVEPOINT",
            "SELECT",
            "ALTER",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A SAVEPOINT establishes a designated checkpoint within a transaction to which you can later roll back without discarding preceding work. Correct: (B) SAVEPOINT."
        },
        {
          "id": "m-d17-q10",
          "question": "Q10. Which constraint uniquely identifies a row?",
          "options": [
            "NOT NULL",
            "PRIMARY KEY",
            "CHECK",
            "DEFAULT",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A PRIMARY KEY uniquely identifies each row in a table and cannot contain NULL values. Correct: (B) PRIMARY KEY."
        },
        {
          "id": "m-d17-q11",
          "question": "Q11. Which constraint is mainly used to connect related tables?",
          "options": [
            "FOREIGN KEY",
            "PRIMARY KEY only",
            "CHECK",
            "NOT NULL",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "A FOREIGN KEY references a Primary Key in another table, enforcing referential integrity and linking relations. Correct: (A) FOREIGN KEY."
        },
        {
          "id": "m-d17-q12",
          "question": "Q12. Which constraint prevents missing/null values?",
          "options": [
            "UNIQUE",
            "NOT NULL",
            "CHECK only",
            "FOREIGN KEY",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "NOT NULL enforces that a column must always be assigned an actual value and cannot accept NULL. Correct: (B) NOT NULL."
        },
        {
          "id": "m-d17-q13",
          "question": "Q13. Which constraint can enforce:\n\nAge >= 18",
          "options": [
            "CHECK",
            "UNIQUE",
            "DROP",
            "COMMIT",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "The CHECK constraint validates that values in a column satisfy a specified boolean condition (e.g. CHECK (Age >= 18)). Correct: (A) CHECK."
        },
        {
          "id": "m-d17-q14",
          "question": "Q14. Which SQL command removes selected rows?",
          "options": [
            "DROP",
            "DELETE",
            "CREATE",
            "ALTER",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "The DELETE command removes rows that match a WHERE clause predicate while keeping the table structure intact. Correct: (B) DELETE."
        },
        {
          "id": "m-d17-q15",
          "question": "Q15. Which command removes all rows while retaining the table structure in the basic distinction taught today?",
          "options": [
            "DELETE with mandatory WHERE",
            "TRUNCATE",
            "DROP",
            "CREATE",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "TRUNCATE removes all rows rapidly while preserving the underlying table definition and schema. Correct: (B) TRUNCATE."
        },
        {
          "id": "m-d17-q16",
          "question": "Q16. Which command removes the table itself?",
          "options": [
            "UPDATE",
            "DROP",
            "INSERT",
            "SELECT",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "DROP TABLE destroys the table definition, metadata, and all stored rows permanently. Correct: (B) DROP."
        },
        {
          "id": "m-d17-q17",
          "question": "Q17. CREATE belongs to:",
          "options": [
            "DML",
            "DDL",
            "TCL",
            "DCL",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "CREATE modifies database schema structure and belongs to Data Definition Language (DDL). Correct: (B) DDL."
        },
        {
          "id": "m-d17-q18",
          "question": "Q18. INSERT belongs to the commonly taught:",
          "options": [
            "DDL",
            "DML",
            "DCL",
            "TCL",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "INSERT manipulates the data records stored in a table and belongs to Data Manipulation Language (DML). Correct: (B) DML."
        },
        {
          "id": "m-d17-q19",
          "question": "Q19. GRANT and REVOKE belong to:",
          "options": [
            "DDL",
            "DML",
            "DCL",
            "TCL",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "GRANT and REVOKE manage user privileges and security access, belonging to Data Control Language (DCL). Correct: (C) DCL."
        },
        {
          "id": "m-d17-q20",
          "question": "Q20. COMMIT, ROLLBACK, and SAVEPOINT belong to:",
          "options": [
            "DDL",
            "DML",
            "DCL",
            "TCL",
            "None of the above"
          ],
          "correctAnswer": 3,
          "explanation": "COMMIT, ROLLBACK, and SAVEPOINT manage database transactions, belonging to Transaction Control Language (TCL). Correct: (D) TCL."
        },
        {
          "id": "m-d17-q21",
          "question": "Q21. Which pair is correctly matched?",
          "options": [
            "DELETE → remove table structure",
            "DROP → remove table",
            "COMMIT → undo",
            "ROLLBACK → permanently save",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "DROP removes the table object itself. DELETE removes rows, COMMIT saves, and ROLLBACK undoes uncommitted work. Correct: (B) DROP → remove table."
        },
        {
          "id": "m-d17-q22",
          "question": "Q22. World Earth Day is observed on:",
          "options": [
            "22 April",
            "5 June",
            "16 September",
            "10 December",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "World Earth Day is celebrated annually worldwide on 22 April to demonstrate support for environmental protection. Correct: (A) 22 April."
        },
        {
          "id": "m-d17-q23",
          "question": "Q23. Topographical maps of India are prepared by:",
          "options": [
            "Geological Survey of India",
            "Survey of India",
            "Zoological Survey of India",
            "Election Commission",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "The Survey of India (headquartered in Dehradun) is the National Mapping Agency responsible for preparing topographical maps of India. Correct: (B) Survey of India."
        },
        {
          "id": "m-d17-q24",
          "question": "Q24. Stalactite and stalagmite formations are mainly associated in the TRE paper with:",
          "options": [
            "Wind action",
            "Underground water",
            "Snow only",
            "Volcanoes only",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Stalactites (growing down from cave ceilings) and stalagmites (rising up from cave floors) are mineral deposits formed by underground water in limestone / Karst topography. Correct: (B) Underground water."
        },
        {
          "id": "m-d17-q25",
          "question": "Q25. Choose the correct phrase:",
          "options": [
            "a actress",
            "an actress",
            "a hour",
            "an university",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "'actress' begins with a vowel sound /æ/, requiring the indefinite article 'an': 'an actress'. Correct: (B) an actress."
        }
      ]
    }
  },
  {
    "dayNumber": 18,
    "dayId": "day-18",
    "badge": "Day 18",
    "title": "TRE 4.0 — Day 18",
    "unit": "Part III (CS) • ER Model, Entity, Attribute, Relationship, Cardinality, Schema vs Instance, DB Architecture • Geography & Family Vocabulary",
    "targetTime": "18–20 mins read + 22 mins test",
    "summary": "Today we transition from SQL and transactions to conceptual database design: ER Modeling (Entity, Attribute, Relationship, Cardinality), Schema vs Instance, Catalog hierarchy, Database Models (Hierarchical, Network, Relational), and the Three-Schema Architecture (External, Conceptual, Internal).",
    "targets": [
      {
        "section": "Part III – CS",
        "topic": "ER Model, Entity, Attribute, Relationship, Cardinality, Schema vs Instance, DB Architecture",
        "goal": "Master ER notations, 1:1 / 1:M / M:N cardinalities, junction tables, Schema vs Instance, and the 3-level ANSI/SPARC architecture"
      },
      {
        "section": "Part II – GS",
        "topic": "Indian Geography quick revision",
        "goal": "Leguminous crop (Pulse), East-West Corridor (Silchar ↔ Porbandar), Survey of India (topographical maps), cave groundwater formations"
      },
      {
        "section": "Part I – English",
        "topic": "Family/relationship vocabulary",
        "goal": "Maternal vs Paternal grandparents, brother-in-law"
      }
    ],
    "introNote": "Today we move from SQL/transactions to database design concepts.\n\nYour uploaded TRE 2.0 paper directly supports the database hierarchy idea Catalogs → Schemas, asks about Hierarchical DBMS, and continues testing keys and DBMS structure. The exact ER-model/cardinality/three-schema questions were not found in the retrieved TRE/STET excerpts, so those sections below are standard DBMS expansion for TRE-level preparation, not claims that these exact questions appeared in your papers.",
    "parts": [
      {
        "partId": "part-d18-er-model",
        "title": "Part III — ER Model & Components",
        "sections": [
          {
            "title": "1. ER Model, 2. Entity, 3. Entity Set & 4. Attribute",
            "blocks": [
              {
                "type": "text",
                "content": "1. ER Model\nER stands for: Entity–Relationship\n\n🧠 MENTAL PICTURE\nImagine your library system:\nSTUDENT takes SEAT\n\nTwo things exist: Student and Seat.\nAnd there is a relationship: Student TAKES Seat.\n\nENTITY → THING\nRELATIONSHIP → CONNECTION\nMemory: ER Model = Things + their relationships"
              },
              {
                "type": "diagram",
                "content": "2. Entity\nAn Entity is a real-world object or concept about which data is stored:\nStudent, Teacher, Book, Course, Employee\nMemory: Entity = Thing\n\n3. Entity Set\nMany similar entities together form an Entity Set:\nRavi, Aman, Neha, Rahul all belong to STUDENT entity set.\nMemory: One Student = Entity | All Students = Entity Set\n\n4. Attribute\nAn Attribute describes an Entity:\n        STUDENT\n           │\n ┌─────────┼──────────┐\n ↓         ↓          ↓\nName      Age       Phone\n\nMemory: Attribute = Property"
              },
              {
                "type": "callout",
                "icon": "🔑",
                "title": "5. Key Attribute",
                "content": "StudentID uniquely identifies one student, acting as a key attribute.\nThis connects directly with the Primary-Key idea tested in TRE 3.0: a primary key uniquely identifies records.\n\nMemory: Key Attribute = Identity"
              }
            ]
          },
          {
            "title": "6. Relationship & 7. Cardinality (1:1, 1:M, M:N)",
            "blocks": [
              {
                "type": "text",
                "content": "6. Relationship\nA Relationship connects entities:\nSTUDENT ───── studies ───── COURSE\n\nEntities are people/things (nouns); relationship is the verb between them:\nStudent ENROLLS Course | Teacher TEACHES Subject | Customer PLACES Order\n\n7. Cardinality tells how many entities can participate in a relationship."
              },
              {
                "type": "diagram",
                "content": "8. One-to-One (1:1)\nOne person has one passport:\nPERSON ───── PASSPORT\n   1            1\nMemory: One ↔ One (e.g. Vehicle ↔ Registration certificate)\n\n9. One-to-Many (1:M)\nTEACHER ───── STUDENTS (1 teacher teaches many students)\nDEPARTMENT ── EMPLOYEES (1 department has many employees)\nMemory: One parent → Many children\n\n10. Many-to-Many (M:N)\nSTUDENTS ──── COURSES (Many students study many courses)\nMemory: Many ↔ Many"
              },
              {
                "type": "callout",
                "icon": "📌",
                "title": "11. Why M:N is special in RDBMS",
                "content": "In a relational database, an M:N relationship is typically handled using an intermediate/junction table:\nSTUDENT → ENROLLMENT (StudentID, CourseID) → COURSE\n\nMemory: M:N → middle / junction table"
              },
              {
                "type": "diagram",
                "content": "12. ER Diagram Symbols — Exam Basics\n\nRectangle    → Entity\nOval         → Attribute\nDiamond (◇)  → Relationship\n\n[ STUDENT ] ---- ◇ studies ◇ ---- [ COURSE ]\n      |\n    (Name)\n\nMemory trick:\nEntity       → Rectangle\nAttribute    → Oval\nRelationship → Diamond"
              }
            ]
          }
        ]
      },
      {
        "partId": "part-d18-schema-arch",
        "title": "Part III — Schema vs Instance & DB Architecture",
        "sections": [
          {
            "title": "13. Schema vs 14. Instance & 15. Catalog Hierarchy",
            "blocks": [
              {
                "type": "text",
                "content": "13. Schema\nSchema means: Database structure / design / blueprint.\nImagine an empty student form: StudentID, Name, Phone, City.\nThis describes what fields exist, not today's actual values.\nMemory: Schema = Design / Blueprint (changes rarely)\n\n14. Instance\nInstance means: Actual data stored at a particular moment in time.\nToday: 101 Ravi, 102 Aman\nTomorrow: 101 Ravi, 102 Aman, 103 Neha\nSchema remains the same; data changes.\nMemory: Instance = Current Data (changes frequently)"
              },
              {
                "type": "callout",
                "icon": "🏫",
                "title": "Schema vs Instance Classroom Picture",
                "content": "• Classroom architectural layout = Schema (rarely changes)\n• Students sitting inside today = Instance (changes every period)"
              },
              {
                "type": "diagram",
                "content": "15. Catalog and Schema (Direct TRE 2.0 Exam Support)\nTRE 2.0 asks: the top level consists of catalogs, each of which can contain schemas.\n\nCATALOG\n   ↓\nSCHEMA\n   ↓\nTABLE\n\nMemory: Catalog contains Schemas"
              }
            ]
          },
          {
            "title": "16. Database Models & 20. Three-Schema Architecture",
            "blocks": [
              {
                "type": "diagram",
                "content": "Database Models (TRE 2.0 includes comparison of models):\n\n17. Hierarchical DBMS\nTree structure with parent-child relationships (like folders):\n        COMPANY\n        /     \\\n      HR      IT\n     /         \\\nEmployee     Employee\nMemory: Hierarchical DBMS = Tree structure\n\n18. Network DBMS\nGraph-like many-to-many connections without strict single-parent hierarchy.\nMemory: Network = Graph-like connections\n\n19. Relational DBMS (RDBMS)\nOrganized into Tables (Rows + Columns) with relational foreign keys.\nMemory: RDBMS = Tables + Relationships"
              },
              {
                "type": "diagram",
                "content": "20. Three-Schema Architecture (ANSI/SPARC)\n\nUSER VIEW         → EXTERNAL LEVEL (What a particular user sees, e.g. teacher sees marks, not salary)\n     ↓\nDATABASE DESIGN   → CONCEPTUAL LEVEL (Overall logical structure of the entire database)\n     ↓\nDISK / STORAGE    → INTERNAL LEVEL (Physical storage layout, files, blocks, indexing)\n\nMemory Mnemonic: VDS (View, Design, Storage)"
              },
              {
                "type": "callout",
                "icon": "📋",
                "title": "Day 18 DBMS Master Sheet",
                "content": "ER MODEL\nENTITY       → Thing (Rectangle)\nATTRIBUTE    → Property (Oval)\nRELATIONSHIP → Connection (Diamond)\n\nCARDINALITY\n1:1 → Person ↔ Passport\n1:M → Department → Employees\nM:N → Students ↔ Courses (requires Junction Table)\n\nSCHEMA   → Blueprint (structure)\nINSTANCE → Actual current data\nCATALOG  → contains SCHEMAS\n\nARCHITECTURE (VDS)\nExternal   → View\nConceptual → Design\nInternal   → Storage"
              }
            ]
          }
        ]
      },
      {
        "partId": "part-d18-geography",
        "title": "Part II — General Studies: Geography Quick Revision",
        "sections": [
          {
            "title": "High-Yield Geography Pairs",
            "blocks": [
              {
                "type": "text",
                "content": "Your TRE 2.0 paper contains a geography block testing minerals, leguminous crops, East-West Corridor, cave formations, Earth Day, and Survey of India."
              },
              {
                "type": "diagram",
                "content": "Leguminous crop\n→ Pulse\n\nEast-West Corridor\n→ Silchar ↔ Porbandar\n\nTopographical maps\n→ Survey of India\n\nStalactite and stalagmite formations\n→ Underground water"
              }
            ]
          }
        ]
      },
      {
        "partId": "part-d18-english-relations",
        "title": "Part I — English: Family & Relationship Vocabulary",
        "sections": [
          {
            "title": "Family Relationship Vocabulary",
            "blocks": [
              {
                "type": "text",
                "content": "TRE 2.0 directly asks family-relation vocabulary."
              },
              {
                "type": "diagram",
                "content": "Mother's parents\n→ Maternal grandparents\n\nFather's parents\n→ Paternal grandparents\n\nHusband's brother\n→ Brother-in-law"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory trick",
                "content": "M → Mother → Maternal\nP → Papa   → Paternal"
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 18 Test",
      "subtitle": "Answer without looking back.",
      "questions": [
        {
          "id": "m-d18-q1",
          "question": "Q1. ER stands for:",
          "options": [
            "Entity–Relation",
            "Entity–Relationship",
            "External–Relation",
            "Entity–Record",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "ER stands for Entity–Relationship (Entity–Relationship Model). Correct: (B) Entity–Relationship."
        },
        {
          "id": "m-d18-q2",
          "question": "Q2. A real-world object about which data is stored is called:",
          "options": [
            "Attribute",
            "Entity",
            "Relationship",
            "Schema",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "An Entity is a distinguishable real-world object or concept (e.g., student, employee) about which information is collected. Correct: (B) Entity."
        },
        {
          "id": "m-d18-q3",
          "question": "Q3. Name, Age, and Phone of a Student are examples of:",
          "options": [
            "Relationships",
            "Attributes",
            "Entities",
            "Schemas",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Attributes are descriptive properties or characteristics that define an entity. Correct: (B) Attributes."
        },
        {
          "id": "m-d18-q4",
          "question": "Q4. Which best describes a Relationship?",
          "options": [
            "Property of an entity only",
            "Association between entities",
            "Primary Key only",
            "Table name only",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A relationship defines an association, interaction, or link between two or more entities. Correct: (B) Association between entities."
        },
        {
          "id": "m-d18-q5",
          "question": "Q5. One Person having one Passport is typically:",
          "options": [
            "1:1",
            "1:M",
            "M:N",
            "0:N",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "A person holds at most one passport, and a passport belongs to exactly one person, representing a One-to-One (1:1) cardinality. Correct: (A) 1:1."
        },
        {
          "id": "m-d18-q6",
          "question": "Q6. One Department having many Employees is:",
          "options": [
            "1:1",
            "1:M",
            "M:N",
            "M:1 only from both directions",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "One department contains multiple employees, while each employee belongs to one department: One-to-Many (1:M). Correct: (B) 1:M."
        },
        {
          "id": "m-d18-q7",
          "question": "Q7. Students enrolling in many Courses and Courses having many Students is:",
          "options": [
            "1:1",
            "1:M",
            "M:N",
            "0:1",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "A student can enroll in multiple courses, and each course can be taken by multiple students: Many-to-Many (M:N). Correct: (C) M:N."
        },
        {
          "id": "m-d18-q8",
          "question": "Q8. An M:N relationship in an RDBMS is commonly resolved using:",
          "options": [
            "Stack",
            "Junction/Intermediate table",
            "Queue",
            "Heap",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "RDBMS tables cannot directly store multivalued composite foreign keys, so Many-to-Many relationships are implemented via an intermediate Junction (associative) table. Correct: (B) Junction/Intermediate table."
        },
        {
          "id": "m-d18-q9",
          "question": "Q9. In basic ER notation, an Entity is commonly represented by:",
          "options": [
            "Rectangle",
            "Oval",
            "Diamond",
            "Triangle",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "In Chen's ER notation, Entity sets are drawn as Rectangles. Correct: (A) Rectangle."
        },
        {
          "id": "m-d18-q10",
          "question": "Q10. In basic ER notation, an Attribute is commonly represented by:",
          "options": [
            "Rectangle",
            "Oval",
            "Diamond",
            "Square only",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Attributes are represented by Ovals (ellipses) connected to their entity rectangle. Correct: (B) Oval."
        },
        {
          "id": "m-d18-q11",
          "question": "Q11. In basic ER notation, a Relationship is commonly represented by:",
          "options": [
            "Rectangle",
            "Oval",
            "Diamond",
            "Circle",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "Relationships are represented by Diamond shapes connecting participating entities. Correct: (C) Diamond."
        },
        {
          "id": "m-d18-q12",
          "question": "Q12. A database Schema is best thought of as:",
          "options": [
            "Current database values",
            "Database blueprint/structure",
            "One SQL row",
            "Only a transaction",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A database schema is the overall structural framework, design, or blueprint defining tables, columns, data types, and constraints. Correct: (B) Database blueprint/structure."
        },
        {
          "id": "m-d18-q13",
          "question": "Q13. An Instance refers to:",
          "options": [
            "Database structure only",
            "Actual data at a particular moment",
            "DBMS software name",
            "Primary Key only",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "An instance (or database state) is the collection of actual data values stored in the database at a specific snapshot in time. Correct: (B) Actual data at a particular moment."
        },
        {
          "id": "m-d18-q14",
          "question": "Q14. Which is correct?",
          "options": [
            "Schema changes constantly, Instance never changes",
            "Schema is structure; Instance is current data",
            "Schema and Instance are identical",
            "Instance contains only metadata",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Schema is the invariant or rarely modified structural definition; Instance represents the dynamic data currently populated in the database. Correct: (B) Schema is structure; Instance is current data."
        },
        {
          "id": "m-d18-q15",
          "question": "Q15. According to the TRE 2.0 hierarchy question, the top level contains:",
          "options": [
            "Schemas containing catalogs",
            "Catalogs containing schemas",
            "Tables containing DBMS",
            "Keys containing schemas",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "In SQL/RDBMS catalog architecture (specifically tested in TRE 2.0), the top-level container consists of Catalogs, each of which contains one or more Schemas. Correct: (B) Catalogs containing schemas."
        },
        {
          "id": "m-d18-q16",
          "question": "Q16. A Hierarchical DBMS is easiest to visualize as:",
          "options": [
            "Stack",
            "Tree",
            "Queue",
            "Hash Table",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A hierarchical database model arranges records in an inverted Tree-like parent-child hierarchy (similar to a filesystem folder structure). Correct: (B) Tree."
        },
        {
          "id": "m-d18-q17",
          "question": "Q17. A Relational DBMS primarily organizes data into:",
          "options": [
            "Trees only",
            "Tables",
            "Stacks",
            "CPU registers",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "RDBMS structures data into two-dimensional relations called Tables, composed of rows (tuples) and columns (attributes). Correct: (B) Tables."
        },
        {
          "id": "m-d18-q18",
          "question": "Q18. In the standard three-schema architecture, the External level represents:",
          "options": [
            "Physical storage",
            "User views",
            "Disk sectors only",
            "Transaction log only",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "The External Level (view level) defines customized views tailored to specific end-user groups, hiding the rest of the database. Correct: (B) User views."
        },
        {
          "id": "m-d18-q19",
          "question": "Q19. The Conceptual level represents:",
          "options": [
            "Overall logical database design",
            "User password only",
            "Disk blocks only",
            "One table row",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "The Conceptual Level defines the complete logical structure of the entire database, entities, relationships, data types, and constraints. Correct: (A) Overall logical database design."
        },
        {
          "id": "m-d18-q20",
          "question": "Q20. The Internal level primarily concerns:",
          "options": [
            "User views",
            "Physical storage details",
            "English language queries",
            "Cardinality only",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "The Internal Level (physical level) describes how data is actually stored on physical storage devices (data files, compression, indexing, block allocation). Correct: (B) Physical storage details."
        },
        {
          "id": "m-d18-q21",
          "question": "Q21. Which is a leguminous crop?",
          "options": [
            "Pulse",
            "Jowar",
            "Millet",
            "Rice",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Pulses (beans, lentils, peas) are leguminous crops whose root nodules contain nitrogen-fixing Rhizobium bacteria. Correct: (A) Pulse."
        },
        {
          "id": "m-d18-q22",
          "question": "Q22. The East-West Corridor connects:",
          "options": [
            "Mumbai and Kolkata",
            "Silchar and Porbandar",
            "Delhi and Chennai",
            "Patna and Mumbai",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "The East-West Corridor of the Golden Quadrilateral project links Silchar (Assam) in the east with Porbandar (Gujarat) in the west. Correct: (B) Silchar and Porbandar."
        },
        {
          "id": "m-d18-q23",
          "question": "Q23. Topographical maps of India are prepared by:",
          "options": [
            "Geological Survey of India",
            "Survey of India",
            "Zoological Survey of India",
            "ISRO only",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "The Survey of India is the national mapping agency entrusted with the preparation of official topographical maps. Correct: (B) Survey of India."
        },
        {
          "id": "m-d18-q24",
          "question": "Q24. Mother's parents are called:",
          "options": [
            "Paternal grandparents",
            "Maternal grandparents",
            "Parents-in-law",
            "Cousins",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Relatives on one's mother's side are referred to as Maternal (Maternal grandparents). Father's side are Paternal. Correct: (B) Maternal grandparents."
        },
        {
          "id": "m-d18-q25",
          "question": "Q25. Husband's brother is commonly called:",
          "options": [
            "Brother-in-law",
            "Maternal uncle",
            "Nephew",
            "Cousin",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "A husband's or wife's brother is termed a Brother-in-law. Correct: (A) Brother-in-law."
        }
      ]
    }
  },
  {
    "dayNumber": 19,
    "dayId": "day-19",
    "badge": "Day 19",
    "title": "TRE 4.0 — Day 19",
    "unit": "Part III (CS) • Indexing, B-Tree, B+ Tree, Clustered/Non-Clustered Index, Query Performance • Geography & English",
    "targetTime": "18–20 mins read + 22 mins test",
    "summary": "Today we complete an important database performance topic: Database Indexing, Table Scan vs Index Lookup, B-Tree vs B+ Tree, Clustered vs Non-Clustered Index, Dense vs Sparse Index, Query Optimizer, and Primary Key vs Index distinctions.",
    "targets": [
      {
        "section": "Part III – CS",
        "topic": "Index, B-Tree, B+ Tree, Clustered/Non-Clustered Index, Query Performance",
        "goal": "Master B-Tree vs B+ Tree architecture, linked leaf nodes for range queries, Clustered vs Non-Clustered storage, and Query Optimizer execution plans"
      },
      {
        "section": "Part II – GS",
        "topic": "Geography quick revision",
        "goal": "Dry-point settlements (flood prevention), Bhagalpur silk, and Tehran (Alborz/Alburz mountain range)"
      },
      {
        "section": "Part I – English",
        "topic": "Articles + family vocabulary",
        "goal": "Master sound-based articles ('an actress', 'a university') and maternal grandparents vocabulary"
      }
    ],
    "introNote": "Today we complete an important database performance topic.\n\nI checked your uploaded TRE 2.0, TRE 3.0 and STET material. I did not find a direct question on B-Tree, B+ Tree, clustered index or non-clustered index in the retrieved excerpts. So today's indexing material is standard DBMS expansion for TRE preparation, not something I am claiming appeared directly in those papers.\n\nYour papers do, however, strongly establish DBMS fundamentals such as database types, metadata, keys, ACID, normalization and SQL. TRE 2.0 tests DBMS features, metadata, superkey and database hierarchy, while TRE 3.0 directly tests Primary Key, 2NF and INSERT.",
    "parts": [
      {
        "partId": "part-d19-indexing-basics",
        "title": "Part III — Indexing Fundamentals & Tree Structures",
        "sections": [
          {
            "title": "1. Why Do We Need an Index? & 2. Table Scan vs Index Search",
            "blocks": [
              {
                "type": "text",
                "content": "1. Why Do We Need an Index?\n\n🧠 MENTAL PICTURE\nImagine a 1,000-page book.\nYou want: \"Normalization\"\nWithout an index:\nPage 1 ❌ → Page 2 ❌ → Page 3 ❌ ... Page 750 ✅ (Very slow!)\n\nBut a book index says:\nNormalization → Page 750\nNow you jump directly.\n\nA database index works with the same idea:\nIndex helps the database find records faster."
              },
              {
                "type": "diagram",
                "content": "WITHOUT INDEX (Table Scan)\nTable → scan → scan → scan → match\n\nWITH INDEX\nIndex → location pointer → record directly"
              },
              {
                "type": "text",
                "content": "2. Table Scan vs Index Search\nQuery: SELECT * FROM Student WHERE ID = 9999;\nWithout index: inspects thousands of rows.\nWith index: 9999 → Index → location pointer → Rahul.\n\nMemory: Index = shortcut to data"
              },
              {
                "type": "callout",
                "icon": "⚠️",
                "title": "3. Does Index Always Make Everything Faster? (Important Exam Concept)",
                "content": "No! An index speeds up SEARCH / SELECT (Read operations).\nHowever, indexes consume EXTRA STORAGE and add overhead during modifications:\nINSERT, UPDATE, DELETE\nbecause the index structures must be updated synchronously.\n\nMemory: Index speeds READ, but costs storage and maintenance overhead."
              },
              {
                "type": "text",
                "content": "4. Index on Which Columns?\nAn index is useful on columns frequently used for: WHERE, JOIN, ORDER BY, especially selective lookup columns.\n\nDo NOT index every column! Excessive indexes waste disk space and slow down write/insert operations."
              }
            ]
          },
          {
            "title": "5. B-Tree & 6. Disk Efficiency",
            "blocks": [
              {
                "type": "text",
                "content": "5. B-Tree\nImagine a huge dictionary. Instead of one long list, we create a balanced multi-way search tree."
              },
              {
                "type": "diagram",
                "content": "             [40 | 80]\n            /    |     \\\n       <40     40-80    >80\n\nUnlike BST (max 2 children):\nA B-Tree can have MULTIPLE keys and MULTIPLE children per node.\n\nConcept: B-Tree = balanced multi-way search tree designed for efficient disk storage/search."
              },
              {
                "type": "callout",
                "icon": "💾",
                "title": "6. Why B-Tree Is Useful in Databases (Disk Access is Expensive)",
                "content": "Disk access is slow. A tall binary tree requires many disk I/O page reads.\nA B-Tree keeps many keys per node, making the tree SHORTER and WIDER (broad tree → fewer levels → fewer disk page accesses).\n\n(Memory mnemonic: B-Tree = Broad tree → fewer levels; note: 'B' does not officially stand for 'Broad')."
              },
              {
                "type": "diagram",
                "content": "7. B-Tree Properties — Exam Level\n✅ Balanced (all leaf nodes at same depth)\n✅ Multi-way (nodes have multiple children)\n✅ Keys sorted inside each node\n✅ Efficient search, insertion, and deletion\n✅ Record pointers/data can exist in BOTH internal and leaf nodes"
              }
            ]
          },
          {
            "title": "8. B+ Tree & 9. B-Tree vs B+ Tree",
            "blocks": [
              {
                "type": "diagram",
                "content": "8. B+ Tree Architecture\n\n          [20 | 40]             ← Internal nodes (Router / Guide only)\n          /   |   \\\n         /    |    \\\n        ↓     ↓     ↓\nLEAF → [5,10] → [20,30] → [40,50] ← Leaf level (ALL actual data + LINKED)\n\nInternal nodes guide the search.\nActual data/record references reside strictly at the LEAF LEVEL.\nLeaves are linked together sequentially like a linked list:\nLeaf 1 → Leaf 2 → Leaf 3 → Leaf 4\n\nMemory: B+ Tree = Data at leaves + Leaves linked"
              },
              {
                "type": "callout",
                "icon": "⚖️",
                "title": "9. B-Tree vs B+ Tree (High-Yield Comparison)",
                "content": "• B-Tree : Data pointers appear in internal AND leaf nodes; search may terminate early at internal node; leaves not linked.\n• B+ Tree: Data entries exclusively at LEAF LEVEL; leaves are LINKED sequentially; search always reaches leaf.\n\nMemory trick: B+ = Bottom data + linked leaves"
              },
              {
                "type": "diagram",
                "content": "10. Why B+ Tree Is Great for Range Queries\nQuery: WHERE marks BETWEEN 70 AND 90\n\nLeaf sequence:\n65 → 70 → 72 → 75 → 80 → 85 → 90 → 95\n      ↑-------------------↑\nOnce you find 70 via tree search, you simply traverse the linked leaf list sequentially!\n\nMemory: B+ Tree + linked leaves = excellent for range searches"
              },
              {
                "type": "callout",
                "icon": "🌲",
                "title": "11. Tree Hierarchy Comparison",
                "content": "• BINARY TREE : At most 2 children\n• B-TREE      : Multiple children, balanced, data at all levels\n• B+ TREE     : Multiple children, balanced, data at leaves only, leaves linked"
              }
            ]
          }
        ]
      },
      {
        "partId": "part-d19-clustered-optimizer",
        "title": "Part III — Clustered Index, Dense/Sparse & Query Optimizer",
        "sections": [
          {
            "title": "12. Clustered vs 13. Non-Clustered Index",
            "blocks": [
              {
                "type": "diagram",
                "content": "12. Clustered Index\nStudent files physically arranged by Roll Number:\n101 Ravi\n102 Aman\n103 Neha\n104 Rahul\n\nActual data rows are stored physically in order of the clustered index key.\nMemory: Clustered = data rows follow the clustering order.\n* Usually only ONE clustered index per table (data can only have one physical order)."
              },
              {
                "type": "diagram",
                "content": "13. Non-Clustered Index\nLike a book's back index: pages are NOT rearranged alphabetically.\nSeparate index card:\n\"Aman\"  → Page 50\n\"Ravi\"  → Page 130\n\nMemory: Non-clustered = separate lookup structure pointing to data rows."
              },
              {
                "type": "callout",
                "icon": "📚",
                "title": "Clustered vs Non-Clustered Analogy",
                "content": "• Clustered     → Bookshelf itself physically arranged A to Z\n• Non-Clustered → Index card catalog on the desk pointing to bookshelf locations"
              },
              {
                "type": "text",
                "content": "14. Primary Key and Index — Important Trap\n• PRIMARY KEY: Logical constraint uniquely identifying a row (Entity Integrity).\n• INDEX: Physical data structure used to accelerate query lookup speed.\nA DBMS may automatically build an index on a primary key, but they are conceptually distinct."
              }
            ]
          },
          {
            "title": "15. Dense vs 16. Sparse Index & 18. Query Optimizer",
            "blocks": [
              {
                "type": "diagram",
                "content": "15. Dense Index\nAn index entry exists for EVERY search-key value/record.\n101 → Row 1 | 102 → Row 2 | 103 → Row 3 | 104 → Row 4\nMemory: Dense = more index entries\n\n16. Sparse Index\nIndex entries exist for only SOME search keys / disk blocks.\n101 → Block 1 | 201 → Block 2 | 301 → Block 3\nMemory: Sparse = fewer index entries (selected entries)"
              },
              {
                "type": "diagram",
                "content": "17. Query Optimizer & 19. Why Database May Ignore an Index\n\n🧠 Mental Picture: Google Maps choosing fastest route (Route A 25 min vs Route B 45 min).\nThe Query Optimizer estimates costs and selects the cheapest execution plan (Full Scan vs Index Lookup vs Join strategy).\n\n⚠️ Why Database May Ignore an Index:\nIf a query returns 95% of table rows (e.g. WHERE status = 'ACTIVE'), jumping through an index adds overhead; the optimizer will choose a direct full table scan!\nMemory: Index exists ≠ Index must be used"
              },
              {
                "type": "callout",
                "icon": "📋",
                "title": "Day 19 DBMS White-Paper Master Sheet",
                "content": "INDEX\n→ Shortcut / speeds retrieval\n→ Costs extra storage & modification overhead\n\nB-TREE\n→ Balanced multi-way tree\n\nB+ TREE\n→ Balanced multi-way tree\n→ Data entries at leaves only\n→ Leaves linked (excellent for range queries)\n\nCLUSTERED INDEX\n→ Data rows stored in index order (1 per table)\n\nNON-CLUSTERED INDEX\n→ Separate lookup structure pointing to rows\n\nPRIMARY KEY vs INDEX\n→ Primary Key = Identity/Uniqueness\n→ Index = Performance/Access speed\n\nQUERY OPTIMIZER\n→ Chooses most efficient execution plan"
              }
            ]
          }
        ]
      },
      {
        "partId": "part-d19-geography",
        "title": "Part II — General Studies: Geography Quick Revision",
        "sections": [
          {
            "title": "High-Yield Geography Exam Pairs",
            "blocks": [
              {
                "type": "text",
                "content": "Geography block from your TRE 3.0 paper (dry-point settlement, Bihar paddy, Tehran, Alborz, silk):"
              },
              {
                "type": "diagram",
                "content": "Dry-point settlement\n→ Relatively high/dry ground in flood-prone area\n\nBhagalpur\n→ Famous for silk ('Silk City' of Bihar)\n\nTehran\n→ Associated with Alborz / Alburz mountain range"
              }
            ]
          }
        ]
      },
      {
        "partId": "part-d19-english-revision",
        "title": "Part I — English: Articles & Family Vocabulary",
        "sections": [
          {
            "title": "Articles & Relationship Vocabulary",
            "blocks": [
              {
                "type": "text",
                "content": "TRE 2.0 language section tested article rules and family vocabulary:"
              },
              {
                "type": "diagram",
                "content": "A   → consonant sound ('a university', 'a European')\nAN  → vowel sound ('an actress', 'an hour')\nTHE → specific\n\nMother's parents → Maternal grandparents\nHusband's brother → Brother-in-law"
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 19 Test",
      "subtitle": "Answer without looking back.",
      "questions": [
        {
          "id": "m-d19-q1",
          "question": "Q1. The primary purpose of a database index is to:",
          "options": [
            "Encrypt every row",
            "Speed up data retrieval",
            "Replace the database",
            "Remove Primary Keys",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A database index is an auxiliary data structure built to accelerate data retrieval and search performance. Correct: (B) Speed up data retrieval."
        },
        {
          "id": "m-d19-q2",
          "question": "Q2. Which is a possible cost of maintaining indexes?",
          "options": [
            "Extra storage and update overhead",
            "Tables cannot be queried",
            "SQL stops working",
            "Primary Keys become invalid",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Indexes consume auxiliary disk space and incur performance overhead during INSERT, UPDATE, and DELETE operations as index structures must be maintained. Correct: (A) Extra storage and update overhead."
        },
        {
          "id": "m-d19-q3",
          "question": "Q3. A B-Tree is best described as:",
          "options": [
            "Unbalanced binary tree only",
            "Balanced multi-way search tree",
            "Stack",
            "Queue",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A B-Tree is a self-balancing multi-way search tree optimized for systems that read and write large blocks of memory (disk storage). Correct: (B) Balanced multi-way search tree."
        },
        {
          "id": "m-d19-q4",
          "question": "Q4. A B-Tree node may generally have:",
          "options": [
            "Only one child",
            "At most two children always",
            "Multiple children",
            "No keys",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "Unlike binary search trees which have at most two children, B-Tree nodes can hold multiple keys and have multiple children. Correct: (C) Multiple children."
        },
        {
          "id": "m-d19-q5",
          "question": "Q5. A B+ Tree normally keeps the indexed data entries/record references primarily at:",
          "options": [
            "Root only",
            "Leaf level",
            "Every CPU register",
            "Stack top",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "In a B+ Tree, internal nodes only store router keys to guide the search, while all actual data pointers/records reside at the leaf level. Correct: (B) Leaf level."
        },
        {
          "id": "m-d19-q6",
          "question": "Q6. A key feature of B+ Tree leaf nodes is that they are commonly:",
          "options": [
            "Disconnected",
            "Linked",
            "Always empty",
            "Binary only",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Leaf nodes in a B+ Tree are linked together in sequential order as a linked list to facilitate rapid in-order and range scans. Correct: (B) Linked."
        },
        {
          "id": "m-d19-q7",
          "question": "Q7. Why are linked B+ Tree leaves useful?",
          "options": [
            "Range traversal",
            "Stack recursion only",
            "Hash collision only",
            "CPU scheduling",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Linked leaves allow range queries (e.g. BETWEEN 70 AND 90) to be satisfied by finding the start key and then sequentially traversing the leaf pointers without re-searching the tree. Correct: (A) Range traversal."
        },
        {
          "id": "m-d19-q8",
          "question": "Q8. Which is correctly matched?",
          "options": [
            "Binary Tree → unlimited children",
            "B-Tree → multi-way balanced tree",
            "Stack → FIFO",
            "Queue → LIFO",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "B-Tree is a multi-way balanced search tree. (Binary tree has max 2 children, Stack is LIFO, Queue is FIFO). Correct: (B) B-Tree → multi-way balanced tree."
        },
        {
          "id": "m-d19-q9",
          "question": "Q9. A Clustered Index is conceptually associated with:",
          "options": [
            "Data organization following the clustering order",
            "A completely separate unrelated database",
            "Hash collision only",
            "Stack frame",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "A clustered index defines the physical order in which table rows are actually stored on disk. Correct: (A) Data organization following the clustering order."
        },
        {
          "id": "m-d19-q10",
          "question": "Q10. A Non-Clustered Index is easiest to visualize as:",
          "options": [
            "Separate lookup structure pointing to data",
            "Destroying table rows",
            "Database transaction",
            "Primary Key itself",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "A non-clustered index is stored separately from the data rows and contains key values alongside row locators/pointers to the actual data. Correct: (A) Separate lookup structure pointing to data."
        },
        {
          "id": "m-d19-q11",
          "question": "Q11. Which analogy best represents a Non-Clustered Index?",
          "options": [
            "Book's separate index pointing to page numbers",
            "Burning the book",
            "Removing its pages",
            "Writing every page randomly",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "A non-clustered index is analogous to an index at the back of a textbook: words are listed alphabetically with pointers to page numbers without altering page layout. Correct: (A) Book's separate index pointing to page numbers."
        },
        {
          "id": "m-d19-q12",
          "question": "Q12. Primary Key primarily provides:",
          "options": [
            "Record identity/uniqueness",
            "Query speed only",
            "Compression only",
            "Backup only",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "A Primary Key is a logical integrity constraint that uniquely identifies each tuple/record in a relation. Correct: (A) Record identity/uniqueness."
        },
        {
          "id": "m-d19-q13",
          "question": "Q13. An Index primarily concerns:",
          "options": [
            "Data-access performance",
            "User authentication only",
            "ACID Atomicity",
            "Normalization only",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "An index is a performance-tuning physical access mechanism designed to speed up search queries. Correct: (A) Data-access performance."
        },
        {
          "id": "m-d19-q14",
          "question": "Q14. Which statement is correct?",
          "options": [
            "Every column must have an index",
            "More indexes always improve every operation",
            "Indexes can add overhead to inserts/updates/deletes",
            "Indexes use no storage",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "Every index must be updated whenever table data is inserted, updated, or deleted, adding significant maintenance overhead. Correct: (C) Indexes can add overhead to inserts/updates/deletes."
        },
        {
          "id": "m-d19-q15",
          "question": "Q15. Dense indexing generally has:",
          "options": [
            "More index entries",
            "No index entries",
            "Only one entry for entire database",
            "Only foreign keys",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "In a dense index, an index record appears for every search-key value in the data file. Correct: (A) More index entries."
        },
        {
          "id": "m-d19-q16",
          "question": "Q16. Sparse indexing generally uses:",
          "options": [
            "Selected/fewer index entries",
            "An entry for every byte",
            "No ordering concept ever",
            "Only Stack operations",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "In a sparse index, index records are created for only some data records (e.g. one per block), using fewer entries. Correct: (A) Selected/fewer index entries."
        },
        {
          "id": "m-d19-q17",
          "question": "Q17. The component that chooses an efficient query execution plan is commonly called:",
          "options": [
            "Query Optimizer",
            "Compiler Register",
            "Queue Scheduler",
            "Hash Collision",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "The Query Optimizer analyzes multiple query execution plans, evaluates statistical costs, and selects the most efficient execution path. Correct: (A) Query Optimizer."
        },
        {
          "id": "m-d19-q18",
          "question": "Q18. If an index exists, does a DBMS necessarily use it for every query?",
          "options": [
            "Yes, always",
            "No, optimizer may choose another plan",
            "Only if no table exists",
            "Index automatically executes SQL",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "If a query has low selectivity (e.g. returns most rows of a table), the query optimizer may determine that a full sequential table scan is cheaper than using the index. Correct: (B) No, optimizer may choose another plan."
        },
        {
          "id": "m-d19-q19",
          "question": "Q19. Which structure is especially suitable for ordered/range access due to linked leaves?",
          "options": [
            "B+ Tree",
            "Stack",
            "Queue",
            "Hash Stack",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "A B+ Tree with connected leaf nodes is the industry standard for range scans and ordered lookups. Correct: (A) B+ Tree."
        },
        {
          "id": "m-d19-q20",
          "question": "Q20. Which distinction is correct?",
          "options": [
            "Primary Key → identity; Index → performance",
            "Primary Key → performance only; Index → identity only",
            "Both are always identical concepts",
            "Neither is related to a database",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Primary Key is a logical integrity constraint providing unique identification; Index is a physical access structure optimizing search performance. Correct: (A) Primary Key → identity; Index → performance."
        },
        {
          "id": "m-d19-q21",
          "question": "Q21. Dry-point settlements are generally associated with:",
          "options": [
            "Relatively higher ground in flood-prone areas",
            "Deepest river channel",
            "Ocean floor",
            "Glacier interiors",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Dry-point settlements are established on elevated dry sites in flood-prone regions to escape inundation. Correct: (A) Relatively higher ground in flood-prone areas."
        },
        {
          "id": "m-d19-q22",
          "question": "Q22. Which Bihar place is strongly associated with silk?",
          "options": [
            "Bhagalpur",
            "Bhojpur",
            "Gaya",
            "Nalanda",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Bhagalpur is famously renowned as the 'Silk City' of Bihar for Tussar silk weaving. Correct: (A) Bhagalpur."
        },
        {
          "id": "m-d19-q23",
          "question": "Q23. Tehran is associated with which mountain region in the TRE question?",
          "options": [
            "Alborz/Alburz",
            "Zagros only",
            "Makran",
            "Aravalli",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Tehran (the capital of Iran) is situated at the foot of the Alborz (Alburz) mountain range. Correct: (A) Alborz/Alburz."
        },
        {
          "id": "m-d19-q24",
          "question": "Q24. Choose the correct phrase:",
          "options": [
            "a actress",
            "an actress",
            "an university",
            "a hour",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "'actress' begins with a vowel sound /æ/, requiring the indefinite article 'an'. Correct: (B) an actress."
        },
        {
          "id": "m-d19-q25",
          "question": "Q25. Mother's parents are:",
          "options": [
            "Paternal grandparents",
            "Maternal grandparents",
            "Brother-in-law",
            "Cousins",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Grandparents on the mother's side are Maternal grandparents. Correct: (B) Maternal grandparents."
        }
      ]
    }
  },
  {
    "dayNumber": 20,
    "dayId": "day-20",
    "badge": "Day 20",
    "title": "TRE 4.0 — Day 20",
    "unit": "Part III (CS) • DBMS Full Revision + 50-Question Master Checkpoint (Days 15–19)",
    "targetTime": "25–30 mins recall + 45–50 mins test",
    "summary": "Today is revision + testing only. No new major DBMS topic. The goal is to verify that Days 15–19 are permanently mastered across Database Basics, Keys, Normalization, SQL, Transactions, ACID, Constraints, ER Model, and Indexing.",
    "targets": [
      {
        "section": "Step 1 — Recall",
        "topic": "10-Minute White-Paper Mental Map",
        "goal": "Reconstruct Database definitions, Keys, 1NF/2NF/3NF, SQL flow, ACID, ER model, and Indexing without looking"
      },
      {
        "section": "Part III — CS (DBMS Block)",
        "topic": "50-Question Comprehensive Checkpoint Test",
        "goal": "Score 40+/50 across Sections A to G without consulting reference notes"
      }
    ],
    "introNote": "Today is revision + testing only. No new major DBMS topic.\n\nYour uploaded TRE 2.0 paper directly tests database definition/types/features, ACID support, metadata, Superkey, DELETE, catalogs and schemas, Hierarchical DBMS, HAVING, and redundancy/inconsistency. TRE 3.0 directly tests DBMS type, Primary Key, 2NF, and INSERT.\n\nThe ER model, JOINs, transaction commands, architecture, and indexing/B+ Tree questions below are standard expansion from Days 16–19; I did not find those exact topics in the retrieved TRE excerpts.",
    "parts": [
      {
        "partId": "part-d20-recall",
        "title": "🧠 10-Minute White-Paper Revision",
        "sections": [
          {
            "title": "Days 15–19 Master White-Paper Recall",
            "blocks": [
              {
                "type": "text",
                "content": "Before attempting the test, close your notes and mentally write the core pillars:"
              },
              {
                "type": "diagram",
                "content": "DATABASE\n→ organized data\n\nDBMS\n→ manages database\n\nRDBMS\n→ tables\n\nThen:\nROW → Record\nCOLUMN → Attribute\n\nPRIMARY KEY\n→ unique identity\n\nFOREIGN KEY\n→ connects tables\n\nSUPERKEY\n→ one or more attributes that uniquely identify"
              },
              {
                "type": "diagram",
                "content": "METADATA\n→ data about data\n\nREDUNDANCY\n→ duplicate data\n\nINCONSISTENCY\n→ copies disagree\n\nNormalization:\n1NF → Atomic\n2NF → No Partial Dependency → Full dependency\n3NF → No Transitive Dependency"
              },
              {
                "type": "diagram",
                "content": "SQL:\nSELECT → Read\nINSERT → Add\nUPDATE → Change\nDELETE → Remove\n\nWHERE → filter rows\nGROUP BY → create groups\nHAVING → filter groups\n\nTransactions:\nACID\nA → All or nothing\nC → Correct state\nI → Independent\nD → Durable\n\nCommands:\nCOMMIT → Save\nROLLBACK → Undo\nSAVEPOINT → Checkpoint\n\nDELETE → rows\nTRUNCATE → all rows, table stays\nDROP → table gone"
              },
              {
                "type": "diagram",
                "content": "ER:\nENTITY → Thing\nATTRIBUTE → Property\nRELATIONSHIP → Connection\n\n1:1\n1:M\nM:N\n\nArchitecture:\nExternal → View\nConceptual → Design\nInternal → Storage\n\nIndex:\nINDEX → Faster lookup\n\nB-Tree → balanced multi-way\nB+ Tree → data entries at leaves, leaves linked\n\nPrimary Key → Identity\nIndex → Performance"
              },
              {
                "type": "callout",
                "icon": "🔥",
                "title": "Self-Check Benchmark",
                "content": "If you can reconstruct around 80% without looking, your entire DBMS foundation is rock-solid and exam-ready."
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 20 — 50 Question Test",
      "subtitle": "Rules: No notes. Try to finish in 45–50 minutes.",
      "questions": [
        {
          "id": "m-d20-q1",
          "question": "Q1. A database is best described as:",
          "options": [
            "Random collection of programs",
            "Organized collection of data that can be accessed and managed",
            "Only a collection of images",
            "Only operating-system files",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A database is an organized collection of data or information that can be easily accessed, managed, and updated. Correct: (B) Organized collection of data that can be accessed and managed."
        },
        {
          "id": "m-d20-q2",
          "question": "Q2. DBMS stands for:",
          "options": [
            "Database Management System",
            "Data Memory System",
            "Digital Base Management Service",
            "Database Machine Software",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "DBMS stands for Database Management System. Correct: (A) Database Management System."
        },
        {
          "id": "m-d20-q3",
          "question": "Q3. Which of the following is a DBMS example appearing in your TRE paper?",
          "options": [
            "Microsoft Access",
            "Google Search",
            "WhatsApp",
            "Chrome",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Microsoft Access (along with IBM Db2) is a relational database management system tested in TRE papers. Correct: (A) Microsoft Access."
        },
        {
          "id": "m-d20-q4",
          "question": "Q4. Which is not a typical DBMS feature according to the TRE question?",
          "options": [
            "Reduced duplication/redundancy",
            "ACID support",
            "Single-user access only",
            "Data management",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "Modern enterprise DBMSs provide multi-user concurrent access with isolation, not single-user access only. Correct: (C) Single-user access only."
        },
        {
          "id": "m-d20-q5",
          "question": "Q5. Information about data is called:",
          "options": [
            "Transaction",
            "Metadata",
            "Relation",
            "Query",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Metadata is defined as data about data (schemas, column definitions, constraints). Correct: (B) Metadata."
        },
        {
          "id": "m-d20-q6",
          "question": "Q6. Unnecessary repetition of the same data is called:",
          "options": [
            "Isolation",
            "Redundancy",
            "Cardinality",
            "Durability",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Data redundancy is the unnecessary duplication of the same information in multiple places. Correct: (B) Redundancy."
        },
        {
          "id": "m-d20-q7",
          "question": "Q7. If two copies of the same information are changed differently, the problem is:",
          "options": [
            "Data inconsistency",
            "Normalization",
            "Atomicity",
            "Indexing",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "When redundant data copies disagree after partial updates, it causes data inconsistency. Correct: (A) Data inconsistency."
        },
        {
          "id": "m-d20-q8",
          "question": "Q8. In a relational table, a row represents:",
          "options": [
            "Attribute",
            "Record",
            "Database",
            "Schema only",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A row in a relational table represents a single Record (or Tuple). Correct: (B) Record."
        },
        {
          "id": "m-d20-q9",
          "question": "Q9. A column normally represents:",
          "options": [
            "Attribute/field",
            "Complete transaction",
            "Database server",
            "Record set only",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "A column represents an Attribute, Field, or property of the entity. Correct: (A) Attribute/field."
        },
        {
          "id": "m-d20-q10",
          "question": "Q10. Which model is easiest to visualize as a tree structure?",
          "options": [
            "Hierarchical DBMS",
            "Relational DBMS",
            "Stack DBMS",
            "Sequential DBMS",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "A hierarchical database organizes data in an inverted tree-like structure with parent-child relationships. Correct: (A) Hierarchical DBMS."
        },
        {
          "id": "m-d20-q11",
          "question": "Q11. A Primary Key is used to:",
          "options": [
            "Uniquely identify each record",
            "Sort records only",
            "Store passwords only",
            "Delete tables",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "A Primary Key uniquely identifies each row in a relation and cannot contain NULL values. Correct: (A) Uniquely identify each record."
        },
        {
          "id": "m-d20-q12",
          "question": "Q12. Which statement about a Primary Key is correct?",
          "options": [
            "Duplicate values are normally allowed freely",
            "It identifies rows uniquely",
            "It is used only for arithmetic",
            "It must always be a person's name",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Primary Keys must satisfy uniqueness and non-null constraints to guarantee entity integrity. Correct: (B) It identifies rows uniquely."
        },
        {
          "id": "m-d20-q13",
          "question": "Q13. A Foreign Key mainly:",
          "options": [
            "Connects related tables",
            "Deletes databases",
            "Replaces SQL",
            "Sorts arrays",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "A Foreign Key establishes a relationship between tables by referencing the Primary Key of another table. Correct: (A) Connects related tables."
        },
        {
          "id": "m-d20-q14",
          "question": "Q14. A set of one or more attributes that collectively uniquely identifies a record is called:",
          "options": [
            "Foreign Key",
            "Superkey",
            "Metadata",
            "View",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Any superset of attributes whose values uniquely identify records in a table is a Superkey. Correct: (B) Superkey."
        },
        {
          "id": "m-d20-q15",
          "question": "Q15. Which is the best memory rule?",
          "options": [
            "Primary Key → Identity",
            "Primary Key → Backup",
            "Primary Key → Transaction rollback",
            "Primary Key → Query optimizer",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Primary Key serves as the core Identity Card for records in a table. Correct: (A) Primary Key → Identity."
        },
        {
          "id": "m-d20-q16",
          "question": "Q16. A → B means:",
          "options": [
            "B determines A only",
            "A determines B",
            "A equals B",
            "A deletes B",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A → B denotes a functional dependency where knowing the value of A uniquely determines the value of B. Correct: (B) A determines B."
        },
        {
          "id": "m-d20-q17",
          "question": "Q17. A dependency on only part of a composite key is:",
          "options": [
            "Full dependency",
            "Partial dependency",
            "Transitive dependency",
            "Multilevel indexing",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "When a non-prime attribute depends on a proper subset (part) of a composite candidate key, it is a Partial Dependency. Correct: (B) Partial dependency."
        },
        {
          "id": "m-d20-q18",
          "question": "Q18. Which pattern represents transitive dependency?",
          "options": [
            "A → B → C",
            "A = A",
            "A + B",
            "A ← A",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Transitive dependency occurs when A determines B, and B determines C, creating an indirect dependency A → C through B: A → B → C. Correct: (A) A → B → C."
        },
        {
          "id": "m-d20-q19",
          "question": "Q19. 1NF mainly requires:",
          "options": [
            "Atomic values",
            "No Primary Key",
            "No tables",
            "No Foreign Keys",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "First Normal Form (1NF) disallows multivalued or composite attributes; every cell must contain an atomic (indivisible) value. Correct: (A) Atomic values."
        },
        {
          "id": "m-d20-q20",
          "question": "Q20. TRE 3.0 associates full functional dependency on the Primary Key with:",
          "options": [
            "1NF",
            "2NF",
            "3NF",
            "4NF",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Second Normal Form (2NF) mandates that all non-prime attributes are fully functionally dependent on the complete primary key (no partial dependency). Correct: (B) 2NF."
        },
        {
          "id": "m-d20-q21",
          "question": "Q21. 2NF primarily removes:",
          "options": [
            "Partial dependency",
            "Transitive dependency",
            "Primary Key",
            "Tables",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "2NF eliminates partial dependencies where non-prime attributes depend on only a part of a composite key. Correct: (A) Partial dependency."
        },
        {
          "id": "m-d20-q22",
          "question": "Q22. 3NF is best remembered as removing:",
          "options": [
            "Atomicity",
            "Transitive dependency",
            "Foreign Keys",
            "SQL commands",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "3NF eliminates transitive dependencies (non-prime attributes determining other non-prime attributes). Correct: (B) Transitive dependency."
        },
        {
          "id": "m-d20-q23",
          "question": "Q23. Which normalization sequence is correct?",
          "options": [
            "1NF Atomic → 2NF No Partial → 3NF No Transitive",
            "1NF No Transitive → 2NF Atomic → 3NF Partial",
            "1NF Partial → 2NF Transitive → 3NF Atomic",
            "All are identical",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "1NF enforces atomic values; 2NF removes partial dependency; 3NF removes transitive dependency. Correct: (A) 1NF Atomic → 2NF No Partial → 3NF No Transitive."
        },
        {
          "id": "m-d20-q24",
          "question": "Q24. Which SQL command reads data?",
          "options": [
            "SELECT",
            "INSERT",
            "DELETE",
            "DROP",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "SELECT queries and retrieves data records from database tables. Correct: (A) SELECT."
        },
        {
          "id": "m-d20-q25",
          "question": "Q25. TRE 3.0 asks which command adds new rows. The correct command is:",
          "options": [
            "ADD",
            "INSERT",
            "CREATE",
            "ALTER",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "INSERT INTO inserts new records/rows into an existing table. Correct: (B) INSERT."
        },
        {
          "id": "m-d20-q26",
          "question": "Q26. Which command modifies existing rows?",
          "options": [
            "UPDATE",
            "SELECT",
            "DROP",
            "CREATE",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "UPDATE modifies existing values within table records according to criteria. Correct: (A) UPDATE."
        },
        {
          "id": "m-d20-q27",
          "question": "Q27. Which command removes rows?",
          "options": [
            "DELETE",
            "INSERT",
            "ALTER",
            "CREATE",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "DELETE removes specified rows from a table while keeping the table definition. Correct: (A) DELETE."
        },
        {
          "id": "m-d20-q28",
          "question": "Q28. Which clause filters individual rows?",
          "options": [
            "WHERE",
            "HAVING",
            "GROUP BY",
            "COMMIT",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "The WHERE clause filters individual rows before grouping occurs. Correct: (A) WHERE."
        },
        {
          "id": "m-d20-q29",
          "question": "Q29. Which clause forms groups?",
          "options": [
            "WHERE",
            "GROUP BY",
            "HAVING",
            "DELETE",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "GROUP BY summarizes rows sharing common values into distinct groups. Correct: (B) GROUP BY."
        },
        {
          "id": "m-d20-q30",
          "question": "Q30. TRE 2.0 asks which clause applies predicates after groups have been created. It is:",
          "options": [
            "WHERE",
            "HAVING",
            "INSERT",
            "DROP",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "HAVING applies conditions to summarized groups after GROUP BY execution. Correct: (B) HAVING."
        },
        {
          "id": "m-d20-q31",
          "question": "Q31. Which is correct?",
          "options": [
            "WHERE → rows, HAVING → groups",
            "WHERE → groups, HAVING → rows",
            "Both always mean exactly the same thing",
            "Neither filters anything",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "WHERE filters rows before grouping; HAVING filters groups after grouping. Correct: (A) WHERE → rows, HAVING → groups."
        },
        {
          "id": "m-d20-q32",
          "question": "Q32. Which aggregate function counts rows?",
          "options": [
            "AVG()",
            "COUNT()",
            "SUM()",
            "MAX()",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "COUNT() returns the total count of matching records. Correct: (B) COUNT()."
        },
        {
          "id": "m-d20-q33",
          "question": "Q33. Which JOIN normally returns matching rows from both tables?",
          "options": [
            "INNER JOIN",
            "LEFT JOIN",
            "RIGHT JOIN",
            "CROSS DELETE",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "INNER JOIN produces only matching records from both relations (set intersection). Correct: (A) INNER JOIN."
        },
        {
          "id": "m-d20-q34",
          "question": "Q34. LEFT JOIN keeps:",
          "options": [
            "All rows from the left plus matches",
            "Only right rows",
            "Only unmatched right rows",
            "No rows",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "LEFT JOIN retains all rows from the left table and appends matching columns from the right table (unmatched right columns become NULL). Correct: (A) All rows from the left plus matches."
        },
        {
          "id": "m-d20-q35",
          "question": "Q35. In ACID, Atomicity means:",
          "options": [
            "All or nothing",
            "Sorted data",
            "Faster indexing",
            "Metadata storage",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Atomicity guarantees that all steps of a transaction either execute completely, or are completely aborted (all-or-nothing). Correct: (A) All or nothing."
        },
        {
          "id": "m-d20-q36",
          "question": "Q36. Consistency means:",
          "options": [
            "Database remains in a valid state",
            "Every query uses an index",
            "Every transaction is deleted",
            "Every table has one row",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Consistency ensures the transaction transforms the database from one valid state to another, preserving all integrity rules. Correct: (A) Database remains in a valid state."
        },
        {
          "id": "m-d20-q37",
          "question": "Q37. Isolation means:",
          "options": [
            "Concurrent transactions should not improperly interfere",
            "Data is permanently stored",
            "No tables exist",
            "Every key is unique",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Isolation ensures concurrent transaction executions execute independently without observing intermediate uncommitted states of others. Correct: (A) Concurrent transactions should not improperly interfere."
        },
        {
          "id": "m-d20-q38",
          "question": "Q38. Durability means:",
          "options": [
            "Committed changes persist",
            "Changes are always rolled back",
            "Tables cannot change",
            "Rows remain unsorted",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Durability guarantees that committed modifications survive subsequent crashes or power outages permanently. Correct: (A) Committed changes persist."
        },
        {
          "id": "m-d20-q39",
          "question": "Q39. COMMIT means:",
          "options": [
            "Save transaction changes",
            "Undo transaction",
            "Drop table",
            "Remove schema",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "COMMIT makes all modifications performed during the current transaction permanent on disk. Correct: (A) Save transaction changes."
        },
        {
          "id": "m-d20-q40",
          "question": "Q40. ROLLBACK means:",
          "options": [
            "Undo uncommitted transaction changes",
            "Permanently save",
            "Create a table",
            "Add an index",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "ROLLBACK aborts the transaction and reverts all uncommitted modifications. Correct: (A) Undo uncommitted transaction changes."
        },
        {
          "id": "m-d20-q41",
          "question": "Q41. CREATE, ALTER, DROP, and TRUNCATE are commonly classified as:",
          "options": [
            "DDL",
            "DML",
            "DCL",
            "TCL",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Commands modifying database or table structure belong to Data Definition Language (DDL). Correct: (A) DDL."
        },
        {
          "id": "m-d20-q42",
          "question": "Q42. INSERT, UPDATE, and DELETE are commonly classified as:",
          "options": [
            "DDL",
            "DML",
            "DCL",
            "TCL",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Commands manipulating data records within tables belong to Data Manipulation Language (DML). Correct: (B) DML."
        },
        {
          "id": "m-d20-q43",
          "question": "Q43. GRANT and REVOKE belong to:",
          "options": [
            "DDL",
            "DML",
            "DCL",
            "TCL",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "Commands administering user security permissions and access rights belong to Data Control Language (DCL). Correct: (C) DCL."
        },
        {
          "id": "m-d20-q44",
          "question": "Q44. COMMIT, ROLLBACK, and SAVEPOINT belong to:",
          "options": [
            "DDL",
            "DML",
            "DCL",
            "TCL",
            "None of the above"
          ],
          "correctAnswer": 3,
          "explanation": "Commands managing transactional boundaries and undo points belong to Transaction Control Language (TCL). Correct: (D) TCL."
        },
        {
          "id": "m-d20-q45",
          "question": "Q45. Which constraint prevents NULL values?",
          "options": [
            "NOT NULL",
            "CHECK",
            "FOREIGN KEY",
            "DROP",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "The NOT NULL constraint enforces that a column cannot accept missing or NULL values. Correct: (A) NOT NULL."
        },
        {
          "id": "m-d20-q46",
          "question": "Q46. In an ER model:",
          "options": [
            "Entity = thing, Attribute = property",
            "Entity = property, Attribute = transaction",
            "Entity = index only",
            "Attribute = database server",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "An Entity is a distinguishable real-world object/concept; an Attribute is a characteristic property of that entity. Correct: (A) Entity = thing, Attribute = property."
        },
        {
          "id": "m-d20-q47",
          "question": "Q47. Students enrolling in many courses, while each course has many students, is:",
          "options": [
            "1:1",
            "1:M",
            "M:N",
            "0:1",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "A student takes many courses, and a course has many students: Many-to-Many (M:N) relationship. Correct: (C) M:N."
        },
        {
          "id": "m-d20-q48",
          "question": "Q48. Which distinction is correct?",
          "options": [
            "Schema = structure; Instance = current data",
            "Schema = current data; Instance = structure",
            "Both are always identical",
            "Neither belongs to DBMS",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "A Schema defines the static architectural structure/blueprint; an Instance is the dynamic population of actual data at a given point in time. Correct: (A) Schema = structure; Instance = current data."
        },
        {
          "id": "m-d20-q49",
          "question": "Q49. A B+ Tree is best remembered as:",
          "options": [
            "Balanced tree with indexed data entries at leaf level and linked leaves",
            "Stack with FIFO behavior",
            "Queue with LIFO behavior",
            "Hash table without keys",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "A B+ Tree stores all data references at the leaf level, and its leaf nodes are linked sequentially for efficient range scans. Correct: (A) Balanced tree with indexed data entries at leaf level and linked leaves."
        },
        {
          "id": "m-d20-q50",
          "question": "Q50. Which is the best distinction?",
          "options": [
            "Primary Key → identity; Index → performance",
            "Primary Key → performance only; Index → identity only",
            "Both mean exactly the same thing",
            "Index uniquely defines ACID",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Primary Key is a logical integrity constraint providing unique identification; Index is a physical data structure built to accelerate query lookup performance. Correct: (A) Primary Key → identity; Index → performance."
        }
      ]
    }
  },
  {
    "dayNumber": 21,
    "dayId": "day-21",
    "badge": "Day 21",
    "title": "TRE 4.0 — Day 21",
    "unit": "Part III (CS) • Process, Program, PCB, Process States, Context Switch, CPU Scheduling • Profit/Loss, Ratio & English",
    "targetTime": "18–20 mins read + 22 mins test",
    "summary": "Today we begin Operating Systems: Program vs Process, PCB contents, Process State transitions (New, Ready, Running, Waiting, Terminated), Context Switching overhead, CPU Scheduling algorithms (FCFS, SJF, Round Robin, Priority), Preemption, Thread resource sharing, and TRE FCFS disk head calculation.",
    "targets": [
      {
        "section": "Part III – CS",
        "topic": "Process, Program, PCB, Process States, Context Switch, CPU Scheduling",
        "goal": "Master Process vs Program, PCB components, State transitions, Context Switch overhead, Scheduling algorithms, and Thread code/data sharing"
      },
      {
        "section": "Part II – GS",
        "topic": "Profit/Loss + Ratio",
        "goal": "Marked up 10% then discounted 10% (-1% loss shortcut) and ratio difference calculation (44 & 110)"
      },
      {
        "section": "Part I – English",
        "topic": "Comprehension + Articles",
        "goal": "Passage scan technique and article rule ('an early morning walk')"
      }
    ],
    "introNote": "Today we start Operating Systems.\n\nYour TRE 3.0 paper has a substantial OS block: it asks about types of OS, paging/segmentation, file systems, interrupts, pages, page offset, segment base, thrashing, TLB, file operations, FCFS disk scheduling, and threads.\n\nProcess/Program, PCB, process states, context switching and CPU-scheduling details below are standard OS expansion for your TRE preparation; those exact questions were not present in the retrieved paper block.",
    "parts": [
      {
        "partId": "part-d21-process-pcb",
        "title": "Part III — Process, PCB & State Transitions",
        "sections": [
          {
            "title": "1. Program vs Process & 2. Process Memory Structure",
            "blocks": [
              {
                "type": "text",
                "content": "1. Program vs Process\n\n🧠 MENTAL PICTURE\nImagine a recipe book:\nRecipe written in book → PROGRAM (passive instructions stored on disk)\nRecipe being cooked in kitchen → PROCESS (program currently executing in memory)\n\nExample:\nchrome.exe on disk → PROGRAM\nYou double-click and open Chrome → PROCESS\n\nMemory: PROGRAM → Stored | PROCESS → Running"
              },
              {
                "type": "diagram",
                "content": "2. What does a Process contain?\n\nPROCESS\n  │\n  ├── Code section (Text)\n  ├── Data section (Global & static variables)\n  ├── Stack (Local variables, return addresses)\n  ├── Heap (Dynamically allocated memory)\n  ├── Registers\n  └── Program Counter (Address of next instruction)"
              },
              {
                "type": "callout",
                "icon": "📇",
                "title": "3. PCB — Process Control Block (Process Information Card)",
                "content": "Every student in an examination hall has an ID card. Similarly, the OS maintains a PCB for each running process containing:\n• Process ID (PID)\n• Process State (New, Ready, Running, Waiting, Terminated)\n• Program Counter (PC)\n• CPU Registers\n• CPU Scheduling Information (priority, queue pointers)\n• Memory-management information (page tables, base/limit registers)\n• I/O status information\n\nMemory: PCB tells OS everything needed to manage a process."
              }
            ]
          },
          {
            "title": "4. Process States & 5. READY vs WAITING Trap",
            "blocks": [
              {
                "type": "diagram",
                "content": "4. Process State Lifecycle\n\n              admitted\n   NEW ----------------→ READY\n                           │\n                           │ scheduler dispatch\n                           ↓\n                        RUNNING\n                        /      \\\n                       /        \\\n             I/O wait ↓          ↓ exit/finish\n                   WAITING    TERMINATED\n                       │\n                       │ I/O complete\n                       ↓\n                     READY\n\n• NEW        : Process is being created (Birth)\n• READY      : Ready to run, waiting for CPU assignment\n• RUNNING    : Currently executing on CPU\n• WAITING    : Blocked, waiting for I/O completion or an event\n• TERMINATED : Process has finished execution"
              },
              {
                "type": "callout",
                "icon": "⚠️",
                "title": "5. READY vs WAITING (Major Exam Trap)",
                "content": "• READY   → Everything available EXCEPT the CPU (actively waiting for CPU).\n• WAITING → Cannot run even if the CPU is completely idle because it is waiting for an I/O event or signal.\n\nMemory: Ready wants CPU | Waiting wants event/IO"
              }
            ]
          }
        ]
      },
      {
        "partId": "part-d21-cpu-scheduling",
        "title": "Part III — Context Switching & CPU Scheduling Algorithms",
        "sections": [
          {
            "title": "6. CPU Scheduler & 7. Context Switching Overhead",
            "blocks": [
              {
                "type": "text",
                "content": "6. CPU Scheduler\nWhen multiple processes reside in the READY QUEUE, the CPU Scheduler selects which process gets the CPU core next.\nMemory: Scheduler = chooses next process"
              },
              {
                "type": "diagram",
                "content": "7. Context Switching\nSuppose the CPU switches from P1 to P2:\n\nP1 RUNNING\n     ↓\nSAVE P1 state to PCB1\n     ↓\nLOAD P2 state from PCB2\n     ↓\nP2 RUNNING\n\nMemory: Context Switch = SAVE old + LOAD new\n\n⚠️ Important Exam Fact:\nContext switching does not perform useful application work; it is pure PURE SCHEDULING OVERHEAD."
              }
            ]
          },
          {
            "title": "8. CPU Scheduling Algorithms & 13. Preemption",
            "blocks": [
              {
                "type": "diagram",
                "content": "8. Core CPU Scheduling Algorithms\n\n9. FCFS (First Come, First Served)\n• Ticket counter order: P1 → P2 → P3\n• Simple, queue-based, typically non-preemptive\n\n10. SJF (Shortest Job First)\n• P1 (10ms), P2 (2ms), P3 (5ms) → Chooses P2 first\n• Selects the process with the smallest CPU burst time (optimal average waiting time)\n\n11. Round Robin (RR)\n• Time-sharing: Each process receives a fixed time slice (Time Quantum)\n• Cyclic execution: P1 → P2 → P3 → P1\n• Preemptive scheduling\n\n12. Priority Scheduling\n• Process with highest priority allocated CPU first"
              },
              {
                "type": "callout",
                "icon": "⏱️",
                "title": "13. Preemptive vs Non-Preemptive",
                "content": "• NON-PREEMPTIVE: Once allocated, process retains CPU until completion or voluntary wait (e.g. basic FCFS).\n• PREEMPTIVE    : OS can forcibly take the CPU away (e.g. Round Robin timer interrupt, priority preemption)."
              }
            ]
          },
          {
            "title": "14. Threads & 15. TRE 3.0 Disk Calculation",
            "blocks": [
              {
                "type": "callout",
                "icon": "🧵",
                "title": "14. Thread — Source-Backed TRE 3.0 Point",
                "content": "TRE 3.0 directly asks what a thread shares with other peer threads in the same process:\n\n✅ SHARED     : Code section, Data section, Address space, OS resources / files\n❌ NOT SHARED : Thread ID, Program Counter (PC), CPU Registers, Call Stack\n\nMemory: Threads share the house (code & data), but have their own desk (registers & stack)."
              },
              {
                "type": "diagram",
                "content": "15. TRE 3.0 FCFS Disk-Scheduling Question\n\nRequests: 98, 183, 37, 122, 14, 124, 65, 67\nInitial head position: 53\nPrinciple: Follow requests strictly in arrival order (no reordering)!\n\n53 → 98  = 45\n98 → 183 = 85\n183 → 37 = 146\n37 → 122 = 85\n122 → 14 = 108\n14 → 124 = 110\n124 → 65 = 59\n65 → 67  = 2\n\nTotal Head Movements = 45 + 85 + 146 + 85 + 108 + 110 + 59 + 2 = 640"
              },
              {
                "type": "diagram",
                "content": "Day 21 White-Paper Master Sheet\n\nPROGRAM       → Passive instructions on disk\nPROCESS       → Active program in execution\n\nPCB           → Process info (PID, State, PC, Registers)\n\nSTATES        → NEW → READY → RUNNING → WAITING → READY\n                RUNNING → TERMINATED\nREADY         → Waiting for CPU\nWAITING       → Waiting for event/I/O\n\nCONTEXT SWITCH→ Save old + Load new (Overhead)\n\nSCHEDULING:\nFCFS          → First arrival (Queue)\nSJF           → Shortest CPU burst\nROUND ROBIN   → Time quantum (Preemptive)\nPRIORITY      → Priority rank\n\nTHREADS       → Share Code & Data sections"
              }
            ]
          }
        ]
      },
      {
        "partId": "part-d21-gs-math",
        "title": "Part II — General Studies: Profit/Loss & Ratio",
        "sections": [
          {
            "title": "Direct TRE 3.0 Math Patterns",
            "blocks": [
              {
                "type": "diagram",
                "content": "1. Profit/Loss Discount Pattern (TRE 3.0 Exact Pattern)\nMarked 10% above CP and 10% discount given:\nAssume CP = ₹100 → MP = ₹110 → Discount 10% of 110 = ₹11 → SP = ₹99\nLoss = ₹100 - ₹99 = ₹1 (1% Loss)\n\nShortcut Formula: +x% followed by -x% gives x²/100 % Loss\nFor x = 10: 10²/100 = 100/100 = 1% Loss"
              },
              {
                "type": "diagram",
                "content": "2. Ratio Difference Problem\nTwo numbers in ratio 2:5 differ by 66:\nDifference in ratio units = 5 - 2 = 3 parts\n3 parts = 66 → 1 part = 22\nNumbers: 2 × 22 = 44 and 5 × 22 = 110"
              }
            ]
          }
        ]
      },
      {
        "partId": "part-d21-english",
        "title": "Part I — English: Comprehension & Articles",
        "sections": [
          {
            "title": "Comprehension Technique & Articles",
            "blocks": [
              {
                "type": "diagram",
                "content": "Comprehension Strategy:\nQuestion → Keyword → Scan Passage → Match → Answer\n\nArticle Sound Rule:\n\"early\" begins with vowel sound /ɜː/:\n\"You should go for an early morning walk.\""
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 21 Test",
      "subtitle": "Answer without looking back.",
      "questions": [
        {
          "id": "m-d21-q1",
          "question": "Q1. A program is best described as:",
          "options": [
            "A program currently executing",
            "A passive set of instructions",
            "PCB only",
            "CPU register only",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A program is a passive entity (such as an executable file stored on disk) containing instructions waiting to be loaded. Correct: (B) A passive set of instructions."
        },
        {
          "id": "m-d21-q2",
          "question": "Q2. A process is:",
          "options": [
            "A program in execution",
            "A database table",
            "Only source code stored on disk",
            "A compiler",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "A process is an active program currently in execution with its own address space, stack, registers, and program counter. Correct: (A) A program in execution."
        },
        {
          "id": "m-d21-q3",
          "question": "Q3. PCB stands for:",
          "options": [
            "Process Control Block",
            "Program CPU Buffer",
            "Process Central Bus",
            "Program Control Base",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "PCB stands for Process Control Block. Correct: (A) Process Control Block."
        },
        {
          "id": "m-d21-q4",
          "question": "Q4. Which information can normally be stored in a PCB?",
          "options": [
            "Process state",
            "Program counter",
            "CPU registers",
            "More than one of the above",
            "None of the above"
          ],
          "correctAnswer": 3,
          "explanation": "A PCB stores comprehensive process data including PID, process state, program counter, CPU registers, memory limits, and open file lists. Correct: (D) More than one of the above."
        },
        {
          "id": "m-d21-q5",
          "question": "Q5. A process waiting to receive the CPU is normally in:",
          "options": [
            "Running state",
            "Ready state",
            "Terminated state",
            "New state only",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A process that has all required resources and is only waiting to be allocated CPU execution time resides in the Ready state. Correct: (B) Ready state."
        },
        {
          "id": "m-d21-q6",
          "question": "Q6. A process waiting for an I/O operation is normally:",
          "options": [
            "Ready",
            "Running",
            "Waiting/Blocked",
            "Terminated",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "When a process cannot continue until an I/O device finishes or a signal arrives, it enters the Waiting (or Blocked) state. Correct: (C) Waiting/Blocked."
        },
        {
          "id": "m-d21-q7",
          "question": "Q7. Which process currently possesses the CPU?",
          "options": [
            "Ready process",
            "Running process",
            "Waiting process",
            "Terminated process",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "The process actively executing instructions on the CPU is in the Running state. Correct: (B) Running process."
        },
        {
          "id": "m-d21-q8",
          "question": "Q8. Which statement is correct?",
          "options": [
            "Ready waits for I/O",
            "Waiting always has CPU",
            "Ready waits for CPU",
            "Terminated waits for CPU",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "A Ready process is fully prepared to execute and is waiting exclusively for CPU scheduling dispatch. Correct: (C) Ready waits for CPU."
        },
        {
          "id": "m-d21-q9",
          "question": "Q9. A context switch primarily involves:",
          "options": [
            "Save old process state and load another",
            "Delete all processes",
            "Format disk",
            "Compile a program",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Context switching stores the state (context) of the currently running process into its PCB and restores the saved state of another process. Correct: (A) Save old process state and load another."
        },
        {
          "id": "m-d21-q10",
          "question": "Q10. Context switching is generally considered:",
          "options": [
            "CPU scheduling overhead",
            "Database normalization",
            "File encryption",
            "Cache memory",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "During a context switch, the CPU performs no useful computational user work; hence, context switching time represents pure system overhead. Correct: (A) CPU scheduling overhead."
        },
        {
          "id": "m-d21-q11",
          "question": "Q11. FCFS stands for:",
          "options": [
            "First CPU First Stop",
            "First Come First Served",
            "Fastest Come Fastest Served",
            "First Context First Schedule",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "FCFS stands for First Come, First Served. Correct: (B) First Come First Served."
        },
        {
          "id": "m-d21-q12",
          "question": "Q12. SJF selects:",
          "options": [
            "Process with shortest CPU burst",
            "Process with largest PID",
            "Process with most memory",
            "Last arriving process",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Shortest Job First (SJF) schedules the process possessing the shortest predicted/actual next CPU burst time. Correct: (A) Process with shortest CPU burst."
        },
        {
          "id": "m-d21-q13",
          "question": "Q13. Round Robin scheduling is strongly associated with:",
          "options": [
            "Time quantum",
            "B+ Tree",
            "Foreign Key",
            "Hash collision",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Round Robin defines a fixed time slice or Time Quantum per process turn. Correct: (A) Time quantum."
        },
        {
          "id": "m-d21-q14",
          "question": "Q14. Which scheduling algorithm gives processes turns repeatedly using time slices?",
          "options": [
            "FCFS",
            "Round Robin",
            "SJF only",
            "DFS",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Round Robin cyclically allocates the CPU to each process in the ready queue for a defined time slice. Correct: (B) Round Robin."
        },
        {
          "id": "m-d21-q15",
          "question": "Q15. Preemptive scheduling means:",
          "options": [
            "CPU can be taken from a running process",
            "Running process can never lose CPU",
            "Every process immediately terminates",
            "No scheduler is required",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "In preemptive scheduling, the OS kernel can interrupt and deallocate the CPU from an executing process (e.g. on time slice expiration or high-priority arrival). Correct: (A) CPU can be taken from a running process."
        },
        {
          "id": "m-d21-q16",
          "question": "Q16. Which is a typical non-preemptive algorithm in its basic form?",
          "options": [
            "FCFS",
            "Round Robin",
            "None can be non-preemptive",
            "Paging",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "In basic First Come First Served (FCFS), once a process gets the CPU, it holds it until termination or I/O request. Correct: (A) FCFS."
        },
        {
          "id": "m-d21-q17",
          "question": "Q17. According to your TRE 3.0 question, threads in the same process share:",
          "options": [
            "Thread ID",
            "Program counter",
            "Code section and data section",
            "Individual stack",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "Threads of a common process share their code section, data section, and OS resources, while keeping private stacks, registers, and program counters. Correct: (C) Code section and data section."
        },
        {
          "id": "m-d21-q18",
          "question": "Q18. In the TRE FCFS disk-scheduling problem, the disk head begins at 53. What principle must you follow?",
          "options": [
            "Sort requests ascending first",
            "Follow requests in arrival order",
            "Always move toward zero",
            "Always choose closest request",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "FCFS disk scheduling serves I/O requests strictly in the exact order they arrive without reordering. Correct: (B) Follow requests in arrival order."
        },
        {
          "id": "m-d21-q19",
          "question": "Q19. For requests:\n\n98, 183, 37, 122, 14, 124, 65, 67\n\nstarting from 53, FCFS total head movement is:",
          "options": [
            "620",
            "630",
            "640",
            "650",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "|53-98| + |98-183| + |183-37| + |37-122| + |122-14| + |14-124| + |124-65| + |65-67| = 45 + 85 + 146 + 85 + 108 + 110 + 59 + 2 = 640. Correct: (C) 640."
        },
        {
          "id": "m-d21-q20",
          "question": "Q20. Which is listed in TRE 3.0 as an operating-system type?",
          "options": [
            "Real-time OS",
            "Embedded OS",
            "Network OS",
            "More than one of the above",
            "None of the above"
          ],
          "correctAnswer": 3,
          "explanation": "TRE 3.0 specifically presents Real-time OS, Embedded OS, and Network OS as valid operating system types. Correct: (D) More than one of the above."
        },
        {
          "id": "m-d21-q21",
          "question": "Q21. An item is marked 10% above cost price and then sold at a 10% discount. Result:",
          "options": [
            "1% gain",
            "1% loss",
            "No gain/no loss",
            "10% loss",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "CP=100 → MP=110 → Discount=11 → SP=99. Net loss = 1%. Shortcut: 10²/100 = 1% loss. Correct: (B) 1% loss."
        },
        {
          "id": "m-d21-q22",
          "question": "Q22. Two numbers are in the ratio 2:5 and their difference is 66. They are:",
          "options": [
            "22 and 88",
            "44 and 110",
            "66 and 132",
            "33 and 99",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Difference = 5x - 2x = 3x = 66 → x = 22. First = 2(22) = 44, Second = 5(22) = 110. Correct: (B) 44 and 110."
        },
        {
          "id": "m-d21-q23",
          "question": "Q23. If cost price is ₹100, increased by 10% and then decreased by 10%, the final value is:",
          "options": [
            "₹100",
            "₹101",
            "₹99",
            "₹90",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "100 + 10% = 110. 110 - 10% (11) = 99. Correct: (C) ₹99."
        },
        {
          "id": "m-d21-q24",
          "question": "Q24. Choose the correct article:\n\n“You should go for ___ early morning walk.”",
          "options": [
            "a",
            "an",
            "the",
            "no article",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "'early' begins with the vowel sound /ɜː/, taking the indefinite article 'an': 'an early morning walk'. Correct: (B) an."
        },
        {
          "id": "m-d21-q25",
          "question": "Q25. For comprehension questions, the safest strategy is:",
          "options": [
            "Answer from personal knowledge",
            "Question → keyword → scan passage → match",
            "Read options only",
            "Guess without reading passage",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Targeted scanning: Identify the keyword in the question, scan the reading passage for that term, match the textual fact, and select the correct option. Correct: (B) Question → keyword → scan passage → match."
        }
      ]
    }
  },
  {
    "dayNumber": 22,
    "dayId": "day-22",
    "badge": "Day 22",
    "title": "TRE 4.0 — Day 22",
    "unit": "Part III (CS) • Paging, Frames, Page Offset, Page Table, TLB, Segmentation, Virtual Memory, Thrashing • Math & English",
    "targetTime": "18–20 mins read + 22 mins test",
    "summary": "Today we dive deep into Operating System Memory Management: Paging (fixed-size virtual blocks), Frames (physical memory), Page Table mapping, Page Offset calculation (4 KB = 12 bits), TLB associative cache, Virtual Memory, Demand Paging, Page Faults, Thrashing, Segmentation (logical variable-size blocks), Segment Base, and Internal vs External Fragmentation.",
    "targets": [
      {
        "section": "Part III – CS",
        "topic": "Paging, Page/Frame, Page Offset, Page Table, TLB, Segmentation, Virtual Memory, Thrashing",
        "goal": "Master Page vs Frame, offset bit calculations (2ⁿ rule), TLB associative cache, thrashing, and Segmentation vs Paging"
      },
      {
        "section": "Part II – GS",
        "topic": "Successive Percentage Change",
        "goal": "+x% then -x% net loss formula (x²/100 % loss; e.g. +20% and -20% gives 4% loss)"
      },
      {
        "section": "Part I – English",
        "topic": "Comprehension + Articles",
        "goal": "Passage scan technique and article rules ('an airport', 'an early morning walk', 'a university')"
      }
    ],
    "introNote": "Your TRE 3.0 paper directly asks:\n• Which is not an OS memory-management technique → Fragmentation\n• What is a page → fixed-size block of virtual memory\n• For 4 KB page size, page-offset bits → 12\n• What is segment base → starting address of a segment in physical memory\n• What causes thrashing → excessive paging activity\n• TLB organization → associative cache\n• A virtual-memory/swapping calculation (10 GB - 6 GB = 4 GB)\n\nThe detailed Page Table, frame mapping, page fault, demand paging, and deeper comparisons below are standard OS expansion for your exam preparation.",
    "parts": [
      {
        "partId": "part-d22-paging-addressing",
        "title": "Part III — Paging, Frames & Address Translation",
        "sections": [
          {
            "title": "1. Why Memory Management?, 2. Paging & 3. Frame",
            "blocks": [
              {
                "type": "text",
                "content": "1. Why Memory Management?\n\n🧠 MENTAL PICTURE\nImagine RAM is a hotel:\nRAM: [ Process A | Process B | Process C | Free Space ]\nMany programs want memory at the same time. The OS must decide: Who gets which memory space? That's memory management."
              },
              {
                "type": "diagram",
                "content": "2. Paging (TRE 3.0 Direct Definition)\nPaging divides virtual/logical memory into fixed-size blocks called: PAGES.\nTRE 3.0 directly defines a page as: fixed-size block of virtual memory.\nMemory: PAGE = Virtual Memory block\n\n3. Frame\nPhysical RAM is also divided into equal-size blocks called: FRAMES.\nMemory: FRAME = Physical Memory block in RAM\n\nTypically: Page size = Frame size"
              },
              {
                "type": "callout",
                "icon": "🔥",
                "title": "Page vs Frame Memory Trick",
                "content": "PAGE  → Virtual (P for Program / Virtual side)\nFRAME → Physical (F for Physical Frame in RAM)"
              }
            ]
          },
          {
            "title": "4. Page Mapping, 5. Page Table & 7. Page Offset Calculation",
            "blocks": [
              {
                "type": "text",
                "content": "4. Page Mapping\nPages do not need to sit contiguously in RAM:\nPage 0 → Frame 5 | Page 1 → Frame 2 | Page 2 → Frame 8 | Page 3 → Frame 1\n\n5. Page Table\nHotel reception register mapping: Page Number → Frame Number."
              },
              {
                "type": "diagram",
                "content": "6. Logical Address Structure:\n[ PAGE NUMBER ] [ OFFSET ]\n• Page number tells: Which page?\n• Offset tells: Which exact byte inside that page?\n\n7. Page Offset Calculation (Direct TRE 3.0 Exam Question):\nQuestion: Page size = 4 KB. How many offset bits?\n\n4 KB = 4 × 1024 bytes = 4096 bytes = 2¹² bytes\nTherefore: Offset = 12 bits\n\nMemory Rule: If Page size = 2ⁿ bytes, then Offset bits = n\n• 1 KB = 2¹⁰ → 10 bits\n• 2 KB = 2¹¹ → 11 bits\n• 4 KB = 2¹² → 12 bits\n• 8 KB = 2¹³ → 13 bits"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "8. Address Translation Flow",
                "content": "CPU Virtual Address (Page + Offset)\n       ↓\nPage Number looked up in PAGE TABLE\n       ↓\nFrame Number retrieved\n       ↓\nPhysical Address = Frame Number + Same Offset\n\nMemory Rule: Page changes to Frame; Offset stays the exact same!"
              }
            ]
          }
        ]
      },
      {
        "partId": "part-d22-tlb-virtual-mem",
        "title": "Part III — TLB, Virtual Memory, Page Faults & Thrashing",
        "sections": [
          {
            "title": "9. TLB (Translation Lookaside Buffer)",
            "blocks": [
              {
                "type": "diagram",
                "content": "9. TLB (Translation Lookaside Buffer)\nPage-table lookup in RAM takes time, so the CPU uses a very fast associative hardware cache: TLB.\nTRE 3.0 asks how TLB is typically organized: Associative Cache.\n\n10. TLB Hit vs Miss:\n• TLB Hit  : Page found in TLB → Instant Frame translation (Fast!)\n• TLB Miss : Page not in TLB → Look up in main Page Table → Frame (Slower)\n\nMemory: TLB = Fast associative cache of page-table entries"
              }
            ]
          },
          {
            "title": "11. Virtual Memory, 12. Demand Paging & 13. Page Fault",
            "blocks": [
              {
                "type": "text",
                "content": "11. Virtual Memory\nAllows a process to work with an address space larger than currently available physical RAM (RAM + secondary backing storage).\n\n12. Demand Paging\nPages are not all loaded into RAM at once; they are loaded only when needed (brought on demand)."
              },
              {
                "type": "callout",
                "icon": "⚡",
                "title": "13. Page Fault (Normal Hardware Mechanism)",
                "content": "When the CPU references a virtual page that is not currently present in physical RAM, the MMU triggers a Page Fault.\nThe OS traps into the kernel, retrieves the requested page from disk into a free frame, updates the page table, and restarts the instruction.\n* A page fault is not an error/crash; it is the standard paging mechanism."
              },
              {
                "type": "diagram",
                "content": "14. Thrashing (Direct TRE 3.0 Exam Question)\nTRE 3.0 asks: What causes thrashing?\nAnswer: Excessive paging activity.\n\nMental: Computer spends more time swapping pages in/out of disk than executing instructions.\nMemory: Thrashing = Paging more than processing"
              }
            ]
          }
        ]
      },
      {
        "partId": "part-d22-segmentation-frag",
        "title": "Part III — Segmentation & Fragmentation",
        "sections": [
          {
            "title": "15. Segmentation & 16. Segment Base",
            "blocks": [
              {
                "type": "diagram",
                "content": "15. Segmentation\nDivides memory according to logical program units (Code, Data, Stack, Heap).\nEach segment has a variable, logical size.\n\n16. Segment Base (Direct TRE 3.0 Question)\nTRE 3.0 asks: What is segment base?\nAnswer: Starting address of a segment in physical memory.\n(A segment also has a Segment Limit defining its length/size)."
              },
              {
                "type": "callout",
                "icon": "⚖️",
                "title": "17. Paging vs Segmentation",
                "content": "• Paging       → Fixed-size blocks (Pages/Frames) | Internal fragmentation\n• Segmentation → Variable-size logical modules (Code/Data/Stack) | External fragmentation"
              }
            ]
          },
          {
            "title": "18. Fragmentation & 21. Swapping Calculation",
            "blocks": [
              {
                "type": "callout",
                "icon": "⚠️",
                "title": "18. Fragmentation (Direct TRE 3.0 Trap)",
                "content": "TRE 3.0 asks which is not a memory-management technique: Paging, Segmentation, Fragmentation.\nAnswer: Fragmentation (it is an undesirable memory problem/phenomenon, NOT a management technique!)."
              },
              {
                "type": "diagram",
                "content": "19. Internal Fragmentation : Wasted space INSIDE an allocated block/page.\n20. External Fragmentation : Total free space exists, but scattered in non-contiguous holes BETWEEN allocated blocks.\n\n21. TRE 3.0 Swapping Calculation:\nPhysical memory used = 6 GB\nVirtual memory used  = 10 GB\nSwapped out amount   = 10 GB - 6 GB = 4 GB"
              },
              {
                "type": "diagram",
                "content": "Day 22 Master White-Paper Sheet\n\nMEMORY:\nVirtual  → PAGE\nPhysical → FRAME\n\nPAGE TABLE     → Page → Frame\nLogical Addr   → Page No + Offset\nPhysical Addr  → Frame No + Same Offset\n\nPAGE SIZE 4 KB → 4096 = 2¹² → 12 offset bits\n\nTLB            → Fast associative cache of page-table entries\nPAGE FAULT     → Page not currently in RAM\nTHRASHING      → Excessive paging activity\n\nPAGING         → Fixed-size blocks\nSEGMENTATION   → Logical variable-size blocks\nSEGMENT BASE   → Starting physical address of segment\n\nINTERNAL FRAG  → Waste inside allocated block\nEXTERNAL FRAG  → Scattered free holes between blocks"
              }
            ]
          }
        ]
      },
      {
        "partId": "part-d22-gs-math",
        "title": "Part II — General Studies: Successive Percentage Change",
        "sections": [
          {
            "title": "Successive Percentage Formula",
            "blocks": [
              {
                "type": "diagram",
                "content": "+x% followed by -x% results in a NET LOSS:\nLoss = x² / 100 %\n\nExamples:\n• +20% then -20% → 20² / 100 = 400 / 100 = 4% Loss\n• +10% then -10% → 10² / 100 = 100 / 100 = 1% Loss"
              }
            ]
          }
        ]
      },
      {
        "partId": "part-d22-english",
        "title": "Part I — English: Comprehension & Articles",
        "sections": [
          {
            "title": "Articles & Comprehension Strategy",
            "blocks": [
              {
                "type": "diagram",
                "content": "Reading Strategy: Question → Keyword → Scan passage → Match fact\n\nArticles:\n• an airport (vowel sound /eə/)\n• an early morning walk (vowel sound /ɜː/)\n• a university (consonant sound /juː/)"
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 22 Test",
      "subtitle": "Answer without looking back.",
      "questions": [
        {
          "id": "m-d22-q1",
          "question": "Q1. In paging, a page is:",
          "options": [
            "Fixed-size block of virtual memory",
            "Fixed-size block of physical memory",
            "CPU register",
            "File system",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "In paging, logical or virtual memory is divided into fixed-size contiguous blocks called Pages. Correct: (A) Fixed-size block of virtual memory."
        },
        {
          "id": "m-d22-q2",
          "question": "Q2. A frame is associated with:",
          "options": [
            "Virtual memory",
            "Physical memory",
            "SQL",
            "Compiler",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Physical memory (RAM) is divided into fixed-size blocks called Frames, matching the page size. Correct: (B) Physical memory."
        },
        {
          "id": "m-d22-q3",
          "question": "Q3. Which mapping is correct?",
          "options": [
            "Page → Virtual memory",
            "Frame → Physical memory",
            "Both A and B",
            "Neither",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "Pages belong to the logical/virtual address space, while Frames belong to physical main memory. Correct: (C) Both A and B."
        },
        {
          "id": "m-d22-q4",
          "question": "Q4. Page Table primarily maps:",
          "options": [
            "Frame → CPU only",
            "Page → Frame",
            "File → Process",
            "Stack → Queue",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "The Page Table translates virtual Page Numbers into physical Frame Numbers. Correct: (B) Page → Frame."
        },
        {
          "id": "m-d22-q5",
          "question": "Q5. A logical address in paging is commonly divided into:",
          "options": [
            "Page number + offset",
            "Frame only",
            "Segment only",
            "CPU + disk",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "A virtual address generated by the CPU consists of two parts: a Page Number (high-order bits) and a Page Offset (low-order bits). Correct: (A) Page number + offset."
        },
        {
          "id": "m-d22-q6",
          "question": "Q6. Page size = 4 KB. Offset requires:",
          "options": [
            "10 bits",
            "11 bits",
            "12 bits",
            "14 bits",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "4 KB = 4096 bytes = 2¹² bytes. Hence, 12 bits are required to address each byte within the 4 KB page. Correct: (C) 12 bits."
        },
        {
          "id": "m-d22-q7",
          "question": "Q7. Page size = 8 KB. Offset requires:",
          "options": [
            "10 bits",
            "11 bits",
            "12 bits",
            "13 bits",
            "None of the above"
          ],
          "correctAnswer": 3,
          "explanation": "8 KB = 8 × 1024 bytes = 8192 bytes = 2¹³ bytes. Thus, the offset requires 13 bits. Correct: (D) 13 bits."
        },
        {
          "id": "m-d22-q8",
          "question": "Q8. When translating a paged address, which part normally remains unchanged?",
          "options": [
            "Page number",
            "Offset",
            "Frame number",
            "Page-table entry",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "During address translation, the Page Number is translated into a Frame Number via the page table, while the Page Offset is copied directly to the physical address unchanged. Correct: (B) Offset."
        },
        {
          "id": "m-d22-q9",
          "question": "Q9. TLB stands for:",
          "options": [
            "Translation Lookaside Buffer",
            "Table Logical Block",
            "Transfer Link Buffer",
            "Translation Load Base",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "TLB stands for Translation Lookaside Buffer. Correct: (A) Translation Lookaside Buffer."
        },
        {
          "id": "m-d22-q10",
          "question": "Q10. According to TRE 3.0, TLB is typically organized as:",
          "options": [
            "Associative cache",
            "Stack",
            "Queue",
            "Linked list only",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "In computer architecture, the TLB is constructed using high-speed associative hardware cache memory to search page numbers simultaneously in parallel. Correct: (A) Associative cache."
        },
        {
          "id": "m-d22-q11",
          "question": "Q11. If a requested page is not currently in RAM, this causes:",
          "options": [
            "Page fault",
            "Deadlock",
            "Collision",
            "Syntax error",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "When a process references a page marked invalid (not currently residing in physical RAM), the MMU raises an exception known as a Page Fault. Correct: (A) Page fault."
        },
        {
          "id": "m-d22-q12",
          "question": "Q12. Demand Paging means:",
          "options": [
            "Load every page before execution",
            "Load a page when needed",
            "Delete pages permanently",
            "Never use disk",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Demand Paging is a virtual memory scheme where a page is brought into physical memory only when it is demanded during program execution. Correct: (B) Load a page when needed."
        },
        {
          "id": "m-d22-q13",
          "question": "Q13. Thrashing is mainly caused by:",
          "options": [
            "Excessive paging activity",
            "Insufficient keyboard input",
            "SQL query failure",
            "Compiler optimization",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Thrashing occurs when the system spends more time servicing page faults and swapping pages in/out of disk than executing processes. Correct: (A) Excessive paging activity."
        },
        {
          "id": "m-d22-q14",
          "question": "Q14. Which memory technique divides memory into fixed-size blocks?",
          "options": [
            "Paging",
            "Segmentation",
            "Compilation",
            "Scheduling",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Paging divides logical memory into fixed-size pages and physical memory into matching fixed-size frames. Correct: (A) Paging."
        },
        {
          "id": "m-d22-q15",
          "question": "Q15. Which divides a program into logical variable-sized units?",
          "options": [
            "Paging",
            "Segmentation",
            "Hashing",
            "Sorting",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Segmentation organizes memory into variable-sized logical segments reflecting user modules (e.g. main program, subroutines, stack, symbol table). Correct: (B) Segmentation."
        },
        {
          "id": "m-d22-q16",
          "question": "Q16. Segment Base is:",
          "options": [
            "Starting physical address of the segment",
            "Ending physical address",
            "Page offset",
            "File name",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "In segmentation, the Segment Base contains the starting physical memory address where the segment resides in RAM. Correct: (A) Starting physical address of the segment."
        },
        {
          "id": "m-d22-q17",
          "question": "Q17. Which is not a memory-management technique in the TRE 3.0 question?",
          "options": [
            "Paging",
            "Segmentation",
            "Fragmentation",
            "More than one",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Paging and Segmentation are memory-management schemes; Fragmentation is a memory inefficiency problem resulting from allocation, not a technique. Correct: (C) Fragmentation."
        },
        {
          "id": "m-d22-q18",
          "question": "Q18. Waste inside an allocated block is:",
          "options": [
            "External fragmentation",
            "Internal fragmentation",
            "Deadlock",
            "Thrashing",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Internal fragmentation occurs when memory is allocated in fixed-size units and the process requires less space than the block size, leaving wasted space inside. Correct: (B) Internal fragmentation."
        },
        {
          "id": "m-d22-q19",
          "question": "Q19. Scattered free holes between allocated areas describe:",
          "options": [
            "Internal fragmentation",
            "External fragmentation",
            "Context switching",
            "Scheduling",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "External fragmentation occurs when enough total memory space exists to satisfy a request, but it is split into scattered non-contiguous blocks. Correct: (B) External fragmentation."
        },
        {
          "id": "m-d22-q20",
          "question": "Q20. If virtual memory usage is 10 GB and physical-memory usage is 6 GB, the TRE-style swapped amount is:",
          "options": [
            "2 GB",
            "4 GB",
            "6 GB",
            "10 GB",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "10 GB virtual memory - 6 GB physical RAM = 4 GB swapped out to secondary backing store. Correct: (B) 4 GB."
        },
        {
          "id": "m-d22-q21",
          "question": "Q21. A value increases by 20% and then decreases by 20%. Net result is:",
          "options": [
            "No change",
            "4% gain",
            "4% loss",
            "20% loss",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "Using net change formula: +20 - 20 - (20×20)/100 = -4% (a 4% loss). Or: 100 × 1.20 = 120; 120 × 0.80 = 96 (4% loss). Correct: (C) 4% loss."
        },
        {
          "id": "m-d22-q22",
          "question": "Q22. A value increases by 10% and then decreases by 10%. Net result is:",
          "options": [
            "1% loss",
            "1% gain",
            "No change",
            "10% loss",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "100 → 110 → 99 (a 1% loss). Formula: 10²/100 = 1% loss. Correct: (A) 1% loss."
        },
        {
          "id": "m-d22-q23",
          "question": "Q23. Choose the correct phrase:",
          "options": [
            "a airport",
            "an airport",
            "the airport always in every context",
            "airport an",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "'airport' begins with a vowel sound /eə/, requiring the indefinite article 'an': 'an airport'. Correct: (B) an airport."
        },
        {
          "id": "m-d22-q24",
          "question": "Q24. Choose the correct phrase:",
          "options": [
            "a early morning walk",
            "an early morning walk",
            "the early morning walk always",
            "early an morning walk",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "'early' begins with the vowel sound /ɜː/, taking 'an': 'an early morning walk'. Correct: (B) an early morning walk."
        },
        {
          "id": "m-d22-q25",
          "question": "Q25. For a comprehension question, your first step should be:",
          "options": [
            "Guess the answer",
            "Identify the question/keyword",
            "Ignore the passage",
            "Use outside knowledge first",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "First identify the core question and keyword, then scan the passage directly for that reference point. Correct: (B) Identify the question/keyword."
        }
      ]
    }
  },
  {
    "dayNumber": 23,
    "dayId": "day-23",
    "badge": "Day 23",
    "title": "TRE 4.0 — Day 23",
    "unit": "Part III (CS) • Deadlock, Semaphore, Mutex, Critical Section, Race Condition • GS (Physics Resistance) • Hindi",
    "targetTime": "18–20 mins read + 22 mins test",
    "summary": "Operating Systems Concurrency & Resource Allocation: Synchronization, Race Condition, Critical Section, Mutual Exclusion, Mutex lock (one key/owner), Semaphore (wait/signal counter, Binary 0/1 vs Counting), Deadlock (Pen vs Book analogy), the 4 Coffman Conditions (Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait — MHNC), Deadlock Prevention (breaking one condition) vs Avoidance (Banker's Algorithm, Safe State), Deadlock vs Starvation, Wire Resistance cut & parallel formula (R/n² = R/25, R/R' = 25), and Hindi (अनाहूत, परिमाणवाचक विशेषण).",
    "targets": [
      {
        "section": "Part III – CS",
        "topic": "Race Condition, Critical Section, Mutex, Semaphore, Deadlock",
        "goal": "Master concurrency control, Mutex vs Semaphore, 4 Coffman conditions (MHNC), Deadlock Prevention vs Avoidance (Banker's Algorithm), and Deadlock vs Starvation"
      },
      {
        "section": "Part II – GS",
        "topic": "Resistance calculation (Physics / Electricity)",
        "goal": "Wire cut into 5 parts (r = R/5), connected in parallel (R' = R/25), ratio R/R' = 25"
      },
      {
        "section": "Part I – Hindi",
        "topic": "अनेक शब्दों के लिए एक शब्द व विशेषण",
        "goal": "जिसे बुलाया न गया हो → अनाहूत; संज्ञा की मात्रा/माप → परिमाणवाचक विशेषण (उदा. थोड़ा पानी)"
      }
    ],
    "introNote": "I checked the uploaded TRE/STET excerpts first. I did not find a direct question on Deadlock, Semaphore, Mutex, Critical Section, or Race Condition in those retrieved papers. So today's main OS lesson is standard OS expansion for TRE preparation, not a claim that these exact questions appeared in your papers.\n\nThe papers do establish the surrounding OS area strongly: TRE 3.0 directly tests threads, paging, segmentation, thrashing, TLB, file operations and FCFS disk scheduling.",
    "parts": [
      {
        "title": "Part III — Process Synchronization: Race Condition, Critical Section & Mutex",
        "sections": [
          {
            "title": "1. Why Synchronization? & 2. Race Condition",
            "blocks": [
              {
                "type": "text",
                "content": "1. Why Synchronization?\n\n🧠 MENTAL PICTURE\nImagine a library has one seat, but two students try to occupy it simultaneously."
              },
              {
                "type": "diagram",
                "content": "       Seat 10\n          ↑\n       /     \\\n   Student A  Student B\n\nBoth check:\nSeat available? → YES\n\nand both try:\nBook Seat 10\n\nProblem."
              },
              {
                "type": "text",
                "content": "Computer programs face the same issue when multiple threads access shared data.\nSynchronization = coordinating processes/threads when using shared resources.\n\n2. Race Condition\nConsider:\nBalance = ₹1000\n\nTwo threads execute at the same time:\nThread A → +₹500\nThread B → -₹200\n\nCorrect final balance should be:\n₹1300\n\nBut both may read ₹1000 before either writes.\nThread A reads 1000\nThread B reads 1000\n\nA calculates 1500\nB calculates 800\n\nA writes 1500\nB writes 800\n\nFinal:\n₹800 ❌\n\nOne update disappeared.\n\nThat's a:\nRace Condition"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory Rule: Race Condition",
                "content": "Race Condition = result depends on who runs first.",
                "diagram": "SHARED DATA\n   ↑     ↑\nThread1 Thread2\n   ↓     ↓\n same time\n    ↓\n  RACE"
              }
            ]
          },
          {
            "title": "3. Critical Section, 4. Mutual Exclusion & 5. Mutex",
            "blocks": [
              {
                "type": "text",
                "content": "3. Critical Section\nThe code that accesses shared data/resources is called the:\nCritical Section\n\nExample:\nbalance = balance + 500\n\nIf multiple threads execute this shared-data section simultaneously, problems may occur."
              },
              {
                "type": "diagram",
                "content": "Mental picture:\nThread A ─┐\n          ↓\n     ┌───────────┐\n     │ CRITICAL  │\n     │  SECTION  │\n     └───────────┘\n          ↑\nThread B ─┘\n\nGoal:\nAllow controlled access."
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Critical Section Concept",
                "content": "Critical Section = dangerous shared area"
              },
              {
                "type": "text",
                "content": "4. Mutual Exclusion\nWe want:\nThread A enters\nThread B waits\n\nnot:\nThread A + Thread B enter together ❌\n\nThis principle is:\nMutual Exclusion"
              },
              {
                "type": "callout",
                "icon": "🧠",
                "title": "Memory trick: Mutual Exclusion",
                "content": "Mutual Exclusion = ONE at a time"
              },
              {
                "type": "text",
                "content": "5. Mutex\nMutex means:\nMutual Exclusion lock\n\n🧠 Mental picture\nImagine one bathroom with one key:"
              },
              {
                "type": "diagram",
                "content": "Bathroom\n   🔑\n\nPerson A gets key:\nA 🔑 → inside\nB    → waits\n\nA leaves and returns key:\nA → unlock\nB 🔑 → enters\n\nThat's Mutex.\n\nConceptually:\nLOCK\n ↓\nCritical Section\n ↓\nUNLOCK"
              },
              {
                "type": "callout",
                "icon": "🔑",
                "title": "Memory: Mutex",
                "content": "Mutex = one key, one owner, one at a time"
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Semaphores & Mutex vs Semaphore Comparison",
        "sections": [
          {
            "title": "6. Semaphore, 7. Semaphore Operations & Types",
            "blocks": [
              {
                "type": "text",
                "content": "6. Semaphore\nSemaphore is a synchronization mechanism represented conceptually by a counter.\n\n🧠 Mental picture\nImagine a parking area with:\n3 parking spaces\n\nSemaphore:\nS = 3\n\nCar enters:\nS = 2\n\nAnother:\nS = 1\n\nAnother:\nS = 0\n\nNext car:\nmust wait.\n\nWhen someone leaves:\nS = 1\nanother can enter."
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Memory: Semaphore",
                "content": "Semaphore = counter controlling access"
              },
              {
                "type": "text",
                "content": "7. Semaphore Operations\nTwo classic names:\nwait()\nsignal()\n\nAlso often written:\nP()\nV()\n\nWAIT\nConceptually:\nTry to acquire/use a resource.\nwait(S)\n\nSIGNAL\nRelease/announce resource availability:\nsignal(S)"
              },
              {
                "type": "callout",
                "icon": "⚡",
                "title": "Memory: WAIT vs SIGNAL",
                "content": "WAIT   → Take / acquire (P)\nSIGNAL → Release / announce (V)"
              },
              {
                "type": "text",
                "content": "8. Binary Semaphore\nBinary semaphore usually has:\n0 or 1\n\nMental:\n1 → available\n0 → unavailable\n\nIt can be used for mutual-exclusion-style synchronization.\nMemory: Binary = 0/1\n\n9. Counting Semaphore\nCounting semaphore can represent multiple resources.\n\nExample:\n5 printers\n\nSemaphore:\nS = 5\n\nMemory: Counting Semaphore = multiple copies of resource"
              }
            ]
          },
          {
            "title": "Mutex vs Semaphore Comparison & Memory Tricks",
            "blocks": [
              {
                "type": "diagram",
                "content": "Mutex vs Semaphore (Very important):\n\nFeature             │ Mutex                       │ Semaphore\n────────────────────┼─────────────────────────────┼───────────────────────────────\nConcept             │ Lock                        │ Counter / synchronization primitive\nOwnership           │ Usually one owner           │ Signaling need not use same ownership model\nPrimary Purpose     │ Mutual exclusion            │ Resource counting / synchronization\nClassic Operations  │ Lock / Unlock               │ Wait (P) / Signal (V)"
              },
              {
                "type": "callout",
                "icon": "🧠",
                "title": "Mental picture: Mutex vs Semaphore",
                "content": "MUTEX:\n→ Bathroom key 🔑\n→ one person\n\nSEMAPHORE:\n→ Parking spaces\n→ count available spaces"
              },
              {
                "type": "callout",
                "icon": "🔥",
                "title": "Core Memory Anchor",
                "content": "Mutex = KEY\n\nSemaphore = COUNT"
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Deadlock, Coffman Conditions, Prevention & Avoidance",
        "sections": [
          {
            "title": "10. Deadlock & 11–15. Four Necessary Deadlock Conditions",
            "blocks": [
              {
                "type": "text",
                "content": "10. Deadlock\nNow imagine:\nPerson A has Pen\nPerson B has Book\n\nA says:\nI'll release the Pen only after getting the Book.\n\nB says:\nI'll release the Book only after getting the Pen."
              },
              {
                "type": "diagram",
                "content": "A holds PEN\n   ↓ wants\n BOOK held by B\n\nB holds BOOK\n   ↓ wants\n PEN held by A\n\nNobody moves.\n\nThat's:\nDeadlock"
              },
              {
                "type": "callout",
                "icon": "⚠️",
                "title": "Memory: Deadlock",
                "content": "Deadlock = everybody waits forever for each other."
              },
              {
                "type": "text",
                "content": "11. Four Necessary Deadlock Conditions\nThis is extremely important.\n\nDeadlock requires all four classic Coffman conditions:\n1. Mutual Exclusion\n2. Hold and Wait\n3. No Preemption\n4. Circular Wait\n\nUse: M H N C\nor mental sentence:\n\"My Hungry Neighbor Circles\"\n\n12. Mutual Exclusion (M)\nResource can be held by only one process at a time.\nExample:\nPrinter → Process A only\nMemory: M = one owner\n\n13. Hold and Wait (H)\nProcess:\nHOLDS resource A\nwhile:\nWAITS for resource B\nMental:\nProcess\n├── Holding Pen\n└── Waiting Book\nMemory: H = Hold one, Wait another\n\n14. No Preemption (N)\nResource cannot simply be forcibly taken away under the deadlock model; it is released according to the resource/process protocol.\nMental:\nProcess A owns Resource\n        ↓\nOS cannot simply grab it\nMemory: N = No forced taking\n\n15. Circular Wait (C)\nProcesses form a circle:"
              },
              {
                "type": "diagram",
                "content": "P1 waits for P2\n ↑            ↓\nP4           P3\n ↑            ↓\n └────────────┘\n\nSimpler:\nP1 → waits P2\nP2 → waits P3\nP3 → waits P1\n\nMemory:\nCircular Wait = waiting circle"
              },
              {
                "type": "callout",
                "icon": "🔥",
                "title": "Four Conditions White-Paper Picture",
                "content": "DEADLOCK\n\nM → Mutual Exclusion\nH → Hold and Wait\nN → No Preemption\nC → Circular Wait\n\nAll four must hold for a classic deadlock situation."
              }
            ]
          },
          {
            "title": "16. Deadlock Prevention, 17. Avoidance, 18. Safe State & 19. Deadlock vs Starvation",
            "blocks": [
              {
                "type": "text",
                "content": "16. Deadlock Prevention\nA very useful conceptual rule:\nBreak at least one necessary condition → prevent deadlock.\n\nFor example:\nBreak circular wait by requiring resources to be requested in a fixed order.\nAlways request:\nR1 → R2 → R3\nnot arbitrary:\nP1: R1 then R2\nP2: R2 then R1 ❌\n\nMemory: Prevent = break a Coffman condition\n\n17. Deadlock Avoidance\nStandard OS concept:\nCheck whether granting a resource would leave the system in a safe state.\nFamous algorithm:\nBanker's Algorithm\n\n🧠 Mental picture\nBank:\n“Can I safely give you this loan and still satisfy everyone?”\nOperating system:\n“Can I safely grant this resource?”\n\nMemory: Banker's Algorithm → Deadlock Avoidance\n\n18. Safe State\nA safe state means:\nThere exists some order in which all processes can eventually finish.\nExample:\nP2 finishes → releases resources\nP1 finishes → releases resources\nP3 finishes\n\nMemory: Safe ≠ deadlocked\n\nBut be careful:\nAn unsafe state does not necessarily mean a deadlock has already occurred; it means deadlock is possible."
              },
              {
                "type": "text",
                "content": "19. Deadlock vs Starvation\nImportant trap."
              },
              {
                "type": "diagram",
                "content": "Deadlock                 Starvation\n──────────────────────── ────────────────────────\nP1 waits P2              P1 waits...\nP2 waits P1              P2 runs\n                         P3 runs\n                         P4 runs\n                         P5 runs\nNobody progresses        P1 keeps being ignored\n\nSystem is progressing, but one process may wait indefinitely."
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Deadlock vs Starvation Distinction",
                "content": "DEADLOCK   → group stuck\nSTARVATION → one process keeps waiting"
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Synchronization Master Sheet & White-Paper Recall",
        "sections": [
          {
            "title": "20. Synchronization Summary & Master Sheet",
            "blocks": [
              {
                "type": "callout",
                "icon": "📋",
                "title": "20. Synchronization Summary",
                "content": "RACE CONDITION   → uncontrolled concurrent access\nCRITICAL SECTION → shared-data code\nMUTEX            → one-at-a-time lock\nSEMAPHORE        → counter/signal\nDEADLOCK         → processes permanently waiting"
              },
              {
                "type": "diagram",
                "content": "🧠 Day 23 White-Paper Master Sheet\nClose notes and draw:\n\nSHARED RESOURCE\n      ↓\nRACE CONDITION\n      ↓\nCRITICAL SECTION\n      ↓\nSYNCHRONIZATION\n\nThen:\nMUTEX\n→ one key\n→ one at time\n\nSEMAPHORE\n→ counter\n→ wait / signal\nBinary → 0/1\nCounting → many resources\n\nThen:\nDEADLOCK\nM → Mutual Exclusion\nH → Hold & Wait\nN → No Preemption\nC → Circular Wait\n\nFinally:\nDeadlock Prevention → break one condition\nDeadlock Avoidance  → Banker's Algorithm\nDeadlock            → everybody/group stuck\nStarvation          → one process may keep waiting"
              }
            ]
          }
        ]
      },
      {
        "title": "Part II — General Studies: Resistance Calculation (TRE 3.0 Physics)",
        "sections": [
          {
            "title": "Wire Resistance Cut into Equal Parts & Parallel Combination",
            "blocks": [
              {
                "type": "text",
                "content": "Your TRE 3.0 paper asks about a wire of resistance R cut into 5 equal pieces and then connected in parallel.\n\n🧠 Step 1: Cut wire into 5 parts\nOriginal:\nResistance = R\n\nEach piece:\nR / 5\nbecause resistance is proportional to length (R = ρL/A).\n\nStep 2: Five identical resistors in parallel\nFor n equal resistors of resistance r:\nEquivalent = r / n\n\nHere:\nr = R/5\nn = 5\n\nTherefore:\nR' = (R/5) / 5\n   = R/25\n\nHence:\nR / R'\n= R / (R/25)\n= 25"
              },
              {
                "type": "callout",
                "icon": "⚡",
                "title": "GS Physics Formula Rule",
                "content": "Cut into n equal pieces + connect all in parallel → R' = R/n²\n\nFor 5 pieces:\nR' = R/25\nRatio R / R' = 25"
              }
            ]
          }
        ]
      },
      {
        "title": "Part I — Hindi: अनेक शब्दों के लिए एक शब्द व विशेषण",
        "sections": [
          {
            "title": "अनाहूत एवं परिमाणवाचक विशेषण (TRE 2.0 Language)",
            "blocks": [
              {
                "type": "text",
                "content": "Your TRE 2.0 language section asks:\n“जिसे बुलाया न गया हो”\n\nThe relevant one-word expression is:\nअनाहूत\n\nAnother question asks what type of adjective indicates measurement/quantity; the relevant concept is परिमाणवाचक विशेषण."
              },
              {
                "type": "callout",
                "icon": "📖",
                "title": "Hindi Grammar Memory Anchor",
                "content": "जिसे बुलाया न गया हो\n→ अनाहूत (आहूत = आमंत्रित/बुलाया गया, अनाहूत = बिना बुलाया)\n\nAnd:\nकितना? (माप/तौल)\n↓\nपरिमाणवाचक विशेषण\n\nExample:\nथोड़ा पानी, दो किलो चावल\n'थोड़ा' मात्रा/परिमाण बताता है।"
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 23 Checkpoint Test",
      "subtitle": "25 Questions: Concurrency, Deadlock, Physics Resistance & Hindi",
      "questions": [
        {
          "id": "m-d23-q1",
          "question": "Q1. When the final result depends on the unpredictable order of concurrent execution, it is called:",
          "options": [
            "Paging",
            "Race Condition",
            "Fragmentation",
            "Thrashing",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A Race Condition occurs when multiple concurrent processes or threads access shared mutable data and the outcome depends on the unpredictable execution order. Correct: (B) Race Condition."
        },
        {
          "id": "m-d23-q2",
          "question": "Q2. The portion of code accessing shared resources is called:",
          "options": [
            "Critical Section",
            "Page Table",
            "Ready Queue",
            "PCB",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "The Critical Section is the segment of code where shared resources (memory, variables, files) are accessed, requiring synchronized protection. Correct: (A) Critical Section."
        },
        {
          "id": "m-d23-q3",
          "question": "Q3. Mutual Exclusion means:",
          "options": [
            "All processes access the critical section simultaneously",
            "Only controlled/one-at-a-time access to an exclusive resource",
            "No process can execute",
            "All memory is shared",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Mutual Exclusion ensures that only one process or thread can execute inside its critical section or use an exclusive resource at any given moment. Correct: (B) Only controlled/one-at-a-time access to an exclusive resource."
        },
        {
          "id": "m-d23-q4",
          "question": "Q4. Which is easiest to visualize as one bathroom key?",
          "options": [
            "Mutex",
            "Counting Semaphore",
            "Paging",
            "FCFS",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "A Mutex (Mutual Exclusion lock) acts like a single bathroom key: one owner, lock -> critical section -> unlock. Correct: (A) Mutex."
        },
        {
          "id": "m-d23-q5",
          "question": "Q5. A Semaphore is best understood as:",
          "options": [
            "Synchronization counter/mechanism",
            "CPU register",
            "Memory page",
            "File system",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "A Semaphore is a synchronization mechanism represented conceptually by an integer counter controlling access to shared resources. Correct: (A) Synchronization counter/mechanism."
        },
        {
          "id": "m-d23-q6",
          "question": "Q6. A Binary Semaphore commonly has values:",
          "options": [
            "0 and 1",
            "1 to 100",
            "Only -1",
            "Characters A and B",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "A Binary Semaphore can take only values 0 (unavailable/locked) and 1 (available/unlocked). Correct: (A) 0 and 1."
        },
        {
          "id": "m-d23-q7",
          "question": "Q7. A Counting Semaphore is particularly useful when:",
          "options": [
            "Multiple identical resources are available",
            "There can never be shared resources",
            "Only one CPU instruction exists",
            "Paging is disabled",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "A Counting Semaphore tracks multiple identical resource instances (e.g. 5 printers, 3 parking slots) using non-negative integers. Correct: (A) Multiple identical resources are available."
        },
        {
          "id": "m-d23-q8",
          "question": "Q8. Which pair is correctly matched?",
          "options": [
            "Mutex → one-at-a-time locking",
            "Semaphore → only database indexing",
            "Mutex → page replacement",
            "Semaphore → sorting algorithm",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Mutex provides mutual exclusion through one-at-a-time ownership locking. Correct: (A) Mutex → one-at-a-time locking."
        },
        {
          "id": "m-d23-q9",
          "question": "Q9. Classic Semaphore synchronization operations are:",
          "options": [
            "Push and Pop",
            "Wait and Signal",
            "Enqueue and Dequeue",
            "Read and Write only",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "The two atomic semaphore operations are wait() (or P) to acquire/decrement, and signal() (or V) to release/increment. Correct: (B) Wait and Signal."
        },
        {
          "id": "m-d23-q10",
          "question": "Q10. A deadlock occurs when:",
          "options": [
            "Processes indefinitely wait for resources held within a waiting cycle",
            "Every process finishes successfully",
            "CPU utilization is always 100%",
            "One page is loaded",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Deadlock is a state in which every process in a set is waiting for an event/resource that can only be caused/released by another process in the set, creating a circular standstill. Correct: (A) Processes indefinitely wait for resources held within a waiting cycle."
        },
        {
          "id": "m-d23-q11",
          "question": "Q11. How many classic necessary Coffman conditions are there for deadlock?",
          "options": [
            "2",
            "3",
            "4",
            "5",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "There are 4 classic Coffman conditions: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait (MHNC). Correct: (C) 4."
        },
        {
          "id": "m-d23-q12",
          "question": "Q12. Which is a deadlock condition?",
          "options": [
            "Mutual Exclusion",
            "Hold and Wait",
            "Circular Wait",
            "More than one of the above",
            "None of the above"
          ],
          "correctAnswer": 3,
          "explanation": "Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait are all required conditions. Since A, B, and C are all deadlock conditions, D (More than one of the above) is the correct answer. Correct: (D) More than one of the above."
        },
        {
          "id": "m-d23-q13",
          "question": "Q13. A process holding one resource while waiting for another illustrates:",
          "options": [
            "Hold and Wait",
            "Paging",
            "Thrashing",
            "FCFS",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Hold and Wait occurs when a process holding at least one resource is actively waiting to acquire additional resources held by other processes. Correct: (A) Hold and Wait."
        },
        {
          "id": "m-d23-q14",
          "question": "Q14. Which deadlock condition means a held resource cannot simply be forcibly taken under the model?",
          "options": [
            "Circular Wait",
            "No Preemption",
            "Hold and Wait",
            "Mutual Exclusion",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "No Preemption means resources cannot be seized forcibly; they can only be released voluntarily by the holding process after completion. Correct: (B) No Preemption."
        },
        {
          "id": "m-d23-q15",
          "question": "Q15. P1 waits for P2, P2 waits for P3, and P3 waits for P1 illustrates:",
          "options": [
            "Circular Wait",
            "Paging",
            "Starvation only",
            "Context Switching",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "A closed circular chain where each process waits for a resource held by the next process in sequence represents Circular Wait. Correct: (A) Circular Wait."
        },
        {
          "id": "m-d23-q16",
          "question": "Q16. Which is the best mnemonic from today's lesson?",
          "options": [
            "MHNC",
            "FIFO",
            "BODH",
            "LNR",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "MHNC ('My Hungry Neighbor Circles') stands for Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait. Correct: (A) MHNC."
        },
        {
          "id": "m-d23-q17",
          "question": "Q17. To prevent deadlock, one strategy is to:",
          "options": [
            "Ensure all four deadlock conditions always hold",
            "Break at least one necessary condition",
            "Disable every process",
            "Increase page size only",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Deadlock Prevention works by constraining resource requests so that at least one of the 4 necessary Coffman conditions cannot hold. Correct: (B) Break at least one necessary condition."
        },
        {
          "id": "m-d23-q18",
          "question": "Q18. Banker's Algorithm is associated with:",
          "options": [
            "Deadlock avoidance",
            "Sorting",
            "Paging only",
            "Database normalization",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Dijkstra's Banker's Algorithm is the primary Deadlock Avoidance algorithm, ensuring resource allocation maintains the system in a safe state. Correct: (A) Deadlock avoidance."
        },
        {
          "id": "m-d23-q19",
          "question": "Q19. Which statement about a safe state is correct?",
          "options": [
            "There exists an execution order allowing all processes to finish",
            "Deadlock must already exist",
            "No process can ever run",
            "It means no resources exist",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "A state is safe if there exists a safe sequence of processes such that each process can obtain its maximum needed resources and successfully finish. Correct: (A) There exists an execution order allowing all processes to finish."
        },
        {
          "id": "m-d23-q20",
          "question": "Q20. Which distinction is correct?",
          "options": [
            "Deadlock → group stuck; Starvation → a process may wait indefinitely while others progress",
            "Starvation and deadlock always mean exactly the same thing",
            "Deadlock means all processes are running",
            "Starvation means CPU is physically damaged",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "In Deadlock, a whole group of processes is permanently frozen with zero progress across them. In Starvation, other processes continue executing while one process is indefinitely bypassed. Correct: (A) Deadlock → group stuck; Starvation → a process may wait indefinitely while others progress."
        },
        {
          "id": "m-d23-q21",
          "question": "Q21. A wire of resistance R is cut into 5 equal parts. Resistance of each part is:",
          "options": [
            "5R",
            "R/5",
            "R/25",
            "R",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Resistance is directly proportional to length (R = ρL/A). Dividing length by 5 divides resistance by 5: r = R/5. Correct: (B) R/5."
        },
        {
          "id": "m-d23-q22",
          "question": "Q22. The five equal pieces are connected in parallel. Equivalent resistance is:",
          "options": [
            "R/5",
            "R/10",
            "R/25",
            "25R",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "For n identical resistors in parallel, R' = r / n. Here r = R/5 and n = 5, so R' = (R/5) / 5 = R/25. Correct: (C) R/25."
        },
        {
          "id": "m-d23-q23",
          "question": "Q23. Therefore R/R' equals:",
          "options": [
            "5",
            "10",
            "25",
            "1/25",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "R / R' = R / (R / 25) = 25. Correct: (C) 25."
        },
        {
          "id": "m-d23-q24",
          "question": "Q24. “जिसे बुलाया न गया हो” के लिए एक शब्द है:",
          "options": [
            "सर्वज्ञ",
            "अनाहूत",
            "अमर",
            "निरक्षर",
            "इनमें से कोई नहीं"
          ],
          "correctAnswer": 1,
          "explanation": "“जिसे बुलाया न गया हो” के लिए एक शब्द 'अनाहूत' है (आहूत = निमंत्रित/बुलाया गया, अनाहूत = बिना बुलाया). Correct: (B) अनाहूत."
        },
        {
          "id": "m-d23-q25",
          "question": "Q25. संज्ञा की मात्रा या माप बताने वाला विशेषण कहलाता है:",
          "options": [
            "गुणवाचक विशेषण",
            "परिमाणवाचक विशेषण",
            "व्यक्तिवाचक संज्ञा",
            "संबंधवाचक सर्वनाम",
            "इनमें से कोई नहीं"
          ],
          "correctAnswer": 1,
          "explanation": "संज्ञा या सर्वनाम के नाप, तोल या परिमाण का बोध कराने वाले शब्द परिमाणवाचक विशेषण कहलाते हैं (उदा. 'थोड़ा पानी', 'चार लीटर दूध'). Correct: (B) परिमाणवाचक विशेषण."
        }
      ]
    }
  },
  {
    "dayNumber": 24,
    "dayId": "day-24",
    "badge": "Day 24",
    "title": "TRE 4.0 — Day 24",
    "unit": "Part III (CS) • File Systems (NTFS, FAT32, HFS+), Interrupts (Hardware/Software, ISR), File Operations, Disk Scheduling (FCFS 640 movements, SSTF, SCAN, C-SCAN) • GS (Ratio & Parallelogram Angles) • English",
    "targetTime": "18–20 mins read + 22 mins test",
    "summary": "Operating Systems Storage & Control Flow: File Systems (NTFS, FAT32, HFS+), File Operations (Create, Open, Read, Write, Rename, Delete, Close), Interrupts (Hardware vs Software, ISR execution flow), Disk Scheduling: FCFS exact TRE 3.0 calculation (53 -> 98 -> 183 -> 37 -> 122 -> 14 -> 124 -> 65 -> 67 = 640 total head movements), SSTF (nearest cylinder, starvation issue), SCAN (Elevator algorithm, bi-directional), C-SCAN (Circular one-way + return jump), Seek Time, GS Math (Ratio 2:5 diff 66 -> 44 & 110; Parallelogram adjacent angles 1:2 -> 60°), and English (Kerala passage spicy hot flavours, articles: an early morning walk).",
    "targets": [
      {
        "section": "Part III – CS",
        "topic": "File System, Interrupts, File Operations, FCFS, SSTF, SCAN, C-SCAN",
        "goal": "Master file system types (NTFS, FAT32, HFS+), hardware vs software interrupts & ISR, file operations, FCFS disk calculation (640 movements), SSTF, SCAN, and C-SCAN"
      },
      {
        "section": "Part II – GS",
        "topic": "Ratio + Geometry (Parallelogram)",
        "goal": "Two numbers in ratio 2:5 differing by 66 (44 & 110); Adjacent angles in ratio 1:2 (sum = 180° -> 60° and 120°)"
      },
      {
        "section": "Part I – English",
        "topic": "Comprehension + Articles",
        "goal": "TRE 3.0 Kerala passage scan (spicy hot flavours, English widespread); Articles: 'an early morning walk', 'an airport'"
      }
    ],
    "introNote": "Today’s paper-backed OS anchors are very clear. TRE 3.0 directly tests NTFS/FAT32/HFS+ as file systems, hardware/software interrupts, create/delete/rename as file operations, and an FCFS disk-scheduling calculation.\n\nSSTF, SCAN, and C-SCAN below are standard OS expansion; I did not find those exact algorithms in the retrieved TRE excerpts.",
    "parts": [
      {
        "title": "Part III — File System Architecture, Types & File Operations",
        "sections": [
          {
            "title": "1. What is a File System? & 2. File Systems in TRE 3.0",
            "blocks": [
              {
                "type": "text",
                "content": "1. What is a File System?\n\n🧠 MENTAL PICTURE\nImagine your laptop disk as a huge library.\n\nWithout organization:\nphoto.jpg\nresume.pdf\nvideo.mp4\nnotes.txt\napp.zip\n\nEverything thrown together 😵"
              },
              {
                "type": "diagram",
                "content": "A file system organizes them:\nDISK\n │\n ├── Documents\n │     └── resume.pdf\n │\n ├── Photos\n │     └── photo.jpg\n │\n └── Videos\n       └── video.mp4"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Simple Concept: File System",
                "content": "File System = method used by the OS to organize, store and retrieve files."
              },
              {
                "type": "text",
                "content": "2. File Systems in Your TRE Paper\nTRE 3.0 asks which is a commonly used file system and lists:\n- NTFS\n- FAT32\n- HFS+\nSo the paper itself treats multiple listed choices as valid file-system examples.\n\nFor memory:\n• NTFS  → Windows association\n• FAT32 → widely compatible older file system\n• HFS+  → Apple/macOS historical association"
              },
              {
                "type": "callout",
                "icon": "📋",
                "title": "White-Paper Memory: File Systems",
                "content": "FILE SYSTEM\n\nNTFS  (Windows)\nFAT32 (Universal / USB)\nHFS+  (macOS)"
              }
            ]
          },
          {
            "title": "3. File Operations, 16. File vs Directory & 17. Paths",
            "blocks": [
              {
                "type": "text",
                "content": "3. File Operations\nTRE 3.0 asks which is a common file operation and lists:\n• Create\n• Delete\n• Rename\n\nAll are standard file operations.\n\nStandard expansion also includes:\n• Open\n• Close\n• Read\n• Write\n• Seek"
              },
              {
                "type": "callout",
                "icon": "⚡",
                "title": "Memory: CRUD-like File Thinking",
                "content": "Create → Read/Write → Rename → Delete"
              },
              {
                "type": "text",
                "content": "16. File vs Directory\nA file stores information:\nresume.pdf, photo.jpg, data.txt\n\nA directory organizes files:\nDocuments/\n  ├── resume.pdf\n  └── notes.txt\n\nMemory:\nFile = data\nDirectory = container / organization\n\n17. Absolute vs Relative Path — Standard Expansion\nExample:\n/home/user/docs/resume.pdf\nThis describes the full route starting from root (/): Absolute path\n\nRelative:\ndocs/resume.pdf\nDepends on current working directory."
              },
              {
                "type": "callout",
                "icon": "🧭",
                "title": "Path Distinction",
                "content": "Absolute = full address from root (/)\nRelative = path relative to current location"
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Interrupts: Hardware vs Software & ISR Flow",
        "sections": [
          {
            "title": "4. What is an Interrupt?, 5. Hardware & 6. Software Interrupts",
            "blocks": [
              {
                "type": "text",
                "content": "4. Interrupt\n\n🧠 MENTAL PICTURE\nImagine you are studying.\n\nSuddenly:\nDoorbell rings 🔔\n\nYou stop temporarily, answer the door, then continue studying.\n\nCPU behaves similarly."
              },
              {
                "type": "diagram",
                "content": "CPU doing Program A\n      ↓\n  INTERRUPT\n      ↓\nhandle urgent event\n      ↓\nreturn to Program A"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Simple Concept: Interrupt",
                "content": "Interrupt = signal/event that temporarily gets CPU attention."
              },
              {
                "type": "text",
                "content": "5. Hardware Interrupt\nComes from hardware devices.\n\nExamples:\n• Keyboard input\n• Mouse\n• Disk\n• Timer\n• Network card\n\nMental:\nDEVICE → INTERRUPT → CPU\n\nMemory: Hardware Interrupt = device asks CPU for attention\n\n6. Software Interrupt\nGenerated by software/instruction.\n\nConceptually:\nPROGRAM → special instruction/system request → CPU handling\n\nMemory: Software Interrupt = software-generated request\n\nTRE 3.0 explicitly lists Hardware Interrupt and Software Interrupt as interrupt types; Memory interrupt is the odd/non-standard option in that question."
              }
            ]
          },
          {
            "title": "7. Interrupt Execution Flow & ISR",
            "blocks": [
              {
                "type": "diagram",
                "content": "Mental white paper:\nProgram running\n      ↓\nInterrupt arrives\n      ↓\nSave current state (registers/PC)\n      ↓\nRun ISR\n      ↓\nRestore state\n      ↓\nContinue program"
              },
              {
                "type": "callout",
                "icon": "⚡",
                "title": "ISR Definition & Flow",
                "content": "ISR = Interrupt Service Routine\n\nMemory:\nInterrupt → Save State → ISR → Restore State → Return"
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Disk Scheduling: FCFS, SSTF, SCAN, C-SCAN & Seek Time",
        "sections": [
          {
            "title": "8. Disk Scheduling & 9. FCFS Exact TRE 3.0 Problem (640 Movements)",
            "blocks": [
              {
                "type": "text",
                "content": "8. Disk Scheduling\nNow imagine a hard disk has cylinders:\n0 -------------------------------------- 199\n\nDisk head is currently at: 53\nRequests arrive at: 98, 183, 37, 122, 14, 124, 65, 67\n\nThe OS must decide: Which request should the disk head serve next?\nThat is: Disk Scheduling\n\n9. FCFS Disk Scheduling\nFCFS: First Come First Served\nRule: Serve requests in the exact arrival order."
              },
              {
                "type": "diagram",
                "content": "Your TRE 3.0 gives exactly:\nStart = 53\nRequests: 98, 183, 37, 122, 14, 124, 65, 67\n\nCalculate Head Movements:\n53  → 98  = |98 - 53|   = 45\n98  → 183 = |183 - 98|  = 85\n183 → 37  = |37 - 183|  = 146\n37  → 122 = |122 - 37|  = 85\n122 → 14  = |14 - 122|  = 108\n14  → 124 = |124 - 14|  = 110\n124 → 65  = |65 - 124|  = 59\n65  → 67  = |67 - 65|   = 2\n\nTotal Movement:\n45 + 85 + 146 + 85 + 108 + 110 + 59 + 2\n= 640 head movements"
              },
              {
                "type": "callout",
                "icon": "⚠️",
                "title": "FCFS Exam Trap",
                "content": "Do not sort: 14, 37, 65, 67...\nThat is wrong for FCFS!\n\nFCFS = strict arrival order, NOT nearest order.\nExact TRE 3.0 answer = 640 head movements."
              }
            ]
          },
          {
            "title": "10–15. SSTF, SCAN (Elevator), C-SCAN & Seek Time",
            "blocks": [
              {
                "type": "text",
                "content": "10. SSTF — Standard Expansion\nSSTF: Shortest Seek Time First\nImagine head at: 50. Pending: 10, 45, 90.\nDistances: 50→10 = 40, 50→45 = 5, 50→90 = 40. Choose 45 because it is nearest.\n\n🧠 Mental Picture: Elevator goes to the closest waiting floor.\nMemory: SSTF = nearest request first\n\n11. SSTF Problem\nSSTF reduces head movement, but distant requests may keep waiting if closer requests keep arriving.\nThat can cause: Starvation!\nMemory: SSTF = efficient locally, but starvation possible.\n\n12. SCAN — Elevator Algorithm\nAn elevator moves upward (1→2→3→4→5) servicing requests, reaches the top, then reverses and moves downward (5→4→3→2→1) servicing requests on the way back.\nMemory: SCAN = Elevator goes both directions (back-and-forth).\n\n13. C-SCAN (Circular SCAN)\nThe head services requests in ONE direction only (e.g. 0 → 199). After reaching the high end, it immediately jumps back to 0 without servicing on the return trip, and begins again.\nMemory: C-SCAN = one-way circular elevator."
              },
              {
                "type": "diagram",
                "content": "Disk Scheduling Comparison:\n\nAlgorithm │ Main Rule                    │ Direction / Behavior\n──────────┼──────────────────────────────┼─────────────────────────────────\nFCFS      │ Arrival order                │ Jumps according to queue\nSSTF      │ Closest request              │ Greedy nearest; starvation risk\nSCAN      │ Elevator, both directions    │ Serves going up, then coming down\nC-SCAN    │ One direction + circle jump  │ Serves one-way, resets to start"
              },
              {
                "type": "callout",
                "icon": "🔥",
                "title": "Seek Time Definition",
                "content": "Seek Time = time taken to move the disk arm/head across cylinders to the desired track.\nDisk scheduling algorithms aim to minimize seek time and head movement."
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Day 24 White-Paper Master Sheet & Recall",
        "sections": [
          {
            "title": "White-Paper Master Sheet & Exact Anchor",
            "blocks": [
              {
                "type": "diagram",
                "content": "🧠 Day 24 White-Paper Master Sheet\nClose your notes and reproduce:\n\nFILE SYSTEM\n→ organizes files\nNTFS, FAT32, HFS+\n\nFILE OPERATIONS\nCreate, Open, Read, Write, Rename, Delete, Close\n\nINTERRUPT\n→ CPU attention\nHardware → device (keyboard, mouse, disk)\nSoftware → program/system call\nInterrupt → ISR → return\n\nDISK SCHEDULING\nFCFS   → arrival order\nSSTF   → nearest (starvation risk)\nSCAN   → elevator both ways\nC-SCAN → one way + jump back\n\nEXACT TRE 3.0 PAPER ANCHOR:\nStart = 53\nRequests: 98, 183, 37, 122, 14, 124, 65, 67\n45 + 85 + 146 + 85 + 108 + 110 + 59 + 2\nTOTAL = 640"
              }
            ]
          }
        ]
      },
      {
        "title": "Part II — General Studies: Ratio & Parallelogram Angles (TRE 3.0)",
        "sections": [
          {
            "title": "Ratio 2:5 Difference 66 & Parallelogram Adjacent Angles",
            "blocks": [
              {
                "type": "text",
                "content": "TRE 3.0 asks a ratio question:\nTwo numbers are in ratio 2:5 and differ by 66.\n\n🧠 Mental Calculation:\nRatio = 2 : 5\nDifference = 5 - 2 = 3 parts\nGiven: 3 parts = 66\nTherefore: 1 part = 22\n\nNumbers:\n• Smaller: 2 × 22 = 44\n• Larger:  5 × 22 = 110\nSo the numbers are 44 and 110.\n\nParallelogram Question (TRE 3.0):\nAdjacent angles A and B of a parallelogram are in ratio 1:2.\n\nRule: Adjacent angles of a parallelogram are supplementary (sum = 180°).\nA + B = 180°\n1x + 2x = 180°\n3x = 180° ⇒ x = 60°\n\nSo:\nAngle A = 60° (smaller angle)\nAngle B = 120° (larger angle)"
              },
              {
                "type": "callout",
                "icon": "📐",
                "title": "Geometry Memory Rule",
                "content": "Adjacent angles of a parallelogram = 180°\nOpposite angles of a parallelogram = equal"
              }
            ]
          }
        ]
      },
      {
        "title": "Part I — English: Comprehension & Articles (TRE 3.0 Kerala Passage)",
        "sections": [
          {
            "title": "Kerala Passage & Articles",
            "blocks": [
              {
                "type": "text",
                "content": "TRE 3.0 directly uses a Kerala passage and article questions.\n\nRemember the reading strategy:\nQUESTION → KEYWORD → SCAN → MATCH\n\nFrom the passage:\n• Kerala cuisine is known for spicy hot flavours.\n• Foreign bargain-hunters would not face a language problem because: English is spoken and understood everywhere in Kerala.\n\nArticles:\n• 'an airport' ('airport' starts with vowel sound /eə/)\n• 'an early morning walk' ('early' starts with vowel sound /ɜː/)\n• 'a university' ('university' starts with consonant glide sound /juː/)"
              },
              {
                "type": "callout",
                "icon": "📖",
                "title": "Article Vowel Sound Rule",
                "content": "Use 'an' before vowel SOUNDS (/æ/, /e/, /ɪ/, /ɒ/, /ʌ/, /ɜː/, /eə/):\n• an airport\n• an early morning walk\n• an hour (silent h)\n\nUse 'a' before consonant sounds:\n• a university (/juː/)\n• a European (/juː/)"
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 24 Checkpoint Test",
      "subtitle": "25 Questions: File Systems, Interrupts, Disk Scheduling (FCFS 640), Ratio & English",
      "questions": [
        {
          "id": "m-d24-q1",
          "question": "Q1. The main purpose of a file system is to:",
          "options": [
            "Schedule CPU processes only",
            "Organize and manage stored files",
            "Replace RAM",
            "Compile programs",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A file system provides the structure and access methods used by the operating system to store, organize, name, and retrieve files on storage media. Correct: (B) Organize and manage stored files."
        },
        {
          "id": "m-d24-q2",
          "question": "Q2. Which of the following appears as a file system in your TRE 3.0 question?",
          "options": [
            "NTFS",
            "FAT32",
            "HFS+",
            "More than one of the above",
            "None of the above"
          ],
          "correctAnswer": 3,
          "explanation": "In TRE 3.0, NTFS (Windows), FAT32 (universal), and HFS+ (macOS) all appear as valid file systems, making 'More than one of the above' the correct choice. Correct: (D) More than one of the above."
        },
        {
          "id": "m-d24-q3",
          "question": "Q3. Which is a common file operation?",
          "options": [
            "Create",
            "Delete",
            "Rename",
            "More than one of the above",
            "None of the above"
          ],
          "correctAnswer": 3,
          "explanation": "Standard file operations include Create, Delete, Rename, Open, Close, Read, and Write. Since A, B, and C are all valid, D is correct. Correct: (D) More than one of the above."
        },
        {
          "id": "m-d24-q4",
          "question": "Q4. An interrupt is best described as:",
          "options": [
            "An event/signal requiring CPU attention",
            "A database table",
            "A sorting algorithm",
            "A page-replacement algorithm only",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "An interrupt is an asynchronous signal or event generated by hardware or software that temporarily alerts the CPU and suspends current execution to service the event. Correct: (A) An event/signal requiring CPU attention."
        },
        {
          "id": "m-d24-q5",
          "question": "Q5. Keyboard or disk-device activity can generate:",
          "options": [
            "Hardware interrupt",
            "Normalization",
            "SQL JOIN",
            "Bubble Sort",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Peripherals such as the keyboard, mouse, or disk controller send hardware interrupts to signal data arrival or I/O completion. Correct: (A) Hardware interrupt."
        },
        {
          "id": "m-d24-q6",
          "question": "Q6. Which pair appears as valid interrupt types in the TRE 3.0 question?",
          "options": [
            "Hardware and Software",
            "Memory and Database",
            "Stack and Queue",
            "Binary and Decimal",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Operating systems classify interrupts primarily into Hardware Interrupts (external device signals) and Software Interrupts (traps/system calls). Correct: (A) Hardware and Software."
        },
        {
          "id": "m-d24-q7",
          "question": "Q7. In the TRE question, which option is the non-standard interrupt type?",
          "options": [
            "Hardware Interrupt",
            "Memory Interrupt",
            "Software Interrupt",
            "More than one of the above",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Hardware Interrupt and Software Interrupt are standard canonical types; 'Memory Interrupt' is the non-standard odd option in the TRE 3.0 question. Correct: (B) Memory Interrupt."
        },
        {
          "id": "m-d24-q8",
          "question": "Q8. ISR stands for:",
          "options": [
            "Interrupt Service Routine",
            "Internal Storage Register",
            "Input Scheduling Rule",
            "Interrupt System RAM",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "ISR stands for Interrupt Service Routine, the handler procedure executed by the CPU to process an interrupt request. Correct: (A) Interrupt Service Routine."
        },
        {
          "id": "m-d24-q9",
          "question": "Q9. FCFS disk scheduling processes requests:",
          "options": [
            "By nearest cylinder",
            "In arrival order",
            "In descending order",
            "Randomly",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "First-Come, First-Served (FCFS) services disk I/O requests strictly in the chronological order of their arrival. Correct: (B) In arrival order."
        },
        {
          "id": "m-d24-q10",
          "question": "Q10. For the TRE 3.0 disk problem, the initial head position is:",
          "options": [
            "37",
            "53",
            "65",
            "98",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "In the exact TRE 3.0 disk scheduling problem, the read/write head starts at cylinder 53. Correct: (B) 53."
        },
        {
          "id": "m-d24-q11",
          "question": "Q11. For: 53 → 98, head movement is:",
          "options": [
            "35",
            "45",
            "55",
            "98",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Head movement is |98 - 53| = 45 cylinders. Correct: (B) 45."
        },
        {
          "id": "m-d24-q12",
          "question": "Q12. For: 98 → 183, head movement is:",
          "options": [
            "75",
            "80",
            "85",
            "95",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "Head movement is |183 - 98| = 85 cylinders. Correct: (C) 85."
        },
        {
          "id": "m-d24-q13",
          "question": "Q13. The total FCFS movement in the exact TRE 3.0 problem is:",
          "options": [
            "620",
            "630",
            "640",
            "650",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "Total head movements = 45 + 85 + 146 + 85 + 108 + 110 + 59 + 2 = 640 cylinders. Correct: (C) 640."
        },
        {
          "id": "m-d24-q14",
          "question": "Q14. SSTF means:",
          "options": [
            "Serve the first request only",
            "Serve the nearest pending disk request",
            "Always move toward cylinder 0",
            "Serve largest request first",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "SSTF (Shortest Seek Time First) selects the request that requires the minimum head movement from the current position. Correct: (B) Serve the nearest pending disk request."
        },
        {
          "id": "m-d24-q15",
          "question": "Q15. A possible problem with SSTF is:",
          "options": [
            "Starvation of distant requests",
            "It cannot access a disk",
            "It always causes deadlock",
            "It needs no requests",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Because SSTF favors requests close to the current head, distant requests may suffer starvation if new nearby requests continually arrive. Correct: (A) Starvation of distant requests."
        },
        {
          "id": "m-d24-q16",
          "question": "Q16. SCAN is commonly called:",
          "options": [
            "Elevator algorithm",
            "Banker's algorithm",
            "Divide-and-conquer algorithm",
            "Hashing algorithm",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "SCAN is known as the Elevator Algorithm because the disk arm moves back and forth across the disk servicing requests just like an elevator servicing building floors. Correct: (A) Elevator algorithm."
        },
        {
          "id": "m-d24-q17",
          "question": "Q17. SCAN generally:",
          "options": [
            "Services requests while moving in one direction, then reverses",
            "Serves only one request",
            "Never changes head position",
            "Always follows arrival order",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "SCAN sweeps in one direction servicing all requests until it reaches the disk boundary, then reverses direction to service requests on the return sweep. Correct: (A) Services requests while moving in one direction, then reverses."
        },
        {
          "id": "m-d24-q18",
          "question": "Q18. C-SCAN generally:",
          "options": [
            "Services in one direction and then circles back",
            "Always behaves exactly like FCFS",
            "Chooses nearest request only",
            "Uses a Stack",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "C-SCAN (Circular SCAN) provides a more uniform wait time by servicing requests in only one direction, then immediately returning to the beginning without servicing requests on the return trip. Correct: (A) Services in one direction and then circles back."
        },
        {
          "id": "m-d24-q19",
          "question": "Q19. Which matching is correct?",
          "options": [
            "FCFS → arrival order",
            "SSTF → nearest",
            "SCAN → elevator",
            "More than one of the above",
            "None of the above"
          ],
          "correctAnswer": 3,
          "explanation": "All three associations are correct: FCFS uses arrival order, SSTF selects the nearest cylinder, and SCAN operates like an elevator. Correct: (D) More than one of the above."
        },
        {
          "id": "m-d24-q20",
          "question": "Q20. Seek time is mainly associated with:",
          "options": [
            "Moving the disk head to the required location",
            "SQL execution",
            "CPU register allocation",
            "Page-table creation only",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Seek time is the physical time required to move the disk read/write head arm to the desired cylinder/track. Correct: (A) Moving the disk head to the required location."
        },
        {
          "id": "m-d24-q21",
          "question": "Q21. Two numbers are in ratio 2:5 and their difference is 66. The smaller number is:",
          "options": [
            "22",
            "44",
            "66",
            "110",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Difference = 5x - 2x = 3x = 66 => x = 22. Smaller number = 2x = 2 * 22 = 44. Correct: (B) 44."
        },
        {
          "id": "m-d24-q22",
          "question": "Q22. The larger number is:",
          "options": [
            "88",
            "99",
            "110",
            "132",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "Larger number = 5x = 5 * 22 = 110. Correct: (C) 110."
        },
        {
          "id": "m-d24-q23",
          "question": "Q23. Adjacent angles of a parallelogram are in ratio 1:2. The smaller angle is:",
          "options": [
            "30°",
            "45°",
            "60°",
            "90°",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "Adjacent angles of a parallelogram sum to 180°. 1x + 2x = 180° => 3x = 180° => x = 60°. Smaller angle = 60°. Correct: (C) 60°."
        },
        {
          "id": "m-d24-q24",
          "question": "Q24. According to the TRE 3.0 Kerala passage, Kerala cuisine is known for:",
          "options": [
            "Bland flavours",
            "Spicy hot flavours",
            "Only sweet food",
            "No spices",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "From the TRE 3.0 Kerala comprehension passage, Kerala cuisine is specifically noted for its spicy hot flavours. Correct: (B) Spicy hot flavours."
        },
        {
          "id": "m-d24-q25",
          "question": "Q25. Choose the correct phrase:",
          "options": [
            "a early morning walk",
            "an early morning walk",
            "a airport",
            "an university",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "'early' begins with the vowel sound /ɜː/, taking the article 'an': 'an early morning walk'. Correct: (B) an early morning walk."
        }
      ]
    }
  },
  {
    "dayNumber": 25,
    "dayId": "day-25",
    "badge": "Day 25",
    "title": "TRE 4.0 — Day 25",
    "unit": "Part III (CS) • Full OS Milestone Revision: Process/PCB, CPU Scheduling, Memory Management (Paging, Frames, TLB, Thrashing), Concurrency (Mutex, Semaphore, Deadlock MHNC), File Systems & Disk Scheduling (FCFS 640) • GS • English",
    "targetTime": "20–25 mins read + 45 mins test",
    "summary": "Operating Systems Comprehensive Milestone Revision & 50-Question Checkpoint: Process vs Program, PCB, Process States (New, Ready, Running, Waiting, Terminated), CPU Scheduling (FCFS, SJF, Round Robin, Priority, Preemption), Threads & Shared Resources (Code/Data vs Stack/PC), Memory Management (Paging, Frames, Page Table, 2ⁿ Offset calculation: 4 KB = 12 bits, 8 KB = 13 bits), TLB associative cache, Page Faults, Thrashing, Segmentation, Internal vs External Fragmentation, Synchronization (Race Condition, Critical Section, Mutex lock, Semaphore wait/signal, Binary vs Counting), Deadlock (Coffman conditions MHNC, Prevention, Banker's Algorithm avoidance, Deadlock vs Starvation), File Systems (NTFS, FAT32, HFS+), File Operations (Create, Delete, Rename), Interrupts (Hardware/Software, ISR), and Disk Scheduling (FCFS 640 movement calculation, SSTF, SCAN Elevator, C-SCAN), GS Math (Ratio 2:5 diff 66 -> 44; Successive % +/-20% -> 4% loss), and English ('an early morning walk').",
    "targets": [
      {
        "section": "Part III – CS",
        "topic": "OS Full Revision Checkpoint (50 MCQs)",
        "goal": "Consolidate all Operating System core topics: Process & PCB, CPU Scheduling, Paging/TLB, Deadlock/Synchronization, File Systems, and Disk Scheduling"
      },
      {
        "section": "Part II – GS",
        "topic": "Ratio & Successive Percentage Change",
        "goal": "Ratio 2:5 difference 66 (44 & 110); Successive +20% and -20% net change (x²/100 % loss = 4% loss)"
      },
      {
        "section": "Part I – English",
        "topic": "Articles Revision",
        "goal": "Vowel sound vs consonant sound rules ('an early morning walk', 'a university', 'an airport')"
      }
    ],
    "introNote": "Today is revision + testing only. No new major OS topic.\n\nYour TRE 3.0 paper directly tests OS types, paging, segmentation, file systems, interrupts, page/page-offset, thrashing, TLB, file operations, FCFS disk scheduling, and thread sharing.\n\nThe topics Process/PCB, process states, CPU scheduling, context switching, Semaphore/Mutex, Deadlock, SSTF/SCAN/C-SCAN were standard OS expansion from Days 21–24 rather than exact retrieved TRE questions.",
    "parts": [
      {
        "title": "Part III — Process Management, PCB, States & CPU Scheduling",
        "sections": [
          {
            "title": "Process vs Program, PCB & Process States",
            "blocks": [
              {
                "type": "text",
                "content": "PROGRAM vs PROCESS\n• PROGRAM = passive instructions stored on disk\n• PROCESS = program in execution with active memory, registers and Program Counter (PC)"
              },
              {
                "type": "diagram",
                "content": "PCB (Process Control Block):\n┌────────────────────────────┐\n│ Process ID (PID)           │\n│ Process State              │\n│ Program Counter (PC)       │\n│ CPU Registers              │\n│ CPU Scheduling Information │\n│ Memory Management Info     │\n│ Accounting & I/O Status    │\n└────────────────────────────┘"
              },
              {
                "type": "diagram",
                "content": "PROCESS STATES & TRANSITIONS:\n\n      NEW\n       ↓\n ┌──→ READY ─────────────┐\n │     ↑   └──┐ (Dispatch)│\n │(I/O │      ↓           ↓\n │ done)   RUNNING ──→ TERMINATED\n │     │      │\n │     └───┐  │ (I/O or event wait)\n └────── WAITING / BLOCKED\n\n• READY: Waiting for CPU assignment\n• RUNNING: Currently executing instructions on CPU\n• WAITING/BLOCKED: Waiting for an external I/O event"
              },
              {
                "type": "callout",
                "icon": "⚡",
                "title": "Context Switching & Threads",
                "content": "Context Switch = Saving current process state and loading another process's PCB.\n\nThreads in the same process SHARE:\n• Code section\n• Data section (global variables)\n• OS resources (open files)\n\nThreads DO NOT share (each thread has its own):\n• Thread ID, Program Counter, Registers, Stack"
              }
            ]
          },
          {
            "title": "CPU Scheduling Algorithms & Preemption",
            "blocks": [
              {
                "type": "diagram",
                "content": "Algorithm    │ Core Strategy                │ Preemptive / Non-preemptive\n─────────────┼──────────────────────────────┼─────────────────────────────\nFCFS         │ First Come First Served      │ Non-preemptive (basic)\nSJF          │ Shortest next CPU burst      │ Both (SJF non-preempt, SRTF preempt)\nRound Robin  │ Fixed time quantum           │ Preemptive\nPriority     │ Highest priority first       │ Both variations"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Preemption Concept",
                "content": "Preemptive = OS can take the CPU away from a running process before it voluntarily finishes."
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Memory Management: Paging, Frames, TLB, Thrashing & Segmentation",
        "sections": [
          {
            "title": "Paging, Frames, Address Translation & Offset Calculation",
            "blocks": [
              {
                "type": "text",
                "content": "PAGING & FRAMES\n• PAGE  = Fixed-size block of Virtual / Logical Memory\n• FRAME = Fixed-size block of Physical RAM\n• PAGE TABLE maps: Page Number → Frame Number\n\nLogical Address = Page Number (p) + Page Offset (d)\nPhysical Address = Frame Number (f) + Same Page Offset (d)\n\nOffset remains unchanged during translation!"
              },
              {
                "type": "callout",
                "icon": "🔢",
                "title": "Offset Bit Calculation Rule (2ⁿ)",
                "content": "Page Size = 2ⁿ bytes ⇒ Offset requires n bits:\n• 1 KB (2¹⁰ B) = 10 bits\n• 2 KB (2¹¹ B) = 11 bits\n• 4 KB (2¹² B) = 12 bits (Direct TRE 3.0 question!)\n• 8 KB (2¹³ B) = 13 bits"
              }
            ]
          },
          {
            "title": "TLB, Page Fault, Thrashing & Segmentation",
            "blocks": [
              {
                "type": "text",
                "content": "TLB & VIRTUAL MEMORY\n• TLB = Translation Lookaside Buffer, a high-speed Associative Cache storing recent page table entries.\n• PAGE FAULT = Occurs when CPU references a page whose valid bit is 0 (not currently in RAM), triggering an OS trap to fetch it from disk.\n• THRASHING = System spends more time paging (swapping pages in and out) than executing instructions due to insufficient physical memory."
              },
              {
                "type": "diagram",
                "content": "Paging vs Segmentation & Fragmentation:\n\nFeature       │ Paging                     │ Segmentation\n──────────────┼────────────────────────────┼─────────────────────────────\nDivision      │ Fixed-size blocks (pages)  │ Logical variable-sized blocks\nView          │ Physical / Hardware view   │ User / Programmer view\nFragmentation │ Internal fragmentation     │ External fragmentation\n\n• Internal Fragmentation: Unused wasted memory INSIDE an allocated block/page.\n• External Fragmentation: Sufficient total free memory scattered in unusable non-contiguous HOLES."
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Concurrency, Mutex, Semaphore & Deadlock",
        "sections": [
          {
            "title": "Race Condition, Critical Section, Mutex & Semaphore",
            "blocks": [
              {
                "type": "callout",
                "icon": "🔑",
                "title": "Concurrency Primitives",
                "content": "• RACE CONDITION: Result depends on the unpredictable timing or sequence of thread execution.\n• CRITICAL SECTION: Code section accessing shared mutable resources.\n• MUTUAL EXCLUSION: Only ONE thread/process in the critical section at a time.\n• MUTEX: Mutual exclusion lock (Bathroom Key analogy — 1 owner, Lock/Unlock).\n• SEMAPHORE: Integer counter synchronization primitive (Parking spaces analogy — Wait/Signal, P/V).\n  - Binary Semaphore: Values 0 and 1\n  - Counting Semaphore: Non-negative values (≥ 0) for multiple identical resources."
              }
            ]
          },
          {
            "title": "Deadlock Coffman Conditions, Prevention & Avoidance",
            "blocks": [
              {
                "type": "diagram",
                "content": "THE FOUR NECESSARY COFFMAN CONDITIONS (MHNC):\n\nM → Mutual Exclusion : Resource held in non-shareable mode (1 owner)\nH → Hold and Wait    : Holding at least 1 resource while requesting others\nN → No Preemption    : Resources cannot be forcibly confiscated\nC → Circular Wait    : P1 waits P2, P2 waits P3, P3 waits P1 in a closed loop\n\nMnemonic: \"My Hungry Neighbor Circles\""
              },
              {
                "type": "text",
                "content": "DEADLOCK HANDLING & CONCEPTS:\n• Deadlock Prevention: Invalidate at least ONE of the 4 Coffman conditions (e.g. strict global resource ordering to eliminate circular wait).\n• Deadlock Avoidance: Banker's Algorithm dynamically tests whether granting a resource maintains the system in a SAFE STATE.\n• Safe State: There exists an execution sequence allowing all processes to finish.\n• Deadlock vs Starvation: Deadlock freezes the entire group permanently; Starvation indefinitely delays one process while others make progress."
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — File Systems, Interrupts & Disk Scheduling",
        "sections": [
          {
            "title": "File Systems, File Operations & Interrupts",
            "blocks": [
              {
                "type": "text",
                "content": "FILE SYSTEMS (TRE 3.0 Anchors):\n• NTFS: Windows modern journaling file system\n• FAT32: Universal legacy file system\n• HFS+: Apple / macOS historical file system\n\nFILE OPERATIONS (TRE 3.0 Anchors):\n• Create, Delete, Rename (plus Open, Close, Read, Write, Seek)\n\nINTERRUPTS:\n• Hardware Interrupt: Signals from physical devices (keyboard, mouse, disk)\n• Software Interrupt: Instructions/traps generated by programs (system calls)\n• ISR: Interrupt Service Routine (the handler routine)"
              }
            ]
          },
          {
            "title": "Disk Scheduling: FCFS 640 Calculation, SSTF, SCAN & C-SCAN",
            "blocks": [
              {
                "type": "diagram",
                "content": "EXACT TRE 3.0 DISK PROBLEM (FCFS):\nStart Head = 53\nRequests: 98, 183, 37, 122, 14, 124, 65, 67\n\nMovement:\n|98 - 53|   = 45\n|183 - 98|  = 85\n|37 - 183|  = 146\n|122 - 37|  = 85\n|14 - 122|  = 108\n|124 - 14|  = 110\n|65 - 124|  = 59\n|67 - 65|   = 2\nTOTAL = 45 + 85 + 146 + 85 + 108 + 110 + 59 + 2 = 640"
              },
              {
                "type": "callout",
                "icon": "🔄",
                "title": "Disk Scheduling Algorithms Summary",
                "content": "• FCFS: Serves requests in arrival order (Total 640 in TRE 3.0 problem).\n• SSTF: Shortest Seek Time First (closest cylinder; starvation possible).\n• SCAN: Elevator algorithm (sweeps both directions back and forth).\n• C-SCAN: Circular SCAN (sweeps one direction only, returns to start without servicing).\n• Seek Time: Time taken to move the disk head to the target cylinder."
              }
            ]
          }
        ]
      },
      {
        "title": "Part II — General Studies & Part I — English Revision",
        "sections": [
          {
            "title": "General Studies & English Core Rules",
            "blocks": [
              {
                "type": "callout",
                "icon": "📐",
                "title": "General Studies Math Anchors",
                "content": "1. Ratio Problem: 2 : 5 difference 66\n   5x - 2x = 3x = 66 ⇒ x = 22\n   Smaller number = 2 × 22 = 44; Larger number = 5 × 22 = 110\n\n2. Successive % Formula: +x% then -x%\n   Net Change = x² / 100 % Loss\n   For 20%: 20² / 100 % = 4% Loss (100 → 120 → 96 = 4% loss)"
              },
              {
                "type": "callout",
                "icon": "📖",
                "title": "English Article Rules",
                "content": "• Use 'an' before vowel sounds: 'an early morning walk' (/ɜː/), 'an airport' (/eə/)\n• Use 'a' before consonant sounds: 'a university' (/juː/), 'a European' (/juː/)"
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 25 Milestone Checkpoint Test",
      "subtitle": "50 Comprehensive OS Questions: Process, Scheduling, Memory, Concurrency, Storage & General Studies",
      "questions": [
        {
          "id": "m-d25-q1",
          "question": "Q1. A program is:",
          "options": [
            "A running process",
            "A passive set of instructions",
            "A PCB",
            "A CPU scheduler",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A program is a passive entity consisting of a collection of instructions stored on disk (such as an executable file). Correct: (B) A passive set of instructions."
        },
        {
          "id": "m-d25-q2",
          "question": "Q2. A process is:",
          "options": [
            "A program in execution",
            "Only source code on disk",
            "A file system",
            "A database table",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "A process is an active entity: a program in execution with associated resources, PC, registers, and memory spaces. Correct: (A) A program in execution."
        },
        {
          "id": "m-d25-q3",
          "question": "Q3. PCB stands for:",
          "options": [
            "Process Control Block",
            "Program Central Buffer",
            "Process CPU Bus",
            "Program Control Base",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "PCB stands for Process Control Block, the operating system's data structure containing all information about a process. Correct: (A) Process Control Block."
        },
        {
          "id": "m-d25-q4",
          "question": "Q4. Which can be stored in a PCB?",
          "options": [
            "Process state",
            "Program counter",
            "CPU registers",
            "More than one of the above",
            "None of the above"
          ],
          "correctAnswer": 3,
          "explanation": "A PCB stores the process state, program counter, CPU registers, CPU scheduling info, and memory management limits. All of A, B, and C are stored. Correct: (D) More than one of the above."
        },
        {
          "id": "m-d25-q5",
          "question": "Q5. A process waiting for CPU is in:",
          "options": [
            "Running",
            "Ready",
            "Waiting",
            "Terminated",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "In the Ready state, a process is loaded into memory and waiting to be assigned to a CPU by the scheduler. Correct: (B) Ready."
        },
        {
          "id": "m-d25-q6",
          "question": "Q6. A process waiting for disk I/O is normally:",
          "options": [
            "Ready",
            "Running",
            "Waiting/Blocked",
            "New",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "When a process issues an I/O request or waits for an event, it transitions to the Waiting (or Blocked) state. Correct: (C) Waiting/Blocked."
        },
        {
          "id": "m-d25-q7",
          "question": "Q7. Which state means a process currently owns the CPU?",
          "options": [
            "Ready",
            "Running",
            "Waiting",
            "Terminated",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "In the Running state, the process's instructions are actively being executed by the CPU. Correct: (B) Running."
        },
        {
          "id": "m-d25-q8",
          "question": "Q8. Context switching involves:",
          "options": [
            "Saving one process state and loading another",
            "Deleting all processes",
            "Formatting memory",
            "Creating a database",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Context switching is the mechanism of saving the state/context of the currently running process and loading the saved context of another process. Correct: (A) Saving one process state and loading another."
        },
        {
          "id": "m-d25-q9",
          "question": "Q9. FCFS CPU scheduling means:",
          "options": [
            "First Come First Served",
            "Fastest CPU First Served",
            "First Context First Scheduled",
            "First Come Final Stop",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "FCFS stands for First-Come, First-Served scheduling. Correct: (A) First Come First Served."
        },
        {
          "id": "m-d25-q10",
          "question": "Q10. SJF selects the process with:",
          "options": [
            "Largest memory",
            "Shortest CPU burst",
            "Highest PID",
            "Latest arrival",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Shortest Job First (SJF) selects the process with the shortest next CPU burst time. Correct: (B) Shortest CPU burst."
        },
        {
          "id": "m-d25-q11",
          "question": "Q11. Round Robin scheduling uses:",
          "options": [
            "Time quantum",
            "Page frame",
            "Hash function",
            "Semaphore count only",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Round Robin (RR) CPU scheduling allocates a fixed time slice called a Time Quantum to each process in circular order. Correct: (A) Time quantum."
        },
        {
          "id": "m-d25-q12",
          "question": "Q12. Preemptive scheduling means:",
          "options": [
            "CPU can be taken from a running process",
            "Process always keeps CPU until termination",
            "No scheduler exists",
            "Only one program can execute",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Under preemptive scheduling, the OS can forcibly interrupt and take the CPU away from a running process. Correct: (A) CPU can be taken from a running process."
        },
        {
          "id": "m-d25-q13",
          "question": "Q13. Which is typically non-preemptive in its basic form?",
          "options": [
            "FCFS",
            "Round Robin",
            "Both are always preemptive",
            "Paging",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Basic FCFS is non-preemptive; once a process gets the CPU, it holds it until voluntary release or termination. Correct: (A) FCFS."
        },
        {
          "id": "m-d25-q14",
          "question": "Q14. TRE 3.0 asks what threads in the same process share. The relevant option is:",
          "options": [
            "Thread ID",
            "Program counter",
            "Code section and data section",
            "Individual stack",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "Threads of the same process share the code section, data section (global variables), and OS resources (open files), while each thread maintains its own thread ID, registers, program counter, and stack. Correct: (C) Code section and data section."
        },
        {
          "id": "m-d25-q15",
          "question": "Q15. In paging, a page is:",
          "options": [
            "Fixed-size block of virtual memory",
            "Fixed-size block of physical memory",
            "CPU register",
            "File",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "A page is a fixed-size block of logical / virtual memory. Correct: (A) Fixed-size block of virtual memory."
        },
        {
          "id": "m-d25-q16",
          "question": "Q16. A frame belongs to:",
          "options": [
            "Virtual memory",
            "Physical memory",
            "Database storage only",
            "CPU scheduler",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A frame is a fixed-size contiguous block of physical RAM. Correct: (B) Physical memory."
        },
        {
          "id": "m-d25-q17",
          "question": "Q17. Page Table mainly maps:",
          "options": [
            "Page → Frame",
            "Frame → Process only",
            "File → Folder",
            "Stack → Queue",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "The Page Table translates virtual Page numbers into physical Frame numbers in RAM. Correct: (A) Page → Frame."
        },
        {
          "id": "m-d25-q18",
          "question": "Q18. A logical address normally contains:",
          "options": [
            "Page number + Offset",
            "Frame number only",
            "Segment only",
            "CPU ID only",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "A logical address generated by the CPU is divided into a Page Number (p) and an Offset (d). Correct: (A) Page number + Offset."
        },
        {
          "id": "m-d25-q19",
          "question": "Q19. For a 4 KB page size, the offset requires:",
          "options": [
            "10 bits",
            "11 bits",
            "12 bits",
            "14 bits",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "4 KB = 4096 bytes = 2¹² bytes, requiring 12 offset bits. Correct: (C) 12 bits."
        },
        {
          "id": "m-d25-q20",
          "question": "Q20. For an 8 KB page size, offset bits are:",
          "options": [
            "10",
            "11",
            "12",
            "13",
            "None of the above"
          ],
          "correctAnswer": 3,
          "explanation": "8 KB = 8192 bytes = 2¹³ bytes, requiring 13 offset bits. Correct: (D) 13."
        },
        {
          "id": "m-d25-q21",
          "question": "Q21. During page-to-frame translation, which portion remains unchanged?",
          "options": [
            "Page number",
            "Offset",
            "Frame number",
            "Page Table",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "The offset represents the exact byte location within the block and remains identical between the logical page and the physical frame. Correct: (B) Offset."
        },
        {
          "id": "m-d25-q22",
          "question": "Q22. TLB stands for:",
          "options": [
            "Translation Lookaside Buffer",
            "Table Logical Block",
            "Transfer Lookup Base",
            "Translation Link Bus",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "TLB stands for Translation Lookaside Buffer. Correct: (A) Translation Lookaside Buffer."
        },
        {
          "id": "m-d25-q23",
          "question": "Q23. TRE 3.0 associates TLB with:",
          "options": [
            "Associative cache",
            "Stack",
            "Queue",
            "File table",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "In TRE 3.0, the TLB is directly identified as an associative cache (high-speed hardware cache for page table mappings). Correct: (A) Associative cache."
        },
        {
          "id": "m-d25-q24",
          "question": "Q24. A page requested by the CPU is not in RAM. This causes:",
          "options": [
            "Page fault",
            "Deadlock necessarily",
            "Race condition",
            "Syntax error",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "When a process references a page marked not present in RAM, the hardware generates a Page Fault trap to bring the page from disk into RAM. Correct: (A) Page fault."
        },
        {
          "id": "m-d25-q25",
          "question": "Q25. Thrashing is mainly associated with:",
          "options": [
            "Excessive paging",
            "Excessive SQL",
            "Hardware compilation",
            "File renaming",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Thrashing occurs when virtual memory experiences excessive paging activity, spending more time swapping than executing code. Correct: (A) Excessive paging."
        },
        {
          "id": "m-d25-q26",
          "question": "Q26. Paging divides memory into:",
          "options": [
            "Fixed-size blocks",
            "Variable logical blocks only",
            "SQL tables",
            "CPU processes",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Paging divides memory into fixed-size contiguous blocks (pages and frames). Correct: (A) Fixed-size blocks."
        },
        {
          "id": "m-d25-q27",
          "question": "Q27. Segmentation divides a program into:",
          "options": [
            "Fixed-size pages only",
            "Logical variable-sized units",
            "Equal CPU time slices",
            "Disk cylinders",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Segmentation divides program memory into logical, variable-sized units reflecting the user's view (functions, objects, stacks). Correct: (B) Logical variable-sized units."
        },
        {
          "id": "m-d25-q28",
          "question": "Q28. Waste inside an allocated memory block is:",
          "options": [
            "External fragmentation",
            "Internal fragmentation",
            "Deadlock",
            "Starvation",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Internal fragmentation is unused wasted memory inside a fixed-size partition or page. Correct: (B) Internal fragmentation."
        },
        {
          "id": "m-d25-q29",
          "question": "Q29. Scattered free holes are associated with:",
          "options": [
            "Internal fragmentation",
            "External fragmentation",
            "Context switching",
            "Thread scheduling",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "External fragmentation occurs when total free memory is sufficient, but broken into small non-contiguous scattered holes. Correct: (B) External fragmentation."
        },
        {
          "id": "m-d25-q30",
          "question": "Q30. A Race Condition occurs when:",
          "options": [
            "Result depends on unpredictable concurrent execution order",
            "CPU runs only one instruction",
            "Page size changes",
            "File is renamed",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "A Race Condition is a flaw where the final outcome depends on the non-deterministic timing or sequence of thread execution. Correct: (A) Result depends on unpredictable concurrent execution order."
        },
        {
          "id": "m-d25-q31",
          "question": "Q31. The code accessing a shared resource is called:",
          "options": [
            "Critical Section",
            "Page Fault",
            "Ready Queue",
            "Segment Table",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "The Critical Section is the portion of code that accesses shared mutable resources. Correct: (A) Critical Section."
        },
        {
          "id": "m-d25-q32",
          "question": "Q32. A Mutex is mainly used for:",
          "options": [
            "Mutual exclusion",
            "Paging",
            "Disk scheduling",
            "File naming",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Mutex stands for Mutual Exclusion lock and ensures only one thread executes in the critical section at any given time. Correct: (A) Mutual exclusion."
        },
        {
          "id": "m-d25-q33",
          "question": "Q33. A Semaphore is best visualized as:",
          "options": [
            "Counter/synchronization mechanism",
            "Page frame",
            "CPU register only",
            "File path",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "A Semaphore is a synchronization tool represented conceptually as an integer counter controlling access to shared resources. Correct: (A) Counter/synchronization mechanism."
        },
        {
          "id": "m-d25-q34",
          "question": "Q34. Which operations are classically associated with Semaphore?",
          "options": [
            "Push and Pop",
            "Wait and Signal",
            "Enqueue and Dequeue",
            "Read and Compile",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "The two atomic operations on a semaphore are wait() (or P) and signal() (or V). Correct: (B) Wait and Signal."
        },
        {
          "id": "m-d25-q35",
          "question": "Q35. A Binary Semaphore commonly uses:",
          "options": [
            "0 and 1",
            "1 to 100",
            "Negative numbers only",
            "Characters A and B",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "A binary semaphore can take only values 0 (locked) and 1 (available). Correct: (A) 0 and 1."
        },
        {
          "id": "m-d25-q36",
          "question": "Q36. Which is a classic necessary deadlock condition?",
          "options": [
            "Hold and Wait",
            "Circular Wait",
            "Mutual Exclusion",
            "More than one of the above",
            "None of the above"
          ],
          "correctAnswer": 3,
          "explanation": "Mutual Exclusion, Hold & Wait, No Preemption, and Circular Wait are all necessary Coffman conditions. Since A, B, and C are all valid, D is correct. Correct: (D) More than one of the above."
        },
        {
          "id": "m-d25-q37",
          "question": "Q37. Which mnemonic represents the four classic deadlock conditions?",
          "options": [
            "MHNC",
            "FIFO",
            "BODH",
            "LNR",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "MHNC stands for Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait ('My Hungry Neighbor Circles'). Correct: (A) MHNC."
        },
        {
          "id": "m-d25-q38",
          "question": "Q38. Banker's Algorithm is associated with:",
          "options": [
            "Deadlock avoidance",
            "Disk formatting",
            "Page replacement only",
            "Sorting",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Dijkstra's Banker's Algorithm dynamically tests for safety to ensure resource allocation avoids deadlock. Correct: (A) Deadlock avoidance."
        },
        {
          "id": "m-d25-q39",
          "question": "Q39. Which statement is correct?",
          "options": [
            "Deadlock → processes can be stuck waiting on one another",
            "Starvation → one process may keep waiting while others progress",
            "Both A and B",
            "Neither A nor B",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "Both definitions are correct: In Deadlock, all involved processes are permanently stuck; in Starvation, one process is indefinitely delayed while others continue making progress. Correct: (C) Both A and B."
        },
        {
          "id": "m-d25-q40",
          "question": "Q40. Which appear as file systems in your TRE 3.0 paper?",
          "options": [
            "NTFS",
            "FAT32",
            "HFS+",
            "More than one of the above",
            "None of the above"
          ],
          "correctAnswer": 3,
          "explanation": "NTFS, FAT32, and HFS+ were all listed as file system options in the TRE 3.0 paper. Correct: (D) More than one of the above."
        },
        {
          "id": "m-d25-q41",
          "question": "Q41. Which is a standard file operation?",
          "options": [
            "Create",
            "Delete",
            "Rename",
            "More than one of the above",
            "None of the above"
          ],
          "correctAnswer": 3,
          "explanation": "Create, Delete, and Rename are all standard file operations. Correct: (D) More than one of the above."
        },
        {
          "id": "m-d25-q42",
          "question": "Q42. In the TRE 3.0 interrupt question, which is the non-standard interrupt type among the listed options?",
          "options": [
            "Hardware interrupt",
            "Memory interrupt",
            "Software interrupt",
            "More than one of the above",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Hardware Interrupt and Software Interrupt are canonical categories; Memory Interrupt was the non-standard distractor in TRE 3.0. Correct: (B) Memory interrupt."
        },
        {
          "id": "m-d25-q43",
          "question": "Q43. FCFS disk scheduling serves requests:",
          "options": [
            "In arrival order",
            "By nearest cylinder",
            "Highest cylinder first",
            "Randomly",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "FCFS disk scheduling handles requests strictly in the order of their queue arrival. Correct: (A) In arrival order."
        },
        {
          "id": "m-d25-q44",
          "question": "Q44. SSTF selects:",
          "options": [
            "First-arrived request",
            "Nearest pending request",
            "Largest cylinder only",
            "Lowest cylinder only",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Shortest Seek Time First (SSTF) greedily selects the request with minimum seek time from the current head position. Correct: (B) Nearest pending request."
        },
        {
          "id": "m-d25-q45",
          "question": "Q45. SCAN is commonly called:",
          "options": [
            "Elevator algorithm",
            "Banker's algorithm",
            "Hash algorithm",
            "Sorting algorithm",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "SCAN is known as the Elevator Algorithm because it sweeps back and forth servicing requests in both directions. Correct: (A) Elevator algorithm."
        },
        {
          "id": "m-d25-q46",
          "question": "Q46. C-SCAN primarily:",
          "options": [
            "Services requests in one direction, then returns circularly",
            "Serves the nearest request only",
            "Always follows FCFS",
            "Never moves the disk head",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Circular SCAN (C-SCAN) moves in one direction servicing requests, then immediately returns to the beginning without servicing requests on the return trip. Correct: (A) Services requests in one direction, then returns circularly."
        },
        {
          "id": "m-d25-q47",
          "question": "Q47. In the exact TRE 3.0 FCFS disk problem, initial head = 53 and requests are: 98, 183, 37, 122, 14, 124, 65, 67. The total movement is:",
          "options": [
            "620",
            "630",
            "640",
            "650",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "45 + 85 + 146 + 85 + 108 + 110 + 59 + 2 = 640 head movements. Correct: (C) 640."
        },
        {
          "id": "m-d25-q48",
          "question": "Q48. If two numbers are in ratio 2:5 and their difference is 66, the smaller number is:",
          "options": [
            "22",
            "44",
            "66",
            "110",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "5x - 2x = 3x = 66 => x = 22. Smaller number = 2x = 44. Correct: (B) 44."
        },
        {
          "id": "m-d25-q49",
          "question": "Q49. A value increases by 20% and then decreases by 20%. The net result is:",
          "options": [
            "No change",
            "4% gain",
            "4% loss",
            "20% loss",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "+x% followed by -x% yields a net loss of x² / 100% = 20² / 100% = 4% loss (100 * 1.20 = 120 * 0.80 = 96 => 4% loss). Correct: (C) 4% loss."
        },
        {
          "id": "m-d25-q50",
          "question": "Q50. Choose the correct phrase:",
          "options": [
            "a early morning walk",
            "an early morning walk",
            "an university",
            "a airport",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "'early' begins with the vowel sound /ɜː/, requiring 'an': 'an early morning walk'. Correct: (B) an early morning walk."
        }
      ]
    }
  },
  {
    "dayNumber": 26,
    "dayId": "day-26",
    "badge": "Day 26",
    "title": "TRE 4.0 — Day 26",
    "unit": "Part III (CS) • Python Programming: Dynamic Typing, Collections (List, Tuple, Dict, Set), Slicing, Loops, Functions & 20-Q Checkpoint",
    "targetTime": "15–18 mins read + 20 mins test",
    "summary": "New Programming Priority Shift: Python (70%), Generic OOP (20%), C++/Java facts (10%). Fundamental Python architecture: High-level, interpreted, dynamically typed; Four Core Collections: List [ ] (mutable, ordered), Tuple ( ) (immutable, fixed), Dictionary {k:v} (key-value mapping), Set { } (unique values); Indexing (0-based & negative -1 as last); Slicing syntax a[start:end] (start included, end excluded) and reverse shortcut [::-1]; List operations: append(), pop(), len(); Loops & ranges: range(n) (0 to n-1), range(start, stop); Functions (def, return); Line-by-line mental tracing strategy for output MCQs; and 20 targeted checkpoint MCQs.",
    "targets": [
      {
        "section": "Part III – CS",
        "topic": "Python Core & 4 Collections",
        "goal": "Master dynamic typing, List vs Tuple mutability, Dict vs Set, negative indexing, slicing ([start:end] & [::-1]), append/pop, range(n), and def functions"
      },
      {
        "section": "Exam Strategy",
        "topic": "Programming Priority Realignment",
        "goal": "Focus on Python (70%) + Generic OOP (20%), deprecating obscure C++ syntax memorization in favor of high-yield exam patterns"
      }
    ],
    "introNote": "New programming priority:\nPython → 70% | Generic OOP → 20% | C++ / Java language facts → 10%\n\nNo more spending entire days memorizing obscure C++ syntax.\nWe retain only transferable OOP concepts and focus heavily on Python syntax, collections, slicing, and line-by-line output prediction matching recent STET and TRE trends.",
    "parts": [
      {
        "title": "Part III — Python Language Architecture & Core Data Types",
        "sections": [
          {
            "title": "1. What is Python? & 2. Variables (Dynamic Typing)",
            "blocks": [
              {
                "type": "text",
                "content": "1. What is Python?\n\n🧠 MENTAL PICTURE\nImagine talking to the computer almost like simple English:"
              },
              {
                "type": "diagram",
                "content": "name = \"Ravi\"\nage = 20\nprint(name)\n\nNo:\nint, char*, semicolon (;), or header files (#include) needed for basic code."
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Simple Concept: Python Definition",
                "content": "Python is a:\n• High-level\n• Interpreted\n• Dynamically typed\n• General-purpose language\n\nFor exam memory:\nPython = Simple syntax + dynamic typing + interpreted execution"
              },
              {
                "type": "text",
                "content": "2. Variables\nIn Python:\nx = 10\nname = \"Ravi\"\nprice = 20.5\n\nYou don't normally write: int x = 10\nPython determines the variable type automatically at runtime."
              },
              {
                "type": "diagram",
                "content": "Mental tracing:\nx = 10  →  Python sees 10  →  automatically types as int"
              }
            ]
          },
          {
            "title": "3. Important Python Data Types & The Four Collections",
            "blocks": [
              {
                "type": "text",
                "content": "Memorize these fundamental data types first:\nint, float, str, bool, list, tuple, dict, set\n\nExample:\nx = 10         # int\ny = 10.5       # float\nname = \"Ravi\"  # str\nflag = True    # bool"
              },
              {
                "type": "callout",
                "icon": "🔥",
                "title": "The Four Collections (Extremely Important for Output MCQs)",
                "content": "LIST       →  [ ]          (Square brackets)\nTUPLE      →  ( )          (Parentheses)\nDICTIONARY →  {key: value} (Key-value pairs in curly braces)\nSET        →  { }          (Unique values in curly braces)"
              },
              {
                "type": "diagram",
                "content": "White-paper recall:\n[ ]      LIST\n( )      TUPLE\n{K:V}    DICTIONARY\n{ }      SET (unique concept)"
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Lists, Tuples, Dictionaries & Sets in Depth",
        "sections": [
          {
            "title": "4–6. List, 0-based & Negative Indexing, Mutability",
            "blocks": [
              {
                "type": "text",
                "content": "4. List\n🧠 MENTAL PICTURE: A flexible shopping bag\na = [10, 20, 30]\n\nIndex: 0   1   2\nValue: 10  20  30\n\nSo: print(a[0]) → Output: 10\nMemory: Python indexing starts at 0"
              },
              {
                "type": "diagram",
                "content": "5. Negative Indexing (Very Important):\na = [10, 20, 30, 40]\n\nPositive index:   0    1    2    3\nValues:          10   20   30   40\nNegative index:  -4   -3   -2   -1\n\nprint(a[-1])  →  Output: 40\nprint(a[-2])  →  Output: 30\n\nMemory: -1 = last element"
              },
              {
                "type": "callout",
                "icon": "✏️",
                "title": "6. List is Mutable",
                "content": "Mutable means: Can be changed in-place.\n\nExample:\na = [10, 20, 30]\na[1] = 99\nprint(a)\n\nOutput: [10, 99, 30]\n\nMemory: LIST = Change allowed (Mutable)"
              }
            ]
          },
          {
            "title": "7–9. Tuple, Dictionary & Set Master Comparison",
            "blocks": [
              {
                "type": "text",
                "content": "7. Tuple\nt = (10, 20, 30)\nLooks similar to list, but: Tuple is immutable!\n\nThis fails with TypeError:\nt[1] = 99  ❌\nTuple elements cannot normally be modified after creation."
              },
              {
                "type": "callout",
                "icon": "🔥",
                "title": "List vs Tuple Mental Picture",
                "content": "LIST  [ ] → Mutable   (editable notebook)\nTUPLE ( ) → Immutable (printed certificate)"
              },
              {
                "type": "text",
                "content": "8. Dictionary\nStores KEY → VALUE pairs:\nstudent = {\n  \"name\": \"Ravi\",\n  \"age\": 20\n}\n\nAccess:\nprint(student[\"name\"]) → Output: Ravi\n\n🧠 Mental picture: Phone contacts (Ravi → 9876543210, Aman → 9123456789)\nMemory: Dictionary = Key : Value\n\n9. Set\nStores unique elements only:\ns = {1, 2, 2, 3}\nDuplicate 2 is automatically discarded: {1, 2, 3}\nMemory: SET = Unique values (unordered collection)"
              },
              {
                "type": "diagram",
                "content": "🔥 Python Collection Master Table:\n\nType       │ Syntax   │ Mutable? │ Main Idea\n───────────┼──────────┼──────────┼──────────────────────────────────────\nList       │ [ ]      │ Yes      │ Ordered sequence, editable\nTuple      │ ( )      │ No       │ Fixed / immutable sequence\nDictionary │ {k: v}   │ Yes      │ Key-value lookup table\nSet        │ {values} │ Yes      │ Unique values, duplicates eliminated"
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Slicing, List Methods, Loops & Functions",
        "sections": [
          {
            "title": "10–11. Slicing Syntax & Slicing Shortcuts",
            "blocks": [
              {
                "type": "text",
                "content": "10. Slicing\nSyntax:\na[start : end]\n\nImportant Rule: start is INCLUDED, end is EXCLUDED!\n\nExample:\na = [10, 20, 30, 40, 50]\nprint(a[1:4])\n\nTake:\nIndex 1 → 20\nIndex 2 → 30\nIndex 3 → 40\nStop before index 4!\n\nOutput: [20, 30, 40]"
              },
              {
                "type": "callout",
                "icon": "⚡",
                "title": "11. Slicing Shortcuts",
                "content": "a = [10, 20, 30, 40, 50]\n\n• From beginning:       a[:3]   → [10, 20, 30]\n• From index 2 to end:  a[2:]   → [30, 40, 50]\n• Reverse sequence:     a[::-1] → [50, 40, 30, 20, 10]\n\n🔥 Memory: [::-1] = reverse sequence"
              }
            ]
          },
          {
            "title": "12–17. append(), pop(), len(), range(), Loops & Functions",
            "blocks": [
              {
                "type": "text",
                "content": "12. append()\nAdds one item to the end of the list:\na = [10, 20]\na.append(30)\nprint(a)  →  [10, 20, 30]\nMemory: append = add at end\n\n13. pop()\nRemoves and returns an item (by default, the last item):\na = [10, 20, 30]\nx = a.pop()\nprint(x)  →  30\nprint(a)  →  [10, 20]\n\n14. len()\na = [10, 20, 30, 40]\nprint(len(a))  →  4\nMemory: len = number of elements\n\n15. for Loop & range(stop)\nfor i in range(3):\n    print(i)\nOutput: 0  1  2\nWhy not 3? Because stop is excluded: range(n) produces 0 to n-1.\n\n16. range(start, stop)\nfor i in range(2, 5):\n    print(i)\nOutput: 2  3  4 (stop index 5 excluded)\n\n17. Function\ndef add(a, b):\n    return a + b\n\nprint(add(2, 3))  →  5\nMemory: def = define function | return = send result back"
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — MCQ Problem Solving Strategy, Traps & White-Paper Sheet",
        "sections": [
          {
            "title": "18. Output Method, Traps & Syllabus Strategy",
            "blocks": [
              {
                "type": "text",
                "content": "18. Python Output Question Method\nDon't mentally run the entire code all at once!\nDraw variables line-by-line.\n\nExample:\nx = 5\ny = 2\nx = x + y\ny = x - y\nprint(x, y)\n\nTracing:\nInitially: x = 5, y = 2\nLine 3:    x = 5 + 2 = 7\nLine 4:    y = 7 - 2 = 5\nPrint:     7 5"
              },
              {
                "type": "callout",
                "icon": "⚠️",
                "title": "Python Traps Checklist",
                "content": "• [ ]  → List (Mutable)\n• ( )  → Tuple (Immutable)\n• Index starts at 0; -1 is the last element\n• Slicing [start:end] → end is EXCLUDED\n• range(n) → 0 to n-1 (n is EXCLUDED)\n• [::-1] → Reverse\n• Dict → Key : Value\n• Set → Unique values (duplicates eliminated)"
              },
              {
                "type": "text",
                "content": "What We Will NOT Spend Much Time On:\nWe will avoid long lessons on obscure C++ trivia (rank(), is_array(), anonymous classes, new vs malloc corner cases, inline trivia).\nWe retain only transferable OOP concepts:\nClass / Object, Inheritance, Encapsulation, Abstraction, Polymorphism, Constructor, Overloading vs Overriding."
              },
              {
                "type": "diagram",
                "content": "🧠 Day 26 White-Paper Master Sheet\nDraw only this:\n\nPYTHON\nint, float, str, bool\n\nCOLLECTIONS:\nLIST   [ ]      Mutable\nTUPLE  ( )      Immutable\nDICT   {k: v}   Key:Value\nSET    { }      Unique\n\nINDEX:\n0  → first\n-1 → last\n\nSLICE:\n[start:end] → start included, end excluded\n[::-1]      → reverse\n\nOPERATIONS:\nappend() → add at end\npop()    → remove last\nlen()    → count items\nrange(n) → 0 to n-1\ndef      → define function"
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 26 Checkpoint Test",
      "subtitle": "20 Questions: Python Basics, Data Types, Collections, Slicing & Line-by-Line Execution",
      "questions": [
        {
          "id": "m-d26-q1",
          "question": "Q1. Which represents a Python list?",
          "options": [
            "(10,20,30)",
            "[10,20,30]",
            "{10:20}",
            "\"10,20,30\"",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "In Python, lists are defined using square brackets [ ]. Correct: (B) [10,20,30]."
        },
        {
          "id": "m-d26-q2",
          "question": "Q2. Which represents a tuple?",
          "options": [
            "[1,2,3]",
            "(1,2,3)",
            "{1,2,3}",
            "{1:2}",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "In Python, tuples are defined using parentheses ( ). Correct: (B) (1,2,3)."
        },
        {
          "id": "m-d26-q3",
          "question": "Q3. Which collection is immutable?",
          "options": [
            "List",
            "Tuple",
            "Dictionary",
            "Set",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "Tuples are immutable; once created, their elements cannot be modified, added, or removed. Correct: (B) Tuple."
        },
        {
          "id": "m-d26-q4",
          "question": "Q4. What is the output?\na = [10,20,30]\nprint(a[0])",
          "options": [
            "0",
            "10",
            "20",
            "30",
            "Error"
          ],
          "correctAnswer": 1,
          "explanation": "Python uses 0-based indexing, so a[0] returns the first element, which is 10. Correct: (B) 10."
        },
        {
          "id": "m-d26-q5",
          "question": "Q5. What is the output?\na = [10,20,30]\nprint(a[-1])",
          "options": [
            "10",
            "20",
            "30",
            "-1",
            "Error"
          ],
          "correctAnswer": 2,
          "explanation": "Negative indexing in Python accesses elements from the end; a[-1] is the last element, which is 30. Correct: (C) 30."
        },
        {
          "id": "m-d26-q6",
          "question": "Q6. What is the output?\na = [10,20,30,40,50]\nprint(a[1:4])",
          "options": [
            "[10,20,30,40]",
            "[20,30,40]",
            "[20,30,40,50]",
            "[10,20,30]",
            "Error"
          ],
          "correctAnswer": 1,
          "explanation": "Slicing a[1:4] includes index 1, 2, and 3 while excluding index 4. The elements are 20, 30, and 40. Correct: (B) [20,30,40]."
        },
        {
          "id": "m-d26-q7",
          "question": "Q7. In Python slicing a[2:5], index 5 is:",
          "options": [
            "Included",
            "Excluded",
            "Included twice",
            "Invalid",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "In Python slice notation [start:stop], the start index is included and the stop index is excluded. Correct: (B) Excluded."
        },
        {
          "id": "m-d26-q8",
          "question": "Q8. What does this generally do?\na[::-1]",
          "options": [
            "Deletes a",
            "Reverses the sequence",
            "Sorts ascending",
            "Returns first item",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Slice notation with step -1 (a[::-1]) reverses the sequence. Correct: (B) Reverses the sequence."
        },
        {
          "id": "m-d26-q9",
          "question": "Q9. What is the output?\na = [1,2]\na.append(3)\nprint(a)",
          "options": [
            "[1,2]",
            "[3,1,2]",
            "[1,2,3]",
            "Error",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "The append() method appends an element to the end of the list, resulting in [1, 2, 3]. Correct: (C) [1,2,3]."
        },
        {
          "id": "m-d26-q10",
          "question": "Q10. What is the output?\nprint(len([5,10,15,20]))",
          "options": [
            "3",
            "4",
            "5",
            "20",
            "Error"
          ],
          "correctAnswer": 1,
          "explanation": "The len() function returns the total count of elements in the collection, which is 4. Correct: (B) 4."
        },
        {
          "id": "m-d26-q11",
          "question": "Q11. Which structure stores key-value pairs?",
          "options": [
            "List",
            "Tuple",
            "Dictionary",
            "String",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "A Dictionary stores data in key-value pairs enclosed in curly braces {key: value}. Correct: (C) Dictionary."
        },
        {
          "id": "m-d26-q12",
          "question": "Q12. A set is especially useful when you want:",
          "options": [
            "Duplicate values only",
            "Unique values",
            "Key-value pairs only",
            "Immutable sequence only",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "A Set is an unordered collection of unique elements that automatically eliminates duplicates. Correct: (B) Unique values."
        },
        {
          "id": "m-d26-q13",
          "question": "Q13. What does range(4) generate conceptually?",
          "options": [
            "1,2,3,4",
            "0,1,2,3",
            "0,1,2,3,4",
            "1,2,3",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "range(n) generates integers starting from 0 up to n-1. Therefore, range(4) generates 0, 1, 2, 3. Correct: (B) 0,1,2,3."
        },
        {
          "id": "m-d26-q14",
          "question": "Q14. What is the output?\nfor i in range(3): print(i)",
          "options": [
            "1 2 3",
            "0 1 2",
            "0 1 2 3",
            "3 2 1",
            "Error"
          ],
          "correctAnswer": 1,
          "explanation": "range(3) produces 0, 1, 2. The loop prints these values sequentially. Correct: (B) 0 1 2."
        },
        {
          "id": "m-d26-q15",
          "question": "Q15. Which keyword defines a Python function?",
          "options": [
            "func",
            "function",
            "def",
            "define",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "The def keyword is used to define functions in Python. Correct: (C) def."
        },
        {
          "id": "m-d26-q16",
          "question": "Q16. What is the output?\ndef add(a,b): return a+b\nprint(add(3,4))",
          "options": [
            "3",
            "4",
            "7",
            "34",
            "Error"
          ],
          "correctAnswer": 2,
          "explanation": "The function add(3, 4) executes return 3 + 4, which computes and returns 7. Correct: (C) 7."
        },
        {
          "id": "m-d26-q17",
          "question": "Q17. What is the output?\na = [10,20,30]\na[1] = 50\nprint(a)",
          "options": [
            "[10,20,30]",
            "[10,50,30]",
            "Error",
            "[50,20,30]",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Lists are mutable in Python. Assigning a[1] = 50 replaces 20 with 50, resulting in [10, 50, 30]. Correct: (B) [10,50,30]."
        },
        {
          "id": "m-d26-q18",
          "question": "Q18. What happens here?\nt = (10,20,30)\nt[1] = 50",
          "options": [
            "Tuple becomes (10,50,30)",
            "Error because tuple is immutable",
            "Tuple becomes list",
            "50 is appended",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Tuples are immutable; item assignment raises a TypeError at runtime. Correct: (B) Error because tuple is immutable."
        },
        {
          "id": "m-d26-q19",
          "question": "Q19. Which is correct?",
          "options": [
            "List → immutable; Tuple → mutable",
            "List → mutable; Tuple → immutable",
            "Both are always immutable",
            "Both are dictionaries",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "A List is mutable (can be changed in-place), whereas a Tuple is immutable (cannot be modified after creation). Correct: (B) List → mutable; Tuple → immutable."
        },
        {
          "id": "m-d26-q20",
          "question": "Q20. For Python output questions, the safest method is:",
          "options": [
            "Guess from final line",
            "Execute code mentally line-by-line",
            "Ignore variable changes",
            "Treat Python exactly like C++",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Tracing variables step-by-step and executing code line-by-line avoids logic traps and yields accurate output predictions. Correct: (B) Execute code mentally line-by-line."
        }
      ]
    }
  },
  {
    "dayNumber": 27,
    "dayId": "day-27",
    "badge": "Day 27",
    "title": "TRE 4.0 — Day 27",
    "unit": "Part III (CS) • Python Operators (/ vs // vs %), Control Flow (if/elif/else), Loops (for, while, range), break/continue • GS (% Change) • English (Articles)",
    "targetTime": "15–18 mins read + 20 mins test",
    "summary": "Python Control Structures & Operators (NCERT Class XI Chapters 5 & 6 kecs105/kecs106): Arithmetic Operators (+, -, *, /, // floor division, % modulus, ** exponentiation), Comparison/Relational Operators (== vs = assignment, !=, >, <, >=, <=), Logical Operators (and, or, not in lowercase), Membership Operators (in, not in), Conditional Flow (if, if...else, if/elif/else, indentation blocks), Loops: for loop with range(start, stop, step) [stop excluded, negative step backward], while loop & infinite loop dangers, Loop control statements: break (exit loop completely) vs continue (skip current iteration), line-by-line variable tracing table method, operator precedence, GS Successive % Change (+10% then -10% -> 1% loss), and English Articles ('an hour').",
    "targets": [
      {
        "section": "Part III – CS",
        "topic": "Python Operators & Control Flow",
        "goal": "Master / vs // vs %, == vs =, and/or/not, in/not in, if/elif/else indentation, range(start, stop, step), while loops, break vs continue, and line-by-line variable tracing"
      },
      {
        "section": "Part II – GS",
        "topic": "Successive Percentage Change",
        "goal": "+x% then -x% net change formula: x²/100 % loss (+10% & -10% gives 1% loss)"
      },
      {
        "section": "Part I – English",
        "topic": "Articles (Vowel Sound Rule)",
        "goal": "Silent 'h' in 'an hour' vs consonant glide /juː/ in 'a university'"
      }
    ],
    "introNote": "Today is 100% Python for Computer Science—no C++ questions.\n\nYour uploaded NCERT Class XI Python chapters directly cover arithmetic/relational/logical operators, if/elif/else, for, while, range(), break, continue, nested loops, and output-based exercises (kecs105 / kecs106).",
    "parts": [
      {
        "title": "Part III — Python Operators: Arithmetic (/ vs // vs %), Relational & Logical",
        "sections": [
          {
            "title": "1. Python Operators & 2. Division (/), Floor Division (//) & Modulus (%)",
            "blocks": [
              {
                "type": "text",
                "content": "1. Python Operators\n🧠 MENTAL PICTURE: Think of a calculator\n5 + 2, 5 - 2, 5 * 2, 5 / 2\n\nPython has essential operators tested heavily in MCQs:\n+   Addition\n-   Subtraction\n*   Multiplication\n/   Normal division (always float in Python 3)\n//  Floor division (quotient without fractional part)\n%   Remainder / Modulus\n**  Power / Exponentiation\n\nNCERT explicitly lists these arithmetic operators (kecs105)."
              },
              {
                "type": "diagram",
                "content": "2. / vs // vs % (Major Python Trap):\nSuppose: a = 13, b = 4\n\n• Normal division (/):\n  print(13 / 4)  → Output: 3.25\n\n• Floor division (//):\n  print(13 // 4) → Output: 3\n  (For positive numbers: strips decimal part down)\n\n• Modulus (%):\n  print(13 % 4)  → Output: 1\n  (because 13 = 4 × 3 + 1, remainder is 1)"
              },
              {
                "type": "callout",
                "icon": "🔥",
                "title": "Division Memory Rule",
                "content": "/  → quotient with decimal (float)\n// → floor quotient (integer for integer operands)\n%  → remainder"
              }
            ]
          },
          {
            "title": "3. Power (**), 4. Relational Operators (== vs =) & 5. Logical Operators",
            "blocks": [
              {
                "type": "text",
                "content": "3. ** Power (Exponentiation)\nprint(2 ** 3)  → means 2³ → Output: 8\nprint(2 ** 4)  → means 2⁴ → Output: 16\nMemory: Two stars (**) = Power\n\n4. Relational Operators (Produce True or False):\n==  equal\n!=  not equal\n>   greater\n<   smaller\n>=  greater or equal\n<=  smaller or equal"
              },
              {
                "type": "callout",
                "icon": "⚠️",
                "title": "= vs == (Crucial Distinction)",
                "content": "x = 10   → Assignment (PUT VALUE into variable x)\nx == 10  → Comparison (ASK QUESTION: is x equal to 10?)"
              },
              {
                "type": "text",
                "content": "5. Logical Operators\nPython uses lowercase words: and, or, not (NCERT kecs105).\n\n• and: Both conditions must be True.\n  True and True   → True\n  True and False  → False\n  Memory: AND = ALL must be true\n\n• or: At least one condition must be True.\n  True or False   → True\n  False or False  → False\n  Memory: OR = ANY true suffices\n\n• not: Inverts truth value.\n  not True   → False\n  not False  → True\n  Memory: NOT = reverse"
              }
            ]
          },
          {
            "title": "6. Membership Operators (in, not in) & 19. Operator Precedence",
            "blocks": [
              {
                "type": "text",
                "content": "6. Membership Operators\nPython provides in and not in to test membership in a sequence (string, list, tuple, etc.).\n\nExample:\na = [10, 20, 30]\nprint(20 in a)  → Output: True\nprint(50 in a)  → Output: False\nprint(50 not in a) → Output: True\n\nMemory: in = present in sequence?\n\n19. Operator Precedence (Basic Exam Level):\n1. ** (Exponentiation)\n2. * , / , // , % (Multiplication, Division, Floor Div, Modulo)\n3. + , - (Addition, Subtraction)\n4. == , != , > , < , >= , <= (Comparisons)\n5. not , and , or (Logical operators)\n\nExample:\nprint(2 + 3 * 4)\nFirst 3 × 4 = 12, then 2 + 12 = 14 → Output: 14"
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Control Flow: Conditional Branches & Indentation Rules",
        "sections": [
          {
            "title": "7–9. if, if...else & if / elif / else Multi-Way Selection",
            "blocks": [
              {
                "type": "text",
                "content": "7. if Statement\n🧠 MENTAL PICTURE: Traffic signal (IF RED → STOP)\n\nage = 20\nif age >= 18:\n    print(\"Eligible\")\nOutput: Eligible\n\n8. if...else Statement\nage = 15\nif age >= 18:\n    print(\"Eligible\")\nelse:\n    print(\"Not Eligible\")\nOutput: Not Eligible"
              },
              {
                "type": "diagram",
                "content": "9. if / elif / else (NCERT kecs106):\nWhen multiple conditions must be checked, elif chains evaluate sequentially.\nOnce a condition becomes True, its block runs and the selection terminates.\n\nmarks = 75\nif marks >= 80:\n    print(\"A\")\nelif marks >= 60:\n    print(\"B\")\nelse:\n    print(\"C\")\n\nTrace:\nmarks >= 80 (75 >= 80) → False\nmarks >= 60 (75 >= 60) → True → Prints \"B\" and terminates\nOutput: B"
              },
              {
                "type": "callout",
                "icon": "🚦",
                "title": "Branching Memory Anchor",
                "content": "IF\n ↓ false\nELIF\n ↓ false\nELSE"
              }
            ]
          },
          {
            "title": "10. Python Indentation & Block Structure",
            "blocks": [
              {
                "type": "text",
                "content": "10. Python Indentation\nPython uses indentation (whitespace/spaces) to identify code blocks and nesting.\nNCERT explicitly emphasizes that inconsistent or missing indentation causes syntax errors (IndentationError).\n\nCorrect:\nif x > 5:\n    print(\"Yes\")\n\nIncorrect:\nif x > 5:\nprint(\"Yes\")   ❌ (SyntaxError / IndentationError)"
              },
              {
                "type": "callout",
                "icon": "📐",
                "title": "Indentation Rule",
                "content": "Python uses spaces to show ownership and scope of code blocks instead of curly braces { }."
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Loops: for, while, range() & Loop Control (break vs continue)",
        "sections": [
          {
            "title": "11–13. for Loop, range(start, stop, step) & Negative Step",
            "blocks": [
              {
                "type": "text",
                "content": "11. for Loop\nUsed to iterate over a sequence (list, tuple, string) or range.\n\nfor i in range(3):\n    print(i)\nOutput:\n0\n1\n2\n\n12. range() Function\nSyntax: range(start, stop, step)\n• start defaults to 0\n• step defaults to 1\n• STOP is always EXCLUDED!\n\nExamples:\n• range(5)         → 0, 1, 2, 3, 4\n• range(2, 6)      → 2, 3, 4, 5\n• range(0, 10, 2)  → 0, 2, 4, 6, 8"
              },
              {
                "type": "callout",
                "icon": "🔄",
                "title": "13. Negative Step (Countdown)",
                "content": "for i in range(5, 0, -1):\n    print(i)\n\nOutput:\n5\n4\n3\n2\n1\n(0 is excluded!)\n\nMemory: Negative step → counts backward down to stop + 1."
              }
            ]
          },
          {
            "title": "14–17. while Loop, Infinite Loops, break vs continue & Tracing",
            "blocks": [
              {
                "type": "text",
                "content": "14. while Loop\nRepeats as long as its condition remains True. If false initially, its body executes zero times (NCERT kecs106).\n\nx = 1\nwhile x <= 3:\n    print(x)\n    x += 1\nOutput: 1  2  3\n\n15. Infinite Loop\nIf the loop variable is not updated, the condition never becomes False:\nx = 1\nwhile x <= 5:\n    print(x)  # Infinite loop! x never changes.\nMemory: while loop requires a guaranteed termination path."
              },
              {
                "type": "diagram",
                "content": "🔥 break vs continue (NCERT kecs106):\n\nStatement │ Effect                                │ Mental Analogy\n──────────┼───────────────────────────────────────┼───────────────────\nbreak     │ Terminates loop completely            │ Exit Door 🚪\ncontinue  │ Skips rest of current iteration only  │ Skip Button ⏭️"
              },
              {
                "type": "text",
                "content": "16. break Example:\nfor i in range(5):\n    if i == 3:\n        break\n    print(i)\nTrace: i=0 (print 0), i=1 (print 1), i=2 (print 2), i=3 (break!)\nOutput: 0  1  2\n\n17. continue Example:\nfor i in range(5):\n    if i == 2:\n        continue\n    print(i)\nTrace: 2 is skipped!\nOutput: 0  1  3  4"
              },
              {
                "type": "callout",
                "icon": "📋",
                "title": "18. Output-Tracing Rule (Make a Tiny Table)",
                "content": "x = 0\nfor i in range(1, 4):\n    x = x + i\nprint(x)\n\nTrace Table:\ni   x\n─────\n1   1\n2   3\n3   6\n\nOutput: 6\nRule: Never guess output. Trace variables line-by-line."
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Day 27 White-Paper Master Sheet & Recall",
        "sections": [
          {
            "title": "White-Paper Master Sheet",
            "blocks": [
              {
                "type": "diagram",
                "content": "🧠 Day 27 White-Paper Master Sheet\nMemorize only this:\n\nPYTHON OPERATORS:\n/   → division (float)\n//  → floor division (integer quotient)\n%   → remainder\n**  → power (exponentiation)\n\n=   → assignment\n==  → comparison equality\n\nand → ALL true\nor  → ANY true\nnot → reverse\nin  → membership test\n\nBRANCHING:\nif / elif / else\nIndentation shows block ownership!\n\nLOOPS:\nrange(start, stop, step)  [STOP EXCLUDED]\nfor   → iterate sequence / range\nwhile → repeat while condition true\n\nLOOP CONTROL:\nbreak    → EXIT loop completely 🚪\ncontinue → SKIP current iteration ⏭️"
              }
            ]
          }
        ]
      },
      {
        "title": "Part II — General Studies: Successive Percentage Change",
        "sections": [
          {
            "title": "+10% then -10% Successive Change Formula",
            "blocks": [
              {
                "type": "text",
                "content": "Exam Problem:\nIf a quantity increases by 10% and then decreases by 10%, what is the net result?\n\nStep-by-Step Calculation:\nLet original value = 100\n1. Increase by 10%:\n   100 + 10 = 110\n2. Decrease by 10%:\n   10% of 110 = 11\n   110 - 11 = 99\n\nNet result:\n100 → 99 = 1% loss"
              },
              {
                "type": "callout",
                "icon": "⚡",
                "title": "Successive % Formula Shortcut",
                "content": "When a value increases by x% and then decreases by x%:\nNet Change = x² / 100 % Loss\n\nFor 10%:\n10² / 100 % = 100 / 100 % = 1% Loss"
              }
            ]
          }
        ]
      },
      {
        "title": "Part I — English: Articles (Vowel Sound Rule)",
        "sections": [
          {
            "title": "'an hour' (Silent H) vs 'a university' (/juː/)",
            "blocks": [
              {
                "type": "text",
                "content": "Articles depend on pronunciation and initial SOUND, not alphabet spelling alone.\n\n• 'an hour': The 'h' is silent; it begins with the vowel sound /aʊə/. Therefore, it takes 'an'.\n• 'a university': Begins with the consonant glide sound /juː/. Therefore, it takes 'a'.\n• 'an actress': Begins with the vowel sound /æ/. Therefore, it takes 'an'."
              },
              {
                "type": "callout",
                "icon": "📖",
                "title": "Article Vowel Sound Anchor",
                "content": "• an hour (silent h)\n• an honest man (silent h)\n• an airport (/eə/)\n• an early morning walk (/ɜː/)\n• a university (/juː/)\n• a European (/juː/)"
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 27 Checkpoint Test",
      "subtitle": "20 Questions: Operators, if/elif/else, Loops, range(), break/continue & General Studies",
      "questions": [
        {
          "id": "m-d27-q1",
          "question": "Q1. What is the result of:\n13 // 4",
          "options": [
            "3",
            "3.25",
            "1",
            "4",
            "Error"
          ],
          "correctAnswer": 0,
          "explanation": "The floor division operator // returns the integer quotient, discarding the fractional part. 13 // 4 evaluates to 3. Correct: (A) 3."
        },
        {
          "id": "m-d27-q2",
          "question": "Q2. What is:\n13 % 4",
          "options": [
            "3",
            "4",
            "1",
            "0",
            "Error"
          ],
          "correctAnswer": 2,
          "explanation": "The modulo operator % returns the remainder of division: 13 = 4 * 3 + 1, so the remainder is 1. Correct: (C) 1."
        },
        {
          "id": "m-d27-q3",
          "question": "Q3. What is:\n2 ** 4",
          "options": [
            "6",
            "8",
            "16",
            "24",
            "Error"
          ],
          "correctAnswer": 2,
          "explanation": "The ** operator computes exponentiation: 2 ** 4 = 2⁴ = 16. Correct: (C) 16."
        },
        {
          "id": "m-d27-q4",
          "question": "Q4. Which operator tests equality?",
          "options": [
            "=",
            "==",
            "!=",
            ":=",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "== is the relational equality operator used to compare two values, whereas = is the assignment operator. Correct: (B) ==."
        },
        {
          "id": "m-d27-q5",
          "question": "Q5. What is the output?\nprint(10 > 5 and 3 < 2)",
          "options": [
            "True",
            "False",
            "10",
            "5",
            "Error"
          ],
          "correctAnswer": 1,
          "explanation": "10 > 5 is True, but 3 < 2 is False. In an and expression, both must be True. True and False evaluates to False. Correct: (B) False."
        },
        {
          "id": "m-d27-q6",
          "question": "Q6. What is the output?\nprint(10 > 5 or 3 < 2)",
          "options": [
            "True",
            "False",
            "10",
            "3",
            "Error"
          ],
          "correctAnswer": 0,
          "explanation": "In an or expression, if either operand is True, the entire expression evaluates to True. Here 10 > 5 is True. Correct: (A) True."
        },
        {
          "id": "m-d27-q7",
          "question": "Q7. What is the output?\nprint(20 in [10, 20, 30])",
          "options": [
            "20",
            "True",
            "False",
            "1",
            "Error"
          ],
          "correctAnswer": 1,
          "explanation": "The membership operator in tests whether 20 is present in the list [10, 20, 30]. Since it is, it returns True. Correct: (B) True."
        },
        {
          "id": "m-d27-q8",
          "question": "Q8. What is the output?\nx = 10\nif x > 5:\n    print(\"A\")\nelse:\n    print(\"B\")",
          "options": [
            "A",
            "B",
            "10",
            "Nothing",
            "Error"
          ],
          "correctAnswer": 0,
          "explanation": "Since x = 10 and 10 > 5 is True, the if block executes and prints 'A'. Correct: (A) A."
        },
        {
          "id": "m-d27-q9",
          "question": "Q9. What is the output?\nx = 70\nif x >= 80:\n    print(\"A\")\nelif x >= 60:\n    print(\"B\")\nelse:\n    print(\"C\")",
          "options": [
            "A",
            "B",
            "C",
            "70",
            "Error"
          ],
          "correctAnswer": 1,
          "explanation": "70 >= 80 is False. The next condition 70 >= 60 is True, so 'B' is printed and the branch terminates. Correct: (B) B."
        },
        {
          "id": "m-d27-q10",
          "question": "Q10. range(5) represents:",
          "options": [
            "1,2,3,4,5",
            "0,1,2,3,4",
            "0,1,2,3,4,5",
            "1,2,3,4",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "range(5) starts at 0 and stops before 5: 0, 1, 2, 3, 4. Correct: (B) 0,1,2,3,4."
        },
        {
          "id": "m-d27-q11",
          "question": "Q11. range(2,6) represents:",
          "options": [
            "2,3,4,5",
            "2,3,4,5,6",
            "1,2,3,4,5",
            "3,4,5,6",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "range(2, 6) starts at 2 and stops before 6: 2, 3, 4, 5. Correct: (A) 2,3,4,5."
        },
        {
          "id": "m-d27-q12",
          "question": "Q12. What is the output?\nfor i in range(0, 6, 2):\n    print(i)",
          "options": [
            "0 1 2 3 4 5",
            "0 2 4",
            "2 4 6",
            "0 2 4 6",
            "Error"
          ],
          "correctAnswer": 1,
          "explanation": "range(0, 6, 2) starts at 0, steps by 2, and stops before 6. The values are 0, 2, 4. Correct: (B) 0 2 4."
        },
        {
          "id": "m-d27-q13",
          "question": "Q13. What is the output?\nx = 1\nwhile x <= 3:\n    print(x)\n    x += 1",
          "options": [
            "0 1 2",
            "1 2 3",
            "1 2 3 4",
            "Infinite loop",
            "Error"
          ],
          "correctAnswer": 1,
          "explanation": "The loop starts with x=1, prints 1 (x becomes 2), prints 2 (x becomes 3), prints 3 (x becomes 4, which fails 4 <= 3). Output: 1 2 3. Correct: (B) 1 2 3."
        },
        {
          "id": "m-d27-q14",
          "question": "Q14. What does break do?",
          "options": [
            "Skips only current iteration",
            "Terminates the current loop",
            "Restarts Python",
            "Creates a loop",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "The break statement terminates the execution of the innermost enclosing loop immediately. Correct: (B) Terminates the current loop."
        },
        {
          "id": "m-d27-q15",
          "question": "Q15. What does continue do?",
          "options": [
            "Terminates the entire loop",
            "Skips the current iteration and moves to the next",
            "Stops the program",
            "Returns from a function",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "The continue statement skips the remaining statements in the current iteration and proceeds to the next iteration of the loop. Correct: (B) Skips the current iteration and moves to the next."
        },
        {
          "id": "m-d27-q16",
          "question": "Q16. What is the output?\nfor i in range(5):\n    if i == 3:\n        break\n    print(i)",
          "options": [
            "0 1 2",
            "0 1 2 3",
            "1 2 3",
            "0 1 2 4",
            "Error"
          ],
          "correctAnswer": 0,
          "explanation": "For i=0, 1, 2, it prints 0, 1, 2. When i=3, the break statement triggers, exiting the loop before 3 is printed. Output: 0 1 2. Correct: (A) 0 1 2."
        },
        {
          "id": "m-d27-q17",
          "question": "Q17. What is the output?\nfor i in range(5):\n    if i == 2:\n        continue\n    print(i)",
          "options": [
            "0 1 2 3 4",
            "0 1 3 4",
            "0 1",
            "2 3 4",
            "Error"
          ],
          "correctAnswer": 1,
          "explanation": "When i=2, continue executes, skipping print(2). The values printed are 0, 1, 3, 4. Correct: (B) 0 1 3 4."
        },
        {
          "id": "m-d27-q18",
          "question": "Q18. What is the output?\nx = 0\nfor i in range(1,4):\n    x += i\nprint(x)",
          "options": [
            "3",
            "4",
            "6",
            "10",
            "Error"
          ],
          "correctAnswer": 2,
          "explanation": "range(1, 4) produces i = 1, 2, 3. Tracing: x = 0 + 1 = 1; x = 1 + 2 = 3; x = 3 + 3 = 6. Output is 6. Correct: (C) 6."
        },
        {
          "id": "m-d27-q19",
          "question": "Q19. If a quantity increases by 10% and then decreases by 10%, the result is:",
          "options": [
            "1% gain",
            "1% loss",
            "No change",
            "10% loss",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Using the successive formula x² / 100 % loss: 10² / 100 % = 1% loss (e.g. 100 -> 110 -> 99, a net 1% loss). Correct: (B) 1% loss."
        },
        {
          "id": "m-d27-q20",
          "question": "Q20. Choose the correct phrase:",
          "options": [
            "a hour",
            "an hour",
            "an university",
            "a actress",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "In 'hour', the letter 'h' is silent and it begins with the vowel sound /aʊə/, requiring the article 'an': 'an hour'. Correct: (B) an hour."
        }
      ]
    }
  },
  {
    "dayNumber": 28,
    "dayId": "day-28",
    "badge": "Day 28",
    "title": "TRE 4.0 — Day 28",
    "unit": "Part III (CS) • Python Core Data Structures: Strings, Lists, Tuples, Dictionaries, Sets & 20-Q Test",
    "targetTime": "15–18 mins read + 20 mins test",
    "summary": "Python Core Data Structures (NCERT Class XI Chapters 8 & 10 kecs108/kecs110): Strings (ordered, indexed, immutable sequence; indexing 0 to -1, slicing [start:end], reverse [::-1], len(), methods: lower(), upper(), strip(), replace(), split() string to list, join() list to string, membership in/not in); Lists (mutable sequence, append(), pop(), remove(value) vs pop(index)); Tuples (immutable sequence, single-element tuple trap (10,) vs (10), count(), index()); Dictionaries (key-value mapping, keys must be unique, get(key) safe access, keys(), values(), items(), update(), clear() vs del); Sets (unordered collection of unique values, deduplication); Master Collection Comparison Table; and 20-Question Checkpoint Test.",
    "targets": [
      {
        "section": "Part III – CS",
        "topic": "Python Strings & Collections Deep Dive",
        "goal": "Master String immutability & methods (strip, replace, split, join), List mutability & methods (append, pop, remove), Tuple single-element syntax (10,), Dict methods (get, keys, values, items, update, clear), and Set uniqueness"
      },
      {
        "section": "Memory Anchor",
        "topic": "Master Collection Mutability",
        "goal": "Strings & Tuples = Immutable; Lists, Dicts & Sets = Mutable"
      }
    ],
    "introNote": "Today remains Python-first. No C++.\n\nYour NCERT material directly covers Python strings as immutable sequences, indexing/slicing, string methods, tuples, dictionaries, sets, and dictionary methods such as keys(), values(), items(), get(), update() and clear() (kecs108 / kecs110).",
    "parts": [
      {
        "title": "Part III — Python Strings: Immutability, Slicing & Core Methods (NCERT kecs108)",
        "sections": [
          {
            "title": "1. String Architecture, 2. Immutability & 3. 0-based & Negative Indexing",
            "blocks": [
              {
                "type": "text",
                "content": "1. String\n🧠 MENTAL PICTURE: Think of a string as a row of boxes:\n\"PYTHON\"\n\nNCERT defines a string as an ordered sequence of characters where indexing begins at 0 (kecs108)."
              },
              {
                "type": "diagram",
                "content": "Positive Index:   0   1   2   3   4   5\nCharacters:       P   Y   T   H   O   N\nNegative Index:  -6  -5  -4  -3  -2  -1\n\nMemory:\nSTRING → characters, ordered, indexed, immutable"
              },
              {
                "type": "callout",
                "icon": "🔒",
                "title": "2. String is Immutable (NCERT kecs108)",
                "content": "Immutable means: Cannot modify individual characters in-place after creation.\n\nname = \"Python\"\nname[0] = \"J\"  ❌\n\nThis raises: TypeError: 'str' object does not support item assignment\nTo change a string, create a new string object."
              },
              {
                "type": "text",
                "content": "3. String Indexing\nx = \"PYTHON\"\nprint(x[0])   # Output: P (first character)\nprint(x[-1])  # Output: N (last character)\n\nMemory: 0 → first, -1 → last (identical to lists)"
              }
            ]
          },
          {
            "title": "4. Slicing, 5. Reverse [::-1], 6. len() & 7. Core Methods",
            "blocks": [
              {
                "type": "text",
                "content": "4. String Slicing (NCERT kecs108)\nSyntax: string[start:end]\nRule: start is INCLUDED, end is EXCLUDED.\n\ns = \"PYTHON\"\nprint(s[1:4])  # Takes indices 1, 2, 3 (Y, T, H) → Output: YTH\n\n5. Reverse a String:\ns = \"PYTHON\"\nprint(s[::-1])  # Output: NOHTYP\nMemory: [::-1] = reverse sequence\n\n6. len()\ns = \"Python\"\nprint(len(s))   # Output: 6"
              },
              {
                "type": "callout",
                "icon": "🧰",
                "title": "7. High-Value String Methods",
                "content": "• lower(): \"HELLO\".lower() → \"hello\"\n• upper(): \"hello\".upper() → \"HELLO\"\n• strip(): Removes leading and trailing whitespace:\n  \"  Hello  \".strip() → \"Hello\"\n  (NCERT also distinguishes lstrip() for left, rstrip() for right)"
              }
            ]
          },
          {
            "title": "8. replace(), 9. split() [String → List], 10. join() & 11. in / not in",
            "blocks": [
              {
                "type": "text",
                "content": "8. replace(old, new)\ns = \"Hello World\"\nprint(s.replace(\"World\", \"India\"))  # Output: Hello India\n\n9. split()\nConverts a string into a list of words/substrings using a delimiter (default: whitespace):\ns = \"India is great\"\nprint(s.split())  # Output: ['India', 'is', 'great']\n\n🧠 Mental Picture: String → List\n\"India is great\"  ──split()──>  ['India', 'is', 'great']"
              },
              {
                "type": "text",
                "content": "10. join()\nOpposite of split(): joins a list/sequence of strings into a single string using a separator:\nprint(\"-\".join(\"ABC\"))  # Output: A-B-C\nprint(\" \".join(['India', 'is', 'great']))  # Output: India is great\n\n11. String Membership (in / not in):\nprint(\"Py\" in \"Python\")    # Output: True\nprint(\"Java\" in \"Python\")  # Output: False"
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Lists & Tuples: Mutability Differences & Operations (NCERT kecs105/110)",
        "sections": [
          {
            "title": "12–14. List Mutability & High-Yield Operations (append, pop, remove)",
            "blocks": [
              {
                "type": "text",
                "content": "12. List\na = [10, 20, 30]\nEnclosed in square brackets [ ], ordered, indexed, mutable.\n\n13. List is Mutable (Big Contrast!):\na = [10, 20, 30]\na[1] = 100\nprint(a)  # Output: [10, 100, 30] ✅ Allowed!\n\nSummary of Mutability:\n• STRING → Immutable\n• TUPLE  → Immutable\n• LIST   → Mutable\n• DICT   → Mutable"
              },
              {
                "type": "diagram",
                "content": "14. High-Yield List Operations:\n\n• append(item): Add one item to the tail\n  a = [10, 20]\n  a.append(30)  → [10, 20, 30]\n\n• pop([index]): Removes & returns item (default: last item)\n  a = [10, 20, 30]\n  x = a.pop()   → x = 30, a = [10, 20]\n\n• remove(value): Removes the first occurrence of a specific VALUE\n  a = [10, 20, 30]\n  a.remove(20)  → a = [10, 30]"
              },
              {
                "type": "callout",
                "icon": "⚡",
                "title": "pop() vs remove() Distinction",
                "content": "remove(val) → Removes by VALUE\npop(idx)    → Removes by INDEX/POSITION (returns the popped item)"
              }
            ]
          },
          {
            "title": "15. Tuples, 16. Single-Element Trap & 17. Tuple Functions",
            "blocks": [
              {
                "type": "text",
                "content": "15. Tuple\nt = (10, 20, 30)\nEnclosed in parentheses ( ), ordered sequence, indexed from 0.\nMost important feature: Tuple is IMMUTABLE."
              },
              {
                "type": "callout",
                "icon": "⚠️",
                "title": "16. Single-Element Tuple Trap (NCERT kecs110)",
                "content": "x = (10)   → This is just an integer (10)!\nx = (10,)  → This is a single-element TUPLE.\n\nNCERT explicitly notes: A single-element tuple requires a trailing comma!\n(10)  → int\n(10,) → tuple"
              },
              {
                "type": "text",
                "content": "17. Tuple Functions (NCERT kecs108):\nt = (10, 20, 30, 20)\n• len(t)       → 4\n• t.count(20)  → 2 (frequency of value 20)\n• t.index(30)  → 2 (index of first occurrence of 30)\n• sum(t), min(t), max(t), sorted(t)"
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Dictionaries & Sets: Hash Mappings & Unique Collections (NCERT kecs110)",
        "sections": [
          {
            "title": "18–20. Dictionary Structure, Access & get() Safe Lookup",
            "blocks": [
              {
                "type": "text",
                "content": "18. Dictionary\n🧠 MENTAL PICTURE: Phone Contacts (Name → Number)\nRavi → 9876, Aman → 9123\n\nstudent = {\n    \"name\": \"Ravi\",\n    \"marks\": 90\n}\n\nNCERT defines a dictionary as an associative mapping between keys and values; keys must be unique and of immutable types (kecs110)."
              },
              {
                "type": "text",
                "content": "19. Accessing Values:\nstudent = {\"name\": \"Ravi\", \"marks\": 90}\nprint(student[\"name\"])   # Output: Ravi\n# If key missing with [ ]: raises KeyError!\n\n20. get(key) Method (Safe Lookup):\nd = {\"name\": \"Ravi\", \"age\": 20}\nprint(d.get(\"age\"))   # Output: 20\nprint(d.get(\"city\"))  # Output: None (does NOT crash with KeyError!)\n\nMemory: get(key) → retrieves value safely without error."
              }
            ]
          },
          {
            "title": "21–25. keys(), values(), items(), update() & clear() vs del",
            "blocks": [
              {
                "type": "diagram",
                "content": "Dictionary Methods (NCERT kecs110):\nd = {\"name\": \"Ravi\", \"age\": 20}\n\n• d.keys()   → dict_keys(['name', 'age'])      (All keys: K)\n• d.values() → dict_values(['Ravi', 20])        (All values: V)\n• d.items()  → [('name','Ravi'), ('age',20)]    (Key-Value pairs: K+V)\n\n• update():\n  a = {\"name\": \"Ravi\"}\n  b = {\"age\": 20}\n  a.update(b)  → a becomes {\"name\": \"Ravi\", \"age\": 20}\n\n• clear() vs del:\n  d.clear() → empties dictionary to {}\n  del d     → deletes dictionary object from memory entirely"
              },
              {
                "type": "callout",
                "icon": "🔑",
                "title": "Dict Memory Trio",
                "content": "keys()   → K (Keys only)\nvalues() → V (Values only)\nitems()  → K + V (Pairs as tuples)"
              }
            ]
          },
          {
            "title": "26. Sets & 27. Master Collection Comparison Table",
            "blocks": [
              {
                "type": "text",
                "content": "26. Set\nNCERT describes a set as an unordered collection of unique elements enclosed in curly braces { } (kecs105).\n\ns = {1, 2, 2, 3}\nprint(s)  # Conceptually: {1, 2, 3} (duplicate 2 removed automatically)\n\nMemory: Set = Unordered + Unique (duplicates eliminated)"
              },
              {
                "type": "diagram",
                "content": "🔥 27. Master Python Collection Comparison Table:\n\nType       │ Symbol   │ Mutable? │ Key Idea\n───────────┼──────────┼──────────┼──────────────────────────────────────\nString     │ \" \" / ' '│ No       │ Immutable sequence of characters\nList       │ [ ]      │ Yes      │ Ordered, editable sequence\nTuple      │ ( )      │ No       │ Ordered, fixed sequence\nDictionary │ {k: v}   │ Yes      │ Key-value associative mapping\nSet        │ {values} │ Yes      │ Unordered, unique elements only"
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Day 28 White-Paper Master Sheet & Recall",
        "sections": [
          {
            "title": "Day 28 White-Paper Master Sheet",
            "blocks": [
              {
                "type": "diagram",
                "content": "🧠 Day 28 White-Paper Master Sheet\nDraw and mentally verify:\n\nSTRING\n→ immutable\n→ index: 0 first, -1 last\n→ slice: [start:end] (end excluded)\n→ [::-1] reverse\nMethods: lower(), upper(), strip(), replace(), split(), join()\n\nLIST [ ]\n→ mutable\n→ append(x) (tail), pop() (last/index), remove(val) (by value)\n\nTUPLE ( )\n→ immutable\n→ (10,) single tuple with comma\n→ count(), index()\n\nDICTIONARY {k:v}\n→ get(key) safe access\n→ keys(), values(), items()\n→ update(), clear()\n\nSET { }\n→ unique elements (no duplicates)\n→ unordered"
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 28 Checkpoint Test",
      "subtitle": "20 Questions: Strings, Lists, Tuples, Dictionaries, Sets & NCERT Python Methods",
      "questions": [
        {
          "id": "m-d28-q1",
          "question": "Q1. What is the output?\ns = \"PYTHON\"\nprint(s[0])",
          "options": [
            "Y",
            "P",
            "N",
            "0",
            "Error"
          ],
          "correctAnswer": 1,
          "explanation": "Python strings use 0-based indexing. s[0] accesses the first character 'P'. Correct: (B) P."
        },
        {
          "id": "m-d28-q2",
          "question": "Q2. What is the output?\ns = \"PYTHON\"\nprint(s[-1])",
          "options": [
            "P",
            "Y",
            "N",
            "-1",
            "Error"
          ],
          "correctAnswer": 2,
          "explanation": "Negative index -1 accesses the last character of the string, which is 'N'. Correct: (C) N."
        },
        {
          "id": "m-d28-q3",
          "question": "Q3. What happens?\ns = \"Python\"\ns[0] = \"J\"",
          "options": [
            "Jython",
            "Python",
            "Error because strings are immutable",
            "J",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Strings in Python are immutable; individual characters cannot be reassigned in-place. This raises a TypeError. Correct: (C) Error because strings are immutable."
        },
        {
          "id": "m-d28-q4",
          "question": "Q4. What is the output?\ns = \"PYTHON\"\nprint(s[1:4])",
          "options": [
            "PYT",
            "YTH",
            "YTHO",
            "THO",
            "Error"
          ],
          "correctAnswer": 1,
          "explanation": "Slicing s[1:4] includes indices 1, 2, and 3 ('Y', 'T', 'H') while excluding index 4. Output: 'YTH'. Correct: (B) YTH."
        },
        {
          "id": "m-d28-q5",
          "question": "Q5. What is the output?\nprint(\"ABC\"[::-1])",
          "options": [
            "ABC",
            "CBA",
            "BAC",
            "ACB",
            "Error"
          ],
          "correctAnswer": 1,
          "explanation": "Slice step -1 reverses the sequence: \"ABC\"[::-1] produces \"CBA\". Correct: (B) CBA."
        },
        {
          "id": "m-d28-q6",
          "question": "Q6. What does strip() primarily remove?",
          "options": [
            "All letters",
            "Leading and trailing spaces",
            "Only middle spaces",
            "Numbers",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "The strip() method removes leading and trailing whitespace characters from both ends of the string. Correct: (B) Leading and trailing spaces."
        },
        {
          "id": "m-d28-q7",
          "question": "Q7. What is the result?\n\"Hello World\".replace(\"World\",\"India\")",
          "options": [
            "Hello World India",
            "Hello India",
            "India World",
            "Error",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "replace(old, new) replaces occurrences of 'World' with 'India', returning 'Hello India'. Correct: (B) Hello India."
        },
        {
          "id": "m-d28-q8",
          "question": "Q8. split() commonly converts a string into a:",
          "options": [
            "Integer",
            "List of parts",
            "Dictionary",
            "Set only",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "split() breaks a string by a delimiter (default: whitespace) and returns a list of substrings. Correct: (B) List of parts."
        },
        {
          "id": "m-d28-q9",
          "question": "Q9. Which Python structure is mutable?",
          "options": [
            "String",
            "Tuple",
            "List",
            "More than one of A and B",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Lists are mutable (elements can be added, updated, or removed in place). Strings and Tuples are immutable. Correct: (C) List."
        },
        {
          "id": "m-d28-q10",
          "question": "Q10. What is the output?\na = [10,20]\na.append(30)\nprint(a)",
          "options": [
            "[30,10,20]",
            "[10,20,30]",
            "[10,20]",
            "Error",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "append() inserts the value at the end of the list: [10, 20, 30]. Correct: (B) [10,20,30]."
        },
        {
          "id": "m-d28-q11",
          "question": "Q11. After:\na = [10,20,30]\nx = a.pop()\nWhat is x?",
          "options": [
            "10",
            "20",
            "30",
            "[10,20]",
            "Error"
          ],
          "correctAnswer": 2,
          "explanation": "By default, pop() removes and returns the last element from the list, so x = 30. Correct: (C) 30."
        },
        {
          "id": "m-d28-q12",
          "question": "Q12. Which removes a specified value from a list?",
          "options": [
            "remove()",
            "append()",
            "join()",
            "keys()",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "remove(val) searches for the specified value and removes its first occurrence from the list. Correct: (A) remove()."
        },
        {
          "id": "m-d28-q13",
          "question": "Q13. Which is a single-element tuple?",
          "options": [
            "(10)",
            "[10]",
            "(10,)",
            "{10:}",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "In Python, a single-element tuple requires a trailing comma: (10,). Without the comma, (10) evaluates as a parenthesized integer. Correct: (C) (10,)."
        },
        {
          "id": "m-d28-q14",
          "question": "Q14. What is the output?\nt = (10,20,30,20)\nprint(t.count(20))",
          "options": [
            "1",
            "2",
            "3",
            "4",
            "Error"
          ],
          "correctAnswer": 1,
          "explanation": "count(x) returns the number of times element x appears in the tuple. 20 appears twice. Correct: (B) 2."
        },
        {
          "id": "m-d28-q15",
          "question": "Q15. A dictionary primarily stores:",
          "options": [
            "Characters only",
            "Key-value pairs",
            "Unique numbers only",
            "Immutable sequences only",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "A dictionary is an associative data structure storing key-value pairs mapping unique keys to values. Correct: (B) Key-value pairs."
        },
        {
          "id": "m-d28-q16",
          "question": "Q16. What is the output?\nd = {\"name\":\"Ravi\", \"marks\":90}\nprint(d[\"marks\"])",
          "options": [
            "Ravi",
            "marks",
            "90",
            "name",
            "Error"
          ],
          "correctAnswer": 2,
          "explanation": "Accessing d[\"marks\"] looks up the value associated with key 'marks', which is 90. Correct: (C) 90."
        },
        {
          "id": "m-d28-q17",
          "question": "Q17. What does d.keys() return conceptually?",
          "options": [
            "Dictionary values",
            "Dictionary keys",
            "Only first item",
            "Dictionary length",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "d.keys() returns a view object displaying all the keys of the dictionary. Correct: (B) Dictionary keys."
        },
        {
          "id": "m-d28-q18",
          "question": "Q18. What does d.items() provide?",
          "options": [
            "Keys only",
            "Values only",
            "Key-value pairs",
            "Only dictionary size",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "d.items() returns a view of key-value pairs formatted as (key, value) tuple pairs. Correct: (C) Key-value pairs."
        },
        {
          "id": "m-d28-q19",
          "question": "Q19. A set is best remembered as:",
          "options": [
            "Ordered duplicate-only collection",
            "Unique unordered collection",
            "Key-value mapping",
            "Immutable string",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "A set is an unordered collection of unique elements where duplicates are automatically eliminated. Correct: (B) Unique unordered collection."
        },
        {
          "id": "m-d28-q20",
          "question": "Q20. Which memory rule is correct?",
          "options": [
            "List → immutable; Tuple → mutable",
            "String → mutable; Set → immutable",
            "List → mutable; Tuple → immutable",
            "Dictionary → immutable",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Lists are mutable (can be altered in-place), whereas Tuples and Strings are immutable. Correct: (C) List → mutable; Tuple → immutable."
        }
      ]
    }
  },
  {
    "dayNumber": 29,
    "dayId": "day-29",
    "badge": "Day 29",
    "title": "TRE 4.0 — Day 29",
    "unit": "Part III (CS) • Python Functions: Parameters vs Arguments, return (Tuples), Scope (Local/Global), Recursion & Exception Handling (try/except/finally/raise) • 20-Q Test",
    "targetTime": "15–18 mins read + 20 mins test",
    "summary": "Python Functions, Scope & Exception Handling (NCERT Class XI Chapter 7 kecs107): Functions (modularity and reusability, def keyword, call syntax), Parameters (function definition header) vs Arguments (actual values passed), return statement (sends control and value back, default None), Multiple Return Values packed as Tuples (return a+b, a-b -> (14, 6)), Default Parameters, Positional vs Keyword Arguments, Local vs Global Variables, Variable Shadowing (local hides global), global keyword to modify global state, Recursion (function calling itself) & Base Case termination, Factorial recursion trace, Exception Handling: try (risky code), except (error handling), finally (guaranteed cleanup), raise (explicit exception trigger), Standard Exceptions (ZeroDivisionError, NameError, TypeError, ValueError), and 20-Question Checkpoint Test.",
    "targets": [
      {
        "section": "Part III – CS",
        "topic": "Python Functions, Scope & Exceptions",
        "goal": "Master parameters vs arguments, return tuples, local vs global scope & the global keyword, recursion base cases, and try/except/finally/raise"
      },
      {
        "section": "Exam Strategy",
        "topic": "Output-Based Function Tracing",
        "goal": "Trace function calls with stack frames, default arguments, shadowed variables, and exception branches line-by-line"
      }
    ],
    "introNote": "Today remains Python-first.\n\nYour uploaded NCERT Function chapter directly covers user-defined functions, arguments vs parameters, default parameters, return, multiple return values through a tuple, local/global variables, scope, modules, and import (kecs107).\n\nException handling (try, except, finally, raise) is standard Python expansion based on keywords identified in NCERT (kecs105).",
    "parts": [
      {
        "title": "Part III — Functions Architecture, Parameters vs Arguments & return Values (NCERT kecs107)",
        "sections": [
          {
            "title": "1. Why Functions?, 2. Defining Functions (def) & 3. Parameters vs Arguments",
            "blocks": [
              {
                "type": "text",
                "content": "1. Why Functions?\n🧠 MENTAL PICTURE:\nImagine repeatedly calculating: length × breadth\nInstead of rewriting the code everywhere, create a reusable tool:\n\nlength, breadth ──> [ area() ] ──> result\n\nNCERT emphasizes functions for modularity, reusability and reduced code redundancy (kecs107)."
              },
              {
                "type": "diagram",
                "content": "2. Defining & Calling Functions:\n\ndef greet():\n    print(\"Hello\")\n\ngreet()  # Function call\n\nMemory:\ndef    → DEFINE function\nname() → CALL function"
              },
              {
                "type": "callout",
                "icon": "⚠️",
                "title": "3. Parameter vs Argument (Common Exam Trap)",
                "content": "def add(a, b):       # a, b are PARAMETERS (placeholders in function header)\n    return a + b\n\nadd(10, 20)          # 10, 20 are ARGUMENTS (actual values passed)\n\nNCERT Definition:\n• Parameter: Variable in function header receiving input.\n• Argument: Value provided during the function call."
              }
            ]
          },
          {
            "title": "4. return, 5. print() vs return & 6. Default Return (None)",
            "blocks": [
              {
                "type": "text",
                "content": "4. return Statement\nreturn terminates function execution and passes control and values back to the caller (NCERT kecs107).\n\ndef add(a, b):\n    return a + b\n\nx = add(2, 3)\nprint(x)  # Output: 5"
              },
              {
                "type": "diagram",
                "content": "5. print() vs return (Fundamental Concept):\n\nOperation │ print()                           │ return\n──────────┼───────────────────────────────────┼─────────────────────────────────\nAction    │ Displays output to screen/console │ Sends calculated value to caller\nResult    │ Returns None to program           │ Value can be stored in variable\nAnalogy   │ SHOW 📺                           │ GIVE BACK 🎁"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "6. No Explicit return → None",
                "content": "If a Python function finishes without hitting a return statement, it implicitly returns None.\n\ndef hello():\n    print(\"Hi\")\n\nx = hello()  # prints \"Hi\"\nprint(x)     # Output: None"
              }
            ]
          },
          {
            "title": "7. Multiple Return Values (Tuple), 8. Defaults & 9–10. Positional vs Keyword",
            "blocks": [
              {
                "type": "text",
                "content": "7. Multiple Return Values\nNCERT explicitly states: Multiple values in Python are returned packaged as a TUPLE (kecs107).\n\ndef calc(a, b):\n    return a + b, a - b\n\nx = calc(10, 4)\nprint(x)  # Output: (14, 6)  ← A Tuple!\n\nMemory: Many returns → TUPLE"
              },
              {
                "type": "diagram",
                "content": "8. Default Parameters (NCERT kecs107):\ndef greet(name=\"Student\"):\n    print(\"Hello\", name)\n\ngreet()         → Output: Hello Student (uses default)\ngreet(\"Ravi\")   → Output: Hello Ravi    (overrides default)\n\n9. Positional Arguments:\ndef subtract(a, b): return a - b\nsubtract(10, 3) → a=10, b=3 → Output: 7 (order/position decides)\n\n10. Keyword Arguments:\nsubtract(b=3, a=10) → a=10, b=3 → Output: 7 (parameter names decide)"
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Scope: Local vs Global Variables, Shadowing & the global Keyword (NCERT kecs107)",
        "sections": [
          {
            "title": "11. Local Variables (Scope & NameError) & 12. Global Variables",
            "blocks": [
              {
                "type": "text",
                "content": "11. Local Variable\nDefined inside a function/block; exists only during that function's execution.\n\ndef test():\n    x = 10\n    print(x)\n\ntest()     # prints 10\nprint(x)   # ❌ NameError: name 'x' is not defined (NCERT kecs107)\n\nMemory: LOCAL = inside the room only\n\n12. Global Variable\nDefined outside all functions; accessible throughout the module file.\n\nx = 100\ndef show():\n    print(x)\nshow()     # Output: 100"
              }
            ]
          },
          {
            "title": "13. Variable Shadowing, 14. global Keyword & 15. Tracing",
            "blocks": [
              {
                "type": "diagram",
                "content": "13. Local Hides Global (Variable Shadowing):\nx = 10          # Global\n\ndef test():\n    x = 20      # Local x shadows global x inside test()\n    print(x)\n\ntest()          # Output: 20\nprint(x)        # Output: 10 (Global x remains unchanged!)\n\n14. global Keyword (Modifying Global State):\nx = 10\ndef change():\n    global x    # Informs Python to use the module-level x\n    x = 50\nchange()\nprint(x)        # Output: 50 (Global x was updated!)"
              },
              {
                "type": "callout",
                "icon": "🔑",
                "title": "Scope Memory Anchor",
                "content": "• Without 'global': assigning inside a function creates a new LOCAL variable.\n• With 'global x': assigning modifies the existing GLOBAL variable."
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Recursion & Exception Handling (try, except, finally, raise)",
        "sections": [
          {
            "title": "16. Recursion Basics, 17. Base Case & 18. Factorial Tracing",
            "blocks": [
              {
                "type": "text",
                "content": "16. Recursion Basics\n🧠 MENTAL PICTURE: Two mirrors facing each other.\nRecursion occurs when a function calls itself directly or indirectly.\n\n17. Base Case (Halting Condition):\nEvery recursive function MUST have a base case to terminate recursion.\nWithout a base case, it recurses indefinitely until hitting RecursionError (stack overflow).\n\n18. Factorial Example:\ndef fact(n):\n    if n == 0:        # BASE CASE\n        return 1\n    return n * fact(n - 1)\n\nTracing fact(3):\n3 × fact(2)\n3 × (2 × fact(1))\n3 × (2 × (1 × fact(0)))\n3 × 2 × 1 × 1 = 6"
              }
            ]
          },
          {
            "title": "19–21. Exception Handling: try, except & finally",
            "blocks": [
              {
                "type": "text",
                "content": "19. Exceptions\nAn exception is a runtime error that interrupts the normal program flow if unhandled.\n\n20. try / except Structure:\ntry:\n    x = 10 / 0\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero\")\n\nOutput: Cannot divide by zero\n\n21. finally Block:\nThe finally block ALWAYS runs, whether an exception occurred or not (used for closing files, freeing resources).\n\ntry:\n    print(10 // 2)   # Output: 5\nexcept:\n    print(\"Error\")\nfinally:\n    print(\"Done\")    # Output: Done"
              },
              {
                "type": "callout",
                "icon": "🛡️",
                "title": "Exception Handling Blocks",
                "content": "try     → Enclose risky code\nexcept  → Catch and handle specific error\nfinally → Always executes at the end (cleanup)\nraise   → Manually trigger an exception"
              }
            ]
          },
          {
            "title": "22. Common Exceptions, 23. raise & 24. Function Exception Tracing",
            "blocks": [
              {
                "type": "diagram",
                "content": "Common Built-in Exceptions in Python:\n\nException Name     │ Typical Trigger Cause\n───────────────────┼────────────────────────────────────────────────────────────\nZeroDivisionError  │ Dividing any number by 0 (e.g. 10 / 0)\nNameError          │ Referencing undefined variable (e.g. local variable outside)\nTypeError          │ Incompatible types in operation (e.g. '5' + 5, t[0] = 1)\nValueError         │ Right type but inappropriate value (e.g. int('hello'))\nIndexError         │ Sequence index out of range (e.g. [1, 2][5])\nKeyError           │ Dictionary key not found in d[key]\n\n23. raise Keyword:\nage = -5\nif age < 0:\n    raise ValueError(\"Age cannot be negative\")"
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Day 29 White-Paper Master Sheet & Recall",
        "sections": [
          {
            "title": "Day 29 White-Paper Master Sheet",
            "blocks": [
              {
                "type": "diagram",
                "content": "🧠 Day 29 White-Paper Master Sheet\nDraw and mentally verify:\n\nFUNCTION\ndef name(parameters):\n    return result\n\n• parameter = placeholder in definition\n• argument  = actual value passed in call\n• return    = sends result back (default: None)\n• multiple returns → TUPLE\n\nSCOPE\n• LOCAL   → inside function\n• GLOBAL  → outside function\n• global keyword → modify global variable inside function\n\nRECURSION\n• function calls itself\n• BASE CASE → mandatory stopping condition\n\nEXCEPTIONS\n• try     → risky code\n• except  → handle error\n• finally → executes always\n• raise   → trigger exception manually\n• ZeroDivisionError, NameError, TypeError, ValueError"
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 29 Checkpoint Test",
      "subtitle": "20 Questions: Functions, Parameters, return Tuples, Scope, Recursion & Exceptions",
      "questions": [
        {
          "id": "m-d29-q1",
          "question": "Q1. Which keyword defines a Python function?",
          "options": [
            "func",
            "function",
            "def",
            "define",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "In Python, functions are defined using the 'def' keyword. Correct: (C) def."
        },
        {
          "id": "m-d29-q2",
          "question": "Q2. In:\ndef add(a, b):\n    return a+b\n\na and b are:",
          "options": [
            "Arguments",
            "Parameters",
            "Global variables",
            "Modules",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Variables listed in the function definition header (a, b) are parameters (formal parameters). Correct: (B) Parameters."
        },
        {
          "id": "m-d29-q3",
          "question": "Q3. In:\nadd(10, 20)\n\n10 and 20 are:",
          "options": [
            "Parameters",
            "Arguments",
            "Functions",
            "Keywords",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "The actual values passed into a function when calling it are arguments. Correct: (B) Arguments."
        },
        {
          "id": "m-d29-q4",
          "question": "Q4. What is the output?\ndef add(a, b):\n    return a + b\nprint(add(3, 4))",
          "options": [
            "3",
            "4",
            "7",
            "34",
            "Error"
          ],
          "correctAnswer": 2,
          "explanation": "add(3, 4) executes return 3 + 4, which yields 7. Correct: (C) 7."
        },
        {
          "id": "m-d29-q5",
          "question": "Q5. return primarily:",
          "options": [
            "Prints only",
            "Sends value/control back to caller",
            "Creates a loop",
            "Imports module",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "The return statement terminates execution of the function and sends control and resulting value(s) back to the caller. Correct: (B) Sends value/control back to caller."
        },
        {
          "id": "m-d29-q6",
          "question": "Q6. Multiple values returned from a Python function are commonly represented as a:",
          "options": [
            "String",
            "Integer",
            "Tuple",
            "Set only",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "NCERT explicitly notes that returning multiple comma-separated expressions packages them as a tuple. Correct: (C) Tuple."
        },
        {
          "id": "m-d29-q7",
          "question": "Q7. What is the output?\ndef test():\n    return 10, 20\nprint(test())",
          "options": [
            "10",
            "20",
            "(10, 20)",
            "[10,20]",
            "Error"
          ],
          "correctAnswer": 2,
          "explanation": "Returning multiple values packs them into a tuple: (10, 20). Correct: (C) (10, 20)."
        },
        {
          "id": "m-d29-q8",
          "question": "Q8. What is the output?\ndef greet(name=\"Student\"):\n    print(name)\ngreet()",
          "options": [
            "name",
            "Student",
            "None only",
            "Error",
            "Nothing"
          ],
          "correctAnswer": 1,
          "explanation": "Because no argument is passed during the call greet(), Python uses the default parameter value \"Student\". Correct: (B) Student."
        },
        {
          "id": "m-d29-q9",
          "question": "Q9. A variable defined inside a function is usually:",
          "options": [
            "Global",
            "Local",
            "Module",
            "Keyword",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Variables declared inside a function have local scope and cannot be accessed outside that function. Correct: (B) Local."
        },
        {
          "id": "m-d29-q10",
          "question": "Q10. What happens?\ndef test():\n    x = 10\ntest()\nprint(x)",
          "options": [
            "Prints 10",
            "Prints 0",
            "NameError",
            "Prints None",
            "Nothing"
          ],
          "correctAnswer": 2,
          "explanation": "x is a local variable inside test(). Accessing x outside raises NameError: name 'x' is not defined. Correct: (C) NameError."
        },
        {
          "id": "m-d29-q11",
          "question": "Q11. What is the output?\nx = 10\ndef test():\n    x = 20\n    print(x)\ntest()\nprint(x)",
          "options": [
            "10 20",
            "20 10",
            "20 20",
            "10 10",
            "Error"
          ],
          "correctAnswer": 1,
          "explanation": "Inside test(), local x = 20 shadows global x and prints 20. Outside test(), global x remains 10 and prints 10. Output is 20 followed by 10. Correct: (B) 20 10."
        },
        {
          "id": "m-d29-q12",
          "question": "Q12. Which keyword allows a function to explicitly modify a global variable?",
          "options": [
            "local",
            "external",
            "global",
            "public",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "The 'global' keyword explicitly binds a variable inside a function to the module's global scope, allowing reassignment. Correct: (C) global."
        },
        {
          "id": "m-d29-q13",
          "question": "Q13. What is the output?\nx = 5\ndef change():\n    global x\n    x = 10\nchange()\nprint(x)",
          "options": [
            "5",
            "10",
            "15",
            "Error",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "The global statement inside change() causes x = 10 to modify the global variable, so print(x) prints 10. Correct: (B) 10."
        },
        {
          "id": "m-d29-q14",
          "question": "Q14. Recursion means:",
          "options": [
            "Function calls itself",
            "Function has no parameters",
            "Loop always terminates",
            "Variable becomes global",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "Recursion is a programming technique in which a function calls itself directly or indirectly to solve a smaller instance of the problem. Correct: (A) Function calls itself."
        },
        {
          "id": "m-d29-q15",
          "question": "Q15. The condition that stops recursion is commonly called:",
          "options": [
            "Main condition",
            "Base case",
            "Global case",
            "Exception case",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "The base case provides the termination condition that prevents infinite recursive calls. Correct: (B) Base case."
        },
        {
          "id": "m-d29-q16",
          "question": "Q16. Which block contains code that may produce an exception?",
          "options": [
            "if",
            "try",
            "for",
            "def",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Risky code that might raise an exception is placed inside a 'try' block. Correct: (B) try."
        },
        {
          "id": "m-d29-q17",
          "question": "Q17. Which block handles a matching exception?",
          "options": [
            "except",
            "finally",
            "return",
            "while",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "The 'except' block intercepts and handles the exception raised inside the try block. Correct: (A) except."
        },
        {
          "id": "m-d29-q18",
          "question": "Q18. What exception normally occurs for:\n10 / 0",
          "options": [
            "NameError",
            "TypeError",
            "ZeroDivisionError",
            "ValueError",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Dividing a number by zero in Python raises a ZeroDivisionError. Correct: (C) ZeroDivisionError."
        },
        {
          "id": "m-d29-q19",
          "question": "Q19. What is the output?\ntry:\n    print(10 // 2)\nexcept:\n    print(\"Error\")\nfinally:\n    print(\"Done\")",
          "options": [
            "5 only",
            "Done only",
            "5 then Done",
            "Error then Done",
            "Error"
          ],
          "correctAnswer": 2,
          "explanation": "10 // 2 evaluates to 5 without errors. The except block is skipped. The finally block always executes, printing 'Done'. Output is 5 then Done. Correct: (C) 5 then Done."
        },
        {
          "id": "m-d29-q20",
          "question": "Q20. Which keyword can intentionally trigger an exception?",
          "options": [
            "throw",
            "raise",
            "error",
            "catch",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "In Python, the 'raise' keyword is used to trigger/throw an exception manually. Correct: (B) raise."
        }
      ]
    }
  },
  {
    "dayNumber": 30,
    "dayId": "day-30",
    "badge": "Day 30",
    "title": "TRE 4.0 — Day 30",
    "unit": "Part III (CS) • Python Modules (math, random), File Handling (Modes, read/readline/readlines, tell/seek, with) & 20-Q Test",
    "targetTime": "15–18 mins read + 20 mins test",
    "summary": "Python Standard Modules & File Handling (NCERT Class XI kecs107 & Class XII lecs1ps): Modules (reusable Python files, import vs from...import, module.function()), math module (sqrt returns float, factorial, floor vs ceil with negative numbers trap, gcd, pow), random module (random() float [0.0, 1.0), randint(a, b) inclusive integers), File Handling Lifecycle (Open, Read/Write, Close), File Access Modes (r read, w write/wipe, a append, x exclusive create, b binary), Reading methods: read() whole content, readline() single line, readlines() list of lines, Writing methods: write(), Append behavior, with open(...) context manager automatic closure, File Offsets: tell() current pointer position vs seek() reposition pointer, Text vs Binary files, pickle serialization overview, and 20-Question Checkpoint Test.",
    "targets": [
      {
        "section": "Part III – CS",
        "topic": "Python Modules & File Handling",
        "goal": "Master math methods (sqrt, floor/ceil negative trap, factorial), random.random() vs randint(), file modes (r, w, a), read() vs readline() vs readlines(), and tell() vs seek()"
      },
      {
        "section": "NCERT Class XII",
        "topic": "File Offsets & Context Managers",
        "goal": "Setting file pointer offsets with seek(), tracking position with tell(), and safe file operations via 'with open(...) as f:'"
      }
    ],
    "introNote": "Today remains Python-first. No C++.\n\nYour uploaded NCERT Class XI material directly defines a module as a Python file containing definitions/functions, explains import, module.function(), and specifically covers the built-in math, random, and statistics modules (kecs107).\n\nYour Class XII NCERT source explicitly has Chapter 2: File Handling in Python, including opening/closing text files, writing, reading, setting file offsets, traversing files, and the pickle module (lecs1ps).",
    "parts": [
      {
        "title": "Part III — Python Modules: Architecture, import Patterns & math Module (NCERT kecs107)",
        "sections": [
          {
            "title": "1. What is a Module?, 2. import & 3–4. Module Syntax vs from...import",
            "blocks": [
              {
                "type": "text",
                "content": "1. What is a Module?\n🧠 MENTAL PICTURE: Toolbox of pre-built functions\nTOOLBOX: math\n├── sqrt()\n├── floor()\n├── ceil()\n├── factorial()\n└── gcd()\n\nNCERT Definition:\nA module is a Python file (.py) containing reusable definitions, functions, and variables that speeds up program development (kecs107)."
              },
              {
                "type": "diagram",
                "content": "2. import vs from ... import:\n\n• Option 1: import module\n  import math\n  print(math.sqrt(100))  # Must use module.function() prefix\n  Output: 10.0\n\n• Option 2: from module import function\n  from math import sqrt\n  print(sqrt(81))        # Call function directly without module prefix\n  Output: 9.0"
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Import Memory Rule",
                "content": "import math          → call as math.sqrt()\nfrom math import sqrt → call as sqrt()"
              }
            ]
          },
          {
            "title": "5. math.sqrt(), 6. factorial() & 7–8. floor() vs ceil() [Traps!]",
            "blocks": [
              {
                "type": "text",
                "content": "5. math.sqrt(x)\nReturns the square root of x as a FLOAT:\nimport math\nprint(math.sqrt(144))  # Output: 12.0\nprint(math.sqrt(81))   # Output: 9.0\n\n6. math.factorial(x)\nComputes x!:\nprint(math.factorial(5))  # 5 × 4 × 3 × 2 × 1 = 120"
              },
              {
                "type": "callout",
                "icon": "⚠️",
                "title": "7–8. floor() vs ceil() (Major Exam Trap with Negative Numbers)",
                "content": "• floor(x): Greatest integer ≤ x (goes DOWN/LEFT on number line)\n  floor(4.9)  → 4\n  floor(-4.5) → -5  (NOT -4!)\n\n• ceil(x): Smallest integer ≥ x (goes UP/RIGHT on number line)\n  ceil(4.1)   → 5\n  ceil(9.2)   → 10\n  ceil(-9.7)  → -9  (NOT -10!)"
              },
              {
                "type": "diagram",
                "content": "Number Line Direction:\n          -5   -4   -3 ... 4    5\n           ◄────              ────►\n         floor(-4.5)=-5      ceil(4.1)=5\n\nMemory:\nFLOOR ↓ (Down / Left)\nCEIL  ↑ (Up / Right)"
              }
            ]
          },
          {
            "title": "9. math.gcd(), 10. math.pow() & 11–12. random Module",
            "blocks": [
              {
                "type": "text",
                "content": "9. math.gcd(a, b)\nReturns Greatest Common Divisor:\nimport math\nprint(math.gcd(12, 18))  # Output: 6\n\n10. math.pow(x, y)\nComputes xʸ and always returns a FLOAT:\nprint(math.pow(3, 2))    # Output: 9.0\n(Contrast: 3 ** 2 produces integer 9)"
              },
              {
                "type": "diagram",
                "content": "11–12. random Module (NCERT kecs107):\nimport random\n\n• random.random():\n  Returns a random float in range [0.0, 1.0) (0.0 ≤ val < 1.0)\n  Unpredictable output (e.g. 0.6533...)\n\n• random.randint(a, b):\n  Returns a random integer between a and b INCLUSIVE (a ≤ val ≤ b)\n  Example: random.randint(1, 6) simulates a dice roll (1, 2, 3, 4, 5, or 6)"
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — File Handling: Lifecycle, Modes & Methods (NCERT Class XII lecs1ps)",
        "sections": [
          {
            "title": "13. Lifecycle, 14. open() & 15. File Modes (r, w, a, x, b)",
            "blocks": [
              {
                "type": "text",
                "content": "13. File Handling Lifecycle\n🧠 MENTAL PICTURE:\nOPEN FILE ──> READ / WRITE DATA ──> CLOSE FILE\n\n14. open() Function:\nf = open(\"student.txt\", \"r\")\nReturns a file object/stream used to access data on disk."
              },
              {
                "type": "diagram",
                "content": "15. Important File Access Modes:\n\nMode │ Purpose │ Description / Behavior\n─────┼─────────┼────────────────────────────────────────────────────────\nr    │ Read    │ Default. File must exist; opens at beginning for reading\nw    │ Write   │ Creates file; TRUNCATES/WIPES existing content!\na    │ Append  │ Opens for writing at end; preserves existing content\nx    │ Create  │ Exclusive creation; fails (FileExistsError) if file exists\nb    │ Binary  │ Binary mode modifier (e.g. rb, wb) for non-text bytes"
              },
              {
                "type": "callout",
                "icon": "🔥",
                "title": "Mode Memory Anchors",
                "content": "r → READ (must exist)\nw → WRITE + WIPE old contents\na → APPEND at the end\nx → EXCLUSIVE new file creation"
              }
            ]
          },
          {
            "title": "16–18. Reading Files: read(), readline() & readlines()",
            "blocks": [
              {
                "type": "diagram",
                "content": "Suppose file contains:\nRavi\nAman\nSita\n\n• f.read():\n  Reads entire file content as a single STRING:\n  \"Ravi\\nAman\\nSita\\n\"\n\n• f.readline():\n  Reads ONE line up to and including newline (\\n):\n  First call: \"Ravi\\n\"\n  Second call: \"Aman\\n\"\n\n• f.readlines():\n  Reads all remaining lines and returns a LIST of strings:\n  ['Ravi\\n', 'Aman\\n', 'Sita\\n']"
              },
              {
                "type": "callout",
                "icon": "📋",
                "title": "Reading Methods Distinction",
                "content": "read()      → Full text as String\nreadline()  → Single line as String\nreadlines() → All lines as List of strings"
              }
            ]
          },
          {
            "title": "19–22. Writing, Append Mode, close() & with open(...) Context",
            "blocks": [
              {
                "type": "text",
                "content": "19. write()\nf = open(\"data.txt\", \"w\")\nf.write(\"Hello\")\nf.close()\n# Writes string to file. Remember: 'w' truncates existing data first!\n\n20. Append Mode ('a'):\nf = open(\"data.txt\", \"a\")\nf.write(\" World\")\nf.close()\n# Appends without deleting existing text.\n\n21. close():\nReleases system resources and ensures all buffered output data is flushed and written to disk."
              },
              {
                "type": "callout",
                "icon": "✨",
                "title": "22. with open(...) Context Manager",
                "content": "with open(\"data.txt\", \"r\") as f:\n    content = f.read()\n\n# File is automatically closed when the with block exits, even if exceptions occur!"
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — File Offsets, Types & Serialization (tell, seek, Text vs Binary, pickle)",
        "sections": [
          {
            "title": "23. tell() [Current Offset] & 24. seek() [Reposition Pointer]",
            "blocks": [
              {
                "type": "text",
                "content": "Your NCERT Class XII File Handling chapter explicitly includes Setting Offsets in a File (lecs1ps).\n\n23. f.tell()\nReturns the current byte position of the file read/write pointer.\nMemory: tell() = \"Tell me where the pointer is currently located\"\n\n24. f.seek(offset)\nMoves/repositions the file pointer to the specified byte offset.\nExample: f.seek(0) resets the pointer back to the beginning of the file.\nMemory: seek() = \"Seek/Go to this location in the file\""
              },
              {
                "type": "diagram",
                "content": "Pointer Offsets Visualization:\nPosition:  0   1   2   3   4   5\nBytes:     H   e   l   l   o  \\n\n\nf.read(2)  → returns \"He\"\nf.tell()   → returns 2\nf.seek(0)  → moves pointer back to index 0"
              }
            ]
          },
          {
            "title": "25. Text vs Binary Files & 26. pickle Serialization Overview",
            "blocks": [
              {
                "type": "text",
                "content": "25. Text vs Binary Files (NCERT lecs1ps):\n• Text File: Sequence of human-readable characters/lines (.txt, .csv); lines end with EOL (\\n).\n• Binary File: Stores data in raw bytes exactly as represented in memory (images, audio, .dat).\n\n26. pickle Module (Binary Serialization):\nUsed to serialize (pickle) and deserialize (unpickle) complex Python data structures (lists, dicts, objects) to and from binary files.\n• pickle.dump(obj, f): Serializes and writes object to binary file.\n• pickle.load(f): Reads and deserializes object from binary file."
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Day 30 White-Paper Master Sheet & Recall",
        "sections": [
          {
            "title": "Day 30 White-Paper Master Sheet",
            "blocks": [
              {
                "type": "diagram",
                "content": "🧠 Day 30 White-Paper Master Sheet\nDraw and mentally verify:\n\nMODULE\n→ reusable Python file\nimport math             → math.sqrt(81) = 9.0\nfrom math import sqrt   → sqrt(81) = 9.0\n\nMATH FUNCTIONS\n• sqrt(x)      → float root (81 → 9.0)\n• factorial(5) → 120\n• floor(4.9)=4 │ floor(-4.5)=-5 (DOWN ↓)\n• ceil(4.1)=5  │ ceil(-9.7)=-9  (UP ↑)\n• gcd(12, 18)  → 6\n• pow(3, 2)    → 9.0\n\nRANDOM\n• random.random()    → 0.0 ≤ x < 1.0\n• random.randint(a,b)→ a ≤ int ≤ b\n\nFILE HANDLING\nOPEN → WORK → CLOSE\n• r (Read) │ w (Write/Wipe) │ a (Append) │ x (Create)\n• read()      → full string\n• readline()  → one line\n• readlines() → list of lines\n• tell()      → current position\n• seek(pos)   → move position\n• with open() → automatic close"
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 30 Checkpoint Test",
      "subtitle": "20 Questions: Modules, math, random, File Modes, read/readline/readlines & seek/tell",
      "questions": [
        {
          "id": "m-d30-q1",
          "question": "Q1. A Python module is best described as:",
          "options": [
            "A CPU register",
            "A Python file containing reusable definitions/code",
            "A database row",
            "A memory page",
            "None of the above"
          ],
          "correctAnswer": 1,
          "explanation": "A Python module is a file containing Python code, functions, classes, and statements intended for reuse across programs. Correct: (B) A Python file containing reusable definitions/code."
        },
        {
          "id": "m-d30-q2",
          "question": "Q2. Which statement imports the math module?",
          "options": [
            "include math",
            "using math",
            "import math",
            "open math",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "In Python, modules are brought into scope using the 'import' statement: import math. Correct: (C) import math."
        },
        {
          "id": "m-d30-q3",
          "question": "Q3. After:\nimport math\n\nwhich is correct?",
          "options": [
            "sqrt.math(25)",
            "math.sqrt(25)",
            "math->sqrt(25)",
            "math:sqrt(25)",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "When a module is imported using 'import math', its functions must be accessed using the dot notation module.function(): math.sqrt(25). Correct: (B) math.sqrt(25)."
        },
        {
          "id": "m-d30-q4",
          "question": "Q4. What is the output?\nimport math\nprint(math.sqrt(81))",
          "options": [
            "8",
            "9.0",
            "81",
            "9.81",
            "Error"
          ],
          "correctAnswer": 1,
          "explanation": "math.sqrt() calculates the square root and always returns a floating-point value: 9.0. Correct: (B) 9.0."
        },
        {
          "id": "m-d30-q5",
          "question": "Q5. What is:\nmath.factorial(5)",
          "options": [
            "25",
            "60",
            "120",
            "125",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "math.factorial(5) evaluates 5! = 5 × 4 × 3 × 2 × 1 = 120. Correct: (C) 120."
        },
        {
          "id": "m-d30-q6",
          "question": "Q6. What is:\nmath.floor(4.8)",
          "options": [
            "4",
            "5",
            "4.8",
            "3",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "math.floor(x) returns the greatest integer less than or equal to x: math.floor(4.8) = 4. Correct: (A) 4."
        },
        {
          "id": "m-d30-q7",
          "question": "Q7. What is:\nmath.floor(-4.5)",
          "options": [
            "-4",
            "-5",
            "4",
            "5",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "The greatest integer less than or equal to -4.5 is -5 (moving left/down on the number line). Correct: (B) -5."
        },
        {
          "id": "m-d30-q8",
          "question": "Q8. math.ceil(9.2) gives:",
          "options": [
            "9",
            "10",
            "9.2",
            "8",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "math.ceil(x) returns the smallest integer greater than or equal to x: math.ceil(9.2) = 10. Correct: (B) 10."
        },
        {
          "id": "m-d30-q9",
          "question": "Q9. random.random() primarily returns:",
          "options": [
            "Always 0",
            "An unpredictable floating-point value around the range 0 to below 1",
            "Only integer 1–100",
            "A string",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "random.random() returns a random pseudo-floating-point value in the half-open interval [0.0, 1.0). Correct: (B) An unpredictable floating-point value around the range 0 to below 1."
        },
        {
          "id": "m-d30-q10",
          "question": "Q10. Which file mode is normally used for reading?",
          "options": [
            "r",
            "w",
            "a",
            "x",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "The 'r' mode opens a file for read-only access (file must already exist). Correct: (A) r."
        },
        {
          "id": "m-d30-q11",
          "question": "Q11. Which mode appends data at the end?",
          "options": [
            "r",
            "w",
            "a",
            "rb only",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "The 'a' mode opens a file for appending, positioning the write pointer at the end of the file. Correct: (C) a."
        },
        {
          "id": "m-d30-q12",
          "question": "Q12. Opening an existing file using w generally:",
          "options": [
            "Only reads it",
            "Preserves all content and writes only at end",
            "Truncates/replaces existing contents",
            "Always gives an error",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Opening an existing file in 'w' mode truncates (erases) all existing contents before writing. Correct: (C) Truncates/replaces existing contents."
        },
        {
          "id": "m-d30-q13",
          "question": "Q13. Which method reads one line?",
          "options": [
            "read()",
            "readline()",
            "readlines()",
            "write()",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "readline() reads a single line from the file up to the newline character. Correct: (B) readline()."
        },
        {
          "id": "m-d30-q14",
          "question": "Q14. Which method normally returns file lines as a list?",
          "options": [
            "read()",
            "readline()",
            "readlines()",
            "tell()",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "readlines() reads all lines from the file and returns them as a list of strings. Correct: (C) readlines()."
        },
        {
          "id": "m-d30-q15",
          "question": "Q15. Which method writes a string to a file?",
          "options": [
            "read()",
            "write()",
            "seek()",
            "tell()",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "The write() method writes a specified string to the file stream. Correct: (B) write()."
        },
        {
          "id": "m-d30-q16",
          "question": "Q16. tell() is used to determine:",
          "options": [
            "File name only",
            "Current file position",
            "Number of Python functions",
            "File password",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "The tell() method returns the current byte position/offset of the file read/write pointer. Correct: (B) Current file position."
        },
        {
          "id": "m-d30-q17",
          "question": "Q17. seek() is used to:",
          "options": [
            "Move/change the file position",
            "Delete Python",
            "Import a module",
            "Read a dictionary",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "The seek(offset) method repositions the file pointer to the specified byte offset. Correct: (A) Move/change the file position."
        },
        {
          "id": "m-d30-q18",
          "question": "Q18. Which statement imports only sqrt from math?",
          "options": [
            "import math.sqrt",
            "from math import sqrt",
            "include math sqrt",
            "math import sqrt from",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "The syntax 'from math import sqrt' imports only the sqrt identifier into the current namespace. Correct: (B) from math import sqrt."
        },
        {
          "id": "m-d30-q19",
          "question": "Q19. What is the output?\nfrom math import sqrt\nx = sqrt(49)\nprint(x)",
          "options": [
            "49",
            "24.5",
            "7.0",
            "7²",
            "Error"
          ],
          "correctAnswer": 2,
          "explanation": "sqrt(49) returns 7.0 as a float. Correct: (C) 7.0."
        },
        {
          "id": "m-d30-q20",
          "question": "Q20. Which matching is correct?",
          "options": [
            "r → Read",
            "w → Write",
            "a → Append",
            "More than one of the above",
            "None of the above"
          ],
          "correctAnswer": 3,
          "explanation": "All three mode associations are correct: 'r' for reading, 'w' for writing, and 'a' for appending. Correct: (D) More than one of the above."
        }
      ]
    }
  },
  {
    "dayNumber": 31,
    "dayId": "day-31",
    "badge": "Day 31",
    "title": "TRE 4.0 — Day 31",
    "unit": "Part III (CS) • 🐍 Python Full Milestone Revision & 40-Question Comprehensive Checkpoint Test",
    "targetTime": "20–25 mins read + 35 mins test",
    "summary": "Python Comprehensive Milestone Revision & 40-Question Checkpoint (NCERT Class XI & XII): Python Fundamentals (interpreted high-level, case-sensitive, identifier rules), Operators (arithmetic / vs // vs %, power **, comparison == vs =, logical and/or/not, membership in/not in), Control Structures (if/elif/else, indentation blocks, range(start, stop, step) [stop excluded], break vs continue), Strings (indexing 0 to -1, slicing [start:end], reverse [::-1], strip, split), Collections (List [ ] mutable, Tuple ( ) immutable with (10,) single-element trap, Dict {k:v} key membership & get(), Set { } unique elements), Functions & Scope (def, parameters vs arguments, return tuples, local vs global, variable shadowing, global keyword), Modules (math.sqrt returns float, floor/ceil negative number traps, factorial, random.random range [0.0, 1.0)), Exception Handling (try/except/finally/raise, ZeroDivisionError), File Handling (modes r, w, a, x, read, readline, readlines, tell, seek), and 40-Question Checkpoint Test.",
    "targets": [
      {
        "section": "Part III – CS",
        "topic": "Python Comprehensive Revision (40 MCQs)",
        "goal": "Consolidate Python syntax, collections mutability, string slicing, scope rules, math/random functions, exception handling, and file operations"
      },
      {
        "section": "NCERT Coverage",
        "topic": "Class XI & XII Alignment",
        "goal": "Verify full recall of Python core curriculum from NCERT Chapters kecs105, kecs107, kecs108, kecs110 and lecs1ps"
      }
    ],
    "introNote": "Today there is no new Python theory and no C++.\n\nThe revision is based on your NCERT Python material: Python keywords/identifiers and script execution, functions and return, tuples/dictionaries, modules such as math and random, plus the Class XII sections on exception handling and file handling (kecs105, kecs107, lecs1ps).\n\nThe questions below are original PYQ-style practice based on those source topics; I am not claiming they are verbatim BPSC TRE questions.",
    "parts": [
      {
        "title": "Part III — Python Language Architecture, Identifiers & Data Collections",
        "sections": [
          {
            "title": "Python Fundamentals & Valid Identifier Rules",
            "blocks": [
              {
                "type": "text",
                "content": "PYTHON ARCHITECTURE\n• High-level, interpreted, dynamically typed, case-sensitive language.\n• Script files have the extension: .py\n\nIDENTIFIER RULES (NCERT kecs105):\n• Must begin with a letter (A-Z, a-z) or an underscore (_).\n• Cannot begin with a digit (e.g. '1marks' is INVALID; 'marks1' and '_marks' are VALID).\n• Cannot contain special characters or spaces (only alphanumeric and _).\n• Cannot be a reserved Python keyword (e.g. if, for, while, def, class, return)."
              },
              {
                "type": "callout",
                "icon": "🏷️",
                "title": "Identifier Memory Anchor",
                "content": "Letter or _ first | Digits allowed inside/end | No special characters | No keywords"
              }
            ]
          },
          {
            "title": "The 4 Core Collections & Mutability Master Recall",
            "blocks": [
              {
                "type": "diagram",
                "content": "Collection │ Syntax   │ Mutability │ Key Characteristic\n───────────┼──────────┼────────────┼──────────────────────────────────────\nString     │ \" \"      │ Immutable  │ Ordered sequence of characters\nList       │ [ ]      │ Mutable    │ Ordered, editable sequence\nTuple      │ ( )      │ Immutable  │ Ordered, fixed sequence; (10,) comma!\nDictionary │ {k: v}   │ Mutable    │ Key-to-value hash lookup table\nSet        │ {values} │ Mutable    │ Unordered unique items; deduplicated"
              },
              {
                "type": "callout",
                "icon": "🔥",
                "title": "Deduplication & Single-Element Traps",
                "content": "• Set Deduplication: s = {1, 2, 2, 3} automatically becomes {1, 2, 3}.\n• Single-Element Tuple: (10) is an integer; (10,) is a tuple!"
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Operators, Comparisons & Control Flow",
        "sections": [
          {
            "title": "Arithmetic, Relational & Logical Operators",
            "blocks": [
              {
                "type": "diagram",
                "content": "Operator │ Name            │ Example / Behavior\n─────────┼─────────────────┼────────────────────────────────────────\n/        │ Normal Division │ 13 / 4 → 3.25 (always returns float)\n//       │ Floor Division  │ 13 // 4 → 3 (integer quotient, rounds down)\n%        │ Modulo          │ 13 % 4 → 1 (remainder: 13 = 4*3 + 1)\n**       │ Exponentiation  │ 2 ** 4 → 16 (2⁴)\n==       │ Equal to        │ Comparison: True/False (contrast with = assign)\n!=       │ Not equal to    │ Comparison: True/False\nand      │ Logical AND     │ True only if ALL are true (True and False → False)\nor       │ Logical OR      │ True if ANY is true (True or False → True)\nnot      │ Logical NOT     │ Inverts boolean value (not True → False)\nin       │ Membership      │ 20 in [10, 20, 30] → True"
              }
            ]
          },
          {
            "title": "Conditional Branching & Loop Controls",
            "blocks": [
              {
                "type": "text",
                "content": "BRANCHING & INDENTATION\n• if / elif / else: Evaluates sequentially; first matching true block runs and terminates selection.\n• Indentation: Leading whitespace denotes code block ownership; no curly braces { }.\n\nLOOPS & range(start, stop, step):\n• Stop value is always EXCLUDED!\n• range(2, 7, 2) produces: 2, 4, 6 (stops before 7)\n\nLOOP CONTROLS:\n• break: Completely terminates the loop immediately (Exit Door 🚪).\n• continue: Skips remainder of current iteration and advances to next turn (Skip Button ⏭️)."
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Strings, Functions & Variable Scope",
        "sections": [
          {
            "title": "String Slicing, Reversal & Core String Methods",
            "blocks": [
              {
                "type": "diagram",
                "content": "s = \"PYTHON\"\nIndex:    0   1   2   3   4   5\nChar:     P   Y   T   H   O   N\nNeg:     -6  -5  -4  -3  -2  -1\n\n• Slicing s[1:4]: indices 1, 2, 3 ('Y', 'T', 'H') → \"YTH\" (end 4 excluded)\n• Reversal s[::-1]: \"ABC\"[::-1] → \"CBA\"\n• strip(): Removes leading and trailing whitespace\n• split(): \"India is great\".split() → ['India', 'is', 'great'] (String to List)"
              }
            ]
          },
          {
            "title": "Functions, Parameters vs Arguments & Scope",
            "blocks": [
              {
                "type": "callout",
                "icon": "📦",
                "title": "Parameters vs Arguments & return",
                "content": "• Parameter: Variable in definition header (def add(a, b))\n• Argument: Value passed during function call (add(10, 20))\n• return: Sends value/control back to caller (default is None)\n• Multiple returns: return 10, 20 packages and returns a TUPLE (10, 20)"
              },
              {
                "type": "text",
                "content": "SCOPE & THE global KEYWORD\n• Local Variable: Declared inside function; inaccessible outside (causes NameError).\n• Global Variable: Declared outside; readable across functions.\n• Shadowing: Local variable hides/shadows global variable of same name.\n• global x: Explicitly instructs Python to modify the module-level variable."
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Modules, Exceptions & File Handling",
        "sections": [
          {
            "title": "Standard Modules: math & random",
            "blocks": [
              {
                "type": "diagram",
                "content": "math Module:\n• math.sqrt(49)      → 7.0 (always returns float)\n• math.floor(-4.5)   → -5  (moves DOWN/LEFT on number line)\n• math.ceil(9.2)     → 10  (moves UP/RIGHT on number line)\n• math.factorial(5)  → 120 (5! = 120)\n• math.gcd(12, 18)   → 6\n\nrandom Module:\n• random.random()    → Random float in [0.0, 1.0)\n• random.randint(a,b)→ Random integer from a to b inclusive"
              }
            ]
          },
          {
            "title": "Exception Handling & File Handling",
            "blocks": [
              {
                "type": "text",
                "content": "EXCEPTION HANDLING (NCERT Class XII Chapter 1):\n• try: Encloses code that may raise an exception.\n• except: Handles matching error (e.g. ZeroDivisionError for 10 / 0).\n• finally: Always executes for guaranteed cleanup.\n• raise: Intentionally triggers an exception.\n\nFILE HANDLING (NCERT Class XII Chapter 2):\n• Modes: 'r' (Read), 'w' (Write / wipe), 'a' (Append at end), 'x' (Exclusive create)\n• Reading: read() full text, readline() one line, readlines() list of line strings\n• Offsets: tell() returns current pointer byte offset; seek(pos) repositions pointer"
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Day 31 White-Paper Master Sheet & Recall",
        "sections": [
          {
            "title": "5-Minute White-Paper Master Sheet",
            "blocks": [
              {
                "type": "diagram",
                "content": "🧠 Day 31 White-Paper Master Sheet\nMentally reproduce:\n\nPYTHON\nHigh-level, Interpreted, Case-sensitive, .py\n\nCOLLECTIONS\nList       [ ]   Mutable\nTuple      ( )   Immutable  ((10,) single tuple)\nDictionary {K:V} Mutable    (get() safe lookup)\nSet        { }   Mutable    (Unique, deduplicated)\nString           Immutable\n\nOPERATORS\n/  → float div    // → floor div    % → remainder    ** → power\n== → compare      =  → assign       in → membership\n\nCONTROL\nrange(start, stop, step) [stop EXCLUDED]\nbreak → EXIT LOOP 🚪 | continue → SKIP TURN ⏭️\n\nSTRINGS\n0 → first, -1 → last, [start:end] (end excluded), [::-1] → reverse\nstrip(), split() (str → list), join() (list → str)\n\nFUNCTIONS & SCOPE\ndef, parameters (header), arguments (call), return (tuple)\nLOCAL (inside) vs GLOBAL (outside) | global x modifies global\n\nMODULES & EXCEPTIONS\nmath.sqrt() float | math.floor(-4.5) = -5 | math.factorial(5) = 120\nrandom.random() [0, 1) | try / except / finally / raise\n\nFILES\nr (read), w (write/wipe), a (append)\nread(), readline(), readlines() (list)\ntell() (where pointer is), seek(pos) (move pointer)"
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 31 Milestone Checkpoint Test",
      "subtitle": "40 Comprehensive NCERT Python Questions: Fundamentals, Operators, Loops, Strings, Collections, Scope, Modules, Exceptions & Files",
      "questions": [
        {
          "id": "m-d31-q1",
          "question": "Q1. Python is primarily described in your NCERT material as:",
          "options": [
            "Assembly language",
            "Machine language",
            "Interpreted high-level language",
            "Database language",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "Python is an interpreted, high-level, dynamically typed programming language. Correct: (C) Interpreted high-level language."
        },
        {
          "id": "m-d31-q2",
          "question": "Q2. Which is an invalid Python identifier?",
          "options": [
            "marks1",
            "_marks",
            "1marks",
            "total_marks",
            "None of the above"
          ],
          "correctAnswer": 2,
          "explanation": "Python identifiers cannot begin with a digit. Therefore, '1marks' is invalid. Correct: (C) 1marks."
        },
        {
          "id": "m-d31-q3",
          "question": "Q3. Which represents a list?",
          "options": [
            "(10,20,30)",
            "[10,20,30]",
            "{\"a\":10}",
            "\"10,20,30\"",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Python lists are constructed using square brackets [ ]. Correct: (B) [10,20,30]."
        },
        {
          "id": "m-d31-q4",
          "question": "Q4. Which is immutable?",
          "options": [
            "List",
            "Dictionary",
            "Tuple",
            "More than one of the above",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Tuples cannot be altered after creation and are strictly immutable. Correct: (C) Tuple."
        },
        {
          "id": "m-d31-q5",
          "question": "Q5. What is the main property of:\ns = {1, 2, 2, 3}",
          "options": [
            "Duplicate 2 must remain twice",
            "Set eliminates duplicate entries",
            "It is a dictionary",
            "It is a tuple",
            "Error"
          ],
          "correctAnswer": 1,
          "explanation": "A set automatically removes duplicate elements, resulting conceptually in {1, 2, 3}. Correct: (B) Set eliminates duplicate entries."
        },
        {
          "id": "m-d31-q6",
          "question": "Q6. What is the result?\n13 // 4",
          "options": [
            "3",
            "3.25",
            "1",
            "4",
            "Error"
          ],
          "correctAnswer": 0,
          "explanation": "The floor division operator // discards the fractional part and returns the integer quotient 3. Correct: (A) 3."
        },
        {
          "id": "m-d31-q7",
          "question": "Q7. What is:\n13 % 4",
          "options": [
            "4",
            "3",
            "1",
            "0",
            "Error"
          ],
          "correctAnswer": 2,
          "explanation": "The modulo operator % returns the remainder: 13 = 4 * 3 + 1, so the remainder is 1. Correct: (C) 1."
        },
        {
          "id": "m-d31-q8",
          "question": "Q8. What is:\n2 ** 4",
          "options": [
            "8",
            "16",
            "6",
            "24",
            "Error"
          ],
          "correctAnswer": 1,
          "explanation": "The ** operator computes exponentiation: 2 ** 4 = 2⁴ = 16. Correct: (B) 16."
        },
        {
          "id": "m-d31-q9",
          "question": "Q9. What is the output?\nprint(True and False)",
          "options": [
            "True",
            "False",
            "1",
            "0",
            "Error"
          ],
          "correctAnswer": 1,
          "explanation": "Logical 'and' requires both operands to be True; True and False evaluates to False. Correct: (B) False."
        },
        {
          "id": "m-d31-q10",
          "question": "Q10. What is the output?\na = [10, 20, 30]\nprint(20 in a)",
          "options": [
            "20",
            "True",
            "False",
            "1",
            "Error"
          ],
          "correctAnswer": 1,
          "explanation": "The membership operator 'in' evaluates to True because 20 is an element of list a. Correct: (B) True."
        },
        {
          "id": "m-d31-q11",
          "question": "Q11. What is the output?\nx = 70\n\nif x >= 80:\n    print(\"A\")\nelif x >= 60:\n    print(\"B\")\nelse:\n    print(\"C\")",
          "options": [
            "A",
            "B",
            "C",
            "70",
            "Error"
          ],
          "correctAnswer": 1,
          "explanation": "70 >= 80 is False; the elif condition 70 >= 60 is True, printing 'B' and terminating the construct. Correct: (B) B."
        },
        {
          "id": "m-d31-q12",
          "question": "Q12. Which values are generated?\nrange(2, 7, 2)",
          "options": [
            "2,4,6",
            "2,4,6,8",
            "2,3,4,5,6",
            "0,2,4,6",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "range(start, stop, step) starts at 2, steps by 2, and excludes the stop value 7: 2, 4, 6. Correct: (A) 2,4,6."
        },
        {
          "id": "m-d31-q13",
          "question": "Q13. What is the output?\nfor i in range(5):\n    if i == 3:\n        break\n    print(i)",
          "options": [
            "0 1 2",
            "0 1 2 3",
            "1 2 3",
            "0 1 2 4",
            "Error"
          ],
          "correctAnswer": 0,
          "explanation": "The loop prints 0, 1, 2. When i reaches 3, the break statement terminates the loop before printing 3. Output: 0 1 2. Correct: (A) 0 1 2."
        },
        {
          "id": "m-d31-q14",
          "question": "Q14. What is the output?\nfor i in range(5):\n    if i == 2:\n        continue\n    print(i)",
          "options": [
            "0 1 2 3 4",
            "0 1 3 4",
            "0 1",
            "2 3 4",
            "Error"
          ],
          "correctAnswer": 1,
          "explanation": "When i is 2, continue skips the rest of the loop body. The values 0, 1, 3, 4 are printed. Correct: (B) 0 1 3 4."
        },
        {
          "id": "m-d31-q15",
          "question": "Q15. What is the output?\ns = \"PYTHON\"\nprint(s[1:4])",
          "options": [
            "PYT",
            "YTH",
            "YTHO",
            "THO",
            "Error"
          ],
          "correctAnswer": 1,
          "explanation": "Slicing s[1:4] includes indices 1, 2, and 3 ('Y', 'T', 'H') and excludes index 4. Output: 'YTH'. Correct: (B) YTH."
        },
        {
          "id": "m-d31-q16",
          "question": "Q16. What is the output?\nprint(\"ABC\"[::-1])",
          "options": [
            "ABC",
            "BAC",
            "CBA",
            "ACB",
            "Error"
          ],
          "correctAnswer": 2,
          "explanation": "The slice step -1 reverses the string sequence: 'CBA'. Correct: (C) CBA."
        },
        {
          "id": "m-d31-q17",
          "question": "Q17. strip() mainly removes:",
          "options": [
            "All characters",
            "Leading and trailing whitespace",
            "Only middle spaces",
            "Only digits",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "strip() trims leading and trailing whitespace from both ends of the string. Correct: (B) Leading and trailing whitespace."
        },
        {
          "id": "m-d31-q18",
          "question": "Q18. What does this commonly return?\n\"India is great\".split()",
          "options": [
            "Integer",
            "List of words",
            "Tuple only",
            "Dictionary",
            "Error"
          ],
          "correctAnswer": 1,
          "explanation": "split() breaks a string by whitespace and returns a list of substrings: ['India', 'is', 'great']. Correct: (B) List of words."
        },
        {
          "id": "m-d31-q19",
          "question": "Q19. What is the output?\na = [10, 20]\na.append(30)\nprint(a)",
          "options": [
            "[30,10,20]",
            "[10,20,30]",
            "[10,20]",
            "Error",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "append() adds the value 30 to the tail of the list: [10, 20, 30]. Correct: (B) [10,20,30]."
        },
        {
          "id": "m-d31-q20",
          "question": "Q20. What is x?\na = [10,20,30]\nx = a.pop()",
          "options": [
            "10",
            "20",
            "30",
            "[10,20]",
            "Error"
          ],
          "correctAnswer": 2,
          "explanation": "By default, pop() removes and returns the last element of the list, which is 30. Correct: (C) 30."
        },
        {
          "id": "m-d31-q21",
          "question": "Q21. Which is a single-element tuple?",
          "options": [
            "(10)",
            "[10]",
            "(10,)",
            "{10}",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "A single-element tuple must contain a trailing comma: (10,). Correct: (C) (10,)."
        },
        {
          "id": "m-d31-q22",
          "question": "Q22. What is the output?\nt = (10,20,10,30,10)\n\nprint(t.count(10))",
          "options": [
            "1",
            "2",
            "3",
            "5",
            "Error"
          ],
          "correctAnswer": 2,
          "explanation": "count(10) returns the frequency of element 10 in the tuple, which is 3. Correct: (C) 3."
        },
        {
          "id": "m-d31-q23",
          "question": "Q23. What is the output?\nd = {\"name\":\"Ravi\"}\nprint(d.get(\"age\"))",
          "options": [
            "0",
            "False",
            "None",
            "Error",
            "age"
          ],
          "correctAnswer": 2,
          "explanation": "The get() method returns None if the specified key does not exist in the dictionary, avoiding a KeyError. Correct: (C) None."
        },
        {
          "id": "m-d31-q24",
          "question": "Q24. Consider:\nstateCapital = {\n    \"Bihar\": \"Patna\",\n    \"Rajasthan\": \"Jaipur\"\n}\nprint(\"Bihar\" in stateCapital)\n\nOutput?",
          "options": [
            "Bihar",
            "Patna",
            "True",
            "False",
            "Error"
          ],
          "correctAnswer": 2,
          "explanation": "Using the 'in' operator on a dictionary checks whether the key exists. Since 'Bihar' is a valid key, it returns True. Correct: (C) True."
        },
        {
          "id": "m-d31-q25",
          "question": "Q25. In:\ndef add(a, b):\n    return a+b\n\na and b are:",
          "options": [
            "Arguments",
            "Parameters",
            "Modules",
            "Global variables",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Variables listed in the function definition header are formal parameters. Correct: (B) Parameters."
        },
        {
          "id": "m-d31-q26",
          "question": "Q26. What is the output?\ndef test():\n    return 10, 20\nprint(test())",
          "options": [
            "10",
            "[10,20]",
            "(10,20)",
            "20",
            "Error"
          ],
          "correctAnswer": 2,
          "explanation": "Multiple comma-separated values in a return statement are returned as a tuple: (10, 20). Correct: (C) (10,20)."
        },
        {
          "id": "m-d31-q27",
          "question": "Q27. What is the output?\nx = 10\ndef test():\n    x = 20\n    print(x)\ntest()\nprint(x)",
          "options": [
            "10 20",
            "20 10",
            "20 20",
            "10 10",
            "Error"
          ],
          "correctAnswer": 1,
          "explanation": "Inside test(), local x = 20 shadows the global variable and prints 20. Outside, global x remains 10 and prints 10. Output: 20 10. Correct: (B) 20 10."
        },
        {
          "id": "m-d31-q28",
          "question": "Q28. What is the output?\nx = 5\ndef change():\n    global x\n    x = 10\nchange()\nprint(x)",
          "options": [
            "5",
            "10",
            "15",
            "None",
            "Error"
          ],
          "correctAnswer": 1,
          "explanation": "The global statement explicitly binds x inside change() to the module-level global variable, reassigning it to 10. Correct: (B) 10."
        },
        {
          "id": "m-d31-q29",
          "question": "Q29. What is the output?\nimport math\nprint(math.sqrt(49))",
          "options": [
            "7",
            "7.0",
            "49",
            "24.5",
            "Error"
          ],
          "correctAnswer": 1,
          "explanation": "math.sqrt() calculates the square root and returns a float: 7.0. Correct: (B) 7.0."
        },
        {
          "id": "m-d31-q30",
          "question": "Q30. What is:\nmath.floor(-4.5)",
          "options": [
            "-4",
            "-5",
            "4",
            "5",
            "Error"
          ],
          "correctAnswer": 1,
          "explanation": "math.floor(x) returns the greatest integer less than or equal to x. For -4.5, it rounds down to -5. Correct: (B) -5."
        },
        {
          "id": "m-d31-q31",
          "question": "Q31. What is:\nmath.factorial(5)",
          "options": [
            "25",
            "60",
            "100",
            "120",
            "Error"
          ],
          "correctAnswer": 3,
          "explanation": "5! = 5 × 4 × 3 × 2 × 1 = 120. Correct: (D) 120."
        },
        {
          "id": "m-d31-q32",
          "question": "Q32. random.random() is used to obtain:",
          "options": [
            "A predictable integer only",
            "A random floating-point value in its standard range",
            "A string",
            "A file",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "random.random() generates a pseudo-random float in the standard range [0.0, 1.0). Correct: (B) A random floating-point value in its standard range."
        },
        {
          "id": "m-d31-q33",
          "question": "Q33. What exception normally occurs?\n10 / 0",
          "options": [
            "NameError",
            "TypeError",
            "ZeroDivisionError",
            "KeyError",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Division by zero raises a ZeroDivisionError in Python. Correct: (C) ZeroDivisionError."
        },
        {
          "id": "m-d31-q34",
          "question": "Q34. What is the output?\ntry:\n    print(10 // 2)\nexcept:\n    print(\"Error\")\nfinally:\n    print(\"Done\")",
          "options": [
            "5 only",
            "Done only",
            "5 followed by Done",
            "Error followed by Done",
            "Error"
          ],
          "correctAnswer": 2,
          "explanation": "10 // 2 prints 5. No exception occurs so except is bypassed. The finally block always executes, printing 'Done'. Output: 5 followed by Done. Correct: (C) 5 followed by Done."
        },
        {
          "id": "m-d31-q35",
          "question": "Q35. Which mode is primarily used for reading a text file?",
          "options": [
            "r",
            "w",
            "a",
            "x",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "The 'r' mode opens an existing file for read operations. Correct: (A) r."
        },
        {
          "id": "m-d31-q36",
          "question": "Q36. Opening an existing file in w mode normally:",
          "options": [
            "Only reads it",
            "Appends at the end",
            "Replaces/truncates existing content before writing",
            "Converts it to a tuple",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Opening an existing file in 'w' mode truncates/erases its existing content. Correct: (C) Replaces/truncates existing content before writing."
        },
        {
          "id": "m-d31-q37",
          "question": "Q37. Which mode adds new data at the end of an existing file?",
          "options": [
            "r",
            "w",
            "a",
            "x",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "The 'a' (append) mode positions the write pointer at the end of the file, preserving earlier content. Correct: (C) a."
        },
        {
          "id": "m-d31-q38",
          "question": "Q38. Which reads one line from a text file?",
          "options": [
            "read()",
            "readline()",
            "readlines()",
            "write()",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "readline() reads a single line up to and including the newline character. Correct: (B) readline()."
        },
        {
          "id": "m-d31-q39",
          "question": "Q39. tell() is associated with:",
          "options": [
            "Current file position",
            "Closing a file",
            "Creating a dictionary",
            "Importing a module",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "tell() returns the current byte position/offset of the file read/write pointer. Correct: (A) Current file position."
        },
        {
          "id": "m-d31-q40",
          "question": "Q40. seek() is used to:",
          "options": [
            "Change/move the file position",
            "Delete a file automatically",
            "Read only one line",
            "Import math",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "seek(offset) repositions the file pointer to the specified byte offset. Correct: (A) Change/move the file position."
        }
      ]
    }
  },
  {
    "dayNumber": 32,
    "dayId": "day-32",
    "badge": "Day 32",
    "title": "TRE 4.0 — Day 32",
    "unit": "Part III (CS) • Computer Networks: LAN/MAN/WAN, Devices, IP/MAC, OSI Model, Transport Protocols & Topologies",
    "targetTime": "20–25 mins read + 25 mins test",
    "summary": "Computer Networks Core Foundations (TRE 3.0 & TRE 2.0 Paper-Backed Focus): Network Definition & Scale (LAN local, MAN metropolitan/city, WAN country/world/Internet), Network Devices (Switch for same LAN via MAC addresses, Router for multiple networks via IP addresses, Hub broadcast/unintelligent, Bridge Data Link segmentation, Repeater Physical layer signal regeneration, Modem modulation/demodulation), Addressing & Subnetting (MAC 48-bit hardware/NIC address vs IP 32-bit logical network address, Subnet Mask network ID vs host ID separation), OSI 7-Layer Reference Model ('All People Seem To Need Data Processing': Physical, Data Link, Network, Transport, Session, Presentation, Application; routing/packet forwarding at Network layer [TRE 3.0 trap note]), Transport & Application Protocols (TCP connection-oriented 3-way handshake SYN/SYN-ACK/ACK vs UDP connectionless, Socket communication endpoint, SMTP mail sending, HTTP/HTTPS web, FTP file transfer, DNS name-to-IP, DHCP auto IP config, ARP IPv4-to-MAC), Transmission Media & Topologies (Wired: twisted pair, coaxial, optical fiber [highest speed/capacity]; Wireless: radio, microwave, infrared; Topologies: Star central switch, Bus backbone, Ring token circle, Mesh redundant links), Day 32 White-Paper Master Sheet, and 25-Question Checkpoint Test.",
    "targets": [
      {
        "section": "Part III – CS",
        "topic": "LAN, MAN, WAN & Network Devices",
        "goal": "Master scales (LAN/MAN/WAN), Switch (same LAN/MAC), Router (inter-network/IP), Hub (broadcast), Repeater (signal regeneration)"
      },
      {
        "section": "Part III – CS",
        "topic": "Addressing, Subnetting & OSI Model",
        "goal": "Differentiate MAC (hardware) vs IP (logical), Subnet Mask network separation, 7 OSI layers, and packet routing at Network layer"
      },
      {
        "section": "Part III – CS",
        "topic": "Protocols, Media & Topologies",
        "goal": "Recall TCP 3-way handshake vs UDP, Socket IPC, SMTP, DNS, DHCP, ARP, Optical fiber speed, and Star/Bus/Ring/Mesh topologies"
      }
    ],
    "introNote": "Today begins a high-value networking block. Your TRE 3.0 paper directly asks about router, OSI routing/forwarding, switch, SMTP, and subnet mask. TRE 2.0 also directly tests wireless media, switched networks, TCP, sockets, and optical fiber. These anchor today's core curriculum, with LAN/MAN/WAN, topologies, detailed OSI layers, MAC/IP comparison, and DNS/DHCP/ARP expanding standard exam-tested networking foundations.",
    "parts": [
      {
        "title": "Part III — Network Fundamentals, Geographical Scales & Core Hardware Devices",
        "sections": [
          {
            "title": "1. What is a Computer Network? & 2. LAN, MAN, WAN Scale Hierarchy",
            "blocks": [
              {
                "type": "callout",
                "icon": "🧠",
                "title": "MENTAL PICTURE — Connected Computers",
                "content": "Imagine three computers:\nPC-1 ───── PC-2\n  \\         /\n   \\       /\n     PC-3\n\nThey can:\n• Share data\n• Share printer\n• Communicate\n• Access Internet"
              },
              {
                "type": "text",
                "content": "💡 SIMPLE CONCEPT\nComputer Network = two or more connected devices that communicate and share resources.\n\n2. LAN, MAN, WAN\nThink in increasing geographical size:\nLAN\n ↓\nMAN\n ↓\nWAN\n\n• LAN — Local Area Network\nSmall area: Room, Office, School, Building.\nExample: Computer Lab → LAN.\nMemory: L = Local = small.\n\n• MAN — Metropolitan Area Network\nLarger than LAN. Usually covers: City / metropolitan area.\nMemory: M = Metro = City.\n\n• WAN — Wide Area Network\nHuge geographical area: Cities, States, Countries, Continents.\nThe Internet is the classic example of a very large WAN-like network."
              },
              {
                "type": "callout",
                "icon": "🔥",
                "title": "Scale Memory Anchor",
                "content": "LAN → Building\nMAN → City\nWAN → Country/World"
              }
            ]
          },
          {
            "title": "3. Switch, 4. Router & Switch vs Router Comparison",
            "blocks": [
              {
                "type": "text",
                "content": "3. Switch (Directly relevant to TRE 3.0)\nThe paper asks which device connects multiple devices within the same LAN, with Switch among the options."
              },
              {
                "type": "callout",
                "icon": "🧠",
                "title": "Mental Picture: Switch in a Local Lab",
                "content": "Your library has multiple computers:\nPC1 ─┐\nPC2 ─┤\nPC3 ─┼── SWITCH\nPC4 ─┤\nPC5 ─┘\n\nSimple concept:\nSwitch connects devices inside a LAN.\nAt basic exam level, a switch forwards frames using MAC addresses.\nMemory: SWITCH = Same network"
              },
              {
                "type": "text",
                "content": "4. Router (TRE 3.0 Core Anchor)\nTRE 3.0 asks the primary function of a router.\nRelevant concept: Router connects multiple networks.\n\nMental layout:\nLAN A\n  │\n  │\nROUTER\n  │\n  │\nLAN B / Internet\n\nMemory: ROUTER = Route between networks"
              },
              {
                "type": "callout",
                "icon": "🔥",
                "title": "Switch vs Router Core Comparison",
                "content": "SWITCH → devices in same LAN (uses MAC addresses)\nROUTER → different networks (uses IP addresses)\n\nImagine:\nInside house → Switch\nHouse to Internet → Router"
              }
            ]
          },
          {
            "title": "5. Hub, 6. Bridge, 7. Repeater & 8. Modem",
            "blocks": [
              {
                "type": "text",
                "content": "5. Hub (Standard Expansion)\nA hub is much less intelligent than a switch.\nSuppose A sends data:\n        HUB\n       / | \\\n      A  B  C\nHub tends to repeat/broadcast incoming signals out all other ports.\nMental: Hub shouts to everyone.\nSwitch: Switch tries to send to the intended destination.\nMemory: HUB → ALL | SWITCH → TARGET\n\n6. Bridge\nA bridge connects/segments LAN portions.\nMental:\nLAN Segment A\n     │\n   BRIDGE\n     │\nLAN Segment B\nAt a basic conceptual level, bridge and switch operate around the Data Link Layer. (Do not spend too much time on bridge internals).\n\n7. Repeater\nRepeater regenerates/repeats a weakened signal over distances.\nMental:\nWeak signal → REPEATER → Strong/regenerated signal\nMemory: Repeater = Repeat signal (Physical layer).\n\n8. Modem\nModem historically stands for: Modulator–Demodulator.\nIt converts signals as required for a communication medium (analog ↔ digital).\nFor exam memory: MODEM → communication conversion.\nDo not confuse: Router ≠ Modem."
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Network Addressing: MAC vs IP, and Subnet Masking",
        "sections": [
          {
            "title": "9. MAC Address, 10. IP Address & 11. MAC vs IP Comparison",
            "blocks": [
              {
                "type": "callout",
                "icon": "🧠",
                "title": "MENTAL PICTURE — MAC Address",
                "content": "Think of a device's network-interface identity.\nLaptop NIC → MAC Address\n\nBasic memory: MAC = hardware/network-interface address (48-bit physical address).\nUsed heavily at the local network/Data Link level."
              },
              {
                "type": "text",
                "content": "10. IP Address\nThink of a logical network address:\nDevice → IP Address\nExample format: 192.168.1.10 for IPv4-style notation.\nMemory: MAC → local/interface identity | IP → logical network address.\n\n11. MAC vs IP Comparison\nThink of sending a parcel:\n• IP → Which network/location? (Logical destination)\n• MAC → Which interface/device locally? (Physical delivery)"
              },
              {
                "type": "callout",
                "icon": "📋",
                "title": "MAC vs IP Exam Comparison Table",
                "content": "Feature           | MAC Address                | IP Address\n------------------|----------------------------|-------------------------\nLayer Association | Data Link Layer (Layer 2)   | Network Layer (Layer 3)\nDelivery Scope    | Local network delivery     | Routing across networks\nAddress Nature    | Hardware/interface address | Logical routing address"
              }
            ]
          },
          {
            "title": "12. Subnet Mask (TRE 3.0 Core Anchor)",
            "blocks": [
              {
                "type": "text",
                "content": "This is a direct TRE 3.0 topic.\nThe paper asks the purpose of a subnet mask; the relevant idea is identifying the network portion of an IP address."
              },
              {
                "type": "callout",
                "icon": "🧠",
                "title": "Mental Picture: Subnet Mask Partition",
                "content": "Suppose IP: 192.168.1.25\nSubnet mask conceptually helps separate: NETWORK | HOST\n\nThink:\nIP ADDRESS\n┌────────────┬───────┐\n│  NETWORK   │ HOST  │\n└────────────┴───────┘\n       ↑\n subnet mask helps identify this split"
              },
              {
                "type": "callout",
                "icon": "🔥",
                "title": "Subnet Mask Memory Anchor",
                "content": "Subnet Mask = Network part detector"
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — The 7-Layer OSI Reference Model & Layer Functions",
        "sections": [
          {
            "title": "13. OSI Model Overview & 7-Layer Mnemonic",
            "blocks": [
              {
                "type": "text",
                "content": "The ISO OSI (Open Systems Interconnection) reference model consists of exactly seven layers:\n7 — Application\n6 — Presentation\n5 — Session\n4 — Transport\n3 — Network\n2 — Data Link\n1 — Physical"
              },
              {
                "type": "callout",
                "icon": "🧠",
                "title": "Memory Sentence (From Layer 7 → 1)",
                "content": "All People Seem To Need Data Processing\n\nA → Application (Layer 7)\nP → Presentation (Layer 6)\nS → Session (Layer 5)\nT → Transport (Layer 4)\nN → Network (Layer 3)\nD → Data Link (Layer 2)\nP → Physical (Layer 1)"
              }
            ]
          },
          {
            "title": "14. Physical Layer & 15. Data Link Layer",
            "blocks": [
              {
                "type": "text",
                "content": "14. Physical Layer (Layer 1)\nThink:\nBITS → wire / fiber / signal\nDeals with physical transmission concepts, raw bit streams, cables, and repeaters.\nMemory: Physical = Bits + medium.\n\n15. Data Link Layer (Layer 2)\nThink:\nFRAMES | MAC | SWITCH\nHandles node-to-node framing, hardware addressing, and local flow/error control.\nBasic exam memory: Data Link = Frame + MAC + Switch."
              }
            ]
          },
          {
            "title": "16. Network Layer (Crucial Routing Layer & TRE 3.0 Trap)",
            "blocks": [
              {
                "type": "text",
                "content": "This is crucial. The Network Layer (Layer 3) is responsible for routing and forwarding packets.\n\nThink:\nPACKET → ROUTER → BEST PATH\nMemory: Network Layer = Router + IP + Packet."
              },
              {
                "type": "callout",
                "icon": "⚠️",
                "title": "TRE 3.0 Exam Trap: Routing Layer",
                "content": "TRE 3.0 asks: Which OSI layer performs routing and forwarding?\n\nVisible choices printed in paper:\n• Data Link\n• Transport\n• Physical\n• More than one\n• None\n\nNetwork Layer is missing from the visible choices! Standard networking universally assigns routing and forwarding to the Network Layer, so among those printed options the paper logically forces \"None of the above\".\n\nDo NOT memorize Data Link or Transport as the routing layer!"
              }
            ]
          },
          {
            "title": "17. Transport Layer: TCP, 3-Way Handshake & UDP",
            "blocks": [
              {
                "type": "text",
                "content": "17. Transport Layer (Layer 4)\nThink: PROCESS ↔ PROCESS communication (end-to-end).\nImportant protocols: TCP and UDP.\nMemory: Transport = TCP/UDP.\n\n18. TCP (Transmission Control Protocol)\nTRE 2.0 directly tests TCP and lists these key properties:\n• connection-oriented\n• uses a three-way handshake\n• receives application data as a continuous byte stream."
              },
              {
                "type": "callout",
                "icon": "🧠",
                "title": "Mental Picture: Telephone Call",
                "content": "Telephone call analogy:\nConnect first → Communicate → Close\nMemory: TCP = Connection + Reliable delivery concept"
              },
              {
                "type": "callout",
                "icon": "🤝",
                "title": "19. TCP Three-Way Handshake",
                "content": "Client                          Server\n\n SYN   ─────────────────────────→\n\n       ←───────────────────────── SYN-ACK\n\n ACK   ─────────────────────────→\n\nMemory: SYN → SYN-ACK → ACK\n3 messages → connection established!"
              },
              {
                "type": "text",
                "content": "20. UDP (User Datagram Protocol)\nContrast:\n• TCP → connection-oriented, reliability mechanisms, acknowledgment overhead.\n• UDP → connectionless, lower overhead, no handshake, best-effort.\n\nMental analogy:\nTCP → phone call\nUDP → postcard\nDon't overcomplicate today."
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Network Protocols, IPC Sockets, Transmission Media & Topologies",
        "sections": [
          {
            "title": "High-Yield Application Protocols: SMTP, HTTP/HTTPS, FTP, DNS, DHCP & ARP",
            "blocks": [
              {
                "type": "text",
                "content": "21. SMTP (Direct TRE 3.0 Question)\nProtocol used to send email over the Internet → SMTP (Simple Mail Transfer Protocol).\nMemory: S = Send → SMTP | SMTP = SEND MAIL.\n\n22. HTTP / HTTPS\n• HTTP → HyperText Transfer Protocol for web communication.\n• HTTPS → HTTP + security/encryption via TLS/SSL.\nMemory: S in HTTPS = Secure.\n\n23. FTP\nFTP → File Transfer Protocol.\nMemory: F = File.\n\n24. DNS (Domain Name System)\nThink phonebook:\ngoogle.com ───(DNS)───→ IP address\nMemory: DNS = Domain Name → IP.\n\n25. DHCP (Dynamic Host Configuration Protocol)\nThink automatic IP assignment:\nNew device joins network → DHCP → gets IP configuration automatically.\nMemory: DHCP = Give IP automatically.\n\n26. ARP (Address Resolution Protocol)\nStandard networking concept:\nIPv4 Address ───(ARP)───→ MAC Address\nMemory: ARP = IPv4 → MAC.\n(This is worth remembering carefully because some reproduced answer keys can contain errors)."
              }
            ]
          },
          {
            "title": "27. Socket (TRE 2.0 Anchor) & 28–29. Transmission Media (Wired vs Wireless)",
            "blocks": [
              {
                "type": "text",
                "content": "27. Socket (TRE 2.0 Anchor)\nTRE 2.0 asks: An endpoint of an inter-process communication flow across a computer network is called what?\nRelevant answer: Socket.\n\nMental layout:\nApplication → SOCKET → Network\nMemory: Socket = communication endpoint (IP + Port)."
              },
              {
                "type": "callout",
                "icon": "📡",
                "title": "28. Transmission Media: Wired vs Wireless",
                "content": "Two broad mental groups:\n\nWIRED (Guided):\n├── Twisted Pair\n├── Coaxial\n└── Optical Fiber\n\nWIRELESS (Unguided):\n├── Radio waves\n├── Microwaves\n└── Infrared\n\nTRE 2.0 directly lists radio waves, microwaves, and infrared as wireless transmission possibilities."
              },
              {
                "type": "text",
                "content": "29. Optical Fiber (TRE 2.0 Anchor)\nTRE 2.0 asks which among Coaxial, Twisted Pair, and Optical Fiber provides the highest transmission speed.\nRelevant answer: Optical Fiber.\nMemory: Fiber = fastest among those three (uses light pulses through glass/plastic core)."
              }
            ]
          },
          {
            "title": "30. Network Topologies: Star, Bus, Ring & Mesh",
            "blocks": [
              {
                "type": "text",
                "content": "Remember four standard topologies:\n\n• Star Topology:\nAll devices connect to a central device (hub/switch).\n        PC\n         |\nPC ─── SWITCH ─── PC\n         |\n        PC\nMemory: STAR = center\n\n• Bus Topology:\nOne main communication backbone cable.\nPC ─ PC ─ PC ─ PC\n=================\n    backbone\nMemory: BUS = one backbone\n\n• Ring Topology:\nDevices form a closed loop; token circulates.\nA ─ B\n|   |\nD ─ C\nMemory: RING = circle\n\n• Mesh Topology:\nMany point-to-point interconnections across nodes:\nA────B\n|\\  /|\n| \\/ |\n| /\\ |\n|/  \\|\nC────D\nHigh redundancy and fault tolerance, but requires more physical cabling and ports.\nMemory: MESH = many connections"
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Day 32 White-Paper Master Sheet & Rapid Recall",
        "sections": [
          {
            "title": "White-Paper Mental Diagram & High-Yield Summary",
            "blocks": [
              {
                "type": "callout",
                "icon": "🧠",
                "title": "Day 32 White-Paper Master Sheet",
                "content": "Close the lesson and mentally draw:\n\nNETWORK SIZE:\nLAN → Building\nMAN → City\nWAN → World\n\nDEVICES:\nHub → everyone (broadcast)\nSwitch → same LAN (MAC)\nRouter → networks (IP)\nRepeater → regenerate signal\n\nOSI 7 LAYERS:\n7 Application\n6 Presentation\n5 Session\n4 Transport\n3 Network\n2 Data Link\n1 Physical\n\nKEY LAYERS:\nNETWORK LAYER → IP, Packet, Router, Routing\nDATA LINK → MAC, Frame, Switch\nTRANSPORT → TCP / UDP\n\nPROTOCOL MAPPINGS:\nSMTP → Send Email\nHTTP → Web\nHTTPS → Secure Web\nFTP → File Transfer\nDNS → Name → IP\nDHCP → Automatic IP\nARP → IPv4 → MAC"
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 32 Checkpoint Test",
      "subtitle": "Computer Networks: LAN/MAN/WAN, Devices, IP/MAC, OSI Layers, TCP/UDP & Protocols",
      "questions": [
        {
          "id": "m-d32-q1",
          "question": "Q1. A LAN normally covers:",
          "options": [
            "A relatively small/local area",
            "Entire world only",
            "Multiple countries only",
            "A continent only",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "LAN (Local Area Network) covers a relatively small and localized geographic area such as a room, office, laboratory, school, or single building. Correct: (A)."
        },
        {
          "id": "m-d32-q2",
          "question": "Q2. A MAN is most closely associated with:",
          "options": [
            "One CPU register",
            "Metropolitan/city-sized area",
            "One room only",
            "Entire Internet only",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "MAN (Metropolitan Area Network) connects computers and facilities spanning a metropolitan or city-sized area. Correct: (B)."
        },
        {
          "id": "m-d32-q3",
          "question": "Q3. Which network generally covers the widest geographical area?",
          "options": [
            "LAN",
            "MAN",
            "WAN",
            "PAN only",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "WAN (Wide Area Network) spans broad geographical areas including multiple cities, states, countries, continents, or the entire globe (e.g. the Internet). Correct: (C)."
        },
        {
          "id": "m-d32-q4",
          "question": "Q4. According to TRE 3.0, the primary role of a router is:",
          "options": [
            "Connect multiple networks",
            "Store database records",
            "Compile programs",
            "Perform sorting",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "In BPSC TRE 3.0, the primary function of a router is directly identified as connecting multiple different networks and forwarding/routing packets between them. Correct: (A)."
        },
        {
          "id": "m-d32-q5",
          "question": "Q5. Which device is commonly used to connect multiple devices within the same LAN?",
          "options": [
            "Router",
            "Switch",
            "Modem only",
            "Compiler",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "A Switch connects multiple computers/devices within the same local area network (LAN) and directs frames using local MAC addresses. Correct: (B)."
        },
        {
          "id": "m-d32-q6",
          "question": "Q6. Which statement is correct?",
          "options": [
            "Hub intelligently routes packets between networks",
            "Router connects networks",
            "Switch is a programming language",
            "Repeater stores databases",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "\"Router connects networks\" is the fundamental exam-tested fact. Hubs repeat signals to all ports unintelligently, switches connect within LANs, and repeaters regenerate signals. Correct: (B)."
        },
        {
          "id": "m-d32-q7",
          "question": "Q7. A repeater is primarily used to:",
          "options": [
            "Regenerate/repeat a signal",
            "Send email",
            "Assign database keys",
            "Sort packets",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "A repeater operates at the Physical Layer to amplify and regenerate weakened or attenuated signals over long transmission distances. Correct: (A)."
        },
        {
          "id": "m-d32-q8",
          "question": "Q8. Which is most closely associated with local network-interface addressing?",
          "options": [
            "MAC address",
            "SQL",
            "URL only",
            "Python tuple",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "A MAC (Media Access Control) address is the 48-bit physical/hardware address burned into a network interface card (NIC) for local Data Link layer communication. Correct: (A)."
        },
        {
          "id": "m-d32-q9",
          "question": "Q9. Which is a logical network address used in routing?",
          "options": [
            "IP address",
            "Variable name",
            "File offset",
            "Boolean expression",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "An IP address (such as IPv4 or IPv6) is a logical network layer address used by routers to navigate data across networks. Correct: (A)."
        },
        {
          "id": "m-d32-q10",
          "question": "Q10. The purpose of a subnet mask is mainly to identify:",
          "options": [
            "Network portion of an IP address",
            "Email password",
            "MAC manufacturer only",
            "File-system type",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "As directly tested in TRE 3.0, the purpose of a subnet mask is to split an IP address and identify which part represents the Network ID and which part represents the Host ID. Correct: (A)."
        },
        {
          "id": "m-d32-q11",
          "question": "Q11. How many layers are in the OSI model?",
          "options": [
            "4",
            "5",
            "7",
            "8",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "The ISO OSI (Open Systems Interconnection) reference model contains exactly 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application. Correct: (C)."
        },
        {
          "id": "m-d32-q12",
          "question": "Q12. Routing and forwarding packets belong to the:",
          "options": [
            "Physical Layer",
            "Data Link Layer",
            "Network Layer",
            "Presentation Layer",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "The Network Layer (Layer 3) is responsible for routing, logical addressing, and forwarding packets toward their destination across networks. Correct: (C)."
        },
        {
          "id": "m-d32-q13",
          "question": "Q13. A router is most strongly associated with which OSI layer?",
          "options": [
            "Network Layer",
            "Physical Layer only",
            "Presentation Layer",
            "Session Layer",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "A router inspects IP packet headers to make routing decisions, making it a Layer 3 (Network Layer) networking device. Correct: (A)."
        },
        {
          "id": "m-d32-q14",
          "question": "Q14. A switch and MAC addresses are most closely associated with:",
          "options": [
            "Data Link Layer",
            "Application Layer only",
            "Presentation Layer",
            "Session Layer",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "Standard switches and MAC addresses operate at Layer 2 (Data Link Layer), handling framing and hardware addressing within a local network segment. Correct: (A)."
        },
        {
          "id": "m-d32-q15",
          "question": "Q15. TCP and UDP belong mainly to:",
          "options": [
            "Transport Layer",
            "Physical Layer",
            "Presentation Layer",
            "Data Link Layer",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are the two primary transport protocols residing at Layer 4 (Transport Layer). Correct: (A)."
        },
        {
          "id": "m-d32-q16",
          "question": "Q16. Which statement about TCP matches the TRE 2.0 question?",
          "options": [
            "TCP is connection-oriented",
            "TCP uses a three-way handshake",
            "More than one of the above",
            "TCP is always connectionless",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Both statements are true: TCP is a connection-oriented transport protocol and establishes its connection via a three-way handshake (SYN, SYN-ACK, ACK). Therefore, (C) More than one of the above is the correct BPSC answer. Correct: (C)."
        },
        {
          "id": "m-d32-q17",
          "question": "Q17. Which protocol is used to send email?",
          "options": [
            "FTP",
            "SMTP",
            "HTTP",
            "ARP",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "SMTP (Simple Mail Transfer Protocol) is specifically used to send/push email messages across the Internet (directly tested in TRE 3.0). Correct: (B)."
        },
        {
          "id": "m-d32-q18",
          "question": "Q18. DNS primarily maps:",
          "options": [
            "Domain name → IP address",
            "IP → password",
            "MAC → username",
            "File → process",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "DNS (Domain Name System) translates human-readable domain names (e.g., google.com) into machine-routable IP addresses. Correct: (A)."
        },
        {
          "id": "m-d32-q19",
          "question": "Q19. DHCP is mainly used to:",
          "options": [
            "Automatically provide IP configuration",
            "Transfer web pages",
            "Send email",
            "Resolve IPv4 to MAC",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "DHCP (Dynamic Host Configuration Protocol) dynamically and automatically provides client devices with IP addresses, subnet masks, default gateways, and DNS settings. Correct: (A)."
        },
        {
          "id": "m-d32-q20",
          "question": "Q20. ARP is best remembered as:",
          "options": [
            "IPv4 address → MAC address",
            "Domain → IP",
            "Email → FTP",
            "MAC → password",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "ARP (Address Resolution Protocol) resolves a known logical IPv4 address into its corresponding physical hardware MAC address on a local network segment. Correct: (A)."
        },
        {
          "id": "m-d32-q21",
          "question": "Q21. An endpoint of network inter-process communication is called:",
          "options": [
            "Stack",
            "Socket",
            "Queue",
            "Array",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "In network programming and specifically tested in BPSC TRE 2.0, an endpoint of an inter-process communication flow across a network is called a Socket (combination of IP address and port number). Correct: (B)."
        },
        {
          "id": "m-d32-q22",
          "question": "Q22. Which are wireless transmission media?",
          "options": [
            "Radio waves",
            "Microwaves",
            "Infrared",
            "More than one of the above",
            "None"
          ],
          "correctAnswer": 3,
          "explanation": "Radio waves, microwaves, and infrared are all unbounded/wireless transmission media directly cited in BPSC TRE 2.0. Hence, (D) More than one of the above is correct. Correct: (D)."
        },
        {
          "id": "m-d32-q23",
          "question": "Q23. Among the following, which generally provides the highest transmission speed/capacity in the TRE 2.0 question?",
          "options": [
            "Twisted pair",
            "Coaxial cable",
            "Optical fiber",
            "All exactly equal",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Optical fiber carries data using light pulses through glass or plastic cores, offering vastly higher bandwidth and speed than twisted-pair and coaxial cables (tested in TRE 2.0). Correct: (C)."
        },
        {
          "id": "m-d32-q24",
          "question": "Q24. Which topology has a central connecting device?",
          "options": [
            "Star",
            "Ring",
            "Bus",
            "Mesh only",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "In a Star topology, all individual computers and peripheral nodes connect directly to a central hub or switch. Correct: (A)."
        },
        {
          "id": "m-d32-q25",
          "question": "Q25. Which memory mapping is correct?",
          "options": [
            "SMTP → Send email",
            "DNS → Domain to IP",
            "ARP → IPv4 to MAC",
            "More than one of the above",
            "None"
          ],
          "correctAnswer": 3,
          "explanation": "All three associations are correct: SMTP is used to send email, DNS maps domain names to IP addresses, and ARP maps IPv4 addresses to MAC hardware addresses. Therefore, (D) More than one of the above is correct. Correct: (D)."
        }
      ]
    }
  },
  {
    "dayNumber": 33,
    "dayId": "day-33",
    "badge": "Day 33",
    "title": "TRE 4.0 — Day 33",
    "unit": "Part III (CS) • Computer Networks Deep Dive: OSI vs TCP/IP, TCP vs UDP, Ports, Protocols (DNS/DHCP/ARP) & IPv4 Subnetting",
    "targetTime": "20–25 mins read + 25 mins test",
    "summary": "Computer Networks Deep Dive (Paper-Backed & Standard Subnetting Expansion): OSI 7-Layer Deep Model (Sender vs Receiver data flow, Physical bits, Data Link frames & MAC, Network packets & IP routing, Transport end-to-end TCP/UDP & ports, Upper layers), OSI vs 4-Layer TCP/IP Model (Application, Transport, Internet, Network Access mapping), Transport Protocols (TCP connection-oriented 3-way handshake SYN/SYN-ACK/ACK vs UDP connectionless, Socket IP + Port communication endpoint), Standard High-Yield Port Numbers (HTTP 80, HTTPS 443, FTP 21, SMTP 25, DNS 53, DHCP 67/68), Core Network Protocols (DNS domain-to-IP phonebook, DHCP automatic network configuration, ARP IPv4-to-MAC resolution), IPv4 Addressing & CIDR Subnetting (32 bits, 4 octets of 8 bits, Network vs Host partition, /24 prefix = 255.255.255.0 with 8 host bits = 256 total / 254 usable, /26 prefix = 6 host bits = 64 total / 62 usable, prefix table /24 to /28), 6 Critical BPSC Exam Traps, Day 33 White-Paper Master Sheet, and 25-Question Checkpoint Test.",
    "targets": [
      {
        "section": "Part III – CS",
        "topic": "OSI 7 Layers & TCP/IP Model Mapping",
        "goal": "Master sender/receiver flow, layer PDUs (Bits, Frames, Packets, Segments), and OSI to TCP/IP 4-layer mapping"
      },
      {
        "section": "Part III – CS",
        "topic": "Transport Protocols, Sockets & Port Numbers",
        "goal": "Differentiate TCP vs UDP, master 3-way handshake, Socket (IP+Port), and high-yield ports (80, 443, 21, 25, 53)"
      },
      {
        "section": "Part III – CS",
        "topic": "Protocols & IPv4 / CIDR Subnet Calculations",
        "goal": "Calculate host bits (32 - prefix), total addresses (2^h), and usable hosts (2^h - 2) for /24 through /28 subnets"
      }
    ],
    "introNote": "Today we go one level deeper than Day 32. Your TRE 3.0 directly asks about router, OSI routing/forwarding, switch, SMTP, and subnet mask. TRE 2.0 directly tests TCP as connection-oriented, three-way handshake, sockets, wireless media, and optical fiber. TCP/IP layer mapping, port numbers, DHCP/ARP details, IPv4/CIDR and subnet calculations below are standard networking expansion around those paper-backed topics.",
    "parts": [
      {
        "title": "Part III — The OSI Reference Model & The 4-Layer TCP/IP Model",
        "sections": [
          {
            "title": "1. OSI Model — The Big Mental Picture & Sender/Receiver Flow",
            "blocks": [
              {
                "type": "callout",
                "icon": "🧠",
                "title": "MENTAL PICTURE — Sending a Parcel Across Cities",
                "content": "Imagine sending a parcel from your house to another city.\n\nAt your side (Sender), information moves down:\nAPPLICATION\n    ↓\nPRESENTATION\n    ↓\nSESSION\n    ↓\nTRANSPORT\n    ↓\nNETWORK\n    ↓\nDATA LINK\n    ↓\nPHYSICAL\n\nAt the receiver side, information moves up:\nPHYSICAL\n    ↓\nDATA LINK\n    ↓\nNETWORK\n    ↓\nTRANSPORT\n    ↓\nSESSION\n    ↓\nPRESENTATION\n    ↓\nAPPLICATION"
              },
              {
                "type": "text",
                "content": "💡 SIMPLE CONCEPT\nOSI has 7 layers:\n7 — Application\n6 — Presentation\n5 — Session\n4 — Transport\n3 — Network\n2 — Data Link\n1 — Physical\n\nMemory sentence:\nAll People Seem To Need Data Processing"
              }
            ]
          },
          {
            "title": "2. Physical, 3. Data Link & 4. Network Layers (The Routing Core & TRE 3.0 Trap)",
            "blocks": [
              {
                "type": "text",
                "content": "2. Layer 1 — Physical\nThink: BITS → Cable / Fiber / Radio Signal\nConcerned with physical transmission.\nMemory: Physical → Bits.\nExamples: Cable, Connector, Electrical/optical signal.\n\n3. Layer 2 — Data Link\nMental:\nMAC Address → FRAME → SWITCH\nMemory: Data Link → Frame + MAC + Switch.\nThink: delivery inside the local network.\n\n4. Layer 3 — Network (Crucial Exam Anchor)\nThis is one of your most important exam facts:\nIP Address → PACKET → ROUTER → Routing\nMemory: Network → Packet + IP + Router"
              },
              {
                "type": "callout",
                "icon": "⚠️",
                "title": "TRE 3.0 Routing Layer Exam Trap",
                "content": "TRE 3.0 asks which OSI layer performs routing and forwarding.\nStandard networking answer is Network Layer, but that option is absent from the printed choices, so \"None of the above\" is logically required for that exact paper question.\n\n⚠️ Do not memorize Data Link or Transport as the routing layer!"
              }
            ]
          },
          {
            "title": "5. Transport, 6. Upper Layers & 7. OSI vs TCP/IP Model Mapping",
            "blocks": [
              {
                "type": "text",
                "content": "5. Layer 4 — Transport\nThink: Application A ↕ TCP/UDP ↕ Application B\nImportant concepts: TCP, UDP, Ports.\nMemory: Transport → TCP/UDP + Ports.\n\n6. Upper Layers (Basic Exam Recall)\n• Application → User/network services\n• Presentation → Data representation, encoding/encryption/compression concept\n• Session → Establish/manage communication session (Don't spend excessive time here)."
              },
              {
                "type": "callout",
                "icon": "🔥",
                "title": "OSI Master Memory",
                "content": "Application  → User service\nPresentation → Format / Encryption\nSession      → Session coordination\nTransport    → TCP/UDP / Ports\nNetwork      → IP / Router / Packet\nData Link    → MAC / Switch / Frame\nPhysical     → Bits / Cable"
              },
              {
                "type": "text",
                "content": "7. TCP/IP Model (Standard Networking Expansion)\nThe retrieved TRE question mentions TCP/IP networking but does not itself ask for the TCP/IP layer model.\nA common four-layer representation is:\n• APPLICATION\n• TRANSPORT\n• INTERNET\n• NETWORK ACCESS"
              },
              {
                "type": "callout",
                "icon": "🗺️",
                "title": "OSI vs TCP/IP Model Mapping",
                "content": "OSI Model                        TCP/IP Model\n───────────────────────────────  ───────────────────────────────\nApplication    ┐\nPresentation   ├───(Merged)────→  Application Layer\nSession        ┘\n\nTransport      ────────────────→  Transport Layer\n\nNetwork        ────────────────→  Internet Layer\n\nData Link      ┐\nPhysical       ├───(Merged)────→  Network Access Layer\n\nMemory: TCP/IP = 4-layer practical model"
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Transport Layer: TCP vs UDP, Handshake, Sockets & Port Numbers",
        "sections": [
          {
            "title": "8. TCP vs UDP Deep Comparison & 9. TCP Three-Way Handshake",
            "blocks": [
              {
                "type": "text",
                "content": "8. TCP vs UDP\n\nTCP:\nTRE 2.0 directly treats TCP as:\n• connection-oriented\n• using a three-way handshake\n• receiving application data as a stream.\nMental: Connect → Send reliably → Close.\nMemory: TCP = connection + reliability.\n\nUDP (Standard Expansion):\nNo connection setup → send datagram → lower overhead.\nMemory: UDP = fast/simple, connectionless."
              },
              {
                "type": "callout",
                "icon": "⚖️",
                "title": "TCP vs UDP Comparison Table",
                "content": "Feature               | TCP                        | UDP\n──────────────────────|────────────────────────────|──────────────────────────────\nConnection Type       | Connection-oriented        | Connectionless\nReliability           | Reliability mechanisms     | No delivery guarantee\nData Stream           | Ordered byte stream        | Independent datagrams\nOverhead              | More header & ACK overhead | Lower overhead\nHandshake             | 3-Way Handshake (SYN..ACK) | No handshake\nMental Analogy        | Phone call ☎️              | Postcard ✉️"
              },
              {
                "type": "callout",
                "icon": "🤝",
                "title": "9. TCP Three-Way Handshake (TRE 2.0 Core Anchor)",
                "content": "TRE 2.0 directly mentions a three-way handshake.\n\nCLIENT                               SERVER\n\n SYN   ─────────────────────────────→\n\n       ←───────────────────────────── SYN-ACK\n\n ACK   ─────────────────────────────→\n\nMemory: SYN → SYN-ACK → ACK"
              }
            ]
          },
          {
            "title": "10. What is a Port?, 11. Socket & 12. High-Yield Port Numbers",
            "blocks": [
              {
                "type": "callout",
                "icon": "🧠",
                "title": "MENTAL PICTURE — Port Numbers",
                "content": "IP address gets you to the building.\nPort gets you to the room.\n\n• IP Address → Which computer?\n• PORT       → Which application/service?\n\nExample Server:\nServer\n│\n├── Web service  (Port 80/443)\n├── Mail service (Port 25)\n└── DNS service  (Port 53)\n\nEach service can be associated with a port.\nMemory: IP → machine | Port → application"
              },
              {
                "type": "text",
                "content": "11. Socket (TRE 2.0 Anchor)\nTRE 2.0 directly asks for the endpoint of an inter-process communication flow across a network: Socket.\n\nSimplified mental model:\nIP + Port → Socket endpoint\nMemory: Socket = network communication endpoint."
              },
              {
                "type": "callout",
                "icon": "🎯",
                "title": "12. High-Yield Port Numbers (Memorize Only These)",
                "content": "These are standard networking facts:\n• HTTP   → Port 80\n• HTTPS  → Port 443\n• FTP    → Port 21 (control)\n• SMTP   → Port 25\n• DNS    → Port 53\n• DHCP   → Server: 67 | Client: 68\n\nDon't memorize hundreds of ports!\nWhite-paper trick:\nWeb:  80 / 443\nMail: 25\nDNS:  53\nFTP:  21"
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Core Network Protocols: DNS, DHCP & ARP",
        "sections": [
          {
            "title": "13. DNS, 14. DHCP & 15. ARP Resolution",
            "blocks": [
              {
                "type": "callout",
                "icon": "🧠",
                "title": "MENTAL PICTURE — DNS Resolution",
                "content": "You know: google.com\nbut networking hardware needs an IP address:\ngoogle.com ───(DNS)───→ IP Address\n\nSimple concept: DNS converts/resolves domain names to IP addresses.\nMemory: DNS = Internet phonebook"
              },
              {
                "type": "text",
                "content": "14. DHCP (Dynamic Host Configuration Protocol)\nA new phone joins Wi-Fi:\nPhone → \"I need network settings\" → DHCP → IP configuration.\nMemory: DHCP = automatically gives network configuration/IP.\nWithout automatic configuration, an administrator would need to manually configure static addressing.\n\n15. ARP (Address Resolution Protocol)\nStandard IPv4 networking concept:\nI know IPv4 address → ARP → Find physical MAC address.\nMemory: ARP = IPv4 → MAC.\n(Be careful with this one. Do not reverse it)."
              },
              {
                "type": "callout",
                "icon": "🔥",
                "title": "Master Protocol Triad: Say Aloud 3 Times",
                "content": "DNS  → NAME → IP\nDHCP → GIVE IP / network config\nARP  → IPv4 → MAC"
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — IPv4 Addressing & CIDR Subnetting Calculations",
        "sections": [
          {
            "title": "16. IPv4 Structure & 17. Network Part vs Host Part",
            "blocks": [
              {
                "type": "text",
                "content": "16. IPv4 Address\nIPv4 has: 32 bits.\nUsually written as four decimal octets: 192.168.1.25\nEach octet = 8 bits.\nTherefore: 8 + 8 + 8 + 8 = 32 bits.\nMemory: IPv4 = 4 × 8 = 32 bits.\n\n17. Network Part vs Host Part (Direct TRE 3.0 Anchor)\nThis connects directly to the TRE 3.0 subnet-mask question.\nAn IP address conceptually contains: NETWORK | HOST\nThe subnet mask helps determine where that division occurs.\nTRE 3.0 specifically asks the purpose of a subnet mask, with identifying the network portion of an IP address as the relevant concept."
              }
            ]
          },
          {
            "title": "18. /24 Meaning, 19. /24 Subnet Mask & 20–21. Formulas for Host Bits & Addresses",
            "blocks": [
              {
                "type": "callout",
                "icon": "🔢",
                "title": "18. /24 Meaning & 19. Subnet Mask Representation",
                "content": "Example: 192.168.1.25/24\n/24 means: first 24 bits are the network prefix.\n\nMental:\nIPv4 = 32 bits total\n/24 → 24 Network bits + 8 Host bits\n\nSubnet Mask in Binary:\n11111111.11111111.11111111.00000000\n  (255)     (255)     (255)      (0)\nCount the ones: 8 + 8 + 8 = 24 ones.\nThus: /24 = 255.255.255.0"
              },
              {
                "type": "text",
                "content": "20. Find Host Bits\nEasy formula:\nHost bits (h) = 32 - prefix\n• Example /24: Host bits = 32 - 24 = 8\n• Example /26: Host bits = 32 - 26 = 6\n\n21. Number of Addresses Calculation\nIf there are h host bits:\n• Total addresses = 2^h\n  For /24: h = 8 → 2^8 = 256 total addresses\n• Traditional IPv4 usable-host calculation:\n  Usable hosts = 2^h - 2\n  For /24: 256 - 2 = 254 usable hosts\n  (Subtract 2 because traditionally one address is the Network ID and one is the Broadcast address).\n\nMemory:\nTOTAL  → 2^h\nUSABLE → 2^h - 2"
              }
            ]
          },
          {
            "title": "22. /26 Calculation Example, 23. Easy Prefix Table & 24. Protocol Memory Sheet",
            "blocks": [
              {
                "type": "callout",
                "icon": "🧮",
                "title": "22. /26 Calculation Walkthrough",
                "content": "Given prefix: /26\n1. Host bits = 32 - 26 = 6\n2. Total addresses = 2^6 = 64\n3. Traditional usable hosts = 64 - 2 = 62\n\nMemory: /26 → 6 host bits → 64 total → 62 usable"
              },
              {
                "type": "callout",
                "icon": "📊",
                "title": "23. Easy Prefix Table (High-Yield Subnets)",
                "content": "Prefix | Host Bits (32 - p) | Total Addresses (2^h) | Traditional Usable (2^h - 2)\n───────|────────────────────|───────────────────────|──────────────────────────────\n/24    | 8                  | 256                   | 254\n/25    | 7                  | 128                   | 126\n/26    | 6                  | 64                    | 62\n/27    | 5                  | 32                    | 30\n/28    | 4                  | 16                    | 14"
              },
              {
                "type": "text",
                "content": "24. Protocol Memory Sheet (Paper Anchor Consolidation)\nTRE 3.0 asks SMTP for sending email.\nBuild around that:\n• SMTP  → Send Email\n• FTP   → File Transfer\n• HTTP  → Web\n• HTTPS → Secure Web\n• DNS   → Name → IP\n• DHCP  → Give IP / Configuration\n• ARP   → IPv4 → MAC\n• TCP   → Reliable connection-oriented\n• UDP   → Connectionless"
              },
              {
                "type": "callout",
                "icon": "⚠️",
                "title": "6 Critical BPSC Exam Traps",
                "content": "Trap 1: Router → Network Layer (NOT Data Link).\nTrap 2: Switch → Data Link | Router → Network.\nTrap 3: DNS → Domain → IP | ARP → IPv4 → MAC (Do not swap them!).\nTrap 4: SMTP → SEND mail (Don't choose FTP or HTTP).\nTrap 5: Subnet Mask → identifies network/host split (NOT for converting domain names).\nTrap 6: TCP → connection-oriented | UDP → connectionless."
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Day 33 White-Paper Master Sheet & Rapid Recall",
        "sections": [
          {
            "title": "White-Paper Mental Diagram & High-Yield Summary",
            "blocks": [
              {
                "type": "callout",
                "icon": "🧠",
                "title": "Day 33 White-Paper Master Sheet",
                "content": "Close notes and reproduce:\n\nOSI 7 LAYERS:\n7 Application\n6 Presentation\n5 Session\n4 Transport\n3 Network\n2 Data Link\n1 Physical\n\nCORE LAYER MAPPINGS:\nL4 → TCP / UDP / PORT\nL3 → IP / ROUTER / PACKET\nL2 → MAC / SWITCH / FRAME\nL1 → BITS\n\nKEY PROTOCOL TRUTHS:\nDNS  → NAME → IP\nDHCP → GIVE IP\nARP  → IPv4 → MAC\nSMTP → SEND EMAIL\n\nIPv4 & SUBNETTING:\nIPv4 → 32 bits (4 octets)\n/24  → 24 network, 8 host → 256 total → 254 usable\n/26  → 26 network, 6 host → 64 total → 62 usable\n\nTCP HANDSHAKE:\nSYN → SYN-ACK → ACK"
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 33 Checkpoint Test",
      "subtitle": "Computer Networks: OSI + TCP/IP + TCP vs UDP + Ports + DNS/DHCP/ARP + IPv4/Subnetting",
      "questions": [
        {
          "id": "m-d33-q1",
          "question": "Q1. Which OSI layer is responsible for routing packets?",
          "options": [
            "Physical",
            "Data Link",
            "Network",
            "Presentation",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "The Network Layer (Layer 3) is responsible for logical IP addressing, packet forwarding, and path determination/routing. Correct: (C)."
        },
        {
          "id": "m-d33-q2",
          "question": "Q2. Which is primarily associated with the Data Link Layer?",
          "options": [
            "MAC address",
            "IP routing",
            "TCP port",
            "DNS",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "The Data Link Layer (Layer 2) is responsible for framing, physical MAC addresses, and switches within local area segments. Correct: (A)."
        },
        {
          "id": "m-d33-q3",
          "question": "Q3. Which is primarily associated with the Network Layer?",
          "options": [
            "Router and IP",
            "Switch and MAC only",
            "SMTP only",
            "Keyboard",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "Routers and IP addresses operate at Layer 3 (Network Layer) to navigate packets across interconnected networks. Correct: (A)."
        },
        {
          "id": "m-d33-q4",
          "question": "Q4. TCP and UDP are mainly associated with:",
          "options": [
            "Physical Layer",
            "Data Link Layer",
            "Network Layer",
            "Transport Layer",
            "None"
          ],
          "correctAnswer": 3,
          "explanation": "TCP and UDP are the primary transport protocols operating at Layer 4 (Transport Layer) to provide end-to-end communication. Correct: (D)."
        },
        {
          "id": "m-d33-q5",
          "question": "Q5. Which TCP/IP layer roughly corresponds to the OSI Network Layer?",
          "options": [
            "Application",
            "Internet",
            "Transport",
            "Network Access",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "In the standard 4-layer TCP/IP architectural model, the Internet Layer directly corresponds to the OSI Network Layer (handling IP routing). Correct: (B)."
        },
        {
          "id": "m-d33-q6",
          "question": "Q6. TCP is:",
          "options": [
            "Connection-oriented",
            "Connectionless only",
            "A routing protocol",
            "A file system",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "TCP (Transmission Control Protocol) is connection-oriented; it establishes a logical connection via a 3-way handshake before transmitting data. Correct: (A)."
        },
        {
          "id": "m-d33-q7",
          "question": "Q7. UDP is generally:",
          "options": [
            "Connection-oriented",
            "Connectionless",
            "A database protocol",
            "A subnet mask",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "UDP (User Datagram Protocol) is connectionless; it transmits independent datagrams without establishing a prior connection or delivery guarantee. Correct: (B)."
        },
        {
          "id": "m-d33-q8",
          "question": "Q8. Correct TCP handshake order is:",
          "options": [
            "ACK → SYN → SYN-ACK",
            "SYN → SYN-ACK → ACK",
            "SYN-ACK → SYN → ACK",
            "ACK → ACK → SYN",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "The TCP 3-way handshake sequence is: Client sends SYN → Server responds with SYN-ACK → Client acknowledges with ACK. Correct: (B)."
        },
        {
          "id": "m-d33-q9",
          "question": "Q9. A port number primarily identifies:",
          "options": [
            "Network application/service on a host",
            "Physical cable",
            "MAC manufacturer only",
            "Subnet mask",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "While an IP address identifies the machine/host, a port number identifies the specific application or process service running on that host. Correct: (A)."
        },
        {
          "id": "m-d33-q10",
          "question": "Q10. Which is a network communication endpoint?",
          "options": [
            "Socket",
            "Stack only",
            "Array",
            "Heap",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "In networking and tested in TRE 2.0, an endpoint of an inter-process communication flow across a network is called a Socket (IP address + Port number). Correct: (A)."
        },
        {
          "id": "m-d33-q11",
          "question": "Q11. Standard HTTP port is:",
          "options": [
            "21",
            "25",
            "53",
            "80",
            "None"
          ],
          "correctAnswer": 3,
          "explanation": "Standard unencrypted web communication over HTTP uses well-known TCP port 80. Correct: (D)."
        },
        {
          "id": "m-d33-q12",
          "question": "Q12. Standard HTTPS port is:",
          "options": [
            "110",
            "443",
            "25",
            "21",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Secure web communication over HTTPS (HTTP encrypted via TLS/SSL) uses well-known port 443. Correct: (B)."
        },
        {
          "id": "m-d33-q13",
          "question": "Q13. SMTP is mainly used to:",
          "options": [
            "Send email",
            "Resolve domain names",
            "Assign IP addresses",
            "Map IPv4 to MAC",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "SMTP (Simple Mail Transfer Protocol, port 25) is specifically designed and used to send email messages across networks (tested in TRE 3.0). Correct: (A)."
        },
        {
          "id": "m-d33-q14",
          "question": "Q14. DNS performs:",
          "options": [
            "Domain name → IP address resolution",
            "IPv4 → MAC resolution",
            "Automatic IP allocation",
            "File transfer",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "DNS (Domain Name System, port 53) translates user-friendly hostnames/domain names into numerical IP addresses. Correct: (A)."
        },
        {
          "id": "m-d33-q15",
          "question": "Q15. DHCP is mainly associated with:",
          "options": [
            "Automatic IP/network configuration",
            "Sending email",
            "Web encryption",
            "MAC-to-domain conversion",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "DHCP (Dynamic Host Configuration Protocol, ports 67/68) automatically allocates IP addresses and network parameters to client devices joining a network. Correct: (A)."
        },
        {
          "id": "m-d33-q16",
          "question": "Q16. ARP is best remembered as:",
          "options": [
            "Domain → IP",
            "IPv4 → MAC",
            "MAC → Domain",
            "Port → IP",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "ARP (Address Resolution Protocol) resolves a known logical IPv4 address to its corresponding physical hardware MAC address. Correct: (B)."
        },
        {
          "id": "m-d33-q17",
          "question": "Q17. IPv4 address length is:",
          "options": [
            "16 bits",
            "32 bits",
            "48 bits",
            "64 bits",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "An IPv4 address consists of exactly 32 bits (4 octets of 8 bits each). Correct: (B)."
        },
        {
          "id": "m-d33-q18",
          "question": "Q18. An IPv4 address contains how many 8-bit octets?",
          "options": [
            "2",
            "4",
            "6",
            "8",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "An IPv4 address is formatted as 4 decimal octets separated by dots (e.g., 192.168.1.1), where each octet is 8 bits (4 × 8 = 32 bits). Correct: (B)."
        },
        {
          "id": "m-d33-q19",
          "question": "Q19. /24 means:",
          "options": [
            "24 host bits",
            "24 network-prefix bits",
            "24 total IP addresses",
            "IPv4 has 24 total bits",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "In CIDR slash notation, /24 indicates that the first 24 bits represent the network prefix, leaving 32 - 24 = 8 bits for host addressing. Correct: (B)."
        },
        {
          "id": "m-d33-q20",
          "question": "Q20. A /24 network has how many host bits?",
          "options": [
            "4",
            "6",
            "8",
            "24",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Using the formula: Host bits = 32 - prefix = 32 - 24 = 8 host bits. Correct: (C)."
        },
        {
          "id": "m-d33-q21",
          "question": "Q21. /24 corresponds to which subnet mask?",
          "options": [
            "255.0.0.0",
            "255.255.0.0",
            "255.255.255.0",
            "255.255.255.255",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "/24 represents 24 contiguous ones followed by 8 zeros: 11111111.11111111.11111111.00000000 = 255.255.255.0. Correct: (C)."
        },
        {
          "id": "m-d33-q22",
          "question": "Q22. A /26 prefix leaves how many host bits?",
          "options": [
            "4",
            "6",
            "8",
            "26",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Host bits = 32 - prefix = 32 - 26 = 6 host bits. Correct: (B)."
        },
        {
          "id": "m-d33-q23",
          "question": "Q23. Using the traditional subnet formula, /26 has how many usable host addresses?",
          "options": [
            "30",
            "62",
            "64",
            "126",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "With 6 host bits: Total addresses = 2^6 = 64. Usable hosts = 2^h - 2 = 64 - 2 = 62 (excluding network ID and broadcast). Correct: (B)."
        },
        {
          "id": "m-d33-q24",
          "question": "Q24. Which matching is correct?",
          "options": [
            "DNS → Name to IP",
            "DHCP → Automatic IP configuration",
            "ARP → IPv4 to MAC",
            "More than one of the above",
            "None"
          ],
          "correctAnswer": 3,
          "explanation": "All three matchings are correct: DNS resolves name to IP, DHCP assigns IP configurations, and ARP resolves IPv4 to MAC hardware address. Hence (D) More than one of the above is correct. Correct: (D)."
        },
        {
          "id": "m-d33-q25",
          "question": "Q25. In the exact TRE 3.0 OSI question, the true routing layer is absent from the printed A–C choices. Therefore the logically appropriate paper option is:",
          "options": [
            "Data Link Layer",
            "Transport Layer",
            "Physical Layer",
            "More than one of A–C",
            "None of the above"
          ],
          "correctAnswer": 4,
          "explanation": "In the actual TRE 3.0 question, the options listed were Data Link, Transport, and Physical. Since routing and forwarding are strictly performed by the Network Layer (which was missing from the choices), the logically appropriate answer on the paper is (E) None of the above. Correct: (E)."
        }
      ]
    }
  },
  {
    "dayNumber": 34,
    "dayId": "day-34",
    "badge": "Day 34",
    "title": "TRE 4.0 — Day 34",
    "unit": "Part III (CS) • Data Communication: Simplex/Duplex Modes, Guided/Unguided Media, Multiplexing (FDM/TDM) & Switching",
    "targetTime": "20–25 mins read + 25 mins test",
    "summary": "Data Communication Fundamentals (TRE 2.0 Paper-Backed Core & NCERT Class XII): Data Communication Definition & 5 Components (Sender, Message, Medium, Receiver, Protocol [SMMRP]), Transmission Modes (Simplex one-way [keyboard-to-computer TRE 2.0], Half-Duplex turn-based [walkie-talkie], Full-Duplex simultaneous [telephone]), Transmission Media (Guided: Twisted pair copper, Coaxial shielded, Optical fiber light pulses [highest speed TRE 2.0]; Unguided: Radio waves, Microwaves line-of-sight/satellite, Infrared TV remote [TRE 2.0 wireless media]), Multiplexing Techniques (FDM frequency division vs TDM time slots, TDM frame terminology trap), Switching Techniques (Circuit Switching dedicated path vs Packet Switching shared network packets & reassembly), Channel Performance (Bandwidth capacity vs Bit rate bps), TRE 2.0 TCP & Socket Review, Day 34 White-Paper Master Sheet & 8 Exam Traps, and 25-Question Checkpoint Test.",
    "targets": [
      {
        "section": "Part III – CS",
        "topic": "Components & Communication Modes",
        "goal": "Master the 5 components (SMMRP) and differentiate Simplex (one-way), Half-Duplex (turn-based), and Full-Duplex (simultaneous)"
      },
      {
        "section": "Part III – CS",
        "topic": "Transmission Media (Guided vs Unguided)",
        "goal": "Compare Twisted Pair, Coaxial, and Optical Fiber (highest speed), plus wireless media (Radio, Microwave, Infrared)"
      },
      {
        "section": "Part III – CS",
        "topic": "Multiplexing & Switching Techniques",
        "goal": "Contrast FDM (frequency) vs TDM (time slots), TDM frame structure, and Circuit Switching (dedicated) vs Packet Switching (shared)"
      }
    ],
    "introNote": "Today has several direct TRE 2.0 anchors. The paper asks: computer-to-keyboard communication type, wireless media, TDM, TCP, socket, and the fastest transmission medium. Your NCERT Class XII syllabus also explicitly includes data communication components, capacity, types of communication, switching techniques, transmission media, mobile technologies and protocols.",
    "parts": [
      {
        "title": "Part III — Data Communication Foundations & Transmission Modes",
        "sections": [
          {
            "title": "1. Data Communication & 2. Five Basic Components (SMMRP)",
            "blocks": [
              {
                "type": "callout",
                "icon": "🧠",
                "title": "MENTAL PICTURE — Sending a Message",
                "content": "Imagine sending a WhatsApp message:\nYOU → Message → Network → FRIEND\n\nFor communication, think of five things:\n• SENDER\n• MESSAGE\n• MEDIUM\n• RECEIVER\n• PROTOCOL\n\nMemory mnemonic: S M M R P"
              },
              {
                "type": "text",
                "content": "💡 SIMPLE CONCEPT\nData communication = transfer of data between devices through a communication medium.\n\nFive Basic Components:\n1. Sender — Device that creates and transmits data (computer, workstation, phone).\n2. Message — Information or data to be communicated (text, number, audio, video).\n3. Medium — Physical transmission path over which message travels (cables, radio waves).\n4. Receiver — Device that receives the transmitted message.\n5. Protocol — Set of rules that governs data communication (without a protocol, two devices may be connected but cannot communicate)."
              }
            ]
          },
          {
            "title": "3–6. Direction of Communication: Simplex, Half-Duplex & Full-Duplex",
            "blocks": [
              {
                "type": "text",
                "content": "Three fundamental communication directions:\n• Simplex\n• Half-Duplex\n• Full-Duplex\n\n4. Simplex (Direct TRE 2.0 Anchor)\nOne-way road: A ─────────→ B (Only one side can send).\nClassic Example: Keyboard ─────→ Computer.\nTRE 2.0 directly asks for the communication mode between a computer and keyboard; the textbook answer is Simplex.\nMemory: Simplex = ONE direction.\n\n5. Half-Duplex\nBoth sides can communicate, but NOT simultaneously.\nMental: A ─────→ B, then A ←───── B.\nClassic Example: Walkie-talkie (One person speaks: \"Over\", then the other speaks).\nMemory: Half-duplex = BOTH, but ONE AT A TIME.\n\n6. Full-Duplex\nBoth sides can communicate at the same time.\nMental: A ←────────→ B.\nClassic Conceptual Example: Telephone conversation.\nMemory: Full-duplex = BOTH simultaneously."
              },
              {
                "type": "callout",
                "icon": "🔥",
                "title": "Simplex vs Half vs Full Comparison",
                "content": "SIMPLEX:\nA ─────→ B (ONE WAY: Keyboard → PC)\n\nHALF DUPLEX:\nA ─────→ B\nA ←───── B (BOTH, one at a time: Walkie-talkie)\n\nFULL DUPLEX:\nA ←────→ B (BOTH AT SAME TIME: Telephone)\n\nWhite-paper sentence: Simplex ONE, Half TURN, Full TOGETHER"
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Transmission Media: Guided (Wired) vs Unguided (Wireless)",
        "sections": [
          {
            "title": "7–11. Guided / Wired Media: Twisted Pair, Coaxial & Optical Fiber",
            "blocks": [
              {
                "type": "text",
                "content": "Transmission media are divided into:\nTRANSMISSION MEDIA\n  ├── GUIDED / WIRED (bounded)\n  └── UNGUIDED / WIRELESS (unbounded)\n\n8. Guided / Wired Media (High-Yield Three):\n• Twisted Pair: Two insulated copper wires twisted together to reduce crosstalk/interference. Cheap, flexible, easy to install, common in LANs. Lower bandwidth and more susceptible to electromagnetic interference (EMI) than fiber.\n• Coaxial Cable: Central copper conductor surrounded by dielectric insulation, metallic shield, and outer jacket. Better shielding against EMI, historically common in cable TV and early Ethernet.\n• Optical Fiber: Transmits data as LIGHT pulses through glass or plastic cores."
              },
              {
                "type": "callout",
                "icon": "💡",
                "title": "Optical Fiber (Direct TRE 2.0 Anchor)",
                "content": "Key exam facts:\n• Uses LIGHT reflection (Total Internal Reflection)\n• Highest bandwidth & highest transmission speed\n• Long-distance transmission with low attenuation\n• Completely immune to electromagnetic interference (EMI)\n\nTRE 2.0 directly asks which among coaxial, twisted pair, and optical fiber provides the highest transmission speed: Optical Fiber.\nMemory: Fiber = LIGHT = FASTEST"
              },
              {
                "type": "callout",
                "icon": "🔥",
                "title": "Wired Media Speed Order",
                "content": "Twisted Pair  (Lowest cost, moderate speed)\n     ↓\nCoaxial Cable (Moderate speed, good shielding)\n     ↓\nOptical Fiber (Highest speed, light transmission, highest bandwidth)"
              }
            ]
          },
          {
            "title": "12–15. Unguided / Wireless Media: Radio, Microwave & Infrared",
            "blocks": [
              {
                "type": "text",
                "content": "TRE 2.0 directly lists Radio waves, Microwaves, and Infrared as wireless transmission media possibilities.\n\n13. Radio Waves\n• Omnidirectional antennas emitting electromagnetic waves in all directions.\n• Penetrable through walls, useful for wireless multicasting, radio, and mobile communications.\nMemory: Radio = wireless electromagnetic transmission.\n\n14. Microwave\n• Directional line-of-sight communication between towers (terrestrial microwave).\n• Also used for satellite communication links where signals travel to orbiting satellites.\nMemory: Microwave → directional / satellite-type communication.\n\n15. Infrared\n• Extremely high frequency, cannot penetrate solid walls.\n• Used for short-range, line-of-sight local communication.\nClassic Example: TV remote control.\nMemory: Infrared = remote control / short-range."
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Multiplexing & Switching Techniques",
        "sections": [
          {
            "title": "16–18. Multiplexing: FDM vs TDM & The TRE 2.0 TDM Trap",
            "blocks": [
              {
                "type": "callout",
                "icon": "🧠",
                "title": "MENTAL PICTURE — Multiplexing Road Sharing",
                "content": "Imagine four people needing to use one shared road:\nA ─┐\nB ─┤\nC ─┼── ONE COMMUNICATION CHANNEL\nD ─┘\nMultiplexing allows multiple signals or data streams to share a single transmission channel."
              },
              {
                "type": "text",
                "content": "17. FDM — Frequency Division Multiplexing\n• Divides the channel bandwidth into distinct non-overlapping frequency bands.\n• Different users transmit simultaneously on separate frequency carriers.\nMental: Channel = | F1 | F2 | F3 | F4 | (Like separate lanes on a highway).\nMemory: FDM → Frequency divided.\n\n18. TDM — Time Division Multiplexing\n• Divides the channel time into discrete time slots.\n• Users transmit on the entire frequency band, but taking sequential turns.\nMental: TIME → | A | B | C | A | B | C | (Same lane, different turns).\nMemory: TDM → Time slots."
              },
              {
                "type": "callout",
                "icon": "⚠️",
                "title": "Important TRE 2.0 TDM Terminology Trap",
                "content": "TRE 2.0 Q147 asks about TDM slot division.\nStandard networking textbook terminology is universally:\nTDM FRAME\n  ↓ is divided into\nTIME SLOTS\n\n(A TDM frame contains multiple time slots assigned to different users, NOT the reverse).\nMemory: Frame contains Time Slots | FDM = Frequency lanes, TDM = Time turns."
              }
            ]
          },
          {
            "title": "19–21. Switching: Circuit Switching vs Packet Switching",
            "blocks": [
              {
                "type": "text",
                "content": "19. Switching Concepts\nTechniques used to route information from source to destination across multiple network nodes.\n\n20. Circuit Switching\n• A dedicated, physical communication path is established prior to data transfer and reserved for the duration of the session.\n• Classic example: Traditional public switched telephone network (PSTN).\nMemory: Circuit = Dedicated path.\n\n21. Packet Switching\n• Messages are broken down into discrete smaller units called packets.\n• Packets travel independently through shared network links, potentially taking different routes, and are reassembled at the destination.\n• Classic example: Modern Internet (IP) networking.\nMemory: Packet switching = Break → Send → Reassemble."
              },
              {
                "type": "callout",
                "icon": "⚖️",
                "title": "Circuit Switching vs Packet Switching Comparison",
                "content": "Feature           | Circuit Switching               | Packet Switching\n──────────────────|─────────────────────────────────|───────────────────────────────\nPath Type         | Dedicated physical path         | Shared, dynamic network links\nSetup Phase       | Pre-established connection call | No pre-reserved dedicated path\nResource Usage    | Reserved (wasted during pauses) | Highly efficient dynamic sharing\nClassic Analogy   | Traditional telephone network   | Modern Internet (IP packets)\nWhite-Paper Note  | Dedicated road                  | Shared road + small packets"
              }
            ]
          },
          {
            "title": "22–25. Channel Metrics & TRE 2.0 TCP / Socket Anchors",
            "blocks": [
              {
                "type": "text",
                "content": "22. Bandwidth\n• Data-carrying capacity of a communication channel.\n• Mental: Small pipe = less data; Big pipe = more data.\nMemory: Bandwidth = capacity.\n\n23. Bit Rate\n• The number of bits transmitted per second.\n• Expressed in: bps, Kbps, Mbps, Gbps.\nMemory: Bit rate = bits / second.\n\n24. TCP Anchor (Direct TRE 2.0 Question)\nTRE 2.0 tests TCP properties with \"More than one of the above\":\n• Connection-oriented\n• 3-Way Handshake (SYN → SYN-ACK → ACK)\n• Stream of application bytes.\n\n25. Socket Anchor (Direct TRE 2.0 Question)\nTRE 2.0 directly asks for an endpoint of an inter-process communication flow across a network: Socket (IP + Port)."
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Day 34 White-Paper Master Sheet & Exam Traps",
        "sections": [
          {
            "title": "Day 34 White-Paper Master Sheet & 8 Critical Traps",
            "blocks": [
              {
                "type": "callout",
                "icon": "🧠",
                "title": "Day 34 White-Paper Master Sheet",
                "content": "DATA COMMUNICATION:\nSender → Message → Medium → Receiver (governed by Protocol)\n\nDIRECTION OF COMMUNICATION:\n• Simplex      → One way (Keyboard → Computer)\n• Half-Duplex  → Both ways, one at a time (Walkie-talkie)\n• Full-Duplex  → Both ways simultaneously (Telephone)\n\nTRANSMISSION MEDIA:\n• Guided/Wired:   Twisted Pair → Coaxial → Optical Fiber (LIGHT, fastest)\n• Unguided/Radio: Radio waves, Microwaves (directional/satellite), Infrared (TV remote)\n\nMULTIPLEXING:\n• FDM → Divide Frequency bands (parallel lanes)\n• TDM → Divide Time slots (Frame contains Time Slots)\n\nSWITCHING:\n• Circuit Switching → Dedicated path (Telephone)\n• Packet Switching  → Packets + shared network (Internet)\n\nPERFORMANCE:\n• Bandwidth = Channel capacity\n• Bit rate  = Bits per second (bps)"
              },
              {
                "type": "callout",
                "icon": "⚠️",
                "title": "8 Critical Day 34 Exam Traps",
                "content": "1. Keyboard → Computer in TRE 2.0 is Simplex (one-way only).\n2. Half-duplex is NOT one-way: both communicate, but one at a time.\n3. Full-duplex = both directions simultaneously.\n4. Optical fiber is faster than twisted pair and coaxial in TRE 2.0.\n5. Radio, microwave, and infrared are all wireless media.\n6. FDM = Frequency; TDM = Time.\n7. Standard TDM: A Frame contains Time Slots.\n8. Circuit switching = dedicated path; Packet switching = shared network."
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 34 Checkpoint Test",
      "subtitle": "Data Communication, Duplex Modes, Media, FDM/TDM Multiplexing & Switching",
      "questions": [
        {
          "id": "m-d34-q1",
          "question": "Q1. Data communication mainly refers to:",
          "options": [
            "Transfer of data between communicating devices",
            "Sorting an array",
            "Database normalization",
            "Compilation only",
            "None of the above"
          ],
          "correctAnswer": 0,
          "explanation": "Data communication is the exchange/transfer of data between devices across a transmission medium. Correct: (A)."
        },
        {
          "id": "m-d34-q2",
          "question": "Q2. Which is a basic component of data communication?",
          "options": [
            "Sender",
            "Receiver",
            "Medium",
            "More than one of the above",
            "None"
          ],
          "correctAnswer": 3,
          "explanation": "The five core components are Sender, Message, Medium, Receiver, and Protocol (SMMRP). Therefore, (D) More than one of the above is correct. Correct: (D)."
        },
        {
          "id": "m-d34-q3",
          "question": "Q3. In simplex transmission, communication occurs:",
          "options": [
            "In one direction only",
            "In both directions simultaneously",
            "In both directions one at a time",
            "Without any medium",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "Simplex mode is unidirectional: information travels in one direction only from sender to receiver. Correct: (A)."
        },
        {
          "id": "m-d34-q4",
          "question": "Q4. In the basic TRE 2.0 model, keyboard-to-computer communication is:",
          "options": [
            "Simplex",
            "Half-duplex",
            "Full-duplex",
            "Multiplex",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "In textbook networking and as tested in TRE 2.0, keyboard-to-computer communication is the classic example of Simplex transmission. Correct: (A)."
        },
        {
          "id": "m-d34-q5",
          "question": "Q5. Walkie-talkie communication is a common example of:",
          "options": [
            "Simplex",
            "Half-duplex",
            "Full-duplex",
            "FDM only",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "In walkie-talkie communication, both parties can transmit and receive, but only one party can speak at a time (Half-duplex). Correct: (B)."
        },
        {
          "id": "m-d34-q6",
          "question": "Q6. A normal telephone conversation is a conceptual example of:",
          "options": [
            "Simplex",
            "Half-duplex",
            "Full-duplex",
            "TDM only",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "A telephone conversation allows both parties to speak and hear each other simultaneously (Full-duplex). Correct: (C)."
        },
        {
          "id": "m-d34-q7",
          "question": "Q7. Which matching is correct?",
          "options": [
            "Simplex → one way",
            "Half-duplex → both directions, one at a time",
            "Full-duplex → both directions simultaneously",
            "More than one of the above",
            "None"
          ],
          "correctAnswer": 3,
          "explanation": "All three matchings are definitionally correct. Hence (D) More than one of the above is correct. Correct: (D)."
        },
        {
          "id": "m-d34-q8",
          "question": "Q8. Which is guided/wired transmission media?",
          "options": [
            "Twisted pair",
            "Coaxial cable",
            "Optical fiber",
            "More than one of the above",
            "None"
          ],
          "correctAnswer": 3,
          "explanation": "Twisted pair, coaxial cable, and optical fiber are all physical/guided transmission media. Correct: (D)."
        },
        {
          "id": "m-d34-q9",
          "question": "Q9. Which uses light to transmit information?",
          "options": [
            "Twisted pair",
            "Optical fiber",
            "Coaxial cable",
            "Radio only",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Optical fiber transmits digital information as pulses of light through high-purity glass or plastic fibers via total internal reflection. Correct: (B)."
        },
        {
          "id": "m-d34-q10",
          "question": "Q10. Among twisted pair, coaxial and optical fiber, the TRE 2.0 paper's highest-speed choice is:",
          "options": [
            "Twisted pair",
            "Coaxial",
            "Optical fiber",
            "All identical",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Optical fiber provides vastly higher transmission speed, bandwidth, and resistance to interference compared to electrical copper cables. Correct: (C)."
        },
        {
          "id": "m-d34-q11",
          "question": "Q11. Which are wireless media?",
          "options": [
            "Radio waves",
            "Microwaves",
            "Infrared",
            "More than one of the above",
            "None"
          ],
          "correctAnswer": 3,
          "explanation": "Radio waves, microwaves, and infrared are all unbounded wireless transmission media directly tested in TRE 2.0. Hence (D) is correct. Correct: (D)."
        },
        {
          "id": "m-d34-q12",
          "question": "Q12. Which is commonly associated with a TV remote-control example?",
          "options": [
            "Infrared",
            "Optical fiber",
            "Twisted pair",
            "Coaxial",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "TV remote controls use Infrared signals for short-range, line-of-sight communication. Correct: (A)."
        },
        {
          "id": "m-d34-q13",
          "question": "Q13. FDM stands for:",
          "options": [
            "Frequency Division Multiplexing",
            "Frame Data Multiplexing",
            "Full Duplex Modulation",
            "Frequency Data Mapping",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "FDM stands for Frequency Division Multiplexing, where the total bandwidth is divided into separate frequency sub-bands. Correct: (A)."
        },
        {
          "id": "m-d34-q14",
          "question": "Q14. TDM stands for:",
          "options": [
            "Transmission Data Mode",
            "Time Division Multiplexing",
            "Total Data Multiplexing",
            "Time Duplex Method",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "TDM stands for Time Division Multiplexing, where multiple signals share a channel by taking designated time slots. Correct: (B)."
        },
        {
          "id": "m-d34-q15",
          "question": "Q15. FDM separates users mainly by:",
          "options": [
            "Time",
            "Frequency",
            "IP address",
            "MAC address",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "FDM separates user channels by allocating distinct frequency ranges. Correct: (B)."
        },
        {
          "id": "m-d34-q16",
          "question": "Q16. TDM separates channel use mainly by:",
          "options": [
            "Frequency bands",
            "Time slots",
            "IP addresses",
            "Optical wavelength only",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "TDM separates signals by allocating discrete time slices or slots in round-robin fashion. Correct: (B)."
        },
        {
          "id": "m-d34-q17",
          "question": "Q17. In standard TDM terminology:",
          "options": [
            "Frames contain time slots",
            "Time slots contain frames",
            "There are no frames",
            "TDM means frequency division",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "In standard computer network literature, a TDM frame consists of multiple discrete time slots assigned to different senders. Correct: (A)."
        },
        {
          "id": "m-d34-q18",
          "question": "Q18. Circuit switching is best remembered as:",
          "options": [
            "Dedicated communication path",
            "Every bit follows a different protocol",
            "Database locking",
            "No connection ever exists",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "Circuit switching establishes and reserves a dedicated end-to-end physical communication path between sender and receiver for the entire duration of the call. Correct: (A)."
        },
        {
          "id": "m-d34-q19",
          "question": "Q19. Packet switching involves:",
          "options": [
            "Breaking data into packets",
            "Sending packets through a shared network",
            "Reassembling received information",
            "More than one of the above",
            "None"
          ],
          "correctAnswer": 3,
          "explanation": "In packet switching, data is chunked into discrete packets, transmitted independently over shared network routes, and reassembled at the destination. Correct: (D)."
        },
        {
          "id": "m-d34-q20",
          "question": "Q20. Which is most closely associated with Internet communication?",
          "options": [
            "Packet switching",
            "Only dedicated circuit switching",
            "Bubble sort",
            "Paging",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "The Internet is fundamentally a packet-switched network operating on the TCP/IP protocol suite. Correct: (A)."
        },
        {
          "id": "m-d34-q21",
          "question": "Q21. Bandwidth is best understood at basic exam level as:",
          "options": [
            "Communication-channel capacity",
            "Number of CPU registers",
            "Database table size only",
            "Number of Python loops",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "Bandwidth represents the maximum data-carrying capacity or frequency range of a communication channel. Correct: (A)."
        },
        {
          "id": "m-d34-q22",
          "question": "Q22. Mbps is a unit related to:",
          "options": [
            "Data rate",
            "Voltage",
            "File name",
            "IP class only",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "Mbps (Megabits per second) is a standard unit of digital transmission speed or data rate. Correct: (A)."
        },
        {
          "id": "m-d34-q23",
          "question": "Q23. Which statement about TCP matches the TRE 2.0 paper?",
          "options": [
            "It is connection-oriented",
            "It uses a three-way handshake",
            "More than one of the above",
            "It is purely connectionless",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "In TRE 2.0, TCP is tested as both connection-oriented and utilizing a 3-way handshake, making (C) More than one of the above the correct answer. Correct: (C)."
        },
        {
          "id": "m-d34-q24",
          "question": "Q24. An endpoint of network inter-process communication is called:",
          "options": [
            "Socket",
            "Stack",
            "Queue",
            "Frame",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "In network programming and tested in TRE 2.0, the endpoint of an inter-process communication link is a Socket. Correct: (A)."
        },
        {
          "id": "m-d34-q25",
          "question": "Q25. Which master memory rule is correct?",
          "options": [
            "FDM → Frequency, TDM → Time",
            "Simplex → simultaneous two-way",
            "Optical fiber → electrical copper only",
            "Packet switching → dedicated path only",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "FDM divides frequency and TDM divides time. Simplex is one-way, optical fiber uses light, and packet switching uses shared paths. Correct: (A)."
        }
      ]
    }
  },
  {
    "dayNumber": 35,
    "dayId": "day-35",
    "badge": "Day 35",
    "title": "TRE 4.0 — Day 35",
    "unit": "Part III (CS) • 🔐 Network Security: Malware, Phishing, Ransomware, Firewall, HTTPS & Sniffing Mitigation",
    "targetTime": "20–25 mins read + 20 mins test",
    "summary": "Network Security Core Foundations (NCERT Class XI & XII and TRE 2.0 Paper-Backed Focus): Malware Classification (Malicious software, Virus self-replicating file infector, Worm network self-propagator, Trojan Horse deceptive disguise, Ransomware encryption & ransom demands, Spyware surveillance), Cybercrime & Social Engineering (Unauthorized hacking, White-Hat ethical vulnerability reporting vs Black-Hat malicious crackers, Phishing deceptive fake sites/emails to steal credentials, Identity Theft fraudulent impersonation, Spam unsolicited bulk messaging), Defense & Protection Mechanisms (Antivirus malware scanning/removal, Firewall network traffic filtering gateway, HTTP vs HTTPS encrypted web on port 443 with TLS, Cookies browser session tokens vs virus myth), Sniffing Traffic Analysis (Packet capture observation, Switched Networks mitigation over broadcast hubs [TRE 2.0 Anchor]), Cyber-Safety Hygiene, Day 35 White-Paper Master Sheet & 6 Critical Traps, and 20-Question Checkpoint Test.",
    "targets": [
      {
        "section": "Part III – CS",
        "topic": "Malware Taxonomies & Social Engineering",
        "goal": "Distinguish Virus (replicates/infects), Worm (network-spreading), Trojan (disguised), Ransomware (encrypts + ransom), and Phishing (fake credential traps)"
      },
      {
        "section": "Part III – CS",
        "topic": "Network Defense: Firewall, Antivirus & HTTPS",
        "goal": "Master Firewall (traffic filtering), Antivirus (malware protection), HTTPS (TLS port 443), and Cookies (browser state, not virus)"
      },
      {
        "section": "Part III – CS",
        "topic": "Sniffing Mitigation & Cyber-Safety Rules",
        "goal": "Recall TRE 2.0 Sniffing mitigation via Switched Networks and NCERT cyber-hygiene rules (backups, updates, passwords)"
      }
    ],
    "introNote": "Treat this as the essential security foundation lesson before Day 36's networking revision. Your NCERT material directly covers virus/malware, hacking, phishing, ransomware and cybercrime prevention (NCERT kecs111, lecs1ps). The Class XII syllabus explicitly includes Antivirus, Spam, HTTP vs HTTPS, Firewall, Cookies, Hackers/Crackers and Network Security Threats. TRE 2.0 directly tests sniffing mitigation via switched networks.",
    "parts": [
      {
        "title": "Part III — Malware Types & Social Engineering Threats",
        "sections": [
          {
            "title": "1–5. Malware Taxonomy: Virus, Worm, Trojan Horse & Ransomware",
            "blocks": [
              {
                "type": "callout",
                "icon": "🧠",
                "title": "MENTAL PICTURE — Malware Taxonomies",
                "content": "Imagine a box labelled:\nMALWARE\n│\n├── Virus      (Infects files & replicates)\n├── Worm       (Self-spreads across networks)\n├── Trojan     (Disguised as useful software)\n├── Ransomware (Encrypts files & demands ransom)\n└── Spyware    (Silently observes & spies)\n\nMemory: MAL + WARE = MALICIOUS SOFTWARE"
              },
              {
                "type": "text",
                "content": "1. Malware (NCERT kecs111)\nNCERT defines malware as software designed to gain unauthorized access to computer systems or cause damage.\n\n2. Virus (NCERT kecs111)\nNCERT describes a virus as malicious code that attaches to files, can copy itself (self-replicate), and may destroy data or corrupt a system.\nMental: Normal File + VIRUS → Infected File.\nMemory: Virus → infects + copies.\n\n3. Worm (Standard Networking Expansion)\nA worm is a standalone malicious program that replicates without attaching to host files and spreads across networks.\nMental: PC1 → PC2 → PC3 → PC4 (WORM spreading autonomously).\nMemory: Worm walks through network.\n\n4. Trojan Horse\nTricks users by appearing legitimate or beneficial (e.g. \"Free Utility Game\") while concealing malicious code inside.\nMemory: Trojan = GOOD outside, BAD inside.\n\n5. Ransomware (NCERT kecs111)\nNCERT directly explains ransomware as software that blocks access to a system or files, commonly by encrypting data, and then demands payment (ransom) to restore access.\nMental: YOUR FILES → ENCRYPTED 🔒 → PAY MONEY.\nMemory: Ransomware = LOCK + RANSOM."
              }
            ]
          },
          {
            "title": "6–9. Hacking, Phishing, Identity Theft & Spam",
            "blocks": [
              {
                "type": "text",
                "content": "6. Hacking (NCERT kecs111)\nNCERT defines hacking as unauthorized access to a computer, network, or digital system.\n• White-Hat Hacker (Ethical): Finds vulnerabilities with permission and reports them to improve security.\n• Black-Hat Hacker / Cracker: Maliciously breaks into systems without authorization to steal or destroy data.\nMemory: White = protect | Black = attack.\n\n7. Phishing (High-Yield NCERT kecs111)\nNCERT defines phishing as the fraudulent attempt to obtain sensitive information (usernames, passwords, credit card/bank details, OTPs) by disguising as a trustworthy entity in fake emails or spoofed websites."
              },
              {
                "type": "callout",
                "icon": "🎣",
                "title": "Mental Picture: Phishing Trap",
                "content": "Fake Message:\n\"Your bank account will be blocked! CLICK HERE NOW\"\n       ↓\nFake Website asks:\n• Username / Password\n• Debit card details & OTP\n\nMemory: Phishing = fishing for your confidential information"
              },
              {
                "type": "text",
                "content": "8. Identity Theft (NCERT kecs111)\nNCERT links stolen personal information directly to identity theft: an attacker fraudulently impersonates the victim to gain financial advantages or commit crimes.\nMemory: Identity theft = someone fraudulently pretends to be YOU.\n\n9. Spam (NCERT Class XII lecs1ps)\nSpam refers to unwanted, unsolicited bulk messages sent indiscriminately, especially over email (promotions, fake lotteries, scam offers).\nMemory: Spam = unwanted / unsolicited mail."
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Network Defense: Antivirus, Firewall, HTTPS & Cookies",
        "sections": [
          {
            "title": "10. Antivirus & 11. Firewall (The Network Security Gatekeeper)",
            "blocks": [
              {
                "type": "text",
                "content": "10. Antivirus (NCERT kecs111)\nNCERT advises regular use and updates of antivirus software.\nIt scans files against known signature databases, identifies heuristic anomalies, and quarantines or deletes malware.\nMemory: Antivirus → detect/protect against malware."
              },
              {
                "type": "callout",
                "icon": "🛡️",
                "title": "11. Firewall — The Network Security Gatekeeper",
                "content": "INTERNET (Untrusted)\n       ↓\n┌──────────────┐\n│   FIREWALL   │  ← Filters traffic based on security rules (IP, Port, Protocol)\n└──────────────┘\n       ↓\nPRIVATE NETWORK (Trusted)\n\nFirewall monitors and filters incoming and outgoing network traffic based on predetermined security rules.\nMemory: Firewall = security guard at the network gate"
              }
            ]
          },
          {
            "title": "12. HTTP vs HTTPS & 13. Cookies (Web Security Facts)",
            "blocks": [
              {
                "type": "text",
                "content": "12. HTTP vs HTTPS (Class XII Syllabus lecs1ps)\n• HTTP (HyperText Transfer Protocol): Transmits web pages as plaintext. Standard Port: 80.\n• HTTPS (HTTP Secure): Transmits encrypted data using TLS/SSL cryptographic protocols. Standard Port: 443.\nNCERT recommends using secure HTTPS sites for financial transactions and downloads.\nMemory: S in HTTPS = Secure (Port 443).\n\n13. Cookies (NCERT kecs111 & lecs1ps)\nA cookie is a small piece of text data stored on a user's browser by a website to remember session tokens, login states, or user preferences.\n⚠️ Exam Trap: A cookie is website data, NOT a computer virus!"
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Sniffing Mitigation & Cyber-Safety Best Practices",
        "sections": [
          {
            "title": "14. Sniffing & Switched Networks (TRE 2.0 Core Anchor)",
            "blocks": [
              {
                "type": "callout",
                "icon": "👀",
                "title": "Sniffing Mental Picture & TRE 2.0 Anchor",
                "content": "A ───── DATA PACKETS ─────→ B\n              ↑\n            👀 SNIFFER (Captures/observes passing traffic)\n\nTRE 2.0 directly asks:\n\"Sniffers can be prevented/reduced by using...\"\nIntended Paper Answer: Switched network.\n\nExam Concept:\n• HUB: Broadcasts electrical signals to ALL ports (easy for a sniffer to tap into other devices' traffic).\n• SWITCH: Directs frames unicast to the specific destination MAC address port, significantly reducing passive sniffing on the LAN.\nMemory: Sniffer question → Switched Network"
              }
            ]
          },
          {
            "title": "15. NCERT Cyber-Safety Rules",
            "blocks": [
              {
                "type": "callout",
                "icon": "📋",
                "title": "NCERT Recommended Cyber-Safety Hygiene",
                "content": "• Regular Backups: Maintain independent offline or cloud backups of critical data.\n• Updated Antivirus: Keep antivirus definitions and scanners continually updated.\n• Operating System & Software Updates: Install security patches promptly.\n• Strong Passwords: Use alphanumeric and special-character combinations; avoid default passwords.\n• Secure Sites: Always check for HTTPS (padlock icon) before entering credentials.\n• Avoid Suspicious Links: Do not download attachments or click links from unknown senders."
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Day 35 White-Paper Master Sheet & Exam Traps",
        "sections": [
          {
            "title": "Day 35 White-Paper Master Sheet & 6 Critical Traps",
            "blocks": [
              {
                "type": "callout",
                "icon": "🧠",
                "title": "Day 35 White-Paper Master Sheet",
                "content": "MALWARE TAXONOMY:\n• Virus      → Infects existing files + self-replicates\n• Worm       → Autonomous network propagation\n• Trojan     → Disguised as legitimate tool (good outside, bad inside)\n• Ransomware → Encrypts files + demands ransom\n• Spyware    → Covertly spies and collects user activity\n\nCYBERCRIME & THREATS:\n• Hacking    → Unauthorized access (White-Hat ethical vs Black-Hat malicious)\n• Phishing   → Fake website/email to steal credentials and card details\n• Identity Theft → Fraudulent impersonation of another person\n• Spam       → Unsolicited bulk emails\n\nDEFENSE & MITIGATION:\n• Antivirus  → Scans, quarantines, removes malware\n• Firewall   → Filters network traffic based on security rules\n• HTTPS      → Encrypted web transfer via TLS on Port 443\n• Cookies    → Browser session data (NOT a virus)\n• Sniffing   → Packet capture; mitigated via Switched Network (TRE 2.0)"
              },
              {
                "type": "callout",
                "icon": "⚠️",
                "title": "6 Critical Day 35 BPSC Exam Traps",
                "content": "1. Virus ≠ Trojan: Virus infects and replicates; Trojan relies on deceptive disguise.\n2. Phishing tricks the USER; Hacking attacks system ACCESS.\n3. Ransomware encrypts/locks data AND demands ransom payment.\n4. Firewall filters NETWORK traffic; Antivirus protects against MALWARE files.\n5. Cookie is website state data, NEVER a virus.\n6. TRE 2.0 Sniffing mitigation answer: Switched Network."
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 35 Checkpoint Test",
      "subtitle": "Network Security: Malware, Phishing, Ransomware, Firewall, HTTPS & Sniffing Mitigation",
      "questions": [
        {
          "id": "m-d35-q1",
          "question": "Q1. Malware means:",
          "options": [
            "Mathematical software",
            "Malicious software",
            "Mail software",
            "Management software",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Malware is a portmanteau of \"malicious software\", designed to compromise, damage, or gain unauthorized access to computer systems. Correct: (B)."
        },
        {
          "id": "m-d35-q2",
          "question": "Q2. A computer virus is most closely associated with:",
          "options": [
            "Malicious code capable of copying itself",
            "Routing packets",
            "Assigning IP addresses",
            "DNS resolution",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "In NCERT and standard computing, a computer virus is malicious code that attaches to other files and is capable of self-replication. Correct: (A)."
        },
        {
          "id": "m-d35-q3",
          "question": "Q3. Which is especially associated with spreading through networks?",
          "options": [
            "Worm",
            "Firewall",
            "Cookie",
            "SMTP",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "A Worm is an autonomous malware program that replicates and spreads itself across network connections without needing to attach to a host program. Correct: (A)."
        },
        {
          "id": "m-d35-q4",
          "question": "Q4. Malware disguised as legitimate software is commonly called:",
          "options": [
            "Trojan",
            "Router",
            "DNS",
            "Firewall",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "A Trojan Horse is malware that masquerades as genuine or useful software to deceive users into installing it. Correct: (A)."
        },
        {
          "id": "m-d35-q5",
          "question": "Q5. Which malware commonly encrypts/blocks access to data and demands payment?",
          "options": [
            "Ransomware",
            "DHCP",
            "Cookie",
            "Repeater",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "Ransomware is malicious software that encrypts user files or locks systems and demands a financial ransom for the decryption key. Correct: (A)."
        },
        {
          "id": "m-d35-q6",
          "question": "Q6. Unauthorized access to a computer or network is:",
          "options": [
            "Hacking",
            "Routing",
            "Multiplexing",
            "Paging",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "NCERT defines hacking as gaining unauthorized access to a computer, network, or digital data system. Correct: (A)."
        },
        {
          "id": "m-d35-q7",
          "question": "Q7. An ethical security hacker is commonly called:",
          "options": [
            "White-hat hacker",
            "Black-hat hacker",
            "Trojan",
            "Worm",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "White-hat hackers are ethical security professionals who identify and report system vulnerabilities to improve defenses. Correct: (A)."
        },
        {
          "id": "m-d35-q8",
          "question": "Q8. A malicious hacker/cracker is most closely associated with:",
          "options": [
            "Black hat",
            "White hat",
            "DHCP",
            "DNS",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "Black-hat hackers (or security crackers) break into digital systems maliciously for illegal gain, damage, or theft. Correct: (A)."
        },
        {
          "id": "m-d35-q9",
          "question": "Q9. A fake banking website designed to steal your password is:",
          "options": [
            "Phishing",
            "Routing",
            "Fragmentation",
            "TDM",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "Phishing uses counterfeit communications and spoofed websites to deceive individuals into disclosing sensitive credentials and banking details. Correct: (A)."
        },
        {
          "id": "m-d35-q10",
          "question": "Q10. Using another person's stolen personal details fraudulently is:",
          "options": [
            "Identity theft",
            "Multiplexing",
            "Routing",
            "Paging",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "Identity theft involves fraudulently impersonating another person using their stolen personal or financial information. Correct: (A)."
        },
        {
          "id": "m-d35-q11",
          "question": "Q11. Unwanted unsolicited email is called:",
          "options": [
            "Spam",
            "DNS",
            "ARP",
            "TCP",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "Spam is unsolicited, unwanted bulk messages distributed across email or messaging platforms. Correct: (A)."
        },
        {
          "id": "m-d35-q12",
          "question": "Q12. Which software helps detect/protect against malware?",
          "options": [
            "Antivirus",
            "Compiler",
            "Router",
            "DBMS",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "Antivirus software monitors, detects, blocks, and removes malicious software programs from computing devices. Correct: (A)."
        },
        {
          "id": "m-d35-q13",
          "question": "Q13. A firewall primarily:",
          "options": [
            "Filters network traffic",
            "Sorts arrays",
            "Stores SQL tables",
            "Compiles Python",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "A firewall acts as a security barrier that monitors and filters incoming and outgoing network traffic based on predefined security policies. Correct: (A)."
        },
        {
          "id": "m-d35-q14",
          "question": "Q14. HTTPS is best remembered as:",
          "options": [
            "Secure HTTP",
            "Email sending protocol",
            "File-transfer protocol",
            "IP assignment protocol",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "HTTPS stands for HyperText Transfer Protocol Secure, providing encrypted web communications over TLS/SSL. Correct: (A)."
        },
        {
          "id": "m-d35-q15",
          "question": "Q15. Standard HTTPS port is:",
          "options": [
            "21",
            "25",
            "80",
            "443",
            "None"
          ],
          "correctAnswer": 3,
          "explanation": "HTTPS traffic is assigned well-known port 443 (while unencrypted HTTP uses port 80). Correct: (D)."
        },
        {
          "id": "m-d35-q16",
          "question": "Q16. A cookie should not automatically be considered:",
          "options": [
            "Website/browser data",
            "A virus",
            "Session-related information",
            "Preference-related information",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "A cookie is state/session data stored by browsers for websites and should NOT be mistakenly categorized as a virus. Correct: (B)."
        },
        {
          "id": "m-d35-q17",
          "question": "Q17. A network sniffer is associated with:",
          "options": [
            "Capturing/observing network traffic",
            "Sorting data",
            "SQL normalization",
            "Memory paging",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "A packet sniffer (packet analyzer) is software or hardware used to intercept, log, and inspect traffic passing over a network. Correct: (A)."
        },
        {
          "id": "m-d35-q18",
          "question": "Q18. In the TRE 2.0 question, sniffing is associated with prevention/reduction using:",
          "options": [
            "Switched network",
            "Bubble sort",
            "Paging",
            "Stack",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "In BPSC TRE 2.0, using a switched network (which unicasts frames to destination ports instead of broadcasting like a hub) is cited as a mechanism to prevent or reduce sniffing. Correct: (A)."
        },
        {
          "id": "m-d35-q19",
          "question": "Q19. Which is a sensible cyber-safety practice supported by NCERT?",
          "options": [
            "Keep antivirus updated",
            "Open every unknown attachment",
            "Use the same weak password everywhere",
            "Download from doubtful sites",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "Keeping antivirus software and operating systems updated with the latest definitions is a core NCERT cyber-safety guideline. Correct: (A)."
        },
        {
          "id": "m-d35-q20",
          "question": "Q20. Which matching is correct?",
          "options": [
            "Phishing → fake site/email to steal information",
            "Ransomware → encrypt/block + demand money",
            "Firewall → traffic filtering",
            "More than one of the above",
            "None"
          ],
          "correctAnswer": 3,
          "explanation": "All three matchings are definitionally correct. Hence (D) More than one of the above is the correct BPSC exam choice. Correct: (D)."
        }
      ]
    }
  },
  {
    "dayNumber": 36,
    "dayId": "day-36",
    "badge": "Day 36",
    "title": "TRE 4.0 — Day 36",
    "unit": "Part III (CS) • 🔐 Network Security & Full Computer Networking Milestone Revision + 25-Question Test",
    "targetTime": "20–25 mins read + 25 mins test",
    "summary": "Network Security Core & Full Networking Block Synthesis (TRE 2.0/3.0 Paper-Backed & NCERT Class XII): Security Foundations (Definition, CIA Triad: Confidentiality, Integrity, Availability), Malware Taxonomy (Virus file infector & replication, Worm autonomous network propagation, Trojan disguise deception, Ransomware file encryption & extortion, Spyware surveillance, Spam bulk email), Social Engineering & Cybercrime (Phishing credential baiting, Hacking White-Hat vs Black-Hat), Security Controls & Defense (Antivirus malware neutralization, Firewall traffic gatekeeper, HTTP vs HTTPS encrypted web via TLS on Port 443, Encryption Plaintext ↔ Ciphertext, Cookies session state vs virus distinction, Sniffing traffic analysis mitigated by Switched Networks [TRE 2.0 Anchor], Authentication 'Who are you?' vs Authorization 'What permissions do you have?'), Complete Networking Block Recall (LAN/MAN/WAN, Switch L2 MAC vs Router L3 IP, 7-Layer OSI Model, Protocols: SMTP 25, DNS 53, DHCP 67/68, ARP IPv4-to-MAC, TCP 3-way handshake vs UDP, Simplex/Duplex modes, Guided media [Optical fiber highest speed] vs Wireless media [Radio, Microwave, Infrared], Multiplexing FDM vs TDM), Day 36 White-Paper Master Sheet, and 25-Question Checkpoint Test.",
    "targets": [
      {
        "section": "Part III – CS",
        "topic": "Network Security & The CIA Triad",
        "goal": "Master CIA triad (Confidentiality, Integrity, Availability), Malware types (Virus, Worm, Trojan, Ransomware), and Authentication vs Authorization"
      },
      {
        "section": "Part III – CS",
        "topic": "Defense Controls, Ports & Sniffing",
        "goal": "Consolidate Firewall, Antivirus, HTTPS (Port 443), and TRE 2.0 Sniffing mitigation via Switched Networks"
      },
      {
        "section": "Part III – CS",
        "topic": "Full Computer Networking Milestone Revision",
        "goal": "Synthesize Days 32–35: OSI 7 layers, Switch (L2) vs Router (L3), Protocols (DNS, DHCP, ARP, SMTP, TCP/UDP), Media & Multiplexing"
      }
    ],
    "introNote": "Since we moved directly to Day 36, today also absorbs the important security concepts that would normally sit in Day 35, along with a full milestone synthesis of Computer Networks. Your TRE 2.0 paper directly asks how sniffers can be prevented, with a switched network among the choices. Your NCERT Class XII syllabus explicitly includes malware, antivirus, spam, HTTP vs HTTPS, firewall, cookies, hackers/crackers and network-security threats.",
    "parts": [
      {
        "title": "Part III — Network Security Foundations, The CIA Triad & Threats",
        "sections": [
          {
            "title": "1. What is Network Security? & 2. The CIA Security Triad",
            "blocks": [
              {
                "type": "callout",
                "icon": "🏠",
                "title": "MENTAL PICTURE — Physical House vs Digital Network",
                "content": "Imagine protecting your house:\n• Lock on door\n• CCTV surveillance\n• Security guard at gate\n• Intrusion alarm\n\nIn a computer network:\n• Strong Passwords & Auth\n• Firewall (Gatekeeper)\n• Antivirus scanner\n• Encryption (TLS/SSL)\n• Access Control & Permissions"
              },
              {
                "type": "text",
                "content": "💡 SIMPLE CONCEPT\nNetwork security = protecting systems, networks, and data from unauthorized access, damage, theft, or misuse.\n\n2. Three Fundamental Security Goals — The CIA Triad:\n• C — Confidentiality: Ensuring that information is accessible only to those authorized to have access (protecting secrets from eavesdroppers).\n• I — Integrity: Safeguarding the accuracy and completeness of information and processing methods (preventing unauthorized modification or tampering).\n• A — Availability: Ensuring that authorized users have timely and reliable access to information and associated assets when needed.\n\nMemory: CIA = Secret (Confidentiality) + Correct (Integrity) + Available (Availability)"
              }
            ]
          },
          {
            "title": "3–8. Malware Taxonomy: Virus, Worm, Trojan, Ransomware & Spyware",
            "blocks": [
              {
                "type": "text",
                "content": "3. Malware (NCERT lecs1ps)\nMalware stands for Malicious Software — an umbrella term for software designed to infiltrate, damage, or gain unauthorized control over systems.\n\n4. Virus (NCERT kecs111)\nA computer virus is malicious code that attaches itself to existing legitimate files or programs, self-replicates when the host program executes, and can corrupt or destroy data.\nMemory: Virus = attaches + spreads.\n\n5. Worm\nA standalone program that replicates and spreads across networks automatically without needing to attach to host files.\nMemory: Worm = walks through network.\n\n6. Trojan Horse\nDeceives users by disguising itself as legitimate or beneficial software (e.g. \"Free Game\" or \"System Optimizer\"), but contains hidden malicious payloads.\nMemory: Trojan = GOOD outside, BAD inside.\n\n7. Ransomware (NCERT kecs111)\nMalware that blocks access to a user's files or entire system, typically via strong encryption, and demands ransom payment for the decryption key.\nMemory: Ransomware = Lock + Ransom.\n\n8. Spyware\nSoftware that secretly observes, monitors, and collects user keystrokes, browsing history, or passwords without their consent.\nMemory: Spyware = secretly watches."
              }
            ]
          },
          {
            "title": "9–13. Social Engineering, Threats & Hacking",
            "blocks": [
              {
                "type": "callout",
                "icon": "🎣",
                "title": "11. Spam & 12. Phishing (NCERT kecs111)",
                "content": "• Spam: Unsolicited, bulk commercial or scam messages, especially sent via email.\n• Phishing: Social engineering attacks using deceptive/fake emails or spoofed websites (e.g. \"Your bank account is suspended!\") to trick victims into revealing sensitive usernames, passwords, credit card numbers, or OTPs.\nMemory: Phishing = fishing for your sensitive credentials"
              },
              {
                "type": "text",
                "content": "13. Hacking (NCERT kecs111)\nUnauthorized access to a computer, network, or digital resource.\n• White-Hat Hacker (Ethical Hacker): Evaluates and strengthens system security with authorization; reports vulnerabilities to improve defense.\n• Black-Hat Hacker (Security Cracker): Breaks into systems without authorization for criminal, malicious, or destructive purposes.\nMemory: White = protect | Black = attack."
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Security Defense, Web Protocols & Authentication",
        "sections": [
          {
            "title": "9–10. Antivirus & Firewall (Network Gatekeeper)",
            "blocks": [
              {
                "type": "text",
                "content": "9. Antivirus (NCERT lecs1ps)\nSoftware designed to detect, quarantine, prevent, and remove malware from computer systems. Keeping virus definition databases updated is critical.\nMemory: Antivirus = Detect + Remove malware.\n\n10. Firewall (NCERT lecs1ps)\nA dedicated software or hardware-based security system that acts as a gatekeeper between an untrusted network (Internet) and a trusted private network, filtering traffic according to defined security policies.\nMemory: Firewall = Network Gatekeeper."
              }
            ]
          },
          {
            "title": "14–16. HTTP vs HTTPS, Encryption & Cookies",
            "blocks": [
              {
                "type": "callout",
                "icon": "🔒",
                "title": "14. HTTP vs HTTPS & 15. Encryption Mechanics",
                "content": "• HTTP  → HyperText Transfer Protocol (Unencrypted plaintext, Port 80).\n• HTTPS → HTTP Secure (Encrypted via TLS/SSL, Port 443; S = Secure).\n\nEncryption Mechanics:\nPLAINTEXT (\"HELLO\") ───(Encryption Key)───→ CIPHERTEXT (\"X7#Q92\")\nCIPHERTEXT (\"X7#Q92\") ───(Decryption Key)───→ PLAINTEXT (\"HELLO\")\n\n16. Cookies (NCERT lecs1ps):\nSmall text data files stored by browsers to remember session tokens, preferences, or shopping cart contents.\n⚠️ Cookie ≠ Virus (Cookies are state data, not malicious executables)."
              }
            ]
          },
          {
            "title": "17–18. Sniffing (TRE 2.0 Anchor) & Authentication vs Authorization",
            "blocks": [
              {
                "type": "callout",
                "icon": "👀",
                "title": "17. Sniffing & Switched Networks (TRE 2.0 Core Anchor)",
                "content": "Sniffing: Intercepting and capturing packets passing across a network.\nTRE 2.0 asks: \"Sniffers can be prevented/reduced by using what?\"\nIntended paper answer: Switched network.\n\nWhy? In a hub-based network, signals broadcast to all ports. In a switched network, frames are directed point-to-point to destination MAC address ports, drastically curtailing casual sniffing.\nMemory: Switch is safer than hub against casual sniffing."
              },
              {
                "type": "callout",
                "icon": "🔑",
                "title": "18. Authentication vs Authorization (Crucial Exam Distinction)",
                "content": "• Authentication → \"Who are you?\" (Verifying identity via Username, Password, Biometrics, OTP).\n• Authorization  → \"What are you allowed to do?\" (Determining access privileges, permissions, and roles).\n\nExample:\nStudent logs in (Authentication: valid student) → can view marks, but cannot edit marks (Authorization restriction).\nMemory: Authentication = Identity | Authorization = Permission"
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Full Computer Networking Milestone Synthesis (Days 32–34)",
        "sections": [
          {
            "title": "19–20. Scale, Hardware Devices & The 7-Layer OSI Model",
            "blocks": [
              {
                "type": "text",
                "content": "19. Network Scale & Devices Synthesis:\n• LAN (Local Area Network): Building, lab, office.\n• MAN (Metropolitan Area Network): City / metropolitan area.\n• WAN (Wide Area Network): Country / world (Internet).\n\nHardware Devices:\n• Switch: Connects devices in the same LAN; forwards frames via MAC addresses (Data Link Layer 2).\n• Router: Connects multiple different networks; forwards packets via IP addresses (Network Layer 3).\n• Repeater: Regenerates and amplifies attenuated signals (Physical Layer 1).\n\n20. OSI 7-Layer Model Architecture:\nLayer 7: Application  → User services (HTTP, SMTP, DNS, FTP)\nLayer 6: Presentation → Formatting, encryption, compression\nLayer 5: Session      → Dialog control, session management\nLayer 4: Transport    → End-to-end / Process-to-process (TCP/UDP, Ports)\nLayer 3: Network      → Routing & packet forwarding (IP, Router, Packets) [TRE 3.0 Trap]\nLayer 2: Data Link    → Framing & hardware addressing (MAC, Switch, Frames)\nLayer 1: Physical     → Raw bit transmission (Bits, Cables, Repeater)"
              }
            ]
          },
          {
            "title": "21–24. Protocols, Duplex Modes, Media & Multiplexing",
            "blocks": [
              {
                "type": "text",
                "content": "21. High-Yield Protocol Consolidation:\n• SMTP  → Port 25: Protocol used to SEND email over the Internet (TRE 3.0 Anchor).\n• DNS   → Port 53: Domain Name System (resolves Domain Name → IP address).\n• DHCP  → Ports 67/68: Automatically provides client IP and network configuration.\n• ARP   → Address Resolution Protocol: Resolves IPv4 Address → MAC Address.\n• TCP   → Connection-oriented, 3-way handshake (SYN → SYN-ACK → ACK), reliable byte stream.\n• UDP   → Connectionless, lightweight datagram (no handshake, low overhead).\n\n22. Data Communication Modes:\n• Simplex: Unidirectional (Keyboard → Computer [TRE 2.0 Anchor]).\n• Half-Duplex: Bidirectional, but one at a time (Walkie-talkie).\n• Full-Duplex: Bidirectional simultaneously (Telephone conversation).\n\n23. Transmission Media:\n• Guided/Wired: Twisted Pair < Coaxial < Optical Fiber (Light pulses, highest speed/bandwidth, immune to EMI [TRE 2.0 Anchor]).\n• Unguided/Wireless: Radio waves, Microwaves (directional/satellite), Infrared (TV remote).\n\n24. Multiplexing Techniques:\n• FDM (Frequency Division Multiplexing): Divides bandwidth into distinct frequency bands.\n• TDM (Time Division Multiplexing): Divides channel into sequential time slots (Frame contains Time Slots)."
              }
            ]
          }
        ]
      },
      {
        "title": "Part III — Day 36 White-Paper Master Sheet & Rapid Recall",
        "sections": [
          {
            "title": "Day 36 White-Paper Master Sheet & Rapid Recall",
            "blocks": [
              {
                "type": "callout",
                "icon": "🧠",
                "title": "Day 36 White-Paper Master Sheet",
                "content": "SECURITY FUNDAMENTALS:\nCIA Triad → Confidentiality (Secret) + Integrity (Correct) + Availability (Accessible)\n\nMALWARE:\n• Virus      → Attaches to file + self-replicates\n• Worm       → Autonomous network spread\n• Trojan     → Disguised as useful software\n• Ransomware → Encrypts files + demands ransom\n• Spyware    → Covertly spies and logs activity\n\nCONTROLS & DEFENSE:\n• Firewall   → Network traffic gatekeeper\n• Antivirus  → Malware file protection\n• Phishing   → Fake message/site fishing for credentials\n• Spam       → Unsolicited bulk messages\n• HTTPS      → TLS encrypted web on Port 443\n• Sniffing   → Mitigated by Switched Network (TRE 2.0)\n\nAUTH DISTINCTION:\n• Authentication = \"WHO are you?\" (Identity)\n• Authorization  = \"WHAT permissions do you have?\" (Access rights)\n\nNETWORKING SYNTHESIS:\n• Switch  → MAC → L2 (Data Link)\n• Router  → IP  → L3 (Network)\n• TCP/UDP → Ports → L4 (Transport)\n• DNS     → Name → IP\n• DHCP    → Give IP\n• ARP     → IPv4 → MAC\n• SMTP    → Send Email\n• Fiber   → Fastest media (Light)"
              }
            ]
          }
        ]
      }
    ],
    "test": {
      "title": "Day 36 Checkpoint Test",
      "subtitle": "Network Security + Full Computer Networking Milestone Revision",
      "questions": [
        {
          "id": "m-d36-q1",
          "question": "Q1. CIA in information security stands for:",
          "options": [
            "Control, Internet, Access",
            "Confidentiality, Integrity, Availability",
            "Computer, Internet, Authentication",
            "Confidentiality, Internet, Authorization",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "In security, CIA stands for Confidentiality, Integrity, and Availability. Correct: (B)."
        },
        {
          "id": "m-d36-q2",
          "question": "Q2. Preventing unauthorized people from reading information relates mainly to:",
          "options": [
            "Confidentiality",
            "Integrity",
            "Availability",
            "Routing",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "Confidentiality ensures that information is accessible and readable only by authorized individuals or entities. Correct: (A)."
        },
        {
          "id": "m-d36-q3",
          "question": "Q3. Preventing unauthorized modification of data relates mainly to:",
          "options": [
            "Availability",
            "Integrity",
            "Bandwidth",
            "Routing",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Integrity ensures that data is accurate, authentic, and protected against unauthorized modification or deletion. Correct: (B)."
        },
        {
          "id": "m-d36-q4",
          "question": "Q4. Malware means:",
          "options": [
            "Malicious software",
            "Mail software",
            "Management software",
            "Mathematical software",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "Malware is short for malicious software, designed to compromise or harm digital devices and networks. Correct: (A)."
        },
        {
          "id": "m-d36-q5",
          "question": "Q5. Which malware typically attaches itself to files/programs in the traditional model?",
          "options": [
            "Virus",
            "Firewall",
            "Cookie",
            "Router",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "A computer virus traditionally attaches itself to existing host files or executables and self-replicates when the host executes. Correct: (A)."
        },
        {
          "id": "m-d36-q6",
          "question": "Q6. Which malware is especially associated with self-spreading across networks?",
          "options": [
            "Worm",
            "Cookie",
            "Firewall",
            "Switch",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "A Worm is autonomous self-propagating malware that travels across network links without needing host file attachment. Correct: (A)."
        },
        {
          "id": "m-d36-q7",
          "question": "Q7. A malicious program disguised as legitimate software is:",
          "options": [
            "Trojan",
            "DNS",
            "DHCP",
            "SMTP",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "A Trojan Horse presents itself as desirable or harmless software to mislead users into executing its hidden malicious payload. Correct: (A)."
        },
        {
          "id": "m-d36-q8",
          "question": "Q8. Which attack commonly encrypts/block access to files and demands payment?",
          "options": [
            "Ransomware",
            "DHCP",
            "DNS",
            "Firewall",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "Ransomware encrypts target data or locks computers and demands a financial ransom to release the decryption key. Correct: (A)."
        },
        {
          "id": "m-d36-q9",
          "question": "Q9. Software that secretly monitors user activity is:",
          "options": [
            "Spyware",
            "Router",
            "Compiler",
            "Repeater",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "Spyware secretly gathers information on user actions, keystrokes, and habits without their knowledge. Correct: (A)."
        },
        {
          "id": "m-d36-q10",
          "question": "Q10. A firewall is best remembered as:",
          "options": [
            "Network traffic gatekeeper",
            "File-compression algorithm",
            "Programming language",
            "Sorting technique",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "A firewall acts as a protective network gatekeeper, monitoring and filtering inbound and outbound packets based on security rules. Correct: (A)."
        },
        {
          "id": "m-d36-q11",
          "question": "Q11. Unwanted unsolicited email is commonly called:",
          "options": [
            "Spam",
            "ARP",
            "DNS",
            "Cookie only",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "Spam refers to unwanted, unsolicited bulk commercial or fraudulent emails. Correct: (A)."
        },
        {
          "id": "m-d36-q12",
          "question": "Q12. A fake bank email asking you to click a link and enter your password is an example of:",
          "options": [
            "Phishing",
            "Paging",
            "Routing",
            "Multiplexing",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "Phishing is the fraudulent attempt to capture sensitive credentials through spoofed emails and counterfeit websites. Correct: (A)."
        },
        {
          "id": "m-d36-q13",
          "question": "Q13. HTTPS is primarily:",
          "options": [
            "Secure version of HTTP",
            "Email protocol",
            "File-transfer protocol",
            "IP-assignment protocol",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "HTTPS (HyperText Transfer Protocol Secure) provides encrypted web communication over TLS/SSL. Correct: (A)."
        },
        {
          "id": "m-d36-q14",
          "question": "Q14. Standard HTTPS port is:",
          "options": [
            "21",
            "25",
            "80",
            "443",
            "None"
          ],
          "correctAnswer": 3,
          "explanation": "Standard HTTPS operates on port 443 (while unencrypted HTTP uses port 80). Correct: (D)."
        },
        {
          "id": "m-d36-q15",
          "question": "Q15. Authentication answers:",
          "options": [
            "“Who are you?”",
            "“What are you allowed to do?”",
            "“What is your subnet?”",
            "“Which cable are you using?”",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "Authentication is the process of verifying identity: \"Who are you?\" (via username, password, biometrics, or token). Correct: (A)."
        },
        {
          "id": "m-d36-q16",
          "question": "Q16. Authorization answers:",
          "options": [
            "“Who are you?”",
            "“What actions/resources are you permitted to access?”",
            "“What is your MAC address?”",
            "“What is DNS?”",
            "None"
          ],
          "correctAnswer": 1,
          "explanation": "Authorization determines access privileges: \"What actions or resources are you permitted to access?\" Correct: (B)."
        },
        {
          "id": "m-d36-q17",
          "question": "Q17. TRE 2.0 associates prevention/reduction of basic sniffing with:",
          "options": [
            "Switched network",
            "Bubble sort",
            "Paging",
            "Database normalization",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "In BPSC TRE 2.0, using a switched network (which unicasts frames to destination MAC ports rather than broadcasting like a hub) reduces sniffing vulnerability. Correct: (A)."
        },
        {
          "id": "m-d36-q18",
          "question": "Q18. Which device primarily forwards traffic inside a LAN using MAC-address information?",
          "options": [
            "Switch",
            "Router",
            "Modem only",
            "Compiler",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "A Switch connects devices within the same local network (LAN) and directs frames using MAC hardware addresses (Data Link Layer). Correct: (A)."
        },
        {
          "id": "m-d36-q19",
          "question": "Q19. Which device connects different networks?",
          "options": [
            "Router",
            "Tuple",
            "Stack",
            "Repeater only",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "A Router connects multiple different networks and forwards data packets using IP addresses (Network Layer). Correct: (A)."
        },
        {
          "id": "m-d36-q20",
          "question": "Q20. Which matching is correct?",
          "options": [
            "DNS → Domain name to IP",
            "DHCP → Automatic IP configuration",
            "ARP → IPv4 to MAC",
            "More than one of the above",
            "None"
          ],
          "correctAnswer": 3,
          "explanation": "All three protocol matchings are definitionally correct. Hence (D) More than one of the above is the correct BPSC answer. Correct: (D)."
        },
        {
          "id": "m-d36-q21",
          "question": "Q21. TCP is:",
          "options": [
            "Connection-oriented",
            "Connectionless only",
            "A physical cable",
            "A malware type",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "TCP (Transmission Control Protocol) is a connection-oriented transport protocol that performs a 3-way handshake prior to data delivery. Correct: (A)."
        },
        {
          "id": "m-d36-q22",
          "question": "Q22. Which is full-duplex communication in the basic conceptual model?",
          "options": [
            "Keyboard → computer",
            "Walkie-talkie",
            "Telephone conversation",
            "One-way radio broadcast",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "In a telephone conversation, both participants can transmit and receive simultaneously (Full-Duplex). Correct: (C)."
        },
        {
          "id": "m-d36-q23",
          "question": "Q23. TDM primarily divides communication by:",
          "options": [
            "Time",
            "Frequency",
            "MAC address",
            "IP class",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "TDM (Time Division Multiplexing) allocates discrete time slots across the full channel bandwidth to different users. Correct: (A)."
        },
        {
          "id": "m-d36-q24",
          "question": "Q24. Which medium is the highest-speed choice among these in TRE 2.0?",
          "options": [
            "Twisted pair",
            "Coaxial cable",
            "Optical fiber",
            "All identical",
            "None"
          ],
          "correctAnswer": 2,
          "explanation": "Optical fiber utilizes light pulses through glass or plastic cores, offering vastly higher speed and bandwidth than electrical copper cables (TRE 2.0 Anchor). Correct: (C)."
        },
        {
          "id": "m-d36-q25",
          "question": "Q25. Which complete memory rule is correct?",
          "options": [
            "Switch → L2/MAC; Router → L3/IP; TCP/UDP → L4",
            "Switch → L3/IP; Router → L2/MAC",
            "DNS → IPv4 to MAC",
            "DHCP → Send email",
            "None"
          ],
          "correctAnswer": 0,
          "explanation": "Switches operate at Layer 2 (Data Link) using MAC addresses; Routers operate at Layer 3 (Network) using IP addresses; TCP/UDP operate at Layer 4 (Transport). Correct: (A)."
        }
      ]
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MARATHON_DATA };
}
