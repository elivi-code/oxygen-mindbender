import React from 'react';
import { ActionsDropdown } from '@8x8/oxygen-data-table';
import { StoryFn, Meta } from '@storybook/react';
import { argsConfig, argTypesConfig } from './config';

import sourceCode from './actions.tsx?raw';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title:
    'Components/DataTable [alpha]/Actions Dropdown Examples/ActionsDropdown',
  component: ActionsDropdown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  argTypes: argTypesConfig,
  args: argsConfig,
} as Meta<typeof ActionsDropdown>;

export default meta;

const Template: StoryFn<typeof ActionsDropdown> = args => {
  return <ActionsDropdown {...args} />;
};

export const ActionsDropdownExample = Template.bind({});

ActionsDropdownExample.parameters = {
  docs: {
    source: {
      code: sourceCode,
      type: 'dynamic',
    },
  },
};
