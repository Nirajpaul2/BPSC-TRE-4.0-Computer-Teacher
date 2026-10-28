// BPSC TRE 4.0 Computer Science — NCERT Master Cheat Sheets (Chapters 1 - 6)

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
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CHEATSHEETS_DATA;
}
