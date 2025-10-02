import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { list, listNovo } from '@8x8/oxygen-constants';
import ListItemStyled from './ListItemStyled';

describe('<ListItemStyled>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<ListItemStyled theme={list} {...props} />).toJSON();
  }

  it('should render correctly in Classic', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly in Novo', () => {
    wrapper = setup({ theme: listNovo });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when item shouldWrapText', () => {
    wrapper = setup({ shouldWrapText: true });
    expect(wrapper).toMatchSnapshot();
  });
  it('should change cursor style when disabled', () => {
    wrapper = setup({ isDisabled: true });

    expect(wrapper).toHaveStyleRule('cursor', 'not-allowed');
  });
});
