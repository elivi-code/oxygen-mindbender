import React from 'react';

import { Label, Section, ComponentSection } from '@8x8/oxygen-storybook-utils';

import { AcrobatIcon } from '@8x8/oxygen-icon';
import { AddReactionIcon } from '@8x8/oxygen-icon';
import { AddUserIcon } from '@8x8/oxygen-icon';
import { AiComposeIcon } from '@8x8/oxygen-icon';
import { AnnounceIcon } from '@8x8/oxygen-icon';
import { ApiIcon } from '@8x8/oxygen-icon';
import { ArchiveIcon } from '@8x8/oxygen-icon';
import { ArrowDiagonalInIcon } from '@8x8/oxygen-icon';
import { ArrowDiagonalLeftDownIcon } from '@8x8/oxygen-icon';
import { ArrowDiagonalOutIcon } from '@8x8/oxygen-icon';
import { ArrowDiagonalRightUpIcon } from '@8x8/oxygen-icon';
import { ArrowDownLongIcon } from '@8x8/oxygen-icon';
import { ArrowDownIcon } from '@8x8/oxygen-icon';
import { ArrowFirstIcon } from '@8x8/oxygen-icon';
import { ArrowLastIcon } from '@8x8/oxygen-icon';
import { ArrowLeftLongIcon } from '@8x8/oxygen-icon';
import { ArrowLeftIcon } from '@8x8/oxygen-icon';
import { ArrowRightLongIcon } from '@8x8/oxygen-icon';
import { ArrowRightIcon } from '@8x8/oxygen-icon';
import { ArrowSolidDownIcon } from '@8x8/oxygen-icon';
import { ArrowSolidUpIcon } from '@8x8/oxygen-icon';
import { ArrowUpLongIcon } from '@8x8/oxygen-icon';
import { ArrowUpIcon } from '@8x8/oxygen-icon';
import { AtMarkIcon } from '@8x8/oxygen-icon';
import { AudiowaveIcon } from '@8x8/oxygen-icon';
import { BackOfficeIcon } from '@8x8/oxygen-icon';
import { BargeCallIcon } from '@8x8/oxygen-icon';
import { BellAlertIcon } from '@8x8/oxygen-icon';
import { BellOffIcon } from '@8x8/oxygen-icon';
import { BellTickIcon } from '@8x8/oxygen-icon';
import { BellIcon } from '@8x8/oxygen-icon';
import { BestFitIcon } from '@8x8/oxygen-icon';
import { BillingIcon } from '@8x8/oxygen-icon';
import { BlockNumberPhoneIcon } from '@8x8/oxygen-icon';
import { BlockNumberIcon } from '@8x8/oxygen-icon';
import { BlockSmsIcon } from '@8x8/oxygen-icon';
import { BlockquoteIcon } from '@8x8/oxygen-icon';
import { BookIcon } from '@8x8/oxygen-icon';
import { BotIcon } from '@8x8/oxygen-icon';
import { BrainIcon } from '@8x8/oxygen-icon';
import { BriefcaseIcon } from '@8x8/oxygen-icon';
import { BurgerIcon } from '@8x8/oxygen-icon';
import { CalendarIcon } from '@8x8/oxygen-icon';
import { CameraIcon } from '@8x8/oxygen-icon';
import { CannedMessageIcon } from '@8x8/oxygen-icon';
import { CardIcon } from '@8x8/oxygen-icon';
import { CasesIcon } from '@8x8/oxygen-icon';
import { CellphoneIcon } from '@8x8/oxygen-icon';
import { ChannelsIcon } from '@8x8/oxygen-icon';
import { CheckIcon } from '@8x8/oxygen-icon';
import { CheckboxIcon } from '@8x8/oxygen-icon';
import { CheckfilledIcon } from '@8x8/oxygen-icon';
import { ClockIcon } from '@8x8/oxygen-icon';
import { CloseCircleIcon } from '@8x8/oxygen-icon';
import { CloseLargeIcon } from '@8x8/oxygen-icon';
import { CloudSyncFailIcon } from '@8x8/oxygen-icon';
import { CloudSyncSuccessIcon } from '@8x8/oxygen-icon';
import { CloudSyncIcon } from '@8x8/oxygen-icon';
import { CloudUnsyncedIcon } from '@8x8/oxygen-icon';
import { CodeBlockIcon } from '@8x8/oxygen-icon';
import { CodeIcon } from '@8x8/oxygen-icon';
import { ColumnInsertIcon } from '@8x8/oxygen-icon';
import { ComputerIcon } from '@8x8/oxygen-icon';
import { ConnectionIcon } from '@8x8/oxygen-icon';
import { ContractIcon } from '@8x8/oxygen-icon';
import { CopyIcon } from '@8x8/oxygen-icon';
import { DarIcon } from '@8x8/oxygen-icon';
import { DashboardAddIcon } from '@8x8/oxygen-icon';
import { DashboardIcon } from '@8x8/oxygen-icon';
import { DatabaseIcon } from '@8x8/oxygen-icon';
import { DefaultTerminationIcon } from '@8x8/oxygen-icon';
import { DequeuedIcon } from '@8x8/oxygen-icon';
import { DevicesIcon } from '@8x8/oxygen-icon';
import { DialpadIcon } from '@8x8/oxygen-icon';
import { DirectoryIcon } from '@8x8/oxygen-icon';
import { DisableIcon } from '@8x8/oxygen-icon';
import { DocumentFileIcon } from '@8x8/oxygen-icon';
import { DotsHorizontalIcon } from '@8x8/oxygen-icon';
import { DotsVerticalIcon } from '@8x8/oxygen-icon';
import { DoubleArrowLeftIcon } from '@8x8/oxygen-icon';
import { DoubleArrowRightIcon } from '@8x8/oxygen-icon';
import { DoubleDotsVerticalIcon } from '@8x8/oxygen-icon';
import { DownloadIcon } from '@8x8/oxygen-icon';
import { EngageIcon } from '@8x8/oxygen-icon';
import { EnterIcon } from '@8x8/oxygen-icon';
import { EnvelopeExclamationIcon } from '@8x8/oxygen-icon';
import { EnvelopeTickIcon } from '@8x8/oxygen-icon';
import { EnvelopeIcon } from '@8x8/oxygen-icon';
import { EraserIcon } from '@8x8/oxygen-icon';
import { ErrorIcon } from '@8x8/oxygen-icon';
import { EvaluateIcon } from '@8x8/oxygen-icon';
import { ExclamationIcon } from '@8x8/oxygen-icon';
import { ExpandIcon } from '@8x8/oxygen-icon';
import { ExtensionNumbersIcon } from '@8x8/oxygen-icon';
import { ExternalNumberForwardIcon } from '@8x8/oxygen-icon';
import { EyeHideIcon } from '@8x8/oxygen-icon';
import { EyeIcon } from '@8x8/oxygen-icon';
import { FaceFrownIcon } from '@8x8/oxygen-icon';
import { FaceMixedIcon } from '@8x8/oxygen-icon';
import { FaceNeutralIcon } from '@8x8/oxygen-icon';
import { FaceSmileIcon } from '@8x8/oxygen-icon';
import { FacebookIcon } from '@8x8/oxygen-icon';
import { FaqIcon } from '@8x8/oxygen-icon';
import { FavoriteSolidIcon } from '@8x8/oxygen-icon';
import { FavoriteIcon } from '@8x8/oxygen-icon';
import { FaxIcon } from '@8x8/oxygen-icon';
import { FeedbackIcon } from '@8x8/oxygen-icon';
import { FilterIcon } from '@8x8/oxygen-icon';
import { FolderOpenIcon } from '@8x8/oxygen-icon';
import { FolderIcon } from '@8x8/oxygen-icon';
import { Forward10Icon } from '@8x8/oxygen-icon';
import { ForwardClockIcon } from '@8x8/oxygen-icon';
import { ForwardIcon } from '@8x8/oxygen-icon';
import { FxIcon } from '@8x8/oxygen-icon';
import { GearIcon } from '@8x8/oxygen-icon';
import { GoogleIcon } from '@8x8/oxygen-icon';
import { GroupCallPickupsIcon } from '@8x8/oxygen-icon';
import { GroupMessageIcon } from '@8x8/oxygen-icon';
import { HandshakeIcon } from '@8x8/oxygen-icon';
import { HangupIcon } from '@8x8/oxygen-icon';
import { HeadsetIcon } from '@8x8/oxygen-icon';
import { HighlightIcon } from '@8x8/oxygen-icon';
import { HistoryIcon } from '@8x8/oxygen-icon';
import { HoldCircleIcon } from '@8x8/oxygen-icon';
import { HoldMusicIcon } from '@8x8/oxygen-icon';
import { HoldIcon } from '@8x8/oxygen-icon';
import { HomeIcon } from '@8x8/oxygen-icon';
import { HostIcon } from '@8x8/oxygen-icon';
import { ImageIcon } from '@8x8/oxygen-icon';
import { InQueueTreatmentIcon } from '@8x8/oxygen-icon';
import { InactiveIcon } from '@8x8/oxygen-icon';
import { InboundCallIcon } from '@8x8/oxygen-icon';
import { InboundEmailIcon } from '@8x8/oxygen-icon';
import { InboundInternalCallIcon } from '@8x8/oxygen-icon';
import { InboxTrayIcon } from '@8x8/oxygen-icon';
import { IndeterminateIcon } from '@8x8/oxygen-icon';
import { IndeterminatefilledIcon } from '@8x8/oxygen-icon';
import { InfoCircleIcon } from '@8x8/oxygen-icon';
import { InstagramIcon } from '@8x8/oxygen-icon';
import { IvrForwardExternalIcon } from '@8x8/oxygen-icon';
import { IvrIcon } from '@8x8/oxygen-icon';
import { KnowledgeBaseIcon } from '@8x8/oxygen-icon';
import { LeaveIcon } from '@8x8/oxygen-icon';
import { ListIcon } from '@8x8/oxygen-icon';
import { ListenIcon } from '@8x8/oxygen-icon';
import { LockIcon } from '@8x8/oxygen-icon';
import { LogCallIcon } from '@8x8/oxygen-icon';
import { LoginIcon } from '@8x8/oxygen-icon';
import { MarkUnreadIcon } from '@8x8/oxygen-icon';
import { MergeIcon } from '@8x8/oxygen-icon';
import { MessageInboundIcon } from '@8x8/oxygen-icon';
import { MessageOutboundIcon } from '@8x8/oxygen-icon';
import { MessageIcon } from '@8x8/oxygen-icon';
import { MessengerIcon } from '@8x8/oxygen-icon';
import { MicSlashIcon } from '@8x8/oxygen-icon';
import { MicIcon } from '@8x8/oxygen-icon';
import { MinusCircleIcon } from '@8x8/oxygen-icon';
import { MinusIcon } from '@8x8/oxygen-icon';
import { MissedCallIcon } from '@8x8/oxygen-icon';
import { MsteamsSyncIcon } from '@8x8/oxygen-icon';
import { MsteamsIcon } from '@8x8/oxygen-icon';
import { NewCaseIcon } from '@8x8/oxygen-icon';
import { NewContactIcon } from '@8x8/oxygen-icon';
import { NewEventIcon } from '@8x8/oxygen-icon';
import { NewLeadIcon } from '@8x8/oxygen-icon';
import { NewMessageIcon } from '@8x8/oxygen-icon';
import { NewOpportunityIcon } from '@8x8/oxygen-icon';
import { NewTaskIcon } from '@8x8/oxygen-icon';
import { NoteNewIcon } from '@8x8/oxygen-icon';
import { NoteIcon } from '@8x8/oxygen-icon';
import { OfficeBuildingIcon } from '@8x8/oxygen-icon';
import { OmnichannelIcon } from '@8x8/oxygen-icon';
import { OutboundCallIcon } from '@8x8/oxygen-icon';
import { OutboundEmailIcon } from '@8x8/oxygen-icon';
import { OutboundInternalCallIcon } from '@8x8/oxygen-icon';
import { OutlookIcon } from '@8x8/oxygen-icon';
import { PaperclipIcon } from '@8x8/oxygen-icon';
import { ParkedReturnIcon } from '@8x8/oxygen-icon';
import { ParkedIcon } from '@8x8/oxygen-icon';
import { PauseIcon } from '@8x8/oxygen-icon';
import { PencilIcon } from '@8x8/oxygen-icon';
import { PerformanceIcon } from '@8x8/oxygen-icon';
import { PhoneRetrieveIcon } from '@8x8/oxygen-icon';
import { PhoneRingingIcon } from '@8x8/oxygen-icon';
import { PhoneTransferIcon } from '@8x8/oxygen-icon';
import { PhoneIcon } from '@8x8/oxygen-icon';
import { PinFilledIcon } from '@8x8/oxygen-icon';
import { PinIcon } from '@8x8/oxygen-icon';
import { PivotTableIcon } from '@8x8/oxygen-icon';
import { PlayIcon } from '@8x8/oxygen-icon';
import { PlaylistIcon } from '@8x8/oxygen-icon';
import { PlusCircleIcon } from '@8x8/oxygen-icon';
import { PlusIcon } from '@8x8/oxygen-icon';
import { PopInIcon } from '@8x8/oxygen-icon';
import { PopOutIcon } from '@8x8/oxygen-icon';
import { PurchaseHistoryIcon } from '@8x8/oxygen-icon';
import { PurgeIcon } from '@8x8/oxygen-icon';
import { QueueForwardIcon } from '@8x8/oxygen-icon';
import { QueueTimeOutIcon } from '@8x8/oxygen-icon';
import { RadioIcon } from '@8x8/oxygen-icon';
import { RadiofilledIcon } from '@8x8/oxygen-icon';
import { RandomiseIcon } from '@8x8/oxygen-icon';
import { RcsIcon } from '@8x8/oxygen-icon';
import { RecordIcon } from '@8x8/oxygen-icon';
import { RecordingIcon } from '@8x8/oxygen-icon';
import { RedoIcon } from '@8x8/oxygen-icon';
import { RefreshIcon } from '@8x8/oxygen-icon';
import { ReplyAllIcon } from '@8x8/oxygen-icon';
import { ReplyIcon } from '@8x8/oxygen-icon';
import { RerouteIcon } from '@8x8/oxygen-icon';
import { ResetIcon } from '@8x8/oxygen-icon';
import { ResumeCallIcon } from '@8x8/oxygen-icon';
import { ResumeIcon } from '@8x8/oxygen-icon';
import { Rewind10Icon } from '@8x8/oxygen-icon';
import { RewindClockIcon } from '@8x8/oxygen-icon';
import { RingGroupIcon } from '@8x8/oxygen-icon';
import { RolesPermissionsIcon } from '@8x8/oxygen-icon';
import { SaveIcon } from '@8x8/oxygen-icon';
import { ScreenshareIcon } from '@8x8/oxygen-icon';
import { SearchIcon } from '@8x8/oxygen-icon';
import { SecurityOffIcon } from '@8x8/oxygen-icon';
import { SecurityOnIcon } from '@8x8/oxygen-icon';
import { SendIcon } from '@8x8/oxygen-icon';
import { ShareIcon } from '@8x8/oxygen-icon';
import { ShoppingCartIcon } from '@8x8/oxygen-icon';
import { SignatureIcon } from '@8x8/oxygen-icon';
import { SitesIcon } from '@8x8/oxygen-icon';
import { SkipIcon } from '@8x8/oxygen-icon';
import { SmsOutboundIcon } from '@8x8/oxygen-icon';
import { SmsIcon } from '@8x8/oxygen-icon';
import { SnoozeIcon } from '@8x8/oxygen-icon';
import { SortIcon } from '@8x8/oxygen-icon';
import { SpellcheckIcon } from '@8x8/oxygen-icon';
import { SquareSolidIcon } from '@8x8/oxygen-icon';
import { StarIcon } from '@8x8/oxygen-icon';
import { StartWhisperIcon } from '@8x8/oxygen-icon';
import { Stop2Icon } from '@8x8/oxygen-icon';
import { StopScreenshareIcon } from '@8x8/oxygen-icon';
import { StopWhisperIcon } from '@8x8/oxygen-icon';
import { StopIcon } from '@8x8/oxygen-icon';
import { StopwatchIcon } from '@8x8/oxygen-icon';
import { StrikethroughIcon } from '@8x8/oxygen-icon';
import { SurveyIcon } from '@8x8/oxygen-icon';
import { SwapIcon } from '@8x8/oxygen-icon';
import { SwitchboardIcon } from '@8x8/oxygen-icon';
import { TableIcon } from '@8x8/oxygen-icon';
import { TagIcon } from '@8x8/oxygen-icon';
import { TargetIcon } from '@8x8/oxygen-icon';
import { TestVariableIcon } from '@8x8/oxygen-icon';
import { TextTemplateIcon } from '@8x8/oxygen-icon';
import { ThumbDownIcon } from '@8x8/oxygen-icon';
import { ThumbUpIcon } from '@8x8/oxygen-icon';
import { TicketIcon } from '@8x8/oxygen-icon';
import { TopicIcon } from '@8x8/oxygen-icon';
import { TranscriptIcon } from '@8x8/oxygen-icon';
import { TransferIcon } from '@8x8/oxygen-icon';
import { TranslateIcon } from '@8x8/oxygen-icon';
import { TrashIcon } from '@8x8/oxygen-icon';
import { TwitterIcon } from '@8x8/oxygen-icon';
import { UnblockNumberPhoneIcon } from '@8x8/oxygen-icon';
import { UnblockNumberIcon } from '@8x8/oxygen-icon';
import { UnblockSmsIcon } from '@8x8/oxygen-icon';
import { UndoIcon } from '@8x8/oxygen-icon';
import { UnlockIcon } from '@8x8/oxygen-icon';
import { UserDeletedIcon } from '@8x8/oxygen-icon';
import { UserGroupsLineIcon } from '@8x8/oxygen-icon';
import { UserLeftIcon } from '@8x8/oxygen-icon';
import { UserIcon } from '@8x8/oxygen-icon';
import { UsersIcon } from '@8x8/oxygen-icon';
import { VersionIcon } from '@8x8/oxygen-icon';
import { ViberIcon } from '@8x8/oxygen-icon';
import { VideoSlashIcon } from '@8x8/oxygen-icon';
import { VideoIcon } from '@8x8/oxygen-icon';
import { VoiceRecordSettingsIcon } from '@8x8/oxygen-icon';
import { VoicemailForwardIcon } from '@8x8/oxygen-icon';
import { VoicemailIcon } from '@8x8/oxygen-icon';
import { VolumeOffIcon } from '@8x8/oxygen-icon';
import { VolumeUpIcon } from '@8x8/oxygen-icon';
import { WaveIcon } from '@8x8/oxygen-icon';
import { WhatsappIcon } from '@8x8/oxygen-icon';
import { Work8x8Icon } from '@8x8/oxygen-icon';
import { WorkSettingsIcon } from '@8x8/oxygen-icon';
import { WrapUpIcon } from '@8x8/oxygen-icon';
import { XBrandIcon } from '@8x8/oxygen-icon';

export default {
  title: 'Components/Icon',
  parameters: {
    chromatic: { disable: false },
  },
};

export const Story = () => (
    <Section>
      <ComponentSection>
        <div
          style={{
            marginBottom: '32px',
            padding: '12px 8px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}
        >
          
        <Label style={{ width: '100%', textAlign: 'left', fontWeight: 'bold' }}>Novo</Label>
    
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <AcrobatIcon />
          <Label>AcrobatIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <AddReactionIcon />
          <Label>AddReactionIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <AddUserIcon />
          <Label>AddUserIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <AiComposeIcon />
          <Label>AiComposeIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <AnnounceIcon />
          <Label>AnnounceIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ApiIcon />
          <Label>ApiIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ArchiveIcon />
          <Label>ArchiveIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ArrowDiagonalInIcon />
          <Label>ArrowDiagonalInIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ArrowDiagonalLeftDownIcon />
          <Label>ArrowDiagonalLeftDownIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ArrowDiagonalOutIcon />
          <Label>ArrowDiagonalOutIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ArrowDiagonalRightUpIcon />
          <Label>ArrowDiagonalRightUpIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ArrowDownLongIcon />
          <Label>ArrowDownLongIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ArrowDownIcon />
          <Label>ArrowDownIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ArrowFirstIcon />
          <Label>ArrowFirstIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ArrowLastIcon />
          <Label>ArrowLastIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ArrowLeftLongIcon />
          <Label>ArrowLeftLongIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ArrowLeftIcon />
          <Label>ArrowLeftIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ArrowRightLongIcon />
          <Label>ArrowRightLongIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ArrowRightIcon />
          <Label>ArrowRightIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ArrowSolidDownIcon />
          <Label>ArrowSolidDownIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ArrowSolidUpIcon />
          <Label>ArrowSolidUpIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ArrowUpLongIcon />
          <Label>ArrowUpLongIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ArrowUpIcon />
          <Label>ArrowUpIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <AtMarkIcon />
          <Label>AtMarkIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <AudiowaveIcon />
          <Label>AudiowaveIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <BackOfficeIcon />
          <Label>BackOfficeIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <BargeCallIcon />
          <Label>BargeCallIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <BellAlertIcon />
          <Label>BellAlertIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <BellOffIcon />
          <Label>BellOffIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <BellTickIcon />
          <Label>BellTickIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <BellIcon />
          <Label>BellIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <BestFitIcon />
          <Label>BestFitIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <BillingIcon />
          <Label>BillingIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <BlockNumberPhoneIcon />
          <Label>BlockNumberPhoneIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <BlockNumberIcon />
          <Label>BlockNumberIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <BlockSmsIcon />
          <Label>BlockSmsIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <BlockquoteIcon />
          <Label>BlockquoteIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <BookIcon />
          <Label>BookIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <BotIcon />
          <Label>BotIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <BrainIcon />
          <Label>BrainIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <BriefcaseIcon />
          <Label>BriefcaseIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <BurgerIcon />
          <Label>BurgerIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CalendarIcon />
          <Label>CalendarIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CameraIcon />
          <Label>CameraIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CannedMessageIcon />
          <Label>CannedMessageIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CardIcon />
          <Label>CardIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CasesIcon />
          <Label>CasesIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CellphoneIcon />
          <Label>CellphoneIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ChannelsIcon />
          <Label>ChannelsIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CheckIcon />
          <Label>CheckIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CheckboxIcon />
          <Label>CheckboxIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CheckfilledIcon />
          <Label>CheckfilledIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ClockIcon />
          <Label>ClockIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CloseCircleIcon />
          <Label>CloseCircleIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CloseLargeIcon />
          <Label>CloseLargeIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CloudSyncFailIcon />
          <Label>CloudSyncFailIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CloudSyncSuccessIcon />
          <Label>CloudSyncSuccessIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CloudSyncIcon />
          <Label>CloudSyncIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CloudUnsyncedIcon />
          <Label>CloudUnsyncedIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CodeBlockIcon />
          <Label>CodeBlockIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CodeIcon />
          <Label>CodeIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ColumnInsertIcon />
          <Label>ColumnInsertIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ComputerIcon />
          <Label>ComputerIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ConnectionIcon />
          <Label>ConnectionIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ContractIcon />
          <Label>ContractIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <CopyIcon />
          <Label>CopyIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <DarIcon />
          <Label>DarIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <DashboardAddIcon />
          <Label>DashboardAddIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <DashboardIcon />
          <Label>DashboardIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <DatabaseIcon />
          <Label>DatabaseIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <DefaultTerminationIcon />
          <Label>DefaultTerminationIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <DequeuedIcon />
          <Label>DequeuedIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <DevicesIcon />
          <Label>DevicesIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <DialpadIcon />
          <Label>DialpadIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <DirectoryIcon />
          <Label>DirectoryIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <DisableIcon />
          <Label>DisableIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <DocumentFileIcon />
          <Label>DocumentFileIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <DotsHorizontalIcon />
          <Label>DotsHorizontalIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <DotsVerticalIcon />
          <Label>DotsVerticalIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <DoubleArrowLeftIcon />
          <Label>DoubleArrowLeftIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <DoubleArrowRightIcon />
          <Label>DoubleArrowRightIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <DoubleDotsVerticalIcon />
          <Label>DoubleDotsVerticalIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <DownloadIcon />
          <Label>DownloadIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <EngageIcon />
          <Label>EngageIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <EnterIcon />
          <Label>EnterIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <EnvelopeExclamationIcon />
          <Label>EnvelopeExclamationIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <EnvelopeTickIcon />
          <Label>EnvelopeTickIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <EnvelopeIcon />
          <Label>EnvelopeIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <EraserIcon />
          <Label>EraserIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ErrorIcon />
          <Label>ErrorIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <EvaluateIcon />
          <Label>EvaluateIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ExclamationIcon />
          <Label>ExclamationIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ExpandIcon />
          <Label>ExpandIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ExtensionNumbersIcon />
          <Label>ExtensionNumbersIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ExternalNumberForwardIcon />
          <Label>ExternalNumberForwardIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <EyeHideIcon />
          <Label>EyeHideIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <EyeIcon />
          <Label>EyeIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <FaceFrownIcon />
          <Label>FaceFrownIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <FaceMixedIcon />
          <Label>FaceMixedIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <FaceNeutralIcon />
          <Label>FaceNeutralIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <FaceSmileIcon />
          <Label>FaceSmileIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <FacebookIcon />
          <Label>FacebookIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <FaqIcon />
          <Label>FaqIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <FavoriteSolidIcon />
          <Label>FavoriteSolidIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <FavoriteIcon />
          <Label>FavoriteIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <FaxIcon />
          <Label>FaxIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <FeedbackIcon />
          <Label>FeedbackIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <FilterIcon />
          <Label>FilterIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <FolderOpenIcon />
          <Label>FolderOpenIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <FolderIcon />
          <Label>FolderIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Forward10Icon />
          <Label>Forward10Icon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ForwardClockIcon />
          <Label>ForwardClockIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ForwardIcon />
          <Label>ForwardIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <FxIcon />
          <Label>FxIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <GearIcon />
          <Label>GearIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <GoogleIcon />
          <Label>GoogleIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <GroupCallPickupsIcon />
          <Label>GroupCallPickupsIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <GroupMessageIcon />
          <Label>GroupMessageIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <HandshakeIcon />
          <Label>HandshakeIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <HangupIcon />
          <Label>HangupIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <HeadsetIcon />
          <Label>HeadsetIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <HighlightIcon />
          <Label>HighlightIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <HistoryIcon />
          <Label>HistoryIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <HoldCircleIcon />
          <Label>HoldCircleIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <HoldMusicIcon />
          <Label>HoldMusicIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <HoldIcon />
          <Label>HoldIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <HomeIcon />
          <Label>HomeIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <HostIcon />
          <Label>HostIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ImageIcon />
          <Label>ImageIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <InQueueTreatmentIcon />
          <Label>InQueueTreatmentIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <InactiveIcon />
          <Label>InactiveIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <InboundCallIcon />
          <Label>InboundCallIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <InboundEmailIcon />
          <Label>InboundEmailIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <InboundInternalCallIcon />
          <Label>InboundInternalCallIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <InboxTrayIcon />
          <Label>InboxTrayIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <IndeterminateIcon />
          <Label>IndeterminateIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <IndeterminatefilledIcon />
          <Label>IndeterminatefilledIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <InfoCircleIcon />
          <Label>InfoCircleIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <InstagramIcon />
          <Label>InstagramIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <IvrForwardExternalIcon />
          <Label>IvrForwardExternalIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <IvrIcon />
          <Label>IvrIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <KnowledgeBaseIcon />
          <Label>KnowledgeBaseIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <LeaveIcon />
          <Label>LeaveIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ListIcon />
          <Label>ListIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ListenIcon />
          <Label>ListenIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <LockIcon />
          <Label>LockIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <LogCallIcon />
          <Label>LogCallIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <LoginIcon />
          <Label>LoginIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <MarkUnreadIcon />
          <Label>MarkUnreadIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <MergeIcon />
          <Label>MergeIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <MessageInboundIcon />
          <Label>MessageInboundIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <MessageOutboundIcon />
          <Label>MessageOutboundIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <MessageIcon />
          <Label>MessageIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <MessengerIcon />
          <Label>MessengerIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <MicSlashIcon />
          <Label>MicSlashIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <MicIcon />
          <Label>MicIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <MinusCircleIcon />
          <Label>MinusCircleIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <MinusIcon />
          <Label>MinusIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <MissedCallIcon />
          <Label>MissedCallIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <MsteamsSyncIcon />
          <Label>MsteamsSyncIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <MsteamsIcon />
          <Label>MsteamsIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <NewCaseIcon />
          <Label>NewCaseIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <NewContactIcon />
          <Label>NewContactIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <NewEventIcon />
          <Label>NewEventIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <NewLeadIcon />
          <Label>NewLeadIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <NewMessageIcon />
          <Label>NewMessageIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <NewOpportunityIcon />
          <Label>NewOpportunityIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <NewTaskIcon />
          <Label>NewTaskIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <NoteNewIcon />
          <Label>NoteNewIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <NoteIcon />
          <Label>NoteIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <OfficeBuildingIcon />
          <Label>OfficeBuildingIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <OmnichannelIcon />
          <Label>OmnichannelIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <OutboundCallIcon />
          <Label>OutboundCallIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <OutboundEmailIcon />
          <Label>OutboundEmailIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <OutboundInternalCallIcon />
          <Label>OutboundInternalCallIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <OutlookIcon />
          <Label>OutlookIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <PaperclipIcon />
          <Label>PaperclipIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ParkedReturnIcon />
          <Label>ParkedReturnIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ParkedIcon />
          <Label>ParkedIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <PauseIcon />
          <Label>PauseIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <PencilIcon />
          <Label>PencilIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <PerformanceIcon />
          <Label>PerformanceIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <PhoneRetrieveIcon />
          <Label>PhoneRetrieveIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <PhoneRingingIcon />
          <Label>PhoneRingingIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <PhoneTransferIcon />
          <Label>PhoneTransferIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <PhoneIcon />
          <Label>PhoneIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <PinFilledIcon />
          <Label>PinFilledIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <PinIcon />
          <Label>PinIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <PivotTableIcon />
          <Label>PivotTableIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <PlayIcon />
          <Label>PlayIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <PlaylistIcon />
          <Label>PlaylistIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <PlusCircleIcon />
          <Label>PlusCircleIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <PlusIcon />
          <Label>PlusIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <PopInIcon />
          <Label>PopInIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <PopOutIcon />
          <Label>PopOutIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <PurchaseHistoryIcon />
          <Label>PurchaseHistoryIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <PurgeIcon />
          <Label>PurgeIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <QueueForwardIcon />
          <Label>QueueForwardIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <QueueTimeOutIcon />
          <Label>QueueTimeOutIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <RadioIcon />
          <Label>RadioIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <RadiofilledIcon />
          <Label>RadiofilledIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <RandomiseIcon />
          <Label>RandomiseIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <RcsIcon />
          <Label>RcsIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <RecordIcon />
          <Label>RecordIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <RecordingIcon />
          <Label>RecordingIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <RedoIcon />
          <Label>RedoIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <RefreshIcon />
          <Label>RefreshIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ReplyAllIcon />
          <Label>ReplyAllIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ReplyIcon />
          <Label>ReplyIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <RerouteIcon />
          <Label>RerouteIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ResetIcon />
          <Label>ResetIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ResumeCallIcon />
          <Label>ResumeCallIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ResumeIcon />
          <Label>ResumeIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Rewind10Icon />
          <Label>Rewind10Icon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <RewindClockIcon />
          <Label>RewindClockIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <RingGroupIcon />
          <Label>RingGroupIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <RolesPermissionsIcon />
          <Label>RolesPermissionsIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SaveIcon />
          <Label>SaveIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ScreenshareIcon />
          <Label>ScreenshareIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SearchIcon />
          <Label>SearchIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SecurityOffIcon />
          <Label>SecurityOffIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SecurityOnIcon />
          <Label>SecurityOnIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SendIcon />
          <Label>SendIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ShareIcon />
          <Label>ShareIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ShoppingCartIcon />
          <Label>ShoppingCartIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SignatureIcon />
          <Label>SignatureIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SitesIcon />
          <Label>SitesIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SkipIcon />
          <Label>SkipIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SmsOutboundIcon />
          <Label>SmsOutboundIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SmsIcon />
          <Label>SmsIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SnoozeIcon />
          <Label>SnoozeIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SortIcon />
          <Label>SortIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SpellcheckIcon />
          <Label>SpellcheckIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SquareSolidIcon />
          <Label>SquareSolidIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <StarIcon />
          <Label>StarIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <StartWhisperIcon />
          <Label>StartWhisperIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Stop2Icon />
          <Label>Stop2Icon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <StopScreenshareIcon />
          <Label>StopScreenshareIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <StopWhisperIcon />
          <Label>StopWhisperIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <StopIcon />
          <Label>StopIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <StopwatchIcon />
          <Label>StopwatchIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <StrikethroughIcon />
          <Label>StrikethroughIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SurveyIcon />
          <Label>SurveyIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SwapIcon />
          <Label>SwapIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SwitchboardIcon />
          <Label>SwitchboardIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TableIcon />
          <Label>TableIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TagIcon />
          <Label>TagIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TargetIcon />
          <Label>TargetIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TestVariableIcon />
          <Label>TestVariableIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TextTemplateIcon />
          <Label>TextTemplateIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ThumbDownIcon />
          <Label>ThumbDownIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ThumbUpIcon />
          <Label>ThumbUpIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TicketIcon />
          <Label>TicketIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TopicIcon />
          <Label>TopicIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TranscriptIcon />
          <Label>TranscriptIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TransferIcon />
          <Label>TransferIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TranslateIcon />
          <Label>TranslateIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TrashIcon />
          <Label>TrashIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TwitterIcon />
          <Label>TwitterIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <UnblockNumberPhoneIcon />
          <Label>UnblockNumberPhoneIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <UnblockNumberIcon />
          <Label>UnblockNumberIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <UnblockSmsIcon />
          <Label>UnblockSmsIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <UndoIcon />
          <Label>UndoIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <UnlockIcon />
          <Label>UnlockIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <UserDeletedIcon />
          <Label>UserDeletedIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <UserGroupsLineIcon />
          <Label>UserGroupsLineIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <UserLeftIcon />
          <Label>UserLeftIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <UserIcon />
          <Label>UserIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <UsersIcon />
          <Label>UsersIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <VersionIcon />
          <Label>VersionIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <ViberIcon />
          <Label>ViberIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <VideoSlashIcon />
          <Label>VideoSlashIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <VideoIcon />
          <Label>VideoIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <VoiceRecordSettingsIcon />
          <Label>VoiceRecordSettingsIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <VoicemailForwardIcon />
          <Label>VoicemailForwardIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <VoicemailIcon />
          <Label>VoicemailIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <VolumeOffIcon />
          <Label>VolumeOffIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <VolumeUpIcon />
          <Label>VolumeUpIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <WaveIcon />
          <Label>WaveIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <WhatsappIcon />
          <Label>WhatsappIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Work8x8Icon />
          <Label>Work8x8Icon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <WorkSettingsIcon />
          <Label>WorkSettingsIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <WrapUpIcon />
          <Label>WrapUpIcon</Label>
        </div>
  
        <div style={{ width: '170px', margin: '8px', padding: '14px 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <XBrandIcon />
          <Label>XBrandIcon</Label>
        </div>
  
        </div>
      </ComponentSection>
    </Section>
  );

Story.storyName = '01. Guidelines'
/* eslint-enable */
