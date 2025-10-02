# @8x8/oxygen-icon-button CHANGELOG

## [Unreleased]

## [2.70.0] - 2024-08-22

### Changed

- Package deprecated, IconButton component moved under the button package. import { IconButton } from '@8x8/oxygen-button';

## [2.62.0] - 2024-03-14

### Changed

- make the cursor property to be `not-allowed` when disabled (OX-956)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.28.1] - 2023-04-04

### Fixed

- handle onClick/onKeyDown disabled icon button in order to preventDefault, stopPropagation. (OX-1031)
- "forwardedRef" prop is optional (OX-1031)

## [2.28.0] - 2023-03-29

### Fixed

- Fix strange focus-ring bleed effect (OX-1018)

## [2.27.0] - 2023-03-17

### Changed

- `IconButton` background color is now transparent (should have been from the start). The component has custom background colors only when in specific states (active, hover) (OX-908)
- Mark `children` as required prop (OX-908)

### Added

- Add new `isInverted?: boolean;` prop to render against inverted items (such as `Toast`) (OX-908)
- Export interface `IconButtonProps` (OX-908)
- Add `prop-types` as a dependency (OX-908)

## [2.20.0] - 2023-01-20

### Added

- Add `IconButton` component (OX-579)
