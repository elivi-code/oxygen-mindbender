# @8x8/oxygen-column-management CHANGELOG

## [Unreleased]

## [2.97.0] - 2025-09-17

### Changed

- Updated to use useAriaLive hook from @8x8/oxygen-utils for screen reader announcements (OX-3521)

## [2.95.0] - 2025-07-31

### Changed

- Extended TelemetryInterface to Record<string,string> to allow to consumers have flexibility to add any property (OX-3613)

## [2.94.0] - 2025-07-22

### Added

- Applied add and removed changes via aria-live and allow to pass custom translation to it(OX-3524)

## [2.93.0] - 2025-07-03

### Changed

- The headings "Active Columns" & "Available Columns" are marked as `h2`. Also marked as label via `aria-labelledby` for the sortable grids below (OX-3522)

## [2.82.0] - 2025-02-21

### Changed

- Removed width for ordered numbers to fix overlapping text when font-size is increased to 32px (OX-3035)

## [2.80.0] - 2025-02-17

### Changed

- Update default translation for Add, Drag & Remove buttons and have them include the column name to improve screen reader experience (OX-2937)

## [2.76.0] - 2024-12-10

### Added

- Add new optional prop - tooltipText and render tooltip if that props exists(OX-2533)

## [2.71.0] - 2024-09-17

### Added

- Add telemetryCallback for remove column when drag & drop (OX-2533)

## [2.70.0] - 2024-08-22

### Changed

- Updated `IconButton` import from oxygen-icon-button to oxygen-button (backwards compatible) (OX-1132)

## [2.66.0] - 2024-05-14

### Added

- Allow removing a column with drag & drop from active columns (OX-2147)

### Changed

- Add a darker background on the ghost element in order to better show how the list will stay after drop (OX-2146)

### Fixed

- Fix not allow dragging inside Available Columns (OX-2143)

## [2.64.0] - 2024-04-11

### Fixed

- Fix inconsistent width behaviour in sortable overlay when dragging begins in a scrollable container and ends in a non-scrollable container. (OX-2052)
- Fix dragging issue when using zoom in and keyboard to sort items. (OX-2019)

## [2.61.0] - 2024-03-11

### Fixed

- Fix when clicking on a row, the "draggable button" remains visible (OX-1943)
- Fix when pressing SHIFT+TAB on the modal the "draggable icon" button is not focused (OX-1943)
- Fix when clicking on the "bin" icon or on the "+" button, pressing with SPACE or ENTER, focus is lost. (OX-1943)
- Fix item shifting when using down arrow and moving to the next list (OX-1943)
- Fix Modal not closing on Esc (OX-2011)

## [2.60.0] - 2024-03-01

### Changed

- Improve UX on Column Management using ghost element instead of a drop indicator (OX-1845)

## [2.58.0] - 2024-02-08

### Added

- Add telemetryProps and new telemetry events (OX-1877)

## [2.57.0] - 2024-02-06

### Fixed

- Fix handleDragEnd not updating when items changed(OX-1846)

### Changed

- Changed onReset callback to optional(OX-1846)

### Added

- Export ModalTranslations(OX-1846)

## [2.55.0] - 2024-01-19

### Added

- Add initial version (OX-1542)
