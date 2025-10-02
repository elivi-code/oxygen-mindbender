import React, { useState } from 'react';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';
import FilterList, { FilterType } from '@8x8/oxygen-filter-list';
import { generateFilterDefinitions, stringOperators } from './config';
import prettyPrint from './prettyPrint';

export function FilterListWithEmptyFilter(args) {
  const [currentFilters, setCurrentFilters] = useState<FilterType[]>([]);

  return (
    <>
      <Doc>
        <h2>Filter List With empty filter example</h2>
        <pre>
          {`import FilterList from '@8x8/oxygen-filter-list';

<FilterList
  currentFilters={currentFilters}
  filterDefinitions={filterDefinitions}
  onChange={onChange}
  emptyFilterAllowed
/>`}
        </pre>
      </Doc>

      <ComponentSection block>
        <FilterList
          currentFilters={currentFilters}
          filterDefinitions={args.filterDefinitions}
          onChange={setCurrentFilters}
          emptyFilterAllowed
        />

        {prettyPrint(currentFilters, args.filterDefinitions, [])}
      </ComponentSection>
    </>
  );
}

const stringFilterDefinitions = generateFilterDefinitions(
  1,
  10,
  20,
  stringOperators,
);

FilterListWithEmptyFilter.args = {
  filterDefinitions: stringFilterDefinitions,
};

FilterListWithEmptyFilter.storyName = 'emptyFilterAllowed';
