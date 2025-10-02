import { useMemo } from 'react';
import { getPinnedColumns } from './utils';
const usePinnedColumns = (tableApi) => {
    // TODO: if design will allow for nested header columns need to update this
    const columns = tableApi.getVisibleLeafColumns();
    const columnDefs = useMemo(() => columns.map(column => ({
        id: column.id,
        type: column.columnDef.meta?.type,
        pinned: column.columnDef.meta?.pinned,
    })), [columns]);
    return useMemo(() => getPinnedColumns(columnDefs), [columnDefs]);
};
export { usePinnedColumns };
