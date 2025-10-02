import { Column } from '@tanstack/react-table';
import { ColumnInterface } from '@8x8/oxygen-column-management';
interface ColumnManagementInterface extends ColumnInterface {
    id: string;
}
declare const getAvailableAndDefaultColumns: <TData>(reactTableColumns: Column<TData, unknown>[]) => {
    availableColumns: ColumnManagementInterface[];
    defaultColumns: ColumnManagementInterface[];
};
export { getAvailableAndDefaultColumns, ColumnManagementInterface };
//# sourceMappingURL=ColumnManagement.utils.d.ts.map