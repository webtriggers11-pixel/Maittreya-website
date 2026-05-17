# Design System — Maittreya Digital Services
> Reference for all design tokens and visual patterns.
> Read by vibe-design at every session start. Updated after every design pass.
> Last updated: 2026-05-17

## Design direction
Calm-confident editorial — trusted partner energy, not loud startup energy. Dark hero → light content sections → dark footer. Feels like Infidigit × Linear.

---

## Color palette

| Token | Value | Usage |
|-------|-------|-------|
| `midnight` | `#004953` | Primary brand, nav CTA, card icon bg on hover, borders |
| `midnight-700` | `#003d44` | Hover state for midnight backgrounds |
| `midnight-800` | `#003240` | Deep hover backgrounds |
| `midnight-900` | `#002a2f` | Dark hero base, footer bg |
| `cyan` | `#AAEEFF` | Accent text, chips, links on dark bg, primary CTA on dark |
| `cyan-soft` | `rgba(170,238,255,0.2)` | Icon bg, tinted section bg, card tint |
| `amber` | `#E8A020` | (Reserved — not yet deployed) |
| `amber-hover` | `#d4911a` | (Reserved) |
| `paper` | `#FDFEFE` | Page background, card bg, text on dark |
| `ink` | `#0B1418` | Primary body text |
| `ink-soft` | `#3A4A50` | Secondary body text, descriptions |
| `line` | `#E6ECEE` | Borders, dividers |

---

## Typography

| Role | Font | Sizes used | Weight |
|------|------|-----------|--------|
| Display / Headings | Plus Jakarta Sans | H1: 82px→44px · H2: 56px→32px · H3: 22px | 800 extrabold |
| Body | Inter | 18px large · 15–16px standard · 13–14px small | 400–500 |
| Mono labels | ui-monospace | 10–11px | 400 |

Font pairing: Plus Jakarta Sans (display) + Inter (body) + system mono (labels).

---

## Spacing scale
Base unit: 4px. Scale: 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128.
Section vertical padding: `py-20 md:py-28` (80px → 112px).
Section horizontal padding: `px-6 md:px-10`.
Max content width: `max-w-[1280px]`.

---

## Border radius
| Usage | Value |
|-------|-------|
| Cards | `rounded-2xl` (16px) |
| Buttons / chips | `rounded-full` |
| Icon containers | `rounded-xl` (12px) |
| Large containers (lead form) | `rounded-3xl` (24px) |

---

## Shadows
| Usage | Class / Value |
|-------|------|
| Card rest | none (border only) |
| Card hover | `hover:shadow-md hover:shadow-midnight/8` |
| CTA button | `shadow-lg shadow-cyan/20` |
| Lead form card | `shadow-xl shadow-black/15` |

---

## Section backgrounds (rhythm)
1. **Hero** — dark (`hero-dark-gradient`) with noise + radial glows
2. **Why Maittreya** — `bg-paper` with `section-dot-grid` overlay
3. **Services** — `bg-cyan-soft/25` tinted
4. **How We Work** — `bg-paper border-y border-line`
5. **Blog** — `bg-paper`
6. **FAQ** — `bg-paper`
7. **CTA band** — dark midnight with radial glow + noise
8. **Lead form** — dark midnight

---

## Animation tokens
| Token | Value | Usage |
|-------|-------|-------|
| fadeUp | `opacity 0 → 1, y 24 → 0, 0.6s [0.22,1,0.36,1]` | Section entrances |
| stagger | `staggerChildren: 0.1, delayChildren: 0.05` | Hero headline group |
| card hover | `translateY(-5px), 0.25s ease` | `.service-card` class |
| chip hover | `border, color, bg, 0.2s ease` | `.service-chip` class |
| reveal | `opacity 0→1, translateY 16→0, 0.65s` | Scroll reveals |
| page fade | `opacity 0→1, translateY 8→0, 0.35s` | Page transitions |

---

## Component variants

### ServiceCard (static, no flip)
- Default: border-line bg-paper, icon in cyan-soft, "Learn more" faded
- Hover: translateY(-5px), shadow-md, border-midnight/20, icon bg becomes midnight (white icon), "Learn more" becomes midnight

### Nav link
- Default: `text-ink hover:text-midnight hover:bg-midnight/5`
- Active: `bg-midnight/8 text-midnight font-semibold`
- CTA "Let's Talk": `bg-midnight text-paper hover:bg-midnight-700 hover:shadow-md`

### FAQItem
- Controlled from `FaqAccordion` parent (one-open-at-a-time)
- Open indicator: `+` icon rotates 45deg, bg becomes midnight

### LeadForm
- Service selector: pill buttons (bg-midnight text-paper when selected)
- Submit: bg-midnight text-paper, disabled:opacity-60
- Success: green check circle + thank you message

---

## CSS utility classes (globals.css)
- `.reveal` / `.reveal.in` — scroll animation
- `.hero-dark-gradient` — hero section dark bg
- `.hero-dark-glow-a/b` — radial glow spots in hero
- `.hero-ambient-noise` — SVG noise texture overlay
- `.service-chip` — chip hover transitions
- `.service-card` — card hover lift + glow
- `.section-dot-grid` — subtle dot pattern bg
- `.flip-card` / `.flip-inner` / `.flip-face` / `.flip-back` — (deprecated, no longer used)
- `.card-hover` — generic lift
- `.no-scrollbar` — hide scrollbar on carousel
- `.form-input` / `.form-input:focus` — form field styles
- `.page-fade` — page entrance animation

---

> 📝 2026-05-17 · Full design pass — Dark hero, service chips strip, static service cards (no flip), WhyMaittreya light section with numbered cards, real content from content tracker, SVG contact icons, next/image in Banner, nav active pill state
