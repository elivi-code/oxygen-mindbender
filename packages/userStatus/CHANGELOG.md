# @8x8/oxygen-user-status CHANGELOG

## [Unreleased]

## [2.82.0] - 2025-02-21

### Changed

- `UserStatus` colors are theme based (instead of being hardcoded) (OX-2812)

## [2.77.0] - 2024-12-19

### Changed

- Removed styled-components `shouldForwardProp` for v6 compatibility (OX-2392)

## [2.73.0] - 2024-10-16

### Changed

- Update status svg colors to use tokens (OX-2588)
- Update Away and WorkingOffice svg colors to `orange06` to meet contrast requirements (OX-2588)

### Added

- Added oxygen-theme dependency to package in order to use tokens in svg color (OX-2588)

## [2.71.0] - 2024-09-17

### Changed

- Update `theme` property to be optional (OX-2487)

## [2.67.0] - 2024-06-27

### Changed

- migrated to ts (OX-1077)
- _Deprecate_ userStatusSize and userStatusType constants

## [2.52.0] - 2023-12-07

### Changed

- Updated the type definitions: added `onDirectCall` and `wrapUp` to UserStatusType and made the `theme` object optional. (OX-946)

## [2.48.0] - 2023-10-27

### Added

- Added Wrap Up icon and status for vcc implementation (OX-1514)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.23.0] - 2023-02-10

### Changed

- Added `aria-hddine=true` for user status svgs. In order too meet WAI-ARIA requirements, the other aria / roles attributes (that will be added to svg parent component) will be passed from `otherProps` (OX-803)

## [2.17.0] - 2022-11-21

### Changed

- Rename Storybook `Guideline` page to `Guidelines` (OX-744)

## [2.16.0] - 2022-10-21

### Changed

- Update `Available` (and `OnDirectCall`) main color to `green04`'s value (OX-737)

## [2.3.0] - 2022-05-17

### Added

- Add `OnDirectCall` status icon

## [1.5.1] - 2021-05-25

### Removed

- Remove `css` borders on the UserStatus wrapper

### Changes

- Improved `UserStatus` component rendering — especially at small sizes and for low resolution screens by replacing `css` borders with new presence icons which have borders inside the `svg`s

## [1.5.0] - 2021-05-18

### Fixed

- Add background color (respective to status color) to svg wrapper to resolve transparent bgColor issue

## [1.4.0] - 2021-05-13

### Added

- Add new status icon svgs in `assests` folder - these are not used - they serve as a reference for the svg code inside components in the `styled` folder

### Changed

- `Available`, `Offline`, `WorkingOffline` now have status icons
- Replaced status icons with newly added ones
- Modified and Added new `UserStatusIcon` components in `styled` folder to use newly added `svg` icons
- Status icons now live as `svg`s inside the `oxygen-user-status` project rather than importing them from `oxygen-icon`

### Removed

-**Breaking:** Remove theme props `iconColor`, `backgroundColor`, `iconSize` usage as they are now obsolete

## [0.1.0]

### Added

- Add initial component structure
