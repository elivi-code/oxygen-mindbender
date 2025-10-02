import styled from 'styled-components';
import { getHoverStyles, getSelectedStyles } from './styles/tableRowStyles';

const TableRowFlex = styled.div`
  display: flex;
  flex-direction: row;
  ${({ enableHover }) => (enableHover ? getHoverStyles : undefined)}
  ${({ isSelected }) => (isSelected ? getSelectedStyles : undefined)}
`;

export default TableRowFlex;
