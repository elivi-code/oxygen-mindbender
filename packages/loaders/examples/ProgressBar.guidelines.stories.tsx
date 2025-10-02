import React from 'react';

import { ProgressBar } from '@8x8/oxygen-loaders';

import {
  Label,
  Section,
  Headline,
  ComponentItem,
  ComponentSection,
} from '@8x8/oxygen-storybook-utils';

export default {
  title: 'Components/ProgressBar',
  parameters: {
    chromatic: { disable: false },
  },
};

export const Guidelines = () => (
  <>
    <Section>
      <Headline>ProgressBar - Guidelines</Headline>
      <ComponentSection>
        <ComponentItem>
          <Label>Small size</Label>
          <ProgressBar value={30} size="small" aria-label="Loading 30%" />
        </ComponentItem>
        <ComponentItem>
          <Label>Default size</Label>
          <ProgressBar value={30} size="default" aria-label="Loading 30%" />
        </ComponentItem>
        <ComponentItem>
          <Label>Large size</Label>
          <ProgressBar value={30} size="large" aria-label="Loading 30%" />
        </ComponentItem>
      </ComponentSection>
      <ComponentSection>
        <ComponentItem>
          <Label>Stretched</Label>
          <ProgressBar value={30} fullWidth aria-label="Loading 30%" />
        </ComponentItem>
      </ComponentSection>
    </Section>
    <Section>
      <Headline>ProgressBar - with additional text</Headline>
      <ComponentSection>
        <ComponentItem width="33%">
          <Label>Small size</Label>
          <ProgressBar value={30} text="Loading data..." size="small" />
        </ComponentItem>
        <ComponentItem width="33%">
          <Label>Default size</Label>
          <ProgressBar value={30} text="Loading data..." size="default" />
        </ComponentItem>
        <ComponentItem width="33%">
          <Label>Large size</Label>
          <ProgressBar value={30} text="Loading data..." size="large" />
        </ComponentItem>
      </ComponentSection>
    </Section>
    <Section>
      <Headline>ProgressBar - when complete</Headline>
      <ComponentSection>
        <ProgressBar value={99} fullWidth text="Loading..." />
        <ProgressBar value={100} fullWidth text="Complete" />
      </ComponentSection>
    </Section>
  </>
);

Guidelines.storyName = '01. Guidelines';
