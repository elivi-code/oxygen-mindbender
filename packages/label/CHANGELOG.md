# @8x8/oxygen-label CHANGELOG

## [Unreleased]

## [2.95.0] - 2025-07-31

### Added

- Reexport `Tooltip`'s `showOn` constants obj (OX-460)

### Fixed

- Corrected the `infoBoxShowOn` type (OX-460)

## [2.92.0] - 2025-06-16

### Fixed

- Fix alignment for info icon (OX-3480)

## [2.87.0] - 2025-03-31

### Changed

- Use only Novo icons (Info button) (OX-3206)

## [2.72.0] - 2024-10-01

### Fixed

- Fix incorrectly showing `not-allowed` cursor in `Label` (and components using it such as `Select`, `TextField` etc) (OX-2603)

## [2.70.0] - 2024-08-22

### Changed

- Updated `IconButton` import from oxygen-icon-button to oxygen-button (backwards compatible) (OX-1132)

## [2.67.0] - 2024-06-27

### Changed

- migrated to ts (OX-1073)
- _Deprecate_ actionTargets constants

## [2.62.0] - 2024-03-14

### Changed

- make the cursor property to be `not-allowed` when disabled (OX-956)

## [2.61.0] - 2024-03-11

### Fixed

- Mark `theme` prop as optional in index.d.ts (OX-2011)

## [2.59.0] - 2024-02-28

### Fixed

- InfoBoxButtonLabel prop is optional in index.d.ts (OX-1087)

## [2.57.0] - 2024-02-06

### Changed

- For required labels, changed the position of Asterisk to be right after label text (OX-1715)

## [2.56.0] - 2024-01-29

### Added

- Add `infoBoxButtonLabel` prop that gets passed as an aria-label to the Label Button (OX-1809)

## [2.50.0] - 2023-11-15

### Changed

- Classic theme required `*` mark position moved to the right of the label (same as novo) (OX-1112)
- Asterisk is ignored by screen narrator in required labels (OX-1112)

## [2.39.0] - 2023-07-27

### Added

- new prop `shouldWrapText` which allows label and action link to wrap into two lines

## [2.37.0] - 2023-07-13

### Fixed

- Add the font-size property to label element to support fully font scaling (OX-1247)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.28.0] - 2023-03-29

### Fixed

- Add type="button" to Action when rendered as button (when the action is a function) (OX-994)

## [2.25.0] - 2023-03-01

### Changed

- Move label value `title` attribute on inner child component for string values in order to allow screen narrators to read the content (OX-790)

### Added

- Allow passthrough `rest` props on `Label` wrapper(OX-794)

## [2.20.0] - 2023-01-20

### Changed

- Replace internal icon wrapper with the new `IconButton` component (OX-579)
- Simplify some internal rendering logic (OX-579)

## [2.19.0] - 2022-12-22

### Changed

- Simplify Icon Tooltip rendering (removed local state) (OX-620)
- Replace Tooltip with Title on Label (to match Action) (OX-620)
- Deprecate `infoBoxContainer` prop (OX-620)

### Removed

- Remove custom logic to detect whether the Label content overflows as it didn't work reliably (OX-620)

## [2.18.0] - 2022-11-25

### Added

- Add support for keyboard navigation for the action link (OX-763)
- Add new theme prop `fontColorActionHover` (OX-763)
- Add `aria-disabled` attribute to the action link when it's disabled (OX-763)
- Action link is rendered as `button` HTML element, instead of `a`, when the `action` prop is defined (OX-763)

## [2.17.0] - 2022-11-21

### Fixed

- Improve label text wrapping for single-long phrases (OX-740)
- Add ellipsis to long ActionLink text and support title attribute (OX-641)

### Changed

- Rename Storybook `Guideline` page to `Guidelines` (OX-744)
- Update Storybook Playground (OX-744)

## [2.5.0] - 2022-06-10

### Added

- Add prop `infoBoxContainer` which is passed down to the info `Tooltip`
- Add support for keyboard navigation according to WCAG requirements
- Add theme props: `borderSizeFocus`, `borderColorFocus`, `iconPadding`, `actionLinkPaddingHorizontal`, `actionLinkPaddingVertical`, `iconBackgroundColorHover`

## [1.18.0] - 2022-02-16

### Changed

- Label updated styling for the `isRequired` state

## [1.7.0] - 2021-06-28

### Changed

- Label storybook with a theme switcher knob
- Label storybook for `isDisabled` and `isRequired` (storybook example was using a broken prop)

### Added

- Add Novo theme support

## [1.3.2] - 2021-03-22

### Added

- Add prop `infoBoxShowOn` which is passed down to the info `Tooltip`

## [1.2.8] - 2021-02-01

### Added

- Provide theme for nested components

## [1.0.0] - 2020-07-24

### Removed

- **Breaking:** Remove `iconText` prop, use `infoBoxText` instead

## [0.7.10] - 2019-10-18

### Fixed

- Fix label positioning by re-adding value as a prop for styled component

## [0.7.8] - 2019-09-03

### Changed

- Rename component API: `iconText` to `infoBoxText`
- _Deprecate_ prop `iconText`

## [0.7.6] - 2019-08-29

### Added

- Add new prop `otherActionProps` which gives the possibility to send custom props to Action component

## [0.7.5] - 2019-08-12

### Changed

- Update icon used from `InfoIcon` to `InfoCircleIcon` (same as it was before icon updates from `8x8-DS-Icons` repo)

## [0.6.16] - 2019-07-01

### Changed

- Updated styling to have cursor as pointer for the value text only if we have the htmlFor attribute

## [0.6.8] - 2019-05-16

### Added

- Add test attributes

## [0.6.3]

### Changed

- Update component APIs: `disabled` to `isDisabled` & `required` to `isRequired`

## [0.4.5]

### Added

- Add initial component structure
