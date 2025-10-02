import React from 'react';
import DropdownButton from '@8x8/oxygen-dropdown-button';

import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

export const DropdownButtonShouldCloseOnInsideClick = args => (
  <>
    <Doc>
      <h1>
        <code>DropdownButton</code> shouldCloseOnInsideClick
      </h1>
      <h2>
        <code>shouldCloseOnInsideClick=&#123;false&#125;</code>
      </h2>
      <p>Keeps the DropdownOpen open on inside clicks</p>

      <pre>
        {`import DropdownButton from '@8x8/oxygen-dropdown-button';

<DropdownButton buttonText="Example Button" shouldCloseOnInsideClick={false}>
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
      <DropdownButton {...args} shouldCloseOnInsideClick={false} />
    </ComponentSection>
  </>
);

DropdownButtonShouldCloseOnInsideClick.storyName = 'shouldCloseOnInsideClick';
DropdownButtonShouldCloseOnInsideClick.args = argsConfig;
DropdownButtonShouldCloseOnInsideClick.argTypes = argTypesConfig;
