import { getSortedRowModel, } from '@tanstack/react-table';
const useSorting = ({ onSortingChange, sorting = [], manualSorting = true, }) => {
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
