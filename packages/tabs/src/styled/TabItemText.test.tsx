import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { tabs, tabsNovo } from '@8x8/oxygen-constants';

import TabItemText from './TabItemText';

describe('<TabItemText>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(
        <TabItemText theme={tabs} {...props}>
          Text
        </TabItemText>,
      )
      .toJSON();
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
