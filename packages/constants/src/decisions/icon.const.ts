import themes from '@8x8/oxygen-theme';

import color from '../choices/color.const';
import size from '../choices/size.const';

const { light, dark, neoLight, neoDark } = themes;

export interface IconTheme {
  color: string;
  linkColor: string;
  hoverColor: string;
  selectedColor: string;
  disabledColor: string;
  noLinkInvertColor: string;
  linkInvertColor: string;
  hoverInvertColor: string;
  selectedInvertColor: string;
  disabledInvertColor: string;
  size: string;
  viewBox: string;
}

const icon: IconTheme = {
  color: color.pickledBluewood800,
  linkColor: color.steel700,
  hoverColor: color.dodgerBlue,
  selectedColor: color.dodgerBlue,
  disabledColor: color.dodgerBlue300,

  noLinkInvertColor: color.white,
  linkInvertColor: color.cloudyBlue,
  hoverInvertColor: color.white,
  selectedInvertColor: color.white,
  disabledInvertColor: color.steel700,

  size: size.medium,
  viewBox: size.viewBox,
};

const iconNovo: IconTheme = {
  color: light.icon01,
  linkColor: light.icon01,
  hoverColor: light.icon01,
  selectedColor: light.icon01,
  disabledColor: light.icon03,

  noLinkInvertColor: dark.icon01,
  linkInvertColor: dark.icon01,
  hoverInvertColor: dark.icon01,
  selectedInvertColor: dark.icon01,
  disabledInvertColor: dark.icon03,

  size: '24px',
  viewBox: size.viewBox,
};
const iconNovoDark: IconTheme = {
  ...iconNovo,

  color: dark.icon01,
  linkColor: dark.icon01,
  hoverColor: dark.icon01,
  selectedColor: dark.icon01,
  disabledColor: dark.icon03,

  noLinkInvertColor: light.icon01,
  linkInvertColor: light.icon01,
  hoverInvertColor: light.icon01,
  selectedInvertColor: light.icon01,
  disabledInvertColor: light.icon03,
};

const iconNeoLight: IconTheme = {
  ...iconNovo,
  color: neoLight.icon01,
  linkColor: neoLight.icon01,
  hoverColor: neoLight.icon01,
  selectedColor: neoLight.icon01,
  disabledColor: neoLight.icon03,

  noLinkInvertColor: neoDark.icon01,
  linkInvertColor: neoDark.icon01,
  hoverInvertColor: neoDark.icon01,
  selectedInvertColor: neoDark.icon01,
  disabledInvertColor: neoDark.icon03,
};

const iconNeoDark: IconTheme = {
  ...iconNovoDark,
  color: neoDark.icon01,
  linkColor: neoDark.icon01,
  hoverColor: neoDark.icon01,
  selectedColor: neoDark.icon01,
  disabledColor: neoDark.icon03,

  noLinkInvertColor: neoLight.icon01,
  linkInvertColor: neoLight.icon01,
  hoverInvertColor: neoLight.icon01,
  selectedInvertColor: neoLight.icon01,
  disabledInvertColor: neoLight.icon03,
};

export { icon, iconNovo, iconNovoDark, iconNeoLight, iconNeoDark };
