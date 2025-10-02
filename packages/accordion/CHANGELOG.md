# @8x8/oxygen-accordion CHANGELOG

## [Unreleased]

## [2.96.0] - 2025-08-06

### Added

- Add `expandTrigger` prop to control accordion interaction mode (OX-3418)
- Add `contentAfterTitle` prop to Accordion component to allow custom content (e.g., IconButton with Tooltip) after the accordion title (OX-3418)
- Add `translations` prop to customize expand/collapse aria-labels with support for partial overrides (OX-3418)

## [2.89.0] - 2025-04-17

### Changed

- Enhanced accordion usability by making content scrollable by default when using fixed heights (OX-3336)

### Fixed

- Improved accordion expansion reliability by replacing JS height calculations with CSS grid animations (OX-3336)

## [2.74.0] - 2024-11-12

### Changed

- Ensure Accordion focus ring uses `focus01` (OX-2741)

## [2.65.0] - 2024-04-26

### Changed

- Removed click handler on expanded items for not closing state, made shouldCloseOnActiveClick deprecated on Accordion and AccordionItem components (OX-2131)
- **breaking change** Renamed Accordion to AccordionGroup and AccordionItem to Accordion (OX-2189)
- **breaking change** Changed the export format Accordion exported as default, AccordionGroup exported as named component (OX-2189)

## [2.57.0] - 2024-02-06

### Added

- Add support for optional return value for onChange, allowing to block navigation when onChange returns false (OX-1841)
- Add optional hasPadding on AccordionItem to remove the padding of expanded content if false (OX-1841)

## [2.52.0] - 2023-12-07

### Changed

- Update UI to match the Design (OX-1634)

## [2.49.0] - 2023-11-08

### Added

- Add `Accordion` Component (OX-1565)

### Changed

- Change `AccordionItem` should be used only as child of `Accordion` (OX-1565)
- Change `Accordion` to be **Beta** (OX-1565)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.19.0] - 2022-12-22

### Added

- Add AccordionItem component as **Alpha** (OX-701)
