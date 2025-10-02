import React from 'react';
import { withTheme } from '@8x8/oxygen-config';
import { ThemeProvider } from 'styled-components';
import SingleInputSlider from './SingleInputSlider';
import MultipleInputSlider from './MultipleInputSlider';
function Slider({ minValue = 0, maxValue = 10, step = 1, expandTrackAreaBy = '24', testId = 'SLIDER', ...rest }) {
    const props = {
        ...rest,
        minValue,
        maxValue,
        step,
        expandTrackAreaBy,
        testId,
    };
    const Input = props.isMultiple === true ? (React.createElement(MultipleInputSlider, { ...props })) : (React.createElement(SingleInputSlider, { ...props }));
    return React.createElement(ThemeProvider, { theme: props.theme }, Input);
}
export default withTheme(Slider, 'slider');
