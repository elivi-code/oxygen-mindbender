import React from 'react';

import Accordion, { AccordionGroup } from '@8x8/oxygen-accordion';
import { SearchIcon, VideoIcon } from '@8x8/oxygen-icon';

import { ComponentItem, Doc } from '@8x8/oxygen-storybook-utils';
import { generateLongText, lipsum, longText, StyledComponent } from './data';

function DefaultAccordion() {
  return (
    <>
      <Doc>
        <h1>
          Default <code>Accordion</code>
        </h1>

        <pre>
          {`
import Accordion, { AccordionGroup } from '@8x8/oxygen-accordion';
import { SearchIcon, VideoIcon } from '@8x8/oxygen-icon';

<AccordionGroup>
  <Accordion title="First Accordion">
    Lorem Ipsum...
  </Accordion>
  <Accordion
    title="Demo meeting"
    text="Today, 11:48"
    iconLeft={<VideoIcon />}
  >
    Lorem Ipsum...
  </Accordion>
  <Accordion
    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet commodo nisl. Lorem ipsum dolor sit amet, consectetur"
    iconLeft={<SearchIcon />}
    text="Secondary Text"
  >
    Lorem ipsum...
  </Accordion>
  <Accordion
    title="Label" iconLeft={<VideoIcon />}
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet commodo nisl. Lorem ipsum dolor sit amet, consectetur"
  >
    Content
  </Accordion>
  <Accordion
    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet commodo nisl. Lorem ipsum dolor sit amet, consectetur"
    iconLeft={<VideoIcon />}
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet commodo nisl. Lorem ipsum dolor sit amet, consectetur"
  >
    Content
  </Accordion>
  <Accordion title="Label">
    <StyledComponent>Lorem Ipsum...</StyledComponent>
  </Accordion>
</AccordionGroup>
        `}
        </pre>
      </Doc>

      <ComponentItem>
        <AccordionGroup>
          <Accordion title="First Accordion">{lipsum}</Accordion>
          <Accordion
            title="Demo meeting"
            text="Today, 11:48"
            iconLeft={<VideoIcon />}
          >
            {generateLongText(10)}
          </Accordion>
          <Accordion
            title={longText}
            iconLeft={<SearchIcon />}
            text="Secondary Text"
          >
            {lipsum}
          </Accordion>
          <Accordion title="Label" iconLeft={<VideoIcon />} text={longText}>
            Content
          </Accordion>
          <Accordion title={longText} iconLeft={<VideoIcon />} text={longText}>
            Content
          </Accordion>

          <Accordion title="Label">
            <StyledComponent>{lipsum}</StyledComponent>
          </Accordion>
        </AccordionGroup>
      </ComponentItem>
    </>
  );
}

DefaultAccordion.storyName = 'Default Accordion';

export { DefaultAccordion };
