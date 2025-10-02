import React, { useRef } from 'react';
import styled from 'styled-components';
import { StyledTable, StyledTableVirtualized } from '../styled/Table';
import { Header } from './Header';
import { usePinnedColumns } from './usePinnedColumns';
import { useHorizontalScroll } from './useHorizontalScroll';
import { LoadingState } from '../styled/LoadingState';
import { useVirtual } from './useVirtual';
import { Body } from './Body';
import { TableContainer } from './TableContainer';
const RowActionsPortalNode = styled.div `
  position: fixed;
  z-index: 70;
`;
const Table = ({ activeRowId, onRowClick, loadingText, loading, tableApi, getRowActions, getRowStatus, testId = 'data-table', enableVirtualization = false, blurOnTab = false, }) => {
    const pinnedColumns = usePinnedColumns(tableApi);
    const { hasHorizontalScroll, ref } = useHorizontalScroll();
    const rowActionsPortalTarget = useRef(null);
    const { rows } = tableApi.getRowModel();
    const { renderableRows, bodyHeight, isVirtualAndScrolling, tableContainerRef, } = useVirtual({
        enableVirtualization,
        rows,
    });
    const HtmlTable = enableVirtualization ? StyledTableVirtualized : StyledTable;
    return (React.createElement(TableContainer, { enableVirtualization: enableVirtualization, ref: tableContainerRef },
        React.createElement(HtmlTable, { ref: ref },
            React.createElement(Header, { loading: loading, showPinnedBorder: hasHorizontalScroll, tableApi: tableApi, pinnedColumns: pinnedColumns }),
            loading ? (React.createElement(LoadingState, { loadingText: loadingText })) : (React.createElement(Body, { activeRowId: activeRowId, onRowClick: onRowClick, getRowActions: getRowActions, getRowStatus: getRowStatus, showPinnedBorder: hasHorizontalScroll, tableApi: tableApi, pinnedColumns: pinnedColumns, rowActionsPortalTarget: rowActionsPortalTarget, renderableRows: renderableRows, bodyHeight: bodyHeight, shouldTrackHoveredRow: !isVirtualAndScrolling, blurOnTab: blurOnTab, testId: `${testId}-body` }))),
        React.createElement(RowActionsPortalNode, { ref: rowActionsPortalTarget })));
};
export { Table };
