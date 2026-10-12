## ADDED Requirements

### Requirement: Authentic Farm-to-Digital Architecture Visualization
The system SHALL provide an interactive SVG-based architectural schematic faithful to Thesis Figure 3 (ArvaCore System Block Diagram), detailing the exact documented relationships between the physical rice field, the 4 distributed field-monitoring nodes, ESP32 microcontrollers, ultrasonic water-level sensors, soil moisture sensors, Wi-Fi communication links, the gateway intermediary, cloud application server, database, web dashboard, user operator, and centralized irrigation mechanism with flow sensor verification.

#### Scenario: Desktop view of architecture diagram
- **WHEN** viewed on a desktop or tablet viewport
- **THEN** the system renders a high-definition SVG schematic showing the complete physical-to-cloud-to-actuator loop with directional signal/water indicators and active node connections.

### Requirement: Interactive Component Inspection
The system SHALL allow users to select or hover over any architecture component (such as an individual Field Node, Gateway, Application Server, Centralized Pump, or Flow Sensor) to reveal authoritative technical specifications, hardware roles, and data-flow responsibilities documented in the thesis.

#### Scenario: User clicks on an ESP32 Field-Monitoring Node
- **WHEN** the user selects "Field-Monitoring Node 1" in the interactive diagram
- **THEN** the detail panel updates to display its components (ESP32, Ultrasonic Water-Level Sensor, Soil-Moisture Sensor, Built-in Wi-Fi), sensing function (non-contact surface echo distance and root-zone volumetric content), and transmission behavior to the gateway.

#### Scenario: User clicks on Centralized Flow Sensor
- **WHEN** the user selects the "Flow Sensor" component
- **THEN** the detail panel explains its dual role: verifying commanded water delivery during pump operation and detecting unintended flow or leakage when the pump is idle.

### Requirement: Animated Technical Data and Water Paths
The system SHALL render subtle, toggleable signal pulses along the Wi-Fi/Internet pathways and animated fluid stream indications along the irrigation delivery line when water flow is simulated.

#### Scenario: Active telemetry flow animation
- **WHEN** animations are enabled
- **THEN** SVG stroke dashes smoothly traverse communication pathways between field nodes, gateway, and server to visually communicate packet transmission without causing visual distraction.

### Requirement: Responsive Mobile Vertical Decomposition
The system SHALL gracefully decompose the multi-tier architectural diagram into a structured, readable vertical pipeline on narrow mobile viewports ($< 768\text{ px}$) without clipping, overlapping, or degrading legibility.

#### Scenario: Mobile viewport viewing
- **WHEN** the architecture diagram is viewed on a mobile device
- **THEN** the system transitions from a broad horizontal field schematic into a sequential vertical flow (Field Nodes $\rightarrow$ Gateway $\rightarrow$ Server $\rightarrow$ Dashboard & Actuation) with tap-to-expand component inspection cards.

