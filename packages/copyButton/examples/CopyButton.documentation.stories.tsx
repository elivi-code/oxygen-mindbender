import React from 'react';
import CopyButton from '@8x8/oxygen-copy-button';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

import README from '../README.md?raw';
import CHANGELOG from '../CHANGELOG.md?raw';

const example = `
----
## Example
\`\`\`javascript
import CopyButton from '@8x8/oxygen-copy-button';

<CopyButton textToCopy="Hello, World!" />
\`\`\`
`;

export const CopyButtonDocumentation = args => (
  <>
    <Doc markdown>{README}</Doc>
    <Doc markdown>{example}</Doc>
    <ComponentSection>
      <CopyButton {...args} />
    </ComponentSection>
    <Doc markdown>{CHANGELOG}</Doc>
  </>
);
CopyButtonDocumentation.storyName = 'Documentation';
CopyButtonDocumentation.args = {
  textToCopy: 'Hello, World!',
  tooltipText: 'Copy',
  copiedText: 'Copied',
  copiedDuration: 2000,
  isDisabled: false,
};
CopyButtonDocumentation.argTypes = {
  textToCopy: {
    control: 'text',
    description: 'Text to copy to clipboard',
  },
  tooltipText: {
    control: 'text',
    description: 'Tooltip text shown before copying',
  },
  copiedText: {
    control: 'text',
    description: 'Tooltip text shown after copying',
  },
  copiedDuration: {
    control: 'number',
    description: 'Duration in milliseconds to show "copied" state',
  },
  isDisabled: {
    control: 'boolean',
    description: 'Disable the button',
  },
  onCopy: {
    action: 'copied',
    description: 'Callback triggered when copy action is performed',
  },
};

export default {
  title: 'Components/CopyButton',
};
