# @8x8/oxygen-theme CHANGELOG

## [Unreleased]

## [2.94.0] - 2025-07-22

### Added

- Add new tokens: `active13`, `hover14`, `focus02` (OX-3445)
- Add new color `offwhite11` and new token `ui31` (OX-3346)

## [2.91.0] - 2025-05-28

### Added

- Add new tokens: `dataStatus01`, `dataStatus02`, `dataStatus03`, `dataStatus04`, `dataStatus05`, `dataStatus06`, `dataStatus07` (OX-3419)
- Add new token: `ui33` (OX-3457)

## [2.90.0] - 2025-05-08

### Added

- Add new tokens: `avatarText06` & `avatarBackground06` (OX-3379)

## [2.88.0] - 2025-04-04

### Added

- Add new tokens: `avatarText01`,`avatarText02`,`avatarText03`,`avatarText04`,`avatarText05`,`avatarBackground01`,`avatarBackground02`,`avatarBackground03`,`avatarBackground04`,`avatarBackground05` (OX-3256)

## [2.84.0] - 2025-03-04

### Added

- Add new colors: `lime05` (OX-3078)
- Add new tokens: `brand05`, `ui26`, `ui27`, `ui28`, `ui29`, `ui30` (OX-3078)

## [2.82.0] - 2025-02-21

### Added

- Add `brand01` token (usage in 8x8 logo) (OX-2873)
- Add all user status related tokens (`statusAvailable01`,`statusBusy01`,`statusAway01`,`statusOffline01`,`statusWrapup01`) (OX-2812)

## [2.80.1] - 2025-02-17

### Fixed

- Fix `offwhite10` value containing a "tab" character (OX-3025)

## [2.80.0] - 2025-02-17

### Added

- Add new `neoLight` and `neoDark` themes for "Neo" rebrand (OX-2840)
- Add new colors for "Neo" rebrand: `offwhite01`, `offwhite02`, `offwhite03`, `offwhite04`, `offwhite05`, `offwhite06`, `offwhite07`, `offwhite08`, `offwhite085`, `offwhite09`, `offwhite10`, `gray085` (OX-2840)
- Add new tokens for "Neo" rebrand: `ui25`, `hover12`, `hover13`, `active12`, `statusOffline01` (OX-2840)

## [2.77.0] - 2024-12-19

### Added

- Add new colors: `indigo01` through `indigo10` (OX-2793)
- Add new tokens: `textColor10`, `ui23`, `ui24` for AI usage (OX-2793)

## [2.75.0] - 2024-12-04

### Added

- Add new token: `warning02` with values: light `yellow03` and dark `yellow06` (OX-2753)

## [2.74.0] - 2024-11-12

### Changed

- Update `focus01` token value (OX-2714)
- Update data vis text tokens (for better contrast): `dataText04`, `dataText05`, `dataText06`, `dataText08`, `dataText11` (OX-2684)

### Added

- Add color token `black: #000000` (OX-2684)
- Add color token `yellow11: #FEEFD1` (OX-2714)
- Add new tokens: `ui17`, `ui18`, `ui19`, `ui20`, `ui21`, `ui22`, `action09`, `textColor09`, `active11`, `hover11` (OX-2714)

## [2.73.0] - 2024-10-16

### Changed

- Update `novoDark` token for `action01` from `blue06` to `blue07` (OX-2631)
- Update `novoDark` token for `focus01` from `blue06` to `blue07` (OX-2631)

### Added

- Add new `novo` theme tokens: `hover10`, `active10`, `action08`, `textColor08` (OX-2631)
- Add new `novoDark` theme tokens: `hover10`, `active10`, `action08`, `textColor08` (OX-2631)

## [2.62.0] - 2024-03-14

### Added

- Add `highlight01` token (for search highlight) (OX-2020)
- Improve TS docs by adding role description to most tokens & marking deprecated exports (OX-2020)

## [2.59.0] - 2024-02-28

### Changed

- Update typography `heading02` `line-height` token value to `2.5rem` (up from `2rem`) - to match design (OX-1926)
- Update typography `body02` and `bodyBold02` `line-height` token value to `1.5rem` (up from `1.375rem`) - to match design (OX-1932)

## [2.57.0] - 2024-02-06

### Fixed

- Fix theme definition types for TypographySet values to allow spreading into CSS (styled-components) without the need of a type override (OX-1194)

## [2.49.0] - 2023-11-08

### Added

- Show color token name near functional token in Storybook (OX-1570)

## [2.47.0] - 2023-10-18

### Added

- `blue10` and `action07` tokens added (OX-1468)

## [2.46.0] - 2023-09-28

### Added

- Add new tokens: `ui15`, `ui16` (OX-1317)

## [2.45.0] - 2023-09-20

### Changed

- `data11` token value changed from `gray05` to `gray06` (OX-1413)

## [2.39.0] - 2023-07-27

### Changed

- `yellow` colors shifted a bit (updated gradient from 0-9 to 0-10) (OX-1260)
- Update `success01` token value (very slight change to improve contrast) (OX-1260)

### Added

- Add new colors: `red10`, `green10`, `yellow10` (OX-1260)
- Add new tokens: `alertRed`, `alertYellow`, `alertGreen`, `data11`, `dataText11` (OX-1260)

## [2.35.0] - 2023-06-20

### Added

- Expose the themes without the _novo_ name as well: `light`, `dark` & `colorPalette` (OX-1218)

## [2.32.0] - 2023-05-19

### Added

- Add new colors: violet01-10, magenta01-10, pink01-10, midnight01-10, teal01-10, orange01-10, coolgray01-02. Add new tokens: data01-10, dataText01-10, ui11-14 (OX-1140)

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.25.0] - 2023-03-01

### Changed

- Updated `ui09` token value for `novoDark` to `blue09` (same value as the token on `novo`) (OX-940)

## [2.19.0] - 2022-12-22

### Changed

- Update module to Typescript (needed as dep for Tooltip) (OX-620)
- Update `novo` typography `label01` line-height to `1rem` (OX-766)

## [2.17.0] - 2022-11-21

### Changed

- Update `novo` token for `ui07` from `gray02` to `gray01` (OX-556)
- Update `novo` token for `icon07` from `gray06` to `gray05` (OX-556)
- Update `novoDark` token for `hover05` from `gray08` to `gray03` (OX-556)
- Update `novoDark` token for `hover06` from `gray03` to `gray05` (OX-556)

## [2.16.0] - 2022-10-21

### Changed

- Update font-size and line-height tokens from `px` to `rem` units. Should not affect existing usage (on default browser font-size of 16px) — but is the first step in Oxygen supporting a11y font-size adjustments (OX-711)
- Update `success01` from `green05` to `green04` (OX-737)

### Added

- Add `bulletList01` typography tokens (OX-738)

## [2.15.0] - 2022-10-12

### Changed

- Update `novo` token for `active05` from `gray05` to `gray09` (OX-418)
- Update `novoDark` token for `active05` from `gray07` to `ray05` (OX-418)

## [2.10.0] - 2022-08-08

### Added

- Add new `novo` theme tokens: `icon08`, `textColor07`, `ui10` (OX-688, OX-695)
- Add new `novoDark` theme tokens: `icon08`, `textColor07`, `ui10` OX-688, OX-695

## [2.5.0] - 2022-06-10

### Changed

- Update `novo` token `hover05` from `gray06` to `gray10`
- Update `novoDark` token `hover05` from `colorGray08` to `colorGray03`

### Added

- Add new `novo` theme token: `ui09` (for future `Tag` component variant) (OX-642)

## [2.4.0] - 2022-05-30

### Changed

- Fix inconsitency of `shadow01` token color - now using `gray01` instead of `gray02`

### Added

- Add new `novo` theme shadow tokens: `shadowLow`, `shadowMedium`, `shadowHigh` based on token `shadow01`. To be used on `box-shadow` CSS properties of elements
- Add new `novo` theme tokens: `icon07`, `hover09` & `active09` (tertiary buttons on reverse backgrounds)

## [2.2.0] - 2022-05-10

### Changed

- Update `novoDark` token `focus01` value

### Added

- Add new `novo` theme token `ui08` (Subtle border on high contrast background)

## [2.1.0] - 2022-03-31

### Changed

- Update `novo` token `action03` => `action06`
- Update `novo` token `destructive01` => `action03`
- Update `novo` token `uiBackground01` => `ui06`
- Update `novo` token `uiBackground02` => `ui07`
- Update `novo` token `text01` => `textColor01`
- Update `novo` token `text02` => `textColor02`
- Update `novo` token `text04` => `textColor04`
- Update `novo` token `text05` => `textColor05`
- Update `novo` token `text06` => `textColor06`
- Update `novo` token `shadow` => `shadow01`
- Update `novo` token `overlay` => `overlay01`
- Update `novo` token `prodHeading01` => `heading01`
- Update `novo` token `prodHeading02` => `heading02`

### Added

- Add theme typescript interface
- Export default theme object with `novo` and `novoDark` themes & `novoColorPalette` (the base colors from https://zeroheight.com/714056d2f/p/596af8-colors/b/24f2eb )

### Removed

- Remove `novo` token `text03`
- Remove `novo` token `timingXslow`
- Remove `novo` token `timingSlow`
- Remove `novo` token `timingMedium`
- Remove `novo` token `timingFast`
- Remove `novo` token `timingXfast`
- Remove `novo` token `iconSizeXS`
- Remove `novo` token `iconSizeS`
- Remove `novo` token `iconSizeM`
- Remove `novo` token `iconSizeL`
- Remove `novo` token `spinnerSizeS`
- Remove `novo` token `spinnerSizeM`
- Remove `novo` token `spinnerSizeL`
- Remove `novo` token `progressSizeS`
- Remove `novo` token `progressSizeM`
- Remove `novo` token `progressSizeL`
- Remove `novo` token `buttonHeightSmall`
- Remove `novo` token `buttonHeightMedium`
- Remove `novo` token `buttonHeightLarge`
- Remove `novo` token `inputHeightSmall`
- Remove `novo` token `inputHeightMedium`

## [1.20.0] - 2022-03-02

### Changed

- Update `novo` and `novoDark` token `focus01` from `blue06` to `blue05`

## [1.13.0] - 2021-10-07

### Added

- Add `novo` size tokens for input heights: `inputHeightSmall` ('32px'), `inputHeightMedium` ('40px')

## [1.12.0] - 2021-09-24

### Changed

- Update `novo` token `hover08` from `colorGray05` -> `colorGray10`
- Update `typographySet.prodHeading01.fontWeight` from `fontWeightRegular` => `fontWeightSemiBold`

### Added

- Add `novo` token `shadow` with `gray02` value

## [1.8.0] - 2021-08-03

### Changed

- Update `novo` token `active01` from `colorBlue05` -> `colorBlue04`
- Update `novo` token `colorRed07` from `#E07A85` -> `#F24D5F`
- Update `novoDark` token `active01` from `colorBlue06` -> `colorBlue05`
- Update `novoDark` token `hover06` from `colorPurpe02` -> `colorGray03`
- Update `novoDark` token `hover08` from `colorGray05` -> `colorPurple02`
- Update `novoDark` token `active08` from `colorGray09` -> `colorGray04`
- Update `novoDark` token `error01` from `colorRed06` -> `colorRed07`

### Added

- Add `novo` and `novoDark` token `text06` with value `white`
- Add new size tokens for buttons `buttonHeightSmall` ('32px'), `buttonHeightMedium` ('40px'), `buttonHeightLarge` ('48px')
- Add `novo` size tokens for `spinnerSize` and `progressSize`: `spinnerSizeS` (24), `spinnerSizeM` (40), `spinnerSizeL` (72), `progressSizeS` ('100px'), `progressSizeM` ('240px'), `progressSizeL` ('100%')

### Fixed

- Fix `typographySet` typos relating to `lineHeight` which retuned `undefined` values

## [1.7.0] - 2021-06-28

### Changed

- Update `fontWeight` tokens to match standards:
- Update `fontWeightThin`: 100,
- Update `fontWeightLight`: 200, // => 300
- Update `fontWeightRegular`: 300, // => 400
- Update `fontWeightMedium`: 400, // => 500
- Update `fontWeightSemiBold`: 500, // => 600
- Update `fontWeightBold`: 600, // => 700
- Update `fontWeightBlack`: 700, // => 900

### Added

- Add `novo` tokens for `typographySet` based on **Typography** section in [Zeroheight](`https://zeroheight.com/714056d2f/p/36c853-oxygen-design-system`)
- Add `letterSpacing` tokens in `typography`
- Add new **V2** `letterSpacing` and `lineHeight` tokens - will need revisiting

## [1.6.1] - 2021-06-15

### Changed

- Update `novo` theme tokens

### Added

- `novoDark` theme tokens (inherit from Novo, updated colors)

## [1.3.6] - 2021-04-26

### Changed

- `Oxygen Novo` color into colorPalette tokens
- `Oxygen Novo` change token `offset` into `spacing`

### Added

- `Oxygen Novo` color tokens

## [1.3.0] - 2021-02-11

### Added

- `Oxygen Novo` design tokens for typography, spacing, colorPalette and timing
- `Oxygen Classic` design tokens for typography, spacing, colorPalette, timing and elevation (zIndex)
