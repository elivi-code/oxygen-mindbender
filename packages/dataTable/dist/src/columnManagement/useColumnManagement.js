import React, { useMemo, useState } from 'react';
import { useReactTable, getCoreRowModel, } from '@tanstack/react-table';
import { getAvailableAndDefaultColumns, } from './ColumnManagement.utils';
const useColumnManagement = ({ initiallyVisibleColumns, columnDefinitions, }) => {
    const [showColumnManagement, setShowColumnManagement] = React.useState(false);
    // react-table has some internal logic to determine column ids based on definitions and we need those ids for column management
    const table = useReactTable({
        columns: columnDefinitions,
        getCoreRowModel: getCoreRowModel(),
        data: [],
    });
    // react-table has multiple ways of determining the id of a column (col id, cold header, col accessor key), which it then uses internally
    // we use "getAllLeafColumns" to get the columns with that id determined by react-table
    // note: in our usecase getAllColumns and getAllLeafColumns are the same since we don't intend to use leaf columns
    const tableColumns = table.getAllLeafColumns();
    const { availableColumns, defaultColumns } = useMemo(() => getAvailableAndDefaultColumns(tableColumns), [tableColumns]);
    const [visibleColumns, setVisibleColumns] = useState(initiallyVisibleColumns || defaultColumns);
    const columnOrder = useMemo(() => visibleColumns.map(column => column.id), [visibleColumns]);
    const columnVisibility = useMemo(() => tableColumns.reduce((acc, column) => {
        acc[column.id] = Boolean(visibleColumns.find(currentColumn => currentColumn.id === column.id));
        return acc;
    }, {}), [visibleColumns, tableColumns]);
    return {
        columnManagementTableState: {
            columnOrder,
            columnVisibility,
        },
        openColumnManagement: () => setShowColumnManagement(true),
        columnManagementProps: {
            isOpened: showColumnManagement,
            defaultColumns,
            availableColumns,
            currentColumns: visibleColumns,
            onClose: () => setShowColumnManagement(false),
            onSave: (currentItems) => {
                setVisibleColumns(currentItems);
                setShowColumnManagement(false);
            },
        },
    };
};
export { useColumnManagement, };
