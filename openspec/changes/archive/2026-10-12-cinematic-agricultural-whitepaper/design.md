# Technical Design: Cinematic Agricultural Engineering Whitepaper

## Context

The thesis *"ARVACORE: An IoT-Based Irrigation Monitoring and Automated Water Management System for Rice Cultivation"* (Polytechnic University of the Philippines, 2026) investigates automated Alternate Wetting and Drying (AWD) water management for irrigated rice in Barangay Silang, Lopez, Quezon. The repository is configured with Next.js 16.4.0, React 19.3.0, TypeScript 5, and Tailwind CSS v4.

This design document formalizes the complete architectural blueprint, design system, data contracts, motion specifications, and responsive layout strategies for translating the 60-page research thesis into an authentic, documentary-grade digital monograph.

---

## Goals / Non-Goals

### Goals
- Structure the long-form website according to the authoritative research chapters discovered in the PDF, avoiding marketing fluff and generic SaaS cards.
- Implement an authentic, responsive SVG **Farm-to-Digital-System Architecture Diagram** (Thesis Figure 3) with an explicit data model, interactive node selection, animated signal/fluid paths, and mobile vertical card-stack decomposition.
- Recreate the **Process Flowchart** (Thesis Figure 2) synchronized with an interactive AWD water-level slider ($-15\text{ cm}$ to $+5\text{ cm}$) demonstrating closed-loop pump actuation and in-line flow verification.
- Recreate the **Conceptual Framework** (Thesis Figure 1) using the 3-phase Input-Process-Output paradigm.
- Maintain strict content fidelity for all quantitative research parameters: target population of $3,418$ farmers in Lopez, Quezon; Cochran sample size ($n = 346$); sensor error tolerance ($\pm 5\%$); activation accuracy ($\ge 95\%$ over 20 trials); response time ceiling ($\le 30\text{ s}$); flow sensor MAPE over 10 trials; and the 4-pillar TAM Likert scale (Table 1, Appendix A).
- Ground all citations with the complete 24-entry bibliography and direct links.
- Deliver full accessibility (WCAG AAA contrast, semantic ARIA, keyboard navigation, and complete `prefers-reduced-motion` compliance).

### Non-Goals
- Fabricating empirical field evaluation tables or survey response percentages that do not exist in Chapters 1–3 of the source proposal.
- Introducing heavy WebGL/Three.js 3D runtimes or animation libraries that inflate bundle size and compromise mobile battery life.
- Altering the Next.js/Tailwind core build configuration.

---

## A. Page Architecture & Section Layouts

The website is architected into 7 distinct research acts mirroring the thesis section hierarchy:

```
┌────────────────────────────────────────────────────────────────────────┐
│ STICKY READING HEADER (Title • Active Chapter • Progress Bar • TOC)     │
├────────────────────────────────────────────────────────────────────────┤
│ ACT 0: PROLOGUE & EDITORIAL HERO                                       │
│ Layout: Full-width atmospheric hero with ambient field telemetry       │
│ Content: PUP Affiliation, Full Thesis Title, Authors, Abstract, Venue  │
├────────────────────────────────────────────────────────────────────────┤
│ ACT 1: AGRONOMIC CONTEXT & PROBLEM SETTING (Chapter 1)                 │
│ Layout: Split-column editorial (Text analysis + Paddy Cross-Section)   │
│ Content: Conventional CF vs. Safe AWD, Water Strain, Lopez Demographics│
├────────────────────────────────────────────────────────────────────────┤
│ ACT 2: PHYSICAL DOMAIN & FIELD MONITORING NODES (Chapter 1 & 3)        │
│ Layout: Multi-column hardware exhibit                                  │
│ Content: 4× ESP32 Nodes, Ultrasonic Echo Sensing, Soil Moisture Probes │
├────────────────────────────────────────────────────────────────────────┤
│ ACT 3: FARM-TO-DIGITAL SYSTEM ARCHITECTURE (Figure 3)                  │
│ Layout: Full-width interactive technical schematic                     │
│ Content: Interactive SVG (Nodes ↔ Gateway ↔ Server ↔ Dashboard ↔ Pump) │
│ Mobile: Decomposes into responsive vertical pipeline                   │
├────────────────────────────────────────────────────────────────────────┤
│ ACT 4: CLOSED-LOOP DECISION DYNAMICS & SIMULATION (Figure 2)           │
│ Layout: Split layout (Interactive Flowchart SVG + Live AWD Simulator)   │
│ Content: Water Depth Slider (-15cm to +5cm), Pump Trigger, Flow Verif. │
├────────────────────────────────────────────────────────────────────────┤
│ ACT 5: VALIDATION PROTOCOLS & ACCEPTABILITY FRAMEWORK (Chapter 3)       │
│ Layout: Dual-card engineering matrices + Table 1 TAM Exhibit           │
│ Content: ±5% tolerance, 95% accuracy, 30s response, Table 1 TAM scale  │
├────────────────────────────────────────────────────────────────────────┤
│ ACT 6: BIBLIOGRAPHY, APPENDICES & COLOPHON (References & Appendix A)   │
│ Layout: Split editorial reference list + Academic Colophon             │
│ Content: 24 APA 7th Citations, Survey Instrument, PUP Authors          │
└────────────────────────────────────────────────────────────────────────┘
```

### Layout Classification:
1. **Full-Width Visual Scenes**:
   - *Prologue & Hero*: Immersive paddy atmosphere, coordinates (`13.882° N, 122.062° E`), and live environmental telemetry.
   - *System Architecture*: Expansive vector canvas for Figure 3 with dedicated component inspection workbench.
2. **Split-Column Editorial Layouts**:
   - *Agronomic Context*: Left column for scholarly prose; right column for interactive soil-water cross-section diagram.
   - *Closed-Loop Decision Logic*: Left column for interactive Process Flowchart; right column for real-time AWD water-depth simulation slider.
   - *Validation & TAM Framework*: Left column for statistical benchmarking formulas ($MAPE$, Cochran $n=346$); right column for the 4-pillar TAM Likert questionnaire matrix.
   - *References & Colophon*: Structured citation explorer with search/filter tags.

---

## B. Design System Specifications

### 1. Color Palette Tokens
Defined as CSS custom properties in `app/globals.css`:
- **Paddy Soil Peat (`--color-soil-950`)**: `#0B130E` (Primary dark background)
- **Paddy Earth Surface (`--color-soil-900`)**: `#121E16` (Card and panel backgrounds)
- **Paddy Earth Border (`--color-soil-800`)**: `#1F3326` (Subtle container outlines)
- **Rice Canopy Green (`--color-rice-500`)**: `#10B981` (Primary system accent, normal status)
- **Rice Leaf Highlight (`--color-rice-400`)**: `#34D399` (Active node highlights, links)
- **Hydrological Cyan (`--color-water-500`)**: `#0EA5E9` (Water level indicators, ultrasonic pulses)
- **Water Shimmer (`--color-water-400`)**: `#38BDF8` (Flow sensor streams, active pumping)
- **Husk Amber (`--color-husk-500`)**: `#F59E0B` (AWD drying threshold trigger, warnings)
- **Editorial Paper White (`--color-text-main`)**: `#F8FAFC` (High-contrast academic prose)
- **Editorial Silt Gray (`--color-text-muted`)**: `#94A3B8` (Captions, footnotes, hardware specs)
- **Grid / Technical Mesh (`--color-grid-line`)**: `rgba(16, 185, 129, 0.07)` (Background schematic grid)

### 2. Typography Hierarchy
- **Display Serif / Academic Headers**: Clean high-contrast font styling (`Geist Sans` with semi-bold tracking or editorial serif accents for titles).
- **Body Text**: `var(--font-geist-sans)`, 16px/1.75 line-height for effortless reading of long-form academic prose.
- **Technical & Telemetry Labels**: `var(--font-geist-mono)`, uppercase 12px/1.4 line-height with tabular numbers (`tnum`) for sensor values, error metrics, and latencies.

### 3. Figure and Caption Styling
- All figures framed in an engineering enclosure with coordinate ticks and thin border (`--color-soil-800`).
- Captions positioned below figures with standardized labeling: `FIGURE [N]. [TITLE] — [DESCRIPTION]`, styled in 13px mono-slate with direct cross-references to the thesis page number.

### 4. Accessibility & Motion Rules
- Contrast ratio strictly exceeds $7:1$ for body prose and $4.5:1$ for technical badges (WCAG AAA/AA).
- When `prefers-reduced-motion` is detected:
  - All SVG stroke dash-array animations pause immediately.
  - Transitions switch to instantaneous opacity changes without translation or scale spring physics.
  - Audio/ambient effects remain entirely absent.

---

## C. Main SVG Architecture Diagram Specification (Thesis Figure 3)

### 1. Data Model: Components (`DiagramComponent[]`)

```typescript
export interface DiagramComponent {
  id: string;
  label: string;
  technicalRole: string;
  category: 'field-sensing' | 'network' | 'processing' | 'user' | 'actuation';
  sourcePageRef: string;
  description: string;
  subcomponents?: string[];
  coordinates: { x: number; y: number; width: number; height: number };
}
```

#### Grounded Component Registry:
1. **`node-cluster`** (*Field-Monitoring Nodes*):
   - Category: `field-sensing` | Page 47, Fig 3
   - Subcomponents: 4× ESP32 Microcontrollers, 4× Ultrasonic Water-Level Sensors, 4× Soil-Moisture Sensors, Built-in Wi-Fi Modules.
   - Role: Independent modular nodes collecting surface distance and volumetric root-zone water content across the paddy.
2. **`gateway`** (*IoT Communication Gateway*):
   - Category: `network` | Page 20, 48, Fig 3
   - Role: Wireless communication intermediary receiving 802.11 Wi-Fi frames from ESP32 nodes and forwarding payloads over Internet backhaul.
3. **`application-server`** (*Cloud Processing Server*):
   - Category: `processing` | Page 48–49, Fig 3
   - Subcomponents: Data Processing & Node Identification Engine, System Database (time-series logging), AWD Threshold Evaluation Engine.
   - Role: Identifies measurements by node ID, maintains persistence, compares field conditions to AWD thresholds, and issues pump commands.
4. **`web-dashboard`** (*ArvaCore Web-Based Dashboard*):
   - Category: `user` | Page 48, Fig 3
   - Role: Remote visualization interface presenting real-time water elevation, soil saturation, and historical trends to the farmer/operator.
5. **`user-operator`** (*Farmer / System Operator*):
   - Category: `user` | Page 48, Fig 3
   - Role: Observes field conditions remotely, eliminating the need for frequent manual field visits.
6. **`irrigation-actuator`** (*Centralized Irrigation Mechanism*):
   - Category: `actuation` | Page 49, Fig 3
   - Subcomponents: Relay/Pump Controller, Submersible/Surface Water Pump.
   - Role: Controlled water delivery into the paddy irrigation line upon receiving server command.
7. **`flow-sensor`** (*In-Line Water Flow Sensor*):
   - Category: `actuation` | Page 49, Fig 3
   - Role: Measures volume passing through the irrigation line; verifies physical delivery during active pumping and detects leaks/unintended flow when idle.

### 2. Data Model: Connections (`DiagramConnection[]`)

```typescript
export interface DiagramConnection {
  id: string;
  sourceId: string;
  targetId: string;
  label: string;
  type: 'wireless' | 'internet' | 'data' | 'control' | 'hydraulic';
  animated: boolean;
  bidirectional?: boolean;
}
```

#### Grounded Relationships:
1. `field-conditions` $\rightarrow$ `node-cluster`: Physical water level & soil moisture sensing.
2. `node-cluster` $\rightarrow$ `gateway`: Wi-Fi wireless data packets (2.4 GHz).
3. `gateway` $\rightarrow$ `application-server`: Internet IP connection.
4. `application-server` $\leftrightarrow$ `web-dashboard`: Bi-directional HTTP/WebSocket monitoring & configuration telemetry.
5. `web-dashboard` $\leftrightarrow$ `user-operator`: Remote observation & manual override/auditing.
6. `application-server` $\rightarrow$ `irrigation-actuator`: Irrigation-Control Command (Start/Stop pump).
7. `irrigation-actuator` $\rightarrow$ `flow-sensor`: Pressurized water delivery through irrigation line.
8. `flow-sensor` $\rightarrow$ `application-server`: Real-time volumetric flow feedback pulses (Verification loop).
9. `node-cluster` $\rightarrow$ `field-conditions`: Ongoing monitoring of rising water table during active irrigation.

### 3. Responsive Decompositions & Mobile Layout
- **Desktop ($\ge 768\text{ px}$)**: Wide 1200×650 SVG viewBox with 3 distinct architectural bands: *Physical Agricultural Field* (Left/Top), *Cloud Infrastructure & Dashboard* (Center), and *Centralized Actuation & Hydraulic Loop* (Right).
- **Mobile ($< 768\text{ px}$)**: Automatically replaces SVG spatial matrix with a structured vertical pipeline of cards (`ArchitectureMobileStack.tsx`) connected by clean SVG connector lines with tap-to-inspect drawers.

---

## D. Content & Data Model

Content is completely extracted from the authoritative PDF and stored in dedicated TypeScript files:

1. **`lib/types.ts`**: Formal data structures for all components, citations, survey items, and simulation parameters.
2. **`lib/whitepaper-data.ts`**:
   - `THESIS_METADATA`: Exact title, PUP institutional details, 4 authors, defense date, Lopez Quezon coordinates.
   - `SOIL_WATER_METRICS`: Safe AWD parameters ($-15\text{ cm}$ drying threshold, $+5\text{ cm}$ re-flood target).
   - `METHODOLOGY_DATA`: Population ($3,418$), Cochran formula terms ($p=0.5, z=1.96, e=0.05$), sample size ($n=346$), purposive sampling rationale.
   - `ENGINEERING_BENCHMARKS`: Error tolerance ($\pm 5\%$), activation accuracy ($\ge 95\%$), response time ($\le 30\text{ s}$), flow MAPE formula ($MAPE = \frac{1}{n} \sum |\frac{Actual - Recorded}{Actual}| \times 100$).
   - `TAM_QUESTIONNAIRE`: All 20 items from Appendix A grouped across Functionality, Reliability, Usability, and Efficiency with Table 1 weighted mean interpretations.
3. **`lib/bibliography-data.ts`**: All 24 APA 7th scholarly citations with titles, authors, years, publications, and clickable DOIs.

---

## E. Motion Specification

| Moment | Visual Effect | Trigger | Duration / Easing | Reduced Motion Fallback |
| :--- | :--- | :--- | :--- | :--- |
| **1. Hero Introduction** | Subtle ambient field coordinates fade in; atmospheric mist layer drift | Page Load | $1200\text{ ms}$, ease-out | Immediate static rendering |
| **2. Field-Measurement Reveal** | Paddy cross-section lines illuminate; ultrasonic echo path draws | Intersection Observer ($0.3$ visibility) | $800\text{ ms}$, cubic-bezier(0.16, 1, 0.3, 1) | Instant display of static diagram |
| **3. Sensor-to-Software Data Journey** | Animated SVG dash pulses traverse node $\rightarrow$ gateway $\rightarrow$ server line | Continuous loop (toggled by user) | $2000\text{ ms}$ linear cycle | Static directional arrows |
| **4. Architecture Component Inspection** | Selected component bounding box highlights with emerald glow; sidebar slides | User click or Enter key | $250\text{ ms}$, ease-out | Instant selection highlight without slide |
| **5. AWD Simulation Transition** | Flow meter spins, pump glows emerald, water level smoothly animates | Slider scrub | Synchronous with user drag ($0\text{ ms}$ lag) | Immediate state updates |
| **6. Reading Progress** | Top hairline bar width increases proportionally with scroll depth | Window scroll | $16\text{ ms}$ (requestAnimationFrame) | Standard browser scrollbar |

---

## F. Validation & QA Strategy

1. **Content Fidelity**: Cross-validate every figure, equation, author name, and benchmark against the extracted `/tmp/arvacore_text.txt`.
2. **Interactive Diagram Correctness**: Ensure every component and connection matches Thesis Figure 3 with zero invented paths.
3. **Responsive Breakpoints**: Test at $375\text{ px}$ (iPhone SE), $768\text{ px}$ (iPad), $1024\text{ px}$ (iPad Pro), and $1440\text{ px}$ (Desktop).
4. **Keyboard Accessibility**: Verify all interactive elements (TOC drawer, node selection, simulation slider) are fully navigable via `Tab`, `Space`, `Enter`, and Arrow keys.
5. **Reduced Motion**: Verify that toggling `prefers-reduced-motion: reduce` completely pauses all continuous loops.
6. **Build Integrity**: Ensure `npm run lint` and `npm run build` succeed with zero errors.
