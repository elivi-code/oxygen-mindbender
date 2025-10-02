import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { table as theme } from '@8x8/oxygen-constants';
import TableFlex from './TableFlex';

describe('<TableFlex>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<TableFlex theme={theme} {...props} />).toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with zebra stripes', () => {
    wrapper = setup({ zebra: true });
    expect(wrapper).toMatchSnapshot();
  });
});
