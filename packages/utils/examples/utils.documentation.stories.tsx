import React from 'react';
import { StoryFn } from '@storybook/react';

import { Doc } from '@8x8/oxygen-storybook-utils';

import README from '../README.md?raw';
import CHANGELOG from '../CHANGELOG.md?raw';

export const UtilsDocs: StoryFn = () => {
  return (
    <>
      <Doc markdown>{README}</Doc>
      <Doc markdown>{CHANGELOG}</Doc>
    </>
  );
};
UtilsDocs.storyName = 'Documentation';

export default {
  title: 'Components/Utils',
};
