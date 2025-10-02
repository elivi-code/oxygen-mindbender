import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { tabs as theme } from '@8x8/oxygen-constants';

import TextFieldWrapper from './TextFieldWrapper';

describe('<TextFieldWrapper>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(<TextFieldWrapper theme={theme} {...props} />)
      .toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with fullWith', () => {
    wrapper = setup({ fullWidth: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with labelOrientation set up to row', () => {
    wrapper = setup({ fullWidth: true });
    expect(wrapper).toMatchSnapshot();
  });
});
