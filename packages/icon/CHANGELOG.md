# @8x8/oxygen-icon CHANGELOG

## [Unreleased]

## [2.98.0] - 2025-10-01

### Added

- Add new icons: `BotIcon`, `BrainIcon`, `TicketIcon` (OX-3779)

## [2.96.0] - 2025-08-06

### Added

- Add new icon: `SquareSolidIcon` (OX-3629)

## [2.93.0] - 2025-07-03

### Added

- Add new icon: `PurgeIcon` (OX-3525)

## [2.91.0] - 2025-05-28

### Added

- Add new icons: `ResumeIcon`, `Stop2Icon` (OX-3444)
- Add new icon: `WorkSettingsIcon` (OX-3449)

## [2.90.0] - 2025-05-08

### Added

- Add new icon: `EngageIcon` (OX-3348)

## [2.88.0] - 2025-04-04

### Added

- Add new icon: `FaceMixedIcon` (OX-3298)

## [2.87.0] - 2025-03-31

### Changed

- Fully support named exports with tree shaking. The recommended way for icon imports going forward is `import { IconName } from '@8x8/oxygen-icon` (OX-3260)
- Named exports will return the Novo icon instead of the Classic icon. Applies to the following 108 items: `AcrobatIcon`, `ArchiveIcon`, `ArrowDiagonalInIcon`, `ArrowDownIcon`, `ArrowFirstIcon`, `ArrowLastIcon`, `ArrowRightIcon`, `ArrowUpIcon`, `AudiowaveIcon`, `BellIcon`, `BellTickIcon`, `BestFitIcon`, `CalendarIcon`, `CameraIcon`, `CardIcon`, `CellphoneIcon`, `CheckIcon`, `ClockIcon`, `CloseCircleIcon`, `CloseLargeIcon`, `ComputerIcon`, `CopyIcon`, `DashboardIcon`, `DatabaseIcon`, `DialpadIcon`, `DirectoryIcon`, `DotsHorizontalIcon`, `DotsVerticalIcon`, `DownloadIcon`, `EnvelopeExclamationIcon`, `EnvelopeIcon`, `EvaluateIcon`, `ExpandIcon`, `EyeIcon`, `FacebookIcon`, `FaceFrownIcon`, `FaceNeutralIcon`, `FaceSmileIcon`, `FaxIcon`, `FeedbackIcon`, `FilterIcon`, `FolderIcon`, `FolderOpenIcon`, `Forward10Icon`, `ForwardIcon`, `GearIcon`, `GoogleIcon`, `HangupIcon`, `HeadsetIcon`, `HoldCircleIcon`, `HoldIcon`, `HomeIcon`, `ImageIcon`, `InactiveIcon`, `InfoCircleIcon`, `LeaveIcon`, `ListIcon`, `LockIcon`, `MessageIcon`, `MicIcon`, `MicSlashIcon`, `MinusCircleIcon`, `MinusIcon`, `MissedCallIcon`, `NoteIcon`, `OfficeBuildingIcon`, `OutlookIcon`, `PaperclipIcon`, `PauseIcon`, `PencilIcon`, `PhoneIcon`, `PhoneRingingIcon`, `PhoneTransferIcon`, `PinIcon`, `PlayIcon`, `PlusCircleIcon`, `PopInIcon`, `PopOutIcon`, `RecordIcon`, `RefreshIcon`, `ReplyIcon`, `ResetIcon`, `Rewind10Icon`, `RingGroupIcon`, `ScreenshareIcon`, `SearchIcon`, `SendIcon`, `ShareIcon`, `SignatureIcon`, `SortIcon`, `StarIcon`, `StopwatchIcon`, `SurveyIcon`, `TableIcon`, `TagIcon`, `TargetIcon`, `TranslateIcon`, `TrashIcon`, `TwitterIcon`, `UndoIcon`, `UnlockIcon`, `UserGroupsLineIcon`, `UserIcon`, `UsersIcon`, `VideoIcon`, `VoicemailIcon`, `VolumeOffIcon`, `VolumeUpIcon` (OX-3260)

## [2.86.0] - 2025-03-21

### Added

- Add new icon: `PerformanceIcon` (OX-3225)
- Add new icon: `OmnichannelIcon` (clone as replacement from typo `OminchannelIcon`, and hide `OminchannelIcon` from storybook) (OX-3266)

### Fixed

- Ensure icons maintain their size and alignment, even when text wraps or exceeds available space. (OX-3228)

## [2.85.0] - 2025-03-07

### Added

- Add new icons: `RcsIcon`, `AiComposeIcon` (OX-3116)

## [2.80.0] - 2025-02-17

### Added

- Add new icons: `ThumbUpIcon`, `ThumbDownIcon` (OX-3010)

## [2.78.0] - 2025-01-22

### Added

- Add new icon: `ViberIcon` (OX-2880)

## [2.75.0] - 2024-12-04

### Added

- Add new icons: `StopScreenshareIcon`, `TopicIcon` (OX-2801)

## [2.70.1] - 2024-09-02

### Fixed

- Missing raw SVG are back (OX-2516)

## [2.69.0] - 2024-07-30

### Changed

- IconProps now extends `React.HTMLAttributes<SVGElement>`

## [2.68.0] - 2024-07-19

### Added

- Add new icons: `FacebookIcon`, `XbrandIcon` (OX-2412)

- Add new icons: `AcrobatIcon`, `BellTickIcon`, `CardIcon`, `CellphoneIcon`, `EnvelopeExclamationIcon`, `EnvelopeTickIcon`, `EyeHideIcon`, `GoogleIcon`, `GroupMessageIcon`, `InactiveIcon`, `NewMessageIcon`, `OutlookIcon`, `RecordIcon`, `SurveyIcon` (OX-2373)

## [2.67.0] - 2024-06-27

### Added

- Add new icons: `UserLeftIcon`, `UserDeletedIcon` (OX-2268)
- Add new icons: `HighlightIcon`, `DisableIcon` (OX-2327)

## [2.66.0] - 2024-05-14

### Added

- Add new icon: `VoiceRecordSettingsIcon` (OX-2223)
- Add new icons: `ChannelsIcon`, `ClockIcon`, `ForwardClockIcon`, `RewindClockIcon` (OX-2223)

## [2.61.0] - 2024-03-11

### Added

- Add new `SwapIcon` (OX-2007)

## [2.59.0] - 2024-02-28

### Added

- Add new `FaceNeutralIcon` (OX-1948)

## [2.56.0] - 2024-01-29

### Changed

- Update on the property `role` to be `presentation` if `title` isn't set (OX-1698)

### Added

- Add new icons: `LockIcon`, `UnlockIcon` (OX-1803)

## [2.52.0] - 2023-12-07

### Added

- Add new icon: `BellAlertIcon` (OX-1644)
- Add new icon: `DoubleDotsVerticalIcon` (OX-1650)

## [2.49.0] - 2023-11-08

### Added

- Add new icons: `MinusIcon`, `ShoppingCartIcon` (OX-1573)

## [2.47.0] - 2023-10-18

### Added

- Add new icons: `BackOfficeIcon`, `LoginIcon`, `ResumeCallIcon` (OX-1476)

## [2.42.0] - 2023-09-05

### Changed

- Simplified icon update steps in the readme (OX-1313)

### Added

- Add new icon: `MsteamsIcon` (OX-1313)

## [2.36.0] - 2023-06-27

### Added

- Add new icons: `ArrowRightIcon`, `ComputerIcon`, `ConnectionIcon` (OX-1229)

## [2.35.0] - 2023-06-20

### Added

- Add new icons: `DashboardAddIcon`, `SaveIcon` (OX-1212)
- Add new icon: `SpellcheckIcon` (OX-1217)

## [2.34.0] - 2023-06-08

### Added

- Add new icons: `EvaluateIcon`, `RerouteIcon`, `RolesPermissionsIcon`, `Work8x8Icon` (OX-1183)

## [2.32.0] - 2023-05-19

### Changed

- Update `react` (& `react-dom` if used) peerDependencies to "^16.8.2 || ^17 || ^18" (OX-1069)

### Added

- Add new icons: `ApiIcon`, `MergeIcon`, `SecurityOffIcon`, `SecurityOnIcon`, `SitesIcon` (OX-1139)

## [2.30.0] - 2023-05-04

### Added

- Add new icons: `FolderOpenIcon`, `HoldCircleIcon`, `MinusCircleIcon` (OX-1125)

## [2.29.0] - 2023-04-26

### Added

- Add new icons: `DevicesIcon`, `ExtensionNumbersIcon`, `GroupCallPickupsIcon`, `TableIcon` (OX-1102)

## [2.26.0] - 2023-03-03

### Added

- Add new icons: `ArrowDownLongIcon`, `ArrowUpLongIcon`, `InboundCallIcon`, `InboundEmailIcon`, `MsteamsSyncIcon`, `OutboundCallIcon`, `OutboundEmailIcon`, `PivotTableIcon` (OX-954)
- Add new role attribute with the default "img" on the `Icon` component and removed the "rect" element with the extra "title" element (OX-788)

## [2.25.0] - 2023-03-01

### Added

- Add new icons: `BargeCallIcon`, `DefaultTerminationIcon`, `DequeuedIcon`, `ExternalNumberForwardIcon`, `HoldMusicIcon`, `InQueueTreatmentIcon`, `IvrForwardExternalIcon`, `QueueForwardIcon`, `QueueTimeOutIcon`, `RandomiseIcon`, `FxIcon`, `StartWhisperIcon`, `StopWhisperIcon`, `TagIcon`, `TestVariableIcon`, `VoicemailForwardIcon` (OX-945)

## [2.23.0] - 2023-02-10

### Fixed

- Moved `@8x8/oxygen-constants` from _peerDependencies_ to _dependencies_ and updated to the correct version (OX-916)
- Remove `forwardedRef` propType definition from `Icon` component (OX-918)

## [2.22.0] - 2023-02-07

### Added

- Add new icons: `DoubleArrowLeftIcon`, `DoubleArrowRightIcon` (OX-913)

## [2.20.0] - 2023-01-20

### Added

- Export `IconProps` interface (OX-884)

## [2.19.0] - 2022-12-22

### Changed

- Converted to typescript. There shouldn't be any visible changes. Added exported types Classic icons and util files (OX-778)

### Added

- Add new icons: `ArrowSolidDownIcon`, `ArrowSolidUpIcon`, `FaxIcon`, `InboundInternalCallIcon`, `OutboundInternalCallIcon` (OX-775)

## [2.18.0] - 2022-11-25

### Fixed

- Fix typo, rename `NewOpporunityIcon` into `NewOpportunityIcon` (OX-764)

## [2.17.0] - 2022-11-21

### Changed

- Update devDependencies `recursive-readdir` to `2.2.3` (OX-744)
- Update devDependency `svgo` to `3.0.0` (OX-744)
- Update SVGO usage to match new API (used by the `yarn generate:svg:components` script) (OX-744)
- Remove extra SVGO plugins config (most are part of the default preset) https://github.com/svg/svgo#default-preset (OX-744)
- Update builder script to mjs (OX-744)
- Rename Storybook `Guideline` page to `Guidelines` (OX-744)
- Guidelines remove `link` prop from Icon components (OX-744)
- Update Playground page & keep a single one (no need to duplicate between Classic and Noco icons) (OX-744)

### Added

- Add new icons under the `Novo` iconSet: `AddReactionIcon`, `BlockNumberPhoneIcon`, `BlockSmsIcon`, `BlockquoteIcon`, `CodeBlockIcon`, `CodeIcon`, `DocumentFileIcon`, `EraserIcon`, `MarkUnreadIcon`, `MessageInboundIcon`, `MessageOutboundIcon`, `RefreshIcon`, `SmsOutboundIcon`, `StrikethroughIcon`, `UnblockNumberPhoneIcon`, `UnblockSmsIcon` (OX-747)

### Removed

- Removed devDependencies: `fs-extra` (OX-744)

## [2.16.0] - 2022-10-21

### Added

- Add new icons under the `Novo` iconSet: `DatabaseIcon`, `HomeIcon`, `IvrIcon`, `RefreshIcon`, `WrapUpIcon` (OX-739)

## [2.15.0] - 2022-10-12

### Changed

- Update `HanshakeIcon` with new design (OX-732)

## [2.12.0] - 2022-08-29

### Added

- Add new icons under the `Novo` iconSet: `EnterIcon` (OX-702)

## [2.11.0] - 2022-08-16

### Added

- Add new icons under the `Novo` iconSet: `CloudUnsyncedIcon`, `ListenIcon` (OX-700)

## [2.9.0] - 2022-07-13

### Changed

- The _builder.js_ script to also generate `*.d.ts` for the `Novo` iconSet (OX-679)

### Added

- Add Icon typings files for the `Novo` iconSet (OX-679)

## [2.8.0] - 2022-07-11

### Added

- Add new icons under the `Novo` iconSet: `CloudSyncSuccessIcon`, `CloudSyncFailIcon` (OX-671)

## [2.7.0] - 2022-07-01

### Changed

- Update `HandshakeIcon` (new design) (OX-668)

### Added

- Add new icons under the `Novo` iconSet: `ReplyAllIcon`, `ReplyIcon`, `RingGroupIcon`, `SortIcon` (OX-668)

## [2.6.1] - 2022-06-27

### Fixed

- Fix Storybook Page issue where `Label` is not found (OX-660)

## [2.5.0] - 2022-06-10

### Added

- Add new icons under the _Novo_ iconSet: `PinFilledIcon`

## [2.2.0] - 2022-05-10

### Added

- Add new icons under the _Novo_ iconSet: `HandshakeIcon`, `BlockNumberIcon`, `CloudSyncIcon`, `PinIcon`, `UnblockNumberIcon`

## [2.1.0] - 2022-03-31

### Added

- Add new icons under the _Novo_ iconSet: `AnnounceIcon`, `ArchiveIcon`, `ArrowDiagonalLeftDownIcon`, `ArrowDiagonalRightUpIcon`, `ArrowFirstIcon`, `ArrowLastIcon`, `BestFitIcon`, `Forward10Icon`, `ResetIcon`, `Rewind10Icon`, `TranscriptIcon`, `VideoSlashIcon`

## [2.0.0] - 2022-03-03

### Added

- Add new icon under the _Novo_ iconSet: `SkipIcon`

## [1.20.0] - 2022-03-02

### Added

- Add new icon unde the _Novo_ iconSet: `StopwatchIcon`

## [1.18.0] - 2022-02-16

### Added

- Add new icon under the _Novo_ iconSet: `HostIcon`
- Add new icons under the _Classic_ iconSet: `CheckboxCheckedIcon`, `CheckboxIndeterminateIcon`, `CheckboxUncheckedIcon`

## [1.17.0] - 2022-01-26

### Added

- Add new icon under the _Novo_ iconSet: `ParkReturnIcon`

## [1.16.0] - 2021-11-18

### Changed

- Rename `FavouriteIcon` into `FavoriteIcon` (use US spelling for consistency)

### Added

- Add new icon under the _Novo_ iconSet: `FavoriteSolidIcon`

## [1.15.0] - 2021-10-15

### Changed

- Updated `DarIcon` (_Novo_ iconset) from a textual representation to a iconographic one

### Added

- Add new icons under the _Novo_ iconset: `AddUserIcon`, `ArrowDiagonalOutIcon`, `BellOffIcon`, `BookIcon`, `ColumnInsertIcon`, `DotsHorizontalIcon`, `FavouriteIcon`, `KnowledgeBaseIcon`, `LogCallIcon`, `NewCaseIcon`, `NewContactIcon`, `NewEventIcon`, `NewLeadIcon`, `NewOpporunityIcon`, `NewTaskIcon`, `PopInIcon`, `PopOutIcon`, `ScreenshareIcon`, `ShareIcon`, `StopIcon`, `TranslateIcon`, `VersionIcon`

## [1.11.0] - 2021-09-16

### Added

- Add new icon under the _Novo_ iconset: `PhoneRetrieveIcon`
- Add new icons under the _Classic_ iconset: `PreChatSolidIcon`, `PreChatIcon`

## [1.8.0] - 2021-08-03

### Added

- Add new icons under the _Novo_ iconset: `AtMarkIcon`, `CameraIcon`, `CannedMessageIcon`, `DarIcon`, `DashboardIcon`, `DownloadIcon`, `ErrorIcon`, `FolderIcon`, `HistoryIcon`, `ImageIcon`, `InboxTrayIcon`, `InstagramIcon`, `MissedCallIcon`, `ParkedIcon`, `RecordingIcon`, `SignatureIcon`, `SmsIcon`, `SnoozeIcon`, `StarIcon`, `TwitterIcon`

### Removed

- Remove `CloseCricleIcon` (typo duplicate form `CloseCircleIcon`)

## [1.6.0] - 2021-06-09

### Changed

- Icons updated (very slight path updates, mostly unnoticeable): `DirectoryIcon`, `FaceSmileIcon`, `HangupIcon`, `HoldIcon`, `MessengerIcon`, `PaperclipIcon`, `PencilIcon`, `PhoneRingingIcon`, `PhoneTransferIcon`, `PhoneIcon`, `PlayIcon`, `SendIcon`, `TargetIcon`, `UserGroupsLineIcon`, `UsersIcon`, `VolumeOffIcon`, `VolumeUpIcon`, `WaveIcon`, `WhatsappIcon`
- Icons renamed: `PlusLargeIcon` => `PlusIcon`

### Added

- Add new icons under _Novo_ iconset: `ArrowLeftLongIcon`, `ArrowRightLongIcon`, `ArrowUpIcon`, `CloseCircleIcon`, `ContractIcon`, `FaceFrownIcon`, `ForwardIcon`, `RedoIcon`, `TextTemplateIcon`, `TransferIcon`, `TrashIcon`, `UndoIcon`

### Removed

- Removed icon `CheckedIcon`

## [1.4.1] - 2021-05-13

### Fixed

- Fix missing files on published module

## [1.4.0] - 2021-05-13

### Changed

- Icon storybook to showcase both **Classic** and **Novo** icon sets

### Added

- Add icons under the _Novo_ iconset: `ArrowDiagonalInIcon`, `ArrowDownIcon`, `ArrowLeftIcon`, `AudiowaveIcon`, `BellIcon`, `BriefcaseIcon`, `BurgerIcon`, `CalendarIcon`, `CheckIcon`, `CheckboxIcon`, `CheckedIcon`, `CheckfilledIcon`, `CloseCricleIcon`, `CloseLargeIcon`, `CopyIcon`, `DialpadIcon`, `DirectoryIcon`, `DotsVerticalIcon`, `EnvelopeIcon`, `ExclamationIcon`, `ExpandIcon`, `EyeIcon`, `FaceSmileIcon`, `FaqIcon`, `FeedbackIcon`, `FilterIcon`, `GearIcon`, `HangupIcon`, `HeadsetIcon`, `HoldIcon`, `IndeterminateIcon`, `IndeterminatefilledIcon`, `InfoCircleIcon`, `LeaveIcon`, `ListIcon`, `MessageIcon`, `MessengerIcon`, `MicIcon`, `MicSlashIcon`, `NoteIcon`, `NoteNewIcon`, `OfficeBuildingIcon`, `OminchannelIcon`, `PaperclipIcon`, `PauseIcon`, `PencilIcon`, `PhoneIcon`, `PhoneRingingIcon`, `PhoneTransferIcon`, `PlayIcon`, `PlaylistIcon`, `PlusCircleIcon`, `PlusLargeIcon`, `RadioIcon`, `RadiofilledIcon`, `SearchIcon`, `SendIcon`, `SwitchboardIcon`, `TargetIcon`, `UserGroupsLineIcon`, `UserIcon`, `UsersIcon`, `VideoIcon`, `VoicemailIcon`, `VolumeOffIcon`, `VolumeUpIcon`, `WaveIcon`, `WhatsappIcon`

## [1.2.7] - 2021-01-21

### Added

- Add icons: `CallRecordIcon`, `ArchiveRetrieveIcon`, `MessengerBlackIcon`, `TwitterBlackIcon`, `WhatsappBlackIcon`

## [1.2.1] - 2020-12-09

### Added

- Add icon `SpeedDialIcon`

## [1.1.8] - 2020-10-15

### Added

- Add icons: `CounterIcon`, `AreaGraphIcon`, `AreaGraphDashIcon`, `AreaGraphSolidIcon`, `BarStackedGraphIcon`, `BarStackedGraphHorizontalIcon`, `LineDashChartIcon`

## [1.1.6] - 2020-09-17

### Added

- Add icon `StoragePoliciesIcon`

## [1.1.5] - 2020-09-14

### Added

- Add icons: `FireIcon`, `WinterIcon`

## [1.1.4] - 2020-09-11

### Changed

- Updated icons (fixed outer SVG path): `SendIcon`, `SendSolidIcon`

### Added

- Add icons: `BellSnoozeIcon`, `BellSnoozeSolidIcon`

## [1.1.0] - 2020-08-20

### Added

- Add icons: `IdentityManagementIcon`, `LicenseIcon`, `VideoWorkIcon`

### Changed

- Updated icons: `SendIcon`, `SendSolidIcon`

## [1.0.1] - 2020-08-05

### Changed

- Update `svgo` to `1.3.2`

### Added

- Add icons: `SendIcon`, `SendSolidIcon`

## [1.0.0] - 2020-07-24

### Removed

- **Breaking:**: Remove `ExcalmationIcon` and `ExcalmationSolidIcon`.<br /> Please use `ExclamationCircleIcon` and `ExclamationCircleSolidIcon` instead

## [0.9.8] - 2020-06-03

### Added

- Add icon: `CoachingIcon`

## [0.9.4] - 2020-05-08

### Fixed

- Moved the `title` attribute inside an overlaying `<rect>` element to fix the title tooltip visibility issues across multiple browsers

## [0.9.3] - 2020-05-06

### Fixed

- Fix MicIcon to be the outline version

## [0.8.0] - 2019-12-12

### Added

- Add icon `SaveSolidIcon`

### Fixes

- Fix icon `AddressBookSolidIcon`

## [0.7.18] - 2019-12-09

### Removed

- Remove CSS cursor property for default state

## [0.7.15] - 2019-11-27

### Added

- Add `title` property
- Disable pointer events when icon is disabled

## [0.7.14] - 2019-11-07

### Added

- Add icons: `CloseCircleIcon`, `CloseCircleSolidIcon`

## [0.7.9] - 2019-10-07

### Fixed

- Remove IDs from SVG files

## [0.7.7] - 2019-08-30

### Fixed

- Fix `ExclamationCircleIcon` and `ExclamationCircleSolidIcon` fill color
- withDeprecation dependency import into Icon component

## [0.7.6] - 2019-08-29

### Changed

- Deprecate icons: `ExcalmationIcon`, `ExcalmationSolidIcon`

### Added

- Export Icons in the original SVG format
- Add Props and Theme documentation
- List deprecated icons when building the Icon components

## [0.7.3] - 2019-08-08

### Added

- Add new icons: `InfoCircleIcon`, `InfoCircleSolidIcon`, `InfoCircleSmallIcon`, `InfoCircleSmallSolidIcon`, `PhoneArrowOutSolidIcon`

### Changed

- Update icons: `InfoIcon`, `InfoSolidIcon`, `PhoneTransferIcon`, `PhoneTransferSolidIcon`, `CheckSmallIcon` (camel case `stroke-linecap`, `stroke-linejoin` props), `SimultaneouslyIcon` (camel case `clip-path` prop)

## [0.7.1] - 2019-07-22

### Added

- Add new icons: `AccountSettingsIcon`, `AccountSettingsSolidIcon`

## [0.6.13] - 2019-06-20

### Changed

- update build script, for `BrandLogoIcon` add extra properties for the component

### Added

- Add icon `BrandLogoIcon` (should have default viewBox of `0 0 140 63`, when using it you can have it as `<BrandLogoIcon viewBox="0 0 140 63" link />`)
- Add icons: `CheckSmallIcon`, `CircleIcon`, `ExclamationLetterIcon`

## [0.6.10] - 2019-06-05

### Added

- Add new icons: `MoneyIcon`, `RoundRobinIcon`, `SequentiallyIcon`, `SimultaneouslyIcon`

## [0.6.7] - 2019-05-08

### Changed

- update readme: clarify integration and development steps
- disable the user selection of the link icons (prevent accidentally text selection by multiple clicks on a link icon)

### Added

- Add new icons: `GlobalSolidIcon`, `TargetIcon`, `TargetSolidIcon`, `TileIcon`, `TileSolidIcon`, `DepartmentIcon`

## [0.1.0]

### Added

- Add Icon component
