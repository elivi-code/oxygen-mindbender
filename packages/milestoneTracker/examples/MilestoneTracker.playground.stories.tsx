import React from 'react';
import MilestoneTracker from '@8x8/oxygen-milestone-tracker';

import { PlaygroundDecorator } from '@8x8/oxygen-storybook-utils';

export const PlaygroundMilestoneTracker = args => (
  <MilestoneTracker {...args} />
);
PlaygroundMilestoneTracker.args = {
  milestones: [
    {
      title: 'Example Title 1',
      description: 'Example Description',
      isCompleted: true,
      id: 'milestone-1',
    },
    {
      title: 'Example Title 2',
      description: 'Example Description',
      isCompleted: true,
      id: 'milestone-2',
    },
    {
      title: 'Example Title 3',
      description: 'Example Description',
      isCompleted: false,
      id: 'milestone-3',
    },
    {
      title: 'Example Title 4',
      description: 'Example Description',
      isCompleted: false,
      id: 'milestone-4',
    },
  ],
  size: 46,
  showRoads: true,
};
PlaygroundMilestoneTracker.storyName = '10. Playground';

export default {
  title: 'Components/MilestoneTracker',
  component: MilestoneTracker,
  decorators: [PlaygroundDecorator],
};
