# MobilityOne Content Completion Design

## Goal

Complete the MobilityOne rebuild by covering the missing public website surface: corporate subpages, investor-relations document archives, richer solution content, and a safe Reload & Pay Bill demo flow.

## Scope

Build a content-complete static experience with a non-transactional reload/pay-bill demo. The demo must show the official flow shape without processing real money or calling private payment APIs.

## Route Model

Add dedicated routes for:

- `/about/mission-vision`
- `/about/board`
- `/investor-relations/announcements`
- `/investor-relations/advisers`
- `/investor-relations/capital-structure`
- `/investor-relations/annual-reports`
- `/investor-relations/circulars`
- `/investor-relations/admission-document`
- `/investor-relations/articles-of-association`
- `/investor-relations/corporate-governance`
- `/investor-relations/transfer-of-shares`
- `/investor-relations/shareholder-rights`
- `/reload-pay-bill`

## Content Architecture

Create a shared content module for navigation, corporate data, investor relations sections, document links, report archives, payment demo categories, and payment methods. Pages should render from data rather than duplicating long lists in components.

## Interface Design

Keep the current MobilityOne redesign language: light surfaces, black text, gold/olive accents, compact rounded controls, and reusable Nav/Footer. Investor pages should feel like searchable documentation rather than marketing cards. The pay-bill page should feel like a modern product browser with a clear demo notice.

## Pay-Bill Demo Behavior

The live site renders product categories, product cards, denominations, account/phone/email forms, optional charity fields, and payment methods. The rebuild will mirror this as a client-side demo:

- Category filter.
- Search.
- Product selection.
- Optional denomination selection.
- Account/email input form.
- Payment method selection.
- Demo-only notice and disabled final payment behavior.

## Constraints

- Do not process payments.
- Do not call undocumented production payment endpoints.
- Link to official PDFs instead of copying full PDF text.
- Use App Router route files.
- Keep content maintainable in one shared data module.

## Verification

Run a route/content coverage test, lint, and production build.
