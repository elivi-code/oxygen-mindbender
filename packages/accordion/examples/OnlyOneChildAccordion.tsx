import React from 'react';

import Accordion, { AccordionGroup } from '@8x8/oxygen-accordion';

import { ComponentItem, Doc } from '@8x8/oxygen-storybook-utils';
import { lipsum } from './data';

function OnlyOneChildAccordion() {
  return (
    <>
      <Doc>
        <h1>
          Only one child <code>Accordion</code>
        </h1>

        <pre>
          {`
import Accordion, { AccordionGroup } from '@8x8/oxygen-accordion';

<AccordionGroup>
  <Accordion title="First Accordion">Content</Accordion>
</AccordionGroup>
        `}
        </pre>
      </Doc>

      <ComponentItem>
        <AccordionGroup>
          <Accordion title="First Accordion">{lipsum}</Accordion>
        </AccordionGroup>
      </ComponentItem>
    </>
  );
}

OnlyOneChildAccordion.storyName = 'Only one child Accordion';

export { OnlyOneChildAccordion };
