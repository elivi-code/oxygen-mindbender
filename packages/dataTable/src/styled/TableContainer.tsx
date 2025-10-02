import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { NoDataState, NoDataStateProps } from './NoDataState';

interface Props {
  children: ReactNode;
  noData?: NoDataStateProps & {
    hasNoData: boolean;
  };
}

const TableContainerWrapper = styled.div`
  border-radius: 6px;
  border: 1px solid ${props => props.theme.ui01};
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  /* this is so elements inside the container don't overflow past the border radius
  and we can add pagination / filtering without having to worry about birder radius */
  overflow: hidden;
  background-color: ${props => props.theme.ui06};
`;

const TableContainer: React.FC<Props> = ({ children, noData }) => (
  <TableContainerWrapper>
    {noData?.hasNoData ? (
      <NoDataState title={noData.title} callToAction={noData.callToAction} />
    ) : (
      children
    )}
  </TableContainerWrapper>
);

export { TableContainer };
