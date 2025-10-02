import React from 'react';
import { FilterListInterface, FilterType, FilterDefinitionType, Translations, GroupFilterDefinitionType } from '../../types';
interface AddNewFilterInterface extends Pick<FilterListInterface, 'popoverPortalRef'> {
    internalCurrentFilters: (FilterType | FilterDefinitionType)[];
    filterDefinitions?: (FilterDefinitionType | GroupFilterDefinitionType)[];
    onAddFilter(newFilter: FilterDefinitionType | GroupFilterDefinitionType): void;
    translations?: Partial<Translations>;
    testId: string;
}
declare function AddNewFilter({ internalCurrentFilters, filterDefinitions, onAddFilter, translations, testId, popoverPortalRef, }: AddNewFilterInterface): React.JSX.Element;
export default AddNewFilter;
//# sourceMappingURL=AddNewFilter.d.ts.map