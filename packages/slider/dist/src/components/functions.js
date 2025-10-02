export function getPercentValue(value, maxValue, minValue) {
    return ((value - minValue) * 100) / (maxValue - minValue);
}
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
export function setOffsetsAndWidths(maxThumbValue, theme, setBeforeThumbTrackWidth, setAfterThumbTrackWidth, minThumbValue, setFirstHalfProgressLeft, setSecondHalfProgressLeft, setHalfProgressWidth) {
    const maxElemValue = maxThumbValue;
    const minElemValue = minThumbValue ?? maxThumbValue;
    const knobSize = parseInt(theme.sliderKnobSize, 10);
    const maxElemKnobPercent = ((100 - maxElemValue) * knobSize) / 100;
    const minElemKnobPercent = (minElemValue * knobSize) / 100;
    const avg = (maxElemValue + minElemValue) / 2;
    setAfterThumbTrackWidth(`calc(${100 - maxElemValue}% - ${maxElemKnobPercent}px)`);
    setBeforeThumbTrackWidth(`calc(${minElemValue}% - ${minElemKnobPercent}px)`);
    if (setFirstHalfProgressLeft)
        setFirstHalfProgressLeft(`${minElemValue}%`);
    if (setSecondHalfProgressLeft)
        setSecondHalfProgressLeft(`${avg}%`);
    if (setHalfProgressWidth)
        setHalfProgressWidth(`${maxElemValue - avg}%`);
}
