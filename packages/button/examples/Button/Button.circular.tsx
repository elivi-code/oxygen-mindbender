import React from 'react';

import Button from '@8x8/oxygen-button';
import {
  PhoneIcon,
  HangupIcon,
  MicSlashIcon,
  AddReactionIcon,
} from '@8x8/oxygen-icon';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { argsConfig, argTypesConfig } from '../config';

export const CircularButton = args => (
  <>
    <Doc>
      <h1>
        Circular <code>Button</code>
      </h1>
      <p>
        Circular <code>Button</code>s are used mostly for Call controls. This is
        achived via the <code>isCircular</code> prop, and they should have an{' '}
        <code>Icon</code> as content
      </p>
      <pre>
        {`
import Button from '@8x8/oxygen-button';
import { AddReactionIcon } from '@8x8/oxygen-icon';

<Button isCircular><AddReactionIcon /></Button>
<Button isCircular isActive><AddReactionIcon /></Button>
<Button isCircular isDisabled><AddReactionIcon /></Button>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Button {...args} isCircular>
        <AddReactionIcon />
      </Button>
      <Button {...args} isActive isCircular>
        <AddReactionIcon />
      </Button>
      <Button {...args} isDisabled isCircular>
        <AddReactionIcon />
      </Button>
    </ComponentSection>
    <Doc>
      <h2>
        <code>isCircular</code> buttons across multiple variants
      </h2>
      <p>
        <code>primary</code>
      </p>
      <pre>
        {`
import Button from '@8x8/oxygen-button';
import { AddReactionIcon } from '@8x8/oxygen-icon';

<Button variant="primary" isCircular><AddReactionIcon /></Button>
<Button variant="primary" isCircular isActive><AddReactionIcon /></Button>
<Button variant="primary" isCircular isDisabled><AddReactionIcon /></Button>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Button {...args} variant="primary" isCircular>
        <AddReactionIcon />
      </Button>
      <Button {...args} variant="primary" isActive isCircular>
        <AddReactionIcon />
      </Button>
      <Button {...args} variant="primary" isDisabled isCircular>
        <AddReactionIcon />
      </Button>
    </ComponentSection>
    <Doc>
      <p>
        <code>secondary</code>
      </p>
      <pre>
        {`
import Button from '@8x8/oxygen-button';
import { AddReactionIcon } from '@8x8/oxygen-icon';

<Button variant="secondary" isCircular><AddReactionIcon /></Button>
<Button variant="secondary" isCircular isActive><AddReactionIcon /></Button>
<Button variant="secondary" isCircular isDisabled><AddReactionIcon /></Button>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Button {...args} variant="secondary" isCircular>
        <AddReactionIcon />
      </Button>
      <Button {...args} variant="secondary" isActive isCircular>
        <AddReactionIcon />
      </Button>
      <Button {...args} variant="secondary" isDisabled isCircular>
        <AddReactionIcon />
      </Button>
    </ComponentSection>
    <Doc>
      <p>
        <code>tertiary</code> This is used for various call-related options,
        other than call and hang-up.
      </p>
      <pre>
        {`
import Button from '@8x8/oxygen-button';
import { MicSlashIcon } from '@8x8/oxygen-icon';

<Button variant="tertiary" isCircular><MicSlashIcon /></Button>
<Button variant="tertiary" isCircular isActive><MicSlashIcon /></Button>
<Button variant="tertiary" isCircular isDisabled><MicSlashIcon /></Button>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Button {...args} variant="tertiary" isCircular>
        <MicSlashIcon />
      </Button>
      <Button {...args} variant="tertiary" isActive isCircular>
        <MicSlashIcon />
      </Button>
      <Button {...args} variant="tertiary" isDisabled isCircular>
        <MicSlashIcon />
      </Button>
    </ComponentSection>
    <Doc>
      <p>
        <code>tertiaryReversed</code> same as above, but on reversed (inverted)
        backgrounds
      </p>
      <pre>
        {`
import Button from '@8x8/oxygen-button';
import { MicSlashIcon } from '@8x8/oxygen-icon';

<Button variant="tertiaryReversed" isCircular><MicSlashIcon /></Button>
<Button variant="tertiaryReversed" isCircular isActive><MicSlashIcon /></Button>
<Button variant="tertiaryReversed" isCircular isDisabled><MicSlashIcon /></Button>
        `}
      </pre>
    </Doc>
    <ComponentSection reversed>
      <Button {...args} variant="tertiaryReversed" isCircular>
        <MicSlashIcon />
      </Button>
      <Button {...args} variant="tertiaryReversed" isActive isCircular>
        <MicSlashIcon />
      </Button>
      <Button {...args} variant="tertiaryReversed" isDisabled isCircular>
        <MicSlashIcon />
      </Button>
    </ComponentSection>
    <Doc>
      <p>
        <code>success</code> used as Call action
      </p>
      <pre>
        {`
import Button from '@8x8/oxygen-button';
import { PhoneIcon } from '@8x8/oxygen-icon';

<Button variant="success" isCircular><PhoneIcon /></Button>
<Button variant="success" isCircular isActive><PhoneIcon /></Button>
<Button variant="success" isCircular isDisabled><PhoneIcon /></Button>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Button {...args} variant="success" isCircular>
        <PhoneIcon />
      </Button>
      <Button {...args} variant="success" isActive isCircular>
        <PhoneIcon />
      </Button>
      <Button {...args} variant="success" isDisabled isCircular>
        <PhoneIcon />
      </Button>
    </ComponentSection>
    <Doc>
      <p>
        <code>destructive</code> used as Hangup action
      </p>
      <pre>
        {`
import Button from '@8x8/oxygen-button';
import { PhoneIcon } from '@8x8/oxygen-icon';

<Button variant="destructive" isCircular><HangupIcon /></Button>
<Button variant="destructive" isCircular isActive><HangupIcon /></Button>
<Button variant="destructive" isCircular isDisabled><HangupIcon /></Button>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Button {...args} variant="destructive" isCircular>
        <HangupIcon />
      </Button>
      <Button {...args} variant="destructive" isActive isCircular>
        <HangupIcon />
      </Button>
      <Button {...args} variant="destructive" isDisabled isCircular>
        <HangupIcon />
      </Button>
    </ComponentSection>
  </>
);
CircularButton.storyName = 'Button isCircular';
CircularButton.args = argsConfig;
CircularButton.argTypes = argTypesConfig;
