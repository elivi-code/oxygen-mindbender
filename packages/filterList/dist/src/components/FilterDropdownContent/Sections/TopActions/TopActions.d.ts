import React from 'react';
import { FilterType, FilterDefinitionType, GroupFilterDefinitionType } from '../../../../types';
interface TopActionsInterface {
    internalFilter: FilterType;
    filterDefinition: FilterDefinitionType | GroupFilterDefinitionType;
    internalOnChange(newFilter: FilterType, applyExternal?: boolean): void;
    testId: string;
    popoverPortalRef?: React.RefObject<HTMLElement>;
}
declare function TopActions({ internalFilter, filterDefinition, internalOnChange, testId, popoverPortalRef, }: TopActionsInterface): React.JSX.Element;
export default TopActions;
//# sourceMappingURL=TopActions.d.ts.map