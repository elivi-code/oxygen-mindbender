import { Column } from '@tanstack/react-table';
import { ColumnInterface } from '@8x8/oxygen-column-management';

interface ColumnManagementInterface extends ColumnInterface {
  // ColumnInterface from oxygen-column-management has id as string or number, for us it will always be string
  // as we populate it from react-table columns
  id: string;
}

const getAvailableAndDefaultColumns = <TData>(
  reactTableColumns: Column<TData>[],
) =>
  reactTableColumns.reduce(
    (acc, column) => {
      const meta = column.columnDef.meta || {};

      if (!meta.columnManagement) {
        meta.columnManagement = {
          locked: false,
          visibleByDefault: true,
          label: column.id,
        };
      }

      const columnManagementDefinition = {
        id: column.id,
        name: meta.columnManagement.label,
        isLocked: meta.columnManagement.locked,
      };

      if (meta.columnManagement.visibleByDefault) {
        acc.defaultColumns.push(columnManagementDefinition);
      }

      acc.availableColumns.push(columnManagementDefinition);

      return acc;
    },
    {
      availableColumns: [] as ColumnManagementInterface[],
      defaultColumns: [] as ColumnManagementInterface[],
    },
  );

export { getAvailableAndDefaultColumns, ColumnManagementInterface };
