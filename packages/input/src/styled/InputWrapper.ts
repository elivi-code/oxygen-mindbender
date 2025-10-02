import styled from 'styled-components';

import getBackgroundColor from './utils/getBackgroundColor';
import getDecoratorBorderRadius from './utils/getDecoratorBorderRadius';
import { InputWrapperProps } from './InputWrapperProps';

const InputWrapper = styled.div<InputWrapperProps>`
  background: ${getBackgroundColor};
  border-radius: ${({ theme, isSuffix, isPrefix }) =>
    getDecoratorBorderRadius({ theme, isSuffix, isPrefix })};
  min-height: ${({ size, theme }) => {
    if (size === 'small') {
      return theme.heightSmall;
    }

    if (size === 'large') {
      return theme.heightLarge;
    }

    return theme.height;
  }};
  display: flex;
  margin: ${({ theme }) => theme.verticalSpacing} 0;
  min-width: ${({ theme }) => theme.minWidth};
  width: ${({ fullWidth, theme }) => (fullWidth ? '100%' : theme.width)};
  cursor: ${({ isDisabled }) => isDisabled && 'not-allowed'};
`;

InputWrapper.displayName = 'InputWrapper';

export default InputWrapper;
