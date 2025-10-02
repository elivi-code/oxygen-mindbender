import { TableOptions } from '@tanstack/react-table';
type Options<TData> = Omit<TableOptions<TData>, 'getCoreRowModel' | 'getRowId'> & Partial<Pick<TableOptions<TData>, 'getCoreRowModel'>> & Required<Pick<TableOptions<TData>, 'getRowId'>>;
declare const useTable: <TData>(tableOptions: Options<TData>) => import("@tanstack/react-table").Table<TData>;
export { useTable };
//# sourceMappingURL=useTable.d.ts.map