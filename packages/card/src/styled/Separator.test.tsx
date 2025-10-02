import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { card as theme } from '@8x8/oxygen-constants';

import Separator from './Separator';

describe('Separator component', () => {
  function setup(props = {}) {
    return renderer.create(
      <Separator theme={theme} testId="separator-test-id" {...props} />,
    );
  }

  it('should match snapshot', () => {
    expect(setup()).toMatchSnapshot();
  });
});
