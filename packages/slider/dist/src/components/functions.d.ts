import { SliderTheme } from '../types';
export declare function getPercentValue(value: number, maxValue: number, minValue: number): number;
/**
 * It takes the limits and the values in percentages of the slider and calculates the offsets and the widths of the track parts as it follows:
 * @param maxThumbValue takes the value of the input that has initially the reference to the max value
 * @param theme contains the knob size which helps to calculate the width and left attributes without covering the slider thumbs
 * @param setBeforeThumbTrackWidth sets the width of the track before the thumb
 * @param setAfterThumbTrackWidth sets the width of the track after the thumb
 * @param minThumbValue takes the value of the input that has initially the reference to the min value
 * @param setFirstHalfProgressLeft sets the left attribute of the first half of the progress bar
 * @param setSecondHalfProgressLeft sets the left attribute of the second half of the progress bar
 * @param setHalfProgressWidth sets the width of the second half of the progress bar
 */
export declare function setOffsetsAndWidths(maxThumbValue: number, theme: SliderTheme, setBeforeThumbTrackWidth: (width: string) => void, setAfterThumbTrackWidth: (width: string) => void, minThumbValue?: number, setFirstHalfProgressLeft?: (left: string) => void, setSecondHalfProgressLeft?: (left: string) => void, setHalfProgressWidth?: (width: string) => void): void;
//# sourceMappingURL=functions.d.ts.map