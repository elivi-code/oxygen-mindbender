import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { input as theme } from '@8x8/oxygen-constants';

import InputDecorator from './InputDecorator';
import { InputDecoratorProps } from './InputDecoratorProps';

describe('<InputDecorator>', () => {
  let wrapper;

  const defaultProps: InputDecoratorProps = {
    theme,
    focused: false,
  };

  function setup(props?: Partial<InputDecoratorProps>) {
    const propsWithDefault: InputDecoratorProps = {
      ...defaultProps,
      ...props,
    };

    return renderer.create(<InputDecorator {...propsWithDefault} />).toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly as focused', () => {
    wrapper = setup({ focused: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when hasError', () => {
    wrapper = setup({ hasError: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly as prefix', () => {
    wrapper = setup({ isPrefix: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly as suffix', () => {
    wrapper = setup({ isSuffix: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when isReadOnly', () => {
    wrapper = setup({ isReadOnly: true });
    expect(wrapper).toMatchSnapshot();
  });
});
