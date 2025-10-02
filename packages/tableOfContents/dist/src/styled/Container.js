import styled from 'styled-components';
export const TocContainer = styled.nav `
  box-sizing: border-box;
  display: flex;
  background-color: ${({ theme }) => theme.ui06};
  color: ${({ theme }) => theme.textColor01};
  flex-direction: column;
  margin: 0;
  width: 216px;
  min-width: 216px;
  height: 100%;
`;
