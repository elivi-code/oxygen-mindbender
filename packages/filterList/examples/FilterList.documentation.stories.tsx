import React, { useState } from 'react';
import { ComponentSection, Doc } from '@8x8/oxygen-storybook-utils';
import FilterList, { FilterType } from '@8x8/oxygen-filter-list';
import { generateFilterDefinitions, stringOperators } from './config';
import CHANGELOG from '../CHANGELOG.md?raw';
import README from '../README.md?raw';

export function FilterDocumentation(args) {
  const [currentFilters, setCurrentFilters] = useState<FilterType[]>([]);

  return (
    <>
      <Doc markdown>{README}</Doc>

      <ComponentSection>
        <FilterList
          currentFilters={currentFilters}
          filterDefinitions={args.filterDefinitions}
          onChange={setCurrentFilters}
        />
      </ComponentSection>
      <Doc markdown>{CHANGELOG}</Doc>
    </>
  );
}

FilterDocumentation.storyName = 'Documentation';
FilterDocumentation.args = {
  filterDefinitions: generateFilterDefinitions(1, 10, 20, stringOperators),
};

export default {
  title: 'Components/FilterList [beta]',
};
