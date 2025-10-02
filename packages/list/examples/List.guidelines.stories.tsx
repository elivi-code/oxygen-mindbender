import React from 'react';

import List, { ListItem } from '@8x8/oxygen-list';

import {
  Label,
  Section,
  Headline,
  ComponentSection,
} from '@8x8/oxygen-storybook-utils';

export default {
  title: 'Components/List',
  parameters: {
    chromatic: { disable: false },
  },
};

export const Guidelines = () => (
  <>
    <Section>
      <Headline>Unordered list - Guidelines</Headline>
      <ComponentSection>
        <div>
          <Label>Unordered list</Label>
          <List withBackground>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </div>
        <div>
          <Label>Unordered list as a group</Label>
          <List isGroup withBackground>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
          </List>
          <List withBackground>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </div>
        <div>
          <Label>Unordered list with disabled item</Label>
          <List withBackground>
            <ListItem>Item 1</ListItem>
            <ListItem isDisabled>Item 2 - is disabled</ListItem>
            <ListItem isActive>Item 3 - is active</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </div>
      </ComponentSection>
    </Section>
    <Section>
      <Headline>Ordered list - Guidelines</Headline>
      <ComponentSection>
        <div>
          <Label>Ordered list</Label>
          <List withBackground isOrdered>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </div>
        <div>
          <Label>Ordered list with disabled item</Label>
          <List withBackground isOrdered theme={{ listMaxWidth: '200px' }}>
            <ListItem>Item 1</ListItem>
            <ListItem isDisabled>Item 2 - is disabled</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4 - has very long item name</ListItem>
          </List>
        </div>
      </ComponentSection>
    </Section>
  </>
);

Guidelines.storyName = '01. Guidelines';
