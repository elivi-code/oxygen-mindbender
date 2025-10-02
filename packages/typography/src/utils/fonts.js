import { font } from '@8x8/oxygen-constants';

const fontSizes = new Map([
  ['xs', { size: font.sizeXs, lineHeight: font.lineHeightXs }],
  ['sm', { size: font.sizeSm, lineHeight: font.lineHeightSm }],
  ['md', { size: font.sizeMd, lineHeight: font.lineHeightMd }],
  ['lg', { size: font.sizeLg, lineHeight: font.lineHeightLg }],
  ['xl', { size: font.sizeXl, lineHeight: font.lineHeightXl }],
  ['xxl', { size: font.sizeXxl, lineHeight: font.lineHeightXxl }],
]);

export function xsFontSize() {
  return `
    font-size: ${fontSizes.get('xs').size};
    line-height: ${fontSizes.get('xs').lineHeight};
  `;
}

export function smFontSize() {
  return `
    font-size: ${fontSizes.get('sm').size};
    line-height: ${fontSizes.get('sm').lineHeight};
  `;
}

export function mdFontSize() {
  return `
    font-size: ${fontSizes.get('md').size};
    line-height: ${fontSizes.get('md').lineHeight};
  `;
}

export function lgFontSize() {
  return `
    font-size: ${fontSizes.get('lg').size};
    line-height: ${fontSizes.get('lg').lineHeight};
  `;
}

export function xlFontSize() {
  return `
    font-size: ${fontSizes.get('xl').size};
    line-height: ${fontSizes.get('xl').lineHeight};
  `;
}

export function xxlFontSize() {
  return `
    font-size: ${fontSizes.get('xxl').size};
    line-height: ${fontSizes.get('xxl').lineHeight};
  `;
}

export function defaultFontWeight() {
  return `
    font-weight: ${font.weightDefault};
  `;
}

export function attentionFontWeight() {
  return `
    font-weight: ${font.weightAttention}
  `;
}

export function maxFontWeight() {
  return `
    font-weight: ${font.weightAttentionMax};
  `;
}
