import React, { useState } from 'react';
import { StoryFn } from '@storybook/react';
import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import Button from '@8x8/oxygen-button';
import { SidebarProvider } from '@8x8/oxygen-sidebar-menu';
import { SidebarDeclarativeImplementation } from './implementation/declarative';

import { type Props, argsConfig, argTypesConfig } from './config';

export const SidebarFlexContainer: StoryFn<Props> = args => {
  const { initialCollapsedState, collapseLabel, expandLabel } = args;
  const [width, setWidth] = useState('auto');

  return (
    <>
      <Doc>
        <h1>Test case when rendered in a flex parent</h1>
        <p>
          Control the sibling width{' '}
          <Button onClick={() => setWidth('auto')}>auto</Button>&nbsp;
          <Button onClick={() => setWidth('100%')}>100%</Button>
        </p>
        <p>
          The width of the <code>SidebarMenu</code> component should remain
          fixed, no matter the width of its siblings
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
          <SidebarDeclarativeImplementation
            collapseLabel={collapseLabel}
            expandLabel={expandLabel}
          />
        </SidebarProvider>
        <div style={{ width }}>sibling</div>
      </ComponentSection>
    </>
  );
};

SidebarFlexContainer.args = argsConfig;
SidebarFlexContainer.argTypes = argTypesConfig;
SidebarFlexContainer.storyName = 'Sidebar flex container';
