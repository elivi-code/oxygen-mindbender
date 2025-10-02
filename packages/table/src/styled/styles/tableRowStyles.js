import { css } from 'styled-components';
import TableCell from '../TableCell';
import TableCellFlex from '../TableCellFlex';

const getHoverStyles = css`
  cursor: pointer;

  &:hover > ${TableCell}, &:hover > ${TableCellFlex} {
    background-color: unset;
    color: unset;
  }
  &:hover {
    background-color: ${({ isSelected, theme }) =>
      isSelected
        ? theme.tableRowSelectedBackgroundColor
        : theme.tableRowHoverBackgroundColor};
    color: ${({ theme }) => theme.tableRowHoverColor};
  }
`;

const getSelectedStyles = css`
  background-color: ${({ theme }) => theme.tableRowSelectedBackgroundColor};
  ${TableCell}, ${TableCellFlex} {
    color: ${({ theme }) => theme.tableRowHoverColor};
  }
`;

export { getHoverStyles, getSelectedStyles };
