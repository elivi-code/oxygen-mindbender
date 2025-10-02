import React, { MouseEvent, PropsWithChildren } from 'react';
import { ActionTarget } from '../constants/targets';
export interface ActionProps {
    action?: ((event: MouseEvent) => void) | string;
    actionTarget?: ActionTarget;
    isDisabled?: boolean;
    shouldWrapText?: boolean;
    testId?: string;
}
declare const Action: React.FC<PropsWithChildren<ActionProps>>;
export default Action;
//# sourceMappingURL=Action.d.ts.map