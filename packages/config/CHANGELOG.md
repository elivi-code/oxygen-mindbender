# @8x8/oxygen-config CHANGELOG

## [Unreleased]

## [2.80.0] - 2025-02-17

### Changed

- `OxygenProvider` components can be nested and they will inherit context values from their ancestor context (OX-2692)

### Added

- Add `enableNeo` prop to `OxygenProvider` which enables the new 8x8 rebrand theme across Oxygen components and global `theme` prop usage (OX-2840)

## [2.60.0] - 2024-03-01

### Added

- export type TelemetryPayload

## [2.58.0] - 2024-02-08

### Added

- Add new telemetryCallback to support telemetry events for oxygen components through OxygenProvider (OX-1876)

## [2.51.0] - 2023-11-24

### Changed

- Mark OxygenProvider as stable (remove alpha tag) (OX-1613)

### Added

- Add Storybook example on how to use the Classic theme through OxygenProvider (OX-1613)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.29.0] - 2023-04-26

### Added

- Export new OxygenProvider (OX-532)

## [2.27.0] - 2023-03-17

### Fixed

- Fix type definition for `getById`. Now returns correct type (OX-908)

## [2.23.1] - 2023-02-14

### Fixed

- Fix performance issue in the `withTheme` HoC by only cloning the relevent part of the config object (OX-923)

## [2.19.0] - 2022-12-22

### Changed

- Convert `@8x8/oxygen-config` to typescript. Export correct types (OX-772)

## [2.17.0] - 2022-11-21

### Changed

- Update `hoist-non-react-statics` dependency to `3.3.2` (OX-744)
- Renamed `Playground` doc page to `Guidelines` (OX-744)

## [1.15.0] - 2021-10-15

### Fixed

- Change return type on `withTheme` and `withDeprecation` to `React.ComponentPropsWithRef<React.ComponentType>`

## [0.7.15] - 2019-11-27

### Changed

- Change `forwarderRef` to `forwardedRef` in `withDeprecation` function

### Added

- Add conditional forwarded ref in `withTheme` and `withDeprecation` functions for HOCs

## [0.7.6] - 2019-08-29

### Added

- `setLogger` method to change the default deprecation logger (default is `console.warn`)
- `withDepracation` HOC to show console warning for deprecated components/properties
- _Note_: the complete documentation of the deprecation process is available in General Documentation/01. Readme/For developers/Deprecation process
