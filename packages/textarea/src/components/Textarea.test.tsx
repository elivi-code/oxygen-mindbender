import React from 'react';
import renderer from 'react-test-renderer';
import { textarea as theme } from '@8x8/oxygen-constants';

import Textarea from './Textarea';

jest.mock('../styled/TextareaWrapper', () => 'TextareaWrapper');

describe('<Textarea>', () => {
  let wrapper;
  const setup = props =>
    renderer.create(<Textarea theme={theme} {...props} />).toJSON();

  it('should render correctly with default properties', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with id', () => {
    wrapper = setup({ id: 'custom_id' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with name', () => {
    wrapper = setup({ name: 'custom_name' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with placeholder', () => {
    wrapper = setup({ placeholder: 'custom_placeholder' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with autoComplete', () => {
    wrapper = setup({ autoComplete: 'on' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with value', () => {
    wrapper = setup({ value: 'custom_value' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with rows', () => {
    wrapper = setup({ rows: 10 });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with cols', () => {
    wrapper = setup({ cols: 10 });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with minLength', () => {
    wrapper = setup({ minLength: 10 });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with maxLength', () => {
    wrapper = setup({ maxLength: 100 });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with resize', () => {
    wrapper = setup({ resize: 'none' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with testId', () => {
    wrapper = setup({ testId: 'custom_test_id' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when isDisabled', () => {
    wrapper = setup({ isDisabled: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when isReadOnly', () => {
    wrapper = setup({ isReadOnly: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when hasError', () => {
    wrapper = setup({ hasError: true });
    expect(wrapper).toMatchSnapshot();
  });
});
