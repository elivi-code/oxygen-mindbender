/* eslint-disable react/no-children-prop */
import React from 'react';

import { DropdownButton } from '@8x8/oxygen-button';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import {
  dropdownButtonArgsConfig,
  dropdownButtonArgTypesConfig,
} from '../config';

export const DropdownButtonChildren = args => (
  <>
    <Doc>
      <h1>
        <code>DropdownButton</code> <code>children</code> prop
      </h1>
      <p>
        By default there are no <code>children</code> defined, the component
        will just render a chevron
      </p>
      <pre>
        {`
import { DropdownButton } from '@8x8/oxygen-button';

<DropdownButton />
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <DropdownButton {...args} children={undefined} />
    </ComponentSection>

    <Doc>
      <p>
        We recommend text as <code>children</code>
      </p>
      <pre>
        {`
import { DropdownButton } from '@8x8/oxygen-button';

<DropdownButton>Call to action</DropdownButton>
        `}
      </pre>
    </Doc>
    <ComponentSection>
      <DropdownButton {...args}>Call to action</DropdownButton>
    </ComponentSection>
  </>
);
DropdownButtonChildren.storyName = 'DropdownButton children';
DropdownButtonChildren.args = dropdownButtonArgsConfig;
DropdownButtonChildren.argTypes = dropdownButtonArgTypesConfig;
