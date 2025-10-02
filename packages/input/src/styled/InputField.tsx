import styled from 'styled-components';

import getFont from './utils/getFont';
import getColor from './utils/getColor';
import { InputFieldProps } from './InputFieldProps';

const InputField = styled.input<InputFieldProps>`
  ${getFont}
  color: ${getColor};
  -webkit-text-fill-color: ${getColor};
  outline: none;
  border: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  background: transparent;

  &::placeholder {
    color: ${({ theme, isDisabled }) =>
      isDisabled ? theme.colorDisabled : theme.colorPlaceholder};
    -webkit-text-fill-color: ${({ theme, isDisabled }) =>
      isDisabled ? theme.colorDisabled : theme.colorPlaceholder};
  }
  cursor: ${({ isDisabled }) => isDisabled && 'not-allowed'};
`;

InputField.displayName = 'InputField';

export default InputField;
