import React from 'react';
import { action } from 'storybook/actions';
import TextField from '@8x8/oxygen-text-field';
import { PlaygroundDecorator } from '@8x8/oxygen-storybook-utils';

// eslint-disable-next-line react/prop-types
export const PlaygroundTextField = ({ value, ...args }) => (
  <TextField
    {...args}
    {...(args.value ? { value: args.value } : {})}
    onKeyUp={action('Input - onKeyUp event')}
    onChange={action('Input - onChange event')}
    onKeyDown={action('Input - onKeyDown event')}
  />
);
PlaygroundTextField.args = {
  id: 'custom-input-id',
  name: 'custom-input-name',
  value: '',
  label: 'Label text',
  labelOrientation: 'column',
  description: 'Description text',
  placeholder: 'Placeholder text',
  type: 'text',
  size: 'default',
  prefix: '',
  suffix: '',
  hasError: false,
  fixed: false,
  isDisabled: false,
  isReadOnly: false,
  isRequired: false,
  fullWidth: false,
  infoBoxText: 'Tooltip text',
  infoBoxButtonLabel: 'Tooltip Button',
};
PlaygroundTextField.argTypes = {
  labelOrientation: {
    control: {
      type: 'select',
    },
    options: ['row', 'column'],
  },
  type: {
    control: {
      type: 'select',
    },
    options: ['date', 'email', 'number', 'password', 'text', 'url'],
  },
  size: {
    control: {
      type: 'select',
    },
    options: ['default', 'small'],
  },
};
PlaygroundTextField.storyName = '10. Playground';

export default {
  title: 'Components/TextField',
  component: TextField,
  decorators: [PlaygroundDecorator],
};
