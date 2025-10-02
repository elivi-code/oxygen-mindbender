import React, { useContext } from 'react';
import styled from 'styled-components';
import Badge, { badgeSize } from '@8x8/oxygen-badge';
import { SidebarContext } from '../../Sidebar/SidebarProvider';
const BadgeWrapper = styled.div `
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
const StyledMenuBadge = styled(Badge) `
  position: absolute;
  top: -0.14rem;
  right: -0.14rem;
`;
function MenuBadge({ hasBadge, badgeChildren, isSubMenuItem }) {
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
        return React.createElement(StyledMenuBadge, { ...badgeProps }, badgeChildren);
    }
    return (React.createElement(BadgeWrapper, { "$isSubMenuItem": isSubMenuItem, "data-test-id": "menu_badge_wrapper" },
        React.createElement(Badge, { ...badgeProps }, badgeChildren)));
}
export { MenuBadge };
