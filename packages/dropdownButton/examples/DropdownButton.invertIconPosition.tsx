import React from 'react';
import DropdownButton from '@8x8/oxygen-dropdown-button';

import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

export const DropdownButtonInvertIconPosition = args => (
  <>
    <Doc>
      <h1>
        <code>DropdownButton</code> invertIconPosition
      </h1>
      <h2>Defaul icon position</h2>
      <pre>
        {`import DropdownButton from '@8x8/oxygen-dropdown-button';

<DropdownButton buttonText="Example Button">
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
      <DropdownButton {...args} />
    </ComponentSection>
    <Doc>
      <h2>
        <code>invertIconPosition</code>
      </h2>
      <pre>
        {`import DropdownButton from '@8x8/oxygen-dropdown-button';

<DropdownButton buttonText="Example Button" invertIconPosition>
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
      <DropdownButton {...args} invertIconPosition />
    </ComponentSection>
  </>
);

DropdownButtonInvertIconPosition.storyName = 'invertIconPosition';
DropdownButtonInvertIconPosition.args = argsConfig;
DropdownButtonInvertIconPosition.argTypes = argTypesConfig;
