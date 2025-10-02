import React from 'react';
import styled from 'styled-components';
import { DoubleArrowLeftIcon, DoubleArrowRightIcon } from '@8x8/oxygen-icon';
import { useSidebar } from '../../hooks/useSidebar';
import { MenuItem } from './MenuItem';

import { type MenuItemProps } from '../../types';

const Separator = styled.div`
  border-top: 1px solid ${({ theme }) => theme.ui01};
`;

/** Renders the collapse item */
export const CollapseItem: React.FC<MenuItemProps> = ({
  label,
  position,
  ...rest
}) => {
  const { isSidebarCollapsed, setSidebarCollapsed } = useSidebar();

  const arrowDirection =
    (isSidebarCollapsed && position === 'left') ||
    (!isSidebarCollapsed && position === 'right');

  const icon = arrowDirection ? (
    <DoubleArrowRightIcon data-test-id="DOUBLE_ARROW_RIGHT_ICON" />
  ) : (
    <DoubleArrowLeftIcon data-test-id="DOUBLE_ARROW_LEFT_ICON" />
  );
  const onTrigger = () => setSidebarCollapsed(isCollapsed => !isCollapsed);

  return (
    <Separator {...rest}>
      <MenuItem
        as="div"
        label={label}
        icon={icon}
        onTrigger={onTrigger}
        testId={rest.testId}
        position={position}
      />
    </Separator>
  );
};
