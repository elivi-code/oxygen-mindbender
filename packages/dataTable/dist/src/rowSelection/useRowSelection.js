import { useState } from 'react';
const useRowSelection = ({ initialRowSelection } = {}) => {
    const [rowSelection, setRowSelection] = useState(initialRowSelection || {});
    return {
        rowSelection,
        rowSelectionTableOptions: {
            onRowSelectionChange: setRowSelection,
            enableRowSelection: true,
            manualPagination: true,
        },
        rowSelectionTableState: {
            rowSelection,
        },
    };
};
export { useRowSelection };
