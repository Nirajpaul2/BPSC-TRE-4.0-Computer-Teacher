// BPSC TRE 4.0 Computer Teacher - Diagnostic & Mock Practice Quiz Bank
// Structured according to actual BPSC examination style with detailed explanations

const QUIZ_QUESTIONS = [
  {
    id: "q-1",
    unit: "Unit 4: Python Programming",
    tier: "Tier 1",
    question: "What will be the output of the following Python code snippet?\n\ns = 'BPSC_TEACHER'\nprint(s[1:8:2])",
    options: [
      "PSTAC",
      "PCTE",
      "PS_E",
      "PSTE",
      "None of the above / More than one of the above"
    ],
    correctAnswer: 1, // index 1: 'PCTE'
    explanation: "Let's index 'BPSC_TEACHER':\nIndex 0='B', 1='P', 2='S', 3='C', 4='_', 5='T', 6='E', 7='A', 8='C', 9='H', 10='E', 11='R'.\nThe slice is s[1:8:2]:\nStart at index 1 ('P'), step by 2: index 1 ('P'), index 3 ('C'), index 5 ('T'), index 7 ('E').\nIndex 8 is the exclusive stop bound, so it stops before index 8.\nResulting string = 'PCTE'."
  },
  {
    id: "q-2",
    unit: "Unit 4: Python Programming",
    tier: "Tier 1",
    question: "Consider the following Python code:\n\ndef modify(lst, val):\n    lst.append(val)\n    lst = [100, 200]\n    lst.append(300)\n\nnums = [1, 2]\nmodify(nums, 3)\nprint(nums)",
    options: [
      "[1, 2, 3, 100, 200, 300]",
      "[1, 2, 3]",
      "[100, 200, 300]",
      "[1, 2]",
      "None of the above / More than one of the above"
    ],
    correctAnswer: 1, // index 1: [1, 2, 3]
    explanation: "Lists are mutable in Python. When `nums` is passed to `modify`, `lst` initially points to the same list object in memory. `lst.append(val)` modifies that list in-place to `[1, 2, 3]`.\nThen `lst = [100, 200]` rebinds the local variable `lst` to a newly created list in the local scope. This re-assignment does NOT affect the original list `nums`.\nTherefore, `nums` outside the function remains `[1, 2, 3]`."
  },
  {
    id: "q-3",
    unit: "Unit 6: DBMS & SQL",
    tier: "Tier 1",
    question: "A relation R has 4 attributes (Degree = 4) and 10 tuples (Cardinality = 10). Another relation S has 3 attributes (Degree = 3) and 5 tuples (Cardinality = 5). What are the Degree and Cardinality of the Cartesian Product (R × S)?",
    options: [
      "Degree = 12, Cardinality = 50",
      "Degree = 7, Cardinality = 50",
      "Degree = 7, Cardinality = 15",
      "Degree = 12, Cardinality = 15",
      "None of the above / More than one of the above"
    ],
    correctAnswer: 1, // index 1: Degree = 7, Cardinality = 50
    explanation: "In relational algebra:\n- Degree of Cartesian Product = Degree(R) + Degree(S) = 4 + 3 = 7 attributes.\n- Cardinality of Cartesian Product = Cardinality(R) × Cardinality(S) = 10 × 5 = 50 tuples.\nHence, Degree = 7 and Cardinality = 50."
  },
  {
    id: "q-4",
    unit: "Unit 6: DBMS & SQL",
    tier: "Tier 1",
    question: "Which of the following conditions ensures that a relational schema is in Third Normal Form (3NF)?",
    options: [
      "No non-prime attribute is partially dependent on any candidate key",
      "Every determinant is a candidate key",
      "For every non-trivial functional dependency X → Y, either X is a super key or Y is a prime attribute",
      "There are no multivalued dependencies",
      "None of the above / More than one of the above"
    ],
    correctAnswer: 2, // index 2
    explanation: "A relation is in 3NF if it is in 2NF and for every non-trivial functional dependency X → Y, either:\n1. X is a Super Key, OR\n2. Y is a Prime Attribute (member of some candidate key).\nOption (A) is the definition of 2NF. Option (B) is Boyce-Codd Normal Form (BCNF)."
  },
  {
    id: "q-5",
    unit: "Unit 7: Operating Systems",
    tier: "Tier 2",
    question: "Three processes P1, P2, and P3 arrive at time t = 0 with CPU burst times of 6 ms, 4 ms, and 2 ms respectively. If Non-Preemptive Shortest Job First (SJF) scheduling is used, what is the Average Waiting Time?",
    options: [
      "2.0 ms",
      "2.67 ms",
      "3.33 ms",
      "4.0 ms",
      "None of the above / More than one of the above"
    ],
    correctAnswer: 1, // index 1: 2.67 ms
    explanation: "Processes all arrive at t = 0:\nBurst times: P1 = 6, P2 = 4, P3 = 2.\nUnder Non-Preemptive SJF, the shortest job runs first:\n1. P3 runs from 0 to 2 ms (Waiting Time = 0 ms)\n2. P2 runs from 2 to 6 ms (Waiting Time = 2 ms)\n3. P1 runs from 6 to 12 ms (Waiting Time = 6 ms)\n\nTotal Waiting Time = 0 + 2 + 6 = 8 ms.\nAverage Waiting Time = 8 / 3 = 2.666... ≈ 2.67 ms."
  },
  {
    id: "q-6",
    unit: "Unit 8: Computer Networks",
    tier: "Tier 1",
    question: "Which OSI reference model layer is responsible for process-to-process delivery, port addressing, and segmentation?",
    options: [
      "Network Layer",
      "Data Link Layer",
      "Transport Layer",
      "Session Layer",
      "None of the above / More than one of the above"
    ],
    correctAnswer: 2, // index 2: Transport Layer
    explanation: "The Transport Layer (Layer 4) is responsible for end-to-end (process-to-process) communication between applications. It performs port addressing, segmentation of data streams into segments, flow control, and error control (via TCP/UDP).\nThe Network layer is responsible for host-to-host packet delivery (IP addressing)."
  },
  {
    id: "q-7",
    unit: "Unit 8: Computer Networks",
    tier: "Tier 1",
    question: "What is the number of usable host addresses in a subnet with CIDR prefix /27 in IPv4?",
    options: [
      "32",
      "30",
      "62",
      "14",
      "None of the above / More than one of the above"
    ],
    correctAnswer: 1, // index 1: 30
    explanation: "In an IPv4 address (32 bits), CIDR /27 has:\nNetwork bits (n) = 27\nHost bits (h) = 32 - 27 = 5 bits.\nTotal IP addresses = 2^5 = 32.\nUsable host addresses = 2^h - 2 = 32 - 2 = 30 usable hosts (subtracting the Network ID and the Directed Broadcast ID)."
  },
  {
    id: "q-8",
    unit: "Unit 2: Digital Logic & Number Systems",
    tier: "Tier 2",
    question: "According to De Morgan's Law of Boolean Algebra, the expression (A + B)' is equivalent to:",
    options: [
      "A' + B'",
      "A' · B'",
      "(A · B)'",
      "A · B",
      "None of the above / More than one of the above"
    ],
    correctAnswer: 1, // index 1: A' · B'
    explanation: "De Morgan's First Law states: The complement of a logical sum (OR) is equal to the product (AND) of the complements:\n(A + B)' = A' · B'\n\nDe Morgan's Second Law states: The complement of a logical product (AND) is equal to the sum (OR) of the complements:\n(A · B)' = A' + B'."
  },
  {
    id: "q-9",
    unit: "Unit 5: Data Structures & Algorithms",
    tier: "Tier 2",
    question: "Evaluate the following postfix expression using a stack: '8 2 / 3 * 4 + 2 -'",
    options: [
      "14",
      "10",
      "12",
      "16",
      "None of the above / More than one of the above"
    ],
    correctAnswer: 0, // index 0: 14
    explanation: "Let's trace stack evaluation left to right:\n1. '8' -> push 8 [Stack: 8]\n2. '2' -> push 2 [Stack: 8, 2]\n3. '/' -> pop 2, pop 8 -> 8 / 2 = 4 -> push 4 [Stack: 4]\n4. '3' -> push 3 [Stack: 4, 3]\n5. '*' -> pop 3, pop 4 -> 4 * 3 = 12 -> push 12 [Stack: 12]\n6. '4' -> push 4 [Stack: 12, 4]\n7. '+' -> pop 4, pop 12 -> 12 + 4 = 16 -> push 16 [Stack: 16]\n8. '2' -> push 2 [Stack: 16, 2]\n9. '-' -> pop 2, pop 16 -> 16 - 2 = 14 -> push 14 [Stack: 14]\nFinal Result = 14."
  },
  {
    id: "q-10",
    unit: "Unit 9: Cyber Security & IT Act",
    tier: "Tier 3",
    question: "Under the Information Technology Act 2000 (India), which section provides punishment for identity theft using computer resources?",
    options: [
      "Section 43",
      "Section 65",
      "Section 66C",
      "Section 67",
      "None of the above / More than one of the above"
    ],
    correctAnswer: 2, // index 2: Section 66C
    explanation: "Under the IT Act 2000 (as amended in 2008):\n- Section 66C: Punishment for identity theft (fraudulent use of electronic signature, password, or unique identification feature).\n- Section 43: Penalty for damage to computer system.\n- Section 65: Tampering with computer source documents.\n- Section 67: Publishing obscene material."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUIZ_QUESTIONS;
}
