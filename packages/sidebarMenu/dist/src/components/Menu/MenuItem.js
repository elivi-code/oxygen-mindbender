import React, { useContext } from 'react';
import { getTestAttributes } from '@8x8/oxygen-config';
import { SidebarContext } from '../Sidebar/SidebarProvider';
import { Li } from '../../styled/Menu';
import { MenuItemRenderer } from './MenuItemRenderer';
import { MenuItemRendererCollapsed } from './MenuItemRendererCollapsed';
import { SubMenuItem } from './SubMenuItem';
/** Renders a menu with submenus */
export const MenuItem = ({ as, ...props }) => {
    const MenuRenderer = useContext(SidebarContext).isSidebarCollapsed
        ? MenuItemRendererCollapsed
        : MenuItemRenderer;
    React.Children.forEach(props.children, child => {
        if (child?.type !== SubMenuItem) {
            throw new Error('MenuItem: Only childs of type SubMenuItem allowed!');
        }
    });
    return (React.createElement(Li, { as: as, ...getTestAttributes(`${props.testId}_ITEM_${props.label.replaceAll(' ', '-')}`) },
        React.createElement(MenuRenderer, { ...props })));
};
