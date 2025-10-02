import styled from 'styled-components';
const SwitchBaseInputWrapper = styled.span `
  display: flex;
  position: relative;
  height: ${({ theme }) => theme.lineHeight};
  justify-content: center;
  align-items: center;
`;
export default SwitchBaseInputWrapper;
