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
  },
  {
    id: "cs-exception-handling",
    title: "🛡️ Exception Handling in Python (Ch 1)",
    category: "NCERT Class 12: Python",
    summary: "Syntax Errors vs Exceptions, try/except/else/finally flow, and raising exceptions intentionally.",
    cards: [
      {
        title: "1. Syntax Errors vs Exceptions",
        code: `# SYNTAX ERROR — Wrong Python grammar
print("Hello"
# Missing closing parenthesis → SyntaxError

# EXCEPTION — Valid syntax, runtime problem
number = 10 / 0
# Syntax is correct, but 10 ÷ 0 is impossible
# → ZeroDivisionError at runtime

# KEY DIFFERENCE:
# Syntax Error  → Code structure/grammar is wrong
# Exception     → Code is syntactically valid,
#                  but execution encounters a problem`,
        explanation: "Memory: Syntax Error = Wrong grammar (detected before running). Exception = Valid code that fails during execution."
      },
      {
        title: "2. Raising Exceptions Intentionally",
        code: `# Python raises exceptions automatically,
# but we can also intentionally raise one:

age = -5

if age < 0:
    raise ValueError("Age cannot be negative")

# raise = create/throw an exception intentionally
# Use raise when your code detects invalid data`,
        explanation: "Memory: raise = intentionally create/throw an exception when your program logic detects something wrong."
      },
      {
        title: "3. try / except / else / finally",
        code: `# Full Exception Handling Structure:

try:
    number = int(input("Enter number: "))

except ValueError:
    print("Invalid number")       # Runs if error occurs

else:
    print("Valid number:", number) # Runs if NO error

finally:
    print("Cleanup done")         # ALWAYS runs

# FLOW:
# try → attempt risky code
# except → handle the error
# else → runs only if try succeeds (no exception)
# finally → always runs (cleanup work)`,
        explanation: "Memory: try = attempt, except = catch error, else = success path, finally = always cleanup."
      }
    ]
  },
  {
    id: "cs-file-handling",
    title: "📁 File Handling in Python (Ch 2)",
    category: "NCERT Class 12: Python",
    summary: "Text vs Binary files, open/read/write/close, file offsets (tell/seek), and the Pickle module for object serialization.",
    cards: [
      {
        title: "1. Variable vs File & File Types",
        code: `# Variable → Temporary program data (lost when program stops)
# File     → Persistent storage for later use

# TWO TYPES OF FILES:
# Files
# ├── Text    → Human-readable characters (.txt, .csv, .py)
# └── Binary  → Raw bytes (images, audio, video)

# Text file example content:
# Niraj
# Python
# 100

# Memory: Text = characters, Binary = bytes`,
        explanation: "Files provide persistent storage — data survives even after the program stops. Text files store readable characters; binary files store raw bytes."
      },
      {
        title: "2. Opening, Modes & Closing Files",
        code: `# Open a file:
file = open("notes.txt", "r")

# Common modes:
# r → Read (default)
# w → Write / overwrite (creates new if not exists)
# a → Append (adds to end)

# Always close when done:
file.close()

# Better practice — with statement:
with open("notes.txt", "r") as file:
    data = file.read()
# File auto-closes after the 'with' block`,
        explanation: "Memory: open() → OPEN, read() → READ, write() → WRITE, close() → CLOSE. The 'with' statement handles closing automatically."
      },
      {
        title: "3. File Offsets: tell() & seek()",
        code: `# A file has a current position (like a cursor)

# tell() → Returns current file position
position = file.tell()   # WHERE am I?

# seek() → Moves the file position
file.seek(0)             # MOVE to beginning

# Memory:
# tell → WHERE?
# seek → MOVE`,
        explanation: "tell() tells you WHERE the cursor is; seek() MOVES the cursor to a new position."
      },
      {
        title: "4. Pickle Module — Object Serialization",
        code: `import pickle

student = {"name": "Aman", "marks": 90}

# WRITE (dump) — object → file
with open("student.dat", "wb") as file:
    pickle.dump(student, file)

# READ (load) — file → object
with open("student.dat", "rb") as file:
    student = pickle.load(file)
print(student)

# Memory:
# pickle.dump → SAVE OBJECT (object → file)
# pickle.load → RESTORE OBJECT (file → object)`,
        explanation: "Pickle serializes Python objects into binary format. dump = save object to file, load = restore object from file. Use 'wb'/'rb' modes (binary)."
      }
    ]
  },
  {
    id: "cs-stack",
    title: "📚 Stack — LIFO Data Structure (Ch 3)",
    category: "NCERT Class 12: Data Structures",
    summary: "Stack is a LIFO structure where push/pop happen at TOP. Used for expression processing (Infix → Postfix → Evaluation).",
    cards: [
      {
        title: "1. Stack Concept & Operations",
        code: `# Stack = Linear data structure
# Insertion & deletion happen at one end: TOP
# Follows LIFO: Last In, First Out

# Key Operations:
# Push  → Add element to TOP
# Pop   → Remove element from TOP
# Peek  → View TOP element without removing
# Overflow → Trying to push beyond fixed capacity

#       TOP
#      ┌───┐
#      │ 30│  ← Push/Pop here
#      │ 20│
#      │ 10│
#      └───┘`,
        explanation: "Memory: Stack = LIFO. Think of a stack of plates — you can only add/remove from the TOP."
      },
      {
        title: "2. Stack Mental Map",
        code: `#               PYTHON
#                  |
#      ┌───────────┼────────────┐
#      ↓           ↓            ↓
#  EXCEPTION      FILE         STACK
#  HANDLING     HANDLING
#      |           |            |
#  try          open()         LIFO
#  except       read()          |
#  else         write()      push/pop
#  finally      close()         |
#  raise        seek()       Expression
#               tell()       Processing
#                 |             |
#               pickle    Infix → Postfix
#                               ↓
#                        Postfix Evaluation`,
        explanation: "Exception Handling → Detect and safely handle runtime problems. File Handling → Store and retrieve persistent data. Stack → LIFO structure where push and pop happen at the top."
      }
    ]
  },
  {
    id: "cs-queue",
    title: "🚶 Queue — FIFO Data Structure (Ch 4)",
    category: "NCERT Class 12: Data Structures",
    summary: "Queue follows FIFO with Enqueue at REAR and Dequeue at FRONT. Deque allows operations at both ends.",
    cards: [
      {
        title: "1. Queue Concept & Operations",
        code: `# Queue = Linear data structure
# Insertion and deletion at OPPOSITE ends
# Follows FIFO: First In, First Out

# Deletion                       Insertion
#    ↓                              ↓
#  FRONT                          REAR
# [10] [20] [30] [40]

# ENQUEUE → Add element at REAR
# DEQUEUE → Remove element from FRONT

# Example:
# Initially:    [10] [20] [30]
# Enqueue 40:   [10] [20] [30] [40]
# Dequeue:      10 leaves → [20] [30] [40]`,
        explanation: "Memory: Queue = FIFO (First In, First Out). Think of a line at a ticket counter — first person in line gets served first."
      },
      {
        title: "2. Deque (Double-Ended Queue)",
        code: `# Deque = Double-Ended Queue
# Pronounced: "deck"

# Normal Queue:
# Delete ← FRONT ........ REAR ← Insert

# Deque:
# Insert/Delete                Insert/Delete
#       ↓                           ↓
#     FRONT                       REAR
#    [10] [20] [30] [40]

# Both ends can insert AND delete!

# Memory: Deque = Queue with two doors`,
        explanation: "A Deque allows insertion and deletion at BOTH ends, unlike a regular queue which restricts delete to FRONT and insert to REAR."
      }
    ]
  },
  {
    id: "cs-sorting",
    title: "🔄 Sorting Algorithms (Ch 5)",
    category: "NCERT Class 12: Algorithms",
    summary: "Bubble (compare neighbours), Selection (find smallest), Insertion (pick & place cards). All O(n²) at chapter level.",
    cards: [
      {
        title: "1. Three Sorting Strategies — Mental Picture",
        code: `# Unsorted: 8  7  13  1  -9  4
# Goal:    -9  1   4  7   8  13

# Three approaches:
# BUBBLE    → Compare neighbours, swap if wrong order
# SELECTION → Find smallest, put it first
# INSERTION → Pick next card, insert at correct position

# Ultimate Memory:
# Bubble    = neighbour swap
# Selection = find minimum
# Insertion = playing cards`,
        explanation: "Each algorithm achieves sorting differently: Bubble swaps adjacent elements, Selection finds the minimum, Insertion places each item into its correct position."
      },
      {
        title: "2. Bubble Sort — Neighbour Compare & Swap",
        code: `# Mental phrase: Neighbour → Compare → Swap
# Largest element "bubbles" to the right each pass

# [5, 3, 4, 1]
# 5>3? swap → [3, 5, 4, 1]
# 5>4? swap → [3, 4, 5, 1]
# 5>1? swap → [3, 4, 1, 5]  ← 5 is fixed
#                        ↑ Largest fixed at right

numbers = [5, 3, 4, 1]
n = len(numbers)
for i in range(n - 1):
    for j in range(n - i - 1):
        if numbers[j] > numbers[j + 1]:
            numbers[j], numbers[j + 1] = (
                numbers[j + 1], numbers[j])
print(numbers)  # [1, 3, 4, 5]`,
        explanation: "Memory: Bubble = largest bubbles to the right. After each pass, the largest unsorted element reaches its final position on the right side."
      },
      {
        title: "3. Selection Sort — Find Smallest, Put First",
        code: `# Mental phrase: Find smallest → put it first
# [8, 7, 13, 1, -9, 4]
# Find smallest: -9 → put first
# [-9 | 7, 13, 1, 8, 4]  ← sorted|unsorted

numbers = [5, 3, 4, 1]
n = len(numbers)
for i in range(n - 1):
    min_index = i
    for j in range(i + 1, n):
        if numbers[j] < numbers[min_index]:
            min_index = j
    numbers[i], numbers[min_index] = (
        numbers[min_index], numbers[i])
print(numbers)  # [1, 3, 4, 5]`,
        explanation: "Memory: Selection = select minimum. Each pass finds the smallest element from the unsorted part and places it at the front (sorted side is LEFT)."
      },
      {
        title: "4. Insertion Sort — Playing Cards",
        code: `# Imagine arranging playing cards in your hand
# Already have: 2  5  8     Receive: 4
# Shift 8→right, 5→right, insert 4
# Result: 2  4  5  8

numbers = [5, 3, 4, 1]
for i in range(1, len(numbers)):
    current = numbers[i]
    j = i - 1
    while j >= 0 and numbers[j] > current:
        numbers[j + 1] = numbers[j]
        j -= 1
    numbers[j + 1] = current
print(numbers)  # [1, 3, 4, 5]`,
        explanation: "Memory: Insertion = Pick → Shift → Insert. Like arranging playing cards. Sorted side grows from the LEFT."
      },
      {
        title: "5. Time Complexity & Active Recall",
        code: `# Time Complexity at Chapter Level:
# No loop        → O(1)
# One n-sized loop    → O(n)
# Nested n-sized loops → O(n²)

# All three sorts: O(n²) with nested loops

# ACTIVE RECALL:
# Bubble sorted side?    → Right
# Selection sorted side? → Left
# Insertion sorted side? → Left

# Which compares adjacent?    → Bubble Sort
# Which searches for minimum? → Selection Sort
# Which shifts larger values? → Insertion Sort`,
        explanation: "All three algorithms use nested loops giving O(n²). Bubble fixes from the right; Selection and Insertion build sorted portions from the left."
      }
    ]
  },
  {
    id: "cs-searching",
    title: "🔍 Searching Algorithms (Ch 6)",
    category: "NCERT Class 12: Algorithms",
    summary: "Linear Search (one by one, O(n)), Binary Search (half repeatedly, O(log n), sorted required), Hashing (bucket, average O(1)).",
    cards: [
      {
        title: "1. Linear vs Binary — Mental Picture",
        code: `# LINEAR SEARCH — One by one
# Target = 40
# 10 → 25 → 31 → 40 ← FOUND
# Does NOT require sorted data. O(n)

# BINARY SEARCH — Half, half, half
# Sorted: [10 20 30 40 50 60 70]
#                   ↑ Middle
# Target > middle? → Throw away left half
# Requires SORTED data. O(log n)

# Memory:
# Linear → ONE BY ONE
# Binary → HALF, HALF, HALF`,
        explanation: "Linear Search checks every element sequentially (O(n), no sorting needed). Binary Search eliminates half the search space each step (O(log n), sorted data required)."
      },
      {
        title: "2. Linear Search Code",
        code: `# Target = 30 in [10, 50, 20, 30, 70]
# 10 == 30? ❌
# 50 == 30? ❌
# 20 == 30? ❌
# 30 == 30? ✅ Found!

def linear_search(numbers, target):
    for i in range(len(numbers)):
        if numbers[i] == target:
            return i
    return -1

# Complexity: O(n)
# Sorting NOT required`,
        explanation: "Memory: Linear Search = start to finish, one by one. In worst case, you may inspect every element."
      },
      {
        title: "3. Binary Search Code",
        code: `# [10, 20, 30, 40, 50, 60, 70]  Target = 60
# Middle: 40 → 60 > 40 → discard left half
# [50, 60, 70] → Middle: 60 → FOUND!

def binary_search(numbers, target):
    low = 0
    high = len(numbers) - 1
    while low <= high:
        mid = (low + high) // 2
        if numbers[mid] == target:
            return mid
        elif target < numbers[mid]:
            high = mid - 1
        else:
            low = mid + 1
    return -1

# Complexity: O(log n)  |  Sorted data REQUIRED`,
        explanation: "Memory: Binary Search = keep half, discard half. Much faster than linear on sorted data."
      },
      {
        title: "4. Hashing & Final Mental Map",
        code: `# HASHING — Hash function → bucket → O(1) average
# Python dictionaries are hash-based mappings

# Hash Collision: Two keys → same bucket
# Key A ─┐
#        ├──→ Bucket 5
# Key B ─┘

# ──── FINAL MENTAL MAP ────
#            DATA STRUCTURES + ALGORITHMS
#                       |
#     ┌─────────────────┼─────────────────┐
#     ↓                 ↓                 ↓
#   QUEUE            SORTING          SEARCHING
#     |                 |                 |
#   FIFO         ┌──────┼──────┐    ┌─────┼─────┐
#     |          ↓      ↓      ↓    ↓     ↓     ↓
#  Enqueue   Bubble  Select Insert Linear Binary Hash
#  Dequeue      |      |      |     |      |      |
#     |     Neighbor  Min   Cards  One    Half  Bucket
#   Deque                          by one`,
        explanation: "Queue = FIFO. Sorting: Bubble (neighbours), Selection (minimum), Insertion (cards). Searching: Linear (one by one), Binary (halves sorted space), Hashing (calculates where to look)."
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CHEATSHEETS_DATA;
}
