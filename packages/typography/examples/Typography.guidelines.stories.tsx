import React from 'react';

import { color } from '@8x8/oxygen-constants';
import Typography, { sizes, weights } from '@8x8/oxygen-typography';

import {
  Section,
  Headline,
  ComponentSection,
} from '@8x8/oxygen-storybook-utils';

export default {
  title: 'Components/Typography',
  parameters: {
    chromatic: { disable: false },
  },
};

export const Guidelines = () => (
  <>
    <Section>
      <Headline>Typography - Guidelines</Headline>
      <Headline>Sizes</Headline>
      <ComponentSection>
        <div>
          <Typography size={sizes.xxl}>xxl</Typography>
          <Typography size={sizes.xl}>xl</Typography>
          <Typography size={sizes.lg}>lg</Typography>
          <Typography size={sizes.md}>md</Typography>
          <Typography size={sizes.sm}>sm</Typography>
          <Typography size={sizes.xs}>xs</Typography>
        </div>
      </ComponentSection>
    </Section>
    <Section>
      <Headline>Weights</Headline>
      <ComponentSection>
        <Typography weight={weights.default}>Default</Typography>
        <Typography weight={weights.attention}>Attention</Typography>
        <Typography weight={weights.max}>Bold</Typography>
      </ComponentSection>
    </Section>
    <Section>
      <Headline>Colors</Headline>
      <ComponentSection>
        <Typography color={color.coral}>coral</Typography>
        <Typography color={color.jadeGreen}>jadeGreen</Typography>
      </ComponentSection>
    </Section>
    <Section>
      <Headline>Ellipsis</Headline>
      <ComponentSection>
        <Typography color={color.coral} size={sizes.md}>
          shouldWrap=true
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, lacus mauris pharetra felis nulla ante,
          est a, felis dolor. Ante vitae a, donec cum ultrices eu, vestibulum
          mauris egestas eget ut sollicitudin magna, vehicula vitae vestibulum
          feugiat condimentum consectetuer, vel mauris fermentum.
        </Typography>
      </ComponentSection>
      <ComponentSection>
        <Typography color={color.coral} size={sizes.md}>
          shouldWrap=false
        </Typography>
        <Typography shouldWrap={false}>
          Lorem ipsum dolor sit amet, lacus mauris pharetra felis porttitor
          nulla ante, est a, felis dolor. Ante vitae a, donec cum ultrices eu,
          vestibulum mauris egestas eget ut sollicitudin magna, vehicula vitae
          vestibulum feugiat condimentum consectetuer, vel mauris fermentum.
        </Typography>
      </ComponentSection>
    </Section>
    <Section>
      <Headline>Paragraphs gutter</Headline>
      <ComponentSection>
        <Typography color={color.coral} size={sizes.md} isParagraph>
          Is paragraph:
        </Typography>
        <Typography isParagraph size={sizes.md}>
          Lorem ipsum dolor sit amet, lacus mauris pharetra felis porttitor
          nulla ante, est a, felis dolor. Ante vitae a, donec cum ultrices eu,
          vestibulum mauris egestas eget ut sollicitudin magna, vehicula vitae
          vestibulum feugiat condimentum consectetuer, vel mauris fermentum.
        </Typography>
        <Typography isParagraph size={sizes.md}>
          Lorem ipsum dolor sit amet, lacus mauris pharetra felis porttitor
          nulla ante, est a, felis dolor. Ante vitae a, donec cum ultrices eu,
          vestibulum mauris egestas eget ut sollicitudin magna, vehicula vitae
          vestibulum feugiat condimentum consectetuer, vel mauris fermentum.
        </Typography>
        <Typography color={color.coral} size={sizes.md}>
          Is not paragraph:
        </Typography>
        <Typography size={sizes.md}>
          Lorem ipsum dolor sit amet, lacus mauris pharetra felis porttitor
          nulla ante, est a, felis dolor. Ante vitae a, donec cum ultrices eu,
          vestibulum mauris egestas eget ut sollicitudin magna, vehicula vitae
          vestibulum feugiat condimentum consectetuer, vel mauris fermentum.
        </Typography>
        <Typography size={sizes.md}>
          Lorem ipsum dolor sit amet, lacus mauris pharetra felis porttitor
          nulla ante, est a, felis dolor. Ante vitae a, donec cum ultrices eu,
          vestibulum mauris egestas eget ut sollicitudin magna, vehicula vitae
          vestibulum feugiat condimentum consectetuer, vel mauris fermentum.
        </Typography>
      </ComponentSection>
    </Section>
  </>
);

Guidelines.storyName = '01. Guidelines';
