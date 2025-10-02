# @8x8/oxygen-context-menu CHANGELOG

## [Unreleased]

## [2.95.0] - 2025-07-31

### Fixed

- Fix broken (internal) theme name import (OX-460)

## [2.62.0] - 2024-03-14

### Changed

- make the cursor property to be `not-allowed` when disabled (OX-956)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.17.0] - 2022-11-21

### Changed

- Update `pubsub-js` dependency to `1.9.4` (OX-744)
- Rename Storybook component page from `Context Menu` to `ContextMenu` (OX-744)
- Update Storybook Playground (OX-744)

## [1.12.0] - 2021-09-24

### Added

- Add tabbing functionality: now context menu items have `tabindex=0` (if an item `isDisabled`, tabbing will ignore it)
- Add new theme props used in styled componets css rules: `contextMenuItemDisabledColor`, `contextMenuWidth`, `contextMenuItemColorActive`, `contextMenuBorderRadius`, `contextMenuPadding`, `contextMenuItemPadding`

## [0.7.14] - 2019-11-07

### Changed

- In `ContextMenuTrigger`: the `contextMenu` event propagation is not anymore stopped at this component

### Added

- Add `isDisabled` prop to `ContextMenuItem`

### Removed

- Remove some accidentally exposed styled components: `DescriptionWrapper` and `ItemWrapper`

### Fixed

- Fix `contextMenuFontSize` typo in `ContextMenuItem`

## [0.7.13] - 2019-10-30

### Changed

- Change Popper position to fixed

### Added

- Add zIndex 1000 to context menu
- Add test ids

## [0.7.12] - 2019-10-29

### Changed

- Change ContextMenuTrigger children PropType to node

## [0.7.11] - 2019-10-28

### Added

- Create Context Menu component
