# @8x8/oxygen-slider CHANGELOG

## [Unreleased]

## [2.74.0] - 2024-11-12

### Changed

- Update props to include default values (respect previous implementation from pre 2.71) for `minValue`, `maxValue`, `step`, `isDisabled` and ensure types are correct and only `value` is required (OX-2689)
- Update focus ring color to improve contrast on dark theme (OX-2714)

## [2.72.0] - 2024-10-01

### Changed

- set `24px` as default value for `expandTrackAreaBy` in case no value is provided for it (OX-2557)

## [2.71.0] - 2024-09-17

### Changed

- Update `theme` property to be optional (OX-2487)

- update the implementation language to TypeScript for `Slider` component (OX-576)
- integrating `<input>` element into `Slider` component (OX-576)
- changing parameter `name` into `ariaLabel` in `Slider` component (OX-576)
- marked `exandKnobAreaBy` as deprecated in `Slider` component (OX-576)

## [2.62.0] - 2024-03-14

### Changed

- make the cursor property to be `not-allowed` when disabled (OX-956)

## [2.42.0] - 2023-09-05

### Added

- Add support for keyboard navigation (tab to navigate, up/right arrow keys to increase value and down/left arrow keys to decrease value) (OX-1311)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

### Fixed

- Fix Knob rendering as a square (missing theme prop) & transparency issue by using the new hex transparency syntax (OX-1136)

## [2.17.0] - 2022-11-21

### Changed

- Rename Storybook `Guideline` page to `Guidelines` (OX-744)
- Update Storybook Playground (OX-744)

## [1.10.0] - 2021-09-14

### Added

- Add `Novo` & `NovoDark` theme support
- Add new theme props: `sliderActiveTrackBackgroundColorActive`, `sliderKnobColorActive`, `sliderKnobBorderWidth`, `sliderKnobPulse`

## [1.2.0] - 2020-11-25

### Added

- Add theme props: `sliderBorder`, `sliderBorderRadius`, `sliderKnobShadow`

## [0.9.0] - 2020-03-12

### Added

- Add props: `onDragStart`, `onDragEnd` - callback function to some specific actions

## [0.7.14] - 2019-11-07

### Added

- Add props `expandKnobAreaBy`, `expandTrackAreaBy` to expand the slider's clickable areas (Track and Knob) for easier usage on mobile devices

## [0.6.15] - 2019-06-26

### Added

- Create Slider component
