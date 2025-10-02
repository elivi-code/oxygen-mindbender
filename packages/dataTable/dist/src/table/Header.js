import React from 'react';
import { flexRender } from '@tanstack/react-table';
import { StyledHeader } from '../styled/Header';
import { Cell } from '../styled/Cell';
import { HeaderRow } from '../styled/HeaderRow';
import { HeaderCellWrapper } from './HeaderCellWrapper';
import { useSortedColumns } from './sortingUtils';
import { useHorizontalScroll } from './useHorizontalScroll';
const Header = ({ tableApi, pinnedColumns, showPinnedBorder, loading, }) => {
    const sortedColumns = useSortedColumns(tableApi);
    const { hasHorizontalScroll, ref } = useHorizontalScroll();
    return (React.createElement(StyledHeader, { ref: ref, isLoading: loading }, tableApi.getHeaderGroups().map(headerGroup => (React.createElement(HeaderRow, { key: headerGroup.id }, headerGroup.headers.map(header => {
        const { size, meta = {} } = header.column.columnDef;
        const isSortable = header.column.getCanSort();
        return (React.createElement(Cell, { as: "th", width: size, flexible: meta.flexible, 
            // when the list is in the loading state the overflow will be on the header instead of the body
            showPinnedBorder: loading ? hasHorizontalScroll : showPinnedBorder, pinned: pinnedColumns[header.column.id], key: header.id },
            React.createElement(HeaderCellWrapper, { align: meta.align, onSort: header.column.getToggleSortingHandler(), isSortable: isSortable, sortDirection: sortedColumns[header.column.id] }, header.isPlaceholder
                ? null
                : flexRender(header.column.columnDef.header, {
                    ...header.getContext(),
                    isLoading: loading,
                }))));
    }))))));
};
export { Header };
