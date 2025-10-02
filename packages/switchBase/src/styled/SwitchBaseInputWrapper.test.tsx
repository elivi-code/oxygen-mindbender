import React from 'react';
import renderer from 'react-test-renderer';

import SwitchBaseInputWrapper from './SwitchBaseInputWrapper';

describe('<SwitchBaseInputWrapper>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<SwitchBaseInputWrapper {...props} />).toJSON();
  }

  it('should render correctly with default props', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
