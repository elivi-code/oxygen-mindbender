import React from 'react';
const initialState = {
    focused: false,
    active: false,
    beforeThumbTrackWidth: '',
    afterThumbTrackWidth: '',
    firstHalfProgressLeft: '',
    secondHalfProgressLeft: '',
    halfProgressWidth: '',
    hoveredObject: 'none',
};
const sliderReducer = (state, action) => {
    switch (action.type) {
        case 'SET_FOCUSED':
            return { ...state, focused: action.payload };
        case 'SET_ACTIVE':
            return { ...state, active: action.payload };
        case 'SET_BEFORE_THUMB_TRACK_WIDTH':
            return { ...state, beforeThumbTrackWidth: action.payload };
        case 'SET_AFTER_THUMB_TRACK_WIDTH':
            return { ...state, afterThumbTrackWidth: action.payload };
        case 'SET_FIRST_HALF_PROGRESS_LEFT':
            return { ...state, firstHalfProgressLeft: action.payload };
        case 'SET_SECOND_HALF_PROGRESS_LEFT':
            return { ...state, secondHalfProgressLeft: action.payload };
        case 'SET_HALF_PROGRESS_WIDTH':
            return { ...state, halfProgressWidth: action.payload };
        case 'SET_HOVERED_OBJECT':
            return { ...state, hoveredObject: action.payload };
        default:
            return state;
    }
};
export const useSliderState = () => {
    const [state, dispatch] = React.useReducer(sliderReducer, initialState);
    const setFocused = (focused) => {
        dispatch({ type: 'SET_FOCUSED', payload: focused });
    };
    const setActive = (active) => {
        dispatch({ type: 'SET_ACTIVE', payload: active });
    };
    const setBeforeThumbTrackWidth = (width) => {
        dispatch({ type: 'SET_BEFORE_THUMB_TRACK_WIDTH', payload: width });
    };
    const setAfterThumbTrackWidth = (width) => {
        dispatch({ type: 'SET_AFTER_THUMB_TRACK_WIDTH', payload: width });
    };
    const setFirstHalfProgressLeft = (left) => {
        dispatch({ type: 'SET_FIRST_HALF_PROGRESS_LEFT', payload: left });
    };
    const setSecondHalfProgressLeft = (left) => {
        dispatch({ type: 'SET_SECOND_HALF_PROGRESS_LEFT', payload: left });
    };
    const setHalfProgressWidth = (progress) => {
        dispatch({ type: 'SET_HALF_PROGRESS_WIDTH', payload: progress });
    };
    const setHoveredObject = (hoveredObject) => {
        dispatch({ type: 'SET_HOVERED_OBJECT', payload: hoveredObject });
    };
    return {
        state,
        setFocused,
        setActive,
        setBeforeThumbTrackWidth,
        setAfterThumbTrackWidth,
        setFirstHalfProgressLeft,
        setSecondHalfProgressLeft,
        setHalfProgressWidth,
        setHoveredObject,
    };
};
