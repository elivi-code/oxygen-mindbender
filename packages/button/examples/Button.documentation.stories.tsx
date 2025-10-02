import React from 'react';
import Button from '@8x8/oxygen-button';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

import README from '../README.md?raw';
import CHANGELOG from '../CHANGELOG.md?raw';

import { argsConfig, argTypesConfig } from './config';

const example = `
----
## Example
\`\`\`javascript
import Button from '@8x8/oxygen-button';

<Button>Click me</Button>
\`\`\`
`;

export const ButtonDocumentation = args => (
  <>
    <Doc markdown>{README}</Doc>
    <Doc markdown>{example}</Doc>
    <ComponentSection>
      <Button {...args} />
    </ComponentSection>
    <Doc markdown>{CHANGELOG}</Doc>
  </>
);
ButtonDocumentation.storyName = 'Documentation';
ButtonDocumentation.args = argsConfig;
ButtonDocumentation.argTypes = argTypesConfig;

export default {
  title: 'Components/Button',
};
