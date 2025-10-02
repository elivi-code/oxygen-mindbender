# @8x8/oxygen-button CHANGELOG

## [Unreleased]

## [2.96.0] - 2025-08-06

### Added

- Add `as` prop to IconButton TypeScript interface to support styled-components polymorphic rendering (OX-3418)

## [2.94.0] - 2025-07-22

### Changed

- Update `IconButton` design to improve contrast for accessibility (OX-3445)

## [2.77.0] - 2024-12-19

### Changed

- Removed styled-components `shouldForwardProp` for v6 compatibility (OX-2392)

## [2.75.0] - 2024-12-04

### Fixed

- `IconButton` correctly support `isInverted` with the updated focus ring color (OX-2738)

## [2.74.0] - 2024-11-12

### Changed

- Update focus ring, background & text colors to improve contrast on dark theme (OX-2714)

## [2.71.0] - 2024-09-17

### Added

- Add isDestructive prop to regular button component (OX-2361)
- Deprecate `variant="destructive"`. Please use new property `isDestructive` instead.

## [2.70.0] - 2024-08-22

### Changed

- Moved and updated `IconButton` package from oxygen-icon-button to oxygen-button (OX-1132)

## [2.62.0] - 2024-03-14

### Changed

- make the cursor property to be `not-allowed` when disabled (OX-956)

## [2.57.0] - 2024-02-06

### Added

- Add new `DropdownButton` component. Stateless, to be used together with `Popover` (OX-1194)

## [2.54.0] - 2024-01-09

### Added

- Add `iconLeft` and `iconRight` support (OX-1135)

## [2.37.0] - 2023-07-13

### Added

- Add `text` button variant (OX-1131)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.25.0] - 2023-03-01

### Changed

- Change `disabled` attribute to `aria-disabled` in order to be able to focus the button in disabled state. In this case we prevent onClick, onKeydown(space / enter action handlers) from being fired. (OX-783)

## [2.23.0] - 2023-02-10

### Fixed

- Add back default `type="button"` on native HTML button element (OX-919)

## [2.21.0] - 2023-02-06

### Changed

- Deprecate `hasShadow` (it's been broken from Oxygen 2.2.0 and only applies in the Classic theme) and clean up related (unused) code (OX-810)

### Added

- Export `buttonGroupAlignment` object with values for the `alignment` prop for `ButtonGroup` (OX-810)

## [2.19.0] - 2022-12-22

### Changed

- Allow `Button` to scale vertically based on font-size for accessibility (OX-767)

## [2.17.0] - 2022-11-21

### Changed

- _Deprecate_ theme properties: `marginLeftLarge`, `marginBottomLarge`, `marginLeftSmall`, `marginBottomSmall`. Please use the new theme properties instead `buttonGroupSpacingSmall`, `buttonGroupSpacingLarge` (OX-742)
- Rename Storybook `Guideline` page to `Guidelines` (OX-744)
- Update Storybook Playground (OX-744)

### Added

- Add theme props: `buttonGroupSpacingSmall`, `buttonGroupSpacingLarge` (OX-742)

### Fixed

- Fix button positioning in button group at smaller resolution (OX-742)

### Removed

- Remove `ButtonGroup` prop values: `big`, `medium` (OX-742)
- Remove `ButtonGroup` props: `hasHorizontalSpacing`, `hasVerticalSpacing` (OX-742)

## [2.6.0] - 2022-06-23

### Fixed

- Forward the ref property to CircularButton

## [2.4.0] - 2022-05-30

### Added

- Add `tertiaryReversed` button variant

## [2.2.0] - 2022-05-10

### Changed

- Replace button borders with shadows to improve its interaction with focus styling

## [2.1.0] - 2022-03-31

### Changed

- Typescript: `theme` prop is now optional

### Fixed

- Typescript: missing `buttonVariant` and `buttonSize` export

## [1.15.1] - 2021-10-19

### Fixed

- Make `variant` an optional prop on `ButtonProps` type definition

## [1.14.0] - 2021-10-13

### Fixed

- Add missing `variant` prop type definition

## [1.13.0] - 2021-10-07

### Added

- Add new `isCircular` prop in order to achieve `CircularButton`
- Add new variant type: `tertiary`

## [1.8.0] - 2021-08-03

### Changed

- Refactor theming logic to accomodate new button types and theme props
- Deprecate `secondary` prop in favour of `variant`
- Update `size` prop default value from `big` to `medium`. Add logic to switch between the 2 if theme changes from Novo to Classic

### Added

- Add new `size` prop possible values: `large` and `medium`
- Add new Button types: `destructive` and `success`
- Add new `variant` prop. Possible values: `primary`, `secondary`, `destructive`, `success` (default: `primary`)
- Use newly exposed theme props: `borderColorPrimaryFocus`, `borderColorSecondaryFocus`, `backgroundColorDestructive`, `backgroundColorDestructiveHover`, `backgroundColorDestructiveActive`, `backgroundColorDestructiveDisabled`, `borderColorDestructive`, `borderColorDestructiveHover`, `borderColorDestructiveActive`, `borderColorDestructiveDisabled`, `borderColorDestructiveFocus`, `fontColorDestructive`, `fontColorDestructiveDisabled`, `backgroundColorSuccess`, `backgroundColorSuccessHover`, `backgroundColorSuccessActive`, `backgroundColorSuccessDisabled`, `borderColorSuccess`, `borderColorSuccessHover`, `borderColorSuccessActive`, `borderColorSuccessDisabled`, `borderColorSuccessFocus`, `fontColorSuccess`, `fontColorSuccessDisabled`, `paddingMedium`, `heightMedium`, `paddingLargeV2`, `heightLargeV2`, `isClassic`, `fontSizeLarge`, `fontFamilyLarge`, `fontWeightLarge`, `lineHeightLarge`, `letterSpacingLarge`, `fontSizeSmall`, `fontFamilySmall`, `fontWeightSmall`, `lineHeightSmall`, `letterSpacingSmall`, `fontSizeMedium`, `fontFamilyMedium`, `fontWeightMedium`, `lineHeightMedium`, `letterSpacingMedium`

## [0.7.15] - 2019-11-27

### Changed

- Reset default focus styles for button element

## [0.6.6]

### Added

- Add `as` (default `button`) that allows to use any HTML tag for rendering. The `type` property is used only to set HTML attribute type for the element

## [0.6.5]

### Changed

- Pass through the props to root component in `ButtonGroup`

### Added

- Add `hasVerticalSpacing` (default `false`) and `hasHorizontalSpacing` (default `true`) props to `ButtonGroup` to be able to set spacing for vertically stacked buttons in the group

### Fixed

- Fix the `type` property of the `Button`, which act as the `as` property in styled-components: sets the type of the rendered DOM Node (by default: `'button'`)

## [0.6.3]

### Changed

- Rename component APIs: `active` to `isActive`, `disabled` to `isDisabled`, `shadow` to `hasShadow`

## [0.4.6]

### Added

- Add `align` props for `<ButtonGroup/>`

## [0.4.5]

### Added

- Add initial component structure
