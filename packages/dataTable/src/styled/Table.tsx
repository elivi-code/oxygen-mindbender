import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  background-color: ${props => props.theme.ui06};
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 100%;
`;

/**
 * When virtualization is enabled, `overflow: auto` is set on the TableContainer component, given by the useVirtual hook,
 */
const StyledTableVirtualized = styled(StyledTable)`
  overflow: unset;
  height: unset;
`;

export { StyledTable, StyledTableVirtualized };
