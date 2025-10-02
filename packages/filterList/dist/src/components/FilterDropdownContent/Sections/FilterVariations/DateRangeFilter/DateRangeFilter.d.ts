import React from 'react';
import { FilterType, FilterDefinitionType } from '../../../../../types';
interface DateTimeRangeSelectorInterface {
    internalFilter: FilterType;
    filterDefinition: FilterDefinitionType;
    filterDefault?: FilterType;
    internalOnChange(newFilter: FilterType, applyExternal?: boolean): void;
    testId: string;
}
declare function DateTimeRangeSelector({ internalFilter, filterDefinition, filterDefault, internalOnChange, testId, }: DateTimeRangeSelectorInterface): React.JSX.Element;
export default DateTimeRangeSelector;
//# sourceMappingURL=DateRangeFilter.d.ts.map