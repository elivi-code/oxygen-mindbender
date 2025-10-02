# @8x8/oxygen-static-tooltip CHANGELOG

## [Unreleased]

## [2.68.0] - 2024-07-19

### Changed

- Update min-height dimensions to match 1 line of text (scalable-font) (OX-2402)

## [2.37.0] - 2023-07-13

### Changed

- Add minimum dimensions to improve rendering when an arrow is also visible (OX-1252)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.21.0] - 2023-02-06

### Fixed

- Export `TooltipProps` type (OX-886)

## [2.20.0] - 2023-01-20

### Fixed

- Add fix for Email tooltip not displaying the entire information on font size scaling. (OX-807)

## [2.19.0] - 2022-12-22

### Changed

- Update module to Typescript (needed as dep for Tooltip) (OX-620)

## [2.17.0] - 2022-11-21

### Changed

- Rename Storybook page title from `Static Tooltip` to `StaticTooltip` (OX-744)
- Rename Storybook `Guideline` page to `Guidelines` (OX-744)
- Update Storybook Playground (OX-744)

## [2.16.1] - 2022-10-27

### Changed

- Revert OX-388 caused issues that might crash Tooltip consumers (OX-741)

## [2.16.0] - 2022-10-21

### Added

- Add prop `forwardedRef` from withTheme (OX-388)

## [2.10.0] - 2022-08-08

### Changed

- Update Tooltip `backgroundColor` with proper token `ui10` (OX-688)
- Update Tooltip `color` with proper token `textColor06` (OX-688)

## [1.7.0] - 2021-06-28

### Changed

- `TooltipWrapper` styled component is now aware of `fontWeight`, `textAlign` and `letterSpacing` theme properties

### Added

- Add prop `renderArrow`: render a custom `Arrow` component that serves as a tooltip pointer arrow (default value: `undefined`)

## [0.6.4]

### Changed

- update z-index value of Static Tooltip to 4000
