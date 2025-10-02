import React from 'react';
import StaticTooltip from '@8x8/oxygen-static-tooltip';

import { PlaygroundDecorator } from '@8x8/oxygen-storybook-utils';

export const PlaygroundStaticTooltip = args => <StaticTooltip {...args} />;
PlaygroundStaticTooltip.args = {
  children: 'Lorem ipsum',
};
PlaygroundStaticTooltip.storyName = '10. Playground';

export default {
  title: 'Components/StaticTooltip',
  component: StaticTooltip,
  decorators: [PlaygroundDecorator],
};
