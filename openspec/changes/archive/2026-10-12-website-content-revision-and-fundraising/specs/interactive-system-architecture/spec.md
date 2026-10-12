## ADDED Requirements

### Requirement: Diagram Lightbox Enlargement and Inspection
The system SHALL present any technical diagram in a centered, dark-overlay lightbox when the user activates the figure's "Enlarge & Zoom" control. The lightbox SHALL preserve the diagram's original aspect ratio, prevent viewport overflow or unintended cropping, and keep the figure title and number visible in a control bar. Clicking the image area SHALL NOT dismiss the viewer.

#### Scenario: User opens a diagram in the lightbox
- **WHEN** the user clicks the "Enlarge & Zoom" button on a figure frame
- **THEN** the system overlays the diagram in a centered dark viewer (without navigating away) and traps focus on the close control so the underlying page remains inert.

#### Scenario: User zooms and pans the enlarged diagram
- **WHEN** the user clicks the +/− zoom buttons, the Reset control, or drag-pan the diagram (with a single-finger drag on touch)
- **THEN** the diagram scales in precise 25% steps (0.5x–3.5x) and pans freely, with interactive controls inside the viewer continuing to operate normally.

### Requirement: Backdrop, Keyboard, and Focus-Backed Lightbox Dismissal
The system SHALL dismiss the lightbox only when the user clicks the backdrop outside the content area, presses Escape, or clicks the visible close button. Dismissal SHALL restore the previous scroll position, restore focus to the triggering figure control, and re-enable page scrolling.

#### Scenario: User dismisses the lightbox
- **WHEN** the user clicks the backdrop, clicks Close, or presses Escape
- **THEN** the viewer fades and scales out, focus returns to the Enlarge & Zoom control, and the page scroll position is unchanged.

## MODIFIED Requirements

### Requirement: Authentic Farm-to-Digital Architecture Visualization
The system SHALL provide an interactive SVG-based architectural schematic faithful to Thesis Figure 3 (ArvaCore System Block Diagram), detailing the exact documented relationships between the physical rice field, the N modular configurable field-monitoring nodes, microcontrollers, ultrasonic water-level sensors, soil moisture sensors, Wi-Fi communication links, the gateway intermediary, cloud application server, database, web dashboard, user operator, and centralized irrigation mechanism with flow sensor verification.

#### Scenario: Desktop view of architecture diagram
- **WHEN** viewed on a desktop or tablet viewport
- **THEN** the system renders a high-definition SVG schematic showing the complete physical-to-cloud-to-actuator loop with directional signal/water indicators and active node connections.

### Requirement: Interactive Component Inspection
The system SHALL allow users to select or hover over any architecture component (such as an individual Field-Monitoring Node, Gateway, Application Server, Centralized Pump, or Flow Sensor) to reveal authoritative technical specifications, hardware roles, and data-flow responsibilities documented in the thesis.

#### Scenario: User clicks on an ESP32 Field-Monitoring Node
- **WHEN** the user selects a field-monitoring node in the interactive diagram
- **THEN** the detail panel updates to display its components (microcontroller, ultrasonic water-level sensor, soil moisture sensor, wireless link), sensing function, and transmission behavior to the gateway.

#### Scenario: User clicks on Centralized Flow Sensor
- **WHEN** the user selects the "Flow Sensor" component
- **THEN** the detail panel explains its dual role: verifying commanded water delivery during pump operation and detecting unintended flow or leakage when the pump is idle.

### Requirement: Animated Technical Data and Water Paths
The system SHALL render subtle, toggleable signal pulses along the Wi-Fi/Internet pathways and animated fluid stream indications along the irrigation delivery line when water flow is simulated, freezing into static indicators when the user prefers reduced motion.

#### Scenario: Active telemetry flow animation
- **WHEN** animations are enabled
- **THEN** SVG stroke dashes smoothly traverse communication pathways between field nodes, gateway, and server to visually communicate packet transmission without causing visual distraction.

### Requirement: Responsive Mobile Vertical Decomposition
The system SHALL gracefully decompose the multi-tier architectural diagram into a structured, readable vertical pipeline on narrow mobile viewports ($< 768\text{ px}$) without clipping, overlapping, or degrading legibility.

#### Scenario: Mobile viewport viewing
- **WHEN** the architecture diagram is viewed on a mobile device
- **THEN** the system transitions from a broad horizontal field schematic into a sequential vertical flow (Field Nodes $\rightarrow$ Gateway $\rightarrow$ Server $\rightarrow$ Dashboard & Actuation) with tap-to-expand component inspection cards.
