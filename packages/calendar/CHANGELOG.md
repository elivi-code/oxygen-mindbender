# @8x8/oxygen-calendar CHANGELOG

## [Unreleased]

## [2.80.0] - 2025-02-17

### Fixed

- Remove background change on Calendar Selection edge to fix contrast issue (OX-2840)

## [2.71.0] - 2024-09-17

### Fixed

- Fix broken view when using `dateOptions` (with `weekStartsOn` for example) (OX-2513)

### Changed

- Update `theme` property to be optional (OX-2487)

## [2.69.0] - 2024-07-30

### Changed

- changed fwd, back button type to be `type="button"` by default (OX-2467)
- migrated to ts (OX-1093)
- mark `DISPLAY_MODE` as deprecated, use exported type `DisplayMode` instead (OX-1093)

### Fixed

- Disabled days are now non-clickable (non-selectable) (OX-2437)
- Calendar is not crashing when the user navigates with keyboard to a month that is disabled by min or max date props (OX-2442)

## [2.66.0] - 2024-05-14

### Added

- Added `aria-labelledby` attribute to month navigation arrows (OX-2221)
- Wrapped month name into a `role="cell"` to meet WCAG requirements (OX-2221)

## [2.60.0] - 2024-03-01

### Fixed

- Fix keyboard navigation not being able to navigate to calendar days after changing the month with arrow keys (OX-1981)

## [2.59.0] - 2024-02-28

### Added

- Keyboard navigation and voice over support to the Calendar component (OX-784)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.19.0] - 2022-12-22

### Added

- Add `Calendar` prop `enableMaxWidth` (default `true`) which allows it to scroll internally when the view is larger than the viewport (OX-768)

### Changed

- Allow Calendar to scale based on font-size (both veritcal and horizontal) (OX-768)

## [2.17.0] - 2022-11-21

### Changed

- Update `date-fns` dependency to `2.29.3` (OX-744)
- Update `memoize-one` dependency to `6.0.0` (OX-744)
- Rename Storybook `Guideline` page to `Guidelines` (OX-744)
- Update Storybook Playground (OX-744)

## [2.0.0] - 2022-03-03

### Changed

- Update `date-fns` dependency from version `1.30.1` to `2.28.0`. Breaking changes have been addressed
- **Breaking:** `dayNumberFormat` default value changed from `'D'` to `'d'`
- **Breaking:** `weekDayDisplayFormat` default value changed from `'dd'` to `'EE'`
- **Breaking:** `monthDisplayFormat` default value changed from `'MMMM YYYY'` to `'MMMM yyyy'`
- **Breaking:** `focusedYearFormat` default value changed from `'YYYY'` to `'yyyy'`

## [1.17.0] - 2022-01-26

### Added

- Add `locale` prop to Day, Month and Calendar components which defines the locale options and strings (e.g. day or month names) used to format date values. _Note_: For more info about the locales use the README and the date-fns documentation: https://date-fns.org/v1.30.1/docs/I18n _Note_: `en` is the built-in language, doesn't require any setup

## [1.14.0] - 2021-10-13

### Fixed

- Properly align Arrow components when in Novo design

## [1.13.0] - 2021-10-07

### Changed

- Heavily update base components css rules to facilitate new `Novo` theme: `DayCell`, `SelectionRange`, `PreviewRange`, `DayNumber`, `TodayLine`

### Added

- Add new base components to help with `Novo` theme: `SelectionRangeEdge`, `NumberContainer`
- Add new `customEvenMonths` config option for `dateOptions`. Renders another week row for the month grid for aesthetic purposes, helps when rendering moths side by side (default: `false`)

## [1.1.8] - 2020-10-15

### Added

- Add autoscroll to the date/range.startDate when it is outside the view after an external change

## [1.1.4] - 2020-09-11

### Fixed

- Add day cell button type

## [0.9.7] - 2020-05-15

### Added

- defaultFocusedDate prop

## [0.9.6] - 2020-05-14

### Fixed

- Fix calendar opening at the selected date/start date for range

## [0.9.2] - 2020-04-29

### Added

- Add `enabledDates` prop

## [0.9.1] - 2020-04-22

### Fixed

- Allow to override days properties in calendar theme

## [0.8.7] - 2020-02-28

### Fixed

- Ensure `testId` is unique on day number element

## [0.7.8] - 2019-09-03

### Fixed

- Update main entry in package.json to point to dist instead of src

## [0.7.6] - 2019-08-29

### Added

- Add Calendar with limited functionality available: navigation using arrows, navigation using month and year dropdown, selecting a date/date range by clicking on day(s), highlighting the range on mouse move
