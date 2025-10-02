import React from 'react';
import { action } from 'storybook/actions';
import Input from '@8x8/oxygen-input';

import { PlaygroundDecorator } from '@8x8/oxygen-storybook-utils';
import { StoryFn, Meta } from '@storybook/react';

export const PlaygroundInput: StoryFn<typeof Input> = ({ value, ...args }) => (
  <Input
    {...args}
    {...(args.value ? { value: args.value } : {})}
    onChange={action('onChange')}
    onKeyDown={action('onKeyDown')}
    onKeyUp={action('onKeyUp')}
  />
);
PlaygroundInput.args = {
  id: 'custom-input-id',
  name: 'custom-input-name',
  value: 'Default value',
  max: 99,
  min: 1,
  maxLength: 100,
  placeholder: 'Placeholder text',
  type: 'text',
  autoComplete: '',
  autoFocus: true,
  size: 'default',
  prefix: '',
  suffix: '',
  hasError: false,
  fixed: false,
  isDisabled: false,
  isReadOnly: false,
  isRequired: false,
  fullWidth: false,
  autoSuffixWidth: false,
  autoPrefixWidth: false,
};
PlaygroundInput.argTypes = {
  type: {
    control: {
      type: 'select',
    },
    options: ['date', 'email', 'number', 'password', 'tel', 'text', 'url'],
  },
  size: {
    control: {
      type: 'select',
    },
    options: ['default', 'small', 'large'],
  },
};
PlaygroundInput.storyName = '10. Playground';

type ComponentMetaInput = Meta<typeof Input>;

export default {
  title: 'Components/Input',
  component: Input,
  decorators: [PlaygroundDecorator],
} as ComponentMetaInput;
