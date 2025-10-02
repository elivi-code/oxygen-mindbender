import React, { forwardRef, Fragment } from 'react';
import styled from 'styled-components';

const TableContainerForVirtual = styled.div`
  height: 100%;
  overflow: auto;
  width: 100%;
  position: relative;
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  enableVirtualization?: boolean;
}

const TableContainer = forwardRef<HTMLDivElement, Props>(
  ({ children, enableVirtualization = false, ...props }, ref) => {
    return enableVirtualization ? (
      <TableContainerForVirtual ref={ref} {...props}>
        {children}
      </TableContainerForVirtual>
    ) : (
      // eslint-disable-next-line react/jsx-no-useless-fragment
      <>{children}</>
    );
  },
);

TableContainer.displayName = 'TableContainer';

export { TableContainer };
