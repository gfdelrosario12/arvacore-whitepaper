## ADDED Requirements

### Requirement: Sticky Reading Header with Progress Indicator
The system SHALL provide a subtle, fixed reading header across the top of the viewport displaying the whitepaper publication title, an indicator of the currently active section, and a continuous horizontal progress bar reflecting total scroll depth.

#### Scenario: User scrolls through long-form publication
- **WHEN** the user scrolls down the page
- **THEN** the horizontal progress bar smoothly fills from 0% to 100%, and the active section badge dynamically updates to reflect the section currently occupying the viewport.

### Requirement: Section Jump Navigation and Reading Index Drawer
The system SHALL provide accessible section navigation buttons and a collapsible index drawer allowing instant jumping to any major research chapter (Prologue, Agronomy & AWD, Physical Nodes, System Architecture, Closed-Loop Dynamics, Validation & TAM, References).

#### Scenario: User clicks a section navigation link
- **WHEN** the user clicks "System Architecture" in the navigation bar
- **THEN** the viewport smoothly scrolls to the target anchor, updates the URL hash without reload, and sets focus appropriately for accessibility.

### Requirement: Accessible Reduced-Motion Support
The system SHALL respect the user's `prefers-reduced-motion` system preference by disabling continuous SVG path animations, particle effects, and automated scroll transitions, replacing them with clear static visual indicators.

#### Scenario: User with prefers-reduced-motion enabled
- **WHEN** a reader with reduced-motion preferences loads the page
- **THEN** all data pulses and fluid stream animations are replaced with static directional arrows, transitions occur instantly without spring physics, and all interactive controls remain fully operational.

### Requirement: Document Download and Source Verification
The system SHALL provide an accessible action to download or view the authentic academic thesis PDF (`ARVACORE.pdf`) directly, verifying the link destination and providing the exact publication metadata (filesize, page count: 60 pages).

#### Scenario: User clicks "View Thesis PDF"
- **WHEN** the user clicks the thesis PDF download/view button
- **THEN** the browser opens the authentic 60-page PDF document in a new tab or triggers a download without broken links.

