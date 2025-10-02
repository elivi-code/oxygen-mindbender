import React from 'react';

import LinkTo from '@storybook/addon-links/react';
import { DropdownButton } from '@8x8/oxygen-button';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import {
  dropdownButtonArgsConfig,
  dropdownButtonArgTypesConfig,
} from '../config';

export const DropdownButtonIsActive = args => (
  <>
    <Doc>
      <h1>
        <code>DropdownButton</code> <code>isActive</code> prop
      </h1>
      <p>
        Regular default rendering. This is a dumb component. You have to control
        the state from outside.
      </p>
      <p>
        If you want an overflow container or menu look at the{' '}
        <LinkTo kind="components-overflowmenu--button-documentation">
          Overflow components
        </LinkTo>
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
      <p>
        The <code>isActive</code> prop denotes the item is active/open.
      </p>
      <pre>
        {`
import { DropdownButton } from '@8x8/oxygen-button';

<DropdownButton isActive>Dropdown Button</DropdownButton>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <DropdownButton {...args} isActive />
    </ComponentSection>
  </>
);
DropdownButtonIsActive.storyName = 'DropdownButton isActive';
DropdownButtonIsActive.args = dropdownButtonArgsConfig;
DropdownButtonIsActive.argTypes = dropdownButtonArgTypesConfig;
