/// <reference types="react" />
import { RowSelectionState } from '@tanstack/react-table';
interface UseRowSelection {
    initialRowSelection?: RowSelectionState;
}
declare const useRowSelection: ({ initialRowSelection }?: UseRowSelection) => {
    rowSelection: RowSelectionState;
    rowSelectionTableOptions: {
        onRowSelectionChange: import("react").Dispatch<import("react").SetStateAction<RowSelectionState>>;
        enableRowSelection: boolean;
        manualPagination: boolean;
    };
    rowSelectionTableState: {
        rowSelection: RowSelectionState;
    };
};
export { useRowSelection };
//# sourceMappingURL=useRowSelection.d.ts.map