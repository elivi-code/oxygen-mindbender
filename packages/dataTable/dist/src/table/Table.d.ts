import React from 'react';
import { Table as ITable, Row } from '@tanstack/react-table';
import { GetRowActions, GetRowStatus } from '../actions/ActionTypes';
interface Props<TData> {
    /** the row which was last clicked; 1 active row at a time */
    activeRowId?: string;
    onRowClick?: (row: Row<TData>) => void;
    loadingText?: string;
    loading?: boolean;
    tableApi: ITable<TData>;
    getRowActions?: GetRowActions<TData>;
    getRowStatus?: GetRowStatus<TData>;
    testId?: string;
    /**
     * default: false
     * true means tanstack's virtualization mechanism is used to render the rows
     */
    enableVirtualization?: boolean;
    /**
     * defaut: false
     * true means that pressing tab key will move focus out of the table
     */
    blurOnTab?: boolean;
}
declare const Table: <TData>({ activeRowId, onRowClick, loadingText, loading, tableApi, getRowActions, getRowStatus, testId, enableVirtualization, blurOnTab, }: Props<TData>) => React.JSX.Element;
export { Table };
//# sourceMappingURL=Table.d.ts.map