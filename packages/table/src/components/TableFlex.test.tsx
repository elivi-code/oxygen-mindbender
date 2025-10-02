import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { table as theme } from '@8x8/oxygen-constants';
import TableFlex from './TableFlex';

jest.mock('../styled/TableFlex', () => 'TableFlex');

describe('<TableFlex>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(
        <TableFlex theme={theme} {...props}>
          <span>table</span>
        </TableFlex>,
      )
      .toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
