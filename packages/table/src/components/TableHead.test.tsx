import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { table as theme } from '@8x8/oxygen-constants';
import Table from './Table';
import TableHead from './TableHead';

jest.mock('../styled/Table', () => 'Table');
jest.mock('../styled/TableHead', () => 'TableHead');

describe('<TableHead>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(
        <Table theme={theme}>
          <TableHead {...props}>
            <span>table head</span>
          </TableHead>
        </Table>,
      )
      .toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
