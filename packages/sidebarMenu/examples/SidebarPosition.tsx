import React from 'react';
import { action } from 'storybook/actions';
import { StoryFn } from '@storybook/react';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { Sidebar, SidebarProvider } from '@8x8/oxygen-sidebar-menu';

import { items, getRoutes, useSidebar } from './implementation/viaConfig';
import { type Props, argsConfig, argTypesConfig } from './config';

export const SidebarPosition: StoryFn<Props> = args => {
  const {
    initialRoute,
    initialCollapsedState,
    collapseLabel,
    expandLabel,
    position,
    onCollapseChange,
  } = args;

  const { sidebarItems, setCurrentRoute } = useSidebar({
    action,
    initialRoute,
  });

  return (
    <>
      <Doc>
        <h1>Test case for changing position to left or right OX-2907</h1>
      </Doc>

      <ComponentSection
        style={{
          height: '80%',
          flexWrap: 'nowrap',
          justifyContent: position === 'right' ? 'flex-end' : 'flex-start',
        }}
      >
        <SidebarProvider initialCollapsedState={initialCollapsedState}>
          <Sidebar
            collapseLabel={collapseLabel}
            expandLabel={expandLabel}
            position={position}
            items={sidebarItems}
            onCollapseChange={onCollapseChange}
          />
        </SidebarProvider>
      </ComponentSection>
    </>
  );
};

SidebarPosition.args = {
  ...argsConfig,
  initialRoute: '',
  onCollapseChange: action('onCollapseChange'),
};
SidebarPosition.argTypes = {
  ...argTypesConfig,
  initialRoute: {
    options: [undefined, ...getRoutes(items)],
    control: { type: 'select' },
  },
};
SidebarPosition.storyName = 'Sidebar position';
