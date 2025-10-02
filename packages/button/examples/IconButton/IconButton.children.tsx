import React from 'react';

import { AddReactionIcon } from '@8x8/oxygen-icon';
import { IconButton } from '@8x8/oxygen-button';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { iconButtonArgsConfig, iconButtonArgTypesConfig } from '../config';

export const Children = args => (
  <>
    <Doc>
      <h1>
        <code>IconButton</code> in multiple scenarios regarding children
      </h1>
      <p>
        Note that the <code>children</code> prop is disabled for this story
        since the children are specific to each example.
      </p>
      <h2>
        <code>IconButton</code> with multiple children
      </h2>
      <p>
        Having multiple children is <em>out of scope</em> for this component. It
        should still work, but it&apos;s not something this has been designed
        for.
      </p>
      <pre>
        {`
import { IconButton } from '@8x8/oxygen-button';
import { AddReactionIcon } from '@8x8/oxygen-icon';

<IconButton>
  <AddReactionIcon />
  <AddReactionIcon />
</IconButton>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <IconButton {...args}>
        <AddReactionIcon />
        <AddReactionIcon />
      </IconButton>
    </ComponentSection>

    <Doc>
      <h2>
        <code>IconButton</code> with non icon children
      </h2>
      <p>
        The <code>IconButton</code> component will also work with any renderable
        children, though this is also not an official feature.
      </p>
      <pre>
        {`
import { IconButton } from '@8x8/oxygen-button';

<IconButton>Some regular text</IconButton>
        `}
      </pre>
      <ComponentSection>
        <IconButton {...args}>Some regular text</IconButton>
      </ComponentSection>
    </Doc>

    <Doc>
      <h2>
        <code>IconButton</code> with no children
      </h2>
      <p>No usage expected like this, but it should not throw.</p>
      <pre>
        {`
<IconButton />
        `}
      </pre>
      <ComponentSection>
        <IconButton {...args} />
      </ComponentSection>
      <p>
        If you have usages like this please contact the Oxygen team, so we can
        understand the requirements.
      </p>
    </Doc>
  </>
);
Children.storyName = 'Children';
Children.args = iconButtonArgsConfig;
Children.argTypes = {
  ...iconButtonArgTypesConfig,
  children: {
    control: {
      type: null,
    },
    table: {
      disable: true,
    },
  },
};
