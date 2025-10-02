import themes from '@8x8/oxygen-theme';

const { light, dark, neoLight } = themes;

export interface IconButtonTheme {
  color: string;
  colorDisabled: string;
  colorInverted: string;
  colorInvertedDisabled: string;
  colorSelected: string;
  backgroundHover: string;
  backgroundActive: string;
  backgroundActiveSelected: string;
  backgroundSelectedHover: string;
  backgroundSelectedDisabled: string;
  backgroundHoverInverted: string;
  backgroundActiveInverted: string;
  borderFocus: string;
  borderFocusInverted: string;
  shadowFocus: string;
  shadowFocusInverted: string;
}

const iconButtonNovo: IconButtonTheme = {
  color: light.icon01,
  colorDisabled: light.disabled04,
  colorInverted: light.icon05,
  colorInvertedDisabled: dark.icon03,

  colorSelected: light.icon05,
  backgroundActiveSelected: light.active13,
  backgroundSelectedHover: light.hover14,
  backgroundSelectedDisabled: light.disabled01,

  backgroundHover: light.hover13,
  backgroundActive: light.active12,
  backgroundHoverInverted: light.hover14,
  backgroundActiveInverted: light.active12,

  borderFocus: light.focus01,
  borderFocusInverted: dark.focus01,
  shadowFocus: light.ui06,
  shadowFocusInverted: light.ui07,
};

const iconButtonNovoDark: IconButtonTheme = {
  color: dark.icon01,
  colorDisabled: dark.disabled04,
  colorInverted: dark.icon05,
  colorInvertedDisabled: light.icon03,

  colorSelected: dark.icon05,
  backgroundActiveSelected: dark.active13,
  backgroundSelectedHover: dark.hover14,
  backgroundSelectedDisabled: dark.disabled01,

  backgroundHover: dark.hover13,
  backgroundActive: dark.active12,
  backgroundHoverInverted: dark.hover14,
  backgroundActiveInverted: dark.active12,

  borderFocus: dark.focus01,
  borderFocusInverted: light.focus01,
  shadowFocus: dark.ui06,
  shadowFocusInverted: dark.ui07,
};

const iconButtonNeoLight: IconButtonTheme = {
  ...iconButtonNovo,

  colorDisabled: neoLight.disabled04,
  backgroundHover: neoLight.hover13,
  backgroundActive: neoLight.active12,
  backgroundSelectedDisabled: neoLight.disabled01,
  shadowFocusInverted: neoLight.ui07,
};

const iconButtonNeoDark: IconButtonTheme = {
  ...iconButtonNovoDark,
};

const iconButton = iconButtonNovo;

export {
  iconButton,
  iconButtonNovo,
  iconButtonNovoDark,
  iconButtonNeoLight,
  iconButtonNeoDark,
};
