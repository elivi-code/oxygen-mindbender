import React from 'react';
import { PopoverMenuProps } from '@8x8/oxygen-popover';
import { ActionProps } from './types';
export interface ActionsProps extends Omit<PopoverMenuProps, 'onUpdate' | 'items'> {
    /**
     * An array of actions to render in the dropdown
     */
    actions: ActionProps[];
    portalTargetRef?: PopoverMenuProps['portalTargetRef'];
    testId?: string;
}
/**
 * A react component that renders a dropdown menu with actions
 */
declare const ActionsDropdown: React.FC<ActionsProps>;
export { ActionsDropdown };
//# sourceMappingURL=ActionsDropdown.d.ts.map