import styled from 'styled-components';

export interface Props {
  isDisabled?: boolean;
  isFocused?: boolean;
  hasLabel?: boolean;
  isToggleButton?: boolean;
}

const SwitchBaseWrapper = styled.div<Props>`
  position: relative;
  display: flex;

  label {
    color: ${({ isDisabled, theme }) =>
      isDisabled ? theme.labelDisabledColor : theme.labelColor};
    cursor: ${({ isDisabled }) => isDisabled && 'not-allowed'};
    border-radius: 4px;
    align-items: flex-start;
    padding: ${({ isToggleButton }) =>
      isToggleButton ? '5px 3px' : '2px 2px 2px 0'};

    ${({ hasLabel, isFocused, theme, isToggleButton }) =>
      ((hasLabel && isFocused) || (isFocused && isToggleButton)) &&
      `
      box-shadow: 0 0 0 2px inset ${theme.focusColor};
    `}
  }
`;

export default SwitchBaseWrapper;
