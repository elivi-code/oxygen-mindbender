# @8x8/oxygen-sidebar-menu CHANGELOG

## [Unreleased]

## [2.96.0] - 2025-08-06

### Added
- properties for the badge (`hasBadge`, `badgeChildren`, `badgeAriaLabel`) as part of every menu item with accessibility support (OX-3560)
-- Badges are decorative elements (`aria-hidden="true"`) with accessibility handled by button aria-labels
-- Menu buttons automatically receive contextual aria-labels (e.g., "Messages, requires attention" or custom descriptions)
- menu icon, badge and the arrow (if exists) are now top aligned (OX-3560)

## [2.80.0] - 2025-02-17

### Changed

- Update UI based on design (slight spacings adjustments & token updates for Neo) (OX-3006)

## [2.79.0] - 2025-02-05

### Added

- Added a new property into the component API (`position`) (OX-2907)

## [2.77.0] - 2024-12-19

### Changed

- Removed styled-components `shouldForwardProp` for v6 compatibility (OX-2392)

## [2.72.0] - 2024-10-01

### Added

- Added `expandLabel` parameter into sidebarMenu component (this prop must be provided together with `collapseLabel` prop so the collapse button will be rendered) (OX-2535)

## [2.68.0] - 2024-07-19

### Changed

- Update `@floating-ui/react` to `0.26.19` (OX-2402)

## [2.63.0] - 2024-04-03

### Changed

- **Breaking** `Sidebar` uses `SidebarProvider` internally. No longer need to provide it as a wrapper (OX-1931)

### Added

- Add support to render Sidebar interactive items via custom components (example usage for react-router `Link`) via new props: `linkComponent`, `linkProp` on `Sidebar` and `link` attribute on the menu items (OX-1931)

## [2.61.0] - 2024-03-11

### Changed

- Ensure `SidebarMenu` opens on hover & keyboard events, and no longer on click (which would interfere with hover) (OX-1928)

## [2.58.0] - 2024-02-08

### Changed

- Added onAuxClick handling on MenuItem and SubmenuItem to determine the middle click (OX-1815)

## [2.57.0] - 2024-02-06

### Changed

- Exposing react mouse click event in the onTrigger function (OX-1815).
- Update `@floating-ui` to latest version: 0.26.5 (OX-1194)

## [2.53.0] - 2023-12-14

### Fixed

- Sidebar is now strongly typed to extend `HTMLAttributes` to properly allow the use of additional `React.FC` props. (OX-1689)

## [2.51.0] - 2023-11-24

### Fixed

- `isActive` items will now be shown (via `scrollIntoView`) (OX-1535)

## [2.46.0] - 2023-09-28

### Fixed

- Improved rendering (fixed width) when `SidebarMenu` is part of a flex container (OX-1443)
- Improved rendering of multi-row menu items (left Icon width fixed) (OX-1443)

## [2.37.0] - 2023-07-13

### Added

- onCollapseChange - callback function for collapse change (OX-1246)

## [2.35.0] - 2023-06-20

### Fixed

- Fix Eliminate redundant inner <Ul> wrapper for submenu items (OX-1205)

## [2.34.0] - 2023-06-08

### Fixed

- Fix `SidebarMenu` dark theme text color (OX-1196)

## [2.33.0] - 2023-05-25

### Added

- Add initial component structure as alpha (OX-760)
