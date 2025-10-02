import React from 'react';
import { UserStatus, Status, Size } from '@8x8/oxygen-user-status';
import { PlaygroundDecorator } from '@8x8/oxygen-storybook-utils';

import { StoryFn, Meta } from '@storybook/react';

export const PlaygroundUserStatus: StoryFn<typeof UserStatus> = args => (
  <UserStatus {...args} />
);

const availableStatuses: Status[] = [
  'available',
  'onDirectCall',
  'away',
  'busy',
  'wrapUp',
  'doNotDisturb',
  'onBreak',
  'onCall',
  'offline',
  'workingOffline',
];
const availableSizes: Size[] = ['small', 'large'];

PlaygroundUserStatus.args = {
  status: 'available',
  size: 'large',
  title: 'Text shows on hover',
  'aria-label': `user-status-available`,
  role: 'img',
  'data-custom-attribute': 'custom-attribute-value',
};
PlaygroundUserStatus.argTypes = {
  status: {
    control: {
      type: 'select',
    },
    options: availableStatuses,
  },
  size: {
    control: {
      type: 'select',
    },
    options: availableSizes,
  },
};
PlaygroundUserStatus.storyName = '10. Playground';

export default {
  title: 'Components/UserStatus',
  component: UserStatus,
  decorators: [PlaygroundDecorator],
} as Meta<typeof UserStatus>;
