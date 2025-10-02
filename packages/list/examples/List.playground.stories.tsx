import React from 'react';
import List, { ListItem } from '@8x8/oxygen-list';

import { PlaygroundDecorator } from '@8x8/oxygen-storybook-utils';

export const PlaygroundList = args => (
  <div>
    <List {...args}>
      <ListItem>{args.text.item1}</ListItem>
      <ListItem>{args.text.item2}</ListItem>
      <ListItem>{args.text.item3}</ListItem>
      <ListItem>{args.text.item4}</ListItem>
    </List>
  </div>
);
PlaygroundList.args = {
  isGroup: false,
  isOrdered: false,
  withBackground: true,
  text: {
    item1: 'Item 1',
    item2: 'Item 2',
    item3: 'Item 3',
    item4: 'Item 4',
  },
};
PlaygroundList.storyName = '10. Playground';

export default {
  title: 'Components/List',
  component: List,
  decorators: [PlaygroundDecorator],
};
