import React from 'react';
import { Row } from '@tanstack/react-table';
interface Props<TData> {
    enableVirtualization: boolean;
    /**
     * all the rows of the data table; only the visible rows will be rendered
     */
    rows: Row<TData>[];
}
export interface RowWithTranslateY<TData> {
    row: Row<TData>;
    translateY?: number;
}
export declare const useVirtual: <TData>({ enableVirtualization, rows, }: Props<TData>) => {
    tableContainerRef: React.RefObject<HTMLDivElement>;
    renderableRows: RowWithTranslateY<TData>[];
    bodyHeight: number | undefined;
    isVirtualAndScrolling: boolean;
};
export {};
//# sourceMappingURL=useVirtual.d.ts.map