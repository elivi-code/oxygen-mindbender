/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { icon as theme } from '@8x8/oxygen-constants';
import WidescreenSolidIcon from './WidescreenSolidIcon';

describe('<WidescreenSolidIcon>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<WidescreenSolidIcon theme={theme} {...props} />).toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
/* eslint-enable */
