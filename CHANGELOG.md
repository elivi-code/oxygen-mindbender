# @8x8/oxygen CHANGELOG

## [2.98.0] - 2025-10-01

### @8x8/oxygen-filter-list

#### Changed

- Date filter range type now supports pre-populating internalFilter with values from defaultFilters ([OX-3714](https://agile.8x8.com/browse/OX-3714))

#### Added

- FilterList via `emptyFilterAllowed` flag now supports adding of filters from the list, without selecting a value for it and without pressing 'apply'; this works even when you don't have global apply set ([OX-3763](https://agile.8x8.com/browse/OX-3763))

### @8x8/oxygen-icon

#### Added

- Add new icons: `BotIcon`, `BrainIcon`, `TicketIcon` ([OX-3779](https://agile.8x8.com/browse/OX-3779))

## [2.97.0] - 2025-09-17

### @8x8/oxygen-column-management

#### Changed

- Updated to use useAriaLive hook from @8x8/oxygen-utils for screen reader announcements ([OX-3521](https://agile.8x8.com/browse/OX-3521))

### @8x8/oxygen-data-table

#### Changed

- BREAKING CHANGE: renamed 2 exported symbols because of a typo: getSelectColumDef => getSelectColumnDef, getSingleSelectColumDef => getSingleSelectColumnDef ([OX-3731](https://agile.8x8.com/browse/OX-3731))

#### Fixed

- table header cell wraps text in max 3 lines, with overflow, if text does not fit in 3 lines ([OX-3731](https://agile.8x8.com/browse/OX-3731))

### @8x8/oxygen-date-time-range-selector

#### Added

- Added `This Week` as a predefined range ([OX-3704](https://agile.8x8.com/browse/OX-3704))

### @8x8/oxygen-filter-list

#### Changed

- Improved accessibility for SelectionFilter by using proper fieldset/legend structure for selected items ([OX-3521](https://agile.8x8.com/browse/OX-3521))
- Updated SelectionFilter styling to match design ([OX-3521](https://agile.8x8.com/browse/OX-3521))

#### Added

- Screen reader announcements for Clear All and Reset All actions using useAriaLive hook ([OX-3521](https://agile.8x8.com/browse/OX-3521))
- New translation labels: `searchValueLabel`, `resetAllSuccessLabel`, `clearAllSuccessLabel` ([OX-3521](https://agile.8x8.com/browse/OX-3521))
- Search icon and placeholder text to SelectionFilter search input ([OX-3521](https://agile.8x8.com/browse/OX-3521))

### @8x8/oxygen-popover

#### Changed

- Refactor `PopoverMenu` rendering logic to ensure proper content ordering: header content, menu content, footer content ([OX-3626](https://agile.8x8.com/browse/OX-3626))
- Improve complex list rendering with better grouping and accessibility support for section headers ([OX-3626](https://agile.8x8.com/browse/OX-3626))

#### Added

- Add new `PopoverMenuExtended.withFooter` example demonstrating footer content usage ([OX-3626](https://agile.8x8.com/browse/OX-3626))

### @8x8/oxygen-select

#### Changed

- added support for focusable isDisabled: when select is disabled, it still cann be focused via ref.focus() but it cannot be modified ([OX-3707](https://agile.8x8.com/browse/OX-3707))

### @8x8/oxygen-utils

#### Added

- Add new `useAriaLive` hook for managing screen reader announcements ([OX-3521](https://agile.8x8.com/browse/OX-3521))

## [2.96.0] - 2025-08-06

### @8x8/oxygen-accordion

#### Added

- Add `expandTrigger` prop to control accordion interaction mode ([OX-3418](https://agile.8x8.com/browse/OX-3418))
- Add `contentAfterTitle` prop to Accordion component to allow custom content (e.g., IconButton with Tooltip) after the accordion title ([OX-3418](https://agile.8x8.com/browse/OX-3418))
- Add `translations` prop to customize expand/collapse aria-labels with support for partial overrides ([OX-3418](https://agile.8x8.com/browse/OX-3418))

### @8x8/oxygen-badge

#### Added

- Add `AIBadge` component with star icon and AI text ([OX-2913](https://agile.8x8.com/browse/OX-2913))

### @8x8/oxygen-button

#### Added

- Add `as` prop to IconButton TypeScript interface to support styled-components polymorphic rendering ([OX-3418](https://agile.8x8.com/browse/OX-3418))

### @8x8/oxygen-filter-list

#### Changed

- Initial predefined range now has an initialised start and end time ([OX-3617](https://agile.8x8.com/browse/OX-3617))
- Do not show operator in the tooltip if it's undefined ([OX-3616](https://agile.8x8.com/browse/OX-3616))

### @8x8/oxygen-icon

#### Added

- Add new icon: `SquareSolidIcon` ([OX-3629](https://agile.8x8.com/browse/OX-3629))

### @8x8/oxygen-sidebar-menu

#### Added

- properties for the badge (`hasBadge`, `badgeChildren`, `badgeAriaLabel`) as part of every menu item with accessibility support ([OX-3560](https://agile.8x8.com/browse/OX-3560))
-- Badges are decorative elements (`aria-hidden="true"`) with accessibility handled by button aria-labels
-- Menu buttons automatically receive contextual aria-labels (e.g., "Messages, requires attention" or custom descriptions)
- menu icon, badge and the arrow (if exists) are now top aligned ([OX-3560](https://agile.8x8.com/browse/OX-3560))

## [2.95.0] - 2025-07-31

### @8x8/oxygen-column-management

#### Changed

- Extended TelemetryInterface to Record<string,string> to allow to consumers have flexibility to add any property ([OX-3613](https://agile.8x8.com/browse/OX-3613))

### @8x8/oxygen-context-menu

#### Fixed

- Fix broken (internal) theme name import ([OX-460](https://agile.8x8.com/browse/OX-460))

### @8x8/oxygen-filter-list

#### Fixed

- Fix `FilterList` internal state bug ([OX-3531](https://agile.8x8.com/browse/OX-3531))

### @8x8/oxygen-label

#### Added

- Reexport `Tooltip`'s `showOn` constants obj ([OX-460](https://agile.8x8.com/browse/OX-460))

#### Fixed

- Corrected the `infoBoxShowOn` type ([OX-460](https://agile.8x8.com/browse/OX-460))

### @8x8/oxygen-pagination

#### Added

- Export `PaginationProps` ([OX-460](https://agile.8x8.com/browse/OX-460))

## [2.94.0] - 2025-07-22

### @8x8/oxygen-button

#### Changed

- Update `IconButton` design to improve contrast for accessibility ([OX-3445](https://agile.8x8.com/browse/OX-3445))

### @8x8/oxygen-column-management

#### Added

- Applied add and removed changes via aria-live and allow to pass custom translation to it([OX-3524](https://agile.8x8.com/browse/OX-3524))

### @8x8/oxygen-constants

#### Changed

- Optimized `IconButton` Neo theme inheritance with minimal property overrides ([OX-3445](https://agile.8x8.com/browse/OX-3445))

#### Added

- Add `IconButton` theme properties: `shadowFocus`, `shadowFocusInverted`, `colorSelected`, `backgroundActiveSelected`, `backgroundSelectedHover`, `backgroundSelectedDisabled` ([OX-3445](https://agile.8x8.com/browse/OX-3445))

### @8x8/oxygen-data-table

#### Fixed

- on first mouse click inside table, first row gets the blue focus rectangle ([OX-3578](https://agile.8x8.com/browse/OX-3578))
- on successive mouse clicks, clicked row will get the blue focus rectangle ([OX-3578](https://agile.8x8.com/browse/OX-3578))

### @8x8/oxygen-filter-list

#### Changed

- `Clear` filter now sets the values to null instead of undefined ([OX-3575](https://agile.8x8.com/browse/OX-3575))
- Avoid calling `onChange` callback if `currentFilters` are equal to `newFilters` ([OX-3575](https://agile.8x8.com/browse/OX-3575))

#### Added

- `isLoading` property to `FilterType` so each filter loading state can be controlled from outside instead relying on `getSearchSuggestions` callback ([OX-3561](https://agile.8x8.com/browse/OX-3561))

#### Fixed

- When showOperatorInFilterButton is set to false, dateRange filter no longer shows empty braces if there isnt data ([OX-3561](https://agile.8x8.com/browse/OX-3561))

### @8x8/oxygen-graphics

#### Added

- Allow prop passing to neo svgs ([OX-3597](https://agile.8x8.com/browse/OX-3597))

### @8x8/oxygen-pagination

#### Fixed

- handle 'Space' and 'Enter' keys on forward, backward buttons ([OX-3578](https://agile.8x8.com/browse/OX-3578))

### @8x8/oxygen-theme

#### Added

- Add new tokens: `active13`, `hover14`, `focus02` ([OX-3445](https://agile.8x8.com/browse/OX-3445))
- Add new color `offwhite11` and new token `ui31` ([OX-3346](https://agile.8x8.com/browse/OX-3346))

## [2.93.0] - 2025-07-03

### @8x8/oxygen-column-management

#### Changed

- The headings "Active Columns" & "Available Columns" are marked as `h2`. Also marked as label via `aria-labelledby` for the sortable grids below ([OX-3522](https://agile.8x8.com/browse/OX-3522))

### @8x8/oxygen-data-table

#### Changed

- added accessibility feature: keyboard navigation within the table
- fixed misalignment issue due to `align-self: center` not being applied ([OX-3526](https://agile.8x8.com/browse/OX-3526))
- improved DataTable row rendering when virtualized ([OX-3526](https://agile.8x8.com/browse/OX-3526))

#### Fixed

- changed color from ui09 to to hover10, for hover state; changed color from ui09 to active10 for selected/active state ([OX-3488](https://agile.8x8.com/browse/OX-3488))

### @8x8/oxygen-filter-list

#### Changed

- Add new property on the filter definition `showSearchInput` which can control the visibility of the search input in a backwards compatible way ([OX-3593](https://agile.8x8.com/browse/OX-3593))
- When showOperatorInFilterButton is set to false, the values length is now only displayed if it is greater than 0 ([OX-3544](https://agile.8x8.com/browse/OX-3544))
- When using Group Filters, custom operators now render the SelectionFilter component instead of the InputFilter component ([OX-3544](https://agile.8x8.com/browse/OX-3544))

#### Added

- Export type `GroupFilterDefinitionType` ([OX-3527](https://agile.8x8.com/browse/OX-3527))
- Display a calendar icon when the filter is of the date range type ([OX-3544](https://agile.8x8.com/browse/OX-3544))

#### Fixed

- Revert the change done in 2.92.0 in regards to `hasSearchSuggestions` — which would inadvertently hide the search input if this prop was not defined when `getSearchSuggestions` was defined ([OX-3593](https://agile.8x8.com/browse/OX-3593))
- Fixed `Clear All` button `isDisable` logic to check for filter values in the internal state

### @8x8/oxygen-icon

#### Added

- Add new icon: `PurgeIcon` ([OX-3525](https://agile.8x8.com/browse/OX-3525))

## [2.92.0] - 2025-06-16

### @8x8/oxygen-checkbox

#### Fixed

- modified Checkbox's props to also accept `inputProps` as a property ([OX-3479](https://agile.8x8.com/browse/OX-3479))

### @8x8/oxygen-data-table

#### Fixed

- added property 'aria-label' to CheckboxCell ([OX-3479](https://agile.8x8.com/browse/OX-3479))

### @8x8/oxygen-filter-list

#### Fixed

- fixed: for showing <SearchInput> consider filterDefinition.hasSearchSuggestions===true instead of SelectionFilter.getSearchSuggestions ([OX-2107](https://agile.8x8.com/browse/OX-2107))

### @8x8/oxygen-label

#### Fixed

- Fix alignment for info icon ([OX-3480](https://agile.8x8.com/browse/OX-3480))

### @8x8/oxygen-popover

#### Added

- Expose `onMenuOpenToggle` callback for when the menu opens/closes [[OX-3485](https://agile.8x8.com/browse/OX-3485)]
- Expose `onCancel` callback for when the menu is closed without selecting an option [[OX-3485](https://agile.8x8.com/browse/OX-3485)]

## [2.91.0] - 2025-05-28

### @8x8/oxygen-avatar

#### Changed

- Revert original fix for [OX-3012](https://agile.8x8.com/browse/OX-3012) and apply a new one which should have less impact ([OX-3452](https://agile.8x8.com/browse/OX-3452))

### @8x8/oxygen-constants

#### Added

- Update `ToggleButton` colors to improve contrast for accessibility ([OX-3457](https://agile.8x8.com/browse/OX-3457))

### @8x8/oxygen-data-table

#### Fixed

- row actions not appearing after a scroll & page change, if table is virtualized, paginated

### @8x8/oxygen-filter-list

#### Added

- <SearchInput> subcomponent shown conditionally, if one or more clauses are true: ([OX-2107](https://agile.8x8.com/browse/OX-2107))
- provided options for that filter are more than 10
- filterDefinition.allowFreeformSuggestions = true
- SelectionFilter.getSearchSuggestions is provided
- Moved reset/clear button to the bottom and don't show operator selector if there is a single operator available ([OX-2477](https://agile.8x8.com/browse/OX-2477))

### @8x8/oxygen-icon

#### Added

- Add new icons: `ResumeIcon`, `Stop2Icon` ([OX-3444](https://agile.8x8.com/browse/OX-3444))
- Add new icon: `WorkSettingsIcon` ([OX-3449](https://agile.8x8.com/browse/OX-3449))

### @8x8/oxygen-radio

#### Changed

- Replaced `div` usage with `span` because `div`s are not allowed inside a label ([OX-3404](https://agile.8x8.com/browse/OX-3404))

### @8x8/oxygen-theme

#### Added

- Add new tokens: `dataStatus01`, `dataStatus02`, `dataStatus03`, `dataStatus04`, `dataStatus05`, `dataStatus06`, `dataStatus07` ([OX-3419](https://agile.8x8.com/browse/OX-3419))
- Add new token: `ui33` ([OX-3457](https://agile.8x8.com/browse/OX-3457))

## [2.90.0] - 2025-05-08

### @8x8/oxygen-icon

#### Added

- Add new icon: `EngageIcon` ([OX-3348](https://agile.8x8.com/browse/OX-3348))

### @8x8/oxygen-theme

#### Added

- Add new tokens: `avatarText06` & `avatarBackground06` ([OX-3379](https://agile.8x8.com/browse/OX-3379))

## [2.89.0] - 2025-04-17

### @8x8/oxygen-accordion

#### Changed

- Enhanced accordion usability by making content scrollable by default when using fixed heights ([OX-3336](https://agile.8x8.com/browse/OX-3336))

#### Fixed

- Improved accordion expansion reliability by replacing JS height calculations with CSS grid animations ([OX-3336](https://agile.8x8.com/browse/OX-3336))

### @8x8/oxygen-filter-list

#### Added

- New group filter structure supported ([OX-3231](https://agile.8x8.com/browse/OX-3231))
- `showOperatorInFilterButton` prop to simplify displayed UI elements of filter tags ([OX-2931](https://agile.8x8.com/browse/OX-2931))

### @8x8/oxygen-pagination

#### Fixed

- fix sorting order ([OX-3317](https://agile.8x8.com/browse/OX-3317))
- fix min-width of both RowsPerPage and PageNavigation components to fit numbers with 3 respective 2 digits ([OX-3328](https://agile.8x8.com/browse/OX-3328))

## [2.88.0] - 2025-04-04

### @8x8/oxygen-avatar

#### Changed

- Update `Avatar` colors to follow updated design ([OX-3256](https://agile.8x8.com/browse/OX-3256))

#### Fixed

- Fix `AvatarStack` zindex issue ([OX-3012](https://agile.8x8.com/browse/OX-3012))

### @8x8/oxygen-constants

#### Changed

- Update `Avatar` colors to follow updated design ([OX-3256](https://agile.8x8.com/browse/OX-3256))

### @8x8/oxygen-icon

#### Added

- Add new icon: `FaceMixedIcon` ([OX-3298](https://agile.8x8.com/browse/OX-3298))

### @8x8/oxygen-theme

#### Added

- Add new tokens: `avatarText01`,`avatarText02`,`avatarText03`,`avatarText04`,`avatarText05`,`avatarBackground01`,`avatarBackground02`,`avatarBackground03`,`avatarBackground04`,`avatarBackground05` ([OX-3256](https://agile.8x8.com/browse/OX-3256))

## [2.87.0] - 2025-03-31

### @8x8/oxygen-avatar

#### Changed

- Use only Novo icons (User & Group) ([OX-3260](https://agile.8x8.com/browse/OX-3260))

### @8x8/oxygen-constants

#### Removed

- Remove `modalHeader` & `modalFooter` items (merged in `modal` in 2020) ([OX-3260](https://agile.8x8.com/browse/OX-3260))

### @8x8/oxygen-data-table

#### Added

- ability to render virtualized rows ([OX-3220](https://agile.8x8.com/browse/OX-3220))

### @8x8/oxygen-filter-list

#### Added

- Added optional `onFilterToggle` function that returns the filter id when opened and null when closed ([OX-2930](https://agile.8x8.com/browse/OX-2930))

### @8x8/oxygen-graphics

#### Changed

- Mark old illustrations as deprecated ([OX-3026](https://agile.8x8.com/browse/OX-3026))

#### Added

- Add new illustrations: `Action`, `Error`, `NoData`, `NoEvents`, `NoResults`, `Subscribe`, `Target` ([OX-3026](https://agile.8x8.com/browse/OX-3026))

### @8x8/oxygen-icon

#### Changed

- Fully support named exports with tree shaking. The recommended way for icon imports going forward is `import { IconName } from '@8x8/oxygen-icon` ([OX-3260](https://agile.8x8.com/browse/OX-3260))
- Named exports will return the Novo icon instead of the Classic icon. Applies to the following 108 items: `AcrobatIcon`, `ArchiveIcon`, `ArrowDiagonalInIcon`, `ArrowDownIcon`, `ArrowFirstIcon`, `ArrowLastIcon`, `ArrowRightIcon`, `ArrowUpIcon`, `AudiowaveIcon`, `BellIcon`, `BellTickIcon`, `BestFitIcon`, `CalendarIcon`, `CameraIcon`, `CardIcon`, `CellphoneIcon`, `CheckIcon`, `ClockIcon`, `CloseCircleIcon`, `CloseLargeIcon`, `ComputerIcon`, `CopyIcon`, `DashboardIcon`, `DatabaseIcon`, `DialpadIcon`, `DirectoryIcon`, `DotsHorizontalIcon`, `DotsVerticalIcon`, `DownloadIcon`, `EnvelopeExclamationIcon`, `EnvelopeIcon`, `EvaluateIcon`, `ExpandIcon`, `EyeIcon`, `FacebookIcon`, `FaceFrownIcon`, `FaceNeutralIcon`, `FaceSmileIcon`, `FaxIcon`, `FeedbackIcon`, `FilterIcon`, `FolderIcon`, `FolderOpenIcon`, `Forward10Icon`, `ForwardIcon`, `GearIcon`, `GoogleIcon`, `HangupIcon`, `HeadsetIcon`, `HoldCircleIcon`, `HoldIcon`, `HomeIcon`, `ImageIcon`, `InactiveIcon`, `InfoCircleIcon`, `LeaveIcon`, `ListIcon`, `LockIcon`, `MessageIcon`, `MicIcon`, `MicSlashIcon`, `MinusCircleIcon`, `MinusIcon`, `MissedCallIcon`, `NoteIcon`, `OfficeBuildingIcon`, `OutlookIcon`, `PaperclipIcon`, `PauseIcon`, `PencilIcon`, `PhoneIcon`, `PhoneRingingIcon`, `PhoneTransferIcon`, `PinIcon`, `PlayIcon`, `PlusCircleIcon`, `PopInIcon`, `PopOutIcon`, `RecordIcon`, `RefreshIcon`, `ReplyIcon`, `ResetIcon`, `Rewind10Icon`, `RingGroupIcon`, `ScreenshareIcon`, `SearchIcon`, `SendIcon`, `ShareIcon`, `SignatureIcon`, `SortIcon`, `StarIcon`, `StopwatchIcon`, `SurveyIcon`, `TableIcon`, `TagIcon`, `TargetIcon`, `TranslateIcon`, `TrashIcon`, `TwitterIcon`, `UndoIcon`, `UnlockIcon`, `UserGroupsLineIcon`, `UserIcon`, `UsersIcon`, `VideoIcon`, `VoicemailIcon`, `VolumeOffIcon`, `VolumeUpIcon` ([OX-3260](https://agile.8x8.com/browse/OX-3260))

### @8x8/oxygen-label

#### Changed

- Use only Novo icons (Info button) ([OX-3206](https://agile.8x8.com/browse/OX-3206))

### @8x8/oxygen-modal

#### Added

- Add `ModalPortal` optional prop `focusAfterCloseItemRef` specifies the element to receive focus ([[OX-2961](https://agile.8x8.com/browse/OX-2961)](https://agile.8x8.com/browse/[OX-2961](https://agile.8x8.com/browse/OX-2961)))

### @8x8/oxygen-toast

#### Changed

- Remove CSS animation variables being read from global theme (Was failing for some reason. not used, expecting no impact) ([OX-3260](https://agile.8x8.com/browse/OX-3260))

## [2.86.0] - 2025-03-21

### @8x8/oxygen-filter-list

#### Changed

- Search input margin changed from 12px to 8px ([OX-2934](https://agile.8x8.com/browse/OX-2934))

#### Added

- Added search icon to search input ([OX-2934](https://agile.8x8.com/browse/OX-2934))

### @8x8/oxygen-graphics

#### Fixed

- Fix deep import path @8x8/oxygen-graphics/dist/{Component} ([OX-3251](https://agile.8x8.com/browse/OX-3251))

### @8x8/oxygen-icon

#### Added

- Add new icon: `PerformanceIcon` ([OX-3225](https://agile.8x8.com/browse/OX-3225))
- Add new icon: `OmnichannelIcon` (clone as replacement from typo `OminchannelIcon`, and hide `OminchannelIcon` from storybook) ([OX-3266](https://agile.8x8.com/browse/OX-3266))

#### Fixed

- Ensure icons maintain their size and alignment, even when text wraps or exceeds available space. ([OX-3228](https://agile.8x8.com/browse/OX-3228))

### @8x8/oxygen-link

#### Fixed

- Ensure icons in standalone links maintain their size and alignment, even when text wraps or exceeds available space. ([OX-3228](https://agile.8x8.com/browse/OX-3228))

### @8x8/oxygen-toast

#### Added

- Add the `closeButtonLabel` property to `ToastTemplate` component to ensure that `close` button has an aria-label ([OX-3103](https://agile.8x8.com/browse/OX-3103))

### @8x8/oxygen-toaster

#### Added

- Add `closeButtonLabel` property to `Toaster` component to ensure that `close` button has a customisable aria-label ([OX-3103](https://agile.8x8.com/browse/OX-3103))

## [2.85.0] - 2025-03-07

### @8x8/oxygen-data-table

#### Changed


### @8x8/oxygen-icon

#### Added

- Add new icons: `RcsIcon`, `AiComposeIcon` ([OX-3116](https://agile.8x8.com/browse/OX-3116))

## [2.84.0] - 2025-03-04

### @8x8/oxygen-loaders

#### Changed

- `Spinner` now extends SVG ([OX-3058](https://agile.8x8.com/browse/OX-3058))
- `Spinner` now uses `text` prop as a label for the SVG ([OX-3058](https://agile.8x8.com/browse/OX-3058))

### @8x8/oxygen-theme

#### Added

- Add new colors: `lime05` ([OX-3078](https://agile.8x8.com/browse/OX-3078))
- Add new tokens: `brand05`, `ui26`, `ui27`, `ui28`, `ui29`, `ui30` ([OX-3078](https://agile.8x8.com/browse/OX-3078))

## [2.83.0] - 2025-02-27

### @8x8/oxygen-data-table

#### Changed

- set a testId for dataTable's inner component: MoreRowActions [[OX-3033](https://agile.8x8.com/browse/OX-3033)]
- Breaking change: renamed `Table` prop `getRowErrors` to `getRowStatus`, and `RowErrorType` to `RowStatusType` ([OX-3039](https://agile.8x8.com/browse/OX-3039))

#### Added

- Row status `INFO` ([OX-3039](https://agile.8x8.com/browse/OX-3039))
- Exported `CheckboxCell` ([OX-3071](https://agile.8x8.com/browse/OX-3071))

### @8x8/oxygen-graphics

#### Changed

- Breaking: Remove raw 8x8 Logo SVGs added in 2.82.0, instead take them from https://oxygen.8x8.com ([OX-3062](https://agile.8x8.com/browse/OX-3062))

## [2.82.0] - 2025-02-21

### @8x8/oxygen-column-management

#### Changed

- Removed width for ordered numbers to fix overlapping text when font-size is increased to 32px ([OX-3035](https://agile.8x8.com/browse/OX-3035))

### @8x8/oxygen-constants

#### Added

- Add `userStatus` color tokens across themes ([OX-2812](https://agile.8x8.com/browse/OX-2812))

### @8x8/oxygen-data-table

#### Changed

- remove useMemo when init tableColumns in columnManagement to allow initial columns definition to be modified ([OX-3031](https://agile.8x8.com/browse/OX-3031))
- some components now accept testId property [[OX-3033](https://agile.8x8.com/browse/OX-3033)]

#### Added

- Exported styled components as: Body, BodyRow and Cell ([OX-3034](https://agile.8x8.com/browse/OX-3034))

### @8x8/oxygen-graphics

#### Changed

- Breaking: (it now _requires_ `OxygenProvider`, and has different size when "neo" is enabled) `Logo8x8` uses updated colors when `enableNeo` is true through `OxygenProvider` ([OX-2873](https://agile.8x8.com/browse/OX-2873))
- Converted to Typescript ([OX-964](https://agile.8x8.com/browse/OX-964))

### @8x8/oxygen-popover

#### Fixed

- propagate `ListItemWrapperProps.testId` to inner item of `ListItemWrapper` (which is a button) [[OX-3033](https://agile.8x8.com/browse/OX-3033)]

### @8x8/oxygen-theme

#### Added

- Add `brand01` token (usage in 8x8 logo) ([OX-2873](https://agile.8x8.com/browse/OX-2873))
- Add all user status related tokens (`statusAvailable01`,`statusBusy01`,`statusAway01`,`statusOffline01`,`statusWrapup01`) ([OX-2812](https://agile.8x8.com/browse/OX-2812))

### @8x8/oxygen-user-status

#### Changed

- `UserStatus` colors are theme based (instead of being hardcoded) ([OX-2812](https://agile.8x8.com/browse/OX-2812))

## [2.80.1] - 2025-02-17

### @8x8/oxygen-theme

#### Fixed

- Fix `offwhite10` value containing a "tab" character ([OX-3025](https://agile.8x8.com/browse/OX-3025))

## [2.80.0] - 2025-02-17

### @8x8/oxygen-calendar

#### Fixed

- Remove background change on Calendar Selection edge to fix contrast issue ([OX-2840](https://agile.8x8.com/browse/OX-2840))

### @8x8/oxygen-column-management

#### Changed

- Update default translation for Add, Drag & Remove buttons and have them include the column name to improve screen reader experience ([OX-2937](https://agile.8x8.com/browse/OX-2937))

### @8x8/oxygen-config

#### Changed

- `OxygenProvider` components can be nested and they will inherit context values from their ancestor context ([OX-2692](https://agile.8x8.com/browse/OX-2692))

#### Added

- Add `enableNeo` prop to `OxygenProvider` which enables the new 8x8 rebrand theme across Oxygen components and global `theme` prop usage ([OX-2840](https://agile.8x8.com/browse/OX-2840))

### @8x8/oxygen-constants

#### Changed

- Update `IconButton` styles for Neo for hover and active backgrounds ([OX-3006](https://agile.8x8.com/browse/OX-3006))

#### Added

- Export {Component}Neo{Light|Dark} theme objects for all items which still use custom theme props to support new brand ([OX-2840](https://agile.8x8.com/browse/OX-2840))

### @8x8/oxygen-data-table

#### Changed

- `TableHeaderProps['filter']` now inherits all the props from `FilterListInterface` of @8x8/oxygen-filter-list
- added shouldGetTotalResults to the signature of the callback `onPaginationChange` returned by `useDataRetrieval`:

### @8x8/oxygen-icon

#### Added

- Add new icons: `ThumbUpIcon`, `ThumbDownIcon` ([OX-3010](https://agile.8x8.com/browse/OX-3010))

### @8x8/oxygen-sidebar-menu

#### Changed

- Update UI based on design (slight spacings adjustments & token updates for Neo) ([OX-3006](https://agile.8x8.com/browse/OX-3006))

### @8x8/oxygen-theme

#### Added

- Add new `neoLight` and `neoDark` themes for "Neo" rebrand ([OX-2840](https://agile.8x8.com/browse/OX-2840))
- Add new colors for "Neo" rebrand: `offwhite01`, `offwhite02`, `offwhite03`, `offwhite04`, `offwhite05`, `offwhite06`, `offwhite07`, `offwhite08`, `offwhite085`, `offwhite09`, `offwhite10`, `gray085` ([OX-2840](https://agile.8x8.com/browse/OX-2840))
- Add new tokens for "Neo" rebrand: `ui25`, `hover12`, `hover13`, `active12`, `statusOffline01` ([OX-2840](https://agile.8x8.com/browse/OX-2840))

## [2.79.0] - 2025-02-05

### @8x8/oxygen-sidebar-menu

#### Added

- Added a new property into the component API (`position`) ([OX-2907](https://agile.8x8.com/browse/OX-2907))

## [2.78.0] - 2025-01-22

### @8x8/oxygen-badge

#### Fixed

- Expose missing properties `badgePosition`, `badgeSize`, `badgeType` ([OX-2940](https://agile.8x8.com/browse/OX-2940))

### @8x8/oxygen-data-table

#### Added

- Add DataTable component ([OX-2708](https://agile.8x8.com/browse/OX-2708))

### @8x8/oxygen-icon

#### Added

- Add new icon: `ViberIcon` ([OX-2880](https://agile.8x8.com/browse/OX-2880))

### @8x8/oxygen-input

#### Changed

- When Input `isDisabled` we have removed the `disabled` input attribute ([OX-275](https://agile.8x8.com/browse/OX-275))
- When Input `isDisabled` we have kept `aria-disabled`, added the `readonly` and `aria-readonly` attributes ([OX-275](https://agile.8x8.com/browse/OX-275))

#### Removed

- Input `readonly` + `disabled` UI styling in storybook removed ([OX-725](https://agile.8x8.com/browse/OX-725))

### @8x8/oxygen-textarea

#### Changed

- When Textarea `isDisabled` we have removed the `disabled` textarea attribute ([OX-275](https://agile.8x8.com/browse/OX-275))
- When Textarea `isDisabled` we have kept `aria-disabled`, added the `readonly` and `aria-readonly` attributes ([OX-275](https://agile.8x8.com/browse/OX-275))

#### Removed

- Textexara `readonly` + `disabled` UI styling in storybook ([OX-725](https://agile.8x8.com/browse/OX-725))

## [2.77.0] - 2024-12-19

### @8x8/oxygen-badge

#### Changed

- Convert the `Badge` component to TypeScript ([OX-947](https://agile.8x8.com/browse/OX-947))
- Exported `BadgeProps` interface ([OX-947](https://agile.8x8.com/browse/OX-947))

### @8x8/oxygen-button

#### Changed

- Removed styled-components `shouldForwardProp` for v6 compatibility ([OX-2392](https://agile.8x8.com/browse/OX-2392))

### @8x8/oxygen-checkbox

#### Fixed

- Align `Checkbox` icon to the top of a multiline text ([OX-2751](https://agile.8x8.com/browse/OX-2751))

### @8x8/oxygen-link

#### Added

- Initial release of the Link component ([OX-2552](https://agile.8x8.com/browse/OX-2552))

### @8x8/oxygen-sidebar-menu

#### Changed

- Removed styled-components `shouldForwardProp` for v6 compatibility ([OX-2392](https://agile.8x8.com/browse/OX-2392))

### @8x8/oxygen-switch-base

#### Fixed

- Align `SwitchBase` icon to the top of a multiline text ([OX-2751](https://agile.8x8.com/browse/OX-2751))

### @8x8/oxygen-tag

#### Changed

- Update to Typescript, update CloseButton HTML element from button to div to correctly support Select use-cases (types) ([OX-966](https://agile.8x8.com/browse/OX-966))
- Removed styled-components `shouldForwardProp` for v6 compatibility ([OX-2392](https://agile.8x8.com/browse/OX-2392))

### @8x8/oxygen-text-link

#### Changed

- Mark component as deprecated. Use the new `Link` component instead ([OX-2552](https://agile.8x8.com/browse/OX-2552))

#### Removed

- Removed styled-components `shouldForwardProp` for v6 compatibility ([OX-2392](https://agile.8x8.com/browse/OX-2392))

### @8x8/oxygen-theme

#### Added

- Add new colors: `indigo01` through `indigo10` ([OX-2793](https://agile.8x8.com/browse/OX-2793))
- Add new tokens: `textColor10`, `ui23`, `ui24` for AI usage ([OX-2793](https://agile.8x8.com/browse/OX-2793))

### @8x8/oxygen-toggle-button

#### Fixed

- Align `ToggleButton` icon to the top of a multiline text ([OX-2751](https://agile.8x8.com/browse/OX-2751))

### @8x8/oxygen-user-status

#### Changed

- Removed styled-components `shouldForwardProp` for v6 compatibility ([OX-2392](https://agile.8x8.com/browse/OX-2392))

## [2.76.0] - 2024-12-10

### @8x8/oxygen-checkbox

#### Changed

- Updated `Checkbox` icon tokens to solve contrast issues for rest, disabled, checked states ([OX-2761](https://agile.8x8.com/browse/OX-2761))

### @8x8/oxygen-column-management

#### Added

- Add new optional prop - tooltipText and render tooltip if that props exists([OX-2533](https://agile.8x8.com/browse/OX-2533))

### @8x8/oxygen-radio

#### Changed

- Updated `Radio` icon tokens to solve contrast issues for rest, disabled, checked states ([OX-2761](https://agile.8x8.com/browse/OX-2761))

## [2.75.1] - 2024-12-05

### @8x8/oxygen-filter-list

#### Fixed

- Fix FilterList OPERATOR_TYPES export ([OX-2808](https://agile.8x8.com/browse/OX-2808))

## [2.75.0] - 2024-12-04

### @8x8/oxygen-button

#### Fixed

- `IconButton` correctly support `isInverted` with the updated focus ring color ([OX-2738](https://agile.8x8.com/browse/OX-2738))

### @8x8/oxygen-constants

#### Changed

- Update Toast warning color (`markingColorWarning`) to `warning02` ([OX-2753](https://agile.8x8.com/browse/OX-2753))

#### Added

- Added `iconButton.borderFocusInverted` theme prop to properly support updated focus ring colors ([OX-2738](https://agile.8x8.com/browse/OX-2738))
- Mark `toast.structureMargin` as deprecated ([OX-2738](https://agile.8x8.com/browse/OX-2738))

### @8x8/oxygen-filter-list

#### Added

- Export `FilterListInterface` ([OX-2281](https://agile.8x8.com/browse/OX-2281))

#### Fixed

- Ensure no duplicate Filters are stored in the FilterList internal state and no duplicates are allowed in search results ([OX-2281](https://agile.8x8.com/browse/OX-2281))

### @8x8/oxygen-icon

#### Added

- Add new icons: `StopScreenshareIcon`, `TopicIcon` ([OX-2801](https://agile.8x8.com/browse/OX-2801))

### @8x8/oxygen-keyword-search

#### Fixed

- fixed memoization bug for onClear() callback ([OX-2740](https://agile.8x8.com/browse/OX-2740))

### @8x8/oxygen-popover

### @8x8/oxygen-text-link

#### Changed

- Add `padding: 0` to allow nicer rendering when using as="button" in certain scenarios (as the native <button> comes with default padding) ([OX-2738](https://agile.8x8.com/browse/OX-2738))

### @8x8/oxygen-theme

#### Added

- Add new token: `warning02` with values: light `yellow03` and dark `yellow06` ([OX-2753](https://agile.8x8.com/browse/OX-2753))

### @8x8/oxygen-toast

#### Changed

- Update warning icon color to improve accessibility ([OX-2753](https://agile.8x8.com/browse/OX-2753))

#### Fixed

- Ensure that Action & CloseButton focus rings are rendered correctly ([OX-2738](https://agile.8x8.com/browse/OX-2738))

## [2.74.0] - 2024-11-12

### @8x8/oxygen-accordion

#### Changed

- Ensure Accordion focus ring uses `focus01` ([OX-2741](https://agile.8x8.com/browse/OX-2741))

### @8x8/oxygen-button

#### Changed

- Update focus ring, background & text colors to improve contrast on dark theme ([OX-2714](https://agile.8x8.com/browse/OX-2714))

### @8x8/oxygen-checkbox

#### Changed

- Update storybook guidelines ([OX-786](https://agile.8x8.com/browse/OX-786))
- Update storybook playground ([OX-786](https://agile.8x8.com/browse/OX-786))
- Update README to include usage with fieldset and legend ([OX-786](https://agile.8x8.com/browse/OX-786))

#### Removed

- Remove checkbox focus state to switch base label wrapper ([OX-786](https://agile.8x8.com/browse/OX-786))

### @8x8/oxygen-constants

#### Changed

- Update `checkbox.const` with `focusColor` token ([OX-786](https://agile.8x8.com/browse/OX-786))
- Update `checkbox.const` `checkboxFocusBorderRadius` token to `4px` ([OX-786](https://agile.8x8.com/browse/OX-786))
- Update `toggleButton.const` with `focusColor` token ([OX-786](https://agile.8x8.com/browse/OX-786))
- Update `Button`, `Slider`, `Tabs` focus ring color to improve contrast on dark theme ([OX-2714](https://agile.8x8.com/browse/OX-2714))

### @8x8/oxygen-filter-list

#### Fixed

- Use custom maxHeight (& ensure proper max-width) for dateRange filter in Popover props to allow full date time selection rendering without scroll ([OX-2703](https://agile.8x8.com/browse/OX-2703))

### @8x8/oxygen-popover

#### Changed

- isActive & isDisabled design is updated in accordance to figma

#### Added

- Add optional `maxHeight?: number` prop to allow max-height customizations for certain use-cases ([OX-2703](https://agile.8x8.com/browse/OX-2703))

### @8x8/oxygen-radio

#### Changed

- Update focus state to outline the radio + label component ([OX-2630](https://agile.8x8.com/browse/OX-2630))

### @8x8/oxygen-slider

#### Changed

- Update props to include default values (respect previous implementation from pre 2.71) for `minValue`, `maxValue`, `step`, `isDisabled` and ensure types are correct and only `value` is required ([OX-2689](https://agile.8x8.com/browse/OX-2689))
- Update focus ring color to improve contrast on dark theme ([OX-2714](https://agile.8x8.com/browse/OX-2714))

### @8x8/oxygen-switch-base

#### Added

- Add `isFocused` state on label element ([OX-786](https://agile.8x8.com/browse/OX-786))
- Add `isToggleButton` prop ([OX-786](https://agile.8x8.com/browse/OX-786))

### @8x8/oxygen-tabs

#### Changed

- _Breaking_ `Tab` components allows `onClick` when `isActive` ([OX-2595](https://agile.8x8.com/browse/OX-2595))
- Update focus ring color to improve contrast on dark theme ([OX-2714](https://agile.8x8.com/browse/OX-2714))

### @8x8/oxygen-tag

#### Fixed

- Tag close button has type="button" by default ([OX-2645](https://agile.8x8.com/browse/OX-2645))

### @8x8/oxygen-theme

#### Changed

- Update `focus01` token value ([OX-2714](https://agile.8x8.com/browse/OX-2714))
- Update data vis text tokens (for better contrast): `dataText04`, `dataText05`, `dataText06`, `dataText08`, `dataText11` ([OX-2684](https://agile.8x8.com/browse/OX-2684))

#### Added

- Add color token `black: #000000` ([OX-2684](https://agile.8x8.com/browse/OX-2684))
- Add color token `yellow11: #FEEFD1` ([OX-2714](https://agile.8x8.com/browse/OX-2714))
- Add new tokens: `ui17`, `ui18`, `ui19`, `ui20`, `ui21`, `ui22`, `action09`, `textColor09`, `active11`, `hover11` ([OX-2714](https://agile.8x8.com/browse/OX-2714))

### @8x8/oxygen-toggle-button

#### Changed

- Update storybook guidelines ([OX-786](https://agile.8x8.com/browse/OX-786))
- Update storybook playground ([OX-786](https://agile.8x8.com/browse/OX-786))
- Update README to include usage with fieldset and legend ([OX-786](https://agile.8x8.com/browse/OX-786))

#### Removed

- Remove toggle button focus state to switch base label wrapper ([OX-786](https://agile.8x8.com/browse/OX-786))

## [2.73.0] - 2024-10-16

### @8x8/oxygen-avatar

#### Changed

- Update StyledAvatar status border colors to use tokens ([OX-2588](https://agile.8x8.com/browse/OX-2588))
- Update Away and WorkOffline statuses border color to `orange06` to meet contrast requirements ([OX-2588](https://agile.8x8.com/browse/OX-2588))

#### Added

- Added oxygen-theme dependency to package in order to use tokens in status border color ([OX-2588](https://agile.8x8.com/browse/OX-2588))

#### Fixed

- Remove duplicate `position` CSS property in interactive StyledAvatar ([OX-2588](https://agile.8x8.com/browse/OX-2588))

### @8x8/oxygen-theme

#### Changed

- Update `novoDark` token for `action01` from `blue06` to `blue07` ([OX-2631](https://agile.8x8.com/browse/OX-2631))
- Update `novoDark` token for `focus01` from `blue06` to `blue07` ([OX-2631](https://agile.8x8.com/browse/OX-2631))

#### Added

- Add new `novo` theme tokens: `hover10`, `active10`, `action08`, `textColor08` ([OX-2631](https://agile.8x8.com/browse/OX-2631))
- Add new `novoDark` theme tokens: `hover10`, `active10`, `action08`, `textColor08` ([OX-2631](https://agile.8x8.com/browse/OX-2631))

### @8x8/oxygen-user-status

#### Changed

- Update status svg colors to use tokens ([OX-2588](https://agile.8x8.com/browse/OX-2588))
- Update Away and WorkingOffice svg colors to `orange06` to meet contrast requirements ([OX-2588](https://agile.8x8.com/browse/OX-2588))

#### Added

- Added oxygen-theme dependency to package in order to use tokens in svg color ([OX-2588](https://agile.8x8.com/browse/OX-2588))

## [2.72.0] - 2024-10-01

### @8x8/oxygen-constants

#### Changed

- _Deprecate_ inputSize constant. Use exported type `import { InputSize } from @8x8/oxygen-input` instead ([OX-1076](https://agile.8x8.com/browse/OX-1076))

### @8x8/oxygen-date-time-range-selector

#### Fixed

- Ensure `onRangeChange` from the inner picker does not update the external `onRangeChange` callback ([OX-2606](https://agile.8x8.com/browse/OX-2606))

### @8x8/oxygen-input

#### Changed

- migrated to ts ([OX-1076](https://agile.8x8.com/browse/OX-1076))
- _Deprecate_ `inputType` constant, use built-in React.HTMLInputTypeAttribute ([OX-1076](https://agile.8x8.com/browse/OX-1076))
- removed `styled-tools` dependency ([OX-1076](https://agile.8x8.com/browse/OX-1076))

### @8x8/oxygen-label

#### Fixed

- Fix incorrectly showing `not-allowed` cursor in `Label` (and components using it such as `Select`, `TextField` etc) ([OX-2603](https://agile.8x8.com/browse/OX-2603))

### @8x8/oxygen-select

#### Fixed

- Fix incorrectly showing `not-allowed` cursor in `Label` (and components using it such as `Select`, `TextField` etc) ([OX-2603](https://agile.8x8.com/browse/OX-2603))

### @8x8/oxygen-sidebar-menu

#### Added

- Added `expandLabel` parameter into sidebarMenu component (this prop must be provided together with `collapseLabel` prop so the collapse button will be rendered) ([OX-2535](https://agile.8x8.com/browse/OX-2535))

### @8x8/oxygen-slider

#### Changed

- set `24px` as default value for `expandTrackAreaBy` in case no value is provided for it ([OX-2557](https://agile.8x8.com/browse/OX-2557))

### @8x8/oxygen-text-field

#### Fixed

- Fix incorrectly showing `not-allowed` cursor in `Label` (and components using it such as `Select`, `TextField` etc) ([OX-2603](https://agile.8x8.com/browse/OX-2603))

## [2.71.0] - 2024-09-17

### @8x8/oxygen-breadcrumbs

#### Changed

- Update `theme` property to be optional ([OX-2487](https://agile.8x8.com/browse/OX-2487))

### @8x8/oxygen-button

#### Added

- Add isDestructive prop to regular button component ([OX-2361](https://agile.8x8.com/browse/OX-2361))
- Deprecate `variant="destructive"`. Please use new property `isDestructive` instead.

### @8x8/oxygen-calendar

#### Changed

- Update `theme` property to be optional ([OX-2487](https://agile.8x8.com/browse/OX-2487))

#### Fixed

- Fix broken view when using `dateOptions` (with `weekStartsOn` for example) ([OX-2513](https://agile.8x8.com/browse/OX-2513))

### @8x8/oxygen-checkbox

#### Changed

- Update `theme` property to be optional ([OX-2487](https://agile.8x8.com/browse/OX-2487))

### @8x8/oxygen-column-management

#### Added

- Add telemetryCallback for remove column when drag & drop ([OX-2533](https://agile.8x8.com/browse/OX-2533))

### @8x8/oxygen-date-time-base

#### Changed

- Update `theme` property to be optional ([OX-2487](https://agile.8x8.com/browse/OX-2487))

### @8x8/oxygen-date-time-range-selector

#### Changed

- Update `theme` property to be optional ([OX-2487](https://agile.8x8.com/browse/OX-2487))

#### Added

- Allow `Calendar` prop `showMonthYearPickers` to be overwritten ([OX-2513](https://agile.8x8.com/browse/OX-2513))

### @8x8/oxygen-milestone-tracker

#### Changed

- Update `theme` property to be optional ([OX-2487](https://agile.8x8.com/browse/OX-2487))

### @8x8/oxygen-modal

#### Changed

- Update `theme` property to be optional ([OX-2487](https://agile.8x8.com/browse/OX-2487))

### @8x8/oxygen-popover

#### Changed

- Update design (spacings, colors) ([OX-2496](https://agile.8x8.com/browse/OX-2496))
- Enhance `Popover` and `PopoverMenu` floating ui positioning via `shift()` ([OX-2496](https://agile.8x8.com/browse/OX-2496))
- Adding `pointer` cursor on `ListItem` component ([OX-1181](https://agile.8x8.com/browse/OX-1181))

#### Added

- Expose new custom components for complex composed lists: `Divider`, `SectionHeader`, `EmptyStateContainer`, `EmptyState` ([OX-2496](https://agile.8x8.com/browse/OX-2496))
- Add support for rendering complex lists (to be able to include `Divider` and `SectionHeader` components in lists) ([OX-2496](https://agile.8x8.com/browse/OX-2496))

### @8x8/oxygen-slide-out

#### Changed

- Update `theme` property to be optional ([OX-2487](https://agile.8x8.com/browse/OX-2487))

### @8x8/oxygen-slider

#### Changed

- Update `theme` property to be optional ([OX-2487](https://agile.8x8.com/browse/OX-2487))
- update the implementation language to TypeScript for `Slider` component ([OX-576](https://agile.8x8.com/browse/OX-576))
- integrating `<input>` element into `Slider` component ([OX-576](https://agile.8x8.com/browse/OX-576))
- changing parameter `name` into `ariaLabel` in `Slider` component ([OX-576](https://agile.8x8.com/browse/OX-576))
- marked `exandKnobAreaBy` as deprecated in `Slider` component ([OX-576](https://agile.8x8.com/browse/OX-576))

### @8x8/oxygen-table

#### Changed

- Update `theme` property to be optional ([OX-2487](https://agile.8x8.com/browse/OX-2487))

### @8x8/oxygen-tabs

#### Added

- Add initial Storybook example for `Accessibility`, with usage with icons and `aria-*` attributes ([OX-796](https://agile.8x8.com/browse/OX-796))

### @8x8/oxygen-text-field

#### Changed

- Update `theme` property to be optional ([OX-2487](https://agile.8x8.com/browse/OX-2487))

### @8x8/oxygen-toggle-button

#### Changed

- Update `theme` property to be optional ([OX-2487](https://agile.8x8.com/browse/OX-2487))

### @8x8/oxygen-user-status

#### Changed

- Update `theme` property to be optional ([OX-2487](https://agile.8x8.com/browse/OX-2487))

## [2.70.1] - 2024-09-02

### @8x8/oxygen-icon

#### Fixed

- Missing raw SVG are back ([OX-2516](https://agile.8x8.com/browse/OX-2516))

### @8x8/oxygen-select

#### Changed

- Remove improper usage of role="listbox" and aria-multiselectable from ValueWrapper ([OX-2485](https://agile.8x8.com/browse/OX-2485))

## [2.70.0] - 2024-08-22

### @8x8/oxygen-button

#### Changed

- Moved and updated `IconButton` package from oxygen-icon-button to oxygen-button ([OX-1132](https://agile.8x8.com/browse/OX-1132))

### @8x8/oxygen-column-management

#### Changed

- Updated `IconButton` import from oxygen-icon-button to oxygen-button (backwards compatible) ([OX-1132](https://agile.8x8.com/browse/OX-1132))

### @8x8/oxygen-icon-button

#### Changed

- Package deprecated, IconButton component moved under the button package. import { IconButton } from '@8x8/oxygen-button';

### @8x8/oxygen-keyword-search

#### Changed

- Updated `IconButton` import from oxygen-icon-button to oxygen-button (backwards compatible) ([OX-1132](https://agile.8x8.com/browse/OX-1132))

### @8x8/oxygen-label

#### Changed

- Updated `IconButton` import from oxygen-icon-button to oxygen-button (backwards compatible) ([OX-1132](https://agile.8x8.com/browse/OX-1132))

### @8x8/oxygen-modal

#### Changed

- Use modalProps aria-labelledby ID value if provided, instead of the randomly generated useId() value ([OX-2425](https://agile.8x8.com/browse/OX-2425))
- Update Storybook to use __TYPE props and ModalHeader titleProps object (for manual ID) ([OX-2425](https://agile.8x8.com/browse/OX-2425))
- Updated `IconButton` import from oxygen-icon-button to oxygen-button (backwards compatible) ([OX-1132](https://agile.8x8.com/browse/OX-1132))

#### Added

- Add ModalHeader & ModalFooter constant __TYPE values as props, as component type.name being lost during code minification ([OX-2425](https://agile.8x8.com/browse/OX-2425))

### @8x8/oxygen-popover

#### Changed

- Updated `IconButton` import from oxygen-icon-button to oxygen-button (backwards compatible) ([OX-1132](https://agile.8x8.com/browse/OX-1132))

### @8x8/oxygen-select

#### Changed

- use inputProps in default Input and custom (selectable text) Input ([OX-2285](https://agile.8x8.com/browse/OX-2285))
- pass `otherActionProps` to Label component ([OX-2476](https://agile.8x8.com/browse/OX-2476))

#### Added

- add inputProps for input attributes like autoComplete ([OX-2285](https://agile.8x8.com/browse/OX-2285))

### @8x8/oxygen-toast

#### Changed

- Updated `IconButton` import from oxygen-icon-button to oxygen-button (backwards compatible) ([OX-1132](https://agile.8x8.com/browse/OX-1132))

## [2.69.0] - 2024-07-30

### @8x8/oxygen-avatar

#### Fixed

- Properly reset `Avatar` src loading state when src changes ([OX-2458](https://agile.8x8.com/browse/OX-2458))

### @8x8/oxygen-calendar

#### Changed

- changed fwd, back button type to be `type="button"` by default ([OX-2467](https://agile.8x8.com/browse/OX-2467))
- migrated to ts ([OX-1093](https://agile.8x8.com/browse/OX-1093))
- mark `DISPLAY_MODE` as deprecated, use exported type `DisplayMode` instead ([OX-1093](https://agile.8x8.com/browse/OX-1093))

#### Fixed

- Disabled days are now non-clickable (non-selectable) ([OX-2437](https://agile.8x8.com/browse/OX-2437))
- Calendar is not crashing when the user navigates with keyboard to a month that is disabled by min or max date props ([OX-2442](https://agile.8x8.com/browse/OX-2442))

### @8x8/oxygen-filter-list

#### Fixed

- Fix FilterTagText not rendering space between words ([OX-2455](https://agile.8x8.com/browse/OX-2455))

### @8x8/oxygen-icon

#### Changed

- IconProps now extends `React.HTMLAttributes<SVGElement>`

## [2.68.0] - 2024-07-19

### @8x8/oxygen-checkbox

#### Changed

- migrated to ts ([OX-1072](https://agile.8x8.com/browse/OX-1072))
- Updated the type of `Props.value` to generic type `<T extends string | readonly string[] | number | undefined>`

### @8x8/oxygen-filter-list

#### Fixed

- Fixed FilterTagText to show ellipsis for not dateRange filter ([OX-2413](https://agile.8x8.com/browse/OX-2413))

### @8x8/oxygen-icon

#### Added

- Add new icons: `FacebookIcon`, `XbrandIcon` ([OX-2412](https://agile.8x8.com/browse/OX-2412))
- Add new icons: `AcrobatIcon`, `BellTickIcon`, `CardIcon`, `CellphoneIcon`, `EnvelopeExclamationIcon`, `EnvelopeTickIcon`, `EyeHideIcon`, `GoogleIcon`, `GroupMessageIcon`, `InactiveIcon`, `NewMessageIcon`, `OutlookIcon`, `RecordIcon`, `SurveyIcon` ([OX-2373](https://agile.8x8.com/browse/OX-2373))

### @8x8/oxygen-loaders

#### Changed

- Change `size` data type to `string`; set default size `240px` and mark `progressBarSize` as deprecated ([OX-1734](https://agile.8x8.com/browse/OX-1734))

### @8x8/oxygen-popover

#### Changed

- Update `@floating-ui/react` to `0.26.19` ([OX-2402](https://agile.8x8.com/browse/OX-2402))

### @8x8/oxygen-sidebar-menu

#### Changed

- Update `@floating-ui/react` to `0.26.19` ([OX-2402](https://agile.8x8.com/browse/OX-2402))

### @8x8/oxygen-static-tooltip

#### Changed

- Update min-height dimensions to match 1 line of text (scalable-font) ([OX-2402](https://agile.8x8.com/browse/OX-2402))

### @8x8/oxygen-switch-base

#### Changed

- migrated to ts ([OX-1072](https://agile.8x8.com/browse/OX-1072))
- updated the type of `Props.value` to generic type `<T extends string | readonly string[] | number | undefined>`

### @8x8/oxygen-time-selector

#### Changed

- Update `@floating-ui/react` to `0.26.19` ([OX-2402](https://agile.8x8.com/browse/OX-2402))

### @8x8/oxygen-toggle-button

#### Changed

- migrated to ts ([OX-1072](https://agile.8x8.com/browse/OX-1072))
- updated the type of `Props.value` to generic type `<T extends string | readonly string[] | number | undefined>`

### @8x8/oxygen-tooltip

#### Changed

- Add default value to `renderContainerId` prop: 'oxygen-tooltip-root' ([OX-2402](https://agile.8x8.com/browse/OX-2402))
- Update `@floating-ui/react` to `0.26.19` ([OX-2402](https://agile.8x8.com/browse/OX-2402))
- Update min-height dimensions to match 1 line of text (from `@8x8/oxygen-static-tooltip`) ([OX-2402](https://agile.8x8.com/browse/OX-2402))
- remove propTypes and defaultProps (use default function args values instead) ([OX-2402](https://agile.8x8.com/browse/OX-2402))

## [2.67.0] - 2024-06-27

### @8x8/oxygen-avatar

#### Changed

- Fallback to initials/icon when provided image fails to load ([OX-2241](https://agile.8x8.com/browse/OX-2241))

#### Added

- optional imageProps prop which is destructured over the image component if `src` is provided ([OX-2241](https://agile.8x8.com/browse/OX-2241))

#### Fixed

- StatusBorder and userStatus are displayed correctly, above the avatar image if it exists ([OX-2297](https://agile.8x8.com/browse/OX-2297))

### @8x8/oxygen-constants

#### Changed

- changed `modalOffsetMinimal` of modal component to `novo.spacing07` ([OX-2253](https://agile.8x8.com/browse/OX-2253))

### @8x8/oxygen-date-time-range-selector

#### Changed

- Created/Added `TimeSelectorPortalNode` component to `DateTimeRangePicker` to avoid overlapping ([OX-2220](https://agile.8x8.com/browse/OX-2220))

### @8x8/oxygen-filter-list

#### Changed

- DateTimeRange filter Tag is now allowed to expand as needed, removed the enforced max-width ([OX-2295](https://agile.8x8.com/browse/OX-2295))

#### Fixed

- Filter title now display the operator if it exists ([OX-2295](https://agile.8x8.com/browse/OX-2295))

### @8x8/oxygen-icon

#### Added

- Add new icons: `UserLeftIcon`, `UserDeletedIcon` ([OX-2268](https://agile.8x8.com/browse/OX-2268))
- Add new icons: `HighlightIcon`, `DisableIcon` ([OX-2327](https://agile.8x8.com/browse/OX-2327))

### @8x8/oxygen-label

#### Changed

- migrated to ts ([OX-1073](https://agile.8x8.com/browse/OX-1073))
- _Deprecate_ actionTargets constants

### @8x8/oxygen-time-selector

#### Changed

- Removed `react-popper` dependency ([OX-2220](https://agile.8x8.com/browse/OX-2220))
- Re-worked component to use `floating-ui` library and keep it's previous functionality ([OX-2220](https://agile.8x8.com/browse/OX-2220))
- Added `portalRef` prop to allow proper positioning of dropdown ([OX-2220](https://agile.8x8.com/browse/OX-2220))
- Improved keyboard navigation ([OX-2220](https://agile.8x8.com/browse/OX-2220))

### @8x8/oxygen-toast

#### Added

- Added a new component (`InlineNotification`) which has the same bevavior as `Toast`, but with the theme inverted ([OX-2114](https://agile.8x8.com/browse/OX-2114))

### @8x8/oxygen-user-status

#### Changed

- migrated to ts ([OX-1077](https://agile.8x8.com/browse/OX-1077))
- _Deprecate_ userStatusSize and userStatusType constants

## [2.66.0] - 2024-05-14

### @8x8/oxygen-calendar

#### Added

- Added `aria-labelledby` attribute to month navigation arrows ([OX-2221](https://agile.8x8.com/browse/OX-2221))
- Wrapped month name into a `role="cell"` to meet WCAG requirements ([OX-2221](https://agile.8x8.com/browse/OX-2221))

### @8x8/oxygen-column-management

#### Changed

- Add a darker background on the ghost element in order to better show how the list will stay after drop ([OX-2146](https://agile.8x8.com/browse/OX-2146))

#### Added

- Allow removing a column with drag & drop from active columns ([OX-2147](https://agile.8x8.com/browse/OX-2147))

#### Fixed

- Fix not allow dragging inside Available Columns ([OX-2143](https://agile.8x8.com/browse/OX-2143))

### @8x8/oxygen-date-time-range-selector

#### Added

- Bound labels to date inputs (`htmlFor`) to meet WCAG requirements ([OX-2221](https://agile.8x8.com/browse/OX-2221))

### @8x8/oxygen-filter-list

#### Added

- Added new telemetry events - filter_apply, filter_clear_all, filter_reset and filter_reset_all ([OX-2106](https://agile.8x8.com/browse/OX-2106))

#### Fixed

- Fix bug: popoverPortalRef is used if it is provided instead of overriding it ([OX-2244](https://agile.8x8.com/browse/OX-2244))
- Updated type of ref to HTMLElement to allow refs to document.body to be sent to the component ([OX-2244](https://agile.8x8.com/browse/OX-2244))

### @8x8/oxygen-icon

#### Added

- Add new icon: `VoiceRecordSettingsIcon` ([OX-2223](https://agile.8x8.com/browse/OX-2223))
- Add new icons: `ChannelsIcon`, `ClockIcon`, `ForwardClockIcon`, `RewindClockIcon` ([OX-2223](https://agile.8x8.com/browse/OX-2223))

## [2.65.0] - 2024-04-26

### @8x8/oxygen-accordion

#### Changed

- Removed click handler on expanded items for not closing state, made shouldCloseOnActiveClick deprecated on Accordion and AccordionItem components ([OX-2131](https://agile.8x8.com/browse/OX-2131))
- **breaking change** Renamed Accordion to AccordionGroup and AccordionItem to Accordion ([OX-2189](https://agile.8x8.com/browse/OX-2189))
- **breaking change** Changed the export format Accordion exported as default, AccordionGroup exported as named component ([OX-2189](https://agile.8x8.com/browse/OX-2189))

### @8x8/oxygen-filter-list

#### Added

- Add new optional allowFreeformSuggestions on FilterDefinition - if true, multi-selection filters will create option if none was found in the suggestions ([OX-2158](https://agile.8x8.com/browse/OX-2158))
- Add display of selected filters above the list of option ([OX-2174](https://agile.8x8.com/browse/OX-2174))

## [2.64.0] - 2024-04-11

### @8x8/oxygen-checkbox

#### Changed

- Update checkbox image role from `none` to `presentation` (non-functional update) ([OX-2041](https://agile.8x8.com/browse/OX-2041))

### @8x8/oxygen-column-management

#### Fixed

- Fix inconsistent width behaviour in sortable overlay when dragging begins in a scrollable container and ends in a non-scrollable container. ([OX-2052](https://agile.8x8.com/browse/OX-2052))
- Fix dragging issue when using zoom in and keyboard to sort items. ([OX-2019](https://agile.8x8.com/browse/OX-2019))

### @8x8/oxygen-date-time-range-selector

#### Changed

- Items in `PredefinedList` components are now buttons instead of divs to allow better keyboard navigation. Styling updated accordingly. ([OX-2035](https://agile.8x8.com/browse/OX-2035))

### @8x8/oxygen-dropdown-button

#### Changed

- Dropdown now also closes on `Escape` key ([OX-2035](https://agile.8x8.com/browse/OX-2035))
- Behaviour on `Enter` key is now also conditioned by `shouldCloseOnInsideClick` prop ([OX-2035](https://agile.8x8.com/browse/OX-2035))

### @8x8/oxygen-filter-list

#### Fixed

- Fix bug: `FilterList` dropdown is now visible inside modals ([OX-2098](https://agile.8x8.com/browse/OX-2098))
- Fix Reset All when hasGlobalApplyButton ([OX-2053](https://agile.8x8.com/browse/OX-2053))

### @8x8/oxygen-modal

#### Changed

- Update the role of ModalHeader from `none` to `presentation` ([OX-2041](https://agile.8x8.com/browse/OX-2041))

### @8x8/oxygen-time-selector

#### Fixed

- Added extra configurations to `scrollIntoView()` call to avoid unwanted scrolling of parent/ancestor components when selecting an option from the dropdown ([OX-1962](https://agile.8x8.com/browse/OX-1962))

## [2.63.0] - 2024-04-03

### @8x8/oxygen-popover

#### Added

- Add optional onMenuItemClick used to triggered side effects for click/keyboard events ([OX-2049](https://agile.8x8.com/browse/OX-2049))
- Allow onClick handler to be used from trigger element ([OX-2049](https://agile.8x8.com/browse/OX-2049))

### @8x8/oxygen-sidebar-menu

#### Changed

- **Breaking** `Sidebar` uses `SidebarProvider` internally. No longer need to provide it as a wrapper ([OX-1931](https://agile.8x8.com/browse/OX-1931))

#### Added

- Add support to render Sidebar interactive items via custom components (example usage for react-router `Link`) via new props: `linkComponent`, `linkProp` on `Sidebar` and `link` attribute on the menu items ([OX-1931](https://agile.8x8.com/browse/OX-1931))

### @8x8/oxygen-toaster

#### Changed

- Reverted wrong export from index.d.ts CLOSE_ALL to REMOVE_ALL ([OX-2068](https://agile.8x8.com/browse/OX-2068))

### @8x8/oxygen-tooltip

#### Fixed

- Make floating UI disapear when hovering over it - when `delay` is set & `disableInteractive` is enabled ([OX-2074](https://agile.8x8.com/browse/OX-2074))

## [2.62.0] - 2024-03-14

### @8x8/oxygen-button

#### Changed

- make the cursor property to be `not-allowed` when disabled ([OX-956](https://agile.8x8.com/browse/OX-956))

### @8x8/oxygen-checkbox

#### Changed

- make the cursor property to be `not-allowed` when disabled ([OX-956](https://agile.8x8.com/browse/OX-956))

### @8x8/oxygen-context-menu

#### Changed

- make the cursor property to be `not-allowed` when disabled ([OX-956](https://agile.8x8.com/browse/OX-956))

### @8x8/oxygen-dropdown-button

#### Changed

- make the cursor property to be `not-allowed` when disabled ([OX-956](https://agile.8x8.com/browse/OX-956))

### @8x8/oxygen-filter-list

#### Fixed

- Filtering new filters does not remove the button if no suggestions were found ([OX-2017](https://agile.8x8.com/browse/OX-2017))

### @8x8/oxygen-icon-button

#### Changed

- make the cursor property to be `not-allowed` when disabled ([OX-956](https://agile.8x8.com/browse/OX-956))

### @8x8/oxygen-input

#### Changed

- make the cursor property to be `not-allowed` when disabled ([OX-956](https://agile.8x8.com/browse/OX-956))

#### Added

- Add test id on input field to allow for testing ([OX-2017](https://agile.8x8.com/browse/OX-2017))

### @8x8/oxygen-label

#### Changed

- make the cursor property to be `not-allowed` when disabled ([OX-956](https://agile.8x8.com/browse/OX-956))

### @8x8/oxygen-list

#### Changed

- make the cursor property to be `not-allowed` when disabled ([OX-956](https://agile.8x8.com/browse/OX-956))

### @8x8/oxygen-select

#### Changed

- added OwnProps to exported types (it is required by tsc if the host project is with 'declaration': true) ([OX-2018](https://agile.8x8.com/browse/OX-2018))
- based on isAsync parameter, use either the AsyncSelect or ordinary Select's type for properties ([OX-2018](https://agile.8x8.com/browse/OX-2018))
- make the cursor property to be `not-allowed` when disabled ([OX-956](https://agile.8x8.com/browse/OX-956))

### @8x8/oxygen-slider

#### Changed

- make the cursor property to be `not-allowed` when disabled ([OX-956](https://agile.8x8.com/browse/OX-956))

### @8x8/oxygen-tabs

#### Changed

- make the cursor property to be `not-allowed` when disabled ([OX-956](https://agile.8x8.com/browse/OX-956))

### @8x8/oxygen-text-field

#### Changed

- make the cursor property to be `not-allowed` when disabled ([OX-956](https://agile.8x8.com/browse/OX-956))

### @8x8/oxygen-text-link

#### Changed

- make the cursor property to be `not-allowed` when disabled ([OX-956](https://agile.8x8.com/browse/OX-956))

### @8x8/oxygen-textarea

#### Changed

- make the cursor property to be `not-allowed` when disabled ([OX-956](https://agile.8x8.com/browse/OX-956))

### @8x8/oxygen-theme

#### Added

- Add `highlight01` token (for search highlight) ([OX-2020](https://agile.8x8.com/browse/OX-2020))
- Improve TS docs by adding role description to most tokens & marking deprecated exports ([OX-2020](https://agile.8x8.com/browse/OX-2020))

### @8x8/oxygen-time-selector

#### Changed

- make the cursor property to be `not-allowed` when disabled ([OX-956](https://agile.8x8.com/browse/OX-956))

### @8x8/oxygen-toaster

#### Added

- Add exports for Toaster subscribe events ([OX-1982](https://agile.8x8.com/browse/OX-1982))

### @8x8/oxygen-toggle-button

#### Changed

- make the cursor property to be `not-allowed` when disabled ([OX-956](https://agile.8x8.com/browse/OX-956))

## [2.61.0] - 2024-03-11

### @8x8/oxygen-column-management

#### Fixed

- Fix when clicking on a row, the "draggable button" remains visible ([OX-1943](https://agile.8x8.com/browse/OX-1943))
- Fix when pressing SHIFT+TAB on the modal the "draggable icon" button is not focused ([OX-1943](https://agile.8x8.com/browse/OX-1943))
- Fix when clicking on the "bin" icon or on the "+" button, pressing with SPACE or ENTER, focus is lost. ([OX-1943](https://agile.8x8.com/browse/OX-1943))
- Fix item shifting when using down arrow and moving to the next list ([OX-1943](https://agile.8x8.com/browse/OX-1943))
- Fix Modal not closing on Esc ([OX-2011](https://agile.8x8.com/browse/OX-2011))

### @8x8/oxygen-filter-list

#### Changed

- Made FilterType and OperatorType labels optional ([OX-2001](https://agile.8x8.com/browse/OX-2001))

#### Added

- Add new optional `popoverPortalRef` prop which can be used to poral the `Popover` to a different location in the DOM ([OX-2000](https://agile.8x8.com/browse/OX-2000))

#### Fixed

- Fix bug: `Popover` not being visible when `FilterList` ancestor has z-index set, by portaling to an element from inside the `FilterList` ([OX-2000](https://agile.8x8.com/browse/OX-2000))

### @8x8/oxygen-icon

#### Added

- Add new `SwapIcon` ([OX-2007](https://agile.8x8.com/browse/OX-2007))

### @8x8/oxygen-label

#### Fixed

- Mark `theme` prop as optional in index.d.ts ([OX-2011](https://agile.8x8.com/browse/OX-2011))

### @8x8/oxygen-modal

#### Changed

- Update Storybook examples to Typescript & Storybook controls and usage ([OX-2011](https://agile.8x8.com/browse/OX-2011))

#### Fixed

- Fix Modal not closing when pressing Esc if Modal has no focusable elements ([OX-2011](https://agile.8x8.com/browse/OX-2011))
- Fix some of the manually maintained types from index.d.ts ([OX-2011](https://agile.8x8.com/browse/OX-2011))

### @8x8/oxygen-sidebar-menu

#### Changed

- Ensure `SidebarMenu` opens on hover & keyboard events, and no longer on click (which would interfere with hover) ([OX-1928](https://agile.8x8.com/browse/OX-1928))

### @8x8/oxygen-typography

#### Fixed

- Fix some of the manually maintained types (`theme` & `forwardedRef` marked as optional) ([OX-2011](https://agile.8x8.com/browse/OX-2011))

## [2.60.0] - 2024-03-01

### @8x8/oxygen-calendar

#### Fixed

- Fix keyboard navigation not being able to navigate to calendar days after changing the month with arrow keys ([OX-1981](https://agile.8x8.com/browse/OX-1981))

### @8x8/oxygen-column-management

#### Changed

- Improve UX on Column Management using ghost element instead of a drop indicator ([OX-1845](https://agile.8x8.com/browse/OX-1845))

### @8x8/oxygen-config

#### Added

- export type TelemetryPayload

### @8x8/oxygen-modal

#### Fixed

- Fix Modal horizontal centering ([OX-1978](https://agile.8x8.com/browse/OX-1978))

## [2.59.0] - 2024-02-28

### @8x8/oxygen-calendar

#### Added

- Keyboard navigation and voice over support to the Calendar component ([OX-784](https://agile.8x8.com/browse/OX-784))

### @8x8/oxygen-constants

#### Changed

- Marked `textLinkPadding`, `textLinkColorPrimarySelected`, `textLinkBackgroundColorPrimarySelected`, `fontFamily`, `fontSize`, `lineHeight`, `fontWeight` and `letterSpacing` as deprecated for textLink ([OX-1681](https://agile.8x8.com/browse/OX-1681))

### @8x8/oxygen-date-time-range-selector

#### Added

- Added ability to navigate between predefined dates ([OX-784](https://agile.8x8.com/browse/OX-784))

#### Fixed

- Fixed the data returned on setOuterState to allow th component to be controlled and expose all the needed state ([OX-1936](https://agile.8x8.com/browse/OX-1936))
- Added the compute of isEndTimeValid on all state changes ([OX-1936](https://agile.8x8.com/browse/OX-1936))
- Exposed DateTimeRangePickerProps interface from d.ts ([OX-1887](https://agile.8x8.com/browse/OX-1887))

### @8x8/oxygen-dropdown-button

#### Fixed

- Close dropdown when pressing enter on an item ([OX-784](https://agile.8x8.com/browse/OX-784))

### @8x8/oxygen-filter-list

#### Changed

- **Breaking change** - FilterList now uses a callback instead of a hook ([OX-1887](https://agile.8x8.com/browse/OX-1887))
- **Breaking change** - The returned list of set filters now returns an array instead of an object ([OX-1887](https://agile.8x8.com/browse/OX-1887))

#### Added

- Suport for DateTimeRangePicker as filter option ([OX-1887](https://agile.8x8.com/browse/OX-1887))
- Support for `hasGlobalApplyButton` to display a global apply or a filter level apply **Breaking change** - defaults to false ([OX-1887](https://agile.8x8.com/browse/OX-1887))

#### Removed

- Support for padding around FilterList - **Breaking change** - the padding should be controlled by integrator ([OX-1887](https://agile.8x8.com/browse/OX-1887))

### @8x8/oxygen-icon

#### Added

- Add new `FaceNeutralIcon` ([OX-1948](https://agile.8x8.com/browse/OX-1948))

### @8x8/oxygen-label

#### Fixed

- InfoBoxButtonLabel prop is optional in index.d.ts ([OX-1087](https://agile.8x8.com/browse/OX-1087))

### @8x8/oxygen-modal

#### Changed

- _Deprecate_ `disableAutoFocus` prop, which doesn't have any use since focus trap was added ([OX-1564](https://agile.8x8.com/browse/OX-1564))

### @8x8/oxygen-popover

#### Fixed

- `PopoverMenu`: ensure `onUpdate` is called when the user selects the same item multiple times ([OX-1944](https://agile.8x8.com/browse/OX-1944))
- Remove native outline on the floating-ui wrapper ([OX-1941](https://agile.8x8.com/browse/OX-1941))

### @8x8/oxygen-select

#### Changed

- added option: selectable input field inside react-select ([OX-1087](https://agile.8x8.com/browse/OX-1087))
- migrated to ts ([OX-1087](https://agile.8x8.com/browse/OX-1087))
- Changed `menuPlacement: 'auto'` into select props ([OX-1855](https://agile.8x8.com/browse/OX-1855))
- The `Select` component doesn't show anymore an inline `LoadingIndicator` ([OX-1914](https://agile.8x8.com/browse/OX-1914))
- Update `react-select` dependency to [5.8.0](https://github.com/JedWatson/react-select/releases/tag/react-select%405.8.0) ([OX-1923](https://agile.8x8.com/browse/OX-1923))

### @8x8/oxygen-tag

#### Fixed

- TagProps now extends React.HTMLAttributes<HTMLDivElement> in index.d.ts ([OX-1087](https://agile.8x8.com/browse/OX-1087))

### @8x8/oxygen-text-link

#### Added

- Add the `outline` on `focus-visible` CSS pseudo-elements from `TextLinkWrapper` ([OX-1681](https://agile.8x8.com/browse/OX-1681))

#### Removed

- Remove the `selection` and `moz-focus-inner` CSS pseudo-elements from `TextLinkWrapper` ([OX-1681](https://agile.8x8.com/browse/OX-1681))
- Remove `isDisabled` property from config example and marked it as deprecated into TextLink types ([OX-1681](https://agile.8x8.com/browse/OX-1681))

### @8x8/oxygen-theme

#### Changed

- Update typography `heading02` `line-height` token value to `2.5rem` (up from `2rem`) - to match design ([OX-1926](https://agile.8x8.com/browse/OX-1926))
- Update typography `body02` and `bodyBold02` `line-height` token value to `1.5rem` (up from `1.375rem`) - to match design ([OX-1932](https://agile.8x8.com/browse/OX-1932))

### @8x8/oxygen-toaster

#### Added

- Add support for `onClose` callback ([OX-1862](https://agile.8x8.com/browse/OX-1862))

## [2.58.0] - 2024-02-08

### @8x8/oxygen-alert-banner

#### Changed

- Changed the padding of AlertBannerWrapper to 12px 16px and gap to 16px ([OX-1662](https://agile.8x8.com/browse/OX-1662))

### @8x8/oxygen-column-management

#### Added

- Add telemetryProps and new telemetry events ([OX-1877](https://agile.8x8.com/browse/OX-1877))

### @8x8/oxygen-config

#### Added

- Add new telemetryCallback to support telemetry events for oxygen components through OxygenProvider ([OX-1876](https://agile.8x8.com/browse/OX-1876))

### @8x8/oxygen-constants

#### Changed

- Update the 'fontColorPrimary' and 'fontColorSecondary' BadgeTheme properties to `textColor07` ([OX-1678](https://agile.8x8.com/browse/OX-1678))

### @8x8/oxygen-date-time-range-selector

#### Fixed

- Created a new interface for the `DateTimeRangePicker` component, instead of re-using `DateTimeRangeSelector`'s interface ([OX-1885](https://agile.8x8.com/browse/OX-1885))

### @8x8/oxygen-modal

#### Changed

- update types for `portalRef` to allow ref callbacks ([OX-1890](https://agile.8x8.com/browse/OX-1890))
- enahnce `portalRef` node to no longer set relative position (allow z-index through parent display flex) ([OX-1890](https://agile.8x8.com/browse/OX-1890))

### @8x8/oxygen-select

#### Added

- Add Storybook example for how to render a `Select` in a `Modal` ([OX-1890](https://agile.8x8.com/browse/OX-1890))

### @8x8/oxygen-sidebar-menu

#### Changed

- Added onAuxClick handling on MenuItem and SubmenuItem to determine the middle click ([OX-1815](https://agile.8x8.com/browse/OX-1815))

## [2.57.0] - 2024-02-06

### @8x8/oxygen-accordion

#### Added

- Add support for optional return value for onChange, allowing to block navigation when onChange returns false ([OX-1841](https://agile.8x8.com/browse/OX-1841))
- Add optional hasPadding on AccordionItem to remove the padding of expanded content if false ([OX-1841](https://agile.8x8.com/browse/OX-1841))

### @8x8/oxygen-button

#### Added

- Add new `DropdownButton` component. Stateless, to be used together with `Popover` ([OX-1194](https://agile.8x8.com/browse/OX-1194))

### @8x8/oxygen-column-management

#### Changed

- Changed onReset callback to optional([OX-1846](https://agile.8x8.com/browse/OX-1846))

#### Added

- Export ModalTranslations([OX-1846](https://agile.8x8.com/browse/OX-1846))

#### Fixed

- Fix handleDragEnd not updating when items changed([OX-1846](https://agile.8x8.com/browse/OX-1846))

### @8x8/oxygen-date-time-range-selector

#### Added

- Split the `DateTimeRangeSelectorDropdown` component into two components, itself and the `DateTimeRangePicker`, so the picker can be easily imported onto other components without being hidden behind a dropdown ([OX-1811](https://agile.8x8.com/browse/OX-1811))

### @8x8/oxygen-filter-list

#### Changed

- (Internal) replaced `DropdownButton` with `OverflowContainer` and `Button` components ([OX-1194](https://agile.8x8.com/browse/OX-1194))

#### Fixed

- Fix: adding a new filter now opens the newly added filter ([OX-1194](https://agile.8x8.com/browse/OX-1194))

### @8x8/oxygen-label

#### Changed

- For required labels, changed the position of Asterisk to be right after label text ([OX-1715](https://agile.8x8.com/browse/OX-1715))

### @8x8/oxygen-modal

#### Added

- Add `portalRef` prop. Used when content from inside the Modal needs to render through a portal content that can be rendered outside of the inner Modal container (Select, Popover) ([OX-1194](https://agile.8x8.com/browse/OX-1194))

### @8x8/oxygen-popover

#### Added

- Add initial version as an opinionated `@floating-ui` wrapper, some UI primitives and examples ([OX-1194](https://agile.8x8.com/browse/OX-1194))

### @8x8/oxygen-sidebar-menu

#### Changed

- Exposing react mouse click event in the onTrigger function ([OX-1815](https://agile.8x8.com/browse/OX-1815)).
- Update `@floating-ui` to latest version: 0.26.5 ([OX-1194](https://agile.8x8.com/browse/OX-1194))

### @8x8/oxygen-text-link

#### Added

- add `as` - optional parameter, so the component can take different tag behaviour. ([OX-1850](https://agile.8x8.com/browse/OX-1850))

### @8x8/oxygen-theme

#### Fixed

- Fix theme definition types for TypographySet values to allow spreading into CSS (styled-components) without the need of a type override ([OX-1194](https://agile.8x8.com/browse/OX-1194))

### @8x8/oxygen-toast

#### Changed

- Changed actions `links` to `button` - `<TextLink as="button">` so they are wcag compliant ([OX-1850](https://agile.8x8.com/browse/OX-1850))

#### Added

- Added the `overflow-wrap` property for ContentWrapper component to ensure that text stays inside when overflow occurs ([OX-1807](https://agile.8x8.com/browse/OX-1807))

### @8x8/oxygen-tooltip

#### Changed

- Updated dependency to `@floating-ui/react` as the original package was renamed ([OX-1194](https://agile.8x8.com/browse/OX-1194))
- Allow proper ref merging so that `Tooltip` can be used together with other implementations which use the same node as target (eg `Popover`) ([OX-1194](https://agile.8x8.com/browse/OX-1194))

## [2.56.0] - 2024-01-29

### @8x8/oxygen-checkbox

#### Added

- Add `infoBoxButtonLabel` prop that gets passed as an aria-label to the Label Button ([OX-1809](https://agile.8x8.com/browse/OX-1809))

### @8x8/oxygen-icon

#### Changed

- Update on the property `role` to be `presentation` if `title` isn't set ([OX-1698](https://agile.8x8.com/browse/OX-1698))

#### Added

- Add new icons: `LockIcon`, `UnlockIcon` ([OX-1803](https://agile.8x8.com/browse/OX-1803))

### @8x8/oxygen-label

#### Added

- Add `infoBoxButtonLabel` prop that gets passed as an aria-label to the Label Button ([OX-1809](https://agile.8x8.com/browse/OX-1809))

### @8x8/oxygen-radio

#### Added

- Add `infoBoxButtonLabel` prop that gets passed as an aria-label to the Label Button ([OX-1809](https://agile.8x8.com/browse/OX-1809))

### @8x8/oxygen-select

#### Added

- Add `infoBoxButtonLabel` prop that gets passed as an aria-label to the Label Button ([OX-1809](https://agile.8x8.com/browse/OX-1809))
- Add props `isLoading`, `loadingMessage` ([OX-1536](https://agile.8x8.com/browse/OX-1536))

### @8x8/oxygen-switch-base

#### Added

- Add `infoBoxButtonLabel` prop that gets passed as an aria-label to the Label Button ([OX-1809](https://agile.8x8.com/browse/OX-1809))

### @8x8/oxygen-text-field

#### Added

- Add `infoBoxButtonLabel` prop that gets passed as an aria-label to the Label Button ([OX-1809](https://agile.8x8.com/browse/OX-1809))

### @8x8/oxygen-toggle-button

#### Added

- Add `infoBoxButtonLabel` prop that gets passed as an aria-label to the Label Button ([OX-1809](https://agile.8x8.com/browse/OX-1809))

## [2.55.0] - 2024-01-19

### @8x8/oxygen-column-management

#### Added

- Add initial version ([OX-1542](https://agile.8x8.com/browse/OX-1542))

### @8x8/oxygen-modal

#### Changed

- Removed tabindex from Modal wrapper to improve Voice Control usability ([OX-1202](https://agile.8x8.com/browse/OX-1202))

### @8x8/oxygen-toaster

#### Changed

- Toaster position moved to top-right (Except for classic theme). ([OX-1697](https://agile.8x8.com/browse/OX-1697))

## [2.54.0] - 2024-01-09

### @8x8/oxygen-avatar

#### Added

- Add `ref` forwarding support ([OX-1462](https://agile.8x8.com/browse/OX-1462))

### @8x8/oxygen-button

#### Added

- Add `iconLeft` and `iconRight` support ([OX-1135](https://agile.8x8.com/browse/OX-1135))

### @8x8/oxygen-date-time-range-selector

#### Changed

- Set width of dropdown calendar container to min-content to fix layout arrangement ([OX-1726](https://agile.8x8.com/browse/OX-1726))

### @8x8/oxygen-filter-list

#### Changed

- Show the currently selected filter operator and value in the filter items, in case of multiple values also show +N ([OX-1671](https://agile.8x8.com/browse/OX-1671))

### @8x8/oxygen-select

#### Added

- Following changes that improve WCAG navigation for select component: ([OX-795](https://agile.8x8.com/browse/OX-795))
- `aria-hidden` to img of clear all icon because it should not be navigable, instead the wrapper with role button should be ([OX-795](https://agile.8x8.com/browse/OX-795))
- replaced ClearIndicator component with div that inherits all old styles, in order to be able to access clear all icon using screen reader ([OX-795](https://agile.8x8.com/browse/OX-795))
- `aria-multiselectable`, role `listbox` to ValueWrapper and role `option`, `aria-selected` to selected options elements in case that there multiple values ([OX-795](https://agile.8x8.com/browse/OX-795))
- `aria-hidden` to left icon as it shouldn't be accessible by the screen reader ([OX-795](https://agile.8x8.com/browse/OX-795))

### @8x8/oxygen-skeletons

#### Added

- Add initial components ([OX-1623](https://agile.8x8.com/browse/OX-1623))

## [2.53.0] - 2023-12-14

### @8x8/oxygen-badge

#### Changed

- _Deprecate_ the old position values 'tl', 'tr', 'bl', 'br' ([OX-1686](https://agile.8x8.com/browse/OX-1686))
- use position values similar to DropdownButotn or Tooltips: 'top-start', 'top-end', 'bottom-start', 'bottom-end' ([OX-1686](https://agile.8x8.com/browse/OX-1686))

#### Fixed

- fix index.d.ts ([OX-1686](https://agile.8x8.com/browse/OX-1686))

### @8x8/oxygen-constants

#### Changed

- Deprecated the old position values from badge.consts.ts.badgePosition: 'tl', 'tr', 'bl', 'br' ([OX-1686](https://agile.8x8.com/browse/OX-1686))
- use position values similar to DropdownButotn or Tooltips: 'top-start', 'top-end', 'bottom-start', 'bottom-end' ([OX-1686](https://agile.8x8.com/browse/OX-1686))
- Update `Toast` max-height to 16rem ([OX-1461](https://agile.8x8.com/browse/OX-1461))

### @8x8/oxygen-sidebar-menu

#### Fixed

- Sidebar is now strongly typed to extend `HTMLAttributes` to properly allow the use of additional `React.FC` props. ([OX-1689](https://agile.8x8.com/browse/OX-1689))

### @8x8/oxygen-toast

#### Changed

- Update max-height to 16rem ([OX-1461](https://agile.8x8.com/browse/OX-1461))

#### Added

- Add `role="alert"` and `aria-live="assertive | polite"` (based on Toast type) to Toast ([OX-800](https://agile.8x8.com/browse/OX-800))
- Add optional `iconTitle` prop to Toast to allow setting title attribute on icon ([OX-800](https://agile.8x8.com/browse/OX-800))

## [2.52.0] - 2023-12-07

### @8x8/oxygen-accordion

#### Changed

- Update UI to match the Design ([OX-1634](https://agile.8x8.com/browse/OX-1634))

### @8x8/oxygen-avatar

#### Changed

- Converted the codebase to Typescript ([OX-946](https://agile.8x8.com/browse/OX-946))

#### Added

- Exposed the `AvatarProps`, `AvatarStackProps`, `AvatarTheme`, `AvatarSize`, `AvatarUserStatus`, `AvatarStackTheme` types ([OX-946](https://agile.8x8.com/browse/OX-946))
- Exposed the `avatarSize` and `avatarUserStatus` objects ([OX-946](https://agile.8x8.com/browse/OX-946))

### @8x8/oxygen-constants

#### Changed

- Deprecated the exposed `avatarSize` and `avatarUserStatus` objects. Please use the ones with the same name directly from the Avatar package: `import { avatarSize, avatarUserStatus } from '@8x8/oxygen-avatar';` ([OX-946](https://agile.8x8.com/browse/OX-946))

### @8x8/oxygen-filter-list

#### Changed

- Replaced Clear & Delete filter item `link` with `button`. ([OX-1642](https://agile.8x8.com/browse/OX-1642))

#### Fixed

- Fixed Clear & Delete enter/space keyboard action. ([OX-1642](https://agile.8x8.com/browse/OX-1642))

### @8x8/oxygen-icon

#### Added

- Add new icon: `BellAlertIcon` ([OX-1644](https://agile.8x8.com/browse/OX-1644))
- Add new icon: `DoubleDotsVerticalIcon` ([OX-1650](https://agile.8x8.com/browse/OX-1650))

### @8x8/oxygen-select

#### Fixed

- Allow selected values with `isMulti` to be removed with a single click when container has scrolling ([OX-1517](https://agile.8x8.com/browse/OX-1517))

### @8x8/oxygen-tag

#### Added

- Add `actionProps` to allow arbitrary attributes to be passed to the Action node ([OX-1517](https://agile.8x8.com/browse/OX-1517))

### @8x8/oxygen-user-status

#### Changed

- Updated the type definitions: added `onDirectCall` and `wrapUp` to UserStatusType and made the `theme` object optional. ([OX-946](https://agile.8x8.com/browse/OX-946))

## [2.51.0] - 2023-11-24

### @8x8/oxygen-config

#### Changed

- Mark OxygenProvider as stable (remove alpha tag) ([OX-1613](https://agile.8x8.com/browse/OX-1613))

#### Added

- Add Storybook example on how to use the Classic theme through OxygenProvider ([OX-1613](https://agile.8x8.com/browse/OX-1613))

### @8x8/oxygen-date-time-selector

#### Added

- Add props `isLoading`, `loadingMessage` ([OX-1607](https://agile.8x8.com/browse/OX-1607))

### @8x8/oxygen-loaders

#### Added

- Add prop `text` ([OX-1607](https://agile.8x8.com/browse/OX-1607))

### @8x8/oxygen-sidebar-menu

#### Fixed

- `isActive` items will now be shown (via `scrollIntoView`) ([OX-1535](https://agile.8x8.com/browse/OX-1535))

## [2.50.0] - 2023-11-15

### @8x8/oxygen-constants

#### Added

- add `loading` to `toastTypes` ([OX-1537](https://agile.8x8.com/browse/OX-1537))

### @8x8/oxygen-label

#### Changed

- Classic theme required `*` mark position moved to the right of the label (same as novo) ([OX-1112](https://agile.8x8.com/browse/OX-1112))
- Asterisk is ignored by screen narrator in required labels ([OX-1112](https://agile.8x8.com/browse/OX-1112))

### @8x8/oxygen-table-of-contents

#### Added

- Add initial component structure as alpha (PLAT-34900)

### @8x8/oxygen-toaster

#### Added

- Add `id` to `notify` method options. If `notify` is called with the same id when the toaster is opened, it changes the content and resets timer. ([OX-1537](https://agile.8x8.com/browse/OX-1537))

## [2.49.0] - 2023-11-08

### @8x8/oxygen-accordion

#### Changed

- Change `AccordionItem` should be used only as child of `Accordion` ([OX-1565](https://agile.8x8.com/browse/OX-1565))
- Change `Accordion` to be **Beta** ([OX-1565](https://agile.8x8.com/browse/OX-1565))

#### Added

- Add `Accordion` Component ([OX-1565](https://agile.8x8.com/browse/OX-1565))

### @8x8/oxygen-avatar

#### Added

- Add Avatar Presence Status Border color for Wrap Up status ([OX-1532](https://agile.8x8.com/browse/OX-1532))

### @8x8/oxygen-constants

#### Added

- add `markingColorLoading` to `ToastTheme` ([OX-1553](https://agile.8x8.com/browse/OX-1553))

#### Removed

- Remove accordion decisions ([OX-1565](https://agile.8x8.com/browse/OX-1565))

### @8x8/oxygen-icon

#### Added

- Add new icons: `MinusIcon`, `ShoppingCartIcon` ([OX-1573](https://agile.8x8.com/browse/OX-1573))

### @8x8/oxygen-theme

#### Added

- Show color token name near functional token in Storybook ([OX-1570](https://agile.8x8.com/browse/OX-1570))

### @8x8/oxygen-toast

#### Added

- Add `loading` type to toast ([OX-1553](https://agile.8x8.com/browse/OX-1553))

## [2.48.0] - 2023-10-27

### @8x8/oxygen-pagination

#### Fixed

- Change `useLayoutEffect` with `useEffect` in order to avoid pagination ref getting null ([OX-1528](https://agile.8x8.com/browse/OX-1528))
- Log error when consumer provides a `rowsPerPage` prop that is not valid (it is not included in `rowsPerPageOptions`) ([OX-1528](https://agile.8x8.com/browse/OX-1528))

### @8x8/oxygen-user-status

#### Added

- Added Wrap Up icon and status for vcc implementation ([OX-1514](https://agile.8x8.com/browse/OX-1514))

## [2.47.0] - 2023-10-18

### @8x8/oxygen-checkbox

#### Fixed

- `Checkbox` custom icon has role="none" as it's irrelevant to a screen reader ([OX-1378](https://agile.8x8.com/browse/OX-1378))

### @8x8/oxygen-icon

#### Added

- Add new icons: `BackOfficeIcon`, `LoginIcon`, `ResumeCallIcon` ([OX-1476](https://agile.8x8.com/browse/OX-1476))

### @8x8/oxygen-theme

#### Added

- `blue10` and `action07` tokens added ([OX-1468](https://agile.8x8.com/browse/OX-1468))

## [2.46.0] - 2023-09-28

### @8x8/oxygen-constants

#### Changed

- update `Tag` theme with `red` variant: `backgroundVariantRed`, `textColorVariantRed` ([OX-1317](https://agile.8x8.com/browse/OX-1317))

### @8x8/oxygen-pagination

#### Removed

- removed unnecessary wrapper - `PageSelectorWrapper` ([OX-1446](https://agile.8x8.com/browse/OX-1446))

#### Fixed

- Replace pagination page number select label with a custom component for fixing WCAG issues - read items with VoiceOver ([OX-1446](https://agile.8x8.com/browse/OX-1446))

### @8x8/oxygen-sidebar-menu

#### Fixed

- Improved rendering (fixed width) when `SidebarMenu` is part of a flex container ([OX-1443](https://agile.8x8.com/browse/OX-1443))
- Improved rendering of multi-row menu items (left Icon width fixed) ([OX-1443](https://agile.8x8.com/browse/OX-1443))

### @8x8/oxygen-tag

#### Added

- Add `red` variant ([OX-1317](https://agile.8x8.com/browse/OX-1317))

### @8x8/oxygen-theme

#### Added

- Add new tokens: `ui15`, `ui16` ([OX-1317](https://agile.8x8.com/browse/OX-1317))

## [2.45.0] - 2023-09-20

### @8x8/oxygen-dropdown-button

#### Fixed

- Ensure `onClose` & `onOpen` handlers are not called when the component re-renders without there being a state change ([OX-1412](https://agile.8x8.com/browse/OX-1412))

### @8x8/oxygen-theme

#### Changed

- `data11` token value changed from `gray05` to `gray06` ([OX-1413](https://agile.8x8.com/browse/OX-1413))

## [2.44.0] - 2023-09-15

### @8x8/oxygen-filter-list

#### Changed

- Rest filters callback should reset visible filters to initial filters config ([OX-1388](https://agile.8x8.com/browse/OX-1388))

### @8x8/oxygen-pagination

#### Added

- add `menuPlacement="top"` to page number Select ([OX-1393](https://agile.8x8.com/browse/OX-1393))
- add `isDisabled` prop to the component ([OX-1393](https://agile.8x8.com/browse/OX-1393))

#### Removed

- remove unnecessary `setPageNumber` & `setRowsPerPage` from `usePagination` hook and code related to ([OX-1393](https://agile.8x8.com/browse/OX-1393))
- remove `setPageNumber` & `setRowsPerPage` from `PaginationHookProps` type ([OX-1393](https://agile.8x8.com/browse/OX-1393))

## [2.43.0] - 2023-09-12

### @8x8/oxygen-filter-list

#### Added

- Added exhaustive testIds across all FilterList components ([OX-1323](https://agile.8x8.com/browse/OX-1323))

### @8x8/oxygen-pagination

#### Added

- Add `Pagination` component ([OX-1152](https://agile.8x8.com/browse/OX-1152))

## [2.42.0] - 2023-09-05

### @8x8/oxygen-alert-banner

#### Changed

- Replace warning icon with exclamation icon ([OX-1020](https://agile.8x8.com/browse/OX-1020))

### @8x8/oxygen-constants

#### Changed

- Update Modal paddings `headerPadding`, `headerPaddingNoContent`, `contentPadding`, `footerPadding`, `footerPaddingSmall`, `footerPaddingNoContent` and `footerButtonSpacing` ([OX-1302](https://agile.8x8.com/browse/OX-1302))

### @8x8/oxygen-filter-list

#### Added

- Add `isResetAll` prop on the `<FilterList />` component that will replace `Clear all` with `Reset all` ([OX-1288](https://agile.8x8.com/browse/OX-1288))
- Add `isReset` option that will replace the `clear option` with the `reset option` if the filter item should always have a value ([OX-1287](https://agile.8x8.com/browse/OX-1287))
- Add `isNotDeletable` option that will remove the `delete filter`, if the filter is required ([OX-1287](https://agile.8x8.com/browse/OX-1287))

### @8x8/oxygen-icon

#### Changed

- Simplified icon update steps in the readme ([OX-1313](https://agile.8x8.com/browse/OX-1313))

#### Added

- Add new icon: `MsteamsIcon` ([OX-1313](https://agile.8x8.com/browse/OX-1313))

### @8x8/oxygen-keyword-search

#### Changed

- Search suggestions will always be visible regardless number of characters typed in search input ([OX-1305](https://agile.8x8.com/browse/OX-1305))
- Removed `keepTypingText` property from translations prop ([OX-1312](https://agile.8x8.com/browse/OX-1312))
- Improved `testId` usage ([OX-1312](https://agile.8x8.com/browse/OX-1312))
- Add proper truncation & tooltip for view all results text ([OX-1312](https://agile.8x8.com/browse/OX-1312))
- Search results list loses focus when navigate outside of component with `tab` ([OX-1312](https://agile.8x8.com/browse/OX-1312))
- Export `KeywordSearchProps` interface ([OX-1312](https://agile.8x8.com/browse/OX-1312))

#### Added

- Added `showSuggestionsDropdown` prop that shows/hides the suggestions dropdown ([OX-1305](https://agile.8x8.com/browse/OX-1305))
- While typing in search input, until suggestions are loaded, a spinner can be visible with an additional text that says the value that we're searching for ([OX-1305](https://agile.8x8.com/browse/OX-1305))
- We have the ability to apply a new filter via "view all results (x items)" ([OX-1305](https://agile.8x8.com/browse/OX-1305))
- When user changes the search input value without applying new search filter, by clicking outside the search input value will be reset to applied filter ([OX-1305](https://agile.8x8.com/browse/OX-1305))
- Clicking on clear button will clear the applied filter too ([OX-1305](https://agile.8x8.com/browse/OX-1305))

### @8x8/oxygen-slider

#### Added

- Add support for keyboard navigation (tab to navigate, up/right arrow keys to increase value and down/left arrow keys to decrease value) ([OX-1311](https://agile.8x8.com/browse/OX-1311))

## [2.41.0] - 2023-08-16

### @8x8/oxygen-dropdown-button

#### Fixed

- Revert check for indicatorIcon to allow `false` which renders the DropdownButton with no icon ([OX-1292](https://agile.8x8.com/browse/OX-1292))

### @8x8/oxygen-switch-base

#### Fixed

- Allows extra attributes to be passed down to the input element ([OX-1274](https://agile.8x8.com/browse/OX-1274))

## [2.40.0] - 2023-08-03

### @8x8/oxygen-filter-list

#### Added

- Add `FilterList` component ([OX-1165](https://agile.8x8.com/browse/OX-1165))

### @8x8/oxygen-select

#### Added

- new prop `shouldWrapLabel` which allows label and action link to wrap into two lines ([OX-1262](https://agile.8x8.com/browse/OX-1262))

## [2.39.0] - 2023-07-27

### @8x8/oxygen-dropdown-button

#### Changed

- Stop event propagation on dropdown click ([OX-1245](https://agile.8x8.com/browse/OX-1245))

### @8x8/oxygen-label

#### Added

- new prop `shouldWrapText` which allows label and action link to wrap into two lines

### @8x8/oxygen-theme

#### Changed

- `yellow` colors shifted a bit (updated gradient from 0-9 to 0-10) ([OX-1260](https://agile.8x8.com/browse/OX-1260))
- Update `success01` token value (very slight change to improve contrast) ([OX-1260](https://agile.8x8.com/browse/OX-1260))

#### Added

- Add new colors: `red10`, `green10`, `yellow10` ([OX-1260](https://agile.8x8.com/browse/OX-1260))
- Add new tokens: `alertRed`, `alertYellow`, `alertGreen`, `data11`, `dataText11` ([OX-1260](https://agile.8x8.com/browse/OX-1260))

## [2.37.0] - 2023-07-13

### @8x8/oxygen-button

#### Added

- Add `text` button variant ([OX-1131](https://agile.8x8.com/browse/OX-1131))

### @8x8/oxygen-dropdown-button

#### Changed

- Convert source to Typescript. Exposed types file should be more correct now ([OX-906](https://agile.8x8.com/browse/OX-906))

### @8x8/oxygen-label

#### Fixed

- Add the font-size property to label element to support fully font scaling ([OX-1247](https://agile.8x8.com/browse/OX-1247))

### @8x8/oxygen-sidebar-menu

#### Added

- onCollapseChange - callback function for collapse change ([OX-1246](https://agile.8x8.com/browse/OX-1246))

### @8x8/oxygen-static-tooltip

#### Changed

- Add minimum dimensions to improve rendering when an arrow is also visible ([OX-1252](https://agile.8x8.com/browse/OX-1252))

## [2.36.0] - 2023-06-27

### @8x8/oxygen-icon

#### Added

- Add new icons: `ArrowRightIcon`, `ComputerIcon`, `ConnectionIcon` ([OX-1229](https://agile.8x8.com/browse/OX-1229))

### @8x8/oxygen-input

#### Changed

- Change `iconLeft`, `iconRight` types to `React.ComponentType<any>`. ([OX-1170](https://agile.8x8.com/browse/OX-1170))
- Change `inputRef` type to `React.Ref<HTMLInputElement>` and `forwardedRef` type to `React.Ref<HTMLElement>`. ([OX-1170](https://agile.8x8.com/browse/OX-1170))

#### Fixed

- Fix `iconLeft` movement when typing by adding the `min-width` property to the `InputIcon`. ([OX-1170](https://agile.8x8.com/browse/OX-1170))

### @8x8/oxygen-keyword-search

#### Added

- Add `KeywordSearch` component ([OX-1170](https://agile.8x8.com/browse/OX-1170))

### @8x8/oxygen-utils

#### Added

- Add new `useClickOutside` hook - to detect when clicking outside a container ref ([OX-1170](https://agile.8x8.com/browse/OX-1170))
- Add new `useArrowKeyListIndex` hook - to get the focusable element index ([OX-1170](https://agile.8x8.com/browse/OX-1170))
- Add new `useGlobalActionKeyHandler` hook - to call the provided handler once any of the specified keys have been pressed ([OX-1170](https://agile.8x8.com/browse/OX-1170))

## [2.35.0] - 2023-06-20

### @8x8/oxygen-checkbox

#### Fixed

- Fix mouse cursor being `pointer` when disabled (fix comes from `SwitchBase`) ([OX-1221](https://agile.8x8.com/browse/OX-1221))

### @8x8/oxygen-graphics

#### Added

- Add 8x8 logo graphic (Logo8x8 component) ([OX-1198](https://agile.8x8.com/browse/OX-1198))

### @8x8/oxygen-icon

#### Added

- Add new icons: `DashboardAddIcon`, `SaveIcon` ([OX-1212](https://agile.8x8.com/browse/OX-1212))
- Add new icon: `SpellcheckIcon` ([OX-1217](https://agile.8x8.com/browse/OX-1217))

### @8x8/oxygen-modal

#### Changed

- Add role="none" to Modal header close icon to have the icon ignored by screen readers ([OX-1202](https://agile.8x8.com/browse/OX-1202))

### @8x8/oxygen-sidebar-menu

#### Fixed

- Fix Eliminate redundant inner <Ul> wrapper for submenu items ([OX-1205](https://agile.8x8.com/browse/OX-1205))

### @8x8/oxygen-switch-base

#### Fixed

- Fix mouse cursor being `pointer` on disabled `SwitchBase` (fix applies to both `ToggleButton` and `Checkbox`) ([OX-1221](https://agile.8x8.com/browse/OX-1221))

### @8x8/oxygen-theme

#### Added

- Expose the themes without the _novo_ name as well: `light`, `dark` & `colorPalette` ([OX-1218](https://agile.8x8.com/browse/OX-1218))

### @8x8/oxygen-toggle-button

#### Fixed

- Fix mouse cursor being `pointer` when disabled (fix comes from `SwitchBase`) ([OX-1221](https://agile.8x8.com/browse/OX-1221))

## [2.34.0] - 2023-06-08

### @8x8/oxygen-icon

#### Added

- Add new icons: `EvaluateIcon`, `RerouteIcon`, `RolesPermissionsIcon`, `Work8x8Icon` ([OX-1183](https://agile.8x8.com/browse/OX-1183))

### @8x8/oxygen-sidebar-menu

#### Fixed

- Fix `SidebarMenu` dark theme text color ([OX-1196](https://agile.8x8.com/browse/OX-1196))

## [2.33.0] - 2023-05-25

### @8x8/oxygen-sidebar-menu

#### Added

- Add initial component structure as alpha ([OX-760](https://agile.8x8.com/browse/OX-760))

## [2.32.0] - 2023-05-19

### @8x8/oxygen-accordion

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-alert-banner

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-avatar

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-badge

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-breadcrumbs

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-button

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-calendar

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-card

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-checkbox

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-config

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-constants

#### Changed

- Mark `spinnerSize` and `progressBarSize` as deprecated. Please use them directly from the `@8x8/oxygen-loaders` package ([OX-1088](https://agile.8x8.com/browse/OX-1088))

#### Fixed

- Mark `Slider` theme prop `sliderKnobBorderRadius` as required and provide a value for it in Novo ([OX-1136](https://agile.8x8.com/browse/OX-1136))

### @8x8/oxygen-context-menu

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-date-time-base

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-date-time-range-selector

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-date-time-selector

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-dropdown-button

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-event-card

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-graphics

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-icon

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

#### Added

- Add new icons: `ApiIcon`, `MergeIcon`, `SecurityOffIcon`, `SecurityOnIcon`, `SitesIcon` ([OX-1139](https://agile.8x8.com/browse/OX-1139))

### @8x8/oxygen-icon-button

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-input

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-label

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-list

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-loaders

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

#### Added

- Expose `progressBarSize` and `spinnerSize` from this package directly (and deprecate the ones from `@8x8/oxygen-constants`) ([OX-1088](https://agile.8x8.com/browse/OX-1088))

### @8x8/oxygen-milestone-tracker

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-modal

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-overlay

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-radio

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-select

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-slide-out

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-slider

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

#### Fixed

- Fix Knob rendering as a square (missing theme prop) & transparency issue by using the new hex transparency syntax ([OX-1136](https://agile.8x8.com/browse/OX-1136))

### @8x8/oxygen-static-tooltip

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-switch-base

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-table

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-tabs

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-tag

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-text-field

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-text-link

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-textarea

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-theme

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

#### Added

- Add new colors: violet01-10, magenta01-10, pink01-10, midnight01-10, teal01-10, orange01-10, coolgray01-02. Add new tokens: data01-10, dataText01-10, ui11-14 ([OX-1140](https://agile.8x8.com/browse/OX-1140))

### @8x8/oxygen-time-selector

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-toast

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-toaster

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-toggle-button

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-tooltip

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-typography

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-user-status

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

### @8x8/oxygen-utils

#### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" ([OX-1069](https://agile.8x8.com/browse/OX-1069))

## [2.30.0] - 2023-05-04

### @8x8/oxygen-icon

#### Added

- Add new icons: `FolderOpenIcon`, `HoldCircleIcon`, `MinusCircleIcon` ([OX-1125](https://agile.8x8.com/browse/OX-1125))

### @8x8/oxygen-modal

#### Fixed

- Fix `Modal` throwing when the `isVisible` prop is used due to conditional hook usage ([OX-1126](https://agile.8x8.com/browse/OX-1126))

### @8x8/oxygen-select

#### Added

- Use custom `SingleValue` & export it as well. This enhances the default `react-select` component with a `title` attribute when the content overflows ([OX-729](https://agile.8x8.com/browse/OX-729))

#### Fixed

- Update `react-select` to fix positioning issues ([OX-1094](https://agile.8x8.com/browse/OX-1094))

### @8x8/oxygen-utils

#### Added

- Add new `useHasOverflow` hook to detect if an element is overflowing its container (useful to add title when text is clipped) ([OX-729](https://agile.8x8.com/browse/OX-729))

## [2.29.1] - 2023-05-03

### @8x8/oxygen-avatar

#### Fixed

- Custom badge icon under `userStatus` is no longer styled if it's an SVG ([OX-1108](https://agile.8x8.com/browse/OX-1108))

### @8x8/oxygen-time-selector

#### Fixed

- Parse 24h format time value when manually edited/typed ([OX-1113](https://agile.8x8.com/browse/OX-1113))

## [2.29.0] - 2023-04-26

### @8x8/oxygen-checkbox

#### Changed

- No longer allow `Checkbox` to toggle (fire `onChange`) on pressing `Enter`. Such an action should only submit a wrapper form. Changed in underlying `SwitchBase` component ([OX-1068](https://agile.8x8.com/browse/OX-1068))

#### Added

- Add a Storybook page for testing `Checkbox` toggle & form submission events ([OX-1068](https://agile.8x8.com/browse/OX-1068))

### @8x8/oxygen-config

#### Added

- Export new OxygenProvider ([OX-532](https://agile.8x8.com/browse/OX-532))

### @8x8/oxygen-icon

#### Added

- Add new icons: `DevicesIcon`, `ExtensionNumbersIcon`, `GroupCallPickupsIcon`, `TableIcon` ([OX-1102](https://agile.8x8.com/browse/OX-1102))

### @8x8/oxygen-modal

#### Added

- Add oxygen-utils as a dependency ([OX-793](https://agile.8x8.com/browse/OX-793))
- Add Storybook example for `Accessibility` ([OX-793](https://agile.8x8.com/browse/OX-793))
- Add Modal attributes `role` with default `dialog` value ([OX-793](https://agile.8x8.com/browse/OX-793))
- Add Modal attribute aria-labelledby which gets generated with useId oxygen-utils ([OX-793](https://agile.8x8.com/browse/OX-793))
- Add Modal titleProps object, where aria-labelledby value is passed as an id ([OX-793](https://agile.8x8.com/browse/OX-793))
- Add Modal modalProps object ([OX-793](https://agile.8x8.com/browse/OX-793))

### @8x8/oxygen-radio

#### Fixed

- Correctly export default type for `Radio` & extend the types for both `Radio` & `RadioGroup` to match the native HTML elements they render to & provide custom `onChange` prop type ([OX-532](https://agile.8x8.com/browse/OX-532))

### @8x8/oxygen-switch-base

#### Changed

- No longer allow `SwitchBase` to toggle (fire `onChange`) on pressing `Enter`. Such an action should only submit a wrapper form ([OX-1068](https://agile.8x8.com/browse/OX-1068))

### @8x8/oxygen-toggle-button

#### Changed

- No longer allow `ToggleButton` to toggle (fire `onChange`) on pressing `Enter`. Such an action should only submit a wrapper form. Changed in underlying `SwitchBase` component ([OX-1068](https://agile.8x8.com/browse/OX-1068))

#### Added

- Add a Storybook page for testing `ToggleButton` toggle & form submission events ([OX-1068](https://agile.8x8.com/browse/OX-1068))

## [2.28.1] - 2023-04-04

### @8x8/oxygen-icon-button

#### Fixed

- handle onClick/onKeyDown disabled icon button in order to preventDefault, stopPropagation. ([OX-1031](https://agile.8x8.com/browse/OX-1031))
- "forwardedRef" prop is optional ([OX-1031](https://agile.8x8.com/browse/OX-1031))

## [2.28.0] - 2023-03-29

### @8x8/oxygen-constants

#### Changed

- _Deprecate_ Modal theme props: `headerIconTop`, `headerIconRight`, `headerIconColor`, `headerIconColorActive`, `headerIconColorFocus`, `headerIconColorHover`, `headerIconBackgroundActive`, `headerIconBackgroundFocus`, `headerIconBackgroundHover`, `headerIconBorderFocus` ([OX-1018](https://agile.8x8.com/browse/OX-1018))

#### Added

- Add Novo and Novo Dark theme exports (identical to the Classic ones) for `graphics`, `milestoneTracker`, `modalFooter`, `modalHeader`, `slideOut`, `typography`, `userStatus` ([OX-532](https://agile.8x8.com/browse/OX-532))
- Export the `AllComponentsThemes` type ([OX-532](https://agile.8x8.com/browse/OX-532))

### @8x8/oxygen-icon-button

#### Fixed

- Fix strange focus-ring bleed effect ([OX-1018](https://agile.8x8.com/browse/OX-1018))

### @8x8/oxygen-label

#### Fixed

- Add type="button" to Action when rendered as button (when the action is a function) ([OX-994](https://agile.8x8.com/browse/OX-994))

### @8x8/oxygen-modal

#### Changed

- Use `IconButton` to render the Close icon (instead of a custom local implementation) ([OX-1018](https://agile.8x8.com/browse/OX-1018))
- _Deprecate_ Modal theme props: `headerIconTop`, `headerIconRight`, `headerIconColor`, `headerIconColorActive`, `headerIconColorFocus`, `headerIconColorHover`, `headerIconBackgroundActive`, `headerIconBackgroundFocus`, `headerIconBackgroundHover`, `headerIconBorderFocus` ([OX-1018](https://agile.8x8.com/browse/OX-1018))

#### Added

- Exposed `focus-trap` property `allowOutsideClick` for consumer use ([OX-1025](https://agile.8x8.com/browse/OX-1025))
- Added usage example and lack of usage example for `allowOutsideClick` ([OX-1025](https://agile.8x8.com/browse/OX-1025))

#### Fixed

- Adjust spacing around the Modal HeaderTitle, HeaderSubtitle & Close icon to match design ([OX-1018](https://agile.8x8.com/browse/OX-1018))

### @8x8/oxygen-textarea

#### Changed

- Updated Storybook `Playground` Label component to be imported from packages/label with a `htmlFor ` attributes and associated `id` on Textarea component ([OX-799](https://agile.8x8.com/browse/OX-799))

#### Added

- Add Storybook example for `Accessibility` ([OX-799](https://agile.8x8.com/browse/OX-799))

## [2.27.1] - 2023-03-17

### @8x8/oxygen-list

#### Fixed

- Add oxygen-utils as dependency ([OX-990](https://agile.8x8.com/browse/OX-990))

## [2.27.0] - 2023-03-17

### @8x8/oxygen-checkbox

#### Changed

- Change `CheckboxIconWrapper` from `div` to `span` ([OX-801](https://agile.8x8.com/browse/OX-801))

#### Added

- Add functionality on pressing `Enter` to toggle checkbox ([OX-801](https://agile.8x8.com/browse/OX-801))

### @8x8/oxygen-config

#### Fixed

- Fix type definition for `getById`. Now returns correct type ([OX-908](https://agile.8x8.com/browse/OX-908))

### @8x8/oxygen-constants

#### Changed

- Removed `Tab` theme props `tabTextFontFamily`, `tabTextFontSize`, `tabTextFontWeight`, `tabTextLineHeight` (used only in Classic) and updated the other font-related theme props in Classic to maintain the same UI ([OX-958](https://agile.8x8.com/browse/OX-958))
- Decrease `Toast` theme prop `iconSize` for Classic theme from 24 to 20 to preserve the same button outer size of 24px ([OX-908](https://agile.8x8.com/browse/OX-908))

### @8x8/oxygen-icon-button

#### Changed

- `IconButton` background color is now transparent (should have been from the start). The component has custom background colors only when in specific states (active, hover) ([OX-908](https://agile.8x8.com/browse/OX-908))
- Mark `children` as required prop ([OX-908](https://agile.8x8.com/browse/OX-908))

#### Added

- Add new `isInverted?: boolean;` prop to render against inverted items (such as `Toast`) ([OX-908](https://agile.8x8.com/browse/OX-908))
- Export interface `IconButtonProps` ([OX-908](https://agile.8x8.com/browse/OX-908))
- Add `prop-types` as a dependency ([OX-908](https://agile.8x8.com/browse/OX-908))

### @8x8/oxygen-list

#### Added

- focus visible indicator to list item component. ([OX-791](https://agile.8x8.com/browse/OX-791))
- `aria-disabled` true when list item is disabled. ([OX-791](https://agile.8x8.com/browse/OX-791))
- `isActive` prop to `ListItem` component to differentiate the background when an element is active. ([OX-791](https://agile.8x8.com/browse/OX-791))
- Allow/Prevent enter/space key events to fire/from firing the list item attached handlers - based on the disabled state. ([OX-791](https://agile.8x8.com/browse/OX-791))

### @8x8/oxygen-select

#### Added

- Add support for Groups in the VirtualMenuList component (counts all children correctly for the proper height calculations) ([OX-943](https://agile.8x8.com/browse/OX-943))

### @8x8/oxygen-switch-base

#### Changed

- Change `StyledSwitchBaseGroup` from `div` to `fieldset` ([OX-801](https://agile.8x8.com/browse/OX-801))

#### Added

- Add `onKeyPress` and `aria-disabled` on `SwitchBaseInput` ([OX-801](https://agile.8x8.com/browse/OX-801))
- Add `inputProps` on `SwitchBaseInput` and `labelProps` on `SwitchBaseLabel` ([OX-801](https://agile.8x8.com/browse/OX-801))
-

### @8x8/oxygen-tabs

#### Changed

- Converted the codebase to Typescript ([OX-958](https://agile.8x8.com/browse/OX-958))
- Removed theme props `tabTextFontFamily`, `tabTextFontSize`, `tabTextFontWeight`, `tabTextLineHeight` (used only in Classic) and updated the other font-related theme props in Classic to maintain the same UI ([OX-958](https://agile.8x8.com/browse/OX-958))

### @8x8/oxygen-toast

#### Changed

- Convert code to Typescript ([OX-908](https://agile.8x8.com/browse/OX-908))
- ⚠️ Prop `size` default value is now `small` (was `medium` before, from Classic theme days) ([OX-908](https://agile.8x8.com/browse/OX-908))
- Use the `IconButton` component to render the close button ([OX-908](https://agile.8x8.com/browse/OX-908))
- Slightly update `Toast` UI (spacings & sizes) to better match the design ([OX-908](https://agile.8x8.com/browse/OX-908))
- Decrease Classic theme close icon size from 24 to 20 to preserve the same button outer size of 24px ([OX-908](https://agile.8x8.com/browse/OX-908))

#### Removed

- Remove theme props `actionsMarginLeft`, `actionsMarginRight`, `actionMarginRight`, `paddingX`, `paddingY`, `iconMargin` ([OX-908](https://agile.8x8.com/browse/OX-908))

### @8x8/oxygen-toggle-button

#### Changed

- Change `LabelTextWrapper` from `div` to `span` ([OX-801](https://agile.8x8.com/browse/OX-801))

#### Added

- Add functionality on pressing `Enter` to toggle button ([OX-801](https://agile.8x8.com/browse/OX-801))
- Add `role="switch"` on `ToggleButton` ([OX-801](https://agile.8x8.com/browse/OX-801))

### @8x8/oxygen-utils

#### Added

- `isEnterEvent`, `isSpaceEvent` key down events. ([OX-791](https://agile.8x8.com/browse/OX-791))

## [2.26.0] - 2023-03-03

### @8x8/oxygen-icon

#### Added

- Add new icons: `ArrowDownLongIcon`, `ArrowUpLongIcon`, `InboundCallIcon`, `InboundEmailIcon`, `MsteamsSyncIcon`, `OutboundCallIcon`, `OutboundEmailIcon`, `PivotTableIcon` ([OX-954](https://agile.8x8.com/browse/OX-954))
- Add new role attribute with the default "img" on the `Icon` component and removed the "rect" element with the extra "title" element ([OX-788](https://agile.8x8.com/browse/OX-788))

### @8x8/oxygen-input

#### Added

- Add props: `inputProps` for InputField component ([OX-797](https://agile.8x8.com/browse/OX-797))

### @8x8/oxygen-radio

#### Added

- Added: `role` for radio group, `aria-hidden` for decorative svg. ([OX-794](https://agile.8x8.com/browse/OX-794))
- In order too meet WAI-ARIA requirements, the other aria / roles attributes (that will be added to Radio Group component) will be passed from `rest` props ([OX-794](https://agile.8x8.com/browse/OX-794))
- Allow disabled radio input to be outlined when keyboard navigation -> up/down arrows. ([OX-794](https://agile.8x8.com/browse/OX-794))
- Added cursor 'not-allowed' to disabled radio. ([OX-794](https://agile.8x8.com/browse/OX-794))

### @8x8/oxygen-text-field

#### Added

- Add props: `labelProps`, `actionProps`, `inputProps` (mark `otherLabelProps`, `otherActionProps`, `otherInputProps` as deprecated) ([OX-797](https://agile.8x8.com/browse/OX-797))

### @8x8/oxygen-typography

#### Fixed

- Add sizes & weigths export to d.ts file to allow Typescript usage ([OX-950](https://agile.8x8.com/browse/OX-950))

## [2.25.0] - 2023-03-01

### @8x8/oxygen-avatar

#### Added

- Add a specific example for using a custom badge ([OX-939](https://agile.8x8.com/browse/OX-939))

#### Fixed

- Fixed custom badge usage to use correct layout (apply CSS layout to wrapper element) ([OX-939](https://agile.8x8.com/browse/OX-939))

### @8x8/oxygen-button

#### Changed

- Change `disabled` attribute to `aria-disabled` in order to be able to focus the button in disabled state. In this case we prevent onClick, onKeydown(space / enter action handlers) from being fired. ([OX-783](https://agile.8x8.com/browse/OX-783))

### @8x8/oxygen-constants

#### Changed

- Updated `Tag` theme prop `textColorVariantBlue` to `textColor07` ([OX-940](https://agile.8x8.com/browse/OX-940))

#### Added

- Add `IconButton` theme props `colorInverted`, `colorInvertedDisabled`, `backgroundHoverInverted`, `backgroundActiveInverted` to support inverted icon buttons for Notifications ([OX-908](https://agile.8x8.com/browse/OX-908))

#### Removed

- Remove `Toast` theme props: `actionsMarginLeft`, `actionsMarginRight`, `actionMarginRight`, `paddingX`, `paddingY`, `iconMargin` ([OX-908](https://agile.8x8.com/browse/OX-908))

### @8x8/oxygen-icon

#### Added

- Add new icons: `BargeCallIcon`, `DefaultTerminationIcon`, `DequeuedIcon`, `ExternalNumberForwardIcon`, `HoldMusicIcon`, `InQueueTreatmentIcon`, `IvrForwardExternalIcon`, `QueueForwardIcon`, `QueueTimeOutIcon`, `RandomiseIcon`, `FxIcon`, `StartWhisperIcon`, `StopWhisperIcon`, `TagIcon`, `TestVariableIcon`, `VoicemailForwardIcon` ([OX-945](https://agile.8x8.com/browse/OX-945))

### @8x8/oxygen-label

#### Changed

- Move label value `title` attribute on inner child component for string values in order to allow screen narrators to read the content ([OX-790](https://agile.8x8.com/browse/OX-790))

#### Added

- Allow passthrough `rest` props on `Label` wrapper([OX-794](https://agile.8x8.com/browse/OX-794))

### @8x8/oxygen-loaders

#### Changed

- Add `aria-labelledby` on progress element that references to progress bar text id attribute ([OX-944](https://agile.8x8.com/browse/OX-944))

### @8x8/oxygen-tag

#### Changed

- Update dark theme blue tag color (same as light theme one) ([OX-940](https://agile.8x8.com/browse/OX-940))

### @8x8/oxygen-theme

#### Changed

- Updated `ui09` token value for `novoDark` to `blue09` (same value as the token on `novo`) ([OX-940](https://agile.8x8.com/browse/OX-940))

### @8x8/oxygen-tooltip

#### Changed

- Update Storybook documentation to new format (split guildelines into multiple example pages) ([OX-932](https://agile.8x8.com/browse/OX-932))

#### Added

- Add new prop `disableInteractive` which allows Tooltip behaviour closer to a native `title` ([OX-932](https://agile.8x8.com/browse/OX-932))
- Add `renderContainerId` to allow providing a string value for an `id` to be used as render container root as alternative to `renderContainer` ([OX-932](https://agile.8x8.com/browse/OX-932))

#### Fixed

- Fix Tooltip click toggle on reference click behaviour ([OX-932](https://agile.8x8.com/browse/OX-932))

### @8x8/oxygen-utils

#### Added

- Added `useId` hook that generates and returns a unique id ([OX-944](https://agile.8x8.com/browse/OX-944))

## [2.24.0] - 2023-02-20

### @8x8/oxygen-alert-banner

#### Added

- Add `AlertBanner` component ([OX-696](https://agile.8x8.com/browse/OX-696))

### @8x8/oxygen-avatar

#### Changed

- Remove `StyledAvatarContainer` wrapper and keep just one avatar wrapper (`StyledAvatar`). In this way, `rest` props will be set on that interactable top-level wrapper, achieving also WAI-ARIA requirements. ([OX-781](https://agile.8x8.com/browse/OX-781))

### @8x8/oxygen-constants

#### Added

- Add `alertBanner` theme props ([OX-696](https://agile.8x8.com/browse/OX-696))

### @8x8/oxygen-dropdown-button

#### Changed

- Added: `aria-haspopup`, `aria-expanded`, `aria-hidden` for decorative svg. ([OX-787](https://agile.8x8.com/browse/OX-787))
- In order too meet WAI-ARIA requirements, the other aria / roles attributes (that will be added to dropdown button component) will be passed from `otherProps` ([OX-787](https://agile.8x8.com/browse/OX-787))

### @8x8/oxygen-loaders

#### Changed

- Allow pass-through props on both `Spinner` and `ProgressBar` to allow WAI-ARIA requirements to be met ([OX-792](https://agile.8x8.com/browse/OX-792))

### @8x8/oxygen-tooltip

#### Fixed

- Close tooltip on Escape key press ([OX-929](https://agile.8x8.com/browse/OX-929))
- Close Tooltip on reference (trigger) click ([OX-929](https://agile.8x8.com/browse/OX-929))

## [2.23.1] - 2023-02-14

### @8x8/oxygen-config

#### Fixed

- Fix performance issue in the `withTheme` HoC by only cloning the relevent part of the config object ([OX-923](https://agile.8x8.com/browse/OX-923))

## [2.23.0] - 2023-02-10

### @8x8/oxygen-button

#### Fixed

- Add back default `type="button"` on native HTML button element ([OX-919](https://agile.8x8.com/browse/OX-919))

### @8x8/oxygen-icon

#### Fixed

- Moved `@8x8/oxygen-constants` from _peerDependencies_ to _dependencies_ and updated to the correct version ([OX-916](https://agile.8x8.com/browse/OX-916))
- Remove `forwardedRef` propType definition from `Icon` component ([OX-918](https://agile.8x8.com/browse/OX-918))

### @8x8/oxygen-user-status

#### Changed

- Added `aria-hddine=true` for user status svgs. In order too meet WAI-ARIA requirements, the other aria / roles attributes (that will be added to svg parent component) will be passed from `otherProps` ([OX-803](https://agile.8x8.com/browse/OX-803))

## [2.22.0] - 2023-02-07

### @8x8/oxygen-icon

#### Added

- Add new icons: `DoubleArrowLeftIcon`, `DoubleArrowRightIcon` ([OX-913](https://agile.8x8.com/browse/OX-913))

### @8x8/oxygen-tooltip

#### Changed

- Update `@floating-ui/react-dom-interactions` to 0.13.3 ([OX-912](https://agile.8x8.com/browse/OX-912))
- Disable `blockPointerEvents` from the `Tooltip`'s `safePolygon` ([OX-912](https://agile.8x8.com/browse/OX-912))

## [2.21.0] - 2023-02-06

### @8x8/oxygen-button

#### Changed

- Deprecate `hasShadow` (it's been broken from Oxygen 2.2.0 and only applies in the Classic theme) and clean up related (unused) code ([OX-810](https://agile.8x8.com/browse/OX-810))

#### Added

- Export `buttonGroupAlignment` object with values for the `alignment` prop for `ButtonGroup` ([OX-810](https://agile.8x8.com/browse/OX-810))

### @8x8/oxygen-constants

#### Removed

- Remove unused `Button` theme props: `hasShadow`, `shadowSize`, `shadowColor`, `shadowColorFocusBackground`, `borderColorPrimaryFocus`, `borderColorSecondaryFocus`, `borderColorTertiaryFocus`, `borderColorTertiaryReversedFocus`, `borderColorDestructiveFocus`, `borderColorSuccessFocus` ([OX-810](https://agile.8x8.com/browse/OX-810))

### @8x8/oxygen-date-time-selector

#### Changed

- Remove `e.stopPropagation()` from the click outside handler ([OX-910](https://agile.8x8.com/browse/OX-910))

### @8x8/oxygen-dropdown-button

#### Fixed

- Update `DropdownButton` element type ([OX-809](https://agile.8x8.com/browse/OX-809))

### @8x8/oxygen-select

#### Fixed

- Attempt to fix `react-select` types by using its own types instead of the ones from `@types/react-select` ([OX-889](https://agile.8x8.com/browse/OX-889))

### @8x8/oxygen-static-tooltip

#### Fixed

- Export `TooltipProps` type ([OX-886](https://agile.8x8.com/browse/OX-886))

### @8x8/oxygen-text-link

#### Fixed

- Fix exported `TextLinkProps` type ([OX-806](https://agile.8x8.com/browse/OX-806))

### @8x8/oxygen-tooltip

#### Fixed

- Fix exported `TooltipProps` type, removed recently added types since they are available on `TooltipProps` amd renamed named export `orientations` into `orientation` ([OX-886](https://agile.8x8.com/browse/OX-886))

## [2.20.0] - 2023-01-20

### @8x8/oxygen-constants

#### Added

- Add `IconButton` theme as `iconButton` ([OX-579](https://agile.8x8.com/browse/OX-579))

#### Removed

- Remove `Label` theme props: `iconBackgroundColorHover`, `iconPadding`, `iconMarginLeft` ([OX-579](https://agile.8x8.com/browse/OX-579))
- Remove `TextLink` theme props: `textLinkFontFamily`, `textLinkFontSize`, `textLinkFontWeight`, `textLinkLineHeight` (used only in Classic, now Classic uses the same theme props as Novo, with the Classic values) & `textLinkTransitionTime` (use same value `150ms` across themes) ([OX-806](https://agile.8x8.com/browse/OX-806))

### @8x8/oxygen-icon

#### Added

- Export `IconProps` interface ([OX-884](https://agile.8x8.com/browse/OX-884))

### @8x8/oxygen-icon-button

#### Added

- Add `IconButton` component ([OX-579](https://agile.8x8.com/browse/OX-579))

### @8x8/oxygen-label

#### Changed

- Replace internal icon wrapper with the new `IconButton` component ([OX-579](https://agile.8x8.com/browse/OX-579))
- Simplify some internal rendering logic ([OX-579](https://agile.8x8.com/browse/OX-579))

### @8x8/oxygen-modal

#### Added

- Export `ModalHeaderProps` interface ([OX-808](https://agile.8x8.com/browse/OX-808))

### @8x8/oxygen-static-tooltip

#### Fixed

- Add fix for Email tooltip not displaying the entire information on font size scaling. ([OX-807](https://agile.8x8.com/browse/OX-807))

### @8x8/oxygen-text-link

#### Changed

- `isDisabled` now allows the `TextLink` to be focusable (adds `aria-disabled="true"`), but disables both the regular link (removes `href` and adds `role="link"`) and `onClick` events ([OX-806](https://agile.8x8.com/browse/OX-806))
- Replace theme props `textLinkFontFamily`, `textLinkFontSize`, `textLinkFontWeight`, `textLinkLineHeight` with `fontFamily`, `fontSize`, `fontWeight`, `lineHeight` across themes (Classic had the former, Novo had the latter) ([OX-806](https://agile.8x8.com/browse/OX-806))
- Update Storybook pages to new format with a Documentation page and multiple smaller example pages ([OX-806](https://agile.8x8.com/browse/OX-806))

#### Added

- Add transition time to Novo as well (only existed in Classic) ([OX-806](https://agile.8x8.com/browse/OX-806))
- Add named type export `TextLinkProps` ([OX-806](https://agile.8x8.com/browse/OX-806))

#### Removed

- Remove some react props from bleeding into the DOM & some default attributes (`color`, `aria-disabled="false"`) ([OX-806](https://agile.8x8.com/browse/OX-806))
- Remove theme prop `textLinkTransitionTime` ([OX-806](https://agile.8x8.com/browse/OX-806))
- Remove `TextLinkWrapper` references from readme/docs. This is still exposed, but it has no usage, and we don't want to encourage future usage ([OX-806](https://agile.8x8.com/browse/OX-806))
- Remove some passthrough props from the readme/docs (native `a` attributes such as `target`, `rel` and `styled-components` props: `as` ) ([OX-806](https://agile.8x8.com/browse/OX-806))

### @8x8/oxygen-toast

#### Fixed

- Add missing dependency on @8x8/oxygen-text-link ([OX-887](https://agile.8x8.com/browse/OX-887))

## [2.19.0] - 2022-12-22

### @8x8/oxygen-accordion

#### Added

- Add AccordionItem component as **Alpha** ([OX-701](https://agile.8x8.com/browse/OX-701))

### @8x8/oxygen-badge

#### Changed

- _Deprecate_ size `big` ([OX-766](https://agile.8x8.com/browse/OX-766))
- _Deprecate_ type `secondary` ([OX-766](https://agile.8x8.com/browse/OX-766))
- Update `novo` `small` badge size to `0.75rem` ([OX-766](https://agile.8x8.com/browse/OX-766))
- Update `novo` `big` & `medium` badge size to `1rem` ([OX-766](https://agile.8x8.com/browse/OX-766))

#### Removed

- Remove theme props `borderRadiusBig`, `borderRadiusMedium`, `borderRadiusSmall` ([OX-766](https://agile.8x8.com/browse/OX-766))

### @8x8/oxygen-button

#### Changed

- Allow `Button` to scale vertically based on font-size for accessibility ([OX-767](https://agile.8x8.com/browse/OX-767))

### @8x8/oxygen-calendar

#### Changed

- Allow Calendar to scale based on font-size (both veritcal and horizontal) ([OX-768](https://agile.8x8.com/browse/OX-768))

#### Added

- Add `Calendar` prop `enableMaxWidth` (default `true`) which allows it to scroll internally when the view is larger than the viewport ([OX-768](https://agile.8x8.com/browse/OX-768))

### @8x8/oxygen-config

#### Changed

- Convert `@8x8/oxygen-config` to typescript. Export correct types ([OX-772](https://agile.8x8.com/browse/OX-772))

### @8x8/oxygen-constants

#### Changed

- Convert `@8x8/oxygen-constants` to typescript. Export correct types ([OX-772](https://agile.8x8.com/browse/OX-772))
- Update `Calendar` theme prop `daySize` to be in _rem_ instead of _px_ ([OX-768](https://agile.8x8.com/browse/OX-768))

#### Removed

- Remove `Select` theme prop `optionRowHeight` ([OX-756](https://agile.8x8.com/browse/OX-756))
- Remove `Badge` theme props `borderRadiusBig`, `borderRadiusMedium` ([OX-766](https://agile.8x8.com/browse/OX-766))
- Remove `DateTimeRangeSelector` theme props `listItemHeight`, `listInputHeight`, `dateInputWidth`, `timeInputWidth` ([OX-768](https://agile.8x8.com/browse/OX-768))

### @8x8/oxygen-date-time-base

#### Changed

- Update the input to use `min-height` instead of `height` to allow vertical scaling to better support font-size scaling, applies to `DateTimeSelector` and `DateTimeRangeSelector` ([OX-770](https://agile.8x8.com/browse/OX-770))

### @8x8/oxygen-date-time-range-selector

#### Changed

- Allow `DateTimeRangeSelector` view to scroll internally when its size is larger than the viewport ([OX-768](https://agile.8x8.com/browse/OX-768))
- Update the input (from `DateTimeBase`) to use `min-height` instead of `height` to allow vertical scaling to better support font-size scaling ([OX-770](https://agile.8x8.com/browse/OX-770))

#### Removed

- Remove theme props `listItemHeight`, `listInputHeight`, `dateInputWidth`, `timeInputWidth` ([OX-768](https://agile.8x8.com/browse/OX-768))

### @8x8/oxygen-date-time-selector

#### Changed

- Update the input (from `DateTimeBase`) to use `min-height` instead of `height` to allow vertical scaling to better support font-size scaling ([OX-770](https://agile.8x8.com/browse/OX-770))

### @8x8/oxygen-dropdown-button

#### Changed

- Render the Dropdown menu via a portal under document.body ([OX-745](https://agile.8x8.com/browse/OX-745))

#### Added

- Add prop `renderInPortal` (default `true`) which can be used to disable portal rendering ([OX-745](https://agile.8x8.com/browse/OX-745))

### @8x8/oxygen-icon

#### Changed

- Converted to typescript. There shouldn't be any visible changes. Added exported types Classic icons and util files ([OX-778](https://agile.8x8.com/browse/OX-778))

#### Added

- Add new icons: `ArrowSolidDownIcon`, `ArrowSolidUpIcon`, `FaxIcon`, `InboundInternalCallIcon`, `OutboundInternalCallIcon` ([OX-775](https://agile.8x8.com/browse/OX-775))

### @8x8/oxygen-input

#### Changed

- Change `Input` to use `min-height` instead of `height` to allow vertical scaling to better support font-size scaling ([OX-770](https://agile.8x8.com/browse/OX-770))

### @8x8/oxygen-label

#### Changed

- Simplify Icon Tooltip rendering (removed local state) ([OX-620](https://agile.8x8.com/browse/OX-620))
- Replace Tooltip with Title on Label (to match Action) ([OX-620](https://agile.8x8.com/browse/OX-620))
- Deprecate `infoBoxContainer` prop ([OX-620](https://agile.8x8.com/browse/OX-620))

#### Removed

- Remove custom logic to detect whether the Label content overflows as it didn't work reliably ([OX-620](https://agile.8x8.com/browse/OX-620))

### @8x8/oxygen-select

#### Changed

- Vertically center left icon (with `iconLeft`) & right indicators (clear & arrow) ([OX-756](https://agile.8x8.com/browse/OX-756))
- Update Typography tokens from `body01` to `bulletList01` (only difference is line-height: `1.25rem` => `1.5rem`) ([OX-756](https://agile.8x8.com/browse/OX-756))

#### Added

- Add support for font scaling. `Select` height will scale based on font-size ([OX-756](https://agile.8x8.com/browse/OX-756))
- Add `aria-label` prop to `Select` component, with `labelValue` (fall back to `placeholder`) as value ([OX-756](https://agile.8x8.com/browse/OX-756))

#### Removed

- Remove theme prop `optionRowHeight` (to allow Select to scale vertically based on font size) ([OX-756](https://agile.8x8.com/browse/OX-756))

### @8x8/oxygen-static-tooltip

#### Changed

- Update module to Typescript (needed as dep for Tooltip) ([OX-620](https://agile.8x8.com/browse/OX-620))

### @8x8/oxygen-theme

#### Changed

- Update module to Typescript (needed as dep for Tooltip) ([OX-620](https://agile.8x8.com/browse/OX-620))
- Update `novo` typography `label01` line-height to `1rem` ([OX-766](https://agile.8x8.com/browse/OX-766))

### @8x8/oxygen-time-selector

#### Changed

- Update theme prop `dropdownWidth` to apply as `min-width` instead of `width` ([OX-768](https://agile.8x8.com/browse/OX-768))
- Update selected time to properly scroll into view when the dropdown is opened (only works for selected item, does not scroll to nearest items) ([OX-768](https://agile.8x8.com/browse/OX-768))

### @8x8/oxygen-tooltip

#### Changed

- Replaced `react-popper` with `@floating-ui` https://floating-ui.com/ . This changes the core implementation, adds lots of improvements and fixes some classes of bugs ([OX-620](https://agile.8x8.com/browse/OX-620))
- `triggerRef` now acts as both trigger and floating position reference. Used to only act as floating position reference ([OX-620](https://agile.8x8.com/browse/OX-620))
- Always render via a Portal, eliminates the current need for `renderContainer` usage ([OX-620](https://agile.8x8.com/browse/OX-620))
- When multiple children are passed and no wrapper is used (`includeWrapper: false`) only the first child is used as the trigger & the rest are ignored (used to be the last child) ([OX-620](https://agile.8x8.com/browse/OX-620))
- Update prop `children` default value from `null` to `undefined` ([OX-620](https://agile.8x8.com/browse/OX-620))
- _Deprecate_ `customCloseHandlers` ([OX-620](https://agile.8x8.com/browse/OX-620))
- _Deprecate_ `modifiers` in favor of `offset` ([OX-620](https://agile.8x8.com/browse/OX-620))
- Update module to Typescript ([OX-620](https://agile.8x8.com/browse/OX-620))
- Improve Guidelines page with more examples and updated the Playground page to more correctly define the props ([OX-620](https://agile.8x8.com/browse/OX-620))

#### Added

- Tooltip is also shown on `focus` (when set to show on `hover`) ([OX-620](https://agile.8x8.com/browse/OX-620))
- Tooltip closes on ESC key press ([OX-620](https://agile.8x8.com/browse/OX-620))
- Tooltip remains open while hovering over the floating part, allowing the user to select and interact with the Tooltip content ([OX-620](https://agile.8x8.com/browse/OX-620))
- New prop `offset` (to replace the deprecated `modifiers` prop) ([OX-620](https://agile.8x8.com/browse/OX-620))

#### Removed

- Removed default `modifiers` prop ([OX-620](https://agile.8x8.com/browse/OX-620))

#### Fixed

- Tooltip now rendering correctly even when mouse event coming from the same direction where the Tooltip would open ([OX-743](https://agile.8x8.com/browse/OX-743))
- Update exported `types`: better `types` for `Tooltip` & fixed both `showOnTypes` and `directions` which were inherently wrong ([OX-620](https://agile.8x8.com/browse/OX-620))

### @8x8/oxygen-utils

#### Changed

- Convert `@8x8/oxygen-utils` to typescript. Export correct types ([OX-772](https://agile.8x8.com/browse/OX-772))

## [2.18.0] - 2022-11-25

### @8x8/oxygen-constants

#### Changed

- Update the `fontColorActionDisabled` theme property to use `disabled02` token ([OX-763](https://agile.8x8.com/browse/OX-763))

#### Added

- Add new `fontColorActionHover` theme property ([OX-763](https://agile.8x8.com/browse/OX-763))

### @8x8/oxygen-icon

#### Fixed

- Fix typo, rename `NewOpporunityIcon` into `NewOpportunityIcon` ([OX-764](https://agile.8x8.com/browse/OX-764))

### @8x8/oxygen-label

#### Added

- Add support for keyboard navigation for the action link ([OX-763](https://agile.8x8.com/browse/OX-763))
- Add new theme prop `fontColorActionHover` ([OX-763](https://agile.8x8.com/browse/OX-763))
- Add `aria-disabled` attribute to the action link when it's disabled ([OX-763](https://agile.8x8.com/browse/OX-763))
- Action link is rendered as `button` HTML element, instead of `a`, when the `action` prop is defined ([OX-763](https://agile.8x8.com/browse/OX-763))

## [2.17.0] - 2022-11-21

### @8x8/oxygen-avatar

#### Changed

- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))
- Rename Storybook `Guideline` page to `Guidelines` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Storybook Guidelines to use actions instead of plain console.log ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-badge

#### Changed

- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-breadcrumbs

#### Changed

- Update `uuid` dependency to `9.0.0` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Rename Storybook `Guideline` page to `Guidelines` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-button

#### Changed

- _Deprecate_ theme properties: `marginLeftLarge`, `marginBottomLarge`, `marginLeftSmall`, `marginBottomSmall`. Please use the new theme properties instead `buttonGroupSpacingSmall`, `buttonGroupSpacingLarge` ([OX-742](https://agile.8x8.com/browse/OX-742))
- Rename Storybook `Guideline` page to `Guidelines` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))

#### Added

- Add theme props: `buttonGroupSpacingSmall`, `buttonGroupSpacingLarge` ([OX-742](https://agile.8x8.com/browse/OX-742))

#### Removed

- Remove `ButtonGroup` prop values: `big`, `medium` ([OX-742](https://agile.8x8.com/browse/OX-742))
- Remove `ButtonGroup` props: `hasHorizontalSpacing`, `hasVerticalSpacing` ([OX-742](https://agile.8x8.com/browse/OX-742))

#### Fixed

- Fix button positioning in button group at smaller resolution ([OX-742](https://agile.8x8.com/browse/OX-742))

### @8x8/oxygen-calendar

#### Changed

- Update `date-fns` dependency to `2.29.3` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update `memoize-one` dependency to `6.0.0` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Rename Storybook `Guideline` page to `Guidelines` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-card

#### Changed

- Update `uuid` dependency to `9.0.0` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-checkbox

#### Changed

- Rename Storybook `Guideline` page to `Guidelines` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update `react` dev dependency to `17.0.2` ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-config

#### Changed

- Update `hoist-non-react-statics` dependency to `3.3.2` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Renamed `Playground` doc page to `Guidelines` ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-constants

#### Changed

- _Deprecate_ Button theme properties: `marginLeftLarge`, `marginBottomLarge`, `marginLeftSmall`, `marginBottomSmall`, please use new theme properties instead `buttonGroupSpacingSmall`, `buttonGroupSpacingLarge` ([OX-742](https://agile.8x8.com/browse/OX-742))

#### Added

- Add Button theme properties: `buttonGroupSpacingSmall`, `buttonGroupSpacingLarge` ([OX-742](https://agile.8x8.com/browse/OX-742))
- Update `polished` dependency to `4.2.2` ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-context-menu

#### Changed

- Update `pubsub-js` dependency to `1.9.4` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Rename Storybook component page from `Context Menu` to `ContextMenu` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-date-time-base

#### Changed

- Update `polished` peerDependency to `4.2.2` ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-date-time-range-selector

#### Changed

- Update `date-fns` dependency to `2.29.3` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update `polished` dependency to `4.2.2` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Rename Storybook page from `Date Time Range Selector` to `DateTimeRangeSelector` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))

#### Removed

- Remove `memoize-one` dependency (not used) ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-date-time-selector

#### Changed

- Update `date-fns` dependency to `2.29.3` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update `polished` dependency to `4.2.2` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Rename Storybook page from `Date Time Selector` to `DateTimeSelector` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-dropdown-button

#### Changed

- Rename Storybook page from `Dropdown Button` to `DropdownButton` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Rename Storybook `Guideline` page to `Guidelines` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-event-card

#### Changed

- Rename Storybook `Guideline` page to `Guidelines` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-graphics

#### Changed

- Rename Storybook `Guideline` page to `Guidelines` & update incorrect page title ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-icon

#### Changed

- Update devDependencies `recursive-readdir` to `2.2.3` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update devDependency `svgo` to `3.0.0` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update SVGO usage to match new API (used by the `yarn generate:svg:components` script) ([OX-744](https://agile.8x8.com/browse/OX-744))
- Remove extra SVGO plugins config (most are part of the default preset) https://github.com/svg/svgo#default-preset ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update builder script to mjs ([OX-744](https://agile.8x8.com/browse/OX-744))
- Rename Storybook `Guideline` page to `Guidelines` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Guidelines remove `link` prop from Icon components ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Playground page & keep a single one (no need to duplicate between Classic and Noco icons) ([OX-744](https://agile.8x8.com/browse/OX-744))

#### Added

- Add new icons under the `Novo` iconSet: `AddReactionIcon`, `BlockNumberPhoneIcon`, `BlockSmsIcon`, `BlockquoteIcon`, `CodeBlockIcon`, `CodeIcon`, `DocumentFileIcon`, `EraserIcon`, `MarkUnreadIcon`, `MessageInboundIcon`, `MessageOutboundIcon`, `RefreshIcon`, `SmsOutboundIcon`, `StrikethroughIcon`, `UnblockNumberPhoneIcon`, `UnblockSmsIcon` ([OX-747](https://agile.8x8.com/browse/OX-747))

#### Removed

- Removed devDependencies: `fs-extra` ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-input

#### Changed

- Update `styled-tools` to `1.7.2` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-label

#### Changed

- Rename Storybook `Guideline` page to `Guidelines` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))

#### Fixed

- Improve label text wrapping for single-long phrases ([OX-740](https://agile.8x8.com/browse/OX-740))
- Add ellipsis to long ActionLink text and support title attribute ([OX-641](https://agile.8x8.com/browse/OX-641))

### @8x8/oxygen-list

#### Changed

- Rename Storybook `Guideline` page to `Guidelines` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-loaders

#### Changed

- Update Storybook Playground (for both `ProgressBar` and `Spinner`) ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-milestone-tracker

#### Changed

- Rename Storybook `Guideline` page to `Guidelines` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Rename Storybook page title from `Milestone Tracker` to `MilestoneTracker` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-modal

#### Changed

- Update `focus-trap-react` to `10.0.0` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update `lodash.isfunction` to `3.0.9` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update `polished` to `4.2.2` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-overlay

#### Changed

- Update `polished` dependency to `4.2.2` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Rename Storybook `Guideline` page to `Guidelines` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-radio

#### Changed

- Rename Storybook `Guideline` page to `Guidelines` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-select

#### Changed

- Update `react-select` dependency to `5.6.0` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update `react-window` dependeny to `1.8.8` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update `polished` dependency to `4.2.2` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))

#### Fixed

- Fix a bug where the testId from passed to the `Select` component was not being applied to the `Tag` component & to the custom wrapper around the Tag value ([OX-761](https://agile.8x8.com/browse/OX-761))

### @8x8/oxygen-slide-out

#### Changed

- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-slider

#### Changed

- Rename Storybook `Guideline` page to `Guidelines` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-static-tooltip

#### Changed

- Rename Storybook page title from `Static Tooltip` to `StaticTooltip` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Rename Storybook `Guideline` page to `Guidelines` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-switch-base

#### Changed

- Update `uuid` dependency to `9.0.0` ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-table

#### Changed

- Rename Storybook `Guideline` page to `Guidelines` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-tabs

#### Changed

- Update `styled-tools` dependency to `1.7.2` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Rename Storybook `Guideline` page to `Guidelines` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-tag

#### Changed

- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Guidelines page to use `action` instead of `console.log` ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-text-field

#### Changed

- Rename Storybook `Guideline` page to `Guidelines` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-text-link

#### Changed

- Update `styled-tools` dependency to `1.7.2` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Rename Storybook `Guideline` page to `Guidelines` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-textarea

#### Changed

- Rename Storybook `Guideline` page to `Guidelines` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-theme

#### Changed

- Update `novo` token for `ui07` from `gray02` to `gray01` ([OX-556](https://agile.8x8.com/browse/OX-556))
- Update `novo` token for `icon07` from `gray06` to `gray05` ([OX-556](https://agile.8x8.com/browse/OX-556))
- Update `novoDark` token for `hover05` from `gray08` to `gray03` ([OX-556](https://agile.8x8.com/browse/OX-556))
- Update `novoDark` token for `hover06` from `gray03` to `gray05` ([OX-556](https://agile.8x8.com/browse/OX-556))

### @8x8/oxygen-time-selector

#### Changed

- Update `date-fns` dependency to `2.29.3` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update `memoize-one` dependency to `6.0.0` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update `polished` dependency to `4.2.2` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Rename Storybook `Guideline` page to `Guidelines` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Rename Storybook page from `Time Selector` to `TimeSelector` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-toast

#### Changed

- Update `react-pose` dependency to `4.0.10` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update `uuid` dependency to `9.0.0` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-toaster

#### Changed

- Update `pubsub-js` dependency to `1.9.4` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update `react-pose` dependency to `4.0.10` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update `uuid` dependency to `9.0.0` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-toggle-button

#### Changed

- Rename Storybook `Guideline` page to `Guidelines` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-tooltip

#### Changed

- Update Storybook Guildeline page to use `action` instead of `console.log` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Rename Storybook `Guideline` page to `Guidelines` ([OX-744](https://agile.8x8.com/browse/OX-744))
- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-typography

#### Changed

- Update Storybook Playground ([OX-744](https://agile.8x8.com/browse/OX-744))

### @8x8/oxygen-user-status

#### Changed

- Rename Storybook `Guideline` page to `Guidelines` ([OX-744](https://agile.8x8.com/browse/OX-744))

## [2.16.1] - 2022-10-27

### @8x8/oxygen-static-tooltip

#### Changed

- Revert [OX-388](https://agile.8x8.com/browse/OX-388) caused issues that might crash Tooltip consumers ([OX-741](https://agile.8x8.com/browse/OX-741))

### @8x8/oxygen-tooltip

#### Changed

- Revert [OX-388](https://agile.8x8.com/browse/OX-388) caused issues that might crash Tooltip consumers ([OX-741](https://agile.8x8.com/browse/OX-741))

## [2.16.0] - 2022-10-21

### @8x8/oxygen-avatar

#### Changed

- Update statusBorderColor for `available` and `onDirectCall` to `green04`'s value ([OX-737](https://agile.8x8.com/browse/OX-737))

#### Added

- Add support for custom size in px, specified as `number` (does not allow `UserStatus` or `EditOverlay` in this mode ([OX-711](https://agile.8x8.com/browse/OX-711))

### @8x8/oxygen-constants

#### Added

- Add `Tag` component theme properties: `backgroundVariantBlue`, `backgroundVariantDark`, `backgroundVariantLight`, `backgroundVariantYellow`, `textColorVariantBlue`, `textColorVariantDark`, `textColorVariantLight`, `textColorVariantYellow` ([OX-711](https://agile.8x8.com/browse/OX-711))

#### Removed

- Remove `Select` theme properties: `multiValueChipBackgroundColor`, `multiValueChipBorderRadius`, `multiValueChipCloseIconChipHoveredColor`, `multiValueChipCloseIconColor`, `multiValueChipCloseIconHoveredColor`, `multiValueChipFontSize`, `multiValueChipHoveredBackgroundColor`, `multiValueChipHoveredTextColor`, `multiValueChipMarginRight`, `multiValueChipPaddingLeft`, `multiValueChipPaddingRight`, `multiValueChipTextColor`

### @8x8/oxygen-icon

#### Added

- Add new icons under the `Novo` iconSet: `DatabaseIcon`, `HomeIcon`, `IvrIcon`, `RefreshIcon`, `WrapUpIcon` ([OX-739](https://agile.8x8.com/browse/OX-739))

### @8x8/oxygen-modal

#### Changed

- Update default align from `left` to `right` ([OX-734](https://agile.8x8.com/browse/OX-734))

#### Fixed

- Wrapping buttons in the modal footer ([OX-734](https://agile.8x8.com/browse/OX-734))

### @8x8/oxygen-select

#### Changed

- Adjust the height for the `small` size to start from `32px` according to the design system ([OX-711](https://agile.8x8.com/browse/OX-711))
- Replace the `MultiValueChip` component with the new `Tag` component ([OX-711](https://agile.8x8.com/browse/OX-711))

#### Removed

- Remove now unused theme props: `multiValueChipBackgroundColor`, `multiValueChipBorderRadius`, `multiValueChipCloseIconChipHoveredColor`, `multiValueChipCloseIconColor`, `multiValueChipCloseIconHoveredColor`, `multiValueChipFontSize`, `multiValueChipHoveredBackgroundColor`, `multiValueChipHoveredTextColor`, `multiValueChipMarginRight`, `multiValueChipPaddingLeft`, `multiValueChipPaddingRight`, `multiValueChipTextColor`

### @8x8/oxygen-static-tooltip

#### Added

- Add prop `forwardedRef` from withTheme ([OX-388](https://agile.8x8.com/browse/OX-388))

### @8x8/oxygen-tag

#### Added

- Add new Tag component ([OX-711](https://agile.8x8.com/browse/OX-711))

### @8x8/oxygen-theme

#### Changed

- Update font-size and line-height tokens from `px` to `rem` units. Should not affect existing usage (on default browser font-size of 16px) — but is the first step in Oxygen supporting a11y font-size adjustments ([OX-711](https://agile.8x8.com/browse/OX-711))
- Update `success01` from `green05` to `green04` ([OX-737](https://agile.8x8.com/browse/OX-737))

#### Added

- Add `bulletList01` typography tokens ([OX-738](https://agile.8x8.com/browse/OX-738))

### @8x8/oxygen-tooltip

#### Fixed

- Fix tooltip dissapearing when mouse enters tooltip area, also fixes tooltip sometimes not showing when moving mouse between two elements with Tootlip ([OX-388](https://agile.8x8.com/browse/OX-388))

### @8x8/oxygen-user-status

#### Changed

- Update `Available` (and `OnDirectCall`) main color to `green04`'s value ([OX-737](https://agile.8x8.com/browse/OX-737))

### @8x8/oxygen-utils

#### Added

- Add `useFontSize` hook to transform a `rem` into a `px` value based on the root html font-size property ([OX-711](https://agile.8x8.com/browse/OX-711))

## [2.15.1] - 2022-10-12

### @8x8/oxygen-modal

#### Fixed

- Updates exported modal types to include `buttonCloseRef` ([OX-733](https://agile.8x8.com/browse/OX-733))

## [2.15.0] - 2022-10-12

### @8x8/oxygen-avatar

#### Added

- Add new Avatar prop `userPresenceBorder` to show a border coresponding to user's presence status around the avatar (default `false`)
- Add new Avatar prop `isActive` to force showing the focus border (default `false`) ([OX-667](https://agile.8x8.com/browse/OX-667))
- Add new Avatar focus and hover state, active when an onClick function is present ([OX-667](https://agile.8x8.com/browse/OX-667))

### @8x8/oxygen-constants

#### Added

- Add Theme properties: `headerIconColorActive`, `headerIconColorFocus`, `headerIconBackgroundActive`, `headerIconBackgroundFocus`, `headerIconBackgroundHover`, `headerIconBorderFocus` ([OX-418](https://agile.8x8.com/browse/OX-418))
- Add Theme properties: `hoverOverlayColor`, `focusBorderColor`, `innerBorderColor` ([OX-667](https://agile.8x8.com/browse/OX-667))

### @8x8/oxygen-icon

#### Changed

- Update `HanshakeIcon` with new design ([OX-732](https://agile.8x8.com/browse/OX-732))

### @8x8/oxygen-modal

#### Changed

- Update styles for the close button in ModalHeader ([OX-418](https://agile.8x8.com/browse/OX-418))

#### Added

- Add props `buttonCloseRef` to ModalHeader ([OX-418](https://agile.8x8.com/browse/OX-418))

### @8x8/oxygen-theme

#### Changed

- Update `novo` token for `active05` from `gray05` to `gray09` ([OX-418](https://agile.8x8.com/browse/OX-418))
- Update `novoDark` token for `active05` from `gray07` to `ray05` ([OX-418](https://agile.8x8.com/browse/OX-418))

## [2.14.0] - 2022-10-03

### @8x8/oxygen-event-card

#### Added

- Add `testId` attributes for `Icon`, `Title`, `Text` ([OX-726](https://agile.8x8.com/browse/OX-726))

### @8x8/oxygen-modal

#### Added

- Add `ModalPortal` optional prop `initialFocus` specifies the element to receive initial focus ([OX-670](https://agile.8x8.com/browse/OX-670))

### @8x8/oxygen-select

#### Changed

- Allow React 18 to be used as peer dependency ([OX-738](https://agile.8x8.com/browse/OX-738))

#### Added

- Add prop `isCreatable` (Boolean), see https://react-select.com/creatable for usage ([OX-713](https://agile.8x8.com/browse/OX-713))

#### Fixed

- `forwardedRef` now correctly contains a ref of the underlying Select component ([OX-713](https://agile.8x8.com/browse/OX-713))
- `menuPlacement="auto"` no longer breaks `maxHeight` when opening vertically ([OX-713](https://agile.8x8.com/browse/OX-713))
- when a multi select is disabled selected values no longer have the clear icon and removing them is no longer possible ([OX-713](https://agile.8x8.com/browse/OX-713))

## [2.13.0] - 2022-09-20

### @8x8/oxygen-constants

#### Added

- Add theme property `modalOffsetMinimal` ([OX-710](https://agile.8x8.com/browse/OX-710))

#### Removed

- Remove the `maxHeight` theme property ([OX-710](https://agile.8x8.com/browse/OX-710))

### @8x8/oxygen-modal

#### Added

- Add theme property `modalOffsetMinimal` ([OX-710](https://agile.8x8.com/browse/OX-710))

#### Removed

- Remove `maxHeight` theme property ([OX-710](https://agile.8x8.com/browse/OX-710))

## [2.12.0] - 2022-08-29

### @8x8/oxygen-constants

#### Added

- Add new theme prop `backgroundComplete` for the `ProgressBar` (`loader`) component ([OX-705](https://agile.8x8.com/browse/OX-705))

### @8x8/oxygen-icon

#### Added

- Add new icons under the `Novo` iconSet: `EnterIcon` ([OX-702](https://agile.8x8.com/browse/OX-702))

### @8x8/oxygen-loaders

#### Changed

- ProgressBar now renders with a green color when value at 100 ([OX-705](https://agile.8x8.com/browse/OX-705))

### @8x8/oxygen-select

#### Added

- Add `testId` support for the `MultiValue` component (Chip and Chip removal) ([OX-707](https://agile.8x8.com/browse/OX-707))

## [2.11.0] - 2022-08-16

### @8x8/oxygen-avatar

#### Added

- Add new Avatar prop `maxInitials` to control how many initials are shown (default `2`) ([OX-698](https://agile.8x8.com/browse/OX-698))
- Add new Avatar prop `hasBorder` to control whether to render a border around the Avatar (default `false`) ([OX-698](https://agile.8x8.com/browse/OX-698))
- Add new AvatarStack component ([OX-698](https://agile.8x8.com/browse/OX-698))

### @8x8/oxygen-card

#### Added

- Add `cardNovo` and `cardNovoDark` themes ([OX-686](https://agile.8x8.com/browse/OX-686))

### @8x8/oxygen-constants

#### Added

- Add new theme prop for `avatar`: `borderColor` ([OX-698](https://agile.8x8.com/browse/OX-698))
- Add new component `avatarStack` with theme props: `backgroundHover`, `borderColorHover`, `borderColorFocus`, `counterBackground`, `counterColor` ([OX-698](https://agile.8x8.com/browse/OX-698))
- Add new component `eventCard` with theme props:, `background`, `backgroundHover`, `borderColor`, `borderFocusColor`, `gap`, `iconBackground`, `iconColor`, `shadow`, `text`, `textColor`, `title`, `titleColor` ([OX-698](https://agile.8x8.com/browse/OX-698))

### @8x8/oxygen-event-card

#### Added

- Add new `EventCard` component ([OX-698](https://agile.8x8.com/browse/OX-698))

### @8x8/oxygen-icon

#### Added

- Add new icons under the `Novo` iconSet: `CloudUnsyncedIcon`, `ListenIcon` ([OX-700](https://agile.8x8.com/browse/OX-700))

### @8x8/oxygen-tabs

#### Added

- Update styling for focus state using new property `tabGap` and added a wrapper component to better control the text overflow in the tabItem ([OX-694](https://agile.8x8.com/browse/OX-694))

## [2.10.0] - 2022-08-08

### @8x8/oxygen-date-time-range-selector

#### Changed

- Update default start and end time for the selector (when no date range or predefined range is selected) is the beginning and the end time of the day (hours and minutes). _Note_: Previously it was set by default for both start and end time the current hour and minute. ([OX-690](https://agile.8x8.com/browse/OX-690))

### @8x8/oxygen-static-tooltip

#### Changed

- Update Tooltip `backgroundColor` with proper token `ui10` ([OX-688](https://agile.8x8.com/browse/OX-688))
- Update Tooltip `color` with proper token `textColor06` ([OX-688](https://agile.8x8.com/browse/OX-688))

### @8x8/oxygen-switch-base

#### Changed

- Pass `testId` unprocessed to `SwtichBaseInput` (it will be processed inside of input component)

#### Fixed

- Make `name` prop optional ([OX-681](https://agile.8x8.com/browse/OX-681))

### @8x8/oxygen-theme

#### Added

- Add new `novo` theme tokens: `icon08`, `textColor07`, `ui10` ([OX-688](https://agile.8x8.com/browse/OX-688), [OX-695](https://agile.8x8.com/browse/OX-695))
- Add new `novoDark` theme tokens: `icon08`, `textColor07`, `ui10` [OX-688](https://agile.8x8.com/browse/OX-688), [OX-695](https://agile.8x8.com/browse/OX-695)

## [2.9.0] - 2022-07-13

### @8x8/oxygen-constants

#### Changed

- Select theme prop `valueContainerPadding` changed to contain full padding value instead of just horizontal ([OX-659](https://agile.8x8.com/browse/OX-659))
- Update Select theme props for Novo: `lineHeight` (to have a different value than Classic) & `placeholderTextColor` ([OX-659](https://agile.8x8.com/browse/OX-659))
- Update Select Icon positioning: `iconHeight`, `iconMargin`, `iconPaddingRight` ([OX-659](https://agile.8x8.com/browse/OX-659))
- Update Select multi select chip design: `multiValueChipBackgroundColor`, `multiValueChipCloseIconChipHoveredColor`, `multiValueChipCloseIconColor`, `multiValueChipCloseIconHoveredColor`, `multiValueChipHoveredBackgroundColor`, `multiValueChipHoveredTextColor`, `multiValueChipPaddingRight`, `multiValueChipPaddingVerticalSmall`, `multiValueChipTextColor` ([OX-659](https://agile.8x8.com/browse/OX-659))

#### Removed

- Remove Select theme prop `multiValueChipWrapperMargin` — not used with the updated design anymore ([OX-659](https://agile.8x8.com/browse/OX-659))

### @8x8/oxygen-icon

#### Changed

- The _builder.js_ script to also generate `*.d.ts` for the `Novo` iconSet ([OX-679](https://agile.8x8.com/browse/OX-679))

#### Added

- Add Icon typings files for the `Novo` iconSet ([OX-679](https://agile.8x8.com/browse/OX-679))

### @8x8/oxygen-select

#### Changed

- Update `react-select` dependency updated to latest (`5.4.0`) & removed dep on `@types/react-select` since `react-select` now exports its own types ([OX-659](https://agile.8x8.com/browse/OX-659))
- `valueContainerPadding` theme prop is now applied as the complete `padding` CSS rule (previously it was only applying as horizontal padding) ([OX-659](https://agile.8x8.com/browse/OX-659))
- Update default value for `multiValueChipPaddingRight` (reduced padding) ([OX-659](https://agile.8x8.com/browse/OX-659))

#### Added

- Add prop `isAsync` (Boolean). Expects a `loadOptions` prop instead of `options` see https://react-select.com/async for usage ([OX-659](https://agile.8x8.com/browse/OX-659))
- Add prop `multipleSelectMaxRows` (Number). Default `1`. Only works together with `isMulti`. If a larger number than 1 the Select component will grow in height to accomodate the specified number of rows and render a scrollbar when the number of rows is exceeded ([OX-659](https://agile.8x8.com/browse/OX-659))
- Add new examples under Select > Guidelines ([OX-659](https://agile.8x8.com/browse/OX-659))
- Add Novo default theme props to accomodate updated design (Chip & placeholder colors) ([OX-659](https://agile.8x8.com/browse/OX-659))

#### Removed

- Remove theme prop `multiValueChipWrapperMargin` ([OX-659](https://agile.8x8.com/browse/OX-659))

#### Fixed

- Fix Novo Dark theme Clear indicator colors (were not visible before) ([OX-659](https://agile.8x8.com/browse/OX-659))

## [2.8.0] - 2022-07-11

### @8x8/oxygen-checkbox

#### Added

- Multi-line examples to guidelines

### @8x8/oxygen-constants

#### Fixed

- Update Toast `boxShadow` with proper token `shadow01` ([OX-674](https://agile.8x8.com/browse/OX-674))
- Update Toast novo `toastSmall` width to be `330px` ([OX-674](https://agile.8x8.com/browse/OX-674))
- Fix typo Toast for `boxShadow` prop which made the shadow CSS be invalid ([OX-674](https://agile.8x8.com/browse/OX-674))

### @8x8/oxygen-icon

#### Added

- Add new icons under the `Novo` iconSet: `CloudSyncSuccessIcon`, `CloudSyncFailIcon` ([OX-671](https://agile.8x8.com/browse/OX-671))

### @8x8/oxygen-modal

#### Added

- Add prop `shouldUseFocusTrap` that turns on / off focus trap for modal ([OX-634](https://agile.8x8.com/browse/OX-634))

### @8x8/oxygen-radio

#### Changed

- Align label and input to flex-start of container
- Align RadioGroup items to start of container (vertically)

#### Added

- Add Multi-line examples to guidelines

### @8x8/oxygen-switch-base

#### Changed

- Add cursor type "pointer" on label
- Vertical-align label to centre of input
- SwitchBaseGroup items are aligned to start of container

### @8x8/oxygen-toggle-button

#### Added

- Add Multi-line examples to guidelines

## [2.7.0] - 2022-07-01

### @8x8/oxygen-dropdown-button

#### Added

- Add `forwardedRef` prop to link external ref to button ([OX-665](https://agile.8x8.com/browse/OX-665))

### @8x8/oxygen-icon

#### Changed

- Update `HandshakeIcon` (new design) ([OX-668](https://agile.8x8.com/browse/OX-668))

#### Added

- Add new icons under the `Novo` iconSet: `ReplyAllIcon`, `ReplyIcon`, `RingGroupIcon`, `SortIcon` ([OX-668](https://agile.8x8.com/browse/OX-668))

### @8x8/oxygen-radio

#### Changed

- Update focus state style for radio icon in order to be more visible (novo theme only) ([OX-575](https://agile.8x8.com/browse/OX-575))

### @8x8/oxygen-select

#### Added

- Add prop `forwardedRef` to link external ref to react-select ([OX-666](https://agile.8x8.com/browse/OX-666))
- Add hook `useImperativeHandle` to provide an override of `forwardedRef` `.focus()` specific to `react-select` ([OX-666](https://agile.8x8.com/browse/OX-666))

## [2.6.1] - 2022-06-27

### @8x8/oxygen-icon

#### Fixed

- Fix Storybook Page issue where `Label` is not found ([OX-660](https://agile.8x8.com/browse/OX-660))

## [2.6.0] - 2022-06-23

### @8x8/oxygen-button

#### Fixed

- Forward the ref property to CircularButton

### @8x8/oxygen-constants

#### Changed

- Update theme properties `borderWidthReadOnly`, `borderColorReadOnly` for Input, Textarea components in novo theme

#### Added

- Add theme properties for Input component: `horizontalSpacingReadOnly`
- Add theme properties for Textarea component: `textareaPaddingReadOnly`

#### Fixed

- `checkboxSize` in checkbox constants Novo theme to use px units
- `iconSize` in radio constants Novo theme to use px units

### @8x8/oxygen-input

#### Changed

- Read-only state for novo theme

### @8x8/oxygen-textarea

#### Changed

- Update read-only state for novo theme

## [2.5.0] - 2022-06-10

### @8x8/oxygen-constants

#### Added

- Add `Label` theme prop `borderSizeFocus`. Sets the border thickness on focus state
- Add `Label` theme prop `borderColorFocus`. Sets the background on coloron focus state
- Add `Label` theme prop `iconPadding`. Sets the spacing in the info icon
- Add `Label` theme prop `actionLinkPaddingHorizontal`. Sets the horizontalspacing in the action
- Add `Label` theme prop `actionLinkPaddingVertical`. Sets the verticalspacing in the action
- Add `Label` theme prop `iconBackgroundColorHover`. Sets the backgroundcolor on hover state in the icon
- Add `Label` theme prop `transitionTime`. Sets the time for csstransitions

### @8x8/oxygen-icon

#### Added

- Add new icons under the _Novo_ iconSet: `PinFilledIcon`

### @8x8/oxygen-label

#### Added

- Add prop `infoBoxContainer` which is passed down to the info `Tooltip`
- Add support for keyboard navigation according to WCAG requirements
- Add theme props: `borderSizeFocus`, `borderColorFocus`, `iconPadding`, `actionLinkPaddingHorizontal`, `actionLinkPaddingVertical`, `iconBackgroundColorHover`

### @8x8/oxygen-theme

#### Changed

- Update `novo` token `hover05` from `gray06` to `gray10`
- Update `novoDark` token `hover05` from `colorGray08` to `colorGray03`

#### Added

- Add new `novo` theme token: `ui09` (for future `Tag` component variant) ([OX-642](https://agile.8x8.com/browse/OX-642))

## [2.4.0] - 2022-05-30

### @8x8/oxygen-button

#### Added

- Add `tertiaryReversed` button variant

### @8x8/oxygen-constants

#### Added

- Add New theme properties for TextLink component: `textLinkPadding`, `textLinkBorderWidthFocus`, `textLinkBorderRadiusFocus`, `textLinkShadowColorFocus`

### @8x8/oxygen-text-link

#### Changed

- Update focus UI for the TextLink component

### @8x8/oxygen-theme

#### Changed

- Fix inconsitency of `shadow01` token color - now using `gray01` instead of `gray02`

#### Added

- Add new `novo` theme shadow tokens: `shadowLow`, `shadowMedium`, `shadowHigh` based on token `shadow01`. To be used on `box-shadow` CSS properties of elements
- Add new `novo` theme tokens: `icon07`, `hover09` & `active09` (tertiary buttons on reverse backgrounds)

## [2.3.1] - 2022-05-19

### @8x8/oxygen-breadcrumbs

#### Changed

- Update `styled-components` peerDep to be in sync with the rest of the oxygen components

### @8x8/oxygen-constants

#### Fixed

- Correctly specify a peer dependency on `styled-components`

### @8x8/oxygen-date-time-base

#### Removed

- Remove `styled-components` as a devDep as this is included in the root package.json file

## [2.3.0] - 2022-05-17

### @8x8/oxygen-constants

#### Changed

- Update Novo & Novo Dark input decision for `height` from `32px` to `40px`
- Update Novo & Novo Dark input decision for `heightSmall` from `28px` to `32px`

#### Added

- Add `onDirectCall` value in avatarUserStatus
- Add `textColorFocus` theme property, sets the text color on focus state
- Add `tabBorderColorFocus` theme property, sets the border color on focus state
- Add `tabBackgroundFocus` theme property, sets the background on color on focus state
- Add `tabBorderSizeFocus` theme property, sets the border thickness on focus state

### @8x8/oxygen-tabs

#### Added

- Update styling for focus state on TabItem in Novo (surrounding border) using new theme properties: `textColorFocus`, `tabBorderColorFocus`, `tabBackgroundFocus`, `tabBorderSizeFocus`

### @8x8/oxygen-user-status

#### Added

- Add `OnDirectCall` status icon

## [2.2.0] - 2022-05-10

### @8x8/oxygen-button

#### Changed

- Replace button borders with shadows to improve its interaction with focus styling

### @8x8/oxygen-checkbox

#### Changed

- checkbox icon color not to change on focus

#### Added

- Add focus state border/shadow styling

#### Removed

- Remove unused properties from the classic theme
- Remove border color change on hover (novo)

### @8x8/oxygen-constants

#### Changed

- _Deprecate_ `backgroundColorFocus` theme property, use `outlineColorFocus`

#### Added

- Add `outlineColorFocus` theme property, represents new focus state

#### Removed

- Remove `backgroundColorHover` theme property for toggle button component

### @8x8/oxygen-icon

#### Added

- Add new icons under the _Novo_ iconSet: `HandshakeIcon`, `BlockNumberIcon`, `CloudSyncIcon`, `PinIcon`, `UnblockNumberIcon`

### @8x8/oxygen-select

#### Fixed

- Placeholder in Select is wrapped with ellipses

### @8x8/oxygen-theme

#### Changed

- Update `novoDark` token `focus01` value

#### Added

- Add new `novo` theme token `ui08` (Subtle border on high contrast background)

### @8x8/oxygen-toggle-button

#### Changed

- Update focus and hover state according to design,
- _Deprecate_ prop `isIndeterminate`
- _Deprecate_ theme prop `backgroundColorFocus`, use `outlineColorFocus`

#### Added

- Add animation to toggle knob

#### Removed

- Remove theme prop `backgroundColorHover`

## [2.1.0] - 2022-03-31

### @8x8/oxygen-button

#### Changed

- Typescript: `theme` prop is now optional

#### Fixed

- Typescript: missing `buttonVariant` and `buttonSize` export

### @8x8/oxygen-constants

#### Added

- Typescript: Add missing types `info`, `warning`.
- Typescript: Export `toastSizes` and `toastTypes`

### @8x8/oxygen-date-time-range-selector

#### Changed

- Typescript: `theme` prop is now optional.
- Typescript: `id` prop.
- Typescript: `hasError` prop.
- Typescript: `fromLabel` prop.
- Typescript: `startTimeLabel` prop.
- Typescript: `toLabel` prop.
- Typescript: `endTimeLabel` prop.
- Typescript: `customPredefinedRangeLabel` prop.
- Typescript: `locale` prop.

### @8x8/oxygen-dropdown-button

#### Changed

- Typescript: `indicatorIcon` prop is now optional.
- Typescript: `theme` prop is now optional.

### @8x8/oxygen-icon

#### Added

- Add new icons under the _Novo_ iconSet: `AnnounceIcon`, `ArchiveIcon`, `ArrowDiagonalLeftDownIcon`, `ArrowDiagonalRightUpIcon`, `ArrowFirstIcon`, `ArrowLastIcon`, `BestFitIcon`, `Forward10Icon`, `ResetIcon`, `Rewind10Icon`, `TranscriptIcon`, `VideoSlashIcon`

### @8x8/oxygen-input

#### Changed

- Typescript: `theme` prop is now optional
- Update documentation: `large` size variant

#### Added

- Typescript: `className` prop
- Typescript: `forwardedRef` prop

### @8x8/oxygen-list

#### Changed

- Typescript: `theme` prop is now optional.

### @8x8/oxygen-loaders

#### Changed

- Typescript: `theme` prop is now optional.

### @8x8/oxygen-modal

#### Changed

- Typescript: ModalFooter: `theme` prop is now optional.

#### Added

- Typescript: ModalHeader: `iconCloseTitle` prop.

### @8x8/oxygen-overlay

#### Added

- Typescript: Add definition file.

### @8x8/oxygen-select

#### Added

- Typescript: `large` size variant to `size` prop.
- Typescript: `defaultValue` prop.
- Typescript: `onChange` prop.
- Typescript: `hasShortMultiDisplay` prop.

### @8x8/oxygen-tabs

#### Changed

- Typescript: `theme` prop is now optional.

### @8x8/oxygen-text-link

#### Added

- Typescript: `className` prop.

### @8x8/oxygen-textarea

#### Changed

- Typescript: `theme` prop is now optional
- Typescript: `forwardedRef` prop is now optional
- Typescript: `onChange` signature

### @8x8/oxygen-theme

#### Changed

- Update `novo` token `action03` => `action06`
- Update `novo` token `destructive01` => `action03`
- Update `novo` token `uiBackground01` => `ui06`
- Update `novo` token `uiBackground02` => `ui07`
- Update `novo` token `text01` => `textColor01`
- Update `novo` token `text02` => `textColor02`
- Update `novo` token `text04` => `textColor04`
- Update `novo` token `text05` => `textColor05`
- Update `novo` token `text06` => `textColor06`
- Update `novo` token `shadow` => `shadow01`
- Update `novo` token `overlay` => `overlay01`
- Update `novo` token `prodHeading01` => `heading01`
- Update `novo` token `prodHeading02` => `heading02`

#### Added

- Add theme typescript interface
- Export default theme object with `novo` and `novoDark` themes & `novoColorPalette` (the base colors from https://zeroheight.com/714056d2f/p/596af8-colors/b/24f2eb )

#### Removed

- Remove `novo` token `text03`
- Remove `novo` token `timingXslow`
- Remove `novo` token `timingSlow`
- Remove `novo` token `timingMedium`
- Remove `novo` token `timingFast`
- Remove `novo` token `timingXfast`
- Remove `novo` token `iconSizeXS`
- Remove `novo` token `iconSizeS`
- Remove `novo` token `iconSizeM`
- Remove `novo` token `iconSizeL`
- Remove `novo` token `spinnerSizeS`
- Remove `novo` token `spinnerSizeM`
- Remove `novo` token `spinnerSizeL`
- Remove `novo` token `progressSizeS`
- Remove `novo` token `progressSizeM`
- Remove `novo` token `progressSizeL`
- Remove `novo` token `buttonHeightSmall`
- Remove `novo` token `buttonHeightMedium`
- Remove `novo` token `buttonHeightLarge`
- Remove `novo` token `inputHeightSmall`
- Remove `novo` token `inputHeightMedium`

### @8x8/oxygen-toast

#### Changed

- Typescript: `theme` prop is now optional
- Typescript: `action` prop `callback` is now a method
- Typescript: `action` prop `id` is now required

#### Added

- Add Typescript: `className` prop

### @8x8/oxygen-toggle-button

#### Added

- Typescript: `className` prop.

### @8x8/oxygen-tooltip

#### Changed

- Typescript: `triggerRef` prop is now optional

#### Added

- Typescript: `enableArrow` prop

## [2.0.0] - 2022-03-03

### @8x8/oxygen-calendar

#### Changed

- Update `date-fns` dependency from version `1.30.1` to `2.28.0`. Breaking changes have been addressed
- **Breaking:** `dayNumberFormat` default value changed from `'D'` to `'d'`
- **Breaking:** `weekDayDisplayFormat` default value changed from `'dd'` to `'EE'`
- **Breaking:** `monthDisplayFormat` default value changed from `'MMMM YYYY'` to `'MMMM yyyy'`
- **Breaking:** `focusedYearFormat` default value changed from `'YYYY'` to `'yyyy'`

### @8x8/oxygen-date-time-range-selector

#### Changed

- Update `date-fns` from version `1.30.1` to `2.28.0`. Breaking changes have been addressed.
- **Breaking:** `dateFormat` default value changed from `'MM/DD/YYYY'` to `'MM/dd/yyyy'`
- **Breaking:** `timeFormat` default value changed from `'hh:mm A'` to `'hh:mm a'`

#### Added

- Add `DateTimeRangeSelectorPredefinedList` (custom option) prop `customPredefinedRangeLabel`

### @8x8/oxygen-date-time-selector

#### Changed

- Update `date-fns` from version `1.30.1` to `2.28.0`. Breaking changes have been addressed.
- **Breaking:** `titleFormatPattern` default value changed from `'MM/DD/YYYY'` to `'MM/dd/yyyy'`

### @8x8/oxygen-icon

#### Added

- Add new icon under the _Novo_ iconSet: `SkipIcon`

### @8x8/oxygen-time-selector

#### Changed

- Replaced `moment` with `date-fns` to be inline with the other datetime packages.
- **Breaking:** `timeDisplayFormat` default value changed from `'h:mm A'` to `'h:mm a'`

## [1.20.0] - 2022-03-02

### @8x8/oxygen-checkbox

#### Changed

- Update theme values for `disabledColor` & `labelDisabledColor`

### @8x8/oxygen-icon

#### Added

- Add new icon unde the _Novo_ iconSet: `StopwatchIcon`

### @8x8/oxygen-theme

#### Changed

- Update `novo` and `novoDark` token `focus01` from `blue06` to `blue05`

### @8x8/oxygen-toggle-button

#### Changed

- ToggleButton is disabled UI by adding `labelDisabledColor` theme prop to have ToggleButton in sync with Checkbox, adding opacity 0.5 for the ToggleButtonIcon & updating `backgroundColorDisabled` & `knobColorDisabled` theme values

## [1.19.0] - 2022-02-22

### @8x8/oxygen-checkbox

#### Added

- showLabelTooltipOnOverflow prop (default value `true`)

### @8x8/oxygen-input

#### Added

- Add prop `autoFocus`

### @8x8/oxygen-switch-base

#### Added

- Add prop `showLabelTooltipOnOverflow` (default value `true`)

#### Removed

- Remove unused prop `isIndeterminate`

#### Fixed

- Passtrough props are now properly passed through to the DOM

### @8x8/oxygen-toggle-button

#### Added

- Add props `showLabelTooltipOnOverflow` (default value `true`)

## [1.18.0] - 2022-02-16

### @8x8/oxygen-checkbox

#### Added

- Add synthetic events: `onBlur`, `onFocus`
- Add theme properties to the Classic: `disabledColor`, `checkboxIconColorFocus`,`checkboxIconColorHover`, `labelDisabledColor`,
- Add theme properties to the Novo: `checkboxIconColorFocus`, `checkboxIconColorHover`,
- Add svg icon as checkbox, instead of CSS drawing

#### Fixed

- Fix backward compatibility with styled components ^4.1.2 by removing the `useTheme` hook from StyledCheckbox
- Fix keyboard navigation
- Fix focus and hover state

### @8x8/oxygen-constants

#### Changed

- Update `Novo` & `Novo Dark` theme properties for `Input`:
- Update `Novo` & `Novo Dark` theme properties for `Textarea`:

#### Added

- Add `Novo` & `Novo Dark` theme values for `Icon` & exported them as part of the generic `novoTheme` and `novoDarkTheme` as well
- Add `Novo` & `Novo Dark` theme properties for `Input`: `borderColorReadOnly`, `borderRadiusReadOnly`, `borderWidthReadOnly`
- Add `Novo` + `Novo Dark` theme properties for `Textarea`: `textareaBorderRadiusReadOnly`, `borderWidthReadOnly`
- Add new theme props for Select: `selectedOptionTextColorDisabled`, `optionRowHeight`
- Add new theme props for Radio: `iconHoverColor`, `iconFocusColor`

#### Fixed

- Provide correct value for the theme prop `inputColor` for Select

### @8x8/oxygen-icon

#### Added

- Add new icon under the _Novo_ iconSet: `HostIcon`
- Add new icons under the _Classic_ iconSet: `CheckboxCheckedIcon`, `CheckboxIndeterminateIcon`, `CheckboxUncheckedIcon`

### @8x8/oxygen-input

#### Added

- Add `Input` prop `aria-readonly` attribute
- Add theme props `borderWidthReadOnly`, `borderRadiusReadOnly`

### @8x8/oxygen-label

#### Changed

- Label updated styling for the `isRequired` state

### @8x8/oxygen-radio

#### Added

- Add new theme props: `iconHoverColor`, `iconFocusColor`

#### Fixed

- Fix hover and focus state

### @8x8/oxygen-select

#### Added

- Add new export `VirtualMenuList` based on `react-window` for virtual scrolling. Used for rendering large datasets. See docs for usage

### @8x8/oxygen-switch-base

#### Added

- Add synthetic events: `onBlur`, `onFocus`, `onMouseEnter`, `onMouseLeave`

### @8x8/oxygen-textarea

#### Added

- Add `Textarea` attributes: `aria-readonly`, `aria-disabled`
- Add theme props: `borderWidthReadOnly`, `textareaBorderRadiusReadOnly`

### @8x8/oxygen-toggle-button

#### Added

- Add synthetic events: `onBlur`, `onFocus`
- Add theme props to `novo` theme: `backgroundColorDisabled`, `backgroundColorFocus`, `backgroundColorHover`, `knobColorDisabled`
- Add theme props to `classic` theme: `backgroundColorDisabled`, `backgroundColorFocus`, `backgroundColorHover`,

## [1.17.0] - 2022-01-26

### @8x8/oxygen-calendar

#### Added

- Add `locale` prop to Day, Month and Calendar components which defines the locale options and strings (e.g. day or month names) used to format date values. _Note_: For more info about the locales use the README and the date-fns documentation: https://date-fns.org/v1.30.1/docs/I18n _Note_: `en` is the built-in language, doesn't require any setup

### @8x8/oxygen-constants

#### Added

- Add new theme props for Modal: `headerIconColor`, `headerIconColorHover`

### @8x8/oxygen-date-time-range-selector

#### Added

- Add `onOpen` and `onClose` callback props which are executed when the dropdown component becomes visible, respectively hidden
- Add `locale` prop which defines the locale options and strings (e.g. day or month names) used to format date values. _Note_: For more info about the locales use the README and the date-fns documentation: https://date-fns.org/v1.30.1/docs/I18n . _Note_: `en` is the built-in language, doesn't require any setup

### @8x8/oxygen-icon

#### Added

- Add new icon under the _Novo_ iconSet: `ParkReturnIcon`

### @8x8/oxygen-modal

#### Added

- Add `ModalHeader` prop `iconCloseTitle`
- Add new theme props: `headerIconColor`, `headerIconColorHover`

## [1.16.3] - 2022-01-18

### @8x8/oxygen-select

#### Fixed

- Use menuZIndex from theme in menu portal styling

## [1.16.2] - 2021-12-17

### @8x8/oxygen-checkbox

#### Fixed

- Fix performance issue: use static icon instead of dynamic

### @8x8/oxygen-modal

#### Added

- Add `ModalPortal` to the exports so we can use it without create portal
- Add types for `ModalPortal`

## [1.16.1] - 2021-12-07

### @8x8/oxygen-typography

#### Added

- Add `null` as default value for Typography `children`

#### Removed

- Remove `isRequired` from Typography `children`

## [1.16.0] - 2021-11-18

### @8x8/oxygen-constants

#### Added

- Expose theme compilation objects for `classic`, `novo` and `novoDark`: `classicTheme`, `novoTheme`, `novoDarkTheme`

### @8x8/oxygen-icon

#### Changed

- Rename `FavouriteIcon` into `FavoriteIcon` (use US spelling for consistency)

#### Added

- Add new icon under the _Novo_ iconSet: `FavoriteSolidIcon`

## [1.15.1] - 2021-10-19

### @8x8/oxygen-button

#### Fixed

- Make `variant` an optional prop on `ButtonProps` type definition

### @8x8/oxygen-constants

#### Fixed

- Change enum `ButtonVariant` to a type definition

### @8x8/oxygen-dropdown-button

#### Fixed

- Fix `indicatorIcon` prop type and declaration now aligns with icons from `oxygen-icon`

## [1.15.0] - 2021-10-15

### @8x8/oxygen-config

#### Fixed

- Change return type on `withTheme` and `withDeprecation` to `React.ComponentPropsWithRef<React.ComponentType>`

### @8x8/oxygen-icon

#### Changed

- Updated `DarIcon` (_Novo_ iconset) from a textual representation to a iconographic one

#### Added

- Add new icons under the _Novo_ iconset: `AddUserIcon`, `ArrowDiagonalOutIcon`, `BellOffIcon`, `BookIcon`, `ColumnInsertIcon`, `DotsHorizontalIcon`, `FavouriteIcon`, `KnowledgeBaseIcon`, `LogCallIcon`, `NewCaseIcon`, `NewContactIcon`, `NewEventIcon`, `NewLeadIcon`, `NewOpporunityIcon`, `NewTaskIcon`, `PopInIcon`, `PopOutIcon`, `ScreenshareIcon`, `ShareIcon`, `StopIcon`, `TranslateIcon`, `VersionIcon`

## [1.14.0] - 2021-10-13

### @8x8/oxygen-button

#### Fixed

- Add missing `variant` prop type definition

### @8x8/oxygen-calendar

#### Fixed

- Properly align Arrow components when in Novo design

### @8x8/oxygen-constants

#### Added

- Add `ButtonVariant` type definition and export it

### @8x8/oxygen-date-time-range-selector

#### Fixed

- Remove unnecessary template literal transformation that may cause `undefined` token values to pass as strings

### @8x8/oxygen-dropdown-button

#### Added

- Add props `invertIconPosition`, `indicatorIcon`

### @8x8/oxygen-input

#### Added

- Add props `onBlur` & `onFocus` callbacks

### @8x8/oxygen-modal

#### Fixed

- Fix type declaration for ModalSizes, included "medium"
- Export ModalContent and ModalSizes types
- Remove react as a devDependency

### @8x8/oxygen-select

#### Changed

- Removed react as a devDependency

#### Fixed

- Incorrect type declaration for iconProps in SelectOption interface

### @8x8/oxygen-text-field

#### Added

- Add props: `onBlur`, `onFocus` callbacks

## [1.13.0] - 2021-10-07

### @8x8/oxygen-button

#### Added

- Add new `isCircular` prop in order to achieve `CircularButton`
- Add new variant type: `tertiary`

### @8x8/oxygen-calendar

#### Changed

- Heavily update base components css rules to facilitate new `Novo` theme: `DayCell`, `SelectionRange`, `PreviewRange`, `DayNumber`, `TodayLine`

#### Added

- Add new base components to help with `Novo` theme: `SelectionRangeEdge`, `NumberContainer`
- Add new `customEvenMonths` config option for `dateOptions`. Renders another week row for the month grid for aesthetic purposes, helps when rendering moths side by side (default: `false`)

### @8x8/oxygen-constants

#### Added

- Add Novo & Novo Dark theme for DateTimeRangeSelector (`dateTimeRangeSelector`)
- Add Novo & Novo Dark theme for DateTimeSelector (`dateTimeSelector`): `containerAnimationDuration`, `letterSpacing`, `fontWeight`, `iconMargin`, `containerBorderRadius`, `isClassic`
- Add Novo & Novo Dark theme for Calendar (`calendar`):
- Add new theme properties for Calendar (Novo & Classic): `dayPreviewBackground`, `daySelectedEdgeBackground`, `daySelectedEdgeColor`, `isClassic`, `lineBorderRadius`, `monthColor`
- Add new theme properties for Calendar (Novo): `monthYearTypography`, `numbersTypography`, `todayTypography`, `weekdaysTypography`

#### Removed

- Remove unused props from `dateTimeSelector` and `dateTimeRangeSelector`: `iconTopOffset` and `iconRightOffset`
- Remove common props from `dateTimeRangeSelector` that where merged into `dateTimeSelector`

### @8x8/oxygen-date-time-base

#### Changed

- Common components from `oxygen-date-time-range-selector` and `oxygen-date-time-selector`: `DropdownContainer`, `DropdownFooter`, `PopperContainer` are now exposed as: `BaseDropdownContainer`, `BaseDropdownFooter`, `BasePopperContainer`

### @8x8/oxygen-date-time-range-selector

#### Changed

- **Breaking:** Move common components between `oxygen-date-time-range-selector` and `oxygen-date-time-selector` into `oxygen-date-time-base`. `DropdownContainer`, `Footer`, `PopperContainer` are now exposed as `BaseDropdownContainer`, `BaseDropdownFooter`, `BasePopperContainer`

### @8x8/oxygen-date-time-selector

### @8x8/oxygen-theme

#### Added

- Add `novo` size tokens for input heights: `inputHeightSmall` ('32px'), `inputHeightMedium` ('40px')

## [1.12.1] - 2021-09-27

### @8x8/oxygen-modal

#### Fixed

- Fixed bug when attempting to show a Modal with text only content (or some kind of content like _null_)

## [1.12.0] - 2021-09-24

### @8x8/oxygen-constants

#### Changed

- Update `Select` theme prop `backgroundColorHover`, `borderColorHover`

#### Added

- Add Novo & Novo Dark theme for ContextMenu (`contextMenu`): `contextMenuItemDisabledColor`, `contextMenuWidth`, `contextMenuItemColorActive`, `contextMenuBorderRadius`, `contextMenuPadding`, `contextMenuItemPadding`, `isClassic`, `fontFamily`, `fontSize` `lineHeight`, `fontWeight`, `letterSpacing`
- Add Novo & Novo Dark theme for DropdownButton (`dropdownButton`): `isClassic`, `dropdownBorderRadius`
- Add Novo & Novo Dark theme for List (`list`): `listItemHoverColor`, `isClassic`

### @8x8/oxygen-context-menu

#### Added

- Add tabbing functionality: now context menu items have `tabindex=0` (if an item `isDisabled`, tabbing will ignore it)
- Add new theme props used in styled componets css rules: `contextMenuItemDisabledColor`, `contextMenuWidth`, `contextMenuItemColorActive`, `contextMenuBorderRadius`, `contextMenuPadding`, `contextMenuItemPadding`

### @8x8/oxygen-dropdown-button

#### Added

- **Breaking:** new `ScrollWrapper` over dropdown `children` such that scrolling is done by the container, not the children themselves
- Add new theme props: `isClassic`, `dropdownBorderRadius`

### @8x8/oxygen-list

#### Changed

- Tabbing functionality: now list items have `tabindex=0`. If an item `isDisabled`, tabbing will ignore it

#### Added

- Add new theme props `isClassic`, `listItemHoverColor`

#### Removed

- Remove `ListItemText` component. It was redundant and since it was a `button` nesting in it might result in an invalid html syntax. Replaced with proper `tabindex` rules and stylings

### @8x8/oxygen-modal

#### Changed

- Update storybook examples & code for clearer usage patterns

#### Added

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

#### Fixed

- Fix bug where `footerPaddingVertical` and `paddingHorizontal` were applied inverse to their name

### @8x8/oxygen-overlay

#### Added

- Add support for `Novo` and `NovoDark` theme

### @8x8/oxygen-text-link

#### Fixed

- Fix `TextLink` to no longer use the active state when disabled

### @8x8/oxygen-theme

#### Changed

- Update `novo` token `hover08` from `colorGray05` -> `colorGray10`
- Update `typographySet.prodHeading01.fontWeight` from `fontWeightRegular` => `fontWeightSemiBold`

#### Added

- Add `novo` token `shadow` with `gray02` value

### @8x8/oxygen-time-selector

#### Added

- Add support for Novo and NovoDark
- Add theme prop `dropdownShadow` to replace `dropdownShadowBlurRadius` & `dropdownShadowColor`
- Add theme prop `dropdownPadding`

## [1.11.0] - 2021-09-16

### @8x8/oxygen-icon

#### Added

- Add new icon under the _Novo_ iconset: `PhoneRetrieveIcon`
- Add new icons under the _Classic_ iconset: `PreChatSolidIcon`, `PreChatIcon`

## [1.10.0] - 2021-09-14

### @8x8/oxygen-input

#### Fixed

- Fix types for event handler props
- Fix Safari rendering bug for `disabled` input field text color

### @8x8/oxygen-modal

#### Fixed

- Properly specify dependency on `@8x8/oxygen-button`

### @8x8/oxygen-select

#### Fixed

- Add `borderColorHover` theme prop to Select to fix Classic theme border blending in with background

### @8x8/oxygen-slider

#### Added

- Add `Novo` & `NovoDark` theme support
- Add new theme props: `sliderActiveTrackBackgroundColorActive`, `sliderKnobColorActive`, `sliderKnobBorderWidth`, `sliderKnobPulse`

### @8x8/oxygen-text-field

#### Added

- Add `TextField` prop `testId`

#### Fixed

- Fix types for event handler props

### @8x8/oxygen-textarea

#### Changed

- Classic theme change: readOnly now has border all around (for easier transition to Novo)

#### Added

- Add Textarea Novo and Novo dark themes
- Add new theme props: `textareaBackgroundColorReadOnly`, `borderWidth`

## [1.9.0] - 2021-09-08

### @8x8/oxygen-checkbox

#### Added

- Add Novo & Novo Dark theme support
- Add New theme props: `iconSet`, `labelDisabledColor`, `disabledColor`

### @8x8/oxygen-constants

#### Changed

- Update Classic default value for `tabBorderBottomSize` from `sizes.small` (4px) to `sizes.smallest` (2px) due to `Tab` Component css rules modifications

#### Added

- Add Novo & Novo Dark theme for Textarea (`textarea`)
- Add Novo & Novo Dark theme for Tabs (`tabs`)
- Add new theme properties for Novo theming based on light/dark variants of Classic
- Add Novo & Novo Dark theme for Checkbox & Radio
- Add Novo & Novo Dark theme for Toast and Toaster (`toast`)

### @8x8/oxygen-radio

#### Added

- Add support for Novo and Novo Dark themes
- Add new theme props: `iconSet`, `labelDisabledColor`

### @8x8/oxygen-switch-base

#### Changed

- Do not alter opacity for `novo` iconSet theme prop (applies for novo checkbox theme)

#### Added

- Add theme prop `labelDisabledColor`

### @8x8/oxygen-tabs

#### Added

- deprecated old light/dark theme tokens and classic stylings
- updated styling to use new Novo tokens when not in Classic

#### Fixed

- Fix an issue with css transitions not applying for `color` and `border-color`

### @8x8/oxygen-toast

#### Changed

- Update Toast structure to match new Novo design - keep backwards compatibilty with Classic

#### Added

- Add props `title`, `description` as an alternative to `children`. When Toast has `children`, they take precendence over `title` and `description`

### @8x8/oxygen-toaster

#### Added

- Add props `title`, `description` to `notify` function. If `notify` contains `content`, it will take precedence over `title` and `description`

### @8x8/oxygen-toggle-button

#### Changed

- Update `novo` tokens `verticalGroupMargin`, `horizontalGroupMargin` theme values to match Checkbox and Radio

## [1.8.0] - 2021-08-03

### @8x8/oxygen-button

#### Changed

- Refactor theming logic to accomodate new button types and theme props
- Deprecate `secondary` prop in favour of `variant`
- Update `size` prop default value from `big` to `medium`. Add logic to switch between the 2 if theme changes from Novo to Classic

#### Added

- Add new `size` prop possible values: `large` and `medium`
- Add new Button types: `destructive` and `success`
- Add new `variant` prop. Possible values: `primary`, `secondary`, `destructive`, `success` (default: `primary`)
- Use newly exposed theme props: `borderColorPrimaryFocus`, `borderColorSecondaryFocus`, `backgroundColorDestructive`, `backgroundColorDestructiveHover`, `backgroundColorDestructiveActive`, `backgroundColorDestructiveDisabled`, `borderColorDestructive`, `borderColorDestructiveHover`, `borderColorDestructiveActive`, `borderColorDestructiveDisabled`, `borderColorDestructiveFocus`, `fontColorDestructive`, `fontColorDestructiveDisabled`, `backgroundColorSuccess`, `backgroundColorSuccessHover`, `backgroundColorSuccessActive`, `backgroundColorSuccessDisabled`, `borderColorSuccess`, `borderColorSuccessHover`, `borderColorSuccessActive`, `borderColorSuccessDisabled`, `borderColorSuccessFocus`, `fontColorSuccess`, `fontColorSuccessDisabled`, `paddingMedium`, `heightMedium`, `paddingLargeV2`, `heightLargeV2`, `isClassic`, `fontSizeLarge`, `fontFamilyLarge`, `fontWeightLarge`, `lineHeightLarge`, `letterSpacingLarge`, `fontSizeSmall`, `fontFamilySmall`, `fontWeightSmall`, `lineHeightSmall`, `letterSpacingSmall`, `fontSizeMedium`, `fontFamilyMedium`, `fontWeightMedium`, `lineHeightMedium`, `letterSpacingMedium`

### @8x8/oxygen-constants

#### Changed

- Update `Select` token: `backgroundColorHover: novoDark.ui02 -> novoDark.hover06`

#### Added

- Add Novo & Novo Dark theme for `Breadcrumbs`
- Add Novo & Novo Dark theme for `Button`
- Add updated `buttonSize` with new `medium` and `large` sizes for `Button`
- Add new `buttonVariant` prop - map with possible button types for `Button`
- Add new theme properties for `Button`
- Add Novo & Novo Dark theme for `TexLink`
- Add Novo & Novo Dark theme for `Table`
- Add Novo & Novo Dark theme for Loaders - `Spinner` & `ProgressBar`

### @8x8/oxygen-icon

#### Added

- Add new icons under the _Novo_ iconset: `AtMarkIcon`, `CameraIcon`, `CannedMessageIcon`, `DarIcon`, `DashboardIcon`, `DownloadIcon`, `ErrorIcon`, `FolderIcon`, `HistoryIcon`, `ImageIcon`, `InboxTrayIcon`, `InstagramIcon`, `MissedCallIcon`, `ParkedIcon`, `RecordingIcon`, `SignatureIcon`, `SmsIcon`, `SnoozeIcon`, `StarIcon`, `TwitterIcon`

#### Removed

- Remove `CloseCricleIcon` (typo duplicate form `CloseCircleIcon`)

### @8x8/oxygen-loaders

#### Changed

- Update folder structure: moved styled components under their respective parent folders inside `styled` folder

#### Added

- Add `Spinner`component
- Can now use `theme.withSpinnerBackground` to control svg stroke color for spinner background

#### Fixed

- Simplified `css` rules concerning `Progressbar`
- Add `pseudoelement` `css` rules for **Firefox** browser

### @8x8/oxygen-table

#### Added

- Update `getHoverStyles` `getSelectedStyles` with `hover` overrides to support usae of new theme tokens
- Add `zebra` prop for `Table` and `TableFlex` (defaults to `false`). Controls the change in background color of every other table row to `theme.zebraRowBackgroundColor`
- Use newly exposed theme tokens for styling `Table`, `TableCell`, `TableRow` and their `Flex` variants: `tableRowHoverColor`,, `zebraRowBackgroundColor`,, `tableCellFontWeight`,, `tableCellLetterSpacing`,, `tableCellFontFamily`,, `tableCellHeadLetterSpacing`,, `tableCellHeadFontFamily`,, `fontVariantNumeric`,

### @8x8/oxygen-theme

#### Changed

- Update `novo` token `active01` from `colorBlue05` -> `colorBlue04`
- Update `novo` token `colorRed07` from `#E07A85` -> `#F24D5F`
- Update `novoDark` token `active01` from `colorBlue06` -> `colorBlue05`
- Update `novoDark` token `hover06` from `colorPurpe02` -> `colorGray03`
- Update `novoDark` token `hover08` from `colorGray05` -> `colorPurple02`
- Update `novoDark` token `active08` from `colorGray09` -> `colorGray04`
- Update `novoDark` token `error01` from `colorRed06` -> `colorRed07`

#### Added

- Add `novo` and `novoDark` token `text06` with value `white`
- Add new size tokens for buttons `buttonHeightSmall` ('32px'), `buttonHeightMedium` ('40px'), `buttonHeightLarge` ('48px')
- Add `novo` size tokens for `spinnerSize` and `progressSize`: `spinnerSizeS` (24), `spinnerSizeM` (40), `spinnerSizeL` (72), `progressSizeS` ('100px'), `progressSizeM` ('240px'), `progressSizeL` ('100%')

#### Fixed

- Fix `typographySet` typos relating to `lineHeight` which retuned `undefined` values

## [1.7.0] - 2021-06-28

### @8x8/oxygen-badge

#### Added

- Add Novo & NovoDark theme support (identical theme for both). _Note_ Novo does not support secondary Badge, it looks identical to primary
- Add theme prop `fontWeight`

### @8x8/oxygen-constants

#### Added

- Add Novo & Novo Dark theme for `Tooltip`
- Add new `enableArrow` theme prop to control tooltip arrow display based on theme config for `Tooltip`
- Add new theme props `arrowSize`, `arrowBorderRadius`, `arrowMarginOffset` to control arrow placement and look for `Tooltip
- Add Novo & Novo Dark theme for Select: `selectNovo` & `selectNovoDark`
- Add Novo & Novo Dark theme for Label: `labelNovo` & `labelNovoDark`
- Add Novo & Novo Dark theme for Input: `inputNovo` & `inputNovoDark`
- Add Novo & Novo Dark theme for TextField: `textFieldNovo` & `textFieldNovoDark`
- Add Novo & Novo Dark theme for ToggleButton: `toggleButtonNovo` & `toggleButtonNovoDark`
- Add Novo & Novo Dark theme for ToggleButtonGroup: `toggleButtonGroupNovo` & `toggleButtonGroupNovoDark`
- Add Novo & Novo Dark theme for Badge: `badgeNovo` & `badgeNovoDark`

### @8x8/oxygen-input

#### Changed

- Prop `isReadOnly` no longer shows `focused` borderColor

#### Added

- Add Novo & NovoDark theme support
- Add large size support via new theme prop `heightLarge`
- Add new theme prop `prefixSuffixHorizontalSpacing` to control prefix & suffix horizontal padding
- Add new theme prop `iconHorizontalSpacing` to control icon horizontal margin
- Add new theme prop `iconSize` to control LeftIcon and RightIcon render size
- Add new theme prop `prefixSuffixInsideInput` to render prefix and suffix inside the InputWrapper (inside the borders of the focused input)

### @8x8/oxygen-label

#### Changed

- Label storybook with a theme switcher knob
- Label storybook for `isDisabled` and `isRequired` (storybook example was using a broken prop)

#### Added

- Add Novo theme support

### @8x8/oxygen-select

#### Added

- Add Novo theme support
- Add new theme props (with Classic defaults set up to not induce changes): `backgroundColorHover`, `borderWidth`, `iconMargin`, `iconSize`, `inputBoxSizeLarge`, `multiValueChipPaddingVerticalLarge`, `optionSelectedBackground`, `placeholderTextColorDisabled`
- Add new value prop `size`: `'large'` (`48px`)
- Add new Storybook examples for `size`

### @8x8/oxygen-static-tooltip

#### Changed

- `TooltipWrapper` styled component is now aware of `fontWeight`, `textAlign` and `letterSpacing` theme properties

#### Added

- Add prop `renderArrow`: render a custom `Arrow` component that serves as a tooltip pointer arrow (default value: `undefined`)

### @8x8/oxygen-text-field

#### Added

- Add Novo and NovoDark theme support
- Add theme prop `descriptionColor` to control the description color

### @8x8/oxygen-theme

#### Changed

- Update `fontWeight` tokens to match standards:
- Update `fontWeightThin`: 100,
- Update `fontWeightLight`: 200, // => 300
- Update `fontWeightRegular`: 300, // => 400
- Update `fontWeightMedium`: 400, // => 500
- Update `fontWeightSemiBold`: 500, // => 600
- Update `fontWeightBold`: 600, // => 700
- Update `fontWeightBlack`: 700, // => 900

#### Added

- Add `novo` tokens for `typographySet` based on **Typography** section in [Zeroheight](`https://zeroheight.com/714056d2f/p/36c853-oxygen-design-system`)
- Add `letterSpacing` tokens in `typography`
- Add new **V2** `letterSpacing` and `lineHeight` tokens - will need revisiting

### @8x8/oxygen-toggle-button

#### Added

- Add support for Novo and Novo Dark themes

### @8x8/oxygen-tooltip

#### Added

- Add `Arrow` component. Renders based on `enableArrow` prop or based on theme configuration from `theme.enableArrow` where **component** prop takes **precedence** over theme config (default `enableArrow`: `undefined`)

## [1.6.1] - 2021-06-15

### @8x8/oxygen-avatar

#### Changed

- Update Readme with Novo theme details

#### Added

- Novo & Novo dark theme support (updated icons)
- Storybook theme switcher under _Guideline_

### @8x8/oxygen-constants

#### Added

- Add Avatar Novo and Novo dark theme: `avatarNovo` & `avatarNovoDark`

### @8x8/oxygen-theme

#### Changed

- Update `novo` theme tokens

#### Added

- `novoDark` theme tokens (inherit from Novo, updated colors)

## [1.6.0] - 2021-06-09

### @8x8/oxygen-icon

#### Changed

- Icons updated (very slight path updates, mostly unnoticeable): `DirectoryIcon`, `FaceSmileIcon`, `HangupIcon`, `HoldIcon`, `MessengerIcon`, `PaperclipIcon`, `PencilIcon`, `PhoneRingingIcon`, `PhoneTransferIcon`, `PhoneIcon`, `PlayIcon`, `SendIcon`, `TargetIcon`, `UserGroupsLineIcon`, `UsersIcon`, `VolumeOffIcon`, `VolumeUpIcon`, `WaveIcon`, `WhatsappIcon`
- Icons renamed: `PlusLargeIcon` => `PlusIcon`

#### Added

- Add new icons under _Novo_ iconset: `ArrowLeftLongIcon`, `ArrowRightLongIcon`, `ArrowUpIcon`, `CloseCircleIcon`, `ContractIcon`, `FaceFrownIcon`, `ForwardIcon`, `RedoIcon`, `TextTemplateIcon`, `TransferIcon`, `TrashIcon`, `UndoIcon`

#### Removed

- Removed icon `CheckedIcon`

### @8x8/oxygen-select

#### Fixed

- Add missing `options` prop from `SelectProps` interface
- Fix a warning about `findDOMNode` being deprecated by updating `react-select` to version [4.3.1] as suggested [here](https://github.com/JedWatson/react-select/issues/4094) and [here](https://github.com/JedWatson/react-select/pull/4313)

## [1.5.2] - 2021-05-25

### @8x8/oxygen-toaster

#### Added

- Add `theme` support for individual toasts `notify({content: 'test', theme: { backgroundColor: 'red' }})`

## [1.5.1] - 2021-05-25

### @8x8/oxygen-constants

#### Removed

- Remove now obsolete properties from `userStatus`: `borderRadius`, `borderSize`

### @8x8/oxygen-user-status

#### Removed

- Remove `css` borders on the UserStatus wrapper

## [1.5.0] - 2021-05-18

### @8x8/oxygen-tooltip

#### Added

- External configuration for the react-popper `modifiers` property. Defaults to `{ offset: { offset: '0, 5', }, }`

### @8x8/oxygen-user-status

#### Fixed

- Add background color (respective to status color) to svg wrapper to resolve transparent bgColor issue

## [1.4.1] - 2021-05-13

### @8x8/oxygen-icon

#### Fixed

- Fix missing files on published module

## [1.4.0] - 2021-05-13

### @8x8/oxygen-constants

#### Removed

- **Breaking:** Remove obsolete properties from `userStatus`: `backgroundColor`, `iconColor`, `iconSize`

### @8x8/oxygen-icon

#### Changed

- Icon storybook to showcase both **Classic** and **Novo** icon sets

#### Added

- Add icons under the _Novo_ iconset: `ArrowDiagonalInIcon`, `ArrowDownIcon`, `ArrowLeftIcon`, `AudiowaveIcon`, `BellIcon`, `BriefcaseIcon`, `BurgerIcon`, `CalendarIcon`, `CheckIcon`, `CheckboxIcon`, `CheckedIcon`, `CheckfilledIcon`, `CloseCricleIcon`, `CloseLargeIcon`, `CopyIcon`, `DialpadIcon`, `DirectoryIcon`, `DotsVerticalIcon`, `EnvelopeIcon`, `ExclamationIcon`, `ExpandIcon`, `EyeIcon`, `FaceSmileIcon`, `FaqIcon`, `FeedbackIcon`, `FilterIcon`, `GearIcon`, `HangupIcon`, `HeadsetIcon`, `HoldIcon`, `IndeterminateIcon`, `IndeterminatefilledIcon`, `InfoCircleIcon`, `LeaveIcon`, `ListIcon`, `MessageIcon`, `MessengerIcon`, `MicIcon`, `MicSlashIcon`, `NoteIcon`, `NoteNewIcon`, `OfficeBuildingIcon`, `OminchannelIcon`, `PaperclipIcon`, `PauseIcon`, `PencilIcon`, `PhoneIcon`, `PhoneRingingIcon`, `PhoneTransferIcon`, `PlayIcon`, `PlaylistIcon`, `PlusCircleIcon`, `PlusLargeIcon`, `RadioIcon`, `RadiofilledIcon`, `SearchIcon`, `SendIcon`, `SwitchboardIcon`, `TargetIcon`, `UserGroupsLineIcon`, `UserIcon`, `UsersIcon`, `VideoIcon`, `VoicemailIcon`, `VolumeOffIcon`, `VolumeUpIcon`, `WaveIcon`, `WhatsappIcon`

### @8x8/oxygen-user-status

#### Changed

- `Available`, `Offline`, `WorkingOffline` now have status icons
- Replaced status icons with newly added ones
- Modified and Added new `UserStatusIcon` components in `styled` folder to use newly added `svg` icons
- Status icons now live as `svg`s inside the `oxygen-user-status` project rather than importing them from `oxygen-icon`

#### Added

- Add new status icon svgs in `assests` folder - these are not used - they serve as a reference for the svg code inside components in the `styled` folder

#### Removed

-**Breaking:** Remove theme props `iconColor`, `backgroundColor`, `iconSize` usage as they are now obsolete

## [1.3.6] - 2021-04-26

### @8x8/oxygen-avatar

#### Added

- render user status badge for `size2xsmall`

### @8x8/oxygen-theme

#### Changed

- `Oxygen Novo` color into colorPalette tokens
- `Oxygen Novo` change token `offset` into `spacing`

#### Added

- `Oxygen Novo` color tokens

## [1.3.4] - 2021-04-14

### @8x8/oxygen-select

#### Fixed

- Allow overriding theme for nested components, related to fix from [1.3.3]

## [1.3.3] - 2021-04-14

### @8x8/oxygen-constants

#### Added

- Add input theme properties: `backgroundColorReadOnly`, `borderColorReadOnly`, `colorReadOnly`

### @8x8/oxygen-input

#### Added

- Add prop `isReadOnly`

### @8x8/oxygen-select

#### Fixed

- Apply theme properties: `optionTextColor`, `optionTextFontSize` to checkbox and radio label

### @8x8/oxygen-text-field

#### Added

- Add prop `isReadOnly`

## [1.3.2] - 2021-03-22

### @8x8/oxygen-label

#### Added

- Add prop `infoBoxShowOn` which is passed down to the info `Tooltip`

## [1.3.0] - 2021-02-11

### @8x8/oxygen-theme

#### Added

- `Oxygen Novo` design tokens for typography, spacing, colorPalette and timing
- `Oxygen Classic` design tokens for typography, spacing, colorPalette, timing and elevation (zIndex)

## [1.2.8] - 2021-02-01

### @8x8/oxygen-checkbox

#### Added

- Provide theme for nested components

### @8x8/oxygen-label

#### Added

- Provide theme for nested components

### @8x8/oxygen-radio

#### Added

- Provide theme for nested components

### @8x8/oxygen-toggle-button

#### Added

- Provide theme for nested components

## [1.2.7] - 2021-01-21

### @8x8/oxygen-icon

#### Added

- Add icons: `CallRecordIcon`, `ArchiveRetrieveIcon`, `MessengerBlackIcon`, `TwitterBlackIcon`, `WhatsappBlackIcon`

## [1.2.5] - 2021-01-15

### @8x8/oxygen-avatar

#### Changed

- updated examples with new avatar images

## [1.2.1] - 2020-12-09

### @8x8/oxygen-icon

#### Added

- Add icon `SpeedDialIcon`

## [1.2.0] - 2020-11-25

### @8x8/oxygen-constants

#### Added

- Add Slider theme props `sliderBorder`, `sliderBorderRadius`, `sliderKnobShadow`

### @8x8/oxygen-slider

#### Added

- Add theme props: `sliderBorder`, `sliderBorderRadius`, `sliderKnobShadow`

## [1.1.9] - 2020-11-11

### @8x8/oxygen-card

#### Added

- Add `hasError` on styled Statistics, as part of `data` prop

### @8x8/oxygen-constants

#### Added

- Add `Statistics` theme props: `numbersColorError`, `textColorError`

### @8x8/oxygen-input

#### Fixed

- Invalid prop type for `iconLeft` and `iconRight`

### @8x8/oxygen-select

#### Removed

- Width style rule which expanded the input and cramped the select options

#### Fixed

- Invalid prop type for `iconLeft`

## [1.1.8] - 2020-10-15

### @8x8/oxygen-calendar

#### Added

- Add autoscroll to the date/range.startDate when it is outside the view after an external change

### @8x8/oxygen-constants

#### Added

- Add `Select` theme props: `borderColorDisabled`, `backgroundColorDisabled`, `dropdownIndicatorColorDisabled`, `optionTextFontSize`, `optionTextFontWeightSelected`, `noOptionTextFontSize`, `menuBorderStyle`, `headingTextFontSize`, `headingTextFontWeight`, `headingTextColor`, `headingBorderStyle`, `headingMargin`

### @8x8/oxygen-date-time-range-selector

#### Added

- Add `DateTimeRangeSelectorPredefinedList` prop `hideCustomRange` for rendering without adding the Custom range

### @8x8/oxygen-icon

#### Added

- Add icons: `CounterIcon`, `AreaGraphIcon`, `AreaGraphDashIcon`, `AreaGraphSolidIcon`, `BarStackedGraphIcon`, `BarStackedGraphHorizontalIcon`, `LineDashChartIcon`

### @8x8/oxygen-select

#### Changed

- Update styles for disabled state

#### Added

- Add theme props: `borderColorDisabled`, `backgroundColorDisabled`, `dropdownIndicatorColorDisabled`, `optionTextFontSize`, `optionTextFontWeightSelected`, `noOptionTextFontSize`, `menuBorderStyle`, `headingTextFontSize`, `headingTextFontWeight`, `headingTextColor`, `headingBorderStyle`, `headingMargin`
- Add new props: `noOptionsMessage`, `placeholder`

#### Fixed

- Fix S=styles for options in react-portal

### @8x8/oxygen-toast

#### Fixed

- Fix Readme issues: wrong Toast import statement

## [1.1.7] - 2020-09-29

### @8x8/oxygen-constants

#### Added

- Add `Select` theme props: `borderColorError`

### @8x8/oxygen-select

#### Added

- Add prop: `hasError`
- Add theme property: `borderColorError`

## [1.1.6] - 2020-09-17

### @8x8/oxygen-icon

#### Added

- Add icon `StoragePoliciesIcon`

## [1.1.5] - 2020-09-14

### @8x8/oxygen-icon

#### Added

- Add icons: `FireIcon`, `WinterIcon`

## [1.1.4] - 2020-09-11

### @8x8/oxygen-calendar

#### Fixed

- Add day cell button type

### @8x8/oxygen-constants

#### Added

- Add `Select` theme props: `inputColor`

### @8x8/oxygen-icon

#### Changed

- Updated icons (fixed outer SVG path): `SendIcon`, `SendSolidIcon`

#### Added

- Add icons: `BellSnoozeIcon`, `BellSnoozeSolidIcon`

### @8x8/oxygen-select

#### Added

- Add theme property: `inputColor`

## [1.1.3] - 2020-09-03

### @8x8/oxygen-date-time-range-selector

#### Added

- Add `DateTimeRangeSelector` prop `inputRenderer` for rendering a custom input
- Add `DateTimeRangeSelector` prop `headerRenderer` for rendering a custom calendar header

### @8x8/oxygen-input

#### Added

- Add prop `autoPrefixWidth` to allow prefix to resize
- Add prop `autoSuffixWidth` to allow suffix to resize

## [1.1.2] - 2020-09-01

### @8x8/oxygen-card

#### Added

- Add new theme property named `boxWidth`

#### Fixed

- `StatisticsBox` positioning
- Text sizes

## [1.1.1] - 2020-08-28

### @8x8/oxygen-checkbox

#### Added

- Add `checkboxIconFillColor` theme property

### @8x8/oxygen-constants

#### Added

- Add `Select` theme props: `optionActiveBackgroundColor`

### @8x8/oxygen-date-time-base

#### Fixed

- Fix wrong `CloseIcon` import in DateTimeSelectorInput which caused the growth of the bundle size (all icons from collection were present in bundles)

### @8x8/oxygen-date-time-range-selector

#### Fixed

- Fix wrong `CloseIcon` import in DateTimeSelectorInput which caused the growth of the bundle size (all icons from collection were present in bundles)

### @8x8/oxygen-date-time-selector

#### Fixed

- Wrong `CloseIcon` import in DateTimeSelectorInput which caused the growth of the bundle size (all icons from collection were present in bundles)

### @8x8/oxygen-input

#### Added

- Add prop `testId`

### @8x8/oxygen-radio

#### Added

- Add `labelColor` property back

### @8x8/oxygen-select

#### Added

- Add `testId` to ValueContainer component
- Add theme property: `optionActiveBackgroundColor`

## [1.1.0] - 2020-08-20

### @8x8/oxygen-card

#### Added

- Add Card component

### @8x8/oxygen-icon

#### Changed

- Updated icons: `SendIcon`, `SendSolidIcon`

#### Added

- Add icons: `IdentityManagementIcon`, `LicenseIcon`, `VideoWorkIcon`

## [1.0.1] - 2020-08-05

### @8x8/oxygen-graphics

#### Added

- Add `EmptyClipboards` graphic

### @8x8/oxygen-icon

#### Changed

- Update `svgo` to `1.3.2`

#### Added

- Add icons: `SendIcon`, `SendSolidIcon`

## [1.0.0] - 2020-07-24

### @8x8/oxygen-constants

#### Changed

- Update `Select` theme propd `controlFocusBoxShadow` to none

#### Added

- Add `Select` theme props: `menuZindex`, `borderColorFocus`
- Add Modal header and footer styling properties into modal theme (together with moving the ModalHeader and ModalFooter in Modal package)

#### Removed

- **Breaking:** Remove `hasShadow` modal theme property. To set the shadow visibility, please use `shadowSize` and `shadowColor` theme properties, or directly the Modal component's `hasShadow` prop
- **Breaking:** Remove `modalSize` constants. The constants with available modal sizes are exposed in Modal package as `MODAL_SIZE`:
- **Breaking:** Remove `font.sizeSmall` font design token. Use `font.sizeXs` instead.
- **Breaking:** Remove `font.sizeDefault` font design token. Use `font.sizeSm` instead.
- **Breaking:** Remove `font.sizeMedium` font design token. Use `font.sizeMd` instead.
- **Breaking:** Remove `font.sizeLarge` font design token. Use `font.sizeLg` instead.
- **Breaking:** Remove `font.sizeAttention` font design token. Use `font.sizeXl` instead.
- **Breaking:** Remove `font.sizeMax` font design token. Use `font.sizeXxl` instead.
- **Breaking:** Remove `font.lineHeightSmall` font design token.
- **Breaking:** Remove `font.lineHeightDefault` font design token.
- **Breaking:** Remove `font.lineHeightMedium` font design token.

### @8x8/oxygen-date-time-range-selector

#### Added

- Expose `DateTimeRangeSelectorPredefinedList` component to be used by external components

#### Removed

- **Breaking:** Remove `defaultTitle` prop, use `placeholder` instead

### @8x8/oxygen-date-time-selector

### @8x8/oxygen-dropdown-button

#### Removed

- **Breaking:** Remove directions `bottomLeft`, `bottomRight`, `topLeft`, `topRight`. Use `bottomStart`, `bottomEnd`, `topStart`, `topEnd` instead

### @8x8/oxygen-icon

#### Removed

- **Breaking:**: Remove `ExcalmationIcon` and `ExcalmationSolidIcon`.<br /> Please use `ExclamationCircleIcon` and `ExclamationCircleSolidIcon` instead

### @8x8/oxygen-input

#### Removed

- **Breaking:** Remove `autocomplete` prop, use `autoComplete` instead

### @8x8/oxygen-label

#### Removed

- **Breaking:** Remove `iconText` prop, use `infoBoxText` instead

### @8x8/oxygen-modal

#### Changed

- **Breaking:** rename prop `visible` intto `isVisible`
- **Breaking:** rename prop `shadow` into `hasShadow`
- **Breaking:** rename prop `closeOnEsc` into `shouldCloseOnEsc`
- **Breaking:** rename prop `closeOnOverlayClick` into `shouldCloseOnOverlayClick`
- Modal theme properties - to support the newly added `ModalHeader` and `ModalFooter` components in Modal package

#### Added

- Add `ModalHeader` component (@8x8/oxygen-modal-header is deprecated and no longer maintained, please use this instead)
- Add `ModalFooter` component (@8x8/oxygen-modal-footer is deprecated and no longer maintained, please use this instead)
- Add `MODAL_SIZE`, `MODAL_HEADER_ALIGN_TITLE` and `MODAL_FOOTER_ALIGN` constants (see documentation for possible values)
- Add new exposed styled components (together with the new components): `HeaderContainer`, `HeaderTitle`, `HeaderCloseIcon`, `FooterContainer`

### @8x8/oxygen-select

#### Changed

- default menu `z-index` from `1` to `1000`
- focus styles, replace `box-shadow` property with `border-color`

#### Added

- Add theme properties: `menuZindex`,`borderColorFocus`

#### Fixed

- `menuBoxShadowColor` allow all color format

### @8x8/oxygen-text-field

#### Removed

- **Breaking:** Remove prop `iconText`, use `infoBoxText` instead. This change was made to align the props with `Label` component

### @8x8/oxygen-tooltip

#### Removed

- **Breaking:** Remove directions `bottomLeft`, `bottomRight`, `topLeft`, `topRight`, use `bottomStart`, `bottomEnd`, `topStart`, `topEnd` instead

## [0.9.8] - 2020-06-03

### @8x8/oxygen-icon

#### Added

- Add icon: `CoachingIcon`

### @8x8/oxygen-modal

#### Added

- Add prop `disableAutoFocus` which defaults to false

## [0.9.7] - 2020-05-15

### @8x8/oxygen-calendar

#### Added

- defaultFocusedDate prop

## [0.9.6] - 2020-05-14

### @8x8/oxygen-calendar

#### Fixed

- Fix calendar opening at the selected date/start date for range

## [0.9.5] - 2020-05-12

### @8x8/oxygen-date-time-base

#### Added

- Add `isClearable` prop which will add a clear value button for the input

### @8x8/oxygen-date-time-selector

#### Changed

- Update the order of spreading `otherCalendarProps`

#### Added

- Add props `onFocus`, `onBlur`, `isClearable`

## [0.9.4] - 2020-05-08

### @8x8/oxygen-icon

#### Fixed

- Moved the `title` attribute inside an overlaying `<rect>` element to fix the title tooltip visibility issues across multiple browsers

## [0.9.3] - 2020-05-06

### @8x8/oxygen-icon

#### Fixed

- Fix MicIcon to be the outline version

## [0.9.2] - 2020-04-29

### @8x8/oxygen-calendar

#### Added

- Add `enabledDates` prop

## [0.9.1] - 2020-04-22

### @8x8/oxygen-calendar

#### Fixed

- Allow to override days properties in calendar theme

### @8x8/oxygen-date-time-range-selector

#### Fixed

- Start/end time selector should restore the previously selected time if empty value is submitted

### @8x8/oxygen-tooltip

#### Added

- Add prop `includeWrapper` (defaults to `true`). When `false` the `Tooltip` component does not render anything around the target element (no DOM node is added)

#### Fixed

- Change "hover" events from `onMouseOver` and `onMouseOut` to `onMouseEnter` and `onMouseLeave` respectively

## [0.9.0] - 2020-03-12

### @8x8/oxygen-constants

#### Changed

- `timeInputWidth` to 90px for DateTimeRangeSelector
- _Deprecate_ Font sizes: `sizeSmall`, `sizeDefault`, `sizeMedium`, `sizeLarge`, `sizeAttention`, `sizeMax`
- _Deprecate_ Line heights: `lineHeightSmall`, `lineHeightDefault`, `lineHeightMedium`

#### Added

- Add Font sizes: `sizeXs`, `sizeSm`, `sizeMd`, `sizeLg`, `sizeXl`, `sizeXxl`
- Add Line heights: `lineHeightXs`, `lineHeightSm`, `lineHeightMd`, `lineHeightLg`, `lineHeightXl`, `lineHeightXxl`
- Add new method to deprecate properties in constants
- Add `timeInputContainerMarginLeft` and `endTimeErrorColor` for DateTimeRangeSelector

#### Removed

- `dateInputBorderSize` and `dateInputBorderColor` DateTimeRangeSelector decisions

### @8x8/oxygen-date-time-range-selector

#### Changed

- Update theme prop `timeInputWidth` to 90px
- `DropdownButton` and `List` components used to select the time are replaced with `TimeSelector` Oxygen component
- Update `testIds` for time selection (side effect of changing the component used to select time)

#### Added

- Add theme properties: `timeInputContainerMarginLeft` (time input left spacing), `endTimeErrorColor` (color of the time range error message)
- Add `fromLabel`, `startTimeLabel`, `toLabel`, `endTimeLabel` string props, representing the text labels for time section area

#### Removed

- Remove theme props: `dateInputBorderSize`, `dateInputBorderColor`
- Remove `TimeInputListContainer` styled component, which became unnecessary after the time selection component change

### @8x8/oxygen-graphics

#### Changed

- Marked the graphics library side-effect-free to support tree-shaking

### @8x8/oxygen-input

#### Fixed

- Fix `inputRef` property, accepts object, not only function. For objects, sets the ref of the input element as `current`

### @8x8/oxygen-select

#### Fixed

- Icon imports which caused the significant increase of the bundle size

### @8x8/oxygen-slide-out

#### Added

- Add SlideOut

### @8x8/oxygen-slider

#### Added

- Add props: `onDragStart`, `onDragEnd` - callback function to some specific actions

### @8x8/oxygen-time-selector

#### Added

- Add Time Selector component

### @8x8/oxygen-typography

#### Added

- Add Typography component

## [0.8.7] - 2020-02-28

### @8x8/oxygen-calendar

#### Fixed

- Ensure `testId` is unique on day number element

### @8x8/oxygen-constants

#### Changed

- `iconColor` value to `steel700` (previously `cloudyBlue`) in `dateTimeSelector`
- `iconColor` value to `steel700` (previously `cloudyBlue`) in `dateTimeRangeSelector`

#### Added

- Add new colors: `coral200`, `coral700` and `jadeGreen200`
- Add typings for `color`, `timing`, `size`, `spacing` and `keyCode`
- Add theme prop `borderRadius` for `dateTimeRangeSelector`
- Add theme prop `borderRadius` for `dateTimeSelector`

### @8x8/oxygen-date-time-base

#### Changed

- `iconLeft` color will now use the placeholder color when DateTimeSelectorInput has no selected value

#### Added

- Add `borderRadius` for `DateTimeSelectorInput`, by default equal `0`

### @8x8/oxygen-date-time-range-selector

#### Added

- Add `borderRadius` for input, by default equal `0`

#### Fixed

- Ensure `testId` is unique on day number element

### @8x8/oxygen-date-time-selector

#### Added

- Add `borderRadius` for input, by default equal `0`

#### Fixed

- Ensure `testId` is unique on day number element

### @8x8/oxygen-input

#### Changed

- `iconLeft` and `iconRight` colors will now use the placeholder color when input has no value

## [0.8.6] - 2020-01-30

### @8x8/oxygen-select

#### Changed

- Conditional positioning for value and placeholder

## [0.8.5] - 2020-01-28

### @8x8/oxygen-constants

#### Added

- Add `Select` theme prop `controlFocusBoxShadow`

### @8x8/oxygen-select

#### Changed

- `Option` to have `Radio` instead of `Checkbox` when `hasCheckbox` is true but `isMulti` is false
- Placeholder icon and option icon to be customisable using the theme
- Select control box shadow when focused is now using `controlFocusBoxShadow` theme property

#### Added

- Add `MultiValue` custom component for multiple selected options
- Add prop `hasShortMultiDisplay` to specify if multiple selected options should be displayed in short mode
- Add styled components: `MultiValueChip`, `MultiValueChipCloseIcon`, `ValueWrapper`, `ShortMultiDisplay`

#### Fixed

- `Select` top margin to only appear when the `Select` has a `Label`

### @8x8/oxygen-tooltip

#### Added

- Add prop `renderContainer`. Render tooltip's content inside a portal attached to the `renderContainer` value.

## [0.8.4] - 2020-01-07

### @8x8/oxygen-select

#### Changed

- `Label` component is not rendered if `labelValue` prop has no value
- `labelValue` and `infoBoxText` default props value are now `undefined`

## [0.8.3] - 2020-01-07

### @8x8/oxygen-date-time-base

#### Changed

- Default value of property `iconLeft` from `''` to `undefined` in `DateTimeSelectorInput`

### @8x8/oxygen-date-time-range-selector

#### Changed

- Default value of property `iconLeft` from `''` to `undefined` in `DateTimeRangeSelector` and `DateTimeSelectorInput`

### @8x8/oxygen-date-time-selector

#### Changed

- Default value of property `iconLeft` from `''` to `undefined` in `DateTimeSelector` and `DateTimeSelectorInput`

### @8x8/oxygen-select

#### Added

- Add Select

## [0.8.2] - 2019-12-19

### @8x8/oxygen-date-time-base

### @8x8/oxygen-date-time-range-selector

#### Changed

- Property type of `iconLeft` from `node` to `oneOfType([node, func])`

### @8x8/oxygen-date-time-selector

#### Changed

- Property type of `iconLeft` from `node` to `oneOfType([node, func])`

## [0.8.1] - 2019-12-19

### @8x8/oxygen-date-time-base

#### Added

- Add `hasError` to `DateTimeSelectorInput`
- Add `iconLeft` to `DateTimeSelectorInput`
- Add `id` to `DateTimeSelectorInput`
- Add `aria-disabled` to `DateTimeSelectorInput`
- Add `aria-invalid` to `DateTimeSelectorInput`

### @8x8/oxygen-date-time-range-selector

#### Changed

- Deprecate `defaultTitle`, please use `placeholder` instead

#### Added

- Add `DateTimeSelectorInput` props: `hasError`, `iconLeft`, `id`, `aria-disabled`, `aria-invalid`
- Add `DateTimeRangeSelector` props: `placeholder`

### @8x8/oxygen-date-time-selector

#### Added

- Add `DateTimeSelectorInput` props: `hasError`, `iconLeft`, `id`, `aria-disabled`, `aria-invalid`
- Add `DateTimeSelector` props: `placeholder`

## [0.8.0] - 2019-12-12

### @8x8/oxygen-date-time-base

#### Added

- Add property `isValueSelected` which should specify if the Date Time Range Selector or Date Time Selector have a value selected

### @8x8/oxygen-date-time-range-selector

#### Changed

- Update placeholder text color for `DropdownButton`

### @8x8/oxygen-date-time-selector

#### Changed

- Changed the placeholder text color for dropdown button

### @8x8/oxygen-icon

#### Added

- Add icon `SaveSolidIcon`

## [0.7.18] - 2019-12-09

### @8x8/oxygen-constants

#### Changed

- Increased the width of the Input Box of the DateTimeRangeSelector to `380px` to fit text like "12/06/2019 09:07 AM - 12/09/2019 09:07 AM".

#### Added

- Add `DateTimeSelector` theme props: `paddingHorizontal`, `iconMinSize`
- Add `DateTimeRangeSelector` theme props: `paddingHorizontal`, `iconMinSize`

#### Removed

- Remove `DateTimeSelector` theme props: `paddingHorizontalRight`, `paddingHorizontalLeft`
- Remove `DateTimeRangeSelector` theme props: `paddingHorizontalRight`, `paddingHorizontalLeft`

### @8x8/oxygen-date-time-base

#### Changed

- Update icon and title styling to use display flex

#### Added

- Add property that can replace the default input icon

#### Fixed

- Fix click event on icon when selector is disabled

### @8x8/oxygen-date-time-range-selector

#### Changed

- idealDirection of the start and end time selectors are `bottom-start` (old value was `bottom`)
- Increase the width of the Input Box of the DateTimeRangeSelector to `380px` to fit text like "12/06/2019 09:07 AM - 12/09/2019 09:07 AM".
- Set the default value for predefined ranges "Last X Days" and "Last X Months" 1 day and 1 month

#### Added

- Add property that can replace the default input icon
- Add theme props: `paddingHorizontal`, `iconMinSize`

#### Removed

- Remove `paddingHorizontalRight` and `paddingHorizontalLeft`

#### Fixed

- Don't allow negative numbers for "Last X Days" and "Last X Months" predefined ranges

### @8x8/oxygen-date-time-selector

#### Added

- Add a property that can replace the default input icon
- Add theme props: `paddingHorizontal`, `iconMinSize`

#### Removed

- Remove theme props: `paddingHorizontalRight`, `paddingHorizontalLeft`

### @8x8/oxygen-dropdown-button

#### Added

- Add prop `shouldCloseOnInsideClick`, to decide if the dropdown should close when the content of the dropdown is clicked (by default is set `true`)

#### Fixed

- Fix dropdown closing before the children's onClick events got invoked
- The dropdown should close when clicking outside if it is opened by default (using the `isDefaultOpen` flag)

### @8x8/oxygen-icon

#### Removed

- Remove CSS cursor property for default state

## [0.7.17] - 2019-12-02

### @8x8/oxygen-input

#### Fixed

- Fix broken Input focus behavior

## [0.7.16] - 2019-11-28

### @8x8/oxygen-date-time-base

#### Added

- Add date time selector input

### @8x8/oxygen-date-time-selector

#### Added

- Add date time selector

## [0.7.15] - 2019-11-27

### @8x8/oxygen-button

#### Changed

- Reset default focus styles for button element

### @8x8/oxygen-config

#### Changed

- Change `forwarderRef` to `forwardedRef` in `withDeprecation` function

#### Added

- Add conditional forwarded ref in `withTheme` and `withDeprecation` functions for HOCs

### @8x8/oxygen-date-time-range-selector

#### Changed

- Removed static width and height of the container

#### Added

- Add props: `hidePredefinedRanges`, `hideTime`, `otherCalendarProps`

### @8x8/oxygen-dropdown-button

#### Changed

- Replace Flyout with react-popper
- _Deprecate_ directions `bottomLeft`, `bottomRight`, `topLeft`, `topRight`. Please use `bottomStart`, `bottomEnd`, `topStart`, `topEnd` instead.

#### Added

- Add prop `customCloseHandlers`
- Add new directions: `leftStart`, `leftEnd`, `rightStart`, `rightEnd`, `topStart`, `topEnd`, `bottomStart`, `bottomEnd`

### @8x8/oxygen-graphics

#### Added

- Add `NothingToSeeHere` graphic

### @8x8/oxygen-icon

#### Added

- Add `title` property
- Disable pointer events when icon is disabled

### @8x8/oxygen-input

#### Added

- Add `inputRef` prop

### @8x8/oxygen-loaders

#### Fixed

- Add Spinner component animation support on Internet Explorer 11 (IE11)

### @8x8/oxygen-text-link

#### Changed

- Reset default styles for button element

#### Added

- Add prop `as`
- Expose styled components

### @8x8/oxygen-textarea

#### Added

- Add Textarea component

### @8x8/oxygen-toaster

#### Fixed

- Fix unable to close notification with Infinity duration
- Fix pauseExpirationTimeout and resumeExpirationTimeout when duration is set with Infinity

### @8x8/oxygen-tooltip

#### Changed

- Replace Flyout with react-popper
- _Deprecate_ directions `bottomLeft`, `bottomRight`, `topLeft`, `topRight`, please use `bottomStart`, `bottomEnd`, `topStart`, `topEnd` instead

#### Added

- Add prop `customCloseHandlers`
- Add new directions: `leftStart`, `leftEnd`, `rightStart`, `rightEnd`, `topStart`, `topEnd`, `bottomStart`, `bottomEnd`

## [0.7.14] - 2019-11-07

### @8x8/oxygen-constants

### @8x8/oxygen-context-menu

#### Changed

- In `ContextMenuTrigger`: the `contextMenu` event propagation is not anymore stopped at this component

#### Added

- Add `isDisabled` prop to `ContextMenuItem`

#### Removed

- Remove some accidentally exposed styled components: `DescriptionWrapper` and `ItemWrapper`

#### Fixed

- Fix `contextMenuFontSize` typo in `ContextMenuItem`

### @8x8/oxygen-date-time-range-selector

#### Changed

- Replace flyout with react-popper
- Dropdown to close on right click outside

#### Added

- Add prop `customCloseHandlers`

### @8x8/oxygen-icon

#### Added

- Add icons: `CloseCircleIcon`, `CloseCircleSolidIcon`

### @8x8/oxygen-input

#### Added

- Update inputType to support `tel`

### @8x8/oxygen-slider

#### Added

- Add props `expandKnobAreaBy`, `expandTrackAreaBy` to expand the slider's clickable areas (Track and Knob) for easier usage on mobile devices

### @8x8/oxygen-tooltip

#### Added

- Add the possibility to customize the Tooltip appearance using the 'theme' prop

## [0.7.13] - 2019-10-30

### @8x8/oxygen-context-menu

#### Changed

- Change Popper position to fixed

#### Added

- Add zIndex 1000 to context menu
- Add test ids

### @8x8/oxygen-graphics

#### Fixed

- Fix errors returned by graphics package

## [0.7.12] - 2019-10-29

### @8x8/oxygen-context-menu

#### Changed

- Change ContextMenuTrigger children PropType to node

## [0.7.11] - 2019-10-28

### @8x8/oxygen-context-menu

#### Added

- Create Context Menu component

## [0.7.10] - 2019-10-18

### @8x8/oxygen-constants

#### Changed

- Update `DateTimeRangeSelector` footer padding

### @8x8/oxygen-date-time-range-selector

#### Fixed

- Predefined list input field to correctly show the input value received from props
- Dropdown footer padding
- Correctly show error state on predefined list input field after deleting the input text

### @8x8/oxygen-graphics

#### Added

- Add `Clock`, `IncomingCall`, `GetConnected`, `AdministratorPanel` graphics

### @8x8/oxygen-label

#### Fixed

- Fix label positioning by re-adding value as a prop for styled component

## [0.7.9] - 2019-10-07

### @8x8/oxygen-checkbox

#### Changed

- Changed `SwitchBase` component, to auto generate input `id` by default

#### Added

- Add `id` input attribute

### @8x8/oxygen-date-time-range-selector

#### Added

- Add Date Time Range Selector

### @8x8/oxygen-icon

#### Fixed

- Remove IDs from SVG files

### @8x8/oxygen-input

#### Changed

- _Deprecate_ prop `autocomplete`
- Update component API: `autocomplete` to `autoComplete`

#### Added

- Add `isRequired` props
- Add `aria-*` attributes: `aria-disabled`, `aria-invalid`, `aria-required`
- Add `max`, `min` attributes

### @8x8/oxygen-switch-base

#### Changed

- Change `SwitchBase` component to auto generate input `id` by default

#### Added

- Add `id` input attribute

### @8x8/oxygen-tabs

#### Added

- Export styled components
- Add `forwardedRef` prop for Tabs component

### @8x8/oxygen-toggle-button

#### Changed

- Changed `SwitchBase` component to auto generate input `id` by default

#### Added

- Add `id` input attribute

## [0.7.8] - 2019-09-03

### @8x8/oxygen-calendar

#### Fixed

- Update main entry in package.json to point to dist instead of src

### @8x8/oxygen-checkbox

#### Added

- Add infoBoxText property to show Tooltip next to label

### @8x8/oxygen-label

#### Changed

- Rename component API: `iconText` to `infoBoxText`
- _Deprecate_ prop `iconText`

### @8x8/oxygen-radio

#### Added

- Add prop `infoBoxText` to show Tooltip next to label

### @8x8/oxygen-toggle-button

#### Added

- Add infoBoxText property to show Tooltip next to label

## [0.7.7] - 2019-08-30

### @8x8/oxygen-icon

#### Fixed

- Fix `ExclamationCircleIcon` and `ExclamationCircleSolidIcon` fill color
- withDeprecation dependency import into Icon component

## [0.7.6] - 2019-08-29

### @8x8/oxygen-calendar

#### Added

- Add Calendar with limited functionality available: navigation using arrows, navigation using month and year dropdown, selecting a date/date range by clicking on day(s), highlighting the range on mouse move

### @8x8/oxygen-config

#### Added

- `setLogger` method to change the default deprecation logger (default is `console.warn`)
- `withDepracation` HOC to show console warning for deprecated components/properties
- _Note_: the complete documentation of the deprecation process is available in General Documentation/01. Readme/For developers/Deprecation process

### @8x8/oxygen-constants

#### Added

- Add `fontColorActionDisabled` theme value

### @8x8/oxygen-dropdown-button

#### Changed

- Update dropdown shadow to default shadow to align with the rest of the components with shadow
- Update dropdown padding to `xxs sm xxs 0` from `spacing` constants

### @8x8/oxygen-icon

#### Changed

- Deprecate icons: `ExcalmationIcon`, `ExcalmationSolidIcon`

#### Added

- Export Icons in the original SVG format
- Add Props and Theme documentation
- List deprecated icons when building the Icon components

### @8x8/oxygen-label

#### Added

- Add new prop `otherActionProps` which gives the possibility to send custom props to Action component

### @8x8/oxygen-tabs

#### Added

- Add `aria-selected` HTML attribute to button when tab is active
- Add `disabled` HTML attribute to button
- Add default type for html button element
- Call e.preventDefault only when button is disabled
- Add testId attribute on tab

### @8x8/oxygen-text-field

#### Added

- Add pass-through action props

## [0.7.5] - 2019-08-12

### @8x8/oxygen-label

#### Changed

- Update icon used from `InfoIcon` to `InfoCircleIcon` (same as it was before icon updates from `8x8-DS-Icons` repo)

## [0.7.4] - 2019-08-12

### @8x8/oxygen-table

#### Added

- Create Table component

## [0.7.3] - 2019-08-08

### @8x8/oxygen-icon

#### Changed

- Update icons: `InfoIcon`, `InfoSolidIcon`, `PhoneTransferIcon`, `PhoneTransferSolidIcon`, `CheckSmallIcon` (camel case `stroke-linecap`, `stroke-linejoin` props), `SimultaneouslyIcon` (camel case `clip-path` prop)

#### Added

- Add new icons: `InfoCircleIcon`, `InfoCircleSolidIcon`, `InfoCircleSmallIcon`, `InfoCircleSmallSolidIcon`, `PhoneArrowOutSolidIcon`

### @8x8/oxygen-input

#### Added

- Add `autocomplete` HTML attribute

## [0.7.2] - 2019-07-25

### @8x8/oxygen-milestone-tracker

#### Added

- Update component to support consumer defined sizes for bullets and scale automatically
- Add cursor styling for the case when we have onClick on a milestone
- Add prop `showRoads` to control if roads between milestones are to be displayed or not

#### Removed

- Remove props `isSmall` as is no longer necessary

## [0.7.1] - 2019-07-22

### @8x8/oxygen-badge

#### Added

- Document the exposed configuration values: `badgeSize`, `badgePosition`, `badgeType` in `README.md`

### @8x8/oxygen-checkbox

#### Changed

- Change **name** default property value to `undefined`

### @8x8/oxygen-icon

#### Added

- Add new icons: `AccountSettingsIcon`, `AccountSettingsSolidIcon`

### @8x8/oxygen-radio

#### Changed

- Add relative position for radio's container element
- Change **name** default property value to `undefined`

### @8x8/oxygen-toggle-button

#### Changed

- Change **name** default property value to `undefined`

## [0.7.0] - 2019-07-08

### @8x8/oxygen-milestone-tracker

#### Changed

- Update component to render small milestones based on `isSmall` prop
- Update component to support description as node

#### Added

- Add milestone tracker component

## [0.6.17] - 2019-07-03

### @8x8/oxygen-radio

#### Fixed

- Fix value check so that it will handle the cases when the value is false or 0

## [0.6.16] - 2019-07-01

### @8x8/oxygen-checkbox

#### Changed

- Update SwitchBase component to generate input id based on value and name

### @8x8/oxygen-input

#### Added

- Add support for value as number

### @8x8/oxygen-label

#### Changed

- Updated styling to have cursor as pointer for the value text only if we have the htmlFor attribute

### @8x8/oxygen-radio

#### Changed

- Update Radio component to generate input id based on value and name

### @8x8/oxygen-toggle-button

#### Changed

- updated SwitchBase component to generate input id based on value and name

### @8x8/oxygen-tooltip

#### Changed

- Update tooltip to render children inside a div instead of a span

## [0.6.15] - 2019-06-26

### @8x8/oxygen-constants

#### Added

- Add spacing tokens

### @8x8/oxygen-slider

#### Added

- Create Slider component

## [0.6.13] - 2019-06-20

### @8x8/oxygen-icon

#### Changed

- update build script, for `BrandLogoIcon` add extra properties for the component

#### Added

- Add icon `BrandLogoIcon` (should have default viewBox of `0 0 140 63`, when using it you can have it as `<BrandLogoIcon viewBox="0 0 140 63" link />`)
- Add icons: `CheckSmallIcon`, `CircleIcon`, `ExclamationLetterIcon`

## [0.6.12] - 2019-06-07

### @8x8/oxygen-graphics

#### Changed

- Modify WorkingDesk SVG attributes

#### Added

- Add forwardRef property for each SVG
- Add @8x8/oxygen-config as peer dependency

## [0.6.11] - 2019-06-06

### @8x8/oxygen-graphics

#### Added

- Add `Ghostly` and `WorkingDesk` graphics

## [0.6.10] - 2019-06-05

### @8x8/oxygen-icon

#### Added

- Add new icons: `MoneyIcon`, `RoundRobinIcon`, `SequentiallyIcon`, `SimultaneouslyIcon`

## [0.6.9] - 2019-06-03

### @8x8/oxygen-avatar

#### Changed

- updated test attributes

## [0.6.8] - 2019-05-16

### @8x8/oxygen-checkbox

#### Added

- Add test attributes

### @8x8/oxygen-label

#### Added

- Add test attributes

### @8x8/oxygen-radio

#### Added

- Add test attributes for radio

### @8x8/oxygen-toggle-button

#### Added

- Add test attributes

## [0.6.7] - 2019-05-08

### @8x8/oxygen-icon

#### Changed

- update readme: clarify integration and development steps
- disable the user selection of the link icons (prevent accidentally text selection by multiple clicks on a link icon)

#### Added

- Add new icons: `GlobalSolidIcon`, `TargetIcon`, `TargetSolidIcon`, `TileIcon`, `TileSolidIcon`, `DepartmentIcon`

### @8x8/oxygen-input

#### Added

- Add maxLength attribute for Input component

### @8x8/oxygen-loaders

#### Added

- Add test attributes for spinner

## [0.6.6] - null

### @8x8/oxygen-button

#### Added

- Add `as` (default `button`) that allows to use any HTML tag for rendering. The `type` property is used only to set HTML attribute type for the element

### @8x8/oxygen-toast

#### Changed

- Decrease the default maximum height of a toast to 120px to exactly fit 4 lines of text

#### Added

- Add testIds

### @8x8/oxygen-toaster

#### Added

- Add testIds

#### Fixed

- fix Toaster positioning on IE11

## [0.6.5] - null

### @8x8/oxygen-avatar

#### Added

- Add the possibility to pass custom content to `Avatar` component via children

### @8x8/oxygen-button

#### Changed

- Pass through the props to root component in `ButtonGroup`

#### Added

- Add `hasVerticalSpacing` (default `false`) and `hasHorizontalSpacing` (default `true`) props to `ButtonGroup` to be able to set spacing for vertically stacked buttons in the group

#### Fixed

- Fix the `type` property of the `Button`, which act as the `as` property in styled-components: sets the type of the rendered DOM Node (by default: `'button'`)

### @8x8/oxygen-dropdown-button

#### Added

- Add relative positioning to the dropdown wrapper to fix the z-index

### @8x8/oxygen-modal

#### Changed

- Apply the z-index value on modal container fixed element
- Update Modal Storybook: add customizable element to verify the z-index behaviour

### @8x8/oxygen-overlay

#### Changed

- Change the `Overlay` positioning from absolute to fixed

### @8x8/oxygen-toast

#### Changed

- Remove the z-index value from `Toast` component, moved to the container of the `Toaster`

### @8x8/oxygen-toaster

#### Changed

- update Toaster Storybook: add customizable element to verify the z-index behaviour

#### Added

- add the z-index value to the container of the `Toaster`, moved here from `Toast`

## [0.6.4] - null

### @8x8/oxygen-avatar

#### Added

- Add `Avatar` component

### @8x8/oxygen-constants

#### Added

- Expose `zIndex` object with the currently used values (1000, 2000, 3000, 4000, 5000), for example: `zIndex.z2000`

### @8x8/oxygen-dropdown-button

#### Changed

- Update z-index value of Dropdown button menu to 3000

### @8x8/oxygen-modal

#### Changed

- update z-index value of Modal to 2000

#### Added

- exposes styled components

### @8x8/oxygen-overlay

#### Changed

- Update z-index value of Overlay to 1000

### @8x8/oxygen-static-tooltip

#### Changed

- update z-index value of Static Tooltip to 4000

### @8x8/oxygen-toast

#### Changed

- update z-index value of Toast to 5000

## [0.6.3] - null

### @8x8/oxygen-badge

#### Changed

- Update component APIs `inner` to `isInner`

### @8x8/oxygen-breadcrumbs

#### Added

- Add initial component structure

### @8x8/oxygen-button

#### Changed

- Rename component APIs: `active` to `isActive`, `disabled` to `isDisabled`, `shadow` to `hasShadow`

### @8x8/oxygen-checkbox

#### Added

- Add Checkbox component

### @8x8/oxygen-input

#### Changed

- Move theme properties `descriptionFontSize` to `textField` theme
- Update component APIs: `disabled` to `isDisabled` & `required` to `isRequired`

### @8x8/oxygen-label

#### Changed

- Update component APIs: `disabled` to `isDisabled` & `required` to `isRequired`

### @8x8/oxygen-radio

#### Added

- Add Radio component

### @8x8/oxygen-text-field

#### Changed

- Rename props: `disabled` into `isDisabled`, `required` into `isRequired`

#### Added

- Add dedicated theme `textField` which contains themes: `label`, `input`
- Add prop `labelOrientation`

## [0.6.0] - null

### @8x8/oxygen-text-link

#### Added

- Add initial component structure

## [0.5.0] - null

### @8x8/oxygen-badge

#### Added

- Add new `prop`: `type` one of: [`primary`, `secondary`]
- Add new `prop`: `children`

#### Removed

- Remove `props`: `secondary`, `value`

## [0.4.6] - null

### @8x8/oxygen-button

#### Added

- Add `align` props for `<ButtonGroup/>`

## [0.4.5] - null

### @8x8/oxygen-badge

#### Added

- Add initial component structure

### @8x8/oxygen-button

#### Added

- Add initial component structure

### @8x8/oxygen-input

#### Added

- Add initial component structure

### @8x8/oxygen-label

#### Added

- Add initial component structure

### @8x8/oxygen-loaders

#### Added

- Add initial component structure

## [0.2.0] - null

### @8x8/oxygen-dropdown-button

#### Added

- Add new props `idealDirection` for displaying dropdown element

## [0.1.0] - null

### @8x8/oxygen-dropdown-button

#### Added

- Add initial component structure

### @8x8/oxygen-icon

#### Added

- Add Icon component

### @8x8/oxygen-list

#### Added

- Add initial component structure

### @8x8/oxygen-tabs

#### Added

- Add initial component structure

### @8x8/oxygen-text-field

#### Added

- Add initial component structure

### @8x8/oxygen-user-status

#### Added

- Add initial component structure
