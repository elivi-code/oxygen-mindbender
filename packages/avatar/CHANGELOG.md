# @8x8/oxygen-avatar CHANGELOG

## [Unreleased]

## [2.91.0] - 2025-05-28

### Changed

- Revert original fix for OX-3012 and apply a new one which should have less impact (OX-3452)

## [2.88.0] - 2025-04-04

### Changed

- Update `Avatar` colors to follow updated design (OX-3256)

### Fixed

- Fix `AvatarStack` zindex issue (OX-3012)

## [2.87.0] - 2025-03-31

### Changed

- Use only Novo icons (User & Group) (OX-3260)

## [2.73.0] - 2024-10-16

### Changed

- Update StyledAvatar status border colors to use tokens (OX-2588)
- Update Away and WorkOffline statuses border color to `orange06` to meet contrast requirements (OX-2588)

### Added

- Added oxygen-theme dependency to package in order to use tokens in status border color (OX-2588)

### Fixed

- Remove duplicate `position` CSS property in interactive StyledAvatar (OX-2588)

## [2.69.0] - 2024-07-30

### Fixed

- Properly reset `Avatar` src loading state when src changes (OX-2458)

## [2.67.0] - 2024-06-27

### Changed

- Fallback to initials/icon when provided image fails to load (OX-2241)

### Added

- optional imageProps prop which is destructured over the image component if `src` is provided (OX-2241)

### Fixed

- StatusBorder and userStatus are displayed correctly, above the avatar image if it exists (OX-2297)

## [2.54.0] - 2024-01-09

### Added

- Add `ref` forwarding support (OX-1462)

## [2.52.0] - 2023-12-07

### Changed

- Converted the codebase to Typescript (OX-946)

### Added

- Exposed the `AvatarProps`, `AvatarStackProps`, `AvatarTheme`, `AvatarSize`, `AvatarUserStatus`, `AvatarStackTheme` types (OX-946)
- Exposed the `avatarSize` and `avatarUserStatus` objects (OX-946)

## [2.49.0] - 2023-11-08

### Added

- Add Avatar Presence Status Border color for Wrap Up status (OX-1532)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.29.1] - 2023-05-03

### Fixed

- Custom badge icon under `userStatus` is no longer styled if it's an SVG (OX-1108)

## [2.25.0] - 2023-03-01

### Added

- Add a specific example for using a custom badge (OX-939)

### Fixed

- Fixed custom badge usage to use correct layout (apply CSS layout to wrapper element) (OX-939)

## [2.24.0] - 2023-02-20

### Changed

- Remove `StyledAvatarContainer` wrapper and keep just one avatar wrapper (`StyledAvatar`). In this way, `rest` props will be set on that interactable top-level wrapper, achieving also WAI-ARIA requirements. (OX-781)

## [2.17.0] - 2022-11-21

### Changed

- Update Storybook Playground (OX-744)
- Rename Storybook `Guideline` page to `Guidelines` (OX-744)
- Update Storybook Guidelines to use actions instead of plain console.log (OX-744)

## [2.16.0] - 2022-10-21

### Changed

- Update statusBorderColor for `available` and `onDirectCall` to `green04`'s value (OX-737)

### Added

- Add support for custom size in px, specified as `number` (does not allow `UserStatus` or `EditOverlay` in this mode (OX-711)

## [2.15.0] - 2022-10-12

### Added

- Add new Avatar prop `userPresenceBorder` to show a border coresponding to user's presence status around the avatar (default `false`)
- Add new Avatar prop `isActive` to force showing the focus border (default `false`) (OX-667)
- Add new Avatar focus and hover state, active when an onClick function is present (OX-667)

## [2.11.0] - 2022-08-16

### Added

- Add new Avatar prop `maxInitials` to control how many initials are shown (default `2`) (OX-698)
- Add new Avatar prop `hasBorder` to control whether to render a border around the Avatar (default `false`) (OX-698)
- Add new AvatarStack component (OX-698)

## [1.6.1] - 2021-06-15

### Changed

- Update Readme with Novo theme details

### Added

- Novo & Novo dark theme support (updated icons)
- Storybook theme switcher under _Guideline_

## [1.3.6] - 2021-04-26

### Added

- render user status badge for `size2xsmall`

## [1.2.5] - 2021-01-15

### Changed

- updated examples with new avatar images

## [0.6.9] - 2019-06-03

### Changed

- updated test attributes

## [0.6.5]

### Added

- Add the possibility to pass custom content to `Avatar` component via children

## [0.6.4]

### Added

- Add `Avatar` component
