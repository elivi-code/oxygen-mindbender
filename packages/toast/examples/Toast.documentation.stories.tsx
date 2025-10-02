import React from 'react';
import { Toast } from '@8x8/oxygen-toast';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

import README from '../README.md?raw';
import CHANGELOG from '../CHANGELOG.md?raw';

import { argsConfig, argTypesConfig } from './config';

const exampleToast = `
----
## Example \`Toast\`
\`\`\`javascript
import { Toast } from '@8x8/oxygen-toast';

<Toast title="Title" description="Description" closeButtonLabel="Dismiss toast" />
\`\`\`
`;

export const ToastAndAlertDocs = args => {
  return (
    <>
      <Doc markdown>{README}</Doc>
      <Doc markdown>{exampleToast}</Doc>
      <ComponentSection>
        <Toast {...args} closeButtonLabel="Dismiss toast" />
      </ComponentSection>
      <Doc markdown>{CHANGELOG}</Doc>
    </>
  );
};
ToastAndAlertDocs.storyName = 'Documentation';
ToastAndAlertDocs.args = argsConfig;
ToastAndAlertDocs.argTypes = argTypesConfig;

export default {
  title: 'Components/Toast',
};
