import React from 'react';
import { flexRender, Table as ITable } from '@tanstack/react-table';

import { StyledHeader } from '../styled/Header';
import { Cell } from '../styled/Cell';
import { PinnedColumns } from './utils';
import { HeaderRow } from '../styled/HeaderRow';
import { HeaderCellWrapper } from './HeaderCellWrapper';
import { useSortedColumns } from './sortingUtils';
import { useHorizontalScroll } from './useHorizontalScroll';

interface Props<TData> {
  tableApi: ITable<TData>;
  pinnedColumns: PinnedColumns;
  showPinnedBorder: boolean;
  loading?: boolean;
}

const Header = <TData,>({
  tableApi,
  pinnedColumns,
  showPinnedBorder,
  loading,
}: Props<TData>) => {
  const sortedColumns = useSortedColumns(tableApi);
  const { hasHorizontalScroll, ref } = useHorizontalScroll();

  return (
    <StyledHeader ref={ref} isLoading={loading}>
      {tableApi.getHeaderGroups().map(headerGroup => (
        <HeaderRow key={headerGroup.id}>
          {headerGroup.headers.map(header => {
            const { size, meta = {} } = header.column.columnDef;
            const isSortable = header.column.getCanSort();

            return (
              <Cell
                as="th"
                width={size}
                flexible={meta.flexible}
                // when the list is in the loading state the overflow will be on the header instead of the body
                showPinnedBorder={
                  loading ? hasHorizontalScroll : showPinnedBorder
                }
                pinned={pinnedColumns[header.column.id]}
                key={header.id}
              >
                <HeaderCellWrapper
                  align={meta.align}
                  onSort={header.column.getToggleSortingHandler()}
                  isSortable={isSortable}
                  sortDirection={sortedColumns[header.column.id]}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, {
                        ...header.getContext(),
                        isLoading: loading,
                      })}
                </HeaderCellWrapper>
              </Cell>
            );
          })}
        </HeaderRow>
      ))}
    </StyledHeader>
  );
};

export { Header };
