import React from 'react';
import renderer from 'react-test-renderer';

import SwitchBaseInputField from './SwitchBaseInputField';

describe('<SwitchBaseInputField>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<SwitchBaseInputField {...props} />).toJSON();
  }

  it('should render correctly with default props', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when is disabled', () => {
    wrapper = setup({ disabled: true });
    expect(wrapper).toMatchSnapshot();
  });
});
