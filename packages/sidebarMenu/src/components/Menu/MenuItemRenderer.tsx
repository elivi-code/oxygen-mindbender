import React, { Children, useEffect, useState, useRef } from 'react';

import { Button } from '../../styled/Button';
import type { MenuProps } from '../../types';
import { IconContainer } from './components/IconContainer';
import { Arrow } from './components/Arrow';

import { MenuItemLabel } from '../../styled/Menu';
import { Ul } from '../../styled/SubMenu';

import { useSidebar } from '../../hooks/useSidebar';
import { getCustomButtonOverrideProps, scrollToRef } from './utils';
import { MenuBadge } from './components/Badge';
import { getMenuAriaLabel } from './menuAriaLabelUtils';

export const MenuItemRenderer: React.FC<MenuProps> = ({
  label,
  icon,
  isActive = false,
  onTrigger,
  link,
  hasBadge,
  badgeChildren,
  badgeAriaLabel,
  children,
}) => {
  const [isExpanded, setExpanded] = useState(false);
  const { linkComponent, linkProp } = useSidebar();
  const hasChildren = Children.count(children) !== 0;
  const isActiveProp = hasChildren
    ? React.Children.map(children, item => item?.props.isActive)?.some(Boolean)
    : isActive;
  const itemAction = hasChildren
    ? () => setExpanded(expanded => !expanded)
    : (event: React.MouseEvent<HTMLElement>) => onTrigger?.(event);
  // Custom rule to now show parent menu item as active when expanded and children are active
  const showActiveMenuItem = hasChildren
    ? isActiveProp && !isExpanded
    : isActiveProp;

  useEffect(() => {
    if (isActiveProp) {
      setExpanded(true);
    }
  }, [isActiveProp]);

  const ref = useRef<HTMLButtonElement | null>(null);

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

  return (
    <>
      <Button
        {...customButtonProps}
        aria-label={ariaLabel}
        ref={ref}
        $isActive={showActiveMenuItem}
        onClick={itemAction}
        onAuxClick={itemAction}
      >
        <IconContainer icon={icon} />
        <MenuItemLabel>{label}</MenuItemLabel>
        <MenuBadge
          badgeChildren={hasChildren ? '' : badgeChildren}
          hasBadge={hasBadge}
        />
        {hasChildren && <Arrow isUp={isExpanded} />}
      </Button>
      {hasChildren && isExpanded && <Ul aria-expanded>{children}</Ul>}
    </>
  );
};
