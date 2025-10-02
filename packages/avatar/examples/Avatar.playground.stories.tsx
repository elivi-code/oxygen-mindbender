import React from 'react';
import { action } from 'storybook/actions';
import Avatar, { AvatarStack } from '@8x8/oxygen-avatar';

import { PlaygroundDecorator } from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

const CUSTOM_SIZE = 'custom';

export const PlaygroundAvatar = args => (
  <Avatar
    {...args}
    onClick={args.onClick ? action('onClick') : undefined}
    size={args.size === CUSTOM_SIZE ? args.customSize : args.size}
  />
);
PlaygroundAvatar.args = argsConfig;
PlaygroundAvatar.argTypes = argTypesConfig;
PlaygroundAvatar.storyName = '10. Playground Avatar';

export const PlaygroundAvatarStack = args => (
  <AvatarStack
    {...args}
    onClick={args.onClick ? action('onClick') : undefined}
  />
);
PlaygroundAvatarStack.args = {
  maxAvatars: 4,
  avatars: [
    {
      name: 'John Doe',
    },
    {},
    {
      isGroup: true,
    },
    {
      name: 'John Doe',
    },
    {
      name: 'John Doe',
    },
  ],
  onClick: false,
  testId: '',
  'aria-label': 'Avatar stack + 2',
};
PlaygroundAvatarStack.storyName = '10. Playground AvatarStack';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  subcomponents: { AvatarStack },
  decorators: [PlaygroundDecorator],
};
