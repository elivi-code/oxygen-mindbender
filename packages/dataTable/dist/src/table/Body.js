import React, { useState, useMemo, useRef } from 'react';
import { getTestAttributes } from '@8x8/oxygen-config';
import { BodyRowComponent } from './BodyRow';
import { HiddenRow, Body as StyledBody } from '../styled/Body';
import { useKeyNavigation } from './useKeyNavigation';
const Body = ({ activeRowId, tableApi, pinnedColumns, showPinnedBorder, rowActionsPortalTarget, getRowActions, getRowStatus, onRowClick, testId = 'body', renderableRows, bodyHeight, shouldTrackHoveredRow, blurOnTab, }) => {
    const [hoveredRowId, setHoveredRowId] = useState(null);
    const [focusedRowId, setFocusedRowId] = useState(null);
    const { rows } = tableApi.getRowModel();
    const actionsMap = useMemo(() => {
        return getRowActions
            ? rows.reduce((acc, row) => {
                acc[row.id] = getRowActions(row.original);
                return acc;
            }, {})
            : {};
    }, [getRowActions, rows]);
    const errorMap = useMemo(() => {
        return getRowStatus
            ? rows.reduce((acc, row) => {
                acc[row.id] = getRowStatus(row.original);
                return acc;
            }, {})
            : {};
    }, [getRowStatus, rows]);
    const { firstRowRef, hiddenRowRef, onKeyDown, onFocus } = useKeyNavigation({
        blurOnTab,
    });
    const lastRowRef = useRef(null);
    return (React.createElement(StyledBody, { ...getTestAttributes(testId), height: bodyHeight, onKeyDown: onKeyDown, onFocus: onFocus, tabIndex: blurOnTab ? 0 : undefined },
        renderableRows.map(({ row, translateY }, index) => {
            const rowStatus = errorMap[row.id];
            let bodyRowRef;
            if (index === 0) {
                bodyRowRef = firstRowRef;
            }
            else if (index === renderableRows.length - 1) {
                bodyRowRef = lastRowRef;
            }
            else {
                bodyRowRef = undefined;
            }
            return (React.createElement(BodyRowComponent, { key: row.id, bodyRowRef: bodyRowRef, row: row, rowStatus: rowStatus, activeRowId: activeRowId, hoveredRowId: hoveredRowId, setHoveredRowId: shouldTrackHoveredRow ? setHoveredRowId : undefined, focusedRowId: focusedRowId, setFocusedRowId: setFocusedRowId, onRowClick: onRowClick, actionsMap: actionsMap, rowActionsPortalTarget: rowActionsPortalTarget, pinnedColumns: pinnedColumns, showPinnedBorder: showPinnedBorder, errorMap: errorMap, testId: testId, translateY: translateY }));
        }),
        blurOnTab && React.createElement(HiddenRow, { ref: hiddenRowRef, tabIndex: 0 })));
};
export { Body };
