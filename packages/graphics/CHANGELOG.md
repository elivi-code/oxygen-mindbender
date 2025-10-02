# @8x8/oxygen-graphics CHANGELOG

## [Unreleased]

## [2.94.0] - 2025-07-22

### Added

- Allow prop passing to neo svgs (OX-3597)

## [2.87.0] - 2025-03-31

### Changed

- Mark old illustrations as deprecated (OX-3026)

### Added

- Add new illustrations: `Action`, `Error`, `NoData`, `NoEvents`, `NoResults`, `Subscribe`, `Target` (OX-3026)

## [2.86.0] - 2025-03-21

### Fixed

- Fix deep import path @8x8/oxygen-graphics/dist/{Component} (OX-3251)

## [2.83.0] - 2025-02-27

### Changed

- Breaking: Remove raw 8x8 Logo SVGs added in 2.82.0, instead take them from https://oxygen.8x8.com (OX-3062)

## [2.82.0] - 2025-02-21

### Changed

- Breaking: (it now _requires_ `OxygenProvider`, and has different size when "neo" is enabled) `Logo8x8` uses updated colors when `enableNeo` is true through `OxygenProvider` (OX-2873)
- Converted to Typescript (OX-964)

## [2.35.0] - 2023-06-20

### Added

- Add 8x8 logo graphic (Logo8x8 component) (OX-1198)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.17.0] - 2022-11-21

### Changed

- Rename Storybook `Guideline` page to `Guidelines` & update incorrect page title (OX-744)
- Update Storybook Playground (OX-744)

## [1.0.1] - 2020-08-05

### Added

- Add `EmptyClipboards` graphic

## [0.9.0] - 2020-03-12

### Changed

- Marked the graphics library side-effect-free to support tree-shaking

## [0.7.15] - 2019-11-27

### Added

- Add `NothingToSeeHere` graphic

## [0.7.13] - 2019-10-30

### Fixed

- Fix errors returned by graphics package

## [0.7.10] - 2019-10-18

### Added

- Add `Clock`, `IncomingCall`, `GetConnected`, `AdministratorPanel` graphics

## [0.6.12] - 2019-06-07

### Changed

- Modify WorkingDesk SVG attributes

### Added

- Add forwardRef property for each SVG
- Add @8x8/oxygen-config as peer dependency

## [0.6.11] - 2019-06-06

### Added

- Add `Ghostly` and `WorkingDesk` graphics
