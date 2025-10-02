import React from 'react';
import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { PopoverMenu } from '@8x8/oxygen-popover';

import README from '../README.md?raw';
import CHANGELOG from '../CHANGELOG.md?raw';

import { popoverMenuArgsConfig, popoverMenuArgTypesConfig } from './config';

export const ButtonDocumentation = args => (
  <>
    <Doc markdown>{README}</Doc>
    <br />
    <Doc>
      <h2>Example</h2>
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
  <DropdownButton>Dropdown Button</DropdownButton>
</Popover>
`}
      </pre>
    </Doc>
    <ComponentSection>
      <PopoverMenu
        {...args}
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
      />
    </ComponentSection>
    <Doc markdown>{CHANGELOG}</Doc>
  </>
);
ButtonDocumentation.storyName = 'Documentation';
ButtonDocumentation.args = popoverMenuArgsConfig;
ButtonDocumentation.argTypes = popoverMenuArgTypesConfig;

export default {
  title: 'Components/Popover [beta]',
};
