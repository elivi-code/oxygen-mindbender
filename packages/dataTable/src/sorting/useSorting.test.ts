import { renderHook } from '@testing-library/react-hooks';
import { SortingState } from '@tanstack/react-table';
import { useSorting } from './useSorting';

describe('useSorting', () => {
  it('should return correct values', () => {
    const manualSorting = false;
    const onSortingChange = jest.fn();
    const sortingState: SortingState = [{ id: 'test', desc: false }];

    const { result } = renderHook(() =>
      useSorting({
        onSortingChange,
        sorting: sortingState,
        manualSorting,
      }),
    );

    expect(result.current).toMatchObject({
      sortingOptions: {
        enableSorting: true,
        getSortedRowModel: expect.any(Function),
        manualSorting,
        onSortingChange,
      },
      sortingState: {
        sorting: sortingState,
      },
    });
  });

  it('should return correct values with default values', () => {
    const onSortingChange = jest.fn();

    const { result } = renderHook(() =>
      useSorting({
        onSortingChange,
      }),
    );

    expect(result.current).toMatchObject({
      sortingOptions: {
        enableSorting: true,
        getSortedRowModel: expect.any(Function),
        manualSorting: true,
        onSortingChange,
      },
      sortingState: {
        sorting: [],
      },
    });
  });
});
