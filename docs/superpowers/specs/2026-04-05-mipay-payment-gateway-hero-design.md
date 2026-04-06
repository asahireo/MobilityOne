# MiPay Payment Gateway Hero Design

## Summary

Replace the current gold-forward `fluid-glass` payment gateway visual with a premium MiPay-inspired hero scene. The new hero should remain abstract and website-first, but borrow its material language from MiPay brand references: dark ruby card tones, ember/orange energy, glossy surfaces, and restrained premium motion.

The scene should communicate "payment gateway" through motion and subtle cues rather than literal UI screenshots or a full banking diagram.

## Goals

- Make the payment gateway hero feel branded to MiPay rather than generic fintech infrastructure
- Keep the scene premium, abstract, and suitable for a landing-page hero
- Preserve the existing Three.js-based approach in `components/ui/fluid-glass.tsx`
- Introduce subtle payment cues without turning the hero into a literal product mockup
- Maintain performance discipline suitable for a homepage/solution-page hero

## Non-Goals

- Building a realistic credit card or phone model
- Embedding detailed app screenshots into the 3D scene
- Simulating real glass refraction or physically accurate materials
- Adding interaction-heavy camera controls as part of the default hero experience

## Visual Direction

### Chosen Direction

`Monolith Core`

A central ruby-tinted glass monolith acts as the gateway core. Distributed transaction pulses travel inward across the scene, orbit or wrap briefly around the core, and then dissipate upward. Supporting geometry stays light and abstract.

### Supporting Brand Language

- Base palette comes from the MiPay card: oxblood, ruby red, deep crimson
- Motion accents borrow from the MiPay app: ember orange, warm amber, bright red-orange
- Highlights stay controlled: soft white specular accents, black depth, minimal gold usage
- Shapes should echo payment objects indirectly: curved card corners, chip-like line motifs, contactless ripple rings

### Mood

- Premium
- Quiet confidence
- Modern consumer-fintech
- Warm, rich, and polished rather than cold enterprise tech

## Approaches Considered

### 1. Monolith Core

Central tinted gateway block with restrained supporting motion.

Pros:
- Best fit for the existing `fluid-glass` code structure
- Reads as premium quickly
- Abstract enough for a website hero
- Easier to keep visually disciplined

Cons:
- Requires careful supporting cues so it still reads as payments

### 2. Card Orbit

Several card-like slabs revolve around a gateway center.

Pros:
- More obviously payment-related
- Easy to tie directly to MiPay card branding

Cons:
- Risks becoming too literal
- Can drift from "gateway" into "card product ad"

### 3. Wallet Portal

Portal/ring structure with app-like panels and energetic flows.

Pros:
- High energy
- Strong digital-wallet associations

Cons:
- Pulls away from premium abstraction
- Too close to consumer app visualization

## Scene Composition

### Core Elements

1. Central monolith
2. Low, subdued ground/grid plane
3. Inbound transaction pulse sources around the perimeter
4. Soft orbit ring or ripple layer around the core
5. Minimal supporting floating plates or curved surfaces

### Central Monolith

- Tall rounded rectangular block
- Ruby-tinted transparent material
- Slight inner glow and specular edge highlights
- Very slow float/rotation motion
- Should anchor the entire composition visually

### Ground Plane

- Keep the existing grid concept, but reduce the "city network" emphasis
- Recolor from yellow-gold to muted red/amber
- Lower contrast so the core remains dominant

### Peripheral Geometry

- Replace many building-like elements with fewer cleaner support forms
- Shapes can become slim plates, low pillars, or card-corner echoes
- Distribution should frame the center, not compete with it

### Motion Layer

- Inbound pulses travel toward the center from distributed nodes
- Motion is staggered and calm, not frantic
- Some pulses should appear to curve or arc into the monolith
- Optional subtle wrap-around ring near the core to suggest routing/processing

## Payment Cues

The scene should include subtle payment references, not literal product illustrations.

Approved cue level: `Subtle payment cues`

Possible cues:

- Contactless-style ripple rings
- Card-corner geometry language
- Chip-trace-inspired line patterns
- Transaction pulses converging into a single secure core

Avoid:

- Full card mockups floating in the scene
- UI panels with readable interface details
- Too many icons or logos inside the 3D space

## Color System

### Primary

- Deep ruby / oxblood
- Crimson red
- Dark maroon-black

### Accent

- Ember orange
- Warm amber
- Controlled coral-red highlight

### Neutral

- Soft white highlight
- Charcoal / black shadow values

### Usage

- Core geometry uses ruby and black depth
- Motion uses orange/amber for legibility and energy
- White should only appear as restrained specular or emissive highlight

## Animation Principles

- Slow, premium, confident motion
- No aggressive spinning or noisy effects
- Motion should imply secure routing rather than gaming/VFX energy
- Bloom should support the scene, not wash it out

Animation candidates:

- Monolith hover drift
- Slow rotational parallax on support plates
- Staggered inbound pulse movement
- Low-frequency ring/ripple expansion near the core

## Implementation Shape

Target file: `components/ui/fluid-glass.tsx`

Likely implementation changes:

- Retune palette and emissive values
- Replace or simplify the current "buildings" language
- Add a central monolith component
- Add one supporting ring/ripple component
- Rework pulse behavior to converge more clearly into the core
- Reduce scene clutter where needed for a cleaner hero read

## Performance Constraints

- Keep the scene lightweight enough for a hero section
- Favor instancing where repeated geometry remains useful
- Avoid expensive material techniques that will not materially improve the result
- Prefer fewer stronger forms over many weak details

## Testing And Validation

- Verify the scene reads clearly on desktop and mobile viewport sizes
- Verify the monolith remains visually dominant against surrounding geometry
- Verify the palette feels MiPay-adjacent rather than generic red tech
- Verify motion remains smooth and not visually noisy
- Run lint/type checks after implementation

## Risks

- Too much red can flatten the scene without enough value contrast
- Too many literal payment hints can make the hero feel like an ad graphic
- Too few payment hints can make it feel like generic infrastructure art
- Overusing bloom can reduce perceived quality

## Recommendation

Implement the `Monolith Core` direction with MiPay card-led colors and subtle app-inspired motion accents. Keep payment references indirect, with a strong central gateway sculpture and calm transaction choreography.
