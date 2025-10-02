import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { input as theme } from '@8x8/oxygen-constants';

import InputFieldWrapper from './InputFieldWrapper';
import { InputFieldWrapperProps } from './InputFieldWrapperProps';

describe('<InputFieldWrapper>', () => {
  let wrapper;

  const defaultProps: InputFieldWrapperProps = {
    theme,
    iconLeft: false,
    iconRight: false,
    withPrefix: false,
    withSuffix: false,
    focused: false,
  };

  function setup(props?: Partial<InputFieldWrapperProps>) {
    const propsWithDefault: InputFieldWrapperProps = {
      ...defaultProps,
      ...props,
    };

    return renderer
      .create(<InputFieldWrapper {...propsWithDefault} />)
      .toJSON();
  }

  it('should render correctly with prefix', () => {
    wrapper = setup({ withPrefix: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with suffix', () => {
    wrapper = setup({ withSuffix: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with error state', () => {
    wrapper = setup({ hasError: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly as fixed', () => {
    wrapper = setup({ fixed: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly as focused', () => {
    wrapper = setup({ focused: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly as read only', () => {
    wrapper = setup({ isReadOnly: true });
    expect(wrapper).toMatchSnapshot();
  });
});
