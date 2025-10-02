import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { modal, modalNovo } from '@8x8/oxygen-constants';

import HeaderTitle from './HeaderTitle';

describe('<HeaderTitle>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<HeaderTitle theme={modal} {...props} />).toJSON();
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
  });
});
