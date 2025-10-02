import React from 'react';
import renderer from 'react-test-renderer';

import StyledSwitchBaseGroup, { Props } from './StyledSwitchBaseGroup';

describe('<StyledSwitchBaseGroup>', () => {
  let wrapper;

  function setup(props: Props = { isHorizontal: false }) {
    return renderer.create(<StyledSwitchBaseGroup {...props} />).toJSON();
  }

  it('should style correctly the switch base group if it should be displayed horizontally', () => {
    wrapper = setup({ isHorizontal: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the switch base group if it should not be displayed horizontally', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
