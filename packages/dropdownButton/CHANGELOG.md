# @8x8/oxygen-dropdown-button CHANGELOG

## [Unreleased]

## [2.64.0] - 2024-04-11

### Changed
- Dropdown now also closes on `Escape` key (OX-2035)
- Behaviour on `Enter` key is now also conditioned by `shouldCloseOnInsideClick` prop (OX-2035)

## [2.62.0] - 2024-03-14

### Changed

- make the cursor property to be `not-allowed` when disabled (OX-956)

## [2.59.0] - 2024-02-28

### Fixed

- Close dropdown when pressing enter on an item (OX-784)

## [2.45.0] - 2023-09-20

### Fixed

- Ensure `onClose` & `onOpen` handlers are not called when the component re-renders without there being a state change (OX-1412)

## [2.41.0] - 2023-08-16

### Fixed

- Revert check for indicatorIcon to allow `false` which renders the DropdownButton with no icon (OX-1292)

## [2.39.0] - 2023-07-27

### Changed

- Stop event propagation on dropdown click (OX-1245)

## [2.37.0] - 2023-07-13

### Changed

- Convert source to Typescript. Exposed types file should be more correct now (OX-906)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.24.0] - 2023-02-20

### Changed

- Added: `aria-haspopup`, `aria-expanded`, `aria-hidden` for decorative svg. (OX-787)
- In order too meet WAI-ARIA requirements, the other aria / roles attributes (that will be added to dropdown button component) will be passed from `otherProps` (OX-787)

## [2.21.0] - 2023-02-06

### Fixed

- Update `DropdownButton` element type (OX-809)

## [2.19.0] - 2022-12-22

### Changed

- Render the Dropdown menu via a portal under document.body (OX-745)

### Added

- Add prop `renderInPortal` (default `true`) which can be used to disable portal rendering (OX-745)

## [2.17.0] - 2022-11-21

### Changed

- Rename Storybook page from `Dropdown Button` to `DropdownButton` (OX-744)
- Rename Storybook `Guideline` page to `Guidelines` (OX-744)
- Update Storybook Playground (OX-744)

## [2.7.0] - 2022-07-01

### Added

- Add `forwardedRef` prop to link external ref to button (OX-665)

## [2.1.0] - 2022-03-31

### Changed

- Typescript: `indicatorIcon` prop is now optional.
- Typescript: `theme` prop is now optional.

## [1.15.1] - 2021-10-19

### Fixed

- Fix `indicatorIcon` prop type and declaration now aligns with icons from `oxygen-icon`

## [1.14.0] - 2021-10-13

### Added

- Add props `invertIconPosition`, `indicatorIcon`

### Fixed:

- Change dropdown icon when in Novo
- Partial: increase dropdown width to support smaller text items

## [1.12.0] - 2021-09-24

### Added

- **Breaking:** new `ScrollWrapper` over dropdown `children` such that scrolling is done by the container, not the children themselves
- Add new theme props: `isClassic`, `dropdownBorderRadius`

## [1.0.0] - 2020-07-24

### Removed

- **Breaking:** Remove directions `bottomLeft`, `bottomRight`, `topLeft`, `topRight`. Use `bottomStart`, `bottomEnd`, `topStart`, `topEnd` instead

## [0.7.18] - 2019-12-09

### Added

- Add prop `shouldCloseOnInsideClick`, to decide if the dropdown should close when the content of the dropdown is clicked (by default is set `true`)

### Fixed

- Fix dropdown closing before the children's onClick events got invoked
- The dropdown should close when clicking outside if it is opened by default (using the `isDefaultOpen` flag)

## [0.7.15] - 2019-11-27

### Changed

- Replace Flyout with react-popper
- _Deprecate_ directions `bottomLeft`, `bottomRight`, `topLeft`, `topRight`. Please use `bottomStart`, `bottomEnd`, `topStart`, `topEnd` instead.

### Added

- Add prop `customCloseHandlers`
- Add new directions: `leftStart`, `leftEnd`, `rightStart`, `rightEnd`, `topStart`, `topEnd`, `bottomStart`, `bottomEnd`

## [0.7.6] - 2019-08-29

### Changed

- Update dropdown shadow to default shadow to align with the rest of the components with shadow
- Update dropdown padding to `xxs sm xxs 0` from `spacing` constants

## [0.6.5]

### Added

- Add relative positioning to the dropdown wrapper to fix the z-index

## [0.6.4]

### Changed

- Update z-index value of Dropdown button menu to 3000

## [0.2.0]

### Added

- Add new props `idealDirection` for displaying dropdown element

## [0.1.0]

### Added

- Add initial component structure
