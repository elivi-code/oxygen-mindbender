import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { label as theme } from '@8x8/oxygen-constants';

import Asterisk from './Asterisk';

describe('<Asterisk>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(
        <Asterisk theme={theme} {...props}>
          *
        </Asterisk>,
      )
      .toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with novo theme', () => {
    wrapper = setup({
      theme: {
        ...theme,
        iconSet: 'novo',
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
