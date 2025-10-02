import React from 'react';
import { Table as ITable, Row } from '@tanstack/react-table';
import { PinnedColumns } from './utils';
import { GetRowActions, GetRowStatus } from '../actions/ActionTypes';
import { RowWithTranslateY } from './useVirtual';
interface Props<TData> {
    activeRowId?: string;
    tableApi: ITable<TData>;
    pinnedColumns?: PinnedColumns;
    showPinnedBorder?: boolean;
    rowActionsPortalTarget: React.RefObject<HTMLDivElement>;
    getRowActions?: GetRowActions<TData>;
    getRowStatus?: GetRowStatus<TData>;
    onRowClick?: (row: Row<TData>) => void;
    renderableRows: RowWithTranslateY<TData>[];
    bodyHeight?: number;
    shouldTrackHoveredRow?: boolean;
    blurOnTab: boolean;
    testId?: string;
}
declare const Body: <TData>({ activeRowId, tableApi, pinnedColumns, showPinnedBorder, rowActionsPortalTarget, getRowActions, getRowStatus, onRowClick, testId, renderableRows, bodyHeight, shouldTrackHoveredRow, blurOnTab, }: Props<TData>) => React.JSX.Element;
export { Body };
//# sourceMappingURL=Body.d.ts.map