import styled from 'styled-components';

import type { TextLinkProps } from '../types';

type TextLinkWrapperProps = Pick<TextLinkProps, 'isBlock'> & {
  $color: TextLinkProps['color'];
  $size: TextLinkProps['size'];
  $underline: TextLinkProps['underline'];
};

/**
 * @deprecated Use the new Link component from @8x8/oxygen-link instead
 */
const TextLinkWrapper = styled.a<TextLinkWrapperProps>`
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ $size, theme }) => {
    switch ($size) {
      case 'inherit':
        return 'inherit';
      case 'default':
      default:
        return theme.fontSize;
    }
  }};
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  font-weight: ${({ theme }) => theme.fontWeight};
  line-height: ${({ $size, theme }) => {
    switch ($size) {
      case 'inherit':
        return 'inherit';
      case 'default':
      default:
        return theme.lineHeight;
    }
  }};
  text-decoration: ${({ $underline }) => {
    switch ($underline) {
      case 'always':
        return 'underline';
      case 'hover':
        return 'none';
      case 'inherit':
        return 'inherit';
      case 'never':
      default:
        return 'none';
    }
  }};
  display: ${({ isBlock }) => (isBlock ? 'block' : 'inline-block')};
  margin: ${({ theme }) => theme.textLinkMargin};
  padding: 0;
  color: ${props => {
    if (props['aria-disabled']) {
      return props.theme.textLinkColorPrimaryDisabled;
    }
    switch (props.$color) {
      case 'inherit':
        return 'inherit';
      case 'primary':
      default:
        return props.theme.textLinkColorPrimary;
    }
  }};
  box-sizing: border-box;
  background-color: transparent;
  cursor: ${props => (props['aria-disabled'] ? 'not-allowed' : 'pointer')};
  transition: color 150ms ease-in;
  outline: none;
  border: none;

  &:hover {
    outline: none;
    color: ${props => {
      if (props['aria-disabled']) {
        return props.theme.textLinkColorPrimaryDisabled;
      }
      switch (props.$color) {
        case 'inherit':
          return 'inherit';
        case 'primary':
        default:
          return props.theme.textLinkColorPrimaryHover;
      }
    }};
    text-decoration: ${({ $underline }) => {
      switch ($underline) {
        case 'always':
          return 'underline';
        case 'hover':
          return 'underline';
        case 'never':
        default:
          return 'none';
      }
    }};
  }

  &:focus-visible {
    outline: ${({ theme }) =>
      `${theme.textLinkBorderWidthFocus} solid ${theme.textLinkShadowColorFocus}`};
    color: ${props => {
      if (props['aria-disabled']) {
        return props.theme.textLinkColorPrimaryDisabled;
      }
      switch (props.$color) {
        case 'inherit':
          return 'inherit';
        case 'primary':
        default:
          return props.theme.textLinkColorPrimary;
      }
    }};
    border-radius: ${({ theme }) => theme.textLinkBorderRadiusFocus};
    text-decoration: none;
  }

  &:active {
    color: ${props => {
      if (props['aria-disabled']) {
        return props.theme.textLinkColorPrimaryDisabled;
      }
      switch (props.$color) {
        case 'inherit':
          return 'inherit';
        case 'primary':
        default:
          return props.theme.textLinkColorPrimaryActive;
      }
    }};
  }
`;

export default TextLinkWrapper;
