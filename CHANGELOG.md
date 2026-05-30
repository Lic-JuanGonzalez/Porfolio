# Changelog

All notable changes to this project are documented here.

---

## [Unreleased]

---

## [3.3.0] — 2026-05-30

### Fixed
- Nav links grouped with controls into `.nav-right` div — logo left, everything else right (was `space-between` on 3 items causing center-gap on wide screens)
- Nav underline hover dot artifact removed — replaced `left/right: 50%` approach with `transform: scaleX(0/1)` which has no subpixel rendering artifact

---

## [3.2.0] — 2026-05-30

### Added
- Dynamic tag filter bar in Projects section. Buttons are auto-generated from existing project tags (no manual updates needed). Clicking a tag hides non-matching cards; "Todos" resets the view.

---

## [3.1.0] — 2026-05-29

### Added
- **To-do List Django** project card (Python, Django, SQLite, HTML, CSS)
- **Neural Network ColorWarm** project card (Python, Neural Network, Matplotlib, GUI)

### Fixed
- Removed duplicate `projects-grid` override in 768px breakpoint causing layout conflicts
- Restored 3-column grid layout on desktop
- Translated hero tagline area to English
- Updated hero tagline copy
- Updated footer social links (LinkedIn, GitHub)
- Simplified footer copyright text
- Updated contact email and project GitHub link

---

## [3.0.0] — prior

### Changed
- Full rewrite as multi-file portfolio applying SRP (HTML / CSS / JS separated)
- Removed legacy template files

### Added
- Animated canvas background
- Hero section with CTA buttons
- Projects grid with glass cards
- Skills section with chip groups
- Contact form
- Sticky nav with scroll-aware active state
- Footer with social links

---

## [2.x] — legacy

Iterative versions of the original single-file portfolio (`Final version 2.0` → `2.8`).

---

## [1.x] — legacy

Initial portfolio versions (`portafolio 1.0`, `1.1`), contact module fixes, and deploy tests.
