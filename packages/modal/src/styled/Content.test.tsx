import React from 'react';
import renderer from 'react-test-renderer';

import 'jest-styled-components';

import { modal, modalNovo } from '@8x8/oxygen-constants';

import Content from './Content';

describe('<Content>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<Content theme={modal} {...props} />).toJSON();
  }

  describe('in Classic', () => {
    it('should render correctly with default props', () => {
      wrapper = setup();
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('in Novo', () => {
    it('should render correctly with default props', () => {
      wrapper = setup({ theme: modalNovo });
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly with custom width', () => {
      wrapper = setup({ width: '900px' });
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly with custom height', () => {
      wrapper = setup({ height: '300px' });
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly as small size', () => {
      wrapper = setup({ size: 'small' });
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly as medium size', () => {
      wrapper = setup({ size: 'medium' });
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly as big size', () => {
      wrapper = setup({ size: 'big' });
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly with hasShadow property', () => {
      wrapper = setup({ hasShadow: true });
      expect(wrapper).toMatchSnapshot();
    });
  });
});
