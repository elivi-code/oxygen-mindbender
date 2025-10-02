# @8x8/oxygen-badge CHANGELOG

## [Unreleased]

## [2.96.0] - 2025-08-06

### Added

- Add `AIBadge` component with star icon and AI text (OX-2913)

## [2.78.0] - 2025-01-22

### Fixed

- Expose missing properties `badgePosition`, `badgeSize`, `badgeType` (OX-2940)

## [2.77.0] - 2024-12-19

### Changed

- Convert the `Badge` component to TypeScript (OX-947)
- Exported `BadgeProps` interface (OX-947)

## [2.53.0] - 2023-12-14

### Fixed

- fix index.d.ts (OX-1686)

### Changed

- _Deprecate_ the old position values 'tl', 'tr', 'bl', 'br' (OX-1686)
- use position values similar to DropdownButotn or Tooltips: 'top-start', 'top-end', 'bottom-start', 'bottom-end' (OX-1686)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.19.0] - 2022-12-22

### Changed

- _Deprecate_ size `big` (OX-766)
- _Deprecate_ type `secondary` (OX-766)
- Update `novo` `small` badge size to `0.75rem` (OX-766)
- Update `novo` `big` & `medium` badge size to `1rem` (OX-766)

### Removed

- Remove theme props `borderRadiusBig`, `borderRadiusMedium`, `borderRadiusSmall` (OX-766)

## [2.17.0] - 2022-11-21

### Changed

- Update Storybook Playground (OX-744)

## [1.7.0] - 2021-06-28

### Added

- Add Novo & NovoDark theme support (identical theme for both). _Note_ Novo does not support secondary Badge, it looks identical to primary
- Add theme prop `fontWeight`

## [0.7.1] - 2019-07-22

### Added

- Document the exposed configuration values: `badgeSize`, `badgePosition`, `badgeType` in `README.md`

## [0.6.3]

### Changed

- Update component APIs `inner` to `isInner`

## [0.5.0]

### Added

- Add new `prop`: `type` one of: [`primary`, `secondary`]
- Add new `prop`: `children`

### Removed

- Remove `props`: `secondary`, `value`

## [0.4.5]

### Added

- Add initial component structure
