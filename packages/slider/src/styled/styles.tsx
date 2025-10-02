import { css } from 'styled-components';
import { SliderProps } from '../types';

export const inputThumbOnFocus = css`
  box-shadow: 0 0 0 2px ${({ theme }) => theme.sliderFocusedInnerBorderColor},
    0 0 0 4px ${({ theme }) => theme.sliderFocusedOuterBorderColor};
  background-color: ${({ theme }) => theme.sliderKnobColorActive};
`;

type InputThumbProps = Pick<
  SliderProps,
  'theme' | 'isDisabled' | 'isMultiple'
> & {
  valueType?: string;
  isActive?: boolean;
};

export const inputThumbOnHover = css<InputThumbProps>`
  ${({ theme, isDisabled }) =>
    !isDisabled &&
    `
    box-shadow: 0px 0px 0px
      ${parseInt(theme.sliderKnobSize, 10) / 2}px
      ${theme.sliderKnobColor}3F;
    transition: 200ms;
    cursor: pointer;`}
`;

export const inputThumb = css<
  InputThumbProps & {
    isFocused?: boolean;
  }
>`
  background: ${({ theme, isActive, isFocused }) =>
    isActive || isFocused
      ? theme.sliderKnobColorActive
      : theme.sliderKnobColor};
  border: none;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.sliderKnobShadow};
  cursor: pointer;
  height: ${({ theme }) => theme.sliderKnobSize};
  width: ${({ theme }) => theme.sliderKnobSize};
  pointer-events: all;
  position: relative;
`;

export const inputThumbDisabled = css`
  background-color: ${({ theme }) => theme.sliderKnobColorDisabled};
  cursor: not-allowed;
`;

export const inputThumbActive = css<InputThumbProps>`
  ${({ theme, isDisabled }) =>
    !isDisabled &&
    `background-color: ${theme.sliderKnobColorActive};
    box-shadow: 0px 0px 0px
      ${parseInt(theme.sliderKnobSize, 10) / 2}px
      ${theme.sliderKnobColorActive}3F;
    transition: none;`}
`;
