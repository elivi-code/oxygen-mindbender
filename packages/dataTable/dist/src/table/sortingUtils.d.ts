import { Table } from '@tanstack/react-table';
declare enum SortDirections {
    asc = "ASC",
    desc = "DESC"
}
interface SortedColumns {
    [key: string]: SortDirections;
}
declare const useSortedColumns: <TData>(tableApi: Table<TData>) => SortedColumns;
export { useSortedColumns, SortDirections, SortedColumns };
//# sourceMappingURL=sortingUtils.d.ts.map