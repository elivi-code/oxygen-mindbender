import styled from 'styled-components';
const InputIcon = styled.div `
  display: flex;
  width: ${({ theme }) => 24 + parseInt(theme.horizontalSpacing, 10)}px;
  min-width: ${({ theme }) => 24 + parseInt(theme.horizontalSpacing, 10)}px;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  margin: 0 ${({ theme }) => theme.iconHorizontalSpacing};
`;
InputIcon.displayName = 'InputIcon';
export default InputIcon;
