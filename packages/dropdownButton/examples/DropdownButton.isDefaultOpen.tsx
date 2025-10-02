import React from 'react';
import DropdownButton from '@8x8/oxygen-dropdown-button';

import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

export const DropdownButtonIsDefaultOpen = args => (
  <>
    <Doc>
      <h1>
        <code>DropdownButton</code> isDefaultOpen
      </h1>
      <h2>
        <code>isDefaultOpen</code>
        <p>DropdownButton open when rendered</p>
      </h2>
      <pre>
        {`import DropdownButton from '@8x8/oxygen-dropdown-button';

<DropdownButton buttonText="Example Button" isDefaultOpen>
  <List>
    <ListItem>Item 1</ListItem>
    <ListItem isDisabled>Item 2 - is disabled</ListItem>
    <ListItem>Item 3 - has a extremely long name</ListItem>
    <ListItem>Item 4</ListItem>
    <ListItem title="Title">Item 5</ListItem>
    <ListItem>Item 6</ListItem>
    <ListItem>Item 7</ListItem>
  </List>
</DropdownButton>`}
      </pre>
    </Doc>
    <ComponentSection>
      <DropdownButton {...args} isDefaultOpen />
    </ComponentSection>
  </>
);

DropdownButtonIsDefaultOpen.storyName = 'isDefaultOpen';
DropdownButtonIsDefaultOpen.args = argsConfig;
DropdownButtonIsDefaultOpen.argTypes = argTypesConfig;
