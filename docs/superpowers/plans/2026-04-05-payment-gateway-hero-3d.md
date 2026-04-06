# Payment Gateway Hero — 3D Flow Visual Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the static `PaymentTerminalHero` component with an animated React Three Fiber scene showing a Merchant → Gateway → Bank → Approved payment flow with glowing data pulses.

**Architecture:** A single `"use client"` component renders a Three.js `Canvas` containing four floating `RoundedBox` nodes connected by `TubeGeometry` paths. Sphere meshes travel the paths each frame via `CatmullRomCurve3.getPoint(t)`. A `Bloom` post-processing pass adds glow. Icons are rendered via `@react-three/drei`'s `<Html center>`. The component drops into `solution-page.tsx` replacing `PaymentTerminalHero` with no other file changes required.

**Tech Stack:** React Three Fiber (`@react-three/fiber`), `@react-three/drei` (RoundedBox, Html), `@react-three/postprocessing` + `postprocessing` (Bloom, KernelSize), `three`, `lucide-react`

---

## File Map

| File | Action |
|------|--------|
| `components/ui/payment-gateway-hero.tsx` | **Create** — full new component |
| `components/ui/payment-terminal-hero.tsx` | **Delete** — no other consumers |
| `components/ui/solution-page.tsx` | **Edit** — swap import + component name |

---

## Task 1: Scaffold the component shell

**Files:**
- Create: `components/ui/payment-gateway-hero.tsx`

- [ ] **Step 1: Create the file with the Canvas shell**

Create `components/ui/payment-gateway-hero.tsx`:

```tsx
"use client";

import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { KernelSize } from "postprocessing";

function Scene() {
  return (
    <group>
      <ambientLight intensity={0.14} />
      <pointLight color="#fdd448" intensity={4} distance={20} decay={2} position={[-1.8, 2, 1]} />
      <pointLight color="#ffffff" intensity={0.6} distance={30} decay={2} position={[0, 6, 4]} />
    </group>
  );
}

export function PaymentGatewayHero() {
  return (
    <div className="relative w-full" style={{ height: 420 }}>
      <Canvas
        camera={{ position: [0, 3.5, 14], fov: 52 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: "default" }}
      >
        <color attach="background" args={["#070506"]} />
        <Scene />
        <EffectComposer>
          <Bloom
            intensity={0.9}
            luminanceThreshold={0.5}
            luminanceSmoothing={0.4}
            kernelSize={KernelSize.LARGE}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
```

- [ ] **Step 2: Verify the dev server compiles without errors**

Run: `pnpm dev` (or `npm run dev`)
Navigate to `/solutions/payment-terminal` — expect a dark empty canvas, no console errors.

---

## Task 2: Add the four floating nodes

**Files:**
- Modify: `components/ui/payment-gateway-hero.tsx`

The node data is defined once as a constant array so the four nodes share one `FlowNode` component.

- [ ] **Step 1: Add node data constant and imports**

At the top of the file, after the existing imports, add:

```tsx
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, Html } from "@react-three/drei";
import * as THREE from "three";
import { Store, Zap, Building2, CircleCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Mesh } from "three";

const NODE_DATA = [
  { id: "merchant", label: "Merchant",  x: -5.5, z: 0.3,  icon: Store,       emissive: "#ffffff", emissiveIntensity: 0.3,  scale: 1.0,  phase: 0   },
  { id: "gateway",  label: "Gateway",   x: -1.8, z: 0,    icon: Zap,         emissive: "#fdd448", emissiveIntensity: 1.2,  scale: 1.15, phase: 0.9 },
  { id: "bank",     label: "Bank",      x:  1.8, z: 0.2,  icon: Building2,   emissive: "#60a5fa", emissiveIntensity: 0.6,  scale: 1.0,  phase: 1.8 },
  { id: "approved", label: "Approved",  x:  5.5, z: 0.3,  icon: CircleCheck, emissive: "#4ade80", emissiveIntensity: 0.7,  scale: 1.0,  phase: 2.7 },
] as const;

const BASE_Y = 0;
```

- [ ] **Step 2: Add the FlowNode component**

After the constant, add:

```tsx
function FlowNode({
  x, z, icon: Icon, label, emissive, emissiveIntensity, scale, phase,
}: {
  x: number; z: number; icon: LucideIcon; label: string;
  emissive: string; emissiveIntensity: number; scale: number; phase: number;
}) {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.position.y = BASE_Y + Math.sin(clock.getElapsedTime() * 0.5 + phase) * 0.08;
  });

  return (
    <group position={[x, BASE_Y, z]} scale={scale}>
      <RoundedBox ref={meshRef} args={[1.6, 1.6, 0.28]} radius={0.18} smoothness={4}>
        <meshPhysicalMaterial
          color="#0f0f10"
          emissive={emissive}
          emissiveIntensity={emissiveIntensity}
          roughness={0.2}
          clearcoat={0.6}
        />
      </RoundedBox>
      <Html center position={[0, 0, 0.2]}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, pointerEvents: "none", userSelect: "none" }}>
          <Icon size={22} color={emissive} strokeWidth={1.5} />
          <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: emissive, opacity: 0.85 }}>
            {label}
          </span>
        </div>
      </Html>
    </group>
  );
}
```

- [ ] **Step 3: Render nodes inside Scene**

Replace the `<group>` content in `Scene` with:

```tsx
function Scene() {
  return (
    <group>
      <ambientLight intensity={0.14} />
      <pointLight color="#fdd448" intensity={4} distance={20} decay={2} position={[-1.8, 2, 1]} />
      <pointLight color="#ffffff" intensity={0.6} distance={30} decay={2} position={[0, 6, 4]} />
      {NODE_DATA.map((node) => (
        <FlowNode key={node.id} {...node} />
      ))}
    </group>
  );
}
```

- [ ] **Step 4: Verify nodes appear**

Reload `/solutions/payment-terminal` — expect 4 glowing boxes with icons and labels, gently floating.

---

## Task 3: Add connection tube paths

**Files:**
- Modify: `components/ui/payment-gateway-hero.tsx`

- [ ] **Step 1: Add ConnectionTube component**

After `FlowNode`, add:

```tsx
const CONNECTIONS = [
  { from: NODE_DATA[0], to: NODE_DATA[1] },
  { from: NODE_DATA[1], to: NODE_DATA[2] },
  { from: NODE_DATA[2], to: NODE_DATA[3] },
] as const;

function ConnectionTube({
  from,
  to,
}: {
  from: { x: number; z: number; emissive: string };
  to: { x: number; z: number };
}) {
  const curve = useMemo(() => {
    const start = new THREE.Vector3(from.x, BASE_Y, from.z);
    const end   = new THREE.Vector3(to.x,   BASE_Y, to.z);
    const mid   = new THREE.Vector3(
      (start.x + end.x) / 2,
      BASE_Y + 0.6,
      (start.z + end.z) / 2
    );
    return new THREE.CatmullRomCurve3([start, mid, end]);
  }, [from.x, from.z, to.x, to.z]);

  return (
    <mesh>
      <tubeGeometry args={[curve, 80, 0.028, 8, false]} />
      <meshBasicMaterial color={from.emissive} transparent opacity={0.25} />
    </mesh>
  );
}
```

- [ ] **Step 2: Render tubes in Scene**

Add inside the `<group>` in `Scene`, after the nodes:

```tsx
{CONNECTIONS.map((conn, i) => (
  <ConnectionTube key={i} from={conn.from} to={conn.to} />
))}
```

- [ ] **Step 3: Verify tubes appear**

Reload — expect three faint glowing arc lines connecting the nodes.

---

## Task 4: Add animated data pulses

**Files:**
- Modify: `components/ui/payment-gateway-hero.tsx`

- [ ] **Step 1: Define pulse configuration**

Add after the `CONNECTIONS` constant:

```tsx
const PULSE_CONFIG = [
  // Merchant → Gateway
  { segmentIndex: 0, speed: 0.004, offsets: [0, 0.33, 0.66], emissive: "#fdd448" },
  // Gateway → Bank
  { segmentIndex: 1, speed: 0.0035, offsets: [0.15, 0.48, 0.81], emissive: "#60a5fa" },
  // Bank → Approved
  { segmentIndex: 2, speed: 0.003, offsets: [0.05, 0.38, 0.71], emissive: "#4ade80" },
] as const;
```

- [ ] **Step 2: Add DataPulses component**

After `ConnectionTube`, add:

```tsx
function DataPulses() {
  // Build curves (same logic as ConnectionTube — must match)
  const curves = useMemo(() =>
    CONNECTIONS.map(({ from, to }) => {
      const start = new THREE.Vector3(from.x, BASE_Y, from.z);
      const end   = new THREE.Vector3(to.x,   BASE_Y, to.z);
      const mid   = new THREE.Vector3(
        (start.x + end.x) / 2,
        BASE_Y + 0.6,
        (start.z + end.z) / 2
      );
      return new THREE.CatmullRomCurve3([start, mid, end]);
    }),
  []);

  // Flat list of all pulse instances with their config
  const pulses = useMemo(() =>
    PULSE_CONFIG.flatMap(({ segmentIndex, speed, offsets, emissive }) =>
      offsets.map((offset) => ({ segmentIndex, speed, offset, emissive }))
    ),
  []);

  // Mutable progress array — one entry per pulse
  const progressRef = useRef<number[]>(pulses.map((p) => p.offset));

  // One ref per pulse sphere mesh
  const meshRefs = useRef<(Mesh | null)[]>(Array(pulses.length).fill(null));

  useFrame(() => {
    pulses.forEach((pulse, i) => {
      progressRef.current[i] = (progressRef.current[i] + pulse.speed) % 1;
      const point = curves[pulse.segmentIndex].getPoint(progressRef.current[i]);
      meshRefs.current[i]?.position.copy(point);
    });
  });

  return (
    <>
      {pulses.map((pulse, i) => (
        <mesh key={i} ref={(el) => { meshRefs.current[i] = el; }}>
          <sphereGeometry args={[0.09, 10, 10]} />
          <meshStandardMaterial
            color="#0a0a0a"
            emissive={pulse.emissive}
            emissiveIntensity={4.2}
          />
        </mesh>
      ))}
    </>
  );
}
```

- [ ] **Step 3: Render DataPulses in Scene**

Add `<DataPulses />` inside the `<group>` in `Scene`, after `ConnectionTube` mappings.

- [ ] **Step 4: Verify pulses animate**

Reload — expect glowing spheres traveling along the arc paths continuously.

---

## Task 5: Add scene rotation drift and status chips

**Files:**
- Modify: `components/ui/payment-gateway-hero.tsx`

- [ ] **Step 1: Add scene rotation to Scene group**

Convert `Scene`'s `<group>` into a ref-driven group with drift:

```tsx
function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.05) * 0.12;
  });

  return (
    <group ref={groupRef}>
      {/* lights, nodes, tubes, pulses */}
    </group>
  );
}
```

- [ ] **Step 2: Add status chips below Canvas**

In `PaymentGatewayHero`, add the chips as a sibling of `<Canvas>`:

```tsx
const STATUS_CHIPS = [
  { label: "256-bit SSL",       color: "#4ade80" },
  { label: "BNM Licensed",      color: "#fdd448" },
  { label: "PCI-DSS Compliant", color: "#60a5fa" },
] as const;

// Inside PaymentGatewayHero, after </Canvas>:
<div className="flex flex-wrap gap-2 justify-center mt-4">
  {STATUS_CHIPS.map(({ label, color }) => (
    <span
      key={label}
      className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/50 flex items-center gap-2"
    >
      <span
        className="w-1.5 h-1.5 rounded-full shrink-0"
        style={{ background: color, boxShadow: `0 0 6px ${color}` }}
      />
      {label}
    </span>
  ))}
</div>
```

- [ ] **Step 3: Verify rotation and chips**

Reload — expect the scene to slowly rock left/right, and three pill badges below the canvas.

---

## Task 6: Wire into solution-page.tsx and delete old component

**Files:**
- Modify: `components/ui/solution-page.tsx`
- Delete: `components/ui/payment-terminal-hero.tsx`

- [ ] **Step 1: Update the import in solution-page.tsx**

In [solution-page.tsx](components/ui/solution-page.tsx), find line 12:

```tsx
import { PaymentTerminalHero } from "@/components/ui/payment-terminal-hero";
```

Replace with:

```tsx
import { PaymentGatewayHero } from "@/components/ui/payment-gateway-hero";
```

- [ ] **Step 2: Update the JSX render call**

Find (around line 135):

```tsx
<PaymentTerminalHero />
```

Replace with:

```tsx
<PaymentGatewayHero />
```

The `data.heroVariant === "payment-terminal"` condition stays unchanged.

- [ ] **Step 3: Delete the old component file**

```bash
rm components/ui/payment-terminal-hero.tsx
```

- [ ] **Step 4: Verify the page still builds**

Run: `pnpm build` (or `npm run build`)
Expected: clean build, no TypeScript errors, no missing module errors.

- [ ] **Step 5: Visual check**

Navigate to `/solutions/payment-terminal` — the right column of the hero section should display the 3D payment flow scene with floating nodes, animated pulses, scene drift, and status chips below.

- [ ] **Step 6: Commit**

```bash
git add components/ui/payment-gateway-hero.tsx components/ui/solution-page.tsx
git rm components/ui/payment-terminal-hero.tsx
git commit -m "feat: replace payment terminal hero with 3D gateway flow scene"
```

---

## Done

The payment terminal solution page hero now shows:
- 4 glowing floating nodes: Merchant → Gateway → Bank → Approved
- Lucide icons (Store, Zap, Building2, CircleCheck) via Html overlay
- Animated sphere pulses traveling CatmullRom curved paths
- Bloom post-processing with gold Gateway glow
- Slow scene rotation drift
- Status chips: 256-bit SSL, BNM Licensed, PCI-DSS Compliant
