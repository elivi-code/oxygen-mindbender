import React from 'react';
import pick from 'lodash.pick';
import { MenuItem } from '../Menu/MenuItem';
import { SubMenuItem } from '../Menu/SubMenuItem';
import type { SidebarItemProps, SidebarPosition } from '../../types';

const createSubMenuItem = (
  subItem: SidebarItemProps,
  index: number,
  testId: string,
) => {
  return (
    <SubMenuItem
      key={index}
      testId={testId}
      {...pick(subItem, [
        'label',
        'isActive',
        'onTrigger',
        'link',
        'hasBadge',
        'badgeChildren',
        'badgeAriaLabel',
      ])}
    />
  );
};

export const createMenuItem = (
  mainItem: SidebarItemProps,
  index: number,
  testId: string,
  position: SidebarPosition,
) => {
  const hasBadgeOnSubItems = mainItem.subItems?.some(
    subItem => subItem.hasBadge,
  );

  return (
    <MenuItem
      key={index}
      testId={testId}
      position={position}
      {...pick(mainItem, [
        'label',
        'icon',
        'isActive',
        'onTrigger',
        'link',
        'badgeChildren',
        'badgeAriaLabel',
      ])}
      hasBadge={hasBadgeOnSubItems || mainItem.hasBadge}
    >
      {mainItem.subItems?.map((item, idx) =>
        createSubMenuItem(item, idx, testId),
      )}
    </MenuItem>
  );
};
