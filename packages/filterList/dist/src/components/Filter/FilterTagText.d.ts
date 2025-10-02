import React from 'react';
import { FilterDefinitionType, FilterType } from '../../types';
interface FilterTagTextInterface {
    filter: FilterType;
    filterDefinition?: FilterDefinitionType;
    showOperatorInFilterButton?: boolean;
    shouldShowOperator?: boolean;
}
declare function FilterTagText({ filter, filterDefinition, showOperatorInFilterButton, shouldShowOperator, }: FilterTagTextInterface): React.JSX.Element;
export default FilterTagText;
//# sourceMappingURL=FilterTagText.d.ts.map