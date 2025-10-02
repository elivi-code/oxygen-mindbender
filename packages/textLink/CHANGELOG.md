# @8x8/oxygen-text-link CHANGELOG

## [Unreleased]

## [2.77.0] - 2024-12-19

### Changed

- Mark component as deprecated. Use the new `Link` component instead (OX-2552)

### Removed

- Removed styled-components `shouldForwardProp` for v6 compatibility (OX-2392)

## [2.75.0] - 2024-12-04

### Changed

- Add `padding: 0` to allow nicer rendering when using as="button" in certain scenarios (as the native <button> comes with default padding) (OX-2738)

## [2.62.0] - 2024-03-14

### Changed

- make the cursor property to be `not-allowed` when disabled (OX-956)

## [2.59.0] - 2024-02-28

### Added

- Add the `outline` on `focus-visible` CSS pseudo-elements from `TextLinkWrapper` (OX-1681)

### Removed

- Remove the `selection` and `moz-focus-inner` CSS pseudo-elements from `TextLinkWrapper` (OX-1681)
- Remove `isDisabled` property from config example and marked it as deprecated into TextLink types (OX-1681)

## [2.57.0] - 2024-02-06

### Added

- add `as` - optional parameter, so the component can take different tag behaviour. (OX-1850)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.21.0] - 2023-02-06

### Fixed

- Fix exported `TextLinkProps` type (OX-806)

## [2.20.0] - 2023-01-20

### Changed

- `isDisabled` now allows the `TextLink` to be focusable (adds `aria-disabled="true"`), but disables both the regular link (removes `href` and adds `role="link"`) and `onClick` events (OX-806)
- Replace theme props `textLinkFontFamily`, `textLinkFontSize`, `textLinkFontWeight`, `textLinkLineHeight` with `fontFamily`, `fontSize`, `fontWeight`, `lineHeight` across themes (Classic had the former, Novo had the latter) (OX-806)
- Update Storybook pages to new format with a Documentation page and multiple smaller example pages (OX-806)

### Added

- Add transition time to Novo as well (only existed in Classic) (OX-806)
- Add named type export `TextLinkProps` (OX-806)

### Removed

- Remove some react props from bleeding into the DOM & some default attributes (`color`, `aria-disabled="false"`) (OX-806)
- Remove theme prop `textLinkTransitionTime` (OX-806)
- Remove `TextLinkWrapper` references from readme/docs. This is still exposed, but it has no usage, and we don't want to encourage future usage (OX-806)
- Remove some passthrough props from the readme/docs (native `a` attributes such as `target`, `rel` and `styled-components` props: `as` ) (OX-806)

## [2.17.0] - 2022-11-21

### Changed

- Update `styled-tools` dependency to `1.7.2` (OX-744)
- Rename Storybook `Guideline` page to `Guidelines` (OX-744)
- Update Storybook Playground (OX-744)

## [2.4.0] - 2022-05-30

### Changed

- Update focus UI for the TextLink component

## [2.1.0] - 2022-03-31

### Changed:

- Typescript: `theme` prop is now optional.

### Added

- Typescript: `className` prop.

## [1.12.0] - 2021-09-24

### Fixed

- Fix `TextLink` to no longer use the active state when disabled

## [0.7.15] - 2019-11-27

### Changed

- Reset default styles for button element

### Added

- Add prop `as`
- Expose styled components

## [0.6.0]

### Added

- Add initial component structure
