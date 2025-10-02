import React, { ReactNode } from 'react';
import { MenuProps } from '../../../types';
interface FloatingUIWrapperProps extends Pick<MenuProps, 'children' | 'icon' | 'onTrigger' | 'isActive' | 'link' | 'testId' | 'position' | 'hasBadge' | 'badgeChildren' | 'badgeAriaLabel'> {
    /** Popover content can have a header */
    header?: ReactNode;
    /** the label of the parent menu item (for contextual aria-label generation) */
    menuItemLabel: string;
}
/**
 * Renders:
 * - a button with an icon
 * - on hovering over the button, shows a popover on the right, showing children
 */
export declare const FloatingUIWrapper: React.ForwardRefExoticComponent<FloatingUIWrapperProps & React.RefAttributes<HTMLElement>>;
export {};
//# sourceMappingURL=FloatingUIWrapper.d.ts.map