/* eslint-disable react/prop-types */
import React from 'react';

import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';
import { SkeletonBlock, SkeletonCircle } from '@8x8/oxygen-skeletons';

import README from '../README.md?raw';
import CHANGELOG from '../CHANGELOG.md?raw';

export const SkeletonDocumentation = ({ customSize, ...initialArgs }) => {
  // use customSize to override size if it's defined
  const args = {
    ...initialArgs,
    ...(customSize && { size: customSize }),
  };

  return (
    <>
      <Doc markdown>{README}</Doc>
      <br />
      <Doc>
        <h2>
          <code>SkeletonBlock</code>
        </h2>
        <ComponentSection block>
          <SkeletonBlock {...args} />
        </ComponentSection>
        <h2>
          <code>SkeletonCircle</code>
        </h2>
        <ComponentSection>
          <SkeletonCircle {...args} />
        </ComponentSection>
      </Doc>
      <br />
      <Doc markdown>{CHANGELOG}</Doc>
    </>
  );
};

SkeletonDocumentation.storyName = 'Documentation';

export default {
  title: 'Components/Skeletons [beta]',
};
