import React, { useState } from 'react';

import Slider from '@8x8/oxygen-slider';

import {
  Section,
  Headline,
  ComponentSection,
} from '@8x8/oxygen-storybook-utils';

export default {
  title: 'Components/Slider',
  parameters: {
    chromatic: { disable: false },
  },
};

export const Guidelines = () => {
  const [value1, setValue1] = useState(2);
  const [value2, setValue2] = useState({ min: 1, max: 6 });
  const [value3, setValue3] = useState(4);
  const [value4, setValue4] = useState({ min: 2, max: 4 });

  return (
    <>
      <Section>
        <Headline>Slider - Default</Headline>
        <ComponentSection>
          <Slider
            value={value1}
            onChange={value => {
              setValue1(value);
            }}
          />
        </ComponentSection>
      </Section>
      <Section>
        <Headline>Slider - Range Default</Headline>
        <ComponentSection>
          <Slider
            isMultiple
            value={value2}
            onChange={value => {
              setValue2(value);
            }}
          />
        </ComponentSection>
      </Section>
      <Section>
        <Headline>Slider - Disabled</Headline>
        <ComponentSection>
          <Slider
            isDisabled
            value={value3}
            onChange={value => {
              setValue3(value);
            }}
          />
        </ComponentSection>
      </Section>
      <Section>
        <Headline>Slider - Draggable track</Headline>
        <ComponentSection>
          <Slider
            isMultiple
            isTrackDraggable
            value={value4}
            onChange={value => {
              setValue4(value);
            }}
          />
        </ComponentSection>
      </Section>
    </>
  );
};

Guidelines.storyName = '01. Guidelines';
