import styled, { css } from 'styled-components';

import { buttonVariant } from '@8x8/oxygen-constants';

import type { StyledButtonProps } from '../types';
import {
  getSizeStyle,
  getTypographyStyle,
  getVariantStyle,
} from './button.utils';

export const ButtonRegularStyled = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  outline: none;

  ${props => {
    const { fontSize, fontFamily, fontWeight, lineHeight, letterSpacing } =
      getTypographyStyle(props);

    return css`
      font-size: ${fontSize};
      font-family: ${fontFamily};
      font-weight: ${fontWeight};
      line-height: ${lineHeight};
      letter-spacing: ${letterSpacing};
    `;
  }};

  transition: ${({ variant, theme }) => {
    return variant === buttonVariant.tertiary ||
      variant === buttonVariant.tertiaryReversed
      ? `
      background-color ${theme.transitionDuration} ease-in-out 0s,
      border-color ${theme.transitionDuration} ease-in-out 0s,
      color ${theme.transitionDuration} ease-in-out 0s,
      box-shadow ${theme.transitionDuration} ease-in-out 0s
    `
      : `
      background-color ${theme.transitionDuration} ease-in-out,
      box-shadow ${theme.transitionDuration} ease-in-out 0s
    `;
  }};

  & > svg {
    transition: ${({ theme }) => theme.transitionDuration} ease-in-out;
  }

  ${props => {
    const { width, height, padding, minHeight } = getSizeStyle(props);

    return css`
      ${minHeight && `min-height: ${minHeight};`}
      ${width && `width: ${width};`}
    ${height && `height: ${height};`}
    ${padding && `padding: ${padding};`}
    `;
  }}

  &::-moz-focus-inner {
    border: none;
  }

  ${props => {
    const {
      backgroundColor,
      backgroundColorActive,
      backgroundColorDisabled,
      backgroundColorHover,
      borderColor,
      borderColorActive,
      borderColorDisabled,
      borderColorHover,
      borderSize,
      fontColor,
      fontColorActive,
      fontColorDisabled,
      fontColorHover,
      shadowBackgroundColorFocus,
      shadowColorFocus,
    } = getVariantStyle(props);

    return `
      box-shadow: 0 0 0 ${borderSize ?? props.theme.borderSize} inset ${
      props.isActive ? borderColorActive : borderColor
    };
      border: none;
      border-radius: ${props.theme.borderRadius};
      background-color: ${
        props.isActive ? backgroundColorActive : backgroundColor
      };
      color: ${props.isActive && fontColorActive ? fontColorActive : fontColor};

      &:hover {
        background-color: ${backgroundColorHover};
        box-shadow: 0 0 0 ${
          borderSize ?? props.theme.borderSize
        } inset ${borderColorHover};
        color: ${fontColorHover};
      }

      &:active {
        background-color: ${backgroundColorActive};
        box-shadow: 0 0 0 ${
          borderSize ?? props.theme.borderSize
        } inset ${borderColorActive};
      }

      &[aria-disabled="true"] {
        background-color: ${backgroundColorDisabled};
        box-shadow: 0 0 0 ${
          borderSize ?? props.theme.borderSize
        } inset ${borderColorDisabled};
        color: ${fontColorDisabled};
        cursor: not-allowed;
      }

      &:focus-visible {
        ${
          shadowColorFocus
            ? `
            box-shadow: 0 0 0 2px inset ${shadowColorFocus}, 0 0 0 3px inset ${
                borderSize ? borderColor : shadowBackgroundColorFocus
              };
            &:hover {
              box-shadow: 0 0 0 2px inset ${shadowColorFocus}, 0 0 0 3px inset ${shadowBackgroundColorFocus};
            }
              `
            : `
              background-color: ${backgroundColorHover};
              border-color: ${borderColorHover};
            `
        }
      }
    `;
  }}
`;

export const ButtonCircularStyled = styled(ButtonRegularStyled)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 0;
`;
