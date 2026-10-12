## 1. Project & Asset Preparation

- [x] 1.1 Copy the authoritative thesis PDF from `/home/gladwin/Documents/pagaaral/arvacore/ARVACORE.pdf` into `public/ARVACORE.pdf` and verify it serves with HTTP 200.
- [x] 1.2 Define strict TypeScript domain models in `lib/types.ts` for all diagram components, connections, AWD simulation parameters, validation metrics, and bibliography entries.
- [x] 1.3 Compile and export complete thesis datasets in `lib/whitepaper-data.ts`, including institutional metadata, author roster, Lopez Quezon demographic metrics ($N=3,418$, Cochran $n=346$), research formulas, engineering benchmarks ($\pm 5\%$, $\ge 95\%$, $\le 30\text{ s}$, MAPE), and the 20-item TAM survey matrix from Appendix A.
- [x] 1.4 Compile and export the complete 24-entry APA 7th bibliography in `lib/bibliography-data.ts` with verified DOIs and URLs.

## 2. Design Tokens & Typography

- [x] 2.1 Configure design tokens, CSS custom properties (`--color-soil-950`, `--color-rice-500`, `--color-water-500`, `--color-husk-500`), and dark-theme agricultural background mesh in `app/globals.css`.
- [x] 2.2 Configure editorial typography hierarchy, tabular monospace telemetry styling, and custom reading scrollbars in `app/globals.css`.
- [x] 2.3 Implement CSS reduced-motion overrides (`@media (prefers-reduced-motion: reduce)`) disabling transitions and path animations across the application.

## 3. Page Shell, Navigation & Reading Progress

- [x] 3.1 Implement persistent floating `ReadingHeader.tsx` featuring the paper title, active chapter indicator, TOC button, and responsive scroll progress bar.
- [x] 3.2 Implement accessible `TableOfContentsDrawer.tsx` allowing instant section jumping with keyboard navigation, Esc key close, and focus trapping.
- [x] 3.3 Create reusable editorial UI primitives: `TelemetryBadge.tsx`, `FigureFrame.tsx` (with coordinate ticks), and `CitationCard.tsx`.

## 4. Content Extraction & Chapter Implementation

- [x] 4.1 Implement `AcademicHero.tsx` presenting the formal title, PUP affiliation, author list, defense date, geographical coordinates, and live ambient telemetry ticker.
- [x] 4.2 Implement `AgronomicContextSection.tsx` explaining conventional continuous flooding vs. Alternate Wetting and Drying (AWD), water resource stress, and the Barangay Silang, Lopez, Quezon study setting.
- [x] 4.3 Implement `PhysicalNodesSection.tsx` detailing the 4 distributed field nodes, ESP32 microcontrollers, ultrasonic echo distance sensing, and root-zone soil moisture probes.
- [x] 4.4 Implement `ValidationTAMSection.tsx` detailing the quantitative descriptive-developmental methodology, Cochran sampling calculation, sensor benchmark criteria, and the 4-pillar TAM Likert questionnaire (Table 1).
- [x] 4.5 Implement `ReferencesColophonSection.tsx` displaying the complete 24-entry bibliography and research author profiles.

## 5. Agricultural Visual Assets & Supporting Figures

- [x] 5.1 Implement `ConceptualFrameworkSvg.tsx` faithfully recreating Thesis Figure 1 (Input-Process-Output paradigm) with corrected ArvaCore nomenclature.
- [x] 5.2 Implement an interactive Paddy Soil Cross-Section illustration showing perched water table depth, rice root depth, and sensor probe placement.

## 6. Interactive SVG System Architecture

- [x] 6.1 Implement `ArchitectureDiagramSvg.tsx` faithfully recreating Thesis Figure 3 (ArvaCore System Block Diagram) with full SVG component nodes, Wi-Fi links, gateway, server, dashboard, pump, and flow sensor.
- [x] 6.2 Implement interactive component selection state in `ArchitectureDiagramSvg.tsx` with sidebar inspection of technical specs, hardware roles, and data relationships.
- [x] 6.3 Implement `ArchitectureMobileStack.tsx` providing an accessible vertical card-flow decomposition for mobile viewports ($< 768\text{ px}$).
- [x] 6.4 Implement animated SVG data-flow dashes and hydraulic stream paths with a user-facing toggle.

## 7. Evidence-Based Charts & Methodology Diagrams

- [x] 7.1 Implement `ProcessFlowchartSvg.tsx` faithfully recreating Thesis Figure 2 (ArvaCore Process Flowchart) with vector nodes and decision branches.
- [x] 7.2 Implement `AwdSimulationWidget.tsx` featuring an interactive water-depth slider ($-15\text{ cm}$ to $+5\text{ cm}$), real-time pump activation, flow sensor pulse verification, and active node synchronization.
- [x] 7.3 Synchronize state between the `AwdSimulationWidget.tsx` and the `ProcessFlowchartSvg.tsx` so dragging the slider visually illuminates active decision paths.

## 8. Cinematic Motion & Transitions

- [x] 8.1 Add intersection-observer scroll triggers to smoothly reveal chapter headings and telemetry panels.
- [x] 8.2 Add fluid water-level transition animations to the paddy simulation cross-section.
- [x] 8.3 Verify all motion elements completely freeze into clean static states when `prefers-reduced-motion` is enabled.

## 9. Responsive & Accessibility Refinements

- [x] 9.1 Audit and refine responsive layouts across mobile ($375\text{ px}$), tablet ($768\text{ px}$), and wide desktop ($1440\text{ px}$) screens.
- [x] 9.2 Add full keyboard navigation support (`Tab`, `Enter`, `Escape`, Arrow keys) across all interactive diagrams, drawers, and simulation sliders.
- [x] 9.3 Perform WCAG contrast verification ensuring all text meets AAA/AA compliance against dark agricultural backgrounds.

## 10. SEO, PDF Handling & Final Validation

- [x] 10.1 Configure comprehensive SEO metadata, Open Graph cards, structured schema, and academic tags in `app/layout.tsx`.
- [x] 10.2 Wire up the "Download / View Thesis PDF" action to `public/ARVACORE.pdf` with metadata pills (60 pages, PUP 2026).
- [x] 10.3 Run `npm run lint` and `npm run build` to verify clean production compilation with zero errors or broken links.
