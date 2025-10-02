import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { list as theme } from '@8x8/oxygen-constants';
import ListStyled from './ListStyled';

describe('<ListOrdered>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<ListStyled theme={theme} {...props} />).toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when isGroup', () => {
    wrapper = setup({ isGroup: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when it is ordered list', () => {
    wrapper = setup({ isOrdered: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when it is withBackground', () => {
    wrapper = setup({ withBackground: true });
    expect(wrapper).toMatchSnapshot();
  });
});
