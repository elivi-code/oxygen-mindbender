/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '@8x8/oxygen-button';
import { color } from '@8x8/oxygen-constants';

import SlideOut from '@8x8/oxygen-slide-out';
import {
  Section,
  Headline,
  ComponentSection,
} from '@8x8/oxygen-storybook-utils';

const StyledSlideOut = styled(SlideOut)`
  position: absolute;
  right: 40px;
  top: 40px;
  bottom: 40px;
`;

function SlideOutExample(props) {
  const [isOpen, setIsOpen] = useState(true);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Button onClick={handleClick}>Toggle SlideOut</Button>
      <SlideOut isVisible={isOpen} {...props}>
        Content
      </SlideOut>
    </>
  );
}

export default {
  title: 'Components/SlideOut',
  parameters: {
    chromatic: { disable: false },
  },
};

export const Guidelines = () => (
  <>
    <Section>
      <Headline>SlideOut</Headline>
      <ComponentSection style={{ height: '400px' }}>
        <SlideOut isVisible>Content</SlideOut>
      </ComponentSection>
    </Section>

    <Section>
      <Headline>Non Resizable SlideOut</Headline>
      <ComponentSection style={{ height: '400px' }}>
        <SlideOut isVisible isResizable={false}>
          Content
        </SlideOut>
      </ComponentSection>
    </Section>

    <Section>
      <Headline>No animation SlideOut</Headline>
      <ComponentSection style={{ height: '400px' }}>
        <SlideOutExample hasAnimation={false} />
      </ComponentSection>
    </Section>

    <Section>
      <Headline>SlideOut goes over other elements in container</Headline>
      <ComponentSection style={{ height: '400px', position: 'relative' }}>
        <div
          style={{
            background: color.dodgerBlue100,
            padding: '24px',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          condimentum aliquam augue, id pulvinar arcu sagittis sit amet. Sed
          bibendum ante id neque gravida facilisis. Maecenas consequat, sapien
          id tempus sollicitudin, orci massa lobortis odio, ac consequat odio
          ante fermentum ex. Vivamus tincidunt odio odio, at sollicitudin quam
          aliquam et. Nunc at semper eros. Nullam ut leo sodales, sagittis
          tortor nec, vehicula turpis. Aliquam vehicula finibus justo vitae
          rutrum. Donec sed pharetra ante. Cras suscipit eros vitae luctus
          finibus. Cras cursus ligula ac laoreet pretium.
        </div>
        <StyledSlideOut isVisible>Content</StyledSlideOut>
      </ComponentSection>
    </Section>

    <Section>
      <Headline>SlideOut pushes other elements in container</Headline>
      <ComponentSection
        style={{
          height: '400px',
          flex: '1 1 0px',
          overflow: 'hidden',
          display: 'flex',
          flexWrap: 'nowrap',
        }}
      >
        <div
          style={{
            background: color.dodgerBlue100,
            flex: '1 1 0px',
            overflow: 'hidden',
            display: 'flex',
            padding: '24px',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          condimentum aliquam augue, id pulvinar arcu sagittis sit amet. Sed
          bibendum ante id neque gravida facilisis. Maecenas consequat, sapien
          id tempus sollicitudin, orci massa lobortis odio, ac consequat odio
          ante fermentum ex. Vivamus tincidunt odio odio, at sollicitudin quam
          aliquam et. Nunc at semper eros. Nullam ut leo sodales, sagittis
          tortor nec, vehicula turpis. Aliquam vehicula finibus justo vitae
          rutrum. Donec sed pharetra ante. Cras suscipit eros vitae luctus
          finibus. Cras cursus ligula ac laoreet pretium.
        </div>
        <SlideOut isVisible>Content</SlideOut>
      </ComponentSection>
    </Section>
  </>
);

Guidelines.storyName = '01. Guidelines';
