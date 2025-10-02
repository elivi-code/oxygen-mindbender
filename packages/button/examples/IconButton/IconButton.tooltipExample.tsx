import React from 'react';

import Tooltip from '@8x8/oxygen-tooltip';
import { AddReactionIcon } from '@8x8/oxygen-icon';
import { IconButton } from '@8x8/oxygen-button';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { iconButtonArgsConfig, iconButtonArgTypesConfig } from '../config';

export const TooltipExample = args => (
  <>
    <Doc>
      <h1>
        <code>IconButton</code> tooltip example
      </h1>
      <p>
        If you need a <code>Tooltip</code> use composition and wrap the{' '}
        <code>IconButton</code> with it. This is how it&apos;s used in the{' '}
        <code>Label</code> component as well.
      </p>
      <pre>
        {`
import Tooltip from '@8x8/oxygen-tooltip';
import { IconButton } from '@8x8/oxygen-button';
import { AddReactionIcon } from '@8x8/oxygen-icon';

<Tooltip title="Here comes some more detailed description">
  <IconButton>
    <AddReactionIcon />
  </IconButton>
</Tooltip>
    `}
      </pre>
    </Doc>
    <ComponentSection>
      <Tooltip
        title="Here comes some more detailed description"
        includeWrapper={false}
      >
        <IconButton {...args}>
          {args.children || <AddReactionIcon />}
        </IconButton>
      </Tooltip>
    </ComponentSection>
  </>
);
TooltipExample.storyName = 'Tooltip Example';
TooltipExample.args = iconButtonArgsConfig;
TooltipExample.argTypes = iconButtonArgTypesConfig;
