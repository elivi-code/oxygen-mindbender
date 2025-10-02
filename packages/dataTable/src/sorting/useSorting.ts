import {
  getSortedRowModel,
  OnChangeFn,
  SortingState,
  TableOptions,
} from '@tanstack/react-table';

interface UseSorting {
  onSortingChange: OnChangeFn<SortingState>;
  sorting?: SortingState;
  manualSorting?: boolean;
}

type SortingOptions = Pick<
  TableOptions<unknown>,
  'enableSorting' | 'manualSorting' | 'getSortedRowModel' | 'onSortingChange'
>;
interface Result {
  sortingOptions: SortingOptions;
  sortingState: {
    sorting: SortingState;
  };
}

const useSorting = ({
  onSortingChange,
  sorting = [],
  manualSorting = true,
}: UseSorting): Result => {
  return {
    sortingOptions: {
      getSortedRowModel: getSortedRowModel(),
      onSortingChange,
      enableSorting: true,
      manualSorting,
    },
    sortingState: {
      sorting,
    },
  };
};

export { useSorting };
