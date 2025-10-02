# @8x8/oxygen-toggle-button CHANGELOG

## [Unreleased]

## [2.77.0] - 2024-12-19

### Fixed
- Align `ToggleButton` icon to the top of a multiline text (OX-2751)

## [2.74.0] - 2024-11-12

### Changed

- Update storybook guidelines (OX-786)
- Update storybook playground (OX-786)
- Update README to include usage with fieldset and legend (OX-786)

### Removed

- Remove toggle button focus state to switch base label wrapper (OX-786)

## [2.71.0] - 2024-09-17

### Changed

- Update `theme` property to be optional (OX-2487)

## [2.68.0] - 2024-07-19

### Changed

- migrated to ts (OX-1072)
- updated the type of `Props.value` to generic type `<T extends string | readonly string[] | number | undefined>`

## [2.62.0] - 2024-03-14

### Changed

- make the cursor property to be `not-allowed` when disabled (OX-956)

## [2.56.0] - 2024-01-29

### Added

- Add `infoBoxButtonLabel` prop that gets passed as an aria-label to the Label Button (OX-1809)

## [2.35.0] - 2023-06-20

### Fixed

- Fix mouse cursor being `pointer` when disabled (fix comes from `SwitchBase`) (OX-1221)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.29.0] - 2023-04-26

### Changed

- No longer allow `ToggleButton` to toggle (fire `onChange`) on pressing `Enter`. Such an action should only submit a wrapper form. Changed in underlying `SwitchBase` component (OX-1068)

### Added

- Add a Storybook page for testing `ToggleButton` toggle & form submission events (OX-1068)

## [2.27.0] - 2023-03-17

### Added

- Add functionality on pressing `Enter` to toggle button (OX-801)
- Add `role="switch"` on `ToggleButton` (OX-801)

### Changed

- Change `LabelTextWrapper` from `div` to `span` (OX-801)

## [2.17.0] - 2022-11-21

### Changed

- Rename Storybook `Guideline` page to `Guidelines` (OX-744)
- Update Storybook Playground (OX-744)

## [2.8.0] - 2022-07-11

### Added

- Add Multi-line examples to guidelines

## [2.2.0] - 2022-05-10

### Changed

- Update focus and hover state according to design,
- _Deprecate_ prop `isIndeterminate`
- _Deprecate_ theme prop `backgroundColorFocus`, use `outlineColorFocus`

### Added

- Add animation to toggle knob

### Removed

- Remove theme prop `backgroundColorHover`

## [2.1.0] - 2022-03-31

### Added

- Typescript: `className` prop.

## [1.20.0] - 2022-03-02

### Changed

- ToggleButton is disabled UI by adding `labelDisabledColor` theme prop to have ToggleButton in sync with Checkbox, adding opacity 0.5 for the ToggleButtonIcon & updating `backgroundColorDisabled` & `knobColorDisabled` theme values

## [1.19.0] - 2022-02-22

### Added

- Add props `showLabelTooltipOnOverflow` (default value `true`)

## [1.18.0] - 2022-02-16

### Added

- Add synthetic events: `onBlur`, `onFocus`
- Add theme props to `novo` theme: `backgroundColorDisabled`, `backgroundColorFocus`, `backgroundColorHover`, `knobColorDisabled`
- Add theme props to `classic` theme: `backgroundColorDisabled`, `backgroundColorFocus`, `backgroundColorHover`,

## [1.9.0] - 2021-09-08

### Changed

- Update `novo` tokens `verticalGroupMargin`, `horizontalGroupMargin` theme values to match Checkbox and Radio

## [1.7.0] - 2021-06-28

### Added

- Add support for Novo and Novo Dark themes

## [1.2.8] - 2021-02-01

### Added

- Provide theme for nested components

## [0.7.9] - 2019-10-07

### Added

- Add `id` input attribute

### Changed

- Changed `SwitchBase` component to auto generate input `id` by default

## [0.7.8] - 2019-09-03

### Added

- Add infoBoxText property to show Tooltip next to label

## [0.7.1] - 2019-07-22

### Changed

- Change **name** default property value to `undefined`

## [0.6.16] - 2019-07-01

### Changed

- updated SwitchBase component to generate input id based on value and name

## [0.6.8] - 2019-05-16

### Added

- Add test attributes
