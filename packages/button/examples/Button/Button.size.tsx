import React from 'react';

import Button from '@8x8/oxygen-button';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { argsConfig, argTypesConfig } from '../config';

export const ButtonSize = args => (
  <>
    <Doc>
      <h1>
        <code>Button</code> size
      </h1>
      <p>
        The <code>Button</code> components supports 3 sizes: <code>small</code>,{' '}
        <code>medium</code> (default) and <code>large</code>
      </p>
      <p>
        This is the default render (you can customize it via Storybook
        controls). The other examples have the <code>size</code> set directly,
        so they can&apos;t be controlled
      </p>
      <pre>
        {`
import Button from '@8x8/oxygen-button';

<Button>Click me</Button>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Button {...args} />
    </ComponentSection>
    <Doc>
      <h2>
        size <code>medium</code> (default)
      </h2>
      <pre>
        {`
import Button from '@8x8/oxygen-button';

<Button size="medium">Click me</Button>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Button {...args} size="medium" />
    </ComponentSection>
    <Doc>
      <h2>
        size <code>small</code>
      </h2>
      <pre>
        {`
import Button from '@8x8/oxygen-button';

<Button size="small">Click me</Button>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Button {...args} size="small" />
    </ComponentSection>
    <Doc>
      <h2>
        size <code>large</code>
      </h2>
      <p>
        This size is defined for touch targets. Recommended for mobile usage
      </p>
      <pre>
        {`
import Button from '@8x8/oxygen-button';

<Button size="large">Click me</Button>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Button {...args} size="large" />
    </ComponentSection>
  </>
);
ButtonSize.storyName = 'Button size';
ButtonSize.args = argsConfig;
ButtonSize.argTypes = argTypesConfig;
