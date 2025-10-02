import React from 'react';

import { AddReactionIcon } from '@8x8/oxygen-icon';
import { IconButton } from '@8x8/oxygen-icon-button';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import README from '../README.md?raw';
import CHANGELOG from '../CHANGELOG.md?raw';

import { argsConfig, argTypesConfig } from './config';

const example = `
----
## Example
\`\`\`javascript
import { IconButton } from '@8x8/oxygen-button';
import { AddReactionIcon } from '@8x8/oxygen-icon';

<IconButton>
  <AddReactionIcon />
</IconButton>
\`\`\`
`;

export const IconButtonDocumentation = args => (
  <>
    <Doc markdown>{README}</Doc>
    <Doc markdown>{example}</Doc>
    <ComponentSection>
      <IconButton {...args}>{args.children || <AddReactionIcon />}</IconButton>
    </ComponentSection>
    <Doc markdown>{CHANGELOG}</Doc>
  </>
);
IconButtonDocumentation.storyName = 'Documentation';
IconButtonDocumentation.args = argsConfig;
IconButtonDocumentation.argTypes = argTypesConfig;

export default {
  title: 'Components/IconButton [beta]',
};
