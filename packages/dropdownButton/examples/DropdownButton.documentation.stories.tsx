import React from 'react';
import DropdownButton from '@8x8/oxygen-dropdown-button';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

import README from '../README.md?raw';
import CHANGELOG from '../CHANGELOG.md?raw';

import { argsConfig, argTypesConfig } from './config';

export const DropdownButtonDocumentation = args => (
  <>
    <Doc markdown>{README}</Doc>
    <ComponentSection>
      <DropdownButton {...args} />
    </ComponentSection>
    <Doc markdown>{CHANGELOG}</Doc>
  </>
);
DropdownButtonDocumentation.storyName = 'Documentation';
DropdownButtonDocumentation.args = argsConfig;
DropdownButtonDocumentation.argTypes = argTypesConfig;

export default {
  title: 'Components/DropdownButton',
};
