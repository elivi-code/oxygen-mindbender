function convertDateTimeRangeToDates(dateTimeRange) {
    if (!dateTimeRange || (!dateTimeRange.startDate && !dateTimeRange.endDate)) {
        return {};
    }
    let startDate;
    let endDate;
    try {
        startDate =
            typeof dateTimeRange.startDate === 'string'
                ? JSON.parse(dateTimeRange.startDate)
                : dateTimeRange.startDate;
    }
    catch (e) {
        startDate = dateTimeRange.startDate;
    }
    try {
        endDate =
            typeof dateTimeRange.endDate === 'string'
                ? JSON.parse(dateTimeRange.endDate)
                : dateTimeRange.endDate;
    }
    catch (e) {
        endDate = dateTimeRange.endDate;
    }
    return (dateTimeRange && {
        startDate: new Date(startDate),
        endDate: new Date(endDate),
    });
}
function convertDateTimeRangeToString(dateTimeRange) {
    return (dateTimeRange && {
        startDate: JSON.stringify(dateTimeRange.startDate),
        endDate: JSON.stringify(dateTimeRange.endDate),
    });
}
export { convertDateTimeRangeToDates, convertDateTimeRangeToString };
