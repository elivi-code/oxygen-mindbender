import styled from 'styled-components';

const Header = styled.div.attrs(({ testId }) => ({
  'data-test-id': testId,
}))`
  justify-content: center;
  font-weight: ${({ theme }) => theme.cardHeaderFontWeight};
  font-size: ${({ theme }) => theme.cardHeaderFontSize};
  line-height: ${({ theme }) => theme.cardHeaderLineHeight};
  color: ${({ theme }) => theme.cardHeaderColor};
`;

export default Header;
