import React from 'react';

import { Spinner } from '@8x8/oxygen-loaders';

import {
  Label,
  Section,
  Headline,
  ComponentSection,
} from '@8x8/oxygen-storybook-utils';

export default {
  title: 'Components/Spinner',
  parameters: {
    chromatic: { disable: false },
  },
};

export const Guidelines = () => (
  <Section>
    <Headline>Spinner - Guidelines</Headline>
    <ComponentSection>
      <div>
        <Label>Small size</Label>
        <Spinner
          size="small"
          role="img"
          aria-label="Loading in a small space"
        />
      </div>
      <div>
        <Label>Default size</Label>
        <Spinner size="default" />
      </div>
      <div>
        <Label>Large2x size</Label>
        <Spinner size="large2x" />
      </div>
      <div>
        <Label>Spinner with text under it</Label>
        <Spinner size="small" text="Example text" />
      </div>
    </ComponentSection>
  </Section>
);

Guidelines.storyName = '01. Guidelines';
