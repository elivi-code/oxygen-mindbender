import React from 'react';
import { action } from 'storybook/actions';
import { StoryFn } from '@storybook/react';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import Button from '@8x8/oxygen-button';
import { Sidebar, SidebarProvider } from '@8x8/oxygen-sidebar-menu';

import { items, getRoutes, useSidebar } from './implementation/viaConfig';
import { type Props, argsConfig, argTypesConfig } from './config';

export const SidebarScrollIntoView: StoryFn<Props> = args => {
  const {
    initialRoute,
    initialCollapsedState,
    collapseLabel,
    expandLabel,
    onCollapseChange,
  } = args;

  const { sidebarItems, setCurrentRoute } = useSidebar({
    action,
    initialRoute,
  });

  return (
    <>
      <Doc>
        <h1>Test case for ScrollIntoView OX-1535</h1>
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
        <div
          style={{
            paddingLeft: '20px',
          }}
        >
          <Doc>
            <p>
              This example renders a long menu, use the following buttons to
              navigate to elements in the top part of in the lower part of the
              menu. The active items should always be visible.
            </p>
            <p>
              <Button
                onClick={() => {
                  setCurrentRoute('/company');
                }}
              >
                (top) Navigate to Company
              </Button>
            </p>
            <p>
              <Button
                onClick={() => {
                  setCurrentRoute('/users/company');
                }}
              >
                (top) navigate to Users &gt; Company Settings
              </Button>
            </p>
            <p>
              <Button
                onClick={() => {
                  setCurrentRoute('/integrations/meetings_4');
                }}
              >
                (bottom) navigate to Integrations &gt; Meetings
              </Button>
            </p>
            <p>
              Alternatively you can also update the <code>initialRoute</code>{' '}
              Storybook control
            </p>
          </Doc>
        </div>
      </ComponentSection>
    </>
  );
};

SidebarScrollIntoView.args = {
  ...argsConfig,
  initialRoute: '',
  onCollapseChange: action('onCollapseChange'),
};
SidebarScrollIntoView.argTypes = {
  ...argTypesConfig,
  initialRoute: {
    options: [undefined, ...getRoutes(items)],
    control: { type: 'select' },
  },
};
SidebarScrollIntoView.storyName = 'Sidebar ScrollIntoView';
