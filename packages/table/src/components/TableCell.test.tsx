import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { table as theme } from '@8x8/oxygen-constants';
import Table from './Table';
import TableBody from './TableBody';
import TableRow from './TableRow';
import TableCell from './TableCell';

jest.mock('../styled/Table', () => 'Table');
jest.mock('../styled/TableBody', () => 'TableBody');
jest.mock('../styled/TableRow', () => 'TableRow');
jest.mock('../styled/TableCell', () => 'TableCell');

describe('<TableCell>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(
        <Table theme={theme}>
          <TableBody>
            <TableRow>
              <TableCell {...props}>
                <span>table cell</span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>,
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
