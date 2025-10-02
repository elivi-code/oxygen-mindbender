import React from 'react';
import { action } from 'storybook/actions';
import Tabs, { Tab } from '@8x8/oxygen-tabs';

import { PlaygroundDecorator } from '@8x8/oxygen-storybook-utils';

export const PlaygroundTabs = args => {
  const stretchTabKnob = tabNb =>
    args.allTabsStretched || tabNb === args.stretchSpecificTab;

  return (
    <Tabs {...args}>
      <Tab
        {...args}
        isActive={args.tab1Active}
        isStretched={stretchTabKnob(1)}
        onClick={action('Tab 1 - clicked')}
      >
        Tab 1
      </Tab>
      <Tab
        {...args}
        isStretched={stretchTabKnob(2)}
        onClick={action('Tab 2 - clicked')}
      >
        {args.tab2Content}
      </Tab>
      <Tab
        {...args}
        isDisabled={args.tab3IsDisabled}
        isStretched={stretchTabKnob(3)}
        onClick={action('Tab 3 - clicked')}
      >
        Tab 3
      </Tab>
      <Tab
        {...args}
        isStretched={stretchTabKnob(4)}
        onClick={action('Tab 4 - clicked')}
      >
        Tab 4
      </Tab>
      <Tab
        {...args}
        isStretched={stretchTabKnob(5)}
        onClick={action('Tab 5 - clicked')}
      >
        Tab 5
      </Tab>
    </Tabs>
  );
};
PlaygroundTabs.args = {
  color: 'light',
  tab1Active: true,
  tab2Content: 'Tab 2 - is really long',
  tab3IsDisabled: true,
  allTabsStretched: false,
  stretchSpecificTab: null,
};
PlaygroundTabs.argTypes = {
  color: {
    control: {
      type: 'select',
    },
    options: ['light', 'dark'],
  },
  stretchSpecificTab: {
    control: {
      type: 'select',
      options: [null, 1, 2, 3, 4, 5],
    },
  },
};
PlaygroundTabs.storyName = '10. Playground';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  decorators: [PlaygroundDecorator],
};
