import React from 'react';

import Accordion, { AccordionGroup } from '@8x8/oxygen-accordion';

import { ComponentItem, Doc } from '@8x8/oxygen-storybook-utils';
import { generateLongText, StyledContainer } from './data';

function FixedHeightAccordion() {
  return (
    <>
      <Doc>
        <h1>
          Fixed Height <code>Accordion</code>
        </h1>

        <pre>
          {`
import Accordion, { AccordionGroup } from '@8x8/oxygen-accordion';

<AccordionGroup hasFixedHeight initialActiveElementId="1">
  <Accordion title="First Accordion" id="1">Content</Accordion>
  <Accordion title="Second Accordion" id="2">Content</Accordion>
</AccordionGroup>
        `}
        </pre>
      </Doc>

      <ComponentItem>
        <StyledContainer>
          <AccordionGroup hasFixedHeight initialActiveElementId="1">
            <Accordion title="First Accordion - Content Scrollable" id="1">
              {generateLongText(20)}
            </Accordion>

            <Accordion
              title="Second Accordion - Content NOT Scrollable"
              id="2"
              isContentScrollable={false}
            >
              Content
            </Accordion>

            <Accordion
              title="Third Accordion - Content NOT Scrollable"
              id="3"
              isContentScrollable={false}
            >
              {generateLongText(20)}
            </Accordion>

            <Accordion title="Fourth Accordion - Content Scrollable" id="4">
              Content
            </Accordion>
          </AccordionGroup>
        </StyledContainer>
      </ComponentItem>
    </>
  );
}

FixedHeightAccordion.storyName = 'Fixed height Accordion';

export { FixedHeightAccordion };
