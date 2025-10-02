import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { table as theme } from '@8x8/oxygen-constants';
import TableBody from './TableBody';

describe('<TableBody>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<TableBody theme={theme} {...props} />).toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
