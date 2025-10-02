import React from 'react';

import { DropdownButton } from '@8x8/oxygen-button';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import {
  dropdownButtonArgsConfig,
  dropdownButtonArgTypesConfig,
} from '../config';

export const DropdownButtonFullWidth = args => (
  <>
    <Doc>
      <h1>
        <code>fullWidth</code> prop
      </h1>
      <p>Regular default rendering</p>
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
      <p>
        With <code>fullWidth</code>
      </p>
      <pre>
        {`
import { DropdownButton } from '@8x8/oxygen-button';

<DropdownButton fullWidth>Dropdown Button</DropdownButton>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <DropdownButton {...args} fullWidth />
    </ComponentSection>
  </>
);
DropdownButtonFullWidth.storyName = 'DropdownButton fullWidth';
DropdownButtonFullWidth.args = dropdownButtonArgsConfig;
DropdownButtonFullWidth.argTypes = dropdownButtonArgTypesConfig;
