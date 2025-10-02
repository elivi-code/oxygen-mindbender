import React from 'react';
import { spinnerSize } from '@8x8/oxygen-constants';
import { Spinner } from '@8x8/oxygen-loaders';

import { PlaygroundDecorator } from '@8x8/oxygen-storybook-utils';

export const PlaygroundSpinner = args => <Spinner {...args} />;
PlaygroundSpinner.args = {
  size: spinnerSize.default,
  strokeWidth: 2,
  hasAnimation: true,
  testId: 'spinner',
  text: 'Loading...',
  role: 'img',
  'aria-label': 'Loading spinner',
};
PlaygroundSpinner.argTypes = {
  size: {
    control: {
      type: 'select',
    },
    options: Object.values(spinnerSize),
  },
};
PlaygroundSpinner.storyName = '10. Playground';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  decorators: [PlaygroundDecorator],
};
