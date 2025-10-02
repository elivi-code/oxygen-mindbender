import React from 'react';

import { withTheme } from '@8x8/oxygen-config';

import { ThemeProvider } from 'styled-components';
import { SliderProps } from '../types';
import SingleInputSlider from './SingleInputSlider';
import MultipleInputSlider from './MultipleInputSlider';

function Slider({
  minValue = 0,
  maxValue = 10,
  step = 1,
  expandTrackAreaBy = '24',
  testId = 'SLIDER',
  ...rest
}: SliderProps) {
  const props = {
    ...rest,
    minValue,
    maxValue,
    step,
    expandTrackAreaBy,
    testId,
  };
  const Input =
    props.isMultiple === true ? (
      <MultipleInputSlider {...props} />
    ) : (
      <SingleInputSlider {...props} />
    );

  return <ThemeProvider theme={props.theme}>{Input}</ThemeProvider>;
}

export default withTheme(Slider, 'slider');
