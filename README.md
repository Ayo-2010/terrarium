# Terrarium — Glass Garden

Build a living glass terrarium: layer substrate, plant mosses and ferns, add hardscape, and watch condensation cycle.

## Live Demo
https://ayo-2010.github.io/terrarium/

## Features
- Three substrate layers (drainage → charcoal → soil) with correct build order
- 8 plant species (mosses, ferns, tropicals) with unique SVG renderings
- 6 hardscape elements (rocks, wood, bark, crystal, figurine)
- Animated condensation cycle with mist button
- Tap-to-place interaction inside the glass vessel
- Export terrarium as PNG
- Full state persists in localStorage
- Responsive down to 390px
- Respects `prefers-reduced-motion`

## Controls
- **Layer buttons** — build bottom-up: drainage, charcoal, soil (order enforced)
- **Plant buttons** — tap to plant, tap again to remove (max 8)
- **Hardscape buttons** — tap to place, tap again to remove (max 6)
- **Mist** — triggers condensation animation
- **Cycle** — advances condensation phase manually
- **Clear Flora** — removes all plants & hardscape, keeps substrate
- **Reset** — complete reset to empty vessel
- **Export** — downloads current terrarium as PNG
- **Click/tap inside glass** — places active tool
- **Keyboard** — Enter/Space in vessel places active tool

## Design Notes
- Palette: soft sage `#f0f4f1`, deep forest `#1d2d23`, accent green `#2d7d4d`, soil `#5d4432`, charcoal `#2d2d2d`
- Fonts: DM Sans (UI), Outfit (display)
- Vessel: SVG path with glass gradient, inner layers drawn as clipped paths
- Plants/hardscape: procedural SVG per species, positioned by click coordinates
- Condensation: CSS animated radial gradients on overlay layer
- Reduced motion: disables condensation drift, mist fade, transitions

## Local Storage Key
- `terrarium.state.v1` — object with `{layers, plants[], hardscape[], condensation, mistLevel}`

## Plant Data
Each plant has unique SVG rendering:
- Sheet Moss — carpet
- Cushion Moss — mounds
- Button Fern — arching round leaflets
- Maidenhair Fern — delicate fans
- Nerve Plant — veined rosette
- Peperomia — rippled hearts
- Pilea — textured bronze leaves
- Spikemoss — ancient scale-like fronds

## Hardscape Data
- Seiryu Stone (large limestone)
- Dragon Stone (small pitted clay)
- Spider Wood (branching driftwood)
- Cork Bark (flat mount)
- Quartz Cluster (clear points)
- Tiny Figure (ceramic deer)

## Browser Support
Modern browsers with SVG, Canvas API, CSS Custom Properties, Grid.

## License
MIT