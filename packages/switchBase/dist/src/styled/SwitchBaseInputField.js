import styled from 'styled-components';
const SwitchBaseInputField = styled.input `
  position: absolute;
  opacity: 0;
  cursor: ${props => (props['aria-disabled'] ? 'not-allowed' : 'pointer')};
  height: 100%;
  width: 100%;

  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
`;
export default SwitchBaseInputField;
