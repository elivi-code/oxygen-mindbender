import React from 'react';
import { action } from 'storybook/actions';
import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

import { Sidebar, SidebarProvider } from '@8x8/oxygen-sidebar-menu';
import { StoryFn } from '@storybook/react';
import { type Props } from './config';
import { items, getRoutes, useSidebar } from './implementation/viaConfig';

export const SidebarConfigObj: StoryFn<Props> = args => {
  const {
    initialRoute,
    initialCollapsedState,
    collapseLabel,
    expandLabel,
    onCollapseChange,
    badgeOnMenuLinks,
    badgeChildren,
    badgeAriaLabel,
  } = args;

  const { sidebarItems } = useSidebar({
    action,
    initialRoute,
    badgeOnMenuLinks,
    badgeChildren,
    badgeAriaLabel,
  });

  return (
    <>
      <Doc>
        <h1>Most common usage</h1>
        <p>
          The <code>SidebarMenu</code> is provided with a config object which is
          used to render the whole menu
        </p>
      </Doc>
      <ComponentSection
        style={{
          height: '80%',
          flexWrap: 'nowrap',
          justifyContent: 'space-between',
        }}
      >
        <SidebarProvider initialCollapsedState={initialCollapsedState}>
          <Sidebar
            collapseLabel={collapseLabel}
            expandLabel={expandLabel}
            items={sidebarItems}
            onCollapseChange={onCollapseChange}
          />
        </SidebarProvider>
      </ComponentSection>
    </>
  );
};

SidebarConfigObj.args = {
  initialCollapsedState: false,
  collapseLabel: 'Collapse',
  expandLabel: 'Expand',
  initialRoute: '',
  badgeOnMenuLinks: '/home,/channels/channel_one,/short/channel_two',
  badgeChildren: '',
  badgeAriaLabel: '',
  onCollapseChange: action('onCollapseChange'),
};

SidebarConfigObj.argTypes = {
  initialRoute: {
    options: [undefined, ...getRoutes(items)],
    control: { type: 'select' },
  },
};
SidebarConfigObj.storyName = 'Sidebar config obj';

export default {
  title: 'Components/SidebarMenu [alpha]',
  component: Sidebar,
  subcomponents: { Sidebar },
};
