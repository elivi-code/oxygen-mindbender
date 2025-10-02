import styled from 'styled-components';

const Container = styled.div.attrs(({ testId }) => ({
  'data-test-id': testId,
}))`
  height: ${({ theme }) => theme.cardHeight};
  width: ${({ theme }) => theme.cardWidth};
  background: ${({ theme }) => theme.cardBackground};
  box-shadow: ${({ theme }) => theme.cardBoxShadow};
  border: ${({ theme }) => theme.cardBorder};
  border-top: ${({ theme }) => theme.cardBorderTop};
  border-radius: ${({ theme }) => theme.cardBorderRadius};
  overflow: hidden;
  text-align: center;
`;

export default Container;
