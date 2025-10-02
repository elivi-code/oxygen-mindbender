import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { radioGroup as theme } from '@8x8/oxygen-constants';

import RadioGroupWrapper from './RadioGroupWrapper';

describe('<RadioGroupWrapper>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(<RadioGroupWrapper theme={theme} {...props} />)
      .toJSON();
  }

  it('should style correctly the radio group if it should be displayed horizontally', () => {
    wrapper = setup({ isHorizontal: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the radio group if it should not be displayed horizontally', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
