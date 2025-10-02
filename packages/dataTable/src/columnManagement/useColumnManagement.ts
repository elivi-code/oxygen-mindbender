import React, { useMemo, useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  ColumnDef,
  ColumnOrderState,
  VisibilityState,
} from '@tanstack/react-table';

import {
  getAvailableAndDefaultColumns,
  ColumnManagementInterface,
} from './ColumnManagement.utils';
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

const useColumnManagement = <TData>({
  initiallyVisibleColumns,
  columnDefinitions,
}: UseColumnManagementArgs<TData>): UseColumnManagement => {
  const [showColumnManagement, setShowColumnManagement] = React.useState(false);
  // react-table has some internal logic to determine column ids based on definitions and we need those ids for column management

  const table = useReactTable<TData>({
    columns: columnDefinitions,
    getCoreRowModel: getCoreRowModel(),
    data: [],
  });
  // react-table has multiple ways of determining the id of a column (col id, cold header, col accessor key), which it then uses internally
  // we use "getAllLeafColumns" to get the columns with that id determined by react-table
  // note: in our usecase getAllColumns and getAllLeafColumns are the same since we don't intend to use leaf columns
  const tableColumns = table.getAllLeafColumns();

  const { availableColumns, defaultColumns } = useMemo(
    () => getAvailableAndDefaultColumns(tableColumns),
    [tableColumns],
  );
  const [visibleColumns, setVisibleColumns] = useState(
    initiallyVisibleColumns || defaultColumns,
  );

  const columnOrder = useMemo(
    () => visibleColumns.map(column => column.id),
    [visibleColumns],
  );
  const columnVisibility = useMemo(
    () =>
      tableColumns.reduce((acc, column) => {
        acc[column.id] = Boolean(
          visibleColumns.find(currentColumn => currentColumn.id === column.id),
        );

        return acc;
      }, {} as VisibilityState),
    [visibleColumns, tableColumns],
  );

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
      onSave: (currentItems: ColumnManagementInterface[]) => {
        setVisibleColumns(currentItems);
        setShowColumnManagement(false);
      },
    },
  };
};

export {
  useColumnManagement,
  UseColumnManagementArgs,
  ColumnManagementInterface,
};
