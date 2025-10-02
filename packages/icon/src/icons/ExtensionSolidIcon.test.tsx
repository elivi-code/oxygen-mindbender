/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { icon as theme } from '@8x8/oxygen-constants';
import ExtensionSolidIcon from './ExtensionSolidIcon';

describe('<ExtensionSolidIcon>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<ExtensionSolidIcon theme={theme} {...props} />).toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
/* eslint-enable */
