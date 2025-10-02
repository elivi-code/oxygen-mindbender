import React from 'react';
import styled from 'styled-components';
import { DoubleArrowLeftIcon, DoubleArrowRightIcon } from '@8x8/oxygen-icon';
import { useSidebar } from '../../hooks/useSidebar';
import { MenuItem } from './MenuItem';
const Separator = styled.div `
  border-top: 1px solid ${({ theme }) => theme.ui01};
`;
/** Renders the collapse item */
export const CollapseItem = ({ label, position, ...rest }) => {
    const { isSidebarCollapsed, setSidebarCollapsed } = useSidebar();
    const arrowDirection = (isSidebarCollapsed && position === 'left') ||
        (!isSidebarCollapsed && position === 'right');
    const icon = arrowDirection ? (React.createElement(DoubleArrowRightIcon, { "data-test-id": "DOUBLE_ARROW_RIGHT_ICON" })) : (React.createElement(DoubleArrowLeftIcon, { "data-test-id": "DOUBLE_ARROW_LEFT_ICON" }));
    const onTrigger = () => setSidebarCollapsed(isCollapsed => !isCollapsed);
    return (React.createElement(Separator, { ...rest },
        React.createElement(MenuItem, { as: "div", label: label, icon: icon, onTrigger: onTrigger, testId: rest.testId, position: position })));
};
