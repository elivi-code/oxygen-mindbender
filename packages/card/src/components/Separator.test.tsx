import React from 'react';
import renderer from 'react-test-renderer';

import Separator from './Separator';

jest.mock('../styled/Separator', () => 'Container');

describe('Header component', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<Separator {...props} />).toJSON();
  }

  it('should render correctly with default props', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
