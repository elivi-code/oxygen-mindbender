import React, { useState } from 'react';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';
import FilterList, {
  FilterType,
  FilterDefinitionType,
} from '@8x8/oxygen-filter-list';
import { dateTimeRangeFilter } from './config';
import prettyPrint from './prettyPrint';

const dateFilterDefinitions: FilterDefinitionType[] = [
  {
    ...dateTimeRangeFilter,
    id: 'PREDEFINED_DATE_FILTER',
    label: 'Predefined Date Filter',
  },
  {
    ...dateTimeRangeFilter,
    id: 'CUSTOM_DATE_FILTER',
    label: 'Custom Date Filter',
  },
  {
    ...dateTimeRangeFilter,
    id: 'NO_DEFAULTS_DATE_FILTER',
    label: 'No Defaults Date Filter',
  },
];

const defaultFilters: FilterType[] = [
  {
    id: 'PREDEFINED_DATE_FILTER',
    operator: { value: 'dateRange', label: 'is' },
    values: [
      {
        predefinedRange: { id: 'LAST_X_DAYS', value: '7' },
        label: 'Last 7 Days',
      },
    ],
  },
  {
    id: 'CUSTOM_DATE_FILTER',
    operator: { value: 'dateRange', label: 'is' },
    values: [
      {
        dateRange: {
          startDate: '2024-01-01T00:00:00.000Z',
          endDate: '2024-01-31T23:59:59.999Z',
        },
        predefinedRange: { id: 'CUSTOM' },
        label: '01/01/2024 12:00 AM - 01/31/2024 11:59 PM',
      },
    ],
  },
];

export function FilterListDateRangeDefaults() {
  const [currentFilters, setCurrentFilters] = useState<FilterType[]>([]);

  return (
    <>
      <Doc>
        <h2>Date Range Filters with Defaults</h2>
        <pre>
          {`import FilterList from '@8x8/oxygen-filter-list';

<FilterList
  currentFilters={currentFilters}
  filterDefinitions={stringFilterDefinitions}
  defaultFilters={baseFilters}
  onChange={onChange}
/>`}
        </pre>
      </Doc>

      <ComponentSection block>
        <FilterList
          currentFilters={currentFilters}
          filterDefinitions={dateFilterDefinitions}
          defaultFilters={defaultFilters}
          onChange={setCurrentFilters}
        />
        {prettyPrint(currentFilters, dateFilterDefinitions, defaultFilters)}
      </ComponentSection>
    </>
  );
}

FilterListDateRangeDefaults.storyName = 'DateRangeDefaults';
