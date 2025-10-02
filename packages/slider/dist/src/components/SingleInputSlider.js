import React from 'react';
import { SliderContainer, SliderInput, TrackBeforeMin, TrackAfterMax, } from '../styled/Slider';
import { useSliderState } from './hooks/useSliderState';
import { getPercentValue, setOffsetsAndWidths } from './functions';
const SingleInputSlider = (props) => {
    const { expandTrackAreaBy, isDisabled, isMultiple, maxValue, minValue, onChange, onDragEnd, onDragStart, step, theme, value, ariaLabel, testId, ...rest } = props;
    const maxThumb = React.useRef(null);
    const { setActive, setAfterThumbTrackWidth, setBeforeThumbTrackWidth, setFocused, state: sliderState, } = useSliderState();
    const handleChange = (event) => {
        onChange?.(Number(event.currentTarget.value));
        setOffsetsAndWidths(getPercentValue(Number(maxThumb.current.value), maxValue, minValue), theme, setBeforeThumbTrackWidth, setAfterThumbTrackWidth);
    };
    React.useEffect(() => {
        // update the value from outside if it is provided
        if (value !== undefined) {
            maxThumb.current.value = value.toString();
        }
        setOffsetsAndWidths(getPercentValue(Number(maxThumb.current.value), maxValue, minValue), theme, setBeforeThumbTrackWidth, setAfterThumbTrackWidth);
    }, [step, value, minValue, maxValue]);
    const inputProps = rest;
    let conditionalValueProp = {};
    // pass the outside value if it is provided
    if (value !== undefined) {
        conditionalValueProp = { value, 'aria-valuenow': value };
    }
    else if (maxThumb.current) {
        conditionalValueProp = {
            value: maxThumb.current.value,
            'aria-valuenow': maxThumb.current.value,
        };
    }
    return (React.createElement(SliderContainer, { "data-test-id": `${testId}-CONTAINER`, isDisabled: isDisabled },
        React.createElement(TrackBeforeMin, { isActive: sliderState.active, isFocused: sliderState.focused, "data-test-id": `${testId}-TRACK-BEFORE-MIN`, isDisabled: isDisabled, width: sliderState.beforeThumbTrackWidth, expandTrackAreaBy: expandTrackAreaBy }),
        React.createElement(TrackAfterMax, { "data-test-id": `${testId}-TRACK-AFTER-MAX`, isDisabled: isDisabled, width: sliderState.afterThumbTrackWidth, expandTrackAreaBy: expandTrackAreaBy }),
        React.createElement(SliderInput, { ...inputProps, ...conditionalValueProp, "aria-valuemin": minValue, "aria-valuemax": maxValue, "aria-label": ariaLabel, "data-test-id": `${testId}-INPUT`, ref: maxThumb, isActive: sliderState.active, isFocused: sliderState.focused, isHovered: sliderState.hoveredObject === 'max', isMultiple: isMultiple, disabled: isDisabled, isDisabled: isDisabled, expandTrackAreaBy: expandTrackAreaBy, min: minValue, max: maxValue, step: step, onFocus: () => {
                setFocused(true);
            }, onBlur: () => {
                setFocused(false);
            }, onMouseDown: () => {
                onDragStart?.();
                setActive(true);
            }, onMouseUp: () => {
                onDragEnd?.();
                setActive(false);
                setFocused(false);
            }, onChange: handleChange })));
};
export default SingleInputSlider;
