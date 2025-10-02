import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { table as theme } from '@8x8/oxygen-constants';
import Table from './Table';
import TableRow from './TableRow';

jest.mock('../styled/Table', () => 'Table');
jest.mock('../styled/TableRow', () => 'TableRow');

describe('<TableRow>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(
        <Table theme={theme}>
          <TableRow {...props}>
            <span>table row</span>
          </TableRow>
        </Table>,
      )
      .toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when isSelectable', () => {
    wrapper = setup({ isSelectable: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when isSelected', () => {
    wrapper = setup({ isSelected: true });
    expect(wrapper).toMatchSnapshot();
  });
});
