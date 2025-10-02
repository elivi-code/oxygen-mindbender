import React from 'react';
import { StoryFn } from '@storybook/react';

import { Doc } from '@8x8/oxygen-storybook-utils';

import README from '../README.md?raw';
import CHANGELOG from '../CHANGELOG.md?raw';

import { argsConfig, argTypesConfig } from './config';

export const ConfigDocs: StoryFn = () => {
  return (
    <>
      <Doc markdown>{README}</Doc>
      <Doc markdown>{CHANGELOG}</Doc>
    </>
  );
};
ConfigDocs.storyName = 'Documentation';
ConfigDocs.args = argsConfig;
ConfigDocs.argTypes = argTypesConfig;

export default {
  title: 'Components/Config',
};
