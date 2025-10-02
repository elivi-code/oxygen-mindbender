import styled, { css } from 'styled-components';
import TableRowFlex from './TableRowFlex';

const TableFlex = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: ${({ theme }) => theme.tableFontFamily};
  font-variant-numeric: ${({ theme }) => theme.fontVariantNumeric};

  ${({ theme, zebra }) =>
    zebra &&
    css`
      ${TableRowFlex}:nth-child(2n+3) {
        background: ${theme.zebraRowBackgroundColor};
      }
    `}
`;

export default TableFlex;
