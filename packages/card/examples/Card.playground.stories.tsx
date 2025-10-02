import React from 'react';
import Card, { Statistics } from '@8x8/oxygen-card';

import { PlaygroundDecorator } from '@8x8/oxygen-storybook-utils';

export const PlaygroundCard = args => <Card {...args} />;
PlaygroundCard.args = {};
PlaygroundCard.storyName = '10. Playground Card';

export const PlaygroundStatistics = args => <Statistics {...args} />;
PlaygroundStatistics.args = {
  data: [
    {
      statistics: '1/3',
      label: 'Items used',
      hasError: true,
    },
    {
      statistics: '5',
      label: 'Total items',
    },
    {
      statistics: '50',
      label: 'Cent',
    },
  ],
};
PlaygroundStatistics.storyName = '10. Playground Statistics';

export default {
  title: 'Components/Card',
  component: Card,
  subcomponents: { Statistics },
  decorators: [PlaygroundDecorator],
};
