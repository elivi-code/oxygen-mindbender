import React from 'react';
import { ActionProps, ActionTypes } from '../actionsDropdown/types';
interface RowActionsProps {
    isActive: boolean;
}
export declare const StyledRowActionsPaddingRight: number;
declare const StyledRowActions: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, RowActionsProps, never>;
export interface Props {
    actions?: ActionProps[];
    show: boolean;
    rowActionsPortalTarget?: React.RefObject<HTMLDivElement>;
    isActive: boolean;
    testId?: string;
}
declare const RowActions: React.FC<Props>;
export { RowActions, StyledRowActions, ActionProps, ActionTypes };
//# sourceMappingURL=RowActions.d.ts.map