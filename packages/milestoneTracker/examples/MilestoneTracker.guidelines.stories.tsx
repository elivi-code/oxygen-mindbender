import React from 'react';

import { SpyIcon, RunningManIcon, CoffeeCupIcon } from '@8x8/oxygen-icon';
import MilestoneTracker from '@8x8/oxygen-milestone-tracker';

import {
  Label,
  Section,
  Headline,
  ComponentSection,
} from '@8x8/oxygen-storybook-utils';

export default {
  title: 'Components/MilestoneTracker',
  parameters: {
    chromatic: { disable: false },
  },
};

export const Guidelines = () => (
  <>
    <Section>
      <Headline>Milestone Tracker - types</Headline>
      <ComponentSection>
        <div>
          <Label>Milestone Tracker with Roads</Label>
          <MilestoneTracker
            milestones={[
              {
                description: 'milestone with description only',
                isCompleted: true,
                id: 'test-milestone-0',
              },
              {
                isCompleted: true,
                icon: <CoffeeCupIcon color="white" />,
                id: 'test-milestone-1',
                title: 'No description milestone',
              },
              {
                description:
                  'pointer cursor on title and bullet when milestones have onClick',
                isCompleted: true,
                onClick: () => false,
                title: 'Milestone with onClick',
                id: 'test-milestone-2',
              },
              {
                description:
                  'description description description description description description description description',
                title: 'Milestone with long description',
                icon: <SpyIcon color="white" />,
                isCompleted: true,
                id: 'test-milestone-3',
              },
              {
                title: 'Uncompleted milestone',
                icon: <RunningManIcon color="#d1dbe8" />,
                id: 'test-milestone-4',
              },
            ]}
          />
        </div>
        <div>
          <Label>Milestone Tracker without Roads</Label>
          <MilestoneTracker
            milestones={[
              {
                description: 'milestone with description only',
                isCompleted: true,
                id: 'test-milestone-no-road-0',
              },
              {
                isCompleted: true,
                icon: <CoffeeCupIcon color="white" />,
                id: 'test-milestone-no-road-1',
                title: 'No description milestone',
              },
              {
                description:
                  'pointer cursor on title and bullet when milestones have onClick',
                isCompleted: true,
                onClick: () => false,
                title: 'Milestone with onClick',
                id: 'test-milestone-no-road-2',
              },
              {
                description:
                  'description description description description description description description description',
                title: 'Milestone with long description',
                icon: <SpyIcon color="white" />,
                isCompleted: true,
                id: 'test-milestone-no-road-3',
              },
              {
                title: 'Uncompleted milestone',
                icon: <RunningManIcon color="#d1dbe8" />,
                id: 'test-milestone-no-road-4',
              },
            ]}
            showRoads={false}
          />
        </div>
      </ComponentSection>
    </Section>
    <Section>
      <Headline>Milestone Tracker - types of large bullets</Headline>
      <ComponentSection>
        <div>
          <Label>bullet with description only</Label>
          <MilestoneTracker
            milestones={[
              {
                description: 'description only',
                isCompleted: true,
                id: 'description-only-milestone',
              },
            ]}
          />
        </div>
        <div>
          <Label>completed bullet with description and title</Label>
          <MilestoneTracker
            milestones={[
              {
                description: 'Milestone description',
                isCompleted: true,
                title: 'Milestone title',
                id: 'large-completed-milestone',
              },
            ]}
          />
        </div>
        <div>
          <Label>completed bullet with icon, description and title</Label>
          <MilestoneTracker
            milestones={[
              {
                description: 'Milestone description',
                icon: <RunningManIcon color="white" />,
                isCompleted: true,
                title: 'Milestone title',
                id: 'large-icon-completed-milestone',
              },
            ]}
          />
        </div>
        <div>
          <Label>simple completed bullet</Label>
          <MilestoneTracker
            milestones={[
              {
                id: 'large-completed-simple-milestone',
                isCompleted: true,
              },
            ]}
          />
        </div>
        <div>
          <Label>uncompleted bullet with description and title</Label>
          <MilestoneTracker
            milestones={[
              {
                description: 'Milestone description',
                title: 'Milestone title',
                id: 'large-uncompleted-milestone',
              },
            ]}
          />
        </div>
        <div>
          <Label>uncompleted bullet with icon, description and title</Label>
          <MilestoneTracker
            milestones={[
              {
                description: 'Milestone description',
                icon: <RunningManIcon color="#d1dbe8" />,
                title: 'Milestone title',
                id: 'icon-uncompleted-milestone',
              },
            ]}
          />
        </div>
        <div>
          <Label>simple bullet</Label>
          <MilestoneTracker milestones={[{ id: 'simple-milestone' }]} />
        </div>
      </ComponentSection>
    </Section>
    <Section>
      <Headline>Milestone Tracker - logic</Headline>
      <ComponentSection>
        <div style={{ width: '400px' }}>
          <Label>
            the completed road will extend as long as the title/description of
            the last completed bullet goes
          </Label>
          <MilestoneTracker
            milestones={[
              {
                title: 'Completed bullet',
                isCompleted: true,
                isSmall: true,
                description: `
                    description
                    description
                    description
                    description
                    description
                    description
                    description
                    description
                    description
                    description
                  `,
                id: 'long-description-road-logic',
              },
              {
                title: 'test bullet',
                id: 'road-logic-test-milestone',
                isSmall: true,
              },
            ]}
          />
        </div>
        <div>
          <Label>
            if the description of the last completed bullet is short enough, so
            that it does not wrap, the road will extend up to half of the road
          </Label>
          <MilestoneTracker
            milestones={[
              {
                title: 'no description bullet',
                isCompleted: true,
                isSmall: true,
                id: 'short-road-logic',
              },
              {
                title: 'title',
                id: 'short-road-logic-milestone',
                isSmall: true,
              },
            ]}
          />
        </div>
      </ComponentSection>
    </Section>
  </>
);

Guidelines.storyName = '01. Guidelines';
