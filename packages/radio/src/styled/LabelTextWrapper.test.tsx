import React from 'react';
import renderer from 'react-test-renderer';

import LabelTextWrapper from './LabelTextWrapper';

describe('<LabelTextWrapper>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<LabelTextWrapper {...props} />).toJSON();
  }

  it('should render correctly with default props', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
