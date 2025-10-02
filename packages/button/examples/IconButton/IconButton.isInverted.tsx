import React from 'react';
import { AddReactionIcon } from '@8x8/oxygen-icon';
import { IconButton } from '@8x8/oxygen-button';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { iconButtonArgsConfig, iconButtonArgTypesConfig } from '../config';

export const Inverted = args => (
  <>
    <Doc>
      <h1>
        <code>IconButton</code> on inverted backgrounds (via{' '}
        <code>isInverted</code>)
      </h1>
      <pre>
        {`
import { IconButton } from '@8x8/oxygen-button';
import { AddReactionIcon } from '@8x8/oxygen-icon';

<IconButton isInverted>
  <AddReactionIcon />
</IconButton>
        `}
      </pre>
    </Doc>
    <ComponentSection reversed>
      <IconButton {...args} isInverted>
        {args.children || <AddReactionIcon />}
      </IconButton>
    </ComponentSection>
  </>
);
Inverted.storyName = 'isInverted';
Inverted.args = iconButtonArgsConfig;
Inverted.argTypes = iconButtonArgTypesConfig;
