# @8x8/oxygen-tag CHANGELOG

## [Unreleased]

## [2.77.0] - 2024-12-19

### Changed

- Update to Typescript, update CloseButton HTML element from button to div to correctly support Select use-cases (types) (OX-966)
- Removed styled-components `shouldForwardProp` for v6 compatibility (OX-2392)

## [2.74.0] - 2024-11-12

### Fixed

- Tag close button has type="button" by default (OX-2645)

## [2.59.0] - 2024-02-28

### Fixed

- TagProps now extends React.HTMLAttributes<HTMLDivElement> in index.d.ts (OX-1087)

## [2.52.0] - 2023-12-07

### Added

- Add `actionProps` to allow arbitrary attributes to be passed to the Action node (OX-1517)

## [2.46.0] - 2023-09-28

### Added

- Add `red` variant (OX-1317)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.25.0] - 2023-03-01

### Changed

- Update dark theme blue tag color (same as light theme one) (OX-940)

## [2.17.0] - 2022-11-21

### Changed

- Update Storybook Playground (OX-744)
- Update Guidelines page to use `action` instead of `console.log` (OX-744)

## [2.16.0] - 2022-10-21

### Added

- Add new Tag component (OX-711)
