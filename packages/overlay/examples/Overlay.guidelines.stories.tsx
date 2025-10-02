import React from 'react';

import Overlay from '@8x8/oxygen-overlay';

import {
  Section,
  Headline,
  ComponentSection,
  Label,
} from '@8x8/oxygen-storybook-utils';

export default {
  title: 'Components/Overlay',
  parameters: {
    chromatic: { disable: false, delay: 1500, pauseAnimationAtEnd: true },
  },
};

export const Guidelines = () => (
  <Section>
    <Headline>Overlay - Guidelines</Headline>
    <ComponentSection>
      <Label>Text under the overlay...</Label>
      <Overlay />
    </ComponentSection>
  </Section>
);

Guidelines.storyName = '01. Guidelines';
