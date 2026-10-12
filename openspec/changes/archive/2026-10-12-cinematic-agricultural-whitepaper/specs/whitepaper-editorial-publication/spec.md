## ADDED Requirements

### Requirement: Authoritative Academic Prologue and Research Abstract
The system SHALL present the full, authentic academic provenance of the ArvaCore thesis, including the complete thesis title, institution (*Polytechnic University of the Philippines, Faculty of Computer Engineering*), degree program, authors (*Capucion, Colle, Del Rosario, Ramirez*), date (*September 2026*), and study location (*Barangay Silang, Lopez, Quezon*).

#### Scenario: User visits whitepaper prologue
- **WHEN** the user lands on the website
- **THEN** the system displays the exact title "ARVACORE: AN IOT-BASED IRRIGATION MONITORING AND AUTOMATED WATER MANAGEMENT SYSTEM FOR RICE CULTIVATION", institutional affiliation, author roster, and study location without promotional marketing filler.

### Requirement: Agronomic Problem Context and AWD Theoretical Grounding
The system SHALL explain the agronomic principles of Alternate Wetting and Drying (AWD) in irrigated lowland rice farming as documented in Chapters 1 and 2, contrasting continuous flooding water consumption with AWD periodic drying cycles while documenting the labor and monitoring barriers faced by farmers in Barangay Silang, Lopez, Quezon.

#### Scenario: Inspecting agronomic context
- **WHEN** the reader scrolls to the Problem Setting section
- **THEN** the system presents the water consumption challenges, the risk of soil drying without timely sensor feedback, and the target population demographics (3,418 rice farmers in Lopez, Quezon; Cochran sample size $n = 346$).

### Requirement: Evidence-Based Engineering Validation Benchmarks
The system SHALL present the quantitative validation metrics and standards established in Chapter 3 (SOP 3.1–3.6 and SOP 4) as target engineering benchmarks and evaluation criteria, explicitly indicating that they represent the research study's methodological validation framework rather than fabricated experimental field trials.

#### Scenario: Inspecting validation criteria
- **WHEN** the user views the System Performance and Evaluation section
- **THEN** the system displays the target error tolerance ($\pm 5\%$), the activation/deactivation accuracy standard ($\ge 95\%$ across 20 trials), the response time ceiling ($\le 30\text{ seconds}$), and the flow sensor Mean Absolute Percentage Error (MAPE) formula across 10 trials, labeled as design benchmarks.

### Requirement: Four-Pillar TAM User Acceptability Instrument Presentation
The system SHALL present the structured 5-point Likert Technology Acceptance Model (TAM) evaluation framework documented in Table 1 and Appendix A, categorizing criteria across Functionality, Reliability, Usability, and Efficiency.

#### Scenario: User explores acceptability criteria
- **WHEN** the user interacts with the Acceptability Framework exhibit
- **THEN** the system presents the 5-tier weighted mean interpretation scale (1.00–1.80 Very Low, 1.81–2.60 Low, 2.61–3.40 Moderate, 3.41–4.20 High, 4.21–5.00 Very High) alongside representative survey questions from Appendix A.

### Requirement: Scholarly Bibliography and Citation Explorer
The system SHALL render the complete 24-entry academic bibliography from the thesis with full author lists, publication years, titles, journals/proceedings, and active DOI hyperlinks where available.

#### Scenario: Reviewing research citations
- **WHEN** the user navigates to the References section
- **THEN** the system displays the 24 APA 7th citations formatted for academic legibility with copyable citations and direct digital object identifier links.

