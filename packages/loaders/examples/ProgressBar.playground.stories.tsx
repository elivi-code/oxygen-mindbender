import React from 'react';
import { ProgressBar } from '@8x8/oxygen-loaders';

import { PlaygroundDecorator } from '@8x8/oxygen-storybook-utils';
import { argsConfig, argTypesConfig } from './config';

export const PlaygroundProgressBar = args => <ProgressBar {...args} />;

PlaygroundProgressBar.storyName = '10. Playground';
PlaygroundProgressBar.args = argsConfig;
PlaygroundProgressBar.argTypes = argTypesConfig;

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  decorators: [PlaygroundDecorator],
};
