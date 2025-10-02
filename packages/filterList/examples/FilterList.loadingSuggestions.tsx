import React, { useState } from 'react';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';
import FilterList, {
  FilterValueObjectType,
  FilterType,
  FilterDefinitionType,
  type FilterListInterface,
} from '@8x8/oxygen-filter-list';
import {
  generateFilterDefinitions,
  stringOperators,
  wait,
  fillArray,
} from './config';
import prettyPrint from './prettyPrint';

const PAGE = 20;

const generateOptions =
  ({
    includeDuplicates,
  }: {
    includeDuplicates: boolean;
  }): FilterListInterface['getSearchSuggestions'] =>
  async (filterId, filterSearch, pageKey) => {
    await wait(1000);

    const content: FilterValueObjectType[] = fillArray(filterId);

    // If there's a search filter, filter the content
    const searchedContent = String(filterSearch)
      ? content.filter(item => item.label?.includes(String(filterSearch)))
      : content;

    // for easier dubugging lets duplicate all entries
    const finalContent = includeDuplicates
      ? searchedContent.flatMap(item => [item, item])
      : searchedContent;

    const returnObject = {
      content: finalContent.slice(pageKey, pageKey + PAGE),
      lastPage: finalContent.length / PAGE <= pageKey,
    };

    return returnObject;
  };

const generateOptionsFailing: FilterListInterface['getSearchSuggestions'] =
  async () => {
    await wait(1000);

    throw new Error(`Failed to fetch suggestion`);
  };

export const FilterListLoadingSuggestions = args => {
  const [currentFilters, setCurrentFilters] = useState<FilterType[]>([]);

  const definitions: FilterDefinitionType[] = args.filterDefinitions.map(
    def => ({
      ...def,
      allowFreeformSuggestions: args.allowFreeformSuggestions,
    }),
  );

  return (
    <>
      <Doc>
        <h2>Filter List with loading suggestions example</h2>
        <pre>
          {`import FilterList from '@8x8/oxygen-filter-list';

<FilterList
  currentFilters={currentFilters}
  filterDefinitions={filterDefinitions}
  getSearchSuggestions={generateOptions}
  onChange={setCurrentFilters}
/>`}
        </pre>
      </Doc>

      <ComponentSection block>
        <FilterList
          currentFilters={currentFilters}
          filterDefinitions={definitions}
          getSearchSuggestions={
            args.shouldGetSuggestionsFail
              ? generateOptionsFailing
              : generateOptions({ includeDuplicates: args.includeDuplicates })
          }
          onChange={setCurrentFilters}
        />

        {prettyPrint(currentFilters, definitions, [])}
      </ComponentSection>
    </>
  );
};

FilterListLoadingSuggestions.args = {
  filterDefinitions: generateFilterDefinitions(1, 10, 0, stringOperators),
  allowFreeformSuggestions: false,
  shouldGetSuggestionsFail: false,
  includeDuplicates: false,
};

FilterListLoadingSuggestions.storyName = 'LoadingSuggestions';
