import styled from 'styled-components';
const Asterisk = styled.span `
  color: ${({ theme }) => theme.fontColorStarRequired};
  padding-left: ${({ theme }) => theme.spacing02};
`;
export default Asterisk;
