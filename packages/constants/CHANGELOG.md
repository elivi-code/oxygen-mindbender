# @8x8/oxygen-constants CHANGELOG

## [Unreleased]

## [2.94.0] - 2025-07-22

### Changed

- Optimized `IconButton` Neo theme inheritance with minimal property overrides (OX-3445)

### Added

- Add `IconButton` theme properties: `shadowFocus`, `shadowFocusInverted`, `colorSelected`, `backgroundActiveSelected`, `backgroundSelectedHover`, `backgroundSelectedDisabled` (OX-3445)

## [2.91.0] - 2025-05-28

### Added

- Update `ToggleButton` colors to improve contrast for accessibility (OX-3457)

## [2.88.0] - 2025-04-04

### Changed

- Update `Avatar` colors to follow updated design (OX-3256)

## [2.87.0] - 2025-03-31

### Removed

- Remove `modalHeader` & `modalFooter` items (merged in `modal` in 2020) (OX-3260)

## [2.82.0] - 2025-02-21

### Added

- Add `userStatus` color tokens across themes (OX-2812)

## [2.80.0] - 2025-02-17

### Changed

- Update `IconButton` styles for Neo for hover and active backgrounds (OX-3006)

### Added

- Export {Component}Neo{Light|Dark} theme objects for all items which still use custom theme props to support new brand (OX-2840)

## [2.75.0] - 2024-12-04

### Changed

- Update Toast warning color (`markingColorWarning`) to `warning02` (OX-2753)

### Added

- Added `iconButton.borderFocusInverted` theme prop to properly support updated focus ring colors (OX-2738)
- Mark `toast.structureMargin` as deprecated (OX-2738)

## [2.74.0] - 2024-11-12

### Changed

- Update `checkbox.const` with `focusColor` token (OX-786)
- Update `checkbox.const` `checkboxFocusBorderRadius` token to `4px` (OX-786)
- Update `toggleButton.const` with `focusColor` token (OX-786)
- Update `Button`, `Slider`, `Tabs` focus ring color to improve contrast on dark theme (OX-2714)

## [2.72.0] - 2024-10-01

### Changed

- _Deprecate_ inputSize constant. Use exported type `import { InputSize } from @8x8/oxygen-input` instead (OX-1076)

## [2.67.0] - 2024-06-27

### Changed

- changed `modalOffsetMinimal` of modal component to `novo.spacing07` (OX-2253)

## [2.59.0] - 2024-02-28

### Changed

- Marked `textLinkPadding`, `textLinkColorPrimarySelected`, `textLinkBackgroundColorPrimarySelected`, `fontFamily`, `fontSize`, `lineHeight`, `fontWeight` and `letterSpacing` as deprecated for textLink (OX-1681)

## [2.58.0] - 2024-02-08

### Changed

- Update the 'fontColorPrimary' and 'fontColorSecondary' BadgeTheme properties to `textColor07` (OX-1678)

## [2.53.0] - 2023-12-14

### Changed

- Deprecated the old position values from badge.consts.ts.badgePosition: 'tl', 'tr', 'bl', 'br' (OX-1686)
- use position values similar to DropdownButotn or Tooltips: 'top-start', 'top-end', 'bottom-start', 'bottom-end' (OX-1686)
- Update `Toast` max-height to 16rem (OX-1461)

## [2.52.0] - 2023-12-07

### Changed

- Deprecated the exposed `avatarSize` and `avatarUserStatus` objects. Please use the ones with the same name directly from the Avatar package: `import { avatarSize, avatarUserStatus } from '@8x8/oxygen-avatar';` (OX-946)

## [2.50.0] - 2023-11-15

### Added

- add `loading` to `toastTypes` (OX-1537)

## [2.49.0] - 2023-11-08

### Added

- add `markingColorLoading` to `ToastTheme` (OX-1553)

### Removed

- Remove accordion decisions (OX-1565)

## [2.46.0] - 2023-09-28

### Changed

- update `Tag` theme with `red` variant: `backgroundVariantRed`, `textColorVariantRed` (OX-1317)

## [2.42.0] - 2023-09-05

### Changed

- Update Modal paddings `headerPadding`, `headerPaddingNoContent`, `contentPadding`, `footerPadding`, `footerPaddingSmall`, `footerPaddingNoContent` and `footerButtonSpacing` (OX-1302)

## [2.32.0] - 2023-05-19

### Changed

- Mark `spinnerSize` and `progressBarSize` as deprecated. Please use them directly from the `@8x8/oxygen-loaders` package (OX-1088)

### Fixed

- Mark `Slider` theme prop `sliderKnobBorderRadius` as required and provide a value for it in Novo (OX-1136)

## [2.28.0] - 2023-03-29

### Changed

- _Deprecate_ Modal theme props: `headerIconTop`, `headerIconRight`, `headerIconColor`, `headerIconColorActive`, `headerIconColorFocus`, `headerIconColorHover`, `headerIconBackgroundActive`, `headerIconBackgroundFocus`, `headerIconBackgroundHover`, `headerIconBorderFocus` (OX-1018)

### Added

- Add Novo and Novo Dark theme exports (identical to the Classic ones) for `graphics`, `milestoneTracker`, `modalFooter`, `modalHeader`, `slideOut`, `typography`, `userStatus` (OX-532)
- Export the `AllComponentsThemes` type (OX-532)

## [2.27.0] - 2023-03-17

### Changed

- Removed `Tab` theme props `tabTextFontFamily`, `tabTextFontSize`, `tabTextFontWeight`, `tabTextLineHeight` (used only in Classic) and updated the other font-related theme props in Classic to maintain the same UI (OX-958)
- Decrease `Toast` theme prop `iconSize` for Classic theme from 24 to 20 to preserve the same button outer size of 24px (OX-908)

## [2.25.0] - 2023-03-01

### Changed

- Updated `Tag` theme prop `textColorVariantBlue` to `textColor07` (OX-940)

### Added

- Add `IconButton` theme props `colorInverted`, `colorInvertedDisabled`, `backgroundHoverInverted`, `backgroundActiveInverted` to support inverted icon buttons for Notifications (OX-908)

### Removed

- Remove `Toast` theme props: `actionsMarginLeft`, `actionsMarginRight`, `actionMarginRight`, `paddingX`, `paddingY`, `iconMargin` (OX-908)

## [2.24.0] - 2023-02-20

### Added

- Add `alertBanner` theme props (OX-696)

## [2.21.0] - 2023-02-06

### Removed

- Remove unused `Button` theme props: `hasShadow`, `shadowSize`, `shadowColor`, `shadowColorFocusBackground`, `borderColorPrimaryFocus`, `borderColorSecondaryFocus`, `borderColorTertiaryFocus`, `borderColorTertiaryReversedFocus`, `borderColorDestructiveFocus`, `borderColorSuccessFocus` (OX-810)

## [2.20.0] - 2023-01-20

### Added

- Add `IconButton` theme as `iconButton` (OX-579)

### Removed

- Remove `Label` theme props: `iconBackgroundColorHover`, `iconPadding`, `iconMarginLeft` (OX-579)
- Remove `TextLink` theme props: `textLinkFontFamily`, `textLinkFontSize`, `textLinkFontWeight`, `textLinkLineHeight` (used only in Classic, now Classic uses the same theme props as Novo, with the Classic values) & `textLinkTransitionTime` (use same value `150ms` across themes) (OX-806)

## [2.19.0] - 2022-12-22

### Changed

- Convert `@8x8/oxygen-constants` to typescript. Export correct types (OX-772)
- Update `Calendar` theme prop `daySize` to be in _rem_ instead of _px_ (OX-768)

### Removed

- Remove `Select` theme prop `optionRowHeight` (OX-756)
- Remove `Badge` theme props `borderRadiusBig`, `borderRadiusMedium` (OX-766)
- Remove `DateTimeRangeSelector` theme props `listItemHeight`, `listInputHeight`, `dateInputWidth`, `timeInputWidth` (OX-768)

## [2.18.0] - 2022-11-25

### Changed

- Update the `fontColorActionDisabled` theme property to use `disabled02` token (OX-763)

### Added

- Add new `fontColorActionHover` theme property (OX-763)

## [2.17.0] - 2022-11-21

### Changed

- _Deprecate_ Button theme properties: `marginLeftLarge`, `marginBottomLarge`, `marginLeftSmall`, `marginBottomSmall`, please use new theme properties instead `buttonGroupSpacingSmall`, `buttonGroupSpacingLarge` (OX-742)

### Added

- Add Button theme properties: `buttonGroupSpacingSmall`, `buttonGroupSpacingLarge` (OX-742)
- Update `polished` dependency to `4.2.2` (OX-744)

## [2.16.0] - 2022-10-21

### Added

- Add `Tag` component theme properties: `backgroundVariantBlue`, `backgroundVariantDark`, `backgroundVariantLight`, `backgroundVariantYellow`, `textColorVariantBlue`, `textColorVariantDark`, `textColorVariantLight`, `textColorVariantYellow` (OX-711)

### Removed

- Remove `Select` theme properties: `multiValueChipBackgroundColor`, `multiValueChipBorderRadius`, `multiValueChipCloseIconChipHoveredColor`, `multiValueChipCloseIconColor`, `multiValueChipCloseIconHoveredColor`, `multiValueChipFontSize`, `multiValueChipHoveredBackgroundColor`, `multiValueChipHoveredTextColor`, `multiValueChipMarginRight`, `multiValueChipPaddingLeft`, `multiValueChipPaddingRight`, `multiValueChipTextColor`

## [2.15.0] - 2022-10-12

### Added

- Add Theme properties: `headerIconColorActive`, `headerIconColorFocus`, `headerIconBackgroundActive`, `headerIconBackgroundFocus`, `headerIconBackgroundHover`, `headerIconBorderFocus` (OX-418)
- Add Theme properties: `hoverOverlayColor`, `focusBorderColor`, `innerBorderColor` (OX-667)

## [2.13.0] - 2022-09-20

### Added

- Add theme property `modalOffsetMinimal` (OX-710)

### Removed

- Remove the `maxHeight` theme property (OX-710)

## [2.12.0] - 2022-08-29

### Added

- Add new theme prop `backgroundComplete` for the `ProgressBar` (`loader`) component (OX-705)

## [2.11.0] - 2022-08-16

### Added

- Add new theme prop for `avatar`: `borderColor` (OX-698)
- Add new component `avatarStack` with theme props: `backgroundHover`, `borderColorHover`, `borderColorFocus`, `counterBackground`, `counterColor` (OX-698)
- Add new component `eventCard` with theme props:, `background`, `backgroundHover`, `borderColor`, `borderFocusColor`, `gap`, `iconBackground`, `iconColor`, `shadow`, `text`, `textColor`, `title`, `titleColor` (OX-698)

## [2.9.0] - 2022-07-13

### Changed

- Select theme prop `valueContainerPadding` changed to contain full padding value instead of just horizontal (OX-659)
- Update Select theme props for Novo: `lineHeight` (to have a different value than Classic) & `placeholderTextColor` (OX-659)
- Update Select Icon positioning: `iconHeight`, `iconMargin`, `iconPaddingRight` (OX-659)
- Update Select multi select chip design: `multiValueChipBackgroundColor`, `multiValueChipCloseIconChipHoveredColor`, `multiValueChipCloseIconColor`, `multiValueChipCloseIconHoveredColor`, `multiValueChipHoveredBackgroundColor`, `multiValueChipHoveredTextColor`, `multiValueChipPaddingRight`, `multiValueChipPaddingVerticalSmall`, `multiValueChipTextColor` (OX-659)

### Removed

- Remove Select theme prop `multiValueChipWrapperMargin` — not used with the updated design anymore (OX-659)

## [2.8.0] - 2022-07-11

### Fixed

- Update Toast `boxShadow` with proper token `shadow01` (OX-674)
- Update Toast novo `toastSmall` width to be `330px` (OX-674)
- Fix typo Toast for `boxShadow` prop which made the shadow CSS be invalid (OX-674)

## [2.6.0] - 2022-06-23

### Changed

- Update theme properties `borderWidthReadOnly`, `borderColorReadOnly` for Input, Textarea components in novo theme

### Added

- Add theme properties for Input component: `horizontalSpacingReadOnly`
- Add theme properties for Textarea component: `textareaPaddingReadOnly`

### Fixed

- `checkboxSize` in checkbox constants Novo theme to use px units
- `iconSize` in radio constants Novo theme to use px units

## [2.5.0] - 2022-06-10

### Added

- Add `Label` theme prop `borderSizeFocus`. Sets the border thickness on focus state
- Add `Label` theme prop `borderColorFocus`. Sets the background on coloron focus state
- Add `Label` theme prop `iconPadding`. Sets the spacing in the info icon
- Add `Label` theme prop `actionLinkPaddingHorizontal`. Sets the horizontalspacing in the action
- Add `Label` theme prop `actionLinkPaddingVertical`. Sets the verticalspacing in the action
- Add `Label` theme prop `iconBackgroundColorHover`. Sets the backgroundcolor on hover state in the icon
- Add `Label` theme prop `transitionTime`. Sets the time for csstransitions

## [2.4.0] - 2022-05-30

### Added

- Add New theme properties for TextLink component: `textLinkPadding`, `textLinkBorderWidthFocus`, `textLinkBorderRadiusFocus`, `textLinkShadowColorFocus`

## [2.3.1] - 2022-05-19

### Fixed

- Correctly specify a peer dependency on `styled-components`

## [2.3.0] - 2022-05-17

### Changed

- Update Novo & Novo Dark input decision for `height` from `32px` to `40px`
- Update Novo & Novo Dark input decision for `heightSmall` from `28px` to `32px`

### Added

- Add `onDirectCall` value in avatarUserStatus
- Add `textColorFocus` theme property, sets the text color on focus state
- Add `tabBorderColorFocus` theme property, sets the border color on focus state
- Add `tabBackgroundFocus` theme property, sets the background on color on focus state
- Add `tabBorderSizeFocus` theme property, sets the border thickness on focus state

## [2.2.0] - 2022-05-10

### Changed

- _Deprecate_ `backgroundColorFocus` theme property, use `outlineColorFocus`

### Added

- Add `outlineColorFocus` theme property, represents new focus state

### Removed

- Remove `backgroundColorHover` theme property for toggle button component

## [2.1.0] - 2022-03-31

### Added

- Typescript: Add missing types `info`, `warning`.
- Typescript: Export `toastSizes` and `toastTypes`

## [1.18.0] - 2022-02-16

### Changed

- Update `Novo` & `Novo Dark` theme properties for `Input`:

  ```
  // Novo
  borderColorReadOnly: novo.uiBackground01 -> ui01,

  // Novo Dark
  borderColorReadOnly: novoDark.uiBackground01 -> ui01
  ```

- Update `Novo` & `Novo Dark` theme properties for `Textarea`:

  ```
  // Novo
  textareaBorderColorReadOnly: novo.uiBackground01 -> ui01,

  // Novo Dark
  textareaBorderColorReadOnly: novoDark.uiBackground01 -> ui01,
  ```

### Added

- Add `Novo` & `Novo Dark` theme values for `Icon` & exported them as part of the generic `novoTheme` and `novoDarkTheme` as well
- Add `Novo` & `Novo Dark` theme properties for `Input`: `borderColorReadOnly`, `borderRadiusReadOnly`, `borderWidthReadOnly`
- Add `Novo` + `Novo Dark` theme properties for `Textarea`: `textareaBorderRadiusReadOnly`, `borderWidthReadOnly`
- Add new theme props for Select: `selectedOptionTextColorDisabled`, `optionRowHeight`
- Add new theme props for Radio: `iconHoverColor`, `iconFocusColor`

### Fixed

- Provide correct value for the theme prop `inputColor` for Select

## [1.17.0] - 2022-01-26

### Added

- Add new theme props for Modal: `headerIconColor`, `headerIconColorHover`

## [1.16.0] - 2021-11-18

### Added

- Expose theme compilation objects for `classic`, `novo` and `novoDark`: `classicTheme`, `novoTheme`, `novoDarkTheme`

## [1.15.1] - 2021-10-19

### Fixed

- Change enum `ButtonVariant` to a type definition

## [1.14.0] - 2021-10-13

### Added

- Add `ButtonVariant` type definition and export it

## [1.13.0] - 2021-10-07

### Removed

- Remove unused props from `dateTimeSelector` and `dateTimeRangeSelector`: `iconTopOffset` and `iconRightOffset`
- Remove common props from `dateTimeRangeSelector` that where merged into `dateTimeSelector`

### Added

- Add Novo & Novo Dark theme for DateTimeRangeSelector (`dateTimeRangeSelector`)
- Add Novo & Novo Dark theme for DateTimeSelector (`dateTimeSelector`): `containerAnimationDuration`, `letterSpacing`, `fontWeight`, `iconMargin`, `containerBorderRadius`, `isClassic`
- Add Novo & Novo Dark theme for Calendar (`calendar`):
- Add new theme properties for Calendar (Novo & Classic): `dayPreviewBackground`, `daySelectedEdgeBackground`, `daySelectedEdgeColor`, `isClassic`, `lineBorderRadius`, `monthColor`
- Add new theme properties for Calendar (Novo): `monthYearTypography`, `numbersTypography`, `todayTypography`, `weekdaysTypography`

## [1.12.0] - 2021-09-24

### Changed

- Update `Select` theme prop `backgroundColorHover`, `borderColorHover`

### Added

- Add Novo & Novo Dark theme for ContextMenu (`contextMenu`): `contextMenuItemDisabledColor`, `contextMenuWidth`, `contextMenuItemColorActive`, `contextMenuBorderRadius`, `contextMenuPadding`, `contextMenuItemPadding`, `isClassic`, `fontFamily`, `fontSize` `lineHeight`, `fontWeight`, `letterSpacing`
- Add Novo & Novo Dark theme for DropdownButton (`dropdownButton`): `isClassic`, `dropdownBorderRadius`
- Add Novo & Novo Dark theme for List (`list`): `listItemHoverColor`, `isClassic`

## [1.9.0] - 2021-09-08

### Changed

- Update Classic default value for `tabBorderBottomSize` from `sizes.small` (4px) to `sizes.smallest` (2px) due to `Tab` Component css rules modifications

### Added

- Add Novo & Novo Dark theme for Textarea (`textarea`)
- Add Novo & Novo Dark theme for Tabs (`tabs`)
- Add new theme properties for Novo theming based on light/dark variants of Classic
- Add Novo & Novo Dark theme for Checkbox & Radio
- Add Novo & Novo Dark theme for Toast and Toaster (`toast`)

## [1.8.0] - 2021-08-03

### Changed

- Update `Select` token: `backgroundColorHover: novoDark.ui02 -> novoDark.hover06`

### Added

- Add Novo & Novo Dark theme for `Breadcrumbs`
- Add Novo & Novo Dark theme for `Button`
- Add updated `buttonSize` with new `medium` and `large` sizes for `Button`
- Add new `buttonVariant` prop - map with possible button types for `Button`
- Add new theme properties for `Button`
- Add Novo & Novo Dark theme for `TexLink`
- Add Novo & Novo Dark theme for `Table`
- Add Novo & Novo Dark theme for Loaders - `Spinner` & `ProgressBar`

## [1.7.0] - 2021-06-28

### Added

- Add Novo & Novo Dark theme for `Tooltip`
- Add new `enableArrow` theme prop to control tooltip arrow display based on theme config for `Tooltip`
- Add new theme props `arrowSize`, `arrowBorderRadius`, `arrowMarginOffset` to control arrow placement and look for `Tooltip
- Add Novo & Novo Dark theme for Select: `selectNovo` & `selectNovoDark`
- Add Novo & Novo Dark theme for Label: `labelNovo` & `labelNovoDark`
- Add Novo & Novo Dark theme for Input: `inputNovo` & `inputNovoDark`
- Add Novo & Novo Dark theme for TextField: `textFieldNovo` & `textFieldNovoDark`
- Add Novo & Novo Dark theme for ToggleButton: `toggleButtonNovo` & `toggleButtonNovoDark`
- Add Novo & Novo Dark theme for ToggleButtonGroup: `toggleButtonGroupNovo` & `toggleButtonGroupNovoDark`
- Add Novo & Novo Dark theme for Badge: `badgeNovo` & `badgeNovoDark`

## [1.6.1] - 2021-06-15

### Added

- Add Avatar Novo and Novo dark theme: `avatarNovo` & `avatarNovoDark`

## [1.5.1] - 2021-05-25

### Removed

- Remove now obsolete properties from `userStatus`: `borderRadius`, `borderSize`

## [1.4.0] - 2021-05-13

### Removed

- **Breaking:** Remove obsolete properties from `userStatus`: `backgroundColor`, `iconColor`, `iconSize`

## [1.3.3] - 2021-04-14

### Added

- Add input theme properties: `backgroundColorReadOnly`, `borderColorReadOnly`, `colorReadOnly`

## [1.2.0] - 2020-11-25

### Added

- Add Slider theme props `sliderBorder`, `sliderBorderRadius`, `sliderKnobShadow`

## [1.1.9] - 2020-11-11

### Added

- Add `Statistics` theme props: `numbersColorError`, `textColorError`

## [1.1.8] - 2020-10-15

### Added

- Add `Select` theme props: `borderColorDisabled`, `backgroundColorDisabled`, `dropdownIndicatorColorDisabled`, `optionTextFontSize`, `optionTextFontWeightSelected`, `noOptionTextFontSize`, `menuBorderStyle`, `headingTextFontSize`, `headingTextFontWeight`, `headingTextColor`, `headingBorderStyle`, `headingMargin`

## [1.1.7] - 2020-09-29

### Added

- Add `Select` theme props: `borderColorError`

## [1.1.4] - 2020-09-11

### Added

- Add `Select` theme props: `inputColor`

## [1.1.1] - 2020-08-28

### Added

- Add `Select` theme props: `optionActiveBackgroundColor`

## [1.0.0] - 2020-07-24

### Changed

- Update `Select` theme propd `controlFocusBoxShadow` to none

### Added

- Add `Select` theme props: `menuZindex`, `borderColorFocus`
- Add Modal header and footer styling properties into modal theme (together with moving the ModalHeader and ModalFooter in Modal package)

### Removed

- **Breaking:** Remove `hasShadow` modal theme property. To set the shadow visibility, please use `shadowSize` and `shadowColor` theme properties, or directly the Modal component's `hasShadow` prop
- **Breaking:** Remove `modalSize` constants. The constants with available modal sizes are exposed in Modal package as `MODAL_SIZE`:
- **Breaking:** Remove `font.sizeSmall` font design token. Use `font.sizeXs` instead.
- **Breaking:** Remove `font.sizeDefault` font design token. Use `font.sizeSm` instead.
- **Breaking:** Remove `font.sizeMedium` font design token. Use `font.sizeMd` instead.
- **Breaking:** Remove `font.sizeLarge` font design token. Use `font.sizeLg` instead.
- **Breaking:** Remove `font.sizeAttention` font design token. Use `font.sizeXl` instead.
- **Breaking:** Remove `font.sizeMax` font design token. Use `font.sizeXxl` instead.
- **Breaking:** Remove `font.lineHeightSmall` font design token.
- **Breaking:** Remove `font.lineHeightDefault` font design token.
- **Breaking:** Remove `font.lineHeightMedium` font design token.

## [0.9.0] - 2020-03-12

### Changed

- `timeInputWidth` to 90px for DateTimeRangeSelector
- _Deprecate_ Font sizes: `sizeSmall`, `sizeDefault`, `sizeMedium`, `sizeLarge`, `sizeAttention`, `sizeMax`
- _Deprecate_ Line heights: `lineHeightSmall`, `lineHeightDefault`, `lineHeightMedium`

### Added

- Add Font sizes: `sizeXs`, `sizeSm`, `sizeMd`, `sizeLg`, `sizeXl`, `sizeXxl`
- Add Line heights: `lineHeightXs`, `lineHeightSm`, `lineHeightMd`, `lineHeightLg`, `lineHeightXl`, `lineHeightXxl`
- Add new method to deprecate properties in constants
- Add `timeInputContainerMarginLeft` and `endTimeErrorColor` for DateTimeRangeSelector

### Removed

- `dateInputBorderSize` and `dateInputBorderColor` DateTimeRangeSelector decisions

## [0.8.7] - 2020-02-28

### Changed

- `iconColor` value to `steel700` (previously `cloudyBlue`) in `dateTimeSelector`
- `iconColor` value to `steel700` (previously `cloudyBlue`) in `dateTimeRangeSelector`

### Added

- Add new colors: `coral200`, `coral700` and `jadeGreen200`
- Add typings for `color`, `timing`, `size`, `spacing` and `keyCode`
- Add theme prop `borderRadius` for `dateTimeRangeSelector`
- Add theme prop `borderRadius` for `dateTimeSelector`

## [0.8.5] - 2020-01-28

### Added

- Add `Select` theme prop `controlFocusBoxShadow`

## [0.7.18] - 2019-12-09

### Changed

- Increased the width of the Input Box of the DateTimeRangeSelector to `380px` to fit text like "12/06/2019 09:07 AM - 12/09/2019 09:07 AM".

### Added

- Add `DateTimeSelector` theme props: `paddingHorizontal`, `iconMinSize`
- Add `DateTimeRangeSelector` theme props: `paddingHorizontal`, `iconMinSize`

### Removed

- Remove `DateTimeSelector` theme props: `paddingHorizontalRight`, `paddingHorizontalLeft`
- Remove `DateTimeRangeSelector` theme props: `paddingHorizontalRight`, `paddingHorizontalLeft`

## [0.7.14] - 2019-11-07

### CHanged

- Rename `sliderBorderRadius` to `sliderTrackBorderRadius` & `sliderBackgroundColor` to `sliderTrackBackgroundColor`

## [0.7.10] - 2019-10-18

### Changed

- Update `DateTimeRangeSelector` footer padding

## [0.7.6] - 2019-08-29

### Added

- Add `fontColorActionDisabled` theme value

## [0.6.15] - 2019-06-26

### Added

- Add spacing tokens

## [0.6.4]

### Added

- Expose `zIndex` object with the currently used values (1000, 2000, 3000, 4000, 5000), for example: `zIndex.z2000`
