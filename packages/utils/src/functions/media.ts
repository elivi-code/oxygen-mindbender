import { css, FlattenSimpleInterpolation } from 'styled-components';

import { size } from '@8x8/oxygen-constants';

export type MediaSizesKeys = 'desktop' | 'tablet' | 'phone';
type MediaSizesType = Record<MediaSizesKeys, number>;
type MediaSizesFnType = Record<
  MediaSizesKeys,
  (...args: string[]) => string | FlattenSimpleInterpolation
>;
const mediaSizes: MediaSizesType = {
  desktop: size.windowWidthDesktop,
  tablet: size.windowWidthTablet,
  phone: size.windowWidthPhone,
};

/**
 * @description Convert pixels to em units
 * @param {(number|string)} value Breakpoint value
 * @returns {number} A number which was converted to em units
 */
const calcMediaVal = (value: number | string) => parseFloat(<string>value) / 16;

/**
 * @description Append `em` to a number
 * @param {number} value Breakpoint value
 * @returns {string} A number which was converted to em units with `em` appended
 */
const getMediaVal = (value: number) => `${calcMediaVal(value)}em`;

/**
 * @param {string} [mediaRule=max] Prefix for the media rule: [min|max]
 * @returns {(value: (number|string)) => (...args: string) => string}
 */
const getCssMedia =
  (mediaRule: 'min' | 'max' = 'max') =>
  (value: number) =>
  // disable-next-line @typescript-eslint/no-explicit-any
  (...args: any) =>
    css`
      @media (${mediaRule}-width: ${getMediaVal(value)}) {
        ${css(args)}
      }
    `;

/**
 * description Function to create an object containing media query functions for `styled-components`
 * param {{ desktop: number, tablet: number, phone: number }} [sizeEntries]
 * returns { (string) =>  { desktop: Function, tablet: Function, phone: Function }} - Utility media-query functions
 * for `styled-components`
 */
const mediaFn =
  (sizeEntries: MediaSizesType = mediaSizes) =>
  /**
   * @param {'min' | 'max'} [mediaRule='max'] Media query [max|min] width rule
   */
  (mediaRule: 'min' | 'max' = 'max'): MediaSizesFnType => ({
    desktop: getCssMedia(mediaRule)(sizeEntries.desktop),
    tablet: getCssMedia(mediaRule)(sizeEntries.tablet),
    phone: getCssMedia(mediaRule)(sizeEntries.phone),
  });

/**
 * @description Creates a min-width rule with custom value
 * @param {(number|string)} value Breakpoint value
 * @returns {(css: string) => string}
 */
const mediaMinC = getCssMedia('min');

/**
 * @description Creates a max-width rule with custom value
 * @param {(number|string)} value Breakpoint value
 * @returns {(css: string) => string}
 */
const mediaMaxC = getCssMedia();

/**
 * @description Object containing `min-width` breakpoint functions for `styled-components`
 */
const mediaMin = mediaFn()('min');

/**
 * @description Object containing `max-width` breakpoint functions for `styled-components`
 */
const mediaMax = mediaFn()();

export {
  getCssMedia,
  mediaMinC,
  mediaMaxC,
  calcMediaVal,
  getMediaVal,
  mediaMin,
  mediaFn,
  mediaSizes,
};

export default mediaMax;
