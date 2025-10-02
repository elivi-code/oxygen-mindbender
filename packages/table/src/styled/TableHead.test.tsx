import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { table as theme } from '@8x8/oxygen-constants';
import TableHead from './TableHead';

describe('<TableHead>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<TableHead theme={theme} {...props} />).toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
