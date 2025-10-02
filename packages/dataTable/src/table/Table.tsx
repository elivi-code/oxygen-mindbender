import React, { useRef } from 'react';
import styled from 'styled-components';
import { Table as ITable, Row } from '@tanstack/react-table';

import { StyledTable, StyledTableVirtualized } from '../styled/Table';
import { Header } from './Header';
import { usePinnedColumns } from './usePinnedColumns';
import { useHorizontalScroll } from './useHorizontalScroll';
import { LoadingState } from '../styled/LoadingState';
import { GetRowActions, GetRowStatus } from '../actions/ActionTypes';
import { useVirtual } from './useVirtual';
import { Body } from './Body';
import { TableContainer } from './TableContainer';

const RowActionsPortalNode = styled.div`
  position: fixed;
  z-index: 70;
`;

interface Props<TData> {
  /** the row which was last clicked; 1 active row at a time */
  activeRowId?: string;
  onRowClick?: (row: Row<TData>) => void;
  loadingText?: string;
  loading?: boolean;
  tableApi: ITable<TData>;
  getRowActions?: GetRowActions<TData>;
  getRowStatus?: GetRowStatus<TData>;
  testId?: string;

  /**
   * default: false
   * true means tanstack's virtualization mechanism is used to render the rows
   */
  enableVirtualization?: boolean;

  /**
   * defaut: false
   * true means that pressing tab key will move focus out of the table
   */
  blurOnTab?: boolean;
}

const Table = <TData,>({
  activeRowId,
  onRowClick,
  loadingText,
  loading,
  tableApi,
  getRowActions,
  getRowStatus,
  testId = 'data-table',
  enableVirtualization = false,
  blurOnTab = false,
}: Props<TData>) => {
  const pinnedColumns = usePinnedColumns(tableApi);
  const { hasHorizontalScroll, ref } = useHorizontalScroll();
  const rowActionsPortalTarget: React.RefObject<HTMLDivElement> = useRef(null);
  const { rows } = tableApi.getRowModel();

  const {
    renderableRows,
    bodyHeight,
    isVirtualAndScrolling,
    tableContainerRef,
  } = useVirtual({
    enableVirtualization,
    rows,
  });
  const HtmlTable = enableVirtualization ? StyledTableVirtualized : StyledTable;

  return (
    <TableContainer
      enableVirtualization={enableVirtualization}
      ref={tableContainerRef}
    >
      <HtmlTable ref={ref}>
        <Header
          loading={loading}
          showPinnedBorder={hasHorizontalScroll}
          tableApi={tableApi}
          pinnedColumns={pinnedColumns}
        />
        {loading ? (
          <LoadingState loadingText={loadingText} />
        ) : (
          <Body
            activeRowId={activeRowId}
            onRowClick={onRowClick}
            getRowActions={getRowActions}
            getRowStatus={getRowStatus}
            showPinnedBorder={hasHorizontalScroll}
            tableApi={tableApi}
            pinnedColumns={pinnedColumns}
            rowActionsPortalTarget={rowActionsPortalTarget}
            renderableRows={renderableRows}
            bodyHeight={bodyHeight}
            shouldTrackHoveredRow={!isVirtualAndScrolling}
            blurOnTab={blurOnTab}
            testId={`${testId}-body`}
          />
        )}
      </HtmlTable>
      <RowActionsPortalNode ref={rowActionsPortalTarget} />
    </TableContainer>
  );
};

export { Table };
