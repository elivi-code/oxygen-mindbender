import React from 'react';

import { DropdownButton } from '@8x8/oxygen-button';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import {
  dropdownButtonArgsConfig,
  dropdownButtonArgTypesConfig,
} from '../config';

export const DropdownButtonSize = args => (
  <>
    <Doc>
      <h1>
        <code>DropdownButton</code> prop <code>size</code>
      </h1>
      <p>
        The size prop can take one of the following values: <code>medium</code>{' '}
        (default), <code>large</code>, <code>small</code>
      </p>
      <p>
        Example with no <code>size</code> specified, will show the default or
        what comes from the storybook controls.
      </p>
      <pre>
        {`
import { DropdownButton } from '@8x8/oxygen-button';

<DropdownButton>Dropdown Button</DropdownButton>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <DropdownButton {...args} />
    </ComponentSection>
    <Doc>
      <h2>
        <code>size</code> <code>medium</code> (default)
      </h2>
      <p>
        This is the default <code>size</code>
      </p>
      <pre>
        {`
import { DropdownButton } from '@8x8/oxygen-button';

<DropdownButton size="medium">Dropdown Button</DropdownButton>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <DropdownButton {...args} size="medium" />
    </ComponentSection>
    <Doc>
      <h2>
        <code>size</code> <code>large</code>
      </h2>
      <pre>
        {`
import { DropdownButton } from '@8x8/oxygen-button';

<DropdownButton size="large">Dropdown Button</DropdownButton>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <DropdownButton {...args} size="large" />
    </ComponentSection>
    <Doc>
      <h2>
        <code>size</code> <code>small</code>
      </h2>
      <pre>
        {`
import { DropdownButton } from '@8x8/oxygen-button';

<DropdownButton size="small">Dropdown Button</DropdownButton>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <DropdownButton {...args} size="small" />
    </ComponentSection>
  </>
);
DropdownButtonSize.storyName = 'DropdownButton size';
DropdownButtonSize.args = dropdownButtonArgsConfig;
DropdownButtonSize.argTypes = dropdownButtonArgTypesConfig;
