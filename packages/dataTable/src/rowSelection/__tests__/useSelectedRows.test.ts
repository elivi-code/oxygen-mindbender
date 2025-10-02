import {
  ColumnDef,
  createColumnHelper,
  RowSelectionState,
} from '@tanstack/react-table';
import { renderHook } from '@testing-library/react-hooks';
import { useTable } from '../../table/useTable';
import { useSelectedRows } from '../useSelectedRows';
import { useRowSelection } from '../useRowSelection';
import { getMockData, Person } from '../../__tests__/mockData';

const columnHelper = createColumnHelper<Person>();
const data = getMockData();

describe('useSelectedRows', () => {
  const columnDefinitions: ColumnDef<Person, string>[] = [
    columnHelper.accessor(row => row.firstName, {
      id: 'firstName',
    }),
    columnHelper.accessor(row => row.lastName, {
      id: 'lastName',
    }),
  ];

  it('should return the initially selected rows', () => {
    const getRowId = (row: Person) => `${row.firstName}_${row.lastName}`;
    const initialRowSelection: RowSelectionState = {
      [getRowId(data[0])]: true,
    };

    const { result } = renderHook(() => {
      const rowSelection = useRowSelection({
        initialRowSelection,
      });
      const tableApi = useTable({
        ...rowSelection.rowSelectionTableOptions,
        getRowId,
        data,
        columns: columnDefinitions,
        state: {
          ...rowSelection.rowSelectionTableState,
        },
      });

      return useSelectedRows(tableApi);
    });

    const selectedRows = result.current;

    expect(selectedRows).toEqual([data[0]]);
  });
});
