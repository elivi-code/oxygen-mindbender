import React from 'react';
import { action } from 'storybook/actions';
import EventCard from '@8x8/oxygen-event-card';
import { VideoIcon } from '@8x8/oxygen-icon';

import { PlaygroundDecorator, iconSelect } from '@8x8/oxygen-storybook-utils';

export const PlaygroundEventCard = args => (
  <EventCard
    {...args}
    onClick={args.onClick ? action('onClick EventCard') : undefined}
  />
);
PlaygroundEventCard.args = {
  avatars: [
    { name: 'R B' },
    {},
    { name: 'John Doe' },
    {},
    { name: 'P A' },
    {},
    {},
    {},
  ],
  title: 'Rock FM',
  text: '3h20m',
  icon: VideoIcon,
  onClick: false,
  testId: 'CUSTOM_TEST_ID',
};
PlaygroundEventCard.argTypes = {
  icon: iconSelect,
};
PlaygroundEventCard.storyName = '10. Playground';

export default {
  title: 'Components/EventCard',
  component: EventCard,
  decorators: [PlaygroundDecorator],
};
