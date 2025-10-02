import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { label as theme } from '@8x8/oxygen-constants';

import LabelWrapper from './LabelWrapper';

describe('<LabelWrapper>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<LabelWrapper theme={theme} {...props} />).toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with value', () => {
    wrapper = setup({ value: 'Label text' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when expects to wrap', () => {
    wrapper = setup({ shouldWrapText: true });
    expect(wrapper).toMatchSnapshot();
  });
});
