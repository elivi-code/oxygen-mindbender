import React from 'react';

import {
  Doc,
  ComponentSection,
  ComponentItem,
  iconSelectRendered,
} from '@8x8/oxygen-storybook-utils';
import Accordion, { AccordionGroup } from '@8x8/oxygen-accordion';
import README from '../README.md?raw';
import CHANGELOG from '../CHANGELOG.md?raw';

const example = `
----
## Example
\`\`\`javascript
import Accordion, { AccordionGroup } from '@8x8/oxygen-accordion';
import { VideoIcon } from '@8x8/oxygen-icon';

<AccordionGroup>
  <Accordion
    title="Title"
    iconLeft={VideoIcon}
    text="Text"
  >
    Content
  </Accordion>

    <Accordion
    title="Title 2"
    iconLeft={VideoIcon}
    text="Text 2"
  >
    Content
  </Accordion>
</AccordionGroup>;
\`\`\`
`;

export const AccordionDocumentation = args => {
  const accordionItems: React.ReactElement<any>[] = [];

  const {
    numberOfAccordionItems,
    shouldCloseOnActiveClick,
    testId,
    ...accordionItemProps
  } = args;

  for (let i = 1; i <= numberOfAccordionItems; i += 1) {
    accordionItems.push(<Accordion {...accordionItemProps} />);
  }

  const component = (
    <AccordionGroup
      testId={testId}
      shouldCloseOnActiveClick={shouldCloseOnActiveClick}
    >
      {accordionItems}
    </AccordionGroup>
  );

  return (
    <>
      <Doc markdown>{README}</Doc>
      <Doc markdown>{example}</Doc>
      <ComponentSection>
        <ComponentItem>{component}</ComponentItem>
      </ComponentSection>
      <Doc markdown>{CHANGELOG}</Doc>
    </>
  );
};

AccordionDocumentation.storyName = 'Documentation';
AccordionDocumentation.args = {
  numberOfAccordionItems: 3,
  shouldCloseOnActiveClick: true,
  title: 'Demo meeting',
  text: 'Today, 11:48',
  iconLeft: undefined,
  children: `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industrys standard dummy text
  ever ever ever since the 1500s, when an unknown printer took a
  galley of type scrambled it to make a type specimen book. It has
  survived not only only five centuries, but also the leap into
  typesetting, remaining essentially unchanged. It was popularised
  1960s with with with the release of Letraset sheets passages,
  passages, more recently with desktop publishing software including
  including versions of Lorem Ipsum.`,
  testId: 'CUSTOM_TEST_ID',
};

AccordionDocumentation.argTypes = {
  iconLeft: iconSelectRendered,
};

export default {
  title: 'Components/Accordion [beta]',
};
