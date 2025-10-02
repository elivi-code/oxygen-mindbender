import React from 'react';
import renderer from 'react-test-renderer';

import Card from './Card';

jest.mock('../styled/Card', () => 'Container');

describe('Container component', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<Card {...props}>Content</Card>).toJSON();
  }

  it('should render correctly with default props', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
