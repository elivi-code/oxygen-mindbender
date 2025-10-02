/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { icon as theme } from '@8x8/oxygen-constants';
import ArrowDiagonalUpIcon from './ArrowDiagonalUpIcon';

describe('<ArrowDiagonalUpIcon>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<ArrowDiagonalUpIcon theme={theme} {...props} />).toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
/* eslint-enable */
