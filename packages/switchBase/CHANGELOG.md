# @8x8/oxygen-switch-base CHANGELOG

## [Unreleased]

## [2.77.0] - 2024-12-19

### Fixed
- Align `SwitchBase` icon to the top of a multiline text (OX-2751)

## [2.74.0] - 2024-11-12

### Added

- Add `isFocused` state on label element (OX-786)
- Add `isToggleButton` prop (OX-786)

## [2.68.0] - 2024-07-19

### Changed

- migrated to ts (OX-1072)
- updated the type of `Props.value` to generic type `<T extends string | readonly string[] | number | undefined>`

## [2.56.0] - 2024-01-29

### Added

- Add `infoBoxButtonLabel` prop that gets passed as an aria-label to the Label Button (OX-1809)

## [2.41.0] - 2023-08-16

### Fixed

- Allows extra attributes to be passed down to the input element (OX-1274)

## [2.35.0] - 2023-06-20

### Fixed

- Fix mouse cursor being `pointer` on disabled `SwitchBase` (fix applies to both `ToggleButton` and `Checkbox`) (OX-1221)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.29.0] - 2023-04-26

### Changed

- No longer allow `SwitchBase` to toggle (fire `onChange`) on pressing `Enter`. Such an action should only submit a wrapper form (OX-1068)

## [2.27.0] - 2023-03-17

### Added

- Add `onKeyPress` and `aria-disabled` on `SwitchBaseInput` (OX-801)
- Add `inputProps` on `SwitchBaseInput` and `labelProps` on `SwitchBaseLabel` (OX-801)
-

### Changed

- Change `StyledSwitchBaseGroup` from `div` to `fieldset` (OX-801)

## [2.17.0] - 2022-11-21

### Changed

- Update `uuid` dependency to `9.0.0` (OX-744)

## [2.10.0] - 2022-08-08

### Changed

- Pass `testId` unprocessed to `SwtichBaseInput` (it will be processed inside of input component)

### Fixed

- Make `name` prop optional (OX-681)

## [2.8.0] - 2022-07-11

### Changed

- Add cursor type "pointer" on label
- Vertical-align label to centre of input
- SwitchBaseGroup items are aligned to start of container

## [1.19.0] - 2022-02-22

### Added

- Add prop `showLabelTooltipOnOverflow` (default value `true`)

### Removed

- Remove unused prop `isIndeterminate`

### Fixed

- Passtrough props are now properly passed through to the DOM

## [1.18.0] - 2022-02-16

### Added

- Add synthetic events: `onBlur`, `onFocus`, `onMouseEnter`, `onMouseLeave`

## [1.9.0] - 2021-09-08

### Changed

- Do not alter opacity for `novo` iconSet theme prop (applies for novo checkbox theme)

### Added

- Add theme prop `labelDisabledColor`

## [0.7.9] - 2019-10-07

### Changed

- Change `SwitchBase` component to auto generate input `id` by default

### Added

- Add `id` input attribute
