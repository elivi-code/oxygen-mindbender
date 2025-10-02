import React, { useEffect, useRef, forwardRef } from 'react';
import { getTestAttributes } from '@8x8/oxygen-config';
import { Li } from '../../styled/SubMenu';
import { Button } from '../../styled/Button';
import { getCustomButtonOverrideProps, scrollToRef } from './utils';
import { useSidebar } from '../../hooks/useSidebar';
import { MenuBadge } from './components/Badge';
import { getMenuAriaLabel } from './menuAriaLabelUtils';
/**
 * Renders a sub menu item
 */
export const SubMenuItem = forwardRef(({ label, isActive = false, onTrigger, link, testId, hasBadge, badgeChildren, badgeAriaLabel, ...props }, forwardedRef) => {
    const { linkComponent, linkProp } = useSidebar();
    const ref = useRef(null);
    useEffect(() => {
        if (isActive) {
            scrollToRef(ref);
        }
    }, [isActive]);
    const customButtonProps = getCustomButtonOverrideProps(true, {
        linkComponent,
        link,
        linkProp,
    });
    const ariaLabel = getMenuAriaLabel({
        menuItemLabel: label,
        badgeAriaLabel,
        hasBadge,
    });
    return (React.createElement(Li, { ...getTestAttributes(`${testId}_ITEM_${label.replaceAll(' ', '-')}`) },
        React.createElement(Button, { ...customButtonProps, "aria-label": ariaLabel, ref: (node) => {
                if (forwardedRef) {
                    if (typeof forwardedRef === 'function') {
                        forwardedRef(node);
                    }
                    else {
                        /* eslint-disable no-param-reassign */
                        forwardedRef.current = node;
                    }
                }
                ref.current = node;
            }, ...props, "$isActive": isActive, onClick: onTrigger, onAuxClick: onTrigger, "$subItem": true },
            label,
            React.createElement(MenuBadge, { badgeChildren: badgeChildren, hasBadge: hasBadge, isSubMenuItem: true }))));
});
SubMenuItem.displayName = 'SubMenuItem';
