import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { modal, modalNovo } from '@8x8/oxygen-constants';

import FooterContainer from './FooterContainer';

describe('<FooterContainer>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(<FooterContainer theme={modal} {...props} />)
      .toJSON();
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

    it('should render correctly as small', () => {
      wrapper = setup({ isSmall: true });
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly with hasBorderTop property', () => {
      wrapper = setup({ hasBorderTop: true });
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly with hasButtonSpacing property', () => {
      wrapper = setup({ hasButtonSpacing: true });
      expect(wrapper).toMatchSnapshot();
    });

    it('should render correctly with modalHasContent property', () => {
      wrapper = setup({ modalHasContent: true });
      expect(wrapper).toMatchSnapshot();
    });
  });
});
