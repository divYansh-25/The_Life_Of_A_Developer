# 💻 Life of a Developer — Frontend Odyssey Submission

> *A humorous, interactive journey through HTML, debugging, deadlines, and coffee addiction.*

---

## 🚀 Quick Start

```bash
# 1. Install all dependencies
npm install

# 2. Start dev server
npm start

# 3. Build for production
npm run build
```

---

## 🌐 Deploy

**Vercel (fastest):**
```bash
npm install -g vercel
vercel
```

**Or via GitHub → vercel.com → Import Repo → Deploy**

**Netlify:**
```bash
npm run build
# Drag /build folder to netlify.com/drop
```

---

## ✅ Mandatory Requirements Checklist

| Requirement | Implementation |
|---|---|
| **5 Story Sections** | Boot Up → Learning HTML → Debugging Hell → Deadline Crunch → Coffee & Reflection |
| **2+ Scroll Effects** | GSAP scroll-triggered reveals + Intersection Observer fade-ins on all sections |
| **3+ Interactions** | Click learning cards (expand), click bugs to squash (debug), click-to-flip tasks (deadline), coffee counter button |
| **3+ Animations** | Terminal boot loading animation (GSAP), glitch title effect (CSS), framer-motion card hovers, GSAP shake on bug fix, countdown timer pulse |
| **Responsive** | Mobile/tablet/desktop via CSS grid + clamp typography |

### 🌟 Bonus Features
- **Custom terminal cursor** with green glow
- **VS Code UI chrome** — file tabs, line numbers, status bar
- **Live status bar** — clock, error count, coffee count, rotating dev quotes
- **Live countdown timer** that gets more panicked as it approaches zero
- **Interactive DevTools console** that types out real-sounding errors
- **6 interactive bugs** to squash in the debugging section
- **Achievement cards** in the final section
- **Floating coffee button** — click anywhere to drink more coffee ☕
- **CRT scanlines + grain noise overlay** for retro terminal feel

---

## 🎨 Tech Stack

| Tool | Usage |
|---|---|
| **React 18** | Component architecture, state |
| **GSAP 3** | Hero entrance animations, shake effects, scroll triggers |
| **Framer Motion** | Card hover animations, accordion expand, achievement reveals |
| **CSS Animations** | Glitch effect, grid background, particle drift, cursor blink |
| **Google Fonts** | JetBrains Mono + Bebas Neue + Syne |

---

## 📁 Project Structure

```
dev-life/
├── public/index.html
├── src/
│   ├── index.js
│   ├── App.jsx                  # Root, scroll logic, GSAP init
│   ├── styles/global.css        # VS Code chrome, cursor, status bar, shared utils
│   └── components/
│       ├── LoadingScreen.jsx    # Terminal boot sequence animation
│       ├── CustomCursor.jsx     # Blinking green terminal cursor
│       ├── TabBar.jsx           # VS Code file tabs
│       ├── StatusBar.jsx        # Live status bar with clock
│       ├── LineNumbers.jsx      # Editor line numbers
│       ├── Section1Boot.jsx     # Hero — glitch title, floating code
│       ├── Section2Learning.jsx # Learning stages — expandable cards
│       ├── Section3Debugging.jsx# Bug hunt + DevTools console
│       ├── Section4Deadline.jsx # Live countdown + task checklist
│       ├── Section5Coffee.jsx   # Achievements + coffee counter + finale
│       └── sections.css        # All section-specific styles
└── package.json
```

---

## 📝 Project Description (200–300 words — copy for submission)

> Life of a Developer is a humorous, scroll-based interactive storytelling website that takes users through the universal journey of every developer — from writing their first `<h1>` tag to shipping code they barely understand at 2am before a deadline. Built using React, GSAP, and Framer Motion, the experience is styled as an immersive VS Code / terminal environment with file tabs, a live status bar, blinking cursor, and CRT scanlines.
>
> The five chapters each tell a distinct, funny story. Chapter 1 opens with a terminal boot sequence that installs 227,000 npm packages and throws deprecation warnings before welcoming you to the journey. Chapter 2 presents the four stages of learning — HTML euphoria, CSS centering trauma, JavaScript confusion, and React's node_modules shock — as interactive expandable cards. Chapter 3 features a live bug-hunt arena where users click glowing bugs to squash them, then open a mock DevTools console that types out increasingly desperate error messages. Chapter 4 runs a live countdown timer that grows more panicked as time runs out, paired with a checkable task list of impossible deadlines. Chapter 5 delivers the finale: a coffee counter, unlockable achievements (including "git force pusher" and "It Shipped"), and rotating developer philosophy quotes.
>
> Every design decision reinforces the theme: JetBrains Mono for code authenticity, Bebas Neue for bold chapter titles, a neon green terminal palette, and GSAP-powered animations that feel snappy and alive. The result is an experience that every developer will immediately recognize — and probably laugh at, because it's painfully accurate.

---

## 📬 Submission Checklist
- [ ] GitHub Repository link
- [ ] Live deployment link
- [ ] Project Description (above — 290 words)
