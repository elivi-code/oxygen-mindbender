# @8x8/oxygen-textarea CHANGELOG

## [Unreleased]

## [2.78.0] - 2025-01-22

### Changed
- When Textarea `isDisabled` we have removed the `disabled` textarea attribute (OX-275)
- When Textarea `isDisabled` we have kept `aria-disabled`, added the `readonly` and `aria-readonly` attributes (OX-275)

### Removed
- Textexara `readonly` + `disabled` UI styling in storybook (OX-725)

## [2.62.0] - 2024-03-14

### Changed

- make the cursor property to be `not-allowed` when disabled (OX-956)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.28.0] - 2023-03-29

### Changed

- Updated Storybook `Playground` Label component to be imported from packages/label with a `htmlFor ` attributes and associated `id` on Textarea component (OX-799)

### Added

- Add Storybook example for `Accessibility` (OX-799)

## [2.17.0] - 2022-11-21

### Changed

- Rename Storybook `Guideline` page to `Guidelines` (OX-744)
- Update Storybook Playground (OX-744)

## [2.6.0] - 2022-06-23

### Changed

- Update read-only state for novo theme

## [2.1.0] - 2022-03-31

### Changed

- Typescript: `theme` prop is now optional
- Typescript: `forwardedRef` prop is now optional
- Typescript: `onChange` signature

## [1.18.0] - 2022-02-16

### Added

- Add `Textarea` attributes: `aria-readonly`, `aria-disabled`
- Add theme props: `borderWidthReadOnly`, `textareaBorderRadiusReadOnly`

## [1.10.0] - 2021-09-14

### Changed

- Classic theme change: readOnly now has border all around (for easier transition to Novo)

### Added

- Add Textarea Novo and Novo dark themes
- Add new theme props: `textareaBackgroundColorReadOnly`, `borderWidth`

## [0.7.15] - 2019-11-27

### Added

- Add Textarea component
