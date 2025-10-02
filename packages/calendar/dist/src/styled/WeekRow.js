import styled from 'styled-components';
const WeekRow = styled.div `
  display: flex;
  flex-wrap: wrap;
  align-self: flex-start;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize};
  line-height: ${({ theme }) => theme.lineHeight};
`;
export { WeekRow };
