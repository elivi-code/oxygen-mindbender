import React from 'react';
import renderer from 'react-test-renderer';

import SwitchBaseGroup from './SwitchBaseGroup';

jest.mock('../styled', () => ({
  StyledSwitchBaseGroup: 'StyledSwitchBaseGroup',
}));

describe('<SwitchBaseGroup />', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<SwitchBaseGroup {...props} />).toJSON();
  }

  it('should render the SwitchBase component', () => {
    wrapper = setup({ children: 'mockedChildren' });
    expect(wrapper).toMatchSnapshot();
  });
});
