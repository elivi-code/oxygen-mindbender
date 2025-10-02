# @8x8/oxygen-filter-list CHANGELOG

## [Unreleased]

## [2.98.0] - 2025-10-01

### Added

- FilterList via `emptyFilterAllowed` flag now supports adding of filters from the list, without selecting a value for it and without pressing 'apply'; this works even when you don't have global apply set (OX-3763)

### Changed

- Date filter range type now supports pre-populating internalFilter with values from defaultFilters (OX-3714)

## [2.97.0] - 2025-09-17

### Added

- Screen reader announcements for Clear All and Reset All actions using useAriaLive hook (OX-3521)
- New translation labels: `searchValueLabel`, `resetAllSuccessLabel`, `clearAllSuccessLabel` (OX-3521)
- Search icon and placeholder text to SelectionFilter search input (OX-3521)

### Changed

- Improved accessibility for SelectionFilter by using proper fieldset/legend structure for selected items (OX-3521)
- Updated SelectionFilter styling to match design (OX-3521)

## [2.96.0] - 2025-08-06

### Changed

- Initial predefined range now has an initialised start and end time (OX-3617)
- Do not show operator in the tooltip if it's undefined (OX-3616)

## [2.95.0] - 2025-07-31

### Fixed

- Fix `FilterList` internal state bug (OX-3531)

## [2.94.0] - 2025-07-22

### Changed

- `Clear` filter now sets the values to null instead of undefined (OX-3575)
- Avoid calling `onChange` callback if `currentFilters` are equal to `newFilters` (OX-3575)

### Added

- `isLoading` property to `FilterType` so each filter loading state can be controlled from outside instead relying on `getSearchSuggestions` callback (OX-3561)

### Fixed

- When showOperatorInFilterButton is set to false, dateRange filter no longer shows empty braces if there isnt data (OX-3561)

## [2.93.0] - 2025-07-03

### Changed

- Add new property on the filter definition `showSearchInput` which can control the visibility of the search input in a backwards compatible way (OX-3593)
- When showOperatorInFilterButton is set to false, the values length is now only displayed if it is greater than 0 (OX-3544)
- When using Group Filters, custom operators now render the SelectionFilter component instead of the InputFilter component (OX-3544)

### Added

- Export type `GroupFilterDefinitionType` (OX-3527)
- Display a calendar icon when the filter is of the date range type (OX-3544)

### Fixed

- Revert the change done in 2.92.0 in regards to `hasSearchSuggestions` — which would inadvertently hide the search input if this prop was not defined when `getSearchSuggestions` was defined (OX-3593)
- Fixed `Clear All` button `isDisable` logic to check for filter values in the internal state

## [2.92.0] - 2025-06-16

### Fixed

- fixed: for showing <SearchInput> consider filterDefinition.hasSearchSuggestions===true instead of SelectionFilter.getSearchSuggestions (OX-2107)

## [2.91.0] - 2025-05-28

### Added

- <SearchInput> subcomponent shown conditionally, if one or more clauses are true: (OX-2107)

- provided options for that filter are more than 10
- filterDefinition.allowFreeformSuggestions = true
- SelectionFilter.getSearchSuggestions is provided

- Moved reset/clear button to the bottom and don't show operator selector if there is a single operator available (OX-2477)

## [2.89.0] - 2025-04-17

### Added

- New group filter structure supported (OX-3231)

- `showOperatorInFilterButton` prop to simplify displayed UI elements of filter tags (OX-2931)

## [2.87.0] - 2025-03-31

### Added

- Added optional `onFilterToggle` function that returns the filter id when opened and null when closed (OX-2930)

## [2.86.0] - 2025-03-21

### Changed

- Search input margin changed from 12px to 8px (OX-2934)

### Added

- Added search icon to search input (OX-2934)

## [2.75.1] - 2024-12-05

### Fixed

- Fix FilterList OPERATOR_TYPES export (OX-2808)

## [2.75.0] - 2024-12-04

### Added

- Export `FilterListInterface` (OX-2281)

### Fixed

- Ensure no duplicate Filters are stored in the FilterList internal state and no duplicates are allowed in search results (OX-2281)

## [2.74.0] - 2024-11-12

### Fixed

- Use custom maxHeight (& ensure proper max-width) for dateRange filter in Popover props to allow full date time selection rendering without scroll (OX-2703)

## [2.69.0] - 2024-07-30

### Fixed

- Fix FilterTagText not rendering space between words (OX-2455)

## [2.68.0] - 2024-07-19

### Fixed

- Fixed FilterTagText to show ellipsis for not dateRange filter (OX-2413)

## [2.67.0] - 2024-06-27

### Changed

- DateTimeRange filter Tag is now allowed to expand as needed, removed the enforced max-width (OX-2295)

### Fixed

- Filter title now display the operator if it exists (OX-2295)

## [2.66.0] - 2024-05-14

### Added

- Added new telemetry events - filter_apply, filter_clear_all, filter_reset and filter_reset_all (OX-2106)

### Fixed

- Fix bug: popoverPortalRef is used if it is provided instead of overriding it (OX-2244)
- Updated type of ref to HTMLElement to allow refs to document.body to be sent to the component (OX-2244)

## [2.65.0] - 2024-04-26

### Added

- Add new optional allowFreeformSuggestions on FilterDefinition - if true, multi-selection filters will create option if none was found in the suggestions (OX-2158)
- Add display of selected filters above the list of option (OX-2174)

## [2.64.0] - 2024-04-11

### Fixed

- Fix bug: `FilterList` dropdown is now visible inside modals (OX-2098)
- Fix Reset All when hasGlobalApplyButton (OX-2053)

## [2.62.0] - 2024-03-14

### Fixed

- Filtering new filters does not remove the button if no suggestions were found (OX-2017)

## [2.61.0] - 2024-03-11

### Changed

- Made FilterType and OperatorType labels optional (OX-2001)

### Added

- Add new optional `popoverPortalRef` prop which can be used to poral the `Popover` to a different location in the DOM (OX-2000)

### Fixed

- Fix bug: `Popover` not being visible when `FilterList` ancestor has z-index set, by portaling to an element from inside the `FilterList` (OX-2000)

## [2.59.0] - 2024-02-28

### Changed

- **Breaking change** - FilterList now uses a callback instead of a hook (OX-1887)
- **Breaking change** - The returned list of set filters now returns an array instead of an object (OX-1887)

### Added

- Suport for DateTimeRangePicker as filter option (OX-1887)
- Support for `hasGlobalApplyButton` to display a global apply or a filter level apply **Breaking change** - defaults to false (OX-1887)

### Removed

- Support for padding around FilterList - **Breaking change** - the padding should be controlled by integrator (OX-1887)

## [2.57.0] - 2024-02-06

### Changed

- (Internal) replaced `DropdownButton` with `OverflowContainer` and `Button` components (OX-1194)

### Fixed

- Fix: adding a new filter now opens the newly added filter (OX-1194)

## [2.54.0] - 2024-01-09

### Changed

- Show the currently selected filter operator and value in the filter items, in case of multiple values also show +N (OX-1671)

## [2.52.0] - 2023-12-07

### Changed

- Replaced Clear & Delete filter item `link` with `button`. (OX-1642)

### Fixed

- Fixed Clear & Delete enter/space keyboard action. (OX-1642)

## [2.44.0] - 2023-09-15

### Changed

- Rest filters callback should reset visible filters to initial filters config (OX-1388)

## [2.43.0] - 2023-09-12

### Added

- Added exhaustive testIds across all FilterList components (OX-1323)

## [2.42.0] - 2023-09-05

### Added

- Add `isResetAll` prop on the `<FilterList />` component that will replace `Clear all` with `Reset all` (OX-1288)
- Add `isReset` option that will replace the `clear option` with the `reset option` if the filter item should always have a value (OX-1287)
- Add `isNotDeletable` option that will remove the `delete filter`, if the filter is required (OX-1287)

## [2.40.0] - 2023-08-03

### Added

- Add `FilterList` component (OX-1165)
