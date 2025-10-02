import themes from '@8x8/oxygen-theme';

import font from '../choices/font.const';
import size from '../choices/size.const';
import color from '../choices/color.const';

const { light, dark, neoLight, neoDark } = themes;

export interface ListTheme {
  listPadding: string;
  listMargin: string;
  listStyle: string;
  listGroupBorderColor: string;
  listBackground: string;
  listMaxWidth: string;
  listItemFontFamily: string;
  listItemFontSize: string;
  listItemFontWeight: number | string;
  listItemLineHeight: string;
  listItemPadding: string;
  listItemColor: string;
  listItemActiveBackgroundColor: string;
  listItemActiveTextDecoration: string;
  listItemColorActive: string;
  listItemColorDisabled: string;
  listItemHoverColor: string;
  isClassic: boolean;
  listItemFocusBorderColor: string;
}

const list: ListTheme = {
  listPadding: '0',
  listMargin: '0',
  listStyle: 'none',
  listGroupBorderColor: color.cloudyBlue300,
  listBackground: '#FFF',
  listMaxWidth: '100%',
  listItemFontFamily: font.family,
  listItemFontSize: font.sizeSm,
  listItemFontWeight: font.weightDefault,
  listItemLineHeight: font.lineHeightSm,
  listItemPadding: `2px ${size.default}`,
  listItemColor: color.pickledBluewood800,
  listItemActiveTextDecoration: 'none',
  listItemColorActive: color.dodgerBlue,
  listItemColorDisabled: color.steel700,

  listItemHoverColor: undefined,

  isClassic: true,
  listItemFocusBorderColor: color.dodgerBlue,
  listItemActiveBackgroundColor: color.gray10,
};

const listNovo: ListTheme = {
  isClassic: false,

  // Typography
  ...light.body02,
  listItemFontFamily: undefined,
  listItemFontSize: undefined,
  listItemFontWeight: undefined,
  listItemLineHeight: undefined,

  // Structure
  listPadding: '0',
  listItemPadding: `${light.spacing03} ${light.spacing05}`,

  listMargin: '0',
  listMaxWidth: '100%',

  listStyle: 'none',
  listItemActiveTextDecoration: 'none',

  // Color
  listGroupBorderColor: light.ui01,
  listBackground: light.ui06,
  listItemColor: light.textColor01,
  listItemColorActive: undefined,
  listItemHoverColor: light.hover08,
  listItemColorDisabled: light.disabled01,
  listItemFocusBorderColor: light.focus01,
  listItemActiveBackgroundColor: light.active05,
};

const listNovoDark: ListTheme = {
  ...listNovo,

  listGroupBorderColor: dark.ui01,
  listBackground: dark.ui06,
  listItemColor: dark.textColor01,
  listItemColorActive: undefined,
  listItemActiveBackgroundColor: dark.active05,
  listItemHoverColor: dark.hover05,
  listItemColorDisabled: dark.disabled01,
  listItemFocusBorderColor: dark.focus01,
};

const listNeoLight: ListTheme = {
  ...listNovo,
  listGroupBorderColor: neoLight.ui01,
  listBackground: neoLight.ui06,
  listItemColor: neoLight.textColor01,
  listItemHoverColor: neoLight.hover08,
  listItemColorDisabled: neoLight.disabled01,
  listItemFocusBorderColor: neoLight.focus01,
  listItemActiveBackgroundColor: neoLight.active05,
};

const listNeoDark: ListTheme = {
  ...listNovoDark,
  listGroupBorderColor: neoDark.ui01,
  listBackground: neoDark.ui06,
  listItemColor: neoDark.textColor01,
  listItemActiveBackgroundColor: neoDark.active05,
  listItemHoverColor: neoDark.hover05,
  listItemColorDisabled: neoDark.disabled01,
  listItemFocusBorderColor: neoDark.focus01,
};

export { list, listNovo, listNovoDark, listNeoLight, listNeoDark };
