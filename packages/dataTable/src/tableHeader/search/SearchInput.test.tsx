import React from 'react';
import KeyWordSearch from '@8x8/oxygen-keyword-search';
import { waitFor } from '@testing-library/react';
import { renderWithTheme } from '../../__tests__/renderWithTheme';
import { TableHeaderProps } from '../TableHeader';
import { SearchInput } from './SearchInput';
import { createMockSearchTranslations } from '../../__tests__/createMockSearchTranslations';

jest.mock('@8x8/oxygen-keyword-search', () => ({
  __esModule: true,
  default: jest.fn(() => null),
}));
jest.unmock('./SearchInput');

const KeywordSearchMock = KeyWordSearch as jest.Mock;

type SearchInputType = NonNullable<TableHeaderProps['searchInput']>;
const createSearchInput = (): SearchInputType => ({
  appliedSearchValue: 'searchValue',
  initialSearchResults: [],
  searchTranslations: createMockSearchTranslations(),
  resultsSizeLimit: 10,
  getSearchResults: jest.fn(),
  onSearchResultSelect: jest.fn(),
  onSearchResultsChange: jest.fn(),
  onSearchChange: jest.fn(),
  onDataRetrievalError: jest.fn(),
});

describe('SearchInput', () => {
  beforeEach(() => {
    KeywordSearchMock.mockClear();
  });

  it('should not call getSearchResults() on initial mount', async () => {
    const searchInput = {
      ...createSearchInput(),
      getSearchResults: jest
        .fn()
        .mockResolvedValue({ data: [], totalResults: 0 }),
    };

    renderWithTheme(<SearchInput {...searchInput} />);

    expect(KeywordSearchMock).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      expect(searchInput.getSearchResults).not.toHaveBeenCalled();
    });
  });

  it('should call getSearchResults on KeywordSearch.onSearchChange', async () => {
    const searchInput = createSearchInput();

    renderWithTheme(<SearchInput {...searchInput} />);

    // programatically call KeywordSearch.onSearchChange
    expect(KeywordSearchMock).toHaveBeenCalledTimes(1);
    const props = KeywordSearchMock.mock.lastCall[0];

    props.onSearchChange('searchValue');

    await waitFor(() => {
      expect(searchInput.getSearchResults).toHaveBeenCalledTimes(1);
      expect(searchInput.getSearchResults).toHaveBeenCalledWith({
        search: 'searchValue',
        offset: 0,
        limit: searchInput.resultsSizeLimit,
      });
    });
  });
});
