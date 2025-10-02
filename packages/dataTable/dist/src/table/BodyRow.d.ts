import React, { RefObject } from 'react';
import { Row } from '@tanstack/react-table';
import { PinnedColumns } from './utils';
import { GetRowActions, GetRowStatus } from '../actions/ActionTypes';
interface BodyRowComponentProps<TData> {
    row: Row<TData>;
    rowStatus?: ReturnType<GetRowStatus<TData>>;
    activeRowId?: string;
    hoveredRowId: string | null;
    setHoveredRowId?: (id: string | null) => void;
    /** the row having the focus via keyboard events */
    focusedRowId: string | null;
    setFocusedRowId?: (id: string | null) => void;
    onRowClick?: (row: Row<TData>) => void;
    actionsMap?: Record<string, ReturnType<GetRowActions<TData>>>;
    rowActionsPortalTarget?: RefObject<HTMLDivElement>;
    pinnedColumns?: PinnedColumns;
    showPinnedBorder?: boolean;
    errorMap: Record<string, ReturnType<GetRowStatus<TData>>>;
    testId: string;
    /** if present item will be absolute positioned in parent container */
    translateY?: number;
    bodyRowRef?: RefObject<HTMLTableRowElement>;
}
declare const BodyRowComponent: <TData>({ row, rowStatus, activeRowId, hoveredRowId, setHoveredRowId, focusedRowId, setFocusedRowId, onRowClick, actionsMap, rowActionsPortalTarget, pinnedColumns, showPinnedBorder, errorMap, testId, translateY, bodyRowRef, }: BodyRowComponentProps<TData>) => React.JSX.Element;
export { BodyRowComponent };
//# sourceMappingURL=BodyRow.d.ts.map