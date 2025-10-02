import React, { useCallback, useEffect } from 'react';
import { produce } from 'immer';
import { DateTimeRangePicker } from '@8x8/oxygen-date-time-range-selector';
import { convertDateTimeRangeToDates, convertDateTimeRangeToString, } from '../../../../../utils/dateTimeRangeUtils';
import getDateTimeRangeLabel from '../../../../../utils/getDateTimerangeLabel';
const CUSTOM_RANGE_ID = 'CUSTOM';
function DateTimeRangeSelector({ internalFilter, filterDefinition, filterDefault, internalOnChange, testId, }) {
    const currentValue = internalFilter.values?.[0];
    const applyFilterDefault = useCallback((defaultValue) => {
        const updatedFilter = produce(internalFilter, draft => {
            draft.values = [defaultValue];
        });
        internalOnChange(updatedFilter);
    }, [internalFilter, internalOnChange]);
    const createFirstPredefinedRangeValue = useCallback(() => {
        const defaultPredefinedRange = filterDefinition.dateTimeRangeProps?.predefinedRanges?.[0];
        if (!defaultPredefinedRange)
            return null;
        const calculatedDateRange = defaultPredefinedRange.dateTimeRange?.();
        return {
            predefinedRange: defaultPredefinedRange,
            dateRange: convertDateTimeRangeToString(calculatedDateRange),
            label: getDateTimeRangeLabel({
                filterDefinition,
                filter: {
                    ...internalFilter,
                    values: [
                        {
                            predefinedRange: defaultPredefinedRange,
                            dateRange: convertDateTimeRangeToString(calculatedDateRange),
                        },
                    ],
                },
            }),
        };
    }, [filterDefinition, internalFilter]);
    const applyFirstPredefinedRange = useCallback(() => {
        const firstRangeValue = createFirstPredefinedRangeValue();
        if (!firstRangeValue)
            return;
        const updatedFilter = produce(internalFilter, draft => {
            draft.values = [firstRangeValue];
        });
        internalOnChange(updatedFilter);
    }, [createFirstPredefinedRangeValue, internalFilter, internalOnChange]);
    // For now only accept defaults that have a predefined date defined. Small note: custom ranges have a CUSTOM id
    const isValidDefaultPredefined = useCallback((defaultValue) => {
        if (!defaultValue.predefinedRange?.id)
            return false;
        const predefinedRanges = filterDefinition.dateTimeRangeProps?.predefinedRanges || [];
        const defaultId = defaultValue.predefinedRange.id;
        return (defaultId === CUSTOM_RANGE_ID ||
            predefinedRanges.some(range => range.id === defaultId));
    }, [filterDefinition]);
    useEffect(() => {
        if (internalFilter.values?.length)
            return;
        const defaultValue = filterDefault?.values?.[0];
        if (defaultValue && isValidDefaultPredefined(defaultValue)) {
            applyFilterDefault(defaultValue);
            return;
        }
        applyFirstPredefinedRange();
    }, [
        internalFilter,
        filterDefault,
        isValidDefaultPredefined,
        applyFilterDefault,
        applyFirstPredefinedRange,
    ]);
    const onRangeChange = useCallback((newVal) => {
        const updatedInteralFilter = produce(internalFilter, draft => {
            draft.values = [
                {
                    ...newVal,
                    dateRange: convertDateTimeRangeToString(newVal.dateRange),
                    predefinedRange: newVal.predefinedRange || { id: CUSTOM_RANGE_ID },
                    label: getDateTimeRangeLabel({
                        filterDefinition,
                        filter: {
                            ...draft,
                            values: [newVal],
                        },
                    }),
                },
            ];
        });
        internalOnChange(updatedInteralFilter);
    }, [internalOnChange, internalFilter, filterDefinition]);
    return (React.createElement(DateTimeRangePicker, { ...filterDefinition.dateTimeRangeProps, setOuterState: onRangeChange, 
        // convert to dates
        dateTimeRange: convertDateTimeRangeToDates(currentValue?.dateRange), predefinedRange: currentValue?.predefinedRange ||
            filterDefinition.dateTimeRangeProps?.predefinedRanges?.[0] || {
            id: CUSTOM_RANGE_ID,
        }, testId: testId }));
}
export default DateTimeRangeSelector;
