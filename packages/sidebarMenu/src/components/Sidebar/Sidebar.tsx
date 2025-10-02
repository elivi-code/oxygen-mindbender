import React from 'react';
import noop from 'lodash.noop';
import { getTestAttributes } from '@8x8/oxygen-config';

import { SidebarProps } from '../../types';
import { SidebarProvider } from './SidebarProvider';
import { useSidebar } from '../../hooks/useSidebar';
import { CollapseItem } from '../Menu/CollapseItem';
import { SidebarContainer } from '../../styled/SidebarContainer';
import { Ul } from '../../styled/Menu';

import { createMenuItem } from './createItem';

const SidebarInner: React.FunctionComponent<
  Omit<SidebarProps, 'initialCollapsedState' | 'linkComponent' | 'linkProp'>
> = ({
  items,
  collapseLabel,
  expandLabel,
  position = 'left',
  onCollapseChange = noop,
  testId = 'SIDEBAR',
  ...props
}) => {
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

  return (
    <SidebarContainer
      collapsed={isSidebarCollapsed}
      position={position}
      {...getTestAttributes(testId)}
      {...props}
    >
      <Ul {...getTestAttributes(`${testId}_TOP_MENU`)}>{menuItems}</Ul>
      {collapseLabel && expandLabel ? (
        <CollapseItem
          testId={`${testId}_COLLAPSE`}
          label={isSidebarCollapsed ? expandLabel : collapseLabel}
          position={position}
        />
      ) : null}
      {footerMenuItems.length > 0 ? (
        <Ul footer {...getTestAttributes(`${testId}_FOOTER_MENU`)}>
          {footerMenuItems}
        </Ul>
      ) : null}
    </SidebarContainer>
  );
};

/** Renders a sidebar from a configuration object */
export const Sidebar = ({
  initialCollapsedState = false,
  linkProp = 'to',
  linkComponent,
  ...props
}: SidebarProps) => {
  return (
    <SidebarProvider
      initialCollapsedState={initialCollapsedState}
      linkComponent={linkComponent}
      linkProp={linkProp}
    >
      <SidebarInner {...props} />
    </SidebarProvider>
  );
};
