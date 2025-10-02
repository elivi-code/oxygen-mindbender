import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import SpinnerContainer from './SpinnerContainer';

describe('<SpinnerContainer>', () => {
  let wrapper;

  function setup() {
    return renderer.create(<SpinnerContainer />).toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
