import { xsFontSize, smFontSize, mdFontSize, lgFontSize, xlFontSize, xxlFontSize, defaultFontWeight, attentionFontWeight, maxFontWeight } from '../utils/fonts';
var sizesMap = {
  xs: xsFontSize,
  sm: smFontSize,
  md: mdFontSize,
  lg: lgFontSize,
  xl: xlFontSize,
  xxl: xxlFontSize
};
var weightsMap = {
  "default": defaultFontWeight,
  attention: attentionFontWeight,
  max: maxFontWeight
};
export { sizesMap, weightsMap };