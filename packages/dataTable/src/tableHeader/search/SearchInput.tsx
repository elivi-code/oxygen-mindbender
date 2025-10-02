import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
  useMemo,
} from 'react';
import debounce from 'lodash.debounce';

import KeywordSearch, {
  SearchResultItemType,
} from '@8x8/oxygen-keyword-search';
import { FilterType } from '@8x8/oxygen-filter-list';
import { SearchParams, SearchTranslations } from '../tableHeaderIndex';

// when clicking outside of oxygen KeywordSearch without applying the search it resets the search value to the previously applied one
// but it does not do that for the search results / search result count so we need to handle that ourselves
interface ResultsState {
  applied: SearchResultItemType[];
  temporary?: SearchResultItemType[];
}

interface TotalResultsState {
  applied?: number;
  temporary?: number;
}

interface SearchInputProps {
  filters?: FilterType[];
  resultsSizeLimit?: number;
  appliedSearchValue?: string;
  initialSearchResults?: SearchResultItemType[];
  listTotalResults?: number;
  searchTranslations: SearchTranslations;
  onSearchResultSelect: (item: SearchResultItemType) => void;
  onSearchResultsChange?: (results: SearchResultItemType[]) => void;
  onSearchChange: (searchValue: string) => void;
  getSearchResults: (
    params: SearchParams,
  ) => Promise<{ data: SearchResultItemType[]; totalResults: number }>;
  onDataRetrievalError: () => void;
  testId?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  filters,
  resultsSizeLimit = 8,
  listTotalResults,
  initialSearchResults,
  appliedSearchValue = '',
  searchTranslations,
  getSearchResults,
  onSearchResultSelect,
  onSearchChange,
  onDataRetrievalError,
  onSearchResultsChange,
  testId = 'search-input',
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState<ResultsState>({
    applied: initialSearchResults || [],
  });
  const [totalResultsCount, setTotalResultsCount] = useState<TotalResultsState>(
    {},
  );
  const [isLoading, setIsLoading] = useState(false);
  // initialMount prevents the component from calling the API when it mounts.
  const initialMount = useRef(true);
  const prevSearchValue = useRef('');

  const onClear = useCallback(() => {
    onSearchChange('');
    setSearchValue('');
    setTotalResultsCount({ applied: listTotalResults, temporary: undefined });
    setResults({ applied: [], temporary: undefined });
  }, [listTotalResults, onSearchChange]);

  // this gets called by the oxygen KeywordSearch component when the input gets blurred and the search value
  // is returned to the applied search value, we need to reset the results and count to the applied values
  const onFetchSearchResults = useCallback(() => {
    setSearchValue('');
    setResults(prevResults => ({ ...prevResults, temporary: undefined }));
    setTotalResultsCount(prevResults => ({
      ...prevResults,
      temporary: undefined,
    }));
  }, []);
  const searchResultsCount = useMemo(() => {
    if (!searchValue) {
      return listTotalResults;
    }

    return totalResultsCount.temporary ?? totalResultsCount.applied;
  }, [
    listTotalResults,
    searchValue,
    totalResultsCount.applied,
    totalResultsCount.temporary,
  ]);

  const onViewAllResults = useCallback(
    (value: string) => {
      // if we have no results for the search don't apply it to the list as it will show an empty list
      if (!totalResultsCount.temporary) {
        return;
      }

      onSearchChange(value);
      setResults(prevResults => ({
        applied: prevResults.temporary || prevResults.applied,
        temporary: undefined,
      }));
      setTotalResultsCount(prevResults => ({
        applied: prevResults.temporary,
        temporary: undefined,
      }));
    },
    [onSearchChange, totalResultsCount.temporary],
  );

  const keywordSearchOnSearchChange = useMemo(
    () => debounce(setSearchValue, 250),
    [setSearchValue],
  );

  useEffect(() => {
    const getResults = async () => {
      if (!searchValue) {
        return;
      }

      // Loading state should be visible only when the search string is updated
      if (prevSearchValue.current !== searchValue) {
        setIsLoading(true);
        prevSearchValue.current = searchValue;
      }

      try {
        const { data, totalResults } = await getSearchResults({
          search: searchValue,
          filters,
          offset: 0,
          limit: resultsSizeLimit,
        });

        setResults(prevResults => ({ ...prevResults, temporary: data }));
        setTotalResultsCount(prevResults => ({
          ...prevResults,
          temporary: totalResults,
        }));
      } catch (err) {
        setResults(prevResults => ({ ...prevResults, temporary: [] }));
        setTotalResultsCount(prevTotalResults => ({
          ...prevTotalResults,
          temporary: 0,
        }));
        onDataRetrievalError();
      }
      setIsLoading(false);
    };

    if (!initialMount.current) {
      getResults();
    }
    initialMount.current = false;
  }, [
    filters,
    searchValue,
    resultsSizeLimit,
    onDataRetrievalError,
    setResults,
    setTotalResultsCount,
    getSearchResults,
  ]);

  useEffect(() => {
    onSearchResultsChange?.(results.applied);
  }, [onSearchResultsChange, results.applied]);

  return (
    <KeywordSearch
      testId={testId}
      size="default"
      onFetchSearchResults={onFetchSearchResults}
      storedSearchValue={appliedSearchValue}
      onSearchResultSelect={onSearchResultSelect}
      isLoading={isLoading}
      onSearchChange={keywordSearchOnSearchChange}
      onViewAllResults={onViewAllResults}
      searchResultsCount={searchResultsCount || 0}
      searchResults={results.temporary || results.applied}
      searchResultsSizeLimit={resultsSizeLimit}
      onClear={onClear}
      translations={searchTranslations}
    />
  );
};

export { SearchInput, SearchInputProps };
