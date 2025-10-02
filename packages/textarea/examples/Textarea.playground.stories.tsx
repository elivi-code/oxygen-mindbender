import React from 'react';
import { action } from 'storybook/actions';
import Textarea from '@8x8/oxygen-textarea';

import { PlaygroundDecorator } from '@8x8/oxygen-storybook-utils';
import { argsConfig, argTypesConfig } from './config';

export const PlaygroundTextarea = args => (
  <Textarea
    {...args}
    onFocus={action('Trigger action onFocus')}
    onChange={action('Trigger action onChange')}
    onBlur={action('Trigger action onBlur')}
    onKeyDown={action('Trigger action onKeyDown')}
    onKeyUp={action('Trigger action onKeyUp')}
  />
);

PlaygroundTextarea.storyName = '10. Playground';
PlaygroundTextarea.args = argsConfig;
PlaygroundTextarea.argTypes = argTypesConfig;

export default {
  title: 'Components/Textarea',
  component: Textarea,
  decorators: [PlaygroundDecorator],
};
