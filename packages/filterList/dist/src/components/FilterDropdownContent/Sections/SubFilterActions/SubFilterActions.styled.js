import styled from 'styled-components';
const Container = styled.div `
  display: flex;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing03};
  margin-bottom: ${({ showMargin, theme }) => showMargin ? theme.spacing03 : 0};
`;
const SelectWrapper = styled.div `
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 400px;
`;
export { Container, SelectWrapper };
