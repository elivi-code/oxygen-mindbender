import getDateTimeRangeLabel from './getDateTimerangeLabel';
function extractDataFromFilter(filter, filterDefinition) {
    const filterLabel = filterDefinition?.label || filter.label;
    const operatorLabelFromDefinition = filterDefinition?.operators?.find(operator => operator.value === filter.operator.value)?.label;
    const operatorLabel = operatorLabelFromDefinition || filter.operator?.label;
    if (filter.operator?.value === 'dateRange') {
        const valueLabel = getDateTimeRangeLabel({
            filterDefinition,
            filter,
        });
        return {
            filterLabel,
            operatorLabel,
            firstValueLabel: valueLabel,
            valuesLabels: [valueLabel],
            filterValuesLength: 1,
        };
    }
    const filterValuesLength = filter.values?.length || 0;
    const firstValue = filter.values?.[0]?.label || filter.values?.[0]?.value;
    const firstValueLabel = firstValue;
    const valuesLabels = filter.values?.map(value => value.label || value.value);
    return {
        filterLabel,
        operatorLabel,
        firstValueLabel,
        valuesLabels,
        filterValuesLength,
    };
}
export default extractDataFromFilter;
