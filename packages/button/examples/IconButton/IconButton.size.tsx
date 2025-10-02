import React from 'react';
import { IconButton, iconButtonSize } from '@8x8/oxygen-button';
import { AddReactionIcon } from '@8x8/oxygen-icon';
import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { iconButtonArgsConfig, iconButtonArgTypesConfig } from '../config';

const sizes = [
  iconButtonSize.small2XIconXs,
  iconButtonSize.smallXIconS,
  iconButtonSize.smallIconM,
  iconButtonSize.smallIconS,
  iconButtonSize.smallIconXs,
  iconButtonSize.mediumIconL,
  iconButtonSize.mediumIconM,
  iconButtonSize.mediumIconS,
  iconButtonSize.largeIconL,
  iconButtonSize.largeIconM,
];

const generateExample = size => (
  <>
    <Doc>
      <h2>
        <code>size</code> <code>{size}</code>
      </h2>
      <pre>
        {`
import { IconButton, iconButtonSize } from '@8x8/oxygen-button';
import { AddReactionIcon } from '@8x8/oxygen-icon';

<IconButton size={iconButtonSize.${size}}>
  <AddReactionIcon />
</IconButton>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <IconButton size={size}>
        <AddReactionIcon />
      </IconButton>
    </ComponentSection>
  </>
);

export const IconButtonSize = args => (
  <>
    <Doc>
      <h1>
        <code>IconButton</code> prop <code>size</code>
      </h1>
      <p>
        The size prop can take one of the following values:{' '}
        <code>small2XIconXs</code>, <code>smallXIconS</code>,
        <code>smallIconM</code>, <code>smallIconS</code>,{' '}
        <code>smallIconXs</code>, <code>mediumIconL</code>,{' '}
        <code>mediumIconM</code>, <code>mediumIconS</code>,{' '}
        <code>largeIconL</code>, <code>largeIconM</code>
      </p>
      <p>
        Example with no <code>size</code> specified, will show the default size.
      </p>
      <pre>
        {`
import { IconButton } from '@8x8/oxygen-button';
import { AddReactionIcon } from '@8x8/oxygen-icon';

<IconButton>
  <AddReactionIcon />
</IconButton>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <IconButton {...args}>
        <AddReactionIcon />
      </IconButton>
    </ComponentSection>
    {sizes.map(size => generateExample(size))}
    <Doc>
      <h2>
        <code>Custom Icon Size</code>
      </h2>
      <pre>
        {`
import { IconButton } from '@8x8/oxygen-button';
import { AddReactionIcon } from '@8x8/oxygen-icon';

<IconButton>
  <AddReactionIcon size={100} />
</IconButton>
        `}
      </pre>
      <p>
        This example demonstrates how to apply a custom size directly to the{' '}
        <code>Icon</code> component inside the <code>IconButton</code>.
      </p>
    </Doc>
    <ComponentSection>
      <IconButton {...args}>
        <AddReactionIcon size={100} />
      </IconButton>
    </ComponentSection>
  </>
);

IconButtonSize.storyName = 'size';
IconButtonSize.args = iconButtonArgsConfig;
IconButtonSize.argTypes = iconButtonArgTypesConfig;
