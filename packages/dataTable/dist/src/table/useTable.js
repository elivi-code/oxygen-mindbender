import { useReactTable, getCoreRowModel as defaultGetCoreRowModel, } from '@tanstack/react-table';
import { useMemo } from 'react';
import { adaptColumnDefinition } from './utils';
const useTable = (tableOptions) => {
    const { columns, getCoreRowModel, ...restTableOptions } = tableOptions;
    const adaptedColumns = useMemo(() => columns.map(adaptColumnDefinition), [columns]);
    const options = useMemo(() => {
        return {
            columns: adaptedColumns,
            getCoreRowModel: getCoreRowModel || defaultGetCoreRowModel(),
            ...restTableOptions,
        };
    }, [adaptedColumns, getCoreRowModel, restTableOptions]);
    return useReactTable(options);
};
export { useTable };
