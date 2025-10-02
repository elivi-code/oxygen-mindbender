import React, { useEffect, useRef } from 'react';
import { useSliderState } from './hooks/useSliderState';
import { HalfProgress, InputForDraggableRange, SliderContainer, SliderInput, TrackAfterMax, TrackBeforeMin, } from '../styled/Slider';
import { getPercentValue, setOffsetsAndWidths } from './functions';
const MultipleInputSlider = (props) => {
    const { expandTrackAreaBy, isDisabled, isMultiple, isTrackDraggable, maxValue, minValue, onChange, onDragEnd, onDragStart, step, theme, value, ariaLabel, testId, ...rest } = props;
    const maxThumb = useRef(null);
    const minThumb = useRef(null);
    const draggableThumb = useRef(null);
    const { setActive, setAfterThumbTrackWidth, setBeforeThumbTrackWidth, setFirstHalfProgressLeft, setFocused, setHoveredObject, setSecondHalfProgressLeft, setHalfProgressWidth, state: sliderState, } = useSliderState();
    useEffect(() => {
        // update the values from outside if they are provided
        if (value !== undefined && value.max - value.min >= step) {
            minThumb.current.value = value.min.toString();
            maxThumb.current.value = value.max.toString();
        }
        if (isTrackDraggable)
            draggableThumb.current.value = ((Number(minThumb.current.value) + Number(maxThumb.current.value)) /
                2).toString();
        setOffsetsAndWidths(getPercentValue(Number(maxThumb.current.value), maxValue, minValue), theme, setBeforeThumbTrackWidth, setAfterThumbTrackWidth, getPercentValue(Number(minThumb.current.value), maxValue, minValue), setFirstHalfProgressLeft, setSecondHalfProgressLeft, setHalfProgressWidth);
    }, [step, value, minValue, maxValue]);
    const handleChange = () => {
        const minThumbValue = Number(minThumb.current.value);
        const maxThumbValue = Number(maxThumb.current.value);
        if (maxThumbValue - minThumbValue >= step) {
            setOffsetsAndWidths(getPercentValue(maxThumbValue, maxValue, minValue), theme, setBeforeThumbTrackWidth, setAfterThumbTrackWidth, getPercentValue(minThumbValue, maxValue, minValue), setFirstHalfProgressLeft, setSecondHalfProgressLeft, setHalfProgressWidth);
            onChange?.({
                min: minThumbValue,
                max: maxThumbValue,
            });
            if (isTrackDraggable)
                draggableThumb.current.value = parseFloat(((minThumbValue + maxThumbValue) / 2).toFixed(2)).toString();
            // keep the external values if they are provided and in the correct order
        }
        else if (value !== undefined && value.max - value.min >= step) {
            minThumb.current.value = value.min.toString();
            maxThumb.current.value = value.max.toString();
        }
    };
    const handleDragChange = () => {
        if (isTrackDraggable) {
            const draggableThumbValue = Number(draggableThumb.current.value);
            const minThumbValue = Number(minThumb.current.value);
            const maxThumbValue = Number(maxThumb.current.value);
            const newMinValue = draggableThumbValue - (maxThumbValue - minThumbValue) / 2;
            const newMaxValue = draggableThumbValue + (maxThumbValue - minThumbValue) / 2;
            minThumb.current.value = newMinValue.toString();
            maxThumb.current.value = newMaxValue.toString();
            setOffsetsAndWidths(getPercentValue(newMaxValue, maxValue, minValue), theme, setBeforeThumbTrackWidth, setAfterThumbTrackWidth, getPercentValue(newMinValue, maxValue, minValue), setFirstHalfProgressLeft, setSecondHalfProgressLeft, setHalfProgressWidth);
            // update the outside values if they are provided
            if (value !== undefined) {
                onChange?.({
                    min: newMinValue,
                    max: newMaxValue,
                });
            }
        }
    };
    const commonProps = {
        expandTrackAreaBy,
        isActive: sliderState.active,
        isDisabled,
        isFocused: sliderState.focused,
        isMultiple,
        max: maxValue,
        min: minValue,
        onChange: handleChange,
        step,
        onMouseUp: () => {
            onDragEnd?.();
            setActive(false);
            setFocused(false);
        },
        onMouseDown: () => {
            onDragStart?.();
            setActive(true);
        },
        onFocus: () => {
            setFocused(true);
        },
        onBlur: () => {
            setFocused(false);
        },
        onMouseLeave: () => {
            setHoveredObject('none');
        },
        disabled: isDisabled,
    };
    const inputPropsMin = rest;
    const inputPropsMax = rest;
    let conditionalPropMin = {};
    let conditionalPropMax = {};
    // pass the outside values if they are provided and in the correct order
    if (value !== undefined && value.max - value.min >= step) {
        conditionalPropMin = { value: value.min, 'aria-valuenow': value.min };
        conditionalPropMax = { value: value.max, 'aria-valuenow': value.max };
    }
    else if (maxThumb.current && minThumb.current) {
        conditionalPropMin = {
            value: minThumb.current.value,
            'aria-valuenow': minThumb.current.value,
        };
        conditionalPropMax = {
            value: maxThumb.current.value,
            'aria-valuenow': maxThumb.current.value,
        };
    }
    const MinInput = (React.createElement(SliderInput, { ...commonProps, ...inputPropsMin, ...conditionalPropMin, key: "slider-min", "aria-valuemin": minValue, "aria-valuemax": maxValue, "aria-label": `${ariaLabel} Minimum`, ref: minThumb, "data-test-id": `${testId}-MIN-INPUT` }));
    const MaxInput = (React.createElement(SliderInput, { ...commonProps, ...inputPropsMax, ...conditionalPropMax, key: "slider-max", "aria-valuemin": minValue, "aria-valuemax": maxValue, "aria-label": `${ariaLabel} Maximum`, "data-test-id": `${testId}-MAX-INPUT`, ref: maxThumb }));
    const TrackBeforeMinElem = (React.createElement(TrackBeforeMin, { isMultiple: true, key: "track-before-min", "data-test-id": `${testId}-TRACK-BEFORE-MIN`, onMouseEnter: () => setHoveredObject('min'), isDisabled: isDisabled, width: sliderState.beforeThumbTrackWidth, expandTrackAreaBy: expandTrackAreaBy }));
    const FirstHalfProgress = (React.createElement(HalfProgress, { key: "first-half-progress", "data-test-id": `${testId}-FIRST-HALF-PROGRESS`, isDisabled: isDisabled, isActive: sliderState.active, isFocused: sliderState.focused, onMouseEnter: () => setHoveredObject(isTrackDraggable ? 'none' : 'min'), left: sliderState.firstHalfProgressLeft, width: sliderState.halfProgressWidth, expandTrackAreaBy: expandTrackAreaBy }));
    const SecondHalfProgress = (React.createElement(HalfProgress, { key: "second-half-progress", "data-test-id": `${testId}-SECOND-HALF-PROGRESS`, isDisabled: isDisabled, isActive: sliderState.active, isFocused: sliderState.focused, onMouseEnter: () => setHoveredObject(isTrackDraggable ? 'none' : 'max'), left: sliderState.secondHalfProgressLeft, width: sliderState.halfProgressWidth, expandTrackAreaBy: expandTrackAreaBy }));
    const TrackAfterMaxElem = (React.createElement(TrackAfterMax, { key: "track-after-max", "data-test-id": `${testId}-TRACK-AFTER-MAX`, onMouseEnter: () => setHoveredObject('max'), isDisabled: isDisabled, width: sliderState.afterThumbTrackWidth, expandTrackAreaBy: expandTrackAreaBy }));
    const DraggableTrack = isTrackDraggable && (React.createElement(InputForDraggableRange, { key: "draggable-track", "data-test-id": `${testId}-DRAGGABLE-TRACK`, ref: draggableThumb, step: step, expandTrackAreaBy: expandTrackAreaBy, min: minValue + (value.max - value.min) / 2, max: maxValue - (value.max - value.min) / 2, left: `${(value.max - value.min) / 2}%`, width: `${100 - (value.max - value.min)}%`, "aria-label": `${ariaLabel} draggable track`, onFocus: () => {
            setFocused(true);
        }, onBlur: () => {
            setFocused(false);
        }, onMouseDown: () => {
            setActive(true);
        }, onMouseUp: () => {
            setFocused(false);
            setActive(false);
        }, onChange: handleDragChange }));
    const renderSlider = () => {
        switch (sliderState.hoveredObject) {
            case 'min':
                if (!isTrackDraggable)
                    return (React.createElement(React.Fragment, null,
                        MaxInput,
                        TrackBeforeMinElem,
                        FirstHalfProgress,
                        MinInput,
                        SecondHalfProgress,
                        TrackAfterMaxElem));
                return (React.createElement(React.Fragment, null,
                    MaxInput,
                    TrackBeforeMinElem,
                    MinInput,
                    FirstHalfProgress,
                    SecondHalfProgress,
                    TrackAfterMaxElem));
            case 'max':
                if (!isTrackDraggable)
                    return (React.createElement(React.Fragment, null,
                        MinInput,
                        SecondHalfProgress,
                        TrackAfterMaxElem,
                        MaxInput,
                        TrackBeforeMinElem,
                        FirstHalfProgress));
                return (React.createElement(React.Fragment, null,
                    MinInput,
                    TrackAfterMaxElem,
                    MaxInput,
                    FirstHalfProgress,
                    SecondHalfProgress,
                    TrackBeforeMinElem));
            default:
                return (React.createElement(React.Fragment, null,
                    MinInput,
                    MaxInput,
                    FirstHalfProgress,
                    SecondHalfProgress,
                    DraggableTrack,
                    TrackBeforeMinElem,
                    TrackAfterMaxElem));
        }
    };
    return (React.createElement(SliderContainer, { "data-test-id": `${testId}-CONTAINER`, isDisabled: isDisabled }, renderSlider()));
};
export default MultipleInputSlider;
