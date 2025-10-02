# @8x8/oxygen-select CHANGELOG

## [Unreleased]

## [2.97.0] - 2025-09-17

### Changed 

- added support for focusable isDisabled: when select is disabled, it still cann be focused via ref.focus() but it cannot be modified (OX-3707)

## [2.72.0] - 2024-10-01

### Fixed

- Fix incorrectly showing `not-allowed` cursor in `Label` (and components using it such as `Select`, `TextField` etc) (OX-2603)

## [2.70.1] - 2024-09-02

### Changed

- Remove improper usage of role="listbox" and aria-multiselectable from ValueWrapper (OX-2485)

## [2.70.0] - 2024-08-22

### Added

- add inputProps for input attributes like autoComplete (OX-2285)

### Changed

- use inputProps in default Input and custom (selectable text) Input (OX-2285)

### Added

- pass `otherActionProps` to Label component (OX-2476)

## [2.62.0] - 2024-03-14

### Changed

- added OwnProps to exported types (it is required by tsc if the host project is with 'declaration': true) (OX-2018)
- based on isAsync parameter, use either the AsyncSelect or ordinary Select's type for properties (OX-2018)

- make the cursor property to be `not-allowed` when disabled (OX-956)

## [2.59.0] - 2024-02-28

### Changed

- added option: selectable input field inside react-select (OX-1087)
- migrated to ts (OX-1087)

- Changed `menuPlacement: 'auto'` into select props (OX-1855)
- The `Select` component doesn't show anymore an inline `LoadingIndicator` (OX-1914)
- Update `react-select` dependency to [5.8.0](https://github.com/JedWatson/react-select/releases/tag/react-select%405.8.0) (OX-1923)

## [2.58.0] - 2024-02-08

### Added

- Add Storybook example for how to render a `Select` in a `Modal` (OX-1890)

## [2.56.0] - 2024-01-29

### Added

- Add `infoBoxButtonLabel` prop that gets passed as an aria-label to the Label Button (OX-1809)

### Added

- Add props `isLoading`, `loadingMessage` (OX-1536)

## [2.54.0] - 2024-01-09

### Added

- Following changes that improve WCAG navigation for select component: (OX-795)
- `aria-hidden` to img of clear all icon because it should not be navigable, instead the wrapper with role button should be (OX-795)
- replaced ClearIndicator component with div that inherits all old styles, in order to be able to access clear all icon using screen reader (OX-795)
- `aria-multiselectable`, role `listbox` to ValueWrapper and role `option`, `aria-selected` to selected options elements in case that there multiple values (OX-795)
- `aria-hidden` to left icon as it shouldn't be accessible by the screen reader (OX-795)

## [2.52.0] - 2023-12-07

### Fixed

- Allow selected values with `isMulti` to be removed with a single click when container has scrolling (OX-1517)

## [2.40.0] - 2023-08-03

### Added

- new prop `shouldWrapLabel` which allows label and action link to wrap into two lines (OX-1262)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.30.0] - 2023-05-04

### Added

- Use custom `SingleValue` & export it as well. This enhances the default `react-select` component with a `title` attribute when the content overflows (OX-729)

### Fixed

- Update `react-select` to fix positioning issues (OX-1094)

## [2.27.0] - 2023-03-17

### Added

- Add support for Groups in the VirtualMenuList component (counts all children correctly for the proper height calculations) (OX-943)

## [2.21.0] - 2023-02-06

### Fixed

- Attempt to fix `react-select` types by using its own types instead of the ones from `@types/react-select` (OX-889)

## [2.19.0] - 2022-12-22

### Changed

- Vertically center left icon (with `iconLeft`) & right indicators (clear & arrow) (OX-756)
- Update Typography tokens from `body01` to `bulletList01` (only difference is line-height: `1.25rem` => `1.5rem`) (OX-756)

### Added

- Add support for font scaling. `Select` height will scale based on font-size (OX-756)
- Add `aria-label` prop to `Select` component, with `labelValue` (fall back to `placeholder`) as value (OX-756)

### Removed

- Remove theme prop `optionRowHeight` (to allow Select to scale vertically based on font size) (OX-756)

## [2.17.0] - 2022-11-21

### Changed

- Update `react-select` dependency to `5.6.0` (OX-744)
- Update `react-window` dependeny to `1.8.8` (OX-744)
- Update `polished` dependency to `4.2.2` (OX-744)
- Update Storybook Playground (OX-744)

### Fixed

- Fix a bug where the testId from passed to the `Select` component was not being applied to the `Tag` component & to the custom wrapper around the Tag value (OX-761)

## [2.16.0] - 2022-10-21

### Changed

- Adjust the height for the `small` size to start from `32px` according to the design system (OX-711)
- Replace the `MultiValueChip` component with the new `Tag` component (OX-711)

### Removed

- Remove now unused theme props: `multiValueChipBackgroundColor`, `multiValueChipBorderRadius`, `multiValueChipCloseIconChipHoveredColor`, `multiValueChipCloseIconColor`, `multiValueChipCloseIconHoveredColor`, `multiValueChipFontSize`, `multiValueChipHoveredBackgroundColor`, `multiValueChipHoveredTextColor`, `multiValueChipMarginRight`, `multiValueChipPaddingLeft`, `multiValueChipPaddingRight`, `multiValueChipTextColor`

## [2.14.0] - 2022-10-03

### Changed

- Allow React 18 to be used as peer dependency (OX-738)

### Added

- Add prop `isCreatable` (Boolean), see https://react-select.com/creatable for usage (OX-713)

### Fixed

- `forwardedRef` now correctly contains a ref of the underlying Select component (OX-713)
- `menuPlacement="auto"` no longer breaks `maxHeight` when opening vertically (OX-713)
- when a multi select is disabled selected values no longer have the clear icon and removing them is no longer possible (OX-713)

## [2.12.0] - 2022-08-29

### Added

- Add `testId` support for the `MultiValue` component (Chip and Chip removal) (OX-707)

## [2.9.0] - 2022-07-13

### Added

- Add prop `isAsync` (Boolean). Expects a `loadOptions` prop instead of `options` see https://react-select.com/async for usage (OX-659)
- Add prop `multipleSelectMaxRows` (Number). Default `1`. Only works together with `isMulti`. If a larger number than 1 the Select component will grow in height to accomodate the specified number of rows and render a scrollbar when the number of rows is exceeded (OX-659)
- Add new examples under Select > Guidelines (OX-659)
- Add Novo default theme props to accomodate updated design (Chip & placeholder colors) (OX-659)

### Changed

- Update `react-select` dependency updated to latest (`5.4.0`) & removed dep on `@types/react-select` since `react-select` now exports its own types (OX-659)
- `valueContainerPadding` theme prop is now applied as the complete `padding` CSS rule (previously it was only applying as horizontal padding) (OX-659)
- Update default value for `multiValueChipPaddingRight` (reduced padding) (OX-659)

### Fixed

- Fix Novo Dark theme Clear indicator colors (were not visible before) (OX-659)

### Removed

- Remove theme prop `multiValueChipWrapperMargin` (OX-659)

## [2.7.0] - 2022-07-01

### Added

- Add prop `forwardedRef` to link external ref to react-select (OX-666)
- Add hook `useImperativeHandle` to provide an override of `forwardedRef` `.focus()` specific to `react-select` (OX-666)

## [2.2.0] - 2022-05-10

### Fixed

- Placeholder in Select is wrapped with ellipses

## [2.1.0] - 2022-03-31

### Added

- Typescript: `large` size variant to `size` prop.
- Typescript: `defaultValue` prop.
- Typescript: `onChange` prop.
- Typescript: `hasShortMultiDisplay` prop.

## [1.18.0] - 2022-02-16

### Added

- Add new export `VirtualMenuList` based on `react-window` for virtual scrolling. Used for rendering large datasets. See docs for usage

## [1.16.3] - 2022-01-18

### Fixed

- Use menuZIndex from theme in menu portal styling

## [1.14.0] - 2021-10-13

### Changed

- Removed react as a devDependency

### Fixed

- Incorrect type declaration for iconProps in SelectOption interface

## [1.10.0] - 2021-09-14

### Fixed

- Add `borderColorHover` theme prop to Select to fix Classic theme border blending in with background

## [1.7.0] - 2021-06-28

### Added

- Add Novo theme support
- Add new theme props (with Classic defaults set up to not induce changes): `backgroundColorHover`, `borderWidth`, `iconMargin`, `iconSize`, `inputBoxSizeLarge`, `multiValueChipPaddingVerticalLarge`, `optionSelectedBackground`, `placeholderTextColorDisabled`
- Add new value prop `size`: `'large'` (`48px`)
- Add new Storybook examples for `size`

## [1.6.0] - 2021-06-09

### Fixed

- Add missing `options` prop from `SelectProps` interface
- Fix a warning about `findDOMNode` being deprecated by updating `react-select` to version [4.3.1] as suggested [here](https://github.com/JedWatson/react-select/issues/4094) and [here](https://github.com/JedWatson/react-select/pull/4313)

## [1.3.4] - 2021-04-14

### Fixed

- Allow overriding theme for nested components, related to fix from [1.3.3]

## [1.3.3] - 2021-04-14

### Fixed

- Apply theme properties: `optionTextColor`, `optionTextFontSize` to checkbox and radio label

## [1.1.9] - 2020-11-11

### Removed

- Width style rule which expanded the input and cramped the select options

### Fixed

- Invalid prop type for `iconLeft`

## [1.1.8] - 2020-10-15

### Changed

- Update styles for disabled state

### Added

- Add theme props: `borderColorDisabled`, `backgroundColorDisabled`, `dropdownIndicatorColorDisabled`, `optionTextFontSize`, `optionTextFontWeightSelected`, `noOptionTextFontSize`, `menuBorderStyle`, `headingTextFontSize`, `headingTextFontWeight`, `headingTextColor`, `headingBorderStyle`, `headingMargin`
- Add new props: `noOptionsMessage`, `placeholder`

### Fixed

- Fix S=styles for options in react-portal

## [1.1.7] - 2020-09-29

### Added

- Add prop: `hasError`
- Add theme property: `borderColorError`

## [1.1.4] - 2020-09-11

### Added

- Add theme property: `inputColor`

## [1.1.1] - 2020-08-28

### Added

- Add `testId` to ValueContainer component
- Add theme property: `optionActiveBackgroundColor`

## [1.0.0] - 2020-07-24

### Changed

- default menu `z-index` from `1` to `1000`
- focus styles, replace `box-shadow` property with `border-color`

### Added

- Add theme properties: `menuZindex`,`borderColorFocus`

### Fixed

- `menuBoxShadowColor` allow all color format

## [0.9.0] - 2020-03-12

### Fixed

- Icon imports which caused the significant increase of the bundle size

## [0.8.6] - 2020-01-30

### Changed

- Conditional positioning for value and placeholder

## [0.8.5] - 2020-01-28

### Changed

- `Option` to have `Radio` instead of `Checkbox` when `hasCheckbox` is true but `isMulti` is false
- Placeholder icon and option icon to be customisable using the theme
- Select control box shadow when focused is now using `controlFocusBoxShadow` theme property

### Added

- Add `MultiValue` custom component for multiple selected options
- Add prop `hasShortMultiDisplay` to specify if multiple selected options should be displayed in short mode
- Add styled components: `MultiValueChip`, `MultiValueChipCloseIcon`, `ValueWrapper`, `ShortMultiDisplay`

### Fixed

- `Select` top margin to only appear when the `Select` has a `Label`

## [0.8.4] - 2020-01-07

### Changed

- `Label` component is not rendered if `labelValue` prop has no value
- `labelValue` and `infoBoxText` default props value are now `undefined`

## [0.8.3] - 2020-01-07

### Added

- Add Select
