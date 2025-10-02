import React from 'react';
import renderer from 'react-test-renderer';

import { eventCardNovo as theme } from '@8x8/oxygen-constants';

import { Layout, Wrapper } from './Layout';

describe('Content styled components', () => {
  test('<Layout />', () => {
    const wrapper = renderer.create(<Layout theme={theme} />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
  test('<Wrapper />', () => {
    const wrapper = renderer.create(<Wrapper theme={theme} />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
