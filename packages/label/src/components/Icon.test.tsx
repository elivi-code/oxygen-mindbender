import React from 'react';
import renderer from 'react-test-renderer';

import { label as theme } from '@8x8/oxygen-constants';

import Icon from './Icon';

describe('<Icon>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(
        <Icon
          theme={theme}
          infoBoxShowOn="hover"
          infoBoxText="Icon text"
          {...props}
        />,
      )
      .toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with correct aria-label', () => {
    wrapper = setup({
      infoBoxButtonLabel: 'Icon button',
    });
    expect(wrapper).toMatchSnapshot();
  });
});
