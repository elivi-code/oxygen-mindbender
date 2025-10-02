import React from 'react';

import { PopoverMenu, Divider } from '@8x8/oxygen-popover';
import { IconButton } from '@8x8/oxygen-icon-button';
import { DotsVerticalIcon } from '@8x8/oxygen-icon';
import Avatar from '@8x8/oxygen-avatar';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';
import styled from 'styled-components';
import { popoverMenuArgsConfig, popoverMenuArgTypesConfig } from './config';

const Contact = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
`;

const Email = styled.div`
  color: ${({ theme }) => theme.textColor02};
`;

const DestructiveItem = styled.span`
  color: ${({ theme }) => theme.action03};
`;

export const PopoverMenuWithHeaderCustomStory = args => {
  return (
    <>
      <Doc>
        <h1>
          <code>PopoverMenu</code> with custom <code>header</code> and{' '}
          <code>Divider</code>&lsquo;s
        </h1>

        <p>
          An example with a custom header. The <code>header</code> component
          from this example for showing a Contact is not provided, you need to
          roll your own. The code for it is below.
        </p>
        <pre>
          {`
import { PopoverMenu, Divider } from '@8x8/oxygen-popover';
import { IconButton } from '@8x8/oxygen-icon-button';
import { DotsVerticalIcon } from '@8x8/oxygen-icon';
import styled from 'styled-components';

const Contact = styled.div\`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 8px;
\`;

const Email = styled.div\`
  color: \${({ theme }) => theme.textColor02};
\`;

const DestructiveItem = styled.span\`
  color: \${({ theme }) => theme.action03};
\`;

<PopoverMenu
  header={
    <Contact>
      <Avatar size="small" name="Emily Holmes" userStatus="available" />
      <div>
        Emily Holmes
        <Email>e.holmes@company.com</Email>
      </div>
    </Contact>
  }
  items={[
    [{ key: '1', children: 'End day' }],
    <Divider key="2" />,
    [
      {
        key: '2',
        children: 'Edit widget',
      },
      {
        key: '3',
        children: 'Switch to dark mode',
      },
      { key: '4', children: 'Send feedback' },
    ],
    <Divider key="3" />,
    [
      {
        key: '5',
        children: <DestructiveItem>Emergency stop</DestructiveItem>,
      },
    ],
  ]}
>
  <IconButton aria-label="Open menu">
    <DotsVerticalIcon />
  </IconButton>
</PopoverMenu>
          `}
        </pre>
      </Doc>
      <ComponentSection>
        <PopoverMenu
          {...args}
          header={
            <Contact>
              <Avatar size="small" name="Emily Holmes" userStatus="available" />
              <div>
                Emily Holmes
                <Email>e.holmes@company.com</Email>
              </div>
            </Contact>
          }
          items={[
            [{ key: '1', children: 'End day' }],
            <Divider key="2" />,
            [
              {
                key: '2',
                children: 'Edit widget',
              },
              {
                key: '3',
                children: 'Switch to dark mode',
              },
              { key: '4', children: 'Send feedback' },
            ],
            <Divider key="3" />,
            [
              {
                key: '5',
                children: <DestructiveItem>Emergency stop</DestructiveItem>,
              },
            ],
          ]}
        >
          <IconButton aria-label="Open menu">
            <DotsVerticalIcon />
          </IconButton>
        </PopoverMenu>
      </ComponentSection>
    </>
  );
};

PopoverMenuWithHeaderCustomStory.storyName = 'PopoverMenu with Header/custom';
PopoverMenuWithHeaderCustomStory.args = popoverMenuArgsConfig;
PopoverMenuWithHeaderCustomStory.argTypes = popoverMenuArgTypesConfig;
PopoverMenuWithHeaderCustomStory.parameters = {
  controls: { sort: 'requiredFirst' },
};
