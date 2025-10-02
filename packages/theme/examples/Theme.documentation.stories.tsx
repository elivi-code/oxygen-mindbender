import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Doc } from '@8x8/oxygen-storybook-utils';

import README from '../README.md?raw';
import CHANGELOG from '../CHANGELOG.md?raw';

export const ThemeDocs: StoryFn = () => {
  return (
    <>
      <Doc markdown>{README}</Doc>
      <hr />
      <Doc markdown>{CHANGELOG}</Doc>
    </>
  );
};
ThemeDocs.storyName = 'Documentation';

export default {
  title: 'Components/Theme',
} as Meta;
