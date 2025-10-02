/* eslint-disable react/prop-types */
import React from 'react';
import { SkeletonCircle } from '@8x8/oxygen-skeletons';
import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';

import { argsConfig, argTypesConfig } from './config';

export const Circle = ({ customSize, ...initialArgs }) => {
  // use customSize to override size if it's defined
  const args = {
    ...initialArgs,
    ...(customSize && { size: customSize }),
  };

  return (
    <>
      <Doc>
        <h1>
          <code>SkeletonCircle</code>
        </h1>
        <p>
          Simple use case. The <code>SkeletonCircle</code> is rendered as a
          circle, with the width & height set to the <code>size</code> property
        </p>
        <pre>
          {`
import { SkeletonCircle } from '@8x8/oxygen-skeletons';

<SkeletonCircle />
        `}
        </pre>
      </Doc>
      <ComponentSection>
        <SkeletonCircle {...args} />
      </ComponentSection>

      <Doc>
        <h2>typography token value</h2>
        To match certain text values, you can use typography token names as
        size. These will match the text <code>line-height</code>. This is useful
        when you have both <code>SkeletonBlock</code> and{' '}
        <code>SkeletonCircle</code> on the same line, so that they scale
        together
        <pre>
          {`
import { SkeletonCircle } from '@8x8/oxygen-skeletons';

<SkeletonCircle size="heading01" />
        `}
        </pre>
      </Doc>
      <ComponentSection>
        <SkeletonCircle {...args} size="heading01" />
      </ComponentSection>

      <Doc>
        <h2>Custom size</h2>
        Any valid CSS dimension will do
        <pre>
          {`
import { SkeletonCircle } from '@8x8/oxygen-skeletons';

<SkeletonCircle size="4em" />
        `}
        </pre>
      </Doc>
      <ComponentSection>
        <SkeletonCircle {...args} size="4em" />
      </ComponentSection>
    </>
  );
};

Circle.storyName = 'SkeletonCircle';
Circle.args = argsConfig;
Circle.argTypes = argTypesConfig;
