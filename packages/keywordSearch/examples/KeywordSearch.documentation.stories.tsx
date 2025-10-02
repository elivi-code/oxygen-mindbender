import React from 'react';
import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import KeywordSearch from '@8x8/oxygen-keyword-search';
import README from '../README.md?raw';
import CHANGELOG from '../CHANGELOG.md?raw';
import { argsConfig, argTypesConfig } from './config';

export const KeywordSearchDocumentation = args => (
  <>
    <Doc markdown>{README}</Doc>
    <ComponentSection>
      <KeywordSearch {...args} />
    </ComponentSection>
    <Doc markdown>{CHANGELOG}</Doc>
  </>
);

KeywordSearchDocumentation.storyName = 'Documentation';
KeywordSearchDocumentation.args = argsConfig;
KeywordSearchDocumentation.argTypes = argTypesConfig;

export default {
  title: 'Components/KeywordSearch [alpha]',
};
