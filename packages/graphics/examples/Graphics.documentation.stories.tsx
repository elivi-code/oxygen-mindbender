import React from 'react';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';

import { Error } from '@8x8/oxygen-graphics';
import CHANGELOG from '../CHANGELOG.md?raw';
import README from '../README.md?raw';

export function GraphicsDocumentation() {
  return (
    <>
      <Doc markdown>{README}</Doc>

      <ComponentSection>
        <Error />
      </ComponentSection>
      <Doc markdown>{CHANGELOG}</Doc>
    </>
  );
}

GraphicsDocumentation.storyName = 'Documentation';

export default {
  title: 'Components/Graphics',
};
