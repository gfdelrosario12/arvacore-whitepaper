## MODIFIED Requirements

### Requirement: Faithful Process Flowchart Representation
The system SHALL recreate the ArvaCore Process Flowchart (Thesis Figure 2) using clear SVG vector nodes and connecting decision paths, representing the exact operational cycle: Start $\rightarrow$ Water-level sensor measures field level $\rightarrow$ Microcontroller receives reading $\rightarrow$ Transmit via IoT $\rightarrow$ Website dashboard displays level $\rightarrow$ Farmer/owner monitors $\rightarrow$ Below water-level threshold decision $\rightarrow$ Activate pump $\rightarrow$ Irrigate field $\rightarrow$ Water level increases $\rightarrow$ Desired level reached decision $\rightarrow$ Deactivate pump $\rightarrow$ Continuous monitoring.

#### Scenario: Reader inspects decision tree
- **WHEN** viewing the Process Flowchart section
- **THEN** all 11 stages and both decision branches are visible, legible, and highlighted according to the current operational phase.

### Requirement: Interactive AWD Water-Level Simulation Control
The system SHALL provide an interactive slider allowing users to adjust simulated rice paddy water depth (from $+5\text{ cm}$ ponded depth down to $-15\text{ cm}$ below ground surface) to dynamically trigger state transitions in the flowchart, reframed as closed-loop water management and threshold simulation rather than AWD-specific operating methodology.

#### Scenario: Water depth drops below AWD threshold
- **WHEN** the user drags the water level slider from $0\text{ cm}$ to $-16\text{ cm}$ (crossing below threshold)
- **THEN** the simulation state transitions to "Threshold Triggered", the "Activate Pump" node highlights, the pump state changes to "Active", and the flow sensor indicator lights up with simulated liters-per-minute throughput.

#### Scenario: Water depth re-floods to target level
- **WHEN** the user brings the water level back up to $+5\text{ cm}$
- **THEN** the simulation state transitions to "Desired Level Reached", the "Deactivate Pump" node highlights, the pump returns to "Standby", and the flow sensor confirms zero flow.

### Requirement: Paddy Soil Cross-Section Telemetry Widget
The system SHALL display a dynamic cross-section graphic illustrating the perched water table, rice plant root zone, ultrasonic wave reflection from the water surface, and soil moisture sensor insertion depth in synchronization with the water depth slider. The cross-section SHALL be presented inside a figure frame with an enlarge control so it can be inspected at full scale in the diagram lightbox.

#### Scenario: Visualizing subsurface soil moisture
- **WHEN** the user interacts with the water level slider
- **THEN** the soil layer visual changes water saturation tints, the perched water table boundary animates up/down, and the ultrasonic echo wave path adjusts dynamically.

#### Scenario: Enlarging the cross-section
- **WHEN** the user clicks the Enlarge & Zoom control on the cross-section figure
- **THEN** the full cross-section renders in the lightbox with pan and zoom so every sensor horizon and threshold labeling remains legible.
