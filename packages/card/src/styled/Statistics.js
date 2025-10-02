import styled from 'styled-components';

const Container = styled.div.attrs(({ testId }) => ({
  'data-test-id': testId,
}))`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StatisticsNumbers = styled.div.attrs(() => ({
  'data-test-id': 'STATISTICS_NUMBERS',
}))`
  font-weight: ${({ theme }) => theme.numbersFontWeight};
  font-size: ${({ theme }) => theme.numbersFontSize};
  line-height: ${({ theme }) => theme.numbersLineHeight};
  color: ${({ theme, hasError }) =>
    hasError ? theme.numbersColorError : theme.numbersColor};
`;

const StatisticsText = styled.div.attrs(() => ({
  'data-test-id': 'STATISTICS_TEXT',
}))`
  font-size: ${({ theme }) => theme.textFontSize};
  line-height: ${({ theme }) => theme.textLineHeight};
  color: ${({ theme, hasError }) =>
    hasError ? theme.textColorError : theme.textColor};
`;

const StatisticsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.boxWidth};
  margin: ${({ theme }) => theme.boxMargin};
`;

export { Container, StatisticsBox, StatisticsNumbers, StatisticsText };
