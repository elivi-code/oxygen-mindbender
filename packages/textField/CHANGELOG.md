# @8x8/oxygen-text-field CHANGELOG

## [Unreleased]

## [2.72.0] - 2024-10-01

### Fixed

- Fix incorrectly showing `not-allowed` cursor in `Label` (and components using it such as `Select`, `TextField` etc) (OX-2603)

## [2.71.0] - 2024-09-17

### Changed

- Update `theme` property to be optional (OX-2487)

## [2.62.0] - 2024-03-14

### Changed

- make the cursor property to be `not-allowed` when disabled (OX-956)

## [2.56.0] - 2024-01-29

### Added

- Add `infoBoxButtonLabel` prop that gets passed as an aria-label to the Label Button (OX-1809)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.26.0] - 2023-03-03

### Added

- Add props: `labelProps`, `actionProps`, `inputProps` (mark `otherLabelProps`, `otherActionProps`, `otherInputProps` as deprecated) (OX-797)

## [2.17.0] - 2022-11-21

### Changed

- Rename Storybook `Guideline` page to `Guidelines` (OX-744)
- Update Storybook Playground (OX-744)

## [1.14.0] - 2021-10-13

### Added

- Add props: `onBlur`, `onFocus` callbacks

## [1.10.0] - 2021-09-14

### Added

- Add `TextField` prop `testId`

### Fixed

- Fix types for event handler props

## [1.7.0] - 2021-06-28

### Added

- Add Novo and NovoDark theme support
- Add theme prop `descriptionColor` to control the description color

## [1.3.3] - 2021-04-14

### Added

- Add prop `isReadOnly`

## [1.0.0] - 2020-07-24

### Removed

- **Breaking:** Remove prop `iconText`, use `infoBoxText` instead. This change was made to align the props with `Label` component

## [0.7.6] - 2019-08-29

### Added

- Add pass-through action props

## [0.6.3]

### Added

- Add dedicated theme `textField` which contains themes: `label`, `input`
- Add prop `labelOrientation`

### Changed

- Rename props: `disabled` into `isDisabled`, `required` into `isRequired`

## [0.1.0]

### Added

- Add initial component structure
