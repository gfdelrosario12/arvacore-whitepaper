## MODIFIED Requirements

### Requirement: Authoritative Academic Prologue and Research Abstract
The system SHALL present the full, authentic academic provenance of the ArvaCore research whitepaper, including the complete title, institution (Polytechnic University of the Philippines), degree program, the author roster led by Jenice Nicole C. Ramirez alongside Pranz Gabrielle N. Capucion and Gladwin Ferdz I. Del Rosario, date (September 2026), and study location (Barangay Silang, Lopez, Quezon).

#### Scenario: User visits whitepaper prologue
- **WHEN** the user lands on the website
- **THEN** the system displays the exact title "ARVACORE: AN IOT-BASED IRRIGATION MONITORING AND AUTOMATED WATER MANAGEMENT SYSTEM FOR RICE CULTIVATION", institutional affiliation, the lead author Jenice Nicole C. Ramirez prominently featured, and the study location without promotional marketing filler.

### Requirement: Agronomic Problem Context and AWD Theoretical Grounding
The system SHALL explain the agronomic and engineering context of water management in irrigated lowland rice farming as documented in the study, contrasting continuous flooding water consumption with sensor-informed monitoring and threshold-based irrigation, while documenting the labor and monitoring barriers faced by farmers in Barangay Silang, Lopez, Quezon.

#### Scenario: Inspecting agronomic context
- **WHEN** the reader scrolls to the Problem Setting section
- **THEN** the system presents the water consumption challenges, the risk of soil drying without timely sensor feedback, and the field monitoring needs of local rice farmers without referencing obsolete population statistics.

## ADDED Requirements

### Requirement: Expected Benefits and Project Value Presentation
The system SHALL present a balanced "What ArvaCore Could Make Possible" section across four categories: benefits for rice farmers, environmental and resource management potential, irrigation community coordination value, and scientific and engineering research value.

#### Scenario: User reads expected benefits
- **WHEN** the user reaches the Expected Benefits section
- **THEN** the system displays four benefit categories with concise value statements and supporting points.

### Requirement: Deployment Fundraising Appeal and Budget Reconciliation
The system SHALL present a transparent prototype deployment fundraising section featuring the verified itemized subtotal (ArvaNode ₱1,016 and ArvaNet ₱3,410, combined ₱4,426), an itemized preliminary deployment budget totaling exactly ₱18,000 in estimated project expenses, and a funding target of ₱25,000 with ₱7,000 in remaining budget headroom for Barangay Silang, Lopez, Quezon.

#### Scenario: User reviews the funding breakdown
- **WHEN** the user reaches the Deployment Fundraising section
- **THEN** the system displays the itemized hardware costs, total estimated project expenses of ₱18,000, funding target of ₱25,000, and budget headroom of ₱7,000 clearly distinguished and mathematically verified.

## REMOVED Requirements

### Requirement: Four-Pillar TAM User Acceptability Instrument Presentation
**Reason**: The Likert-scaled survey matrix and weighted-mean interpretation scale are not part of the current revised presentation; methodology is generalized to a high-level evaluation approach.
**Migration**: Remove the TAM/Likert exhibit; present evaluation as an Evaluation Approach section with engineering benchmarks.

### Requirement: Scholarly Bibliography and Citation Explorer
**Reason**: Standalone references and colophon sections are removed from the revised whitepaper presentation per project scope.
**Migration**: Bibliography data may be retained in source files for future use; no on-page bibliography section is rendered.
