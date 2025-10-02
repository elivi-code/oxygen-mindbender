import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { table as theme } from '@8x8/oxygen-constants';
import TableFlex from './TableFlex';
import TableRowFlex from './TableRowFlex';
import TableCellFlex from './TableCellFlex';

jest.mock('../styled/TableFlex', () => 'TableFlex');
jest.mock('../styled/TableRowFlex', () => 'TableRowFlex');
jest.mock('../styled/TableCellFlex', () => 'TableCellFlex');

describe('<TableCellFlex>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(
        <TableFlex theme={theme}>
          <TableRowFlex>
            <TableCellFlex {...props}>
              <span>table cell</span>
            </TableCellFlex>
          </TableRowFlex>
        </TableFlex>,
      )
      .toJSON();
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
