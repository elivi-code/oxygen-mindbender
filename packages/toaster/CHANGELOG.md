# @8x8/oxygen-toaster CHANGELOG

## [Unreleased]

## [2.86.0] - 2025-03-21

### Added

- Add `closeButtonLabel` property to `Toaster` component to ensure that `close` button has a customisable aria-label (OX-3103)

## [2.63.0] - 2024-04-03

### Changed

- Reverted wrong export from index.d.ts CLOSE_ALL to REMOVE_ALL (OX-2068)

## [2.62.0] - 2024-03-14

### Added

- Add exports for Toaster subscribe events (OX-1982)

## [2.59.0] - 2024-02-28

### Added

- Add support for `onClose` callback (OX-1862)

## [2.55.0] - 2024-01-19

### Changed

- Toaster position moved to top-right (Except for classic theme). (OX-1697)

## [2.50.0] - 2023-11-15

### Added

- Add `id` to `notify` method options. If `notify` is called with the same id when the toaster is opened, it changes the content and resets timer. (OX-1537)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.17.0] - 2022-11-21

### Changed

- Update `pubsub-js` dependency to `1.9.4` (OX-744)
- Update `react-pose` dependency to `4.0.10` (OX-744)
- Update `uuid` dependency to `9.0.0` (OX-744)
- Update Storybook Playground (OX-744)

## [1.9.0] - 2021-09-08

### Added

- Add props `title`, `description` to `notify` function. If `notify` contains `content`, it will take precedence over `title` and `description`

## [1.5.2] - 2021-05-25

### Added

- Add `theme` support for individual toasts `notify({content: 'test', theme: { backgroundColor: 'red' }})`

## [0.7.15] - 2019-11-27

### Fixed

- Fix unable to close notification with Infinity duration
- Fix pauseExpirationTimeout and resumeExpirationTimeout when duration is set with Infinity

## [0.6.6]

### Added

- Add testIds

### Fixed

- fix Toaster positioning on IE11

## [0.6.5]

### Changed

- update Toaster Storybook: add customizable element to verify the z-index behaviour

### Added

- add the z-index value to the container of the `Toaster`, moved here from `Toast`
