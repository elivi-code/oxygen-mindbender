# @8x8/oxygen-tabs CHANGELOG

## [Unreleased]

## [2.74.0] - 2024-11-12

### Changed

- _Breaking_ `Tab` components allows `onClick` when `isActive` (OX-2595)
- Update focus ring color to improve contrast on dark theme (OX-2714)

## [2.71.0] - 2024-09-17

### Added

- Add initial Storybook example for `Accessibility`, with usage with icons and `aria-*` attributes (OX-796)

## [2.62.0] - 2024-03-14

### Changed

- make the cursor property to be `not-allowed` when disabled (OX-956)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.27.0] - 2023-03-17

### Changed

- Converted the codebase to Typescript (OX-958)
- Removed theme props `tabTextFontFamily`, `tabTextFontSize`, `tabTextFontWeight`, `tabTextLineHeight` (used only in Classic) and updated the other font-related theme props in Classic to maintain the same UI (OX-958)

## [2.17.0] - 2022-11-21

### Changed

- Update `styled-tools` dependency to `1.7.2` (OX-744)
- Rename Storybook `Guideline` page to `Guidelines` (OX-744)
- Update Storybook Playground (OX-744)

## [2.11.0] - 2022-08-16

### Added

- Update styling for focus state using new property `tabGap` and added a wrapper component to better control the text overflow in the tabItem (OX-694)

## [2.3.0] - 2022-05-17

### Added

- Update styling for focus state on TabItem in Novo (surrounding border) using new theme properties: `textColorFocus`, `tabBorderColorFocus`, `tabBackgroundFocus`, `tabBorderSizeFocus`

## [2.1.0] - 2022-03-31

### Changed

- Typescript: `theme` prop is now optional.

## [1.9.0] - 2021-09-08

### Added

- deprecated old light/dark theme tokens and classic stylings
- updated styling to use new Novo tokens when not in Classic

### Fixed

- Fix an issue with css transitions not applying for `color` and `border-color`

## [0.7.9] - 2019-10-07

### Added

- Export styled components
- Add `forwardedRef` prop for Tabs component

## [0.7.6] - 2019-08-29

### Added

- Add `aria-selected` HTML attribute to button when tab is active
- Add `disabled` HTML attribute to button
- Add default type for html button element
- Call e.preventDefault only when button is disabled
- Add testId attribute on tab

## [0.1.0]

### Added

- Add initial component structure
