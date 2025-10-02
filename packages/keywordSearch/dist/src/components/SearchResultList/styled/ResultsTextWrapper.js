import styled from 'styled-components';
import textTruncate from '../../../utils/mixins/textTruncate';
const ResultsTextWrapper = styled.span `
  display: flex;
  width: 100%;
  align-items: center;

  > span:first-of-type {
    ${textTruncate}
  }
`;
export default ResultsTextWrapper;
