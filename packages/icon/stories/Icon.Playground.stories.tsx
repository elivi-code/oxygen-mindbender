import React from 'react';
import { AddUserIcon } from '@8x8/oxygen-icon';

import { PlaygroundDecorator } from '@8x8/oxygen-storybook-utils';

export const Icon = args => <AddUserIcon {...args} />;
Icon.args = {
  link: false,
  active: false,
  selected: false,
  disabled: false,
  color: undefined,
  title: 'Icon title',
  size: 24,
  invertColors: false,
};
Icon.argTypes = {
  color: {
    control: {
      type: 'color',
    },
  },
};
Icon.storyName = '10. Playground';

export default {
  title: 'Components/Icon',
  component: AddUserIcon,
  decorators: [PlaygroundDecorator],
};
