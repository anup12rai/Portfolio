# Project memory

## Product intent & audience

- Personal portfolio website for **Aniruddha Rai**.
- Single-page, fixed-viewport (100vh) interactive site — no scrolling, no multi-page routing.
- Sections: Home, About, Experience, Projects, Contact; switching via state, not scroll.
- Audience: recruiters / visitors viewing on desktop, tablet, mobile.

## Brand personality & voice

- Minimal, professional, clean.
- No clutter, no decorative filler, no random stats or extra paragraphs.
- Blue accent as primary brand color.

## Visual design & UX direction

- **Layout**: full content fits viewport; sections swap instantly on nav click. Internal scroll only within Projects/About if content overflows.
- **Floating bottom dock**: pill-shaped, dark navy/black, blue glowing border, horizontally centered, fixed bottom. Active icon = circular blue bg; inactive = gray. Hover lift + tooltips. Adapts to light/dark.
- **Nav icons** (lucide-react): Home, User (About), Rocket (Experience), Grid (Projects), Phone (Contact).
- **Hero**: name "ANIRUDDHA RAI" + animated typing/deleting job title cycling: AI/ML Engineer → Backend Developer → Website Developer → IoT Developer, with blinking cursor; steady layout (no shift).
- **Project cards**: consistent grid, compact sizes, short descriptions, tech labels, thumbnail. Two side-by-side buttons: GitHub + blue-outlined Live Preview; both `target="_blank" rel="noopener noreferrer"`.
- **Dark mode**: deep black/navy bg, white text, subtle borders, blue accents.
- **Light mode**: white bg, dark text, light gray borders, blue accents.
- **Responsive**: desktop, tablet, mobile.

## Decisions, constraints & rationale

- Stack: Vite + React + JSX + Tailwind CSS + Lucide React. No extra UI/icon packages.
- Import via `@/` alias → `src/`.
- Project links centralized in one editable data file; each Live Preview URL must be distinct (project-one … project-four placeholders).
- Removed old top Navbar and standalone Footer; Skills merged into About to keep within viewport.
- Existing theme toggle preserved; must not break current working functionality.
- Strict change scope: only requested features, no redesign of unrelated sections.

## Open questions & assumptions

- Actual GitHub repo and Live Preview URLs to be supplied later (placeholders in place).
- No browser-based visual verification done by assistant; layout fit (esp. 4-col project grid) should be checked by user.
- About/Projects may scroll internally if content exceeds viewport — assumed acceptable since page itself doesn't scroll.