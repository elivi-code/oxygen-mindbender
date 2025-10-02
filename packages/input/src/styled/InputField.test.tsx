import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { input as theme } from '@8x8/oxygen-constants';

import InputField from './InputField';
import { InputFieldProps } from './InputFieldProps';

describe('<InputField>', () => {
  let wrapper;

  const defaultProps: InputFieldProps = {
    theme,
    isDisabled: false,
  };

  function setup(
    props?: Partial<InputFieldProps> & React.InputHTMLAttributes<string>,
  ) {
    const propsWithDefault: InputFieldProps = {
      ...defaultProps,
      ...props,
    };

    return renderer.create(<InputField {...propsWithDefault} />).toJSON();
  }

  it('should render correctly with max attribute', () => {
    wrapper = setup({ type: 'number', max: 99 });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with min attribute', () => {
    wrapper = setup({ type: 'number', min: 1 });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with maxLength attribute', () => {
    wrapper = setup({ maxLength: 10 });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly as fixed', () => {
    wrapper = setup({ fixed: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly as disabled', () => {
    wrapper = setup({ isDisabled: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly as read only', () => {
    wrapper = setup({ readOnly: true });
    expect(wrapper).toMatchSnapshot();
  });
});
