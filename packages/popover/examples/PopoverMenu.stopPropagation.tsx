import React, { useState } from 'react';

import { PopoverMenu } from '@8x8/oxygen-popover';
import Button, { IconButton } from '@8x8/oxygen-button';
import { DotsVerticalIcon } from '@8x8/oxygen-icon';

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

export const PopoverMenuStopPropagationStory = args => {
  const [numberOfPropagatedClicks, setNumberOfPropagatedClicks] = useState(0);

  return (
    <>
      <Doc>
        <h1>
          <code>PopoverMenu StopPropagation</code>
        </h1>
        <p>Example to ensure Popover stops propagation</p>
        <pre>
          {`
import { PopoverMenu } from '@8x8/oxygen-popover';

<PopoverMenu
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
  onMenuItemClick={event => {
    event.stopPropagation();
  }}
  >
  <IconButton
    aria-label="Open menu"
    onClick={event => {
      event.stopPropagation();
    }}
  >
    <DotsVerticalIcon />
  </IconButton>
</PopoverMenu>
        `}
        </pre>
      </Doc>
      <ComponentSection>
        <div>Number of propagated clicks: {numberOfPropagatedClicks}</div>
        <Button
          variant="tertiary"
          onClick={() => {
            setNumberOfPropagatedClicks(prev => prev + 1);
          }}
        >
          <PopoverMenu
            {...args}
            items={items}
            onMenuItemClick={event => {
              event.stopPropagation();
            }}
          >
            <IconButton
              aria-label="Open menu"
              onClick={event => {
                event.stopPropagation();
              }}
            >
              <DotsVerticalIcon />
            </IconButton>
          </PopoverMenu>
        </Button>
      </ComponentSection>
    </>
  );
};
PopoverMenuStopPropagationStory.storyName = 'PopoverMenu StopPropagation';
PopoverMenuStopPropagationStory.args = popoverMenuArgsConfig;
PopoverMenuStopPropagationStory.argTypes = popoverMenuArgTypesConfig;
PopoverMenuStopPropagationStory.parameters = {
  controls: { sort: 'requiredFirst' },
};
