import React, { forwardRef } from 'react';
import styled from 'styled-components';
const TableContainerForVirtual = styled.div `
  height: 100%;
  overflow: auto;
  width: 100%;
  position: relative;
`;
const TableContainer = forwardRef(({ children, enableVirtualization = false, ...props }, ref) => {
    return enableVirtualization ? (React.createElement(TableContainerForVirtual, { ref: ref, ...props }, children)) : (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    React.createElement(React.Fragment, null, children));
});
TableContainer.displayName = 'TableContainer';
export { TableContainer };
