import {
  CellContext,
  ColumnDef,
  ColumnDefTemplate,
  createColumnHelper,
} from '@tanstack/react-table';

export type Person = {
  firstName: string;
  lastName: string;
};

export const getMockData = () => {
  const data: Person[] = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Doe' },
  ];

  return data;
};

const columnHelper = createColumnHelper<Person>();

export const getColumns = () => {
  const columns: ColumnDef<Person, string>[] = [
    columnHelper.accessor(row => row.firstName, {
      id: 'firstName',
    }),
    columnHelper.accessor(row => row.lastName, {
      id: 'lastName',
    }),
  ];

  return columns;
};

export const getMockColumnsWithCustomCell = (
  cell: ColumnDefTemplate<CellContext<Person, string>>,
) => {
  const columns: ColumnDef<Person, string>[] = [
    columnHelper.accessor(row => row.firstName, {
      id: 'firstName',
      cell,
    }),
    columnHelper.accessor(row => row.lastName, {
      id: 'lastName',
      cell,
    }),
  ];

  return columns;
};
