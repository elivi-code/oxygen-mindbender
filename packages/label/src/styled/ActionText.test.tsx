import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { label as theme } from '@8x8/oxygen-constants';

import ActionText from './ActionText';

describe('<ActionText>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<ActionText theme={theme} {...props} />).toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when is disabled', () => {
    wrapper = setup({ isDisabled: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly the action text when expects to wrap', () => {
    wrapper = setup({ shouldWrapText: true });
    expect(wrapper).toMatchSnapshot();
  });
});
