import React from 'react';
import Select from '@8x8/oxygen-select';
import { action } from 'storybook/actions';

import {
  ComponentItem,
  PlaygroundDecorator,
} from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

export const PlaygroundSelect = args => (
  <ComponentItem>
    <Select {...args} onChange={argv => action('onChange')(argv)} />
  </ComponentItem>
);
PlaygroundSelect.args = argsConfig;
PlaygroundSelect.argTypes = argTypesConfig;
PlaygroundSelect.storyName = '10. Playground';

export default {
  title: 'Components/Select',
  component: Select,
  decorators: [PlaygroundDecorator],
};
