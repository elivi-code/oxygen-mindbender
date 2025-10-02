import styled from 'styled-components';
import { getHeadStyles, getDefaultStyles } from './styles/tableCellStyles';

const TableCell = styled.td`
  border-bottom: 1px solid ${({ theme }) => theme.tableBorderColor};
  padding: ${({ theme }) => theme.tableCellPadding};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ isHead }) => (isHead ? getHeadStyles : getDefaultStyles)}
`;

export default TableCell;
