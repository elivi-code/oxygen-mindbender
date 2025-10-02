import React from 'react';
import renderer from 'react-test-renderer';

import Header from './Header';

jest.mock('../styled/Header', () => 'Container');

describe('Header component', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<Header {...props}>Content</Header>).toJSON();
  }

  it('should render correctly with default props', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
