# @8x8/oxygen-date-time-range-selector CHANGELOG

## [Unreleased]

## [2.97.0] - 2025-09-17

### Added

- Added `This Week` as a predefined range (OX-3704)

## [2.72.0] - 2024-10-01

### Fixed

- Ensure `onRangeChange` from the inner picker does not update the external `onRangeChange` callback (OX-2606)

## [2.71.0] - 2024-09-17

### Added

- Allow `Calendar` prop `showMonthYearPickers` to be overwritten (OX-2513)

### Changed

- Update `theme` property to be optional (OX-2487)

## [2.67.0] - 2024-06-27

### Changed

- Created/Added `TimeSelectorPortalNode` component to `DateTimeRangePicker` to avoid overlapping (OX-2220)

## [2.66.0] - 2024-05-14

### Added

- Bound labels to date inputs (`htmlFor`) to meet WCAG requirements (OX-2221)

## [2.64.0] - 2024-04-11

### Changed

- Items in `PredefinedList` components are now buttons instead of divs to allow better keyboard navigation. Styling updated accordingly. (OX-2035)

## [2.59.0] - 2024-02-28

### Added

- Added ability to navigate between predefined dates (OX-784)

### Fixed

- Fixed the data returned on setOuterState to allow th component to be controlled and expose all the needed state (OX-1936)
- Added the compute of isEndTimeValid on all state changes (OX-1936)
- Exposed DateTimeRangePickerProps interface from d.ts (OX-1887)

## [2.58.0] - 2024-02-08

### Fixed

- Created a new interface for the `DateTimeRangePicker` component, instead of re-using `DateTimeRangeSelector`'s interface (OX-1885)

## [2.57.0] - 2024-02-06

### Added

- Split the `DateTimeRangeSelectorDropdown` component into two components, itself and the `DateTimeRangePicker`, so the picker can be easily imported onto other components without being hidden behind a dropdown (OX-1811)

## [2.54.0] - 2024-01-09

### Changed

- Set width of dropdown calendar container to min-content to fix layout arrangement (OX-1726)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.19.0] - 2022-12-22

### Changed

- Allow `DateTimeRangeSelector` view to scroll internally when its size is larger than the viewport (OX-768)
- Update the input (from `DateTimeBase`) to use `min-height` instead of `height` to allow vertical scaling to better support font-size scaling (OX-770)

### Removed

- Remove theme props `listItemHeight`, `listInputHeight`, `dateInputWidth`, `timeInputWidth` (OX-768)

## [2.17.0] - 2022-11-21

### Changed

- Update `date-fns` dependency to `2.29.3` (OX-744)
- Update `polished` dependency to `4.2.2` (OX-744)
- Rename Storybook page from `Date Time Range Selector` to `DateTimeRangeSelector` (OX-744)
- Update Storybook Playground (OX-744)

### Removed

- Remove `memoize-one` dependency (not used) (OX-744)

## [2.10.0] - 2022-08-08

### Changed

- Update default start and end time for the selector (when no date range or predefined range is selected) is the beginning and the end time of the day (hours and minutes). _Note_: Previously it was set by default for both start and end time the current hour and minute. (OX-690)

## [2.1.0] - 2022-03-31

### Changed

- Typescript: `theme` prop is now optional.
- Typescript: `id` prop.
- Typescript: `hasError` prop.
- Typescript: `fromLabel` prop.
- Typescript: `startTimeLabel` prop.
- Typescript: `toLabel` prop.
- Typescript: `endTimeLabel` prop.
- Typescript: `customPredefinedRangeLabel` prop.
- Typescript: `locale` prop.

## [2.0.0] - 2022-03-03

### Changed

- Update `date-fns` from version `1.30.1` to `2.28.0`. Breaking changes have been addressed.
- **Breaking:** `dateFormat` default value changed from `'MM/DD/YYYY'` to `'MM/dd/yyyy'`
- **Breaking:** `timeFormat` default value changed from `'hh:mm A'` to `'hh:mm a'`

### Added

- Add `DateTimeRangeSelectorPredefinedList` (custom option) prop `customPredefinedRangeLabel`

## [1.17.0] - 2022-01-26

### Added

- Add `onOpen` and `onClose` callback props which are executed when the dropdown component becomes visible, respectively hidden
- Add `locale` prop which defines the locale options and strings (e.g. day or month names) used to format date values. _Note_: For more info about the locales use the README and the date-fns documentation: https://date-fns.org/v1.30.1/docs/I18n . _Note_: `en` is the built-in language, doesn't require any setup

## [1.14.0] - 2021-10-13

### Fixed

- Remove unnecessary template literal transformation that may cause `undefined` token values to pass as strings

## [1.13.0] - 2021-10-07

### Changed

- **Breaking:** Move common components between `oxygen-date-time-range-selector` and `oxygen-date-time-selector` into `oxygen-date-time-base`. `DropdownContainer`, `Footer`, `PopperContainer` are now exposed as `BaseDropdownContainer`, `BaseDropdownFooter`, `BasePopperContainer`

## [1.1.8] - 2020-10-15

### Added

- Add `DateTimeRangeSelectorPredefinedList` prop `hideCustomRange` for rendering without adding the Custom range

## [1.1.3] - 2020-09-03

### Added

- Add `DateTimeRangeSelector` prop `inputRenderer` for rendering a custom input
- Add `DateTimeRangeSelector` prop `headerRenderer` for rendering a custom calendar header

## [1.1.1] - 2020-08-28

### Fixed

- Fix wrong `CloseIcon` import in DateTimeSelectorInput which caused the growth of the bundle size (all icons from collection were present in bundles)

## [1.0.0] - 2020-07-24

### Added

- Expose `DateTimeRangeSelectorPredefinedList` component to be used by external components

### Removed

- **Breaking:** Remove `defaultTitle` prop, use `placeholder` instead

## [0.9.1] - 2020-04-22

### Fixed

- Start/end time selector should restore the previously selected time if empty value is submitted

## [0.9.0] - 2020-03-12

### Changed

- Update theme prop `timeInputWidth` to 90px
- `DropdownButton` and `List` components used to select the time are replaced with `TimeSelector` Oxygen component
- Update `testIds` for time selection (side effect of changing the component used to select time)

### Added

- Add theme properties: `timeInputContainerMarginLeft` (time input left spacing), `endTimeErrorColor` (color of the time range error message)
- Add `fromLabel`, `startTimeLabel`, `toLabel`, `endTimeLabel` string props, representing the text labels for time section area

### Removed

- Remove theme props: `dateInputBorderSize`, `dateInputBorderColor`
- Remove `TimeInputListContainer` styled component, which became unnecessary after the time selection component change

## [0.8.7] - 2020-02-28

### Added

- Add `borderRadius` for input, by default equal `0`

### Fixed

- Ensure `testId` is unique on day number element

## [0.8.3] - 2020-01-07

### Changed

- Default value of property `iconLeft` from `''` to `undefined` in `DateTimeRangeSelector` and `DateTimeSelectorInput`

## [0.8.2] - 2019-12-19

### Changed

- Property type of `iconLeft` from `node` to `oneOfType([node, func])`

## [0.8.1] - 2019-12-19

### Changed

- Deprecate `defaultTitle`, please use `placeholder` instead

### Added

- Add `DateTimeSelectorInput` props: `hasError`, `iconLeft`, `id`, `aria-disabled`, `aria-invalid`
- Add `DateTimeRangeSelector` props: `placeholder`

## [0.8.0] - 2019-12-12

### Changed

- Update placeholder text color for `DropdownButton`

## [0.7.18] - 2019-12-09

### Changed

- idealDirection of the start and end time selectors are `bottom-start` (old value was `bottom`)
- Increase the width of the Input Box of the DateTimeRangeSelector to `380px` to fit text like "12/06/2019 09:07 AM - 12/09/2019 09:07 AM".
- Set the default value for predefined ranges "Last X Days" and "Last X Months" 1 day and 1 month

### Added

- Add property that can replace the default input icon
- Add theme props: `paddingHorizontal`, `iconMinSize`

### Removed

- Remove `paddingHorizontalRight` and `paddingHorizontalLeft`

### Fixed

- Don't allow negative numbers for "Last X Days" and "Last X Months" predefined ranges

## [0.7.15] - 2019-11-27

### Changed

- Removed static width and height of the container

### Added

- Add props: `hidePredefinedRanges`, `hideTime`, `otherCalendarProps`

## [0.7.14] - 2019-11-07

### Changed

- Replace flyout with react-popper
- Dropdown to close on right click outside

### Added

- Add prop `customCloseHandlers`

## [0.7.10] - 2019-10-18

### Fixed

- Predefined list input field to correctly show the input value received from props
- Dropdown footer padding
- Correctly show error state on predefined list input field after deleting the input text

## [0.7.9] - 2019-10-07

### Added

- Add Date Time Range Selector
