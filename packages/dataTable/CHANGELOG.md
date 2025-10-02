# @8x8/oxygen-data-table CHANGELOG

## [Unreleased]

## [2.97.0] - 2025-09-17

### Fixed

- table header cell wraps text in max 3 lines, with overflow, if text does not fit in 3 lines (OX-3731)

### Changed

- BREAKING CHANGE: renamed 2 exported symbols because of a typo: getSelectColumDef => getSelectColumnDef, getSingleSelectColumDef => getSingleSelectColumnDef (OX-3731)

## [2.94.0] - 2025-07-22

### Fixed

- on first mouse click inside table, first row gets the blue focus rectangle (OX-3578)
- on successive mouse clicks, clicked row will get the blue focus rectangle (OX-3578)

## [2.93.0] - 2025-07-03

### Fixed
- changed color from ui09 to to hover10, for hover state; changed color from ui09 to active10 for selected/active state (OX-3488)

### Changed
- added accessibility feature: keyboard navigation within the table
- fixed misalignment issue due to `align-self: center` not being applied (OX-3526)
- improved DataTable row rendering when virtualized (OX-3526)

## [2.92.0] - 2025-06-16

### Fixed
- added property 'aria-label' to CheckboxCell (OX-3479)

## [2.91.0] - 2025-05-28

### Fixed
- row actions not appearing after a scroll & page change, if table is virtualized, paginated

## [2.87.0] - 2025-03-31

### Added
- ability to render virtualized rows (OX-3220)

## [2.85.0] - 2025-03-07

### Changed
 - Makes the column for the search in the TableHeader component have a max width equal to the max width of the KeyWord Search component used (OX-3104)

## [2.83.0] - 2025-02-27

### Changed

- set a testId for dataTable's inner component: MoreRowActions [OX-3033]
- Breaking change: renamed `Table` prop `getRowErrors` to `getRowStatus`, and `RowErrorType` to `RowStatusType` (OX-3039)

### Added
- Row status `INFO` (OX-3039)
- Exported `CheckboxCell` (OX-3071)

## [2.82.0] - 2025-02-21

### Added

- Exported styled components as: Body, BodyRow and Cell (OX-3034)

### Changed

- remove useMemo when init tableColumns in columnManagement to allow initial columns definition to be modified (OX-3031)
- some components now accept testId property [OX-3033]

## [2.80.0] - 2025-02-17

### Changed

- `TableHeaderProps['filter']` now inherits all the props from `FilterListInterface` of @8x8/oxygen-filter-list

- added shouldGetTotalResults to the signature of the callback `onPaginationChange` returned by `useDataRetrieval`:
  new signature looks like: `onPaginationChange: (paginationState: PaginationState, shouldGetTotalResults?: boolean) => void`

## [2.78.0] - 2025-01-22

### Added

- Add DataTable component (OX-2708)
