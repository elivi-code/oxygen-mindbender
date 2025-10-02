import React from 'react';
import renderer from 'react-test-renderer';

import { loaders as theme } from '@8x8/oxygen-constants';
import Spinner from './Spinner';

describe('<Spinner>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<Spinner theme={theme} {...props} />).toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when Spinner is small', () => {
    wrapper = setup({ size: 'small' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when Spinner is large2x', () => {
    wrapper = setup({ size: 'large2x' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when Spinner has custom size', () => {
    wrapper = setup({ size: 123 });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when Spinner has custom stroke width', () => {
    wrapper = setup({ strokeWidth: 1 });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with custom attributes', () => {
    wrapper = setup({ role: 'img', 'aria-label': 'Loading' });

    expect(wrapper.props).toMatchObject({
      role: 'img',
      'aria-label': 'Loading',
    });
  });
});
