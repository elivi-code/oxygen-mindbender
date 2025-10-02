function isFilterActive(filter) {
    return !!filter.values?.length;
}
function getActiveFiltersNumber(filters) {
    return filters.filter(isFilterActive).length;
}
export { isFilterActive, getActiveFiltersNumber };
