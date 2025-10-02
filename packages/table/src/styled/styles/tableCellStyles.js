import { css } from 'styled-components';

const getHeadStyles = css`
  letter-spacing: ${({ theme }) => theme.tableCellHeadLetterSpacing};
  font-weight: ${({ theme }) => theme.tableCellHeadFontWeight};
  font-size: ${({ theme }) => theme.tableCellHeadFontSize};
  line-height: ${({ theme }) => theme.tableCellHeadLineHeight};
  font-family: ${({ theme }) => theme.tableCellHeadFontFamily};

  color: ${({ theme }) => theme.tableCellHeadColor};
  background-color: ${({ theme }) => theme.tableCellHeadBackgroundColor};
`;

const getDefaultStyles = css`
  font-size: ${({ theme }) => theme.tableCellFontSize};
  letter-spacing: ${({ theme }) => theme.tableCellLetterSpacing};
  font-weight: ${({ theme }) => theme.tableCellFontWeight};
  line-height: ${({ theme }) => theme.tableCellLineHeight};
  font-family: ${({ theme }) => theme.tableCellFontFamily};

  color: ${({ theme }) => theme.tableCellColor};
  background-color: ${({ theme }) => theme.tableCellBackgroundColor};
`;

export { getHeadStyles, getDefaultStyles };
