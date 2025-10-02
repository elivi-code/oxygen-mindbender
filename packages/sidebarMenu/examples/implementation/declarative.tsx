import {
  UsersIcon,
  GearIcon,
  ArchiveIcon,
  VersionIcon,
} from '@8x8/oxygen-icon';
import { action } from 'storybook/actions';

import React, { useState } from 'react';
import {
  SidebarContainer,
  MenuList,
  MenuItem,
  SubMenuItem,
  CollapseItem,
  useSidebar,
} from '@8x8/oxygen-sidebar-menu';

interface Props {
  collapseLabel: string;
  expandLabel: string;
}

export const SidebarDeclarativeImplementation: React.FC<Props> = ({
  collapseLabel,
  expandLabel,
}) => {
  const [currentItem, setCurrentItem] = useState('');
  const sidebar = useSidebar();

  const createOnTrigger = (itemName: string) => () => setCurrentItem(itemName);
  const isActive = (itemName: string) => currentItem === itemName;
  const createFooterItemOnTrigger = (itemName: string) =>
    action(`FooterItem "${itemName}" onTrigger()`);

  return (
    <SidebarContainer collapsed={sidebar.isSidebarCollapsed} position="left">
      <MenuList>
        <MenuItem
          label="Users"
          icon={<UsersIcon />}
          onTrigger={createOnTrigger('Users')}
          isActive={isActive('Users')}
        />
        <MenuItem
          label="Badge"
          icon={<UsersIcon />}
          onTrigger={createOnTrigger('Badge')}
          isActive={isActive('Badge')}
          hasBadge
        />
        <MenuItem
          label="Badge with children"
          icon={<UsersIcon />}
          onTrigger={createOnTrigger('BadgeChildren')}
          isActive={isActive('BadgeChildren')}
          hasBadge
          badgeChildren="99+"
        />
        <MenuItem label="Platform" icon={<GearIcon />}>
          <SubMenuItem
            aria-label="test-label"
            label="Company"
            onTrigger={createOnTrigger('Company')}
            isActive={isActive('Company')}
          />
          <SubMenuItem
            label="Contacts With Extra Words To Span 2 Rows"
            onTrigger={createOnTrigger('Contacts')}
            isActive={isActive('Contacts')}
          />
          <SubMenuItem
            label="Calls"
            onTrigger={createOnTrigger('Calls')}
            isActive={isActive('Calls')}
          />
          <SubMenuItem
            label="History"
            onTrigger={createOnTrigger('History')}
            isActive={isActive('History')}
          />
        </MenuItem>
        <MenuItem label="Badge menus" icon={<GearIcon />} hasBadge>
          <SubMenuItem
            label="with a longer menu label"
            onTrigger={createOnTrigger('BadgeMenuLong')}
            isActive={isActive('BadgeMenuLong')}
            hasBadge
            badgeChildren="99+"
          />
          <SubMenuItem
            label="badge submenu"
            onTrigger={createOnTrigger('BadgeMenuShort')}
            isActive={isActive('BadgeMenuShort')}
            hasBadge
          />
          <SubMenuItem
            label="no badge"
            onTrigger={createOnTrigger('BadgeNo')}
            isActive={isActive('BadgeNo')}
          />
        </MenuItem>
        <MenuItem label="Version" icon={<VersionIcon />}>
          <SubMenuItem
            label="Meetings"
            onTrigger={createOnTrigger('Meetings')}
            isActive={isActive('Meetings')}
          />
        </MenuItem>
      </MenuList>

      <CollapseItem
        label={sidebar.isSidebarCollapsed ? expandLabel : collapseLabel}
      />
      <MenuList footer>
        <MenuItem
          label="Long Item Name That Spans On Multiple Rows"
          icon={<ArchiveIcon />}
          onTrigger={createFooterItemOnTrigger('Audit Log Events')}
        />
      </MenuList>
    </SidebarContainer>
  );
};
