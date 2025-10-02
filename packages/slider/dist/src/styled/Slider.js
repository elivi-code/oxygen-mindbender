import styled from 'styled-components';
import { inputThumb, inputThumbActive, inputThumbDisabled, inputThumbOnFocus, inputThumbOnHover, } from './styles';
export const SliderContainer = styled.div `
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${({ isDisabled }) => isDisabled
    ? `{
        cursor: not-allowed;
        }`
    : ''}
`;
export const TrackAfterMax = styled.div.attrs(({ width }) => ({
    style: {
        width,
    },
})) `
  background-color: ${({ isDisabled, theme }) => isDisabled
    ? theme.sliderActiveTrackBackgroundColorDisabled
    : theme.sliderTrackBackgroundColor};
  right: 0;
  height: 5px;
  position: absolute;
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: -${({ theme }) => parseInt(theme.sliderKnobSize, 10)}px;
    right: 0;
    height: ${({ expandTrackAreaBy }) => parseInt(expandTrackAreaBy, 10)}px;
    background-color: transparent;
  }

  &::before {
    top: -${({ expandTrackAreaBy }) => parseInt(expandTrackAreaBy, 10)}px;
  }

  &::after {
    bottom: -${({ expandTrackAreaBy }) => parseInt(expandTrackAreaBy, 10)}px;
  }
`;
export const TrackBeforeMin = styled.div.attrs(({ width }) => ({
    style: {
        width,
    },
})) `
  background-color: ${({ isDisabled, isMultiple, isActive, isFocused, theme, }) => {
    if (isDisabled)
        return theme.sliderActiveTrackBackgroundColorDisabled;
    if (isMultiple)
        return theme.sliderTrackBackgroundColor;
    if (isActive || isFocused)
        return theme.sliderKnobColorActive;
    return theme.sliderActiveTrackBackgroundColor;
}};
  left: 0;
  height: 5px;
  position: absolute;
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: -${({ theme }) => parseInt(theme.sliderKnobSize, 10)}px;
    height: ${({ expandTrackAreaBy }) => parseInt(expandTrackAreaBy, 10)}px;
    background-color: transparent;
  }

  &::before {
    top: -${({ expandTrackAreaBy }) => parseInt(expandTrackAreaBy, 10)}px;
  }

  &::after {
    bottom: -${({ expandTrackAreaBy }) => parseInt(expandTrackAreaBy, 10)}px;
  }
`;
export const HalfProgress = styled.div.attrs(({ left, width }) => ({
    style: {
        left,
        width,
    },
})) `
  position: absolute;
  height: 5px;
  cursor: pointer;
  background-color: ${({ theme, isDisabled, isFocused, isActive }) => {
    if (isDisabled)
        return theme.sliderActiveTrackBackgroundColorDisabled;
    if (isActive || isFocused)
        return theme.sliderKnobColorActive;
    return theme.sliderActiveTrackBackgroundColor;
}};
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: ${({ expandTrackAreaBy }) => parseInt(expandTrackAreaBy, 10)}px;
    background-color: transparent;
  }

  &::before {
    top: -${({ expandTrackAreaBy }) => parseInt(expandTrackAreaBy, 10)}px;
  }

  &::after {
    bottom: -${({ expandTrackAreaBy }) => parseInt(expandTrackAreaBy, 10)}px;
  }
`;
export const InputForDraggableRange = styled.input.attrs(({ left, width }) => ({
    type: 'range',
    role: 'slider',
    style: {
        left,
        width,
    },
})) `
  position: absolute;
  height: 5px;
  cursor: pointer;
  opacity: 0;
  padding: ${({ expandTrackAreaBy }) => parseInt(expandTrackAreaBy, 10)}px 0;
`;
export const SliderInput = styled.input.attrs(() => ({
    type: 'range',
    role: 'slider',
})) `
  background-color: transparent;
  position: absolute;
  height: 5px;
  width: 100%;
  outline: none;
  padding: ${({ expandTrackAreaBy }) => parseInt(expandTrackAreaBy, 10)}px 0;

  &:hover {
    cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  }

  &:focus-visible {
    z-index: 2;
  }

  appearance: none;

  &::-moz-range-thumb {
    ${inputThumb};
  }
  &::-webkit-slider-thumb {
    appearance: none;
    ${inputThumb};
  }

  &:disabled::-moz-range-thumb {
    ${inputThumbDisabled}
  }

  &:disabled::-webkit-slider-thumb {
    ${inputThumbDisabled}
  }

  &:focus-visible::-moz-range-thumb {
    ${inputThumbOnFocus}
  }
  &:focus-visible::-webkit-slider-thumb {
    ${inputThumbOnFocus}
  }

  &:hover::-moz-range-thumb {
    ${inputThumbOnHover}
  }
  &:hover::-webkit-slider-thumb {
    ${inputThumbOnHover}
  }

  &:active::-moz-range-thumb {
    ${inputThumbActive}
  }

  &:active::-webkit-slider-thumb {
    ${inputThumbActive}
  }
`;
