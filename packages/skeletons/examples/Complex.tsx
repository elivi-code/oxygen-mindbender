/* eslint-disable react/prop-types */
import React from 'react';

import { Doc, ComponentSection } from '@8x8/oxygen-storybook-utils';
import Loader from './complexComponents';

import { argsConfig, argTypesConfig } from './config';

export const Complex = ({ customSize, ...initialArgs }) => {
  // use customSize to override size if it's defined
  const args = {
    ...initialArgs,
    ...(customSize && { size: customSize }),
  };

  return (
    <>
      <Doc>
        <h1>A more complex example</h1>
        <p>
          If you need to use a skeleton loader for a complex component, you
          should have a layout from your designer. This is just an arbitrary
          example (the wrapper components are defined just for this small demo).
        </p>
        <pre>
          {`
<Container>
  <Row>
    <SkeletonBlock size="32px" />
  </Row>
  <Row>
    <SkeletonBlock style={{ width: '50%' }} />
  </Row>
  <Divider />
  <Row>
    <Flex>
      <SkeletonBlock style={{ width: '100px' }} />
      <Actions>
        <SkeletonCircle />
        <SkeletonCircle />
        <SkeletonCircle />
        <SkeletonCircle />
      </Actions>
    </Flex>
  </Row>
</Container>
        `}
        </pre>
      </Doc>
      <ComponentSection>
        <Loader {...args} />
      </ComponentSection>
    </>
  );
};

Complex.storyName = 'SkeletonCircle & SkeletonBlock complex example';
Complex.args = argsConfig;
Complex.argTypes = argTypesConfig;
