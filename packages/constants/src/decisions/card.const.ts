import themes from '@8x8/oxygen-theme';
import color from '../choices/color.const';
import size from '../choices/size.const';
import font from '../choices/font.const';
import spacing from '../choices/spacing.const';

const { light, dark, neoLight, neoDark } = themes;

export interface CardTheme {
  cardHeight: string;
  cardWidth: string;
  cardBackground: string;
  cardBoxShadow: string;
  cardBorder?: string;
  cardBorderTop: string;
  cardBorderRadius: string;
  cardHeaderFontWeight: string | number;
  cardHeaderFontSize: string;
  cardHeaderLineHeight: string;
  cardHeaderColor: string;
  cardSeparatorBackgroundColor: string;
  cardSeparatorHeight: string;
  cardSeparatorWidth: string;
}

const card: CardTheme = {
  cardHeight: '252px',
  cardWidth: '328px',
  cardBackground: color.white,
  cardBoxShadow: `${size.shadowMedium} ${color.cloudyBlue300}`,
  cardBorderTop: `6px solid ${color.celadonBlue}`,
  cardBorderRadius: `${size.borderRadiusMedium} ${size.borderRadiusMedium} 0 0`,
  cardHeaderFontWeight: font.weightAttention,
  cardHeaderFontSize: font.sizeMd,
  cardHeaderLineHeight: font.lineHeightSm,
  cardHeaderColor: color.pickledBluewood800,
  cardSeparatorBackgroundColor: color.cloudyBlue300,
  cardSeparatorHeight: '1px',
  cardSeparatorWidth: '100%',
};
const cardNovo: CardTheme = {
  cardHeight: '252px',
  cardWidth: '328px',
  cardBackground: light.ui06,
  cardBoxShadow: light.shadowMedium,
  cardSeparatorHeight: '1px',
  cardSeparatorWidth: '100%',
  cardBorder: `1px solid ${light.ui01}`,
  cardBorderTop: `1px solid ${light.ui01}`,
  cardBorderRadius: '0px',
  cardHeaderFontWeight: light.heading01.fontWeight,
  cardHeaderFontSize: light.heading01.fontSize,
  cardHeaderLineHeight: light.heading01.lineHeight,
  cardHeaderColor: light.textColor01,
  cardSeparatorBackgroundColor: light.ui01,
};
const cardNovoDark: CardTheme = {
  ...cardNovo,
  cardBackground: dark.ui06,
  cardBoxShadow: dark.shadowMedium,
  cardBorder: `1px solid ${dark.ui01}`,
  cardBorderTop: `1px solid ${dark.ui01}`,
  cardHeaderColor: dark.textColor01,
  cardSeparatorBackgroundColor: dark.ui01,
};

const cardNeoLight: CardTheme = {
  ...cardNovo,
  cardBackground: neoLight.ui06,
  cardBoxShadow: neoLight.shadowMedium,
  cardBorder: `1px solid ${neoLight.ui01}`,
  cardBorderTop: `1px solid ${neoLight.ui01}`,
  cardHeaderColor: neoLight.textColor01,
  cardSeparatorBackgroundColor: neoLight.ui01,
};

const cardNeoDark: CardTheme = {
  ...cardNovoDark,
  cardBackground: neoDark.ui06,
  cardBoxShadow: neoDark.shadowMedium,
  cardBorder: `1px solid ${neoDark.ui01}`,
  cardBorderTop: `1px solid ${neoDark.ui01}`,
  cardHeaderColor: neoDark.textColor01,
  cardSeparatorBackgroundColor: neoDark.ui01,
};

export interface StatisticsTheme {
  numbersFontWeight: string | number;
  numbersFontSize: string;
  numbersLineHeight: string;
  numbersColor?: string;
  numbersColorError: string;
  textFontSize: string;
  textLineHeight: string;
  textColor: string;
  textColorError: string;
  boxMargin: string;
  boxWidth: string;
}

const statistics: StatisticsTheme = {
  numbersFontWeight: font.weightAttention,
  numbersFontSize: font.sizeMd,
  numbersLineHeight: font.lineHeightMd,
  numbersColorError: color.coral,
  textFontSize: font.sizeXs,
  textLineHeight: font.lineHeightXs,
  textColor: color.steel700,
  textColorError: color.coral,
  boxMargin: `${spacing.md} ${spacing.lg} ${spacing.lg}`,
  boxWidth: '70px',
};
const statisticsNovo: StatisticsTheme = {
  numbersFontWeight: light.heading01.fontWeight,
  numbersFontSize: light.heading01.fontSize,
  numbersLineHeight: light.heading01.lineHeight,
  numbersColor: light.textColor01,
  numbersColorError: light.error01,
  textFontSize: light.body01.fontSize,
  textLineHeight: light.body01.lineHeight,
  textColor: light.textColor01,
  textColorError: light.error01,
  boxMargin: `${light.spacing05} ${light.spacing06} ${light.spacing06}`,
  boxWidth: '70px',
};

const statisticsNovoDark: StatisticsTheme = {
  ...statisticsNovo,
  numbersColor: dark.textColor01,
  numbersColorError: dark.error01,
  textColor: dark.textColor01,
  textColorError: dark.error01,
};

const statisticsNeoLight: StatisticsTheme = {
  ...statisticsNovo,
  numbersColor: neoLight.textColor01,
  numbersColorError: neoLight.error01,
  textColor: neoLight.textColor01,
  textColorError: neoLight.error01,
};

const statisticsNeoDark: StatisticsTheme = {
  ...statisticsNovoDark,
  numbersColor: neoDark.textColor01,
  numbersColorError: neoDark.error01,
  textColor: neoDark.textColor01,
  textColorError: neoDark.error01,
};

export {
  card,
  cardNovo,
  cardNovoDark,
  cardNeoLight,
  cardNeoDark,
  statistics,
  statisticsNovo,
  statisticsNovoDark,
  statisticsNeoLight,
  statisticsNeoDark,
};
