import React from 'react';
import Select from '@8x8/oxygen-select';

import {
  Doc,
  ComponentSection,
  PlaygroundDecorator,
} from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from '../config';

const selectOptions = [
  { value: 'One', label: 'Option One' },
  { value: 'Two', label: 'Option Two' },
  {
    value: 'Three',
    label: `Option Three really long to have the content clipped. Lorem ipsum
    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    incididunt ut labore et dolore magna aliqua.`,
  },
  { value: 'Four', label: 'Option Four' },
  { value: 'Five', label: 'Option Five' },
  { value: 'Six', label: 'Option Six' },
  { value: 'Seven', label: 'Option Seven' },
  { value: 'Eight', label: 'Option Eight' },
  { value: 'Secret', label: 'Secret Option' },
  { value: 'Disabled', label: 'Disabled Option', isDisabled: true },
];

export const MenuPlacement = args => (
  <>
    <Doc>
      <h1>
        Issue with <code>menuPlacement=&quot;auto&quot;</code>
      </h1>
      <p>
        Testcase for <a href="https://agile.8x8.com/browse/OX-1094">OX-1094</a>
      </p>
      <p>
        When the menu is positioned close to the bottom of the screen and has
        <code>menuPlacement=&quot;auto&quot;</code>
        the menu switches position from under the cursor.
      </p>
    </Doc>
    <ComponentSection
      block
      style={{ position: 'absolute', bottom: '20px', left: '0', right: '0' }}
    >
      <Select {...args} options={selectOptions} />
    </ComponentSection>
  </>
);
MenuPlacement.args = argsConfig;
MenuPlacement.argTypes = argTypesConfig;
MenuPlacement.storyName = 'Select menuPlacement issue';

export default {
  title: 'Components/Select',
  component: Select,
  decorators: [PlaygroundDecorator],
};
