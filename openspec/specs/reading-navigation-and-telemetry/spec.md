## Purpose
Provide reading navigation controls, scroll progress tracking, chapter index drawer, and accessibility features for the digital publication.
## Requirements
### Requirement: Sticky Reading Header with Progress Indicator
The system SHALL provide a subtle, fixed reading header across the top of the viewport displaying the whitepaper publication title, an indicator of the currently active section, and a continuous horizontal progress bar reflecting total scroll depth.

#### Scenario: User scrolls through long-form publication
- **WHEN** the user scrolls down the page
- **THEN** the horizontal progress bar smoothly fills from 0% to 100%, and the active section badge dynamically updates to reflect the section currently occupying the viewport.

### Requirement: Section Jump Navigation and Reading Index Drawer
The system SHALL provide accessible section navigation buttons and a collapsible index drawer allowing instant jumping to any major research chapter (Prologue & Metadata, Agronomic Context, Physical Field Nodes, System Architecture, Decision Logic & Simulator, Evaluation Approach, Expected Benefits, Deployment Fundraising).

#### Scenario: User clicks a section navigation link
- **WHEN** the user clicks a chapter entry in the navigation index
- **THEN** the viewport smoothly scrolls to the target anchor, updates the URL hash without reload, and sets focus appropriately for accessibility.

### Requirement: Accessible Reduced-Motion Support
The system SHALL respect the user's `prefers-reduced-motion` system preference by disabling continuous SVG path animations, particle effects, and automated scroll transitions, replacing them with clear static visual indicators. Diagram lightbox open/close transitions SHALL also be suppressed when reduced motion is preferred.

#### Scenario: User with prefers-reduced-motion enabled
- **WHEN** a reader with reduced-motion preferences loads the page
- **THEN** all data pulses and fluid stream animations are replaced with static directional arrows, transitions occur instantly, interactive controls and lightbox dismissal remain fully operational, and no motion is applied to the lightbox.

### Requirement: Lightbox Dismissal Aids in Navigation Context
The system SHALL make the lightbox dismissal path discoverable through the reading index and chapter context, consistent with the global Escape/backdrop/keyboard support described in the diagram lightbox requirement.

#### Scenario: User exits lightbox and returns to reading index
- **WHEN** the user dismisses the lightbox and reopens the table of contents
- **THEN** the reading index reflects the full revised chapter set and the previously visible page region is unchanged.

