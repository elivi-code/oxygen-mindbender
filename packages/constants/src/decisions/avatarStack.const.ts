import themes from '@8x8/oxygen-theme';

const { light, dark, neoLight, neoDark } = themes;

export interface AvatarStackTheme {
  backgroundHover: string;
  borderColorHover: string;
  borderColorFocus: string;
  counterBackground: string;
  counterColor: string;
}

const avatarStackNovo: AvatarStackTheme = {
  backgroundHover: light.ui05,
  borderColorHover: light.ui01,
  borderColorFocus: light.focus01,
  counterBackground: light.ui07,
  counterColor: light.textColor04,
};

const avatarStack = avatarStackNovo;

const avatarStackNovoDark: AvatarStackTheme = {
  backgroundHover: dark.ui05,
  borderColorHover: dark.ui01,
  borderColorFocus: dark.focus01,
  counterBackground: dark.ui07,
  counterColor: dark.textColor04,
};

const avatarStackNeoLight = {
  ...avatarStackNovo,
  backgroundHover: neoLight.ui05,
  borderColorHover: neoLight.ui01,
  borderColorFocus: neoLight.focus01,
  counterBackground: neoLight.ui07,
  counterColor: neoLight.textColor04,
};

const avatarStackNeoDark = {
  ...avatarStackNovoDark,
  backgroundHover: neoDark.ui05,
  borderColorHover: neoDark.ui01,
  borderColorFocus: neoDark.focus01,
  counterBackground: neoDark.ui07,
  counterColor: neoDark.textColor04,
};

export {
  avatarStack,
  avatarStackNovo,
  avatarStackNovoDark,
  avatarStackNeoLight,
  avatarStackNeoDark,
};
