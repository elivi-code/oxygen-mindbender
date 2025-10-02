# @8x8/oxygen-milestone-tracker CHANGELOG

## [Unreleased]

## [2.71.0] - 2024-09-17

### Changed

- Update `theme` property to be optional (OX-2487)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.17.0] - 2022-11-21

### Changed

- Rename Storybook `Guideline` page to `Guidelines` (OX-744)
- Rename Storybook page title from `Milestone Tracker` to `MilestoneTracker` (OX-744)
- Update Storybook Playground (OX-744)

## [0.7.2] - 2019-07-25

### Added

- Update component to support consumer defined sizes for bullets and scale automatically
- Add cursor styling for the case when we have onClick on a milestone
- Add prop `showRoads` to control if roads between milestones are to be displayed or not

### Removed

- Remove props `isSmall` as is no longer necessary

## [0.7.0] - 2019-07-08

### Changed

- Update component to render small milestones based on `isSmall` prop
- Update component to support description as node

### Added

- Add milestone tracker component
