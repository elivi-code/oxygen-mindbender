import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../__tests__/renderWithTheme';
import { Pagination, PaginationProps } from './Pagination';

const paginationTranslations: PaginationProps['translations'] = {
  rowsPerPage: 'Rows per page',
  prevPage: 'Previous page',
  numberOfPages: 'Number of pages',
  nextPage: 'Next page',
};

describe('Pagination', () => {
  it('should not render anything if totalResults is undefined', () => {
    const testId = 'PaginationTestId';
    const props: PaginationProps = {
      testId,
      loadingData: false,
      limit: 10,
      offset: 0,
      translations: paginationTranslations,
      onPaginationChange: jest.fn(),
    };

    renderWithTheme(<Pagination {...props} />);

    expect(screen.queryByTestId(testId)).toBeNull();
  });

  it('should render pagination', () => {
    const testId = 'PaginationTestId';
    const props: PaginationProps = {
      testId,
      loadingData: false,
      limit: 10,
      offset: 0,
      totalResults: 100,
      translations: paginationTranslations,
      onPaginationChange: jest.fn(),
    };

    renderWithTheme(<Pagination {...props} />);

    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
