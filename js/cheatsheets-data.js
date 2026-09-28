// BPSC TRE 4.0 Computer Teacher - High-Yield Cheat Sheets & Quick Reference

const CHEATSHEETS_DATA = [
  {
    id: "cs-python",
    title: "🐍 Python Output Predictor & Code Traps",
    category: "Tier 1: Programming",
    summary: "BPSC frequently tests these exact code output nuances and edge cases.",
    cards: [
      {
        title: "1. Tricky Slicing & Negative Steps",
        code: `# String Slicing: s[start : stop : step]
s = "COMPUTER"
print(s[1:6:2])    # Output: 'OPT' (indices 1, 3, 5)
print(s[::-1])     # Output: 'RETUPMOC' (Reversed)
print(s[-1:-6:-2]) # Output: 'RTM' (indices -1, -3, -5)
print(s[5:1:-1])   # Output: 'TUPM' (starts at 5, stops BEFORE 1)
print(s[2:2])      # Output: '' (Empty string! start == stop)`,
        explanation: "Rule: When `step` is negative, `start` must be strictly greater than `stop` to produce non-empty slices. The slice always stops one element BEFORE the `stop` index."
      },
      {
        title: "2. Floor Division & Modulo with Negatives",
        code: `# Floor Division (//) rounds DOWN towards -infinity!
print(7 // 2)      # 3
print(-7 // 2)     # -4 (NOT -3! Floored to lower integer)
print(7.0 // 2)    # 3.0 (Float result)

# Modulo (%): formula is r = a - (b * (a // b))
print(7 % 3)       # 1
print(-7 % 3)      # 2 (because -7 - (3 * (-3)) = -7 + 9 = 2)
print(7 % -3)      # -2 (sign of result matches divisor b!)`,
        explanation: "BPSC MCQ Classic: In Python, `a % b` always has the same sign as divisor `b` (or zero), unlike C/C++ where sign depends on dividend `a`."
      },
      {
        title: "3. Mutable Default Arguments Trap",
        code: `def append_item(x, lst=[]):
    lst.append(x)
    return lst

print(append_item(1))  # [1]
print(append_item(2))  # [1, 2]  (NOT [2]!)
print(append_item(3))  # [1, 2, 3]`,
        explanation: "Default parameter expressions in Python are evaluated once when the function definition is executed, NOT on each call! A mutable list persists across calls."
      },
      {
        title: "4. Loop `else` Suite Execution",
        code: `# Case A: Loop completes without break
for i in range(3):
    if i == 5:
        break
else:
    print("Normal Exit")  # Executes!

# Case B: Loop exits via break
for i in range(3):
    if i == 1:
        break
else:
    print("Will NOT execute")  # Skipped!`,
        explanation: "The `else` clause attached to a `for` or `while` loop runs ONLY when the loop completes naturally without hitting a `break` statement."
      },
      {
        title: "5. `is` vs `==` & Small Integer Caching",
        code: `a = 256
b = 256
print(a == b)  # True (values are equal)
print(a is b)  # True (Python caches integers from -5 to 256)

x = 257
y = 257
print(x == y)  # True (values equal)
# In interactive shell / distinct objects:
print(x is y)  # False (different memory addresses!)

L1 = [1, 2, 3]
L2 = [1, 2, 3]
print(L1 == L2) # True
print(L1 is L2) # False (distinct mutable objects)`,
        explanation: "`==` tests equality of values. `is` tests object identity (same memory address `id(a) == id(b)`)."
      }
    ]
  },
  {
    id: "cs-dbms",
    title: "🗄️ DBMS Normalization & SQL Master Rules",
    category: "Tier 1: DBMS",
    summary: "Crystal-clear decision tree for Normal Forms and SQL clause execution order.",
    cards: [
      {
        title: "1. Normal Forms Quick Decision Matrix",
        table: [
          { nf: "1NF", condition: "All attributes contain atomic (indivisible) values. No multi-valued or repeating groups." },
          { nf: "2NF", condition: "Must be in 1NF + No Partial Dependency (Every non-prime attribute must depend on whole candidate key, not part of a composite key)." },
          { nf: "3NF", condition: "Must be in 2NF + No Transitive Dependency (For every FD X → Y, either X is a Super Key or Y is a Prime attribute)." },
          { nf: "BCNF", condition: "Must be in 3NF + For every non-trivial FD X → Y, X MUST be a Super Key (Stronger 3NF, determinants must be candidate keys)." }
        ],
        explanation: "Golden Shortcut: If candidate key is a single attribute (not composite), the relation is automatically in 2NF! Then just check for transitive dependencies to test 3NF."
      },
      {
        title: "2. SQL Query Conceptual Execution Order",
        code: `/* SQL Query Clause Evaluation Pipeline: */
1. FROM / JOIN     --> Identify source tables and perform join cartesian/filters
2. WHERE           --> Filter individual rows (CANNOT use aggregate functions!)
3. GROUP BY        --> Group rows by specified columns
4. HAVING          --> Filter GROUPS after aggregation (Uses aggregate functions)
5. SELECT          --> Evaluate expressions and project requested columns
6. DISTINCT        --> Eliminate duplicate result rows
7. ORDER BY        --> Sort final output rows [ASC | DESC]
8. LIMIT / OFFSET  --> Restrict number of output rows`,
        explanation: "Why `WHERE SUM(marks) > 50` fails: `WHERE` runs at step 2 BEFORE grouping occurs. Aggregates are evaluated in `HAVING` at step 4!"
      },
      {
        title: "3. Relational Algebra & Key Terms",
        code: `Relation     = Table
Tuple        = Row / Record
Attribute    = Column / Field
Cardinality  = Number of Rows (Tuples)
Degree       = Number of Columns (Attributes)

Cartesian Product of R1(Degree m, Cardinality p) and R2(Degree n, Cardinality q):
  Degree of (R1 x R2)      = m + n  (Sum of columns)
  Cardinality of (R1 x R2) = p * q  (Product of rows)`,
        explanation: "BPSC Favorite MCQ: If Table A has 5 columns and 10 rows, and Table B has 4 columns and 6 rows: Degree of (A x B) = 5+4 = 9, Cardinality = 10*6 = 60."
      }
    ]
  },
  {
    id: "cs-os",
    title: "⚡ Operating Systems Scheduling & Paging Formulas",
    category: "Tier 2: OS",
    summary: "Formulas, Gantt chart mechanics, and paging calculation cheat sheet.",
    cards: [
      {
        title: "1. CPU Scheduling Fundamental Formulas",
        code: `Completion Time (CT) = Time at which process finishes execution
Turnaround Time (TAT) = Completion Time (CT) - Arrival Time (AT)
Waiting Time (WT)    = Turnaround Time (TAT) - Burst Time (BT)
Response Time (RT)   = Time of first CPU allocation - Arrival Time (AT)

Average TAT = (Sum of all TAT) / (Number of processes)
Average WT  = (Sum of all WT) / (Number of processes)`,
        explanation: "In Non-Preemptive algorithms (FCFS, Non-preemptive SJF), Response Time is always equal to Waiting Time!"
      },
      {
        title: "2. Paging & Address Translation Formulas",
        code: `Logical Address Space = 2^m bytes  -->  m-bit logical address
Page Size = Frame Size = 2^p bytes  -->  p-bit offset (d)
Number of Pages = (Logical Address Space) / (Page Size) = 2^(m - p)
Page Number (p) = (m - p) bits

Physical Address Space = 2^k bytes  -->  k-bit physical address
Frame Number (f) = (k - p) bits

Effective Access Time (EAT) with TLB:
  EAT = Hit_Ratio * (TLB_access + Memory_access) + (1 - Hit_Ratio) * (TLB_access + 2 * Memory_access)`,
        explanation: "On TLB miss, we need 2 main memory accesses: 1st access for Page Table in memory, 2nd access for actual data frame in memory."
      },
      {
        title: "3. Page Replacement Algorithms Comparison",
        code: `FIFO (First-In, First-Out):
  - Replaces the oldest loaded page
  - Suffers from Belady's Anomaly (Page faults may INCREASE when frame count increases!)

LRU (Least Recently Used):
  - Replaces page not referenced for longest time in the PAST
  - Stack algorithm -> Immune to Belady's Anomaly!

Optimal (OPT / MIN):
  - Replaces page that will not be used for longest time in the FUTURE
  - Lowest possible page fault rate; Used as theoretical benchmark.`,
        explanation: "Belady's Anomaly occurs in FIFO, but NEVER in LRU or Optimal algorithms."
      }
    ]
  },
  {
    id: "cs-networks",
    title: "🌐 Computer Networks OSI & Port Directory",
    category: "Tier 1: Networks",
    summary: "OSI layer mappings, protocol port numbers, and CIDR subnet host calculations.",
    cards: [
      {
        title: "1. Protocol Port Number Quick Directory",
        table: [
          { port: "Port 20 / 21", protocol: "FTP", layer: "Application", purpose: "File Transfer (20: Data, 21: Control commands)" },
          { port: "Port 22", protocol: "SSH", layer: "Application", purpose: "Secure Shell remote login & file transfer (encrypted)" },
          { port: "Port 23", protocol: "Telnet", layer: "Application", purpose: "Remote terminal login (plaintext, unencrypted)" },
          { port: "Port 25", protocol: "SMTP", layer: "Application", purpose: "Simple Mail Transfer Protocol (sending emails)" },
          { port: "Port 53", protocol: "DNS", layer: "Application", purpose: "Domain Name System resolution (uses UDP for queries)" },
          { port: "Port 67 / 68", protocol: "DHCP", layer: "Application", purpose: "Dynamic IP configuration (67: Server, 68: Client, uses UDP)" },
          { port: "Port 80", protocol: "HTTP", layer: "Application", purpose: "Hypertext Transfer Protocol (unencrypted web)" },
          { port: "Port 110", protocol: "POP3", layer: "Application", purpose: "Post Office Protocol v3 (downloading emails to client)" },
          { port: "Port 143", protocol: "IMAP", layer: "Application", purpose: "Internet Message Access Protocol (emails stay on server)" },
          { port: "Port 443", protocol: "HTTPS", layer: "Application", purpose: "HTTP over TLS/SSL (secure encrypted web)" }
        ],
        explanation: "Memorize these 10 port numbers! At least 2 questions in BPSC Computer Teacher tests ask direct port identification."
      },
      {
        title: "2. CIDR Subnetting & Valid Hosts Formula",
        code: `IPv4 = 32 bits total = Network Bits (n) + Host Bits (h)
Total addresses in subnet = 2^h
Valid usable host addresses = 2^h - 2  (Subtract Network ID and Broadcast ID)

CIDR Subnet Table:
  /24 --> h = 8  --> Total: 256  --> Usable Hosts: 254 (Mask: 255.255.255.0)
  /25 --> h = 7  --> Total: 128  --> Usable Hosts: 126 (Mask: 255.255.255.128)
  /26 --> h = 6  --> Total: 64   --> Usable Hosts: 62  (Mask: 255.255.255.192)
  /27 --> h = 5  --> Total: 32   --> Usable Hosts: 30  (Mask: 255.255.255.224)
  /28 --> h = 4  --> Total: 16   --> Usable Hosts: 14  (Mask: 255.255.255.240)
  /29 --> h = 3  --> Total: 8    --> Usable Hosts: 6   (Mask: 255.255.255.248)
  /30 --> h = 2  --> Total: 4    --> Usable Hosts: 2   (Mask: 255.255.255.252, Point-to-point links)`,
        explanation: "Quick Trick: Usable hosts for `/28` = 2^(32 - 28) - 2 = 2^4 - 2 = 16 - 2 = 14 hosts."
      }
    ]
  },
  {
    id: "cs-dsa",
    title: "📊 Data Structures & Sorting Complexity Table",
    category: "Tier 2: Data Structures",
    summary: "Standard Big-O time and space complexity chart for all sorting and searching algorithms.",
    cards: [
      {
        title: "1. Master Sorting Algorithms Complexity Chart",
        table: [
          { name: "Bubble Sort", best: "O(n)", avg: "O(n²)", worst: "O(n²)", space: "O(1)", stable: "Yes" },
          { name: "Selection Sort", best: "O(n²)", avg: "O(n²)", worst: "O(n²)", space: "O(1)", stable: "No" },
          { name: "Insertion Sort", best: "O(n)", avg: "O(n²)", worst: "O(n²)", space: "O(1)", stable: "Yes" },
          { name: "Merge Sort", best: "O(n log n)", avg: "O(n log n)", worst: "O(n log n)", space: "O(n)", stable: "Yes" },
          { name: "Quick Sort", best: "O(n log n)", avg: "O(n log n)", worst: "O(n²)", space: "O(log n)", stable: "No" },
          { name: "Heap Sort", best: "O(n log n)", avg: "O(n log n)", worst: "O(n log n)", space: "O(1)", stable: "No" }
        ],
        explanation: "Key Observation: Merge Sort has guaranteed O(n log n) even in worst case, but requires O(n) auxiliary space. Quick Sort has O(n²) worst case when array is already sorted and first/last element is picked as pivot."
      },
      {
        title: "2. Postfix Expression Evaluation Algorithm",
        code: `Evaluate: "6 3 2 + * 5 -"
Tokens scanned left to right:
1. '6' --> Push 6               [Stack: 6]
2. '3' --> Push 3               [Stack: 6, 3]
3. '2' --> Push 2               [Stack: 6, 3, 2]
4. '+' --> Pop 2, Pop 3 -> 3+2=5 -> Push 5  [Stack: 6, 5]
5. '*' --> Pop 5, Pop 6 -> 6*5=30 -> Push 30 [Stack: 30]
6. '5' --> Push 5               [Stack: 30, 5]
7. '-' --> Pop 5, Pop 30 -> 30-5=25 -> Push 25 [Stack: 25]

Final Result = 25`,
        explanation: "Critical Operand Order: When evaluating binary operator `op`, pop operand2 first, then operand1: evaluate `operand1 op operand2`!"
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CHEATSHEETS_DATA;
}
