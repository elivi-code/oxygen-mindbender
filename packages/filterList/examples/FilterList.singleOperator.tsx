import React, { useState } from 'react';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';
import FilterList, { OperatorType, FilterType } from '@8x8/oxygen-filter-list';

import { generateFilterDefinitions, generateSelectedFilters } from './config';
import prettyPrint from './prettyPrint';

export function FilterListWithSingleOperatorFilters(args) {
  const [currentFilters, setCurrentFilters] = useState<FilterType[]>(
    args.defaultFilters,
  );

  return (
    <>
      <Doc>
        <h2>Filter List with single operator example</h2>
        <pre>
          {`import FilterList from '@8x8/oxygen-filter-list';

<FilterList
  currentFilters={currentFilters}
  filterDefinitions={alwaysVisibleFilters}
  onChange={setCurrentFilters}
  hasGlobalApplyButton
/>`}
        </pre>
      </Doc>

      <ComponentSection block>
        <FilterList
          currentFilters={currentFilters}
          filterDefinitions={args.filterDefinitions}
          onChange={setCurrentFilters}
        />

        {prettyPrint(
          currentFilters,
          args.filterDefinitions,
          args.defaultFilters,
        )}
      </ComponentSection>
    </>
  );
}

const singleOperator: OperatorType[] = [
  {
    value: 'is',
    label: 'is',
  },
];

const filterDefinitions = generateFilterDefinitions(
  1,
  2,
  10,
  singleOperator,
  true,
);
const defaultFilters = generateSelectedFilters(filterDefinitions, 2, 5);

FilterListWithSingleOperatorFilters.args = {
  filterDefinitions,
  defaultFilters,
};

FilterListWithSingleOperatorFilters.storyName = 'Single Operator';
