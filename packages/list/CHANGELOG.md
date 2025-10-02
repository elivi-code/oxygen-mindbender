# @8x8/oxygen-list CHANGELOG

## [Unreleased]

## [2.62.0] - 2024-03-14

### Changed

- make the cursor property to be `not-allowed` when disabled (OX-956)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.27.1] - 2023-03-17

### Fixed

- Add oxygen-utils as dependency (OX-990)

## [2.27.0] - 2023-03-17

### Added

- focus visible indicator to list item component. (OX-791)
- `aria-disabled` true when list item is disabled. (OX-791)
- `isActive` prop to `ListItem` component to differentiate the background when an element is active. (OX-791)
- Allow/Prevent enter/space key events to fire/from firing the list item attached handlers - based on the disabled state. (OX-791)

## [2.17.0] - 2022-11-21

### Changed

- Rename Storybook `Guideline` page to `Guidelines` (OX-744)
- Update Storybook Playground (OX-744)

## [2.1.0] - 2022-03-31

### Changed

- Typescript: `theme` prop is now optional.

## [1.12.0] - 2021-09-24

### Changed

- Tabbing functionality: now list items have `tabindex=0`. If an item `isDisabled`, tabbing will ignore it

### Added

- Add new theme props `isClassic`, `listItemHoverColor`

### Removed

- Remove `ListItemText` component. It was redundant and since it was a `button` nesting in it might result in an invalid html syntax. Replaced with proper `tabindex` rules and stylings

## [0.1.0]

### Added

- Add initial component structure
