## Context

The repository implements a Next.js 16 interactive whitepaper for the ArvaCore IoT irrigation research project. A first iteration (`cinematic-agricultural-whitepaper`, archived) established the site on Alternate Wetting and Drying (AWD) framing, a fixed 4-node model, and a thesis PDF colophon. The current change (`website-content-revision-and-fundraising`) revises the editorial framing to smart agricultural monitoring, generalizes the node count to configurable N, and adds a diagram lightbox for closer inspection.

See `proposal.md` for motivation. The lightbox implementation lives in `components/ui/DiagramLightbox.tsx` and is consumed via `components/ui/FigureFrame.tsx`.

## Goals / Non-Goals

**Goals:**
- Provide a lightweight, dependency-free lightbox that enlarges diagrams with zoom (25% steps, 0.5x–3.5x), drag-to-pan (mouse and touch), Escape/close, backdrop-click, and full focus management.
- Reuse the existing `FigureFrame` component so every diagram gains enlarge capability with one integration point.
- Respect `prefers-reduced-motion` and keep background scroll locked only while the viewer is open.

**Non-Goals:**
- A general redesign of page layouts, navigation, or color theming.
- A separate image (raster) lightbox; the site uses inline SVG diagrams, so the diagram lightbox is the single viewer.
- Gallery prev/next navigation across unrelated figures; each figure is enlarged independently.

## Decisions

- **Single lightbox implementation.** `DiagramLightbox` is the only lightbox. `FigureFrame` owns the trigger state and delegates all content to `DiagramLightbox` via `lightboxContent || children`.
- **Always-rendered, opacity-driven viewer.** `FigureFrame` always renders `<DiagramLightbox>` and toggles `isOpen`. The lightbox is a single fixed overlay whose `opacity` and `transform` transition via CSS tied to `isOpen`, enabling both enter and exit animations without `setState` inside effects (avoiding cascading renders).
- **Backdrop vs. content click separation.** The outer overlay handles backdrop click-to-close; the inner panel calls `stopPropagation` on clicks. This guarantees clicking the image or any control never dismisses the viewer, while clicking the backdrop does.
- **Interactive element drag guard.** `mousedown`/`touchstart` on interactive targets (`input`, `button`, `[role="button"]`, `[role="slider"]`) is ignored so the paddy water-level slider and component-inspection controls remain usable inside the lightbox.
- **Focus management.** On open, the previously focused element is saved and focus moves to the Close button (via `requestAnimationFrame` after mount). A `Tab`/`Shift+Tab` focus trap cycles within the overlay. On close, focus returns to the trigger and body scroll is restored.
- **No new dependencies.** Pan/zoom and transitions use React state plus native CSS transitions; no third-party lightbox library.

## Risks / Trade-offs

- [Multiple always-rendered overlays] One inert (`aria-hidden`, `pointer-events: none`, opacity 0) overlay exists per figure. Trade-off: negligible extra DOM nodes in exchange for zero unmount timing bugs and consistent enter/exit animation.
- [Touch pan vs. native slider] The drag guard prevents pan on interactive targets, but a drag that begins on the image and moves onto a control is an edge case left as acceptable behavior.
- [Reduced motion] When `prefers-reduced-motion` is set, transitions are omitted entirely; the viewer appears and disappears instantly.

## Migration Plan

- Apply component text fixes (AWD → water-level; 4× → N configurable) alongside the lightbox integration.
- Build and lint the project; verify 0 errors / 0 warnings.
- Archive the OpenSpec change and sync deltas to the main spec set.

## Open Questions

- None.
