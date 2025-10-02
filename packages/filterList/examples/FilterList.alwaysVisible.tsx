import React, { useState } from 'react';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';
import FilterList from '@8x8/oxygen-filter-list';

import {
  generateFilterDefinitions,
  generateSelectedFilters,
  stringOperators,
} from './config';
import prettyPrint from './prettyPrint';

export function FilterListWithAlwaysVisibleFilters(args) {
  const [currentFilters, setCurrentFilters] = useState(args.initialFilters);

  return (
    <>
      <Doc>
        <h2>Filter List With Always visible (not deletable) filters example</h2>
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
          hasGlobalApplyButton
        />

        {prettyPrint(currentFilters, args.filterDefinitions, [])}
      </ComponentSection>
    </>
  );
}

const alwaysVisibleFilters = generateFilterDefinitions(
  1,
  2,
  10,
  stringOperators,
  true,
);

const baseFilters = generateSelectedFilters(alwaysVisibleFilters, 2, 5);

FilterListWithAlwaysVisibleFilters.args = {
  filterDefinitions: alwaysVisibleFilters,
  initialFilters: baseFilters,
};

FilterListWithAlwaysVisibleFilters.storyName = 'AlwaysVisibleFilters';
