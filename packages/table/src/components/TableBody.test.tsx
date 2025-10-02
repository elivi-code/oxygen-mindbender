import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { table as theme } from '@8x8/oxygen-constants';
import Table from './Table';
import TableBody from './TableBody';

jest.mock('../styled/Table', () => 'Table');
jest.mock('../styled/TableBody', () => 'TableBody');

describe('<TableBody>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(
        <Table theme={theme}>
          <TableBody {...props}>
            <span>table body</span>
          </TableBody>
        </Table>,
      )
      .toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
