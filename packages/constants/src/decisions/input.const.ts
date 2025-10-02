import themes from '@8x8/oxygen-theme';

import color from '../choices/color.const';
import font from '../choices/font.const';
import size from '../choices/size.const';
import timing from '../choices/timing.const';

const { light, dark, neoLight, neoDark } = themes;

export interface InputTheme {
  backgroundColor: string;
  backgroundColorDisabled: string;
  backgroundColorFixed: string;
  backgroundColorReadOnly: string;
  backgroundColorSemanticBlock: string;
  borderColor: string;
  borderColorError: string;
  borderColorFixed: string;
  borderColorFocused: string;
  borderColorReadOnly: string;
  borderColorDisabled?: string;
  borderColorSemanticBlock: string;
  borderRadius: string | number;
  borderRadiusReadOnly: string | number;
  borderStyle: string;
  borderStyleDefaultSemanticBlock: string;
  borderTransitionTiming: string;
  borderWidth: string;
  borderWidthReadOnly: string;
  borderWidthSemanticBlock: string;
  color: string;
  colorDisabled: string;
  colorFixed: string;
  colorIcon: string;
  colorPlaceholder: string;
  colorReadOnly: string;
  colorSemanticBlock: string;
  fontFamily: string;
  fontSize: string;
  fontStretch: string;
  fontStyle: string;
  fontWeight: string | number;
  height: string;
  heightLarge: string;
  heightSmall: string;
  horizontalSpacing: string;
  horizontalSpacingReadOnly: string;
  iconHorizontalSpacing: string;
  iconSize: number;
  letterSpacing: string;
  lineHeight: string;
  minWidth: string;
  prefixSuffixHorizontalSpacing: string;
  prefixSuffixInsideInput: boolean;
  verticalSpacing: string;
  width: string;
  widthSemanticBlock: string;
}

const input: InputTheme = {
  backgroundColor: color.white,
  backgroundColorDisabled: color.cloudyBlue100,
  backgroundColorFixed: 'transparent',
  backgroundColorReadOnly: color.white,
  backgroundColorSemanticBlock: color.cloudyBlue100,
  borderColor: color.cloudyBlue300,
  borderColorError: color.coral,
  borderColorFixed: 'transparent',
  borderColorFocused: color.dodgerBlue,
  borderColorReadOnly: color.cloudyBlue300,
  borderColorSemanticBlock: color.cloudyBlue,
  borderRadius: 0,
  borderRadiusReadOnly: 0,
  borderStyle: 'solid',
  borderStyleDefaultSemanticBlock: 'solid',
  borderTransitionTiming: timing.fast,
  borderWidth: size.borderSizeDefault,
  borderWidthReadOnly: size.borderSizeDefault,
  borderWidthSemanticBlock: size.borderSizeDefault,
  color: color.pickledBluewood800,
  colorDisabled: color.cloudyBlue,
  colorFixed: color.steel700,
  colorIcon: color.steel700,
  colorPlaceholder: color.cloudyBlue,
  colorReadOnly: color.pickledBluewood800,
  colorSemanticBlock: color.steel700,
  fontFamily: font.family,
  fontSize: font.sizeSm,
  fontStretch: 'normal',
  fontStyle: 'normal',
  fontWeight: font.weightDefault,
  height: size.formItemSizeLarge,
  heightLarge: '48px',
  heightSmall: size.formItemSizeSmall,
  horizontalSpacing: size.default,
  horizontalSpacingReadOnly: size.default,
  iconHorizontalSpacing: size.default,
  iconSize: 24,
  letterSpacing: 'normal',
  lineHeight: font.lineHeightSm,
  minWidth: '40px',
  prefixSuffixHorizontalSpacing: size.default,
  prefixSuffixInsideInput: false,
  verticalSpacing: size.small,
  width: '296px',
  widthSemanticBlock: '60px',
};

const inputNovo: InputTheme = {
  ...input,
  ...light.body01,
  backgroundColor: light.ui05,
  backgroundColorDisabled: light.ui05,
  backgroundColorReadOnly: light.ui06,
  backgroundColorSemanticBlock: light.ui05,
  borderColor: light.ui05,
  borderColorDisabled: light.ui05,
  borderColorError: light.action03,
  borderColorFixed: 'transparent',
  borderColorFocused: light.focus01,
  borderColorReadOnly: 'transparent',
  borderColorSemanticBlock: light.ui05,
  borderRadius: '6px',
  borderRadiusReadOnly: '0',
  borderStyle: 'solid',
  borderStyleDefaultSemanticBlock: 'solid',
  borderTransitionTiming: '150ms',
  borderWidth: '2px',
  borderWidthReadOnly: '2px',
  borderWidthSemanticBlock: '2px',
  color: light.textColor01,
  colorDisabled: light.disabled02,
  colorFixed: light.textColor01,
  colorIcon: light.textColor01,
  colorPlaceholder: light.textColor02,
  colorReadOnly: light.textColor01,
  colorSemanticBlock: light.textColor01,
  fontStretch: 'normal',
  fontStyle: 'normal',
  height: '40px',
  heightLarge: '48px',
  heightSmall: '32px',
  horizontalSpacing: '14px', // token?
  horizontalSpacingReadOnly: '0',
  iconHorizontalSpacing: '0', // token?
  iconSize: 20,
  minWidth: '40px', // wrapper min-width
  prefixSuffixHorizontalSpacing: '10px', // token?
  prefixSuffixInsideInput: true,
  verticalSpacing: '2px 0 0', // wrapper vertical margin, current hacky solution (top right bottom), refactor for v2
  width: '320px',
  widthSemanticBlock: '60px',
};

const inputNovoDark: InputTheme = {
  ...inputNovo,
  backgroundColor: dark.ui05,
  backgroundColorDisabled: dark.ui05,
  backgroundColorReadOnly: dark.ui06,
  backgroundColorSemanticBlock: dark.ui05,
  borderColor: dark.ui05,
  borderColorDisabled: dark.ui05,
  borderColorError: dark.action03,
  borderColorFocused: dark.focus01,
  borderColorSemanticBlock: dark.ui05,
  color: dark.textColor01,
  colorDisabled: dark.disabled02,
  colorFixed: dark.textColor01,
  colorIcon: dark.textColor01,
  colorPlaceholder: dark.textColor02,
  colorReadOnly: dark.textColor01,
  colorSemanticBlock: dark.textColor01,
};

const inputNeoLight: InputTheme = {
  ...inputNovo,
  backgroundColor: neoLight.ui05,
  backgroundColorDisabled: neoLight.ui05,
  backgroundColorReadOnly: neoLight.ui06,
  backgroundColorSemanticBlock: neoLight.ui05,
  borderColor: neoLight.ui05,
  borderColorDisabled: neoLight.ui05,
  borderColorError: neoLight.action03,
  borderColorFocused: neoLight.focus01,
  borderColorSemanticBlock: neoLight.ui05,
  color: neoLight.textColor01,
  colorDisabled: neoLight.disabled02,
  colorFixed: neoLight.textColor01,
  colorIcon: neoLight.textColor01,
  colorPlaceholder: neoLight.textColor02,
  colorReadOnly: neoLight.textColor01,
  colorSemanticBlock: neoLight.textColor01,
};

const inputNeoDark: InputTheme = {
  ...inputNovoDark,
  backgroundColor: neoDark.ui05,
  backgroundColorDisabled: neoDark.ui05,
  backgroundColorReadOnly: neoDark.ui06,
  backgroundColorSemanticBlock: neoDark.ui05,
  borderColor: neoDark.ui05,
  borderColorDisabled: neoDark.ui05,
  borderColorError: neoDark.action03,
  borderColorFocused: neoDark.focus01,
  borderColorSemanticBlock: neoDark.ui05,
  color: neoDark.textColor01,
  colorDisabled: neoDark.disabled02,
  colorFixed: neoDark.textColor01,
  colorIcon: neoDark.textColor01,
  colorPlaceholder: neoDark.textColor02,
  colorReadOnly: neoDark.textColor01,
  colorSemanticBlock: neoDark.textColor01,
};

/** @deprecated use exported type `import { InputSize } from @8x8/oxygen-input` instead */
const inputSize = {
  small: 'small',
  default: 'default',
  large: 'large',
};

export {
  input,
  inputNovo,
  inputNovoDark,
  inputNeoLight,
  inputNeoDark,
  inputSize,
};
