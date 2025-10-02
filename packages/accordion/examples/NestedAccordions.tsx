import React from 'react';

import Accordion, { AccordionGroup } from '@8x8/oxygen-accordion';

import { ComponentItem, Doc } from '@8x8/oxygen-storybook-utils';

function NestedAccordions() {
  return (
    <>
      <Doc>
        <h1>
          Nested <code>Accordion</code>s
        </h1>

        <pre>
          {`
import Accordion, { AccordionGroup } from '@8x8/oxygen-accordion';

<AccordionGroup>
  <Accordion title="First Accordion">
    <AccordionGroup>
      <Accordion title="Second Accordion">
        <AccordionGroup>
          <Accordion title="Third Accordion">
            Content
          </Accordion>
        </AccordionGroup>

        <AccordionGroup>
          <Accordion title="Fourth Accordion">
            Content
          </Accordion>
        </AccordionGroup>
      </Accordion>
    </AccordionGroup>
  </Accordion>
</AccordionGroup>
        `}
        </pre>
      </Doc>

      <ComponentItem>
        <AccordionGroup>
          <Accordion title="First Accordion">
            <AccordionGroup>
              <Accordion title="Second Accordion">
                <AccordionGroup>
                  <Accordion title="Third Accordion">Content</Accordion>
                </AccordionGroup>

                <AccordionGroup>
                  <Accordion title="Fourth Accordion">Content</Accordion>
                </AccordionGroup>
              </Accordion>
            </AccordionGroup>
          </Accordion>
        </AccordionGroup>
      </ComponentItem>
    </>
  );
}

NestedAccordions.storyName = 'Nested Accordions';

export { NestedAccordions };
