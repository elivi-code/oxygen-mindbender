import React, { useState } from 'react';

import Accordion, { AccordionGroup } from '@8x8/oxygen-accordion';
import { SearchIcon, VideoIcon } from '@8x8/oxygen-icon';
import ToggleButton from '@8x8/oxygen-toggle-button';
import { ComponentItem, Doc } from '@8x8/oxygen-storybook-utils';
import { generateLongText, lipsum, longText, StyledComponent } from './data';

function BlockNavigationAccordion() {
  const [isDirty, setIsDirty] = useState(false);

  return (
    <>
      <Doc>
        <h1>
          Block Navigation <code>Accordion</code>
        </h1>

        <pre>
          {`
import Accordion, { AccordionGroup } from '@8x8/oxygen-accordion';
import { SearchIcon, VideoIcon } from '@8x8/oxygen-icon';

        <AccordionGroup onChange={() => !isDirty}>
          <Accordion id="First Accordion" title="First Accordion">
            {lipsum}
          </Accordion>
          <Accordion
            id="Second Accordion"
            title="Demo meeting"
            text="Today, 11:48"
            hasPadding={false}
            iconLeft={<VideoIcon />}
          >
            {generateLongText(10)}
          </Accordion>
          <Accordion
            id="Third Accordion"
            title={longText}
            iconLeft={<SearchIcon />}
            text="Secondary Text"
          >
            {lipsum}
          </Accordion>
          <Accordion
            id="Fourth Accordion"
            title="Label"
            iconLeft={<VideoIcon />}
            text={longText}
          >
            Content
          </Accordion>
          <Accordion
            id="Fifth Accordion"
            title={longText}
            iconLeft={<VideoIcon />}
            text={longText}
          >
            Content
          </Accordion>

          <Accordion id="Sixth Accordion" title="Label">
            <StyledComponent>{lipsum}</StyledComponent>
          </Accordion>
        </AccordionGroup>
        `}
        </pre>
      </Doc>

      <div style={{ padding: '8px' }}>
        <h3>Is dirty: {isDirty ? 'Dirty' : 'Not Dirty'}</h3>
        <ToggleButton
          isChecked={isDirty}
          onChange={() => {
            setIsDirty(prev => !prev);
          }}
        />
      </div>
      <ComponentItem>
        <AccordionGroup onChange={() => !isDirty}>
          <Accordion id="First Accordion" title="First Accordion">
            {lipsum}
          </Accordion>
          <Accordion
            id="Second Accordion"
            title="Demo meeting"
            text="Today, 11:48"
            hasPadding={false}
            iconLeft={<VideoIcon />}
          >
            {generateLongText(10)}
          </Accordion>
          <Accordion
            id="Third Accordion"
            title={longText}
            iconLeft={<SearchIcon />}
            text="Secondary Text"
          >
            {lipsum}
          </Accordion>
          <Accordion
            id="Fourth Accordion"
            title="Label"
            iconLeft={<VideoIcon />}
            text={longText}
          >
            Content
          </Accordion>
          <Accordion
            id="Fifth Accordion"
            title={longText}
            iconLeft={<VideoIcon />}
            text={longText}
          >
            Content
          </Accordion>

          <Accordion id="Sixth Accordion" title="Label">
            <StyledComponent>{lipsum}</StyledComponent>
          </Accordion>
        </AccordionGroup>
      </ComponentItem>
    </>
  );
}

BlockNavigationAccordion.storyName = 'Block Navigation Accordion';

export { BlockNavigationAccordion };
