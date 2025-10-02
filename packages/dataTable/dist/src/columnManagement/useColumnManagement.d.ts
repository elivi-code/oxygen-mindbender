import { ColumnDef, ColumnOrderState, VisibilityState } from '@tanstack/react-table';
import { ColumnManagementInterface } from './ColumnManagement.utils';
import { ColumnManagementModalProps } from './ColumnManagementModal';
interface UseColumnManagementArgs<TData> {
    initiallyVisibleColumns?: ColumnManagementInterface[];
    columnDefinitions: ColumnDef<TData, string>[];
}
interface UseColumnManagement {
    columnManagementTableState: {
        columnOrder: ColumnOrderState;
        columnVisibility: VisibilityState;
    };
    openColumnManagement: () => void;
    columnManagementProps: ColumnManagementModalProps;
}
declare const useColumnManagement: <TData>({ initiallyVisibleColumns, columnDefinitions, }: UseColumnManagementArgs<TData>) => UseColumnManagement;
export { useColumnManagement, UseColumnManagementArgs, ColumnManagementInterface, };
//# sourceMappingURL=useColumnManagement.d.ts.map