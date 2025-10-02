import React from 'react';

import { FaqIcon, GearIcon, HandshakeIcon } from '@8x8/oxygen-icon';

import Tabs, { Tab } from '@8x8/oxygen-tabs';

import {
  Section,
  Headline,
  ComponentSection,
} from '@8x8/oxygen-storybook-utils';

export default {
  title: 'Components/Tabs',
  parameters: {
    chromatic: { disable: false },
  },
};

export const Guidelines = () => (
  <>
    <Section>
      <Headline>Classic</Headline>
      <Headline>Light Tabs</Headline>
      <ComponentSection>
        <Tabs color="light">
          <Tab color="light" isActive>
            Tab 1
          </Tab>
          <Tab color="light" title="Tab 2 is really long">
            Tab 2 is really long
          </Tab>
          <Tab color="light">Tab 3</Tab>
          <Tab color="light">Tab 4</Tab>
          <Tab color="light">Tab 5</Tab>
          <Tab color="light">Tab 6</Tab>
          <Tab color="light">Tab 7</Tab>
        </Tabs>
      </ComponentSection>
      <Headline>Dark Tabs</Headline>
      <ComponentSection>
        <Tabs color="dark">
          <Tab color="dark">Tab 1</Tab>
          <Tab color="dark" isActive>
            Tab 2
          </Tab>
        </Tabs>
      </ComponentSection>
      <Headline>Icon - Light Tabs</Headline>
      <ComponentSection>
        <Tabs>
          <Tab isStretched isActive>
            <FaqIcon title="Frequently Asked Questions" />
          </Tab>
          <Tab isStretched>
            <GearIcon title="Account" />
          </Tab>
          <Tab isStretched>
            <HandshakeIcon title="Coffee" />
          </Tab>
        </Tabs>
      </ComponentSection>
      <Headline>Icon - Dark Tabs</Headline>
      <ComponentSection>
        <Tabs color="dark">
          <Tab color="dark" isStretched isActive>
            <FaqIcon invertColors title="Frequently Asked Questions" />
          </Tab>
          <Tab color="dark" isStretched>
            <GearIcon invertColors title="Account" />
          </Tab>
          <Tab color="dark" isStretched>
            <HandshakeIcon invertColors title="Coffee" />
          </Tab>
        </Tabs>
      </ComponentSection>
      <Headline>With isStretched on one tab</Headline>
      <ComponentSection>
        <Tabs>
          <Tab isActive>Tab 1</Tab>
          <Tab isStretched title="Tab 2 is really long">
            Tab 2 is really long
          </Tab>
          <Tab>Tab 3</Tab>
          <Tab>Tab 4</Tab>
          <Tab>Tab 5</Tab>
          <Tab>Tab 6</Tab>
          <Tab>Tab 7</Tab>
        </Tabs>
      </ComponentSection>
      <Headline>With disabled tab</Headline>
      <ComponentSection>
        <Tabs>
          <Tab isActive>Tab 1</Tab>
          <Tab isDisabled title="Tab 2 is really long">
            Tab 2 is really long
          </Tab>
          <Tab>Tab 3</Tab>
          <Tab>Tab 4</Tab>
          <Tab>Tab 5</Tab>
          <Tab>Tab 6</Tab>
          <Tab>Tab 7</Tab>
        </Tabs>
      </ComponentSection>
      <Headline>With isStretched on each tab</Headline>
      <ComponentSection>
        <Tabs>
          <Tab isStretched isActive>
            Tab 1
          </Tab>
          <Tab isStretched title="Tab 2 is really long">
            Tab 2 is really long
          </Tab>
          <Tab isStretched>Tab 3</Tab>
          <Tab isStretched>Tab 4</Tab>
          <Tab isStretched>Tab 5</Tab>
          <Tab isStretched>Tab 6</Tab>
          <Tab isStretched>Tab 7</Tab>
        </Tabs>
      </ComponentSection>
    </Section>
    <Section>
      <Headline>Novo</Headline>
      <Headline>Default</Headline>
      <ComponentSection>
        <Tabs>
          <Tab isActive>Tab 1</Tab>
          <Tab title="Tab 2 is really long">Tab 2 is really long</Tab>
          <Tab>Tab 3</Tab>
          <Tab>Tab 4</Tab>
          <Tab>Tab 5</Tab>
          <Tab>Tab 6</Tab>
          <Tab>Tab 7</Tab>
        </Tabs>
      </ComponentSection>
      <Headline>With disabled tab</Headline>
      <ComponentSection>
        <Tabs>
          <Tab isActive>Tab 1</Tab>
          <Tab isDisabled title="Tab 2 is really long">
            Tab 2 is really long
          </Tab>
          <Tab>Tab 3</Tab>
          <Tab>Tab 4</Tab>
          <Tab>Tab 5</Tab>
          <Tab>Tab 6</Tab>
          <Tab>Tab 7</Tab>
        </Tabs>
      </ComponentSection>
      <Headline>With isStretched on one tab</Headline>
      <ComponentSection>
        <Tabs>
          <Tab isActive>Tab 1</Tab>
          <Tab isStretched title="Tab 2 is really long">
            Tab 2 is really long
          </Tab>
          <Tab>Tab 3</Tab>
          <Tab>Tab 4</Tab>
          <Tab>Tab 5</Tab>
          <Tab>Tab 6</Tab>
          <Tab>Tab 7</Tab>
        </Tabs>
      </ComponentSection>
      <Headline>With isStretched on each tab</Headline>
      <ComponentSection>
        <Tabs>
          <Tab isStretched isActive>
            Tab 1
          </Tab>
          <Tab isStretched title="Tab 2 is really long">
            Tab 2 is really long
          </Tab>
          <Tab isStretched>Tab 3</Tab>
          <Tab isStretched>Tab 4</Tab>
          <Tab isStretched>Tab 5</Tab>
          <Tab isStretched>Tab 6</Tab>
          <Tab isStretched>Tab 7</Tab>
        </Tabs>
      </ComponentSection>
      <Headline>By default Tabs inherit parent background color</Headline>
      <ComponentSection style={{ backgroundColor: 'red' }}>
        <Tabs>
          <Tab isStretched isActive>
            Tab 1
          </Tab>
          <Tab isStretched title="Tab 2 is really long">
            Tab 2 is really long
          </Tab>
          <Tab isStretched>Tab 3</Tab>
          <Tab isStretched>Tab 4</Tab>
          <Tab isStretched>Tab 5</Tab>
          <Tab isStretched>Tab 6</Tab>
          <Tab isStretched>Tab 7</Tab>
        </Tabs>
      </ComponentSection>
    </Section>
  </>
);

Guidelines.storyName = '01. Guidelines';
