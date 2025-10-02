import styled from 'styled-components';

const RadioContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: auto;
  opacity: ${({ isDisabled, theme }) =>
    isDisabled && theme.iconSet !== 'novo' ? '0.5' : '1'};
  label {
    cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
    color: ${({ theme, isDisabled }) =>
      isDisabled ? theme.labelDisabledColor : theme.labelColor};

    display: flex;
    align-items: flex-start;
    padding: 2px 2px 2px 0;
    border-radius: 4px;

    ${({ isFocused, theme }) =>
      isFocused && `box-shadow: 0 0 0 2px inset ${theme.focusColor};`}
  }
`;

export default RadioContainer;
