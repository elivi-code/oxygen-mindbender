import React, { useContext } from 'react';
import styled from 'styled-components';

import Badge, { badgeSize } from '@8x8/oxygen-badge';

import { SidebarContext } from '../../Sidebar/SidebarProvider';
import type { BadgeProps } from '../../../types';

interface MenuBadgeProps extends BadgeProps {
  /** whether the badge is for sub menu */
  isSubMenuItem?: boolean;
}

const BadgeWrapper = styled.div<{ $isSubMenuItem?: boolean }>`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  margin-left: auto;
  height: 1.25rem;

  /* keep padding in sync with MenuItemLabel */
  ${({ $isSubMenuItem }) => ($isSubMenuItem ? '' : 'padding: 6px 6px 6px 0;')}

  & + * {
    margin-left: initial;
    padding-left: 2px;
  }

  /* remove padding-right if there is followed by a sibling (collapse/expand icon) */
  &:has(+ *) {
    padding-right: 0;
  }
`;

const StyledMenuBadge = styled(Badge)`
  position: absolute;
  top: -0.14rem;
  right: -0.14rem;
`;

function MenuBadge({ hasBadge, badgeChildren, isSubMenuItem }: MenuBadgeProps) {
  const { isSidebarCollapsed } = useContext(SidebarContext);

  if (!hasBadge) {
    return null;
  }

  const badgeSizeValue = badgeChildren ? badgeSize.medium : badgeSize.small;

  const badgeProps = {
    size: badgeSizeValue,
    // badge is always hidden from screen readers since accessibility is handled by parent button
    'aria-hidden': 'true',
  };

  if (isSidebarCollapsed && !isSubMenuItem) {
    return <StyledMenuBadge {...badgeProps}>{badgeChildren}</StyledMenuBadge>;
  }

  return (
    <BadgeWrapper
      $isSubMenuItem={isSubMenuItem}
      data-test-id="menu_badge_wrapper"
    >
      <Badge {...badgeProps}>{badgeChildren}</Badge>
    </BadgeWrapper>
  );
}

export { MenuBadge };
