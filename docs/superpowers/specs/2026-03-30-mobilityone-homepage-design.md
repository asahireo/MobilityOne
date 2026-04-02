# MobilityOne Homepage Redesign Spec

**Date:** 2026-03-30

**Goal**

Redesign the MobilityOne homepage as a futuristic tech-forward payments brand using Next.js, React, Tailwind CSS, shadcn-style structure, motion, and a 3D glass centerpiece. The result should feel modern and premium while still reading as a credible payment infrastructure company.

## Product Direction

The homepage should present MobilityOne as a digital payments and platform infrastructure company, not as a playful consumer brand. The visual language should use stronger motion and 3D presence, but keep copy, layout, and information architecture grounded in trust, scale, and product clarity.

## Visual Direction

- Base the palette on the provided company colors: `#fdd448`, `#e8bd21`, `#839344`, `#9ba86c`
- Use a dark neutral foundation so the brand colors and glass refraction read clearly
- Avoid copying the pasted sample hero directly; instead, adapt its ambition into a cleaner futuristic fintech presentation
- Use expressive, large-format typography with restrained copy blocks
- Use glass, glow, subtle grid/noise backgrounds, and motion layers that feel intentional rather than decorative

## Homepage Structure

### Hero

- Large headline that positions MobilityOne as the infrastructure layer for digital payments and connected financial services
- Supporting body copy with concise fintech messaging
- Primary CTA and secondary CTA
- A 3D `FluidGlass` object as the visual centerpiece using one of the provided `.glb` assets under `public/assets/3d`
- Supporting trust chips, short metrics, or platform indicators around the hero

### Trust / Metrics Strip

- A compact band beneath the hero showing credibility signals
- Can include metrics, capabilities, coverage cues, or partner-style trust labels

### Core Solution Cards

- Three to four cards summarizing major MobilityOne solution areas
- Cards should use the brand palette selectively, with glass/highlight treatments that remain readable

### Platform Capabilities

- A section describing key product capabilities such as payments orchestration, integrations, security, or settlement flows
- Content should balance visual polish with real structure

### Final CTA

- A clear closing section inviting enterprise contact, partnerships, or product exploration

## Technical Requirements

- Scaffold a fresh Next.js app in this folder because the current folder is empty
- Use TypeScript
- Use Tailwind CSS
- Use shadcn-style project structure and ensure `/components/ui` exists
- Install required dependencies:
  - `motion`
  - `three`
  - `@react-three/fiber`
  - `@react-three/drei`
  - `maath`
- Place homepage UI components under `/components/ui`
- Add or adapt a `FluidGlass` component for the hero
- Place required 3D assets in `public/assets/3d`

## Content and Assets

- Use stock imagery only if necessary; prefer iconography, metrics, and product framing over decorative photos
- If icon replacements are needed, use `lucide-react`
- Do not depend on external avatar graphics or unrelated social/crypto motifs from the pasted sample

## Responsive Behavior

- The hero must remain legible and visually strong on mobile, tablet, and desktop
- 3D effects should degrade gracefully on smaller screens
- Motion should support the layout, not block interaction or readability

## Component Boundaries

- `app/page.tsx` should assemble the homepage
- `/components/ui/hero.tsx` should contain the main hero implementation
- Supporting homepage sections may be split into focused components if that keeps files smaller and clearer
- 3D implementation should be isolated enough that layout and content changes do not require rewriting scene code

## Quality Requirements

- The homepage should compile cleanly in a fresh Next.js app
- Styling should be implemented with Tailwind utilities and minimal custom CSS beyond theme variables/globals
- Copy should remain concise and credible
- Motion and 3D should enhance the brand impression without hurting performance or clarity

## Testing and Verification

- Verify dependency installation succeeds
- Verify the app builds and the homepage renders
- Verify the 3D asset path resolves correctly
- Verify responsive layouts at mobile and desktop widths
