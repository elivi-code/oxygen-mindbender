import { act, renderHook } from '@testing-library/react-hooks';
import { RowSelectionState } from '@tanstack/react-table';
import { useRowSelection } from '../useRowSelection';

describe('useRowSelection', () => {
  it('should set default values on first call', () => {
    const { result } = renderHook(() => useRowSelection());

    const expected = {
      rowSelection: {},
      rowSelectionTableOptions: {
        enableRowSelection: true,
        manualPagination: true,
      },
      rowSelectionTableState: {
        rowSelection: {},
      },
    };

    const { rowSelection, rowSelectionTableOptions, rowSelectionTableState } =
      result.current;

    expect(rowSelection).toEqual(expected.rowSelection);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { onRowSelectionChange, ...restRowSelectionTableOptions } =
      rowSelectionTableOptions;

    expect(restRowSelectionTableOptions).toEqual(
      expected.rowSelectionTableOptions,
    );

    expect(rowSelectionTableState).toEqual(expected.rowSelectionTableState);
  });

  it('should set rowSelectionTableState.rowSelection to initialRowSelection if provided', () => {
    const initialRowSelection: RowSelectionState = {
      rowId1: true,
    };

    const { result } = renderHook(() =>
      useRowSelection({ initialRowSelection }),
    );

    const { rowSelection } = result.current;

    expect(rowSelection).toEqual(initialRowSelection);

    const { rowSelectionTableState } = result.current;

    expect(rowSelectionTableState.rowSelection).toEqual(initialRowSelection);
  });

  it('should set rowSelectionTableState.rowSelection to provided value on onRowSelectionChange()', () => {
    const { result } = renderHook(() => useRowSelection());

    const { onRowSelectionChange } = result.current.rowSelectionTableOptions;
    const newSelection: RowSelectionState = {
      rowId1: true,
    };

    act(() => onRowSelectionChange(newSelection));

    const { rowSelection } = result.current;

    expect(rowSelection).toEqual(newSelection);

    const { rowSelectionTableState } = result.current;

    expect(rowSelectionTableState.rowSelection).toEqual(newSelection);
  });
});
