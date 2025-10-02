import React, { Children, useRef, useEffect } from 'react';
import { FloatingTree } from '@floating-ui/react';
import { FloatingUIWrapper } from './components/FloatingUIWrapper';
import { Header } from '../../styled/SubMenu';
import { scrollToRef } from './utils';
export const MenuItemRendererCollapsed = ({ label, icon, children, isActive = false, onTrigger, link, testId, position, hasBadge, badgeChildren, badgeAriaLabel, }) => {
    const hasChildren = Children.count(children) !== 0;
    const isActiveProp = hasChildren
        ? Children.map(children, item => item?.props.isActive)?.some(Boolean)
        : isActive;
    const ref = useRef(null);
    useEffect(() => {
        if (isActiveProp) {
            scrollToRef(ref);
        }
    }, [isActiveProp]);
    // FloatingUIWrapper should handle all the events
    return (React.createElement(FloatingTree, null,
        React.createElement(FloatingUIWrapper, { ref: ref, icon: icon, onTrigger: onTrigger, isActive: isActiveProp, header: React.createElement(Header, null, label), link: link, testId: testId, position: position, hasBadge: hasBadge, badgeChildren: badgeChildren, badgeAriaLabel: badgeAriaLabel, menuItemLabel: label }, children)));
};
