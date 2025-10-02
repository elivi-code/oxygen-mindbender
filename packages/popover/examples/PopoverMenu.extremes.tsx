import React from 'react';

import { PopoverMenu } from '@8x8/oxygen-popover';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { popoverMenuArgsConfig, popoverMenuArgTypesConfig } from './config';

const items = [
  {
    key: '1',
    isActive: true,
    children: 'List Label 1. Active',
  },
  {
    key: '2',
    children:
      'List Label 2 a really long label to test max-width and text wrapping',
  },
  {
    key: '3',
    isDisabled: true,
    children: 'List Label 3. Disabled',
  },
  {
    key: '4',
    children:
      'ListLabel4AReallyLongLabelToTestMaxWidthAndTextWrappingForAContinuousWordInsidePopoverMenuListItemWithIsActive',
    isActive: true,
  },
  {
    key: '5',
    children:
      'ListLabel6AReallyLongLabelToTestMaxWidthAndTextWrappingForAContinuousWordInsidePopoverMenuListItemWithoutIsActive',
  },
];

const itemsLong = new Array(100).fill({}).map((item, index) => {
  return {
    key: index,
    children: `Item Number ${index}`,
  };
});

export const PopoverMenuExtremes = args => {
  return (
    <>
      <Doc>
        <h1>
          <code>PopoverMenu</code> extremes
        </h1>
        <p>Example with long list items. Word wrapping is forced</p>
        <pre>
          {`
import { PopoverMenu } from '@8x8/oxygen-popover';
import { DropdownButton } from '@8x8/oxygen-button';

<Popover
  items={[
    {
      key: '1',
      isActive: true,
      children: 'List Label 1. Active',
    },
    {
      key: '2',
      children:
        'List Label 2 a really long label to test max-width and text wrapping',
    },
    {
      key: '3',
      isDisabled: true,
      children: 'List Label 3. Disabled',
    },
    {
      key: '4',
      children:
        'ListLabel4AReallyLongLabelToTestMaxWidthAndTextWrappingForAContinuousWordInsidePopoverMenuListItemWithIsActive',
      isActive: true,
    },
    {
      key: '5',
      children:
        'ListLabel6AReallyLongLabelToTestMaxWidthAndTextWrappingForAContinuousWordInsidePopoverMenuListItemWithoutIsActive',
    },
    ]}
>
  <DropdownButton>Dropdown Button</DropdownButton>
</Popover>
        `}
        </pre>
      </Doc>
      <ComponentSection>
        <PopoverMenu {...args} items={items} />
      </ComponentSection>
      <Doc>
        <h2>Example with lots of items</h2>
        <p>There&apos;s a 400px max-height set with auto overflow.</p>
        <pre>
          {`
import { PopoverMenu } from '@8x8/oxygen-popover';
import { DropdownButton } from '@8x8/oxygen-button';

<Popover
  items={[
    {
      key: '0',
      children: 'Item Number 0',
    },
    ...
    {
      key: '99',
      children: 'Item Number 99',
    },
  ]}
>
  <DropdownButton>Dropdown Button</DropdownButton>
</Popover>
        `}
        </pre>
      </Doc>
      <ComponentSection>
        <PopoverMenu {...args} items={itemsLong} />
      </ComponentSection>
    </>
  );
};
PopoverMenuExtremes.storyName = 'PopoverMenu extremes';
PopoverMenuExtremes.args = popoverMenuArgsConfig;
PopoverMenuExtremes.argTypes = popoverMenuArgTypesConfig;
PopoverMenuExtremes.parameters = { controls: { sort: 'requiredFirst' } };
