import React from 'react';
import { FilterValueObjectType, Translations } from '../../../../../types';
interface SelectionFilterInterface {
    options: FilterValueObjectType[];
    selectedValues: FilterValueObjectType[];
    handleSelection: (option: FilterValueObjectType, isChecked?: boolean) => void;
    isMultiSelection: boolean;
    translations: Partial<Translations>;
    testId: string;
}
declare function SelectionList({ options, selectedValues, handleSelection, isMultiSelection, translations, testId, }: SelectionFilterInterface): React.JSX.Element;
export default SelectionList;
//# sourceMappingURL=SelectionList.d.ts.map