import React, { Children, useEffect, useState, useRef } from 'react';
import { Button } from '../../styled/Button';
import { IconContainer } from './components/IconContainer';
import { Arrow } from './components/Arrow';
import { MenuItemLabel } from '../../styled/Menu';
import { Ul } from '../../styled/SubMenu';
import { useSidebar } from '../../hooks/useSidebar';
import { getCustomButtonOverrideProps, scrollToRef } from './utils';
import { MenuBadge } from './components/Badge';
import { getMenuAriaLabel } from './menuAriaLabelUtils';
export const MenuItemRenderer = ({ label, icon, isActive = false, onTrigger, link, hasBadge, badgeChildren, badgeAriaLabel, children, }) => {
    const [isExpanded, setExpanded] = useState(false);
    const { linkComponent, linkProp } = useSidebar();
    const hasChildren = Children.count(children) !== 0;
    const isActiveProp = hasChildren
        ? React.Children.map(children, item => item?.props.isActive)?.some(Boolean)
        : isActive;
    const itemAction = hasChildren
        ? () => setExpanded(expanded => !expanded)
        : (event) => onTrigger?.(event);
    // Custom rule to now show parent menu item as active when expanded and children are active
    const showActiveMenuItem = hasChildren
        ? isActiveProp && !isExpanded
        : isActiveProp;
    useEffect(() => {
        if (isActiveProp) {
            setExpanded(true);
        }
    }, [isActiveProp]);
    const ref = useRef(null);
    useEffect(() => {
        // only when no children. otherwise the active child is scrolled to
        if (!hasChildren && isActive) {
            scrollToRef(ref);
        }
    }, [isActive, hasChildren]);
    const customButtonProps = getCustomButtonOverrideProps(!hasChildren, {
        linkComponent,
        link,
        linkProp,
    });
    const ariaLabel = getMenuAriaLabel({
        menuItemLabel: label,
        badgeAriaLabel,
        hasBadge,
    });
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, { ...customButtonProps, "aria-label": ariaLabel, ref: ref, "$isActive": showActiveMenuItem, onClick: itemAction, onAuxClick: itemAction },
            React.createElement(IconContainer, { icon: icon }),
            React.createElement(MenuItemLabel, null, label),
            React.createElement(MenuBadge, { badgeChildren: hasChildren ? '' : badgeChildren, hasBadge: hasBadge }),
            hasChildren && React.createElement(Arrow, { isUp: isExpanded })),
        hasChildren && isExpanded && React.createElement(Ul, { "aria-expanded": true }, children)));
};
