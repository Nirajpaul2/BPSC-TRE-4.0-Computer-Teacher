// 8-Week Master Study Plan for BPSC TRE 4.0 Computer Teacher
// Daily checkpoints with local storage persistence

const STUDY_PLAN_DATA = [
  {
    weekNumber: 1,
    title: "Week 1: Computer Fundamentals, Number Systems & Digital Logic",
    focus: "Build unbreakable conceptual foundation in Hardware, Memory Hierarchy, Number Conversions, and Boolean Algebra.",
    targetHours: "3–4 Hours / Day",
    ncertChapters: ["kecs101.pdf (Ch. 1)", "kecs102.pdf (Ch. 2)"],
    milestones: [
      {
        id: "w1-d1",
        day: "Day 1",
        task: "Computer System & Generations: Read kecs101.pdf Ch 1; Learn 1st to 5th generations, Von Neumann model, CPU registers (PC, IR, MAR, MDR).",
        ncertRef: "kecs101",
        completed: false
      },
      {
        id: "w1-d2",
        day: "Day 2",
        task: "Memory Hierarchy & Units: Study Cache locality (Spatial vs Temporal), RAM types (SRAM/DRAM), ROM types, Memory units conversion (Nibble to TB).",
        ncertRef: "kecs101",
        completed: false
      },
      {
        id: "w1-d3",
        day: "Day 3",
        task: "Number Base Conversions: Read kecs102.pdf Ch 2; Practice Decimal ↔ Binary, Octal ↔ Binary, Hexadecimal ↔ Binary with integers & fractions.",
        ncertRef: "kecs102",
        completed: false
      },
      {
        id: "w1-d4",
        day: "Day 4",
        task: "Complements & Character Codes: 1's and 2's complement subtraction, signed number ranges; ASCII values ('A'=65, 'a'=97, '0'=48), Unicode UTF-8.",
        ncertRef: "kecs102",
        completed: false
      },
      {
        id: "w1-d5",
        day: "Day 5",
        task: "Boolean Algebra & Logic Gates: Basic and Universal gates (NAND, NOR), Truth tables, De Morgan's Laws verification, SOP and POS canonical forms.",
        ncertRef: "kecs102",
        completed: false
      },
      {
        id: "w1-d6",
        day: "Day 6",
        task: "K-Map Minimization: Practice 2-variable, 3-variable, and 4-variable K-Maps, grouping (pairs, quads, octets), and Don't Care conditions.",
        ncertRef: "kecs102",
        completed: false
      },
      {
        id: "w1-d7",
        day: "Day 7",
        task: "Week 1 Review & Practice Quiz: Solve 50 MCQs covering Unit 1 & Unit 2; revise weak formulas and write a 1-page summary card.",
        ncertRef: "Revision",
        completed: false
      }
    ]
  },
  {
    weekNumber: 2,
    title: "Week 2: Python Foundations — Control Flow, Functions & Strings",
    focus: "Master Python fundamentals, tricky operator precedence, loop dry-runs, and string slicing mechanics.",
    targetHours: "4–5 Hours / Day",
    ncertChapters: ["kecs105.pdf (Ch. 5)", "kecs106.pdf (Ch. 6)", "kecs107.pdf (Ch. 7)", "kecs108.pdf (Ch. 8)"],
    milestones: [
      {
        id: "w2-d1",
        day: "Day 1",
        task: "Python Basics & Operators: Read kecs105.pdf; Master operator precedence, floor division `//`, modulo `%`, identity `is` vs equality `==`.",
        ncertRef: "kecs105",
        completed: false
      },
      {
        id: "w2-d2",
        day: "Day 2",
        task: "Flow of Control & Loops: Read kecs106.pdf; `range(start, stop, step)` variations, `break`, `continue`, `pass`, and `for...else` suite execution.",
        ncertRef: "kecs106",
        completed: false
      },
      {
        id: "w2-d3",
        day: "Day 3",
        task: "Functions & Scope: Read kecs107.pdf; Positional vs Default vs Keyword args, `*args`, `**kwargs`, LEGB variable scoping rule, `global` keyword.",
        ncertRef: "kecs107",
        completed: false
      },
      {
        id: "w2-d4",
        day: "Day 4",
        task: "Recursion & Standard Modules: Recursive tracing (Factorial, Fibonacci, GCD), `math` and `random` (`randint` vs `randrange`) functions.",
        ncertRef: "kecs107",
        completed: false
      },
      {
        id: "w2-d5",
        day: "Day 5",
        task: "String Traversal & Slicing: Read kecs108.pdf; Negative indexing, string slicing `s[start:stop:step]`, reversing `s[::-1]`, and immutability.",
        ncertRef: "kecs108",
        completed: false
      },
      {
        id: "w2-d6",
        day: "Day 6",
        task: "String Methods & Dry-Runs: `split()`, `join()`, `find()`, `replace()`, `strip()`, character test methods; Solve 20 'Predict Output' string questions.",
        ncertRef: "kecs108",
        completed: false
      },
      {
        id: "w2-d7",
        day: "Day 7",
        task: "Week 2 Practice Test: Solve 60 Python Output-finding MCQs; make a quick reference card for string methods and slice boundaries.",
        ncertRef: "Revision",
        completed: false
      }
    ]
  },
  {
    weekNumber: 3,
    title: "Week 3: Advanced Python — Lists, Tuples, Dicts, OOP & Files",
    focus: "Complete the Tier 1 Python syllabus: mutable vs immutable collections, OOP principles, exception handling, and file operations.",
    targetHours: "4–5 Hours / Day",
    ncertChapters: ["kecs109.pdf (Ch. 9)", "kecs110.pdf (Ch. 10)", "lecs101.pdf (Ch. 1)", "lecs102.pdf (Ch. 2)"],
    milestones: [
      {
        id: "w3-d1",
        day: "Day 1",
        task: "Lists & List Comprehensions: Read kecs109.pdf; `append()` vs `extend()`, `pop()` vs `remove()`, `sort()` vs `sorted()`, list comprehensions with `if`.",
        ncertRef: "kecs109",
        completed: false
      },
      {
        id: "w3-d2",
        day: "Day 2",
        task: "Tuples & Dictionaries: Read kecs110.pdf; Tuple packing/unpacking, Dictionary key immutability rule, dict methods (`keys`, `values`, `items`, `get`).",
        ncertRef: "kecs110",
        completed: false
      },
      {
        id: "w3-d3",
        day: "Day 3",
        task: "Object-Oriented Programming (OOP): Classes, objects, `__init__(self)`, instance vs class variables, single and multiple inheritance, `super()`.",
        ncertRef: "OOP",
        completed: false
      },
      {
        id: "w3-d4",
        day: "Day 4",
        task: "Polymorphism & Encapsulation: Private members `__attr`, method overriding, operator overloading dunder methods (`__add__`, `__str__`).",
        ncertRef: "OOP",
        completed: false
      },
      {
        id: "w3-d5",
        day: "Day 5",
        task: "Exception Handling: Read lecs101.pdf; `try`, `except`, `else`, `finally` execution order, built-in exception types, raising custom exceptions.",
        ncertRef: "lecs101",
        completed: false
      },
      {
        id: "w3-d6",
        day: "Day 6",
        task: "File Handling: Read lecs102.pdf; File modes (`'r'`, `'w'`, `'a'`, `'r+'`), `read()`, `readline()`, `readlines()`, `tell()`, `seek()`, `pickle` and `csv` modules.",
        ncertRef: "lecs102",
        completed: false
      },
      {
        id: "w3-d7",
        day: "Day 7",
        task: "Week 3 Comprehensive Python Mock: Solve 70 MCQs spanning all Python concepts (Expect 18–22 marks in actual exam).",
        ncertRef: "Revision",
        completed: false
      }
    ]
  },
  {
    weekNumber: 4,
    title: "Week 4: Database Management Systems (DBMS) & SQL",
    focus: "Master the 12–15 marks DBMS goldmine: ER diagrams, Relational model, Normalization (1NF to BCNF), and hands-on SQL queries.",
    targetHours: "4–5 Hours / Day",
    ncertChapters: ["lecs108.pdf (Ch. 8)", "lecs109.pdf (Ch. 9)"],
    milestones: [
      {
        id: "w4-d1",
        day: "Day 1",
        task: "Database Architecture & ER Model: Read lecs108.pdf; 3-schema architecture, Data independence, ER components (entities, attributes, relationships, cardinality).",
        ncertRef: "lecs108",
        completed: false
      },
      {
        id: "w4-d2",
        day: "Day 2",
        task: "Relational Model & Keys: Relation, Tuple, Attribute, Domain, Degree vs Cardinality; Primary, Candidate, Alternate, Foreign, and Composite keys.",
        ncertRef: "lecs108",
        completed: false
      },
      {
        id: "w4-d3",
        day: "Day 3",
        task: "Functional Dependencies & Normalization: Armstrong axioms, 1NF (atomic), 2NF (no partial dependency), 3NF (no transitive dependency), BCNF rules.",
        ncertRef: "lecs108",
        completed: false
      },
      {
        id: "w4-d4",
        day: "Day 4",
        task: "SQL DDL & DML Commands: Read lecs109.pdf; `CREATE`, `ALTER`, `DROP`, `TRUNCATE`, `INSERT`, `UPDATE`, `DELETE`; Constraints (`NOT NULL`, `CHECK`, `DEFAULT`).",
        ncertRef: "lecs109",
        completed: false
      },
      {
        id: "w4-d5",
        day: "Day 5",
        task: "SQL Queries, Aggregates & Grouping: `SELECT` queries with `WHERE`, `ORDER BY`, `GROUP BY`, `HAVING`; Aggregate functions with NULL values.",
        ncertRef: "lecs109",
        completed: false
      },
      {
        id: "w4-d6",
        day: "Day 6",
        task: "SQL Joins, Subqueries & Transactions: `INNER JOIN`, `LEFT/RIGHT JOIN`, Nested subqueries; ACID properties, Dirty read, Two-phase locking (2PL).",
        ncertRef: "lecs109",
        completed: false
      },
      {
        id: "w4-d7",
        day: "Day 7",
        task: "Week 4 DBMS Mock: Solve 50 SQL and Normalization MCQs; practice manual table tracing on rough paper.",
        ncertRef: "Revision",
        completed: false
      }
    ]
  },
  {
    weekNumber: 5,
    title: "Week 5: Operating Systems (OS)",
    focus: "Score full marks on CPU scheduling numericals, Deadlock conditions, Paging address translation, and Page replacement algorithms.",
    targetHours: "4 Hours / Day",
    ncertChapters: ["Core CS Engineering OS Material"],
    milestones: [
      {
        id: "w5-d1",
        day: "Day 1",
        task: "OS Architecture & Process Model: Kernel types, Dual-mode, System calls, Process states, PCB components, Context switching, Schedulers.",
        ncertRef: "OS Core",
        completed: false
      },
      {
        id: "w5-d2",
        day: "Day 2",
        task: "CPU Scheduling Numericals: FCFS (convoy effect), SJF, SRTF, Round Robin (time quantum), Priority; Calculate Turnaround Time (TAT) and Waiting Time (WT).",
        ncertRef: "OS Core",
        completed: false
      },
      {
        id: "w5-d3",
        day: "Day 3",
        task: "Process Synchronization: Critical section problem, Race conditions, Peterson's solution, Mutex vs Counting Semaphores, Producer-Consumer problem.",
        ncertRef: "OS Core",
        completed: false
      },
      {
        id: "w5-d4",
        day: "Day 4",
        task: "Deadlocks: 4 Coffman conditions, Resource Allocation Graph (RAG), Deadlock Prevention, Avoidance (Banker's Algorithm safe sequence), Detection.",
        ncertRef: "OS Core",
        completed: false
      },
      {
        id: "w5-d5",
        day: "Day 5",
        task: "Memory Management & Paging: Fixed vs Variable partitioning, Internal vs External fragmentation, Paging (Pages, Frames, Page Table), TLB hit ratio & EAT.",
        ncertRef: "OS Core",
        completed: false
      },
      {
        id: "w5-d6",
        day: "Day 6",
        task: "Virtual Memory & Disk Scheduling: Demand paging, Page faults; FIFO (Belady's Anomaly), LRU, Optimal page replacement; FCFS, SSTF, SCAN, C-SCAN.",
        ncertRef: "OS Core",
        completed: false
      },
      {
        id: "w5-d7",
        day: "Day 7",
        task: "Week 5 OS Mock: Solve 50 OS numericals and conceptual MCQs; verify Gantt chart drawing speed.",
        ncertRef: "Revision",
        completed: false
      }
    ]
  },
  {
    weekNumber: 6,
    title: "Week 6: Computer Networks & Data Communication",
    focus: "Conquer the 10–12 marks Networking domain: OSI 7 layers, TCP/IP, CIDR Subnetting, Protocol Port numbers, and network devices.",
    targetHours: "4 Hours / Day",
    ncertChapters: ["lecs110.pdf (Ch. 10)", "lecs111.pdf (Ch. 11)"],
    milestones: [
      {
        id: "w6-d1",
        day: "Day 1",
        task: "Data Communication Basics: Read lecs111.pdf; Transmission modes (Simplex, Half/Full Duplex), Guided media (Twisted, Coax, Fiber), Wireless media.",
        ncertRef: "lecs111",
        completed: false
      },
      {
        id: "w6-d2",
        day: "Day 2",
        task: "Topologies & Network Devices: Read lecs110.pdf; Topologies (Bus, Star, Ring, Mesh formula `n(n-1)/2`); Hub, Switch, Router, Bridge, Gateway layer mapping.",
        ncertRef: "lecs110",
        completed: false
      },
      {
        id: "w6-d3",
        day: "Day 3",
        task: "The OSI 7-Layer Reference Model: Functions, protocols, and data units (Bits, Frames, Packets, Segments) of all 7 layers.",
        ncertRef: "lecs110",
        completed: false
      },
      {
        id: "w6-d4",
        day: "Day 4",
        task: "TCP/IP Suite & Protocol Ports: TCP (3-way handshake) vs UDP; Memorize ports: HTTP 80, HTTPS 443, FTP 20/21, SSH 22, Telnet 23, SMTP 25, DNS 53, DHCP 67/68.",
        ncertRef: "lecs110",
        completed: false
      },
      {
        id: "w6-d5",
        day: "Day 5",
        task: "IPv4 Addressing & Subnetting Numericals: Classes A, B, C, D, E address ranges, Default subnet masks, CIDR `/24` to `/30`, Valid hosts formula `2^h - 2`.",
        ncertRef: "lecs110",
        completed: false
      },
      {
        id: "w6-d6",
        day: "Day 6",
        task: "Network Protocols & Routing: ARP (IP to MAC), RARP, ICMP (`ping`), DNS hierarchical resolution, DHCP DORA process, Routing basics (RIP, OSPF).",
        ncertRef: "lecs110",
        completed: false
      },
      {
        id: "w6-d7",
        day: "Day 7",
        task: "Week 6 Networking Mock: Solve 50 MCQs on OSI layers, Subnetting, and Protocol Ports.",
        ncertRef: "Revision",
        completed: false
      }
    ]
  },
  {
    weekNumber: 7,
    title: "Week 7: Data Structures, Cyber Security & Web Tech",
    focus: "Cover Stacks/Queues, Sorting/Searching complexities, Cryptography, IT Act 2000, and core HTML/CSS tags.",
    targetHours: "3–4 Hours / Day",
    ncertChapters: ["lecs103–106.pdf (Ch. 3–6)", "lecs112.pdf (Ch. 12)", "kecs111.pdf (Ch. 11)"],
    milestones: [
      {
        id: "w7-d1",
        day: "Day 1",
        task: "Stack & Queue: Read lecs103.pdf & lecs104.pdf; LIFO vs FIFO, Infix to Postfix conversion, Postfix evaluation using stack, Circular queue formulas.",
        ncertRef: "lecs103, lecs104",
        completed: false
      },
      {
        id: "w7-d2",
        day: "Day 2",
        task: "Sorting & Searching Algorithms: Read lecs105.pdf & lecs106.pdf; Bubble, Selection, Insertion, Merge, Quick sort complexities; Linear vs Binary search.",
        ncertRef: "lecs105, lecs106",
        completed: false
      },
      {
        id: "w7-d3",
        day: "Day 3",
        task: "Trees & Graphs: Binary tree properties, Inorder, Preorder, Postorder traversals, BST search property, BFS vs DFS graph traversals.",
        ncertRef: "DS Core",
        completed: false
      },
      {
        id: "w7-d4",
        day: "Day 4",
        task: "Cyber Threats & Malware: Read lecs112.pdf; Virus vs Worm vs Trojan, Ransomware, Phishing, DoS/DDoS, SQL Injection, XSS, Firewalls.",
        ncertRef: "lecs112",
        completed: false
      },
      {
        id: "w7-d5",
        day: "Day 5",
        task: "Cryptography & IT Act 2000: Symmetric vs Asymmetric (RSA), Digital Signatures; IT Act 2000 sections (Sec 43, 65, 66, 66C, 66D, 67, 72).",
        ncertRef: "lecs112, kecs111",
        completed: false
      },
      {
        id: "w7-d6",
        day: "Day 6",
        task: "Web Technologies & HTML/CSS: HTML5 tags, tables (`colspan`/`rowspan`), forms, CSS box model (Margin, Border, Padding, Content), HTTP status codes.",
        ncertRef: "Web Tech",
        completed: false
      },
      {
        id: "w7-d7",
        day: "Day 7",
        task: "Week 7 Combined Mock: Solve 60 MCQs on Data Structures, Security, and Web concepts.",
        ncertRef: "Revision",
        completed: false
      }
    ]
  },
  {
    weekNumber: 8,
    title: "Week 8: Emerging Trends, MS Office & Full Length Mocks",
    focus: "Cover Emerging Trends, rapid MS Office shortcuts, and simulate 3 full 80-question BPSC Computer Science mock exams under timed conditions.",
    targetHours: "5 Hours / Day",
    ncertChapters: ["kecs103.pdf (Ch. 3)", "Full Syllabus Mocks"],
    milestones: [
      {
        id: "w8-d1",
        day: "Day 1",
        task: "Emerging Trends: Read kecs103.pdf; AI/ML types, 5 V's of Big Data, Cloud models (IaaS/PaaS/SaaS), IoT concepts, Blockchain ledger basics.",
        ncertRef: "kecs103",
        completed: false
      },
      {
        id: "w8-d2",
        day: "Day 2",
        task: "MS Office Rapid Review: Essential Word shortcuts (Ctrl+A..Z), Excel formulas (`SUM`, `AVERAGE`, `COUNT`, `COUNTA`, `IF`, `VLOOKUP`), PPT shortcuts (F5).",
        ncertRef: "Office Suite",
        completed: false
      },
      {
        id: "w8-d3",
        day: "Day 3",
        task: "FULL MOCK 1 (80 Questions, 80 Marks): Timed 90-minute computer science paper under negative marking constraint; Analyze errors.",
        ncertRef: "Full Mock",
        completed: false
      },
      {
        id: "w8-d4",
        day: "Day 4",
        task: "Tier 1 Targeted Revision: Revise top mistakes in Python output tracing, SQL Joins/Grouping, and Network protocol ports.",
        ncertRef: "Tier 1",
        completed: false
      },
      {
        id: "w8-d5",
        day: "Day 5",
        task: "FULL MOCK 2 (80 Questions, 80 Marks): Second full-length test; Target 65+ score; Analyze question selection strategy.",
        ncertRef: "Full Mock",
        completed: false
      },
      {
        id: "w8-d6",
        day: "Day 6",
        task: "FULL MOCK 3 (80 Questions, 80 Marks): Final dress rehearsal test; Calibrate time management: 45 min for Tier 1, 30 min for Tier 2/3.",
        ncertRef: "Full Mock",
        completed: false
      },
      {
        id: "w8-d7",
        day: "Day 7",
        task: "Formula & Cheat Sheet Flash Revision: Review 1-page quick reference sheets, sleep well, and prepare for exam day confidence!",
        ncertRef: "Final Polish",
        completed: false
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = STUDY_PLAN_DATA;
}
