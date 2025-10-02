import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { dropdownButton as theme } from '@8x8/oxygen-constants';
import DropdownWrapper from './DropdownWrapper';

describe('<DropdownWrapper>', () => {
  let wrapper;

  function setup(props = { theme }) {
    return renderer.create(<DropdownWrapper {...props} />).toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
