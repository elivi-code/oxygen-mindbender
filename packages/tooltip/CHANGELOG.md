# @8x8/oxygen-tooltip CHANGELOG

## [Unreleased]

## [2.68.0] - 2024-07-19

### Changed

- Add default value to `renderContainerId` prop: 'oxygen-tooltip-root' (OX-2402)
- Update `@floating-ui/react` to `0.26.19` (OX-2402)
- Update min-height dimensions to match 1 line of text (from `@8x8/oxygen-static-tooltip`) (OX-2402)
- remove propTypes and defaultProps (use default function args values instead) (OX-2402)

## [2.63.0] - 2024-04-03

### Fixed

- Make floating UI disapear when hovering over it - when `delay` is set & `disableInteractive` is enabled (OX-2074)

## [2.57.0] - 2024-02-06

### Changed

- Updated dependency to `@floating-ui/react` as the original package was renamed (OX-1194)
- Allow proper ref merging so that `Tooltip` can be used together with other implementations which use the same node as target (eg `Popover`) (OX-1194)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.25.0] - 2023-03-01

### Changed

- Update Storybook documentation to new format (split guildelines into multiple example pages) (OX-932)

### Added

- Add new prop `disableInteractive` which allows Tooltip behaviour closer to a native `title` (OX-932)
- Add `renderContainerId` to allow providing a string value for an `id` to be used as render container root as alternative to `renderContainer` (OX-932)

### Fixed

- Fix Tooltip click toggle on reference click behaviour (OX-932)

## [2.24.0] - 2023-02-20

### Fixed

- Close tooltip on Escape key press (OX-929)
- Close Tooltip on reference (trigger) click (OX-929)

## [2.22.0] - 2023-02-07

### Changed

- Update `@floating-ui/react-dom-interactions` to 0.13.3 (OX-912)
- Disable `blockPointerEvents` from the `Tooltip`'s `safePolygon` (OX-912)

## [2.21.0] - 2023-02-06

### Fixed

- Fix exported `TooltipProps` type, removed recently added types since they are available on `TooltipProps` amd renamed named export `orientations` into `orientation` (OX-886)

## [2.19.0] - 2022-12-22

### Changed

- Replaced `react-popper` with `@floating-ui` https://floating-ui.com/ . This changes the core implementation, adds lots of improvements and fixes some classes of bugs (OX-620)
- `triggerRef` now acts as both trigger and floating position reference. Used to only act as floating position reference (OX-620)
- Always render via a Portal, eliminates the current need for `renderContainer` usage (OX-620)
- When multiple children are passed and no wrapper is used (`includeWrapper: false`) only the first child is used as the trigger & the rest are ignored (used to be the last child) (OX-620)
- Update prop `children` default value from `null` to `undefined` (OX-620)
- _Deprecate_ `customCloseHandlers` (OX-620)
- _Deprecate_ `modifiers` in favor of `offset` (OX-620)
- Update module to Typescript (OX-620)
- Improve Guidelines page with more examples and updated the Playground page to more correctly define the props (OX-620)

### Added

- Tooltip is also shown on `focus` (when set to show on `hover`) (OX-620)
- Tooltip closes on ESC key press (OX-620)
- Tooltip remains open while hovering over the floating part, allowing the user to select and interact with the Tooltip content (OX-620)
- New prop `offset` (to replace the deprecated `modifiers` prop) (OX-620)

### Removed

- Removed default `modifiers` prop (OX-620)

### Fixed

- Tooltip now rendering correctly even when mouse event coming from the same direction where the Tooltip would open (OX-743)
- Update exported `types`: better `types` for `Tooltip` & fixed both `showOnTypes` and `directions` which were inherently wrong (OX-620)

## [2.17.0] - 2022-11-21

### Changed

- Update Storybook Guildeline page to use `action` instead of `console.log` (OX-744)
- Rename Storybook `Guideline` page to `Guidelines` (OX-744)
- Update Storybook Playground (OX-744)

## [2.16.1] - 2022-10-27

### Changed

- Revert OX-388 caused issues that might crash Tooltip consumers (OX-741)

## [2.16.0] - 2022-10-21

### Fixed

- Fix tooltip dissapearing when mouse enters tooltip area, also fixes tooltip sometimes not showing when moving mouse between two elements with Tootlip (OX-388)

## [2.1.0] - 2022-03-31

### Changed

- Typescript: `triggerRef` prop is now optional

### Added

- Typescript: `enableArrow` prop

## [1.7.0] - 2021-06-28

### Added

- Add `Arrow` component. Renders based on `enableArrow` prop or based on theme configuration from `theme.enableArrow` where **component** prop takes **precedence** over theme config (default `enableArrow`: `undefined`)

### Change

- External config for react-popper `modifiers` `offset` value from `0, 5` to `0, 7` to accomodate `Arrow` component

## [1.5.0] - 2021-05-18

### Added

- External configuration for the react-popper `modifiers` property. Defaults to `{ offset: { offset: '0, 5', }, }`

## [1.0.0] - 2020-07-24

### Removed

- **Breaking:** Remove directions `bottomLeft`, `bottomRight`, `topLeft`, `topRight`, use `bottomStart`, `bottomEnd`, `topStart`, `topEnd` instead

## [0.9.1] - 2020-04-22

### Added

- Add prop `includeWrapper` (defaults to `true`). When `false` the `Tooltip` component does not render anything around the target element (no DOM node is added)

### Fixed

- Change "hover" events from `onMouseOver` and `onMouseOut` to `onMouseEnter` and `onMouseLeave` respectively

## [0.8.5] - 2020-01-28

### Added

- Add prop `renderContainer`. Render tooltip's content inside a portal attached to the `renderContainer` value.

## [0.7.15] - 2019-11-27

### Changed

- Replace Flyout with react-popper
- _Deprecate_ directions `bottomLeft`, `bottomRight`, `topLeft`, `topRight`, please use `bottomStart`, `bottomEnd`, `topStart`, `topEnd` instead

### Added

- Add prop `customCloseHandlers`
- Add new directions: `leftStart`, `leftEnd`, `rightStart`, `rightEnd`, `topStart`, `topEnd`, `bottomStart`, `bottomEnd`

## [0.7.14] - 2019-11-07

### Added

- Add the possibility to customize the Tooltip appearance using the 'theme' prop

## [0.6.16] - 2019-07-01

### Changed

- Update tooltip to render children inside a div instead of a span
