import React from 'react';

import Button from '@8x8/oxygen-button';
import { PlusIcon, LoginIcon } from '@8x8/oxygen-icon';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import { argsConfig, argTypesConfig } from '../config';

export const ButtonIcon = args => (
  <>
    <Doc>
      <h1>
        <code>Button</code> props <code>iconLeft</code> and{' '}
        <code>iconRight</code>
      </h1>
      <p>
        The <code>Button</code> component supports rendering of an icon on the
        left or on the right side via <code>iconLeft</code> and{' '}
        <code>iconRight</code>.
      </p>
      <p>
        The examples below show for each variant multiple button states (
        <code>default</code>, <code>isActive</code>, and <code>isDisabled</code>
      </p>
      <pre>
        {`
import Button from '@8x8/oxygen-button';
import { PlusIcon, LoginIcon } from '@8x8/oxygen-icon';

<Button>Click me</Button>
<Button iconLeft={<PlusIcon />}>Click me</Button>
<Button iconRight={<LoginIcon />}>Click me</Button>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <Button {...args} />
      <Button {...args} iconLeft={<PlusIcon />} />
      <Button {...args} iconRight={<LoginIcon />} />
    </ComponentSection>
  </>
);
ButtonIcon.storyName = 'Button iconLeft & iconRight';
ButtonIcon.args = argsConfig;
ButtonIcon.argTypes = argTypesConfig;
