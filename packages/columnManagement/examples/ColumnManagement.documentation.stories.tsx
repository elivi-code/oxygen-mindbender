import React from 'react';
import { Doc } from '@8x8/oxygen-storybook-utils';
import README from '../README.md?raw';
import CHANGELOG from '../CHANGELOG.md?raw';

export const ColumnManagementDocumentation = args => {
  return (
    <>
      <Doc markdown>{README}</Doc>
      <Doc markdown>{CHANGELOG}</Doc>
    </>
  );
};
ColumnManagementDocumentation.storyName = 'Documentation';

export default {
  title: 'Components/ColumnManagement [alpha]',
};
