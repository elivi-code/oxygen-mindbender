import format from 'date-fns/format';
import { convertDateTimeRangeToDates } from './dateTimeRangeUtils';
function getDateTimeRangeLabel({ filterDefinition, filter, }) {
    if (!filterDefinition) {
        return filter?.values?.[0]?.label || '';
    }
    const predefinedRanges = filterDefinition?.dateTimeRangeProps?.predefinedRanges || [];
    const dateTimeRange = filter?.values?.[0]?.dateRange || {};
    const dateFormat = filterDefinition?.dateTimeRangeProps?.dateFormat || 'yyyy/MM/dd';
    const timeFormat = filterDefinition?.dateTimeRangeProps?.timeFormat || 'HH:mm:ss';
    const { id, value } = filter?.values?.[0]?.predefinedRange || {};
    const { startDate, endDate } = convertDateTimeRangeToDates(dateTimeRange);
    const currentRange = predefinedRanges.find(range => range.id === id);
    if (currentRange) {
        const { displayName, selectedDisplayName } = currentRange;
        if (selectedDisplayName) {
            const displayValue = value || 'X';
            const [firstLabel, secondLabel] = selectedDisplayName;
            return `${firstLabel} ${displayValue} ${secondLabel}`;
        }
        if (displayName) {
            return displayName;
        }
    }
    if (startDate && endDate) {
        return `${format(startDate, `${dateFormat} ${timeFormat}`)} - ${format(endDate, `${dateFormat} ${timeFormat}`)}`;
    }
    return '';
}
export default getDateTimeRangeLabel;
