# Arden Dental Studio (کلینیک دندانپزشکی آردن)

Modern, accessible web application for **Arden Dental Studio**, a specialized adult dental practice located in Pasdaran, Tehran.

Built using **AI Web Studio OS v1.0.2** (Practice Project #2).

---

## 1. Verified Clinical Data & Constraints

- **Phone Number:** `026 34641717` (`tel:02634641717`)
- **Address (FA):** تهران، پاسداران، بوستان 7
- **Address (EN):** Tehran, Pasdaran, Boostan 7
- **Operating Hours:** شنبه تا پنجشنبه ۱۰:۰۰ الی ۱۸:۰۰ | جمعه: تعطیل (Sat–Thu 10:00–18:00 | Fri: Closed)
- **Target Demographic:** Adults aged 20 to 99 exclusively.
- **Pediatric Care:** Strictly excluded (no pediatric services).
- **Official Legal Name:** کلینیک دندانپزشکی آردن (Arden Dental Studio)

### Zero-Fabrication Enforcement
- **Email:** Omitted from UI (null).
- **Logo:** Typographic brand mark fallback.
- **Doctors / Bios:** Deferred to Phase 2; not fabricated.
- **Testimonials & Licenses:** Strictly omitted per Zero-Fabrication policy.
- **Pricing:** No public pricing tables. Fees are determined solely after in-clinic examination.
- **Contact:** Zero `<form>` elements. Direct phone consultation only.

---

## 2. Design System Tokens

Strictly constrained to the 5 confirmed brand colors:
- `#0B194E` — Midnight Navy (Primary typography, brand mark, dark footer/hero accents)
- `#48537B` — Deep Indigo (Secondary headers, active filters, hover/focus rings, icons)
- `#858CA7` — Muted Steel Blue (Restrained captions, metadata, subtle borders)
- `#C2C6D3` — Light Slate Accent (Dividers, borders, subtle hover surface tints)
- `#FFFFFF` — Pure White (Main canvas background, inverted text)

---

## 3. Route Architecture

- `/` — Homepage (Overview, trust pillars, concise services preview, location/hours spotlight, FAQ preview, CTA)
- `/about` — About Us (Clinical philosophy, adult demographic commitment, hygiene standards)
- `/services` — Services Directory (Consolidated catalog of all 8 confirmed adult services with category filtering)
- `/faq` — FAQ (Accordion with clinical and appointment inquiries)
- `/contact` — Contact & Location (Direct dialer, hours table, physical address, interactive map trigger)
- `/blog` — Educational Dental Wellness Index
- `/blog/:slug` — Dedicated Blog Article Views (CR-001)
  - `/blog/veneer-maintenance-guide`
  - `/blog/periodontal-scaling-importance`
  - `/blog/pre-implant-evaluation-steps`

---

## 4. Technology Baseline

- **Runtime:** React 19, TypeScript (Strict Mode)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4, CSS custom properties
- **Icons:** `lucide-react`
- **Animations:** `motion` (`motion/react`) with full `prefers-reduced-motion` compliance
- **SEO:** Dynamic `<title>`, meta description, OpenGraph tags, canonical URLs, and `Dentist` JSON-LD structured data

---

## 5. Development & Scripts

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Lint TypeScript codebase
npm run lint

# Build production bundle
npm run build
```
