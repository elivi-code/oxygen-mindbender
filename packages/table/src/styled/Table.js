import styled, { css } from 'styled-components';
import TableRow from './TableRow';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-family: ${({ theme }) => theme.tableFontFamily};
  font-variant-numeric: ${({ theme }) => theme.fontVariantNumeric};

  ${({ theme, zebra }) =>
    zebra &&
    css`
      ${TableRow}:nth-child(2n) {
        background: ${theme.zebraRowBackgroundColor};
      }
    `}
`;

export default Table;
