import styled from 'styled-components';
const Container = styled.div `
  display: flex;
  padding: 0 ${({ theme }) => theme.spacing03};
  margin-bottom: ${({ theme }) => theme.spacing03};
`;
export { Container };
