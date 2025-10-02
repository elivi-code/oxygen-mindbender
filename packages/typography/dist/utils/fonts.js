import { font } from '@8x8/oxygen-constants';
var fontSizes = new Map([['xs', {
  size: font.sizeXs,
  lineHeight: font.lineHeightXs
}], ['sm', {
  size: font.sizeSm,
  lineHeight: font.lineHeightSm
}], ['md', {
  size: font.sizeMd,
  lineHeight: font.lineHeightMd
}], ['lg', {
  size: font.sizeLg,
  lineHeight: font.lineHeightLg
}], ['xl', {
  size: font.sizeXl,
  lineHeight: font.lineHeightXl
}], ['xxl', {
  size: font.sizeXxl,
  lineHeight: font.lineHeightXxl
}]]);
export function xsFontSize() {
  return "\n    font-size: ".concat(fontSizes.get('xs').size, ";\n    line-height: ").concat(fontSizes.get('xs').lineHeight, ";\n  ");
}
export function smFontSize() {
  return "\n    font-size: ".concat(fontSizes.get('sm').size, ";\n    line-height: ").concat(fontSizes.get('sm').lineHeight, ";\n  ");
}
export function mdFontSize() {
  return "\n    font-size: ".concat(fontSizes.get('md').size, ";\n    line-height: ").concat(fontSizes.get('md').lineHeight, ";\n  ");
}
export function lgFontSize() {
  return "\n    font-size: ".concat(fontSizes.get('lg').size, ";\n    line-height: ").concat(fontSizes.get('lg').lineHeight, ";\n  ");
}
export function xlFontSize() {
  return "\n    font-size: ".concat(fontSizes.get('xl').size, ";\n    line-height: ").concat(fontSizes.get('xl').lineHeight, ";\n  ");
}
export function xxlFontSize() {
  return "\n    font-size: ".concat(fontSizes.get('xxl').size, ";\n    line-height: ").concat(fontSizes.get('xxl').lineHeight, ";\n  ");
}
export function defaultFontWeight() {
  return "\n    font-weight: ".concat(font.weightDefault, ";\n  ");
}
export function attentionFontWeight() {
  return "\n    font-weight: ".concat(font.weightAttention, "\n  ");
}
export function maxFontWeight() {
  return "\n    font-weight: ".concat(font.weightAttentionMax, ";\n  ");
}