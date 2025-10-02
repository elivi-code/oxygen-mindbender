import React from 'react';
import TextLink from '@8x8/oxygen-text-link';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

export const Underline = args => (
  <>
    <Doc>
      <h1>
        <code>TextLink</code> underline customization
      </h1>
      <p>
        By default the <code>TextLink</code> component will never be underlined.
        You can customize the _underline_ style through the{' '}
        <code>underline</code> prop which can be set to one of the following
        values:
        <ul>
          <li>
            <code>hover</code> (default) - underline on hover
          </li>
          <li>
            <code>never</code> - no underline
          </li>
          <li>
            <code>always</code> - always underline
          </li>
          <li>
            <code>inherit</code> - inherit underline from CSS cascade
          </li>
        </ul>
      </p>
      <blockquote>
        ⚠️ <strong>Note</strong> the <code>underline</code> prop will only apply
        to the <em>default</em> example
      </blockquote>
    </Doc>
    <Doc>
      <br />
      <h2>default value</h2>
      <pre>
        {`
import TextLink from '@8x8/oxygen-text-link';

<TextLink>Text Link</TextLink>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <TextLink {...args} />
    </ComponentSection>
    <Doc>
      <h2>
        <code>never</code>
      </h2>
      <pre>
        {`
import TextLink from '@8x8/oxygen-text-link';

<TextLink underline="never">Text Link</TextLink>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <TextLink {...args} underline="never" />
    </ComponentSection>
    <Doc>
      <h2>
        <code>always</code>
      </h2>
      <pre>
        {`
import TextLink from '@8x8/oxygen-text-link';

<TextLink underline="always">Text Link</TextLink>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <TextLink {...args} underline="always" />
    </ComponentSection>
    <Doc>
      <h2>
        <code>hover</code>
      </h2>
      <pre>
        {`
import TextLink from '@8x8/oxygen-text-link';

<TextLink underline="hover">Text Link</TextLink>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <TextLink {...args} underline="hover" />
    </ComponentSection>
    <Doc>
      <h2>
        <code>inherit</code>
      </h2>
      <p>
        We do not recommend weird styles here, but this can be used to achieve
        certain effects
      </p>
      <pre>
        {`
import TextLink from '@8x8/oxygen-text-link';

<div style={{ textDecoration: 'green wavy underline' }}>
  <TextLink underline="inherit">Text Link</TextLink>
</div>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <div style={{ textDecoration: 'green wavy underline' }}>
        <TextLink {...args} underline="inherit" />
      </div>
    </ComponentSection>
  </>
);
Underline.storyName = 'Underline';
Underline.args = {
  ...argsConfig,
};
Underline.argTypes = {
  ...argTypesConfig,
};
