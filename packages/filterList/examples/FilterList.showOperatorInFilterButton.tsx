import React, { useState } from 'react';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';
import FilterList, { FilterType } from '@8x8/oxygen-filter-list';
import {
  generateFilterDefinitions,
  stringOperators,
  generateSelectedFilters,
} from './config';
import prettyPrint from './prettyPrint';

export function FilterListShowOperatorInFilterButton(args) {
  const [currentFilters, setCurrentFilters] = useState<FilterType[]>(
    args.defaultFilters,
  );

  return (
    <>
      <Doc>
        <h2>Filter List with show operator in filter button example</h2>
        <pre>
          {`import FilterList from '@8x8/oxygen-filter-list';

<FilterList
  currentFilters={currentFilters}
  filterDefinitions={filterDefinitions}
  onChange={onChange}
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

        {prettyPrint(
          currentFilters,
          args.filterDefinitions,
          args.defaultFilters,
        )}
      </ComponentSection>
    </>
  );
}

const stringFilterDefinitions = generateFilterDefinitions(
  1,
  3,
  3,
  stringOperators,
  true,
);

const defaultFilters = generateSelectedFilters(stringFilterDefinitions, 2, 0);

FilterListShowOperatorInFilterButton.args = {
  filterDefinitions: stringFilterDefinitions,
  showOperatorInFilterButton: true,
  defaultFilters,
};

FilterListShowOperatorInFilterButton.storyName = 'showOperatorInFilterButton';
