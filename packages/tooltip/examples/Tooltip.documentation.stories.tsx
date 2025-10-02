import React from 'react';
import Tooltip from '@8x8/oxygen-tooltip';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

import README from '../README.md?raw';
import CHANGELOG from '../CHANGELOG.md?raw';

import { argsConfig, argTypesConfig } from './config';

const example = `
----
## Example
\`\`\`javascript
import Tooltip from '@8x8/oxygen-tooltip';

<Tooltip title="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
  Tooltip reference
</Tooltip>
\`\`\`
`;

export const TooltipDocumentation = args => {
  return (
    <>
      <Doc markdown>{README}</Doc>
      <Doc markdown>{example}</Doc>
      <ComponentSection>
        <Tooltip {...args} />
      </ComponentSection>
      <Doc markdown>{CHANGELOG}</Doc>
    </>
  );
};
TooltipDocumentation.storyName = 'Documentation';
TooltipDocumentation.args = argsConfig;
TooltipDocumentation.argTypes = argTypesConfig;

export default {
  title: 'Components/Tooltip',
};
