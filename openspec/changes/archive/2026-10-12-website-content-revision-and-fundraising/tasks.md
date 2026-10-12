# Tasks: Website Content Revision, Diagram Zoom, and Deployment Fundraising

## 1. Content Audit & Data Model Updates
- [x] 1.1 Update `lib/whitepaper-data.ts`:
  - Remove James Lester B. Colle. Feature Jenice Nicole C. Ramirez as Lead Investigator alongside Pranz Gabrielle N. Capucion and Gladwin Ferdz I. Del Rosario.
  - Remove fixed population `3,418` and Cochran sample `n = 346`.
  - Replace AWD terminology with smart agricultural monitoring, water-level sensing, and sensor-informed irrigation control.
  - Make node count dynamic (`N Field Nodes`).
  - Add preliminary budget data totaling ₱18,000 (preserving ArvaNode ₱1,016, ArvaNet ₱3,410, itemized subtotal ₱4,426).
  - Add "What ArvaCore Could Make Possible" benefits dataset across 4 categories.
- [x] 1.2 Update `app/layout.tsx`: Remove references to AWD, James Lester B. Colle, and thesis PDF citations.

## 2. Interactive Diagram Zoom & Lightbox
- [x] 2.1 Implement `components/ui/DiagramLightbox.tsx`: Modal overlay with click-to-enlarge, zoom in/out (+/-), reset view, drag-to-pan, touch dragging, Escape key close, and background scroll lock.
- [x] 2.2 Equip `FigureFrame.tsx` with an enlarge button that opens the diagram in `DiagramLightbox.tsx`.
- [x] 2.3 Verify all technical diagrams (Architecture Diagram, Process Flowchart, Conceptual Framework, Paddy Cross-Section) can be enlarged and inspected with full zoom and pan.

## 3. Component Revisions & Content Cleansing
- [x] 3.1 Update `components/hero/AcademicHero.tsx`:
  - Rename/reframe opening as Project Overview.
  - Remove `PUP BSCoE Research Monograph (Sept 2026)`, PDF download button, `4× ESP32` (change to `N Field Nodes`), municipal farmer count, and Cochran sample.
  - Highlight Jenice Nicole C. Ramirez prominently.
- [x] 3.2 Update `components/sections/AgronomicContextSection.tsx`:
  - Reframe from AWD-centric to smart irrigation monitoring and field-level sensing.
  - Remove AWD-specific claims while retaining the agricultural water challenge.
- [x] 3.3 Update `components/sections/PhysicalNodesSection.tsx`:
  - Replace "4× Distributed Monitoring Nodes" with dynamic, configurable $N$ sensor nodes.
- [x] 3.4 Update `components/exhibits/ArchitectureDiagramSvg.tsx`, `ArchitectureMobileStack.tsx`, and `ArchitectureVisualizer.tsx`:
  - Replace fixed 4 nodes with configurable $N$ field nodes.
  - Replace AWD terminology with sensor-informed water elevation thresholding.
- [x] 3.5 Update `components/sections/DecisionLogicSection.tsx`, `AwdSimulationWidget.tsx`, and `ProcessFlowchartSvg.tsx`:
  - Reframe as smart irrigation decision dynamics and water-level threshold simulation.
- [x] 3.6 Replace `ValidationTAMSection.tsx` with a simplified `EvaluationApproachSection.tsx`:
  - Remove `POPULATION & SAMPLING PROCEDURE`, `TABLE 1: LIKERT WEIGHTED MEAN SCALE`, and individual survey questions.
  - Summarize evaluation pillars at a high level.
- [x] 3.7 Replace `ReferencesColophonSection.tsx` with:
  - `ExpectedBenefitsSection.tsx`: "What ArvaCore Could Make Possible" across 4 balanced categories.
  - `FundraisingSection.tsx`: "Help Bring ArvaCore to the Field" with the ₱18,000 preliminary budget and clear calls to action.
- [x] 3.8 Update `components/navigation/ReadingHeader.tsx` and `TableOfContentsDrawer.tsx`:
  - Update navigation anchors to match the revised sections.
  - Remove PDF download links and obsolete colophon references.

## 4. Page Integration & Verification
- [x] 4.1 Update `app/page.tsx` with the new narrative progression and sections.
- [x] 4.2 Run `npm run lint` and `npm run build` to verify clean compilation with 0 errors and 0 warnings.
- [x] 4.3 Verify responsive behavior on desktop, tablet, and mobile.
- [x] 4.4 Update OpenSpec specs and archive the completed change.

