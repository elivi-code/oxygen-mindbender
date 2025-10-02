import React, { useState } from 'react';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';
import FilterList, { FilterType } from '@8x8/oxygen-filter-list';
import { dateTimeRangeFilter } from './config';
import prettyPrint from './prettyPrint';

const defaultDateTime = {
  id: 'DATE_RANGE',
  label: 'Date Range',
  operator: {
    value: 'dateRange',
    label: 'is',
  },
  values: [
    {
      isEndTimeValid: true,
      dateRange: {
        startDate: '"2024-02-05T22:00:00.000Z"',
        endDate: '"2024-03-17T21:59:00.000Z"',
      },
      predefinedRange: {
        id: 'CUSTOM',
      },
      label: '02/06/2024 12:00 AM - 03/17/2024 11:59 PM',
    },
  ],
};

export function FilterListDateTimeRange(args) {
  const [currentFilters, setCurrentFilters] = useState<FilterType[]>(
    args.initialFilters,
  );

  return (
    <>
      <Doc>
        <h2>Filter list Date Time Range example </h2>
        <pre>
          {`import FilterList from '@8x8/oxygen-filter-list';

<FilterList
  currentFilters={currentFilters}
  filterDefinitions={[dateTimeRangeFilter]}
  onChange={setCurrentFilters}
  showOperatorInFilterButton={showOperatorInFilterButton}
/>`}
        </pre>
      </Doc>

      <ComponentSection block>
        <FilterList
          currentFilters={currentFilters}
          filterDefinitions={args.filterDefinitions}
          onChange={setCurrentFilters}
          showOperatorInFilterButton={args.showOperatorInFilterButton}
        />

        {prettyPrint(currentFilters, args.filterDefinitions, [])}
      </ComponentSection>
    </>
  );
}

FilterListDateTimeRange.args = {
  filterDefinitions: [dateTimeRangeFilter],
  initialFilters: [defaultDateTime],
  showOperatorInFilterButton: true,
};

FilterListDateTimeRange.storyName = 'DateTimeRange';
