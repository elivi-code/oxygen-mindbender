import React from 'react';
import { FilterType, GroupFilterDefinitionType } from '../../../../types';
interface SubFilterActionsInterface {
    internalFilter: FilterType;
    filterDefinition: GroupFilterDefinitionType;
    internalOnChange(newFilter: FilterType, applyExternal?: boolean): void;
    testId: string;
    popoverPortalRef?: React.RefObject<HTMLElement>;
}
declare function SubFilterActions({ internalFilter, filterDefinition, internalOnChange, testId, popoverPortalRef, }: SubFilterActionsInterface): React.JSX.Element;
export default SubFilterActions;
//# sourceMappingURL=SubFilterActions.d.ts.map