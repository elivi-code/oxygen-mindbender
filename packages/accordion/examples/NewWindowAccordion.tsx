import React from 'react';
import ReactDOM from 'react-dom';
import { StyleSheetManager } from 'styled-components';
import LinkTo from '@storybook/addon-links/react';

import Accordion, { AccordionGroup } from '@8x8/oxygen-accordion';
import { SearchIcon, VideoIcon } from '@8x8/oxygen-icon';
import Button from '@8x8/oxygen-button';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';
import { OxygenProvider } from '@8x8/oxygen-config';

import { generateLongText, lipsum, longText, StyledComponent } from './data';

interface OpenNewWindowArgs {
  hasFixedHeight?: boolean;
}

const openNewWindow = (args?: OpenNewWindowArgs) => {
  const { hasFixedHeight = false } = args || {};
  const newWindow = window.open(
    '',
    '_blank',
    "width=600,height=400,box-sizing='border-box'",
  );

  if (newWindow) {
    newWindow.document.write(`<div id="new-window-root"></div>`);
    newWindow.document.close();

    const rootElement = newWindow.document.getElementById('new-window-root');

    if (rootElement) {
      ReactDOM.render(
        <OxygenProvider themeName="light">
          <StyleSheetManager target={newWindow.document.head}>
            <AccordionGroup hasFixedHeight={hasFixedHeight}>
              <Accordion title="First Accordion">{lipsum}</Accordion>
              <Accordion
                title="Demo meeting"
                text="Today, 11:48"
                iconLeft={<VideoIcon />}
              >
                {generateLongText(10)}
              </Accordion>
              <Accordion
                title="Demo meeting (Overflow not enabled - isContentScrollable={false})"
                text="Today, 11:48"
                iconLeft={<VideoIcon />}
                isContentScrollable={false}
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
              <Accordion
                title={longText}
                iconLeft={<VideoIcon />}
                text={longText}
              >
                Content
              </Accordion>
              <Accordion title="Label">
                <StyledComponent>{lipsum}</StyledComponent>
              </Accordion>
            </AccordionGroup>
          </StyleSheetManager>
        </OxygenProvider>,
        rootElement,
      );
    }
  }
};

function NewWindowAccordion() {
  return (
    <>
      <Doc>
        <h1>
          Opening <code>Accordion</code> in a new window
        </h1>

        <p>
          This example is used for{' '}
          <strong>testing the accordion component in a new window</strong>, to
          ensure the behavior is correct when in a different context.
        </p>
        <p>
          The button below will open a new window which renders an{' '}
          <code>AccordionGroup</code> and children <code>Accordion</code>{' '}
          components wrapped in an <code>OxygenProvider</code> with a
          &quot;light&quot; theme. <code>StyleSheetManager</code> from{' '}
          <code>styled-components</code> package is used to ensure the document
          has the required styles. The rendered accordion is the same component
          as the one rendered in the{' '}
          <LinkTo kind="components-accordion-beta-examples--default-accordion">
            Default Accordion story
          </LinkTo>
          .
        </p>
      </Doc>

      <ComponentSection>
        <Button onClick={() => openNewWindow()}>
          Open dynamic content height Accordion in a new window
        </Button>
      </ComponentSection>
      <ComponentSection>
        <Button onClick={() => openNewWindow({ hasFixedHeight: true })}>
          Open fixed height Accordion in a new window
        </Button>
      </ComponentSection>
    </>
  );
}

NewWindowAccordion.storyName = 'Opening Accordion in a new window';

export { NewWindowAccordion };
