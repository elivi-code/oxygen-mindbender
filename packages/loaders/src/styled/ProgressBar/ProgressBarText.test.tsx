import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { loaders as theme } from '@8x8/oxygen-constants';

import ProgressBarText from './ProgressBarText';

describe('<ProgressBarText>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(<ProgressBarText theme={theme} {...props} />)
      .toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
