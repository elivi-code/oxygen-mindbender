import React from 'react';
import TextLink from '@8x8/oxygen-text-link';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

import README from '../README.md?raw';
import CHANGELOG from '../CHANGELOG.md?raw';

import { argsConfig, argTypesConfig } from './config';

const example = `
----
## Example
\`\`\`javascript
import TextLink from '@8x8/oxygen-text-link';

<TextLink href="https://example.com">I am a link</TextLink>
\`\`\`
`;

export const TextLinkDocumentation = args => {
  const propsWithDefaults = {
    children: 'I am a link',
    href: 'https://example.com',
    ...args,
  };

  return (
    <>
      <Doc markdown>{README}</Doc>
      <Doc markdown>{example}</Doc>
      <ComponentSection>
        <TextLink {...propsWithDefaults} />
      </ComponentSection>
      <Doc markdown>{CHANGELOG}</Doc>
    </>
  );
};
TextLinkDocumentation.storyName = 'Documentation';
TextLinkDocumentation.args = argsConfig;
TextLinkDocumentation.argTypes = argTypesConfig;

export default {
  title: 'Components/TextLink',
};
