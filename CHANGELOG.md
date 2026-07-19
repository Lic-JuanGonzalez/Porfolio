# Changelog

All notable changes to this project are documented here.

---

## [3.7.0] — 2026-07-19

### Added
- **Professional Services Marketplace** project card — marketplace for hiring professionals and leaving reviews (Java 21, Spring Boot 3.2, React, PostgreSQL 16, Docker). State-machine-enforced hire flow, auto-computed ratings, admin-gated test console.

---

## [3.6.0] — 2026-06-11

### Added
- **Reservation Platform** project card — multi-tenant SaaS for reservation management (Python 3.13, FastAPI, React 18, PostgreSQL 16, Docker). Clean Architecture + DDD + CQRS, async processing with Celery/Redis, monitoring with Prometheus and Grafana.

---

## [3.5.0] — 2026-06-07

### Added
- **Inventory Manager** project card — multi-branch enterprise inventory system (Java 21, Spring Boot 3.2, React 18, PostgreSQL 16, Docker). JWT auth with roles, inter-branch transfers with approval workflow, full audit trail.

---

## [3.4.1] — 2026-06-06

### Fixed
- "Microservicios" chip missing `data-i18n` attribute — now translates to "Microservices" when switching to EN

---

## [3.4.0] — 2026-06-01

### Fixed
- Nav collapses at 360px — new `≤400px` breakpoint reduces padding, gaps, font-sizes and logo size so all items fit without overflow
- Hero name ("Juan Gonzalez") breaks across two lines at 360px — capped at `2.8rem` for `≤400px`
- Footer social icons barely visible — opacity `0.30 → 0.55`

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
