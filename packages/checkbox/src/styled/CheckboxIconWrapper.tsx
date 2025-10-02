import styled from 'styled-components';

import { getIconColor } from '../utils/getIconColor';
import { CheckboxIconWrapperProps } from './CheckboxIconWrapperProps';

export const CheckboxIconWrapper = styled.span<
  Partial<CheckboxIconWrapperProps>
>`
  display: flex;
  color: ${getIconColor};
  margin-right: ${({ theme, hasLabel }) => hasLabel && theme.checkboxMargin};

  ${({ hasLabel, isFocused, theme }) =>
    !hasLabel &&
    isFocused &&
    `
    border-radius: ${theme.checkboxFocusBorderRadius};
    box-shadow: 0 0 0 ${theme.checkboxFocusBorderSize} inset ${theme.checkboxShadowColorFocus};
  `}

  svg {
    height: ${({ theme }) => theme.checkboxSize};
    width: ${({ theme }) => theme.checkboxSize};
  }
  cursor: ${({ isDisabled }) => isDisabled && 'not-allowed'};
`;

export default CheckboxIconWrapper;
