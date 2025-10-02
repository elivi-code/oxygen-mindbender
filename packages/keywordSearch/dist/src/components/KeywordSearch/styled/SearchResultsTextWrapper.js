import styled from 'styled-components';
import textTruncate from '../../../utils/mixins/textTruncate';
const SearchResultsTextWrapper = styled.span `
  ${textTruncate};
  font-size: ${({ theme }) => theme.body01.fontSize};
  font-weight: ${({ theme }) => theme.body01.fontWeight};
  letter-spacing: ${({ theme }) => theme.body01.letterSpacing};
  line-height: ${({ theme }) => theme.body01.lineHeight};
  color: ${({ theme }) => theme.textColor01};
  margin-right: ${({ theme }) => theme.spacing05};
`;
export default SearchResultsTextWrapper;
