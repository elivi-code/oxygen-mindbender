import themes from '@8x8/oxygen-theme';

const { light, dark, neoLight, neoDark } = themes;

export interface TagTheme {
  backgroundVariantBlue: string;
  backgroundVariantDark: string;
  backgroundVariantLight: string;
  backgroundVariantYellow: string;
  backgroundVariantRed: string;
  textColorVariantBlue: string;
  textColorVariantDark: string;
  textColorVariantLight: string;
  textColorVariantYellow: string;
  textColorVariantRed: string;
}

const tag: TagTheme = {
  backgroundVariantBlue: light.ui09,
  backgroundVariantDark: light.ui10,
  backgroundVariantLight: light.ui01,
  backgroundVariantYellow: light.warning01,
  backgroundVariantRed: light.ui16,
  textColorVariantBlue: light.textColor01,
  textColorVariantDark: light.textColor04,
  textColorVariantLight: light.textColor01,
  textColorVariantYellow: light.textColor01,
  textColorVariantRed: light.textColor01,
};

const tagNovoDark: TagTheme = {
  backgroundVariantBlue: dark.ui09,
  backgroundVariantDark: dark.ui10,
  backgroundVariantLight: dark.ui01,
  backgroundVariantYellow: dark.warning01,
  backgroundVariantRed: dark.ui16,
  textColorVariantBlue: dark.textColor07,
  textColorVariantDark: dark.textColor01,
  textColorVariantLight: dark.textColor01,
  textColorVariantYellow: dark.textColor07,
  textColorVariantRed: dark.textColor07,
};

const tagNeoLight: TagTheme = {
  ...tag,
  backgroundVariantBlue: neoLight.ui09,
  backgroundVariantDark: neoLight.ui10,
  backgroundVariantLight: neoLight.ui01,
  backgroundVariantYellow: neoLight.warning01,
  backgroundVariantRed: neoLight.ui16,
  textColorVariantBlue: neoLight.textColor01,
  textColorVariantDark: neoLight.textColor04,
  textColorVariantLight: neoLight.textColor01,
  textColorVariantYellow: neoLight.textColor01,
  textColorVariantRed: neoLight.textColor01,
};

const tagNeoDark: TagTheme = {
  ...tagNovoDark,
  backgroundVariantBlue: neoDark.ui09,
  backgroundVariantDark: neoDark.ui10,
  backgroundVariantLight: neoDark.ui01,
  backgroundVariantYellow: neoDark.warning01,
  backgroundVariantRed: neoDark.ui16,
  textColorVariantBlue: neoDark.textColor07,
  textColorVariantDark: neoDark.textColor01,
  textColorVariantLight: neoDark.textColor01,
  textColorVariantYellow: neoDark.textColor07,
  textColorVariantRed: neoDark.textColor07,
};

export { tag, tag as tagNovo, tagNovoDark, tagNeoLight, tagNeoDark };
