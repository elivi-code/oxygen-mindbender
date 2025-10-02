import styled from 'styled-components';
import {
  getActiveBackground,
  getDefaultBackground,
  getHoverBackground,
} from './iconButton.utils';
import { IconButtonProps } from '../types';

export const IconButtonStyled = styled.button<
  Pick<IconButtonProps, 'isActive' | 'isInverted'> & {
    $iconButtonSize?: string;
  }
>`
  background: ${getDefaultBackground};
  ${({ $iconButtonSize }) => $iconButtonSize && `height: ${$iconButtonSize}px`};
  ${({ $iconButtonSize }) => $iconButtonSize && `width: ${$iconButtonSize}px`};
  border: 2px solid transparent;
  border-radius: 6px;
  display: flex;
  align-self: baseline;
  align-items: center;
  justify-content: center;
  outline: none;
  padding: 0;
  transition: all 200ms ease-in;
  cursor: ${props => (props['aria-disabled'] ? 'not-allowed' : 'pointer')};
  ${props =>
    !props['aria-disabled'] &&
    `
    &:hover {
      background: ${getHoverBackground(props)};
    }
    &:active {
      background: ${getActiveBackground(props)};
    }
  `}
  &:focus-visible {
    border-color: ${({ theme, isInverted }) =>
      isInverted ? theme.borderFocusInverted : theme.borderFocus};
    box-shadow: 0 0 0 2px
      ${({ theme, isInverted }) =>
        isInverted ? theme.shadowFocusInverted : theme.shadowFocus}
      inset;
  }
`;
