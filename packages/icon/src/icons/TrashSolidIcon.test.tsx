/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { icon as theme } from '@8x8/oxygen-constants';
import TrashSolidIcon from './TrashSolidIcon';

describe('<TrashSolidIcon>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<TrashSolidIcon theme={theme} {...props} />).toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
/* eslint-enable */
