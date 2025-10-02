import styled from 'styled-components';

const RadioInputField = styled.input`
  position: absolute;
  opacity: 0;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  cursor: pointer;

  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`;

export default RadioInputField;
