import themes from '@8x8/oxygen-theme';

import size from '../choices/size.const';
import color from '../choices/color.const';

const { light, dark, neoLight, neoDark } = themes;

export interface RadioTheme {
  borderSize?: string;
  borderStyle?: string;
  iconDotSize?: string;
  iconSelectedColor: string;
  iconHoverColor: string;
  iconFocusColor: string;
  iconDisabledColor?: string;
  iconSet: 'novo' | 'classic';
  iconSize: string;
  iconSpacing: string;
  iconUnselectedColor: string;
  labelColor: string;
  labelDisabledColor: string;
  focusColor?: string;
}

const radio: RadioTheme = {
  borderSize: size.borderSizeDefault,
  borderStyle: 'solid',
  iconDotSize: size.default,
  iconSelectedColor: color.dodgerBlue,
  iconHoverColor: color.dodgerBlue300,
  iconFocusColor: color.dodgerBlue300,
  iconSet: 'classic',
  iconSize: size.default2x,
  iconSpacing: size.default,
  iconUnselectedColor: color.cloudyBlue,
  labelColor: color.pickledBluewood800,
  labelDisabledColor: color.pickledBluewood800,
  focusColor: light.focus01,
};

const radioNovo: RadioTheme = {
  iconDisabledColor: light.disabled02,
  iconHoverColor: light.focus01,
  iconFocusColor: light.focus01,
  iconSelectedColor: light.ui22,
  iconSet: 'novo',
  iconSize: '24px',
  iconSpacing: light.spacing04,
  iconUnselectedColor: light.ui21,
  labelColor: light.textColor01,
  labelDisabledColor: light.disabled02,
  focusColor: light.focus01,
};

const radioNovoDark: RadioTheme = {
  ...radioNovo,
  iconDisabledColor: dark.disabled02,
  iconSelectedColor: dark.ui22,
  iconUnselectedColor: dark.ui21,
  labelColor: dark.textColor01,
  labelDisabledColor: dark.disabled02,
  focusColor: dark.focus01,
};

const radioNeoLight: RadioTheme = {
  ...radioNovo,
  iconDisabledColor: neoLight.disabled02,
  iconHoverColor: neoLight.focus01,
  iconFocusColor: neoLight.focus01,
  iconSelectedColor: neoLight.ui22,
  iconUnselectedColor: neoLight.ui21,
  labelColor: neoLight.textColor01,
  labelDisabledColor: neoLight.disabled02,
  focusColor: neoLight.focus01,
};

const radioNeoDark: RadioTheme = {
  ...radioNovoDark,
  iconDisabledColor: neoDark.disabled02,
  iconSelectedColor: neoDark.ui22,
  iconUnselectedColor: neoDark.ui21,
  labelColor: neoDark.textColor01,
  labelDisabledColor: neoDark.disabled02,
  focusColor: neoDark.focus01,
};

const radioGroup = {
  verticalGroupMargin: size.default,
  horizontalGroupMargin: size.default2x,
};

const radioGroupNovo = {
  verticalGroupMargin: light.spacing03,
  horizontalGroupMargin: light.spacing06,
};

const radioGroupNovoDark = {
  ...radioGroupNovo,
};

export {
  radio,
  radioNovo,
  radioNovoDark,
  radioGroup,
  radioGroupNovo,
  radioGroupNovoDark,
  radioNeoLight,
  radioNeoDark,
};
