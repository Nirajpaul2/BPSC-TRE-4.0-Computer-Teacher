# 🎯 BPSC-TRE-4.0-Computer-Teacher

> **Official Source of Truth & Master Preparation Portal for Bihar BPSC TRE 4.0 Computer Teacher (Class 11–12 / PGT / Uchcha Madhyamik) Recruitment (Advt. No. 14/2026).**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![BPSC TRE](https://img.shields.io/badge/BPSC-TRE%204.0%20(Advt%2014/2026)-emerald)](https://bpsc.bih.nic.in)
[![NCERT Aligned](https://img.shields.io/badge/NCERT-Class%2011%20%26%2012%20(Code%20083)-blue)](kecs1dd/)
[![Zero Dependencies](https://img.shields.io/badge/Architecture-Zero%20Dependencies%20SPA-orange)](#)

---

## 📖 Overview

This repository houses the complete, interactive **Source of Truth** web portal and study curriculum designed specifically for candidates preparing for the **Bihar Public Service Commission (BPSC) School Teacher Recruitment Exam (TRE 4.0) — Computer Science (Senior Secondary / Class 11–12 / PGT Level-9 Cadre)**.

It grounds the entire BPSC syllabus strictly in the **NCERT Computer Science Class 11 (`kecs1dd/`) & Class 12 (`lecs1dd/`)** curriculum and incorporates deep question-frequency analyses from past **BPSC TRE 1.0, 2.0, and 3.0** question papers.

---

## 🏛️ Examination Structure (150 Questions, 150 Marks)

| Part | Component | Questions & Marks | Nature | Focus Area |
|---|---|---|---|---|
| **Part I** | Language (English + Hindi/Urdu) | 30 Questions (30M) | Qualifying (30% mandatory) | Basic grammar, vocabulary, comprehension |
| **Part II** | General Studies | 40 Questions (40M) | Merit Counting | Elementary Math, Reasoning, Science, GA |
| **Part III** | **Computer Science Core** | **80 Questions (80M)** | **Decisive Merit Factor** | **Python, DBMS, OS, Networks, Digital Logic, DS** |

---

## 📊 Subject Blueprint & Weightage Breakdown (80 Marks)

* **🔴 Tier 1 — High Weightage (~50% of Subject / 40–49 Marks):**
  * **Python Programming & OOPs (18–22 Questions):** Syntax, string slicing `[::-1]`, list comprehensions, dict operations, loop else suite, exceptions, file handling.
  * **DBMS & SQL (12–15 Questions):** Relational keys, Degree vs Cardinality, Normalization (1NF, 2NF, 3NF, BCNF), `GROUP BY` with `HAVING`, `INNER/OUTER JOIN`.
  * **Computer Networks & Data Communication (10–12 Questions):** OSI 7 Layers, TCP/IP, CIDR Subnetting (`/24` to `/30`), Protocol Ports (80, 443, 22, 53, etc.).
* **🟡 Tier 2 — Core Engineering (~35% of Subject / 20–26 Marks):**
  * **Operating Systems (8–10 Questions):** PCB, CPU Scheduling numericals (FCFS, SJF, RR Gantt charts, TAT/WT), Deadlocks, Paging EAT.
  * **Boolean Algebra & Digital Logic (6–8 Questions):** Base conversions, 2's complement, De Morgan's laws, K-Maps (2 to 4 variables).
  * **Data Structures & Algorithms (6–8 Questions):** Stack postfix evaluation, Queue types, Sorting complexities (Bubble, Selection, Insertion, Merge, Quick).
* **🟢 Tier 3 — Foundation & ICT (~15% of Subject / 10–12 Marks):**
  * **Computer Fundamentals (4–5 Questions):** Memory hierarchy, Cache, CPU registers, Von Neumann architecture.
  * **Cyber Security & IT Act (4–5 Questions):** Malware types, RSA, IT Act 2000 sections (Sec 43, 66, 66C, 66D).
  * **Web Technologies (2–3 Questions):** HTML5 semantic tags, CSS Box Model, HTTP status codes.
  * **Emerging Trends & MS Office (1–2 Questions):** Cloud models (IaaS/PaaS/SaaS), Big Data 5Vs, Excel formulas.

---

## ✨ Features of the Master Portal

1. **Dashboard & Live Stats:** Real-time completion tracker for syllabus units, daily milestones, and diagnostic quiz scores.
2. **NCERT Digital Companion:** All 24 chapters mapped to exact textbook PDFs in `kecs1dd/` and `lecs1dd/` with direct open/read capabilities.
3. **Master 12-Unit Syllabus:** Complete sub-topic breakdown with teacher classroom pedagogy tips.
4. **8-Week Interactive Study Plan:** 56 daily checkpoints with persistent browser checkbox tracking (`localStorage`).
5. **High-Yield Cheat Sheets:** Python Output Traps, Normalization Matrix, OS Formulas, and Network Port Directory.
6. **BPSC Pattern Diagnostic Mock Quiz:** 5-option format with configurable 1/3 negative marking, timer, and full step-by-step solutions.
7. **Freemium & Razorpay Integration:** Unit 1 is 100% free; seamless ₹9 micro-paywall unlocks Units 2–12, full mock tests, and verified candidate pass.
8. **Dark / Light Theme & Print Ready:** Responsive layout tailored for mobile, tablet, and desktop studying.

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Nirajpaul2/BPSC-TRE-4.0-Computer-Teacher.git
cd BPSC-TRE-4.0-Computer-Teacher
```

### 2. Launch the Web Portal
Run the built-in smart server (runs on dedicated unique port `8540` to avoid conflicts):
```bash
python3 serve.py
```

Then open your browser at:
👉 **`http://localhost:8540`**

*(Or simply double-click `index.html` to run offline without any server!)*

---

## 📁 Repository Structure

```
BPSC-TRE-4.0-Computer-Teacher/
├── index.html              # Main Single-Page Application (SPA) Dashboard
├── serve.py                # Smart non-conflicting Python web server (port 8540)
├── css/
│   └── style.css           # Modern Slate Dark/Light responsive UI styling
├── js/
│   ├── app.js              # State management, tabs, search, paywall & quiz engine
│   ├── syllabus-data.js    # 12 Master Units with detailed subtopics & past TRE tags
│   ├── ncert-data.js       # Complete digital mapping of all 24 NCERT chapters
│   ├── study-plan-data.js  # 8-Week roadmap with 56 daily checkpoints
│   ├── cheatsheets-data.js # Rapid revision formula cards & code traps
│   └── quiz-data.js        # Realistic BPSC 5-option questions with detailed solutions
├── notes/                  # Collaborative chapter-by-chapter R&D notes
│   └── README.md
├── kecs1dd/                # NCERT Class 11 Computer Science PDFs (11 Chapters)
└── lecs1dd/                # NCERT Class 12 Computer Science PDFs (13 Chapters)
```

---

## 👨‍🏫 Historical BPSC Cutoff Analysis

| Exam Cycle | Exam Date | UR Cutoff | EWS Cutoff | BC Cutoff | EBC Cutoff | Exam Character |
|---|---|---|---|---|---|---|
| **TRE 1.0** | Aug 2023 | 39 / 120 | 39 | 39 | 39 | Initial recruitment, qualifying score sufficient |
| **TRE 2.0** | Dec 2023 | 63 / 120 | 56 | 53 | 47 | Sudden jump in competition, heavy Python/DBMS |
| **TRE 3.0** | July 2024 | 73+ / 120 | 67+ | 68+ | 64+ | High competition, 22+ questions from Python |
| **TRE 4.0** | Advt 14/2026 | **85–95+ / 120** | 80+ | 82+ | 78+ | **Safe Zone: Target 65+ in Subject (Part III)** |

---

## 🤝 Contributing & R&D

We are actively reading and expanding each NCERT chapter in `kecs1dd/` and `lecs1dd/` into detailed markdown study notes and adding 30–50 high-yield MCQs per chapter. Check out `notes/README.md` to follow our study queue!

---

## 📄 License

This project is licensed under the MIT License - feel free to use, share, and help fellow teacher aspirants succeed!
