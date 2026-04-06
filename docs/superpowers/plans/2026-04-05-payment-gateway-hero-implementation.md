# Payment Gateway Hero Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the linear 4-node payment flow with a 3D hub-and-spoke scene showing M1Pay at the center with 10 payment method logos orbiting around it.

**Architecture:** A Three.js scene (via React Three Fiber) featuring:
- 1 central M1Pay hub with golden glow
- 10 orbiting payment method logos (FPX, Visa, Mastercard, TNG, GrabPay, ShopeePay, DuitNow, Alipay, UnionPay, WeChat Pay)
- 10 glowing spokes connecting logos to the hub
- 30 animated data pulses flowing along spokes (3 per spoke)
- Bloom post-processing for neon glow effect
- Gentle scene rotation for depth

**Tech Stack:** React 18, Three.js, @react-three/fiber, @react-three/drei, @react-three/postprocessing, Lucide React icons

---

## File Structure

**Modified:**
- `components/ui/payment-gateway-hero.tsx` — Complete rewrite of scene logic and data structures

**Created:**
- `public/logos/payment-methods/fpx.svg`
- `public/logos/payment-methods/visa.svg`
- `public/logos/payment-methods/mastercard.svg`
- `public/logos/payment-methods/touch-n-go.svg`
- `public/logos/payment-methods/grabpay.svg`
- `public/logos/payment-methods/shopeepay.svg`
- `public/logos/payment-methods/duitnow-qr.svg`
- `public/logos/payment-methods/alipay.svg`
- `public/logos/payment-methods/unionpay.svg`
- `public/logos/payment-methods/wechat-pay.svg`

**Documentation (already created):**
- `docs/superpowers/specs/2026-04-05-payment-gateway-hero-redesign.md` (design spec)
- `docs/superpowers/specs/2026-04-05-payment-gateway-hero-logo-sources.md` (logo sources)

---

## Prerequisites

Before starting implementation, ensure you have:
- [ ] Latest logo files (10 SVGs) placed in `public/logos/payment-methods/` directory
- [ ] Access to the design spec at `docs/superpowers/specs/2026-04-05-payment-gateway-hero-redesign.md`
- [ ] Familiarity with React Three Fiber basics (Canvas, useFrame, groups, materials)
- [ ] Understanding of Three.js Vector3, CatmullRomCurve3, and geometry

---

## Task 1: Download & Organize Logo Files

**Files:**
- Create: `public/logos/payment-methods/` (directory)
- Create: 10 SVG logo files (see logo sources doc)

- [ ] **Step 1: Create the logos directory**

```bash
mkdir -p public/logos/payment-methods
```

- [ ] **Step 2: Download FPX logo from SeekLogo**

Visit: https://seeklogo.com/vector-logo/389674/fpx
- Download the SVG file (free option)
- Save as: `public/logos/payment-methods/fpx.svg`
- Verify: File should be ~5-10 KB, contains SVG path data

- [ ] **Step 3: Download Visa logo from Wikimedia Commons**

Visit: https://commons.wikimedia.org/wiki/File:Visa_2021.svg
- Right-click → Save As
- Save as: `public/logos/payment-methods/visa.svg`
- Verify: File should be SVG format with Visa branding

- [ ] **Step 4: Download Mastercard logo from Wikimedia Commons**

Visit: https://commons.wikimedia.org/wiki/File:Mastercard_2019_logo.svg
- Right-click → Save As
- Save as: `public/logos/payment-methods/mastercard.svg`
- Verify: File should be SVG with overlapping circles logo

- [ ] **Step 5: Download Touch 'n Go logo**

Visit: https://www.touchngo.com.my/ (look for Media Kit or brand assets)
- If not available on website, use SeekLogo or other source
- Save as: `public/logos/payment-methods/touch-n-go.svg`
- Verify: File is valid SVG

- [ ] **Step 6: Download GrabPay logo from SeekLogo**

Visit: https://seeklogo.com/vector-logo/371015/grab-pay
- Download SVG file
- Save as: `public/logos/payment-methods/grabpay.svg`

- [ ] **Step 7: Download ShopeePay logo from SeekLogo**

Visit: https://seeklogo.com/vector-logo/406839/shopee-pay
- Download SVG file
- Save as: `public/logos/payment-methods/shopeepay.svg`

- [ ] **Step 8: Download DuitNow QR logo**

Visit: https://www.duitnow.my/ (or brand guidelines PDF)
- Download official DuitNow QR logo
- Save as: `public/logos/payment-methods/duitnow-qr.svg`
- If SVG unavailable, use PNG and convert to SVG with online tool

- [ ] **Step 9: Download Alipay logo from Wikimedia Commons**

Visit: https://en.wikipedia.org/wiki/File:Alipay_logo_(2024).svg
- Right-click → Save As
- Save as: `public/logos/payment-methods/alipay.svg`

- [ ] **Step 10: Download UnionPay logo from Wikimedia Commons**

Visit: https://commons.wikimedia.org/wiki/File:UnionPay_logo.svg
- Right-click → Save As
- Save as: `public/logos/payment-methods/unionpay.svg`

- [ ] **Step 11: Download WeChat Pay logo from SeekLogo**

Visit: https://seeklogo.com/vector-logo/347666/wechat-pay
- Download SVG file
- Save as: `public/logos/payment-methods/wechat-pay.svg`

- [ ] **Step 12: Verify all 10 logo files exist and are valid**

Run: `ls -la public/logos/payment-methods/`
Expected output:
```
-rw-r--r-- ... fpx.svg
-rw-r--r-- ... visa.svg
-rw-r--r-- ... mastercard.svg
-rw-r--r-- ... touch-n-go.svg
-rw-r--r-- ... grabpay.svg
-rw-r--r-- ... shopeepay.svg
-rw-r--r-- ... duitnow-qr.svg
-rw-r--r-- ... alipay.svg
-rw-r--r-- ... unionpay.svg
-rw-r--r-- ... wechat-pay.svg
```

- [ ] **Step 13: Quick visual check on each logo file**

For each SVG file, open in a text editor and verify it contains:
- `<svg ...>` opening tag
- Path data (should look like: `<path d="M...Z"/>`)
- `</svg>` closing tag

Example (should contain valid SVG markup):
```xml
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M 50 10 L 90 90 L 10 90 Z" fill="#blue"/>
</svg>
```

- [ ] **Step 14: Commit logo files**

```bash
git add public/logos/payment-methods/*.svg
git commit -m "feat: add payment method logos (FPX, Visa, Mastercard, TNG, GrabPay, ShopeePay, DuitNow, Alipay, UnionPay, WeChat Pay)"
```

---

## Task 2: Refactor NODE_DATA Structure

**Files:**
- Modify: `components/ui/payment-gateway-hero.tsx:17-22` (NODE_DATA constant)

This task updates the data structure to define 11 nodes: 1 hub + 10 payment methods.

- [ ] **Step 1: Open payment-gateway-hero.tsx**

File: `components/ui/payment-gateway-hero.tsx`

- [ ] **Step 2: Replace NODE_DATA constant (old 4-node structure)**

Old code (lines 17-22):
```typescript
const NODE_DATA = [
  { id: "merchant", label: "Merchant",  x: -5.5, z: 0.3,  icon: Store,       emissive: "#ffffff", emissiveIntensity: 0.3,  scale: 1.0,  phase: 0   },
  { id: "gateway",  label: "Gateway",   x: -1.8, z: 0,    icon: Zap,         emissive: "#fdd448", emissiveIntensity: 1.2,  scale: 1.15, phase: 0.9 },
  { id: "bank",     label: "Bank",      x:  1.8, z: 0.2,  icon: Building2,   emissive: "#60a5fa", emissiveIntensity: 0.6,  scale: 1.0,  phase: 1.8 },
  { id: "approved", label: "Approved",  x:  5.5, z: 0.3,  icon: CircleCheck, emissive: "#4ade80", emissiveIntensity: 0.7,  scale: 1.0,  phase: 2.7 },
] as const;
```

New code:
```typescript
const NODE_DATA = [
  // Central hub
  { id: "m1pay",      label: "M1PAY",           x: 0,    z: 0,    icon: Zap,         logoPath: null,                              emissive: "#fdd448", emissiveIntensity: 1.2,  scale: 1.2, phase: 0, isHub: true },
  // Orbiting payment methods
  { id: "fpx",        label: "FPX",             x: 3.87, z: -1.29, icon: null,        logoPath: "/logos/payment-methods/fpx.svg", emissive: "#fdd448", emissiveIntensity: 0.5, scale: 1.0, phase: 0 },
  { id: "visa",       label: "Visa",            x: 3.53, z: 2.04,  icon: null,        logoPath: "/logos/payment-methods/visa.svg", emissive: "#1434cb", emissiveIntensity: 0.5, scale: 1.0, phase: 0.3 },
  { id: "mastercard", label: "Mastercard",      x: 1.22, z: 3.63,  icon: null,        logoPath: "/logos/payment-methods/mastercard.svg", emissive: "#ff5f00", emissiveIntensity: 0.5, scale: 1.0, phase: 0.6 },
  { id: "tng",        label: "Touch 'n Go",     x: -1.88, z: 3.65, icon: null,        logoPath: "/logos/payment-methods/touch-n-go.svg", emissive: "#00a86b", emissiveIntensity: 0.5, scale: 1.0, phase: 0.9 },
  { id: "grabpay",    label: "GrabPay",         x: -3.8, z: 2.05,  icon: null,        logoPath: "/logos/payment-methods/grabpay.svg", emissive: "#00b14f", emissiveIntensity: 0.5, scale: 1.0, phase: 1.2 },
  { id: "shopeepay",  label: "ShopeePay",       x: -3.87, z: -1.29, icon: null,       logoPath: "/logos/payment-methods/shopeepay.svg", emissive: "#ee3b36", emissiveIntensity: 0.5, scale: 1.0, phase: 1.5 },
  { id: "duitnow",    label: "DuitNow QR",      x: -1.88, z: -3.65, icon: null,       logoPath: "/logos/payment-methods/duitnow-qr.svg", emissive: "#0066cc", emissiveIntensity: 0.5, scale: 1.0, phase: 1.8 },
  { id: "alipay",     label: "Alipay",          x: 1.22, z: -3.63,  icon: null,       logoPath: "/logos/payment-methods/alipay.svg", emissive: "#1890ff", emissiveIntensity: 0.5, scale: 1.0, phase: 2.1 },
  { id: "unionpay",   label: "UnionPay",        x: 3.53, z: -2.04,  icon: null,       logoPath: "/logos/payment-methods/unionpay.svg", emissive: "#0066cc", emissiveIntensity: 0.5, scale: 1.0, phase: 2.4 },
  { id: "wechatpay",  label: "WeChat Pay",      x: 1.88, z: 3.65,   icon: null,       logoPath: "/logos/payment-methods/wechat-pay.svg", emissive: "#09b83e", emissiveIntensity: 0.5, scale: 1.0, phase: 2.7 },
] as const;
```

**Note on coordinates:**
- Hub at (0, 0, 0)
- Payment logos arranged in a circle around hub using circle math:
  - Radius: 4.0 units
  - 10 evenly-spaced points around circle: angle = (i * 2π) / 10
  - x = 4.0 * cos(angle)
  - z = 4.0 * sin(angle)

- [ ] **Step 3: Update the CONNECTIONS constant**

Old code (lines 24-28):
```typescript
const CONNECTIONS = [
  { from: NODE_DATA[0], to: NODE_DATA[1] },
  { from: NODE_DATA[1], to: NODE_DATA[2] },
  { from: NODE_DATA[2], to: NODE_DATA[3] },
] as const;
```

New code:
```typescript
const CONNECTIONS = [
  // Spokes from all 10 payment logos to central hub
  { from: NODE_DATA[1], to: NODE_DATA[0] },  // FPX → M1Pay
  { from: NODE_DATA[2], to: NODE_DATA[0] },  // Visa → M1Pay
  { from: NODE_DATA[3], to: NODE_DATA[0] },  // Mastercard → M1Pay
  { from: NODE_DATA[4], to: NODE_DATA[0] },  // TNG → M1Pay
  { from: NODE_DATA[5], to: NODE_DATA[0] },  // GrabPay → M1Pay
  { from: NODE_DATA[6], to: NODE_DATA[0] },  // ShopeePay → M1Pay
  { from: NODE_DATA[7], to: NODE_DATA[0] },  // DuitNow → M1Pay
  { from: NODE_DATA[8], to: NODE_DATA[0] },  // Alipay → M1Pay
  { from: NODE_DATA[9], to: NODE_DATA[0] },  // UnionPay → M1Pay
  { from: NODE_DATA[10], to: NODE_DATA[0] }, // WeChat Pay → M1Pay
] as const;
```

- [ ] **Step 4: Update the PULSE_CONFIG constant**

Old code (lines 30-34):
```typescript
const PULSE_CONFIG = [
  { segmentIndex: 0, speed: 0.004,  offsets: [0, 0.33, 0.66],      emissive: "#fdd448" },
  { segmentIndex: 1, speed: 0.0035, offsets: [0.15, 0.48, 0.81],   emissive: "#60a5fa" },
  { segmentIndex: 2, speed: 0.003,  offsets: [0.05, 0.38, 0.71],   emissive: "#4ade80" },
] as const;
```

New code:
```typescript
const PULSE_CONFIG = [
  { segmentIndex: 0, speed: 0.004,  offsets: [0, 0.33, 0.66],      emissive: "#fdd448" },  // FPX (yellow)
  { segmentIndex: 1, speed: 0.0035, offsets: [0.15, 0.48, 0.81],   emissive: "#1434cb" }, // Visa (blue)
  { segmentIndex: 2, speed: 0.003,  offsets: [0.05, 0.38, 0.71],   emissive: "#ff5f00" }, // Mastercard (orange)
  { segmentIndex: 3, speed: 0.0035, offsets: [0.1, 0.43, 0.76],    emissive: "#00a86b" }, // TNG (green)
  { segmentIndex: 4, speed: 0.003,  offsets: [0.2, 0.53, 0.86],    emissive: "#00b14f" }, // GrabPay (green)
  { segmentIndex: 5, speed: 0.004,  offsets: [0.05, 0.38, 0.71],   emissive: "#ee3b36" }, // ShopeePay (red)
  { segmentIndex: 6, speed: 0.0035, offsets: [0.15, 0.48, 0.81],   emissive: "#0066cc" }, // DuitNow (blue)
  { segmentIndex: 7, speed: 0.003,  offsets: [0.25, 0.58, 0.91],   emissive: "#1890ff" }, // Alipay (blue)
  { segmentIndex: 8, speed: 0.004,  offsets: [0.1, 0.43, 0.76],    emissive: "#0066cc" }, // UnionPay (blue)
  { segmentIndex: 9, speed: 0.0035, offsets: [0.2, 0.53, 0.86],    emissive: "#09b83e" }, // WeChat Pay (green)
] as const;
```

- [ ] **Step 5: Verify NODE_DATA array length**

The file should now have:
- NODE_DATA: 11 items (1 hub + 10 payment methods)
- CONNECTIONS: 10 items (spokes from each logo to hub)
- PULSE_CONFIG: 10 items (one per spoke)

Quick check: Run:
```bash
grep -n "NODE_DATA\|CONNECTIONS\|PULSE_CONFIG" components/ui/payment-gateway-hero.tsx
```

- [ ] **Step 6: Commit NODE_DATA refactoring**

```bash
git add components/ui/payment-gateway-hero.tsx
git commit -m "feat: refactor NODE_DATA to 11-node hub-and-spoke structure (1 hub + 10 payment methods)"
```

---

## Task 3: Update FlowNode Component to Support Logos

**Files:**
- Modify: `components/ui/payment-gateway-hero.tsx:48-82` (FlowNode component)

This task updates the FlowNode component to render either an icon (for hub) or a logo image (for payment methods).

- [ ] **Step 1: Update FlowNode component signature and props**

Old component signature (line 48-53):
```typescript
function FlowNode({
  x, z, icon: Icon, label, emissive, emissiveIntensity, scale, phase,
}: {
  x: number; z: number; icon: LucideIcon; label: string;
  emissive: string; emissiveIntensity: number; scale: number; phase: number;
}) {
```

New component signature:
```typescript
function FlowNode({
  x, z, icon: Icon, label, emissive, emissiveIntensity, scale, phase, logoPath, isHub,
}: {
  x: number; z: number; icon: LucideIcon | null; label: string;
  emissive: string; emissiveIntensity: number; scale: number; phase: number; logoPath?: string | null; isHub?: boolean;
}) {
```

- [ ] **Step 2: Update FlowNode JSX to conditionally render icon or logo**

Old JSX (lines 62-80):
```typescript
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
```

New JSX:
```typescript
return (
  <group position={[x, BASE_Y, z]} scale={scale}>
    {/* 3D Node background */}
    <RoundedBox ref={meshRef} args={[isHub ? 2.0 : 1.6, isHub ? 2.0 : 1.6, 0.28]} radius={0.18} smoothness={4}>
      <meshPhysicalMaterial
        color="#0f0f10"
        emissive={emissive}
        emissiveIntensity={emissiveIntensity}
        roughness={0.2}
        clearcoat={0.6}
      />
    </RoundedBox>

    {/* Content layer (icon or logo + label) */}
    <Html center position={[0, 0, 0.2]}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, pointerEvents: "none", userSelect: "none" }}>
        {isHub && Icon ? (
          <>
            <Icon size={32} color={emissive} strokeWidth={1.5} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: emissive, opacity: 0.85 }}>
              {label}
            </span>
          </>
        ) : logoPath ? (
          <>
            <img src={logoPath} alt={label} style={{ width: 60, height: "auto", maxHeight: 60, filter: `drop-shadow(0 0 8px ${emissive})` }} />
            <span style={{ fontSize: 8, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: emissive, opacity: 0.7 }}>
              {label}
            </span>
          </>
        ) : null}
      </div>
    </Html>
  </group>
);
```

- [ ] **Step 3: Update FlowNode call sites in Scene component**

Old code in Scene component (lines 183-185):
```typescript
{NODE_DATA.map((node) => (
  <FlowNode key={node.id} {...node} />
))}
```

This will now work correctly because FlowNode props now include logoPath and isHub. No changes needed here (spread operator handles new props).

- [ ] **Step 4: Verify TypeScript compiles**

Run:
```bash
npm run type-check
```

Expected: No TypeScript errors related to FlowNode props.

- [ ] **Step 5: Commit FlowNode updates**

```bash
git add components/ui/payment-gateway-hero.tsx
git commit -m "feat: update FlowNode to render logo images for payment methods, icon for hub"
```

---

## Task 4: Update ConnectionTube Component for 10 Spokes

**Files:**
- Modify: `components/ui/payment-gateway-hero.tsx:88-112` (ConnectionTube component)

ConnectionTube already supports arbitrary from/to nodes, so minimal changes needed.

- [ ] **Step 1: Verify ConnectionTube implementation**

Current ConnectionTube code (lines 88-112) should work as-is because it takes arbitrary from/to positions.

- [ ] **Step 2: Verify CONNECTIONS is used correctly in Scene**

Check Scene component (lines 187-189):
```typescript
{CONNECTIONS.map((conn, i) => (
  <ConnectionTube key={i} from={conn.from} to={conn.to} />
))}
```

This will now iterate over 10 CONNECTIONS instead of 3. No code changes needed.

- [ ] **Step 3: Run visual test**

At this point, don't commit yet. Test that the scene renders correctly with 10 spokes. (This will be done in Task 5.)

---

## Task 5: Update DataPulses Component for 10 Segments

**Files:**
- Modify: `components/ui/payment-gateway-hero.tsx:118-163` (DataPulses component)

DataPulses already iterates over PULSE_CONFIG, so it should automatically handle 10 pulses.

- [ ] **Step 1: Verify DataPulses logic**

Current code (lines 132-136):
```typescript
const pulses = useMemo(() =>
  PULSE_CONFIG.flatMap(({ segmentIndex, speed, offsets, emissive }) =>
    offsets.map((offset) => ({ segmentIndex, speed, offset, emissive }))
  ),
[]);
```

This will now create 30 pulses (3 offsets × 10 segments). No code changes needed.

- [ ] **Step 2: Verify useFrame loop**

Current code (lines 141-147) should work correctly for 30 pulses. No changes needed.

- [ ] **Step 3: No code changes required for this task**

The DataPulses component is data-driven and will automatically adapt to the new PULSE_CONFIG.

---

## Task 6: Test Scene Rendering on Desktop

**Files:**
- Test: `components/ui/payment-gateway-hero.tsx` (visual test)

- [ ] **Step 1: Start development server**

```bash
npm run dev
```

Expected: Dev server starts on http://localhost:3000

- [ ] **Step 2: Navigate to Payment Gateway page**

URL: http://localhost:3000/solutions/payment-gateway

- [ ] **Step 3: Visual inspection checklist**

Check the following:
- [ ] Central M1Pay hub visible at center with golden glow
- [ ] All 10 payment logos visible in a circular orbit around hub
- [ ] Logos are legible and not distorted (60-80px size)
- [ ] Glowing spokes visible connecting each logo to hub
- [ ] 30 animated data pulses flowing along spokes (3 per spoke)
- [ ] Pulses have correct brand colors (FPX yellow, Visa blue, etc.)
- [ ] Scene rotates gently around Y-axis
- [ ] Logos orbit smoothly around hub
- [ ] No console errors or warnings
- [ ] Bloom effect creates soft glowing halos
- [ ] Dark background (#070506) matches page background
- [ ] Status chips visible below scene (SSL, BNM, PCI-DSS)

- [ ] **Step 4: Browser console check**

Open DevTools (F12) → Console tab

Run:
```javascript
console.log(performance.now())
```

Scroll and interact with page. Verify:
- No errors in console
- Frame rate stable (check with browser performance monitor)

- [ ] **Step 5: Verify no missing logos**

If any logos fail to load:
- Check browser DevTools → Network tab
- Look for failed requests to `/logos/payment-methods/*.svg`
- Verify all 10 files exist in `public/logos/payment-methods/`

- [ ] **Step 6: Check mobile responsiveness**

Resize browser window to mobile size (375px width):
- Scene should still render without crashing
- Logos may be smaller/overlapping (acceptable for now; can optimize in future)

- [ ] **Step 7: Document any visual issues**

If anything looks wrong (distorted logos, missing pulses, incorrect colors), document:
- What looks wrong
- Expected vs. actual
- Screenshots if possible

Do NOT commit yet if issues found. Proceed to Task 7 for fixes.

---

## Task 7: Fix Common Issues (If Needed)

**Files:**
- Modify: `components/ui/payment-gateway-hero.tsx` (if issues found)

This is a catch-all task for fixing visual issues discovered in Task 6.

- [ ] **Step 1: If logos are distorted or too small/large**

Adjust logo size in FlowNode component:
```typescript
// Current: width: 60
// Try: width: 70 or width: 50
<img src={logoPath} alt={label} style={{ width: 70, height: "auto", maxHeight: 70, ... }} />
```

Then retest in browser.

- [ ] **Step 2: If pulses are not visible**

Check PULSE_CONFIG speeds and ensure they're reasonable:
- Current: 0.003-0.004 (slow enough to see)
- If too fast, reduce to 0.002-0.003
- If too slow, increase to 0.004-0.005

- [ ] **Step 3: If logos have incorrect colors in glow**

Check emissive colors in NODE_DATA match brand colors:
```typescript
// Verify:
// FPX: "#fdd448" (yellow)
// Visa: "#1434cb" (blue)
// Mastercard: "#ff5f00" (orange)
// etc.
```

- [ ] **Step 4: If scene rotation feels wrong**

Adjust rotation speed in Scene component:
```typescript
// Current: Math.sin(clock.getElapsedTime() * 0.05) * 0.12
// Slower rotation: * 0.03 instead of * 0.05
// Faster rotation: * 0.07 instead of * 0.05
groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.05) * 0.12;
```

- [ ] **Step 5: Retest after fixes**

Navigate back to payment-gateway page, refresh browser, verify fixes.

- [ ] **Step 6: Commit fixes (if any)**

```bash
git add components/ui/payment-gateway-hero.tsx
git commit -m "fix: adjust logo sizing, pulse speeds, colors for visual accuracy"
```

---

## Task 8: Verify All Assets & Cleanup

**Files:**
- Verify: `public/logos/payment-methods/*.svg`
- Verify: `components/ui/payment-gateway-hero.tsx`

- [ ] **Step 1: Verify all logo files are optimized**

For each SVG file, check file size:
```bash
ls -lh public/logos/payment-methods/
```

Expected: Each file should be < 50 KB (ideally < 20 KB). If larger:
- Open SVG in text editor
- Remove unnecessary metadata/comments
- Minify SVG using online tool (https://jakearchibald.github.io/svgomg/)

- [ ] **Step 2: Test logo loading in real browser**

Hard refresh page (Ctrl+Shift+R or Cmd+Shift+R):
- All 10 logos should load without CORS or 404 errors
- Check Network tab in DevTools for any 404s on `/logos/payment-methods/*.svg`

- [ ] **Step 3: Verify scene performance**

Open DevTools → Performance tab:
- Record 5 seconds of interaction (scroll, hover, etc.)
- Verify FPS stays above 50 (60 is ideal)
- Check for dropped frames

If performance is poor:
- Disable Bloom effect temporarily: Change `<Bloom .../>` to `<Bloom ... intensity={0} />`
- Re-test performance
- If better, keep Bloom disabled; optimize later
- If still poor, check for expensive operations in useFrame loops

- [ ] **Step 4: Cross-browser testing (optional)**

Test on:
- Chrome/Edge (desktop)
- Firefox (desktop)
- Safari (desktop)

Verify scene renders correctly on all browsers.

- [ ] **Step 5: Final visual check against design spec**

Compare current implementation to design spec (`docs/superpowers/specs/2026-04-05-payment-gateway-hero-redesign.md`):

Checklist:
- [ ] Hub is center of screen with golden glow
- [ ] 10 logos orbit in smooth circles
- [ ] Glowing tubes connect logos to hub
- [ ] Data pulses flow from logos toward hub
- [ ] Scene rotates gently
- [ ] No logos are missing or duplicated
- [ ] Bloom effect creates neon glow
- [ ] Colors match brand specifications
- [ ] Scene is responsive (doesn't crash on mobile)
- [ ] Status chips visible below

- [ ] **Step 6: Remove any temporary debugging code**

Search file for any `console.log`, `debugger`, or temporary variables. Remove if found.

```bash
grep -n "console\|debugger" components/ui/payment-gateway-hero.tsx
```

- [ ] **Step 7: Final commit**

```bash
git add components/ui/payment-gateway-hero.tsx public/logos/payment-methods/
git commit -m "feat: complete payment gateway hero hub-and-spoke redesign with 10 orbiting logos"
```

---

## Testing Checklist

Before considering this complete:

- [ ] Scene renders without errors on desktop
- [ ] All 10 logos visible and orbiting
- [ ] Glowing spokes and data pulses visible
- [ ] Scene rotates smoothly
- [ ] Logo colors match brand specifications
- [ ] No console errors or warnings
- [ ] Frame rate stable (50+ FPS)
- [ ] Logos load correctly (no 404s or CORS errors)
- [ ] Bloom effect working as designed
- [ ] Status chips visible below scene
- [ ] Mobile layout doesn't crash (even if not optimized)
- [ ] All tests passing (if unit tests added)

---

## Known Limitations & Future Improvements

- **Mobile optimization:** Scene may be small on mobile devices. Future iteration could switch to 2D flat layout or simplified 3D.
- **Logo size:** Fixed 60-80px. Could make responsive based on screen size.
- **Bloom intensity:** Currently 0.9; could be tweakable via props.
- **Rotation speed:** Fixed at 0.05 rad/sec; could be parameterized.
- **Performance:** 30 animated pulses may impact older devices. Could add LOD (level of detail) for mobile.

---

## Rollback Plan

If anything breaks in production:

1. **Revert commit:**
   ```bash
   git revert <commit-hash>
   git push origin main
   ```

2. **Restore old hero component:**
   ```bash
   git checkout <old-commit-hash> -- components/ui/payment-gateway-hero.tsx
   ```

3. **Keep logo files:** Logo files can stay in `public/logos/` (safe, not referenced if old component used).

