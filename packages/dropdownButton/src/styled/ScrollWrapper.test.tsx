import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { dropdownButton } from '@8x8/oxygen-constants';

import ScrollWrapper from './ScrollWrapper';

describe('<ScrollWrapper>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(<ScrollWrapper theme={dropdownButton} {...props} />)
      .toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
