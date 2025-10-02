# @8x8/oxygen-popover CHANGELOG

## [Unreleased]

## [2.97.0] - 2025-09-17

### Changed

- Refactor `PopoverMenu` rendering logic to ensure proper content ordering: header content, menu content, footer content (OX-3626)
- Improve complex list rendering with better grouping and accessibility support for section headers (OX-3626)

### Added

- Add new `PopoverMenuExtended.withFooter` example demonstrating footer content usage (OX-3626)

## [2.92.0] - 2025-06-16

### Added

- Expose `onMenuOpenToggle` callback for when the menu opens/closes [OX-3485]
- Expose `onCancel` callback for when the menu is closed without selecting an option [OX-3485]

## [2.82.0] - 2025-02-21

### Fixed

- propagate `ListItemWrapperProps.testId` to inner item of `ListItemWrapper` (which is a button) [OX-3033]

## [2.75.0] - 2024-12-04

- Expose new custom component for lists, `ListItem` (the old one being renamed to `ListItemWrapper`). This has `leadingVisuals` and `secondaryText` as optional props. (OX-2473)

## [2.74.0] - 2024-11-12

### Added

- Add optional `maxHeight?: number` prop to allow max-height customizations for certain use-cases (OX-2703)

### Changed

- isActive & isDisabled design is updated in accordance to figma

## [2.71.0] - 2024-09-17

### Added

- Expose new custom components for complex composed lists: `Divider`, `SectionHeader`, `EmptyStateContainer`, `EmptyState` (OX-2496)
- Add support for rendering complex lists (to be able to include `Divider` and `SectionHeader` components in lists) (OX-2496)

### Changed

- Update design (spacings, colors) (OX-2496)
- Enhance `Popover` and `PopoverMenu` floating ui positioning via `shift()` (OX-2496)
- Adding `pointer` cursor on `ListItem` component (OX-1181)

## [2.70.0] - 2024-08-22

### Changed

- Updated `IconButton` import from oxygen-icon-button to oxygen-button (backwards compatible) (OX-1132)

## [2.68.0] - 2024-07-19

### Changed

- Update `@floating-ui/react` to `0.26.19` (OX-2402)

## [2.63.0] - 2024-04-03

### Added

- Add optional onMenuItemClick used to triggered side effects for click/keyboard events (OX-2049)
- Allow onClick handler to be used from trigger element (OX-2049)

## [2.59.0] - 2024-02-28

### Fixed

- `PopoverMenu`: ensure `onUpdate` is called when the user selects the same item multiple times (OX-1944)
- Remove native outline on the floating-ui wrapper (OX-1941)

## [2.57.0] - 2024-02-06

### Added

- Add initial version as an opinionated `@floating-ui` wrapper, some UI primitives and examples (OX-1194)
