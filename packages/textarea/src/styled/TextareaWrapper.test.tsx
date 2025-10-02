import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { textarea as theme } from '@8x8/oxygen-constants';
import TextareaWrapper from './TextareaWrapper';

describe('<TextareaWrapper>', () => {
  let wrapper;
  const setup = props =>
    renderer.create(<TextareaWrapper theme={theme} {...props} />).toJSON();

  it('should render correctly with default properties', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when hasError', () => {
    wrapper = setup({ hasError: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when isDisabled', () => {
    wrapper = setup({ disabled: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when isReadOnly', () => {
    wrapper = setup({ readOnly: true });
    expect(wrapper).toMatchSnapshot();
  });
});
