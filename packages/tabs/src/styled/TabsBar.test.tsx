import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { tabs, tabsNovo } from '@8x8/oxygen-constants';

import TabsBar from './TabsBar';

describe('<TabsBar>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<TabsBar theme={tabs} {...props} />).toJSON();
  }

  it('should render correctly in Classic', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly in Novo', () => {
    wrapper = setup({ theme: tabsNovo });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when is `dark`', () => {
    wrapper = setup({ color: 'dark' });
    expect(wrapper).toMatchSnapshot();
  });
});
