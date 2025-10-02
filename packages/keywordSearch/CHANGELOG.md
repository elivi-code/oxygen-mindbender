# @8x8/oxygen-keyword-search CHANGELOG

## [Unreleased]

## [2.75.0] - 2024-12-04

### Fixed

- fixed memoization bug for onClear() callback (OX-2740)

## [2.70.0] - 2024-08-22

### Changed

- Updated `IconButton` import from oxygen-icon-button to oxygen-button (backwards compatible) (OX-1132)

## [2.42.0] - 2023-09-05

### Added

- Added `showSuggestionsDropdown` prop that shows/hides the suggestions dropdown (OX-1305)
- While typing in search input, until suggestions are loaded, a spinner can be visible with an additional text that says the value that we're searching for (OX-1305)
- We have the ability to apply a new filter via "view all results (x items)" (OX-1305)
- When user changes the search input value without applying new search filter, by clicking outside the search input value will be reset to applied filter (OX-1305)
- Clicking on clear button will clear the applied filter too (OX-1305)

### Changed

- Search suggestions will always be visible regardless number of characters typed in search input (OX-1305)
- Removed `keepTypingText` property from translations prop (OX-1312)
- Improved `testId` usage (OX-1312)
- Add proper truncation & tooltip for view all results text (OX-1312)
- Search results list loses focus when navigate outside of component with `tab` (OX-1312)
- Export `KeywordSearchProps` interface (OX-1312)

## [2.36.0] - 2023-06-27

### Added

- Add `KeywordSearch` component (OX-1170)
