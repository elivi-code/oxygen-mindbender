import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import RadioInputWrapper from './RadioInputWrapper';

describe('<RadioInputWrapper>', () => {
  let wrapper;

  const setup = (props = {}) =>
    renderer.create(<RadioInputWrapper {...props} />).toJSON();

  it('should render correctly with default props', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
