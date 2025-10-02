import {
  xsFontSize,
  smFontSize,
  mdFontSize,
  lgFontSize,
  xlFontSize,
  xxlFontSize,
  defaultFontWeight,
  attentionFontWeight,
  maxFontWeight,
} from '../utils/fonts';

const sizesMap = {
  xs: xsFontSize,
  sm: smFontSize,
  md: mdFontSize,
  lg: lgFontSize,
  xl: xlFontSize,
  xxl: xxlFontSize,
};

const weightsMap = {
  default: defaultFontWeight,
  attention: attentionFontWeight,
  max: maxFontWeight,
};

export { sizesMap, weightsMap };
