# About Page Design Spec

## Overview

Single long-scroll `/about` page combining Mission & Vision + Board of Directors from the old site into one cohesive page. Uses the same dark/gold aesthetic and scroll-driven motion pattern as the homepage. Uses 21st.dev Magic MCP components where suitable.

## Route

`/about` → `app/about/page.tsx`

## Sections

### 1. Page Hero (dark background)

- Breadcrumb: `Home > About Us`
- Tag line: `"ABOUT US"` — gold, uppercase, `tracking-[0.32em]`, `text-xs font-bold`
- Headline: `"BUILDING MALAYSIA'S PAYMENT FUTURE SINCE 2003"` — large bold uppercase white, same font style as homepage (`Arial Black / Impact`)
- Subtext: "MobilityOne Sdn Bhd (200201033972) — BNM-licensed e-money operator, Mastercard principal issuer, and MSC Malaysia status company. Listed on AIM of the London Stock Exchange (MBO.UK)."
- Background: dark `var(--background)` with grid overlay and ambient gold/olive glows (same as homepage)
- Motion: fade-up entrance animation

### 2. Company Timeline (dark background)

- Section tag: `"OUR JOURNEY"` in gold
- Headline: `"20+ YEARS OF"` + `"INNOVATION"` (gold accent on INNOVATION)
- Vertical timeline with milestone cards, alternating left/right on desktop, stacked on mobile
- Each milestone: year badge (gold circle) + short description
- Key milestones:
  - **2003** — MobilityOne founded
  - **2005** — Entered digital payments market
  - **2007** — Listed on AIM of the London Stock Exchange (MBO.UK)
  - **2010** — Obtained MSC Malaysia status
  - **2015** — BNM e-Money Operator license
  - **2018** — Mastercard Principal Prepaid Issuer
  - **2020** — Launched white-label e-wallet platform
  - **2023** — Shariah Compliance certification
  - **2024** — 7+ white-label partners live
- Glass-morphism milestone cards with motion stagger animation
- Note: exact milestone years should be verified with MobilityOne team before go-live

### 3. Mission & Vision (dark background)

- Two-column grid (`lg:grid-cols-2`), single column on mobile
- Each card: glass-morphism style (`border border-white/8 bg-white/[0.04] backdrop-blur-sm rounded-[2rem]`)
- **Vision card:**
  - Gold icon (eye/target icon from lucide)
  - Heading: "Vision"
  - Text: "To become the preeminent fintech company transforming payments, eCommerce, and virtual marketplaces through innovative, impactful solutions."
- **Mission card:**
  - Gold icon (rocket/target icon from lucide)
  - Heading: "Mission"
  - Text: "To empower small merchants and financial institutions with seamless, secure, and intelligent payment solutions—bridging innovation with everyday transactions through advanced terminals, smart gateways, e-wallets, and global remittance services."
- **Founder quote** below cards (centered):
  - Blockquote style matching homepage LeadershipQuote
  - "Payments and making payments should be made easy for both the payor and payee. Our vision is to smoothen out the complexities and simplify payments."
  - Attribution: Dato' Hussian A. Rahman, Founder, MobilityOne (matches homepage format)

### 4. Company Stats (dark background)

- Reuse the BigStats pattern from homepage
- Section tag: `"BY THE NUMBERS"` in olive
- Headline: `"OUR TRACK"` + `"RECORD"` (gold accent on RECORD)
- 4 stat cards in a `lg:grid-cols-4` grid:
  - `20+` — Years in payments — "Established in the Malaysian market"
  - `525K+` — Avg. daily transactions — "Through payment gateway"
  - `RM192M+` — Yearly transaction volume — "Processed through our platform"
  - `2.3M+` — Success transactions/yr — "Across all payment channels"
- Glass-morphism card style, gold numbers, motion fade-up

### 5. Board of Directors (white background section)

- Rounded top corners (`rounded-t-[2.5rem]`) matching homepage FeatureCards
- Section tag: `"LEADERSHIP"` in olive
- Headline: `"BOARD OF"` + `"DIRECTORS"` (gold accent on DIRECTORS)
- Grid: `lg:grid-cols-3` with last row centered via flex-wrap + `justify-center`
- **Director cards** (light background `#F8F9FA`, `rounded-[2rem]`, `border border-gray-100`):
  - Initials avatar: circular div with `bg-[var(--brand-gold)]/15`, gold text, first letter of name
  - Name: bold, black
  - Title: smaller, muted
  - Bio: `text-sm text-black/60`, verbatim from old site
- Consider using 21st.dev card components if available

**Directors data (verbatim bios from old site):**

1. **Abu Bakar Bin Mohd Taib** — Non-Executive Chairman
   - Bio: Abu Bakar bin Mohd Taib is the Non-Executive Chairman of the company since 27 June 2014. He has previously worked for several listed companies and financial institutions in Malaysia including Nestle (Malaysia) Berhad, Bank Bumiputera Malaysia Berhad (now part of CIMB Bank Berhad) and United Malayan Banking Berhad (now part of RHB Bank Berhad). He was mainly involved in corporate communications and corporate affairs until 2004. Since 2005 he has been the director of several companies that are principally involved in timber related activities in Malaysia. He obtained a Master of Business Administration in Marketing and Finance from West Coast University (USA) and a Bachelor of Science in Business Administration from California State University (USA).

2. **Dato' Hussian @ Rizal bin A. Rahman** — Chief Executive Officer
   - Bio: Dato' Hussian @ Rizal bin A. Rahman is the Chief Executive Officer of the Group. He has extensive experience in the IT and telecommunications industries in Malaysia and is responsible for the development of the Group's overall management, particularly in setting the Group's business direction and strategies. He was admitted to the membership of Certified Master of Business Administration from The Oxford Association of Management, Oxford, England and was awarded the certificate of Master of the Oxford for Leadership from The Oxford Centre for Leadership, United Kingdom. He is also the Managing Director of TFP Solutions Berhad (listed on the ACE Market of Bursa Malaysia Securities Berhad).

3. **Derrick Chia Kah Wai** — Deputy Chief Executive Officer
   - Bio: Derrick Chia Kah Wai is the Deputy Chief Executive Officer of the Group. He began his career as a programmer in 1994, he then joined GHL Systems Berhad in January 1998 as a Software Engineer and was promoted to Software Development Manager in December 1999. He obtained his Bachelor Degree in Commerce, majoring in Management Information System from University of British Columbia, Canada. He joined the Group in May 2005 and is responsible for the Group's business operations.

4. **Seah Boon Chin (Dominic)** — Non-Executive Director
   - Bio: Dominic Seah joined the Group in January 2007 and stepped down as the Corporate Finance Director in November 2011 and remains on the Board as a Non-Executive Director of the Company. He worked in the Corporate Finance Department of established financial institutions in Malaysia and Singapore. He is currently the Head of Corporate Finance with TA Securities Holdings Berhad in Malaysia. He obtained his Bachelor Degree in Commerce (Honours) with Distinction from McMaster University, Canada.

5. **Azlinda Ariffin-Boromand** — Non-Executive Director
   - Bio: Azlinda Ariffin-Boromand is the Non-Executive Director of the Company since 30 April 2021. Azlinda is an experienced UK-based corporate lawyer with over 25 years practicing legal experience. She is currently a consulting partner in the corporate team at Withersworldwide and was previously a partner in the capital markets teams at both Olswang LLP and Fasken Martineau LLP prior to joining Withersworldwide in 2016. Azlinda specialises in mergers and acquisitions and equity capital markets transactions. Azlinda is a member of both the Law Society of England & Wales and the Malaysian Bar. She is also a barrister with Gray's Inn.

### 6. Licenses & Regulatory (dark background)

- Section tag: `"REGULATED & TRUSTED"` in gold
- Headline: `"LICENSED BY BNM & MASTERCARD"` — gold accent
- Subtext: compliance description
- 6 license cards in `lg:grid-cols-3` grid (reuse Licenses pattern from homepage):
  1. Mastercard Principal Prepaid Issuer
  2. e-Money Operator (BNM)
  3. Money Services Business Class B (BNM)
  4. PayNet Third Party Acquirer
  5. Approved Merchant Acquirer (BNM)
  6. Shariah Compliance Certified (Salihin Shariah Advisory)
- Add BNM verification link: `https://www.bnm.gov.my/-/mobilityone-sdn-bhd`
- Glass-morphism cards with gold icon, hover border glow

### 7. Office & CTA (dark background)

- Two-column layout: image left, content right
- Left: Office photo (`HqM1.png` or `M1RecepNew.jpeg`) in a glass-morphism frame (`rounded-[2.5rem] border border-white/10`)
  - Copy these images to `public/assets/img/` during implementation
- Right:
  - Tag: `"OUR OFFICE"` in gold
  - Heading: `"VISIT US"`
  - Address block (from old site footer): full registered address
  - Phone: +603-9213 0669
  - Email: m1enquiry@mobilityone.com.my
- CTA buttons:
  - Primary (gold): "Contact Us" → `/contact` (or `#contact` for now)
  - Secondary (outline): "Investor Relations" → `/investor-relations` (or `#` for now)

## Shared Components

The Nav and Footer currently live inside `components/ui/hero.tsx`. During implementation:
1. Extract `Nav` and `Footer` into their own files (`components/ui/nav.tsx`, `components/ui/footer.tsx`)
2. Import them in both the homepage and about page
3. Update anchor links to use absolute paths on non-homepage routes (e.g. `/#solutions` instead of `#solutions`)
4. Extract `SpinningBadge` into a shared component since it's used in multiple places

## Technical Notes

- File: `app/about/page.tsx` — default export, server component wrapper with SEO metadata:
  ```typescript
  export const metadata: Metadata = {
    title: "About Us | MobilityOne",
    description: "Learn about MobilityOne's mission, vision, leadership team, and regulatory standing as Malaysia's trusted payment infrastructure provider.",
  };
  ```
- Component: `components/ui/about.tsx` — `"use client"` for motion animations
- Use `motion` from `motion/react` for entrance animations (same as homepage)
- Use `lucide-react` icons throughout
- Use 21st.dev Magic MCP components for cards/UI where suitable
- Responsive: mobile-first, same breakpoints as homepage (`md:`, `lg:`)
- Copy office images from `tmp/` scrape to `public/assets/img/`

## Design Tokens (from globals.css)

```
--brand-gold: #fdd448
--brand-amber: #e8bd21
--brand-olive: #839344
--brand-moss: #9ba86c
--background: #080a08
--muted: #a8b189
```

## Fonts

- Body: DM Sans
- Display/headings: Space Grotesk
- Hero headlines: Arial Black / Impact (same as homepage)
