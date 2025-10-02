import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 300px;
  padding: ${({ theme }) =>
    `0 ${theme.spacing03} ${theme.spacing03} ${theme.spacing03}`};
`;

export { Container };
