import { useEffect, useMemo, useState } from 'react';
/**
 * React-table only keeps the row ids for the selected rows, we generally need the actual row so we can have business logic based on that.
 * What this is it matches those ids to the actual data
 */
const useSelectedRows = (tableApi) => {
    const [selectedRows, setSelectedRows] = useState({});
    const reactTableSelectedRows = tableApi.getState().rowSelection;
    const { getSortedRowModel } = tableApi;
    useEffect(() => {
        const { rowsById } = getSortedRowModel();
        setSelectedRows(prevSelectedRows => Object.entries(reactTableSelectedRows).reduce((acc, [rowId, selected]) => {
            // rowsById contains the rows from table data, so only the current page, if the selected row is not
            // from the current page then it must be a previously selected one
            const row = rowsById[rowId]?.original || prevSelectedRows[rowId];
            if (selected && row) {
                acc[rowId] = row;
            }
            return acc;
        }, {}));
    }, [reactTableSelectedRows, getSortedRowModel]);
    return useMemo(() => Object.values(selectedRows), [selectedRows]);
};
export { useSelectedRows };
