import { useMemo } from 'react';
var SortDirections;
(function (SortDirections) {
    SortDirections["asc"] = "ASC";
    SortDirections["desc"] = "DESC";
})(SortDirections || (SortDirections = {}));
const useSortedColumns = (tableApi) => {
    const sortingState = tableApi.getState().sorting;
    return useMemo(() => sortingState.reduce((acc, curr) => {
        acc[curr.id] = curr.desc ? SortDirections.desc : SortDirections.asc;
        return acc;
    }, {}), [sortingState]);
};
export { useSortedColumns, SortDirections };
