import styled from 'styled-components';

const TextFieldWrapper = styled.div`
  display: flex;
  flex-direction: ${({ labelOrientation }) => labelOrientation};
  align-items: baseline;
  width: ${({ fullWidth, theme }) => (fullWidth ? '100%' : theme.width)};
`;

export default TextFieldWrapper;
