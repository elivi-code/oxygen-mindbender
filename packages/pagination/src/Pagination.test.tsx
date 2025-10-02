import renderer, { ReactTestRenderer } from 'react-test-renderer';
import React from 'react';
import noop from 'lodash.noop';
import 'jest-styled-components';
import Pagination, { PaginationProps } from './Pagination';
import RowsPerPage from './components/RowsPerPage';
import useElementSize from './hooks/useElementSize';

jest.mock('./components/RowsPerPage', () => 'RowsPerPage');
jest.mock('./components/PageNavigation', () => 'PageNavigation');

jest.mock('./hooks/useElementSize', () => {
  const orig = jest.requireActual('./hooks/useElementSize');

  // make exported symbol a Mock instance
  const defaultMocked = jest.fn().mockImplementation(() => {
    return orig.default();
  });

  return {
    __esModule: true,
    default: defaultMocked,
  };
});

describe('Pagination', () => {
  const getWrapper = (props?: Partial<PaginationProps>): ReactTestRenderer =>
    renderer.create(
      <Pagination
        canGoBack
        canGoNext
        numberOfPages={3}
        onPaginationChange={noop}
        pageNumber={1}
        rowsPerPage={25}
        translations={{
          rowsPerPage: 'Rows per page:',
          prevPage: 'Prev',
          numberOfPages: 'of 50 pages',
          nextPage: 'Next',
        }}
        {...props}
      />,
    );

  it('should render component correctly', () => {
    const wrapper = getWrapper();

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should log error if we pass "rowsPerPage" prop that does have a corespondent in "rowsPerPageOptions"', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error');

    getWrapper({ rowsPerPage: 13 });

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Invalid "rowsPerPage" value: 13. Use one of "rowsPerPageOptions" prop options: 10,25,40,55',
    );
  });

  it('should sort rowsPerPageOptions numerically', () => {
    (useElementSize as jest.Mock).mockImplementationOnce(() => {
      return [null, { width: 1200 }]; // Mock returning a large width, so that isCompactMode is false, so that RowsPerPage is rendered
    });

    const rowsPerPageOptionsRandomOrder = [200, 10, 25, 40, 100, 55];
    const numericallySortedRowsPerPageOptions = [
      ...rowsPerPageOptionsRandomOrder,
    ].sort((a, b) => a - b);

    const wrapper = getWrapper({
      rowsPerPageOptions: [...rowsPerPageOptionsRandomOrder],
    });
    const instance = wrapper.root;

    const rowsPerPageProps = instance.findByType(RowsPerPage).props;

    expect(rowsPerPageProps.rowsPerPageOptions).toEqual(
      numericallySortedRowsPerPageOptions,
    );
  });
});
