import { FlattenSimpleInterpolation } from 'styled-components';
export type MediaSizesKeys = 'desktop' | 'tablet' | 'phone';
type MediaSizesType = Record<MediaSizesKeys, number>;
type MediaSizesFnType = Record<MediaSizesKeys, (...args: string[]) => string | FlattenSimpleInterpolation>;
declare const mediaSizes: MediaSizesType;
/**
 * @description Convert pixels to em units
 * @param {(number|string)} value Breakpoint value
 * @returns {number} A number which was converted to em units
 */
declare const calcMediaVal: (value: number | string) => number;
/**
 * @description Append `em` to a number
 * @param {number} value Breakpoint value
 * @returns {string} A number which was converted to em units with `em` appended
 */
declare const getMediaVal: (value: number) => string;
/**
 * @param {string} [mediaRule=max] Prefix for the media rule: [min|max]
 * @returns {(value: (number|string)) => (...args: string) => string}
 */
declare const getCssMedia: (mediaRule?: 'min' | 'max') => (value: number) => (...args: any) => FlattenSimpleInterpolation;
/**
 * description Function to create an object containing media query functions for `styled-components`
 * param {{ desktop: number, tablet: number, phone: number }} [sizeEntries]
 * returns { (string) =>  { desktop: Function, tablet: Function, phone: Function }} - Utility media-query functions
 * for `styled-components`
 */
declare const mediaFn: (sizeEntries?: MediaSizesType) => (mediaRule?: 'min' | 'max') => MediaSizesFnType;
/**
 * @description Creates a min-width rule with custom value
 * @param {(number|string)} value Breakpoint value
 * @returns {(css: string) => string}
 */
declare const mediaMinC: (value: number) => (...args: any) => FlattenSimpleInterpolation;
/**
 * @description Creates a max-width rule with custom value
 * @param {(number|string)} value Breakpoint value
 * @returns {(css: string) => string}
 */
declare const mediaMaxC: (value: number) => (...args: any) => FlattenSimpleInterpolation;
/**
 * @description Object containing `min-width` breakpoint functions for `styled-components`
 */
declare const mediaMin: MediaSizesFnType;
/**
 * @description Object containing `max-width` breakpoint functions for `styled-components`
 */
declare const mediaMax: MediaSizesFnType;
export { getCssMedia, mediaMinC, mediaMaxC, calcMediaVal, getMediaVal, mediaMin, mediaFn, mediaSizes, };
export default mediaMax;
//# sourceMappingURL=media.d.ts.map