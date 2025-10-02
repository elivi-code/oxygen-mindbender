import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { table as theme } from '@8x8/oxygen-constants';
import TableFlex from './TableFlex';
import TableRowFlex from './TableRowFlex';

jest.mock('../styled/TableFlex', () => 'TableFlex');
jest.mock('../styled/TableRowFlex', () => 'TableRowFlex');

describe('<TableRowFlex>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(
        <TableFlex theme={theme}>
          <TableRowFlex {...props}>
            <span>table row</span>
          </TableRowFlex>
        </TableFlex>,
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
