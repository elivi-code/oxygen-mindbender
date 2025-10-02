import React from 'react';
import { Table as ITable } from '@tanstack/react-table';
import { PinnedColumns } from './utils';
interface Props<TData> {
    tableApi: ITable<TData>;
    pinnedColumns: PinnedColumns;
    showPinnedBorder: boolean;
    loading?: boolean;
}
declare const Header: <TData>({ tableApi, pinnedColumns, showPinnedBorder, loading, }: Props<TData>) => React.JSX.Element;
export { Header };
//# sourceMappingURL=Header.d.ts.map