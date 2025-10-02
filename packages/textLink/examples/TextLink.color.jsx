import React from 'react';
import TextLink from '@8x8/oxygen-text-link';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

export const Color = args => (
  <>
    <Doc>
      <h1>
        <code>TextLink</code> color customization
      </h1>
      <p>
        By default the <code>TextLink</code> component will use its own defined
        color. If you want it to inherit a color through CSS cascade you can set
        the color prop to <code>inherit</code>
      </p>
      <blockquote>
        ⚠️ <strong>Note</strong> that this also gets rid of the custom color
        used on <code>hover</code>
      </blockquote>
      <blockquote>
        ⚠️ <strong>Note</strong> when <code>isDisabled</code> is set it will
        still override the <em>inherited</em> color
      </blockquote>
      <pre>
        {`
import TextLink from '@8x8/oxygen-text-link';

<div style={{ color: 'red' }}>
  <TextLink>Text Link</TextLink>
</div>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <div style={{ color: 'red' }}>
        <TextLink {...args} />
      </div>
    </ComponentSection>
  </>
);
Color.storyName = 'Color';
Color.args = {
  ...argsConfig,
  color: 'inherit',
};
Color.argTypes = argTypesConfig;
