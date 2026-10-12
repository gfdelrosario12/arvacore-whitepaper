# Proposal: Cinematic Agricultural Whitepaper Website

## Why

The thesis research *"ARVACORE: An IoT-Based Irrigation Monitoring and Automated Water Management System for Rice Cultivation"* (Polytechnic University of the Philippines, 2026) addresses critical freshwater conservation and labor inefficiencies in Philippine rice farming through Alternate Wetting and Drying (AWD). Currently, the codebase is an unconfigured, default Next.js starter without research content or interactive technical exhibits. 

This change transforms the repository into a premier, cinematic, interactive agricultural engineering whitepaper website that conveys the exact hardware architecture, agronomic principles, and empirical evaluation protocols documented in the thesis without generic SaaS tropes or unsubstantiated technical claims.

## What Changes

- Transform the Next.js landing page (`app/page.tsx`, `app/layout.tsx`, `app/globals.css`) into a responsive, long-form editorial publication structured across six research acts.
- Introduce an interactive agricultural hero featuring the authoritative title, institutional provenance, and dynamic field telemetry ambient displays.
- Implement a floating sticky reading header with section-level jump navigation, active section tracking, and reading progress indicators.
- Build a signature, custom SVG-based **Farm-to-Digital-System Architecture Diagram** faithfully mapping the 4 distributed ESP32 monitoring nodes, built-in Wi-Fi, gateway intermediary, cloud application server, database, web dashboard, and centralized irrigation mechanism with flow sensor verification (from thesis Figure 3).
- Recreate interactive diagrams for the **Process Flowchart** (Figure 2) with a live AWD drying/flooding water-level threshold simulation widget, and the **Conceptual Framework** (Figure 1).
- Present an empirical **Validation Benchmarks and Acceptability Framework** displaying the sensor error tolerance ($\pm 5\%$), activation accuracy ($\ge 95\%$), response time standard ($\le 30\text{ s}$), flow measurement MAPE across 10 events, and the 4-pillar TAM Likert questionnaire (Table 1, Appendix A).
- Provide complete bibliographic referencing (24 APA 7th entries) and research team colophon with direct access to inspectable thesis documentation.
- Maintain full accessibility compliance, WCAG contrast standards, reduced-motion preferences, and production build health using the existing Next.js, React 19, TypeScript, and Tailwind CSS v4 stack.

## Capabilities

### New Capabilities

- `whitepaper-editorial-publication`: Structured long-form research presentation covering the thesis prologue, agronomic context (AWD), study location (Barangay Silang, Lopez, Quezon), population sampling ($N=3,418$, Cochran $n=346$), evaluation benchmarks, and complete 24-entry bibliography.
- `interactive-system-architecture`: Custom, responsive, accessible SVG-based Farm-to-Digital-System diagram with component inspection, animated signal/water flow paths, and responsive mobile card-stack transformation.
- `awd-simulation-and-process-flow`: Interactive recreation of Figure 2 (Process Flowchart) paired with an interactive AWD water-level simulation tool allowing users to scrub water levels between $+5\text{ cm}$ and $-15\text{ cm}$ to observe automated pump triggering, flow verification, and deactivation.
- `reading-navigation-and-telemetry`: Persistent reading control system providing scroll progress tracking, active section highlights, rapid table-of-contents drawer/menu, and accessible reduced-motion support.

### Modified Capabilities

<!-- Existing capabilities whose REQUIREMENTS are changing. Leave empty as there are no existing specs in openspec/specs/. -->

## Impact

- **Codebase**: Replaces default Next.js boilerplate in `app/page.tsx` and customizes `app/layout.tsx` and `app/globals.css` with thematic agricultural styling tokens.
- **Dependencies**: Operates entirely within existing installed dependencies (`next`, `react`, `react-dom`, `tailwindcss`, `typescript`, `@tailwindcss/turbopack`). Zero extraneous runtime libraries required.
- **Performance & Build**: Clean static rendering with client-side interactive islands, optimized SVG geometry, zero layout shift, and passing `next build` / `eslint`.

