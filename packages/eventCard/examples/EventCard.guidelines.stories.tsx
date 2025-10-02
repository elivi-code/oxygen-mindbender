import React from 'react';

import { VideoIcon, PhoneIcon, VoicemailIcon } from '@8x8/oxygen-icon';
import EventCard from '@8x8/oxygen-event-card';

import {
  Label as ComponentLabel,
  Section,
  Headline,
  ComponentItem,
  ComponentSection,
  avatarUrl,
} from '@8x8/oxygen-storybook-utils';

const avatars5 = [{ name: 'R B' }, {}, { src: avatarUrl }, {}, {}, {}, {}, {}];
const avatars1 = [{ name: 'R B' }];

export default {
  title: 'Components/EventCard',
  parameters: {
    chromatic: { disable: false },
  },
};

export const Guidelines = () => (
  <Section>
    <Headline>EventCard - Guidelines</Headline>
    <ComponentSection>
      <ComponentItem>
        <ComponentLabel>Default</ComponentLabel>
        <EventCard
          icon={VideoIcon}
          avatars={avatars5}
          title="Rock FM"
          text="3h20m"
        />
      </ComponentItem>
      <ComponentItem>
        <ComponentLabel>Only Title</ComponentLabel>
        <EventCard icon={PhoneIcon} avatars={avatars1} title="Rock FM" />
      </ComponentItem>
      <ComponentItem>
        <ComponentLabel>Only Text</ComponentLabel>
        <EventCard
          icon={VoicemailIcon}
          avatars={avatars5}
          text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
        />
      </ComponentItem>
      <ComponentItem>
        <ComponentLabel>No avatars</ComponentLabel>
        <EventCard icon={VideoIcon} title="Rock FM" text="3h20m" />
      </ComponentItem>
      <ComponentItem>
        <ComponentLabel>No Icon</ComponentLabel>
        <EventCard avatars={avatars5} title="Rock FM" text="3h20m" />
      </ComponentItem>
    </ComponentSection>
  </Section>
);

Guidelines.storyName = '01. Guidelines';
