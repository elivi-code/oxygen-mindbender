import extractDataFromFilter from './extractDataFromFilter';
function getFilterTitle(filter, filterDefinition, shouldShowOperator = false) {
    const { filterLabel, operatorLabel, valuesLabels } = extractDataFromFilter(filter, filterDefinition);
    return `${filterLabel}${shouldShowOperator && operatorLabel ? ` ${operatorLabel}` : ''} ${valuesLabels?.join(', ') || ''}`;
}
export default getFilterTitle;
