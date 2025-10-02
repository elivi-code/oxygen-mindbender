import React from 'react';

import { PopoverMenu } from '@8x8/oxygen-popover';
import { DropdownButton } from '@8x8/oxygen-button';
import Tooltip from '@8x8/oxygen-tooltip';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { popoverMenuArgsConfig, popoverMenuArgTypesConfig } from './config';

const items = [
  {
    key: '1',
    children: 'List Label 1',
  },
  {
    key: '2',
    children: 'List Label 2',
  },
  {
    key: '3',
    children: 'List Label 3',
  },
];

export const PopoverMenuTooltip = args => {
  return (
    <>
      <Doc>
        <h1>
          <code>PopoverMenu</code> with <code>Tooltip</code>
        </h1>
        <p>
          Example to ensure <code>Popover</code> renders correctly when a{' '}
          <code>Tooltip</code> is involved.
        </p>
        <pre>
          {`
import { PopoverMenu } from '@8x8/oxygen-popover';
import { DropdownButton } from '@8x8/oxygen-button';

<Popover
  items={[
    {
      key: '1',
      children: 'List Label 1',
    },
    {
      key: '2',
      children: 'List Label 2',
    },
    {
      key: '3',
      children: 'List Label 3',
    },
  ]}
>
  <Tooltip title="I am the tooltip content">
    <DropdownButton>I have a Tooltip</DropdownButton>
  </Tooltip>
</Popover>
        `}
        </pre>
      </Doc>
      <ComponentSection>
        <PopoverMenu {...args} items={items}>
          <Tooltip title="I am the tooltip content">
            <DropdownButton>I have a Tooltip</DropdownButton>
          </Tooltip>
        </PopoverMenu>
      </ComponentSection>
    </>
  );
};
PopoverMenuTooltip.storyName = 'PopoverMenu with Tooltip';
PopoverMenuTooltip.args = popoverMenuArgsConfig;
PopoverMenuTooltip.argTypes = popoverMenuArgTypesConfig;
PopoverMenuTooltip.parameters = { controls: { sort: 'requiredFirst' } };
