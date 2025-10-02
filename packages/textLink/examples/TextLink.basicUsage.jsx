import React from 'react';
import TextLink from '@8x8/oxygen-text-link';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

export const BasicUsage = args => (
  <>
    <Doc>
      <h1>
        <code>TextLink</code> basic usage
      </h1>
      <p>
        Basic standard usage. For a regular link you want to set the{' '}
        <code>href</code> attribute. By default there is no underline.
      </p>
      <pre>
        {`
import TextLink from '@8x8/oxygen-text-link';

<TextLink href="https://example.com">Text Link</TextLink>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <p>
        some text
        <TextLink isDisabled {...args} />
        some text <br />
        some text <TextLink {...args} /> some text
      </p>
    </ComponentSection>
    <Doc>
      <h2>
        Wrapper for the regular <code>a</code> Element
      </h2>
      <p>
        Since the <code>TextLink</code> component is a wrapper around{' '}
        <code>a</code> feel free to use any
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">
          standard HTML attribute for the <code>A</code> Element
        </a>
        .
      </p>
      <p>For example to open a link in a new window</p>
      <blockquote>
        ⚠️ <strong>Note</strong> that this only works with <code>href</code> and
        not with <code>onClick</code> events.
      </blockquote>
    </Doc>
    <ComponentSection>
      <TextLink {...args} target="_blank" />
    </ComponentSection>
  </>
);
BasicUsage.storyName = 'Basic Usage';
BasicUsage.args = {
  ...argsConfig,
  children: 'Text Link',
  href: 'https://example.com',
};
BasicUsage.argTypes = argTypesConfig;
