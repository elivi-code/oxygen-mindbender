import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import ContextMenuTrigger from './ContextMenuTrigger';

describe('<ContextMenuTrigger>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<ContextMenuTrigger {...props} />).toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
