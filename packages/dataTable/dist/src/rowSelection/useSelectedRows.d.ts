import { Table } from '@tanstack/react-table';
/**
 * React-table only keeps the row ids for the selected rows, we generally need the actual row so we can have business logic based on that.
 * What this is it matches those ids to the actual data
 */
declare const useSelectedRows: <TData>(tableApi: Table<TData>) => TData[];
export { useSelectedRows };
//# sourceMappingURL=useSelectedRows.d.ts.map