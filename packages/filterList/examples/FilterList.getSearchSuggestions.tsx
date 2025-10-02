import React, { useState } from 'react';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';
import FilterList, {
  FilterValueObjectType,
  FilterType,
  FilterDefinitionType,
} from '@8x8/oxygen-filter-list';
import { generateFilterDefinitions } from './config';
import prettyPrint from './prettyPrint';

async function wait(time: number) {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve(0);
    }, time);
  });
}

const fillArray = (
  filterId: string,
  arrayLength = 1000,
): FilterValueObjectType[] => {
  return Array.from({ length: arrayLength }, (_, i) => {
    return {
      value: `${filterId}_${i}`,
      label: `${filterId}_${i}`,
    };
  });
};

const PAGE_SIZE = 10;
const FILTER_DEFINITIONS: FilterDefinitionType[] = [
  {
    id: 'pbx',
    label: 'PBX',
    title: 'PBX',
    operators: [
      {
        value: 'boolean',
        label: 'Is',
      },
    ],
    isAlwaysVisible: true,
    values: [],
  },
  {
    id: 'userNameExtension',
    label: 'User name',
    title: 'User name',
    operators: [
      {
        value: 'is',
        label: 'Is',
      },
    ],
    isAlwaysVisible: true,
    values: [],
  },
  {
    id: 'currentStatus',
    label: 'User Status RT',
    title: 'User Status RT',
    operators: [
      {
        value: 'is',
        label: 'Is',
      },
    ],
    isAlwaysVisible: true,
    values: [],
  },
];
const DEFAULT_FILTERS: FilterType[] = [
  {
    id: 'pbx',
    label: 'PBX',
    operator: {
      value: 'boolean',
      label: 'Is',
    },
    values: [
      {
        label: '8x8',
        value: '252509770621135977884589294032',
      },
    ],
  },
  {
    id: 'userNameExtension',
    label: 'User name',
    operator: {
      value: 'is',
      label: 'Is',
    },
    values: [],
  },
  {
    id: 'currentStatus',
    label: 'User Status RT',
    operator: {
      value: 'is',
      label: 'Is',
    },
    values: [],
  },
];

const getSearchSuggestions = async (filterId, searchValue, pageKeyOffset) => {
  await wait(100);

  const content: FilterValueObjectType[] = fillArray(filterId);

  // If there's a search filter, filter the content
  const searchedContent = String(searchValue)
    ? content.filter(item => item.label?.includes(String(searchValue)))
    : content;

  // for easier dubugging lets duplicate all entries
  const finalContent = searchedContent;

  const result = {
    content: finalContent.slice(pageKeyOffset, pageKeyOffset + PAGE_SIZE),
    lastPage: finalContent.length / PAGE_SIZE <= pageKeyOffset,
  };

  console.log('getSearchSuggestions return', result);

  return result;
};

export const FilterListGetSearchSuggestions = args => {
  const [currentFilters, setCurrentFilters] = useState<FilterType[]>([
    {
      id: 'pbx',
      label: 'PBX',
      operator: {
        value: 'boolean',
        label: 'Is',
      },
      values: [
        {
          label: '8x8',
          value: '252509770621135977884589294032',
        },
      ],
    },
    {
      id: 'userNameExtension',
      label: 'User name',
      operator: {
        value: 'is',
        label: 'Is',
      },
      values: [],
    },
    {
      id: 'currentStatus',
      label: 'User Status RT',
      operator: {
        value: 'is',
        label: 'Is',
      },
      values: [],
    },
  ]);

  return (
    <>
      <Doc>
        <h2>
          <code>FilterList</code> with <code>getSearchSuggestions</code> use
          case test
        </h2>
      </Doc>

      <ComponentSection block>
        <FilterList
          currentFilters={currentFilters}
          filterDefinitions={FILTER_DEFINITIONS}
          defaultFilters={DEFAULT_FILTERS}
          getSearchSuggestions={getSearchSuggestions}
          onChange={setCurrentFilters}
          searchSuggestionKeyOffset={PAGE_SIZE}
        />

        {prettyPrint(currentFilters, FILTER_DEFINITIONS, DEFAULT_FILTERS)}
      </ComponentSection>
    </>
  );
};

FilterListGetSearchSuggestions.args = {
  filterDefinitions: generateFilterDefinitions(1, 3, 0, [
    {
      value: 'is',
      label: 'is',
    },
  ]),
  allowFreeformSuggestions: false,
  includeDuplicates: false,
};

FilterListGetSearchSuggestions.storyName = 'getSearchSuggestions';
