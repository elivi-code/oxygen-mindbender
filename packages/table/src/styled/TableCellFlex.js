import styled from 'styled-components';
import { getHeadStyles, getDefaultStyles } from './styles/tableCellStyles';

const TableCellFlex = styled.div`
  display: flex;
  flex: 1 0 0%;

  border-bottom: 1px solid ${({ theme }) => theme.tableBorderColor};
  padding: ${({ theme }) => theme.tableCellPadding};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ isHead }) => (isHead ? getHeadStyles : getDefaultStyles)}
`;

export default TableCellFlex;
