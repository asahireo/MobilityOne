# MiPay Payment Gateway Hero Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rework the existing `FluidGlass` Three.js hero into a MiPay-inspired premium payment-gateway scene with a ruby glass monolith, warmer motion accents, and subtler surrounding geometry.

**Architecture:** Keep the implementation centered in `components/ui/fluid-glass.tsx` and preserve the existing React Three Fiber scene structure. Replace the current gold-forward city/core composition with a monolith-led composition, recolor the lighting and fog, simplify peripheral geometry, and adjust pulse/ring behavior so the scene reads as a premium gateway hero rather than generic infrastructure art.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, `@react-three/fiber`, `@react-three/drei`, `@react-three/postprocessing`, `three`, ESLint

---

## File Map

- Modify: `components/ui/fluid-glass.tsx`
  - Keep as the single scene owner
  - Replace current visual language with MiPay-aligned geometry, materials, and motion
- Verify only: `components/ui/hero.tsx`
  - Confirm the existing `FluidGlass` embed still fits after the scene redesign
- Reference: `docs/superpowers/specs/2026-04-05-mipay-payment-gateway-hero-design.md`
  - Source of truth for art direction and constraints

## Notes Before Implementation

- The repository instruction says to consult `node_modules/next/dist/docs/` before coding because this Next.js version may differ from expectations. That path does not exist in the current install, so do not block on it. Stay within already-established App Router client-component patterns used by this repo.
- There is no existing automated test coverage for this Three.js scene. Treat `eslint`, type-aware lint feedback, and in-browser visual verification as the practical validation path for this task.
- The worktree is already dirty in unrelated files. Do not revert or disturb user changes outside the scoped edits.

### Task 1: Baseline The Existing Scene

**Files:**
- Modify: `components/ui/fluid-glass.tsx`
- Verify: `components/ui/hero.tsx`

- [ ] **Step 1: Read the full current scene structure and list replace-vs-keep decisions**

Capture these units from `components/ui/fluid-glass.tsx`:
- `Buildings`
- `GridLines`
- `NodeMarkers`
- `DataPulses`
- `Core`
- `Scene`
- `FluidGlass`

Write a short scratch summary in the implementation notes:
- keep `GridLines` concept, but recolor and reduce emphasis
- replace `Buildings` with simpler support geometry
- replace `Core` with a monolith-led center
- keep pulse/node idea, but retune paths and palette

- [ ] **Step 2: Verify where `FluidGlass` is embedded**

Run:

```bash
rg -n "FluidGlass" components/ui/hero.tsx components/ui/fluid-glass.tsx
```

Expected:
- `components/ui/hero.tsx` imports and renders `FluidGlass`
- no second integration site needs redesign work for this task

- [ ] **Step 3: Commit the analysis checkpoint**

```bash
git add docs/superpowers/plans/2026-04-05-mipay-payment-gateway-hero-implementation.md
git commit -m "docs: add MiPay gateway hero implementation plan"
```

### Task 2: Establish MiPay Color Tokens And Scene Lighting

**Files:**
- Modify: `components/ui/fluid-glass.tsx`

- [ ] **Step 1: Add shared scene color constants near the top of the file**

Add a focused token object such as:

```ts
const SCENE_COLORS = {
  background: "#070506",
  fog: "#12070a",
  ground: "#14080b",
  grid: "#7a1f24",
  ruby: "#7d101c",
  crimson: "#a11624",
  ember: "#ff6a2a",
  amber: "#ff9c3a",
  coral: "#ff5a4f",
  glow: "#ffe2d2",
};
```

- [ ] **Step 2: Replace scattered hard-coded gold/green values with the shared tokens**

Touch:
- material colors
- emissive colors
- background and fog colors
- directional light colors

Expected result:
- no `#fdd448`, `#e8bd21`, `#839344`, or `#9ba86c` remain unless intentionally justified

- [ ] **Step 3: Rebalance canvas-level lighting**

Update the light block in `FluidGlass` so it roughly follows this shape:

```tsx
<color attach="background" args={[SCENE_COLORS.background]} />
<fog attach="fog" args={[SCENE_COLORS.fog, 40, 95]} />
<ambientLight intensity={0.16} />
<directionalLight position={[16, 22, 10]} intensity={0.55} color={SCENE_COLORS.glow} />
<directionalLight position={[-14, 10, -10]} intensity={0.3} color={SCENE_COLORS.crimson} />
<directionalLight position={[0, 8, 18]} intensity={0.18} color={SCENE_COLORS.ember} />
```

- [ ] **Step 4: Run lint on the file after the token pass**

Run:

```bash
pnpm eslint components/ui/fluid-glass.tsx
```

Expected:
- no lint errors from the token/lighting edit

- [ ] **Step 5: Commit the color-and-lighting checkpoint**

```bash
git add components/ui/fluid-glass.tsx
git commit -m "feat: retune FluidGlass scene palette"
```

### Task 3: Replace The Center Core With A Ruby Monolith

**Files:**
- Modify: `components/ui/fluid-glass.tsx`

- [ ] **Step 1: Replace `Core()` with a monolith-first center composition**

Create a focused center group containing:
- one tall rounded box or capsule-like block as the main monolith
- one low emissive base disc or platform
- one orbit/ripple ring
- one point light or emissive support light near the center

Target structure:

```tsx
function CoreMonolith() {
  const ringRef = useRef<THREE.Mesh>(null);
  const monolithRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ringRef.current) ringRef.current.rotation.y = t * 0.22;
    if (monolithRef.current) {
      monolithRef.current.position.y = 2.8 + Math.sin(t * 0.5) * 0.08;
      monolithRef.current.rotation.y = Math.sin(t * 0.25) * 0.08;
    }
  });

  return <group>{/* base, monolith, ring, light */}</group>;
}
```

- [ ] **Step 2: Remove the HTML logo from the scene center**

Delete the `Html`-based `m1-digital.svg` logo usage from the 3D center so the sculpture stays abstract and premium.

Expected:
- `Html` import is removed if unused afterward
- center reads as object-first, not logo-first

- [ ] **Step 3: Use material settings that suggest tinted premium glass without expensive realism**

Aim for values in this range:

```tsx
<meshPhysicalMaterial
  color={SCENE_COLORS.ruby}
  transparent
  opacity={0.75}
  roughness={0.16}
  metalness={0.08}
  transmission={0.1}
  clearcoat={0.9}
  clearcoatRoughness={0.14}
/>
```

Adjust if the current stack or runtime behavior makes this too heavy.

- [ ] **Step 4: Re-run lint after the center rewrite**

Run:

```bash
pnpm eslint components/ui/fluid-glass.tsx
```

Expected:
- no lint errors

- [ ] **Step 5: Commit the monolith checkpoint**

```bash
git add components/ui/fluid-glass.tsx
git commit -m "feat: replace FluidGlass core with MiPay monolith"
```

### Task 4: Simplify Peripheral Geometry

**Files:**
- Modify: `components/ui/fluid-glass.tsx`

- [ ] **Step 1: Replace `Buildings()` with fewer, cleaner support forms**

Refactor the instanced geometry into a component such as `SupportPlates` or `PeripheralForms`.

Target rules:
- lower count than the current building field
- wider, flatter, or slimmer geometry
- height variation stays modest
- arrangement frames the center instead of resembling a skyline

Suggested geometry:

```tsx
<boxGeometry args={[1, 1, 1]} />
```

with matrices scaled more like:

```ts
dummy.scale.set(1.4 + rand() * 1.8, 0.18 + rand() * 0.9, 0.7 + rand() * 1.2);
```

- [ ] **Step 2: Soften the ground grid**

Keep `GridLines()`, but lower its dominance:
- recolor to `SCENE_COLORS.grid`
- reduce opacity
- consider slightly wider spacing or fewer lines if the scene still feels too busy

- [ ] **Step 3: Recolor peripheral objects to sit behind the monolith**

Expected hierarchy:
- center monolith brightest and richest
- pulses second strongest
- support forms and grid clearly subordinate

- [ ] **Step 4: Run lint after the geometry simplification**

Run:

```bash
pnpm eslint components/ui/fluid-glass.tsx
```

Expected:
- no lint errors

- [ ] **Step 5: Commit the peripheral-geometry checkpoint**

```bash
git add components/ui/fluid-glass.tsx
git commit -m "feat: simplify FluidGlass support geometry"
```

### Task 5: Rework Nodes, Pulses, And Payment Cues

**Files:**
- Modify: `components/ui/fluid-glass.tsx`

- [ ] **Step 1: Recolor `NodeMarkers()` to ember/amber tones**

Update emissive values so nodes feel warm and alive, but not neon-yellow.

Example target:

```tsx
<meshStandardMaterial
  color="#1a0807"
  emissive={SCENE_COLORS.ember}
  emissiveIntensity={3.8}
/>
```

- [ ] **Step 2: Retune `DataPulses()` to converge more deliberately into the center**

Keep the instanced approach, but adjust:
- arc heights
- travel speed
- end behavior near the monolith
- pulse scale near the center

Desired read:
- transaction flow enters the gateway core
- motion is premium and calm, not noisy

- [ ] **Step 3: Add one subtle payment cue near the core**

Implement exactly one supporting cue:
- a thin contactless-style ripple ring
- or a chip-trace-inspired ring/path motif

Do not add literal card meshes, UI panels, or logos.

- [ ] **Step 4: Ensure the scene still uses a restrained bloom profile**

Tune bloom roughly in this neighborhood:

```tsx
<Bloom
  intensity={0.85}
  luminanceThreshold={0.55}
  luminanceSmoothing={0.45}
  radius={0.7}
  mipmapBlur
/>
```

Increase only if the new palette becomes too flat.

- [ ] **Step 5: Run lint after the motion-and-cue pass**

Run:

```bash
pnpm eslint components/ui/fluid-glass.tsx
```

Expected:
- no lint errors

- [ ] **Step 6: Commit the motion checkpoint**

```bash
git add components/ui/fluid-glass.tsx
git commit -m "feat: retune FluidGlass gateway motion"
```

### Task 6: Final Integration Verification

**Files:**
- Modify if needed: `components/ui/fluid-glass.tsx`
- Verify: `components/ui/hero.tsx`

- [ ] **Step 1: Start the app locally and inspect the hero in context**

Run:

```bash
pnpm dev
```

Open the relevant page and verify:
- the hero still fits the existing layout
- the scene remains centered and not cropped badly
- the monolith reads clearly on first glance
- the palette feels MiPay-aligned

- [ ] **Step 2: Check mobile-ish sizing**

Using browser responsive tools, verify the hero still reads at smaller widths:
- surrounding geometry does not overwhelm the center
- pulses remain visible
- the scene does not degrade into clutter

- [ ] **Step 3: Run final lint**

Run:

```bash
pnpm eslint components/ui/fluid-glass.tsx components/ui/hero.tsx
```

Expected:
- clean lint output

- [ ] **Step 4: Review the final diff before handoff**

Run:

```bash
git diff -- components/ui/fluid-glass.tsx components/ui/hero.tsx
```

Expected:
- only intended scene redesign changes
- no unrelated edits

- [ ] **Step 5: Commit the finished implementation**

```bash
git add components/ui/fluid-glass.tsx components/ui/hero.tsx
git commit -m "feat: redesign MiPay payment gateway hero scene"
```

## Plan Review

Manual review completed in-session against:
- `docs/superpowers/specs/2026-04-05-mipay-payment-gateway-hero-design.md`
- current `components/ui/fluid-glass.tsx` structure

The skill recommends a separate plan-review subagent loop, but that is not used here unless explicitly requested.
