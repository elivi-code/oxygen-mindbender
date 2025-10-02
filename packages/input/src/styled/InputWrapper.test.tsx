import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { input as theme } from '@8x8/oxygen-constants';

import InputWrapper from './InputWrapper';
import { InputWrapperProps } from './InputWrapperProps';

describe('<InputWrapper>', () => {
  let wrapper;

  const defaultProps: InputWrapperProps = {
    theme,
  };

  function setup(props?: Partial<InputWrapperProps>) {
    const propsWithDefaults = { ...defaultProps, ...props };

    return renderer.create(<InputWrapper {...propsWithDefaults} />).toJSON();
  }

  it('should render correctly as default', () => {
    wrapper = setup({ size: 'default' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly as small', () => {
    wrapper = setup({ size: 'small' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly as disabled', () => {
    wrapper = setup({ isDisabled: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly as read only', () => {
    wrapper = setup({ isReadOnly: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly as fixed', () => {
    wrapper = setup({ fixed: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly as fullWidth', () => {
    wrapper = setup({ fullWidth: true });
    expect(wrapper).toMatchSnapshot();
  });
});
