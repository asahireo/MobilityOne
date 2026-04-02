# MobilityOne Homepage Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Scaffold a fresh Next.js app in this folder and implement a futuristic MobilityOne homepage with Tailwind, shadcn-style structure, motion, and a 3D glass hero.

**Architecture:** Build a new App Router Next.js app with TypeScript and Tailwind, keep homepage composition in `app/page.tsx`, isolate the main hero in `/components/ui/hero.tsx`, and keep the 3D scene logic in a focused `FluidGlass` component. Use brand tokens in global styles and keep the rest of the homepage split into small presentational sections.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, shadcn-style component structure, motion, three, @react-three/fiber, @react-three/drei, maath, lucide-react

---

### Task 1: Scaffold the Application

**Files:**
- Create: `package.json`, `app/*`, `public/*`, `tsconfig.json`, `next.config.*`, `postcss.config.*`, `eslint.config.*`
- Modify: project root contents
- Test: local dev/build commands

- [ ] **Step 1: Scaffold a fresh Next.js app with TypeScript and Tailwind**

Run: `pnpm create next-app@latest . --ts --tailwind --eslint --app --use-pnpm --src-dir false --import-alias "@/*"`
Expected: project files generated in the current folder

- [ ] **Step 2: Verify the scaffold installed correctly**

Run: `pnpm install`
Expected: dependencies resolved with no missing lockfile state

- [ ] **Step 3: Create shadcn-style component directory**

Run: `mkdir -p components/ui`
Expected: `components/ui` exists for reusable UI components

- [ ] **Step 4: Verify baseline project builds**

Run: `pnpm build`
Expected: default Next.js app builds successfully

### Task 2: Install UI and 3D Dependencies

**Files:**
- Modify: `package.json`, lockfile
- Test: install/build commands

- [ ] **Step 1: Install runtime dependencies**

Run: `pnpm add motion three @react-three/fiber @react-three/drei maath lucide-react`
Expected: packages added to `package.json`

- [ ] **Step 2: Verify dependencies integrate cleanly**

Run: `pnpm build`
Expected: build still succeeds after dependency installation

### Task 3: Add Theme Foundation and Assets

**Files:**
- Modify: `app/globals.css`
- Create: `public/assets/3d/`
- Test: asset presence and CSS compile

- [ ] **Step 1: Define global brand variables and base page styling**

Implement dark-neutral page foundations plus brand tokens for:
- `#fdd448`
- `#e8bd21`
- `#839344`
- `#9ba86c`

- [ ] **Step 2: Create 3D asset directory**

Run: `mkdir -p public/assets/3d`
Expected: asset directory exists

- [ ] **Step 3: Add placeholder guidance for required `.glb` assets**

Ensure the implementation references:
- `public/assets/3d/lens.glb`
- `public/assets/3d/bar.glb`
- `public/assets/3d/cube.glb`

### Task 4: Build the 3D Glass Component

**Files:**
- Create: `components/ui/fluid-glass.tsx`
- Test: `pnpm build`

- [ ] **Step 1: Implement a client-side 3D scene wrapper**

Create a focused component that:
- uses `@react-three/fiber` canvas rendering
- loads one of the provided `.glb` files based on mode
- applies transmissive/glass material treatment
- supports props for `mode`, `scale`, `ior`, `thickness`, `transmission`, `roughness`, `chromaticAberration`, and `anisotropy`

- [ ] **Step 2: Guard for graceful rendering**

Add sane defaults and fallback layout behavior so the page remains usable even if the asset is missing or the scene is hidden on small screens.

- [ ] **Step 3: Verify the component compiles**

Run: `pnpm build`
Expected: no type or bundling errors from the 3D component

### Task 5: Build the Homepage UI

**Files:**
- Create: `components/ui/hero.tsx`
- Create or modify: focused supporting homepage section files under `components/ui/`
- Modify: `app/page.tsx`
- Test: `pnpm build`

- [ ] **Step 1: Implement the main hero**

Build a branded hero that:
- uses the pasted UI as structural inspiration, not a literal copy
- includes strong type, fintech messaging, CTA buttons, trust chips, and animated accent layers
- embeds `FluidGlass` as the centerpiece

- [ ] **Step 2: Implement follow-on sections**

Create sections for:
- trust/metrics strip
- core solution cards
- platform capabilities
- final CTA

- [ ] **Step 3: Compose the homepage in `app/page.tsx`**

Replace the default starter page with the new homepage assembly.

- [ ] **Step 4: Verify responsiveness and compile state**

Run: `pnpm build`
Expected: production build passes with the redesigned homepage

### Task 6: Final Verification

**Files:**
- Modify: any issue-fix files from verification
- Test: full project verification

- [ ] **Step 1: Run final production build**

Run: `pnpm build`
Expected: success

- [ ] **Step 2: Run local dev smoke check**

Run: `pnpm dev`
Expected: homepage loads locally without runtime crashes

- [ ] **Step 3: Confirm missing-asset expectation**

If `.glb` files are not present yet, document that the hero needs:
- `public/assets/3d/lens.glb`
- `public/assets/3d/bar.glb`
- `public/assets/3d/cube.glb`

- [ ] **Step 4: Summarize final constraints**

Call out any remaining limitations, especially if placeholder or missing assets prevent the 3D scene from rendering fully.
