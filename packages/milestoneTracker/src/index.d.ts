import React from 'react';

interface Milestone {
  testId?: string;
  onClick?(): void;
  id: string;
  title?: string;
  description?: React.ReactNode;
  isCompleted?: boolean;
  icon?: React.ReactNode;
}

interface MilestoneTrackerProps {
  milestones?: Array<Milestone>;
  size?: number;
  theme?: object;
  showRoads?: boolean;
}

declare const MilestoneTracker: React.FunctionComponent<MilestoneTrackerProps>;

export { MilestoneTracker };
