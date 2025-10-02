import React from 'react';

import LinkTo from '@storybook/addon-links/react';
import { DropdownButton } from '@8x8/oxygen-button';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import {
  dropdownButtonArgsConfig,
  dropdownButtonArgTypesConfig,
} from '../config';

export const DropdownButtonIsDisabled = args => (
  <>
    <Doc>
      <h1>
        <code>DropdownButton</code> <code>isDisabled</code> prop
      </h1>
      <p>Default rendering</p>
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
        The <code>isDisabled</code> prop denotes the item is disabled. It can
        still receive focus, but has <code>aria-disabled=&quot;true&quot;</code>
        .
      </p>
      <p>
        Both <code>onClick</code> and <code>onKeyPress</code> events are also
        supressed
      </p>
      <pre>
        {`
import { DropdownButton } from '@8x8/oxygen-button';

<DropdownButton isDisabled>Dropdown Button</DropdownButton>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <DropdownButton {...args} isDisabled />
    </ComponentSection>
  </>
);
DropdownButtonIsDisabled.storyName = 'DropdownButton isDisabled';
DropdownButtonIsDisabled.args = dropdownButtonArgsConfig;
DropdownButtonIsDisabled.argTypes = dropdownButtonArgTypesConfig;
