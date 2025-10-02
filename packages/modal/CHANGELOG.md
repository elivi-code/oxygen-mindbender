# @8x8/oxygen-modal CHANGELOG

## [Unreleased]

## [2.87.0] - 2025-03-31

### Added

- Add `ModalPortal` optional prop `focusAfterCloseItemRef` specifies the element to receive focus ([OX-2961](https://agile.8x8.com/browse/OX-2961))

## [2.71.0] - 2024-09-17

### Changed

- Update `theme` property to be optional (OX-2487)

## [2.70.0] - 2024-08-22

### Added

- Add ModalHeader & ModalFooter constant __TYPE values as props, as component type.name being lost during code minification (OX-2425)

### Changed

- Use modalProps aria-labelledby ID value if provided, instead of the randomly generated useId() value (OX-2425)
- Update Storybook to use __TYPE props and ModalHeader titleProps object (for manual ID) (OX-2425)

### Changed

- Updated `IconButton` import from oxygen-icon-button to oxygen-button (backwards compatible) (OX-1132)

## [2.64.0] - 2024-04-11

### Changed

- Update the role of ModalHeader from `none` to `presentation` (OX-2041)

## [2.61.0] - 2024-03-11

### Changed

- Update Storybook examples to Typescript & Storybook controls and usage (OX-2011)

### Fixed

- Fix Modal not closing when pressing Esc if Modal has no focusable elements (OX-2011)
- Fix some of the manually maintained types from index.d.ts (OX-2011)

## [2.60.0] - 2024-03-01

### Fixed

- Fix Modal horizontal centering (OX-1978)

## [2.59.0] - 2024-02-28

### Changed

- _Deprecate_ `disableAutoFocus` prop, which doesn't have any use since focus trap was added (OX-1564)

## [2.58.0] - 2024-02-08

### Changed

- update types for `portalRef` to allow ref callbacks (OX-1890)
- enahnce `portalRef` node to no longer set relative position (allow z-index through parent display flex) (OX-1890)

## [2.57.0] - 2024-02-06

### Added

- Add `portalRef` prop. Used when content from inside the Modal needs to render through a portal content that can be rendered outside of the inner Modal container (Select, Popover) (OX-1194)

## [2.55.0] - 2024-01-19

### Changed

- Removed tabindex from Modal wrapper to improve Voice Control usability (OX-1202)

## [2.35.0] - 2023-06-20

### Changed

- Add role="none" to Modal header close icon to have the icon ignored by screen readers (OX-1202)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

## [2.30.0] - 2023-05-04

### Fixed

- Fix `Modal` throwing when the `isVisible` prop is used due to conditional hook usage (OX-1126)

## [2.29.0] - 2023-04-26

### Added

- Add oxygen-utils as a dependency (OX-793)
- Add Storybook example for `Accessibility` (OX-793)
- Add Modal attributes `role` with default `dialog` value (OX-793)
- Add Modal attribute aria-labelledby which gets generated with useId oxygen-utils (OX-793)
- Add Modal titleProps object, where aria-labelledby value is passed as an id (OX-793)
- Add Modal modalProps object (OX-793)

## [2.28.0] - 2023-03-29

### Added

- Exposed `focus-trap` property `allowOutsideClick` for consumer use (OX-1025)
- Added usage example and lack of usage example for `allowOutsideClick` (OX-1025)

### Changed

- Use `IconButton` to render the Close icon (instead of a custom local implementation) (OX-1018)
- _Deprecate_ Modal theme props: `headerIconTop`, `headerIconRight`, `headerIconColor`, `headerIconColorActive`, `headerIconColorFocus`, `headerIconColorHover`, `headerIconBackgroundActive`, `headerIconBackgroundFocus`, `headerIconBackgroundHover`, `headerIconBorderFocus` (OX-1018)

### Fixed

- Adjust spacing around the Modal HeaderTitle, HeaderSubtitle & Close icon to match design (OX-1018)

## [2.20.0] - 2023-01-20

### Added

- Export `ModalHeaderProps` interface (OX-808)

## [2.17.0] - 2022-11-21

### Changed

- Update `focus-trap-react` to `10.0.0` (OX-744)
- Update `lodash.isfunction` to `3.0.9` (OX-744)
- Update `polished` to `4.2.2` (OX-744)
- Update Storybook Playground (OX-744)

## [2.16.0] - 2022-10-21

### Changed

- Update default align from `left` to `right` (OX-734)

### Fixed

- Wrapping buttons in the modal footer (OX-734)

## [2.15.1] - 2022-10-12

### Fixed

- Updates exported modal types to include `buttonCloseRef` (OX-733)

## [2.15.0] - 2022-10-12

### Changed

- Update styles for the close button in ModalHeader (OX-418)

### Added

- Add props `buttonCloseRef` to ModalHeader (OX-418)

## [2.14.0] - 2022-10-03

### Added

- Add `ModalPortal` optional prop `initialFocus` specifies the element to receive initial focus (OX-670)

## [2.13.0] - 2022-09-20

### Added

- Add theme property `modalOffsetMinimal` (OX-710)

### Removed

- Remove `maxHeight` theme property (OX-710)

## [2.8.0] - 2022-07-11

### Added

- Add prop `shouldUseFocusTrap` that turns on / off focus trap for modal (OX-634)

## [2.1.0] - 2022-03-31

### Changed

- Typescript: ModalFooter: `theme` prop is now optional.

### Added

- Typescript: ModalHeader: `iconCloseTitle` prop.

## [1.17.0] - 2022-01-26

### Added

- Add `ModalHeader` prop `iconCloseTitle`
- Add new theme props: `headerIconColor`, `headerIconColorHover`

## [1.16.2] - 2021-12-17

### Added

- Add `ModalPortal` to the exports so we can use it without create portal
- Add types for `ModalPortal`

## [1.14.0] - 2021-10-13

### Fixed

- Fix type declaration for ModalSizes, included "medium"
- Export ModalContent and ModalSizes types
- Remove react as a devDependency

## [1.12.1] - 2021-09-27

### Fixed

- Fixed bug when attempting to show a Modal with text only content (or some kind of content like _null_)

## [1.12.0] - 2021-09-24

### Changed

- Update storybook examples & code for clearer usage patterns

### Added

- Add new default size `MODAL_SIZE.MEDIUM`: `medium` (replacing `small`). Uses same value for Classic (no effects should be felt in Classic)
- Expose new component `ModalContent` — helps provide the correct spacing for most modal usage
- Add theme prop `width` (medium width — default value when no MODAL_SIZE is provided)
- Add theme prop `headerTitleFontLetterSpacing`
- Add theme prop `headerTitleColor` — title text color (undefined in Classic — text only inherits colorfrom CSS cascade)
- Add theme prop `headerTitleWrap` — if the title content should wrap on multiple lines (false forClassic & true for Novo)
- Add theme prop `contentColor` — undefined in Classic, text inherits color from CSS cascade
- Add theme prop `contentPadding`
- Add theme prop `contentFontFamily`
- Add theme prop `contentFontSize`
- Add theme prop `contentLineHeight`
- Add theme prop `contentFontWeight`
- Add theme prop `contentFontLetterSpacing`
- Add theme prop `footerPadding` — new standalone padding theme prop replacing `footerPaddingVertical` &`footerPaddingHorizontal`. Original theme props still used if `footerPadding` is notprovided
- Add theme prop `footerPaddingSmall` — new standalone padding theme prop replacing `footerPaddingVertical` & `footerPaddingSmallHorizontal`. Original theme props still used if `footerPaddingSmall` is not provided

### Fixed

- Fix bug where `footerPaddingVertical` and `paddingHorizontal` were applied inverse to their name

## [1.10.0] - 2021-09-14

### Fixed

- Properly specify dependency on `@8x8/oxygen-button`

## [1.0.0] - 2020-07-24

### Changed

- **Breaking:** rename prop `visible` intto `isVisible`
- **Breaking:** rename prop `shadow` into `hasShadow`
- **Breaking:** rename prop `closeOnEsc` into `shouldCloseOnEsc`
- **Breaking:** rename prop `closeOnOverlayClick` into `shouldCloseOnOverlayClick`
- Modal theme properties - to support the newly added `ModalHeader` and `ModalFooter` components in Modal package

### Added

- Add `ModalHeader` component (@8x8/oxygen-modal-header is deprecated and no longer maintained, please use this instead)
- Add `ModalFooter` component (@8x8/oxygen-modal-footer is deprecated and no longer maintained, please use this instead)
- Add `MODAL_SIZE`, `MODAL_HEADER_ALIGN_TITLE` and `MODAL_FOOTER_ALIGN` constants (see documentation for possible values)
- Add new exposed styled components (together with the new components): `HeaderContainer`, `HeaderTitle`, `HeaderCloseIcon`, `FooterContainer`

## [0.9.8] - 2020-06-03

### Added

- Add prop `disableAutoFocus` which defaults to false

## [0.6.5]

### Changed

- Apply the z-index value on modal container fixed element
- Update Modal Storybook: add customizable element to verify the z-index behaviour

## [0.6.4]

### Changed

- update z-index value of Modal to 2000

### Added

- exposes styled components
