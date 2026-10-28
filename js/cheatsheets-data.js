// BPSC TRE 4.0 Computer Science — NCERT Master Cheat Sheets (Chapters 1 - 10)

const CHEATSHEETS_DATA = [
  {
    id: "ch1-exception-handling",
    title: "Chapter 1 — Exception Handling in Python",
    category: "NCERT Class 12: Python",
    summary: "1.2 Syntax Errors, 1.3 Exceptions, 1.5 Raising Exceptions, 1.6 Handling Exceptions, 1.7 finally Clause.",
    cards: [
      {
        title: "1.2 Syntax Errors & 1.3 Exceptions",
        code: `1.2 Syntax Errors
A syntax error means Python’s grammar is incorrect.

example:

print("Hello"
Missing ).

Memory
Syntax Error = Wrong Python grammar.

────────────────────────────────────────────────────────
1.3 Exceptions
An exception happens during execution.

Example:

number = 10 / 0
The syntax is valid.

But while executing:

10 ÷ 0
  ↓
Impossible
  ↓
ZeroDivisionError

────────────────────────────────────────────────────────
Key difference
Syntax Error
→ Code structure/grammar is wrong

Exception
→ Code is syntactically valid,
  but execution encounters a problem`,
        explanation: "Syntax Error = Wrong Python grammar. | Exception = Code structure is valid, but runtime encounters a problem."
      },
      {
        title: "1.5 Raising Exceptions",
        code: `Normally Python raises exceptions automatically.

But we can also intentionally raise one.

age = -5

if age < 0:
    raise ValueError("Age cannot be negative")

Memory:
raise = create/throw an exception intentionally.`,
        explanation: "Memory: raise = create/throw an exception intentionally."
      },
      {
        title: "1.6 Handling Exceptions & 1.7 finally Clause",
        code: `1.6 Handling Exceptions
We normally use:

try:
    ...
except:
    ...

try:
    number = int(input("Enter number: "))

except ValueError:
    print("Invalid number")

else:
    print("Valid number:", number)

────────────────────────────────────────────────────────
1.7 finally Clause
finally is normally used for cleanup work.

try:
    print("Processing")

except Exception:
    print("Something failed")

finally:
    print("Cleanup")`,
        explanation: "finally is normally used for cleanup work."
      }
    ]
  },
  {
    id: "ch2-file-handling",
    title: "Chapter 2 — File Handling in Python",
    category: "NCERT Class 12: Python",
    summary: "2.1 Introduction to Files, 2.2 Types of Files, 2.3 Opening/Closing, 2.6 Setting Offsets, 2.8 Pickle Module.",
    cards: [
      {
        title: "2.1 Introduction to Files & 2.2 Types of Files",
        code: `2.1 Introduction to Files

Variables normally hold data while a program runs.

But if the application stops, we may need a way to preserve information.

Files provide persistent storage.

Mental picture:

Variable
→ Temporary program data

File
→ Stored data for later use

────────────────────────────────────────────────────────
2.2 Types of Files
Two important categories:

Files
├── Text
└── Binary

Text File
Contains human-readable characters.

Examples:
.txt
.csv
.py

Example content:
Niraj
Python
100

Binary File
Stores bytes rather than ordinary human-readable text.

Examples:
Image
Audio
Video

Memory:
Text = characters, Binary = bytes.`,
        explanation: "Text = characters, Binary = bytes."
      },
      {
        title: "2.3 Opening/Closing & 2.6 Setting Offsets",
        code: `2.3 Opening and Closing a Text File
Use: open()

file = open("notes.txt", "r")

// Then

file.close()

Common modes:
r → Read
w → Write/overwrite
a → Append

────────────────────────────────────────────────────────
2.6 Setting Offsets in a File
A file has a current position.

tell(): Tells the current file position.

seek(): Moves the file position.`,
        explanation: "Quick memory: open → OPEN | read → READ | write → WRITE | tell → WHERE? | seek → MOVE | close → CLOSE"
      },
      {
        title: "2.8 Pickle Module (Object Serialization)",
        code: `Sometimes we want to store a Python object, not just plain text.

For example:

student = {    "name": "Aman",    "marks": 90}

The pickle module can serialize Python objects into a binary representation.

💻 SMALL CODE — Pickle
Write:

import pickle

student = {
    "name": "Aman",
    "marks": 90
}

with open("student.dat", "wb") as file:
    pickle.dump(student, file)

Read:

import pickle

with open("student.dat", "rb") as file:
    student = pickle.load(file)

print(student)

Memory:
dump
→ object → file

load
→ file → object

Quick memory:
pickle.dump → SAVE OBJECT
pickle.load → RESTORE OBJECT`,
        explanation: "pickle.dump → SAVE OBJECT (object → file) | pickle.load → RESTORE OBJECT (file → object)"
      }
    ]
  },
  {
    id: "ch3-stack",
    title: "Chapter 3 — Stack",
    category: "NCERT Class 12: Data Structures",
    summary: "3.1 Definition, 3.3 Operations on Stack (Push, Pop, Peek, Overflow), and Final Mental Map.",
    cards: [
      {
        title: "3.1 Definition & 3.3 Operations on Stack",
        code: `A stack is a linear data structure.

Insertion and deletion happen at one end called:

TOP

────────────────────────────────────────────────────────
3.3 Operations on Stack
Important operations:

Push
Pop
Peek/Top
Overflow
Traditionally means trying to push beyond fixed capacity.`,
        explanation: "Stack → LIFO structure where push and pop happen at the top."
      },
      {
        title: "Final Mental Map (Python → Exception, File, Stack)",
        code: `              PYTHON
                 |
     ┌───────────┼────────────┐
     ↓           ↓            ↓
 EXCEPTION      FILE         STACK
 HANDLING     HANDLING
     |           |            |
 try          open()         LIFO
 except       read()          |
 else         write()      push/pop
 finally      close()         |
 raise        seek()        Expression
              tell()       Processing
                |             |
              pickle     Infix → Postfix
                              ↓
                       Postfix Evaluation`,
        explanation: "Then mentally speak: Exception Handling → Detect and safely handle runtime problems. | File Handling → Store and retrieve persistent data. | Stack → LIFO structure where push and pop happen at the top."
      }
    ]
  },
  {
    id: "ch4-queue",
    title: "Chapter 4 — Queue",
    category: "NCERT Class 12: Data Structures",
    summary: "4.1 Linear Queue (FIFO), 4.2 Enqueue/Dequeue Operations, 4.4 Deque (Double-Ended Queue).",
    cards: [
      {
        title: "4.1 Concept & 4.2 Operations on Queue",
        code: `A Queue is a linear data structure in which insertion and deletion happen at opposite ends.

Deletion                       Insertion
   ↓                              ↓
 FRONT                          REAR

[10] [20] [30] [40]

The element that enters first leaves first.

────────────────────────────────────────────────────────
4.2 Operations on Queue
The two most important operations are:

ENQUEUE
→ Add element at REAR

DEQUEUE
→ Remove element from FRONT

// Example:

Initially:
[10] [20] [30]

Enqueue 40:
[10] [20] [30] [40]

Dequeue:
10 leaves
[20] [30] [40]`,
        explanation: "Queue = First In, First Out (FIFO)."
      },
      {
        title: "4.4 What Is a Deque?",
        code: `Deque means:

Double-Ended Queue

Pronounced roughly: "deck"

Normal queue:
Delete ← FRONT ........ REAR ← Insert

Deque:
Insert/Delete                    Insert/Delete
      ↓                               ↓
    FRONT                           REAR

[10] [20] [30] [40]

So both ends can be used.

Memory:
Deque = Queue with two doors.`,
        explanation: "Memory: Deque = Queue with two doors."
      }
    ]
  },
  {
    id: "ch5-sorting",
    title: "Chapter 5 — Sorting",
    category: "NCERT Class 12: Algorithms",
    summary: "Mental Picture of cards, 5.1 Sorting, 5.2 Bubble, 5.3 Selection, 5.4 Insertion, 5.5 Complexity & Active Recall.",
    cards: [
      {
        title: "🧠 MENTAL PICTURE & 5.1 Sorting",
        code: `🧠 MENTAL PICTURE
Imagine these cards:

8   7   13   1   -9   4
You want: -9 1 4 7 8 13

Three people solve it differently:

BUBBLE
→ Compare neighbours

SELECTION
→ Find smallest

INSERTION
→ Pick next card and insert correctly

That is the entire chapter mentally.

────────────────────────────────────────────────────────
5.1 Sorting
Sorting means arranging data in an order such as:

Ascending
1 2 3 4 5

Descending
5 4 3 2 1

Alphabetical
Apple Banana Mango

Sorting can make later searching and processing easier.`,
        explanation: "Ultimate memory: Bubble = neighbour, Selection = minimum, Insertion = cards."
      },
      {
        title: "5.2 Bubble Sort",
        code: `Mental phrase:
Neighbour → Compare → Swap

Example:
[5, 3, 4, 1]

Compare:
5 3
↓
swap
[3, 5, 4, 1]

Then:
5 4
↓
swap
[3, 4, 5, 1]

Then:
5 1
↓
swap
[3, 4, 1, 5]

After the first pass:
[3, 4, 1 | 5]
             ↑
       Largest fixed

💻 Small code:

numbers = [5, 3, 4, 1]

n = len(numbers)

for i in range(n - 1):
    for j in range(n - i - 1):
        if numbers[j] > numbers[j + 1]:
            numbers[j], numbers[j + 1] = (
                numbers[j + 1],
                numbers[j]
            )

print(numbers)

Result:
[1, 3, 4, 5]

Memory:
Bubble = largest bubbles to the right.`,
        explanation: "Memory: Bubble = largest bubbles to the right."
      },
      {
        title: "5.3 Selection Sort",
        code: `Mental phrase:
Find smallest → put it first.

Start:
[8, 7, 13, 1, -9, 4]

Find smallest: -9

Put it first:
[-9 | 7, 13, 1, 8, 4]

Now search only the remaining unsorted part.

💻 Small code:

numbers = [5, 3, 4, 1]

n = len(numbers)

for i in range(n - 1):
    min_index = i

    for j in range(i + 1, n):
        if numbers[j] < numbers[min_index]:
            min_index = j

    numbers[i], numbers[min_index] = (
        numbers[min_index],
        numbers[i]
    )

print(numbers)

Memory:
Selection = select minimum.`,
        explanation: "Memory: Selection = select minimum."
      },
      {
        title: "5.4 Insertion Sort",
        code: `Imagine arranging playing cards in your hand.

You already have:
2   5   8

You receive: 4

You move:
8 → right
5 → right

and insert:
2   4   5   8

That’s insertion sort.

💻 Small code:

numbers = [5, 3, 4, 1]

for i in range(1, len(numbers)):
    current = numbers[i]
    j = i - 1

    while j >= 0 and numbers[j] > current:
        numbers[j + 1] = numbers[j]
        j -= 1

    numbers[j + 1] = current

print(numbers)

Memory:
Insertion = Pick → Shift → Insert`,
        explanation: "Memory: Insertion = Pick → Shift → Insert"
      },
      {
        title: "5.5 Time Complexity, Follow-Up Questions & Active Recall",
        code: `5.5 Time Complexity:
The chapter introduces complexity as a way to think about how algorithm work grows as the data grows. Its introductory rules are:

No loop
→ O(1)

One n-sized loop
→ O(n)

Nested n-sized loops
→ O(n²)

────────────────────────────────────────────────────────
🔥 FOLLOW-UP QUESTIONS:
• What happens after one Bubble Sort pass?
  → Largest remaining value reaches the right side
• What happens after one Selection Sort pass?
  → Smallest remaining value reaches the left side
• What does Insertion Sort resemble?
  → Arranging playing cards
• Which one compares adjacent elements? Bubble Sort.
• Which one searches for the minimum? Selection Sort.
• Which one shifts larger values? Insertion Sort.

────────────────────────────────────────────────────────
🔄 ACTIVE RECALL:
• Bubble?                  → Compare neighbours
• Selection?               → Find minimum
• Insertion?               → Pick, shift, insert
• Bubble sorted side?      → Right
• Selection sorted side?   → Left
• Insertion sorted side?   → Left
• Nested loops?            → O(n²) at this chapter's level

Ultimate memory:
Bubble = neighbour, Selection = minimum, Insertion = cards.`,
        explanation: "Ultimate memory: Bubble = neighbour, Selection = minimum, Insertion = cards."
      }
    ]
  },
  {
    id: "ch6-searching",
    title: "Chapter 6 — Searching",
    category: "NCERT Class 12: Algorithms",
    summary: "Mental Picture, 6.2 Linear Search, 6.3 Binary Search, 6.4 Hashing & Collisions, Final Mental Map.",
    cards: [
      {
        title: "🧠 MENTAL PICTURE: Linear vs Binary",
        code: `🧠 MENTAL PICTURE
Imagine searching for the number 40.

Linear Search:
10 → 25 → 31 → 40
                ↑
               FOUND
You check one by one.

Binary Search:
Sorted list:
10 20 30 40 50 60 70
         ↑
       Middle

Ask:
Target greater than middle?
      ↓
Throw away left half

So remember:
Linear
→ ONE BY ONE

Binary
→ HALF, HALF, HALF`,
        explanation: "Linear → ONE BY ONE | Binary → HALF, HALF, HALF"
      },
      {
        title: "6.2 Linear Search",
        code: `Linear Search checks elements sequentially.

Example:
Target = 30
[10, 50, 20, 30, 70]
10 == 30? ❌
50 == 30? ❌
20 == 30? ❌
30 == 30? ✅

It does not require sorted data.

💻 Small code:

def linear_search(numbers, target):
    for i in range(len(numbers)):
        if numbers[i] == target:
            return i

    return -1

Typical time complexity:
O(n)
because in the worst case you may inspect every element.

Memory:
Linear Search = start to finish, one by one.`,
        explanation: "Memory: Linear Search = start to finish, one by one."
      },
      {
        title: "6.3 Binary Search",
        code: `Binary Search is much faster on suitable data because it repeatedly eliminates half of the remaining search space.

Example:
[10, 20, 30, 40, 50, 60, 70]

Target = 60
Middle: 40

Since: 60 > 40
ignore: 10 20 30 40

Remaining:
50 60 70
Middle: 60
Found.

💻 Small code:

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

Typical complexity:
O(log n)

Memory:
Binary Search = keep half, discard half.`,
        explanation: "Memory: Binary Search = keep half, discard half."
      },
      {
        title: "6.4 Search by Hashing & Hash Collision",
        code: `Hashing takes a key and applies a hash function to determine where the related value should be stored or searched.

> Python dictionaries are hash-based mappings.

Hash Collision:
Two different keys can sometimes map to the same hash location.

Mental picture:
Key A ─┐
       ├──→ Bucket 5
Key B ─┘

This is called:
Collision

────────────────────────────────────────────────────────
🔄 ACTIVE RECALL:
Without looking:

Linear Search
→ One by one
→ O(n)
→ Sorting not required

Binary Search
→ Half repeatedly
→ O(log n)
→ Sorted data required

Hashing
→ Hash function → bucket
→ Average O(1)
→ Collision possible`,
        explanation: "Hashing: Hash function → bucket | Average O(1) | Collision possible"
      },
      {
        title: "Final Mental Map & Master Memory Sentences",
        code: `               DATA STRUCTURES + ALGORITHMS
                            |
          ┌─────────────────┼─────────────────┐
          ↓                 ↓                 ↓
        QUEUE             SORTING          SEARCHING
          |                 |                 |
        FIFO          ┌─────┼─────┐      ┌────┼─────┐
          |           ↓     ↓     ↓      ↓     ↓     ↓
      Enqueue      Bubble Select Insert Linear Binary Hash
      Dequeue         |     |     |      |     |     |
          |       Neighbor Min   Cards  One   Half  Bucket
        Deque                           by one`,
        explanation: "Your final three memory sentences are: Queue = First In, First Out. | Sorting = Bubble compares neighbours, Selection finds the minimum, Insertion places the next item correctly. | Searching = Linear checks one by one, Binary halves a sorted search space, Hashing calculates where to look."
      }
    ]
  },
  {
    id: "data-stats-concepts",
    title: "Data, Information & Statistical Measures",
    category: "NCERT Class 11: Data Representation",
    summary: "What is Data & Information, Primary vs Secondary Data, Data Processing, Statistical Measures (Mean, Median, Mode, Range), and Interview Traps.",
    cards: [
      {
        title: "Data, Information & Data Processing",
        code: `What is data?
Raw facts and observations.

What is information?
Processed data that has meaning.

Primary vs secondary data?

Primary → collected directly
Secondary → already collected

What is data processing?
Transforming raw data into useful information.`,
        explanation: "Data = Raw facts and observations | Information = Processed data that has meaning | Primary = Collected directly, Secondary = Already collected."
      },
      {
        title: "Statistical Measures: Mean, Median, Mode & Range",
        code: `Mean? Sum divided by number of values.

Median? Middle value after sorting.

Mode? Most frequent value.

Range? Maximum minus minimum.`,
        explanation: "Mean = sum / count | Median = middle value after sorting | Mode = most frequent | Range = max - min."
      },
      {
        title: "⚠️ INTERVIEW TRAPS & Core Summary",
        code: `⚠️ INTERVIEW TRAPS

Trap 1 — Data and information are identical
No.

Data
→ raw

Information
→ processed + meaningful

────────────────────────────────────────────────────────
Trap 2 — Median can be found without considering order
You first need the values arranged in order.

────────────────────────────────────────────────────────
Trap 3 — Mean and median are always equal
No.

Example:

1, 2, 100
Median: 2

Mean:

103 / 3 ≈ 34.33
Very different.

────────────────────────────────────────────────────────
Trap 4 — Mode means largest number
No.

Mode means most frequent, not greatest.

────────────────────────────────────────────────────────
SUMMARY MEMORY:
Data → raw facts
Information → processed meaningful data
Primary → collected directly
Mean → sum / count
Median → middle
Mode → most frequent
Range → max - min`,
        explanation: "Interview traps: Median always requires sorting first; Mean & Median can differ wildly; Mode is most frequent, NOT largest."
      }
    ]
  },
  {
    id: "ch8-dbms",
    title: "Chapter 8 — Database Concepts",
    category: "NCERT Class 11/12: Databases",
    summary: "8.1 Introduction, 8.3 DBMS & CRUD, 8.4 Relational Data Model (Tables, Attributes, Tuples), 8.5 Keys, Follow-Up Questions, and White-Paper Mental Map.",
    cards: [
      {
        title: "8.1 Introduction & 8.3 DBMS (CRUD)",
        code: `8.1 Introduction
A database is an organised collection of related data.

8.3 Database Management System — DBMS
A DBMS is software used to create, store, retrieve, update and manage databases.

Mental picture:

          USER / APPLICATION
                ↓
               DBMS
                ↓
             DATABASE

These four basic data operations are commonly remembered as:

CRUD

💻 SMALL EXAMPLE
Conceptual SQL:

SELECT name
FROM Student
WHERE id = 101;

Mental:

User asks
"Give me student 101"
        ↓
DBMS
        ↓
Search table
        ↓
Return name`,
        explanation: "Database = Organised collection of related data | DBMS = Software to manage DB | CRUD = Create, Read, Update, Delete."
      },
      {
        title: "8.4 Relational Data Model",
        code: `A relational database represents data using tables, also called relations.

Example:

STUDENT

StudentID | Name  | Batch
----------|-------|-------
101       | Aman  | A
102       | Riya  | B
103       | Rahul | A

Mental picture:

TABLE
  |
  ├── Columns → Attributes
  |
  └── Rows → Tuples/Records

Relation Example
Consider:

STUDENT

RollNo | Name  | City
1      | Aman  | Patna
2      | Riya  | Delhi
3      | Ravi  | Patna

Here:

Relation
→ STUDENT

Attributes
→ RollNo, Name, City  

Tuple
→ (1, Aman, Patna)`,
        explanation: "Relation = Table | Columns = Attributes / Fields | Rows = Tuples / Records."
      },
      {
        title: "8.5 Keys in a Relational Database",
        code: `Keys are used to:

Identify records
Prevent ambiguity
Create relationships

The most important key types are:

Super Key
Candidate Key
Primary Key
Alternate Key
Foreign Key
Composite Key

────────────────────────────────────────────────────────
Primary Key
A Primary Key uniquely identifies each row.

Example:

StudentID | Name
----------|------
101       | Aman
102       | Riya
103       | Rahul

StudentID can be the primary key.
It must identify each record uniquely.

Mental:
Primary Key = Main identity card

────────────────────────────────────────────────────────
Candidate Key
A table may have more than one attribute capable of uniquely identifying rows.

Example:
StudentID
Email

────────────────────────────────────────────────────────
Alternate Key
Candidate keys that were not selected as the primary key are alternate keys.

Example:
Candidate Keys:
StudentID
Email

Primary:
StudentID

Alternate:
Email

Memory:
Alternate = Candidate not chosen

────────────────────────────────────────────────────────
Super Key
Any set of attributes capable of uniquely identifying a row is a super key.

Suppose:
StudentID is unique.

Then:
StudentID is a super key.

And:
StudentID + Name can also uniquely identify the row, so it is also a super key, although Name may be unnecessary.

Mental:
Super Key
→ Unique identifier
→ May contain extra attributes

────────────────────────────────────────────────────────
Composite Key
Sometimes one column alone is not enough.

Example enrollment table:

StudentID | CourseID
----------|---------
101       | C1
101       | C2
102       | C1

Neither StudentID nor CourseID is individually unique.
But together:
(StudentID, CourseID) uniquely identify a row.

That is a:
Composite Key

Mental:
Composite = combination of columns

────────────────────────────────────────────────────────
Foreign Key
This is the key that connects tables.

Imagine:

STUDENT
StudentID | Name
101       | Aman
102       | Riya

and:

PAYMENT
PaymentID | StudentID | Amount
1         | 101       | 500
2         | 102       | 600

Here:
PAYMENT.StudentID refers to: STUDENT.StudentID
So in PAYMENT, StudentID is a Foreign Key.

Memory:
Foreign Key = bridge between tables`,
        explanation: "Primary Key = Main identity card | Candidate = Minimal attribute set for uniqueness | Alternate = Unchosen candidate key | Super Key = Unique set (can include extras) | Composite = Multi-column key | Foreign Key = Bridge between tables."
      },
      {
        title: "🔥 Follow-Up Questions & 🧠 White-Paper Mental Map",
        code: `🔥 FOLLOW-UP QUESTIONS
What is a database?
Organised collection of related data.

What is DBMS?
Software that manages a database.

Relation means?
Table.

Tuple means?
Row/record.

Attribute means?
Column/field.

Primary key?
Uniquely identifies each row.

Candidate key?
Minimal attribute set capable of uniquely identifying a row.

Alternate key?
Candidate key not chosen as primary.

Foreign key?
Attribute that references a key in another table.

Composite key?
Key made from more than one column.

Super key?
Any attribute set that uniquely identifies a row, possibly with extra attributes.

────────────────────────────────────────────────────────
🧠 FINAL WHITE-PAPER MENTAL MAP
Draw this mentally:

                       DATABASE
                          |
                         DBMS
                          |
                       TABLES
                          |
               ┌──────────┴──────────┐
               ↓                     ↓
              ROW                 COLUMN
           Tuple/Record         Attribute
               |
              Keys
               |
     ┌─────────┼─────────┬──────────┐
     ↓         ↓         ↓          ↓
 Primary   Candidate   Foreign   Composite`,
        explanation: "Core DB architecture: Database → DBMS → Tables (Relations) → Rows (Tuples) & Columns (Attributes) → Keys (Primary, Candidate, Foreign, Composite)."
      }
    ]
  },
  {
    id: "ch9-sql",
    title: "Chapter 9 — Structured Query Language (SQL)",
    category: "NCERT Class 11/12: SQL",
    summary: "MySQL Data Types & Constraints, 9.4 DDL (CREATE, ALTER, DROP), 9.5 DML (INSERT), 9.6 Query (SELECT), 9.7 UPDATE & DELETE, 9.8 Functions, and SQL Memory Pipeline.",
    cards: [
      {
        title: "Data Types and Constraints in MySQL",
        code: `Data Types in MySQL:
INT             → whole number
FLOAT / DECIMAL → decimal number
CHAR            → fixed-length string
VARCHAR         → variable-length string
DATE            → date
TIME            → time

Example:
age INT
name VARCHAR(50)
fees DECIMAL(8,2)

────────────────────────────────────────────────────────
Constraints:
Constraints control what data is allowed.

Important ones:
PRIMARY KEY
NOT NULL
UNIQUE
DEFAULT
FOREIGN KEY

Example:
CREATE TABLE Student (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE
);

Mental:
PRIMARY KEY → unique identity
NOT NULL    → value required
UNIQUE      → no duplicate
DEFAULT     → automatic default value
FOREIGN KEY → relation with another table`,
        explanation: "Data types define storage format (INT, CHAR, VARCHAR, etc.). Constraints enforce data integrity (PRIMARY KEY, NOT NULL, UNIQUE, DEFAULT, FOREIGN KEY)."
      },
      {
        title: "9.4 DDL, 9.5 DML & 9.6 SQL for Data Query",
        code: `9.4 SQL for Data Definition
DDL changes database structure.

Important commands:
CREATE
ALTER
DROP

CREATE:
CREATE TABLE Student (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    marks INT
);

ALTER:
Add a column:
ALTER TABLE Student
ADD city VARCHAR(50);

DROP:
DROP TABLE Student;

Mental:
CREATE → Build
ALTER  → Change structure
DROP   → Remove structure

────────────────────────────────────────────────────────
9.5 SQL for Data Manipulation
To add data:

INSERT INTO Student
VALUES (1, 'Aman', 90);

Or:

INSERT INTO Student (id, name, marks)
VALUES (2, 'Riya', 85);

Mental:
INSERT = add row

────────────────────────────────────────────────────────
9.6 SQL for Data Query
The most important command is:
SELECT

Example:
SELECT * FROM Student;

Means:
* → all columns

Select specific columns:
SELECT name, marks
FROM Student;

With condition:
SELECT name
FROM Student
WHERE marks > 80;

Mental:
SELECT → what?
FROM   → where?
WHERE  → which rows?

Memory sentence:
SELECT what FROM where WHERE condition.`,
        explanation: "DDL changes table schema (CREATE, ALTER, DROP). DML alters table data (INSERT). Data Query reads records: SELECT what FROM where WHERE condition."
      },
      {
        title: "9.7 Updation/Deletion, 9.8 Functions & Master SQL Memory",
        code: `9.7 Data Updation and Deletion

UPDATE:
UPDATE Student
SET marks = 95
WHERE id = 1;

Mental:
UPDATE → Which table?
SET    → New value
WHERE  → Which row?

DELETE:
DELETE FROM Student
WHERE id = 1;

⚠️ Important:
DELETE FROM Student;
deletes all rows.

────────────────────────────────────────────────────────
9.8 Functions in SQL
SQL provides aggregate functions.

Important ones:
COUNT()
SUM()
AVG()
MIN()
MAX()

Example:
SELECT AVG(marks)
FROM Student;

Example:
SELECT MAX(marks)
FROM Student;

Memory:
COUNT → How many?
SUM   → Total
AVG   → Average
MIN   → Smallest
MAX   → Largest

────────────────────────────────────────────────────────
💻 SMALL CODE — SQL
CREATE TABLE Student (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    marks INT
);

INSERT INTO Student
VALUES (1, 'Aman', 90);

SELECT name, marks
FROM Student
WHERE marks >= 80;

UPDATE Student
SET marks = 95
WHERE id = 1;

CREATE   → create structure
INSERT   → add row
SELECT   → read/query
UPDATE   → change data
DELETE   → remove row
GROUP BY → group rows
JOIN     → combine tables

Ultimate SQL memory:
CREATE → INSERT → SELECT → UPDATE → DELETE`,
        explanation: "UPDATE changes data, DELETE removes rows (without WHERE deletes all). Aggregate functions: COUNT, SUM, AVG, MIN, MAX. Pipeline: CREATE → INSERT → SELECT → UPDATE → DELETE."
      }
    ]
  },
  {
    id: "ch10-networks",
    title: "Chapter 10 — Computer Networks",
    category: "NCERT Class 12: Computer Networks",
    summary: "10.1 Intro & Purposes, 10.3 Types (PAN, LAN, MAN, WAN), 10.5 Topologies, 10.6 Node Identification (MAC vs IP), 10.7 Internet/Web/IoT, 10.8 DNS, Follow-Up Questions & Mental Map.",
    cards: [
      {
        title: "10.1 Intro & 10.3 Types of Networks",
        code: `10.1 Introduction to Computer Networks
A computer network is a collection of interconnected devices.

Purpose:
Communication
Resource sharing
File sharing
Internet access
Printer sharing
Data exchange

Examples:
School lab
Office network
Home Wi-Fi
Internet

────────────────────────────────────────────────────────
10.3 Types of Networks
Important types:
PAN
LAN
MAN
WAN

PAN:
Personal Area Network.
Example: Phone ↔ Smartwatch
Small personal range.

LAN:
Local Area Network.
Example: School computer lab, Office floor, Home network
Small geographical area.

MAN:
Metropolitan Area Network.
Covers: City-scale area

WAN:
Wide Area Network.
Covers large geographical areas.
The Internet is a major example of interconnected wide networks.

Memory:
PAN → Person
LAN → Local
MAN → Metropolitan
WAN → Wide`,
        explanation: "Network scales: PAN (Person/Bluetooth) → LAN (Local/Lab) → MAN (Metropolitan/City) → WAN (Wide/Internet)."
      },
      {
        title: "10.5 Networking Topologies",
        code: `Topology means:
Physical/logical arrangement of network nodes.

Common topologies:
Bus
Star
Ring
Mesh
Tree

Bus:
A --- B --- C --- D
Single backbone cable.
Simple but backbone failure can disrupt communication.

Star:
      A
      |
B --- S --- C
      |
      D
S = central switch/hub.
Very common LAN design.

Mental:
Star = everyone talks through center

Ring:
A → B → C → D
↑           ↓
└───────────┘
Devices form a ring.

Mesh:
A ----- B
|\     /|
| \   / |
|  \ /  |
|  / \  |
| /   \ |
|/     \|
C ----- D
Many direct interconnections.
High redundancy, more expensive/complex.`,
        explanation: "Topologies: Bus (single cable), Star (central switch/hub), Ring (unidirectional/bidirectional loop), Mesh (point-to-point mesh with high redundancy)."
      },
      {
        title: "10.6 Node Identification (MAC vs IP), 10.7 Internet/Web/IoT & 10.8 DNS",
        code: `10.6 Identifying Nodes in Network Communication
Devices need identifiers.

Important ones:
MAC Address
IP Address

MAC Address:
Hardware/network-interface identifier.
Think:
MAC = device/interface identity on local network level

IP Address:
Logical address used for network communication.
Example IPv4: 192.168.1.10
Mental:
MAC → Who is the interface?
IP  → Where is the device logically?

────────────────────────────────────────────────────────
10.7 Internet, Web and IoT

Internet:
A global network of interconnected networks.
Think:
Network ↓ Network ↓ Network ↓ INTERNET

World Wide Web:
The Web is a service running on top of the Internet.
Web uses: Web pages, Browsers, Web servers, URLs, HTTP/HTTPS

Important:
Internet ≠ Web
Internet → underlying network infrastructure
Web      → one service using the Internet

Internet of Things (IoT):
IoT connects physical devices to networks/Internet.
Examples: Smart bulb, Smart camera, Smartwatch, Sensor, Smart AC
Mental:
Sensor/device → Network → Internet → Application

────────────────────────────────────────────────────────
10.8 Domain Name System (DNS)
Humans prefer names:
google.com
example.com

Computers communicate using IP addresses.
DNS connects the two.

Mental picture:
example.com
    ↓
DNS
    ↓
IP Address
    ↓
Server

Best analogy:
DNS = Internet phonebook
You know: Name → DNS finds: Address`,
        explanation: "MAC = Physical hardware interface | IP = Logical address | Internet ≠ Web (Infrastructure vs Service) | DNS = Internet Phonebook (Names to IPs)."
      },
      {
        title: "🔥 Follow-Up Questions & 🧠 White-Paper Mental Map",
        code: `🔥 FOLLOW-UP QUESTIONS — Networks

LAN vs WAN?
LAN → small/local area
WAN → large geographical area

Hub vs Switch?
Hub → sends broadly
Switch → directs to intended port/device

Switch vs Router?
Switch → devices in same LAN
Router → networks

MAC vs IP?
MAC → hardware/interface identifier
IP → logical network address

Internet vs Web?
Internet → network infrastructure
Web → service on Internet

DNS?
Converts domain names to IP addresses.

────────────────────────────────────────────────────────
🧠 FINAL WHITE-PAPER MENTAL MAP

                         SQL
                          |
       ┌──────────────────┼─────────────────┐
       ↓                  ↓                 ↓
      DDL                DML               QUERY
       |                  |                  |
CREATE/ALTER/DROP   INSERT/UPDATE/DELETE   SELECT
                                             |
                                      WHERE / GROUP BY
                                             |
                                            JOIN


                      NETWORK
                         |
        ┌────────────────┼────────────────┐
        ↓                ↓                ↓
      TYPES           DEVICES          SERVICES
        |                |                |
 PAN LAN MAN WAN     Switch Router     Internet
                                        Web
                                        DNS
                                        IoT`,
        explanation: "Networking fundamentals: LAN vs WAN, Hub vs Switch, Switch vs Router, MAC vs IP, Internet vs Web, DNS. Plus master SQL & Network mental hierarchy."
      }
    ]
  }
];
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CHEATSHEETS_DATA;
}
