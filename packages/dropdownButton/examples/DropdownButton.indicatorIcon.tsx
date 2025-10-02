import React from 'react';
import DropdownButton from '@8x8/oxygen-dropdown-button';
import { PlusIcon } from '@8x8/oxygen-icon';

import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

export const DropdownButtonIndicatorIcon = args => (
  <>
    <Doc>
      <h1>
        <code>DropdownButton</code> indicatorIcon
      </h1>
      <p>
        The <code>DropdownButton</code> component allows some customization of
        the icon
      </p>
      <h2>Default icon</h2>
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
      <h2>Custom icon</h2>
      <p>Pass in a React Component (usually another icon)</p>
      <pre>
        {`import DropdownButton from '@8x8/oxygen-dropdown-button';

<DropdownButton buttonText="Example Button" indicatorIcon={PlusIcon}>
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
      <DropdownButton {...args} indicatorIcon={PlusIcon} />
    </ComponentSection>
    <Doc>
      <h2>No icon</h2>
      <p>
        Set the value to <code>false</code> for no icon
      </p>
      <pre>
        {`import DropdownButton from '@8x8/oxygen-dropdown-button';
import { PlusIcon } from '@8x8/oxygen-icon';

<DropdownButton buttonText="Example Button" indicatorIcon={false}>
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
      <DropdownButton {...args} indicatorIcon={false} />
    </ComponentSection>
  </>
);

DropdownButtonIndicatorIcon.storyName = 'indicatorIcon';
DropdownButtonIndicatorIcon.args = argsConfig;
DropdownButtonIndicatorIcon.argTypes = argTypesConfig;
