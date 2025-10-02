import React, { useState } from 'react';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';
import FilterList, { FilterType } from '@8x8/oxygen-filter-list';
import { argsConfig, wait, fillArray } from './config';
import prettyPrint from './prettyPrint';

const PAGE = 10;
const getSearchSuggestions = async (filterId, filterSearch, pageKey) => {
  await wait(1000);

  const content = fillArray(filterId);

  // If there's a search filter, filter the content
  const searchedContent = String(filterSearch)
    ? content.filter(item => item.label?.includes(String(filterSearch)))
    : content;

  const returnObject = {
    content: searchedContent.slice(pageKey, pageKey + PAGE),
    lastPage: searchedContent.length / PAGE <= pageKey,
  };

  return returnObject;
};

export function FilterListSearchInput({
  defaultFilters,
  filterDefinitions,
  defaultFiltersRemote,
  filterDefinitionsRemote,
  hasGlobalApplyButton,
}) {
  const [currentFilters, setCurrentFilters] =
    useState<FilterType[]>(defaultFilters);
  const [currentFiltersRemote, setCurrentFiltersRemote] =
    useState<FilterType[]>(defaultFiltersRemote);

  return (
    <>
      <Doc>
        <h1>
          This example page showcases the different conditions when the Search
          input is rendered
        </h1>
        <h2>Local data</h2>
        <p>
          By default the Search input is rendered when there are more than 10
          items in one filter.
        </p>
        <p>
          This can be overridden on a per-filter basis via the{' '}
          <code>showSearchInput</code>
          option which can be used to force showing of the Search input (
          <code>showSearchInput: true</code>) when there are less than 10 items,
          or force not showing (<code>showSearchInput: false</code>) it when
          there are more than 10 items.
        </p>
        <p>
          The <code>allowFreeformSuggestions</code> filter property enables the
          Search input as otherwise the user does not have where to type. This
          does not allow you to override the the visibility via{' '}
          <code>showSearchInput: false</code>
        </p>
      </Doc>

      <ComponentSection block>
        <FilterList
          currentFilters={currentFilters}
          filterDefinitions={filterDefinitions}
          defaultFilters={defaultFilters}
          hasGlobalApplyButton={hasGlobalApplyButton}
          onChange={setCurrentFilters}
        />

        {prettyPrint(currentFilters, filterDefinitions, defaultFilters)}
      </ComponentSection>

      <Doc>
        <h2>
          Remote data through <code>getSearchSuggestions</code>
        </h2>

        <p>
          The <code>getSearchSuggestions</code> prop can be defined at the{' '}
          <code>FilterList</code> component level. When this is defined all
          filters show the Search input as most API&apos;s would want to allow a
          search parameter
        </p>

        <p>
          In this particular case you can still override the visibility of the
          search field via <code>showSearchInput: false</code>
        </p>
      </Doc>
      <ComponentSection block>
        <FilterList
          currentFilters={currentFiltersRemote}
          filterDefinitions={filterDefinitionsRemote}
          defaultFilters={defaultFiltersRemote}
          hasGlobalApplyButton={hasGlobalApplyButton}
          onChange={setCurrentFiltersRemote}
          getSearchSuggestions={getSearchSuggestions}
        />

        {prettyPrint(
          currentFiltersRemote,
          filterDefinitionsRemote,
          defaultFiltersRemote,
        )}
      </ComponentSection>
    </>
  );
}

const filterDefinitions = [
  {
    id: 'no_search_input',
    label: 'Does not show Search Input',
    isAlwaysVisible: true,
    operators: [
      {
        value: 'is',
        label: 'is',
      },
    ],
    values: [
      {
        value: 'one',
        label: 'one',
      },
      {
        value: 'two',
        label: 'two',
      },
      {
        value: 'three',
        label: 'three',
      },
    ],
  },
  {
    id: 'show_search_input',
    label: 'Show Search Input (11 items)',
    isAlwaysVisible: true,
    operators: [
      {
        value: 'is',
        label: 'is',
      },
    ],
    values: [
      {
        value: 'zero',
        label: 'zero',
      },
      {
        value: 'one',
        label: 'one',
      },
      {
        value: 'two',
        label: 'two',
      },
      {
        value: 'three',
        label: 'three',
      },
      {
        value: 'four',
        label: 'four',
      },
      {
        value: 'five',
        label: 'five',
      },
      {
        value: 'six',
        label: 'six',
      },
      {
        value: 'seven',
        label: 'seven',
      },
      {
        value: 'eight',
        label: 'eight',
      },
      {
        value: 'nine',
        label: 'nine',
      },
      {
        value: 'ten',
        label: 'ten',
      },
    ],
  },
  {
    id: 'force_search_input',
    label: 'showSearchInput=true option',
    isAlwaysVisible: true,
    showSearchInput: true,
    operators: [
      {
        value: 'is',
        label: 'is',
      },
    ],
    values: [
      {
        value: 'one',
        label: 'one',
      },
      {
        value: 'two',
        label: 'two',
      },
      {
        value: 'three',
        label: 'three',
      },
    ],
  },
  {
    id: 'force_search_input_false',
    label: 'showSearchInput=false option',
    isAlwaysVisible: true,
    showSearchInput: false,
    operators: [
      {
        value: 'is',
        label: 'is',
      },
    ],
    values: [
      {
        value: 'zero',
        label: 'zero',
      },
      {
        value: 'one',
        label: 'one',
      },
      {
        value: 'two',
        label: 'two',
      },
      {
        value: 'three',
        label: 'three',
      },
      {
        value: 'four',
        label: 'four',
      },
      {
        value: 'five',
        label: 'five',
      },
      {
        value: 'six',
        label: 'six',
      },
      {
        value: 'seven',
        label: 'seven',
      },
      {
        value: 'eight',
        label: 'eight',
      },
      {
        value: 'nine',
        label: 'nine',
      },
      {
        value: 'ten',
        label: 'ten',
      },
    ],
  },
  {
    id: 'allow_freeform',
    label: 'allowFreeformSuggestions prop',
    isAlwaysVisible: true,
    allowFreeformSuggestions: true,
    showSearchInput: false, // This will not override allowFreeformSuggestions
    operators: [
      {
        value: 'is',
        label: 'is',
      },
    ],
    values: [
      {
        value: 'one',
        label: 'one',
      },
      {
        value: 'two',
        label: 'two',
      },
      {
        value: 'three',
        label: 'three',
      },
    ],
  },
];
const defaultFilters = [
  {
    id: 'no_search_input',
    operator: {
      value: 'is',
      label: 'is',
    },
  },
  {
    id: 'show_search_input',
    operator: {
      value: 'is',
      label: 'is',
    },
  },
  {
    id: 'force_search_input',
    operator: {
      value: 'is',
      label: 'is',
    },
  },
  {
    id: 'force_search_input_false',
    operator: {
      value: 'is',
      label: 'is',
    },
  },
  {
    id: 'allow_freeform',
    operator: {
      value: 'is',
      label: 'is',
    },
  },
];

const filterDefinitionsRemote = [
  {
    id: 'get_search_suggestions',
    label: 'Standard getSearchSuggestions',
    isAlwaysVisible: true,
    operators: [
      {
        value: 'is',
        label: 'is',
      },
    ],
    values: [],
  },
  {
    id: 'get_search_suggestions_no_search_input',
    label: 'getSearchSuggestions no search input',
    isAlwaysVisible: true,
    showSearchInput: false,
    operators: [
      {
        value: 'is',
        label: 'is',
      },
    ],
    values: [],
  },
];
const defaultFiltersRemote = [
  {
    id: 'get_search_suggestions',
    operator: {
      value: 'is',
      label: 'is',
    },
  },
  {
    id: 'get_search_suggestions_no_search_input',
    operator: {
      value: 'is',
      label: 'is',
    },
  },
];

FilterListSearchInput.args = {
  ...argsConfig,
  filterDefinitions,
  defaultFilters,
  filterDefinitionsRemote,
  defaultFiltersRemote,
};

FilterListSearchInput.storyName = 'search input options';
