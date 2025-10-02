import {
  TableOptions,
  useReactTable,
  getCoreRowModel as defaultGetCoreRowModel,
} from '@tanstack/react-table';
import { useMemo } from 'react';
import { adaptColumnDefinition } from './utils';

type Options<TData> = Omit<
  TableOptions<TData>,
  'getCoreRowModel' | 'getRowId'
> &
  Partial<Pick<TableOptions<TData>, 'getCoreRowModel'>> &
  Required<Pick<TableOptions<TData>, 'getRowId'>>;

const useTable = <TData>(tableOptions: Options<TData>) => {
  const { columns, getCoreRowModel, ...restTableOptions } = tableOptions;
  const adaptedColumns = useMemo(
    () => columns.map(adaptColumnDefinition),
    [columns],
  );

  const options = useMemo(() => {
    return {
      columns: adaptedColumns,
      getCoreRowModel: getCoreRowModel || defaultGetCoreRowModel(),
      ...restTableOptions,
    };
  }, [adaptedColumns, getCoreRowModel, restTableOptions]);

  return useReactTable<TData>(options);
};

export { useTable };
