import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { loaders as theme } from '@8x8/oxygen-constants';

import ProgressBarContainer from './ProgressBarContainer';

describe('<ProgressBarContainer>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(<ProgressBarContainer theme={theme} {...props} />)
      .toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when ProgressBar is small', () => {
    wrapper = setup({ size: 'small' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when ProgressBar is large', () => {
    wrapper = setup({ size: 'large' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when ProgressBar has custom size as string', () => {
    wrapper = setup({ size: '123px' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when ProgressBar has custom size as number', () => {
    wrapper = setup({ size: 123 });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when ProgressBar  is fullWidth', () => {
    wrapper = setup({ fullWidth: true });
    expect(wrapper).toMatchSnapshot();
  });
});
