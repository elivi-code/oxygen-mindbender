import React from 'react';
import { action } from 'storybook/actions';
import Tag, { variants } from '@8x8/oxygen-tag';

import { avatarUrl, PlaygroundDecorator } from '@8x8/oxygen-storybook-utils';

export const PlaygroundTag = args => (
  <Tag {...args} action={args.action && action('click')} />
);
PlaygroundTag.args = {
  action: false,
  avatar: {
    name: 'Josephine Lu',
    src: avatarUrl,
    isGroup: false,
  },
  isFocused: false,
  variant: variants.light,
  children: 'Josephine Lu',
  testId: 'avatar',
};
PlaygroundTag.argTypes = {
  variant: {
    control: {
      type: 'select',
    },
    options: Object.values(variants),
  },
};
PlaygroundTag.storyName = '10. Playground';

export default {
  title: 'Components/Tag',
  component: Tag,
  decorators: [PlaygroundDecorator],
};
