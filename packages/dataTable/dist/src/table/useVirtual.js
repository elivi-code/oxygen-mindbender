/* eslint-disable react/display-name */
import React from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { BodyRowHeight } from '../styled/BodyRow';
export const useVirtual = ({ enableVirtualization, rows, }) => {
    const tableContainerRef = React.useRef(null);
    const rowVirtualizer = useVirtualizer({
        count: rows.length,
        estimateSize: () => BodyRowHeight,
        getScrollElement: () => tableContainerRef.current,
        overscan: 5,
    });
    let bodyHeight;
    let renderableRows = [];
    if (enableVirtualization && rows.length) {
        // define bodyHeight, this needs to be applied to <tbody> element, when virtualization is on
        bodyHeight = rowVirtualizer.getTotalSize();
        let wasFirstRowRendered = false;
        let wasLastRowRendered = false;
        renderableRows = rowVirtualizer
            .getVirtualItems()
            .map(({ index, start }) => {
            wasFirstRowRendered ||= index === 0;
            wasLastRowRendered ||= index === rows.length - 1;
            return {
                row: rows[index],
                translateY: start,
            };
        });
        !wasFirstRowRendered &&
            renderableRows.unshift({
                row: rows[0],
                translateY: 0,
            });
        !wasLastRowRendered &&
            renderableRows.push({
                row: rows[rows.length - 1],
                translateY: bodyHeight - BodyRowHeight,
            });
    }
    else {
        renderableRows = rows.map(row => ({ row }));
    }
    const scrollOffsetExists = rowVirtualizer.scrollOffset
        ? rowVirtualizer.scrollOffset > 0
        : false;
    // apparently rowVirtualizer.isScrolling remains true (due to unknown reasons)
    // when the scroll element's last offset was not 0 and a new set of data is rendered
    // in other words: the user scrolled before doing a page change
    // so, scrollOffset should also be checked
    const isScrolling = rowVirtualizer.isScrolling && scrollOffsetExists;
    const isVirtualAndScrolling = enableVirtualization ? isScrolling : false;
    return {
        tableContainerRef,
        renderableRows,
        bodyHeight,
        isVirtualAndScrolling,
    };
};
