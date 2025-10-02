import React, { useRef } from 'react';
import { flexRender } from '@tanstack/react-table';
import { getTestAttributes } from '@8x8/oxygen-config';
import { BodyRow } from '../styled/BodyRow';
import { Cell } from '../styled/Cell';
import { RowActions } from '../actions/RowActions';
import { WarningIndicator } from '../styled/ErrorIndicator';
import { focusAdjacentTabbable, focusNextRow, focusPreviousRow, } from './BodyRow.utils';
const BodyRowComponent = ({ row, rowStatus, activeRowId, hoveredRowId, setHoveredRowId, focusedRowId, setFocusedRowId, onRowClick, actionsMap, rowActionsPortalTarget, pinnedColumns, showPinnedBorder = false, errorMap, testId, translateY, bodyRowRef, }) => {
    // Ref for the current row
    const internalRowRef = useRef(null);
    const rowRef = bodyRowRef ?? internalRowRef;
    const handleKeyEvent = (e) => {
        if ((e.key === 'Enter' || e.key === ' ') && e.currentTarget === e.target) {
            e.preventDefault();
            onRowClick?.(row);
        }
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            focusNextRow(rowRef.current);
        }
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            focusPreviousRow(rowRef.current);
        }
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            focusAdjacentTabbable(rowRef.current, /* forward */ true);
        }
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            focusAdjacentTabbable(rowRef.current, /* forward */ false);
        }
    };
    const showActionsOnHover = hoveredRowId === row.id;
    const showActionsOnFocus = focusedRowId === row.id && !showActionsOnHover;
    /**
     * styled-components lib tends to create multiple classes for every translateY
     * to avoid that we use inline styles
     */
    const style = {
        position: translateY !== undefined ? 'absolute' : 'relative',
        ...(translateY && { transform: `translateY(${translateY}px)` }),
    };
    return (React.createElement(BodyRow, { ref: rowRef, ...getTestAttributes(`${testId}-row-${row.id}`), isActive: activeRowId === row.id, key: row.id, onMouseDown: e => {
            // Prevent focusing a bodyrow, on mouse click
            e.preventDefault();
        }, onClick: () => onRowClick?.(row), onMouseEnter: () => setHoveredRowId?.(row.id), onMouseLeave: () => setHoveredRowId?.(null), tabIndex: 0, onKeyDown: handleKeyEvent, onFocus: e => {
            if (e.target === e.currentTarget) {
                // Only run this if the row itself is focused, not a child
                setFocusedRowId?.(row.id);
            }
        }, style: style },
        rowStatus && React.createElement(WarningIndicator, { rowStatusType: rowStatus }),
        React.createElement(RowActions, { show: showActionsOnHover || showActionsOnFocus, actions: actionsMap?.[row.id], rowActionsPortalTarget: rowActionsPortalTarget, isActive: activeRowId === row.id, testId: `${testId}-rowActions` }),
        row.getVisibleCells().map(cell => {
            const { size, meta = {} } = cell.column.columnDef;
            return (React.createElement(Cell, { ...getTestAttributes(`${testId}-rowCell-${cell.id}`), as: "td", align: meta.align, width: size, flexible: meta.flexible, pinned: pinnedColumns?.[cell.column.id], showPinnedBorder: showPinnedBorder, key: cell.id, hasError: Boolean(errorMap[row.id]) }, flexRender(cell.column.columnDef.cell, cell.getContext())));
        })));
};
export { BodyRowComponent };
