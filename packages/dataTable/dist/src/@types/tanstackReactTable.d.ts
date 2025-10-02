import { ColumnMeta, RowData } from '@tanstack/react-table';
import { AlignTypes, CellTypes } from '../table/utils';
declare module '@tanstack/react-table' {
    interface ColumnMeta<TData extends RowData, TValue> {
        pinned?: boolean;
        flexible?: boolean;
        type?: CellTypes;
        columnManagement?: {
            locked?: boolean;
            visibleByDefault?: boolean;
            label: string;
        };
        align?: AlignTypes;
    }
    interface HeaderContext<TData, TValue> {
        isLoading?: boolean;
    }
}
declare const dummyColumnMeta: ColumnMeta<any, any>;
export default dummyColumnMeta;
//# sourceMappingURL=tanstackReactTable.d.ts.map