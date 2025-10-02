import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import RadioInputField from './RadioInputField';

describe('<RadioInputField>', () => {
  let wrapper;

  const setup = (props = {}) =>
    renderer.create(<RadioInputField {...props} />).toJSON();

  it('should render correctly with default props', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when is disabled', () => {
    wrapper = setup({ disabled: true });
    expect(wrapper).toMatchSnapshot();
  });
});
