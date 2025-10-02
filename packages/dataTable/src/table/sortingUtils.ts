import { useMemo } from 'react';
import { Table } from '@tanstack/react-table';

enum SortDirections {
  asc = 'ASC',
  desc = 'DESC',
}
interface SortedColumns {
  [key: string]: SortDirections;
}

const useSortedColumns = <TData>(tableApi: Table<TData>) => {
  const sortingState = tableApi.getState().sorting;

  return useMemo(
    () =>
      sortingState.reduce<SortedColumns>((acc, curr) => {
        acc[curr.id] = curr.desc ? SortDirections.desc : SortDirections.asc;

        return acc;
      }, {}),
    [sortingState],
  );
};

export { useSortedColumns, SortDirections, SortedColumns };
