# Payment Gateway Hero Redesign — Design Specification

**Date:** 2026-04-05
**Component:** `PaymentGatewayHero`
**Location:** `components/ui/payment-gateway-hero.tsx`
**Page:** `/app/solutions/payment-gateway/page.tsx`

---

## Executive Summary

Replace the linear MERCHANT → GATEWAY → BANK → APPROVED flow with a **hub-and-spoke 3D scene** showing M1Pay at the center with all 10 supported payment methods orbiting around it. This immediately communicates M1Pay's core value: **one integration, unlimited payment channels**.

**Visual Style:** Tech-forward neon with glowing effects, dark background, animated data pulses showing payment routing.

---

## Problem Statement

The current hero shows a generic 4-node payment flow (Merchant → Gateway → Bank → Approved). This is:
- **Technically accurate but oversimplified** — represents only one card/bank transfer path, not M1Pay's actual capability
- **Visually flat** — 3D boxes on a line don't communicate the richness of the product
- **Generic** — could describe any payment gateway; doesn't differentiate M1Pay
- **Missing key value prop** — M1Pay's strength is supporting FPX, cards, eWallets, and more simultaneously

**Solution:** Show M1Pay as a hub connected to all payment methods it supports, with orbiting logos and animated data flow.

---

## Design Overview

### Architecture

```
┌─────────────────────────────────────────┐
│  3D Canvas (Three.js + React Three Fiber)│
├─────────────────────────────────────────┤
│  ┌─────────────────────────────────────┐ │
│  │  Scene                              │ │
│  │  ├─ Central M1Pay Hub (glowing)    │ │
│  │  ├─ 10 Orbiting Payment Logos      │ │
│  │  ├─ Glowing Tubes (connections)    │ │
│  │  ├─ Data Pulses (animated)         │ │
│  │  ├─ Bloom Post-Processing          │ │
│  │  └─ Lighting (ambient + spotlight) │ │
│  └─────────────────────────────────────┘ │
├─────────────────────────────────────────┤
│  Status Chips (SSL, BNM, PCI-DSS)       │
└─────────────────────────────────────────┘
```

---

## Scene Components

### 1. Central M1Pay Hub

**Purpose:** Anchor point representing M1Pay's gateway role

**Visual:**
- **Shape:** Rounded square or circle
- **Base color:** Dark gray/black (#0f0f10)
- **Emissive glow:** Golden yellow (#fdd448) — matches M1Pay brand color
- **Emissive intensity:** 1.2 (strong glow to draw focus)
- **Size:** ~2x larger than orbiting logos (~2.0 scale)
- **Material:** PhysicalMaterial with high roughness=0.2, clearcoat=0.6

**Animation:**
- **Pulse effect:** Subtle vertical bob using sine wave (0.08px amplitude)
- **Frequency:** 0.5 rad/sec, continuous
- **Purpose:** Keeps hub "alive" without being distracting

**Label:** "M1PAY" centered on hub

---

### 2. Orbiting Payment Method Logos

**Supported Payment Methods (10 total):**
1. FPX (Malaysia's Financial Process Exchange)
2. Visa
3. Mastercard
4. Touch 'n Go (TNG)
5. GrabPay
6. ShopeePay
7. DuitNow QR
8. Alipay
9. UnionPay
10. WeChat Pay

**Visual:**
- **Format:** SVG logos rendered as HTML elements via `<Html>` from @react-three/drei
- **Size:** 60-80px each
- **Colors:** Official brand colors (retrieved from official sources)
- **Arrangement:** Evenly distributed in a circular orbit around the hub
- **Orbit radius:** ~300-350px from the hub center
- **Orbit plane:** Horizontal (XZ plane)

**Animation:**
- **Orbit motion:** Smooth circular rotation around the hub
- **Orbit period:** 12-15 seconds per full rotation
- **Direction:** Counterclockwise (viewed from above)
- **Vertical bob:** Same as hub (0.08px amplitude, 0.5 rad/sec) to maintain depth relationship

**Glow effect:** Subtle emissive glow on each logo (~0.4 intensity) in their respective brand colors

---

### 3. Connection Tubes (Spokes)

**Purpose:** Show data routing from payment methods to M1Pay hub

**Visual:**
- **Geometry:** Curved tubes (using `tubeGeometry` with CatmullRomCurve3)
- **Curve path:** Start at logo position → arc upward mid-point (Y+0.6) → end at hub center
- **Tube radius:** 0.028 (slightly larger than current implementation for visibility)
- **Tube segments:** 80 (smooth curves)
- **Color:** Gradient along each spoke, matching the logo's brand color
- **Opacity:** 0.25 (subtle, not overwhelming)
- **Material:** `meshBasicMaterial` for consistent glow appearance

**Animation:** None (static spokes provide visual anchor)

---

### 4. Data Pulses

**Purpose:** Animate payment flow from logos toward the hub

**Visual:**
- **Shape:** Small spheres (~0.09 radius)
- **Colors:**
  - Yellow (#fdd448) for FPX pulses
  - Blue (#60a5fa) for card/Visa/Mastercard pulses
  - Green (#4ade80) for eWallet pulses
  - Branded colors for Alipay/UnionPay/WeChat
- **Emissive intensity:** 4.2 (bright, noticeable glow)
- **Material:** `meshStandardMaterial` for dynamic appearance

**Animation:**
- **Path:** Travel along each spoke (connection tube) from logo → hub
- **Speed (variable per segment):**
  - FPX segment: 0.004 (slowest)
  - Card segment: 0.0035
  - eWallet segment: 0.003 (fastest)
- **Multiple pulses per segment:** 3 pulses per spoke at staggered offsets [0, 0.33, 0.66], [0.15, 0.48, 0.81], [0.05, 0.38, 0.71]
- **Loop:** Continuous, seamless looping (progress resets to 0 after reaching 1)

**Purpose of variation:** Creates organic feel; not all pulses sync, suggesting continuous non-uniform traffic

---

### 5. Lighting & Effects

**Ambient Light:**
- **Intensity:** 0.14
- **Purpose:** Gentle overall illumination

**Spotlight (Yellow):**
- **Color:** #fdd448 (M1Pay brand gold)
- **Intensity:** 4
- **Distance:** 20
- **Decay:** 2
- **Position:** [-1.8, 2, 1] (slightly above/left of hub to warm the scene)

**General Light:**
- **Color:** #ffffff (white)
- **Intensity:** 0.6
- **Distance:** 30
- **Decay:** 2
- **Position:** [0, 6, 4] (fill light from top-front)

**Bloom Post-Processing (EffectComposer):**
- **Enabled:** Yes
- **Intensity:** 0.9
- **Luminance threshold:** 0.5 (only brightest elements bloom)
- **Luminance smoothing:** 0.4
- **Kernel size:** LARGE
- **Mipmapblur:** Enabled
- **Purpose:** Creates glowing halos around emissive objects

**Background:**
- **Color:** #070506 (near-black, matches page background)

---

### 6. Camera & Scene Rotation

**Camera Position:**
- **Position:** [0, 3.5, 14] (looking at hub from slightly above, some distance away)
- **FOV:** 52°
- **Purpose:** Isometric-ish view showing depth without overwhelming perspective

**Scene Rotation:**
- **Axis:** Y (vertical)
- **Animation:** Continuous slow rotation using `Math.sin(clock.getElapsedTime() * 0.05) * 0.12`
- **Range:** ±0.12 radians (~±6.9°)
- **Speed:** ~0.05 rad/sec
- **Purpose:** Gentle parallax effect; shows depth of 3D space without disorienting viewer

**Canvas Settings:**
- **DPR:** [1, 1.5] (adaptive pixel ratio for performance)
- **Antialias:** true
- **Power preference:** default

---

## Status Chips Section

**Location:** Below the 3D canvas

**Content (unchanged from current):**
- 256-bit SSL (green glow #4ade80)
- BNM Licensed (yellow glow #fdd448)
- PCI-DSS Compliant (blue glow #60a5fa)

**Design:** Subtle badges with color-coded dot indicators and matching glow

---

## Responsive Behavior

**Desktop (1024px+):**
- Full 3D scene at 420px height
- All 10 logos visible and orbiting

**Tablet (768px-1023px):**
- 3D scene at 380px height
- May scale logos slightly smaller if needed
- Same functionality

**Mobile (<768px):**
- **TBD during implementation** — either:
  - Full 3D scene at smaller height (300px) with slightly smaller logos
  - Simplified 2D fallback showing logos in a static circle (if performance is poor)
- Decision made during dev based on performance testing

---

## Data Flow & Naming Conventions

### Constants

```typescript
const NODE_DATA = [
  { id, label, x, z, icon, emissive, emissiveIntensity, scale, phase }
]

const CONNECTIONS = [
  { from, to }  // Spokes between nodes
]

const PULSE_CONFIG = [
  { segmentIndex, speed, offsets, emissive }  // Data pulse animation config
]

const STATUS_CHIPS = [
  { label, color }  // SSL, BNM, PCI-DSS badges
]
```

### Component Hierarchy

```
PaymentGatewayHero
├── Canvas
│   ├── Scene
│   │   ├── Lighting
│   │   ├── FlowNode (hub) × 1
│   │   ├── FlowNode (logos) × 10
│   │   ├── ConnectionTube × 10 (spokes)
│   │   ├── DataPulses (animated)
│   │   └── EffectComposer → Bloom
│   └── HTMLOverlay (status chips)
```

---

## Implementation Details

### Key Changes from Current

| Aspect | Current | New |
|--------|---------|-----|
| **Layout** | Linear (4 nodes) | Hub-and-spoke (11 nodes: 1 center + 10 orbiting) |
| **Node positions** | x: -5.5 to 5.5 | Hub at (0,0,0), logos at 300px orbit radius |
| **Animation** | Gentle vertical bob + scene rotation | Same + orbiting logos |
| **Payment methods shown** | 0 (generic names only) | 10 (FPX, Visa, Mastercard, TNG, GrabPay, ShopeePay, DuitNow, Alipay, UnionPay, WeChat) |
| **Pulses** | 9 total (3 per segment) | 30 total (3 per segment × 10 spokes) |
| **Data structure** | NODE_DATA[4], CONNECTIONS[3] | NODE_DATA[11], CONNECTIONS[10] |

---

## Performance Considerations

- **Logo rendering:** SVG icons rendered as HTML elements (using `<Html>` from drei) — will have some overhead
- **Pulse count:** 30 animated spheres (up from 9) — monitor GPU/CPU usage
- **Orbit radius:** Larger scene footprint but more breathing room for logos
- **Bloom effect:** Expensive, but current settings are reasonable; disable on mobile if needed

---

## Accessibility & Semantics

- **Labels:** Each logo has a descriptive label (FPX, Visa, etc.) rendered as text
- **Alt text:** None needed (3D canvas), but status chips have explicit labels
- **Keyboard:** Not interactive (static visualization), no focus/hover states needed

---

## Success Criteria

- ✅ All 10 payment method logos orbiting smoothly around M1Pay hub
- ✅ Glowing connections/spokes visible and clear
- ✅ Data pulses flowing from logos toward hub at varied speeds
- ✅ Tech-forward neon aesthetic with dark background
- ✅ No performance degradation (60fps target on modern devices)
- ✅ Logos are accurate, official brand versions (verified sources)
- ✅ Scene is visually distinct from current linear flow

---

## Next Steps

1. **Logo sourcing:** Find official SVG/PNG files for all 10 payment methods
2. **Implementation:** Update `payment-gateway-hero.tsx` with hub-and-spoke architecture
3. **Testing:** Verify performance, responsiveness, visual fidelity
4. **Review:** Code review for React Three Fiber best practices
5. **Deployment:** Merge to main branch

