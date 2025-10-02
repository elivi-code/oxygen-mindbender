import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import AlertBanner from '@8x8/oxygen-alert-banner';
import type { AlertBannerProps } from '@8x8/oxygen-alert-banner';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

import README from '../README.md?raw';
import CHANGELOG from '../CHANGELOG.md?raw';

import { argsConfig, argTypesConfig } from './config';

const exampleAlertBanner = `
## Example \`AlertBanner\`
\`\`\`javascript
import AlertBanner from '@8x8/oxygen-alert-banner';

<AlertBanner>I am an important message, something has gone wrong</AlertBanner>
\`\`\`
`;

export const AlertBannerDocs: StoryFn<AlertBannerProps> = args => {
  const argsWithDefaults = {
    ...args,
  };

  return (
    <>
      <Doc markdown>{README}</Doc>
      <Doc markdown>{exampleAlertBanner}</Doc>
      <ComponentSection block>
        <AlertBanner {...argsWithDefaults} />
      </ComponentSection>
      <Doc markdown>{CHANGELOG}</Doc>
    </>
  );
};
AlertBannerDocs.storyName = 'Documentation';
AlertBannerDocs.args = argsConfig;
AlertBannerDocs.argTypes = argTypesConfig;

export default {
  title: 'Components/AlertBanner [beta]',
} as Meta<AlertBannerProps>;
