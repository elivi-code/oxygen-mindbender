import React, { useState, useEffect } from 'react';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';
import FilterList, { FilterType } from '@8x8/oxygen-filter-list';
import prettyPrint from './prettyPrint';

export function FilterListIsLoading({
  defaultFilters,
  filterDefinitions,
  showOperatorInFilterButton,
  toggleLoading,
}) {
  const [currentFilters, setCurrentFilters] =
    useState<FilterType[]>(defaultFilters);

  useEffect(() => {
    setCurrentFilters(prev =>
      prev.map(filter =>
        filter.id === 'Filter 1' || filter.id === 'Group Filter 1'
          ? { ...filter, isLoading: !toggleLoading }
          : filter,
      ),
    );
  }, [toggleLoading]);

  return (
    <>
      <Doc>
        <h2>Filter List with isLoading example</h2>
        <pre>
          {`import FilterList from '@8x8/oxygen-filter-list';

<FilterList
  currentFilters={currentFilters}
  filterDefinitions={filterDefinitions}
  defaultFilters={defaultFilters}
  onChange={setCurrentFilters}
  showOperatorInFilterButton={showOperatorInFilterButton}
/>`}
        </pre>
      </Doc>

      <ComponentSection block>
        <FilterList
          currentFilters={currentFilters}
          filterDefinitions={filterDefinitions}
          defaultFilters={defaultFilters}
          onChange={setCurrentFilters}
          showOperatorInFilterButton={showOperatorInFilterButton}
        />

        {prettyPrint(currentFilters, filterDefinitions, defaultFilters)}
      </ComponentSection>
    </>
  );
}

const filterDefinitions = [
  {
    id: 'Filter 1',
    label: 'IsLoading is true',
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
    ],
  },
  {
    id: 'Filter 2',
    label: 'IsLoading is false',
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
    ],
  },
  {
    id: 'Filter 3',
    label: 'IsLoading not defined',
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
    ],
  },
  {
    id: 'Group Filter 1',
    label: 'IsLoading is true Group Filter',
    isAlwaysVisible: true,
    values: [
      {
        value: 'Filter1',
        label: 'Filter1',
      },
    ],
    subFilters: {
      Filter1: {
        id: 'Filter1_1',
        label: 'Filter1 Option 1',
        name: 'Filter1_1',
        values: [
          {
            value: 'Filter1_1',
            label: 'Filter1_1',
          },
        ],
      },
    },
    subFilterOperators: {
      Filter1: [
        {
          value: 'is',
          label: 'is',
        },
        {
          value: 'isNot',
          label: "isn't",
        },
      ],
    },
  },
  {
    id: 'Group Filter 2',
    label: 'IsLoading is false Group Filter',
    isAlwaysVisible: true,
    values: [
      {
        value: 'Filter1',
        label: 'Filter1',
      },
    ],
    subFilters: {
      Filter1: {
        id: 'Filter1_1',
        label: 'Filter1 Option 1',
        name: 'Filter1_1',
        values: [
          {
            value: 'Filter1_1',
            label: 'Filter1_1',
          },
        ],
      },
    },
    subFilterOperators: {
      Filter1: [
        {
          value: 'is',
          label: 'is',
        },
        {
          value: 'isNot',
          label: "isn't",
        },
      ],
    },
  },
];

const defaultFilters = [
  {
    id: 'Filter 1',
    operator: {
      value: 'is',
      label: 'is',
    },
    isLoading: true,
    values: [
      {
        value: 'one',
        label: 'one',
      },
      {
        value: 'two',
        label: 'two',
      },
    ],
  },
  {
    id: 'Filter 2',
    operator: {
      value: 'is',
      label: 'is',
    },
    isLoading: false,
    values: [
      {
        value: 'one',
        label: 'one',
      },
      {
        value: 'two',
        label: 'two',
      },
    ],
  },
  {
    id: 'Filter 3',
    operator: {
      value: 'is',
      label: 'is',
    },
    values: [
      {
        value: 'one',
        label: 'one',
      },
      {
        value: 'two',
        label: 'two',
      },
    ],
  },
  {
    id: 'Group Filter 1',
    subFilterId: 'Filter1',
    operator: {
      value: 'is',
      label: 'is',
    },
    isLoading: true,
    values: [
      {
        value: 'Filter1_1',
        label: 'Filter1_1',
      },
    ],
  },
  {
    id: 'Group Filter 2',
    subFilterId: 'Filter1',
    operator: {
      value: 'is',
      label: 'is',
    },
    isLoading: false,
    values: [
      {
        value: 'Filter1_1',
        label: 'Filter1_1',
      },
    ],
  },
];

FilterListIsLoading.args = {
  filterDefinitions,
  defaultFilters,
  showOperatorInFilterButton: false,
  toggleLoading: false,
};

FilterListIsLoading.argTypes = {
  toggleLoading: {
    control: 'boolean',
    description:
      'Toggle to set Filter 1 / Group Filter 1 isLoading to false (true) or true (false)',
  },
};

FilterListIsLoading.storyName = 'isLoading';
