import React from 'react';
import { Doc } from '@8x8/oxygen-storybook-utils';

import CHANGELOG from '../CHANGELOG.md?raw';
import README from '../README.md?raw';

export default {
  title: 'Components/Card',
};

export const Documentation = () => <Doc markdown>{README}</Doc>;
Documentation.storyName = '02. Documentation';

export const Changelog = () => <Doc markdown>{CHANGELOG}</Doc>;
Changelog.storyName = '03. Changelog';
