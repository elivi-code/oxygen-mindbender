import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { typography as theme } from '@8x8/oxygen-constants';

import Typography from './Typography';

describe('<Typography>', () => {
  function setup(props = {}) {
    return renderer
      .create(
        <Typography theme={theme} {...props}>
          Text
        </Typography>,
      )
      .toJSON();
  }

  it('default render', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });

  describe('weights', () => {
    it('default weight', () => {
      const wrapper = setup({
        weight: 'default',
      });

      expect(wrapper).toMatchSnapshot();
    });

    it('attention weight', () => {
      const wrapper = setup({
        weight: 'attention',
      });

      expect(wrapper).toMatchSnapshot();
    });

    it('max weight', () => {
      const wrapper = setup({
        weight: 'max',
      });

      expect(wrapper).toMatchSnapshot();
    });

    it('should work with any string value', () => {
      const wrapper = setup({
        weight: '1000',
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should set the display CSS rule', () => {
    const wrapper = setup({
      display: 'flex',
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should not add ellipsis when shouldWrap is false', () => {
    const wrapper = setup({
      shouldWrap: false,
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should set the align CSS rule', () => {
    const wrapper = setup({
      align: 'center',
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should change the component type when setting the `as` prop', () => {
    const wrapper = setup({
      as: 'p',
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should add extra bottom padding when setting `isParagraph` prop', () => {
    const wrapper = setup({
      isParagraph: true,
    });

    expect(wrapper).toMatchSnapshot();
  });

  describe('sizes', () => {
    it('xs size', () => {
      const wrapper = setup({
        size: 'xs',
      });

      expect(wrapper).toMatchSnapshot();
    });

    it('sm size', () => {
      const wrapper = setup({
        size: 'sm',
      });

      expect(wrapper).toMatchSnapshot();
    });

    it('md size', () => {
      const wrapper = setup({
        size: 'md',
      });

      expect(wrapper).toMatchSnapshot();
    });

    it('lg size', () => {
      const wrapper = setup({
        size: 'lg',
      });

      expect(wrapper).toMatchSnapshot();
    });

    it('xl size', () => {
      const wrapper = setup({
        size: 'xl',
      });

      expect(wrapper).toMatchSnapshot();
    });

    it('xxl size', () => {
      const wrapper = setup({
        size: 'xxl',
      });

      expect(wrapper).toMatchSnapshot();
    });

    it('should work with any string value', () => {
      const wrapper = setup({
        size: '80px',
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should add test id', () => {
    const wrapper = setup({
      testId: 'test-id',
    });

    expect(wrapper.props['data-test-id']).toEqual('test-id');
  });
});
