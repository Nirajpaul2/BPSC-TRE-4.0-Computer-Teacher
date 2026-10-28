// BPSC TRE 4.0 Computer Science — NCERT Master Cheat Sheets (Class 11 & Class 12)

const CHEATSHEETS_DATA = [
  {
    "id": "c11-ch5-python-intro",
    "classLevel": 11,
    "chapterNumber": 5,
    "title": "Class 11 Chapter 5 — Getting Started with Python",
    "category": "NCERT Class 11: Python Basics",
    "summary": "What is a Program, Python Interpreter, Interactive vs Script Mode, Variables as Object References, id(), Python Data Types, and List vs Tuple vs Set vs Dictionary.",
    "cards": [
      {
        "title": "What Is a Program? & Python Interpreter",
        "code": "1. What Is a Program?\nA program is an ordered set of instructions given to a computer to perform a specific task.\n\nFor example:\n\nlength = 10\nbreadth = 20\narea = length * breadth\nprint(area)\n\nThe computer follows the instructions.\n\nMemory:\nProgram = Instructions to perform a task.\n\n────────────────────────────────────────────────────────\nPython Interpreter\nPython is an interpreted language.\n\nThe interpreter processes program statements and executes them, stopping when an error is encountered or when the program finishes successfully.",
        "explanation": "Program = Ordered set of instructions to perform a task. Python interpreter executes statements line-by-line and halts on error."
      },
      {
        "title": "Interactive Mode vs Script Mode",
        "code": "Python can be used in two ways.\n\nInteractive Mode:\nYou type a statement directly:\n\n>>> 10 + 20\n30\n\nThe result appears immediately.\n\nThink:\nType\n ↓\nExecute\n ↓\nResult\n\nThis is useful for quickly testing a small piece of code.\n\n────────────────────────────────────────────────────────\nScript Mode:\nYou write the program in a .py file:\n\nlength = 10\nbreadth = 20\narea = length * breadth\nprint(area)\n\nThen run the file.\n\nThink:\nWrite\n ↓\nSave .py\n ↓\nRun\n ↓\nOutput\n\n🧠 Memory:\nInteractive → Try now\nScript      → Save and run later",
        "explanation": "Interactive Mode: Direct evaluation (Try now). Script Mode: Save in .py file and execute (Save and run later)."
      },
      {
        "title": "Variables & Everything Is an Object",
        "code": "Variables:\nThis is one of the most important Python concepts.\n\nIn Python:\nage = 42\nwe don’t separately declare the variable type.\n\nThe variable becomes associated with an object when the assignment happens.\nThe chapter describes Python variables as references to objects and notes that variable creation is implicit through assignment.\n\n🧠 Mental picture:\nImagine:\nage\n ↓\n[ 42 ]\n\nThen:\nage = 50\nbecomes:\nage\n ↓\n[ 50 ]\n\nThe name is associated with an object.\n\nMemory:\nVariable = A name referring to an object.\n\n────────────────────────────────────────────────────────\nEverything Is an Object:\nThis is a very important Python idea.\n\nPython treats values such as numbers and strings as objects that can be assigned to variables or passed to functions. It also introduces id() for obtaining an object's identity.\n\nFor example:\nnumber = 20\nname = \"Niraj\"\n\nConceptually:\nnumber ───→ Object 20\nname ─────→ Object \"Niraj\"\n\nYou can inspect identity:\nid(number)\n\n🧠 Mental picture:\nThink:\nName → Object\n\nnot:\nName = storage box containing raw value",
        "explanation": "Python variables are references/labels to objects created implicitly via assignment. id() returns the unique memory identity."
      },
      {
        "title": "Python Data Types: List vs Tuple vs Set vs Dictionary",
        "code": "Python Data Types:\nMajor Python data types:\n\nNumbers\n ├── int\n ├── float\n └── complex\n\nBoolean\n ├── True\n └── False \n\nSequence\n ├── String\n ├── List\n └── Tuple\n\nSet\nNone\nDictionary\n\n🧠 Mental picture:\nThink of data types as different kinds of containers or values:\n42                → int\n3.14              → float\n\"Hello\"           → str\n[1, 2, 3]         → list\n(1, 2, 3)         → tuple\n{1, 2, 3}         → set\n{\"name\": \"Niraj\"} → dict\n\n────────────────────────────────────────────────────────\nList vs Tuple vs Set vs Dictionary:\nThis is worth memorising.\n\nList:\nstudents = [\"A\", \"B\", \"C\"]\nThink:\n• Ordered collection\n• Duplicates allowed\n• Can be modified (Mutable)\n\nTuple:\nmonths = (\"Jan\", \"Feb\", \"Mar\")\nThink:\n• Ordered collection\n• Cannot be changed after creation (Immutable)\nThe textbook specifically presents tuples as sequences whose contents cannot be changed after creation.\n\nSet:\nnumbers = {1, 2, 3}\nThink:\n• Unique values\n• No duplicate entries\nThe chapter introduces sets as unordered collections without duplicates.\n\nDictionary:\nstudent = {\n    \"name\": \"Niraj\",\n    \"age\": 42\n}\nThink:\nkey → value\nFor example:\n\"name\" → \"Niraj\"\n\"age\"  → 42\n\n🧠 Ultimate memory:\nList       → Ordered collection\nTuple      → Fixed collection\nSet        → Unique values\nDictionary → Key → Value",
        "explanation": "List = Ordered & Mutable | Tuple = Ordered & Immutable | Set = Unique & Unordered | Dictionary = Key-Value pairs."
      }
    ]
  },
  {
    "id": "c11-ch6-flow-of-control",
    "classLevel": 11,
    "chapterNumber": 6,
    "title": "Class 11 Chapter 6 — Flow of Control & Loops",
    "category": "NCERT Class 11: Control Flow",
    "summary": "Differences to Remember (if vs for, for vs while, break vs continue, if vs while), and 6 Practice Output Questions.",
    "cards": [
      {
        "title": "Flow of Control & Loops: Core Differences",
        "code": "Flow of Control & Loops\nMost Important Differences to Remember\n\nif vs for:\nif\n→ Make a decision\nfor\n→ Repeat for each item\n\n────────────────────────────────────────────────────────\nfor vs while:\nfor\n→ Iterate through items/range\nwhile\n→ Repeat while condition is true\n\n────────────────────────────────────────────────────────\nbreak vs continue:\nbreak\n→ Exit loop\ncontinue\n→ Skip current iteration\n\n────────────────────────────────────────────────────────\nif vs while:\nThis is another common confusion.\n\nif\n→ Check once\nwhile\n→ Check repeatedly\n\nFor example:\nif age >= 18:\n    print(\"Eligible\")\nThe condition is checked once.\n\nBut:\nwhile age < 18:\n    age += 1\nthe condition is checked repeatedly.",
        "explanation": "if = Decision (checked once) | for = Definite iteration over sequence | while = Repeated check while condition holds | break = Exits loop | continue = Skips to next iteration."
      },
      {
        "title": "Practice Before Looking at the Answers (Q1 to Q6)",
        "code": "Practice Before Looking at the Answers\nTry to mentally execute these.\n\nQuestion 1:\nx = 10\nif x > 5:\n    print(\"A\")\nelse:\n    print(\"B\")\nWhat is printed?\nAnswer: A  (Since 10 > 5 is True)\n\n────────────────────────────────────────────────────────\nQuestion 2:\nfor i in range(3):\n    print(i)\nWhat is printed?\nAnswer:\n0\n1\n2\n(range(3) generates 0, 1, 2)\n\n────────────────────────────────────────────────────────\nQuestion 3:\nfor i in range(1, 6):\n    if i == 3:\n        continue\n    print(i)\nWhat is printed?\nAnswer:\n1\n2\n4\n5\n(3 is skipped due to continue)\n\n────────────────────────────────────────────────────────\nQuestion 4:\nfor i in range(1, 6):\n    if i == 3:\n        break\n    print(i)\nWhat is printed?\nAnswer:\n1\n2\n(Loop terminates immediately when i == 3)\n\n────────────────────────────────────────────────────────\nQuestion 5:\ncount = 1\nwhile count <= 3:\n    print(count)\n    count += 1\nHow many times does the loop run?\nAnswer: 3 times  (Prints 1, 2, 3)\n\n────────────────────────────────────────────────────────\nQuestion 6:\nfor i in range(3):\n    for j in range(2):\n        print(i, j)\nHow many times does the inner print() execute?\nAnswer: 6 times  (Outer loop runs 3 times × Inner loop runs 2 times = 3 × 2 = 6 times)",
        "explanation": "Output analysis: range(n) ends at n-1 | continue advances to next loop step | break immediately halts loop | Nested loop runs outer × inner times."
      }
    ]
  },
  {
    "id": "ch7-data-stats",
    "classLevel": 11,
    "chapterNumber": 7,
    "title": "Class 11 Chapter 7 — Understanding Data & Statistical Measures",
    "category": "NCERT Class 11: Understanding Data",
    "summary": "7.1 What is Data & Information, Primary vs Secondary Data, Data Processing, Statistical Measures (Mean, Median, Mode, Range), and Interview Traps.",
    "cards": [
      {
        "title": "Data, Information & Data Processing",
        "code": "What is data?\nRaw facts and observations.\n\nWhat is information?\nProcessed data that has meaning.\n\nPrimary vs secondary data?\n\nPrimary → collected directly\nSecondary → already collected\n\nWhat is data processing?\nTransforming raw data into useful information.",
        "explanation": "Data = Raw facts and observations | Information = Processed data that has meaning | Primary = Collected directly, Secondary = Already collected."
      },
      {
        "title": "Statistical Measures: Mean, Median, Mode & Range",
        "code": "Mean? Sum divided by number of values.\n\nMedian? Middle value after sorting.\n\nMode? Most frequent value.\n\nRange? Maximum minus minimum.",
        "explanation": "Mean = sum / count | Median = middle value after sorting | Mode = most frequent | Range = max - min."
      },
      {
        "title": "⚠️ INTERVIEW TRAPS & Core Summary",
        "code": "⚠️ INTERVIEW TRAPS\n\nTrap 1 — Data and information are identical\nNo.\n\nData\n→ raw\n\nInformation\n→ processed + meaningful\n\n────────────────────────────────────────────────────────\nTrap 2 — Median can be found without considering order\nYou first need the values arranged in order.\n\n────────────────────────────────────────────────────────\nTrap 3 — Mean and median are always equal\nNo.\n\nExample:\n\n1, 2, 100\nMedian: 2\n\nMean:\n\n103 / 3 ≈ 34.33\nVery different.\n\n────────────────────────────────────────────────────────\nTrap 4 — Mode means largest number\nNo.\n\nMode means most frequent, not greatest.\n\n────────────────────────────────────────────────────────\nSUMMARY MEMORY:\nData → raw facts\nInformation → processed meaningful data\nPrimary → collected directly\nMean → sum / count\nMedian → middle\nMode → most frequent\nRange → max - min",
        "explanation": "Interview traps: Median always requires sorting first; Mean & Median can differ wildly; Mode is most frequent, NOT largest."
      }
    ]
  },
  {
    "id": "ch1-exception-handling",
    "title": "Class 12 Chapter 1 — Exception Handling in Python",
    "category": "NCERT Class 12: Python",
    "summary": "1.2 Syntax Errors, 1.3 Exceptions, 1.5 Raising Exceptions, 1.6 Handling Exceptions, 1.7 finally Clause.",
    "cards": [
      {
        "title": "1.2 Syntax Errors & 1.3 Exceptions",
        "code": "1.2 Syntax Errors\nA syntax error means Python’s grammar is incorrect.\n\nexample:\n\nprint(\"Hello\"\nMissing ).\n\nMemory\nSyntax Error = Wrong Python grammar.\n\n────────────────────────────────────────────────────────\n1.3 Exceptions\nAn exception happens during execution.\n\nExample:\n\nnumber = 10 / 0\nThe syntax is valid.\n\nBut while executing:\n\n10 ÷ 0\n  ↓\nImpossible\n  ↓\nZeroDivisionError\n\n────────────────────────────────────────────────────────\nKey difference\nSyntax Error\n→ Code structure/grammar is wrong\n\nException\n→ Code is syntactically valid,\n  but execution encounters a problem",
        "explanation": "Syntax Error = Wrong Python grammar. | Exception = Code structure is valid, but runtime encounters a problem."
      },
      {
        "title": "1.5 Raising Exceptions",
        "code": "Normally Python raises exceptions automatically.\n\nBut we can also intentionally raise one.\n\nage = -5\n\nif age < 0:\n    raise ValueError(\"Age cannot be negative\")\n\nMemory:\nraise = create/throw an exception intentionally.",
        "explanation": "Memory: raise = create/throw an exception intentionally."
      },
      {
        "title": "1.6 Handling Exceptions & 1.7 finally Clause",
        "code": "1.6 Handling Exceptions\nWe normally use:\n\ntry:\n    ...\nexcept:\n    ...\n\ntry:\n    number = int(input(\"Enter number: \"))\n\nexcept ValueError:\n    print(\"Invalid number\")\n\nelse:\n    print(\"Valid number:\", number)\n\n────────────────────────────────────────────────────────\n1.7 finally Clause\nfinally is normally used for cleanup work.\n\ntry:\n    print(\"Processing\")\n\nexcept Exception:\n    print(\"Something failed\")\n\nfinally:\n    print(\"Cleanup\")",
        "explanation": "finally is normally used for cleanup work."
      }
    ],
    "classLevel": 12,
    "chapterNumber": 1
  },
  {
    "id": "ch2-file-handling",
    "title": "Class 12 Chapter 2 — File Handling in Python",
    "category": "NCERT Class 12: Python",
    "summary": "2.1 Introduction to Files, 2.2 Types of Files, 2.3 Opening/Closing, 2.6 Setting Offsets, 2.8 Pickle Module.",
    "cards": [
      {
        "title": "2.1 Introduction to Files & 2.2 Types of Files",
        "code": "2.1 Introduction to Files\n\nVariables normally hold data while a program runs.\n\nBut if the application stops, we may need a way to preserve information.\n\nFiles provide persistent storage.\n\nMental picture:\n\nVariable\n→ Temporary program data\n\nFile\n→ Stored data for later use\n\n────────────────────────────────────────────────────────\n2.2 Types of Files\nTwo important categories:\n\nFiles\n├── Text\n└── Binary\n\nText File\nContains human-readable characters.\n\nExamples:\n.txt\n.csv\n.py\n\nExample content:\nNiraj\nPython\n100\n\nBinary File\nStores bytes rather than ordinary human-readable text.\n\nExamples:\nImage\nAudio\nVideo\n\nMemory:\nText = characters, Binary = bytes.",
        "explanation": "Text = characters, Binary = bytes."
      },
      {
        "title": "2.3 Opening/Closing & 2.6 Setting Offsets",
        "code": "2.3 Opening and Closing a Text File\nUse: open()\n\nfile = open(\"notes.txt\", \"r\")\n\n// Then\n\nfile.close()\n\nCommon modes:\nr → Read\nw → Write/overwrite\na → Append\n\n────────────────────────────────────────────────────────\n2.6 Setting Offsets in a File\nA file has a current position.\n\ntell(): Tells the current file position.\n\nseek(): Moves the file position.",
        "explanation": "Quick memory: open → OPEN | read → READ | write → WRITE | tell → WHERE? | seek → MOVE | close → CLOSE"
      },
      {
        "title": "2.8 Pickle Module (Object Serialization)",
        "code": "Sometimes we want to store a Python object, not just plain text.\n\nFor example:\n\nstudent = {    \"name\": \"Aman\",    \"marks\": 90}\n\nThe pickle module can serialize Python objects into a binary representation.\n\n💻 SMALL CODE — Pickle\nWrite:\n\nimport pickle\n\nstudent = {\n    \"name\": \"Aman\",\n    \"marks\": 90\n}\n\nwith open(\"student.dat\", \"wb\") as file:\n    pickle.dump(student, file)\n\nRead:\n\nimport pickle\n\nwith open(\"student.dat\", \"rb\") as file:\n    student = pickle.load(file)\n\nprint(student)\n\nMemory:\ndump\n→ object → file\n\nload\n→ file → object\n\nQuick memory:\npickle.dump → SAVE OBJECT\npickle.load → RESTORE OBJECT",
        "explanation": "pickle.dump → SAVE OBJECT (object → file) | pickle.load → RESTORE OBJECT (file → object)"
      }
    ],
    "classLevel": 12,
    "chapterNumber": 2
  },
  {
    "id": "ch3-stack",
    "title": "Class 12 Chapter 3 — Stack",
    "category": "NCERT Class 12: Data Structures",
    "summary": "3.1 Definition, 3.3 Operations on Stack (Push, Pop, Peek, Overflow), and Final Mental Map.",
    "cards": [
      {
        "title": "3.1 Definition & 3.3 Operations on Stack",
        "code": "A stack is a linear data structure.\n\nInsertion and deletion happen at one end called:\n\nTOP\n\n────────────────────────────────────────────────────────\n3.3 Operations on Stack\nImportant operations:\n\nPush\nPop\nPeek/Top\nOverflow\nTraditionally means trying to push beyond fixed capacity.",
        "explanation": "Stack → LIFO structure where push and pop happen at the top."
      },
      {
        "title": "Final Mental Map (Python → Exception, File, Stack)",
        "code": "              PYTHON\n                 |\n     ┌───────────┼────────────┐\n     ↓           ↓            ↓\n EXCEPTION      FILE         STACK\n HANDLING     HANDLING\n     |           |            |\n try          open()         LIFO\n except       read()          |\n else         write()      push/pop\n finally      close()         |\n raise        seek()        Expression\n              tell()       Processing\n                |             |\n              pickle     Infix → Postfix\n                              ↓\n                       Postfix Evaluation",
        "explanation": "Then mentally speak: Exception Handling → Detect and safely handle runtime problems. | File Handling → Store and retrieve persistent data. | Stack → LIFO structure where push and pop happen at the top."
      }
    ],
    "classLevel": 12,
    "chapterNumber": 3
  },
  {
    "id": "ch4-queue",
    "title": "Class 12 Chapter 4 — Queue",
    "category": "NCERT Class 12: Data Structures",
    "summary": "4.1 Linear Queue (FIFO), 4.2 Enqueue/Dequeue Operations, 4.4 Deque (Double-Ended Queue).",
    "cards": [
      {
        "title": "4.1 Concept & 4.2 Operations on Queue",
        "code": "A Queue is a linear data structure in which insertion and deletion happen at opposite ends.\n\nDeletion                       Insertion\n   ↓                              ↓\n FRONT                          REAR\n\n[10] [20] [30] [40]\n\nThe element that enters first leaves first.\n\n────────────────────────────────────────────────────────\n4.2 Operations on Queue\nThe two most important operations are:\n\nENQUEUE\n→ Add element at REAR\n\nDEQUEUE\n→ Remove element from FRONT\n\n// Example:\n\nInitially:\n[10] [20] [30]\n\nEnqueue 40:\n[10] [20] [30] [40]\n\nDequeue:\n10 leaves\n[20] [30] [40]",
        "explanation": "Queue = First In, First Out (FIFO)."
      },
      {
        "title": "4.4 What Is a Deque?",
        "code": "Deque means:\n\nDouble-Ended Queue\n\nPronounced roughly: \"deck\"\n\nNormal queue:\nDelete ← FRONT ........ REAR ← Insert\n\nDeque:\nInsert/Delete                    Insert/Delete\n      ↓                               ↓\n    FRONT                           REAR\n\n[10] [20] [30] [40]\n\nSo both ends can be used.\n\nMemory:\nDeque = Queue with two doors.",
        "explanation": "Memory: Deque = Queue with two doors."
      }
    ],
    "classLevel": 12,
    "chapterNumber": 4
  },
  {
    "id": "ch5-sorting",
    "title": "Class 12 Chapter 5 — Sorting",
    "category": "NCERT Class 12: Algorithms",
    "summary": "Mental Picture of cards, 5.1 Sorting, 5.2 Bubble, 5.3 Selection, 5.4 Insertion, 5.5 Complexity & Active Recall.",
    "cards": [
      {
        "title": "🧠 MENTAL PICTURE & 5.1 Sorting",
        "code": "🧠 MENTAL PICTURE\nImagine these cards:\n\n8   7   13   1   -9   4\nYou want: -9 1 4 7 8 13\n\nThree people solve it differently:\n\nBUBBLE\n→ Compare neighbours\n\nSELECTION\n→ Find smallest\n\nINSERTION\n→ Pick next card and insert correctly\n\nThat is the entire chapter mentally.\n\n────────────────────────────────────────────────────────\n5.1 Sorting\nSorting means arranging data in an order such as:\n\nAscending\n1 2 3 4 5\n\nDescending\n5 4 3 2 1\n\nAlphabetical\nApple Banana Mango\n\nSorting can make later searching and processing easier.",
        "explanation": "Ultimate memory: Bubble = neighbour, Selection = minimum, Insertion = cards."
      },
      {
        "title": "5.2 Bubble Sort",
        "code": "Mental phrase:\nNeighbour → Compare → Swap\n\nExample:\n[5, 3, 4, 1]\n\nCompare:\n5 3\n↓\nswap\n[3, 5, 4, 1]\n\nThen:\n5 4\n↓\nswap\n[3, 4, 5, 1]\n\nThen:\n5 1\n↓\nswap\n[3, 4, 1, 5]\n\nAfter the first pass:\n[3, 4, 1 | 5]\n             ↑\n       Largest fixed\n\n💻 Small code:\n\nnumbers = [5, 3, 4, 1]\n\nn = len(numbers)\n\nfor i in range(n - 1):\n    for j in range(n - i - 1):\n        if numbers[j] > numbers[j + 1]:\n            numbers[j], numbers[j + 1] = (\n                numbers[j + 1],\n                numbers[j]\n            )\n\nprint(numbers)\n\nResult:\n[1, 3, 4, 5]\n\nMemory:\nBubble = largest bubbles to the right.",
        "explanation": "Memory: Bubble = largest bubbles to the right."
      },
      {
        "title": "5.3 Selection Sort",
        "code": "Mental phrase:\nFind smallest → put it first.\n\nStart:\n[8, 7, 13, 1, -9, 4]\n\nFind smallest: -9\n\nPut it first:\n[-9 | 7, 13, 1, 8, 4]\n\nNow search only the remaining unsorted part.\n\n💻 Small code:\n\nnumbers = [5, 3, 4, 1]\n\nn = len(numbers)\n\nfor i in range(n - 1):\n    min_index = i\n\n    for j in range(i + 1, n):\n        if numbers[j] < numbers[min_index]:\n            min_index = j\n\n    numbers[i], numbers[min_index] = (\n        numbers[min_index],\n        numbers[i]\n    )\n\nprint(numbers)\n\nMemory:\nSelection = select minimum.",
        "explanation": "Memory: Selection = select minimum."
      },
      {
        "title": "5.4 Insertion Sort",
        "code": "Imagine arranging playing cards in your hand.\n\nYou already have:\n2   5   8\n\nYou receive: 4\n\nYou move:\n8 → right\n5 → right\n\nand insert:\n2   4   5   8\n\nThat’s insertion sort.\n\n💻 Small code:\n\nnumbers = [5, 3, 4, 1]\n\nfor i in range(1, len(numbers)):\n    current = numbers[i]\n    j = i - 1\n\n    while j >= 0 and numbers[j] > current:\n        numbers[j + 1] = numbers[j]\n        j -= 1\n\n    numbers[j + 1] = current\n\nprint(numbers)\n\nMemory:\nInsertion = Pick → Shift → Insert",
        "explanation": "Memory: Insertion = Pick → Shift → Insert"
      },
      {
        "title": "5.5 Time Complexity, Follow-Up Questions & Active Recall",
        "code": "5.5 Time Complexity:\nThe chapter introduces complexity as a way to think about how algorithm work grows as the data grows. Its introductory rules are:\n\nNo loop\n→ O(1)\n\nOne n-sized loop\n→ O(n)\n\nNested n-sized loops\n→ O(n²)\n\n────────────────────────────────────────────────────────\n🔥 FOLLOW-UP QUESTIONS:\n• What happens after one Bubble Sort pass?\n  → Largest remaining value reaches the right side\n• What happens after one Selection Sort pass?\n  → Smallest remaining value reaches the left side\n• What does Insertion Sort resemble?\n  → Arranging playing cards\n• Which one compares adjacent elements? Bubble Sort.\n• Which one searches for the minimum? Selection Sort.\n• Which one shifts larger values? Insertion Sort.\n\n────────────────────────────────────────────────────────\n🔄 ACTIVE RECALL:\n• Bubble?                  → Compare neighbours\n• Selection?               → Find minimum\n• Insertion?               → Pick, shift, insert\n• Bubble sorted side?      → Right\n• Selection sorted side?   → Left\n• Insertion sorted side?   → Left\n• Nested loops?            → O(n²) at this chapter's level\n\nUltimate memory:\nBubble = neighbour, Selection = minimum, Insertion = cards.",
        "explanation": "Ultimate memory: Bubble = neighbour, Selection = minimum, Insertion = cards."
      }
    ],
    "classLevel": 12,
    "chapterNumber": 5
  },
  {
    "id": "ch6-searching",
    "title": "Class 12 Chapter 6 — Searching",
    "category": "NCERT Class 12: Algorithms",
    "summary": "Mental Picture, 6.2 Linear Search, 6.3 Binary Search, 6.4 Hashing & Collisions, Final Mental Map.",
    "cards": [
      {
        "title": "🧠 MENTAL PICTURE: Linear vs Binary",
        "code": "🧠 MENTAL PICTURE\nImagine searching for the number 40.\n\nLinear Search:\n10 → 25 → 31 → 40\n                ↑\n               FOUND\nYou check one by one.\n\nBinary Search:\nSorted list:\n10 20 30 40 50 60 70\n         ↑\n       Middle\n\nAsk:\nTarget greater than middle?\n      ↓\nThrow away left half\n\nSo remember:\nLinear\n→ ONE BY ONE\n\nBinary\n→ HALF, HALF, HALF",
        "explanation": "Linear → ONE BY ONE | Binary → HALF, HALF, HALF"
      },
      {
        "title": "6.2 Linear Search",
        "code": "Linear Search checks elements sequentially.\n\nExample:\nTarget = 30\n[10, 50, 20, 30, 70]\n10 == 30? ❌\n50 == 30? ❌\n20 == 30? ❌\n30 == 30? ✅\n\nIt does not require sorted data.\n\n💻 Small code:\n\ndef linear_search(numbers, target):\n    for i in range(len(numbers)):\n        if numbers[i] == target:\n            return i\n\n    return -1\n\nTypical time complexity:\nO(n)\nbecause in the worst case you may inspect every element.\n\nMemory:\nLinear Search = start to finish, one by one.",
        "explanation": "Memory: Linear Search = start to finish, one by one."
      },
      {
        "title": "6.3 Binary Search",
        "code": "Binary Search is much faster on suitable data because it repeatedly eliminates half of the remaining search space.\n\nExample:\n[10, 20, 30, 40, 50, 60, 70]\n\nTarget = 60\nMiddle: 40\n\nSince: 60 > 40\nignore: 10 20 30 40\n\nRemaining:\n50 60 70\nMiddle: 60\nFound.\n\n💻 Small code:\n\ndef binary_search(numbers, target):\n    low = 0\n    high = len(numbers) - 1\n\n    while low <= high:\n        mid = (low + high) // 2\n\n        if numbers[mid] == target:\n            return mid\n\n        elif target < numbers[mid]:\n            high = mid - 1\n\n        else:\n            low = mid + 1\n\n    return -1\n\nTypical complexity:\nO(log n)\n\nMemory:\nBinary Search = keep half, discard half.",
        "explanation": "Memory: Binary Search = keep half, discard half."
      },
      {
        "title": "6.4 Search by Hashing & Hash Collision",
        "code": "Hashing takes a key and applies a hash function to determine where the related value should be stored or searched.\n\n> Python dictionaries are hash-based mappings.\n\nHash Collision:\nTwo different keys can sometimes map to the same hash location.\n\nMental picture:\nKey A ─┐\n       ├──→ Bucket 5\nKey B ─┘\n\nThis is called:\nCollision\n\n────────────────────────────────────────────────────────\n🔄 ACTIVE RECALL:\nWithout looking:\n\nLinear Search\n→ One by one\n→ O(n)\n→ Sorting not required\n\nBinary Search\n→ Half repeatedly\n→ O(log n)\n→ Sorted data required\n\nHashing\n→ Hash function → bucket\n→ Average O(1)\n→ Collision possible",
        "explanation": "Hashing: Hash function → bucket | Average O(1) | Collision possible"
      },
      {
        "title": "Final Mental Map & Master Memory Sentences",
        "code": "               DATA STRUCTURES + ALGORITHMS\n                            |\n          ┌─────────────────┼─────────────────┐\n          ↓                 ↓                 ↓\n        QUEUE             SORTING          SEARCHING\n          |                 |                 |\n        FIFO          ┌─────┼─────┐      ┌────┼─────┐\n          |           ↓     ↓     ↓      ↓     ↓     ↓\n      Enqueue      Bubble Select Insert Linear Binary Hash\n      Dequeue         |     |     |      |     |     |\n          |       Neighbor Min   Cards  One   Half  Bucket\n        Deque                           by one",
        "explanation": "Your final three memory sentences are: Queue = First In, First Out. | Sorting = Bubble compares neighbours, Selection finds the minimum, Insertion places the next item correctly. | Searching = Linear checks one by one, Binary halves a sorted search space, Hashing calculates where to look."
      }
    ],
    "classLevel": 12,
    "chapterNumber": 6
  },
  {
    "id": "ch8-dbms",
    "title": "Class 12 Chapter 8 — Database Concepts",
    "category": "NCERT Class 11/12: Databases",
    "summary": "8.1 Introduction, 8.3 DBMS & CRUD, 8.4 Relational Data Model (Tables, Attributes, Tuples), 8.5 Keys, Follow-Up Questions, and White-Paper Mental Map.",
    "cards": [
      {
        "title": "8.1 Introduction & 8.3 DBMS (CRUD)",
        "code": "8.1 Introduction\nA database is an organised collection of related data.\n\n8.3 Database Management System — DBMS\nA DBMS is software used to create, store, retrieve, update and manage databases.\n\nMental picture:\n\n          USER / APPLICATION\n                ↓\n               DBMS\n                ↓\n             DATABASE\n\nThese four basic data operations are commonly remembered as:\n\nCRUD\n\n💻 SMALL EXAMPLE\nConceptual SQL:\n\nSELECT name\nFROM Student\nWHERE id = 101;\n\nMental:\n\nUser asks\n\"Give me student 101\"\n        ↓\nDBMS\n        ↓\nSearch table\n        ↓\nReturn name",
        "explanation": "Database = Organised collection of related data | DBMS = Software to manage DB | CRUD = Create, Read, Update, Delete."
      },
      {
        "title": "8.4 Relational Data Model",
        "code": "A relational database represents data using tables, also called relations.\n\nExample:\n\nSTUDENT\n\nStudentID | Name  | Batch\n----------|-------|-------\n101       | Aman  | A\n102       | Riya  | B\n103       | Rahul | A\n\nMental picture:\n\nTABLE\n  |\n  ├── Columns → Attributes\n  |\n  └── Rows → Tuples/Records\n\nRelation Example\nConsider:\n\nSTUDENT\n\nRollNo | Name  | City\n1      | Aman  | Patna\n2      | Riya  | Delhi\n3      | Ravi  | Patna\n\nHere:\n\nRelation\n→ STUDENT\n\nAttributes\n→ RollNo, Name, City  \n\nTuple\n→ (1, Aman, Patna)",
        "explanation": "Relation = Table | Columns = Attributes / Fields | Rows = Tuples / Records."
      },
      {
        "title": "8.5 Keys in a Relational Database",
        "code": "Keys are used to:\n\nIdentify records\nPrevent ambiguity\nCreate relationships\n\nThe most important key types are:\n\nSuper Key\nCandidate Key\nPrimary Key\nAlternate Key\nForeign Key\nComposite Key\n\n────────────────────────────────────────────────────────\nPrimary Key\nA Primary Key uniquely identifies each row.\n\nExample:\n\nStudentID | Name\n----------|------\n101       | Aman\n102       | Riya\n103       | Rahul\n\nStudentID can be the primary key.\nIt must identify each record uniquely.\n\nMental:\nPrimary Key = Main identity card\n\n────────────────────────────────────────────────────────\nCandidate Key\nA table may have more than one attribute capable of uniquely identifying rows.\n\nExample:\nStudentID\nEmail\n\n────────────────────────────────────────────────────────\nAlternate Key\nCandidate keys that were not selected as the primary key are alternate keys.\n\nExample:\nCandidate Keys:\nStudentID\nEmail\n\nPrimary:\nStudentID\n\nAlternate:\nEmail\n\nMemory:\nAlternate = Candidate not chosen\n\n────────────────────────────────────────────────────────\nSuper Key\nAny set of attributes capable of uniquely identifying a row is a super key.\n\nSuppose:\nStudentID is unique.\n\nThen:\nStudentID is a super key.\n\nAnd:\nStudentID + Name can also uniquely identify the row, so it is also a super key, although Name may be unnecessary.\n\nMental:\nSuper Key\n→ Unique identifier\n→ May contain extra attributes\n\n────────────────────────────────────────────────────────\nComposite Key\nSometimes one column alone is not enough.\n\nExample enrollment table:\n\nStudentID | CourseID\n----------|---------\n101       | C1\n101       | C2\n102       | C1\n\nNeither StudentID nor CourseID is individually unique.\nBut together:\n(StudentID, CourseID) uniquely identify a row.\n\nThat is a:\nComposite Key\n\nMental:\nComposite = combination of columns\n\n────────────────────────────────────────────────────────\nForeign Key\nThis is the key that connects tables.\n\nImagine:\n\nSTUDENT\nStudentID | Name\n101       | Aman\n102       | Riya\n\nand:\n\nPAYMENT\nPaymentID | StudentID | Amount\n1         | 101       | 500\n2         | 102       | 600\n\nHere:\nPAYMENT.StudentID refers to: STUDENT.StudentID\nSo in PAYMENT, StudentID is a Foreign Key.\n\nMemory:\nForeign Key = bridge between tables",
        "explanation": "Primary Key = Main identity card | Candidate = Minimal attribute set for uniqueness | Alternate = Unchosen candidate key | Super Key = Unique set (can include extras) | Composite = Multi-column key | Foreign Key = Bridge between tables."
      },
      {
        "title": "🔥 Follow-Up Questions & 🧠 White-Paper Mental Map",
        "code": "🔥 FOLLOW-UP QUESTIONS\nWhat is a database?\nOrganised collection of related data.\n\nWhat is DBMS?\nSoftware that manages a database.\n\nRelation means?\nTable.\n\nTuple means?\nRow/record.\n\nAttribute means?\nColumn/field.\n\nPrimary key?\nUniquely identifies each row.\n\nCandidate key?\nMinimal attribute set capable of uniquely identifying a row.\n\nAlternate key?\nCandidate key not chosen as primary.\n\nForeign key?\nAttribute that references a key in another table.\n\nComposite key?\nKey made from more than one column.\n\nSuper key?\nAny attribute set that uniquely identifies a row, possibly with extra attributes.\n\n────────────────────────────────────────────────────────\n🧠 FINAL WHITE-PAPER MENTAL MAP\nDraw this mentally:\n\n                       DATABASE\n                          |\n                         DBMS\n                          |\n                       TABLES\n                          |\n               ┌──────────┴──────────┐\n               ↓                     ↓\n              ROW                 COLUMN\n           Tuple/Record         Attribute\n               |\n              Keys\n               |\n     ┌─────────┼─────────┬──────────┐\n     ↓         ↓         ↓          ↓\n Primary   Candidate   Foreign   Composite",
        "explanation": "Core DB architecture: Database → DBMS → Tables (Relations) → Rows (Tuples) & Columns (Attributes) → Keys (Primary, Candidate, Foreign, Composite)."
      }
    ],
    "classLevel": 12,
    "chapterNumber": 8
  },
  {
    "id": "ch9-sql",
    "title": "Class 12 Chapter 9 — Structured Query Language (SQL)",
    "category": "NCERT Class 11/12: SQL",
    "summary": "MySQL Data Types & Constraints, 9.4 DDL (CREATE, ALTER, DROP), 9.5 DML (INSERT), 9.6 Query (SELECT), 9.7 UPDATE & DELETE, 9.8 Functions, and SQL Memory Pipeline.",
    "cards": [
      {
        "title": "Data Types and Constraints in MySQL",
        "code": "Data Types in MySQL:\nINT             → whole number\nFLOAT / DECIMAL → decimal number\nCHAR            → fixed-length string\nVARCHAR         → variable-length string\nDATE            → date\nTIME            → time\n\nExample:\nage INT\nname VARCHAR(50)\nfees DECIMAL(8,2)\n\n────────────────────────────────────────────────────────\nConstraints:\nConstraints control what data is allowed.\n\nImportant ones:\nPRIMARY KEY\nNOT NULL\nUNIQUE\nDEFAULT\nFOREIGN KEY\n\nExample:\nCREATE TABLE Student (\n    id INT PRIMARY KEY,\n    name VARCHAR(50) NOT NULL,\n    email VARCHAR(100) UNIQUE\n);\n\nMental:\nPRIMARY KEY → unique identity\nNOT NULL    → value required\nUNIQUE      → no duplicate\nDEFAULT     → automatic default value\nFOREIGN KEY → relation with another table",
        "explanation": "Data types define storage format (INT, CHAR, VARCHAR, etc.). Constraints enforce data integrity (PRIMARY KEY, NOT NULL, UNIQUE, DEFAULT, FOREIGN KEY)."
      },
      {
        "title": "9.4 DDL, 9.5 DML & 9.6 SQL for Data Query",
        "code": "9.4 SQL for Data Definition\nDDL changes database structure.\n\nImportant commands:\nCREATE\nALTER\nDROP\n\nCREATE:\nCREATE TABLE Student (\n    id INT PRIMARY KEY,\n    name VARCHAR(50),\n    marks INT\n);\n\nALTER:\nAdd a column:\nALTER TABLE Student\nADD city VARCHAR(50);\n\nDROP:\nDROP TABLE Student;\n\nMental:\nCREATE → Build\nALTER  → Change structure\nDROP   → Remove structure\n\n────────────────────────────────────────────────────────\n9.5 SQL for Data Manipulation\nTo add data:\n\nINSERT INTO Student\nVALUES (1, 'Aman', 90);\n\nOr:\n\nINSERT INTO Student (id, name, marks)\nVALUES (2, 'Riya', 85);\n\nMental:\nINSERT = add row\n\n────────────────────────────────────────────────────────\n9.6 SQL for Data Query\nThe most important command is:\nSELECT\n\nExample:\nSELECT * FROM Student;\n\nMeans:\n* → all columns\n\nSelect specific columns:\nSELECT name, marks\nFROM Student;\n\nWith condition:\nSELECT name\nFROM Student\nWHERE marks > 80;\n\nMental:\nSELECT → what?\nFROM   → where?\nWHERE  → which rows?\n\nMemory sentence:\nSELECT what FROM where WHERE condition.",
        "explanation": "DDL changes table schema (CREATE, ALTER, DROP). DML alters table data (INSERT). Data Query reads records: SELECT what FROM where WHERE condition."
      },
      {
        "title": "9.7 Updation/Deletion, 9.8 Functions & Master SQL Memory",
        "code": "9.7 Data Updation and Deletion\n\nUPDATE:\nUPDATE Student\nSET marks = 95\nWHERE id = 1;\n\nMental:\nUPDATE → Which table?\nSET    → New value\nWHERE  → Which row?\n\nDELETE:\nDELETE FROM Student\nWHERE id = 1;\n\n⚠️ Important:\nDELETE FROM Student;\ndeletes all rows.\n\n────────────────────────────────────────────────────────\n9.8 Functions in SQL\nSQL provides aggregate functions.\n\nImportant ones:\nCOUNT()\nSUM()\nAVG()\nMIN()\nMAX()\n\nExample:\nSELECT AVG(marks)\nFROM Student;\n\nExample:\nSELECT MAX(marks)\nFROM Student;\n\nMemory:\nCOUNT → How many?\nSUM   → Total\nAVG   → Average\nMIN   → Smallest\nMAX   → Largest\n\n────────────────────────────────────────────────────────\n💻 SMALL CODE — SQL\nCREATE TABLE Student (\n    id INT PRIMARY KEY,\n    name VARCHAR(50),\n    marks INT\n);\n\nINSERT INTO Student\nVALUES (1, 'Aman', 90);\n\nSELECT name, marks\nFROM Student\nWHERE marks >= 80;\n\nUPDATE Student\nSET marks = 95\nWHERE id = 1;\n\nCREATE   → create structure\nINSERT   → add row\nSELECT   → read/query\nUPDATE   → change data\nDELETE   → remove row\nGROUP BY → group rows\nJOIN     → combine tables\n\nUltimate SQL memory:\nCREATE → INSERT → SELECT → UPDATE → DELETE",
        "explanation": "UPDATE changes data, DELETE removes rows (without WHERE deletes all). Aggregate functions: COUNT, SUM, AVG, MIN, MAX. Pipeline: CREATE → INSERT → SELECT → UPDATE → DELETE."
      }
    ],
    "classLevel": 12,
    "chapterNumber": 9
  },
  {
    "id": "ch10-networks",
    "title": "Class 12 Chapter 10 — Computer Networks",
    "category": "NCERT Class 12: Computer Networks",
    "summary": "10.1 Intro & Purposes, 10.3 Types (PAN, LAN, MAN, WAN), 10.5 Topologies, 10.6 Node Identification (MAC vs IP), 10.7 Internet/Web/IoT, 10.8 DNS, Follow-Up Questions & Mental Map.",
    "cards": [
      {
        "title": "10.1 Intro & 10.3 Types of Networks",
        "code": "10.1 Introduction to Computer Networks\nA computer network is a collection of interconnected devices.\n\nPurpose:\nCommunication\nResource sharing\nFile sharing\nInternet access\nPrinter sharing\nData exchange\n\nExamples:\nSchool lab\nOffice network\nHome Wi-Fi\nInternet\n\n────────────────────────────────────────────────────────\n10.3 Types of Networks\nImportant types:\nPAN\nLAN\nMAN\nWAN\n\nPAN:\nPersonal Area Network.\nExample: Phone ↔ Smartwatch\nSmall personal range.\n\nLAN:\nLocal Area Network.\nExample: School computer lab, Office floor, Home network\nSmall geographical area.\n\nMAN:\nMetropolitan Area Network.\nCovers: City-scale area\n\nWAN:\nWide Area Network.\nCovers large geographical areas.\nThe Internet is a major example of interconnected wide networks.\n\nMemory:\nPAN → Person\nLAN → Local\nMAN → Metropolitan\nWAN → Wide",
        "explanation": "Network scales: PAN (Person/Bluetooth) → LAN (Local/Lab) → MAN (Metropolitan/City) → WAN (Wide/Internet)."
      },
      {
        "title": "10.5 Networking Topologies",
        "code": "Topology means:\nPhysical/logical arrangement of network nodes.\n\nCommon topologies:\nBus\nStar\nRing\nMesh\nTree\n\nBus:\nA --- B --- C --- D\nSingle backbone cable.\nSimple but backbone failure can disrupt communication.\n\nStar:\n      A\n      |\nB --- S --- C\n      |\n      D\nS = central switch/hub.\nVery common LAN design.\n\nMental:\nStar = everyone talks through center\n\nRing:\nA → B → C → D\n↑           ↓\n└───────────┘\nDevices form a ring.\n\nMesh:\nA ----- B\n|     /|\n|    / |\n|   /  |\n|  /   |\n| /    |\n|/     |\nC ----- D\nMany direct interconnections.\nHigh redundancy, more expensive/complex.",
        "explanation": "Topologies: Bus (single cable), Star (central switch/hub), Ring (unidirectional/bidirectional loop), Mesh (point-to-point mesh with high redundancy)."
      },
      {
        "title": "10.6 Node Identification (MAC vs IP), 10.7 Internet/Web/IoT & 10.8 DNS",
        "code": "10.6 Identifying Nodes in Network Communication\nDevices need identifiers.\n\nImportant ones:\nMAC Address\nIP Address\n\nMAC Address:\nHardware/network-interface identifier.\nThink:\nMAC = device/interface identity on local network level\n\nIP Address:\nLogical address used for network communication.\nExample IPv4: 192.168.1.10\nMental:\nMAC → Who is the interface?\nIP  → Where is the device logically?\n\n────────────────────────────────────────────────────────\n10.7 Internet, Web and IoT\n\nInternet:\nA global network of interconnected networks.\nThink:\nNetwork ↓ Network ↓ Network ↓ INTERNET\n\nWorld Wide Web:\nThe Web is a service running on top of the Internet.\nWeb uses: Web pages, Browsers, Web servers, URLs, HTTP/HTTPS\n\nImportant:\nInternet ≠ Web\nInternet → underlying network infrastructure\nWeb      → one service using the Internet\n\nInternet of Things (IoT):\nIoT connects physical devices to networks/Internet.\nExamples: Smart bulb, Smart camera, Smartwatch, Sensor, Smart AC\nMental:\nSensor/device → Network → Internet → Application\n\n────────────────────────────────────────────────────────\n10.8 Domain Name System (DNS)\nHumans prefer names:\ngoogle.com\nexample.com\n\nComputers communicate using IP addresses.\nDNS connects the two.\n\nMental picture:\nexample.com\n    ↓\nDNS\n    ↓\nIP Address\n    ↓\nServer\n\nBest analogy:\nDNS = Internet phonebook\nYou know: Name → DNS finds: Address",
        "explanation": "MAC = Physical hardware interface | IP = Logical address | Internet ≠ Web (Infrastructure vs Service) | DNS = Internet Phonebook (Names to IPs)."
      },
      {
        "title": "🔥 Follow-Up Questions & 🧠 White-Paper Mental Map",
        "code": "🔥 FOLLOW-UP QUESTIONS — Networks\n\nLAN vs WAN?\nLAN → small/local area\nWAN → large geographical area\n\nHub vs Switch?\nHub → sends broadly\nSwitch → directs to intended port/device\n\nSwitch vs Router?\nSwitch → devices in same LAN\nRouter → networks\n\nMAC vs IP?\nMAC → hardware/interface identifier\nIP → logical network address\n\nInternet vs Web?\nInternet → network infrastructure\nWeb → service on Internet\n\nDNS?\nConverts domain names to IP addresses.\n\n────────────────────────────────────────────────────────\n🧠 FINAL WHITE-PAPER MENTAL MAP\n\n                         SQL\n                          |\n       ┌──────────────────┼─────────────────┐\n       ↓                  ↓                 ↓\n      DDL                DML               QUERY\n       |                  |                  |\nCREATE/ALTER/DROP   INSERT/UPDATE/DELETE   SELECT\n                                             |\n                                      WHERE / GROUP BY\n                                             |\n                                            JOIN\n\n\n                      NETWORK\n                         |\n        ┌────────────────┼────────────────┐\n        ↓                ↓                ↓\n      TYPES           DEVICES          SERVICES\n        |                |                |\n PAN LAN MAN WAN     Switch Router     Internet\n                                        Web\n                                        DNS\n                                        IoT",
        "explanation": "Networking fundamentals: LAN vs WAN, Hub vs Switch, Switch vs Router, MAC vs IP, Internet vs Web, DNS. Plus master SQL & Network mental hierarchy."
      }
    ],
    "classLevel": 12,
    "chapterNumber": 10
  },
  {
    "id": "ch11-data-communication",
    "title": "Class 12 Chapter 11 — Data Communication",
    "category": "NCERT Class 12: Computer Science",
    "summary": "11.1 Concept & Components (Sender, Receiver, Message, Medium, Protocol), Bandwidth vs Data Rate, 11.4 Modes (Simplex, Half-Duplex, Full-Duplex), Switching & Transmission Media.",
    "cards": [
      {
        "title": "11.1 Concept of Communication & Core Model",
        "code": "Imagine two people talking through a telephone:\nPerson A (Sender)\n      ↓\n   Message\n      ↓\nTelephone Network (Medium)\n      ↓\nPerson B (Receiver)\n\nBoth must follow the same rules:\n      ↓\n   Protocol\n\nNow convert that into computers:\nCOMPUTER A (Sender)\n      ↓\n    Data\n      ↓\nTransmission Medium\n      ↓\nCOMPUTER B (Receiver)\n\nThe entire chapter can be reduced to:\n                       DATA COMMUNICATION\n                                |\n          ┌─────────────────────┼─────────────────────┐\n          ↓                     ↓                     ↓\n     Who sends?            How travels?          What rules?\n   Sender/Receiver            Medium               Protocol\n\n────────────────────────────────────────────────────────\n11.1 Concept of Communication\nCommunication means:\nSending or receiving data.\n\nData can be:\n• Text\n• Image\n• Audio\n• Video\n• Multimedia\n\nExample:\nPhone A → \"Hello\" → Mobile network → Phone B\n\nMemory:\nData Communication = Exchange of data between connected devices.",
        "explanation": "Data Communication = Exchange of data between connected devices via a Transmission Medium following a set of Protocols."
      },
      {
        "title": "Complete Architecture & Communication Modes (Simplex, Half, Full)",
        "code": "DATA COMMUNICATION\n│\n├── Components\n│   ├── Sender\n│   ├── Receiver\n│   ├── Message\n│   ├── Medium\n│   └── Protocol\n│\n├── Capacity\n│   ├── Bandwidth → Hz\n│   └── Data Rate → bps\n│\n├── Direction\n│   ├── Simplex     → A ──→ B\n│   ├── Half Duplex → A ←→ B, one at a time\n│   └── Full Duplex → A ⇄ B, simultaneously\n│\n├── Switching\n│   ├── Circuit → dedicated path\n│   └── Packet  → break message into packets\n│\n├── Transmission\n│   ├── Wired\n│   │   ├── Twisted Pair\n│   │   ├── Coaxial\n│   │   └── Optical Fibre\n│   │\n│   └── Wireless\n│       ├── Radio\n│       ├── Microwave\n│       └── Infrared\n│\n├── Mobile\n│   └── 1G → 2G → 3G → 4G → 5G\n│\n└── Protocol\n    ├── HTTP → Web\n    ├── FTP  → File transfer\n    └── PPP  → Point-to-point\n\n────────────────────────────────────────────────────────\n11.4 Types of Data Communication:\nSimplex | Half-Duplex | Full-Duplex\n\n## Simplex:\nOne-way communication.\nA ─────────→ B\nSender     Receiver\n\nExamples:\n• Keyboard → computer\n• Computer → speaker\n\nMemory:\nSimplex = only one direction\n\n────────────────────────────────────────────────────────\n## Half-Duplex:\nBoth sides can communicate, but not simultaneously.\nA ─────→ B\nthen\nA ←───── B\n\nExample:\nWalkie-talkie\nWhen one person talks, the other listens.\n\nMemory:\nHalf-duplex = both directions, one at a time.\n\n────────────────────────────────────────────────────────\n## Full-Duplex:\nBoth sides communicate at the same time.\nA ⇄ B\n\nExamples:\n• Telephone call\n• Mobile conversation",
        "explanation": "Communication Directions: Simplex (one-way: keyboard/speaker) | Half-Duplex (both ways, one at a time: walkie-talkie) | Full-Duplex (both ways simultaneously: telephone)."
      }
    ],
    "classLevel": 12,
    "chapterNumber": 11
  },
  {
    "id": "ch12-security-aspects",
    "title": "Class 12 Chapter 12 — Security Aspects",
    "category": "NCERT Class 12: Security & Ethics",
    "summary": "12.2 Malware (Virus, Worm, Ransomware, Trojan, Spyware, Keylogger), 12.6 Firewall, 12.7 Cookies, Security Follow-Up Questions, and Master Mental Map.",
    "cards": [
      {
        "title": "🧠 Mental Picture & 12.2 Malware Types",
        "code": "🧠 MENTAL PICTURE\nImagine your computer as a house:\n\n           COMPUTER\n         ┌─────────┐\nInternet ───────→│ FIREWALL│\n         │         │\nMalware  ───────→│ANTIVIRUS│\n         │         │\nHacker   ───────→│SECURITY │\n         └─────────┘\n\nYou want to protect:\nDEVICE + DATA + NETWORK\n\n────────────────────────────────────────────────────────\n12.2 Malware\nMalware means:\nMALicious softWARE\n\nIt is software intentionally designed to damage systems, steal data or cause other trouble.\n\nImportant types:\n• Virus\n• Worm\n• Ransomware\n• Trojan\n• Spyware\n• Adware\n• Keylogger\n\n────────────────────────────────────────────────────────\nVirus:\nA virus inserts/copies malicious code into another program or executable.\nIt normally becomes active when the infected file is executed.\n\nMental:\nHost Program + Virus code\n         ↓\n  Infected program\n\n────────────────────────────────────────────────────────\nWorm:\nA worm:\n• Does NOT require a host program\n• Can work independently\n• Can self-replicate\n• Can spread through networks\n\n### Virus vs Worm:\nVirus → needs host/infected file → typically user triggering\nWorm  → standalone → self-replicates",
        "explanation": "Malware = Malicious Software. Virus requires host file & execution. Worm is standalone and self-replicates across networks without host."
      },
      {
        "title": "Ransomware, Trojan, Spyware, Keylogger, Firewall & Cookies",
        "code": "Ransomware:\nMental:\nYour Files\n    ↓\nLOCK / ENCRYPT\n    ↓\n\"Pay money\"\n    ↓\nRansomware\n\nThe chapter uses WannaCry as an example and notes its 2017 global outbreak.\n\n────────────────────────────────────────────────────────\nTrojan:\nLooks legitimate:\nNormal-looking program\n    ↓\nInstall it\n    ↓\nMalicious behaviour\n\nUnlike a worm, a Trojan does not self-replicate; it relies on user interaction such as opening/downloading it.\n\n────────────────────────────────────────────────────────\nSpyware:\nSecretly collects information.\nExamples of targeted information include:\n• Internet usage\n• Passwords\n• Bank information\n• Identity information\n\n────────────────────────────────────────────────────────\nKeylogger:\nRecords keys pressed by the user.\n\nMental:\nYou type: PASSWORD123\n    ↓\nKeylogger records keys\n    ↓\nSensitive information leaked\n\n────────────────────────────────────────────────────────\n12.6 Firewall:\nImagine a security guard at a gate:\n\nInternet\n    ↓\n┌──────────┐\n│ FIREWALL │\n│  GUARD   │\n└──────────┘\n    ↓\nPrivate Network\n\nA firewall monitors and controls incoming and outgoing network traffic according to security rules.\n\n────────────────────────────────────────────────────────\n12.7 Cookies:\nA cookie is a small piece of information a website uses to remember information associated with a user’s browsing/session.\n\nExamples:\n• Login/authentication\n• Session timeout\n• Remembering information",
        "explanation": "Ransomware locks/encrypts for ransom (e.g. WannaCry 2017). Trojan disguises as legitimate software. Spyware secretly collects data. Keylogger records keystrokes. Firewall monitors/filters traffic. Cookies track sessions."
      },
      {
        "title": "🔥 Follow-Up Questions, Security Definitions & 🧠 Final Mental Map",
        "code": "🔥 FOLLOW-UP QUESTIONS — Security\n\nVirus vs Worm?\nVirus → requires a host → usually triggered by user\nWorm  → standalone → self-replicates\n\nTrojan?\nMalware disguised as legitimate software\n\nRansomware?\nBlocks/encrypts data → demands ransom\n\nAntivirus?\nDetects/prevents/removes malware\n\nHTTP vs HTTPS?\nHTTP  → unencrypted textbook model\nHTTPS → encrypted communication\n\nFirewall?\nFilters network traffic\n\nWhite vs Black Hat?\nWhite → ethical\nBlack → malicious/unethical\n\nDoS vs DDoS?\nDoS  → denial attack\nDDoS → distributed attack using many systems\n\n────────────────────────────────────────────────────────\nQUICK DEFINITIONS:\nMalware       → malicious software\nVirus         → malicious code requiring host/infected file\nWorm          → standalone self-replicating malware\nRansomware    → locks/encrypts data for ransom\nTrojan        → malicious software disguised as legitimate\nFirewall      → network traffic filter\nHTTPS         → encrypted web communication\nWhite Hat     → ethical hacker\nDoS           → deny service by overwhelming resource\nDDoS          → distributed DoS from many machines\nSnooping      → secret traffic capture/analysis\nEavesdropping → real-time interception\n\n────────────────────────────────────────────────────────\n🧠 FINAL WHITE-PAPER MENTAL MAP\n\n                      DATA COMMUNICATION\n                              |\n        ┌─────────────────────┼─────────────────────┐\n        ↓                     ↓                     ↓\n    COMPONENTS              MEDIA               PROTOCOLS\n        |                     |                     |\nSender / Receiver           Wired                 HTTP\n    Message                Wireless               FTP\n Transmission Medium                              PPP\n    Protocol\n        |\nCommunication Type:\n  /     |     Simplex Half  Full\n       Duplex Duplex\n\n\n                           SECURITY\n                              |\n        ┌─────────────────────┼─────────────────────┐\n        ↓                     ↓                     ↓\n     MALWARE              PROTECTION             THREATS\n        |                     |                     |\n   Virus / Worm            Antivirus               DoS\n    Ransomware             Firewall               DDoS\n      Trojan                 HTTPS              Intrusion\n     Spyware                Updates             Snooping\n    Keylogger               Backup            Eavesdropping",
        "explanation": "Master summary: Data Communication = Components + Media + Protocols (Simplex/Half/Full). Security = Malware + Protection + Threats."
      }
    ],
    "classLevel": 12,
    "chapterNumber": 12
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CHEATSHEETS_DATA;
}
