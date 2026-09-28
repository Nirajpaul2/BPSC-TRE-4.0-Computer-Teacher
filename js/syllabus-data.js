const SYLLABUS_DATA = [
  {
    id: "unit-1",
    unitNumber: 1,
    title: "Computer Fundamentals & Architecture",
    tier: "Tier 3",
    tierClass: "tier-3",
    weightage: "4–5 Questions (~6%)",
    isFree: true,
    treTag: "TRE 1.0: 8 Qs | TRE 2.0: 5 Qs | TRE 3.0: 4 Qs",
    pedagogyTip: "👨‍🏫 Teacher Note: BPSC tests this from an instructional viewpoint. Focus on explaining memory hierarchy (Registers to Secondary) and Von Neumann instruction cycle clearly to Class 11 students.",
    ncertRef: "Class 11 Ch. 1 (kecs101.pdf)",
    ncertFolder: "kecs1dd",
    ncertFile: "kecs101.pdf",
    summary: "Basic understanding of computer systems, architecture, CPU components, memory hierarchy, and software types. 🟢 100% FREE PREVIEW UNIT.",
    chapters: [
      {
        title: "1.1 Computer System Overview",
        topics: [
          "Characteristics of computers: Speed, Accuracy, Diligence, Storage capacity, Versatility",
          "Generations of Computers: 1st (Vacuum Tubes), 2nd (Transistors), 3rd (Integrated Circuits), 4th (VLSI/Microprocessors), 5th (ULSI/AI)",
          "Classification of Computers: Analog, Digital, Hybrid; Microcomputers, Minicomputers, Mainframe, Supercomputers",
          "Von Neumann Architecture: Stored-program concept, CPU, Memory, Bus, and I/O interface",
          "Instruction Cycle: Fetch, Decode, Execute, Store cycle"
        ]
      },
      {
        title: "1.2 Hardware Organization & CPU",
        topics: [
          "CPU Architecture: Arithmetic Logic Unit (ALU), Control Unit (CU), Internal Registers",
          "Processor Registers: Program Counter (PC), Instruction Register (IR), Memory Address Register (MAR), Memory Data Register (MDR), Accumulator (AC)",
          "System Bus: Data Bus (bidirectional), Address Bus (unidirectional), Control Bus",
          "Input Devices: Keyboard, Mouse, Light Pen, Optical Mark Reader (OMR), Optical Character Reader (OCR), Barcode Reader, QR Scanner",
          "Output Devices: Monitors (CRT, LCD, LED, OLED), Printers (Impact: Dot Matrix; Non-Impact: Inkjet, Laser), Plotters",
          "I/O Interfaces & Data Transfer: Programmed I/O, Interrupt-driven I/O, Direct Memory Access (DMA)"
        ]
      },
      {
        title: "1.3 Memory Hierarchy & Storage",
        topics: [
          "Memory Hierarchy: Registers → Cache (L1, L2, L3) → Primary Memory (RAM/ROM) → Secondary Storage → Tertiary/Offline Storage",
          "Primary Memory: Random Access Memory (SRAM vs DRAM, volatile), Read Only Memory (PROM, EPROM, EEPROM, Flash ROM)",
          "Cache Memory: Locality of Reference (Temporal and Spatial Locality), Hit ratio",
          "Secondary Storage: Magnetic Disks (HDD), Solid State Drives (SSD, NVMe), Optical Disks (CD, DVD, Blu-ray)",
          "Units of Memory: Bit, Nibble (4 bits), Byte (8 bits), KB (1024 B), MB, GB, TB, PB, EB"
        ]
      },
      {
        title: "1.4 Software Types & System Concepts",
        topics: [
          "System Software: Operating System, Device Drivers, System Utilities",
          "Programming Language Translators: Assembler (Assembly to Machine code), Compiler (Entire source code to object code), Interpreter (Line-by-line execution)",
          "Application Software: General purpose (Word processors, Spreadsheets) vs Specific purpose (Custom billing, ERP)",
          "Software Licensing: Open Source Software (FOSS/FLOSS, GPL), Freeware, Shareware, Proprietary Software"
        ]
      }
    ]
  },
  {
    id: "unit-2",
    unitNumber: 2,
    title: "Number Systems, Codes & Digital Logic",
    tier: "Tier 2",
    tierClass: "tier-2",
    weightage: "6–8 Questions (~9%)",
    isFree: false,
    treTag: "TRE 1.0: 6 Qs | TRE 2.0: 6 Qs | TRE 3.0: 5 Qs",
    pedagogyTip: "👨‍🏫 Teacher Note: Emphasize De Morgan laws and K-map grouping. In TRE exams, question setters love testing dont care conditions and 4-variable simplification.",
    ncertRef: "Class 11 Ch. 2 (kecs102.pdf)",
    ncertFolder: "kecs1dd",
    ncertFile: "kecs102.pdf",
    summary: "Number base conversions, 1s/2s complement representation, character encodings, Boolean algebra laws, and logic circuits.",
    chapters: [
      {
        title: "2.1 Number Systems & Radix Conversion",
        topics: [
          "Positional Number Systems: Binary (Base-2), Octal (Base-8), Decimal (Base-10), Hexadecimal (Base-16)",
          "Conversions: Decimal to Binary/Octal/Hexadecimal (Successive division method)",
          "Conversions: Binary/Octal/Hexadecimal to Decimal (Positional weight method)",
          "Direct Conversions: Binary ↔ Octal (grouping of 3 bits), Binary ↔ Hexadecimal (grouping of 4 bits)",
          "Fractional Number Conversions: Converting fractional binary, octal, hex to decimal and vice versa"
        ]
      },
      {
        title: "2.2 Binary Arithmetic & Complements",
        topics: [
          "Binary Arithmetic: Binary Addition, Binary Subtraction, Binary Multiplication",
          "1's Complement: Bitwise inversion of binary numbers",
          "2's Complement: 1's Complement + 1, used for signed integer representation",
          "Subtraction using 1's and 2's complement (End-around carry rule)",
          "Signed Magnitude vs 1's Complement vs 2's Complement range of n-bit numbers (-(2^(n-1)) to 2^(n-1) - 1 for 2's comp)"
        ]
      },
      {
        title: "2.3 Character Encoding Schemes",
        topics: [
          "ASCII (American Standard Code for Information Interchange): 7-bit ASCII (128 characters) and 8-bit Extended ASCII (256 characters)",
          "Key ASCII codes: 'A'-'Z' (65-90), 'a'-'z' (97-122), '0'-'9' (48-57), Space (32)",
          "ISCII (Indian Script Code for Information Interchange): 8-bit standard for Indian languages",
          "Unicode: Universal encoding standard covering world scripts (UTF-8, UTF-16, UTF-32)"
        ]
      },
      {
        title: "2.4 Boolean Algebra & Logic Gates",
        topics: [
          "Boolean Postulates & Basic Operations: Logical AND, Logical OR, Logical NOT",
          "Boolean Laws: Identity, Null/Dominance, Idempotent, Involution, Complementarity, Commutative, Associative, Distributive, Absorption laws",
          "De Morgan's Theorems: (A + B)' = A' · B' and (A · B)' = A' + B' (Extensively tested in BPSC!)",
          "Canonical Forms: Sum of Products (SOP / Minterms Σm) and Product of Sums (POS / Maxterms ΠM)",
          "Logic Gates: Primary Gates (AND, OR, NOT), Universal Gates (NAND, NOR), Special Gates (XOR, XNOR)",
          "Karnaugh Maps (K-Maps): 2-variable, 3-variable, and 4-variable simplification, Pair, Quad, Octet formation, Don't Care conditions (X)"
        ]
      }
    ]
  },
  {
    id: "unit-3",
    unitNumber: 3,
    title: "Problem Solving, Algorithms & Complexity",
    tier: "Tier 2",
    tierClass: "tier-2",
    weightage: "Included in Programming & DS (~4–6 Qs)",
    isFree: false,
    treTag: "TRE 1.0: 4 Qs | TRE 2.0: 3 Qs | TRE 3.0: 4 Qs",
    pedagogyTip: "👨‍🏫 Teacher Note: Flowchart ANSI symbols (diamond for decision, parallelogram for I/O) are standard board exam questions frequently asked in TRE.",
    ncertRef: "Class 11 Ch. 4 (kecs104.pdf)",
    ncertFolder: "kecs1dd",
    ncertFile: "kecs104.pdf",
    summary: "Algorithm design methodologies, flowchart conventions, pseudocode, asymptotic notation, and complexity calculations.",
    chapters: [
      {
        title: "3.1 Problem Solving Methodology",
        topics: [
          "Problem Formulation: Analyzing the problem, Understanding inputs, desired outputs, and constraints",
          "Developing an Algorithm: Step-by-step logical sequence of finite operations",
          "Properties of an Algorithm: Input, Output, Definiteness, Finiteness, Effectiveness, Language independence",
          "Coding, Testing, and Debugging: Syntax errors, Logical errors, Runtime errors"
        ]
      },
      {
        title: "3.2 Representation of Algorithms",
        topics: [
          "Flowcharts: Standard ANSI symbols (Oval: Start/End, Parallelogram: Input/Output, Rectangle: Process, Diamond: Decision, Circle: Connector, Arrows: Flow)",
          "Pseudocode: Structured English representations without language-specific syntax",
          "Decision Tables and Decision Trees"
        ]
      },
      {
        title: "3.3 Asymptotic Notation & Complexity",
        topics: [
          "Time Complexity vs Space Complexity",
          "Asymptotic Notations: Big-O (Worst-case upper bound), Big-Omega Ω (Best-case lower bound), Big-Theta Θ (Average/Tight bound)",
          "Common Time Complexity Orders: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(n³) < O(2ⁿ) < O(n!)",
          "Analysis of iterative loops and recursive relations"
        ]
      }
    ]
  },
  {
    id: "unit-4",
    unitNumber: 4,
    title: "Python Programming & OOPs (Core Focus)",
    tier: "Tier 1",
    tierClass: "tier-1",
    weightage: "18–22 Questions (~25% of Subject) — CRITICAL",
    isFree: false,
    treTag: "TRE 1.0: 12 Qs | TRE 2.0: 18 Qs | TRE 3.0: 22 Qs (Highest Weightage)",
    pedagogyTip: "👨‍🏫 Teacher Note: BPSC heavily emphasizes classroom blackboard execution — dry-running nested loops, string slicing steps [::-1], and dictionary mutability.",
    ncertRef: "Class 11 Ch. 5–10 (kecs105–110.pdf) & Class 12 Ch. 1–2 (lecs101–102.pdf)",
    ncertFolder: "kecs1dd & lecs1dd",
    ncertFile: "kecs105.pdf",
    summary: "The single biggest scoring area in BPSC TRE. Includes output tracing, data types, functions, strings, lists, dicts, OOP, exceptions, and file handling.",
    chapters: [
      {
        title: "4.1 Python Fundamentals & Operators (kecs105)",
        topics: [
          "Python Features: Interpreted, High-level, Dynamically typed, Indentation-based block structure",
          "Tokens: Keywords (35+ in Python 3, e.g. False, None, True, and, as, assert, break, class, continue, def, etc.), Identifiers naming rules",
          "Literals: Numeric (Integer, Float, Complex numbers: a + bj), String literals (single, double, triple quotes), Boolean (True, False), NoneType",
          "Variables and Dynamic Typing: Object referencing, mutable vs immutable concept, `id()`, `type()`",
          "Operators: Arithmetic (`+`, `-`, `*`, `/`, `//` floor division, `%` modulo, `**` exponentiation)",
          "Relational Operators: `==`, `!=`, `>`, `<`, `>=`, `<=`",
          "Logical Operators: `and`, `or`, `not` (Short-circuit evaluation behaviour)",
          "Bitwise Operators: `&`, `|`, `^`, `~`, `<<`, `>>`",
          "Assignment Operators: `=`, `+=`, `-=`, `*=`, `/=`, `//=`, `%=`, `**=`",
          "Identity Operators: `is`, `is not` (Checks memory identity/reference)",
          "Membership Operators: `in`, `not in` (Searches sequence membership)",
          "Operator Precedence & Associativity (Parentheses → Exponentiation → Unary → Multiplicative → Additive → Relational → Identity/Membership → Logical)"
        ]
      },
      {
        title: "4.2 Flow of Control & Loops (kecs106)",
        topics: [
          "Conditional Statements: `if`, `if-else`, `if-elif-else`, Nested `if`",
          "The `range()` function: `range(stop)`, `range(start, stop)`, `range(start, stop, step)` (exclusive stop, step positive/negative)",
          "Loops: `for` loop (sequence iteration), `while` loop (condition-based)",
          "Loop Control: `break` (exit loop), `continue` (skip iteration), `pass` (null statement)",
          "`else` suite with loops: Executes ONLY if loop finishes naturally without encountering `break`",
          "Predict the Output Questions: Nested loops, tricky range bounds, break/continue interactions"
        ]
      },
      {
        title: "4.3 Functions, Scope & Modules (kecs107)",
        topics: [
          "Function Definition & Call: `def` keyword, return statements (returning single/multiple values as tuple)",
          "Function Arguments: Positional arguments, Default arguments (must follow non-default args!), Keyword arguments, Variable-length arguments (`*args`, `**kwargs`)",
          "Scope of Variables: LEGB Rule (Local, Enclosing, Global, Built-in)",
          "Global Statement: Modifying global variables inside functions using `global` keyword",
          "Recursion: Base case, Recursive case, Stack overflow, Classic examples (Factorial, Fibonacci, GCD)",
          "Anonymous Functions: Lambda expressions `lambda arguments: expression` with `map()`, `filter()`",
          "Standard Library Modules: `math` (`sqrt`, `ceil`, `floor`, `fabs`, `pow`, `pi`), `random` (`random()`, `randint(a,b)`, `randrange(a,b,step)`, `choice()`, `shuffle()`)"
        ]
      },
      {
        title: "4.4 Strings & Operations (kecs108)",
        topics: [
          "String Characteristics: Immutable sequence of characters, Zero-based positive index (`0` to `n-1`), Negative index (`-n` to `-1`)",
          "String Slicing: `str[start:stop:step]` (Reversing string: `s[::-1]`, skipping characters, negative step rules)",
          "String Operators: `+` (concatenation), `*` (repetition), `in`, `not in`",
          "Built-in String Methods: `upper()`, `lower()`, `capitalize()`, `title()`, `swapcase()`",
          "String Search & Check: `find()`, `rfind()`, `index()`, `count()`, `startswith()`, `endswith()`",
          "Character Testing: `isalpha()`, `isdigit()`, `isalnum()`, `isspace()`, `islower()`, `isupper()`",
          "String Manipulation: `strip()`, `lstrip()`, `rstrip()`, `replace(old, new, count)`, `split(delimiter)`, `join(iterable)`",
          "String Formatting: `%` formatting, `.format()` method, f-strings (`f'{var}'`)"
        ]
      },
      {
        title: "4.5 Lists & Comprehensions (kecs109)",
        topics: [
          "List Characteristics: Mutable, Ordered collection of heterogeneous elements",
          "List Operations: Indexing, Slicing, Concatenation `+`, Replication `*`, Membership `in`",
          "List Modification Methods: `append(item)`, `extend(iterable)`, `insert(index, item)`",
          "List Deletion Methods: `pop(index)` (returns popped item), `remove(value)`, `clear()`, `del list[index]`",
          "List Utility Methods: `index(item)`, `count(item)`, `sort(reverse=False)`, `reverse()`, `copy()` (shallow vs deep copy)",
          "List Comprehension: Syntax `[expression for item in iterable if condition]`, Nested list comprehension",
          "Built-in Sequence Functions: `len()`, `min()`, `max()`, `sum()`, `sorted()`, `reversed()`, `enumerate()`, `zip()`"
        ]
      },
      {
        title: "4.6 Tuples & Dictionaries (kecs110)",
        topics: [
          "Tuples: Immutable sequence, Single element tuple requires trailing comma `(5,)`",
          "Tuple Operations: Indexing, Slicing, Tuple packing and unpacking `a, b, c = t`",
          "Dictionary Characteristics: Key-Value pairs, Keys must be immutable (int, str, tuple) and unique; Values can be any type and mutable",
          "Dictionary Access: `dict[key]` (raises KeyError if absent) vs `dict.get(key, default)`",
          "Dictionary Methods: `keys()`, `values()`, `items()`, `update()`, `pop(key)`, `popitem()`, `setdefault()`, `clear()`",
          "Dictionary Comprehension: `{k: v for (k, v) in iterable}`",
          "Sets: Unordered collection of unique immutable items, Set operations (`union`, `intersection`, `difference`, `symmetric_difference`)"
        ]
      },
      {
        title: "4.7 Exception Handling (lecs101)",
        topics: [
          "Errors vs Exceptions: Syntax errors (parsing stage) vs Runtime exceptions (execution stage)",
          "Exception Handling Blocks: `try`, `except ExceptionType:`, `else:` (runs if no exception), `finally:` (always runs)",
          "Standard Built-in Exceptions: `ZeroDivisionError`, `ValueError`, `TypeError`, `IndexError`, `KeyError`, `FileNotFoundError`, `ImportError`, `AttributeError`, `NameError`",
          "Raising Exceptions: Using `raise` statement with custom messages",
          "Custom User-Defined Exceptions: Inheriting from built-in `Exception` class",
          "Assertions: `assert condition, 'error message'`"
        ]
      },
      {
        title: "4.8 File Handling in Python (lecs102)",
        topics: [
          "File Types: Text Files (human-readable, EOL characters) vs Binary Files (raw bytes, images, executable) vs CSV Files",
          "File Opening Modes: `'r'` (read), `'w'` (write/overwrite), `'a'` (append), `'r+'` (read/write), `'w+'` (write/read), `'a+'` (append/read), with `'b'` for binary (`'rb'`, `'wb'`)",
          "File Context Manager: `with open('file.txt', 'r') as f:` (automatic closing)",
          "Text File Operations: `read(n)`, `readline()`, `readlines()`, `write(str)`, `writelines(list_of_strings)`",
          "File Pointer Movement: `f.tell()` (current byte position), `f.seek(offset, whence)` (`0` from start, `1` from current, `2` from end)",
          "Binary File Serialization: The `pickle` module (`pickle.dump(obj, file)` and `pickle.load(file)`)",
          "CSV File Handling: The `csv` module (`csv.reader()`, `csv.writer()`, `writerow()`, `writerows()`)"
        ]
      },
      {
        title: "4.9 Object-Oriented Programming (OOP) Concepts",
        topics: [
          "Core OOP Principles: Encapsulation, Abstraction, Inheritance, Polymorphism",
          "Class & Object Definition: `class ClassName:`, creating instances `obj = ClassName()`",
          "Constructor & Self: `__init__(self, ...)` constructor method, `self` reference to current instance",
          "Class Variables (shared across instances) vs Instance Variables (unique per instance)",
          "Inheritance: Single inheritance, Multiple inheritance, Multilevel inheritance, Hierarchical inheritance",
          "Method Overriding & `super()`: Calling parent class methods using `super().__init__()`",
          "Encapsulation: Public attributes, Protected attributes (single underscore `_attr`), Private attributes (double underscore `__attr` name mangling)",
          "Polymorphism & Special Dunder Methods: `__str__()`, `__repr__()`, `__len__()`, `__add__()` operator overloading",
          "Comparison with C++ OOP: Virtual functions, access specifiers (`public`, `protected`, `private`), static members"
        ]
      }
    ]
  },
  {
    id: "unit-5",
    unitNumber: 5,
    title: "Data Structures & Algorithms",
    tier: "Tier 2",
    tierClass: "tier-2",
    weightage: "6–8 Questions (~9%)",
    isFree: false,
    treTag: "TRE 1.0: 7 Qs | TRE 2.0: 6 Qs | TRE 3.0: 7 Qs",
    pedagogyTip: "👨‍🏫 Teacher Note: Postfix evaluation with stack and time complexities of sorting algorithms (Bubble, Insertion, Merge, Quick) are mandatory questions.",
    ncertRef: "Class 12 Ch. 3–6 (lecs103–106.pdf)",
    ncertFolder: "lecs1dd",
    ncertFile: "lecs103.pdf",
    summary: "Stack and Queue operations and applications, Linked Lists, Searching & Sorting algorithms with complexities, Trees, and Graphs.",
    chapters: [
      {
        title: "5.1 Stack Data Structure (lecs103)",
        topics: [
          "Stack Principle: Last In First Out (LIFO) / First In Last Out (FILO)",
          "Stack Operations: `push()` (insert item), `pop()` (remove top item), `peek()` / `top()` (inspect top item), `isEmpty()`, `isFull()`",
          "Conditions: Overflow (pushing into full stack) and Underflow (popping from empty stack)",
          "Python Implementation: Using list (`append()` as push, `pop()` as pop)",
          "Stack Applications: Expression Evaluation (Infix to Postfix, Infix to Prefix conversion)",
          "Evaluation of Postfix Expressions (Step-by-step operand stack evaluation — heavily tested in BPSC!)",
          "Parentheses Matching & Balanced Expression Checking",
          "Recursion Call Stack & Function call management"
        ]
      },
      {
        title: "5.2 Queue Data Structure (lecs104)",
        topics: [
          "Queue Principle: First In First Out (FIFO) / Last In Last Out (LILO)",
          "Queue Operations: `enqueue()` (insert at rear), `dequeue()` (remove from front), `front()`, `rear()`, `isEmpty()`, `isFull()`",
          "Queue Types: Linear Queue, Circular Queue (resolves memory wastage: `rear = (rear + 1) % size`), Double-Ended Queue (Deque: insertion/deletion at both ends), Priority Queue",
          "Python Implementation: Using list or `collections.deque`"
        ]
      },
      {
        title: "5.3 Linked Lists",
        topics: [
          "Linear vs Non-linear Data Structures; Array vs Linked List comparison (Contiguous vs Non-contiguous memory)",
          "Singly Linked List: Node structure (Data + Next pointer), Head pointer, Traversal, Insertion (beginning, end, middle), Deletion",
          "Doubly Linked List: Node structure (Prev pointer + Data + Next pointer), Bidirectional traversal",
          "Circular Linked List: Last node points back to Head node"
        ]
      },
      {
        title: "5.4 Sorting Algorithms (lecs105)",
        topics: [
          "Bubble Sort: Repeated swapping of adjacent elements; Best: O(n), Worst: O(n²), Space: O(1), Stable",
          "Selection Sort: Repeated finding minimum element from unsorted part; Best/Avg/Worst: O(n²), Space: O(1), Unstable",
          "Insertion Sort: Inserting element at correct position in sorted sublist; Best: O(n), Worst: O(n²), Space: O(1), Stable (ideal for small/partially sorted lists)",
          "Merge Sort: Divide and Conquer strategy; Best/Avg/Worst: O(n log n), Space: O(n), Stable",
          "Quick Sort: Divide and Conquer with Pivot partitioning; Best/Avg: O(n log n), Worst: O(n²) when already sorted/poor pivot, Space: O(log n), Unstable",
          "Comparison of Sorting Algorithms: Stability, In-place vs Out-of-place sorting"
        ]
      },
      {
        title: "5.5 Searching Algorithms (lecs106)",
        topics: [
          "Linear Search: Sequential scanning; Best: O(1), Worst/Avg: O(n); Applicable to both sorted and unsorted lists",
          "Binary Search: Divide and Conquer on SORTED array; Compares with middle element; Best: O(1), Worst/Avg: O(log n); Recurrence relation T(n) = T(n/2) + O(1)",
          "Iterative vs Recursive implementation of Binary Search"
        ]
      },
      {
        title: "5.6 Trees & Graphs (Higher CS Fundamentals)",
        topics: [
          "Tree Terminology: Root, Node, Parent, Child, Siblings, Leaf/Terminal node, Subtree, Degree, Level, Height, Depth",
          "Binary Tree: Each node has at most 2 children; Properties: Max nodes at level i is 2^i, Max nodes in binary tree of height h is 2^(h+1) - 1",
          "Tree Traversals: Inorder (Left-Root-Right), Preorder (Root-Left-Right), Postorder (Left-Right-Root)",
          "Binary Search Tree (BST): Left child < Root < Right child; Inorder traversal of BST yields elements in sorted ascending order!",
          "Graph Concepts: Vertices (V), Edges (E), Directed vs Undirected, Weighted graphs, Cyclic vs Acyclic",
          "Graph Representations: Adjacency Matrix (V x V) and Adjacency List",
          "Graph Traversals: Breadth First Search (BFS using Queue) and Depth First Search (DFS using Stack/Recursion)"
        ]
      }
    ]
  },
  {
    id: "unit-6",
    unitNumber: 6,
    title: "Database Management Systems & SQL",
    tier: "Tier 1",
    tierClass: "tier-1",
    weightage: "12–15 Questions (~17% of Subject) — CRITICAL",
    isFree: false,
    treTag: "TRE 1.0: 14 Qs | TRE 2.0: 15 Qs | TRE 3.0: 16 Qs (Goldmine)",
    pedagogyTip: "👨‍🏫 Teacher Note: The most predictable scoring unit! Focus on identifying 1NF vs 2NF vs 3NF and evaluating output of GROUP BY with HAVING.",
    ncertRef: "Class 12 Ch. 8–9 (lecs108–109.pdf)",
    ncertFolder: "lecs1dd",
    ncertFile: "lecs108.pdf",
    summary: "High-scoring predictable goldmine: ER models, Relational model, Keys, Normalization (1NF–BCNF), SQL queries, Joins, ACID, and Python-SQL connector.",
    chapters: [
      {
        title: "6.1 Database Concepts & Architecture (lecs108)",
        topics: [
          "File System vs DBMS: Data Redundancy, Data Inconsistency, Lack of Data Sharing, Integrity problems, Security limitations",
          "Three-Level Schema Architecture: Physical/Internal level, Conceptual/Logical level, External/View level",
          "Data Independence: Physical Data Independence (changing physical storage without altering logical schema) and Logical Data Independence (changing logical schema without altering views)",
          "Data Models: Relational Model, Hierarchical Model, Network Model, Object-Oriented Model, Entity-Relationship (ER) Model",
          "ER Modeling: Entity types (Strong vs Weak), Attributes (Simple, Composite, Single-valued, Multi-valued, Derived), Relationships (1:1, 1:N, N:M), Participation (Total vs Partial)"
        ]
      },
      {
        title: "6.2 Relational Model & Relational Algebra",
        topics: [
          "Relational Terminology: Relation (Table), Tuple (Row/Record), Attribute (Column/Field), Domain (Set of permissible values)",
          "Degree: Number of attributes/columns in a relation",
          "Cardinality: Number of tuples/rows in a relation (BPSC frequent MCQ!)",
          "Relational Keys: Super Key, Candidate Key (Minimal Super Key), Primary Key (Chosen candidate key, cannot be NULL), Alternate Key (Unchosen candidate keys), Foreign Key (Referential integrity constraint), Composite Key",
          "Relational Integrity Rules: Entity Integrity Constraint (Primary key cannot be NULL) and Referential Integrity Constraint (Foreign key must match a valid primary key or be NULL)",
          "Relational Algebra Operators: Selection (σ), Projection (π), Cartesian Product (×), Union (∪), Set Difference (-), Intersection (∩), Natural Join (⋈)"
        ]
      },
      {
        title: "6.3 Functional Dependencies & Normalization",
        topics: [
          "Database Anomalies: Insertion Anomaly, Deletion Anomaly, Update/Modification Anomaly",
          "Functional Dependency (FD): X → Y (X determines Y), Trivial vs Non-trivial FD",
          "Armstrong's Axioms: Reflexivity, Augmentation, Transitivity, Decomposition, Union, Pseudo-transitivity",
          "First Normal Form (1NF): Elimination of repeating groups, All attribute values must be atomic (indivisible)",
          "Second Normal Form (2NF): In 1NF + No Partial Functional Dependency (No non-prime attribute should be dependent on a proper subset of any candidate key)",
          "Third Normal Form (3NF): In 2NF + No Transitive Dependency (For every functional dependency X → Y, either X is a Super Key or Y is a Prime attribute)",
          "Boyce-Codd Normal Form (BCNF): Stricter 3NF (For every non-trivial FD X → Y, X must be a Super Key)",
          "Normalization Determination: Identifying the highest normal form of a given relational schema"
        ]
      },
      {
        title: "6.4 SQL - Structured Query Language (lecs109)",
        topics: [
          "SQL Sublanguages: DDL (CREATE, ALTER, DROP, TRUNCATE), DML (INSERT, UPDATE, DELETE), DQL (SELECT), DCL (GRANT, REVOKE), TCL (COMMIT, ROLLBACK, SAVEPOINT)",
          "SQL Constraints: `NOT NULL`, `UNIQUE`, `PRIMARY KEY`, `FOREIGN KEY ... REFERENCES`, `CHECK`, `DEFAULT`",
          "SQL Data Types: `CHAR(n)` (fixed length), `VARCHAR(n)` (variable length), `INT`, `DECIMAL(p,s)`, `DATE`, `TIME`",
          "Basic SELECT Queries: `SELECT ... FROM ... WHERE ... ORDER BY [ASC|DESC]`",
          "SQL Operators: Comparison (`=`, `<>`, `>`, `<`, `>=`, `<=`), Logical (`AND`, `OR`, `NOT`), Range (`BETWEEN ... AND ...`), List (`IN (...)`), Pattern Matching (`LIKE` with `%` any chars, `_` single char), Null check (`IS NULL`, `IS NOT NULL`)",
          "SQL Aggregate Functions: `COUNT(*)`, `COUNT(col)`, `SUM()`, `AVG()`, `MIN()`, `MAX()` (handling of NULL values in aggregates)",
          "Grouping Data: `GROUP BY` clause, Filtering groups with `HAVING` clause (`WHERE` filters rows BEFORE grouping, `HAVING` filters groups AFTER grouping!)",
          "SQL Joins: Cross Join (Cartesian Product), Inner Join (Equi-join / Natural Join), Outer Joins (Left Outer Join, Right Outer Join, Full Outer Join), Self Join",
          "Subqueries (Nested Queries): Single-row subqueries (`=`, `<`, `>`), Multiple-row subqueries (`IN`, `ANY`, `ALL`), Correlated subqueries",
          "`DROP` vs `TRUNCATE` vs `DELETE`: DDL vs DML, Rollback capability, High-water mark reset"
        ]
      },
      {
        title: "6.5 Transaction Processing & Concurrency Control",
        topics: [
          "Transaction Definition & States: Active, Partially Committed, Committed, Failed, Aborted",
          "ACID Properties: Atomicity (All or Nothing), Consistency (Preserving database validity), Isolation (Transactions run independently), Durability (Committed changes survive system crash)",
          "Concurrency Anomalies: Dirty Read (Reading uncommitted data), Non-repeatable Read (Data modified during transaction), Phantom Read (New rows inserted during transaction), Lost Update",
          "Concurrency Control Techniques: Lock-based protocols (Shared Lock 'S' for read, Exclusive Lock 'X' for write), Two-Phase Locking (2PL: Growing Phase, Shrinking Phase), Deadlock handling (Wait-Die, Wound-Wait schemes)"
        ]
      },
      {
        title: "6.6 Database Connectivity with Python",
        topics: [
          "Python Database API (DB-API): `mysql.connector` / `sqlite3` module",
          "Steps: Connecting to database `connect(host, user, password, database)`",
          "Creating Cursor object: `cursor = conn.cursor()`",
          "Executing SQL commands: `cursor.execute(query)`",
          "Fetching Results: `cursor.fetchone()` (one row as tuple), `cursor.fetchall()` (list of tuples), `cursor.fetchmany(n)`",
          "Transaction Control: `conn.commit()` to save changes, `conn.rollback()` to undo, `conn.close()`"
        ]
      }
    ]
  },
  {
    id: "unit-7",
    unitNumber: 7,
    title: "Operating Systems",
    tier: "Tier 2",
    tierClass: "tier-2",
    weightage: "8–10 Questions (~11%)",
    isFree: false,
    treTag: "TRE 1.0: 8 Qs | TRE 2.0: 9 Qs | TRE 3.0: 10 Qs",
    pedagogyTip: "👨‍🏫 Teacher Note: Practice numericals! Gantt chart drawing for FCFS/SJF/RR scheduling and calculating average Waiting Time (WT) and Turnaround Time (TAT).",
    ncertRef: "Beyond NCERT (Standard Core CS Engineering Curriculum)",
    ncertFolder: "N/A",
    ncertFile: "Standard OS",
    summary: "System architecture, Process lifecycle, PCB, CPU scheduling calculations (Gantt charts for TAT/WT), Synchronization, Deadlocks, Paging, and Disk scheduling.",
    chapters: [
      {
        title: "7.1 OS Architecture & System Calls",
        topics: [
          "Role & Functions of Operating System: Processor management, Memory management, Device management, File management, Security, Error detection",
          "Types of Operating Systems: Batch processing, Multiprogramming (improves CPU utilization), Multitasking / Time-sharing, Multiprocessing, Real-Time OS (Hard RTOS vs Soft RTOS), Distributed OS",
          "Dual-Mode Operation: User Mode (restricted instructions) vs Kernel/Supervisor Mode (privileged instructions)",
          "System Calls: Interface between user program and OS kernel (Process control: `fork()`, `exec()`, `wait()`, `exit()`; File manipulation: `open()`, `read()`, `write()`, `close()`)",
          "Kernel Architectures: Monolithic Kernel vs Microkernel"
        ]
      },
      {
        title: "7.2 Process & Thread Management",
        topics: [
          "Process Concept: Program in execution; Process Address Space (Text/Code, Data, Heap, Stack segments)",
          "Process States: New → Ready → Running → Waiting/Blocked → Terminated",
          "Process Control Block (PCB): Process ID (PID), Process State, Program Counter (PC), CPU Registers, CPU Scheduling Info, Memory Management Info, I/O Status Info",
          "Context Switching: Saving state of old process into its PCB and loading state of new process; Pure overhead",
          "Schedulers: Long-term Scheduler (Job scheduler, controls degree of multiprogramming), Short-term Scheduler (CPU scheduler), Medium-term Scheduler (Swapping)",
          "Threads: Lightweight process; Threads of the same process share Code, Data, and OS resources, but have private Program Counter, Register set, and Stack"
        ]
      },
      {
        title: "7.3 CPU Scheduling (Numerical Problem Area)",
        topics: [
          "Scheduling Criteria: CPU Utilization, Throughput, Turnaround Time (TAT = Completion Time - Arrival Time), Waiting Time (WT = Turnaround Time - Burst Time), Response Time",
          "Preemptive vs Non-Preemptive Scheduling",
          "First-Come, First-Served (FCFS): Non-preemptive, Convoy Effect (short processes wait behind long CPU-bound process)",
          "Shortest Job First (SJF): Non-preemptive, Provably optimal for minimizing average waiting time; Problem: Starvation of longer jobs",
          "Shortest Remaining Time First (SRTF): Preemptive version of SJF",
          "Priority Scheduling: Preemptive / Non-preemptive; Problem: Starvation; Solution: Aging (gradually increasing priority of waiting processes)",
          "Round Robin (RR): Preemptive, Time Quantum (q); If q is too large → degrades to FCFS; If q is too small → high context switch overhead"
        ]
      },
      {
        title: "7.4 Process Synchronization & Deadlocks",
        topics: [
          "Race Condition: Multiple processes accessing and manipulating shared data concurrently",
          "Critical Section Problem: Requirements (Mutual Exclusion, Progress, Bounded Waiting)",
          "Synchronization Mechanisms: Peterson's Solution (Software solution for 2 processes), Test-and-Set / Swap (Hardware instructions), Mutex Locks, Semaphores (Counting Semaphore vs Binary Semaphore/Mutex)",
          "Classical Synchronization Problems: Producer-Consumer (Bounded Buffer), Readers-Writers Problem, Dining Philosophers Problem",
          "Deadlock Concept: Set of blocked processes, each holding a resource and waiting for another resource held by another process",
          "Four Necessary Coffman Conditions for Deadlock: 1. Mutual Exclusion, 2. Hold and Wait, 3. No Preemption, 4. Circular Wait",
          "Deadlock Handling Strategies: Deadlock Prevention (invalidate at least one condition), Deadlock Avoidance (Banker's Algorithm, Safe State analysis), Deadlock Detection and Recovery, Ignorance (Ostrich Algorithm)"
        ]
      },
      {
        title: "7.5 Memory Management & Virtual Memory",
        topics: [
          "Memory Allocation: Contiguous Memory Allocation (Fixed Partitioning: Internal Fragmentation; Variable Partitioning: External Fragmentation, Compaction)",
          "Partition Allocation Strategies: First Fit (fastest), Best Fit (produces smallest leftover fragment), Worst Fit (produces largest leftover fragment)",
          "Paging: Non-contiguous allocation; Logical address divided into Pages, Physical memory divided into Frames (Page size = Frame size); Page Table mapping; Internal fragmentation possible in last page",
          "Translation Lookaside Buffer (TLB): Fast associative cache for page table lookups; Effective Access Time (EAT) calculation",
          "Segmentation: Dividing program into variable-sized logical segments (Code, Stack, Heap)",
          "Virtual Memory: Execution of partially loaded processes; Demand Paging, Page Fault",
          "Page Replacement Algorithms: FIFO (First In First Out; Belady's Anomaly), LRU (Least Recently Used; Stack algorithm, optimal practical), Optimal Page Replacement (replaces page not used for longest time in future; benchmark)",
          "Thrashing: High page-fault rate where system spends more time paging than executing instructions; Working Set Model"
        ]
      },
      {
        title: "7.6 File Systems & Disk Scheduling",
        topics: [
          "File Allocation Methods: Contiguous Allocation, Linked Allocation (No external fragmentation, slow direct access), Indexed Allocation (inode structure in Unix)",
          "Directory Structures: Single-Level, Two-Level, Tree-Structured, Acyclic-Graph",
          "Disk Structure & Access Time: Seek Time (head to cylinder, largest component) + Rotational Latency (platter to sector) + Transfer Time",
          "Disk Scheduling Algorithms: FCFS, SSTF (Shortest Seek Time First - prone to starvation), SCAN (Elevator algorithm), C-SCAN (Circular SCAN - uniform wait time), LOOK, C-LOOK",
          "Basic Linux Shell Commands: `ls`, `pwd`, `cd`, `mkdir`, `rm`, `cp`, `mv`, `cat`, `grep`, `chmod`, `ps`, `kill`, `top`"
        ]
      }
    ]
  },
  {
    id: "unit-8",
    unitNumber: 8,
    title: "Computer Networks & Data Communication",
    tier: "Tier 1",
    tierClass: "tier-1",
    weightage: "10–12 Questions (~14% of Subject) — CRITICAL",
    isFree: false,
    treTag: "TRE 1.0: 11 Qs | TRE 2.0: 11 Qs | TRE 3.0: 12 Qs",
    pedagogyTip: "👨‍🏫 Teacher Note: OSI 7-layer data units (Bits, Frames, Packets, Segments), port numbers (80, 443, 22, 53), and subnetting /24 to /30 are constant staples.",
    ncertRef: "Class 12 Ch. 10–11 (lecs110–111.pdf)",
    ncertFolder: "lecs1dd",
    ncertFile: "lecs110.pdf",
    summary: "OSI 7 layers, TCP/IP suite, Transmission media, Network devices, IPv4/IPv6, CIDR Subnetting, Protocol port numbers, and Routing basics.",
    chapters: [
      {
        title: "8.1 Data Communication Fundamentals (lecs111)",
        topics: [
          "Components of Data Communication: Sender, Receiver, Transmission Medium, Message, Protocols",
          "Transmission Modes: Simplex (unidirectional: TV broadcast, keyboard), Half-Duplex (bidirectional one at a time: Walkie-talkie), Full-Duplex (simultaneous bidirectional: Telephone)",
          "Transmission Media: Guided / Wired Media (Twisted Pair Cable: UTP/STP with RJ-45, Coaxial Cable with BNC, Fiber Optic Cable: Total Internal Reflection, highest bandwidth, immune to EMI)",
          "Unguided / Wireless Media: Radio waves (omnidirectional), Microwaves (line-of-sight, satellite), Infrared (short-range, cannot penetrate walls)",
          "Bandwidth & Data Transfer Rates: bps, Kbps, Mbps, Gbps, Baud rate (signal changes per second) vs Bit rate",
          "Transmission Impairments: Attenuation, Distortion, Noise"
        ]
      },
      {
        title: "8.2 Network Topologies & Network Devices (lecs110)",
        topics: [
          "Network Classifications: PAN (Personal Area Network: Bluetooth), LAN (Local Area Network: Ethernet), MAN (Metropolitan Area Network: Cable TV), WAN (Wide Area Network: Internet)",
          "Topologies: Bus Topology (terminators, single backbone cable failure drops network), Star Topology (central hub/switch, most common), Ring Topology (token passing), Mesh Topology (fully connected: n(n-1)/2 links, highest fault tolerance and cost), Tree Topology, Hybrid Topology",
          "Network Connecting Devices & Layer Mapping:",
          "  • Repeater & Hub: Physical Layer (Layer 1) - Regenerates signal; Hub is dumb multi-port repeater (broadcasts to all ports)",
          "  • Bridge & Switch: Data Link Layer (Layer 2) - Forwards frames based on MAC address table; Switch is intelligent multi-port bridge",
          "  • Router: Network Layer (Layer 3) - Forwards packets across different networks based on IP routing table",
          "  • Gateway: All Layers (Layer 1–7) - Protocol converter between completely different network architectures",
          "  • Modem: Modulator-Demodulator (converts analog to digital and vice versa)"
        ]
      },
      {
        title: "8.3 The OSI 7-Layer Reference Model (CRITICAL)",
        topics: [
          "Layer 1 - Physical Layer: Raw bit stream transmission, Physical topology, Cabling, Voltages, Hubs, Repeaters",
          "Layer 2 - Data Link Layer: Framing, Physical addressing (MAC address, 48-bit hex), Flow control, Error control (CRC, Parity), Media Access Control (CSMA/CD in Ethernet, CSMA/CA in Wi-Fi)",
          "Layer 3 - Network Layer: Logical addressing (IP address), Routing packets, Fragmentation, Reassembly, Routers",
          "Layer 4 - Transport Layer: Process-to-process (end-to-end) delivery, Port addressing, Segmentation and Reassembly, Connection control, Flow & Error control (TCP vs UDP)",
          "Layer 5 - Session Layer: Dialog control, Session establishment, maintenance, and synchronization (checkpoints)",
          "Layer 6 - Presentation Layer: Syntax and semantics of information, Data translation (ASCII/EBCDIC), Data compression, Data encryption and decryption",
          "Layer 7 - Application Layer: Network virtual terminal, File access, Email service, Web access (HTTP, FTP, SMTP, DNS, DHCP)"
        ]
      },
      {
        title: "8.4 TCP/IP Protocol Suite & Protocol Port Mapping",
        topics: [
          "TCP/IP 4-Layer Architecture: Network Access Layer, Internet Layer, Transport Layer, Application Layer",
          "TCP (Transmission Control Protocol): Connection-oriented, Reliable (acknowledgments, retransmission), 3-Way Handshake (SYN, SYN-ACK, ACK), Flow control (Sliding Window), Congestion control",
          "UDP (User Datagram Protocol): Connectionless, Unreliable, Fast, Low overhead, Used for streaming, VoIP, DNS, DHCP",
          "Well-Known Protocol Port Numbers (Essential BPSC MCQs):",
          "  • HTTP: Port 80 | HTTPS: Port 443 | FTP: Port 20 (Data) & Port 21 (Control)",
          "  • SSH: Port 22 | Telnet: Port 23 | SMTP: Port 25 | DNS: Port 53",
          "  • DHCP: Port 67 (Server) & Port 68 (Client) | TFTP: Port 69",
          "  • POP3: Port 110 | IMAP: Port 143 | SNMP: Port 161"
        ]
      },
      {
        title: "8.5 IP Addressing, Classes & Subnetting (Numerical Area)",
        topics: [
          "IPv4 Addressing: 32-bit address, 4 octets separated by dots (e.g. 192.168.1.1)",
          "Classful IP Addressing:",
          "  • Class A: 0.0.0.0 to 127.255.255.255 (First bit '0', Default Mask: 255.0.0.0 /8)",
          "  • Class B: 128.0.0.0 to 191.255.255.255 (First bits '10', Default Mask: 255.255.0.0 /16)",
          "  • Class C: 192.0.0.0 to 223.255.255.255 (First bits '110', Default Mask: 255.255.255.0 /24)",
          "  • Class D: 224.0.0.0 to 239.255.255.255 (First bits '1110', Multicasting, No subnet mask)",
          "  • Class E: 240.0.0.0 to 255.255.255.255 (First bits '1111', Experimental / Reserved)",
          "Special & Private IP Addresses:",
          "  • Loopback address: 127.0.0.1 (tests local TCP/IP stack)",
          "  • Private IP ranges: Class A: 10.0.0.0–10.255.255.255 | Class B: 172.16.0.0–172.31.255.255 | Class C: 192.168.0.0–192.168.255.255",
          "Subnetting & CIDR (Classless Inter-Domain Routing): Slash notation (`/24`, `/26`); Number of subnets = 2^s; Number of valid hosts per subnet = 2^h - 2 (subtract Network ID and Broadcast ID)",
          "IPv6 Addressing: 128-bit address, 8 groups of 4 hexadecimal digits separated by colons; Eliminates NAT requirement"
        ]
      },
      {
        title: "8.6 Network Protocols & Routing",
        topics: [
          "ARP (Address Resolution Protocol): Resolves logical IP address to physical MAC address",
          "RARP (Reverse ARP): Resolves physical MAC to logical IP",
          "ICMP (Internet Control Message Protocol): Error reporting and diagnostics (used by `ping` and `traceroute`)",
          "DNS (Domain Name System): Hierarchical resolution of domain name to IP (Root servers, TLD servers, Authoritative servers)",
          "DHCP (Dynamic Host Configuration Protocol): Automatic IP allocation via DORA process (Discover, Offer, Request, Acknowledge)",
          "Routing Basics: Interior Gateway Protocols (RIP: distance vector, hop count; OSPF: link state, Dijkstra) vs Exterior Gateway Protocols (BGP: path vector)"
        ]
      }
    ]
  },
  {
    id: "unit-9",
    unitNumber: 9,
    title: "Cyber Security & Indian IT Act",
    tier: "Tier 3",
    tierClass: "tier-3",
    weightage: "4–5 Questions (~6%)",
    isFree: false,
    treTag: "TRE 1.0: 4 Qs | TRE 2.0: 4 Qs | TRE 3.0: 5 Qs",
    pedagogyTip: "👨‍🏫 Teacher Note: IT Act 2000 sections (Sec 43, 66, 66C, 66D) and malware distinctions (Virus needs host, Worm is standalone) are repeatedly tested.",
    ncertRef: "Class 12 Ch. 12 (lecs112.pdf) & Class 11 Ch. 11 (kecs111.pdf)",
    ncertFolder: "lecs1dd",
    ncertFile: "lecs112.pdf",
    summary: "Threats, malware types, social engineering, cryptography (symmetric/asymmetric), firewalls, digital signatures, and IT Act 2000 sections.",
    chapters: [
      {
        title: "9.1 Cyber Threats & Malware (lecs112)",
        topics: [
          "Malware Types: Virus (requires host program, self-replicating), Worm (standalone self-replicating program, clogs networks), Trojan Horse (disguised as useful software, provides backdoor), Ransomware (encrypts files, demands ransom, e.g. WannaCry), Spyware (steals user info), Keylogger (records keystrokes), Adware, Rootkit",
          "Network & Web Attacks: Denial of Service (DoS) and Distributed DoS (DDoS using botnets), Man-in-the-Middle (MitM) attack, Phishing (fraudulent emails), Vishing (voice calls), Smishing (SMS phishing), Pharming (DNS spoofing), SQL Injection (manipulating backend database queries), Cross-Site Scripting (XSS)",
          "Social Engineering: Shoulder surfing, Dumpster diving, Pretexting"
        ]
      },
      {
        title: "9.2 Network Defense & Cryptography",
        topics: [
          "Firewalls: Packet-filtering firewall, Stateful inspection firewall, Application-level gateway (proxy); Network perimeter defense",
          "Cryptography Principles: Plaintext, Ciphertext, Encryption, Decryption, Key",
          "Symmetric Key Cryptography (Secret Key): Same key used for encryption and decryption; Fast; Algorithms: DES, 3DES, AES; Key distribution problem",
          "Asymmetric Key Cryptography (Public Key): Pair of keys (Public key for encryption, Private key for decryption); Solves key exchange; Algorithm: RSA",
          "Hash Functions: One-way cryptographic hash (MD5, SHA-1, SHA-256); Provides data integrity",
          "Digital Signature: Encrypting hash of message with sender's private key; Provides Authenticity, Integrity, and Non-Repudiation",
          "Digital Certificate & CA: Certified by Certification Authority (X.509 standard), binds public key to identity; Basis of SSL/TLS and HTTPS"
        ]
      },
      {
        title: "9.3 Indian IT Act 2000 & Cyber Ethics (kecs111)",
        topics: [
          "Information Technology Act 2000 (IT Act 2000, amended 2008): Legal recognition for electronic transactions and digital signatures",
          "Key Sections of IT Act 2000 (Important for BPSC Teacher exams!):",
          "  • Section 43: Penalty for damage to computer system without permission",
          "  • Section 65: Tampering with computer source documents",
          "  • Section 66: Computer-related offences and hacking (dishonest or fraudulent act)",
          "  • Section 66C: Punishment for identity theft",
          "  • Section 66D: Cheating by personation by using computer resource",
          "  • Section 66E: Violation of privacy (capturing/publishing private images)",
          "  • Section 66F: Cyber terrorism (punishment up to life imprisonment)",
          "  • Section 67: Publishing or transmitting obscene material in electronic form",
          "  • Section 72: Penalty for breach of confidentiality and privacy",
          "Cyber Ethics: Intellectual Property Rights (IPR), Copyright, Patents, Trademarks, Plagiarism, Digital Footprints (Active vs Passive footprints)"
        ]
      }
    ]
  },
  {
    id: "unit-10",
    unitNumber: 10,
    title: "Web Technologies & Internet",
    tier: "Tier 3",
    tierClass: "tier-3",
    weightage: "2–3 Questions (~3%)",
    isFree: false,
    treTag: "TRE 1.0: 3 Qs | TRE 2.0: 2 Qs | TRE 3.0: 3 Qs",
    pedagogyTip: "👨‍🏫 Teacher Note: Basic HTML5 semantic tags, table rowspan/colspan attributes, and CSS box model layers.",
    ncertRef: "General Computer Science Curriculum",
    ncertFolder: "N/A",
    ncertFile: "Web Tech",
    summary: "Web architecture, HTTP/HTTPS, HTML5 structural and formatting tags, tables, forms, CSS box model, and client/server-side scripting.",
    chapters: [
      {
        title: "10.1 Web Architecture & Protocols",
        topics: [
          "Internet vs World Wide Web (WWW): Physical global interconnection vs information space linked by URLs",
          "Uniform Resource Locator (URL): Anatomy `protocol://domain:port/path?query#fragment`",
          "Client-Server Architecture: Thin client vs Thick client; Web browser (client) sends HTTP request, Web server returns HTTP response",
          "HTTP Request Methods: `GET` (data in URL, bookmarkable, cached), `POST` (data in request body, secure for passwords), `PUT`, `DELETE`",
          "HTTP Status Codes: 200 (OK), 301 (Moved Permanently), 400 (Bad Request), 403 (Forbidden), 404 (Not Found), 500 (Internal Server Error), 502 (Bad Gateway)",
          "Cookies vs Sessions: Client-side storage vs Server-side state management"
        ]
      },
      {
        title: "10.2 HTML & HTML5 Core Tags",
        topics: [
          "HTML Document Skeleton: `<!DOCTYPE html>`, `<html>`, `<head>`, `<title>`, `<meta>`, `<body>`",
          "Text Formatting Tags: `<h1>`-`<h6>`, `<p>`, `<br>` (empty tag), `<hr>`, `<b>`, `<strong>`, `<i>`, `<em>`, `<u>`, `<sup>`, `<sub>`, `<pre>`, `<code>`",
          "Hyperlinks & Images: `<a href=\"url\" target=\"_blank\">`, `<img src=\"img.jpg\" alt=\"text\" width=\"\" height=\"\">`",
          "Lists: Ordered List `<ol type=\"1|a|A|i|I\">`, Unordered List `<ul type=\"disc|circle|square\">`, Definition List `<dl>`, `<dt>`, `<dd>`",
          "Tables: `<table>`, `<tr>` (table row), `<th>` (table header, bold & centered), `<td>` (table data), `rowspan` and `colspan` attributes, `border`, `cellspacing`, `cellpadding`",
          "Forms: `<form action=\"\" method=\"GET|POST\">`, `<input type=\"text|password|radio|checkbox|submit|reset|file\">`, `<textarea>`, `<select>`, `<option>`",
          "HTML5 Semantic Elements: `<header>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<figure>`, `<figcaption>`"
        ]
      },
      {
        title: "10.3 CSS (Cascading Style Sheets)",
        topics: [
          "CSS Inclusion Types: Inline style (`style=\"...\"`), Internal stylesheet (`<style>` in `<head>`), External stylesheet (`<link rel=\"stylesheet\" href=\"style.css\">`)",
          "CSS Selectors: Universal (`*`), Element/Type (`p`), Class (`.classname`), ID (`#idname`), Grouping (`,`), Descendant (`div p`), Pseudo-classes (`:hover`, `:active`, `:visited`)",
          "The CSS Box Model: Content Area → Padding (inside border) → Border → Margin (outside border)",
          "CSS Colors: Color names, Hexadecimal (`#FF0000`), RGB (`rgb(255, 0, 0)`), RGBA (with alpha transparency)"
        ]
      }
    ]
  },
  {
    id: "unit-11",
    unitNumber: 11,
    title: "Emerging Trends in Computing",
    tier: "Tier 3",
    tierClass: "tier-3",
    weightage: "1–2 Questions (~2%)",
    isFree: false,
    treTag: "TRE 1.0: 2 Qs | TRE 2.0: 2 Qs | TRE 3.0: 2 Qs",
    pedagogyTip: "👨‍🏫 Teacher Note: Cloud models (IaaS, PaaS, SaaS) and 5 Vs of Big Data from Class 11 Ch. 3.",
    ncertRef: "Class 11 Ch. 3 (kecs103.pdf)",
    ncertFolder: "kecs1dd",
    ncertFile: "kecs103.pdf",
    summary: "Artificial Intelligence, Machine Learning, IoT, Cloud deployment models (IaaS/PaaS/SaaS), Big Data 5Vs, Blockchain, and Digital India initiatives.",
    chapters: [
      {
        title: "11.1 Artificial Intelligence & Machine Learning",
        topics: [
          "Artificial Intelligence (AI): Simulating human intelligence in machines; Narrow AI vs General AI vs Super AI",
          "Machine Learning (ML): Algorithms learning from data without being explicitly programmed; Supervised Learning (labeled data: classification, regression), Unsupervised Learning (unlabeled data: clustering), Reinforcement Learning (reward/penalty system)",
          "Deep Learning & Artificial Neural Networks (ANN): Inspired by human brain, multiple hidden layers",
          "Natural Language Processing (NLP): Chatbots, sentiment analysis, speech recognition, machine translation",
          "Computer Vision: Image recognition, object detection, facial recognition"
        ]
      },
      {
        title: "11.2 Cloud Computing, IoT & Big Data",
        topics: [
          "Cloud Computing Service Models: IaaS (Infrastructure as a Service: AWS EC2, Google Compute), PaaS (Platform as a Service: Google App Engine, Heroku), SaaS (Software as a Service: Gmail, Google Docs, Office 365)",
          "Cloud Deployment Models: Public Cloud, Private Cloud, Hybrid Cloud, Community Cloud",
          "Internet of Things (IoT): Network of physical devices embedded with sensors, software, actuators, and network connectivity; RFID, Smart Cities, Smart Agriculture",
          "Big Data: Datasets too large or complex for traditional relational databases; The 5 V's of Big Data: Volume, Velocity, Variety, Veracity, Value; Distributed computing frameworks (Hadoop, MapReduce)",
          "Blockchain Technology: Decentralized, distributed, immutable public ledger; Cryptographic hashing and consensus mechanisms; Cryptocurrencies and Smart Contracts"
        ]
      }
    ]
  },
  {
    id: "unit-12",
    unitNumber: 12,
    title: "MS Office & General Office Applications",
    tier: "Tier 3",
    tierClass: "tier-3",
    weightage: "1–2 Questions (~2%) — Low Priority",
    isFree: false,
    treTag: "TRE 1.0: 2 Qs | TRE 2.0: 1 Qs | TRE 3.0: 1 Qs (Low Yield)",
    pedagogyTip: "👨‍🏫 Teacher Note: Standard keyboard shortcuts and basic Excel cell referencing ($A$1 absolute vs A1 relative).",
    ncertRef: "Standard ICT / Practical Applications",
    ncertFolder: "N/A",
    ncertFile: "Office Suite",
    summary: "Essential shortcut keys, MS Word formatting, MS Excel core formulas and cell referencing, and PowerPoint presentation basics.",
    chapters: [
      {
        title: "12.1 MS Word (Word Processing)",
        topics: [
          "Key Keyboard Shortcuts: Ctrl+A (Select All), Ctrl+C/X/V (Copy/Cut/Paste), Ctrl+Z/Y (Undo/Redo), Ctrl+B/I/U (Bold/Italic/Underline), Ctrl+S (Save), Ctrl+P (Print), Ctrl+F (Find), Ctrl+H (Replace), Ctrl+K (Hyperlink), F7 (Spelling and Grammar Check)",
          "Paragraph Formatting: Line spacing, Alignment (Left Ctrl+L, Center Ctrl+E, Right Ctrl+R, Justify Ctrl+J), Indentation, Bullets and Numbering",
          "Mail Merge: Main document, Data source, Merged document"
        ]
      },
      {
        title: "12.2 MS Excel (Spreadsheets)",
        topics: [
          "Workbook vs Worksheet: Rows (1, 2, 3...) and Columns (A, B, C...); Cell address (e.g. B4)",
          "Cell References: Relative Reference (`A1`), Absolute Reference (`$A$1`), Mixed Reference (`$A1` or `A$1`)",
          "Formula Prefix: All formulas must begin with an equal sign `=`",
          "Common Functions: `=SUM(range)`, `=AVERAGE(range)`, `=COUNT(range)` (numeric cells only), `=COUNTA(range)` (non-empty cells), `=MAX(range)`, `=MIN(range)`, `=IF(condition, value_if_true, value_if_false)`, `=VLOOKUP(lookup_value, table_array, col_index, [range_lookup])`, `=CONCATENATE(text1, text2)`"
        ]
      },
      {
        title: "12.3 MS PowerPoint & E-Governance",
        topics: [
          "PowerPoint Basics: Slide master, Views (Normal, Slide Sorter, Slide Show), Transitions vs Animations",
          "Key Shortcuts: F5 (Start from beginning), Shift+F5 (Start from current slide), Esc (End slide show)",
          "E-Governance Interaction Models: G2C (Government to Citizen), G2B (Government to Business), G2G (Government to Government), G2E (Government to Employee)"
        ]
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SYLLABUS_DATA;
}
