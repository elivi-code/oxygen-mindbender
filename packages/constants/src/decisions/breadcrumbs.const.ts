import themes from '@8x8/oxygen-theme';
import color from '../choices/color.const';
import font from '../choices/font.const';

const { light, dark, neoLight, neoDark } = themes;

export interface BreadCrumbsTheme {
  textLink: {
    textLinkColorPrimaryDisabled: string;
  };
  separatorFontSize: string;
  separatorFontWeight: string | number;
  separatorPadding: string;
  separatorTextColor: string;
}

const breadcrumbs: BreadCrumbsTheme = {
  textLink: {
    textLinkColorPrimaryDisabled: color.pickledBluewood800,
  },
  separatorFontSize: font.sizeSm,
  separatorFontWeight: font.weightDefault,
  separatorPadding: '0 6px',
  separatorTextColor: color.pickledBluewood800,
};

const breadcrumbsNovo: BreadCrumbsTheme = {
  textLink: {
    textLinkColorPrimaryDisabled: light.textColor01,
  },

  separatorFontSize: light.body02.fontSize,
  separatorFontWeight: light.body02.fontWeight,
  separatorPadding: '0 6px',

  separatorTextColor: light.textColor01,
};

const breadcrumbsNovoDark: BreadCrumbsTheme = {
  ...breadcrumbsNovo,

  textLink: {
    textLinkColorPrimaryDisabled: dark.textColor01,
  },
  separatorTextColor: dark.textColor01,
};

const breadcrumbsNeoLight: BreadCrumbsTheme = {
  ...breadcrumbsNovo,
  textLink: {
    textLinkColorPrimaryDisabled: neoLight.textColor01,
  },
  separatorTextColor: neoLight.textColor01,
};

const breadcrumbsNeoDark: BreadCrumbsTheme = {
  ...breadcrumbsNovoDark,
  textLink: {
    textLinkColorPrimaryDisabled: neoDark.textColor01,
  },
  separatorTextColor: neoDark.textColor01,
};

export {
  breadcrumbs,
  breadcrumbsNovo,
  breadcrumbsNovoDark,
  breadcrumbsNeoLight,
  breadcrumbsNeoDark,
};
