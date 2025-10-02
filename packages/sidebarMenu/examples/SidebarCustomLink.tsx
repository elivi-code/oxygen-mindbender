import React from 'react';
import {
  createMemoryRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
} from 'react-router-dom';
import { action } from 'storybook/actions';
import { StoryFn } from '@storybook/react';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { Sidebar } from '@8x8/oxygen-sidebar-menu';

import { type Props } from './config';
import { items, getRoutes, useSidebar } from './implementation/viaConfig';

export const SidebarCustomLink: StoryFn<Props> = args => {
  const {
    initialRoute,
    initialCollapsedState,
    collapseLabel,
    expandLabel,
    onCollapseChange,
  } = args;

  const { sidebarItems } = useSidebar({ action, initialRoute });

  const routes = [
    {
      path: '*',
      element: (
        <>
          <Sidebar
            initialCollapsedState={initialCollapsedState}
            linkComponent={Link}
            linkProp="to"
            collapseLabel={collapseLabel}
            expandLabel={expandLabel}
            items={sidebarItems}
            onCollapseChange={onCollapseChange}
          />
          <Routes>
            <Route path="/" element={<div>Home</div>} />
            {getRoutes(sidebarItems).map(item => (
              <Route key={item} path={item} element={<div>{item}</div>} />
            ))}
          </Routes>
        </>
      ),
    },
  ];
  const router = createMemoryRouter(routes, { initialEntries: ['/'] });

  return (
    <>
      <Doc>
        <h1>
          Use <code>linkComponent</code>
        </h1>
        <p>
          In this example we are using react-router <code>Link</code>
        </p>
      </Doc>
      <ComponentSection
        style={{
          height: '80%',
          flexWrap: 'nowrap',
          justifyContent: 'space-between',
        }}
      >
        <RouterProvider router={router} />
      </ComponentSection>
    </>
  );
};

SidebarCustomLink.args = {
  initialCollapsedState: false,
  collapseLabel: 'Collapse',
  expandLabel: 'Expand',
  initialRoute: '',
  onCollapseChange: action('onCollapseChange'),
};
SidebarCustomLink.argTypes = {
  initialRoute: {
    options: [undefined, ...getRoutes(items)],
    control: { type: 'select' },
  },
};
SidebarCustomLink.storyName = 'Sidebar with customLink';
