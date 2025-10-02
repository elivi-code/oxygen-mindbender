# @8x8/oxygen-date-time-selector CHANGELOG

## [Unreleased]

## [2.51.0] - 2023-11-24

### Added

- Add props `isLoading`, `loadingMessage` (OX-1607)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.21.0] - 2023-02-06

### Changed

- Remove `e.stopPropagation()` from the click outside handler (OX-910)

## [2.19.0] - 2022-12-22

### Changed

- Update the input (from `DateTimeBase`) to use `min-height` instead of `height` to allow vertical scaling to better support font-size scaling (OX-770)

## [2.17.0] - 2022-11-21

### Changed

- Update `date-fns` dependency to `2.29.3` (OX-744)
- Update `polished` dependency to `4.2.2` (OX-744)
- Rename Storybook page from `Date Time Selector` to `DateTimeSelector` (OX-744)
- Update Storybook Playground (OX-744)

## [2.0.0] - 2022-03-03

### Changed

- Update `date-fns` from version `1.30.1` to `2.28.0`. Breaking changes have been addressed.
- **Breaking:** `titleFormatPattern` default value changed from `'MM/DD/YYYY'` to `'MM/dd/yyyy'`

## [1.13.0] - 2021-10-07

### Removed:

- **Breaking:** Remove `Styled` from package exports
- **Breaking:** Moved common components between `oxygen-date-time-range-selector` and `oxygen-date-time-selector` into `oxygen-date-time-base`: `DropdownContainer`, `DropdownFooter`, `PopperContainer` are now exposed as: `BaseDropdownContainer`, `BaseDropdownFooter`, `BasePopperContainer`

## [1.1.1] - 2020-08-28

### Fixed

- Wrong `CloseIcon` import in DateTimeSelectorInput which caused the growth of the bundle size (all icons from collection were present in bundles)

## [1.0.0] - 2020-07-24

### Removed:

- **Breaking:** Remove prop `defaultTitle`, use `placeholder` instead

## [0.9.5] - 2020-05-12

### Added

- Add props `onFocus`, `onBlur`, `isClearable`

### Changed

- Update the order of spreading `otherCalendarProps`

## [0.8.7] - 2020-02-28

### Added

- Add `borderRadius` for input, by default equal `0`

### Fixed

- Ensure `testId` is unique on day number element

## [0.8.3] - 2020-01-07

### Changed

- Default value of property `iconLeft` from `''` to `undefined` in `DateTimeSelector` and `DateTimeSelectorInput`

## [0.8.2] - 2019-12-19

### Changed

- Property type of `iconLeft` from `node` to `oneOfType([node, func])`

## [0.8.1] - 2019-12-19

### Changed :

- _Deprecate_ `defaultTitle` prop, please use `placeholder` instead

### Added

- Add `DateTimeSelectorInput` props: `hasError`, `iconLeft`, `id`, `aria-disabled`, `aria-invalid`
- Add `DateTimeSelector` props: `placeholder`

## [0.8.0] - 2019-12-12

### Changed

- Changed the placeholder text color for dropdown button

## [0.7.18] - 2019-12-09

### Added

- Add a property that can replace the default input icon
- Add theme props: `paddingHorizontal`, `iconMinSize`

### Removed

- Remove theme props: `paddingHorizontalRight`, `paddingHorizontalLeft`

## [0.7.16] - 2019-11-28

### Added

- Add date time selector
