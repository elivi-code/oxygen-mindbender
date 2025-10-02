# @8x8/oxygen-toast CHANGELOG

## [Unreleased]

## [2.87.0] - 2025-03-31

### Changed

- Remove CSS animation variables being read from global theme (Was failing for some reason. not used, expecting no impact) (OX-3260)

## [2.86.0] - 2025-03-21

### Added

- Add the `closeButtonLabel` property to `ToastTemplate` component to ensure that `close` button has an aria-label (OX-3103)

## [2.75.0] - 2024-12-04

### Changed

- Update warning icon color to improve accessibility (OX-2753)

### Fixed

- Ensure that Action & CloseButton focus rings are rendered correctly (OX-2738)

## [2.70.0] - 2024-08-22

### Changed

- Updated `IconButton` import from oxygen-icon-button to oxygen-button (backwards compatible) (OX-1132)

## [2.67.0] - 2024-06-27

### Added

- Added a new component (`InlineNotification`) which has the same bevavior as `Toast`, but with the theme inverted (OX-2114)

## [2.57.0] - 2024-02-06

### Added

- Added the `overflow-wrap` property for ContentWrapper component to ensure that text stays inside when overflow occurs (OX-1807)

### Changed

- Changed actions `links` to `button` - `<TextLink as="button">` so they are wcag compliant (OX-1850)

## [2.53.0] - 2023-12-14

### Added

- Add `role="alert"` and `aria-live="assertive | polite"` (based on Toast type) to Toast (OX-800)
- Add optional `iconTitle` prop to Toast to allow setting title attribute on icon (OX-800)

### Changed

- Update max-height to 16rem (OX-1461)

## [2.49.0] - 2023-11-08

### Added

- Add `loading` type to toast (OX-1553)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.27.0] - 2023-03-17

### Changed

- Convert code to Typescript (OX-908)
- ⚠️ Prop `size` default value is now `small` (was `medium` before, from Classic theme days) (OX-908)
- Use the `IconButton` component to render the close button (OX-908)
- Slightly update `Toast` UI (spacings & sizes) to better match the design (OX-908)
- Decrease Classic theme close icon size from 24 to 20 to preserve the same button outer size of 24px (OX-908)

### Removed

- Remove theme props `actionsMarginLeft`, `actionsMarginRight`, `actionMarginRight`, `paddingX`, `paddingY`, `iconMargin` (OX-908)

## [2.20.0] - 2023-01-20

### Fixed

- Add missing dependency on @8x8/oxygen-text-link (OX-887)

## [2.17.0] - 2022-11-21

### Changed

- Update `react-pose` dependency to `4.0.10` (OX-744)
- Update `uuid` dependency to `9.0.0` (OX-744)
- Update Storybook Playground (OX-744)

## [2.1.0] - 2022-03-31

### Changed

- Typescript: `theme` prop is now optional
- Typescript: `action` prop `callback` is now a method
- Typescript: `action` prop `id` is now required

### Added

- Add Typescript: `className` prop

## [1.9.0] - 2021-09-08

### Added

- Add props `title`, `description` as an alternative to `children`. When Toast has `children`, they take precendence over `title` and `description`

### Changed

- Update Toast structure to match new Novo design - keep backwards compatibilty with Classic

## [1.1.8] - 2020-10-15

### Fixed

- Fix Readme issues: wrong Toast import statement

## [0.6.6]

### Changed

- Decrease the default maximum height of a toast to 120px to exactly fit 4 lines of text

### Added

- Add testIds

## [0.6.5]

### Changed

- Remove the z-index value from `Toast` component, moved to the container of the `Toaster`

## [0.6.4]

### Changed

- update z-index value of Toast to 5000
