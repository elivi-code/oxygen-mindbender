import styled from 'styled-components';
import { getHoverStyles, getSelectedStyles } from './styles/tableRowStyles';

const TableRow = styled.tr`
  ${({ enableHover }) => (enableHover ? getHoverStyles : undefined)}
  ${({ isSelected }) => (isSelected ? getSelectedStyles : undefined)}
`;

export default TableRow;
