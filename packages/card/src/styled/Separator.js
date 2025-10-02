import styled from 'styled-components';

const Separator = styled.div.attrs(({ testId }) => ({
  'data-test-id': testId,
}))`
  background-color: ${({ theme }) => theme.cardSeparatorBackgroundColor};
  height: ${({ theme }) => theme.cardSeparatorHeight};
  width: ${({ theme }) => theme.cardSeparatorWidth};
`;

export default Separator;
