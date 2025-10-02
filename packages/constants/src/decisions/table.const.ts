import themes from '@8x8/oxygen-theme';

import color from '../choices/color.const';
import font from '../choices/font.const';
import spacing from '../choices/spacing.const';

const { light, dark, neoLight, neoDark } = themes;

export interface TableTheme {
  tableFontFamily: string;
  tableBorderColor: string;
  fontVariantNumeric: string;
  tableRowHoverColor: string;
  tableRowHoverBackgroundColor: string;
  tableRowSelectedBackgroundColor: string;
  zebraRowBackgroundColor: string;
  tableCellFontSize: string;
  tableCellLineHeight: string;
  tableCellPadding: string;
  tableCellColor: string;
  tableCellBackgroundColor: string;
  tableCellFontWeight: string | number;
  tableCellLetterSpacing: string;
  tableCellFontFamily: string;
  tableCellHeadFontSize: string;
  tableCellHeadLineHeight: string;
  tableCellHeadFontWeight: string | number;
  tableCellHeadColor: string;
  tableCellHeadBackgroundColor: string;
  tableCellHeadLetterSpacing: string;
  tableCellHeadFontFamily: string;
}

const table: TableTheme = {
  tableFontFamily: font.family,

  tableBorderColor: color.cloudyBlue300,

  fontVariantNumeric: 'unset',

  // Hover & Selected
  tableRowHoverColor: color.pickledBluewood800,
  tableRowHoverBackgroundColor: color.cloudyBlue100,
  tableRowSelectedBackgroundColor: color.cloudyBlue300,

  zebraRowBackgroundColor: color.cloudyBlue100,

  // Cell/Row
  tableCellFontSize: font.sizeSm,
  tableCellLineHeight: font.lineHeightSm,
  tableCellPadding: `${spacing.md} ${spacing.xs}`,
  tableCellColor: color.pickledBluewood800,
  tableCellBackgroundColor: 'unset',
  tableCellFontWeight: 'unset',
  tableCellLetterSpacing: 'unset',
  tableCellFontFamily: 'unset',

  // Header
  tableCellHeadFontSize: font.sizeSm,
  tableCellHeadLineHeight: font.lineHeightSm,
  tableCellHeadFontWeight: font.weightAttention,
  tableCellHeadColor: color.steel700,
  tableCellHeadBackgroundColor: 'unset',
  tableCellHeadLetterSpacing: 'unset',
  tableCellHeadFontFamily: 'unset',
};

const tableCellTypography = {
  tableCellFontSize: light.body01.fontSize,
  tableCellLineHeight: light.body01.lineHeight,
  tableCellFontWeight: light.body01.fontWeight,
  tableCellLetterSpacing: light.body01.letterSpacing,
  tableCellFontFamily: light.body01.fontFamily,
};
const tableCellHeadTypography = {
  tableCellHeadFontSize: light.bodyBold01.fontSize,
  tableCellHeadLineHeight: light.bodyBold01.lineHeight,
  tableCellHeadFontWeight: light.bodyBold01.fontWeight,
  tableCellHeadLetterSpacing: light.bodyBold01.letterSpacing,
  tableCellHeadFontFamily: light.bodyBold01.fontFamily,
};

const tableNovo: TableTheme = {
  ...table,

  tableFontFamily: light.body01.fontFamily,
  fontVariantNumeric: 'tabular-nums',

  // Cell/Row
  ...tableCellTypography,
  tableCellColor: light.textColor05,
  tableCellBackgroundColor: 'unset',

  // Header
  ...tableCellHeadTypography,
  tableCellHeadColor: light.textColor01,
  tableCellHeadBackgroundColor: 'unset',

  tableBorderColor: light.ui02,

  // Hover & Selected
  tableRowHoverColor: light.textColor01,
  tableRowHoverBackgroundColor: light.ui05,
  tableRowSelectedBackgroundColor: light.active08,

  zebraRowBackgroundColor: light.ui05,

  tableCellPadding: `${light.spacing04} ${light.spacing05}`,
};

const tableNovoDark: TableTheme = {
  ...tableNovo,

  // Cell/Row
  tableCellColor: dark.textColor05,
  // Header
  tableCellHeadColor: dark.textColor01,

  tableBorderColor: dark.ui02,

  // Hover & Selected
  tableRowHoverColor: dark.textColor01,
  tableRowHoverBackgroundColor: dark.ui05,
  tableRowSelectedBackgroundColor: dark.active08,

  zebraRowBackgroundColor: dark.ui05,
};

const tableNeoLight: TableTheme = {
  ...tableNovo,
  tableCellColor: neoLight.textColor05,
  tableCellHeadColor: neoLight.textColor01,
  tableBorderColor: neoLight.ui02,
  tableRowHoverColor: neoLight.textColor01,
  tableRowHoverBackgroundColor: neoLight.ui05,
  tableRowSelectedBackgroundColor: neoLight.active08,
  zebraRowBackgroundColor: neoLight.ui05,
};

const tableNeoDark: TableTheme = {
  ...tableNovoDark,
  tableCellColor: neoDark.textColor05,
  tableCellHeadColor: neoDark.textColor01,
  tableBorderColor: neoDark.ui02,
  tableRowHoverColor: neoDark.textColor01,
  tableRowHoverBackgroundColor: neoDark.ui05,
  tableRowSelectedBackgroundColor: neoDark.active08,
  zebraRowBackgroundColor: neoDark.ui05,
};

export { table, tableNovo, tableNovoDark, tableNeoLight, tableNeoDark };
