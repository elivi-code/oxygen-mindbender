import React from 'react';

import { AddReactionIcon } from '@8x8/oxygen-icon';
import { IconButton } from '@8x8/oxygen-button';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { iconButtonArgsConfig, iconButtonArgTypesConfig } from '../config';

export const BasicUsage = args => (
  <>
    <Doc>
      <h1>
        <code>IconButton</code> basic usage
      </h1>
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
      <IconButton {...args}>{args.children || <AddReactionIcon />}</IconButton>
    </ComponentSection>
  </>
);
BasicUsage.storyName = 'Basic Usage';
BasicUsage.args = iconButtonArgsConfig;
BasicUsage.argTypes = iconButtonArgTypesConfig;
