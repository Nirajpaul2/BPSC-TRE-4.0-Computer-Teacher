// NCERT Computer Science Class 11 & 12 Complete Digital Mapping
// kecs1dd (Class 11, 11 chapters) & lecs1dd (Class 12, 13 chapters)

const NCERT_DATA = {
  class11: {
    title: "NCERT Class 11 Computer Science (Book Code 083)",
    folder: "kecs1dd",
    chapters: [
      {
        fileCode: "kecs101",
        isFree: true,
        fileName: "kecs101.pdf",
        chapterNumber: 1,
        title: "Computer System",
        relevance: "Medium",
        relevanceBadge: "badge-medium",
        topics: [
          "Introduction to computer system & components",
          "CPU, Memory, Input/Output devices",
          "Evolution of computer & generations",
          "Computer memory types, cache, memory units",
          "Software types: System, Application, Utilities"
        ],
        bpscFocus: "Direct memory units conversion questions (e.g. 1 TB in bytes), Cache hierarchy, and compiler vs interpreter differences.",
        pdfPath: "kecs1dd/kecs101.pdf"
      },
      {
        fileCode: "kecs102",
        isFree: false,
        fileName: "kecs102.pdf",
        chapterNumber: 2,
        title: "Encoding Schemes and Number System",
        relevance: "High",
        relevanceBadge: "badge-high",
        topics: [
          "Decimal, Binary, Octal, Hexadecimal conversions",
          "Fractional number conversions",
          "ASCII (7-bit & 8-bit), ISCII standard",
          "Unicode (UTF-8, UTF-16, UTF-32)"
        ],
        bpscFocus: "Mandatory 2–3 questions on Base conversions (especially Hex to Binary and Octal to Hex), ASCII code values of 'A' (65) and 'a' (97).",
        pdfPath: "kecs1dd/kecs102.pdf"
      },
      {
        fileCode: "kecs103",
        isFree: false,
        fileName: "kecs103.pdf",
        chapterNumber: 3,
        title: "Emerging Trends",
        relevance: "Low-Medium",
        relevanceBadge: "badge-low",
        topics: [
          "Artificial Intelligence (AI), Machine Learning (ML), NLP",
          "Big Data & 5 V's",
          "Internet of Things (IoT) & Smart devices",
          "Cloud Computing: IaaS, PaaS, SaaS",
          "Grid computing, Blockchain basics"
        ],
        bpscFocus: "Cloud service model identification (e.g. Gmail = SaaS, AWS EC2 = IaaS), and 5 V's of Big Data.",
        pdfPath: "kecs1dd/kecs103.pdf"
      },
      {
        fileCode: "kecs104",
        isFree: false,
        fileName: "kecs104.pdf",
        chapterNumber: 4,
        title: "Introduction to Problem Solving",
        relevance: "High",
        relevanceBadge: "badge-high",
        topics: [
          "Steps in Problem Solving",
          "Algorithm definition and properties",
          "Flowchart symbols and conventions",
          "Pseudocode writing and control logic"
        ],
        bpscFocus: "Flowchart standard symbol shapes (e.g. decision box = diamond, process = rectangle) and algorithm characteristics.",
        pdfPath: "kecs1dd/kecs104.pdf"
      },
      {
        fileCode: "kecs105",
        isFree: false,
        fileName: "kecs105.pdf",
        chapterNumber: 5,
        title: "Getting Started with Python",
        relevance: "Critical",
        relevanceBadge: "badge-critical",
        topics: [
          "Python features & interactive vs script mode",
          "Tokens, Keywords, Identifiers naming rules",
          "Variables, Dynamic typing, Python memory model",
          "Data types: int, float, complex, bool, None",
          "Operators (arithmetic, logical, bitwise, identity 'is', membership 'in')",
          "Operator precedence & expression evaluation"
        ],
        bpscFocus: "Tricky precedence questions (`**` vs unary minus), `is` vs `==`, floor division with negative numbers `//`.",
        pdfPath: "kecs1dd/kecs105.pdf"
      },
      {
        fileCode: "kecs106",
        isFree: false,
        fileName: "kecs106.pdf",
        chapterNumber: 6,
        title: "Flow of Control",
        relevance: "Critical",
        relevanceBadge: "badge-critical",
        topics: [
          "Conditional branching: if, if-else, if-elif-else",
          "Loops: while loop, for loop with range()",
          "Jump statements: break, continue, pass",
          "Nested loops and loop else suite",
          "Dry-running and output tracing"
        ],
        bpscFocus: "Predict the output questions on range with step (e.g. `range(5, 0, -2)`), `break` avoiding `else` clause.",
        pdfPath: "kecs1dd/kecs106.pdf"
      },
      {
        fileCode: "kecs107",
        isFree: false,
        fileName: "kecs107.pdf",
        chapterNumber: 7,
        title: "Functions",
        relevance: "Critical",
        relevanceBadge: "badge-critical",
        topics: [
          "Built-in vs Module vs User-defined functions",
          "Function parameters, arguments, return values",
          "Default arguments, keyword arguments",
          "Scope of variables: Local vs Global, 'global' keyword",
          "Math and Random modules functions"
        ],
        bpscFocus: "Mutable default arguments gotchas, `random.randint(a,b)` inclusive bounds vs `randrange()`, global variable updates.",
        pdfPath: "kecs1dd/kecs107.pdf"
      },
      {
        fileCode: "kecs108",
        isFree: false,
        fileName: "kecs108.pdf",
        chapterNumber: 8,
        title: "Strings",
        relevance: "Critical",
        relevanceBadge: "badge-critical",
        topics: [
          "String indices (positive & negative)",
          "String slicing [start:stop:step]",
          "String immutability",
          "String methods: split, join, find, replace, strip, count",
          "Character check methods: isalpha, isdigit, isalnum"
        ],
        bpscFocus: "Output questions on string slicing with negative step `[::-1]` or `[2:7:2]`, `.split()` return type (list), `.find()` returning -1 on failure.",
        pdfPath: "kecs1dd/kecs108.pdf"
      },
      {
        fileCode: "kecs109",
        isFree: false,
        fileName: "kecs109.pdf",
        chapterNumber: 9,
        title: "Lists",
        relevance: "Critical",
        relevanceBadge: "badge-critical",
        topics: [
          "List mutability & heterogeneous elements",
          "Indexing, slicing, concatenation, repetition",
          "List methods: append, extend, insert, pop, remove, sort, reverse",
          "List comprehension syntax and nested lists",
          "Copying lists: shallow vs deep copy"
        ],
        bpscFocus: "`append([1,2])` vs `extend([1,2])` difference, list mutability in functions, `.pop()` vs `.remove()`.",
        pdfPath: "kecs1dd/kecs109.pdf"
      },
      {
        fileCode: "kecs110",
        isFree: false,
        fileName: "kecs110.pdf",
        chapterNumber: 10,
        title: "Tuples and Dictionaries",
        relevance: "Critical",
        relevanceBadge: "badge-critical",
        topics: [
          "Tuple immutability, single element tuple (5,)",
          "Tuple packing and unpacking",
          "Dictionary key-value pairs (keys must be immutable)",
          "Dictionary methods: keys, values, items, get, update, pop",
          "Dictionary comprehension"
        ],
        bpscFocus: "Attempting to modify tuple elements throwing TypeError, allowed dictionary key types (e.g. list cannot be key, tuple can).",
        pdfPath: "kecs1dd/kecs110.pdf"
      },
      {
        fileCode: "kecs111",
        isFree: false,
        fileName: "kecs111.pdf",
        chapterNumber: 11,
        title: "Societal Impacts",
        relevance: "Low",
        relevanceBadge: "badge-low",
        topics: [
          "Digital footprint (active & passive)",
          "Digital etiquette and netiquette",
          "Cyber bullying, trolling, cyber crimes",
          "Indian IT Act 2000 & 2008 amendments",
          "E-waste management & disposal"
        ],
        bpscFocus: "Key sections of IT Act 2000 (Sec 43, 66, 66C, 66D) and Intellectual Property Rights concepts.",
        pdfPath: "kecs1dd/kecs111.pdf"
      }
    ]
  },
  class12: {
    title: "NCERT Class 12 Computer Science (Book Code 083)",
    folder: "lecs1dd",
    chapters: [
      {
        fileCode: "lecs101",
        isFree: false,
        fileName: "lecs101.pdf",
        chapterNumber: 1,
        title: "Exception Handling in Python",
        relevance: "High",
        relevanceBadge: "badge-high",
        topics: [
          "Syntax errors vs exceptions",
          "try, except, else, finally blocks",
          "Built-in exceptions hierarchy",
          "Raising exceptions with 'raise'",
          "Custom exceptions"
        ],
        bpscFocus: "Which block executes when no exception occurs (`else`), and which block always executes (`finally`).",
        pdfPath: "lecs1dd/lecs101.pdf"
      },
      {
        fileCode: "lecs102",
        isFree: false,
        fileName: "lecs102.pdf",
        chapterNumber: 2,
        title: "File Handling in Python",
        relevance: "High",
        relevanceBadge: "badge-high",
        topics: [
          "Text files, Binary files, and CSV files",
          "Opening modes ('r', 'w', 'a', 'r+', 'wb', 'rb')",
          "File methods: read, readline, readlines, write, writelines",
          "File pointer: tell() and seek()",
          "Pickle module (dump, load) and CSV module"
        ],
        bpscFocus: "Return type of `readlines()` (list of strings), `seek(offset, whence)` values (0, 1, 2), and pickle methods.",
        pdfPath: "lecs1dd/lecs102.pdf"
      },
      {
        fileCode: "lecs103",
        isFree: false,
        fileName: "lecs103.pdf",
        chapterNumber: 3,
        title: "Stack",
        relevance: "Critical",
        relevanceBadge: "badge-critical",
        topics: [
          "LIFO principle",
          "Stack operations: push, pop, peek, isEmpty",
          "Overflow and Underflow conditions",
          "Implementation using Python lists",
          "Applications: Infix to Postfix conversion, Postfix evaluation"
        ],
        bpscFocus: "Mandatory numerical evaluation of Postfix expression using stack (e.g. `10 5 + 2 *`), and balanced parentheses checking.",
        pdfPath: "lecs1dd/lecs103.pdf"
      },
      {
        fileCode: "lecs104",
        isFree: false,
        fileName: "lecs104.pdf",
        chapterNumber: 4,
        title: "Queue",
        relevance: "Critical",
        relevanceBadge: "badge-critical",
        topics: [
          "FIFO principle",
          "Queue operations: enqueue, dequeue, front, rear",
          "Circular Queue, Deque (Double Ended Queue)",
          "Linear queue limitation & circular queue index math: (rear + 1) % size"
        ],
        bpscFocus: "Front and rear pointer movements during insertion/deletion, circular queue formula.",
        pdfPath: "lecs1dd/lecs104.pdf"
      },
      {
        fileCode: "lecs105",
        isFree: false,
        fileName: "lecs105.pdf",
        chapterNumber: 5,
        title: "Sorting",
        relevance: "Critical",
        relevanceBadge: "badge-critical",
        topics: [
          "Bubble Sort algorithm and pass tracking",
          "Selection Sort algorithm and minimum element swaps",
          "Insertion Sort algorithm and shift operations",
          "Time and Space complexity comparisons"
        ],
        bpscFocus: "Best/Worst case time complexities, number of comparisons in n elements for each sort, algorithm stability.",
        pdfPath: "lecs1dd/lecs105.pdf"
      },
      {
        fileCode: "lecs106",
        isFree: false,
        fileName: "lecs106.pdf",
        chapterNumber: 6,
        title: "Searching",
        relevance: "Critical",
        relevanceBadge: "badge-critical",
        topics: [
          "Linear Search logic and complexity O(n)",
          "Binary Search logic on sorted sequences O(log n)",
          "Middle index calculation: (low + high) // 2",
          "Comparison count in binary search for n items"
        ],
        bpscFocus: "Max comparisons in binary search for 100 or 1000 items (ceil(log2(n))), pre-condition of sorted data.",
        pdfPath: "lecs1dd/lecs106.pdf"
      },
      {
        fileCode: "lecs107",
        isFree: false,
        fileName: "lecs107.pdf",
        chapterNumber: 7,
        title: "Understanding Data",
        relevance: "Medium",
        relevanceBadge: "badge-medium",
        topics: [
          "Data vs Information vs Knowledge",
          "Structured, Unstructured, and Semi-structured data",
          "Data collection, processing, and statistical measures (Mean, Median, Mode)"
        ],
        bpscFocus: "Definitions and data classification examples.",
        pdfPath: "lecs1dd/lecs107.pdf"
      },
      {
        fileCode: "lecs108",
        isFree: false,
        fileName: "lecs108.pdf",
        chapterNumber: 8,
        title: "Database Concepts",
        relevance: "Critical",
        relevanceBadge: "badge-critical",
        topics: [
          "Limitations of file processing systems",
          "Relational model: Relation, Tuple, Attribute, Domain",
          "Degree (columns) vs Cardinality (rows)",
          "Keys: Primary Key, Candidate Key, Alternate Key, Foreign Key",
          "Relational integrity constraints (Entity & Referential)"
        ],
        bpscFocus: "Frequent BPSC MCQs on Degree vs Cardinality, Foreign Key referential integrity, and candidate key identification.",
        pdfPath: "lecs1dd/lecs108.pdf"
      },
      {
        fileCode: "lecs109",
        isFree: false,
        fileName: "lecs109.pdf",
        chapterNumber: 9,
        title: "Structured Query Language (SQL)",
        relevance: "Critical",
        relevanceBadge: "badge-critical",
        topics: [
          "DDL (CREATE, ALTER, DROP, TRUNCATE)",
          "DML (INSERT, UPDATE, DELETE)",
          "DQL (SELECT with WHERE, ORDER BY, GROUP BY, HAVING)",
          "Aggregate functions: COUNT, SUM, AVG, MIN, MAX with NULLs",
          "Joins: INNER JOIN, LEFT JOIN, RIGHT JOIN, NATURAL JOIN",
          "Python SQL database connectivity"
        ],
        bpscFocus: "Guaranteed 8–10 questions: Output of GROUP BY with HAVING, `WHERE` vs `HAVING`, JOIN query outputs, NULL handling.",
        pdfPath: "lecs1dd/lecs109.pdf"
      },
      {
        fileCode: "lecs110",
        isFree: false,
        fileName: "lecs110.pdf",
        chapterNumber: 10,
        title: "Computer Networks",
        relevance: "Critical",
        relevanceBadge: "badge-critical",
        topics: [
          "Network types: LAN, MAN, WAN, PAN",
          "Topologies: Star, Bus, Ring, Mesh, Tree",
          "Devices: Modem, Hub, Switch, Repeater, Bridge, Router, Gateway",
          "MAC address vs IP address",
          "Network protocols: HTTP, HTTPS, FTP, SSH, DNS, DHCP, VoIP"
        ],
        bpscFocus: "Device to OSI layer mapping (Switch = Layer 2, Router = Layer 3), Mesh topology link count formula `n*(n-1)/2`, Port numbers.",
        pdfPath: "lecs1dd/lecs110.pdf"
      },
      {
        fileCode: "lecs111",
        isFree: false,
        fileName: "lecs111.pdf",
        chapterNumber: 11,
        title: "Data Communication",
        relevance: "High",
        relevanceBadge: "badge-high",
        topics: [
          "Concept of communication, Sender, Receiver, Medium",
          "Transmission media: Twisted pair (UTP/STP), Coaxial, Fiber Optic",
          "Wireless transmission: Radio, Microwave, Infrared, Satellite",
          "Data transmission modes: Simplex, Half-duplex, Full-duplex",
          "Switching techniques: Circuit switching, Packet switching"
        ],
        bpscFocus: "Fiber optics total internal reflection principle, Full duplex vs half duplex examples, Packet switching in IP networks.",
        pdfPath: "lecs1dd/lecs111.pdf"
      },
      {
        fileCode: "lecs112",
        isFree: false,
        fileName: "lecs112.pdf",
        chapterNumber: 12,
        title: "Security Aspects",
        relevance: "High",
        relevanceBadge: "badge-high",
        topics: [
          "Cyber threats: Virus, Worm, Trojan, Ransomware, Spyware",
          "Cyber attacks: Phishing, DoS/DDoS, Spoofing, Eavesdropping",
          "Network defense: Firewalls, Antivirus, HTTPS, Cookies",
          "Cryptography: Symmetric vs Asymmetric encryption, Digital Signatures"
        ],
        bpscFocus: "Difference between Virus (needs host) and Worm (standalone), Ransomware characteristics, Public key cryptography basics.",
        pdfPath: "lecs1dd/lecs112.pdf"
      },
      {
        fileCode: "lecs113",
        isFree: false,
        fileName: "lecs113.pdf",
        chapterNumber: 13,
        title: "Project Based Learning",
        relevance: "Skip",
        relevanceBadge: "badge-skip",
        topics: [
          "Software project lifecycle",
          "Project selection, implementation, documentation"
        ],
        bpscFocus: "Practical school lab guidance. Not tested in theoretical multiple-choice competitive examination. Safe to SKIP.",
        pdfPath: "lecs1dd/lecs113.pdf"
      }
    ]
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = NCERT_DATA;
}
