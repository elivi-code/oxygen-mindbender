import React from 'react';
import { FilterType } from '../../../../../types';
interface InputFilterInterface {
    internalFilter: FilterType;
    internalOnChange(newFilter: FilterType, applyExternal?: boolean): void;
    testId: string;
}
declare function InputFilter({ internalFilter, internalOnChange, testId, }: InputFilterInterface): React.JSX.Element;
export default InputFilter;
//# sourceMappingURL=InputFilter.d.ts.map