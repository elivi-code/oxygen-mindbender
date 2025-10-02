# @8x8/oxygen-date-time-base CHANGELOG

## [Unreleased]

## [2.71.0] - 2024-09-17

### Changed

- Update `theme` property to be optional (OX-2487)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.19.0] - 2022-12-22

### Changed

- Update the input to use `min-height` instead of `height` to allow vertical scaling to better support font-size scaling, applies to `DateTimeSelector` and `DateTimeRangeSelector` (OX-770)

## [2.17.0] - 2022-11-21

### Changed

- Update `polished` peerDependency to `4.2.2` (OX-744)

## [2.3.1] - 2022-05-19

### Removed

- Remove `styled-components` as a devDep as this is included in the root package.json file

## [1.13.0] - 2021-10-07

### Changed

- Common components from `oxygen-date-time-range-selector` and `oxygen-date-time-selector`: `DropdownContainer`, `DropdownFooter`, `PopperContainer` are now exposed as: `BaseDropdownContainer`, `BaseDropdownFooter`, `BasePopperContainer`

## [1.1.1] - 2020-08-28

### Fixed

- Fix wrong `CloseIcon` import in DateTimeSelectorInput which caused the growth of the bundle size (all icons from collection were present in bundles)

## [0.9.5] - 2020-05-12

### Added

- Add `isClearable` prop which will add a clear value button for the input

## [0.8.7] - 2020-02-28

### Changed

- `iconLeft` color will now use the placeholder color when DateTimeSelectorInput has no selected value

### Added

- Add `borderRadius` for `DateTimeSelectorInput`, by default equal `0`

## [0.8.3] - 2020-01-07

### Changed

- Default value of property `iconLeft` from `''` to `undefined` in `DateTimeSelectorInput`

## [0.8.2] - 2019-12-19

- Changed:
  - Property type of `iconLeft` from `node` to `oneOfType([node, func])`

## [0.8.1] - 2019-12-19

### Added

- Add `hasError` to `DateTimeSelectorInput`
- Add `iconLeft` to `DateTimeSelectorInput`
- Add `id` to `DateTimeSelectorInput`
- Add `aria-disabled` to `DateTimeSelectorInput`
- Add `aria-invalid` to `DateTimeSelectorInput`

## [0.8.0] - 2019-12-12

### Added

- Add property `isValueSelected` which should specify if the Date Time Range Selector or Date Time Selector have a value selected

## [0.7.18] - 2019-12-09

### Changed

- Update icon and title styling to use display flex

### Added

- Add property that can replace the default input icon

### Fixed

- Fix click event on icon when selector is disabled

## [0.7.16] - 2019-11-28

### Added

- Add date time selector input
