import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { ActionsDropdownButton } from '@8x8/oxygen-data-table';
import { action } from 'storybook/actions';
import { actionProps } from './actions';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title:
    'Components/DataTable [alpha]/Actions Dropdown Examples/ActionsDropdownButton',
  component: ActionsDropdownButton,
  parameters: {
    layout: 'centered',
  },
  args: {
    actions: actionProps,
    children: <>Dropdown with some action items</>,
    onClick: action('Dropdown Clicked'),
    testId: 'actionsDropdown',
  },
} as Meta<typeof ActionsDropdownButton>;

const Template: StoryFn<typeof ActionsDropdownButton> = args => {
  return <ActionsDropdownButton {...args} />;
};

export const ActionsDropdownButtonExample = Template.bind({});
