import React, { useEffect, useRef, forwardRef } from 'react';
import { getTestAttributes } from '@8x8/oxygen-config';
import { MenuItemProps } from '../../types';
import { Li } from '../../styled/SubMenu';
import { Button } from '../../styled/Button';

import { getCustomButtonOverrideProps, scrollToRef } from './utils';
import { useSidebar } from '../../hooks/useSidebar';
import { MenuBadge } from './components/Badge';
import { getMenuAriaLabel } from './menuAriaLabelUtils';

/**
 * Renders a sub menu item
 */
export const SubMenuItem = forwardRef<
  HTMLElement,
  MenuItemProps & React.HTMLAttributes<HTMLElement>
>(
  (
    {
      label,
      isActive = false,
      onTrigger,
      link,
      testId,
      hasBadge,
      badgeChildren,
      badgeAriaLabel,
      ...props
    },
    forwardedRef,
  ) => {
    const { linkComponent, linkProp } = useSidebar();
    const ref = useRef<HTMLElement | null>(null);

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

    return (
      <Li
        {...getTestAttributes(`${testId}_ITEM_${label.replaceAll(' ', '-')}`)}
      >
        <Button
          {...customButtonProps}
          aria-label={ariaLabel}
          ref={(node: HTMLElement | null) => {
            if (forwardedRef) {
              if (typeof forwardedRef === 'function') {
                forwardedRef(node);
              } else {
                /* eslint-disable no-param-reassign */
                forwardedRef.current = node;
              }
            }
            ref.current = node;
          }}
          {...props}
          $isActive={isActive}
          onClick={onTrigger}
          onAuxClick={onTrigger}
          $subItem
        >
          {label}
          <MenuBadge
            badgeChildren={badgeChildren}
            hasBadge={hasBadge}
            isSubMenuItem
          />
        </Button>
      </Li>
    );
  },
);
SubMenuItem.displayName = 'SubMenuItem';
