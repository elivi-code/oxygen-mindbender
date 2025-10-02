import { useState } from 'react';
import { RowSelectionState } from '@tanstack/react-table';

interface UseRowSelection {
  initialRowSelection?: RowSelectionState;
}

const useRowSelection = ({ initialRowSelection }: UseRowSelection = {}) => {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>(
    initialRowSelection || {},
  );

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
