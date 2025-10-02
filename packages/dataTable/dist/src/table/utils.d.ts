import { ColumnDef as ReactTableColumnDef } from '@tanstack/react-table';
declare enum CellTypeValues {
    Small = "small",
    Medium = "medium",
    Large = "large"
}
type CellTypes = `${CellTypeValues}`;
declare enum AlignTypeValues {
    Left = "left",
    Center = "center",
    Right = "right"
}
type AlignTypes = `${AlignTypeValues}`;
declare const widthMappings: {
    small: number;
    medium: number;
    large: number;
};
declare const stickyWidthMappings: {
    small: number;
    medium: number;
    large: number;
};
interface PinnedColumnDef {
    id: string;
    type?: CellTypes;
    pinned?: boolean;
}
interface PinnedColumn {
    offset: number;
    position: 'left';
    isLastPinnedColumn?: boolean;
}
interface PinnedColumns {
    [key: string]: PinnedColumn;
}
declare const getPinnedColumns: (columnDefs: PinnedColumnDef[]) => PinnedColumns;
declare const adaptColumnDefinition: <TData>(columnDef: ReactTableColumnDef<TData, string>) => {
    size: number;
    meta: {
        flexible: boolean;
        pinned?: boolean | undefined;
        type?: "small" | "medium" | "large" | undefined;
        columnManagement?: {
            locked?: boolean | undefined;
            visibleByDefault?: boolean | undefined;
            label: string;
        } | undefined;
        align?: "left" | "center" | "right" | undefined;
    };
    getUniqueValues?: import("@tanstack/react-table").AccessorFn<TData, unknown[]> | undefined;
    footer?: import("@tanstack/react-table").ColumnDefTemplate<import("@tanstack/react-table").HeaderContext<TData, string>> | undefined;
    cell?: import("@tanstack/react-table").ColumnDefTemplate<import("@tanstack/react-table").CellContext<TData, string>> | undefined;
    enableHiding?: boolean | undefined;
    enablePinning?: boolean | undefined;
    filterFn?: import("@tanstack/react-table").FilterFnOption<TData> | undefined;
    enableColumnFilter?: boolean | undefined;
    enableGlobalFilter?: boolean | undefined;
    enableMultiSort?: boolean | undefined;
    enableSorting?: boolean | undefined;
    invertSorting?: boolean | undefined;
    sortDescFirst?: boolean | undefined;
    sortingFn?: import("@tanstack/react-table").SortingFnOption<TData> | undefined;
    sortUndefined?: false | 1 | -1 | undefined;
    aggregatedCell?: import("@tanstack/react-table").ColumnDefTemplate<import("@tanstack/react-table").CellContext<TData, string>> | undefined;
    aggregationFn?: import("@tanstack/react-table").AggregationFnOption<TData> | undefined;
    enableGrouping?: boolean | undefined;
    getGroupingValue?: ((row: TData) => any) | undefined;
    enableResizing?: boolean | undefined;
    maxSize?: number | undefined;
    minSize?: number | undefined;
    header: string;
    id?: string | undefined;
} | {
    size: number;
    meta: {
        flexible: boolean;
        pinned?: boolean | undefined;
        type?: "small" | "medium" | "large" | undefined;
        columnManagement?: {
            locked?: boolean | undefined;
            visibleByDefault?: boolean | undefined;
            label: string;
        } | undefined;
        align?: "left" | "center" | "right" | undefined;
    };
    getUniqueValues?: import("@tanstack/react-table").AccessorFn<TData, unknown[]> | undefined;
    footer?: import("@tanstack/react-table").ColumnDefTemplate<import("@tanstack/react-table").HeaderContext<TData, string>> | undefined;
    cell?: import("@tanstack/react-table").ColumnDefTemplate<import("@tanstack/react-table").CellContext<TData, string>> | undefined;
    enableHiding?: boolean | undefined;
    enablePinning?: boolean | undefined;
    filterFn?: import("@tanstack/react-table").FilterFnOption<TData> | undefined;
    enableColumnFilter?: boolean | undefined;
    enableGlobalFilter?: boolean | undefined;
    enableMultiSort?: boolean | undefined;
    enableSorting?: boolean | undefined;
    invertSorting?: boolean | undefined;
    sortDescFirst?: boolean | undefined;
    sortingFn?: import("@tanstack/react-table").SortingFnOption<TData> | undefined;
    sortUndefined?: false | 1 | -1 | undefined;
    aggregatedCell?: import("@tanstack/react-table").ColumnDefTemplate<import("@tanstack/react-table").CellContext<TData, string>> | undefined;
    aggregationFn?: import("@tanstack/react-table").AggregationFnOption<TData> | undefined;
    enableGrouping?: boolean | undefined;
    getGroupingValue?: ((row: TData) => any) | undefined;
    enableResizing?: boolean | undefined;
    maxSize?: number | undefined;
    minSize?: number | undefined;
    id: string;
    header?: import("@tanstack/react-table").ColumnDefTemplate<import("@tanstack/react-table").HeaderContext<TData, string>> | undefined;
} | {
    size: number;
    meta: {
        flexible: boolean;
        pinned?: boolean | undefined;
        type?: "small" | "medium" | "large" | undefined;
        columnManagement?: {
            locked?: boolean | undefined;
            visibleByDefault?: boolean | undefined;
            label: string;
        } | undefined;
        align?: "left" | "center" | "right" | undefined;
    };
    columns?: ReactTableColumnDef<TData, any>[] | undefined;
    getUniqueValues?: import("@tanstack/react-table").AccessorFn<TData, unknown[]> | undefined;
    footer?: import("@tanstack/react-table").ColumnDefTemplate<import("@tanstack/react-table").HeaderContext<TData, string>> | undefined;
    cell?: import("@tanstack/react-table").ColumnDefTemplate<import("@tanstack/react-table").CellContext<TData, string>> | undefined;
    enableHiding?: boolean | undefined;
    enablePinning?: boolean | undefined;
    filterFn?: import("@tanstack/react-table").FilterFnOption<TData> | undefined;
    enableColumnFilter?: boolean | undefined;
    enableGlobalFilter?: boolean | undefined;
    enableMultiSort?: boolean | undefined;
    enableSorting?: boolean | undefined;
    invertSorting?: boolean | undefined;
    sortDescFirst?: boolean | undefined;
    sortingFn?: import("@tanstack/react-table").SortingFnOption<TData> | undefined;
    sortUndefined?: false | 1 | -1 | undefined;
    aggregatedCell?: import("@tanstack/react-table").ColumnDefTemplate<import("@tanstack/react-table").CellContext<TData, string>> | undefined;
    aggregationFn?: import("@tanstack/react-table").AggregationFnOption<TData> | undefined;
    enableGrouping?: boolean | undefined;
    getGroupingValue?: ((row: TData) => any) | undefined;
    enableResizing?: boolean | undefined;
    maxSize?: number | undefined;
    minSize?: number | undefined;
    header: string;
    id?: string | undefined;
} | {
    size: number;
    meta: {
        flexible: boolean;
        pinned?: boolean | undefined;
        type?: "small" | "medium" | "large" | undefined;
        columnManagement?: {
            locked?: boolean | undefined;
            visibleByDefault?: boolean | undefined;
            label: string;
        } | undefined;
        align?: "left" | "center" | "right" | undefined;
    };
    columns?: ReactTableColumnDef<TData, any>[] | undefined;
    getUniqueValues?: import("@tanstack/react-table").AccessorFn<TData, unknown[]> | undefined;
    footer?: import("@tanstack/react-table").ColumnDefTemplate<import("@tanstack/react-table").HeaderContext<TData, string>> | undefined;
    cell?: import("@tanstack/react-table").ColumnDefTemplate<import("@tanstack/react-table").CellContext<TData, string>> | undefined;
    enableHiding?: boolean | undefined;
    enablePinning?: boolean | undefined;
    filterFn?: import("@tanstack/react-table").FilterFnOption<TData> | undefined;
    enableColumnFilter?: boolean | undefined;
    enableGlobalFilter?: boolean | undefined;
    enableMultiSort?: boolean | undefined;
    enableSorting?: boolean | undefined;
    invertSorting?: boolean | undefined;
    sortDescFirst?: boolean | undefined;
    sortingFn?: import("@tanstack/react-table").SortingFnOption<TData> | undefined;
    sortUndefined?: false | 1 | -1 | undefined;
    aggregatedCell?: import("@tanstack/react-table").ColumnDefTemplate<import("@tanstack/react-table").CellContext<TData, string>> | undefined;
    aggregationFn?: import("@tanstack/react-table").AggregationFnOption<TData> | undefined;
    enableGrouping?: boolean | undefined;
    getGroupingValue?: ((row: TData) => any) | undefined;
    enableResizing?: boolean | undefined;
    maxSize?: number | undefined;
    minSize?: number | undefined;
    id: string;
    header?: import("@tanstack/react-table").ColumnDefTemplate<import("@tanstack/react-table").HeaderContext<TData, string>> | undefined;
} | {
    size: number;
    meta: {
        flexible: boolean;
        pinned?: boolean | undefined;
        type?: "small" | "medium" | "large" | undefined;
        columnManagement?: {
            locked?: boolean | undefined;
            visibleByDefault?: boolean | undefined;
            label: string;
        } | undefined;
        align?: "left" | "center" | "right" | undefined;
    };
    id?: string | undefined;
    accessorKey: (string & {}) | keyof TData;
    getUniqueValues?: import("@tanstack/react-table").AccessorFn<TData, unknown[]> | undefined;
    footer?: import("@tanstack/react-table").ColumnDefTemplate<import("@tanstack/react-table").HeaderContext<TData, string>> | undefined;
    cell?: import("@tanstack/react-table").ColumnDefTemplate<import("@tanstack/react-table").CellContext<TData, string>> | undefined;
    enableHiding?: boolean | undefined;
    enablePinning?: boolean | undefined;
    filterFn?: import("@tanstack/react-table").FilterFnOption<TData> | undefined;
    enableColumnFilter?: boolean | undefined;
    enableGlobalFilter?: boolean | undefined;
    enableMultiSort?: boolean | undefined;
    enableSorting?: boolean | undefined;
    invertSorting?: boolean | undefined;
    sortDescFirst?: boolean | undefined;
    sortingFn?: import("@tanstack/react-table").SortingFnOption<TData> | undefined;
    sortUndefined?: false | 1 | -1 | undefined;
    aggregatedCell?: import("@tanstack/react-table").ColumnDefTemplate<import("@tanstack/react-table").CellContext<TData, string>> | undefined;
    aggregationFn?: import("@tanstack/react-table").AggregationFnOption<TData> | undefined;
    enableGrouping?: boolean | undefined;
    getGroupingValue?: ((row: TData) => any) | undefined;
    enableResizing?: boolean | undefined;
    maxSize?: number | undefined;
    minSize?: number | undefined;
    header?: string | undefined;
} | {
    size: number;
    meta: {
        flexible: boolean;
        pinned?: boolean | undefined;
        type?: "small" | "medium" | "large" | undefined;
        columnManagement?: {
            locked?: boolean | undefined;
            visibleByDefault?: boolean | undefined;
            label: string;
        } | undefined;
        align?: "left" | "center" | "right" | undefined;
    };
    id?: string | undefined;
    accessorKey: (string & {}) | keyof TData;
    getUniqueValues?: import("@tanstack/react-table").AccessorFn<TData, unknown[]> | undefined;
    footer?: import("@tanstack/react-table").ColumnDefTemplate<import("@tanstack/react-table").HeaderContext<TData, string>> | undefined;
    cell?: import("@tanstack/react-table").ColumnDefTemplate<import("@tanstack/react-table").CellContext<TData, string>> | undefined;
    enableHiding?: boolean | undefined;
    enablePinning?: boolean | undefined;
    filterFn?: import("@tanstack/react-table").FilterFnOption<TData> | undefined;
    enableColumnFilter?: boolean | undefined;
    enableGlobalFilter?: boolean | undefined;
    enableMultiSort?: boolean | undefined;
    enableSorting?: boolean | undefined;
    invertSorting?: boolean | undefined;
    sortDescFirst?: boolean | undefined;
    sortingFn?: import("@tanstack/react-table").SortingFnOption<TData> | undefined;
    sortUndefined?: false | 1 | -1 | undefined;
    aggregatedCell?: import("@tanstack/react-table").ColumnDefTemplate<import("@tanstack/react-table").CellContext<TData, string>> | undefined;
    aggregationFn?: import("@tanstack/react-table").AggregationFnOption<TData> | undefined;
    enableGrouping?: boolean | undefined;
    getGroupingValue?: ((row: TData) => any) | undefined;
    enableResizing?: boolean | undefined;
    maxSize?: number | undefined;
    minSize?: number | undefined;
    header?: import("@tanstack/react-table").ColumnDefTemplate<import("@tanstack/react-table").HeaderContext<TData, string>> | undefined;
} | {
    size: number;
    meta: {
        flexible: boolean;
        pinned?: boolean | undefined;
        type?: "small" | "medium" | "large" | undefined;
        columnManagement?: {
            locked?: boolean | undefined;
            visibleByDefault?: boolean | undefined;
            label: string;
        } | undefined;
        align?: "left" | "center" | "right" | undefined;
    };
    accessorFn: import("@tanstack/react-table").AccessorFn<TData, string>;
    getUniqueValues?: import("@tanstack/react-table").AccessorFn<TData, unknown[]> | undefined;
    footer?: import("@tanstack/react-table").ColumnDefTemplate<import("@tanstack/react-table").HeaderContext<TData, string>> | undefined;
    cell?: import("@tanstack/react-table").ColumnDefTemplate<import("@tanstack/react-table").CellContext<TData, string>> | undefined;
    enableHiding?: boolean | undefined;
    enablePinning?: boolean | undefined;
    filterFn?: import("@tanstack/react-table").FilterFnOption<TData> | undefined;
    enableColumnFilter?: boolean | undefined;
    enableGlobalFilter?: boolean | undefined;
    enableMultiSort?: boolean | undefined;
    enableSorting?: boolean | undefined;
    invertSorting?: boolean | undefined;
    sortDescFirst?: boolean | undefined;
    sortingFn?: import("@tanstack/react-table").SortingFnOption<TData> | undefined;
    sortUndefined?: false | 1 | -1 | undefined;
    aggregatedCell?: import("@tanstack/react-table").ColumnDefTemplate<import("@tanstack/react-table").CellContext<TData, string>> | undefined;
    aggregationFn?: import("@tanstack/react-table").AggregationFnOption<TData> | undefined;
    enableGrouping?: boolean | undefined;
    getGroupingValue?: ((row: TData) => any) | undefined;
    enableResizing?: boolean | undefined;
    maxSize?: number | undefined;
    minSize?: number | undefined;
    header: string;
    id?: string | undefined;
} | {
    size: number;
    meta: {
        flexible: boolean;
        pinned?: boolean | undefined;
        type?: "small" | "medium" | "large" | undefined;
        columnManagement?: {
            locked?: boolean | undefined;
            visibleByDefault?: boolean | undefined;
            label: string;
        } | undefined;
        align?: "left" | "center" | "right" | undefined;
    };
    accessorFn: import("@tanstack/react-table").AccessorFn<TData, string>;
    getUniqueValues?: import("@tanstack/react-table").AccessorFn<TData, unknown[]> | undefined;
    footer?: import("@tanstack/react-table").ColumnDefTemplate<import("@tanstack/react-table").HeaderContext<TData, string>> | undefined;
    cell?: import("@tanstack/react-table").ColumnDefTemplate<import("@tanstack/react-table").CellContext<TData, string>> | undefined;
    enableHiding?: boolean | undefined;
    enablePinning?: boolean | undefined;
    filterFn?: import("@tanstack/react-table").FilterFnOption<TData> | undefined;
    enableColumnFilter?: boolean | undefined;
    enableGlobalFilter?: boolean | undefined;
    enableMultiSort?: boolean | undefined;
    enableSorting?: boolean | undefined;
    invertSorting?: boolean | undefined;
    sortDescFirst?: boolean | undefined;
    sortingFn?: import("@tanstack/react-table").SortingFnOption<TData> | undefined;
    sortUndefined?: false | 1 | -1 | undefined;
    aggregatedCell?: import("@tanstack/react-table").ColumnDefTemplate<import("@tanstack/react-table").CellContext<TData, string>> | undefined;
    aggregationFn?: import("@tanstack/react-table").AggregationFnOption<TData> | undefined;
    enableGrouping?: boolean | undefined;
    getGroupingValue?: ((row: TData) => any) | undefined;
    enableResizing?: boolean | undefined;
    maxSize?: number | undefined;
    minSize?: number | undefined;
    id: string;
    header?: import("@tanstack/react-table").ColumnDefTemplate<import("@tanstack/react-table").HeaderContext<TData, string>> | undefined;
};
export { getPinnedColumns, stickyWidthMappings, widthMappings, PinnedColumn, PinnedColumns, CellTypes, AlignTypes, adaptColumnDefinition, };
//# sourceMappingURL=utils.d.ts.map