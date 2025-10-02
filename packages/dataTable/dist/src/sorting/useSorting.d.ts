import { OnChangeFn, SortingState, TableOptions } from '@tanstack/react-table';
interface UseSorting {
    onSortingChange: OnChangeFn<SortingState>;
    sorting?: SortingState;
    manualSorting?: boolean;
}
type SortingOptions = Pick<TableOptions<unknown>, 'enableSorting' | 'manualSorting' | 'getSortedRowModel' | 'onSortingChange'>;
interface Result {
    sortingOptions: SortingOptions;
    sortingState: {
        sorting: SortingState;
    };
}
declare const useSorting: ({ onSortingChange, sorting, manualSorting, }: UseSorting) => Result;
export { useSorting };
//# sourceMappingURL=useSorting.d.ts.map