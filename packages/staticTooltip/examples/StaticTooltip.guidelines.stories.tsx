import React from 'react';

import StaticTooltip from '@8x8/oxygen-static-tooltip';

import {
  Section,
  Label,
  Headline,
  ComponentSection,
} from '@8x8/oxygen-storybook-utils';

export default {
  title: 'Components/StaticTooltip',
  parameters: {
    chromatic: { disable: false, pauseAnimationAtEnd: true },
  },
};

export const Guidelines = () => (
  <Section>
    <Headline>Static Tooltip - Guidelines</Headline>
    <ComponentSection>
      <div>
        <Label>Default</Label>
        <StaticTooltip>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc
          magna, convallis nec mattis vel.
        </StaticTooltip>
      </div>
    </ComponentSection>
  </Section>
);

Guidelines.storyName = '01. Guidelines';
