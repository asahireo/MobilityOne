# MobilityOne Content Completion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the missing MobilityOne corporate, investor-relations, document archive, and demo reload/pay-bill site sections.

**Architecture:** Centralize website content in `lib/site-content.ts`, then render route-specific pages through a small set of reusable components. The reload/pay-bill page is a client component that uses local demo data and never submits real payments.

**Tech Stack:** Next.js App Router 16, React 19, TypeScript, Tailwind CSS 4, existing `motion/react` and `lucide-react` patterns.

---

### Task 1: Coverage Test

**Files:**
- Create: `tmp/site-coverage.test.mjs`

- [ ] Write a Node test that checks for the required route files and key content exports.
- [ ] Run it and verify it fails before implementation.

### Task 2: Shared Content

**Files:**
- Create: `lib/site-content.ts`

- [ ] Add corporate, board, investor, document archive, payment product, and payment method data.
- [ ] Include official PDF URLs as external links.
- [ ] Keep the data compact and suitable for static rendering.

### Task 3: Reusable Page Components

**Files:**
- Create: `components/ui/static-info-page.tsx`
- Create: `components/ui/investor-document-page.tsx`
- Create: `components/ui/reload-pay-bill-demo.tsx`

- [ ] Build a general static info page component for corporate and governance pages.
- [ ] Build a document archive page component for IR reports and announcements.
- [ ] Build a client-side demo pay-bill flow with search, category filter, product details, form fields, and payment methods.

### Task 4: Routes and Navigation

**Files:**
- Create route files under `app/about`, `app/investor-relations`, and `app/reload-pay-bill`.
- Modify: `components/ui/nav.tsx`
- Modify: `components/ui/footer.tsx`
- Modify: `components/ui/investor-relations.tsx`

- [ ] Add all missing route files.
- [ ] Update the nav and footer so the new sections are discoverable.
- [ ] Update the investor-relations overview so it links to local IR pages rather than only external LSE pages.

### Task 5: Verification

**Files:**
- Use existing scripts in `package.json`.

- [ ] Run `node tmp/site-coverage.test.mjs`.
- [ ] Run `pnpm lint`.
- [ ] Run `pnpm build`.
- [ ] Fix any failures.
