import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { label as theme } from '@8x8/oxygen-constants';
import ValueText from './ValueText';

describe('<ValueText>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<ValueText theme={theme} {...props} />).toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when it is disabled', () => {
    wrapper = setup({ isDisabled: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when it is required with classic theme', () => {
    wrapper = setup({ isRequired: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when it is required with novo theme', () => {
    wrapper = setup({
      isRequired: true,
      theme: {
        ...theme,
        iconSet: 'novo',
      },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly the label text when expects to wrap', () => {
    wrapper = setup({ shouldWrapText: true });
    expect(wrapper).toMatchSnapshot();
  });
});
