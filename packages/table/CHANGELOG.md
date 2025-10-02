# @8x8/oxygen-table CHANGELOG

## [Unreleased]

## [2.71.0] - 2024-09-17

### Changed

- Update `theme` property to be optional (OX-2487)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.17.0] - 2022-11-21

### Changed

- Rename Storybook `Guideline` page to `Guidelines` (OX-744)
- Update Storybook Playground (OX-744)

## [1.8.0] - 2021-08-03

### Added

- Update `getHoverStyles` `getSelectedStyles` with `hover` overrides to support usae of new theme tokens
- Add `zebra` prop for `Table` and `TableFlex` (defaults to `false`). Controls the change in background color of every other table row to `theme.zebraRowBackgroundColor`
- Use newly exposed theme tokens for styling `Table`, `TableCell`, `TableRow` and their `Flex` variants: `tableRowHoverColor`,, `zebraRowBackgroundColor`,, `tableCellFontWeight`,, `tableCellLetterSpacing`,, `tableCellFontFamily`,, `tableCellHeadLetterSpacing`,, `tableCellHeadFontFamily`,, `fontVariantNumeric`,

## [0.7.4] - 2019-08-12

### Added

- Create Table component
