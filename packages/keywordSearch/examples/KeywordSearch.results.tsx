import React, { useState } from 'react';
import noop from 'lodash.noop';

import {
  Doc,
  ComponentSection,
  Section,
  ComponentItem,
  Label,
} from '@8x8/oxygen-storybook-utils';
import KeywordSearch, { KeywordSearchProps } from '@8x8/oxygen-keyword-search';
import { argsConfig, argTypesConfig } from './config';

const KeywordSearchConsumer = (args: KeywordSearchProps) => {
  const [searchResults, setSearchResults] = useState(args.searchResults);
  const [isLoading, setIsLoading] = useState(false);
  const [storedSearchValue, setStoredSearchValue] = useState('');
  const searchResultsCount = searchResults.length;
  let searchTimeout: NodeJS.Timeout;

  const setNewSearchResults = (value: string) => {
    const filteredResults = args.searchResults.filter(searchResult =>
      Object.values(searchResult).some(item =>
        item.toLowerCase().includes(value.toLowerCase()),
      ),
    );

    setSearchResults(filteredResults);
  };

  const handleSearchChange = (value: string) => {
    clearTimeout(searchTimeout);

    setIsLoading(true);

    searchTimeout = setTimeout(() => {
      setNewSearchResults(value);
      setIsLoading(false);
    }, 500);
  };

  const handleClear = () => {
    setStoredSearchValue('');
    setSearchResults(args.searchResults);
  };

  return (
    <KeywordSearch
      {...args}
      testId="keyword-search"
      onSearchChange={handleSearchChange}
      onViewAllResults={setStoredSearchValue}
      onSearchResultSelect={noop}
      onClear={handleClear}
      searchResults={searchResults}
      searchResultsCount={searchResultsCount}
      storedSearchValue={storedSearchValue}
      isLoading={isLoading}
      onFetchSearchResults={setNewSearchResults}
    />
  );
};

export const KeywordSearchResults = args => (
  <>
    <Doc>
      <h1>
        <code>KeywordSearch</code> search results
      </h1>
    </Doc>
    <Section>
      <ComponentSection>
        <ComponentItem width="50%">
          <Label>Multiple search results</Label>
          <KeywordSearchConsumer {...args} />
        </ComponentItem>
        <ComponentItem width="50%">
          <Label>No search results.</Label>
          <KeywordSearchConsumer
            {...args}
            searchResults={[]}
            searchResultsCount={0}
          />
        </ComponentItem>
        <ComponentItem width="50%">
          <Label>Search results size limit = 4</Label>
          <KeywordSearchConsumer {...args} searchResultsSizeLimit={4} />
        </ComponentItem>
      </ComponentSection>
    </Section>
  </>
);

KeywordSearchResults.storyName = 'KeywordSearch results';
KeywordSearchResults.args = argsConfig;
KeywordSearchResults.argTypes = argTypesConfig;
