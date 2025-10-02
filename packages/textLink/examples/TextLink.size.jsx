import React from 'react';
import TextLink from '@8x8/oxygen-text-link';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

export const Size = args => (
  <>
    <Doc>
      <h1>
        <code>TextLink</code> size customization
      </h1>
      <p>
        By default the <code>TextLink</code> component will use its own defined
        <code>text-size</code> and <code>line-height</code>. If you want it to
        inherit font styles through CSS cascade you can set the{' '}
        <code>size</code> prop to <code>inherit</code>
      </p>
      <p>
        This is especially useful when the TextLink is part of a longer text and
        you want the <code>TextLink</code> component to fit in
      </p>
      <pre>
        {`
import TextLink from '@8x8/oxygen-text-link';

<div style={{ fontSize: '24px', lineHeight: '1.5' }}>
  <p>I am a paragraph with an <TextLink>inline link</TextLink></p>
</div>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <div style={{ fontSize: '24px', lineHeight: '1.5' }}>
        <p>
          I am a paragraph with an <TextLink {...args}>inline link</TextLink>
        </p>
      </div>
    </ComponentSection>
  </>
);
Size.storyName = 'Size';
Size.args = {
  ...argsConfig,
  size: 'inherit',
};
Size.argTypes = argTypesConfig;
