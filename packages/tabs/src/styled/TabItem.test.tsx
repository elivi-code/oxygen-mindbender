import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { tabs, tabsNovo } from '@8x8/oxygen-constants';

import TabItem from './TabItem';

describe('<TabItem>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<TabItem theme={tabs} {...props} />).toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  describe('in Classic', () => {
    it('should render correctly when is active', () => {
      wrapper = setup({ isActive: true });
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly when is disabled', () => {
      wrapper = setup({ isDisabled: true });
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly when is stretched', () => {
      wrapper = setup({ isStretched: true });
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly when is `dark`', () => {
      wrapper = setup({ color: 'dark' });
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('in Novo', () => {
    it('should render correctly when is active', () => {
      wrapper = setup({ isActive: true, theme: tabsNovo });
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly when is disabled', () => {
      wrapper = setup({ isDisabled: true, theme: tabsNovo });
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly when is stretched', () => {
      wrapper = setup({ isStretched: true, theme: tabsNovo });
      expect(wrapper).toMatchSnapshot();
    });
  });
});
