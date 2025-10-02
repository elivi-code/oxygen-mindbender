import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { label as theme } from '@8x8/oxygen-constants';
import { InfoCircleIcon } from '@8x8/oxygen-icon';

import IconButtonWrapper from './IconButtonWrapper';

describe('<IconButtonWrapper>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(
        <IconButtonWrapper theme={theme} {...props}>
          <InfoCircleIcon />
        </IconButtonWrapper>,
      )
      .toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when aria label is provided', () => {
    wrapper = setup({ 'aria-label': 'iconWrapper' });
    expect(wrapper).toMatchSnapshot();
  });
});
