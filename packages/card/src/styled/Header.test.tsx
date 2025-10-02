import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { cardHeader as theme } from '@8x8/oxygen-constants';

import Header from './Header';

describe('Header component', () => {
  function setup(props = {}) {
    return renderer.create(
      <Header theme={theme} testId="header-test-id" {...props} />,
    );
  }

  it('should match snapshot', () => {
    expect(setup()).toMatchSnapshot();
  });
});
