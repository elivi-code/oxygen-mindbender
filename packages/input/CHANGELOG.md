# @8x8/oxygen-input CHANGELOG

## [Unreleased]

## [2.78.0] - 2025-01-22

### Changed
- When Input `isDisabled` we have removed the `disabled` input attribute (OX-275)
- When Input `isDisabled` we have kept `aria-disabled`, added the `readonly` and `aria-readonly` attributes (OX-275)

### Removed
- Input `readonly` + `disabled` UI styling in storybook removed (OX-725)

## [2.72.0] - 2024-10-01

### Changed

- migrated to ts (OX-1076)
- _Deprecate_ `inputType` constant, use built-in React.HTMLInputTypeAttribute (OX-1076)
- removed `styled-tools` dependency (OX-1076)

## [2.62.0] - 2024-03-14

### Added

- Add test id on input field to allow for testing (OX-2017)

### Changed

- make the cursor property to be `not-allowed` when disabled (OX-956)

## [2.36.0] - 2023-06-27

### Fixed

- Fix `iconLeft` movement when typing by adding the `min-width` property to the `InputIcon`. (OX-1170)

### Changed

- Change `iconLeft`, `iconRight` types to `React.ComponentType<any>`. (OX-1170)
- Change `inputRef` type to `React.Ref<HTMLInputElement>` and `forwardedRef` type to `React.Ref<HTMLElement>`. (OX-1170)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.26.0] - 2023-03-03

### Added

- Add props: `inputProps` for InputField component (OX-797)

## [2.19.0] - 2022-12-22

### Changed

- Change `Input` to use `min-height` instead of `height` to allow vertical scaling to better support font-size scaling (OX-770)

## [2.17.0] - 2022-11-21

### Changed

- Update `styled-tools` to `1.7.2` (OX-744)
- Update Storybook Playground (OX-744)

## [2.6.0] - 2022-06-23

### Changed

- Read-only state for novo theme

## [2.1.0] - 2022-03-31

### Changed

- Typescript: `theme` prop is now optional
- Update documentation: `large` size variant

### Added

- Typescript: `className` prop
- Typescript: `forwardedRef` prop

## [1.19.0] - 2022-02-22

### Added

- Add prop `autoFocus`

## [1.18.0] - 2022-02-16

### Added

- Add `Input` prop `aria-readonly` attribute
- Add theme props `borderWidthReadOnly`, `borderRadiusReadOnly`

## [1.14.0] - 2021-10-13

### Added

- Add props `onBlur` & `onFocus` callbacks

## [1.10.0] - 2021-09-14

### Fixed

- Fix types for event handler props
- Fix Safari rendering bug for `disabled` input field text color

## [1.7.0] - 2021-06-28

### Changed

- Prop `isReadOnly` no longer shows `focused` borderColor

### Added

- Add Novo & NovoDark theme support
- Add large size support via new theme prop `heightLarge`
- Add new theme prop `prefixSuffixHorizontalSpacing` to control prefix & suffix horizontal padding
- Add new theme prop `iconHorizontalSpacing` to control icon horizontal margin
- Add new theme prop `iconSize` to control LeftIcon and RightIcon render size
- Add new theme prop `prefixSuffixInsideInput` to render prefix and suffix inside the InputWrapper (inside the borders of the focused input)

## [1.3.3] - 2021-04-14

### Added

- Add prop `isReadOnly`

## [1.1.9] - 2020-11-11

### Fixed

- Invalid prop type for `iconLeft` and `iconRight`

## [1.1.3] - 2020-09-03

### Added

- Add prop `autoPrefixWidth` to allow prefix to resize
- Add prop `autoSuffixWidth` to allow suffix to resize

## [1.1.1] - 2020-08-28

### Added

- Add prop `testId`

## [1.0.0] - 2020-07-24

### Removed

- **Breaking:** Remove `autocomplete` prop, use `autoComplete` instead

## [0.9.0] - 2020-03-12

### Fixed

- Fix `inputRef` property, accepts object, not only function. For objects, sets the ref of the input element as `current`

## [0.8.7] - 2020-02-28

### Changed

- `iconLeft` and `iconRight` colors will now use the placeholder color when input has no value

## [0.7.17] - 2019-12-02

### Fixed

- Fix broken Input focus behavior

## [0.7.15] - 2019-11-27

### Added

- Add `inputRef` prop

## [0.7.14] - 2019-11-07

### Added

- Update inputType to support `tel`

## [0.7.9] - 2019-10-07

### Changed

- _Deprecate_ prop `autocomplete`
- Update component API: `autocomplete` to `autoComplete`

### Added

- Add `isRequired` props
- Add `aria-*` attributes: `aria-disabled`, `aria-invalid`, `aria-required`
- Add `max`, `min` attributes

## [0.7.3] - 2019-08-08

### Added

- Add `autocomplete` HTML attribute

## [0.6.16] - 2019-07-01

### Added

- Add support for value as number

## [0.6.7] - 2019-05-08

### Added

- Add maxLength attribute for Input component

## [0.6.3]

### Changed

- Move theme properties `descriptionFontSize` to `textField` theme
- Update component APIs: `disabled` to `isDisabled` & `required` to `isRequired`

## [0.4.5]

### Added

- Add initial component structure
