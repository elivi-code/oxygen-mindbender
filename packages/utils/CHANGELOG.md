# @8x8/oxygen-utils CHANGELOG

## [Unreleased]

## [2.97.0] - 2025-09-17

### Added

- Add new `useAriaLive` hook for managing screen reader announcements (OX-3521)

## [2.36.0] - 2023-06-27

### Added

- Add new `useClickOutside` hook - to detect when clicking outside a container ref (OX-1170)
- Add new `useArrowKeyListIndex` hook - to get the focusable element index (OX-1170)
- Add new `useGlobalActionKeyHandler` hook - to call the provided handler once any of the specified keys have been pressed (OX-1170)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.30.0] - 2023-05-04

### Added

- Add new `useHasOverflow` hook to detect if an element is overflowing its container (useful to add title when text is clipped) (OX-729)

## [2.27.0] - 2023-03-17

### Added

- `isEnterEvent`, `isSpaceEvent` key down events. (OX-791)

## [2.25.0] - 2023-03-01

### Added

- Added `useId` hook that generates and returns a unique id (OX-944)

## [2.19.0] - 2022-12-22

### Changed

- Convert `@8x8/oxygen-utils` to typescript. Export correct types (OX-772)

## [2.16.0] - 2022-10-21

### Added

- Add `useFontSize` hook to transform a `rem` into a `px` value based on the root html font-size property (OX-711)
