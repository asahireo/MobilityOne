# Payment Gateway Hero — 3D Flow Visual

**Date:** 2026-04-05
**Status:** Approved

## Overview

Replace the existing `PaymentTerminalHero` component with a new `PaymentGatewayHero` component that renders a fully animated 3D payment flow scene using React Three Fiber. The scene shows the lifecycle of a payment: Merchant → Gateway → Bank → Approved — with glowing data pulses traveling between nodes, Lucide icons on each node, and Bloom post-processing.

## Context

The payment terminal solution page (`app/solutions/payment-terminal/page.tsx`) sets `heroVariant: "payment-terminal"` on `SolutionPageData`. The `SolutionPage` component renders `<PaymentTerminalHero />` when `data.heroVariant === "payment-terminal"` (line 128). Three files require changes: the new component file must be created, the old one deleted, and `solution-page.tsx` updated to import and render the new component. `solution-page.tsx` is confirmed to be the only import site of `payment-terminal-hero.tsx`.

## Scene Composition

### Nodes

Four floating `RoundedBox` meshes (`@react-three/drei`) arranged in a horizontal arc, slightly staggered in Z to add depth. World positions (approximate):

| Node | X | Z | Icon (Lucide) | Emissive Color | Scale |
|------|---|---|--------------|----------------|-------|
| Merchant | -5.5 | 0.3 | `Store` | `#ffffff` at 0.3 | 1.0× |
| Gateway | -1.8 | 0 | `Zap` | `#fdd448` at 1.2 — hero node | 1.15× |
| Bank | 1.8 | 0.2 | `Building2` | `#60a5fa` at 0.6 | 1.0× |
| Approved | 5.5 | 0.3 | `CircleCheck` | `#4ade80` at 0.7 | 1.0× |

Note: use `CircleCheck` from `lucide-react` (the canonical name in v1.7+). `CheckCircle2` is a deprecated alias that will be removed in a future release.

Each node mesh:
- Geometry: `<RoundedBox args={[1.6, 1.6, 0.28]} radius={0.18} smoothness={4} />`
- Material: `meshPhysicalMaterial` — dark base (`#0f0f10`), emissive and emissiveIntensity per table above, roughness 0.2, clearcoat 0.6
- Icon overlay: `<Html center>` from `@react-three/drei`. The `center` prop centres the HTML element on the 3D point (without it, the top-left corner of the DOM element aligns to the point). Render the Lucide icon + a small label `<span>` below it inside the `<Html>`. The Lucide components render on the client through the R3F portal — no SSR restrictions apply inside `<Html>`.
- Floating animation in `useFrame`: each node has a fixed `baseY` and a `phaseOffset` (e.g. `index * 0.9`). Each frame: `mesh.position.y = baseY + Math.sin(time * 0.5 + phaseOffset) * 0.08`. Use assignment (`=`), not `+=` — the latter accumulates unboundedly.

### Connection Paths

Three `TubeGeometry` meshes connecting Merchant→Gateway, Gateway→Bank, Bank→Approved.

Each tube:
- Curve: `const curve = useMemo(() => new THREE.CatmullRomCurve3([startVec, midVec, endVec]), [])` where `midVec` is the midpoint with `y += 0.6` for a gentle arc. Use `useMemo` with an empty dependency array — it creates the curve once and returns a stable reference without needing `.current` access in `useFrame`.
- JSX geometry: `<tubeGeometry args={[curve, 80, 0.028, 8, false]} />` — the curve instance is the first positional argument, followed by tubularSegments, radius, radialSegments, closed.
- Material: `<meshBasicMaterial color={fromNodeColor} transparent opacity={0.25} />`

### Data Pulses

Each connection segment hosts 3 animated sphere meshes (`<sphereGeometry args={[0.09, 10, 10]} />`). Each pulse has a mutable progress value stored in a `useRef` array, a fixed `speed`, and a fixed `offset` (initial progress).

Per-frame update in `useFrame`:
```
progress = (progress + speed) % 1
const point = curve.getPoint(progress)   // returns THREE.Vector3
mesh.position.copy(point)
```

Speeds and offsets per segment:

| Segment | Speed | Offsets |
|---------|-------|---------|
| Merchant→Gateway | 0.004 | 0, 0.33, 0.66 |
| Gateway→Bank | 0.0035 | 0.15, 0.48, 0.81 |
| Bank→Approved | 0.003 | 0.05, 0.38, 0.71 |

Material: `meshStandardMaterial`, base color near-black, emissive = destination node color, `emissiveIntensity` 3.8–4.5.

### Lighting

- `<ambientLight intensity={0.14} />`
- `<pointLight>` gold (`#fdd448`) at Gateway position `[-1.8, 2, 1]`, intensity 4, distance 20, decay 2
- `<pointLight>` white at `[0, 6, 4]`, intensity 0.6, distance 30, decay 2

### Post-processing

`Bloom` from `@react-three/postprocessing` wraps `postprocessing`'s `BloomEffect`. The `radius` prop is not supported — use `kernelSize` instead (from the `KernelSize` enum in `postprocessing`):

```jsx
import { KernelSize } from "postprocessing";

<EffectComposer>
  <Bloom
    intensity={0.9}
    luminanceThreshold={0.5}
    luminanceSmoothing={0.4}
    kernelSize={KernelSize.LARGE}
    mipmapBlur
  />
</EffectComposer>
```

### Camera & Scene

- `camera={{ position: [0, 3.5, 14], fov: 52 }}`
- No `OrbitControls` — purely decorative
- A top-level `<group>` wrapping all scene elements has a slow rotation drift applied in `useFrame`: `group.rotation.y = Math.sin(time * 0.05) * 0.12`

```jsx
<Canvas
  camera={{ position: [0, 3.5, 14], fov: 52 }}
  dpr={[1, 1.5]}
  gl={{ antialias: true, powerPreference: "default" }}
>
  <color attach="background" args={["#070506"]} />
  ...
</Canvas>
```

### Status Chips

Three small HTML badges rendered as siblings of `<Canvas>` inside the outer wrapper `<div>` (not inside the Three.js scene). Use styled `<span>` elements with CSS `background-color` dots — no emoji:

```jsx
<div className="flex gap-3 justify-center mt-4">
  {[
    { label: "256-bit SSL",       color: "#4ade80" },
    { label: "BNM Licensed",      color: "#fdd448" },
    { label: "PCI-DSS Compliant", color: "#60a5fa" },
  ].map(({ label, color }) => (
    <span key={label} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/50 flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: color, boxShadow: `0 0 6px ${color}` }} />
      {label}
    </span>
  ))}
</div>
```

## File Changes

| File | Action | Detail |
|------|--------|--------|
| `components/ui/payment-gateway-hero.tsx` | **Create** | New component — must be `"use client"` |
| `components/ui/payment-terminal-hero.tsx` | **Delete** | No other consumers exist |
| `components/ui/solution-page.tsx` | **Edit** | 1. Change import from `payment-terminal-hero` → `payment-gateway-hero`, rename `PaymentTerminalHero` → `PaymentGatewayHero`. 2. The JSX condition at line 128 stays `data.heroVariant === "payment-terminal"` (keep variant string to avoid touching page data). 3. Render `<PaymentGatewayHero />` inside the existing motion wrapper. |

`heroVariant` union type in `SolutionPageData` stays as `"payment-terminal"` — no change to the page data file.

## Dependencies

All already present — no new installs required:
- `@react-three/fiber` (installed: ^9.5.0)
- `@react-three/drei` (installed: 10.7.7) — RoundedBox, Html
- `@react-three/postprocessing` (installed: 3.0.4) — EffectComposer, Bloom
- `postprocessing` — KernelSize enum
- `three` (installed: 0.183.2)
- `lucide-react` (installed: 1.7.0)

## Constraints

- No interactive elements — purely animated
- No `OrbitControls`, no click/hover handlers
- Component must be `"use client"`
- Lucide icons rendered via `@react-three/drei` `<Html center>` — not as Three.js textures
- Node floating uses `baseY + Math.sin(...)` assignment — never `+=`
- No emoji in status chips — use CSS colored dots
- Must match the dark background (`#070506`) and gold accent palette of the solution page
