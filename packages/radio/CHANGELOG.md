# @8x8/oxygen-radio CHANGELOG

## [Unreleased]

## [2.91.0] - 2025-05-28

### Changed
- Replaced `div` usage with `span` because `div`s are not allowed inside a label (OX-3404)

## [2.76.0] - 2024-12-10

### Changed
- Updated `Radio` icon tokens to solve contrast issues for rest, disabled, checked states (OX-2761)

## [2.74.0] - 2024-11-12

### Changed
- Update focus state to outline the radio + label component (OX-2630)

## [2.56.0] - 2024-01-29

### Added

- Add `infoBoxButtonLabel` prop that gets passed as an aria-label to the Label Button (OX-1809)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.29.0] - 2023-04-26

### Fixed

- Correctly export default type for `Radio` & extend the types for both `Radio` & `RadioGroup` to match the native HTML elements they render to & provide custom `onChange` prop type (OX-532)

## [2.26.0] - 2023-03-03

### Added

- Added: `role` for radio group, `aria-hidden` for decorative svg. (OX-794)
- In order too meet WAI-ARIA requirements, the other aria / roles attributes (that will be added to Radio Group component) will be passed from `rest` props (OX-794)
- Allow disabled radio input to be outlined when keyboard navigation -> up/down arrows. (OX-794)
- Added cursor 'not-allowed' to disabled radio. (OX-794)

## [2.17.0] - 2022-11-21

### Changed

- Rename Storybook `Guideline` page to `Guidelines` (OX-744)
- Update Storybook Playground (OX-744)

## [2.8.0] - 2022-07-11

### Changed

- Align label and input to flex-start of container
- Align RadioGroup items to start of container (vertically)

### Added

- Add Multi-line examples to guidelines

## [2.7.0] - 2022-07-01

### Changed

- Update focus state style for radio icon in order to be more visible (novo theme only) (OX-575)

## [1.18.0] - 2022-02-16

### Added

- Add new theme props: `iconHoverColor`, `iconFocusColor`

### Fixed

- Fix hover and focus state

## [1.9.0] - 2021-09-08

### Added

- Add support for Novo and Novo Dark themes
- Add new theme props: `iconSet`, `labelDisabledColor`

## [1.2.8] - 2021-02-01

### Added

- Provide theme for nested components

## [1.1.1] - 2020-08-28

### Added

- Add `labelColor` property back

## [0.7.8] - 2019-09-03

### Added

- Add prop `infoBoxText` to show Tooltip next to label

## [0.7.1] - 2019-07-22

### Changed

- Add relative position for radio's container element
- Change **name** default property value to `undefined`

## [0.6.17] - 2019-07-03

### Fixed

- Fix value check so that it will handle the cases when the value is false or 0

## [0.6.16] - 2019-07-01

### Changed

- Update Radio component to generate input id based on value and name

## [0.6.8] - 2019-05-16

### Added

- Add test attributes for radio

## [0.6.3]

### Added

- Add Radio component
