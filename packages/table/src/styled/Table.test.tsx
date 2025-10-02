import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { table as theme } from '@8x8/oxygen-constants';
import Table from './Table';

describe('<Table>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<Table theme={theme} {...props} />).toJSON();
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
