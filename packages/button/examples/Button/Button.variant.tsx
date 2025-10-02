import React from 'react';

import Button from '@8x8/oxygen-button';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { argsConfig, argTypesConfig } from '../config';

export const ButtonVariant = args => (
  <>
    <Doc>
      <h1>
        <code>Button</code> variant
      </h1>
      <p>
        The <code>Button</code> component supports 5 variants:{' '}
        <code>primary</code> (default), <code>secondary</code>,{' '}
        <code>success</code> <code>tertiary</code> and{' '}
        <code>tertiaryReversed</code>
      </p>
      <p>
        The examples below show for each variant multiple button states (
        <code>default</code>, <code>isActive</code>, and <code>isDisabled</code>
        )
      </p>
      <pre>
        {`
import Button from '@8x8/oxygen-button';

<Button>Click me</Button>
<Button isActive>Click me</Button>
<Button isDisabled>Click me</Button>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Button {...args} />
      <Button {...args} isActive />
      <Button {...args} isDisabled />
    </ComponentSection>
    <Doc>
      <h2>
        variant <code>primary</code> (default)
      </h2>
      <p>Most buttons should look like this</p>
      <pre>
        {`
import Button from '@8x8/oxygen-button';

<Button variant="primary">Click me</Button>
<Button variant="primary" isActive>Click me</Button>
<Button variant="primary" isDisabled>Click me</Button>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Button {...args} variant="primary" />
      <Button {...args} variant="primary" isActive />
      <Button {...args} variant="primary" isDisabled />
    </ComponentSection>
    <Doc>
      <h2>
        variant <code>secondary</code>
      </h2>
      <p>
        If you have multiple actions on a form, use the <code>primary</code>{' '}
        variant for the happy flow / most used item and the{' '}
        <code>secondary</code> variant for the other options
      </p>
      <pre>
        {`
import Button from '@8x8/oxygen-button';

<Button variant="secondary">Click me</Button>
<Button variant="secondary" isActive>Click me</Button>
<Button variant="secondary" isDisabled>Click me</Button>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Button {...args} variant="secondary" />
      <Button {...args} variant="secondary" isActive />
      <Button {...args} variant="secondary" isDisabled />
    </ComponentSection>
    <Doc>
      <h2>
        variant <code>tertiary</code>
      </h2>
      <p>
        Use case is mostly together with <code>isCircular</code> for
        phone-related buttons
      </p>
      <blockquote>
        ⚠️ <strong>Note</strong> that the default state for the{' '}
        <code>tertiary</code> variant has a <code>transparent</code> background
      </blockquote>
      <pre>
        {`
import Button from '@8x8/oxygen-button';

<Button variant="secondary">Click me</Button>
<Button variant="secondary" isActive>Click me</Button>
<Button variant="secondary" isDisabled>Click me</Button>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Button {...args} variant="tertiary" />
      <Button {...args} variant="tertiary" isActive />
      <Button {...args} variant="tertiary" isDisabled />
    </ComponentSection>
    <Doc>
      <h2>
        variant <code>tertiaryReversed</code>
      </h2>
      <p>
        Same as <code>tertiary</code> but used against negative (inverted)
        backgrounds
      </p>
      <pre>
        {`
import Button from '@8x8/oxygen-button';

<Button variant="tertiaryReversed">Click me</Button>
<Button variant="tertiaryReversed" isActive>Click me</Button>
<Button variant="tertiaryReversed" isDisabled>Click me</Button>
        `}
      </pre>
    </Doc>
    <ComponentSection reversed>
      <Button {...args} variant="tertiaryReversed" />
      <Button {...args} variant="tertiaryReversed" isActive />
      <Button {...args} variant="tertiaryReversed" isDisabled />
    </ComponentSection>
    <Doc>
      <h2>
        variant <code>text</code>
      </h2>
      <p>This has a transparent background</p>
      <pre>
        {`
import Button from '@8x8/oxygen-button';

<Button variant="text">Click me</Button>
<Button variant="text" isActive>Click me</Button>
<Button variant="text" isDisabled>Click me</Button>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Button {...args} variant="text" />
      <Button {...args} variant="text" isActive />
      <Button {...args} variant="text" isDisabled />
    </ComponentSection>
    <Doc>
      <h2>
        variant <code>success</code>
      </h2>
      <p>
        Use case is mostly together with <code>isCircular</code> for
        phone-related buttons. This is the answer button
      </p>
      <pre>
        {`
import Button from '@8x8/oxygen-button';

<Button variant="success">Click me</Button>
<Button variant="success" isActive>Click me</Button>
<Button variant="success" isDisabled>Click me</Button>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Button {...args} variant="success" />
      <Button {...args} variant="success" isActive />
      <Button {...args} variant="success" isDisabled />
    </ComponentSection>
  </>
);
ButtonVariant.storyName = 'Button variant';
ButtonVariant.args = argsConfig;
ButtonVariant.argTypes = argTypesConfig;
