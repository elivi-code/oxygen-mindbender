import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { table as theme } from '@8x8/oxygen-constants';
import TableRow from './TableRow';

describe('<TableRow>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<TableRow theme={theme} {...props} />).toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when enableHover', () => {
    wrapper = setup({ enableHover: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when isSelected', () => {
    wrapper = setup({ isSelected: true });
    expect(wrapper).toMatchSnapshot();
  });
});
