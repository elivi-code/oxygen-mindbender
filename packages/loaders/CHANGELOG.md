# @8x8/oxygen-loaders CHANGELOG

## [Unreleased]

## [2.84.0] - 2025-03-04

### Changed

- `Spinner` now extends SVG (OX-3058)
- `Spinner` now uses `text` prop as a label for the SVG (OX-3058)

## [2.68.0] - 2024-07-19

### Changed

- Change `size` data type to `string`; set default size `240px` and mark `progressBarSize` as deprecated (OX-1734)

## [2.51.0] - 2023-11-24

### Added

- Add prop `text` (OX-1607)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

### Added

- Expose `progressBarSize` and `spinnerSize` from this package directly (and deprecate the ones from `@8x8/oxygen-constants`) (OX-1088)

## [2.25.0] - 2023-03-01

### Changed

- Add `aria-labelledby` on progress element that references to progress bar text id attribute (OX-944)

## [2.24.0] - 2023-02-20

### Changed

- Allow pass-through props on both `Spinner` and `ProgressBar` to allow WAI-ARIA requirements to be met (OX-792)

## [2.17.0] - 2022-11-21

### Changed

- Update Storybook Playground (for both `ProgressBar` and `Spinner`) (OX-744)

## [2.12.0] - 2022-08-29

### Changed

- ProgressBar now renders with a green color when value at 100 (OX-705)

## [2.1.0] - 2022-03-31

### Changed

- Typescript: `theme` prop is now optional.

## [1.8.0] - 2021-08-03

### Changed

- Update folder structure: moved styled components under their respective parent folders inside `styled` folder

### Added

- Add `Spinner`component
- Can now use `theme.withSpinnerBackground` to control svg stroke color for spinner background

### Fixed

- Simplified `css` rules concerning `Progressbar`
- Add `pseudoelement` `css` rules for **Firefox** browser

## [0.7.15] - 2019-11-27

### Fixed

- Add Spinner component animation support on Internet Explorer 11 (IE11)

## [0.6.7] - 2019-05-08

### Added

- Add test attributes for spinner

## [0.4.5]

### Added

- Add initial component structure
