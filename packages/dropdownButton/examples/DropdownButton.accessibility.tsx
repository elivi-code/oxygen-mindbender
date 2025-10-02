import React from 'react';
import DropdownButton from '@8x8/oxygen-dropdown-button';
import List, { ListItem } from '@8x8/oxygen-list';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

export const DropdownButtonAccessibility = args => (
  <>
    <Doc>
      <h1>
        <code>DropdownButton</code> accessibility
      </h1>
      <p>
        The <code>DropdownButton</code> component has all necessary{' '}
        <code>aria-*</code> roles (<code>aria-haspopup</code>,{' '}
        <code>aria-expanded</code>, <code>aria-hidden</code> for svg). You can
        add more aria roles (<code>aria-controls</code>, etc), if necessary,
        from parent components.
      </p>
      <p>
        Note: Children elements are responsible for adding their own{' '}
        <code>aria-*</code>
        roles.
        <br />
        Here&apos;s an example on how to achieve an accessible{' '}
        <code>DropdownButton</code> with a <code>List</code> as children
      </p>
      <pre>
        {`import DropdownButton from '@8x8/oxygen-dropdown-button';
import { PlusIcon } from '@8x8/oxygen-icon';
import List, { ListItem } from '@8x8/oxygen-list';

<DropdownButton
  buttonText="Example Button"
  aria-controls="menu1"
  id="menubutton1"
>
  <List role="menu" aria-labelledby="menubutton1" id="menu1">
    <ListItem role="menuitem">Item 1</ListItem>
    <ListItem role="menuitem">Item 2</ListItem>
    <ListItem role="menuitem">Item 3</ListItem>
  </List>
</DropdownButton>`}
      </pre>
    </Doc>
    <ComponentSection>
      <DropdownButton {...args} aria-controls="menu1" id="menubutton1">
        <List role="menu" aria-labelledby="menubutton1" id="menu1">
          <ListItem role="menuitem">Item 1</ListItem>
          <ListItem role="menuitem">Item 2</ListItem>
          <ListItem role="menuitem">Item 3</ListItem>
        </List>
      </DropdownButton>
    </ComponentSection>
  </>
);

DropdownButtonAccessibility.storyName = 'Accessibility';
DropdownButtonAccessibility.args = argsConfig;
DropdownButtonAccessibility.argTypes = argTypesConfig;
