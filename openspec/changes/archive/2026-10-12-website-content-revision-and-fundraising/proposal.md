# Proposal: Website Content Revision, Diagram Zoom, and Deployment Fundraising

## Why

The ArvaCore whitepaper website requires a focused revision to accurately reflect the current project direction and presentation standards:
1. Specific institutional and academic metadata (e.g. `PUP BSCoE Research Monograph (Sept 2026)`, Faculty reference, thesis PDF download buttons, obsolete population statistics $N=3,418$ and $n=346$, Table 1 Likert matrix, and author listing for James Lester B. Colle) must be removed.
2. Jenice Nicole C. Ramirez must be given greater prominence in the research presentation.
3. The Alternate Wetting and Drying (AWD) methodology is no longer the current operating framework. Terminology must transition to smart agricultural monitoring, water-level sensing, and sensor-informed irrigation management.
4. The fixed node count (`4× ESP32`) must become dynamic and configurable (`N field nodes`).
5. All technical diagrams must be enlargable, zoomable, draggable/pannable, and touch/keyboard accessible in a high-fidelity lightbox view.
6. A new substantial section titled "What ArvaCore Could Make Possible" (Expected Benefits & Project Value) must be added across four balanced categories.
7. A dedicated, transparent prototype deployment fundraising section must be added with an itemized budget totaling ₱18,000 against the ₱15,000–₱20,000 target.

## What Changes

- **Content & Metadata Cleanup**:
  - Remove all PDF download buttons, localhost PDF links, Faculty of Computer Engineering mentions, and monograph text.
  - Remove author James Lester B. Colle. Prominently feature Jenice Nicole C. Ramirez as the Lead Research Investigator alongside Pranz Gabrielle N. Capucion and Gladwin Ferdz I. Del Rosario.
  - Rename the opening section from Abstract to **Project Overview** with a natural 5-step problem-to-prototype progression.
  - Generalize research methodology into a high-level **Evaluation Approach** without raw survey questions or fixed Cochran counts.
  - Remove standalone References and Institutional Colophon sections.
- **Terminology Shift from AWD to Smart Agricultural Monitoring**:
  - Replace AWD assertions across hero, navigation, diagram exhibits, and sections with smart irrigation monitoring, water-level sensing, and sensor-informed management.
- **Dynamic Node Architecture**:
  - Update all diagrams, cards, and labels from "4× ESP32" to "Configurable N Field Monitoring Nodes".
- **Interactive Diagram Lightbox & Zoom**:
  - Implement a reusable `DiagramLightbox` modal with zoom-in/out, drag-to-pan, fit-to-screen, touch-friendly pinch/drag, and Escape/focus-trapped keyboard navigation across all key diagrams.
- **New Expected Benefits Section**:
  - Add "What ArvaCore Could Make Possible" covering farmer benefits, environmental potential, irrigation community coordination, and scientific/research value.
- **Dedicated Deployment Fundraising Appeal**:
  - Add "Help Bring ArvaCore to the Field" featuring the verified ₱4,426 itemized subtotal (ArvaNode ₱1,016, ArvaNet ₱3,410) and an itemized preliminary deployment budget totaling exactly ₱18,000 towards the ₱15,000–₱20,000 goal for Barangay Silang, Lopez, Quezon.

## Capabilities

### Modified Capabilities
- `whitepaper-editorial-publication`: Revise editorial flow from research thesis monograph to smart agricultural whitepaper, replacing AWD framing with smart water management, removing PDF downloads and obsolete stats, and elevating Jenice Nicole C. Ramirez.
- `interactive-system-architecture`: Make field node representation dynamic (`N nodes`), and integrate click-to-enlarge lightbox with pan/zoom controls.
- `awd-simulation-and-process-flow`: Reframe as closed-loop water management & threshold simulation with zoomable flowchart and dynamic node updates.
- `reading-navigation-and-telemetry`: Update chapter links to reflect revised narrative acts, benefits, and deployment funding.

## Impact
- **Codebase**: Updates `lib/whitepaper-data.ts`, `app/page.tsx`, `app/layout.tsx`, `components/navigation/`, `components/hero/`, `components/sections/`, and `components/exhibits/`.
- **Dependencies**: No external dependencies added; zoom and pan implemented cleanly in React/SVG.
- **Build**: Maintains 0 errors, 0 warnings across `npm run lint` and `npm run build`.

