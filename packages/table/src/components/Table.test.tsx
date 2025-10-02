import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { table as theme } from '@8x8/oxygen-constants';
import Table from './Table';

jest.mock('../styled/Table', () => 'Table');

describe('<Table>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(
        <Table theme={theme} {...props}>
          <span>table</span>
        </Table>,
      )
      .toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
