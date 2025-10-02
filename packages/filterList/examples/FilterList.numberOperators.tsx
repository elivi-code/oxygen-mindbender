import React, { useState } from 'react';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';
import FilterList, { FilterType } from '@8x8/oxygen-filter-list';
import { generateFilterDefinitions, numberOperators } from './config';
import prettyPrint from './prettyPrint';

export function FilterListNumberOperators(args) {
  const [currentFilters, setCurrentFilters] = useState<FilterType[]>([]);

  return (
    <>
      <Doc>
        <h2>Filter List Number Operators example</h2>
        <pre>
          {`import FilterList from '@8x8/oxygen-filter-list';

<FilterList
  currentFilters={currentFilters}
  filterDefinitions={filterDefinitions}
  onChange={onChange}
/>`}
        </pre>
      </Doc>

      <ComponentSection block>
        <FilterList
          currentFilters={currentFilters}
          filterDefinitions={args.filterDefinitions}
          onChange={setCurrentFilters}
        />

        {prettyPrint(currentFilters, args.filterDefinitions, [])}
      </ComponentSection>
    </>
  );
}

const numberFilterDefinitions = generateFilterDefinitions(
  1,
  10,
  20,
  numberOperators,
);

FilterListNumberOperators.args = {
  filterDefinitions: numberFilterDefinitions,
};

FilterListNumberOperators.storyName = 'NumberOperators';
