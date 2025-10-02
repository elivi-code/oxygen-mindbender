import { rgba } from 'polished';

import themes from '@8x8/oxygen-theme';

import {
  input,
  inputNovo,
  inputNovoDark,
  inputNeoLight,
  inputNeoDark,
} from './input.const';
import zIndex from '../choices/zIndex.const';
import timing from '../choices/timing.const';
import size from '../choices/size.const';
import color from '../choices/color.const';
import spacing from '../choices/spacing.const';
import font from '../choices/font.const';

const { light, dark, neoLight, neoDark } = themes;

export interface TimeSelectorTheme {
  input: typeof input;
  dropdownAnimationDuration: string;
  dropdownZIndex: number;
  dropdownBorderSize: string;
  dropdownBorderColor: string;
  dropdownBorderRadius: string | number;
  dropdownShadowBlurRadius: string;
  dropdownShadowColor: string;
  dropdownShadow: string;
  dropdownFontSize: string;
  dropdownLineHeight: string;
  dropdownFontFamily: string;
  dropdownWidth: string;
  dropdownMaxHeight: string;
  dropdownPadding: string;
  listItemPadding: string;
  listItemBackground: string;
  listItemBackgroundHover: string;
  listItemBackgroundSelected: string;
  listItemColor: string;
}

const timeSelector: TimeSelectorTheme = {
  input,
  dropdownAnimationDuration: timing.fast,
  dropdownZIndex: zIndex.z3000,
  dropdownBorderSize: size.borderSizeDefault,
  dropdownBorderColor: color.cloudyBlue300,
  dropdownBorderRadius: 0,
  dropdownShadowBlurRadius: size.small,
  dropdownShadowColor: rgba(color.cloudyBlue300, 0.6),
  dropdownShadow: undefined,
  dropdownFontSize: font.sizeSm,
  dropdownLineHeight: font.lineHeightSm,
  dropdownFontFamily: font.family,
  dropdownWidth: '140px',
  dropdownMaxHeight: '160px',
  dropdownPadding: '0px',

  listItemPadding: `${spacing.xxs} ${spacing.xs}`,
  listItemBackground: color.white,
  listItemBackgroundHover: color.cloudyBlue100,
  listItemBackgroundSelected: color.dodgerBlue100,
  listItemColor: color.pickledBluewood,
};

const timeSelectorNovo: TimeSelectorTheme = {
  input: inputNovo,
  dropdownAnimationDuration: '150ms',
  dropdownZIndex: zIndex.z3000,
  dropdownBorderSize: '1px',
  dropdownBorderColor: light.ui01,
  dropdownBorderRadius: '6px',
  dropdownShadowBlurRadius: undefined,
  dropdownShadowColor: undefined,
  dropdownShadow: `0px 1px 2px ${rgba(light.ui04, 0.25)}`,
  dropdownFontSize: light.body02.fontSize,
  dropdownLineHeight: light.body02.lineHeight,
  dropdownFontFamily: light.body02.fontFamily,
  dropdownWidth: '160px',
  dropdownMaxHeight: '160px',
  dropdownPadding: `${light.spacing03} 0`,

  listItemPadding: '9px 15px',
  listItemBackground: light.ui06,
  listItemBackgroundHover: light.hover08,
  listItemBackgroundSelected: light.hover08,
  listItemColor: light.textColor01,
};

const timeSelectorNovoDark: TimeSelectorTheme = {
  ...timeSelectorNovo,
  input: inputNovoDark,
  dropdownBorderColor: dark.ui01,
  dropdownShadow: `0px 1px 2px ${rgba(dark.ui04, 0.25)}`,
  listItemBackground: dark.ui06,
  listItemBackgroundHover: dark.hover08,
  listItemBackgroundSelected: dark.hover08,
  listItemColor: dark.textColor01,
};

const timeSelectorNeoLight: TimeSelectorTheme = {
  ...timeSelectorNovo,
  input: inputNeoLight,
  dropdownBorderColor: neoLight.ui01,
  dropdownShadow: `0px 1px 2px ${rgba(neoLight.ui04, 0.25)}`,
  listItemBackground: neoLight.ui06,
  listItemBackgroundHover: neoLight.hover08,
  listItemBackgroundSelected: neoLight.hover08,
  listItemColor: neoLight.textColor01,
};

const timeSelectorNeoDark: TimeSelectorTheme = {
  ...timeSelectorNovoDark,
  input: inputNeoDark,
  dropdownBorderColor: neoDark.ui01,
  dropdownShadow: `0px 1px 2px ${rgba(neoDark.ui04, 0.25)}`,
  listItemBackground: neoDark.ui06,
  listItemBackgroundHover: neoDark.hover08,
  listItemBackgroundSelected: neoDark.hover08,
  listItemColor: neoDark.textColor01,
};

export {
  timeSelector,
  timeSelectorNovo,
  timeSelectorNovoDark,
  timeSelectorNeoLight,
  timeSelectorNeoDark,
};
