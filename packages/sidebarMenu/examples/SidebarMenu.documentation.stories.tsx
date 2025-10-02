import { Doc } from '@8x8/oxygen-storybook-utils';
import { StoryFn } from '@storybook/react';
import React from 'react';
import CHANGELOG from '../CHANGELOG.md?raw';
import README from '../README.md?raw';

export const SidebarMenuDocumentation: StoryFn = () => {
  return (
    <>
      <Doc markdown>{README}</Doc>
      <br />
      <Doc markdown>{CHANGELOG}</Doc>
    </>
  );
};
SidebarMenuDocumentation.storyName = 'Documentation';

export default {
  title: 'Components/SidebarMenu [alpha]',
};
