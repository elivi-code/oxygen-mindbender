import React from 'react';

import { FaqIcon, GearIcon, HandshakeIcon } from '@8x8/oxygen-icon';

import Tabs, { Tab } from '@8x8/oxygen-tabs';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

export const TabsAccessibility = () => {
  return (
    <Doc>
      <h1>
        <code>Tabs</code> accessibility
      </h1>
      <h2>Adding correct aria-* attributes to the tabs</h2>
      <p>
        When using tabs we need to associate the Tab button with the tab panel.
        We can do this by:
      </p>
      <ul>
        <li>
          Adding an aria-controls attribute to the Tab button the value of which
          is the id of the tab panel{' '}
          <pre>{`<Tab aria-controls="faq-panel" />`}</pre>
        </li>
        <li>
          Adding an id to the tab panel{' '}
          <pre>{`<div role="tabpanel" id="faq-panel" />`}</pre>
        </li>
        <li>
          Adding an id to the Tab button <pre>{`<Tab id="faq-tab" />`}</pre>
        </li>
        <li>
          Adding an aria-labelledby attribute to the tab panel the value of
          which is the id of the Tab button{' '}
          <pre>{`<div role="tabpanel" aria-labelledby="faq-tab" />`}</pre>
        </li>
      </ul>
      <h3>Full aria-* attributes example</h3>
      <pre style={{ whiteSpace: 'pre-wrap' }}>
        {`import Tabs, { Tab } from '@8x8/oxygen-tabs';
import { FaqIcon, GearIcon, HandshakeIcon } from '@8x8/oxygen-icon';

const TabsPlaygroundstory = args = {
  return (
    <Tabs>
      <Tab id="faq-tab" aria-controls="faq-panel" isStretched isActive aria-label="Frequently Asked Questions">
        <FaqIcon />
      </Tab>
      <Tab id="accounts-tab" aria-controls="accounts-panel" isStretched>
        <GearIcon title="Accounts" />
      </Tab>
      <Tab id="coffee-tab" aria-controls="coffee-panel" isStretched>
        <HandshakeIcon title="Coffee" />
      </Tab>
    </Tabs>

    <div role="tabpanel" id="faq-panel" aria-labelledby="faq-tab">
      <p>Frequently Asked Questions</p>
    </div>

    <div role="tabpanel" id="accounts-panel" aria-labelledby="accounts-tab">
      <p>Accounts</p>
    </div>

    <div role="tabpanel" id="coffee-panel" aria-labelledby="coffee-tab">
      <p>Coffee</p>
    </div>
  );
};`}
      </pre>

      <h2>Using tab button with icons inside</h2>
      <p>This is an example of using tabs with icons.</p>
      <p>
        If we use The Tab button with a child icon, we need to make sure that
        the button still has a an accessible name. This can be done by one of
        the following methods:
      </p>
      <ul>
        <li>
          Passing a title to the oxygen-icon{' '}
          <pre>{`<GearIcon link title="Accounts" />`}</pre>
        </li>
        <li>
          Passing an aria-label to the oxygen-tab{' '}
          <pre>{`<Tab aria-label="Account"></Tab>`}</pre>
        </li>
      </ul>
      <h3>Full icon example</h3>
      <pre style={{ whiteSpace: 'pre-wrap' }}>
        {`import Tabs, { Tab } from '@8x8/oxygen-tabs';
import { FaqIcon, HearIcon, HandshakeIcon} from '@8x8/oxygen-icon';

const TabsPlaygroundstory = args = {
  return (
    <Tabs>
      <Tab id="faq-tab" aria-controls="faq-panel" isStretched isActive aria-label="Frequently Asked Questions">
        <FaqIcon />
      </Tab>
      <Tab id="accounts-tab" aria-controls="accounts-panel" isStretched>
        <GearIcon title="Accounts" />
      </Tab>
      <Tab id="coffee-tab" aria-controls="coffee-panel" isStretched>
        <CoffeeCupIcon title="Coffee" />
      </Tab>
    </Tabs>
  );
};`}
      </pre>
      <ComponentSection>
        <Tabs>
          <Tab
            id="faq-tab"
            aria-controls="faq-panel"
            isStretched
            isActive
            aria-label="Frequently Asked Questions"
          >
            <FaqIcon />
          </Tab>
          <Tab id="accounts-tab" aria-controls="accounts-panel" isStretched>
            <GearIcon title="Accounts" />
          </Tab>
          <Tab id="coffee-tab" aria-controls="coffee-panel" isStretched>
            <HandshakeIcon title="Coffee" />
          </Tab>
        </Tabs>

        <div role="tabpanel" id="faq-panel" aria-labelledby="faq-tab" />
        <div
          role="tabpanel"
          id="accounts-panel"
          aria-labelledby="accounts-tab"
        />
        <div role="tabpanel" id="coffee-panel" aria-labelledby="coffee-tab" />
      </ComponentSection>
    </Doc>
  );
};

TabsAccessibility.storyName = 'Accessibility';
