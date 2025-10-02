import React from 'react';

import Button, { ButtonGroup } from '@8x8/oxygen-button';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { buttonGroupArgsConfig, buttonGroupArgTypesConfig } from '../config';

export const ButtonGroupStory = args => (
  <>
    <Doc>
      <h1>
        <code>ButtonGroup</code> component
      </h1>
      <p>
        Use the <code>ButtonGroup</code> component to handle multiple{' '}
        <code>Button</code> components. It handles alignment and spacing.
      </p>
      <pre>
        {`
import Button, { ButtonGroup } from '@8x8/oxygen-button';

<ButtonGroup>
  <Button>Button 1</Button>
  <Button variant="secondary">Button 2</Button>
  <Button variant="destructive">Button 3</Button>
</ButtonGroup>
        `}
      </pre>
    </Doc>
    <ComponentSection block>
      <ButtonGroup {...args}>
        <Button>Button 1</Button>
        <Button variant="secondary">Button 2</Button>
        <Button variant="destructive">Button 3</Button>
      </ButtonGroup>
    </ComponentSection>
    <Doc>
      <h1>
        Use the <code>align</code> prop to align the inner <code>Button</code>s
        as <code>center</code>, <code>left</code>, or <code>right</code>
      </h1>
      <h2>
        align <code>center</code>
      </h2>
      <p>This is also the default value</p>
      <pre>
        {`
import Button, { ButtonGroup } from '@8x8/oxygen-button';

<ButtonGroup align="center">
  <Button>Button 1</Button>
  <Button variant="secondary">Button 2</Button>
  <Button variant="destructive">Button 3</Button>
</ButtonGroup>
        `}
      </pre>
    </Doc>
    <ComponentSection block>
      <ButtonGroup {...args} align="center">
        <Button>Button 1</Button>
        <Button variant="secondary">Button 2</Button>
        <Button variant="destructive">Button 3</Button>
      </ButtonGroup>
    </ComponentSection>
    <Doc>
      <h2>
        align <code>left</code>
      </h2>
      <pre>
        {`
import Button, { ButtonGroup } from '@8x8/oxygen-button';

<ButtonGroup align="left">
  <Button>Button 1</Button>
  <Button variant="secondary">Button 2</Button>
  <Button variant="destructive">Button 3</Button>
</ButtonGroup>
        `}
      </pre>
    </Doc>
    <ComponentSection block>
      <ButtonGroup {...args} align="left">
        <Button>Button 1</Button>
        <Button variant="secondary">Button 2</Button>
        <Button variant="destructive">Button 3</Button>
      </ButtonGroup>
    </ComponentSection>
    <Doc>
      <h2>
        align <code>right</code>
      </h2>
      <pre>
        {`
import Button, { ButtonGroup } from '@8x8/oxygen-button';

<ButtonGroup align="right">
  <Button>Button 1</Button>
  <Button variant="secondary">Button 2</Button>
  <Button variant="destructive">Button 3</Button>
</ButtonGroup>
        `}
      </pre>
    </Doc>
    <ComponentSection block>
      <ButtonGroup {...args} align="right">
        <Button>Button 1</Button>
        <Button variant="secondary">Button 2</Button>
        <Button variant="destructive">Button 3</Button>
      </ButtonGroup>
    </ComponentSection>
    <Doc>
      <h2>
        spacing <code>large</code>
      </h2>
      <p>This is also the default value</p>
      <pre>
        {`
import Button, { ButtonGroup } from '@8x8/oxygen-button';

<ButtonGroup spacing="large">
  <Button>Button 1</Button>
  <Button variant="secondary">Button 2</Button>
  <Button variant="destructive">Button 3</Button>
</ButtonGroup>
        `}
      </pre>
    </Doc>
    <ComponentSection block>
      <ButtonGroup {...args} spacing="large">
        <Button>Button 1</Button>
        <Button variant="secondary">Button 2</Button>
        <Button variant="destructive">Button 3</Button>
      </ButtonGroup>
    </ComponentSection>
    <Doc>
      <h2>
        spacing <code>small</code>
      </h2>
      <p>Use this mostly for small sized buttons</p>
      <pre>
        {`
import Button, { ButtonGroup } from '@8x8/oxygen-button';

<ButtonGroup spacing="small">
  <Button size="small">Button 1</Button>
  <Button size="small" variant="secondary">
    Button 2
  </Button>
  <Button size="small" variant="destructive">
    Button 3
  </Button>
</ButtonGroup>
        `}
      </pre>
    </Doc>
    <ComponentSection block>
      <ButtonGroup {...args} spacing="small">
        <Button size="small">Button 1</Button>
        <Button size="small" variant="secondary">
          Button 2
        </Button>
        <Button size="small" variant="destructive">
          Button 3
        </Button>
      </ButtonGroup>
    </ComponentSection>
  </>
);
ButtonGroupStory.storyName = 'ButtonGroup';
ButtonGroupStory.args = buttonGroupArgsConfig;
ButtonGroupStory.argTypes = buttonGroupArgTypesConfig;
