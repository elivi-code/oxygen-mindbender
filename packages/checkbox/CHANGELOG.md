# @8x8/oxygen-checkbox CHANGELOG

## [Unreleased]

## [2.92.0] - 2025-06-16

### Fixed
- modified Checkbox's props to also accept `inputProps` as a property (OX-3479)

## [2.77.0] - 2024-12-19

### Fixed
- Align `Checkbox` icon to the top of a multiline text (OX-2751)

## [2.76.0] - 2024-12-10

### Changed
- Updated `Checkbox` icon tokens to solve contrast issues for rest, disabled, checked states (OX-2761)

## [2.74.0] - 2024-11-12

### Changed

- Update storybook guidelines (OX-786)
- Update storybook playground (OX-786)
- Update README to include usage with fieldset and legend (OX-786)

### Removed
- Remove checkbox focus state to switch base label wrapper (OX-786)

## [2.71.0] - 2024-09-17

### Changed

- Update `theme` property to be optional (OX-2487)

## [2.68.0] - 2024-07-19

### Changed

- migrated to ts (OX-1072)
- Updated the type of `Props.value` to generic type `<T extends string | readonly string[] | number | undefined>`

## [2.64.0] - 2024-04-11

### Changed

- Update checkbox image role from `none` to `presentation` (non-functional update) (OX-2041)

## [2.62.0] - 2024-03-14

### Changed

- make the cursor property to be `not-allowed` when disabled (OX-956)

## [2.56.0] - 2024-01-29

### Added

- Add `infoBoxButtonLabel` prop that gets passed as an aria-label to the Label Button (OX-1809)

## [2.47.0] - 2023-10-18

### Fixed

- `Checkbox` custom icon has role="none" as it's irrelevant to a screen reader (OX-1378)

## [2.35.0] - 2023-06-20

### Fixed

- Fix mouse cursor being `pointer` when disabled (fix comes from `SwitchBase`) (OX-1221)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.29.0] - 2023-04-26

### Changed

- No longer allow `Checkbox` to toggle (fire `onChange`) on pressing `Enter`. Such an action should only submit a wrapper form. Changed in underlying `SwitchBase` component (OX-1068)

### Added

- Add a Storybook page for testing `Checkbox` toggle & form submission events (OX-1068)

## [2.27.0] - 2023-03-17

### Changed

- Change `CheckboxIconWrapper` from `div` to `span` (OX-801)

### Added

- Add functionality on pressing `Enter` to toggle checkbox (OX-801)

## [2.17.0] - 2022-11-21

### Changed

- Rename Storybook `Guideline` page to `Guidelines` (OX-744)
- Update Storybook Playground (OX-744)
- Update `react` dev dependency to `17.0.2` (OX-744)

## [2.8.0] - 2022-07-11

### Added

- Multi-line examples to guidelines

## [2.2.0] - 2022-05-10

### Changed

- checkbox icon color not to change on focus

### Added

- Add focus state border/shadow styling

### Removed

- Remove unused properties from the classic theme
- Remove border color change on hover (novo)

## [1.20.0] - 2022-03-02

### Changed

- Update theme values for `disabledColor` & `labelDisabledColor`

## [1.19.0] - 2022-02-22

### Added

- showLabelTooltipOnOverflow prop (default value `true`)

## [1.18.0] - 2022-02-16

### Changed:

- _Deprecate_ `accentColor` classic theme property, use `backgroundColor` instead
- Update classic theme properties: `checkboxSize` is now `size.medium` and `backgroundColor` is now `color.cloudyBlue`

### Added

- Add synthetic events: `onBlur`, `onFocus`
- Add theme properties to the Classic: `disabledColor`, `checkboxIconColorFocus`,`checkboxIconColorHover`, `labelDisabledColor`,
- Add theme properties to the Novo: `checkboxIconColorFocus`, `checkboxIconColorHover`,
- Add svg icon as checkbox, instead of CSS drawing

### Fixed

- Fix backward compatibility with styled components ^4.1.2 by removing the `useTheme` hook from StyledCheckbox
- Fix keyboard navigation
- Fix focus and hover state

## [1.16.2] - 2021-12-17

### Fixed

- Fix performance issue: use static icon instead of dynamic

## [1.9.0] - 2021-09-08

### Added

- Add Novo & Novo Dark theme support
- Add New theme props: `iconSet`, `labelDisabledColor`, `disabledColor`

## [1.2.8] - 2021-02-01

### Added

- Provide theme for nested components

## [1.1.1] - 2020-08-28

### Added

- Add `checkboxIconFillColor` theme property

## [0.7.9] - 2019-10-07

### Changed

- Changed `SwitchBase` component, to auto generate input `id` by default

### Added

- Add `id` input attribute

## [0.7.8] - 2019-09-03

### Added

- Add infoBoxText property to show Tooltip next to label

## [0.7.1] - 2019-07-22

### Changed

- Change **name** default property value to `undefined`

## [0.6.16] - 2019-07-01

### Changed

- Update SwitchBase component to generate input id based on value and name

## [0.6.8] - 2019-05-16

### Added

- Add test attributes

## [0.6.3]

### Added

- Add Checkbox component
