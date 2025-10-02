import React from 'react';
import List, { ListItem } from '@8x8/oxygen-list';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';

export const ListAccessibility = () => (
  <Doc>
    <h1>
      <code>List</code> accessibility
    </h1>
    <p>
      The <code>List</code> component has almost all necessary aria-* roles by
      default because of semantic HTML.
    </p>
    <p>
      Note: Children elements are responsible for adding their own aria-* roles.
      <br />
      Here&apos;s an example on how to achieve an accessible <code>
        List
      </code>{' '}
      with <code>ListItem</code> components as children.
    </p>
    <pre>
      {`import List, { ListItem } from '@8x8/oxygen-list';

<List>
  <ListItem>Item 1</ListItem>
  <ListItem>Item 2</ListItem>
  <ListItem>Item 3</ListItem>
  <ListItem isDisabled>Item 4 - disabled</ListItem>
</List>
`}
    </pre>
    <ComponentSection block>
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
        <ListItem isDisabled>Item 4 - disabled</ListItem>
      </List>
    </ComponentSection>
  </Doc>
);

ListAccessibility.storyName = 'Accessibility';
