# @8x8/oxygen-pagination CHANGELOG

## [Unreleased]

## [2.95.0] - 2025-07-31

### Added

- Export `PaginationProps` (OX-460)

## [2.94.0] - 2025-07-22

### Fixed

- handle 'Space' and 'Enter' keys on forward, backward buttons (OX-3578)

## [2.89.0] - 2025-04-17

### Fixed

- fix sorting order (OX-3317)
- fix min-width of both RowsPerPage and PageNavigation components to fit numbers with 3 respective 2 digits (OX-3328)

## [2.48.0] - 2023-10-27

### Fixed

- Change `useLayoutEffect` with `useEffect` in order to avoid pagination ref getting null (OX-1528)
- Log error when consumer provides a `rowsPerPage` prop that is not valid (it is not included in `rowsPerPageOptions`) (OX-1528)

## [2.46.0] - 2023-09-28

### Fixed

- Replace pagination page number select label with a custom component for fixing WCAG issues - read items with VoiceOver (OX-1446)

### Removed

- removed unnecessary wrapper - `PageSelectorWrapper` (OX-1446)

## [2.44.0] - 2023-09-15

### Added

- add `menuPlacement="top"` to page number Select (OX-1393)
- add `isDisabled` prop to the component (OX-1393)

### Removed

- remove unnecessary `setPageNumber` & `setRowsPerPage` from `usePagination` hook and code related to (OX-1393)
- remove `setPageNumber` & `setRowsPerPage` from `PaginationHookProps` type (OX-1393)

## [2.43.0] - 2023-09-12

### Added

- Add `Pagination` component (OX-1152)
