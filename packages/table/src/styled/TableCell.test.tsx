import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { table as theme } from '@8x8/oxygen-constants';
import TableCell from './TableCell';

describe('<TableCell>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<TableCell theme={theme} {...props} />).toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when isHead', () => {
    wrapper = setup({ isHead: true });
    expect(wrapper).toMatchSnapshot();
  });
});
