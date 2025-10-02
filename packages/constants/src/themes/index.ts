import {
  alertBanner,
  alertBannerNovo,
  alertBannerNovoDark,
} from '../decisions/alertBanner.const';
import { avatar, avatarNovo, avatarNovoDark } from '../decisions/avatar.const';
import {
  avatarStack,
  avatarStackNovo,
  avatarStackNovoDark,
} from '../decisions/avatarStack.const';
import { badge, badgeNovo, badgeNovoDark } from '../decisions/badge.const';
import {
  breadcrumbs,
  breadcrumbsNovo,
  breadcrumbsNovoDark,
} from '../decisions/breadcrumbs.const';
import { button, buttonNovo, buttonNovoDark } from '../decisions/button.const';
import {
  calendar,
  calendarNovo,
  calendarNovoDark,
} from '../decisions/calendar.const';
import {
  checkbox,
  checkboxNovo,
  checkboxNovoDark,
  checkboxGroup,
  checkboxGroupNovo,
  checkboxGroupNovoDark,
} from '../decisions/checkbox.const';
import {
  dateTimeRangeSelector,
  dateTimeRangeSelectorNovo,
  dateTimeRangeSelectorNovoDark,
} from '../decisions/dateTimeRangeSelector.const';
import {
  dateTimeSelector,
  dateTimeSelectorNovo,
  dateTimeSelectorNovoDark,
} from '../decisions/dateTimeSelector.const';
import {
  dropdownButton,
  dropdownButtonNovo,
  dropdownButtonNovoDark,
} from '../decisions/dropdownButton.const';
import {
  eventCard,
  eventCardNovo,
  eventCardNovoDark,
} from '../decisions/eventCard.const';
import { icon, iconNovo, iconNovoDark } from '../decisions/icon.const';
import {
  iconButton,
  iconButtonNovo,
  iconButtonNovoDark,
} from '../decisions/iconButton.const';
import milestoneTracker from '../decisions/milestoneTracker.const';
import { modal, modalNovo, modalNovoDark } from '../decisions/modal.const';
import {
  radio,
  radioNovo,
  radioNovoDark,
  radioGroup,
  radioGroupNovo,
  radioGroupNovoDark,
} from '../decisions/radio.const';
import {
  overlay,
  overlayNovo,
  overlayNovoDark,
} from '../decisions/overlay.const';
import {
  staticTooltip,
  staticTooltipNovo,
  staticTooltipNovoDark,
} from '../decisions/static-tooltip.const';
import { label, labelNovo, labelNovoDark } from '../decisions/label.const';
import { list, listNovo, listNovoDark } from '../decisions/list.const';
import { input, inputNovo, inputNovoDark } from '../decisions/input.const';
import {
  loaders,
  loadersNovo,
  loadersNovoDark,
} from '../decisions/loaders.const';
import { tabs, tabsNovo, tabsNovoDark } from '../decisions/tabs.const';
import { tag, tagNovo, tagNovoDark } from '../decisions/tag.const';
import {
  textLink,
  textLinkNovo,
  textLinkNovoDark,
} from '../decisions/textLink.const';
import {
  timeSelector,
  timeSelectorNovo,
  timeSelectorNovoDark,
} from '../decisions/timeSelector';
import {
  toast,
  toastNovo,
  toastNovoDark,
  inlineNotificationNovo,
  inlineNotificationNovoDark,
  inlineNotification,
} from '../decisions/toast.const';
import {
  textField,
  textFieldNovo,
  textFieldNovoDark,
} from '../decisions/textField.const';
import {
  toggleButton,
  toggleButtonGroup,
  toggleButtonNovo,
  toggleButtonNovoDark,
  toggleButtonGroupNovo,
  toggleButtonGroupNovoDark,
} from '../decisions/toggleButton.const';
import {
  userStatus,
  userStatusNovo,
  userStatusNovoDark,
} from '../decisions/userStatus.const';
import { select, selectNovo, selectNovoDark } from '../decisions/select.const';
import slideOut from '../decisions/slideOut.const';
import { slider, sliderNovo, sliderNovoDark } from '../decisions/slider.const';
import { table, tableNovo, tableNovoDark } from '../decisions/table.const';
import graphics from '../decisions/graphics.const';
import {
  contextMenu,
  contextMenuNovo,
  contextMenuNovoDark,
} from '../decisions/contextMenu.const';
import typography from '../decisions/typography.const';
import {
  textarea,
  textareaNovo,
  textareaNovoDark,
} from '../decisions/textarea.const';
import {
  card,
  cardNovo,
  cardNovoDark,
  statistics,
  statisticsNovo,
  statisticsNovoDark,
} from '../decisions/card.const';

export interface AllComponentsThemes {
  alertBanner: typeof alertBanner;
  avatar: typeof avatar;
  avatarStack: typeof avatarStack;
  badge: typeof badge;
  breadcrumbs: typeof breadcrumbs;
  button: typeof button;
  calendar: typeof calendar;
  card: typeof card;
  checkbox: typeof checkbox;
  checkboxGroup: typeof checkboxGroup;
  contextMenu: typeof contextMenu;
  dateTimeRangeSelector: typeof dateTimeRangeSelector;
  dateTimeSelector: typeof dateTimeSelector;
  dropdownButton: typeof dropdownButton;
  eventCard: typeof eventCard;
  graphics: typeof graphics;
  icon: typeof icon;
  iconButton: typeof iconButton;
  inlineNotification: typeof inlineNotification;
  input: typeof input;
  label: typeof label;
  list: typeof list;
  loaders: typeof loaders;
  milestoneTracker: typeof milestoneTracker;
  modal: typeof modal;
  overlay: typeof overlay;
  radio: typeof radio;
  radioGroup: typeof radioGroup;
  select: typeof select;
  slideOut: typeof slideOut;
  slider: typeof slider;
  staticTooltip: typeof staticTooltip;
  statistics: typeof statistics;
  table: typeof table;
  tabs: typeof tabs;
  tag: typeof tag;
  textField: typeof textField;
  textLink: typeof textLink;
  textarea: typeof textarea;
  timeSelector: typeof timeSelector;
  toast: typeof toast;
  toggleButton: typeof toggleButton;
  toggleButtonGroup: typeof toggleButtonGroup;
  typography: typeof typography;
  userStatus: typeof userStatus;
}

const classicTheme: AllComponentsThemes = {
  alertBanner,
  avatar,
  avatarStack,
  badge,
  breadcrumbs,
  button,
  calendar,
  card,
  checkbox,
  checkboxGroup,
  contextMenu,
  dateTimeRangeSelector,
  dateTimeSelector,
  dropdownButton,
  eventCard,
  graphics,
  icon,
  iconButton,
  inlineNotification,
  input,
  label,
  list,
  loaders,
  milestoneTracker,
  modal,
  overlay,
  radio,
  radioGroup,
  select,
  slideOut,
  slider,
  staticTooltip,
  statistics,
  table,
  tabs,
  tag,
  textField,
  textLink,
  textarea,
  timeSelector,
  toast,
  toggleButton,
  toggleButtonGroup,
  typography,
  userStatus,
};

const novoTheme: AllComponentsThemes = {
  alertBanner: alertBannerNovo,
  avatar: avatarNovo,
  avatarStack: avatarStackNovo,
  badge: badgeNovo,
  breadcrumbs: breadcrumbsNovo,
  button: buttonNovo,
  calendar: calendarNovo,
  checkbox: checkboxNovo,
  card: cardNovo,
  checkboxGroup: checkboxGroupNovo,
  contextMenu: contextMenuNovo,
  dateTimeRangeSelector: dateTimeRangeSelectorNovo,
  dateTimeSelector: dateTimeSelectorNovo,
  dropdownButton: dropdownButtonNovo,
  eventCard: eventCardNovo,
  icon: iconNovo,
  iconButton: iconButtonNovo,
  inlineNotification: inlineNotificationNovo,
  input: inputNovo,
  label: labelNovo,
  list: listNovo,
  loaders: loadersNovo,
  modal: modalNovo,
  overlay: overlayNovo,
  radio: radioNovo,
  radioGroup: radioGroupNovo,
  select: selectNovo,
  slider: sliderNovo,
  staticTooltip: staticTooltipNovo,
  table: tableNovo,
  tabs: tabsNovo,
  tag: tagNovo,
  textField: textFieldNovo,
  textLink: textLinkNovo,
  textarea: textareaNovo,
  timeSelector: timeSelectorNovo,
  toast: toastNovo,
  toggleButton: toggleButtonNovo,
  toggleButtonGroup: toggleButtonGroupNovo,
  userStatus: userStatusNovo,
  // Candidates for removal
  graphics,
  milestoneTracker,
  slideOut,
  statistics: statisticsNovo,
  typography,
};

const novoDarkTheme: AllComponentsThemes = {
  alertBanner: alertBannerNovoDark,
  avatar: avatarNovoDark,
  avatarStack: avatarStackNovoDark,
  badge: badgeNovoDark,
  breadcrumbs: breadcrumbsNovoDark,
  button: buttonNovoDark,
  calendar: calendarNovoDark,
  checkbox: checkboxNovoDark,
  card: cardNovoDark,
  checkboxGroup: checkboxGroupNovoDark,
  contextMenu: contextMenuNovoDark,
  dateTimeRangeSelector: dateTimeRangeSelectorNovoDark,
  dateTimeSelector: dateTimeSelectorNovoDark,
  dropdownButton: dropdownButtonNovoDark,
  eventCard: eventCardNovoDark,
  icon: iconNovoDark,
  iconButton: iconButtonNovoDark,
  inlineNotification: inlineNotificationNovoDark,
  input: inputNovoDark,
  label: labelNovoDark,
  list: listNovoDark,
  loaders: loadersNovoDark,
  modal: modalNovoDark,
  overlay: overlayNovoDark,
  radio: radioNovoDark,
  radioGroup: radioGroupNovoDark,
  select: selectNovoDark,
  slider: sliderNovoDark,
  staticTooltip: staticTooltipNovoDark,
  table: tableNovoDark,
  tabs: tabsNovoDark,
  tag: tagNovoDark,
  textField: textFieldNovoDark,
  textLink: textLinkNovoDark,
  textarea: textareaNovoDark,
  timeSelector: timeSelectorNovoDark,
  toast: toastNovoDark,
  toggleButton: toggleButtonNovoDark,
  toggleButtonGroup: toggleButtonGroupNovoDark,
  userStatus: userStatusNovoDark,
  // Candidates for removal
  graphics,
  milestoneTracker,
  slideOut,
  statistics: statisticsNovoDark,
  typography,
};

export { classicTheme, novoTheme, novoDarkTheme };
