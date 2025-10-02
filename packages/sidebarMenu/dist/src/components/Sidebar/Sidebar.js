import React from 'react';
import noop from 'lodash.noop';
import { getTestAttributes } from '@8x8/oxygen-config';
import { SidebarProvider } from './SidebarProvider';
import { useSidebar } from '../../hooks/useSidebar';
import { CollapseItem } from '../Menu/CollapseItem';
import { SidebarContainer } from '../../styled/SidebarContainer';
import { Ul } from '../../styled/Menu';
import { createMenuItem } from './createItem';
const SidebarInner = ({ items, collapseLabel, expandLabel, position = 'left', onCollapseChange = noop, testId = 'SIDEBAR', ...props }) => {
    const { isSidebarCollapsed } = useSidebar();
    const menuItems = items
        .filter(item => !item.isFooter)
        .map((elem, index) => createMenuItem(elem, index, testId, position));
    const footerMenuItems = items
        .filter(item => item.isFooter)
        .map((elem, index) => createMenuItem(elem, index, testId, position));
    React.useEffect(() => {
        onCollapseChange(isSidebarCollapsed);
    }, [isSidebarCollapsed, onCollapseChange]);
    return (React.createElement(SidebarContainer, { collapsed: isSidebarCollapsed, position: position, ...getTestAttributes(testId), ...props },
        React.createElement(Ul, { ...getTestAttributes(`${testId}_TOP_MENU`) }, menuItems),
        collapseLabel && expandLabel ? (React.createElement(CollapseItem, { testId: `${testId}_COLLAPSE`, label: isSidebarCollapsed ? expandLabel : collapseLabel, position: position })) : null,
        footerMenuItems.length > 0 ? (React.createElement(Ul, { footer: true, ...getTestAttributes(`${testId}_FOOTER_MENU`) }, footerMenuItems)) : null));
};
/** Renders a sidebar from a configuration object */
export const Sidebar = ({ initialCollapsedState = false, linkProp = 'to', linkComponent, ...props }) => {
    return (React.createElement(SidebarProvider, { initialCollapsedState: initialCollapsedState, linkComponent: linkComponent, linkProp: linkProp },
        React.createElement(SidebarInner, { ...props })));
};
