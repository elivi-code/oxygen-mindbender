import renderer, { ReactTestRenderer } from 'react-test-renderer';
import React from 'react';
import noop from 'lodash.noop';
import 'jest-styled-components';
import { OxygenProvider } from '@8x8/oxygen-config';
import Select from '@8x8/oxygen-select';
import RowsPerPage, { RowsPerPageProps } from './RowsPerPage';

jest.mock('@8x8/oxygen-select', () => 'Select');

describe('RowsPerPage', () => {
  const getWrapper = (props?: Partial<RowsPerPageProps>): ReactTestRenderer =>
    renderer.create(
      <OxygenProvider>
        <RowsPerPage
          testId="PAGINATION"
          onRowsPerPageChange={noop}
          rowsPerPageOptions={[10, 20, 30]}
          selectedRowsPerPage={10}
          size="small"
          translations={{
            rowsPerPage: 'Rows per page:',
          }}
          {...props}
        />
      </OxygenProvider>,
    );

  it('should render component correctly', () => {
    const wrapper = getWrapper();

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should disable select rows component when isDisabled is true', () => {
    const wrapper = getWrapper({ isDisabled: true });

    expect(wrapper.root.findAllByType(Select)[0].props.isDisabled).toBe(true);
  });
});
