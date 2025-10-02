/* eslint-disable react/prop-types */
import React from 'react';
import { SkeletonBlock } from '@8x8/oxygen-skeletons';
import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

export const Block = ({ customSize, ...initialArgs }) => {
  // use customSize to override size if it's defined
  const args = {
    ...initialArgs,
    ...(customSize && { size: customSize }),
  };

  return (
    <>
      <Doc>
        <h1>
          <code>SkeletonBlock</code>
        </h1>
        <p>
          The <code>SkeletonBlock</code> is a block-level component. It will
          stretch the container width and the height can be set via the{' '}
          <code>size</code> property.
        </p>
        <h2>
          Default <code>size</code> value
        </h2>
        <pre>
          {`
import { SkeletonBlock } from '@8x8/oxygen-skeletons';

<SkeletonBlock />
        `}
        </pre>
      </Doc>
      <ComponentSection block>
        <SkeletonBlock {...args} />
      </ComponentSection>

      <Doc>
        <h2>typography token value</h2>
        To match certain text values, you can use typography token names as
        size. These will match the text <code>line-height</code>
        <pre>
          {`
import { SkeletonBlock } from '@8x8/oxygen-skeletons';

<SkeletonBlock size="heading01" />
        `}
        </pre>
      </Doc>
      <ComponentSection block>
        <SkeletonBlock {...args} size="heading01" />
      </ComponentSection>

      <Doc>
        <h2>Custom size</h2>
        Any valid CSS dimension will do
        <pre>
          {`
import { SkeletonBlock } from '@8x8/oxygen-skeletons';

<SkeletonBlock size="4em" />
        `}
        </pre>
      </Doc>
      <ComponentSection block>
        <SkeletonBlock {...args} size="4em" />
      </ComponentSection>
    </>
  );
};

Block.storyName = 'SkeletonBlock';
Block.args = argsConfig;
Block.argTypes = argTypesConfig;
