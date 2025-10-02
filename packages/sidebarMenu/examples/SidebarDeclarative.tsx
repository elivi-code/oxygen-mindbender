import React from 'react';
import { StoryFn } from '@storybook/react';
import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { SidebarProvider } from '@8x8/oxygen-sidebar-menu';

import { SidebarDeclarativeImplementation } from './implementation/declarative';
import { type Props, argsConfig, argTypesConfig } from './config';

export const SidebarDeclarative: StoryFn<Props> = args => {
  const { initialCollapsedState, collapseLabel, expandLabel } = args;

  return (
    <>
      <Doc>
        <h1>Use inner SidebarMenu building blocks</h1>
        <p>
          As an alternative to supplying a config object you can use the
          internal building blocks to create a menu
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
      </ComponentSection>
    </>
  );
};

SidebarDeclarative.args = argsConfig;
SidebarDeclarative.argTypes = argTypesConfig;
SidebarDeclarative.storyName = 'Sidebar declarative';
