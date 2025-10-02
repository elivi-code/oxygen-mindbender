import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../__tests__/renderWithTheme';
import { TableHeader, TableHeaderProps } from '../TableHeader';

import { ToggleFiltersButton } from '../filters/ToggleFiltersButton';
import { createMockSearchTranslations } from '../../__tests__/createMockSearchTranslations';

jest.mock('../filters/Filters', () => ({
  Filters: () => <div>Mock Filters</div>,
}));
jest.mock('../filters/ToggleFiltersButton', () => ({
  ToggleFiltersButton: jest.fn().mockImplementation(props => (
    <button type="button" onClick={props.onClick}>
      MockButton
    </button>
  )),
}));
jest.mock('../search/SearchInput', () => ({
  SearchInput: () => <div>Mock Search Input</div>,
}));

const createMockFilter = () => {
  const filter: TableHeaderProps['filter'] = {
    filters: [],
    numActiveFilters: 2,
    filterDefinitions: [],
    onChange: jest.fn(),
  };

  return filter;
};

describe('TableHeader', () => {
  it('should render action items', () => {
    const actionItems = [
      <div key="ai1">Mock Action Item1</div>,
      <div key="ai2">Mock Action Item2</div>,
    ];

    renderWithTheme(<TableHeader actionItems={actionItems} />);

    expect(screen.getByText('Mock Action Item1')).toBeInTheDocument();
    expect(screen.getByText('Mock Action Item2')).toBeInTheDocument();
  });

  describe('SearchInput', () => {
    it('should render search input if searchInput prop is defined', () => {
      const testId = 'testId';
      const searchInput: TableHeaderProps['searchInput'] = {
        appliedSearchValue: 'searchValue',
        initialSearchResults: [],
        searchTranslations: createMockSearchTranslations(),
        resultsSizeLimit: 10,
        getSearchResults: jest.fn(),
        onSearchResultSelect: jest.fn(),
        onSearchResultsChange: jest.fn(),
        onSearchChange: jest.fn(),
        onDataRetrievalError: jest.fn(),
      };

      renderWithTheme(
        <TableHeader testId={testId} searchInput={searchInput} />,
      );

      expect(screen.getByText('Mock Search Input')).toBeInTheDocument();
    });

    it('should not render search input if searchInput prop is undefined', () => {
      renderWithTheme(<TableHeader />);

      expect(screen.queryByText('Mock Search Input')).toBeNull();
    });
  });

  describe('ToggleFiltersButton', () => {
    it('should render', () => {
      const testId = 'testId';
      const ToggleFiltersButtonMock = ToggleFiltersButton as jest.Mock;
      const filter = createMockFilter();

      ToggleFiltersButtonMock.mockClear();
      renderWithTheme(<TableHeader testId={testId} filter={filter} />);
      expect(ToggleFiltersButton).toHaveBeenCalledTimes(1);
      const arg = ToggleFiltersButtonMock.mock.lastCall[0];

      expect(arg).toMatchObject({
        numActiveFilters: filter.numActiveFilters,
        isActive: false,
        onClick: expect.any(Function),
        testId: `${testId}-filter-button`,
      });
    });

    it('should call toggleShowFilters on click', () => {
      const testId = 'testId';
      const ToggleFiltersButtonMock = ToggleFiltersButton as jest.Mock;
      const filter = createMockFilter();

      ToggleFiltersButtonMock.mockClear();
      renderWithTheme(<TableHeader testId={testId} filter={filter} />);
      const button = screen.getByText('MockButton');

      button.click();
      expect(ToggleFiltersButton).toHaveBeenCalledTimes(2); // 1st render + 1 click

      const arg = ToggleFiltersButtonMock.mock.lastCall[0];

      expect(arg).toMatchObject({
        numActiveFilters: filter.numActiveFilters,
        isActive: true, // toggled to true, on click
        onClick: expect.any(Function),
      });
    });
  });

  describe('ResultsLabel', () => {
    it('should not show results label if loadingTotalResults=true', () => {
      const testId = 'testId';
      const filter = createMockFilter();

      renderWithTheme(
        <TableHeader
          testId={testId}
          loadingTotalResults
          filter={filter}
          listTotalResults={3}
        />,
      );
      const resultsLabel = screen.getByTestId(`${testId}-results-label`);

      expect(resultsLabel).not.toBeVisible();
    });

    it('should not show results label if listTotalResults is undefined', () => {
      const testId = 'testId';
      const filter = createMockFilter();

      renderWithTheme(
        <TableHeader testId={testId} loadingTotalResults filter={filter} />,
      );
      const resultsLabel = screen.getByTestId(`${testId}-results-label`);

      expect(resultsLabel).not.toBeVisible();
    });

    it('should show results label if loadingTotalResults=false and listTotalResults is defined', () => {
      const testId = 'testId';
      const totalResultsMessage = 'Total filtered results';
      const listTotalResults = 3;
      const filter = createMockFilter();

      renderWithTheme(
        <TableHeader
          testId={testId}
          loadingTotalResults={false}
          filter={filter}
          listTotalResults={listTotalResults}
          totalResultsMessage={totalResultsMessage}
        />,
      );

      const resultsLabel = screen.getByTestId(`${testId}-results-label`);

      expect(resultsLabel).toBeVisible();
      expect(resultsLabel).toHaveTextContent(
        `${listTotalResults} ${totalResultsMessage}`,
      );
    });
  });
});
